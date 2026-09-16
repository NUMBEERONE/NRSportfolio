'use client';

import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import ExpertiseSection from '@/components/ExpertiseSection';
import IndustryVerticalsSection from '@/components/IndustryVerticalsSection';
import ProudStoriesSection from '@/components/ProudStoriesSection';
import AchievementsSection from '@/components/AchievementsSection';
import AffiliationsSection from '@/components/AffiliationsSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main>
      <Navbar />
      <HeroSection />
      <AboutSection />
      <ExpertiseSection />
      <IndustryVerticalsSection />
      <ProudStoriesSection />
      <AchievementsSection />
      <AffiliationsSection />
      <ContactSection />
      <Footer />
    </main>
  );
}
