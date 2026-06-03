import { Link } from 'react-router-dom'

const CORE_VALUES = [
  { icon: '🎯', title: 'Accuracy',      desc: 'Every story we publish is fact-checked and verified before it reaches our readers.' },
  { icon: '🤝', title: 'Integrity',     desc: 'We hold ourselves to the highest journalistic standards with no hidden agendas.' },
  { icon: '🔍', title: 'Transparency',  desc: 'We are open about our sources, methods, and corrections when we get things wrong.' },
  { icon: '💡', title: 'Innovation',    desc: 'We combine quality journalism with modern technology to improve how news is delivered.' },
  { icon: '🌍', title: 'Accessibility', desc: 'Quality news should be free and available to everyone, on any device, anywhere.' },
]

const STATS = [
  { value: '10+',    label: 'News Categories',     icon: '📂' },
  { value: '1,000+', label: 'Articles Accessible', icon: '📰' },
  { value: 'Live',   label: 'Real-Time Updates',   icon: '⚡' },
  { value: '100%',   label: 'Mobile Friendly',     icon: '📱' },
]

export default function About() {
  return (
    <main className="page">

      <section className="about-hero">
        <div className="container about-hero-inner">
          <span className="about-hero-tag">About NewsHub</span>
          <h1>News built for the modern reader</h1>
          <p>
            A modern digital news platform delivering accurate, timely, and engaging
            news across technology, business, sports, entertainment, health, and world affairs.
          </p>
          <div className="about-hero-actions">
            <Link to="/" className="btn btn-primary">Start Reading</Link>
            <Link to="/services" className="btn btn-ghost">View Plans</Link>
          </div>
        </div>
      </section>

      <div className="container">

        <section className="about-intro-section">
          <div className="about-intro-badge">Who We Are</div>
          <p className="about-intro-text">
            NewsHub is a modern digital news platform designed to deliver accurate, timely, and
            engaging news coverage to readers across various categories including technology, business,
            sports, entertainment, health, and world affairs. We believe that staying informed
            should be simple, reliable, and accessible to everyone.
          </p>
        </section>

        <section className="about-mv-section">
          <div className="about-mv-grid">

            <div className="about-mv-card about-mv-card--mission">
              <div className="about-mv-icon">🎯</div>
              <h2 className="about-mv-title">Our Mission</h2>
              <p className="about-mv-text">
                To provide reliable, accessible, and unbiased news that empowers
                readers to stay informed and make better decisions in their daily lives.
              </p>
            </div>

            <div className="about-mv-card about-mv-card--vision">
              <div className="about-mv-icon">🚀</div>
              <h2 className="about-mv-title">Our Vision</h2>
              <p className="about-mv-text">
                To become one of the most trusted and user-friendly digital news platforms
                by combining quality journalism with innovative technology.
              </p>
            </div>

          </div>
        </section>

        <section className="about-values-section">
          <div className="about-section-header">
            <span className="about-intro-badge">What We Stand For</span>
            <h2 className="about-section-h2">Core Values</h2>
          </div>
          <div className="about-values-grid">
            {CORE_VALUES.map((v, i) => (
              <div key={v.title} className="about-value-card" style={{ animationDelay: `${i * 0.1}s` }}>
                <span className="about-value-icon">{v.icon}</span>
                <h3 className="about-value-title">{v.title}</h3>
                <p className="about-value-desc">{v.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="about-stats-section">
          <div className="about-stats">
            {STATS.map(s => (
              <div key={s.label} className="stat-card">
                <span className="about-stat-icon">{s.icon}</span>
                <span className="stat-number">{s.value}</span>
                <span className="stat-label">{s.label}</span>
              </div>
            ))}
          </div>
        </section>

        <section className="about-founder-section">
          <div className="about-section-header">
            <span className="about-intro-badge">The Developer</span>
            <h2 className="about-section-h2">Meet the Founder</h2>
          </div>
          <div className="about-founder-card">
            <div className="about-founder-avatar">AM</div>
            <div className="about-founder-info">
              <h2 className="about-founder-name">Afolabi Abdulmuiz</h2>
              <span className="about-founder-role">Computer Science Student &amp; Developer</span>
              <p className="about-founder-bio">
                This platform was developed as a university React project by Afolabi Abdulmuiz,
                a Computer Science student passionate about technology, software development, and
                creating digital solutions that improve access to information. NewsHub represents
                the intersection of modern web development and a genuine belief that quality
                news should be accessible to everyone.
              </p>
              <div className="about-founder-tags">
                <span className="about-tag">React Developer</span>
                <span className="about-tag">Computer Science</span>
                <span className="about-tag">Open Source</span>
              </div>
            </div>
          </div>
        </section>

      </div>

      <section className="about-cta">
        <div className="container about-cta-inner">
          <h2>Ready to stay informed?</h2>
          <p>Join thousands of readers who trust NewsHub for their daily news.</p>
          <div className="about-cta-actions">
            <Link to="/register" className="btn btn-primary">Create Free Account</Link>
            <Link to="/" className="btn btn-ghost">Browse News</Link>
          </div>
        </div>
      </section>

    </main>
  )
}
