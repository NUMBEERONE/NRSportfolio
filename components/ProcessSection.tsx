'use client';

const steps = [
  {
    num: '01',
    icon: '🔎',
    title: 'Understand Requirements',
    desc: 'I begin by deeply understanding the organization\'s business objectives, regulatory environment, and existing control landscape before any assessment.',
  },
  {
    num: '02',
    icon: '📌',
    title: 'Risk Identification',
    desc: 'I conduct thorough risk identification workshops, reviewing assets, threats, and vulnerabilities to build a comprehensive risk register.',
  },
  {
    num: '03',
    icon: '📊',
    title: 'Assess & Analyze',
    desc: 'I apply qualitative and quantitative risk analysis techniques, mapping risks to applicable frameworks and assigning risk ratings.',
  },
  {
    num: '04',
    icon: '🔧',
    title: 'Develop Controls',
    desc: 'I recommend and help implement appropriate controls aligned to industry standards — policies, procedures, technical safeguards, and training.',
  },
  {
    num: '05',
    icon: '📈',
    title: 'Monitor & Report',
    desc: 'I establish KRIs/KPIs and provide ongoing monitoring, dashboards, and executive-level reporting to track compliance posture.',
  },
];

const scopeItems = [
  {
    icon: '✅',
    title: 'I Can Support',
    desc: 'GRC program setup, risk assessments, compliance gap analysis, policy drafting, audit evidence gathering, and awareness training.',
  },
  {
    icon: '📋',
    title: 'Subject to Scope Confirmation',
    desc: 'Technical penetration testing, legal advisory, and regulated financial services compliance are confirmed case-by-case.',
  },
  {
    icon: '🚧',
    title: 'Scope Boundary',
    desc: 'My support covers governance, risk, and compliance domains. Legal representation or regulatory filings are outside my scope.',
  },
];

export default function ProcessSection() {
  return (
    <>
      {/* How I Work */}
      <section style={{ padding: '100px 0', background: 'linear-gradient(135deg, #0f2a4a, #1a3a5c)' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px' }}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: '1fr 2fr',
            gap: '60px',
            alignItems: 'center',
            marginBottom: '60px',
          }} className="process-header">
            <div>
              <div className="section-label" style={{ color: '#f5820a' }}>— How I Work</div>
              <h2 style={{ color: '#fff', fontSize: 'clamp(1.8rem, 3vw, 2.4rem)', fontWeight: 800, lineHeight: 1.2 }}>
                My GRC<br />Approach
              </h2>
              <p style={{ color: '#94b8d4', marginTop: '12px', lineHeight: 1.7, fontSize: '0.9rem' }}>
                A structured and collaborative approach to help you achieve long-term compliance success.
              </p>
            </div>
            <div style={{
              background: 'rgba(245,130,10,0.08)',
              border: '1px solid rgba(245,130,10,0.2)',
              borderRadius: '16px',
              padding: '24px',
              fontStyle: 'italic',
              color: '#cde4f5',
              fontSize: '0.95rem',
              lineHeight: 1.7,
            }}>
              &ldquo;From understanding your needs to creating real opportunities — I&apos;m with you at every step of your GRC journey.&rdquo;
            </div>
          </div>

          {/* Steps */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(5, 1fr)',
            gap: '20px',
            position: 'relative',
          }} className="steps-grid">
            {steps.map((step, idx) => (
              <div key={step.num} style={{ position: 'relative', textAlign: 'center' }}>
                {/* Connector arrow */}
                {idx < steps.length - 1 && (
                  <div style={{
                    position: 'absolute',
                    top: '40px',
                    right: '-16px',
                    color: '#f5820a',
                    fontSize: '1.4rem',
                    zIndex: 2,
                    opacity: 0.7,
                  }}>→</div>
                )}

                {/* Step circle */}
                <div style={{
                  width: 80, height: 80,
                  borderRadius: '50%',
                  background: 'linear-gradient(135deg, #f5820a, #ff9a2e)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  margin: '0 auto 16px',
                  position: 'relative',
                  boxShadow: '0 8px 24px rgba(245,130,10,0.4)',
                  fontSize: '1.6rem',
                }}>
                  {step.icon}
                  <div style={{
                    position: 'absolute', top: -8, right: -8,
                    background: '#0f2a4a',
                    border: '2px solid #f5820a',
                    borderRadius: '50%',
                    width: 28, height: 28,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    color: '#f5820a', fontWeight: 800, fontSize: '0.65rem',
                  }}>
                    {step.num}
                  </div>
                </div>

                <h4 style={{ color: '#fff', fontWeight: 700, fontSize: '0.88rem', marginBottom: '8px', lineHeight: 1.3 }}>
                  {step.title}
                </h4>
                <p style={{ color: '#94b8d4', fontSize: '0.78rem', lineHeight: 1.6 }}>{step.desc}</p>
              </div>
            ))}
          </div>
        </div>

        <style>{`
          @media (max-width: 900px) {
            .steps-grid { grid-template-columns: 1fr 1fr !important; }
            .process-header { grid-template-columns: 1fr !important; }
          }
          @media (max-width: 600px) {
            .steps-grid { grid-template-columns: 1fr !important; }
          }
        `}</style>
      </section>

      {/* Scope & Responsibilities */}
      <section style={{ padding: '80px 0', background: '#fff' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px' }}>
          <div className="section-label">— Scope & Responsibilities</div>
          <h2 style={{
            fontSize: 'clamp(1.6rem, 2.5vw, 2rem)',
            fontWeight: 800, color: '#0f2a4a', marginBottom: '40px',
          }}>
            Service Scope & Responsibilities
          </h2>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '24px',
          }} className="scope-grid">
            {scopeItems.map((item) => (
              <div
                key={item.title}
                style={{
                  background: '#f8fafc',
                  border: '1px solid #e5e7eb',
                  borderRadius: '14px',
                  padding: '28px 24px',
                  borderLeft: '4px solid #f5820a',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '12px' }}>
                  <span style={{ fontSize: '1.4rem' }}>{item.icon}</span>
                  <h4 style={{ color: '#0f2a4a', fontWeight: 700, fontSize: '0.95rem' }}>{item.title}</h4>
                </div>
                <p style={{ color: '#666', fontSize: '0.85rem', lineHeight: 1.7 }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        <style>{`
          @media (max-width: 768px) {
            .scope-grid { grid-template-columns: 1fr !important; }
          }
        `}</style>
      </section>
    </>
  );
}
