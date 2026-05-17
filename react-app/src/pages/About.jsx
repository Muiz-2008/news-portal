const TEAM = [
  {
    name:     'Sarah Mitchell',
    role:     'Editor in Chief',
    bio:      'Spent 12 years at regional papers before going digital. Still thinks the best stories come from people, not press releases.',
    initials: 'SM',
    color:    '#e63946',
  },
  {
    name:     'James Okonkwo',
    role:     'Technology Editor',
    bio:      'Ex-software engineer who got tired of building things nobody understood. Writes about tech in plain language.',
    initials: 'JO',
    color:    '#2563eb',
  },
  {
    name:     'Amina Hassan',
    role:     'International Correspondent',
    bio:      'Based between Nairobi and London. Covers the stories that rarely make the front page in the west.',
    initials: 'AH',
    color:    '#16a34a',
  },
  {
    name:     'Carlos Fernandez',
    role:     'Sports Editor',
    bio:      'Covered three World Cups and more heartbreaks than he cares to count. Believes sports tells you everything about a society.',
    initials: 'CF',
    color:    '#7c3aed',
  },
]

const STATS = [
  { number: '4.2M',  label: 'Monthly Readers' },
  { number: '80+',   label: 'Countries' },
  { number: '2019',  label: 'Founded' },
  { number: '24/7',  label: 'Live Updates' },
]

export default function About() {
  return (
    <main className="page">

      <section className="about-hero">
        <div className="container about-hero-inner">
          <h1>About NewsHub</h1>
          <p>
            We started NewsHub because we were frustrated with news sites that
            made it harder to read the news than to find it. Too many ads,
            too many pop-ups, too little substance.
          </p>
        </div>
      </section>

      <div className="container">

        <section className="about-section">
          <h2 className="section-title">How we got here</h2>
          <div className="about-mission">
            <p>
              NewsHub launched in 2019 as a weekend side project. Four journalists
              who had all worked at different outlets, all frustrated by the same
              things — shrinking budgets, clickbait pressure, stories that got
              killed because they weren&apos;t &quot;engaging&quot; enough.
              The idea was simple: build a news site that respects the reader.
            </p>
            <p>
              We don&apos;t have a parent company. We don&apos;t take money from
              political campaigns. We don&apos;t publish stories we haven&apos;t
              verified. When we get something wrong — and it happens — we correct it
              publicly, in the article, not buried in a footnote three days later.
              That&apos;s the whole policy.
            </p>
          </div>
        </section>

        <section className="about-stats-section">
          <div className="about-stats">
            {STATS.map((s) => (
              <div key={s.label} className="stat-card">
                <span className="stat-number">{s.number}</span>
                <span className="stat-label">{s.label}</span>
              </div>
            ))}
          </div>
        </section>

        <section className="about-section">
          <h2 className="section-title">The team</h2>
          <div className="team-grid">
            {TEAM.map((member) => (
              <div key={member.name} className="team-card">
                <div className="team-avatar" style={{ backgroundColor: member.color }}>
                  {member.initials}
                </div>
                <h3 className="team-name">{member.name}</h3>
                <span className="team-role">{member.role}</span>
                <p className="team-bio">{member.bio}</p>
              </div>
            ))}
          </div>
        </section>

      </div>
    </main>
  )
}
