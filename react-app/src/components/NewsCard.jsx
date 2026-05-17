import { Link } from 'react-router-dom'

function timeAgo(dateStr) {
  const date = new Date(dateStr)
  const now  = new Date()
  const secs = Math.floor((now - date) / 1000)

  if (secs < 3600)  return `${Math.floor(secs / 60)} min ago`
  if (secs < 86400) return `${Math.floor(secs / 3600)} hr ago`
  return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })
}

function readingTime(content = '') {
  const words = content.trim().split(/\s+/).length
  const mins  = Math.max(1, Math.round(words / 200))
  return `${mins} min read`
}

// Map category name → CSS class for the coloured badge
const badgeClass = {
  general:       'badge-general',
  technology:    'badge-technology',
  sports:        'badge-sports',
  business:      'badge-business',
  entertainment: 'badge-entertainment',
  science:       'badge-science',
  health:        'badge-health',
}

export default function NewsCard({ article, size = 'sm' }) {
  // If article data is missing, render nothing
  if (!article) return null

  const categoryLabel = article.category
    ? article.category.charAt(0).toUpperCase() + article.category.slice(1)
    : 'News'

  return (
    <article className={`card ${size === 'lg' ? 'card-lg' : ''}`}>

      {/* Image with badge overlay */}
      <Link to={`/article/${article.id}`} state={{ article }} className="card-image-link">
        <img
          src={article.image}
          alt={article.title}
          className="card-image"
          onError={(e) => {
            // If image fails to load, show a placeholder colour
            e.target.style.display = 'none'
          }}
        />
        <span className={`badge ${badgeClass[article.category] || 'badge-general'} card-badge`}>
          {categoryLabel}
        </span>
      </Link>

      {/* Text body */}
      <div className="card-body">
        <h3 className="card-title">
          <Link to={`/article/${article.id}`} state={{ article }}>
            {article.title}
          </Link>
        </h3>

        {size === 'lg' && (
          <p className="card-excerpt">{article.description}</p>
        )}

        <div className="card-meta">
          <span>{article.source?.name || article.author || 'News Desk'}</span>
          <span className="dot">&bull;</span>
          <span>{timeAgo(article.publishedAt)}</span>
          {article.content && (
            <span className="reading-time">{readingTime(article.content)}</span>
          )}
        </div>
      </div>

    </article>
  )
}
