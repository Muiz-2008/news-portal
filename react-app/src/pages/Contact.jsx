import { useState } from 'react'

const INITIAL_FORM = {
  name:    '',
  email:   '',
  subject: '',
  message: '',
}

export default function Contact() {
  const [form,      setForm]      = useState(INITIAL_FORM)
  const [errors,    setErrors]    = useState({})
  const [submitted, setSubmitted] = useState(false)
  const [loading,   setLoading]   = useState(false)

  // Update a single field when the user types
  const handleChange = (e) => {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: '' }))
  }

  const validate = () => {
    const e = {}
    if (!form.name.trim())              e.name    = 'Name is required.'
    if (!form.email.trim())             e.email   = 'Email is required.'
    else if (!/\S+@\S+\.\S+/.test(form.email)) e.email = 'Enter a valid email address.'
    if (!form.subject.trim())           e.subject = 'Subject is required.'
    if (form.message.trim().length < 10) e.message = 'Message must be at least 10 characters.'
    return e
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const validationErrors = validate()

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors)
      return
    }

    setLoading(true)
    await new Promise((resolve) => setTimeout(resolve, 1000))
    setLoading(false)
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <main className="page">
        <div className="container contact-success">
          <div className="success-icon">&#10003;</div>
          <h2>Message Sent!</h2>
          <p>Thank you, <strong>{form.name}</strong>. We&apos;ll get back to you at {form.email} within 48 hours.</p>
          <button
            className="btn btn-primary"
            style={{ marginTop: '24px' }}
            onClick={() => { setForm(INITIAL_FORM); setSubmitted(false) }}
          >
            Send Another Message
          </button>
        </div>
      </main>
    )
  }

  return (
    <main className="page">
      <div className="container contact-container">

        <div className="contact-info">
          <h1 className="page-title">Contact Us</h1>
          <p className="contact-intro">
            Got a tip, spotted an error, or just want to say something?
            We read every message, though we can&apos;t always reply individually.
          </p>
          <ul className="contact-details">
            <li>
              <span className="contact-icon">&#9993;</span>
              <span>tips@newshub.com</span>
            </li>
            <li>
              <span className="contact-icon">&#9993;</span>
              <span>corrections@newshub.com</span>
            </li>
            <li>
              <span className="contact-icon">&#128222;</span>
              <span>+1 (646) 555-0192</span>
            </li>
          </ul>
        </div>

        <form className="contact-form" onSubmit={handleSubmit} noValidate>
          <h2>Send a Message</h2>

          <div className={`form-group ${errors.name ? 'has-error' : ''}`}>
            <label htmlFor="name">Your Name</label>
            <input
              id="name"
              name="name"
              type="text"
              placeholder="John Doe"
              value={form.name}
              onChange={handleChange}
            />
            {errors.name && <span className="form-error">{errors.name}</span>}
          </div>

          <div className={`form-group ${errors.email ? 'has-error' : ''}`}>
            <label htmlFor="email">Email Address</label>
            <input
              id="email"
              name="email"
              type="email"
              placeholder="john@example.com"
              value={form.email}
              onChange={handleChange}
            />
            {errors.email && <span className="form-error">{errors.email}</span>}
          </div>

          <div className={`form-group ${errors.subject ? 'has-error' : ''}`}>
            <label htmlFor="subject">Subject</label>
            <select
              id="subject"
              name="subject"
              value={form.subject}
              onChange={handleChange}
            >
              <option value="">Select a subject…</option>
              <option value="News Tip">News Tip</option>
              <option value="Correction">Request a Correction</option>
              <option value="Advertising">Advertising Enquiry</option>
              <option value="Partnership">Partnership</option>
              <option value="Other">Other</option>
            </select>
            {errors.subject && <span className="form-error">{errors.subject}</span>}
          </div>

          <div className={`form-group ${errors.message ? 'has-error' : ''}`}>
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              rows={6}
              placeholder="Tell us what's on your mind…"
              value={form.message}
              onChange={handleChange}
            />
            {errors.message && <span className="form-error">{errors.message}</span>}
          </div>

          <button
            type="submit"
            className="btn btn-primary contact-submit"
            disabled={loading}
          >
            {loading ? 'Sending…' : 'Send Message'}
          </button>
        </form>

      </div>
    </main>
  )
}
