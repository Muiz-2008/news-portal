import { useState, useEffect } from 'react'
import { NavLink, Link, useNavigate } from 'react-router-dom'

const CATEGORIES = [
  { label: 'Home',          path: '/' },
  { label: 'World',         path: '/category/general' },
  { label: 'Technology',    path: '/category/technology' },
  { label: 'Sports',        path: '/category/sports' },
  { label: 'Business',      path: '/category/business' },
  { label: 'Entertainment', path: '/category/entertainment' },
  { label: 'Science',       path: '/category/science' },
  { label: 'Health',        path: '/category/health' },
  { label: 'Services',      path: '/services' },
  { label: 'About',         path: '/about' },
  { label: 'Contact',       path: '/contact' },
]

export default function Navbar() {
  // Controls whether the mobile menu is open or closed
  const [menuOpen,    setMenuOpen]    = useState(false)
  const [searchQuery, setSearchQuery] = useState('')
  const [scrolled,    setScrolled]    = useState(false)
  const navigate = useNavigate()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // When the search form is submitted, go to the /search page with the query
  const handleSearch = (e) => {
    e.preventDefault() // prevent page reload
    if (searchQuery.trim()) {
      navigate(`/search?q=${encodeURIComponent(searchQuery.trim())}`)
      setSearchQuery('')
      setMenuOpen(false)
    }
  }

  return (
    <header className={`header${scrolled ? ' scrolled' : ''}`}>
      <nav className="navbar container">

        {/* Logo */}
        <NavLink to="/" className="navbar-logo" onClick={() => setMenuOpen(false)}>
          News<span>Hub</span>
        </NavLink>

        {/* Hamburger button — only visible on mobile */}
        <button
          className={`navbar-toggle ${menuOpen ? 'active' : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation"
        >
          <span />
          <span />
          <span />
        </button>

        {/* Nav links + search — hidden on mobile until hamburger is clicked */}
        <div className={`navbar-menu ${menuOpen ? 'open' : ''}`}>
          <ul className="navbar-links">
            {CATEGORIES.map((cat) => (
              <li key={cat.path}>
                {/* NavLink automatically adds class "active" to the current page */}
                <NavLink
                  to={cat.path}
                  end={cat.path === '/'}
                  onClick={() => setMenuOpen(false)}
                >
                  {cat.label}
                </NavLink>
              </li>
            ))}

          </ul>

          <form className="navbar-search" onSubmit={handleSearch}>
            <input
              type="search"
              placeholder="Search news…"
              aria-label="Search news"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <button type="submit">&#128269;</button>
          </form>

          <Link to="/login" className="btn btn-primary navbar-signin" onClick={() => setMenuOpen(false)}>
            Sign In
          </Link>
        </div>

      </nav>
    </header>
  )
}
