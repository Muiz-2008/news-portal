// App.jsx — the root component
//
// This is where React Router is set up.
// BrowserRouter enables client-side routing (no full page reloads).
// Routes holds all the Route definitions.
// Each Route maps a URL path to a page component.
//
// Navbar and Footer are outside <Routes> so they appear on EVERY page.

import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Navbar        from './components/Navbar'
import Footer        from './components/Footer'
import Home          from './pages/Home'
import Category      from './pages/Category'
import ArticleDetail from './pages/ArticleDetail'
import Search        from './pages/Search'
import About         from './pages/About'
import Contact       from './pages/Contact'
import NotFound      from './pages/NotFound'

export default function App() {
  return (
    <BrowserRouter>
      {/* Navbar is always visible */}
      <Navbar />

      {/* Routes — only ONE of these renders at a time based on the URL */}
      <Routes>
        <Route path="/"                element={<Home />} />
        <Route path="/category/:name"  element={<Category />} />
        <Route path="/article/:id"     element={<ArticleDetail />} />
        <Route path="/search"          element={<Search />} />
        <Route path="/about"           element={<About />} />
        <Route path="/contact"         element={<Contact />} />
        {/* Catch-all — renders the 404 page for any unmatched URL */}
        <Route path="*"                element={<NotFound />} />
      </Routes>

      {/* Footer is always visible */}
      <Footer />
    </BrowserRouter>
  )
}
