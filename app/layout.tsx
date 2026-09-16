import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Manoj Oli | GRC Intern — Governance, Risk & Compliance",
  description: "Portfolio of Manoj Oli – GRC Intern at Nepal Realistic Solutions (NRS). Specializing in Governance, Risk & Compliance, ISO 27001 ISMS support, Risk Assessment, and Information Security.",
  keywords: [
    "Manoj Oli",
    "Manoj Oli Portfolio",
    "GRC Intern",
    "GRC Intern Nepal",
    "Nepal Realistic Solutions",
    "Governance Risk and Compliance",
    "ISO 27001",
    "Cybersecurity Kathmandu",
    "Risk Assessment",
    "manojoli.vercel.app"
  ],
  metadataBase: new URL("https://manojoli.vercel.app"),
  alternates: {
    canonical: "https://manojoli.vercel.app",
  },
  openGraph: {
    title: "Manoj Oli | GRC Intern — Governance, Risk & Compliance",
    description: "Portfolio of Manoj Oli – GRC Intern at Nepal Realistic Solutions (NRS). Supporting enterprise risk management, ISO 27001 compliance, and security policies.",
    url: "https://manojoli.vercel.app",
    siteName: "Manoj Oli Portfolio",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Manoj Oli | GRC Intern — Governance, Risk & Compliance",
    description: "Portfolio of Manoj Oli – GRC Intern at Nepal Realistic Solutions (NRS). Specializing in GRC, ISO 27001, and Risk Assessment.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": "https://manojoli.vercel.app/#website",
        "url": "https://manojoli.vercel.app/",
        "name": "Manoj Oli - GRC Intern",
        "description": "GRC Intern at Nepal Realistic Solutions (NRS), Kathmandu, Nepal",
        "publisher": {
          "@id": "https://manojoli.vercel.app/#person"
        }
      },
      {
        "@type": "Person",
        "@id": "https://manojoli.vercel.app/#person",
        "name": "Manoj Oli",
        "jobTitle": "GRC Intern",
        "url": "https://manojoli.vercel.app/",
        "sameAs": [
          "https://www.linkedin.com/in/manoj-oli-a28840301/",
          "https://github.com/manoj-oli"
        ],
        "worksFor": {
          "@type": "Organization",
          "name": "Nepal Realistic Solutions (NRS)"
        },
        "knowsAbout": [
          "Governance, Risk & Compliance (GRC)",
          "ISO/IEC 27001 Information Security",
          "Risk Assessment & Registers",
          "GDPR & Data Privacy",
          "NIST Cybersecurity Framework"
        ]
      }
    ]
  };

  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700;800;900&family=Inter:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}
