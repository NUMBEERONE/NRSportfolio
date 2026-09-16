'use client';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer style={{ background: '#0a1e35', color: '#fff' }}>
      {/* Main footer */}
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '60px 24px 40px' }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: '2fr 1fr 1fr 1fr',
          gap: '40px',
        }} className="footer-grid">
          {/* Brand */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '16px' }}>
              <div style={{
                width: 44, height: 44,
                background: 'linear-gradient(135deg, #f5820a, #ff9a2e)',
                borderRadius: '10px',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontWeight: 800, fontSize: '1.1rem', color: '#fff',
              }}>MO</div>
              <div>
                <div style={{ fontWeight: 700, fontSize: '1rem' }}>Manoj Oli</div>
                <div style={{ color: '#f5820a', fontSize: '0.72rem', fontWeight: 500 }}>GRC Intern</div>
              </div>
            </div>
            <p style={{ color: '#94b8d4', fontSize: '0.85rem', lineHeight: 1.7, marginBottom: '20px', maxWidth: '280px' }}>
              Aspiring GRC professional passionate about governance, risk management, and compliance. Building secure and resilient organizations.
            </p>
            {/* Social icons */}
            <div style={{ display: 'flex', gap: '10px' }}>
              {[
                { icon: 'in', label: 'LinkedIn', href: 'https://linkedin.com' },
                { icon: 'gh', label: 'GitHub', href: 'https://github.com' },
                { icon: '@', label: 'Email', href: 'mailto:manoJoli@email.com' },
                { icon: '✕', label: 'Twitter', href: 'https://twitter.com' },
              ].map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  title={s.label}
                  style={{
                    width: 36, height: 36,
                    background: 'rgba(255,255,255,0.08)',
                    border: '1px solid rgba(255,255,255,0.12)',
                    borderRadius: '8px',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    color: '#94b8d4', fontWeight: 700, fontSize: '0.8rem',
                    textDecoration: 'none',
                    transition: 'all 0.2s',
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLAnchorElement).style.background = 'rgba(245,130,10,0.2)';
                    (e.currentTarget as HTMLAnchorElement).style.borderColor = '#f5820a';
                    (e.currentTarget as HTMLAnchorElement).style.color = '#f5820a';
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLAnchorElement).style.background = 'rgba(255,255,255,0.08)';
                    (e.currentTarget as HTMLAnchorElement).style.borderColor = 'rgba(255,255,255,0.12)';
                    (e.currentTarget as HTMLAnchorElement).style.color = '#94b8d4';
                  }}
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 style={{ fontWeight: 700, fontSize: '0.9rem', marginBottom: '16px', color: '#fff' }}>Quick Links</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              {[
                { label: 'Home', id: 'home' },
                { label: 'About', id: 'about' },
                { label: 'Skills', id: 'skills' },
                { label: 'Experience', id: 'experience' },
                { label: 'Projects', id: 'projects' },
              ].map((link) => (
                <button
                  key={link.id}
                  onClick={() => scrollTo(link.id)}
                  style={{
                    background: 'none', border: 'none', cursor: 'pointer',
                    color: '#94b8d4', fontSize: '0.85rem', textAlign: 'left',
                    padding: 0, transition: 'color 0.2s',
                  }}
                  onMouseEnter={(e) => { (e.target as HTMLButtonElement).style.color = '#f5820a'; }}
                  onMouseLeave={(e) => { (e.target as HTMLButtonElement).style.color = '#94b8d4'; }}
                >
                  → {link.label}
                </button>
              ))}
            </div>
          </div>

          {/* GRC Services */}
          <div>
            <h4 style={{ fontWeight: 700, fontSize: '0.9rem', marginBottom: '16px', color: '#fff' }}>GRC Services</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              {['Risk Assessment', 'Compliance Management', 'Audit Support', 'Policy Development', 'Data Privacy', 'ISO 27001'].map((s) => (
                <span key={s} style={{ color: '#94b8d4', fontSize: '0.83rem' }}>• {s}</span>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 style={{ fontWeight: 700, fontSize: '0.9rem', marginBottom: '16px', color: '#fff' }}>Contact</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {[
                { icon: '📧', text: 'manoJoli@email.com' },
                { icon: '📍', text: 'Kathmandu, Nepal' },
                { icon: '🕐', text: 'Mon – Fri: 9AM – 6PM NPT' },
              ].map((c) => (
                <div key={c.text} style={{ display: 'flex', gap: '8px', alignItems: 'flex-start' }}>
                  <span style={{ fontSize: '0.9rem', marginTop: '1px' }}>{c.icon}</span>
                  <span style={{ color: '#94b8d4', fontSize: '0.83rem' }}>{c.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div style={{ borderTop: '1px solid rgba(255,255,255,0.08)' }} />

      {/* Bottom bar */}
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '20px 24px' }}>
        <div style={{
          display: 'flex', justifyContent: 'space-between', alignItems: 'center',
          flexWrap: 'wrap', gap: '12px',
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <div style={{
                width: 32, height: 32,
                background: 'linear-gradient(135deg, #f5820a, #ff9a2e)',
                borderRadius: '8px',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontWeight: 800, fontSize: '0.8rem', color: '#fff',
              }}>MO</div>
              <span style={{ color: '#94b8d4', fontSize: '0.8rem' }}>
                © {currentYear} Manoj Oli. All rights reserved.
              </span>
            </div>
          </div>

          <div style={{ color: '#94b8d4', fontSize: '0.8rem', fontStyle: 'italic' }}>
            <span style={{ color: '#f5820a', fontWeight: 700 }}>Better Governance.</span>{' '}
            <span style={{ color: '#f5820a', fontWeight: 700 }}>Greater Compliance.</span>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .footer-grid { grid-template-columns: 1fr 1fr !important; }
        }
        @media (max-width: 480px) {
          .footer-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </footer>
  );
}
