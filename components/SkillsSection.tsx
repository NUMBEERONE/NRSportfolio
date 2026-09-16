'use client';

const skills = [
  {
    icon: '🛡️',
    title: 'Risk Assessment & Management',
    desc: 'Identifying, evaluating, and prioritizing organizational risks using structured methodologies like NIST and ISO 31000.',
  },
  {
    icon: '📋',
    title: 'Compliance Management',
    desc: 'Ensuring adherence to regulatory requirements including GDPR, ISO 27001, SOC 2, and local data protection laws.',
  },
  {
    icon: '🔐',
    title: 'Information Security',
    desc: 'Supporting security programs including access controls, vulnerability assessments, and security policy development.',
  },
  {
    icon: '🔍',
    title: 'Audit Support',
    desc: 'Assisting internal and external audits through evidence collection, control testing, and finding remediation tracking.',
  },
  {
    icon: '📝',
    title: 'Policy Development',
    desc: 'Drafting and reviewing information security policies, procedures, and standards aligned with industry frameworks.',
  },
  {
    icon: '🔒',
    title: 'Data Privacy & GDPR',
    desc: 'Supporting data privacy programs, conducting DPIAs, and maintaining data processing records for compliance.',
  },
  {
    icon: '📊',
    title: 'GRC Frameworks',
    desc: 'Working knowledge of COBIT, COSO, NIST CSF, and other governance frameworks for holistic risk management.',
  },
  {
    icon: '⚙️',
    title: 'Vulnerability Management',
    desc: 'Assisting in vulnerability scanning, risk prioritization, and patch management coordination processes.',
  },
];

const tools = [
  { name: 'Microsoft 365', level: 85 },
  { name: 'Jira / Confluence', level: 75 },
  { name: 'Power BI', level: 65 },
  { name: 'OneTrust / GRC Tools', level: 60 },
  { name: 'Python (Scripts)', level: 55 },
  { name: 'Nessus / Qualys', level: 50 },
];

export default function SkillsSection() {
  return (
    <section id="skills" style={{ padding: '100px 0', background: '#f8fafc' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px' }}>
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '60px' }}>
          <div className="section-label" style={{ justifyContent: 'center' }}>— My Skills</div>
          <h2 style={{
            fontSize: 'clamp(1.8rem, 3vw, 2.4rem)',
            fontWeight: 800, color: '#0f2a4a', marginBottom: '12px',
          }}>
            GRC Competencies & Expertise
          </h2>
          <p style={{ color: '#666', maxWidth: '600px', margin: '0 auto', lineHeight: 1.7 }}>
            End-to-end GRC capabilities to help organizations build, manage, and sustain effective governance and compliance programs.
          </p>
          <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: '-10px' }}>
            <span style={{ color: '#f5820a', fontSize: '0.85rem', fontWeight: 600, cursor: 'pointer' }}>
              View All Skills →
            </span>
          </div>
        </div>

        {/* Skills Cards Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))',
          gap: '24px',
          marginBottom: '70px',
        }}>
          {skills.map((skill) => (
            <div
              key={skill.title}
              className="skill-card"
              style={{
                background: '#fff',
                border: '1px solid #e5e7eb',
                borderRadius: '14px',
                padding: '28px 24px',
                transition: 'all 0.3s ease',
                cursor: 'default',
              }}
            >
              <div style={{
                width: 54, height: 54,
                background: 'linear-gradient(135deg, rgba(245,130,10,0.12), rgba(245,130,10,0.06))',
                borderRadius: '12px',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontSize: '1.6rem', marginBottom: '16px',
                border: '1px solid rgba(245,130,10,0.2)',
              }}>
                {skill.icon}
              </div>
              <h3 style={{ color: '#0f2a4a', fontWeight: 700, fontSize: '0.95rem', marginBottom: '8px' }}>
                {skill.title}
              </h3>
              <p style={{ color: '#777', fontSize: '0.83rem', lineHeight: 1.6 }}>{skill.desc}</p>
              <div style={{
                marginTop: '16px',
                color: '#f5820a', fontSize: '0.82rem', fontWeight: 600,
                display: 'flex', alignItems: 'center', gap: '4px',
                cursor: 'pointer',
              }}>
                Learn more →
              </div>
            </div>
          ))}
        </div>

        {/* Tools & Proficiency */}
        <div style={{
          background: 'linear-gradient(135deg, #0f2a4a, #1a3a5c)',
          borderRadius: '20px',
          padding: '50px',
          color: '#fff',
        }}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: '1fr 2fr',
            gap: '60px',
            alignItems: 'center',
          }} className="tools-grid">
            <div>
              <div className="section-label" style={{ color: '#f5820a' }}>— Tools & Tech</div>
              <h3 style={{ fontSize: '1.8rem', fontWeight: 800, marginBottom: '16px', lineHeight: 1.2 }}>
                Tools I Work<br />
                <span style={{ color: '#f5820a' }}>With Daily</span>
              </h3>
              <p style={{ color: '#94b8d4', lineHeight: 1.7, fontSize: '0.9rem' }}>
                A practical toolkit built through hands-on internship experience and self-directed learning.
              </p>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
              {tools.map((tool) => (
                <div key={tool.name}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '6px' }}>
                    <span style={{ color: '#e0e8f0', fontSize: '0.88rem', fontWeight: 500 }}>{tool.name}</span>
                    <span style={{ color: '#f5820a', fontSize: '0.85rem', fontWeight: 700 }}>{tool.level}%</span>
                  </div>
                  <div style={{ background: 'rgba(255,255,255,0.1)', borderRadius: '50px', height: '6px', overflow: 'hidden' }}>
                    <div style={{
                      width: `${tool.level}%`,
                      height: '100%',
                      background: 'linear-gradient(90deg, #f5820a, #ff9a2e)',
                      borderRadius: '50px',
                      transition: 'width 1s ease',
                    }} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .tools-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
