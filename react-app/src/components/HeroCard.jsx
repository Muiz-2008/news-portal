import { Link } from 'react-router-dom'

function timeAgo(dateStr) {
  const date = new Date(dateStr)
  const now  = new Date()
  const secs = Math.floor((now - date) / 1000)
  if (secs < 3600)  return `${Math.floor(secs / 60)} min ago`
  if (secs < 86400) return `${Math.floor(secs / 3600)} hr ago`
  return date.toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })
}

export default function HeroCard({ article }) {
  if (!article) return null

  const categoryLabel = article.category
    ? article.category.charAt(0).toUpperCase() + article.category.slice(1)
    : 'News'

  return (
    <section className="hero">
      {/* Full-bleed background image + gradient overlay */}
      <div className="hero-bg">
        <img
          src={article.image}
          alt={article.title}
          className="hero-image"
          onError={(e) => {
            e.target.style.display = 'none'
            e.target.parentElement.style.background = 'linear-gradient(135deg, #1c2331 0%, #2d3748 100%)'
          }}
        />
        <div className="hero-overlay" />
      </div>

      {/* Text content pinned to the bottom */}
      <div className="hero-content">
        <div className="hero-tags">
          <span className="badge badge-breaking">⚡ Breaking</span>
          <span className="hero-category">{categoryLabel}</span>
        </div>

        <h1 className="hero-title">
          <Link to={`/article/${article.id}`} state={{ article }}>
            {article.title}
          </Link>
        </h1>

        <p className="hero-excerpt">{article.description}</p>

        <div className="hero-meta">
          <span>By <strong>{article.author || article.source?.name}</strong></span>
          <span className="dot">&bull;</span>
          <span>{timeAgo(article.publishedAt)}</span>
          <span className="dot">&bull;</span>
          <span>5 min read</span>
        </div>

        <div className="hero-actions">
          <Link
            to={`/article/${article.id}`}
            state={{ article }}
            className="btn btn-ghost"
          >
            Read Full Story →
          </Link>
        </div>
      </div>
    </section>
  )
}
