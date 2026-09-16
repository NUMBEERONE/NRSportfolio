'use client';

import { useState } from 'react';

interface ExpertiseItem {
  id: string;
  title: string;
  subtitle: string;
  category: string;
  description: string;
  highlights: string[];
  gradient: string;
  icon: string;
}

const expertiseData: ExpertiseItem[] = [
  {
    id: 'grc-consulting',
    title: 'GRC & Governance Frameworks',
    subtitle: 'Governance, Risk Alignment & Compliance',
    category: 'Governance & Frameworks',
    description: 'Supporting the design and implementation of governance structures, control mapping, and alignment with NIST Cybersecurity Framework (CSF) and ISO standards.',
    highlights: [
      'Control gap identification & maturity scoring',
      'GRC framework documentation & mapping',
      'Executive reporting & compliance tracking',
      'Assisting in alignment with international standards'
    ],
    gradient: 'linear-gradient(135deg, #0b1120 0%, #1e3a8a 100%)',
    icon: '🛡️',
  },
  {
    id: 'iso-auditing',
    title: 'ISO 27001 & Audit Support',
    subtitle: 'ISMS Implementation & Audit Readiness',
    category: 'ISO Compliance',
    description: 'Assisting organizations with ISO/IEC 27001:2022 gap analysis, Statement of Applicability (SoA) documentation, and internal audit evidence collection.',
    highlights: [
      'ISO 27001:2022 Annex A control mapping',
      'Internal audit evidence compilation & reviews',
      'Non-conformity and remediation tracking',
      'Management Review meeting documentation support'
    ],
    gradient: 'linear-gradient(135deg, #0f172a 0%, #0369a1 100%)',
    icon: '📋',
  },
  {
    id: 'risk-assessment',
    title: 'Risk Assessment & Registers',
    subtitle: 'Threat Identification & Risk Scoring',
    category: 'Risk Management',
    description: 'Building and maintaining structured organizational risk registers, identifying asset vulnerabilities, and creating risk treatment prioritization matrices.',
    highlights: [
      'Asset discovery & risk identification',
      'Qualitative risk scoring & heat mapping',
      'Risk register maintenance & monitoring',
      'Practical remediation recommendation roadmaps'
    ],
    gradient: 'linear-gradient(135deg, #18181b 0%, #3730a3 100%)',
    icon: '🔍',
  },
  {
    id: 'privacy-gdpr',
    title: 'Data Privacy & GDPR Support',
    subtitle: 'Data Flow Mapping & DPIA Assistance',
    category: 'Privacy & Data Protection',
    description: 'Supporting data protection initiatives, conducting data inventory workflows, assisting with Data Protection Impact Assessments (DPIAs), and reviewing privacy notices.',
    highlights: [
      'Data mapping & inventory cataloging',
      'Assisting in Data Protection Impact Assessments (DPIAs)',
      'Data Subject Access Request (DSAR) procedures support',
      'Privacy notice & cookie policy documentation'
    ],
    gradient: 'linear-gradient(135deg, #111827 0%, #1e1b4b 100%)',
    icon: '🔒',
  },
  {
    id: 'policy-formulation',
    title: 'Policy Documentation & SOPs',
    subtitle: 'Information Security Policies & Standards',
    category: 'Policy Development',
    description: 'Drafting clear, actionable security policies, standard operating procedures (SOPs), access control guidelines, and incident response playbooks.',
    highlights: [
      'Drafting InfoSec policies (Access Control, Clean Desk, Acceptable Use)',
      'Developing standard operating procedures (SOPs)',
      'Incident Response Plan (IRP) documentation',
      'Staff security awareness material preparation'
    ],
    gradient: 'linear-gradient(135deg, #0f172a 0%, #1d4ed8 100%)',
    icon: '📝',
  },
  {
    id: 'vendor-continuity',
    title: 'Vendor Risk & Security Hygiene',
    subtitle: 'Third-Party Reviews & BCP Support',
    category: 'Third-Party & Continuity',
    description: 'Assisting in evaluating third-party vendor security questionnaires, monitoring vendor compliance, and supporting Business Continuity Plan (BCP) documentation.',
    highlights: [
      'Third-party vendor risk assessment questionnaires',
      'Vendor security posture evaluations',
      'Business Continuity Plan (ISO 22301) documentation support',
      'Security hygiene checklist reviews'
    ],
    gradient: 'linear-gradient(135deg, #1e1b4b 0%, #0038e3 100%)',
    icon: '⚡',
  },
];

