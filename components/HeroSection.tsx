'use client';

export default function HeroSection() {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const stats = [
    { label: 'ROLE FOCUS', value: 'GRC & ISO 27001 Support' },
    { label: 'CURRENT ROLE', value: 'GRC Intern @ NRS' },
    { label: 'BORN IN', value: 'Kathmandu, Nepal' },
    { label: 'EDUCATION', value: 'BSc. CSIT / InfoSec' },
  ];

  return (
    <section id="home" style={{ position: 'relative', overflow: 'hidden', backgroundColor: '#ffffff' }}>
      {/* Background ambient lighting */}
      <div
        style={{
          position: 'absolute',
          top: '-150px',
          right: '-150px',
          width: '600px',
          height: '600px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(0, 56, 227, 0.08) 0%, rgba(255, 255, 255, 0) 70%)',
          pointerEvents: 'none',
        }}
      />
      <div
        style={{
          position: 'absolute',
          bottom: '50px',
          left: '-100px',
          width: '500px',
          height: '500px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(0, 56, 227, 0.05) 0%, rgba(255, 255, 255, 0) 70%)',
          pointerEvents: 'none',
        }}
      />

      {/* Hero Fullscreen Display */}
      <div
        style={{
          minHeight: '88vh',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          textAlign: 'center',
          padding: '140px 24px 80px',
          maxWidth: '1240px',
          margin: '0 auto',
          position: 'relative',
          zIndex: 1,
        }}
      >
        {/* Top Tag */}
        <div
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            background: 'rgba(0, 56, 227, 0.06)',
            border: '1px solid rgba(0, 56, 227, 0.18)',
            borderRadius: '50px',
            padding: '7px 20px',
            marginBottom: '30px',
          }}
        >
          <span
            style={{
              width: '8px',
              height: '8px',
              borderRadius: '50%',
              backgroundColor: '#0038e3',
              display: 'inline-block',
              boxShadow: '0 0 10px #0038e3',
            }}
          />
          <span
            style={{
              color: '#0038e3',
              fontSize: '0.82rem',
              fontWeight: 800,
              letterSpacing: '1.2px',
              textTransform: 'uppercase',
            }}
          >
            GRC Intern @ Nepal Realistic Solutions (NRS)
          </span>
        </div>

        {/* Big Litho-style Heading */}
        <h1
          className="litho-heading"
          style={{
            fontSize: 'clamp(3.5rem, 9vw, 8rem)',
            letterSpacing: '-0.03em',
            lineHeight: 0.95,
            marginBottom: '28px',
            textTransform: 'uppercase',
          }}
        >
          <span className="litho-primary-title" style={{ display: 'inline-block' }}>
            MANOJ
          </span>{' '}
          <span
            className="litho-secondary-title"
            style={{
              display: 'inline-block',
              fontWeight: 300,
              color: '#4b5563',
              WebkitTextStroke: '1px #111827',
            }}
          >
            OLI
          </span>
        </h1>

        {/* Subtitle with separator bar */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: 'clamp(1rem, 2vw, 1.35rem)',
            color: '#1f2937',
            fontWeight: 700,
            letterSpacing: '2px',
            textTransform: 'uppercase',
            marginBottom: '36px',
          }}
        >
          <span className="horizontal-separator" />
          <span>Governance, Risk & Compliance Intern</span>
        </div>

        {/* Bio teaser */}
        <p
          style={{
            maxWidth: '680px',
            color: '#4b5563',
            fontSize: 'clamp(1rem, 1.2vw, 1.15rem)',
            lineHeight: 1.8,
            marginBottom: '44px',
          }}
        >
          Aspiring GRC professional passionate about helping organizations strengthen their governance frameworks, manage risk intelligently, and support ISO 27001 compliance and data security.
        </p>

        {/* Action Buttons */}
        <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', justifyContent: 'center', marginBottom: '60px' }}>
          <a
            href="https://www.linkedin.com/in/manoj-oli-a28840301/"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              backgroundColor: '#0038e3',
              color: '#ffffff',
              border: 'none',
              borderRadius: '4px',
              padding: '15px 36px',
              fontSize: '0.95rem',
              fontWeight: 700,
              letterSpacing: '1px',
              textTransform: 'uppercase',
              textDecoration: 'none',
              cursor: 'pointer',
              boxShadow: '0 8px 24px rgba(0, 56, 227, 0.3)',
              transition: 'all 0.25s ease',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = '#111827';
              e.currentTarget.style.transform = 'translateY(-2px)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = '#0038e3';
              e.currentTarget.style.transform = 'translateY(0)';
            }}
          >
            Connect on LinkedIn ↗
          </a>
          <button
            type="button"
            onClick={() => scrollTo('about')}
            style={{
              backgroundColor: 'transparent',
              color: '#111827',
              border: '2px solid #111827',
              borderRadius: '4px',
              padding: '13px 32px',
              fontSize: '0.95rem',
              fontWeight: 700,
              letterSpacing: '1px',
              textTransform: 'uppercase',
              cursor: 'pointer',
              transition: 'all 0.25s ease',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = '#111827';
              e.currentTarget.style.color = '#ffffff';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = 'transparent';
              e.currentTarget.style.color = '#111827';
            }}
          >
            About My Work
          </button>
        </div>

        {/* Mouse Scroll Down */}
        <div
          onClick={() => scrollTo('about')}
          style={{ cursor: 'pointer', display: 'inline-flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}
        >
          <div className="scroll-down-mouse">
            <div className="scroll-dot" />
          </div>
          <span style={{ fontSize: '0.75rem', fontWeight: 700, letterSpacing: '2px', textTransform: 'uppercase', color: '#6b7280' }}>
            Scroll
          </span>
        </div>
      </div>

      {/* 4-Column Executive Stats Strip */}
      <div
        style={{
          borderTop: '1px solid #e5e7eb',
          borderBottom: '1px solid #e5e7eb',
          backgroundColor: '#f8fafc',
          padding: '36px 0',
        }}
      >
        <div style={{ maxWidth: '1240px', margin: '0 auto', padding: '0 28px' }}>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(4, 1fr)',
              gap: '24px',
            }}
            className="hero-stats-grid"
          >
            {stats.map((item, idx) => (
              <div
                key={item.label}
                style={{
                  padding: '8px 16px',
                  borderRight: idx < stats.length - 1 ? '1px solid #e2e8f0' : 'none',
                }}
                className="hero-stat-box"
              >
                <span
                  style={{
                    display: 'block',
                    fontSize: '0.75rem',
                    fontWeight: 800,
                    letterSpacing: '1.5px',
                    color: '#0038e3',
                    marginBottom: '6px',
                    textTransform: 'uppercase',
                  }}
                >
                  {item.label}
                </span>
                <span
                  style={{
                    fontSize: '1.15rem',
                    fontWeight: 700,
                    color: '#111827',
                    lineHeight: 1.3,
                    display: 'block',
                  }}
                >
                  {item.value}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .hero-stats-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
          .hero-stat-box {
            border-right: none !important;
            border-bottom: 1px solid #e2e8f0;
            padding-bottom: 16px;
          }
        }
        @media (max-width: 540px) {
          .hero-stats-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
