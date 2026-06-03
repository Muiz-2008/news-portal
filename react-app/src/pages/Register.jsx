import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const INITIAL = { fullName: '', username: '', email: '', password: '', confirm: '' }

function getStrength(pwd) {
  if (!pwd) return { score: 0, label: '', color: '' }
  let score = 0
  if (pwd.length >= 8)            score++
  if (/[A-Z]/.test(pwd))          score++
  if (/[0-9]/.test(pwd))          score++
  if (/[^A-Za-z0-9]/.test(pwd))   score++
  const map = [
    { label: 'Weak',   color: '#ef4444' },
    { label: 'Fair',   color: '#f97316' },
    { label: 'Good',   color: '#eab308' },
    { label: 'Strong', color: '#16a34a' },
  ]
  return { score, ...map[Math.max(0, score - 1)] }
}

export default function Register() {
  const [form,      setForm]      = useState(INITIAL)
  const [errors,    setErrors]    = useState({})
  const [showPass,  setShowPass]  = useState(false)
  const [showConf,  setShowConf]  = useState(false)
  const [agreed,    setAgreed]    = useState(false)
  const [loading,   setLoading]   = useState(false)
  const navigate = useNavigate()

  const strength = getStrength(form.password)

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm(prev => ({ ...prev, [name]: value }))
    if (errors[name]) setErrors(prev => ({ ...prev, [name]: '' }))
  }

  const validate = () => {
    const e = {}
    if (!form.fullName.trim())                         e.fullName = 'Full name is required.'
    if (!form.username.trim())                         e.username = 'Username is required.'
    else if (!/^[a-zA-Z0-9_]{3,20}$/.test(form.username))
                                                       e.username = 'Username must be 3–20 characters (letters, numbers, underscores).'
    if (!form.email.trim())                            e.email    = 'Email is required.'
    else if (!/\S+@\S+\.\S+/.test(form.email))        e.email    = 'Enter a valid email address.'
    if (!form.password)                                e.password = 'Password is required.'
    else if (form.password.length < 6)                 e.password = 'Password must be at least 6 characters.'
    if (!form.confirm)                                 e.confirm  = 'Please confirm your password.'
    else if (form.confirm !== form.password)           e.confirm  = 'Passwords do not match.'
    if (!agreed)                                       e.terms    = 'You must accept the Terms and Conditions.'
    return e
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const errs = validate()
    if (Object.keys(errs).length) { setErrors(errs); return }
    setLoading(true)
    await new Promise(r => setTimeout(r, 1200))
    setLoading(false)
    navigate('/')
  }

  return (
    <main className="auth-page">
      <div className="auth-card auth-card--wide">

        <Link to="/" className="auth-logo">News<span>Hub</span></Link>
        <h1 className="auth-title">Create your account</h1>
        <p className="auth-subtitle">Join NewsHub and stay informed every day</p>

        <form onSubmit={handleSubmit} noValidate>

          <div className="auth-two-col">
            <div className={`form-group ${errors.fullName ? 'has-error' : ''}`}>
              <label htmlFor="fullName">Full Name</label>
              <input
                id="fullName"
                name="fullName"
                type="text"
                placeholder="John Doe"
                value={form.fullName}
                onChange={handleChange}
                autoComplete="name"
              />
              {errors.fullName && <span className="form-error">{errors.fullName}</span>}
            </div>

            <div className={`form-group ${errors.username ? 'has-error' : ''}`}>
              <label htmlFor="username">Username</label>
              <input
                id="username"
                name="username"
                type="text"
                placeholder="johndoe123"
                value={form.username}
                onChange={handleChange}
                autoComplete="username"
              />
              {errors.username && <span className="form-error">{errors.username}</span>}
            </div>
          </div>

          <div className={`form-group ${errors.email ? 'has-error' : ''}`}>
            <label htmlFor="email">Email Address</label>
            <input
              id="email"
              name="email"
              type="email"
              placeholder="you@example.com"
              value={form.email}
              onChange={handleChange}
              autoComplete="email"
            />
            {errors.email && <span className="form-error">{errors.email}</span>}
          </div>

          <div className={`form-group ${errors.password ? 'has-error' : ''}`}>
            <label htmlFor="password">Password</label>
            <div className="password-field">
              <input
                id="password"
                name="password"
                type={showPass ? 'text' : 'password'}
                placeholder="Create a strong password"
                value={form.password}
                onChange={handleChange}
                autoComplete="new-password"
              />
              <button
                type="button"
                className="password-toggle"
                onClick={() => setShowPass(v => !v)}
                aria-label={showPass ? 'Hide password' : 'Show password'}
              >
                {showPass ? '🙈' : '👁️'}
              </button>
            </div>
            {errors.password && <span className="form-error">{errors.password}</span>}

            {form.password && (
              <div className="strength-wrap">
                <div className="strength-bar">
                  {[1, 2, 3, 4].map(n => (
                    <div
                      key={n}
                      className="strength-segment"
                      style={{ background: n <= strength.score ? strength.color : '#e5e7eb' }}
                    />
                  ))}
                </div>
                <span className="strength-label" style={{ color: strength.color }}>
                  {strength.label}
                </span>
              </div>
            )}
          </div>

          <div className={`form-group ${errors.confirm ? 'has-error' : ''}`}>
            <label htmlFor="confirm">Confirm Password</label>
            <div className="password-field">
              <input
                id="confirm"
                name="confirm"
                type={showConf ? 'text' : 'password'}
                placeholder="Repeat your password"
                value={form.confirm}
                onChange={handleChange}
                autoComplete="new-password"
              />
              <button
                type="button"
                className="password-toggle"
                onClick={() => setShowConf(v => !v)}
                aria-label={showConf ? 'Hide password' : 'Show password'}
              >
                {showConf ? '🙈' : '👁️'}
              </button>
            </div>
            {errors.confirm && <span className="form-error">{errors.confirm}</span>}
          </div>

          <div className={`auth-terms ${errors.terms ? 'has-error' : ''}`}>
            <label className="checkbox-label">
              <input
                type="checkbox"
                checked={agreed}
                onChange={e => { setAgreed(e.target.checked); if (errors.terms) setErrors(p => ({ ...p, terms: '' })) }}
              />
              <span>
                I agree to the{' '}
                <Link to="/services" className="auth-link">Terms and Conditions</Link>
                {' '}and{' '}
                <Link to="/services" className="auth-link">Privacy Policy</Link>
              </span>
            </label>
            {errors.terms && <span className="form-error">{errors.terms}</span>}
          </div>

          <button type="submit" className="btn btn-primary auth-submit" disabled={loading}>
            {loading ? 'Creating account…' : 'Create Account'}
          </button>

        </form>

        <p className="auth-footer">
          Already have an account?{' '}
          <Link to="/login" className="auth-link">Sign in</Link>
        </p>

      </div>
    </main>
  )
}
