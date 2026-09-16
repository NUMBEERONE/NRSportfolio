'use client';

const projects = [
  {
    icon: '🏢',
    category: 'ISO 27001',
    title: 'ISMS Gap Analysis – SME Client',
    period: 'Jan 2025 – Mar 2025',
    status: 'Completed',
    statusColor: '#16a34a',
    desc: 'Conducted a comprehensive ISO 27001:2022 gap analysis for a mid-sized IT services company in Kathmandu. Identified 40+ control gaps and provided a prioritized remediation roadmap.',
    outcomes: [
      'Delivered 35-page gap analysis report',
      'Identified critical gaps in A.8 (Technology Controls)',
      'Recommended 3-phase remediation roadmap',
    ],
    tags: ['ISO 27001', 'Gap Analysis', 'ISMS', 'Risk Register'],
  },
  {
    icon: '📊',
    category: 'Risk Management',
    title: 'Enterprise Risk Register Development',
    period: 'Sep 2024 – Nov 2024',
    status: 'Completed',
    statusColor: '#16a34a',
    desc: 'Built an enterprise-wide risk register for a fintech startup, mapping risks to business processes and regulatory requirements. Facilitated risk workshops with senior management.',
    outcomes: [
      'Catalogued 80+ organizational risks',
      'Implemented risk scoring methodology',
      'Created executive risk dashboard in Power BI',
    ],
    tags: ['Risk Register', 'Fintech', 'Power BI', 'Risk Assessment'],
  },
  {
    icon: '🔐',
    category: 'Data Privacy',
    title: 'GDPR Compliance Program – E-Commerce',
    period: 'Jul 2024 – Sep 2024',
    status: 'Completed',
    statusColor: '#16a34a',
    desc: 'Assisted an e-commerce company in establishing a GDPR compliance program including data mapping, privacy policy updates, and implementation of data subject request processes.',
    outcomes: [
      'Completed data flow mapping for 15 systems',
      'Drafted privacy notice and cookie policy',
      'Established DSR handling procedures',
    ],
    tags: ['GDPR', 'Data Privacy', 'Data Mapping', 'Compliance'],
  },
  {
    icon: '🛡️',
    category: 'Security Policy',
    title: 'Security Policy Suite Development',
    period: 'Apr 2024 – Jun 2024',
    status: 'Completed',
    statusColor: '#16a34a',
    desc: 'Developed a comprehensive set of 15 information security policies for an NGO, covering acceptable use, access control, incident response, and business continuity.',
    outcomes: [
      'Authored 15 security policies',
      'Aligned with ISO 27001 and NIST CSF',
      'Facilitated policy awareness training',
    ],
    tags: ['Policy Development', 'ISO 27001', 'NIST CSF', 'Training'],
  },
];

