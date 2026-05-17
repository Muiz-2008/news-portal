// Home.jsx — the landing page
// Demonstrates: custom hook (useNews), conditional rendering, passing props,
//               useState for the newsletter form

import { useState }   from 'react'
import { useNews }    from '../hooks/useNews'
import HeroCard       from '../components/HeroCard'
import NewsCard       from '../components/NewsCard'
import CategoryFilter from '../components/CategoryFilter'
import LoadingSpinner from '../components/LoadingSpinner'
import ErrorMessage   from '../components/ErrorMessage'

// ── Breaking news ticker ───────────────────────────────────────────────────
function BreakingTicker({ headlines }) {
  if (!headlines.length) return null
  const items = [...headlines, ...headlines]
  return (
    <div className="ticker" role="marquee" aria-live="off" aria-label="Breaking news headlines">
      <span className="ticker-label">⚡ Breaking</span>
      <div className="ticker-track">
        <div className="ticker-content">
          {items.map((title, i) => (
            <span key={i} className="ticker-item">{title}<span className="ticker-sep" aria-hidden="true"> · </span></span>
          ))}
        </div>
      </div>
    </div>
  )
}

// ── Newsletter banner ──────────────────────────────────────────────────────
// Defined as a separate component inside this file since it's only used here.
function Newsletter() {
  // useState stores the email value and whether the form was successfully submitted
  const [email,     setEmail]     = useState('')
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault() // prevent full page reload
    if (email) setSubmitted(true)
  }

  return (
    <section className="newsletter">
      <div className="container newsletter-inner">
        <div className="newsletter-text">
          <h2>Stay Informed</h2>
          <p>Get the top stories delivered to your inbox every morning.</p>
        </div>

        {/* Show thank-you message after submit, form before */}
        {submitted ? (
          <p className="newsletter-success">&#10003; You&apos;re subscribed! Thank you.</p>
        ) : (
          <form className="newsletter-form" onSubmit={handleSubmit}>
            <input
              type="email"
              placeholder="Enter your email address"
              aria-label="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <button type="submit" className="btn btn-primary">Subscribe</button>
          </form>
        )}
      </div>
    </section>
  )
}

// ── Main Home page component ───────────────────────────────────────────────
export default function Home() {
  // Fetch top 10 articles using our custom hook
  const { articles, loading, error } = useNews({ category: 'general', max: 10 })

  if (loading) return <LoadingSpinner message="Loading top stories…" />
  if (error)   return <ErrorMessage message={error} />
  if (articles.length === 0)
    return <ErrorMessage title="No stories found" message="Check back soon." />

  // First article → hero banner; the rest → card grid
  const [hero, ...rest] = articles

  return (
    <main className="page">

      {/* Scrolling ticker with top headlines */}
      <BreakingTicker headlines={articles.slice(0, 5).map(a => a.title)} />

      {/* Big hero story */}
      <div className="container">
        <HeroCard article={hero} />
      </div>

      {/* Category filter pills */}
      <div className="container">
        <CategoryFilter active="general" />
      </div>

      {/* Trending grid */}
      <section className="section container">
        <div className="section-header">
          <h2 className="section-title">Trending Now</h2>
        </div>
        <div className="cards-grid">
          {rest.map((article) => (
            <NewsCard key={article.id} article={article} size="lg" />
          ))}
        </div>
      </section>

      {/* Newsletter signup */}
      <Newsletter />

    </main>
  )
}
