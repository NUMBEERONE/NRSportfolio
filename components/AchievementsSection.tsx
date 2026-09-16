'use client';

const achievements = [
  {
    year: '2023',
    title: 'Computer Science & Security Foundation',
    desc: 'Completed foundational coursework in computer science, computer networks, database management, and information security.',
  },
  {
    year: '2024',
    title: 'ISO 27001 & GRC Specialization',
    desc: 'Undertook rigorous self-directed and structured training on ISO/IEC 27001:2022 ISMS, risk registers, and NIST CSF.',
  },
  {
    year: '2025',
    title: 'GRC Intern @ Nepal Realistic Solutions',
    desc: 'Secured GRC Internship at NRS, actively supporting enterprise risk reviews, ISO 27001 gap analyses, and policy drafting.',
  },
  {
    year: '2026',
    title: 'AI Governance & Emerging Compliance',
    desc: 'Researching emerging AI governance frameworks, cloud compliance automation, and next-generation data privacy.',
  },
];

export default function AchievementsSection() {
  return (
    <section id="achievements" style={{ padding: '100px 0', backgroundColor: '#ffffff' }}>
      <div style={{ maxWidth: '1240px', margin: '0 auto', padding: '0 28px' }}>
        {/* Section Header */}
        <div style={{ textAlign: 'center', marginBottom: '60px' }}>
          <span className="section-tagline">Academic & Professional Journey</span>
          <h2
            className="litho-heading section-main-title"
            style={{ textTransform: 'uppercase' }}
          >
            <span className="litho-primary-title">achieve</span>
            <span className="litho-secondary-title" style={{ color: '#0038e3' }}>
              ments
            </span>
          </h2>
          <p style={{ maxWidth: '580px', margin: '14px auto 0', color: '#6b7280', fontSize: '1rem', lineHeight: 1.7 }}>
            A journey of learning, practical internship experience, and building foundational expertise in Governance, Risk & Compliance.
          </p>
        </div>

        {/* 2-Column Year Cards Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(2, 1fr)',
            gap: '24px',
          }}
          className="achievements-grid"
        >
          {achievements.map((item) => (
            <div
              key={item.year}
              className="hvr-float-3px"
              style={{
                backgroundColor: '#f8fafc',
                border: '1px solid #e2e8f0',
                borderRadius: '12px',
                padding: '28px 32px',
                display: 'grid',
                gridTemplateColumns: '120px 1fr',
                gap: '24px',
                alignItems: 'center',
              }}
            >
              {/* Year badge */}
              <div
                style={{
                  borderRight: '2px solid #e2e8f0',
                  paddingRight: '16px',
                }}
              >
                <span
                  style={{
                    fontSize: 'clamp(1.8rem, 3vw, 2.4rem)',
                    fontWeight: 900,
                    color: '#0038e3',
                    lineHeight: 1,
                    display: 'block',
                  }}
                >
                  {item.year}
                </span>
                <span style={{ fontSize: '0.75rem', fontWeight: 700, color: '#64748b', textTransform: 'uppercase', letterSpacing: '1px' }}>
                  Milestone
                </span>
              </div>

              {/* Title & Desc */}
              <div>
                <h3
                  style={{
                    fontSize: '1.15rem',
                    fontWeight: 800,
                    color: '#111827',
                    marginBottom: '6px',
                  }}
                >
                  {item.title}
                </h3>
                <p style={{ color: '#4b5563', fontSize: '0.9rem', lineHeight: 1.6 }}>
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .achievements-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
