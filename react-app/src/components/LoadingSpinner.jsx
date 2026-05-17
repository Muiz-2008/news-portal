export default function LoadingSpinner({ count = 6 }) {
  return (
    <div className="container" style={{ paddingTop: '32px', paddingBottom: '64px' }}>
      <div className="skeleton-grid">
        {Array.from({ length: count }).map((_, i) => (
          <div key={i} className="skeleton-card" aria-hidden="true">
            <div className="skeleton-img" />
            <div className="skeleton-body">
              <div className="skeleton-line skeleton-line--title" />
              <div className="skeleton-line skeleton-line--mid" />
              <div className="skeleton-line skeleton-line--short" />
              <div className="skeleton-line skeleton-line--meta" />
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
