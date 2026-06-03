import { useState } from 'react'

const STATS = [
  { label: 'Total Articles',  value: '1,247', icon: '📰', change: '+12 this week',  up: true  },
  { label: 'Total Users',     value: '4,200', icon: '👥', change: '+84 this week',  up: true  },
  { label: 'Active Users',    value: '3,891', icon: '✅', change: '92% of total',   up: true  },
  { label: 'Total Page Views',value: '128.4K',icon: '👁️', change: '+5.3K today',    up: true  },
]

const INIT_ARTICLES = [
  { id: 1, title: 'Global Leaders Sign Historic Climate Agreement', category: 'World',       author: 'Sarah M.',  date: 'Jun 1, 2026',  status: 'Published' },
  { id: 2, title: 'Tech Giants Report Record Quarterly Earnings',   category: 'Technology',  author: 'James O.',  date: 'Jun 1, 2026',  status: 'Published' },
  { id: 3, title: 'Champions League Final Preview and Predictions', category: 'Sports',      author: 'Carlos F.', date: 'May 31, 2026', status: 'Draft'     },
  { id: 4, title: 'Federal Reserve Raises Interest Rates Again',    category: 'Business',    author: 'Amina H.',  date: 'May 30, 2026', status: 'Published' },
  { id: 5, title: 'New Cancer Treatment Shows Remarkable Promise',  category: 'Health',      author: 'Sarah M.',  date: 'May 29, 2026', status: 'Published' },
  { id: 6, title: 'NASA Mars Mission Scheduled for Late 2028',      category: 'Science',     author: 'James O.',  date: 'May 28, 2026', status: 'Draft'     },
]

const INIT_USERS = [
  { id: 1, name: 'John Doe',     username: 'johndoe',   email: 'john@example.com',  plan: 'Free',    status: 'Active',    joined: 'Jan 2024' },
  { id: 2, name: 'Jane Smith',   username: 'janesmith', email: 'jane@example.com',  plan: 'Premium', status: 'Active',    joined: 'Feb 2024' },
  { id: 3, name: 'Mike Johnson', username: 'mikej',     email: 'mike@example.com',  plan: 'Free',    status: 'Suspended', joined: 'Mar 2024' },
  { id: 4, name: 'Emily Davis',  username: 'emilyd',    email: 'emily@example.com', plan: 'Premium', status: 'Active',    joined: 'Apr 2024' },
  { id: 5, name: 'Chris Wilson', username: 'chrisw',    email: 'chris@example.com', plan: 'Free',    status: 'Active',    joined: 'May 2024' },
]

const BLANK_ARTICLE = { title: '', category: 'World', author: '', status: 'Draft' }

const NAV = [
  { id: 'overview',  icon: '📊', label: 'Overview'  },
  { id: 'articles',  icon: '📰', label: 'Articles'  },
  { id: 'users',     icon: '👥', label: 'Users'     },
]

