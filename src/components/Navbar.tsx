import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowRight } from 'lucide-react';
import { triggerSmartDownload, getPlayStoreTrackedUrl } from '../utils/appLinks';

// Google Play icon SVG
export const GooglePlayIcon: React.FC<{ className?: string }> = ({ className = "w-4 h-4" }) => (
  <svg viewBox="0 0 512 512" className={className} fill="currentColor">
    <path d="M325.3 234.3L104.6 13l280.8 161.2-60.1 60.1zM47 0C34 6.8 25.3 19.2 25.3 35.3v441.3c0 16.1 8.7 28.5 21.7 35.3l256.6-256L47 0zm425.2 225.6l-58.9-34.1-65.7 64.5 65.7 64.5 60.1-34.1c18-14.3 18-46.5-1.2-60.8zM104.6 499l280.8-161.2-60.1-60.1L104.6 499z" />
  </svg>
);

interface NavbarProps {
  onOpenIOSModal?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenIOSModal }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  // Active navbar style: 'solidroad' (can be set to 'classic' if needed)
  const navbarStyle: 'solidroad' | 'classic' = 'solidroad';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Categories', href: '#categories' },
    { label: 'Why NearbyEstate', href: '#why-us' },
    { label: 'For Agents', href: '#agent-pro' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <>

      {navbarStyle === 'solidroad' ? (
        /* =========================================================================
           SOLIDROAD-INSPIRED TOP-DOCKED HANGING NOTCH NAVBAR
           Features:
           1. Top-docked island with smooth rounded bottom corners
           2. Inverted fillet ears (concave curves) connecting to the top ceiling
           3. 3-way layout: Left Links, Centered Logo, Right Action Group
           4. Punchy SaaS CTA button matching Solidroad green
           ========================================================================= */
        <header className="fixed top-0 left-0 right-0 z-50 pointer-events-none flex justify-center">
          <div className="relative w-full max-w-5xl px-3 sm:px-6 pointer-events-auto">
            {/* Hanging Island Shell with drop-shadow */}
            <div className="relative [filter:drop-shadow(0_12px_24px_rgba(0,0,0,0.09))]">
              
              {/* Inverted Fillet Ear - Left (Desktop / Tablet) */}
              <svg
                className="hidden sm:block absolute top-0 -left-[24px] w-[24px] h-[24px] text-white fill-current pointer-events-none"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path d="M0,0 H24 V24 C24,10.745 13.255,0 0,0 Z" />
              </svg>

              {/* Inverted Fillet Ear - Right (Desktop / Tablet) */}
              <svg
                className="hidden sm:block absolute top-0 -right-[24px] w-[24px] h-[24px] text-white fill-current pointer-events-none"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path d="M24,0 H0 V24 C0,10.745 10.745,0 24,0 Z" />
              </svg>

              {/* Main White Tab Container */}
              <div
                className={`w-full bg-white transition-all duration-300 rounded-b-2xl sm:rounded-b-[28px] border-b border-x border-slate-100/90 px-4 sm:px-8 py-2.5 sm:py-3 flex items-center justify-between ${
                  isScrolled ? 'bg-white/95 backdrop-blur-xl border-slate-200' : 'bg-white'
                }`}
              >
                {/* 1. LEFT COLUMN: Nav Links (Desktop) */}
                <nav className="hidden md:flex flex-1 items-center justify-start gap-5 lg:gap-7">
                  {navLinks.slice(0, 3).map((link) => (
                    <a
                      key={link.label}
                      href={link.href}
                      className="group inline-flex items-center gap-1 text-[13px] lg:text-sm font-semibold text-slate-700 hover:text-[#0F382C] transition-colors"
                    >
                      <span>{link.label}</span>
                    </a>
                  ))}
                </nav>

                {/* Mobile Left Logo Fallback */}
                <div className="flex md:hidden items-center">
                  <a
                    href="#hero"
                    className="flex items-center gap-2 group focus:outline-none"
                    aria-label="NearbyEstate Home"
                  >
                    <img
                      src="/nearestatelogo.png"
                      alt="NearbyEstate"
                      className="h-7 w-auto object-contain"
                    />
                  </a>
                </div>

                {/* 2. CENTER COLUMN: Centered Logo (Desktop) */}
                <div className="hidden md:flex items-center justify-center px-4 shrink-0">
                  <a
                    href="#hero"
                    className="flex items-center gap-2.5 group focus:outline-none"
                    aria-label="NearbyEstate Home"
                  >
                    <img
                      src="/nearestatelogo.png"
                      alt="NearbyEstate"
                      className="h-7 lg:h-8 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
                    />
                  </a>
                </div>

                {/* 3. RIGHT COLUMN: Contact + Solidroad-style Green CTA */}
                <div className="hidden md:flex flex-1 items-center justify-end gap-5">
                  <a
                    href="#contact"
                    className="text-[13px] lg:text-sm font-semibold text-slate-700 hover:text-[#0F382C] transition-colors"
                  >
                    Contact
                  </a>

                  {/* Solidroad-inspired Vibrant Mint Pill Button */}
                  <a
                    href={getPlayStoreTrackedUrl('navbar')}
                    onClick={(e) => triggerSmartDownload(e, 'navbar', onOpenIOSModal)}
                    target="_blank"
                    rel="noopener noreferrer"
                    id="navbar_download_cta"
                    className="inline-flex items-center gap-2 px-4 lg:px-5 py-2 rounded-full bg-[#00D084] hover:bg-[#00ba76] text-[#072218] text-xs sm:text-sm font-extrabold shadow-sm hover:shadow-md transition-all duration-200 transform hover:-translate-y-0.5 shrink-0"
                  >
                    <span>Get Mobile App</span>
                    <ArrowRight className="w-3.5 h-3.5 stroke-[2.5]" />
                  </a>
                </div>

                {/* Mobile Right Controls: Compact CTA + Hamburger */}
                <div className="flex md:hidden items-center gap-2">
                  <a
                    href={getPlayStoreTrackedUrl('navbar_mobile_header')}
                    onClick={(e) => triggerSmartDownload(e, 'navbar_mobile_header', onOpenIOSModal)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#00D084] text-[#072218] text-xs font-bold shrink-0"
                  >
                    <span>Get App</span>
                    <ArrowRight className="w-3 h-3 stroke-[2.5]" />
                  </a>

                  <button
                    type="button"
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    className="p-1.5 rounded-full text-slate-700 hover:bg-slate-100 transition-colors"
                    aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
                    aria-expanded={mobileMenuOpen}
                  >
                    {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
                  </button>
                </div>
              </div>
            </div>

            {/* Mobile Dropdown Menu */}
            {mobileMenuOpen && (
              <div className="md:hidden max-w-sm mx-auto mt-2 bg-white/95 backdrop-blur-2xl rounded-3xl border border-slate-200 p-4 space-y-3 shadow-2xl pointer-events-auto animate-in slide-in-from-top-2">
                <nav className="flex flex-col space-y-1 text-left">
                  {navLinks.map((link) => (
                    <a
                      key={link.label}
                      href={link.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className="px-3 py-2 rounded-xl text-sm font-semibold text-slate-700 hover:bg-emerald-50 hover:text-[#0F382C] transition-colors"
                    >
                      {link.label}
                    </a>
                  ))}
                </nav>

                <div className="pt-2 border-t border-slate-100">
                  <a
                    href={getPlayStoreTrackedUrl('navbar_mobile')}
                    onClick={(e) => {
                      setMobileMenuOpen(false);
                      triggerSmartDownload(e, 'navbar_mobile', onOpenIOSModal);
                    }}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-[#0F382C] hover:bg-[#072018] text-white text-xs font-bold shadow-md transition-all min-h-[44px]"
                  >
                    <GooglePlayIcon className="w-3.5 h-3.5 fill-current text-white" />
                    <span>Get Mobile App</span>
                  </a>
                </div>
              </div>
            )}
          </div>
        </header>
      ) : (
        /* =========================================================================
           CLASSIC FLOATING PILL NAVBAR (Previous implementation)
           ========================================================================= */
        <header className="fixed top-0 left-0 right-0 z-50 px-3 sm:px-6 py-2 sm:py-3 pointer-events-none">
          <div
            className={`max-w-5xl mx-auto rounded-full px-4 sm:px-6 py-2 sm:py-2.5 transition-all duration-300 pointer-events-auto flex items-center justify-between ${
              isScrolled
                ? 'bg-white/90 backdrop-blur-xl border border-slate-200/80 shadow-lg shadow-slate-950/5'
                : 'bg-white/80 backdrop-blur-lg border border-white/70 shadow-md shadow-slate-900/5'
            }`}
          >
            {/* Brand Logo */}
            <a
              href="#hero"
              className="flex items-center gap-2 group focus:outline-none rounded-full"
              aria-label="NearbyEstate Home"
            >
              <img
                src="/nearestatelogo.png"
                alt="NearbyEstate"
                className="h-7 sm:h-8 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
              />
            </a>

            {/* Desktop Navigation Links */}
            <nav className="hidden md:flex items-center gap-1 lg:gap-2">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="px-3.5 py-1.5 rounded-full text-xs sm:text-sm font-medium text-slate-600 hover:text-[#0F382C] hover:bg-emerald-50/80 transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </nav>

            {/* Action CTA */}
            <div className="hidden sm:flex items-center">
              <a
                href={getPlayStoreTrackedUrl('navbar')}
                onClick={(e) => triggerSmartDownload(e, 'navbar', onOpenIOSModal)}
                target="_blank"
                rel="noopener noreferrer"
                id="navbar_download_cta_classic"
                className="inline-flex items-center gap-2 px-4 sm:px-5 py-1.5 sm:py-2 rounded-full bg-[#0F382C] hover:bg-[#072018] text-white text-xs sm:text-sm font-bold shadow-sm hover:shadow-md transition-all duration-200 transform hover:-translate-y-0.5 shrink-0 min-h-[40px]"
              >
                <GooglePlayIcon className="w-3.5 h-3.5 fill-current text-white" />
                <span>Get Mobile App</span>
              </a>
            </div>

            {/* Mobile/Tablet Hamburger Toggle */}
            <div className="flex md:hidden items-center ml-2">
              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-1.5 rounded-full text-slate-700 hover:bg-slate-100 transition-colors"
                aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
                aria-expanded={mobileMenuOpen}
              >
                {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>

          {/* Mobile/Tablet Dropdown */}
          {mobileMenuOpen && (
            <div className="md:hidden max-w-sm mx-auto mt-2 bg-white/95 backdrop-blur-2xl rounded-3xl border border-slate-200 p-4 space-y-3 shadow-xl pointer-events-auto animate-in slide-in-from-top-2">
              <nav className="flex flex-col space-y-1 text-left">
                {navLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="px-3 py-2 rounded-xl text-sm font-semibold text-slate-700 hover:bg-emerald-50 hover:text-[#0F382C] transition-colors"
                  >
                    {link.label}
                  </a>
                ))}
              </nav>

              <div className="pt-2 border-t border-slate-100">
                <a
                  href={getPlayStoreTrackedUrl('navbar_mobile')}
                  onClick={(e) => {
                    setMobileMenuOpen(false);
                    triggerSmartDownload(e, 'navbar_mobile', onOpenIOSModal);
                  }}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-[#0F382C] hover:bg-[#072018] text-white text-xs font-bold shadow-md transition-all min-h-[44px]"
                >
                  <GooglePlayIcon className="w-3.5 h-3.5 fill-current text-white" />
                  <span>Get Mobile App</span>
                </a>
              </div>
            </div>
          )}
        </header>
      )}
    </>
  );
};

