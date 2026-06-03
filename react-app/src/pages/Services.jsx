import { Link } from 'react-router-dom'

const PLANS = [
  {
    name: 'Free Reader',
    icon: '📰',
    price: 'Free',
    period: '',
    description: 'Everything you need to stay informed, at no cost.',
    features: [
      'Access latest news',
      'Search articles',
      'Browse categories',
      'Save up to 10 articles',
    ],
    cta: 'Get Started',
    ctaLink: '/register',
    featured: false,
    btnStyle: 'btn-outline',
  },
  {
    name: 'Premium Reader',
    icon: '⭐',
    price: '₦2,500',
    period: '/month',
    description: 'The full NewsHub experience, completely ad-free.',
    features: [
      'Unlimited saved articles',
      'Ad-free experience',
      'Premium articles',
      'Personalized recommendations',
      'Breaking news alerts',
    ],
    cta: 'Go Premium',
    ctaLink: '/register',
    featured: true,
    btnStyle: 'btn-primary',
  },
  {
    name: 'Newsletter',
    icon: '✉️',
    price: 'Free',
    period: '',
    description: 'Stay informed without even visiting the site.',
    features: [
      'Daily news digest',
      'Weekly highlights',
      'Personalized topics',
    ],
    cta: 'Subscribe Free',
    ctaLink: '/contact',
    featured: false,
    btnStyle: 'btn-outline',
  },
]

const PERKS = [
  { icon: '🔒', title: 'Secure & Private',  desc: 'Your data is never sold or shared with third parties.' },
  { icon: '📱', title: 'All Devices',        desc: 'Seamless experience on mobile, tablet, and desktop.' },
  { icon: '⚡', title: 'Always Updated',    desc: 'Fresh headlines fetched every time you visit.' },
  { icon: '💳', title: 'Cancel Anytime',    desc: 'No contracts, no commitments, no hidden fees.' },
]

export default function Services() {
  return (
    <main className="page">

      <section className="services-hero">
        <div className="container services-hero-inner">
          <h1>Simple, transparent pricing</h1>
          <p>
            Whether you&apos;re a casual reader or a news junkie,
            there&apos;s a plan that fits the way you read.
          </p>
        </div>
      </section>

      <div className="container">

        <section className="pricing-section">
          <div className="pricing-grid">
            {PLANS.map((plan) => (
              <div
                key={plan.name}
                className={`pricing-card${plan.featured ? ' pricing-card--featured' : ''}`}
              >
                {plan.featured && (
                  <span className="pricing-badge">Most Popular</span>
                )}

                <div className="pricing-icon">{plan.icon}</div>
                <h2 className="pricing-name">{plan.name}</h2>
                <p className="pricing-desc">{plan.description}</p>

                <div className="pricing-price">
                  <span className="pricing-amount">{plan.price}</span>
                  {plan.period && <span className="pricing-period">{plan.period}</span>}
                </div>

                <ul className="pricing-features">
                  {plan.features.map((f) => (
                    <li key={f}>
                      <span className="pricing-check">✓</span>
                      {f}
                    </li>
                  ))}
                </ul>

                <Link to={plan.ctaLink} className={`btn ${plan.btnStyle} pricing-cta`}>
                  {plan.cta}
                </Link>
              </div>
            ))}
          </div>
        </section>

        <section className="perks-section">
          <h2 className="section-title">Why NewsHub?</h2>
          <div className="perks-grid">
            {PERKS.map((perk) => (
              <div key={perk.title} className="perk-card">
                <span className="perk-icon">{perk.icon}</span>
                <h3 className="perk-title">{perk.title}</h3>
                <p className="perk-desc">{perk.desc}</p>
              </div>
            ))}
          </div>
        </section>

      </div>
    </main>
  )
}