export default function Admin() {
  const [active,    setActive]   = useState('overview')
  const [articles,  setArticles] = useState(INIT_ARTICLES)
  const [users,     setUsers]    = useState(INIT_USERS)
  const [showModal, setShowModal]= useState(false)
  const [editItem,  setEditItem] = useState(null)
  const [newArticle,setNewArticle]= useState(BLANK_ARTICLE)

  const deleteArticle = (id) => {
    if (window.confirm('Delete this article?')) setArticles(a => a.filter(x => x.id !== id))
  }
  const deleteUser = (id) => {
    if (window.confirm('Delete this user?')) setUsers(u => u.filter(x => x.id !== id))
  }
  const suspendUser = (id) => {
    setUsers(u => u.map(x => x.id === id ? { ...x, status: x.status === 'Active' ? 'Suspended' : 'Active' } : x))
  }
  const toggleArticleStatus = (id) => {
    setArticles(a => a.map(x => x.id === id ? { ...x, status: x.status === 'Published' ? 'Draft' : 'Published' } : x))
  }
  const addArticle = () => {
    if (!newArticle.title.trim() || !newArticle.author.trim()) return
    setArticles(prev => [{ ...newArticle, id: Date.now(), date: new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }) }, ...prev])
    setNewArticle(BLANK_ARTICLE)
    setShowModal(false)
  }

  return (
    <div className="admin-wrap">

      <aside className="admin-sidebar">
        <div className="admin-sidebar-logo">News<span>Hub</span> <small>Admin</small></div>
        {NAV.map(n => (
          <button
            key={n.id}
            className={`admin-nav-item${active === n.id ? ' active' : ''}`}
            onClick={() => setActive(n.id)}
          >
            <span className="admin-nav-icon">{n.icon}</span>
            {n.label}
          </button>
        ))}
      </aside>

      <main className="admin-main">

        <div className="admin-topbar">
          <div>
            <h1 className="admin-page-title">
              {NAV.find(n => n.id === active)?.label}
            </h1>
            <p className="admin-page-sub">
              {new Date().toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}
            </p>
          </div>
          {active === 'articles' && (
            <button className="btn btn-primary" onClick={() => setShowModal(true)}>+ Add New Article</button>
          )}
        </div>

        {active === 'overview' && (
          <div className="admin-content">
            <div className="admin-stats">
              {STATS.map(s => (
                <div key={s.label} className="admin-stat-card">
                  <div className="admin-stat-top">
                    <span className="admin-stat-icon">{s.icon}</span>
                    <span className={`admin-stat-change ${s.up ? 'up' : 'down'}`}>{s.change}</span>
                  </div>
                  <div className="admin-stat-value">{s.value}</div>
                  <div className="admin-stat-label">{s.label}</div>
                </div>
              ))}
            </div>

            <div className="admin-overview-grid">
              <div className="admin-card">
                <h3 className="admin-card-title">Recent Articles</h3>
                <table className="admin-table">
                  <thead>
                    <tr><th>Title</th><th>Category</th><th>Status</th></tr>
                  </thead>
                  <tbody>
                    {articles.slice(0, 5).map(a => (
                      <tr key={a.id}>
                        <td className="admin-td-title">{a.title}</td>
                        <td><span className="admin-badge admin-badge-cat">{a.category}</span></td>
                        <td><span className={`admin-badge ${a.status === 'Published' ? 'admin-badge-success' : 'admin-badge-draft'}`}>{a.status}</span></td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div className="admin-card">
                <h3 className="admin-card-title">Recent Users</h3>
                <table className="admin-table">
                  <thead>
                    <tr><th>Name</th><th>Plan</th><th>Status</th></tr>
                  </thead>
                  <tbody>
                    {users.map(u => (
                      <tr key={u.id}>
                        <td>
                          <div className="admin-user-name">{u.name}</div>
                          <div className="admin-user-email">{u.email}</div>
                        </td>
                        <td><span className={`admin-badge ${u.plan === 'Premium' ? 'admin-badge-premium' : 'admin-badge-free'}`}>{u.plan}</span></td>
                        <td><span className={`admin-badge ${u.status === 'Active' ? 'admin-badge-success' : 'admin-badge-danger'}`}>{u.status}</span></td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

        {active === 'articles' && (
          <div className="admin-content">
            <div className="admin-card">
              <div className="admin-table-header">
                <h3 className="admin-card-title">All Articles <span className="admin-count">{articles.length}</span></h3>
              </div>
              <div className="admin-table-wrap">
                <table className="admin-table">
                  <thead>
                    <tr>
                      <th>#</th>
                      <th>Title</th>
                      <th>Category</th>
                      <th>Author</th>
                      <th>Date</th>
                      <th>Status</th>
                      <th>Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {articles.map(a => (
                      <tr key={a.id}>
                        <td className="admin-td-id">{a.id}</td>
                        <td className="admin-td-title">{a.title}</td>
                        <td><span className="admin-badge admin-badge-cat">{a.category}</span></td>
                        <td>{a.author}</td>
                        <td className="admin-td-date">{a.date}</td>
                        <td>
                          <span className={`admin-badge ${a.status === 'Published' ? 'admin-badge-success' : 'admin-badge-draft'}`}>
                            {a.status}
                          </span>
                        </td>
                        <td>
                          <div className="admin-actions">
                            <button className="admin-btn admin-btn-edit" onClick={() => toggleArticleStatus(a.id)}>
                              Edit
                            </button>
                            <button className="admin-btn admin-btn-delete" onClick={() => deleteArticle(a.id)}>
                              Delete
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

        {active === 'users' && (
          <div className="admin-content">
            <div className="admin-card">
              <div className="admin-table-header">
                <h3 className="admin-card-title">All Users <span className="admin-count">{users.length}</span></h3>
              </div>
              <div className="admin-table-wrap">
                <table className="admin-table">
                  <thead>
                    <tr>
                      <th>#</th>
                      <th>Name</th>
                      <th>Username</th>
                      <th>Email</th>
                      <th>Plan</th>
                      <th>Status</th>
                      <th>Joined</th>
                      <th>Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {users.map(u => (
                      <tr key={u.id}>
                        <td className="admin-td-id">{u.id}</td>
                        <td className="admin-user-name">{u.name}</td>
                        <td className="admin-td-date">@{u.username}</td>
                        <td>{u.email}</td>
                        <td><span className={`admin-badge ${u.plan === 'Premium' ? 'admin-badge-premium' : 'admin-badge-free'}`}>{u.plan}</span></td>
                        <td><span className={`admin-badge ${u.status === 'Active' ? 'admin-badge-success' : 'admin-badge-danger'}`}>{u.status}</span></td>
                        <td className="admin-td-date">{u.joined}</td>
                        <td>
                          <div className="admin-actions">
                            <button
                              className={`admin-btn ${u.status === 'Active' ? 'admin-btn-warn' : 'admin-btn-edit'}`}
                              onClick={() => suspendUser(u.id)}
                            >
                              {u.status === 'Active' ? 'Suspend' : 'Restore'}
                            </button>
                            <button className="admin-btn admin-btn-delete" onClick={() => deleteUser(u.id)}>
                              Delete
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

      </main>

      {showModal && (
        <div className="admin-modal-overlay" onClick={() => setShowModal(false)}>
          <div className="admin-modal" onClick={e => e.stopPropagation()}>
            <div className="admin-modal-header">
              <h2>Add New Article</h2>
              <button className="admin-modal-close" onClick={() => setShowModal(false)}>✕</button>
            </div>
            <div className="form-group">
              <label>Title</label>
              <input type="text" placeholder="Article title" value={newArticle.title} onChange={e => setNewArticle(p => ({ ...p, title: e.target.value }))} />
            </div>
            <div className="admin-modal-row">
              <div className="form-group">
                <label>Category</label>
                <select value={newArticle.category} onChange={e => setNewArticle(p => ({ ...p, category: e.target.value }))}>
                  {['World','Technology','Sports','Business','Entertainment','Science','Health'].map(c => <option key={c}>{c}</option>)}
                </select>
              </div>
              <div className="form-group">
                <label>Status</label>
                <select value={newArticle.status} onChange={e => setNewArticle(p => ({ ...p, status: e.target.value }))}>
                  <option>Draft</option>
                  <option>Published</option>
                </select>
              </div>
            </div>
            <div className="form-group">
              <label>Author</label>
              <input type="text" placeholder="Author name" value={newArticle.author} onChange={e => setNewArticle(p => ({ ...p, author: e.target.value }))} />
            </div>
            <div className="admin-modal-footer">
              <button className="btn btn-primary" onClick={addArticle}>Add Article</button>
              <button className="btn btn-outline" onClick={() => setShowModal(false)}>Cancel</button>
            </div>
          </div>
        </div>
      )}

    </div>
  )
}
