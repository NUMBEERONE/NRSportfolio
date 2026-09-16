'use client';

import { useState } from 'react';

const stories = [
  {
    id: 1,
    quote: 'Joined Nepal Realistic Solutions (NRS) as a GRC Intern, actively assisting client teams with ISO/IEC 27001 ISMS gap analyses and structured compliance documentation.',
    title: 'GRC Intern @ Nepal Realistic Solutions',
    subtitle: 'ISO 27001 & ISMS Implementation Support',
    icon: '🛡️',
  },
  {
    id: 2,
    quote: 'Developed and maintained enterprise risk registers, qualitative risk matrices, and Statement of Applicability (SoA) mappings for technology and financial clients.',
    title: 'Risk Assessment & Register Design',
    subtitle: 'Threat Modeling & Control Gap Analyses',
    icon: '📊',
  },
  {
    id: 3,
    quote: 'Drafted 10+ comprehensive Information Security policies, procedures, and internal audit evidence packs aligned with ISO 27001, ISO 9001, and GDPR standards.',
    title: 'Policy Governance & Audit Readiness',
    subtitle: 'Compliance Documentation & Review',
    icon: '📝',
  },
];

export default function ProudStoriesSection() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? stories.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === stories.length - 1 ? 0 : prev + 1));
  };

  return (
    <section id="stories" style={{ padding: '100px 0', backgroundColor: '#f8fafc', overflow: 'hidden' }}>
      <div style={{ maxWidth: '1240px', margin: '0 auto', padding: '0 28px' }}>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '0.8fr 1.2fr',
            gap: '50px',
            alignItems: 'center',
          }}
          className="stories-split-grid"
        >
          {/* Left Column Header */}
          <div>
            <span className="section-tagline">GRC Journey</span>
            <h2
              className="litho-heading section-main-title"
              style={{ textTransform: 'uppercase', marginBottom: '20px' }}
            >
              <span className="litho-primary-title">Proud</span>{' '}
              <span className="litho-secondary-title" style={{ color: '#0038e3' }}>
                Stories
              </span>
            </h2>
            <p style={{ color: '#4b5563', fontSize: '1rem', lineHeight: 1.7, marginBottom: '32px' }}>
              Key achievements and hands-on contributions during my GRC journey at Nepal Realistic Solutions.
            </p>

            {/* Carousel Navigation Buttons */}
            <div style={{ display: 'flex', gap: '12px' }}>
              <button
                type="button"
                onClick={prevSlide}
                aria-label="Previous Slide"
                style={{
                  width: '46px',
                  height: '46px',
                  borderRadius: '50%',
                  backgroundColor: '#ffffff',
                  border: '1px solid #cbd5e1',
                  color: '#111827',
                  fontSize: '1.2rem',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease',
                  boxShadow: '0 4px 10px rgba(0,0,0,0.04)',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = '#0038e3';
                  e.currentTarget.style.color = '#ffffff';
                  e.currentTarget.style.borderColor = '#0038e3';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = '#ffffff';
                  e.currentTarget.style.color = '#111827';
                  e.currentTarget.style.borderColor = '#cbd5e1';
                }}
              >
                ←
              </button>
              <button
                type="button"
                onClick={nextSlide}
                aria-label="Next Slide"
                style={{
                  width: '46px',
                  height: '46px',
                  borderRadius: '50%',
                  backgroundColor: '#ffffff',
                  border: '1px solid #cbd5e1',
                  color: '#111827',
                  fontSize: '1.2rem',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease',
                  boxShadow: '0 4px 10px rgba(0,0,0,0.04)',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = '#0038e3';
                  e.currentTarget.style.color = '#ffffff';
                  e.currentTarget.style.borderColor = '#0038e3';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = '#ffffff';
                  e.currentTarget.style.color = '#111827';
                  e.currentTarget.style.borderColor = '#cbd5e1';
                }}
              >
                →
              </button>
            </div>
          </div>

          {/* Right Column: Active Story Card */}
          <div style={{ position: 'relative' }}>
            <div
              className="hvr-float-3px"
              style={{
                backgroundColor: '#ffffff',
                border: '1px solid #e2e8f0',
                borderRadius: '16px',
                padding: '44px 38px',
                boxShadow: '0 15px 40px rgba(0, 56, 227, 0.08)',
                position: 'relative',
              }}
            >
              <div
                style={{
                  position: 'absolute',
                  top: '24px',
                  right: '28px',
                  fontSize: '2.4rem',
                  opacity: 0.8,
                }}
              >
                {stories[currentSlide].icon}
              </div>

              <div style={{ color: '#0038e3', fontSize: '2.5rem', fontWeight: 900, lineHeight: 1, marginBottom: '16px' }}>
                “
              </div>

              <p style={{ color: '#1f2937', fontSize: '1.18rem', lineHeight: 1.75, fontWeight: 500, marginBottom: '32px' }}>
                {stories[currentSlide].quote}
              </p>

              <div style={{ borderTop: '1px solid #f1f5f9', paddingTop: '20px', display: 'flex', alignItems: 'center', gap: '14px' }}>
                <div
                  style={{
                    width: '44px',
                    height: '44px',
                    borderRadius: '10px',
                    backgroundColor: '#0038e3',
                    color: '#ffffff',
                    fontWeight: 800,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  MO
                </div>
                <div>
                  <h4 style={{ fontWeight: 800, fontSize: '1.05rem', color: '#111827' }}>
                    {stories[currentSlide].title}
                  </h4>
                  <p style={{ color: '#64748b', fontSize: '0.85rem' }}>
                    {stories[currentSlide].subtitle}
                  </p>
                </div>
              </div>
            </div>

            {/* Pagination dots */}
            <div style={{ display: 'flex', gap: '8px', justifyContent: 'center', marginTop: '24px' }}>
              {stories.map((s, idx) => (
                <button
                  key={s.id}
                  type="button"
                  onClick={() => setCurrentSlide(idx)}
                  aria-label={`Go to slide ${idx + 1}`}
                  style={{
                    width: idx === currentSlide ? '28px' : '10px',
                    height: '10px',
                    borderRadius: '5px',
                    backgroundColor: idx === currentSlide ? '#0038e3' : '#cbd5e1',
                    border: 'none',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease',
                  }}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 860px) {
          .stories-split-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
