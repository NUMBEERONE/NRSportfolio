'use client';

const experiences = [
  {
    role: 'GRC Intern',
    company: 'Nepal Realistic Solutions (NRS)',
    period: '2025 – Present',
    type: 'Internship',
    location: 'Kathmandu, Nepal',
    color: '#f5820a',
    desc: 'Supporting the GRC team in implementing and maintaining information security management systems aligned with ISO 27001. Conducting risk assessments, drafting security policies, and assisting in compliance gap analyses for enterprise clients.',
    highlights: [
      'Assisted in ISO 27001 gap analysis for 3 enterprise clients',
      'Drafted 10+ information security policies and procedures',
      'Supported internal audit evidence collection and review',
      'Maintained risk register and tracked remediation activities',
    ],
  },
  {
    role: 'Cybersecurity Research Volunteer',
    company: 'Kathmandu University',
    period: '2024 – 2025',
    type: 'Volunteer',
    location: 'Dhulikhel, Nepal',
    color: '#1a3a5c',
    desc: 'Contributed to university research on cybersecurity awareness and data protection practices in Nepali SMEs, helping produce actionable recommendations for improving organizational security posture.',
    highlights: [
      'Surveyed 50+ SMEs on security awareness maturity',
      'Co-authored a report on GDPR applicability in Nepal',
      'Delivered cybersecurity awareness sessions to students',
    ],
  },
];

const areas = [
  { icon: '🏛️', label: 'Governance' },
  { icon: '⚖️', label: 'Risk Management' },
  { icon: '📋', label: 'Compliance' },
  { icon: '🔐', label: 'Information Security' },
  { icon: '📊', label: 'Audit Support' },
  { icon: '🌐', label: 'Data Privacy' },
  { icon: '🛡️', label: 'ISO 27001' },
  { icon: '🔏', label: 'GDPR' },
];

export default function ExperienceSection() {
  return (
    <section id="experience" style={{ padding: '100px 0', background: '#f8fafc' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px' }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: '3fr 2fr',
          gap: '60px',
        }} className="exp-grid">

          {/* Left – Experience Timeline */}
          <div>
            <div className="section-label">— Who I Work With</div>
            <h2 style={{ fontSize: 'clamp(1.6rem, 2.5vw, 2rem)', fontWeight: 800, color: '#0f2a4a', marginBottom: '36px' }}>
              Experience & Background
            </h2>

            <div style={{ position: 'relative', paddingLeft: '30px', borderLeft: '2px solid #e5e7eb' }}>
              {experiences.map((exp, idx) => (
                <div
                  key={exp.role}
                  className="timeline-item"
                  style={{
                    position: 'relative',
                    marginBottom: idx < experiences.length - 1 ? '40px' : '0',
                  }}
                >
                  {/* Dot */}
                  <div style={{
                    position: 'absolute', left: '-37px', top: '8px',
                    width: 14, height: 14, borderRadius: '50%',
                    background: exp.color,
                    border: '3px solid #fff',
                    boxShadow: `0 0 0 2px ${exp.color}`,
                  }} />

                  <div style={{
                    background: '#fff',
                    border: '1px solid #e5e7eb',
                    borderRadius: '14px',
                    padding: '24px',
                    boxShadow: '0 2px 12px rgba(0,0,0,0.06)',
                  }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '8px', marginBottom: '12px' }}>
                      <div>
                        <h3 style={{ color: '#0f2a4a', fontWeight: 700, fontSize: '1.05rem' }}>{exp.role}</h3>
                        <p style={{ color: exp.color, fontWeight: 600, fontSize: '0.9rem' }}>{exp.company}</p>
                        <p style={{ color: '#888', fontSize: '0.8rem', marginTop: '2px' }}>📍 {exp.location}</p>
                      </div>
                      <div style={{ textAlign: 'right' }}>
                        <span style={{
                          background: `${exp.color}18`,
                          color: exp.color,
                          border: `1px solid ${exp.color}40`,
                          borderRadius: '50px',
                          padding: '4px 12px',
                          fontSize: '0.75rem',
                          fontWeight: 600,
                          display: 'block',
                          marginBottom: '4px',
                        }}>{exp.type}</span>
                        <span style={{ color: '#888', fontSize: '0.78rem' }}>📅 {exp.period}</span>
                      </div>
                    </div>

                    <p style={{ color: '#666', fontSize: '0.87rem', lineHeight: 1.7, marginBottom: '16px' }}>{exp.desc}</p>

                    <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '6px' }}>
                      {exp.highlights.map((h) => (
                        <li key={h} style={{ display: 'flex', alignItems: 'flex-start', gap: '8px', color: '#555', fontSize: '0.83rem' }}>
                          <span style={{ color: '#f5820a', marginTop: '2px', flexShrink: 0 }}>✓</span>
                          {h}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right – Business Areas + Quote */}
          <div>
            <div className="section-label">— Business Areas</div>
            <h2 style={{ fontSize: 'clamp(1.6rem, 2.5vw, 2rem)', fontWeight: 800, color: '#0f2a4a', marginBottom: '28px' }}>
              Areas of Focus
            </h2>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px', marginBottom: '40px' }}>
              {areas.map((area) => (
                <div
                  key={area.label}
                  style={{
                    display: 'flex', alignItems: 'center', gap: '10px',
                    background: '#fff', border: '1px solid #e5e7eb',
                    borderRadius: '10px', padding: '12px',
                    transition: 'all 0.2s',
                    cursor: 'default',
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLDivElement).style.borderColor = '#f5820a';
                    (e.currentTarget as HTMLDivElement).style.background = 'rgba(245,130,10,0.04)';
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLDivElement).style.borderColor = '#e5e7eb';
                    (e.currentTarget as HTMLDivElement).style.background = '#fff';
                  }}
                >
                  <span style={{ fontSize: '1.1rem' }}>{area.icon}</span>
                  <span style={{ color: '#0f2a4a', fontSize: '0.83rem', fontWeight: 500 }}>{area.label}</span>
                </div>
              ))}
            </div>

            {/* Why Me card */}
            <div style={{
              background: 'linear-gradient(135deg, #0f2a4a, #1a3a5c)',
              borderRadius: '16px',
              padding: '28px',
              color: '#fff',
            }}>
              <h3 style={{ fontWeight: 700, fontSize: '1.05rem', marginBottom: '12px', color: '#f5820a' }}>Why Manoj?</h3>
              <p style={{ color: '#94b8d4', fontSize: '0.85rem', lineHeight: 1.7, marginBottom: '16px' }}>
                I bring a fresh, motivated perspective to GRC challenges. With strong foundational knowledge and hands-on internship experience, I help teams move faster without sacrificing compliance quality.
              </p>
              <div style={{
                background: 'rgba(245,130,10,0.1)',
                borderRadius: '10px',
                padding: '16px',
                fontStyle: 'italic',
                color: '#cde4f5',
                fontSize: '0.85rem',
                borderLeft: '3px solid #f5820a',
              }}>
                &ldquo;Building stronger compliance frameworks for a more secure tomorrow.&rdquo;
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .exp-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
