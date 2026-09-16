'use client';

const qualities = [
  { icon: '🎯', title: 'Detail-Oriented', desc: 'Meticulous approach to risk documentation and compliance assessments.' },
  { icon: '🤝', title: 'Collaborative', desc: 'Work effectively across teams to align GRC strategies with business goals.' },
  { icon: '📚', title: 'Continuous Learner', desc: 'Staying current with evolving regulations and security frameworks.' },
  { icon: '⚡', title: 'Problem Solver', desc: 'Identifying control gaps and recommending practical, scalable solutions.' },
];

export default function AboutSection() {
  return (
    <section id="about" style={{ padding: '100px 0', background: '#fff' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px' }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '80px',
          alignItems: 'center',
        }} className="about-grid">
          {/* Left – Visual */}
          <div style={{ position: 'relative' }}>
            <div style={{
              background: 'linear-gradient(135deg, #0f2a4a 0%, #1a3a5c 100%)',
              borderRadius: '20px',
              padding: '40px',
              color: '#fff',
              position: 'relative',
              overflow: 'hidden',
            }}>
              <div style={{
                position: 'absolute', top: '-40px', right: '-40px',
                width: '180px', height: '180px',
                background: 'rgba(245,130,10,0.15)',
                borderRadius: '50%',
              }} />

              <div style={{ marginBottom: '24px' }}>
                <div style={{ fontSize: '3rem', marginBottom: '8px' }}>👨‍💻</div>
                <h3 style={{ fontSize: '1.4rem', fontWeight: 700, marginBottom: '4px' }}>Manoj Oli</h3>
                <p style={{ color: '#f5820a', fontWeight: 600 }}>GRC Intern</p>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                {[
                  { label: 'Location', value: '🇳🇵 Nepal' },
                  { label: 'Focus', value: 'GRC & InfoSec' },
                  { label: 'Education', value: 'BSc CS' },
                  { label: 'Status', value: '🟢 Available' },
                ].map((item) => (
                  <div key={item.label} style={{
                    background: 'rgba(255,255,255,0.08)',
                    borderRadius: '10px',
                    padding: '12px',
                  }}>
                    <div style={{ color: '#94b8d4', fontSize: '0.72rem', textTransform: 'uppercase', letterSpacing: '0.5px', marginBottom: '4px' }}>{item.label}</div>
                    <div style={{ color: '#fff', fontWeight: 600, fontSize: '0.9rem' }}>{item.value}</div>
                  </div>
                ))}
              </div>

              {/* Skills tags */}
              <div style={{ marginTop: '20px', display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                {['ISO 27001', 'GDPR', 'SOC 2', 'NIST', 'Risk Management', 'Audit'].map((tag) => (
                  <span
                    key={tag}
                    style={{
                      background: 'rgba(245,130,10,0.2)',
                      border: '1px solid rgba(245,130,10,0.4)',
                      borderRadius: '50px',
                      padding: '4px 12px',
                      color: '#f5820a',
                      fontSize: '0.75rem',
                      fontWeight: 600,
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Experience badge */}
            <div style={{
              position: 'absolute',
              bottom: '-20px',
              right: '-20px',
              background: 'linear-gradient(135deg, #f5820a, #ff9a2e)',
              borderRadius: '16px',
              padding: '20px',
              color: '#fff',
              boxShadow: '0 8px 24px rgba(245,130,10,0.4)',
              textAlign: 'center',
            }}>
              <div style={{ fontSize: '1.8rem', fontWeight: 800 }}>1+</div>
              <div style={{ fontSize: '0.75rem', fontWeight: 600, opacity: 0.9 }}>Years in<br />GRC Field</div>
            </div>
          </div>

          {/* Right – Text */}
          <div>
            <div className="section-label">— About Me</div>
            <h2 style={{
              fontSize: 'clamp(1.8rem, 3vw, 2.5rem)',
              fontWeight: 800, color: '#0f2a4a',
              marginBottom: '20px', lineHeight: 1.2,
            }}>
              Helping Organizations<br />
              <span style={{ color: '#f5820a' }}>Navigate GRC Challenges</span>
            </h2>

            <p style={{ color: '#555', lineHeight: 1.8, marginBottom: '16px', fontSize: '0.97rem' }}>
              I&apos;m Manoj Oli, a passionate GRC intern currently working to bridge the gap between complex regulatory requirements and practical business operations. My focus lies in helping organizations build resilient governance frameworks and maintain a strong security posture.
            </p>
            <p style={{ color: '#555', lineHeight: 1.8, marginBottom: '32px', fontSize: '0.97rem' }}>
              With hands-on experience in risk assessment, compliance management, and audit support, I bring structured thinking and attention to detail to every project I undertake — from ISO 27001 gap analyses to policy documentation and control testing.
            </p>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
              {qualities.map((q) => (
                <div
                  key={q.title}
                  style={{
                    background: '#f8fafc',
                    border: '1px solid #e5e7eb',
                    borderRadius: '12px',
                    padding: '16px',
                    transition: 'all 0.2s',
                    cursor: 'default',
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLDivElement).style.borderColor = '#f5820a';
                    (e.currentTarget as HTMLDivElement).style.transform = 'translateY(-2px)';
                    (e.currentTarget as HTMLDivElement).style.boxShadow = '0 8px 20px rgba(245,130,10,0.1)';
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLDivElement).style.borderColor = '#e5e7eb';
                    (e.currentTarget as HTMLDivElement).style.transform = 'translateY(0)';
                    (e.currentTarget as HTMLDivElement).style.boxShadow = 'none';
                  }}
                >
                  <div style={{ fontSize: '1.5rem', marginBottom: '8px' }}>{q.icon}</div>
                  <div style={{ fontWeight: 700, color: '#0f2a4a', fontSize: '0.9rem', marginBottom: '4px' }}>{q.title}</div>
                  <div style={{ color: '#777', fontSize: '0.8rem', lineHeight: 1.5 }}>{q.desc}</div>
                </div>
              ))}
            </div>

            <button
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              style={{
                marginTop: '28px',
                background: 'linear-gradient(135deg, #f5820a, #ff9a2e)',
                color: '#fff', border: 'none', borderRadius: '8px',
                padding: '13px 28px', fontWeight: 700, fontSize: '0.95rem',
                cursor: 'pointer',
                boxShadow: '0 6px 20px rgba(245,130,10,0.3)',
              }}
            >
              Learn More →
            </button>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .about-grid { grid-template-columns: 1fr !important; gap: 60px !important; }
        }
      `}</style>
    </section>
  );
}
