'use client';

const certs = [
  {
    icon: '🏆',
    title: 'CompTIA Security+',
    issuer: 'CompTIA',
    year: '2025',
    status: 'In Progress',
    statusColor: '#f5820a',
    desc: 'Vendor-neutral certification covering network security, threats, cryptography, and compliance concepts.',
  },
  {
    icon: '🔐',
    title: 'Google Cybersecurity Certificate',
    issuer: 'Google / Coursera',
    year: '2024',
    status: 'Completed',
    statusColor: '#16a34a',
    desc: 'Foundations of cybersecurity, security domains, network security, and incident response.',
  },
  {
    icon: '📋',
    title: 'ISO 27001 Foundation',
    issuer: 'PECB',
    year: '2024',
    status: 'Completed',
    statusColor: '#16a34a',
    desc: 'Understanding of ISMS requirements, implementation, and audit principles per ISO/IEC 27001:2022.',
  },
  {
    icon: '🌐',
    title: 'GDPR Foundation',
    issuer: 'IAPP',
    year: '2024',
    status: 'Completed',
    statusColor: '#16a34a',
    desc: 'Core principles of the General Data Protection Regulation, data subject rights, and DPA obligations.',
  },
  {
    icon: '🛡️',
    title: 'NIST Cybersecurity Framework',
    issuer: 'NIST / Coursera',
    year: '2023',
    status: 'Completed',
    statusColor: '#16a34a',
    desc: 'Applying the NIST CSF Identify, Protect, Detect, Respond, and Recover functions in practice.',
  },
  {
    icon: '📊',
    title: 'Risk Management Professional',
    issuer: 'PMI (Planned)',
    year: '2026',
    status: 'Planned',
    statusColor: '#2563eb',
    desc: 'PMI-RMP certification to demonstrate advanced risk management knowledge and expertise.',
  },
];

export default function CertificationsSection() {
  return (
    <section id="certifications" style={{ padding: '100px 0', background: '#fff' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px' }}>
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '60px' }}>
          <div className="section-label" style={{ justifyContent: 'center' }}>— My Credentials</div>
          <h2 style={{ fontSize: 'clamp(1.8rem, 3vw, 2.4rem)', fontWeight: 800, color: '#0f2a4a', marginBottom: '12px' }}>
            Certifications & Learning
          </h2>
          <p style={{ color: '#666', maxWidth: '550px', margin: '0 auto', lineHeight: 1.7 }}>
            Continuously building my GRC knowledge base through recognized industry certifications and structured learning programs.
          </p>
        </div>

        {/* Cert Cards */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
          gap: '24px',
        }}>
          {certs.map((cert) => (
            <div
              key={cert.title}
              style={{
                background: '#f8fafc',
                border: '1px solid #e5e7eb',
                borderRadius: '14px',
                padding: '28px',
                transition: 'all 0.3s ease',
                cursor: 'default',
                position: 'relative',
                overflow: 'hidden',
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLDivElement).style.transform = 'translateY(-4px)';
                (e.currentTarget as HTMLDivElement).style.boxShadow = '0 12px 30px rgba(245,130,10,0.12)';
                (e.currentTarget as HTMLDivElement).style.borderColor = '#f5820a';
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLDivElement).style.transform = 'translateY(0)';
                (e.currentTarget as HTMLDivElement).style.boxShadow = 'none';
                (e.currentTarget as HTMLDivElement).style.borderColor = '#e5e7eb';
              }}
            >
              {/* Top strip */}
              <div style={{
                position: 'absolute', top: 0, left: 0, right: 0, height: '4px',
                background: 'linear-gradient(90deg, #f5820a, #ff9a2e)',
              }} />

              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '16px' }}>
                <div style={{ fontSize: '2rem' }}>{cert.icon}</div>
                <span style={{
                  background: `${cert.statusColor}18`,
                  color: cert.statusColor,
                  border: `1px solid ${cert.statusColor}40`,
                  borderRadius: '50px',
                  padding: '3px 10px',
                  fontSize: '0.72rem',
                  fontWeight: 700,
                }}>
                  {cert.status}
                </span>
              </div>

              <h3 style={{ color: '#0f2a4a', fontWeight: 700, fontSize: '0.97rem', marginBottom: '4px' }}>{cert.title}</h3>
              <div style={{ display: 'flex', gap: '12px', marginBottom: '12px' }}>
                <span style={{ color: '#f5820a', fontSize: '0.8rem', fontWeight: 600 }}>{cert.issuer}</span>
                <span style={{ color: '#888', fontSize: '0.8rem' }}>📅 {cert.year}</span>
              </div>
              <p style={{ color: '#666', fontSize: '0.82rem', lineHeight: 1.6 }}>{cert.desc}</p>
            </div>
          ))}
        </div>

        {/* Education banner */}
        <div style={{
          marginTop: '60px',
          background: 'linear-gradient(135deg, #0f2a4a, #1a3a5c)',
          borderRadius: '20px',
          padding: '40px 50px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '24px',
        }}>
          <div>
            <div className="section-label" style={{ color: '#f5820a' }}>— Education</div>
            <h3 style={{ color: '#fff', fontSize: '1.4rem', fontWeight: 700, marginBottom: '6px' }}>
              Bachelor of Science in Computer Science
            </h3>
            <p style={{ color: '#94b8d4', fontSize: '0.9rem' }}>Kathmandu University · 2022 – Present</p>
          </div>
          <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
            {['Networking', 'Database Systems', 'Software Engineering', 'Cybersecurity Fundamentals'].map((s) => (
              <span
                key={s}
                style={{
                  background: 'rgba(245,130,10,0.15)',
                  border: '1px solid rgba(245,130,10,0.3)',
                  borderRadius: '50px',
                  padding: '6px 14px',
                  color: '#f5820a',
                  fontSize: '0.8rem',
                  fontWeight: 600,
                }}
              >
                {s}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
