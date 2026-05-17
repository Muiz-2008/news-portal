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
      <Navbar />
      <Routes>
        <Route path="/"               element={<Home />} />
        <Route path="/category/:name" element={<Category />} />
        <Route path="/article/:id"    element={<ArticleDetail />} />
        <Route path="/search"         element={<Search />} />
        <Route path="/about"          element={<About />} />
        <Route path="/contact"        element={<Contact />} />
        <Route path="*"               element={<NotFound />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}
