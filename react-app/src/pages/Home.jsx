import { useNews }    from '../hooks/useNews'
import HeroCard       from '../components/HeroCard'
import NewsCard       from '../components/NewsCard'
import CategoryFilter from '../components/CategoryFilter'
import LoadingSpinner from '../components/LoadingSpinner'
import ErrorMessage   from '../components/ErrorMessage'

function BreakingTicker({ headlines }) {
  if (!headlines.length) return null
  const items = [...headlines, ...headlines]
  return (
    <div className="ticker" role="marquee" aria-live="off" aria-label="Breaking news headlines">
      <span className="ticker-label">Breaking</span>
      <div className="ticker-track">
        <div className="ticker-content">
          {items.map((title, i) => (
            <span key={i} className="ticker-item">
              {title}<span className="ticker-sep" aria-hidden="true"> · </span>
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}

export default function Home() {
  const { articles, loading, error } = useNews({ category: 'general', max: 10 })

  if (loading) return <LoadingSpinner />
  if (error)   return <ErrorMessage message={error} />
  if (articles.length === 0)
    return <ErrorMessage title="No stories found" message="Check back soon." />

  const [hero, ...rest] = articles

  return (
    <main className="page">

      <BreakingTicker headlines={articles.slice(0, 5).map(a => a.title)} />

      <div className="container">
        <HeroCard article={hero} />
      </div>

      <div className="container">
        <CategoryFilter active="general" />
      </div>

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

    </main>
  )
}
