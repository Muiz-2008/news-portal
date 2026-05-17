// About.jsx — static page with information about the news portal

const TEAM = [
  {
    name:  'Sarah Mitchell',
    role:  'Editor in Chief',
    bio:   '20 years covering international affairs for major global outlets. Previously with the BBC World Service.',
    initials: 'SM',
    color: '#e63946',
  },
  {
    name:  'James Okonkwo',
    role:  'Head of Technology',
    bio:   'Former Silicon Valley engineer turned tech journalist. Specialises in AI, semiconductors, and Big Tech.',
    initials: 'JO',
    color: '#2563eb',
  },
  {
    name:  'Amina Hassan',
    role:  'Senior World Correspondent',
    bio:   'Based in Nairobi, covering sub-Saharan Africa, the Horn of Africa, and global diplomacy.',
    initials: 'AH',
    color: '#16a34a',
  },
  {
    name:  'Carlos Fernandez',
    role:  'Sports Editor',
    bio:   'Award-winning sports writer who has covered four FIFA World Cups and three Olympic Games.',
    initials: 'CF',
    color: '#7c3aed',
  },
]

const STATS = [
  { number: '12M+',   label: 'Monthly Readers' },
  { number: '140+',   label: 'Countries Reached' },
  { number: '50+',    label: 'Staff Journalists' },
  { number: '24/7',   label: 'Live Coverage' },
]

export default function About() {
  return (
    <main className="page">

      {/* Hero banner */}
      <section className="about-hero">
        <div className="container about-hero-inner">
          <h1>About NewsHub</h1>
          <p>
            NewsHub is an independent digital news organisation committed to
            delivering accurate, timely, and impartial journalism to readers
            worldwide. We believe that access to quality information is a
            fundamental right.
          </p>
        </div>
      </section>

      <div className="container">

        {/* Mission */}
        <section className="about-section">
          <h2 className="section-title">Our Mission</h2>
          <div className="about-mission">
            <p>
              Founded in 2018, NewsHub began as a small team of journalists who
              believed the internet deserved a news outlet that prioritised depth
              over clicks. Eight years later, we reach over 12 million readers
              every month across 140 countries — but our editorial principles
              have never changed.
            </p>
            <p>
              Every story we publish is verified by at least two independent
              sources. We correct errors publicly and promptly. We do not accept
              native advertising or allow advertisers to influence editorial
              decisions. Our funding comes from reader subscriptions, transparent
              display advertising, and foundation grants.
            </p>
          </div>
        </section>

        {/* Stats */}
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

        {/* Team */}
        <section className="about-section">
          <h2 className="section-title">Our Team</h2>
          <div className="team-grid">
            {TEAM.map((member) => (
              <div key={member.name} className="team-card">
                {/* Avatar circle with initials */}
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
