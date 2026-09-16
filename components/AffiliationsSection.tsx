'use client';

const alliances = [
  {
    name: 'Nepal Realistic Solutions (NRS)',
    category: 'Consulting & Auditing Partner',
    desc: 'Premier ISO and Management Consulting Firm in Nepal & Australia',
    link: 'https://www.nrsnepal.com/',
    tag: 'Strategic Alliance',
  },
  {
    name: 'Yoj Investment',
    category: 'Fintech & Investment',
    desc: 'Financial Advisory and Asset Management Services',
    link: 'https://yojinvest.com/',
    tag: 'Client Ecosystem',
  },
  {
    name: 'LMM Canada',
    category: 'International Immigration & Advisory',
    desc: 'Global Migration and Corporate Advisory',
    link: 'https://lmmcanada.com/',
    tag: 'Global Alliance',
  },
  {
    name: 'RNS Services Australia',
    category: 'Enterprise & IT Advisory',
    desc: 'Sydney-based Consulting and Corporate Services',
    link: 'https://rnsservices.com.au/',
    tag: 'Australia Network',
  },
  {
    name: 'Elysium HR',
    category: 'HR & Executive Search',
    desc: 'Talent Acquisition and Governance Search Partner',
    link: 'https://www.elysiumhr.com/',
    tag: 'HR Advisory',
  },
  {
    name: 'Job in Kathmandu Valley',
    category: 'Career & Talent Portal',
    desc: 'Premier Employment and Career Consulting Platform',
    link: 'https://www.jobinkathmanduvalley.com/',
    tag: 'Employment Network',
  },
  {
    name: 'Job in Chitwan',
    category: 'Regional Employment Hub',
    desc: 'Regional Workforce and Business Network in Nepal',
    link: 'https://www.jobinchitwan.com/',
    tag: 'Regional Hub',
  },
  {
    name: 'Mero Samparka',
    category: 'Communication & Outreach',
    desc: 'Corporate Relations and Communications Platform',
    link: 'https://www.merosamparka.com/',
    tag: 'Partner Network',
  },
];

export default function AffiliationsSection() {
  return (
    <section id="alliances" style={{ padding: '100px 0', backgroundColor: '#f8fafc' }}>
      <div style={{ maxWidth: '1240px', margin: '0 auto', padding: '0 28px' }}>
        {/* Section Header */}
        <div style={{ textAlign: 'center', marginBottom: '60px' }}>
          <span className="section-tagline">Partnerships & Network</span>
          <h2
            className="litho-heading section-main-title"
            style={{ textTransform: 'uppercase' }}
          >
            <span className="litho-primary-title">My</span>{' '}
            <span className="litho-secondary-title" style={{ color: '#0038e3' }}>
              Alliances & Ecosystem
            </span>
          </h2>
          <p style={{ maxWidth: '640px', margin: '14px auto 0', color: '#6b7280', fontSize: '1rem', lineHeight: 1.7 }}>
            Collaborating with industry-leading organizations, advisory firms, and global institutions to deliver world-class GRC solutions.
          </p>
        </div>

        {/* Alliances Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gap: '20px',
          }}
          className="alliances-grid"
        >
          {alliances.map((item) => (
            <a
              key={item.name}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="elementor-animation-wobble-horizontal hvr-float-3px"
              style={{
                backgroundColor: '#ffffff',
                border: '1px solid #e2e8f0',
                borderRadius: '12px',
                padding: '24px 20px',
                textDecoration: 'none',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                transition: 'all 0.25s ease',
              }}
            >
              <div>
                <span
                  style={{
                    backgroundColor: 'rgba(0, 56, 227, 0.08)',
                    color: '#0038e3',
                    fontSize: '0.72rem',
                    fontWeight: 700,
                    textTransform: 'uppercase',
                    letterSpacing: '0.5px',
                    padding: '3px 8px',
                    borderRadius: '4px',
                    display: 'inline-block',
                    marginBottom: '12px',
                  }}
                >
                  {item.tag}
                </span>

                <h3
                  style={{
                    color: '#111827',
                    fontSize: '1.05rem',
                    fontWeight: 800,
                    marginBottom: '6px',
                    lineHeight: 1.3,
                  }}
                >
                  {item.name}
                </h3>

                <p style={{ color: '#64748b', fontSize: '0.82rem', lineHeight: 1.5 }}>
                  {item.desc}
                </p>
              </div>

              <div
                style={{
                  marginTop: '18px',
                  borderTop: '1px solid #f1f5f9',
                  paddingTop: '12px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  color: '#0038e3',
                  fontSize: '0.8rem',
                  fontWeight: 700,
                }}
              >
                <span>Visit Partner</span>
                <span>↗</span>
              </div>
            </a>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 1024px) {
          .alliances-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
        @media (max-width: 580px) {
          .alliances-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
