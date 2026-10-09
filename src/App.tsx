import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { PropertyCategories } from './components/PropertyCategories';
// import { DiscoverySection } from './components/DiscoverySection';
import { WhyNearbyEstate } from './components/WhyNearbyEstate';
// import { AppFeatures } from './components/AppFeatures';
// import { AppShowcase } from './components/AppShowcase';
// import { HowItWorks } from './components/HowItWorks';
// import { UseCases } from './components/UseCases';
// import { AgencySection } from './components/AgencySection';
import { AgentProSection } from './components/AgentProSection';
import { DownloadCTA } from './components/DownloadCTA';
import { FAQ } from './components/FAQ';
import { Footer } from './components/Footer';
import { LegalModal } from './components/LegalModal';
import { MobileStickyCTA } from './components/MobileStickyCTA';

export const App: React.FC = () => {
  const [legalModalType, setLegalModalType] = useState<'privacy' | 'terms' | null>(null);

  return (
    <div className="min-h-screen flex flex-col bg-[#071F17] text-white selection:bg-[#00D084] selection:text-[#051A12]">
      {/* Sticky Translucent Header */}
      <Navbar />

      {/* Main Semantic Landmark */}
      <main id="main-content" className="flex-1">
        {/* 1. Hero Section */}
        <Hero />

        {/* 2. Property Categories */}
        <PropertyCategories />

        {/* 3. Core Value Pillars */}
        <WhyNearbyEstate />

        {/* 4. For Agencies & Brokers (Agent Pro Subscription) */}
        <AgentProSection />

        {/* 5. Download CTA Banner */}
        <DownloadCTA />

        {/* 6. Frequently Asked Questions */}
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
