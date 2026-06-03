import { useState } from 'react'
import { Link } from 'react-router-dom'

const INITIAL = {
  fullName: 'John Doe',
  username: 'johndoe',
  email:    'john.doe@example.com',
  bio:      'Avid news reader and technology enthusiast. I follow stories on tech, business, and science. Always looking for the next big thing.',
  joined:   'January 2024',
  plan:     'Free',
}

const STATS = [
  { label: 'Articles Read',  value: '42' },
  { label: 'Articles Saved', value: '7'  },
  { label: 'Categories',     value: '5'  },
]

function initials(name) {
  return name.split(' ').map(n => n[0]).join('').toUpperCase().slice(0, 2)
}

export default function Profile() {
  const [profile, setProfile] = useState(INITIAL)
  const [editing, setEditing] = useState(false)
  const [draft,   setDraft]   = useState(INITIAL)

  const startEdit  = () => { setDraft(profile); setEditing(true) }
  const cancelEdit = () => setEditing(false)
  const saveEdit   = () => { setProfile(draft); setEditing(false) }

  const handleChange = (e) => {
    const { name, value } = e.target
    setDraft(prev => ({ ...prev, [name]: value }))
  }

  return (
    <main className="page">

      <div className="profile-cover" />

      <div className="container profile-body">

        <div className="profile-top">
          <div className="profile-avatar-wrap">
            <div className="profile-avatar">{initials(profile.fullName)}</div>
            <button className="profile-cam-btn" aria-label="Change profile picture">📷</button>
          </div>

          <h1 className="profile-name">{profile.fullName}</h1>
          <p className="profile-username">@{profile.username}</p>

          <div className="profile-actions">
            {editing ? (
              <>
                <button className="btn btn-primary"  onClick={saveEdit}>Save Changes</button>
                <button className="btn btn-outline"  onClick={cancelEdit}>Cancel</button>
              </>
            ) : (
              <>
                <button className="btn btn-primary"  onClick={startEdit}>Edit Profile</button>
                <button className="btn btn-outline profile-change-pic" onClick={() => alert('Upload feature coming soon.')}>
                  Change Picture
                </button>
                <Link to="/dashboard" className="btn btn-outline">View Saved Articles</Link>
              </>
            )}
          </div>
        </div>

        <div className="profile-stats">
          {STATS.map(s => (
            <div key={s.label} className="profile-stat">
              <span className="profile-stat-value">{s.value}</span>
              <span className="profile-stat-label">{s.label}</span>
            </div>
          ))}
        </div>

        <div className="profile-card">

          <div className="profile-plan-row">
            <span className={`profile-plan-badge${profile.plan === 'Premium' ? ' profile-plan-badge--premium' : ''}`}>
              {profile.plan === 'Premium' ? '⭐ Premium Member' : '📰 Free Member'}
            </span>
            {profile.plan !== 'Premium' && (
              <Link to="/services" className="auth-link">Upgrade to Premium →</Link>
            )}
          </div>

          <div className="profile-field profile-field--full">
            <label className="profile-label">Bio</label>
            {editing
              ? <textarea name="bio" className="profile-input" rows={3} value={draft.bio} onChange={handleChange} />
              : <p className="profile-value">{profile.bio || 'No bio added yet.'}</p>
            }
          </div>

          <div className="profile-details-grid">

            <div className="profile-field">
              <label className="profile-label">Full Name</label>
              {editing
                ? <input name="fullName" type="text" className="profile-input" value={draft.fullName} onChange={handleChange} />
                : <p className="profile-value">{profile.fullName}</p>
              }
            </div>

            <div className="profile-field">
              <label className="profile-label">Username</label>
              {editing
                ? <input name="username" type="text" className="profile-input" value={draft.username} onChange={handleChange} />
                : <p className="profile-value">@{profile.username}</p>
              }
            </div>

            <div className="profile-field">
              <label className="profile-label">Email Address</label>
              {editing
                ? <input name="email" type="email" className="profile-input" value={draft.email} onChange={handleChange} />
                : <p className="profile-value">{profile.email}</p>
              }
            </div>

            <div className="profile-field">
              <label className="profile-label">Member Since</label>
              <p className="profile-value">{profile.joined}</p>
            </div>

            <div className="profile-field">
              <label className="profile-label">Membership Status</label>
              <p className="profile-value">{profile.plan}</p>
            </div>

          </div>

        </div>
      </div>
    </main>
  )
}
