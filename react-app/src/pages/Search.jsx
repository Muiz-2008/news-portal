// Search.jsx — search results page
// Demonstrates: useSearchParams (reads ?q= from URL), controlled form, useNews

import { useState, useEffect }    from 'react'
import { useSearchParams }        from 'react-router-dom'
import { useNews }                from '../hooks/useNews'
import NewsCard                   from '../components/NewsCard'
import LoadingSpinner             from '../components/LoadingSpinner'
import ErrorMessage               from '../components/ErrorMessage'

export default function Search() {
  // useSearchParams reads/writes the query string in the URL
  const [searchParams, setSearchParams] = useSearchParams()
  const urlQuery = searchParams.get('q') || ''

  // Local input state — separate from urlQuery so typing doesn't trigger search immediately
  const [inputValue, setInputValue] = useState(urlQuery)

  // Sync input when URL changes (e.g. coming from Navbar search)
  useEffect(() => {
    setInputValue(urlQuery)
  }, [urlQuery])

  // Fetch articles matching the query from the URL
  const { articles, loading, error } = useNews({ query: urlQuery, max: 12 })

  const handleSubmit = (e) => {
    e.preventDefault()
    if (inputValue.trim()) {
      // Update the URL query param — this triggers useNews to re-fetch
      setSearchParams({ q: inputValue.trim() })
    }
  }

  return (
    <main className="page">
      <div className="container">

        {/* Search bar at top of page */}
        <div className="search-header">
          <h1 className="page-title">Search News</h1>
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

        {/* Results heading */}
        {urlQuery && !loading && (
          <p className="search-results-info">
            {articles.length > 0
              ? `Showing ${articles.length} results for "${urlQuery}"`
              : `No results found for "${urlQuery}"`}
          </p>
        )}

        {/* States */}
        {loading && <LoadingSpinner message={`Searching for "${urlQuery}"…`} />}
        {error   && <ErrorMessage message={error} />}

        {!loading && !error && articles.length === 0 && urlQuery && (
          <ErrorMessage
            title="No results found"
            message={`Try different keywords or browse a category instead.`}
          />
        )}

        {!urlQuery && !loading && (
          <p className="search-prompt">Enter a keyword above to search for news.</p>
        )}

        {/* Results grid */}
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
