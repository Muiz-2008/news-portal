// ArticleDetail.jsx — full article view
// Demonstrates: useLocation (read navigation state), useNews (related articles)

import { useLocation, Link, useNavigate } from 'react-router-dom'
import { useNews } from '../hooks/useNews'
import NewsCard    from '../components/NewsCard'

function timeAgo(dateStr) {
  const date = new Date(dateStr)
  const now  = new Date()
  const secs = Math.floor((now - date) / 1000)
  if (secs < 3600)  return `${Math.floor(secs / 60)} min ago`
  if (secs < 86400) return `${Math.floor(secs / 3600)} hr ago`
  return date.toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })
}

export default function ArticleDetail() {
  const { state }  = useLocation() // retrieve the article object passed via Link state
  const navigate   = useNavigate()
  const article    = state?.article

  // Fetch related articles from the same category (excluding current)
  const { articles: related } = useNews({
    category: article?.category || 'general',
    max: 4,
  })

  // If we somehow land here without an article (e.g. direct URL), go home
  if (!article) {
    return (
      <main className="page">
        <div className="container article-not-found">
          <h2>Article not found.</h2>
          <p>We couldn&apos;t load this article.</p>
          <Link to="/" className="btn btn-primary" style={{ marginTop: '16px' }}>
            Back to Home
          </Link>
        </div>
      </main>
    )
  }

  const relatedArticles = related.filter((r) => r.id !== article.id).slice(0, 3)

  return (
    <main className="page">
      <div className="container article-container">

        {/* Back button */}
        <button className="back-btn" onClick={() => navigate(-1)}>
          &larr; Back
        </button>

        {/* Article header */}
        <header className="article-header">
          <span className={`badge badge-${article.category || 'general'}`}>
            {article.category?.charAt(0).toUpperCase() + article.category?.slice(1) || 'News'}
          </span>
          <h1 className="article-title">{article.title}</h1>
          <p className="article-description">{article.description}</p>
          <div className="article-meta">
            <span>By <strong>{article.author || article.source?.name}</strong></span>
            <span className="dot">&bull;</span>
            <span>{timeAgo(article.publishedAt)}</span>
            <span className="dot">&bull;</span>
            <span>{article.source?.name}</span>
          </div>
        </header>

        {/* Hero image */}
        <img src={article.image} alt={article.title} className="article-image" />

        {/* Article body — content split into paragraphs */}
        <div className="article-body">
          {(article.content || article.description)
            .split('\n\n')
            .map((para, i) => (
              <p key={i}>{para}</p>
            ))}
        </div>

        {/* External link (if from live API) */}
        {article.url && article.url !== '#' && (
          <a
            href={article.url}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-outline"
            style={{ marginTop: '32px', display: 'inline-block' }}
          >
            Read Original Article &#8599;
          </a>
        )}

        {/* Related articles */}
        {relatedArticles.length > 0 && (
          <section className="related-section">
            <h2 className="section-title">Related Stories</h2>
            <div className="cards-grid">
              {relatedArticles.map((a) => (
                <NewsCard key={a.id} article={a} size="lg" />
              ))}
            </div>
          </section>
        )}

      </div>
    </main>
  )
}
