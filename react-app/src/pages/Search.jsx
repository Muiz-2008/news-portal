import { useState, useEffect } from 'react'
import { useSearchParams }    from 'react-router-dom'
import { useNews }            from '../hooks/useNews'
import NewsCard               from '../components/NewsCard'
import LoadingSpinner         from '../components/LoadingSpinner'
import ErrorMessage           from '../components/ErrorMessage'

export default function Search() {
  const [searchParams, setSearchParams] = useSearchParams()
  const urlQuery = searchParams.get('q') || ''
  const [inputValue, setInputValue] = useState(urlQuery)

  useEffect(() => {
    setInputValue(urlQuery)
  }, [urlQuery])

  const { articles, loading, error } = useNews({ query: urlQuery, max: 12 })

  const handleSubmit = (e) => {
    e.preventDefault()
    if (inputValue.trim()) setSearchParams({ q: inputValue.trim() })
  }

  return (
    <main className="page">
      <div className="container">
        <div className="search-header">
          <h1 className="page-title">Search</h1>
          <form className="search-form" onSubmit={handleSubmit}>
            <input
              type="search"
              className="search-input"
              placeholder="Search for topics, events, people…"
              aria-label="Search news"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
            />
            <button type="submit" className="btn btn-primary">Search</button>
          </form>
        </div>

        {urlQuery && !loading && (
          <p className="search-results-info">
            {articles.length > 0
              ? `${articles.length} results for "${urlQuery}"`
              : `No results for "${urlQuery}"`}
          </p>
        )}

        {loading && <LoadingSpinner />}
        {error   && <ErrorMessage message={error} />}

        {!loading && !error && articles.length === 0 && urlQuery && (
          <ErrorMessage
            title="Nothing found"
            message="Try a different keyword or browse a category."
          />
        )}

        {!urlQuery && !loading && (
          <p className="search-prompt">Type something above to search.</p>
        )}

        {!loading && !error && articles.length > 0 && (
          <div className="cards-grid cards-grid--wide section">
            {articles.map((article) => (
              <NewsCard key={article.id} article={article} size="lg" />
            ))}
          </div>
        )}
      </div>
    </main>
  )
}
