'use client';

import { useState } from 'react';

export default function AboutSection() {
  const [showMore, setShowMore] = useState(false);

  return (
    <section id="about" style={{ padding: '110px 0 90px', backgroundColor: '#ffffff', position: 'relative' }}>
      <div style={{ maxWidth: '1240px', margin: '0 auto', padding: '0 28px' }}>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1.2fr 0.8fr',
            gap: '60px',
            alignItems: 'center',
          }}
          className="about-split-grid"
        >
          {/* Left Column: Executive Bio */}
          <div>
            <span className="section-tagline">About Manoj Oli</span>

            <h2
              className="litho-heading"
              style={{
                fontSize: 'clamp(2rem, 4vw, 3rem)',
                lineHeight: 1.15,
                marginBottom: '28px',
                textTransform: 'uppercase',
              }}
            >
              <span className="litho-primary-title">MANOJ OLI</span>
              <br />
              <span className="litho-secondary-title" style={{ fontSize: '0.85em', color: '#0038e3', fontWeight: 600 }}>
                GRC INTERN @ NRS
              </span>
            </h2>

            <p style={{ color: '#4b5563', fontSize: '1.05rem', lineHeight: 1.85, marginBottom: '20px' }}>
              I am a Governance, Risk & Compliance (GRC) Intern at <strong>Nepal Realistic Solutions (NRS)</strong>, passionate about helping organizations establish resilient security postures, implement <strong>ISO/IEC 27001</strong> standards, and maintain regulatory compliance.
            </p>

            <p style={{ color: '#4b5563', fontSize: '1.05rem', lineHeight: 1.85, marginBottom: '24px' }}>
              With a strong foundation in computer science and cybersecurity, I assist in conducting risk assessments, drafting information security policies, maintaining risk registers, and preparing evidence packages for internal and external audits.
            </p>

            {showMore && (
              <div
                style={{
                  background: '#f8fafc',
                  borderLeft: '4px solid #0038e3',
                  padding: '20px 24px',
                  borderRadius: '0 10px 10px 0',
                  marginBottom: '24px',
                  animation: 'fadeIn 0.4s ease-in-out',
                }}
              >
                <h4 style={{ fontWeight: 800, color: '#111827', marginBottom: '10px', fontSize: '1.05rem' }}>
                  Key Areas of Practical Internship Experience:
                </h4>
                <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  {[
                    'Assisting in ISO/IEC 27001:2022 gap analyses & control mapping',
                    'Developing & updating organizational Risk Registers & threat matrices',
                    'Drafting Information Security Policies, SOPs, and Acceptable Use guidelines',
                    'Supporting internal audit preparations and compliance evidence verification',
                    'Researching GDPR, NIST CSF, and global data privacy standards',
                  ].map((item) => (
                    <li key={item} style={{ display: 'flex', alignItems: 'center', gap: '10px', color: '#374151', fontSize: '0.92rem' }}>
                      <span style={{ color: '#0038e3', fontWeight: 800 }}>✓</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            <div style={{ display: 'flex', alignItems: 'center', gap: '20px', flexWrap: 'wrap' }}>
              <button
                type="button"
                onClick={() => setShowMore(!showMore)}
                style={{
                  background: 'none',
                  border: 'none',
                  color: '#0038e3',
                  fontSize: '0.95rem',
                  fontWeight: 800,
                  letterSpacing: '1px',
                  textTransform: 'uppercase',
                  cursor: 'pointer',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  padding: '4px 0',
                  borderBottom: '2px solid #0038e3',
                  transition: 'all 0.2s ease',
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = '#111827')}
                onMouseLeave={(e) => (e.currentTarget.style.color = '#0038e3')}
              >
                {showMore ? 'SHOW LESS ↑' : 'KNOW MORE... →'}
              </button>

              <a
                href="https://www.linkedin.com/in/manoj-oli-a28840301/"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  color: '#111827',
                  fontSize: '0.9rem',
                  fontWeight: 700,
                  textDecoration: 'none',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '6px',
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = '#0038e3')}
                onMouseLeave={(e) => (e.currentTarget.style.color = '#111827')}
              >
                <span>View LinkedIn Profile</span>
                <span>↗</span>
              </a>
            </div>
          </div>

          {/* Right Column: Signature 3D Tilt Experience Box */}
          <div className="tilt-box-container" style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            <div className="tilt-box">
              <div
                style={{
                  position: 'absolute',
                  top: '-40px',
                  right: '-40px',
                  width: '160px',
                  height: '160px',
                  borderRadius: '50%',
                  background: 'rgba(0, 56, 227, 0.25)',
                  filter: 'blur(30px)',
                }}
              />

              <div style={{ position: 'relative', zIndex: 1 }}>
                <span className="tilt-box-number">01+</span>
                <div style={{ marginTop: '16px' }}>
                  <h3
                    className="litho-heading"
                    style={{
                      fontSize: 'clamp(1.4rem, 2.5vw, 1.85rem)',
                      color: '#ffffff',
                      lineHeight: 1.15,
                      textTransform: 'uppercase',
                    }}
                  >
                    <span style={{ fontWeight: 800, color: '#93c5fd', display: 'block' }}>YEAR IN GRC &</span>
                    <span style={{ fontWeight: 300, color: '#ffffff' }}>INFOSEC FIELD</span>
                  </h3>
                  <p style={{ color: '#94a3b8', fontSize: '0.88rem', marginTop: '12px', lineHeight: 1.6 }}>
                    Hands-on internship experience in ISO 27001 compliance, risk registers, and policy frameworks at Nepal Realistic Solutions.
                  </p>
                </div>
              </div>
            </div>

            {/* Quick credentials badge below */}
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                gap: '16px',
              }}
            >
              <div
                style={{
                  backgroundColor: '#f8fafc',
                  border: '1px solid #e2e8f0',
                  borderRadius: '12px',
                  padding: '18px',
                }}
              >
                <span style={{ fontSize: '1.5rem', fontWeight: 800, color: '#0038e3', display: 'block' }}>15+</span>
                <span style={{ fontSize: '0.8rem', fontWeight: 600, color: '#64748b', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
                  Audit & Risk Tasks
                </span>
              </div>
              <div
                style={{
                  backgroundColor: '#f8fafc',
                  border: '1px solid #e2e8f0',
                  borderRadius: '12px',
                  padding: '18px',
                }}
              >
                <span style={{ fontSize: '1.5rem', fontWeight: 800, color: '#0038e3', display: 'block' }}>10+</span>
                <span style={{ fontSize: '0.8rem', fontWeight: 600, color: '#64748b', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
                  Policies Drafted
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(8px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @media (max-width: 860px) {
          .about-split-grid {
            grid-template-columns: 1fr !important;
            gap: 50px !important;
          }
        }
      `}</style>
    </section>
  );
}
