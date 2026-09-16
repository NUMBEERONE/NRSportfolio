'use client';

import { useState, useEffect } from 'react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when drawer is open
  useEffect(() => {
    if (drawerOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [drawerOpen]);

  const scrollTo = (id: string) => {
    setDrawerOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const navMenuItems = [
    { label: 'Home', target: 'home' },
    { label: 'About Me', target: 'about' },
    { label: 'GRC Expertise', target: 'expertise' },
    { label: 'Industry Focus', target: 'verticals' },
    { label: 'My Journey', target: 'stories' },
    { label: 'Achievements', target: 'achievements' },
    { label: 'Alliances & Partners', target: 'alliances' },
    { label: 'Contact', target: 'contact' },
  ];

  return (
    <>
      <header
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 1000,
          backgroundColor: scrolled ? 'rgba(255, 255, 255, 0.96)' : 'rgba(255, 255, 255, 0.8)',
          backdropFilter: 'blur(10px)',
          borderBottom: scrolled ? '1px solid rgba(0, 0, 0, 0.06)' : '1px solid transparent',
          transition: 'all 0.35s ease',
          padding: scrolled ? '14px 0' : '22px 0',
        }}
      >
        <div style={{ maxWidth: '1240px', margin: '0 auto', padding: '0 28px' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            {/* Logo */}
            <a
              href="#home"
              onClick={(e) => {
                e.preventDefault();
                scrollTo('home');
              }}
              style={{
                textDecoration: 'none',
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
              }}
            >
              <div
                style={{
                  width: '42px',
                  height: '42px',
                  borderRadius: '8px',
                  backgroundColor: '#0038e3',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#ffffff',
                  fontWeight: 900,
                  fontSize: '1.15rem',
                  letterSpacing: '-0.5px',
                  boxShadow: '0 4px 14px rgba(0, 56, 227, 0.35)',
                }}
              >
                MO
              </div>
              <div style={{ display: 'flex', flexDirection: 'column' }}>
                <span style={{ fontSize: '1.2rem', fontWeight: 800, color: '#111827', letterSpacing: '-0.02em', lineHeight: 1.1 }}>
                  MANOJ OLI
                </span>
                <span style={{ fontSize: '0.68rem', fontWeight: 600, color: '#0038e3', letterSpacing: '1.5px', textTransform: 'uppercase' }}>
                  GRC Intern
                </span>
              </div>
            </a>

            {/* Right Nav (Email, LinkedIn & Hamburger Menu) */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '24px' }}>
              <a
                href="https://www.linkedin.com/in/manoj-oli-a28840301/"
                target="_blank"
                rel="noopener noreferrer"
                className="desktop-email"
                style={{
                  color: '#0038e3',
                  fontSize: '0.88rem',
                  fontWeight: 700,
                  textDecoration: 'none',
                  letterSpacing: '0.2px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px',
                  backgroundColor: 'rgba(0, 56, 227, 0.08)',
                  padding: '6px 14px',
                  borderRadius: '20px',
                  transition: 'all 0.2s ease',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = '#0038e3';
                  e.currentTarget.style.color = '#ffffff';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = 'rgba(0, 56, 227, 0.08)';
                  e.currentTarget.style.color = '#0038e3';
                }}
              >
                <span>LinkedIn Profile</span>
                <span>↗</span>
              </a>

              <a
                href="mailto:contact@manojoli.com"
                className="desktop-email"
                style={{
                  color: '#111827',
                  fontSize: '0.92rem',
                  fontWeight: 600,
                  textDecoration: 'none',
                  letterSpacing: '0.2px',
                  transition: 'color 0.2s ease',
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = '#0038e3')}
                onMouseLeave={(e) => (e.currentTarget.style.color = '#111827')}
              >
                contact@manojoli.com
              </a>

              {/* Hamburger Button (4-line Litho style) */}
              <button
                type="button"
                className="push-button"
                aria-label="Open Navigation Menu"
                onClick={() => setDrawerOpen(true)}
              >
                <span />
                <span />
                <span />
                <span />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Backdrop */}
      <div
        className={`navbar-modern-backdrop ${drawerOpen ? 'open' : ''}`}
        onClick={() => setDrawerOpen(false)}
      />

      {/* Offcanvas Drawer Menu */}
      <div className={`navbar-modern-drawer ${drawerOpen ? 'open' : ''}`}>
        {/* Top bar in drawer */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '30px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <div
              style={{
                width: '36px',
                height: '36px',
                borderRadius: '6px',
                backgroundColor: '#ffffff',
                color: '#0038e3',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontWeight: 900,
                fontSize: '1rem',
              }}
            >
              MO
            </div>
            <div>
              <span style={{ fontWeight: 800, fontSize: '1.1rem', letterSpacing: '1px', color: '#ffffff', display: 'block', lineHeight: 1.1 }}>
                MANOJ OLI
              </span>
              <span style={{ fontSize: '0.72rem', color: '#93c5fd', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '1px' }}>
                GRC Intern
              </span>
            </div>
          </div>

          <button
            type="button"
            onClick={() => setDrawerOpen(false)}
            aria-label="Close Menu"
            style={{
              background: 'rgba(255, 255, 255, 0.15)',
              border: 'none',
              borderRadius: '50%',
              width: '40px',
              height: '40px',
              color: '#ffffff',
              fontSize: '1.2rem',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              transition: 'background 0.2s ease',
            }}
            onMouseEnter={(e) => (e.currentTarget.style.background = 'rgba(255, 255, 255, 0.3)')}
            onMouseLeave={(e) => (e.currentTarget.style.background = 'rgba(255, 255, 255, 0.15)')}
          >
            ✕
          </button>
        </div>

        {/* Menu Links */}
        <nav style={{ display: 'flex', flexDirection: 'column', gap: '14px', margin: '20px 0' }}>
          {navMenuItems.map((item, index) => (
            <button
              key={item.target}
              type="button"
              onClick={() => scrollTo(item.target)}
              style={{
                background: 'none',
                border: 'none',
                textAlign: 'left',
                color: '#ffffff',
                fontSize: 'clamp(1.2rem, 2.5vw, 1.6rem)',
                fontWeight: 600,
                cursor: 'pointer',
                padding: '4px 0',
                transition: 'all 0.2s ease',
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = '#93c5fd';
                e.currentTarget.style.transform = 'translateX(8px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = '#ffffff';
                e.currentTarget.style.transform = 'translateX(0)';
              }}
            >
              <span style={{ fontSize: '0.8rem', opacity: 0.5, fontWeight: 400 }}>0{index + 1}.</span>
              {item.label}
            </button>
          ))}
        </nav>

        {/* Drawer Footer Info */}
        <div style={{ borderTop: '1px solid rgba(255, 255, 255, 0.15)', paddingTop: '24px' }}>
          <div style={{ marginBottom: '16px' }}>
            <p style={{ fontSize: '0.8rem', opacity: 0.7, textTransform: 'uppercase', letterSpacing: '1px' }}>Direct Contact</p>
            <a
              href="mailto:contact@manojoli.com"
              style={{ color: '#ffffff', fontSize: '1rem', fontWeight: 600, textDecoration: 'none', display: 'block', marginTop: '4px' }}
            >
              contact@manojoli.com
            </a>
            <p style={{ color: '#93c5fd', fontSize: '0.9rem', marginTop: '4px' }}>
              +977 9807408151 / Kathmandu, Nepal
            </p>
          </div>

          {/* Social Icons */}
          <div style={{ display: 'flex', gap: '12px', marginTop: '16px' }}>
            {[
              { label: 'LinkedIn', href: 'https://www.linkedin.com/in/manoj-oli-a28840301/', icon: 'LI' },
              { label: 'GitHub', href: 'https://github.com/manoj-oli', icon: 'GH' },
              { label: 'Twitter', href: 'https://twitter.com', icon: 'X' },
              { label: 'Instagram', href: 'https://instagram.com', icon: 'IG' },
            ].map((soc) => (
              <a
                key={soc.label}
                href={soc.href}
                target="_blank"
                rel="noopener noreferrer"
                title={soc.label}
                className="social-icon-circle"
              >
                {soc.icon}
              </a>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 640px) {
          .desktop-email {
            display: none !important;
          }
        }
      `}</style>
    </>
  );
}
