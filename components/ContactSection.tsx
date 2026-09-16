'use client';

import { useState } from 'react';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      setFormData({ name: '', email: '', phone: '', message: '' });
      setTimeout(() => setSubmitted(false), 6000);
    }, 800);
  };

  return (
    <section id="contact" style={{ padding: '110px 0 90px', backgroundColor: '#ffffff', position: 'relative' }}>
      <div style={{ maxWidth: '1240px', margin: '0 auto', padding: '0 28px' }}>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '0.9fr 1.1fr',
            gap: '60px',
            alignItems: 'flex-start',
          }}
          className="contact-split-grid"
        >
          {/* Left: Queries & Contact Info */}
          <div>
            <span className="section-tagline">Reach Out</span>
            <h2
              className="litho-heading section-main-title"
              style={{ textTransform: 'uppercase', marginBottom: '24px' }}
            >
              <span className="litho-primary-title">Any</span>{' '}
              <span className="litho-secondary-title" style={{ color: '#0038e3' }}>
                Queries?
              </span>
            </h2>

            <p style={{ color: '#4b5563', fontSize: '1rem', lineHeight: 1.7, marginBottom: '28px' }}>
              I am open to discussing GRC opportunities, junior analyst positions, audit support projects, and collaborative compliance research.
            </p>

            <div style={{ marginBottom: '32px' }}>
              <h3
                style={{
                  fontSize: '0.82rem',
                  fontWeight: 800,
                  color: '#0038e3',
                  letterSpacing: '1.5px',
                  textTransform: 'uppercase',
                  marginBottom: '10px',
                }}
              >
                CONTACT INFO
              </h3>
              <p style={{ color: '#4b5563', fontSize: '1rem', lineHeight: 1.7, marginBottom: '6px' }}>
                Kathmandu, Nepal
              </p>
              <p style={{ color: '#4b5563', fontSize: '1rem', lineHeight: 1.7 }}>
                Nepal Realistic Solutions (NRS) Ecosystem
              </p>
            </div>

            <div style={{ marginBottom: '28px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
                <span style={{ fontWeight: 800, color: '#111827', fontSize: '0.95rem' }}>Email:</span>
                <a
                  href="mailto:contact@manojoli.com"
                  style={{ color: '#0038e3', fontWeight: 600, fontSize: '0.95rem', textDecoration: 'none' }}
                >
                  contact@manojoli.com
                </a>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
                <span style={{ fontWeight: 800, color: '#111827', fontSize: '0.95rem' }}>LinkedIn:</span>
                <a
                  href="https://www.linkedin.com/in/manoj-oli-a28840301/"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: '#0038e3', fontWeight: 600, fontSize: '0.95rem', textDecoration: 'none' }}
                >
                  linkedin.com/in/manoj-oli-a28840301
                </a>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <span style={{ fontWeight: 800, color: '#111827', fontSize: '0.95rem' }}>Location:</span>
                <span style={{ color: '#4b5563', fontWeight: 600, fontSize: '0.95rem' }}>
                  Kathmandu, Nepal 🇳🇵
                </span>
              </div>
            </div>

            {/* Social Icons Bar */}
            <div style={{ marginTop: '36px' }}>
              <span style={{ fontSize: '0.78rem', fontWeight: 700, color: '#94a3b8', textTransform: 'uppercase', letterSpacing: '1px', display: 'block', marginBottom: '12px' }}>
                Connect Online
              </span>
              <div style={{ display: 'flex', gap: '10px' }}>
                {[
                  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/manoj-oli-a28840301/', icon: 'LI' },
                  { label: 'GitHub', href: 'https://github.com/manoj-oli', icon: 'GH' },
                  { label: 'Twitter', href: 'https://twitter.com', icon: 'X' },
                  { label: 'Instagram', href: 'https://instagram.com', icon: 'IG' },
                ].map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    title={s.label}
                    style={{
                      width: '42px',
                      height: '42px',
                      borderRadius: '50%',
                      backgroundColor: '#f8fafc',
                      border: '1px solid #e2e8f0',
                      display: 'inline-flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: '#111827',
                      fontWeight: 800,
                      fontSize: '0.82rem',
                      textDecoration: 'none',
                      transition: 'all 0.25s ease',
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.backgroundColor = '#0038e3';
                      e.currentTarget.style.color = '#ffffff';
                      e.currentTarget.style.borderColor = '#0038e3';
                      e.currentTarget.style.transform = 'translateY(-3px)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.backgroundColor = '#f8fafc';
                      e.currentTarget.style.color = '#111827';
                      e.currentTarget.style.borderColor = '#e2e8f0';
                      e.currentTarget.style.transform = 'translateY(0)';
                    }}
                  >
                    {s.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Right: Contact Form */}
          <div
            style={{
              backgroundColor: '#f8fafc',
              border: '1px solid #e2e8f0',
              borderRadius: '16px',
              padding: '40px',
              boxShadow: '0 10px 30px rgba(0, 0, 0, 0.03)',
            }}
          >
            <h3
              className="litho-heading"
              style={{
                fontSize: '1.4rem',
                fontWeight: 800,
                color: '#111827',
                marginBottom: '24px',
              }}
            >
              Let&apos;s get in touch with me
            </h3>

            {submitted && (
              <div
                style={{
                  backgroundColor: '#ecfdf5',
                  border: '1px solid #10b981',
                  borderRadius: '8px',
                  padding: '16px 20px',
                  marginBottom: '20px',
                  color: '#065f46',
                  fontWeight: 600,
                  fontSize: '0.92rem',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '10px',
                }}
              >
                <span>✓</span>
                <span>Thank you! Your message has been sent successfully. I will get back to you shortly.</span>
              </div>
            )}

            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
              <div>
                <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, color: '#374151', marginBottom: '6px' }}>
                  Your name *
                </label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="e.g. Roshan Shrestha"
                  style={{
                    width: '100%',
                    padding: '12px 16px',
                    borderRadius: '6px',
                    border: '1px solid #cbd5e1',
                    backgroundColor: '#ffffff',
                    fontSize: '0.95rem',
                    color: '#111827',
                    outline: 'none',
                    transition: 'border-color 0.2s',
                  }}
                  onFocus={(e) => (e.target.style.borderColor = '#0038e3')}
                  onBlur={(e) => (e.target.style.borderColor = '#cbd5e1')}
                />
              </div>

              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: '1fr 1fr',
                  gap: '16px',
                }}
                className="form-row-2"
              >
                <div>
                  <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, color: '#374151', marginBottom: '6px' }}>
                    Your email *
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="name@company.com"
                    style={{
                      width: '100%',
                      padding: '12px 16px',
                      borderRadius: '6px',
                      border: '1px solid #cbd5e1',
                      backgroundColor: '#ffffff',
                      fontSize: '0.95rem',
                      color: '#111827',
                      outline: 'none',
                      transition: 'border-color 0.2s',
                    }}
                    onFocus={(e) => (e.target.style.borderColor = '#0038e3')}
                    onBlur={(e) => (e.target.style.borderColor = '#cbd5e1')}
                  />
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, color: '#374151', marginBottom: '6px' }}>
                    Contact Number (optional)
                  </label>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="+977 9800000000"
                    style={{
                      width: '100%',
                      padding: '12px 16px',
                      borderRadius: '6px',
                      border: '1px solid #cbd5e1',
                      backgroundColor: '#ffffff',
                      fontSize: '0.95rem',
                      color: '#111827',
                      outline: 'none',
                      transition: 'border-color 0.2s',
                    }}
                    onFocus={(e) => (e.target.style.borderColor = '#0038e3')}
                    onBlur={(e) => (e.target.style.borderColor = '#cbd5e1')}
                  />
                </div>
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, color: '#374151', marginBottom: '6px' }}>
                  Your message *
                </label>
                <textarea
                  rows={4}
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Tell me about the GRC opportunity, compliance requirement, or how we can collaborate..."
                  style={{
                    width: '100%',
                    padding: '12px 16px',
                    borderRadius: '6px',
                    border: '1px solid #cbd5e1',
                    backgroundColor: '#ffffff',
                    fontSize: '0.95rem',
                    color: '#111827',
                    outline: 'none',
                    resize: 'vertical',
                    fontFamily: 'inherit',
                    transition: 'border-color 0.2s',
                  }}
                  onFocus={(e) => (e.target.style.borderColor = '#0038e3')}
                  onBlur={(e) => (e.target.style.borderColor = '#cbd5e1')}
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                style={{
                  backgroundColor: '#0038e3',
                  color: '#ffffff',
                  border: 'none',
                  borderRadius: '4px',
                  padding: '14px 32px',
                  fontWeight: 800,
                  fontSize: '0.95rem',
                  letterSpacing: '1px',
                  textTransform: 'uppercase',
                  cursor: isSubmitting ? 'not-allowed' : 'pointer',
                  alignSelf: 'flex-start',
                  boxShadow: '0 6px 20px rgba(0, 56, 227, 0.3)',
                  transition: 'all 0.2s ease',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                }}
                onMouseEnter={(e) => {
                  if (!isSubmitting) e.currentTarget.style.backgroundColor = '#111827';
                }}
                onMouseLeave={(e) => {
                  if (!isSubmitting) e.currentTarget.style.backgroundColor = '#0038e3';
                }}
              >
                {isSubmitting ? 'Sending...' : 'Send Message →'}
              </button>
            </form>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 860px) {
          .contact-split-grid {
            grid-template-columns: 1fr !important;
          }
        }
        @media (max-width: 520px) {
          .form-row-2 {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