export default function ProjectsSection() {
  return (
    <section id="projects" style={{ padding: '100px 0', background: '#f8fafc' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px' }}>
        {/* Header */}
        <div style={{ marginBottom: '60px' }}>
          <div className="section-label">— My Projects</div>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: '16px' }}>
            <h2 style={{ fontSize: 'clamp(1.8rem, 3vw, 2.4rem)', fontWeight: 800, color: '#0f2a4a' }}>
              GRC Projects & Case Studies
            </h2>
            <span style={{ color: '#f5820a', fontWeight: 600, fontSize: '0.85rem', cursor: 'pointer' }}>
              View All Projects →
            </span>
          </div>
          <p style={{ color: '#666', marginTop: '12px', lineHeight: 1.7, maxWidth: '600px' }}>
            Hands-on GRC projects demonstrating practical application of risk management, compliance, and governance frameworks.
          </p>
        </div>

        {/* Projects Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
          gap: '24px',
          marginBottom: '60px',
        }}>
          {projects.map((proj) => (
            <div
              key={proj.title}
              style={{
                background: '#fff',
                border: '1px solid #e5e7eb',
                borderRadius: '16px',
                overflow: 'hidden',
                transition: 'all 0.3s ease',
                cursor: 'default',
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLDivElement).style.transform = 'translateY(-4px)';
                (e.currentTarget as HTMLDivElement).style.boxShadow = '0 16px 40px rgba(245,130,10,0.12)';
                (e.currentTarget as HTMLDivElement).style.borderColor = '#f5820a';
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLDivElement).style.transform = 'translateY(0)';
                (e.currentTarget as HTMLDivElement).style.boxShadow = 'none';
                (e.currentTarget as HTMLDivElement).style.borderColor = '#e5e7eb';
              }}
            >
              {/* Card header */}
              <div style={{
                background: 'linear-gradient(135deg, #0f2a4a, #1a3a5c)',
                padding: '24px',
                position: 'relative',
                overflow: 'hidden',
              }}>
                <div style={{
                  position: 'absolute', top: -20, right: -20,
                  width: 80, height: 80,
                  background: 'rgba(245,130,10,0.1)',
                  borderRadius: '50%',
                }} />
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px' }}>
                  <span style={{ fontSize: '2rem' }}>{proj.icon}</span>
                  <span style={{
                    background: `${proj.statusColor}20`,
                    color: proj.statusColor,
                    border: `1px solid ${proj.statusColor}50`,
                    borderRadius: '50px',
                    padding: '3px 10px',
                    fontSize: '0.72rem',
                    fontWeight: 700,
                  }}>{proj.status}</span>
                </div>
                <div style={{ color: '#f5820a', fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.5px', marginBottom: '6px' }}>
                  {proj.category}
                </div>
                <h3 style={{ color: '#fff', fontWeight: 700, fontSize: '1rem', lineHeight: 1.3 }}>{proj.title}</h3>
                <p style={{ color: '#94b8d4', fontSize: '0.75rem', marginTop: '4px' }}>📅 {proj.period}</p>
              </div>

              {/* Card body */}
              <div style={{ padding: '20px' }}>
                <p style={{ color: '#666', fontSize: '0.83rem', lineHeight: 1.6, marginBottom: '16px' }}>{proj.desc}</p>

                <div style={{ marginBottom: '16px' }}>
                  <div style={{ color: '#0f2a4a', fontWeight: 700, fontSize: '0.8rem', marginBottom: '8px' }}>Key Outcomes:</div>
                  {proj.outcomes.map((o) => (
                    <div key={o} style={{ display: 'flex', gap: '8px', alignItems: 'flex-start', marginBottom: '4px' }}>
                      <span style={{ color: '#f5820a', fontSize: '0.75rem', marginTop: '2px', flexShrink: 0 }}>→</span>
                      <span style={{ color: '#555', fontSize: '0.8rem', lineHeight: 1.5 }}>{o}</span>
                    </div>
                  ))}
                </div>

                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                  {proj.tags.map((tag) => (
                    <span
                      key={tag}
                      style={{
                        background: 'rgba(245,130,10,0.08)',
                        border: '1px solid rgba(245,130,10,0.2)',
                        borderRadius: '4px',
                        padding: '3px 8px',
                        color: '#f5820a',
                        fontSize: '0.72rem',
                        fontWeight: 600,
                      }}
                    >{tag}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Why GRC section (like "Why NRS Specifically?") */}
        <div>
          <div className="section-label">— Why GRC?</div>
          <h2 style={{ fontSize: 'clamp(1.6rem, 2.5vw, 2rem)', fontWeight: 800, color: '#0f2a4a', marginBottom: '24px' }}>
            Why I&apos;m Passionate About GRC
          </h2>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gap: '16px',
          }} className="why-grid">
            {[
              { icon: '🏛️', title: 'Strong Governance', desc: 'Building frameworks that make organizations resilient and trustworthy.' },
              { icon: '🌐', title: 'Digital Security', desc: 'Protecting data and systems in an increasingly complex threat landscape.' },
              { icon: '📈', title: 'Business Impact', desc: 'Enabling growth by reducing risk and ensuring regulatory compliance.' },
              { icon: '🤝', title: 'Trust & Transparency', desc: 'Fostering stakeholder confidence through robust compliance programs.' },
            ].map((item) => (
              <div
                key={item.title}
                style={{
                  background: '#fff',
                  border: '1px solid #e5e7eb',
                  borderRadius: '12px',
                  padding: '20px',
                  textAlign: 'center',
                }}
              >
                <div style={{ fontSize: '2rem', marginBottom: '10px' }}>{item.icon}</div>
                <div style={{ color: '#0f2a4a', fontWeight: 700, fontSize: '0.88rem', marginBottom: '6px' }}>{item.title}</div>
                <div style={{ color: '#777', fontSize: '0.78rem', lineHeight: 1.5 }}>{item.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .why-grid { grid-template-columns: 1fr 1fr !important; }
        }
        @media (max-width: 480px) {
          .why-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
