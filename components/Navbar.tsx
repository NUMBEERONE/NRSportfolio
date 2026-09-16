'use client';

import { useState, useEffect } from 'react';

const navItems = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Certifications', href: '#certifications' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const sections = ['home', 'about', 'skills', 'experience', 'projects', 'certifications', 'contact'];
      for (const section of sections.reverse()) {
        const el = document.getElementById(section);
        if (el && window.scrollY >= el.offsetTop - 100) {
          setActiveSection(section);
          break;
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMenuOpen(false);
    const id = href.replace('#', '');
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        background: scrolled ? 'rgba(15, 42, 74, 0.98)' : 'transparent',
        backdropFilter: scrolled ? 'blur(12px)' : 'none',
        boxShadow: scrolled ? '0 2px 20px rgba(0,0,0,0.3)' : 'none',
        transition: 'all 0.3s ease',
      }}
    >
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: '70px' }}>
          {/* Logo */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <div style={{
              width: 42, height: 42,
              background: 'linear-gradient(135deg, #f5820a, #ff9a2e)',
              borderRadius: '10px',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              fontWeight: 800, fontSize: '1.1rem', color: '#fff',
              boxShadow: '0 4px 12px rgba(245,130,10,0.4)'
            }}>MO</div>
            <div>
              <div style={{ color: '#fff', fontWeight: 700, fontSize: '1rem', lineHeight: 1.2 }}>Manoj Oli</div>
              <div style={{ color: '#f5820a', fontSize: '0.7rem', fontWeight: 500, letterSpacing: '0.5px' }}>GRC Intern</div>
            </div>
          </div>

          {/* Desktop Nav */}
          <div style={{ display: 'flex', gap: '2px', alignItems: 'center' }} className="desktop-nav">
            {navItems.map((item) => (
              <button
                key={item.href}
                onClick={() => handleNavClick(item.href)}
                style={{
                  background: 'none',
                  border: 'none',
                  cursor: 'pointer',
                  color: activeSection === item.href.replace('#', '') ? '#f5820a' : '#e0e8f0',
                  fontWeight: activeSection === item.href.replace('#', '') ? 600 : 400,
                  fontSize: '0.88rem',
                  padding: '8px 14px',
                  borderRadius: '6px',
                  transition: 'all 0.2s',
                  borderBottom: activeSection === item.href.replace('#', '') ? '2px solid #f5820a' : '2px solid transparent',
                }}
                onMouseEnter={(e) => { (e.target as HTMLButtonElement).style.color = '#f5820a'; }}
                onMouseLeave={(e) => {
                  (e.target as HTMLButtonElement).style.color = activeSection === item.href.replace('#', '') ? '#f5820a' : '#e0e8f0';
                }}
              >
                {item.label}
              </button>
            ))}
            <button
              onClick={() => handleNavClick('#contact')}
              style={{
                background: 'linear-gradient(135deg, #f5820a, #ff9a2e)',
                color: '#fff',
                border: 'none',
                borderRadius: '6px',
                padding: '9px 20px',
                fontWeight: 600,
                fontSize: '0.88rem',
                cursor: 'pointer',
                marginLeft: '8px',
                boxShadow: '0 4px 12px rgba(245,130,10,0.3)',
                transition: 'all 0.2s',
              }}
            >
              Hire Me →
            </button>
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            style={{
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              display: 'none',
              flexDirection: 'column',
              gap: '5px',
              padding: '5px',
            }}
            className="hamburger"
          >
            {[0, 1, 2].map((i) => (
              <span key={i} style={{
                display: 'block',
                width: '24px',
                height: '2px',
                background: '#fff',
                borderRadius: '2px',
                transition: 'all 0.3s',
              }} />
            ))}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div style={{
          background: '#0f2a4a',
          padding: '16px 24px',
          borderTop: '1px solid rgba(255,255,255,0.1)',
        }}>
          {navItems.map((item) => (
            <button
              key={item.href}
              onClick={() => handleNavClick(item.href)}
              style={{
                display: 'block',
                width: '100%',
                textAlign: 'left',
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                color: '#e0e8f0',
                padding: '12px 0',
                borderBottom: '1px solid rgba(255,255,255,0.08)',
                fontSize: '0.95rem',
              }}
            >
              {item.label}
            </button>
          ))}
        </div>
      )}

      <style>{`
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .hamburger { display: flex !important; }
        }
      `}</style>
    </nav>
  );
}
