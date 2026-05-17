import { useParams } from 'react-router-dom'
import { useNews }   from '../hooks/useNews'
import NewsCard       from '../components/NewsCard'
import CategoryFilter from '../components/CategoryFilter'
import LoadingSpinner from '../components/LoadingSpinner'
import ErrorMessage   from '../components/ErrorMessage'

export default function Category() {
  const { name } = useParams()
  const { articles, loading, error } = useNews({ category: name, max: 12 })

  const title = name ? name.charAt(0).toUpperCase() + name.slice(1) : 'News'

  return (
    <main className="page">
      <div className="container">
        <div className="page-header">
          <h1 className="page-title">{title}</h1>
          <p className="page-subtitle">Latest {title.toLowerCase()} stories from around the world.</p>
        </div>

        <CategoryFilter active={name} />

        {loading && <LoadingSpinner />}
        {error   && <ErrorMessage message={error} />}

        {!loading && !error && articles.length === 0 && (
          <ErrorMessage title="Nothing here yet" message={`No ${title.toLowerCase()} stories at the moment. Check back soon.`} />
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
