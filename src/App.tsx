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
import { AgentWorkflowSection } from './components/AgentWorkflowSection';
import { AgentProSection } from './components/AgentProSection';
// import { FAQ } from './components/FAQ';
import { ContactSection } from './components/ContactSection';
// import { DownloadCTA } from './components/DownloadCTA';
import { Footer } from './components/Footer';
import { LegalModal } from './components/LegalModal';
import { MobileStickyCTA } from './components/MobileStickyCTA';
import { IOSAppModal } from './components/IOSAppModal';

export const App: React.FC = () => {
  const [legalModalType, setLegalModalType] = useState<'privacy' | 'terms' | null>(null);
  const [iosModalOpen, setIosModalOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col bg-[#071F17] text-white selection:bg-[#00D084] selection:text-[#051A12]">
      {/* Sticky Translucent Header */}
      <Navbar onOpenIOSModal={() => setIosModalOpen(true)} />

      {/* Main Semantic Landmark */}
      <main id="main-content" className="flex-1">
        {/* 1. Hero Section */}
        <Hero onOpenIOSModal={() => setIosModalOpen(true)} />

        {/* 2. Property Categories */}
        <PropertyCategories />

        {/* 3. Core Value Pillars */}
        <WhyNearbyEstate />

        {/* 4. Agent Workflow & Platform Process */}
        <AgentWorkflowSection />

        {/* 5. Unified Verified Agents & App Discovery Section */}
        <AgentProSection onOpenIOSModal={() => setIosModalOpen(true)} />

        {/* 6. Frequently Asked Questions (Commented out for future use) */}
        {/* <FAQ /> */}

        {/* 6. Contact & Support Enquiry Section */}
        <ContactSection />

        {/* 7. Bottom Homepage App Download CTA (Commented out) */}
        {/* <DownloadCTA onOpenIOSModal={() => setIosModalOpen(true)} /> */}
      </main>

      {/* 11. Footer */}
      <Footer onOpenLegal={(type) => setLegalModalType(type)} />

      {/* 12. Legal Modal (In-place Privacy Policy & Terms viewer) */}
      <LegalModal
        type={legalModalType}
        onClose={() => setLegalModalType(null)}
      />

      {/* 13. iOS Native & PWA Experience Guide Modal */}
      <IOSAppModal
        isOpen={iosModalOpen}
        onClose={() => setIosModalOpen(false)}
      />

      {/* 14. Mobile Sticky Download Bar (Appears after scrolling past hero) */}
      <MobileStickyCTA onOpenIOSModal={() => setIosModalOpen(true)} />
    </div>
  );
};

export default App;

