import { Link } from 'react-router-dom'
import { articles } from '../data/articles'

const USER = { name: 'John Doe', plan: 'Free' }

const STATS = [
  { label: 'Articles Saved',     value: '7',          icon: '🔖' },
  { label: 'Articles Read',      value: '42',         icon: '📖' },
  { label: 'Favorite Category',  value: 'Technology', icon: '💻' },
  { label: 'Premium Status',     value: USER.plan,    icon: '⭐', premium: USER.plan === 'Premium' },
]

const FAV_CATEGORIES = [
  { name: 'Technology', slug: 'technology', count: 18, color: '#2563eb' },
  { name: 'Sports',     slug: 'sports',     count: 12, color: '#16a34a' },
  { name: 'Business',   slug: 'business',   count: 9,  color: '#ea580c' },
  { name: 'Health',     slug: 'health',     count: 6,  color: '#dc2626' },
  { name: 'Science',    slug: 'science',    count: 4,  color: '#0891b2' },
]

function greeting() {
  const h = new Date().getHours()
  if (h < 12) return 'Good morning'
  if (h < 17) return 'Good afternoon'
  return 'Good evening'
}

function timeAgo(dateStr) {
  const secs = Math.floor((Date.now() - new Date(dateStr)) / 1000)
  if (secs < 3600)  return `${Math.floor(secs / 60)} min ago`
  if (secs < 86400) return `${Math.floor(secs / 3600)} hr ago`
  return new Date(dateStr).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })
}

function DashArticle({ article }) {
  return (
    <Link to={`/article/${article.id}`} state={{ article }} className="dash-article">
      <img
        src={article.image}
        alt={article.title}
        className="dash-article-img"
        onError={e => { e.target.src = 'https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=400&q=60' }}
      />
      <div className="dash-article-body">
        <span className={`badge badge-${article.category}`}>
          {article.category.charAt(0).toUpperCase() + article.category.slice(1)}
        </span>
        <p className="dash-article-title">{article.title}</p>
        <span className="dash-article-meta">
          {article.source?.name || article.author} &bull; {timeAgo(article.publishedAt)}
        </span>
      </div>
    </Link>
  )
}

export default function Dashboard() {
  const recentlyRead  = articles.slice(0, 3)
  const saved         = articles.slice(3, 6)
  const recommended   = articles.slice(6, 9)

  return (
    <main className="page">
      <div className="container dash-container">

        <div className="dash-welcome">
          <div>
            <h1 className="dash-greeting">{greeting()}, {USER.name.split(' ')[0]} 👋</h1>
            <p className="dash-date">
              {new Date().toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}
            </p>
          </div>
          <Link to="/services" className="btn btn-primary">Upgrade to Premium</Link>
        </div>

        <div className="dash-stats">
          {STATS.map(s => (
            <div key={s.label} className={`dash-stat-card${s.premium ? ' dash-stat-card--premium' : ''}`}>
              <span className="dash-stat-icon">{s.icon}</span>
              <span className="dash-stat-value">{s.value}</span>
              <span className="dash-stat-label">{s.label}</span>
            </div>
          ))}
        </div>

        <div className="dash-grid">

          <div className="dash-main">

            <section className="dash-section">
              <div className="section-header">
                <h2 className="section-title">Recently Read</h2>
                <Link to="/" className="section-link">View all</Link>
              </div>
              <div className="dash-article-list">
                {recentlyRead.map(a => <DashArticle key={a.id} article={a} />)}
              </div>
            </section>

            <section className="dash-section">
              <div className="section-header">
                <h2 className="section-title">Saved Articles</h2>
                <span className="dash-saved-count">7 / 10 saved</span>
              </div>
              <div className="dash-article-list">
                {saved.map(a => <DashArticle key={a.id} article={a} />)}
              </div>
              <p className="dash-upgrade-hint">
                Running low on saves.{' '}
                <Link to="/services" className="auth-link">Go Premium</Link>
                {' '}for unlimited.
              </p>
            </section>

          </div>

          <div className="dash-side">

            <section className="dash-section">
              <h2 className="section-title" style={{ marginBottom: '16px' }}>Recommended</h2>
              <div className="dash-rec-list">
                {recommended.map(a => (
                  <Link key={a.id} to={`/article/${a.id}`} state={{ article: a }} className="dash-rec-item">
                    <img
                      src={a.image}
                      alt={a.title}
                      className="dash-rec-img"
                      onError={e => { e.target.src = 'https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=200&q=60' }}
                    />
                    <p className="dash-rec-title">{a.title}</p>
                  </Link>
                ))}
              </div>
            </section>

            <section className="dash-section">
              <h2 className="section-title" style={{ marginBottom: '16px' }}>Favorite Categories</h2>
              <div className="dash-cats">
                {FAV_CATEGORIES.map(c => (
                  <Link key={c.name} to={`/category/${c.slug}`} className="dash-cat">
                    <span className="dash-cat-dot" style={{ background: c.color }} />
                    <span className="dash-cat-name">{c.name}</span>
                    <span className="dash-cat-count">{c.count} articles</span>
                  </Link>
                ))}
              </div>
            </section>

          </div>

        </div>
      </div>
    </main>
  )
}
