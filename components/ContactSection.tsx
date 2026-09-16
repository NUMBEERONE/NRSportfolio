'use client';

import { useState } from 'react';

export default function ContactSection() {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <section id="contact" style={{ padding: '100px 0', background: '#fff' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px' }}>
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '60px' }}>
          <div className="section-label" style={{ justifyContent: 'center' }}>— Get In Touch</div>
          <h2 style={{ fontSize: 'clamp(1.8rem, 3vw, 2.4rem)', fontWeight: 800, color: '#0f2a4a', marginBottom: '12px' }}>
            Let&apos;s Work Together
          </h2>
          <p style={{ color: '#666', maxWidth: '500px', margin: '0 auto', lineHeight: 1.7 }}>
            Looking for a motivated GRC intern to join your team? Let&apos;s connect and explore how I can contribute to your compliance journey.
          </p>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 2fr',
          gap: '60px',
        }} className="contact-grid">

          {/* Left – Contact Info */}
          <div>
            <h3 style={{ color: '#0f2a4a', fontWeight: 700, fontSize: '1.2rem', marginBottom: '24px' }}>Contact Information</h3>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', marginBottom: '40px' }}>
              {[
                { icon: '📧', label: 'Email', value: 'manoJoli@email.com', href: 'mailto:manoJoli@email.com' },
                { icon: '💼', label: 'LinkedIn', value: 'linkedin.com/in/manoJoli', href: 'https://linkedin.com' },
                { icon: '🐙', label: 'GitHub', value: 'github.com/manoJoli', href: 'https://github.com' },
                { icon: '📍', label: 'Location', value: 'Kathmandu, Nepal 🇳🇵', href: null },
              ].map((contact) => (
                <div key={contact.label} style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                  <div style={{
                    width: 46, height: 46,
                    background: 'linear-gradient(135deg, rgba(245,130,10,0.1), rgba(245,130,10,0.05))',
                    border: '1px solid rgba(245,130,10,0.3)',
                    borderRadius: '10px',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontSize: '1.2rem', flexShrink: 0,
                  }}>
                    {contact.icon}
                  </div>
                  <div>
                    <div style={{ color: '#888', fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.5px', marginBottom: '2px' }}>{contact.label}</div>
                    {contact.href ? (
                      <a href={contact.href} target="_blank" rel="noopener noreferrer" style={{ color: '#0f2a4a', fontWeight: 600, fontSize: '0.88rem', textDecoration: 'none' }}>
                        {contact.value}
                      </a>
                    ) : (
                      <span style={{ color: '#0f2a4a', fontWeight: 600, fontSize: '0.88rem' }}>{contact.value}</span>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Availability card */}
            <div style={{
              background: 'linear-gradient(135deg, #0f2a4a, #1a3a5c)',
              borderRadius: '16px',
              padding: '24px',
              color: '#fff',
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '12px' }}>
                <div style={{ width: 10, height: 10, borderRadius: '50%', background: '#22c55e', boxShadow: '0 0 8px #22c55e' }} />
                <span style={{ fontWeight: 700, fontSize: '0.95rem' }}>Available for Opportunities</span>
              </div>
              <p style={{ color: '#94b8d4', fontSize: '0.82rem', lineHeight: 1.6, marginBottom: '16px' }}>
                I&apos;m open to GRC internship, junior analyst, and compliance associate roles. Let&apos;s discuss how I can add value to your team.
              </p>
              <a
                href="mailto:manoJoli@email.com"
                style={{
                  display: 'inline-block',
                  background: 'linear-gradient(135deg, #f5820a, #ff9a2e)',
                  color: '#fff',
                  textDecoration: 'none',
                  borderRadius: '8px',
                  padding: '10px 20px',
                  fontWeight: 700,
                  fontSize: '0.85rem',
                }}
              >
                Send Email →
              </a>
            </div>
          </div>

          {/* Right – Contact Form */}
          <div>
            {submitted && (
              <div style={{
                background: '#f0fdf4',
                border: '1px solid #22c55e',
                borderRadius: '10px',
                padding: '16px 20px',
                marginBottom: '20px',
                color: '#16a34a',
                fontWeight: 600,
                display: 'flex',
                alignItems: 'center',
                gap: '10px',
              }}>
                ✅ Message sent! I&apos;ll get back to you within 24 hours.
              </div>
            )}

            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
                {[
                  { key: 'name', label: 'Full Name', placeholder: 'John Doe', type: 'text' },
                  { key: 'email', label: 'Email Address', placeholder: 'john@company.com', type: 'email' },
                ].map((field) => (
                  <div key={field.key}>
                    <label style={{ display: 'block', color: '#0f2a4a', fontWeight: 600, fontSize: '0.85rem', marginBottom: '6px' }}>
                      {field.label}
                    </label>
                    <input
                      type={field.type}
                      placeholder={field.placeholder}
                      required
                      value={formData[field.key as keyof typeof formData]}
                      onChange={(e) => setFormData({ ...formData, [field.key]: e.target.value })}
                      style={{
                        width: '100%',
                        border: '1px solid #d1d5db',
                        borderRadius: '8px',
                        padding: '12px 14px',
                        fontSize: '0.88rem',
                        color: '#333',
                        background: '#f9fafb',
                        outline: 'none',
                        transition: 'border-color 0.2s',
                      }}
                      onFocus={(e) => { e.target.style.borderColor = '#f5820a'; e.target.style.background = '#fff'; }}
                      onBlur={(e) => { e.target.style.borderColor = '#d1d5db'; e.target.style.background = '#f9fafb'; }}
                    />
                  </div>
                ))}
              </div>

              <div>
                <label style={{ display: 'block', color: '#0f2a4a', fontWeight: 600, fontSize: '0.85rem', marginBottom: '6px' }}>Subject</label>
                <input
                  type="text"
                  placeholder="GRC Internship Opportunity / Collaboration"
                  required
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  style={{
                    width: '100%',
                    border: '1px solid #d1d5db',
                    borderRadius: '8px',
                    padding: '12px 14px',
                    fontSize: '0.88rem',
                    color: '#333',
                    background: '#f9fafb',
                    outline: 'none',
                  }}
                  onFocus={(e) => { e.target.style.borderColor = '#f5820a'; e.target.style.background = '#fff'; }}
                  onBlur={(e) => { e.target.style.borderColor = '#d1d5db'; e.target.style.background = '#f9fafb'; }}
                />
              </div>

              <div>
                <label style={{ display: 'block', color: '#0f2a4a', fontWeight: 600, fontSize: '0.85rem', marginBottom: '6px' }}>Message</label>
                <textarea
                  placeholder="Tell me about the opportunity or how I can help..."
                  required
                  rows={6}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  style={{
                    width: '100%',
                    border: '1px solid #d1d5db',
                    borderRadius: '8px',
                    padding: '12px 14px',
                    fontSize: '0.88rem',
                    color: '#333',
                    background: '#f9fafb',
                    outline: 'none',
                    resize: 'vertical',
                    fontFamily: 'inherit',
                  }}
                  onFocus={(e) => { e.target.style.borderColor = '#f5820a'; e.target.style.background = '#fff'; }}
                  onBlur={(e) => { e.target.style.borderColor = '#d1d5db'; e.target.style.background = '#f9fafb'; }}
                />
              </div>

              <button
                type="submit"
                style={{
                  background: 'linear-gradient(135deg, #f5820a, #ff9a2e)',
                  color: '#fff',
                  border: 'none',
                  borderRadius: '8px',
                  padding: '14px 32px',
                  fontWeight: 700,
                  fontSize: '0.95rem',
                  cursor: 'pointer',
                  boxShadow: '0 6px 20px rgba(245,130,10,0.3)',
                  alignSelf: 'flex-start',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                }}
              >
                Send Message →
              </button>
            </form>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .contact-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
