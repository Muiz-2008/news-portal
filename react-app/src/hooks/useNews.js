import { useState, useEffect } from 'react'
import { articles as localArticles } from '../data/articles'

function filterLocal(all, category, query, max) {
  let result = all
  if (category && category !== 'general') {
    result = result.filter(a => a.category.toLowerCase() === category.toLowerCase())
  }
  if (query) {
    const q = query.toLowerCase()
    result = result.filter(
      a => a.title.toLowerCase().includes(q) || a.description.toLowerCase().includes(q)
    )
  }
  return result.slice(0, max)
}

export function useNews({ category = 'general', query = '', max = 9 } = {}) {
  const [articles, setArticles] = useState([])
  const [loading, setLoading]   = useState(true)
  const [error, setError]       = useState(null)

  useEffect(() => {
    setLoading(true)
    setError(null)

    const load = async () => {
      const apiKey = import.meta.env.VITE_NEWS_API_KEY

      if (apiKey) {
        try {
          const endpoint = query
            ? `https://gnews.io/api/v4/search?q=${encodeURIComponent(query)}&max=${max}&lang=en&token=${apiKey}`
            : `https://gnews.io/api/v4/top-headlines?category=${category}&max=${max}&lang=en&token=${apiKey}`

          const res = await fetch(endpoint)
          if (!res.ok) throw new Error(`API error ${res.status}`)
          const data = await res.json()

          const normalised = (data.articles || [])
            .filter(a => a.title)
            .map((a, i) => ({
              id:          `api-${i}-${Date.now()}`,
              title:       a.title,
              description: a.description || '',
              content:     a.content || a.description || '',
              author:      a.source?.name || 'News Desk',
              publishedAt: a.publishedAt,
              image:       a.image || 'https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=800&q=80',
              category,
              source:      a.source,
              url:         a.url,
            }))

          setArticles(normalised)
          setLoading(false)
          return
        } catch (err) {
          console.warn('GNews unavailable, using local data:', err.message)
        }
      }

      await new Promise(resolve => setTimeout(resolve, 500))
      setArticles(filterLocal(localArticles, category, query, max))
      setLoading(false)
    }

    load()
  }, [category, query, max])

  return { articles, loading, error }
}