export default function ExpertiseSection() {
  const [selectedExpertise, setSelectedExpertise] = useState<ExpertiseItem | null>(null);

  return (
    <section id="expertise" style={{ padding: '100px 0', backgroundColor: '#f8fafc' }}>
      <div style={{ maxWidth: '1240px', margin: '0 auto', padding: '0 28px' }}>
        {/* Section Header */}
        <div style={{ textAlign: 'center', marginBottom: '60px' }}>
          <span className="section-tagline">Core Competencies</span>
          <h2
            className="litho-heading section-main-title"
            style={{ textTransform: 'uppercase' }}
          >
            <span className="litho-primary-title">Amazing</span>{' '}
            <span className="litho-secondary-title" style={{ color: '#0038e3' }}>
              Expertise
            </span>
          </h2>
          <p style={{ maxWidth: '640px', margin: '16px auto 0', color: '#6b7280', fontSize: '1rem', lineHeight: 1.7 }}>
            Hands-on GRC capabilities, ISO 27001 support, risk assessments, and compliance documentation for growing organizations.
          </p>
        </div>

        {/* 6-Card Interactive Portfolio Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '28px',
          }}
          className="expertise-grid"
        >
          {expertiseData.map((item) => (
            <div
              key={item.id}
              className="hover-box-slide-text hvr-float-3px"
              style={{
                background: item.gradient,
                minHeight: '340px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'flex-end',
                position: 'relative',
                boxShadow: '0 10px 30px rgba(0, 0, 0, 0.08)',
              }}
              onClick={() => setSelectedExpertise(item)}
            >
              {/* Background ambient pattern */}
              <div
                style={{
                  position: 'absolute',
                  inset: 0,
                  opacity: 0.1,
                  backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)',
                  backgroundSize: '20px 20px',
                }}
              />

              {/* Large watermarked icon */}
              <div
                style={{
                  position: 'absolute',
                  top: '24px',
                  left: '24px',
                  fontSize: '2.5rem',
                  filter: 'drop-shadow(0 4px 10px rgba(0,0,0,0.3))',
                }}
              >
                {item.icon}
              </div>

              {/* Top Right Link Icon */}
              <div className="portfolio-icon">
                ➔
              </div>

              {/* Caption Overlay */}
              <div className="portfolio-overlay">
                <span
                  style={{
                    color: '#93c5fd',
                    fontSize: '0.75rem',
                    fontWeight: 700,
                    textTransform: 'uppercase',
                    letterSpacing: '1.5px',
                    marginBottom: '8px',
                    display: 'block',
                  }}
                >
                  {item.category}
                </span>

                <h3
                  className="litho-heading"
                  style={{
                    color: '#ffffff',
                    fontSize: '1.35rem',
                    fontWeight: 800,
                    lineHeight: 1.25,
                    marginBottom: '8px',
                  }}
                >
                  {item.title}
                </h3>

                <p style={{ color: '#cbd5e1', fontSize: '0.85rem', lineHeight: 1.5, marginBottom: '14px' }}>
                  {item.subtitle}
                </p>

                <div
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '6px',
                    color: '#ffffff',
                    fontSize: '0.82rem',
                    fontWeight: 700,
                    textTransform: 'uppercase',
                    letterSpacing: '1px',
                  }}
                >
                  View Details →
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Expertise Detail Modal */}
      {selectedExpertise && (
        <div
          style={{
            position: 'fixed',
            inset: 0,
            backgroundColor: 'rgba(15, 23, 42, 0.75)',
            backdropFilter: 'blur(8px)',
            zIndex: 9999,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '24px',
          }}
          onClick={() => setSelectedExpertise(null)}
        >
          <div
            style={{
              backgroundColor: '#ffffff',
              borderRadius: '16px',
              maxWidth: '650px',
              width: '100%',
              padding: '40px',
              boxShadow: '0 25px 60px rgba(0, 0, 0, 0.3)',
              position: 'relative',
              maxHeight: '90vh',
              overflowY: 'auto',
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setSelectedExpertise(null)}
              style={{
                position: 'absolute',
                top: '20px',
                right: '20px',
                background: '#f1f5f9',
                border: 'none',
                borderRadius: '50%',
                width: '36px',
                height: '36px',
                cursor: 'pointer',
                fontWeight: 700,
                fontSize: '1.1rem',
                color: '#475569',
              }}
            >
              ✕
            </button>

            <span
              style={{
                color: '#0038e3',
                fontSize: '0.8rem',
                fontWeight: 700,
                textTransform: 'uppercase',
                letterSpacing: '1.5px',
                display: 'block',
                marginBottom: '8px',
              }}
            >
              {selectedExpertise.category}
            </span>

            <h3
              className="litho-heading"
              style={{
                fontSize: '1.8rem',
                fontWeight: 800,
                color: '#111827',
                marginBottom: '6px',
                lineHeight: 1.2,
              }}
            >
              {selectedExpertise.title}
            </h3>
            <p style={{ color: '#0038e3', fontWeight: 600, fontSize: '0.95rem', marginBottom: '20px' }}>
              {selectedExpertise.subtitle}
            </p>

            <p style={{ color: '#4b5563', lineHeight: 1.8, fontSize: '1rem', marginBottom: '24px' }}>
              {selectedExpertise.description}
            </p>

            <h4 style={{ fontWeight: 800, color: '#111827', fontSize: '1rem', marginBottom: '14px' }}>
              Core Responsibilities & Deliverables:
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '30px' }}>
              {selectedExpertise.highlights.map((h) => (
                <li key={h} style={{ display: 'flex', alignItems: 'flex-start', gap: '12px', color: '#374151', fontSize: '0.92rem' }}>
                  <span style={{ color: '#0038e3', fontWeight: 900, marginTop: '2px' }}>✓</span>
                  <span>{h}</span>
                </li>
              ))}
            </ul>

            <div style={{ display: 'flex', gap: '14px', flexWrap: 'wrap' }}>
              <button
                type="button"
                onClick={() => {
                  setSelectedExpertise(null);
                  document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                }}
                style={{
                  backgroundColor: '#0038e3',
                  color: '#ffffff',
                  border: 'none',
                  borderRadius: '6px',
                  padding: '12px 28px',
                  fontWeight: 700,
                  fontSize: '0.9rem',
                  letterSpacing: '0.5px',
                  textTransform: 'uppercase',
                  cursor: 'pointer',
                }}
              >
                Inquire or Collaborate →
              </button>
              <a
                href="https://www.linkedin.com/in/manoj-oli-a28840301/"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  backgroundColor: '#f1f5f9',
                  color: '#111827',
                  border: '1px solid #cbd5e1',
                  borderRadius: '6px',
                  padding: '12px 24px',
                  fontWeight: 700,
                  fontSize: '0.9rem',
                  letterSpacing: '0.5px',
                  textTransform: 'uppercase',
                  textDecoration: 'none',
                  display: 'inline-flex',
                  alignItems: 'center',
                }}
              >
                Connect on LinkedIn ↗
              </a>
            </div>
          </div>
        </div>
      )}

      <style>{`
        @media (max-width: 960px) {
          .expertise-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
        @media (max-width: 600px) {
          .expertise-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
