'use client';

const verticals = [
  {
    icon: '🏦',
    title: 'FINANCIAL & BANKING',
    desc: 'Assisting in evaluating regulatory compliance directives, SOC 2 readiness checklists, and risk documentation for fintech applications and banking systems.',
  },
  {
    icon: '💻',
    title: 'TECHNOLOGY & CLOUD SAAS',
    desc: 'Supporting ISO/IEC 27001 ISMS implementations, cloud compliance mapping (AWS/Azure), secure SDLC policy drafting, and access control testing for technology startups.',
  },
  {
    icon: '📡',
    title: 'TELECOM & ENTERPRISE',
    desc: 'Contributing to Business Continuity Planning (ISO 22301) documentation, disaster recovery procedure drafts, and enterprise risk register maintenance.',
  },
  {
    icon: '🏥',
    title: 'HEALTHCARE & DATA PROTECTION',
    desc: 'Supporting HIPAA security requirement reviews, patient privacy protection guidelines, and Data Protection Impact Assessment (DPIA) workflows.',
  },
];

export default function IndustryVerticalsSection() {
  return (
    <section id="verticals" style={{ padding: '110px 0', backgroundColor: '#ffffff' }}>
      <div style={{ maxWidth: '1240px', margin: '0 auto', padding: '0 28px' }}>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '0.9fr 1.1fr',
            gap: '60px',
            alignItems: 'center',
          }}
          className="verticals-split-grid"
        >
          {/* Left: Executive Portrait Visual */}
          <div style={{ position: 'relative', display: 'flex', justifyContent: 'center' }}>
            <div
              style={{
                position: 'relative',
                borderRadius: '20px',
                overflow: 'hidden',
                boxShadow: '0 20px 50px rgba(0, 56, 227, 0.12)',
                border: '1px solid #e2e8f0',
                background: 'linear-gradient(145deg, #0b1120 0%, #1e293b 100%)',
                maxWidth: '460px',
                width: '100%',
                padding: '40px 32px',
                color: '#ffffff',
              }}
            >
              {/* Monogram Badge */}
              <div
                style={{
                  width: '90px',
                  height: '90px',
                  borderRadius: '16px',
                  background: 'linear-gradient(135deg, #0038e3 0%, #3b82f6 100%)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontWeight: 900,
                  fontSize: '2.4rem',
                  color: '#ffffff',
                  marginBottom: '28px',
                  boxShadow: '0 10px 25px rgba(0, 56, 227, 0.4)',
                }}
              >
                MO
              </div>

              <h3 style={{ fontSize: '1.8rem', fontWeight: 800, marginBottom: '6px', color: '#ffffff' }}>
                Manoj Oli
              </h3>
              <p style={{ color: '#93c5fd', fontWeight: 600, fontSize: '0.95rem', marginBottom: '24px' }}>
                GRC Intern @ Nepal Realistic Solutions
              </p>

              {/* Badges list */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '28px' }}>
                {[
                  { label: 'Role', value: 'GRC Intern' },
                  { label: 'Company', value: 'Nepal Realistic Solutions' },
                  { label: 'Focus', value: 'ISO 27001 & Risk Assessment' },
                  { label: 'Location', value: 'Kathmandu, Nepal' },
                ].map((item) => (
                  <div
                    key={item.label}
                    style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      backgroundColor: 'rgba(255, 255, 255, 0.06)',
                      padding: '10px 16px',
                      borderRadius: '8px',
                      border: '1px solid rgba(255, 255, 255, 0.1)',
                    }}
                  >
                    <span style={{ fontSize: '0.8rem', color: '#94a3b8', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
                      {item.label}
                    </span>
                    <span style={{ fontSize: '0.88rem', fontWeight: 700, color: '#f8fafc' }}>
                      {item.value}
                    </span>
                  </div>
                ))}
              </div>

              {/* LinkedIn button */}
              <a
                href="https://www.linkedin.com/in/manoj-oli-a28840301/"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '8px',
                  backgroundColor: '#0038e3',
                  color: '#ffffff',
                  textDecoration: 'none',
                  padding: '12px 20px',
                  borderRadius: '8px',
                  fontWeight: 700,
                  fontSize: '0.88rem',
                  letterSpacing: '0.5px',
                  marginBottom: '16px',
                  transition: 'background-color 0.2s',
                }}
                onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#1d4ed8')}
                onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = '#0038e3')}
              >
                <span>View LinkedIn Profile</span>
                <span>↗</span>
              </a>

              {/* Status Pill */}
              <div
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  backgroundColor: 'rgba(34, 197, 94, 0.15)',
                  border: '1px solid rgba(34, 197, 94, 0.3)',
                  borderRadius: '50px',
                  padding: '6px 16px',
                  width: '100%',
                  justifyContent: 'center',
                }}
              >
                <span style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: '#22c55e', boxShadow: '0 0 8px #22c55e' }} />
                <span style={{ color: '#22c55e', fontSize: '0.8rem', fontWeight: 700 }}>
                  Open to GRC & Associate Opportunities
                </span>
              </div>
            </div>
          </div>

          {/* Right: Industry Verticals List */}
          <div>
            <span className="section-tagline">Sectors & Domains</span>
            <h2
              className="litho-heading section-main-title"
              style={{ textTransform: 'uppercase', marginBottom: '32px' }}
            >
              <span className="litho-primary-title">Industry</span>{' '}
              <span className="litho-secondary-title" style={{ color: '#0038e3' }}>
                focus
              </span>
            </h2>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              {verticals.map((v) => (
                <div
                  key={v.title}
                  className="hvr-float-3px"
                  style={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: '20px',
                    padding: '24px',
                    backgroundColor: '#f8fafc',
                    borderRadius: '12px',
                    border: '1px solid #e2e8f0',
                  }}
                >
                  <div
                    style={{
                      width: '50px',
                      height: '50px',
                      borderRadius: '10px',
                      backgroundColor: '#ffffff',
                      boxShadow: '0 4px 12px rgba(0, 56, 227, 0.08)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: '1.6rem',
                      flexShrink: 0,
                      border: '1px solid #e2e8f0',
                    }}
                  >
                    {v.icon}
                  </div>

                  <div>
                    <h3
                      style={{
                        fontSize: '1.05rem',
                        fontWeight: 800,
                        color: '#111827',
                        letterSpacing: '0.5px',
                        marginBottom: '6px',
                      }}
                    >
                      {v.title}
                    </h3>
                    <p style={{ color: '#4b5563', fontSize: '0.9rem', lineHeight: 1.65 }}>
                      {v.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .verticals-split-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
