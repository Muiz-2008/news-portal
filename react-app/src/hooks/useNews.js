// useNews.js — custom React hook for fetching news
//
// A "hook" is a function that lets you use React features (like state)
// inside other components. Custom hooks let you reuse logic across pages.
//
// This hook:
//   1. Tries the GNews API if VITE_NEWS_API_KEY is set in the .env file
//   2. Falls back to our local articles.js data automatically
//   3. Returns { articles, loading, error } that any component can use

import { useState, useEffect } from 'react'
import { articles as localArticles } from '../data/articles'

// Filter helper — used when serving local data
function filterLocal(all, category, query, max) {
  let result = all

  // Filter by category (skip if "general" which means "all")
  if (category && category !== 'general') {
    result = result.filter(
      (a) => a.category.toLowerCase() === category.toLowerCase()
    )
  }

  // Filter by search query
  if (query) {
    const q = query.toLowerCase()
    result = result.filter(
      (a) =>
        a.title.toLowerCase().includes(q) ||
        a.description.toLowerCase().includes(q)
    )
  }

  return result.slice(0, max)
}

// The hook itself — call it like: const { articles, loading, error } = useNews({ category: 'sports' })
export function useNews({ category = 'general', query = '', max = 9 } = {}) {
  const [articles, setArticles] = useState([])
  const [loading, setLoading]   = useState(true)
  const [error, setError]       = useState(null)

  useEffect(() => {
    // Reset state whenever inputs change
    setLoading(true)
    setError(null)

    const load = async () => {
      const apiKey = import.meta.env.VITE_NEWS_API_KEY

      if (apiKey) {
        // ── Try live GNews API ──────────────────────────────────────────────
        try {
          const endpoint = query
            ? `https://gnews.io/api/v4/search?q=${encodeURIComponent(query)}&lang=en&max=${max}&apikey=${apiKey}`
            : `https://gnews.io/api/v4/top-headlines?category=${category}&lang=en&max=${max}&apikey=${apiKey}`

          const res = await fetch(endpoint)
          if (!res.ok) throw new Error(`API error ${res.status}`)
          const data = await res.json()

          // Normalise API response to match our local data shape
          const normalised = (data.articles || []).map((a, i) => ({
            id: `gnews-${i}-${Date.now()}`,
            title: a.title,
            description: a.description,
            content: a.content,
            author: a.source?.name || 'News Desk',
            publishedAt: a.publishedAt,
            image:
              a.image ||
              'https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=800&q=80',
            category,
            source: a.source,
            url: a.url,
          }))

          setArticles(normalised)
          setLoading(false)
          return
        } catch (err) {
          // API failed — fall through to local data
          console.warn('API unavailable, using local data:', err.message)
        }
      }

      // ── Use local demo data ─────────────────────────────────────────────
      // Small delay to simulate a real network request (shows loading state)
      await new Promise((resolve) => setTimeout(resolve, 500))
      setArticles(filterLocal(localArticles, category, query, max))
      setLoading(false)
    }

    load()
  }, [category, query, max]) // re-run whenever these values change

  return { articles, loading, error }
}
