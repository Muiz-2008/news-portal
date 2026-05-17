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

  return (
    <div className="category-filter">
      {CATEGORIES.map((cat) => (
        <button
          key={cat.value}
          className={`filter-pill ${active === cat.value ? 'active' : ''}`}
          onClick={() => navigate(cat.value === 'general' ? '/' : `/category/${cat.value}`)}
        >
          {cat.label}
        </button>
      ))}
    </div>
  )
}
