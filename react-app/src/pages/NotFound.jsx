// NotFound.jsx — 404 error page
// Shown when the user navigates to a URL that doesn't match any Route in App.jsx
// The Route path="*" in App.jsx catches all unmatched paths and renders this page.

import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <main className="page">
      <div className="container not-found">
        <h1 className="not-found-code">404</h1>
        <h2 className="not-found-title">Page Not Found</h2>
        <p className="not-found-message">
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
        </p>
        <div className="not-found-actions">
          <Link to="/" className="btn btn-primary">Go to Home</Link>
          <Link to="/search" className="btn btn-outline">Search News</Link>
        </div>
      </div>
    </main>
  )
}
