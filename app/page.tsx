'use client';

import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import SkillsSection from '@/components/SkillsSection';
import ProcessSection from '@/components/ProcessSection';
import ExperienceSection from '@/components/ExperienceSection';
import CertificationsSection from '@/components/CertificationsSection';
import ProjectsSection from '@/components/ProjectsSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main>
      <Navbar />
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ProcessSection />
      <ExperienceSection />
      <CertificationsSection />
      <ProjectsSection />
      <ContactSection />
      <Footer />
    </main>
  );
}
