'use client';

export default function HeroSection() {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="home"
      style={{
        minHeight: '100vh',
        background: 'linear-gradient(135deg, #0f2a4a 0%, #1a3a5c 50%, #0d2238 100%)',
        position: 'relative',
        overflow: 'hidden',
        display: 'flex',
        alignItems: 'center',
      }}
    >
      {/* Background pattern */}
      <div style={{
        position: 'absolute', inset: 0, opacity: 0.06,
        backgroundImage: 'radial-gradient(circle at 2px 2px, #f5820a 1px, transparent 0)',
        backgroundSize: '40px 40px',
      }} />

      {/* Orange shape top-right */}
      <div style={{
        position: 'absolute', top: '-80px', right: '-80px',
        width: '400px', height: '400px',
        background: 'linear-gradient(135deg, rgba(245,130,10,0.15), rgba(255,154,46,0.05))',
        borderRadius: '50%',
        filter: 'blur(60px)',
      }} />
      <div style={{
        position: 'absolute', bottom: '-100px', left: '-100px',
        width: '500px', height: '500px',
        background: 'linear-gradient(135deg, rgba(245,130,10,0.08), transparent)',
        borderRadius: '50%',
        filter: 'blur(80px)',
      }} />

      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '100px 24px 60px', position: 'relative', zIndex: 1, width: '100%' }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '60px',
          alignItems: 'center',
        }} className="hero-grid">
          {/* Left Content */}
          <div>
            {/* Badge */}
            <div style={{
              display: 'inline-flex', alignItems: 'center', gap: '8px',
              background: 'rgba(245,130,10,0.12)',
              border: '1px solid rgba(245,130,10,0.3)',
              borderRadius: '50px',
              padding: '6px 16px',
              marginBottom: '24px',
            }}>
              <span style={{ width: 8, height: 8, borderRadius: '50%', background: '#f5820a', display: 'inline-block', boxShadow: '0 0 8px #f5820a' }} />
              <span style={{ color: '#f5820a', fontSize: '0.8rem', fontWeight: 600, letterSpacing: '1px', textTransform: 'uppercase' }}>
                Your Partner in GRC
              </span>
            </div>

            {/* Name */}
            <h1 style={{ color: '#fff', marginBottom: '4px', lineHeight: 1.1 }}>
              <span style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', fontWeight: 800, display: 'block' }}>Manoj</span>
              <span style={{
                fontSize: 'clamp(2.5rem, 5vw, 4rem)', fontWeight: 800, display: 'block',
                background: 'linear-gradient(135deg, #f5820a, #ff9a2e)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}>Oli</span>
            </h1>

            <p style={{ color: '#94b8d4', fontSize: '1.15rem', marginBottom: '24px', lineHeight: 1.7, maxWidth: '480px' }}>
              Aspiring GRC professional passionate about helping organizations strengthen their governance frameworks, manage risk intelligently, and achieve regulatory compliance with confidence.
            </p>

            {/* CTA Buttons */}
            <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', marginBottom: '48px' }}>
              <button
                onClick={() => scrollTo('contact')}
                style={{
                  background: 'linear-gradient(135deg, #f5820a, #ff9a2e)',
                  color: '#fff', border: 'none', borderRadius: '8px',
                  padding: '14px 28px', fontWeight: 700, fontSize: '0.95rem',
                  cursor: 'pointer', boxShadow: '0 6px 20px rgba(245,130,10,0.4)',
                  transition: 'all 0.2s', display: 'flex', alignItems: 'center', gap: '8px',
                }}
              >
                Get In Touch <span>→</span>
              </button>
              <button
                onClick={() => scrollTo('projects')}
                style={{
                  background: 'transparent',
                  color: '#fff', border: '2px solid rgba(255,255,255,0.3)',
                  borderRadius: '8px', padding: '14px 28px',
                  fontWeight: 600, fontSize: '0.95rem', cursor: 'pointer',
                  transition: 'all 0.2s',
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLButtonElement).style.borderColor = '#f5820a';
                  (e.currentTarget as HTMLButtonElement).style.color = '#f5820a';
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLButtonElement).style.borderColor = 'rgba(255,255,255,0.3)';
                  (e.currentTarget as HTMLButtonElement).style.color = '#fff';
                }}
              >
                Explore Projects
              </button>
            </div>

            {/* Stats row */}
            <div style={{ display: 'flex', gap: '32px', flexWrap: 'wrap' }}>
              {[
                { icon: '🛡️', label: 'Risk Assessments', value: '10+' },
                { icon: '📋', label: 'Compliance Projects', value: '5+' },
                { icon: '🌍', label: 'Audit Support Tasks', value: '8+' },
              ].map((stat) => (
                <div key={stat.label} style={{ textAlign: 'center' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '6px', justifyContent: 'center' }}>
                    <span style={{ fontSize: '1.2rem' }}>{stat.icon}</span>
                    <span style={{ color: '#f5820a', fontWeight: 800, fontSize: '1.5rem' }}>{stat.value}</span>
                  </div>
                  <div style={{ color: '#94b8d4', fontSize: '0.78rem', marginTop: '2px' }}>{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right – Profile card */}
          <div style={{ display: 'flex', justifyContent: 'center', position: 'relative' }}>
            <div style={{
              position: 'relative',
              background: 'linear-gradient(135deg, rgba(255,255,255,0.08), rgba(255,255,255,0.03))',
              border: '1px solid rgba(255,255,255,0.12)',
              borderRadius: '24px',
              padding: '40px',
              backdropFilter: 'blur(20px)',
              boxShadow: '0 20px 60px rgba(0,0,0,0.4)',
              maxWidth: '380px',
              width: '100%',
            }}>
              {/* Avatar */}
              <div style={{
                width: 100, height: 100, borderRadius: '50%',
                background: 'linear-gradient(135deg, #f5820a, #ff9a2e)',
                margin: '0 auto 20px',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontSize: '2.5rem', fontWeight: 800, color: '#fff',
                boxShadow: '0 8px 24px rgba(245,130,10,0.5)',
              }}>
                MO
              </div>

              <div style={{ textAlign: 'center', marginBottom: '24px' }}>
                <h2 style={{ color: '#fff', fontSize: '1.5rem', fontWeight: 700, marginBottom: '4px' }}>Manoj Oli</h2>
                <p style={{ color: '#f5820a', fontWeight: 600, fontSize: '0.95rem' }}>GRC Intern</p>
                <p style={{ color: '#94b8d4', fontSize: '0.82rem', marginTop: '4px' }}>🇳🇵 Nepal</p>
              </div>

              {/* Info badges */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                {[
                  { icon: '🎓', text: 'Computer Science Student' },
                  { icon: '🛡️', text: 'Governance, Risk & Compliance' },
                  { icon: '🔐', text: 'Information Security' },
                  { icon: '📊', text: 'ISO 27001 | GDPR | SOC 2' },
                ].map((item) => (
                  <div
                    key={item.text}
                    style={{
                      display: 'flex', alignItems: 'center', gap: '10px',
                      background: 'rgba(255,255,255,0.05)',
                      borderRadius: '8px', padding: '10px 14px',
                      border: '1px solid rgba(255,255,255,0.08)',
                    }}
                  >
                    <span>{item.icon}</span>
                    <span style={{ color: '#cde4f5', fontSize: '0.85rem' }}>{item.text}</span>
                  </div>
                ))}
              </div>

              {/* Social links */}
              <div style={{ display: 'flex', gap: '10px', marginTop: '20px', justifyContent: 'center' }}>
                {[
                  { label: 'LinkedIn', href: 'https://linkedin.com', icon: 'in' },
                  { label: 'GitHub', href: 'https://github.com', icon: 'gh' },
                  { label: 'Email', href: 'mailto:manoJoli@email.com', icon: '@' },
                ].map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      width: 38, height: 38,
                      background: 'rgba(245,130,10,0.15)',
                      border: '1px solid rgba(245,130,10,0.3)',
                      borderRadius: '8px',
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      color: '#f5820a', fontWeight: 700, fontSize: '0.8rem',
                      textDecoration: 'none',
                      transition: 'all 0.2s',
                    }}
                    title={s.label}
                  >
                    {s.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div style={{
        position: 'absolute', bottom: '30px', left: '50%', transform: 'translateX(-50%)',
        display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '6px',
        cursor: 'pointer',
      }}
        onClick={() => scrollTo('about')}
      >
        <span style={{ color: '#94b8d4', fontSize: '0.75rem', letterSpacing: '2px', textTransform: 'uppercase' }}>Scroll</span>
        <div style={{
          width: 24, height: 40, border: '2px solid rgba(148,184,212,0.4)',
          borderRadius: '12px', display: 'flex', justifyContent: 'center', paddingTop: '6px',
        }}>
          <div style={{
            width: 4, height: 8, background: '#f5820a', borderRadius: '2px',
            animation: 'scrollDot 1.5s infinite',
          }} />
        </div>
      </div>

      <style>{`
        @keyframes scrollDot {
          0%, 100% { transform: translateY(0); opacity: 1; }
          50% { transform: translateY(8px); opacity: 0.4; }
        }
        @media (max-width: 768px) {
          .hero-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
