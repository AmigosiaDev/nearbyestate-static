import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { PropertyCategories } from './components/PropertyCategories';
import { DiscoverySection } from './components/DiscoverySection';
import { WhyNearbyEstate } from './components/WhyNearbyEstate';
import { AppFeatures } from './components/AppFeatures';
import { AppShowcase } from './components/AppShowcase';
import { HowItWorks } from './components/HowItWorks';
import { UseCases } from './components/UseCases';
import { AgencySection } from './components/AgencySection';
import { DownloadCTA } from './components/DownloadCTA';
import { FAQ } from './components/FAQ';
import { Footer } from './components/Footer';
import { LegalModal } from './components/LegalModal';
import { MobileStickyCTA } from './components/MobileStickyCTA';

export const App: React.FC = () => {
  const [legalModalType, setLegalModalType] = useState<'privacy' | 'terms' | null>(null);

  return (
    <div className="min-h-screen flex flex-col bg-[#FAFCFB] text-slate-900 selection:bg-brand-800 selection:text-white">
      {/* Sticky Translucent Header */}
      <Navbar />

      {/* Main Semantic Landmark */}
      <main id="main-content" className="flex-1">
        {/* 1. Hero Section (64-76px H1, 15-20% larger phone, 3 restrained cards, location pulse) */}
        <Hero />

        {/* 2. Property Categories (Swipeable mobile scroll, clean hover elevation) */}
        <PropertyCategories />

        {/* 3. Dedicated Location Discovery Canvas (Property + Location + Distance) */}
        <DiscoverySection />

        {/* 4. Why NearbyEstate (Asymmetric 1 large + 3 supporting layout) */}
        <WhyNearbyEstate />

        {/* 5. App Features Grid */}
        <AppFeatures />

        {/* 6. App Showcase (Live Discovery Animation + 4 interactive screens) */}
        <AppShowcase />

        {/* 7. How It Works (Connected 3-step timeline) */}
        <HowItWorks />

        {/* 8. Buy / Rent / Sell / Lease (Asymmetric editorial layout) */}
        <UseCases />

        {/* 9. For Real Estate Agencies & Brokers (Partner Network) */}
        <AgencySection />

        {/* 10. High-Impact Download CTA Banner */}
        <DownloadCTA />

        {/* 10. Frequently Asked Questions */}
        <FAQ />
      </main>

      {/* 11. Footer */}
      <Footer onOpenLegal={(type) => setLegalModalType(type)} />

      {/* 12. Legal Modal (In-place Privacy Policy & Terms viewer) */}
      <LegalModal
        type={legalModalType}
        onClose={() => setLegalModalType(null)}
      />

      {/* 13. Mobile Sticky Download Bar (Appears after scrolling past hero) */}
      <MobileStickyCTA />
    </div>
  );
};

export default App;
