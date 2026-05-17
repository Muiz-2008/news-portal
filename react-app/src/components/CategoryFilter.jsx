// CategoryFilter.jsx — horizontal row of category pill buttons
// Clicking a pill navigates to that category page.
// Props:
//   active — the currently selected category string

import { useNavigate } from 'react-router-dom'

const CATEGORIES = [
  { label: 'All',           value: 'general' },
  { label: 'Technology',    value: 'technology' },
  { label: 'Sports',        value: 'sports' },
  { label: 'Business',      value: 'business' },
  { label: 'Entertainment', value: 'entertainment' },
  { label: 'Science',       value: 'science' },
  { label: 'Health',        value: 'health' },
]

export default function CategoryFilter({ active = 'general' }) {
  const navigate = useNavigate()

  const handleClick = (value) => {
    // Navigate to the category page
    navigate(value === 'general' ? '/' : `/category/${value}`)
  }

  return (
    <div className="category-filter">
      {CATEGORIES.map((cat) => (
        <button
          key={cat.value}
          className={`filter-pill ${active === cat.value ? 'active' : ''}`}
          onClick={() => handleClick(cat.value)}
        >
          {cat.label}
        </button>
      ))}
    </div>
  )
}
