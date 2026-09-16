'use client';

import { useEffect, useState } from 'react';

export default function Footer() {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const currentYear = new Date().getFullYear();

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <footer
        style={{
          backgroundColor: '#111827',
          color: '#ffffff',
          borderTop: '1px solid #1f2937',
          padding: '48px 0',
        }}
      >
        <div style={{ maxWidth: '1240px', margin: '0 auto', padding: '0 28px' }}>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              flexWrap: 'wrap',
              gap: '24px',
            }}
            className="footer-inner-bar"
          >
            {/* Navigation links */}
            <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }} className="footer-links">
              {[
                { label: 'Home', target: 'home' },
                { label: 'About Me', target: 'about' },
                { label: 'Expertise', target: 'expertise' },
                { label: 'Industry Verticals', target: 'verticals' },
                { label: 'Achievements', target: 'achievements' },
                { label: 'Contact', target: 'contact' },
              ].map((item) => (
                <button
                  key={item.label}
                  type="button"
                  onClick={() => scrollTo(item.target)}
                  style={{
                    background: 'none',
                    border: 'none',
                    color: '#94a3b8',
                    fontSize: '0.88rem',
                    fontWeight: 600,
                    cursor: 'pointer',
                    padding: 0,
                    transition: 'color 0.2s',
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = '#ffffff')}
                  onMouseLeave={(e) => (e.currentTarget.style.color = '#94a3b8')}
                >
                  {item.label}
                </button>
              ))}
            </div>

            {/* Logo */}
            <div
              onClick={() => scrollToTop()}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '10px',
                cursor: 'pointer',
              }}
            >
              <div
                style={{
                  width: '34px',
                  height: '34px',
                  borderRadius: '6px',
                  backgroundColor: '#0038e3',
                  color: '#ffffff',
                  fontWeight: 900,
                  fontSize: '0.95rem',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                MO
              </div>
              <span style={{ fontWeight: 800, fontSize: '1rem', letterSpacing: '0.5px', color: '#ffffff' }}>
                MANOJ OLI
              </span>
            </div>

            {/* Copyright */}
            <div style={{ color: '#64748b', fontSize: '0.85rem' }}>
              Copyright © {currentYear}{' '}
              <span style={{ color: '#93c5fd', fontWeight: 600 }}>Manoj Oli</span>. All Rights Reserved.
            </div>
          </div>
        </div>
      </footer>

      {/* Floating Scroll to Top Arrow Button */}
      {showScrollTop && (
        <button
          type="button"
          onClick={scrollToTop}
          className="scroll-top-arrow"
          aria-label="Scroll to top"
        >
          ↑
        </button>
      )}

      <style>{`
        @media (max-width: 768px) {
          .footer-inner-bar {
            flex-direction: column !important;
            text-align: center;
            align-items: center !important;
          }
          .footer-links {
            justify-content: center;
          }
        }
      `}</style>
    </>
  );
}
