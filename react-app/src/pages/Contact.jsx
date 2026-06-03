import { useState } from 'react'

const INITIAL_FORM = { name: '', email: '', subject: '', message: '' }

const CONTACT_INFO = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81a19.79 19.79 0 01-3.07-8.68A2 2 0 012 .92h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.91 8.91a16 16 0 006.18 6.18l1.35-1.35a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
      </svg>
    ),
    label: 'Phone',
    value: '+234 9038913821',
    action: { href: 'tel:+2349038913821', text: 'Call Now' },
    color: '#16a34a',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
        <polyline points="22,6 12,13 2,6" />
      </svg>
    ),
    label: 'Email',
    value: 'contact@newshub.com',
    action: { href: 'mailto:contact@newshub.com', text: 'Send Email' },
    color: '#2563eb',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
        <circle cx="12" cy="10" r="3" />
      </svg>
    ),
    label: 'Location',
    value: 'Lagos, Nigeria',
    action: null,
    color: '#e63946',
  },
]

const FAQS = [
  { q: 'How do I submit a news tip?',          a: 'Fill out the contact form above and select "News Tip" as the subject. Our editorial team reviews every tip we receive.' },
  { q: 'How can I report an error in an article?', a: 'Select "Request a Correction" from the subject dropdown and describe the issue. We take corrections seriously and respond quickly.' },
  { q: 'How do I upgrade to Premium?',         a: 'Visit our Services page and click "Go Premium". You can upgrade at any time and cancel whenever you like.' },
  { q: 'Can I republish NewsHub content?',     a: 'Our content is protected by copyright. For licensing enquiries, get in touch using the "Other" subject option on the form.' },
  { q: 'How do I delete my account?',          a: 'Send us a message via the contact form with the subject "Other" and include your registered email. We will process your request within 48 hours.' },
]

export default function Contact() {
  const [form,      setForm]      = useState(INITIAL_FORM)
  const [errors,    setErrors]    = useState({})
  const [submitted, setSubmitted] = useState(false)
  const [loading,   setLoading]   = useState(false)
  const [openFaq,   setOpenFaq]   = useState(null)

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm(prev => ({ ...prev, [name]: value }))
    if (errors[name]) setErrors(prev => ({ ...prev, [name]: '' }))
  }

  const validate = () => {
    const e = {}
    if (!form.name.trim())                         e.name    = 'Full name is required.'
    if (!form.email.trim())                        e.email   = 'Email is required.'
    else if (!/\S+@\S+\.\S+/.test(form.email))    e.email   = 'Enter a valid email address.'
    if (!form.subject.trim())                      e.subject = 'Please select a subject.'
    if (form.message.trim().length < 10)           e.message = 'Message must be at least 10 characters.'
    return e
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const errs = validate()
    if (Object.keys(errs).length) { setErrors(errs); return }
    setLoading(true)
    await new Promise(r => setTimeout(r, 1000))
    setLoading(false)
    setSubmitted(true)
  }

  return (
    <main className="page">

      <section className="contact-hero">
        <div className="container contact-hero-inner">
          <span className="about-intro-badge">Get In Touch</span>
          <h1>We&apos;d love to hear from you</h1>
          <p>Have a news tip, spotted an error, or just want to say hello? We read every message.</p>
        </div>
      </section>

      <div className="container">

        <div className="contact-cards">
          {CONTACT_INFO.map(c => (
            <div key={c.label} className="contact-card">
              <div className="contact-card-icon" style={{ background: `${c.color}18`, color: c.color }}>
                {c.icon}
              </div>
              <h3 className="contact-card-label">{c.label}</h3>
              <p className="contact-card-value">{c.value}</p>
              {c.action && (
                <a href={c.action.href} className="contact-card-action" style={{ color: c.color }}>
                  {c.action.text} →
                </a>
              )}
            </div>
          ))}
        </div>

        <div className="contact-main-grid">

          <div className="contact-form-wrap">
            <h2 className="contact-form-title">Send a Message</h2>
            <p className="contact-form-sub">Fill in the form below and we&apos;ll get back to you within 48 hours.</p>

            {submitted ? (
              <div className="contact-success-inline">
                <div className="success-icon">✓</div>
                <h3>Message Sent!</h3>
                <p>Thank you, <strong>{form.name}</strong>. We&apos;ll reply to {form.email} within 48 hours.</p>
                <button
                  className="btn btn-primary"
                  style={{ marginTop: '20px' }}
                  onClick={() => { setForm(INITIAL_FORM); setSubmitted(false) }}
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate className="contact-form-inner">

                <div className="auth-two-col">
                  <div className={`form-group ${errors.name ? 'has-error' : ''}`}>
                    <label htmlFor="name">Full Name</label>
                    <input id="name" name="name" type="text" placeholder="John Doe" value={form.name} onChange={handleChange} />
                    {errors.name && <span className="form-error">{errors.name}</span>}
                  </div>
                  <div className={`form-group ${errors.email ? 'has-error' : ''}`}>
                    <label htmlFor="email">Email Address</label>
                    <input id="email" name="email" type="email" placeholder="you@example.com" value={form.email} onChange={handleChange} />
                    {errors.email && <span className="form-error">{errors.email}</span>}
                  </div>
                </div>

                <div className={`form-group ${errors.subject ? 'has-error' : ''}`}>
                  <label htmlFor="subject">Subject</label>
                  <select id="subject" name="subject" value={form.subject} onChange={handleChange}>
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
                  <textarea id="message" name="message" rows={6} placeholder="Tell us what's on your mind…" value={form.message} onChange={handleChange} />
                  {errors.message && <span className="form-error">{errors.message}</span>}
                </div>

                <button type="submit" className="btn btn-primary contact-submit" disabled={loading}>
                  {loading ? 'Sending…' : 'Send Message'}
                </button>

              </form>
            )}
          </div>

          <div className="contact-side">
            <div className="contact-side-card">
              <h3 className="contact-side-title">Quick Contact</h3>
              <a href="tel:+2349038913821" className="btn btn-primary contact-call-btn">
                📞 Call Us Now
              </a>
              <a href="mailto:contact@newshub.com" className="btn btn-outline contact-call-btn">
                ✉️ Send Email
              </a>
              <div className="contact-hours">
                <h4>Office Hours</h4>
                <p>Monday – Friday<br /><strong>8:00 AM – 6:00 PM WAT</strong></p>
                <p>Saturday<br /><strong>9:00 AM – 2:00 PM WAT</strong></p>
              </div>
            </div>
          </div>

        </div>

        <section className="contact-faq">
          <div className="about-section-header">
            <span className="about-intro-badge">FAQ</span>
            <h2 className="about-section-h2">Frequently Asked Questions</h2>
          </div>
          <div className="faq-list">
            {FAQS.map((item, i) => (
              <div key={i} className={`faq-item${openFaq === i ? ' faq-item--open' : ''}`}>
                <button className="faq-question" onClick={() => setOpenFaq(openFaq === i ? null : i)}>
                  <span>{item.q}</span>
                  <span className="faq-icon">{openFaq === i ? '−' : '+'}</span>
                </button>
                {openFaq === i && (
                  <div className="faq-answer">{item.a}</div>
                )}
              </div>
            ))}
          </div>
        </section>

      </div>
    </main>
  )
}
