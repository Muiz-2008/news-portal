import { useState, useEffect } from 'react'

const ALL_CATEGORIES = ['Technology', 'Sports', 'Business', 'Entertainment', 'Science', 'Health', 'World']

const SECTIONS = [
  { id: 'account',       label: '👤 Account',       },
  { id: 'preferences',   label: '📰 News Preferences' },
  { id: 'notifications', label: '🔔 Notifications'   },
  { id: 'appearance',    label: '🎨 Appearance'       },
]

function Toggle({ checked, onChange, id }) {
  return (
    <label className="toggle" htmlFor={id}>
      <input id={id} type="checkbox" checked={checked} onChange={onChange} />
      <span className="toggle-slider" />
    </label>
  )
}

function SettingRow({ label, description, children }) {
  return (
    <div className="setting-row">
      <div className="setting-info">
        <span className="setting-label">{label}</span>
        {description && <span className="setting-desc">{description}</span>}
      </div>
      <div className="setting-control">{children}</div>
    </div>
  )
}

export default function Settings() {
  const [active, setActive] = useState('account')
  const [saved,  setSaved]  = useState(false)

  const [account, setAccount] = useState({ email: 'john.doe@example.com', currentPass: '', newPass: '', confirmPass: '' })
  const [prefs,   setPrefs]   = useState({ categories: new Set(['Technology', 'Sports', 'Business']), newsletter: true })
  const [notifs,  setNotifs]  = useState({ breaking: true, emailNotifs: false })
  const [appear,  setAppear]  = useState({ darkMode: false })

  useEffect(() => {
    if (appear.darkMode) {
      document.documentElement.setAttribute('data-theme', 'dark')
    } else {
      document.documentElement.removeAttribute('data-theme')
    }
  }, [appear.darkMode])

  const handleSave = () => {
    setSaved(true)
    setTimeout(() => setSaved(false), 3000)
  }

  const toggleCategory = (cat) => {
    setPrefs(prev => {
      const next = new Set(prev.categories)
      next.has(cat) ? next.delete(cat) : next.add(cat)
      return { ...prev, categories: next }
    })
  }

  return (
    <main className="page">
      <div className="container settings-container">

        <div className="settings-header">
          <h1 className="page-title">Settings</h1>
          <p className="page-subtitle">Manage your account, preferences, and notifications</p>
        </div>

        <div className="settings-layout">

          <aside className="settings-sidebar">
            {SECTIONS.map(s => (
              <button
                key={s.id}
                className={`settings-nav-btn${active === s.id ? ' active' : ''}`}
                onClick={() => setActive(s.id)}
              >
                {s.label}
              </button>
            ))}
          </aside>

          <div className="settings-panel">

            {active === 'account' && (
              <>
                <h2 className="settings-section-title">Account Settings</h2>

                <div className="settings-card">
                  <h3 className="settings-card-title">Update Email</h3>
                  <div className="form-group">
                    <label htmlFor="current-email">Current Email</label>
                    <input
                      id="current-email"
                      type="email"
                      value={account.email}
                      readOnly
                      className="settings-readonly"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="new-email">New Email Address</label>
                    <input
                      id="new-email"
                      type="email"
                      placeholder="Enter new email"
                      value={account.newEmail || ''}
                      onChange={e => setAccount(p => ({ ...p, newEmail: e.target.value }))}
                    />
                  </div>
                </div>

                <div className="settings-card">
                  <h3 className="settings-card-title">Change Password</h3>
                  <div className="form-group">
                    <label htmlFor="cur-pass">Current Password</label>
                    <input
                      id="cur-pass"
                      type="password"
                      placeholder="Enter current password"
                      value={account.currentPass}
                      onChange={e => setAccount(p => ({ ...p, currentPass: e.target.value }))}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="new-pass">New Password</label>
                    <input
                      id="new-pass"
                      type="password"
                      placeholder="Enter new password"
                      value={account.newPass}
                      onChange={e => setAccount(p => ({ ...p, newPass: e.target.value }))}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="conf-pass">Confirm New Password</label>
                    <input
                      id="conf-pass"
                      type="password"
                      placeholder="Confirm new password"
                      value={account.confirmPass}
                      onChange={e => setAccount(p => ({ ...p, confirmPass: e.target.value }))}
                    />
                  </div>
                </div>
              </>
            )}

            {active === 'preferences' && (
              <>
                <h2 className="settings-section-title">News Preferences</h2>

                <div className="settings-card">
                  <h3 className="settings-card-title">Preferred Categories</h3>
                  <p className="settings-card-desc">Choose the topics you want to see most.</p>
                  <div className="category-checkboxes">
                    {ALL_CATEGORIES.map(cat => (
                      <label key={cat} className={`cat-checkbox${prefs.categories.has(cat) ? ' selected' : ''}`}>
                        <input
                          type="checkbox"
                          checked={prefs.categories.has(cat)}
                          onChange={() => toggleCategory(cat)}
                        />
                        {cat}
                      </label>
                    ))}
                  </div>
                </div>

                <div className="settings-card">
                  <h3 className="settings-card-title">Newsletter</h3>
                  <SettingRow
                    label="Newsletter Subscription"
                    description="Receive a curated daily digest in your inbox."
                  >
                    <Toggle
                      id="newsletter"
                      checked={prefs.newsletter}
                      onChange={e => setPrefs(p => ({ ...p, newsletter: e.target.checked }))}
                    />
                  </SettingRow>
                </div>
              </>
            )}

            {active === 'notifications' && (
              <>
                <h2 className="settings-section-title">Notifications</h2>

                <div className="settings-card">
                  <SettingRow
                    label="Breaking News Alerts"
                    description="Get notified instantly when major stories break."
                  >
                    <Toggle
                      id="breaking"
                      checked={notifs.breaking}
                      onChange={e => setNotifs(p => ({ ...p, breaking: e.target.checked }))}
                    />
                  </SettingRow>

                  <SettingRow
                    label="Email Notifications"
                    description="Receive weekly roundups and account updates by email."
                  >
                    <Toggle
                      id="emailNotifs"
                      checked={notifs.emailNotifs}
                      onChange={e => setNotifs(p => ({ ...p, emailNotifs: e.target.checked }))}
                    />
                  </SettingRow>
                </div>
              </>
            )}

            {active === 'appearance' && (
              <>
                <h2 className="settings-section-title">Appearance</h2>

                <div className="settings-card">
                  <div className="appearance-modes">

                    <button
                      className={`mode-card${!appear.darkMode ? ' mode-card--active' : ''}`}
                      onClick={() => setAppear({ darkMode: false })}
                    >
                      <div className="mode-preview mode-preview--light">
                        <div className="mode-preview-bar" />
                        <div className="mode-preview-lines">
                          <span /><span /><span />
                        </div>
                      </div>
                      <span className="mode-label">☀️ Light Mode</span>
                      {!appear.darkMode && <span className="mode-active-badge">Active</span>}
                    </button>

                    <button
                      className={`mode-card${appear.darkMode ? ' mode-card--active' : ''}`}
                      onClick={() => setAppear({ darkMode: true })}
                    >
                      <div className="mode-preview mode-preview--dark">
                        <div className="mode-preview-bar" />
                        <div className="mode-preview-lines">
                          <span /><span /><span />
                        </div>
                      </div>
                      <span className="mode-label">🌙 Dark Mode</span>
                      {appear.darkMode && <span className="mode-active-badge">Active</span>}
                    </button>

                  </div>

                  <SettingRow
                    label="Dark Mode"
                    description="Switch between light and dark interface."
                  >
                    <Toggle
                      id="darkMode"
                      checked={appear.darkMode}
                      onChange={e => setAppear({ darkMode: e.target.checked })}
                    />
                  </SettingRow>
                </div>
              </>
            )}

            <div className="settings-footer">
              <button className="btn btn-primary settings-save" onClick={handleSave}>
                Save Changes
              </button>
              {saved && (
                <span className="settings-saved-msg">✓ Changes saved successfully</span>
              )}
            </div>

          </div>
        </div>
      </div>
    </main>
  )
}
