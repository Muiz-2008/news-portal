// Category.jsx — displays articles filtered by a specific category
// Demonstrates: useParams (reads the URL), useNews hook, CategoryFilter

import { useParams }  from 'react-router-dom'
import { useNews }    from '../hooks/useNews'
import NewsCard       from '../components/NewsCard'
import CategoryFilter from '../components/CategoryFilter'
import LoadingSpinner from '../components/LoadingSpinner'
import ErrorMessage   from '../components/ErrorMessage'

export default function Category() {
  // useParams reads the :name part from the URL, e.g. /category/sports → { name: 'sports' }
  const { name } = useParams()

  const { articles, loading, error } = useNews({ category: name, max: 12 })

  // Capitalise the category name for the heading
  const title = name ? name.charAt(0).toUpperCase() + name.slice(1) : 'News'

  return (
    <main className="page">
      <div className="container">

        {/* Page heading */}
        <div className="page-header">
          <h1 className="page-title">{title}</h1>
          <p className="page-subtitle">The latest {title.toLowerCase()} stories from around the world.</p>
        </div>

        {/* Category filter pills — highlights the current category */}
        <CategoryFilter active={name} />

        {/* Content */}
        {loading && <LoadingSpinner message={`Loading ${title} stories…`} />}
        {error   && <ErrorMessage message={error} />}

        {!loading && !error && articles.length === 0 && (
          <ErrorMessage title="No articles found" message={`No ${title} stories available right now.`} />
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
