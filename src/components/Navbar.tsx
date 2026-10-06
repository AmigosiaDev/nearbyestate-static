import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { BRAND_CONFIG } from '../data/websiteData';

// Google Play icon SVG
export const GooglePlayIcon: React.FC<{ className?: string }> = ({ className = "w-4 h-4" }) => (
  <svg viewBox="0 0 512 512" className={className} fill="currentColor">
    <path d="M325.3 234.3L104.6 13l280.8 161.2-60.1 60.1zM47 0C34 6.8 25.3 19.2 25.3 35.3v441.3c0 16.1 8.7 28.5 21.7 35.3l256.6-256L47 0zm425.2 225.6l-58.9-34.1-65.7 64.5 65.7 64.5 60.1-34.1c18-14.3 18-46.5-1.2-60.8zM104.6 499l280.8-161.2-60.1-60.1L104.6 499z" />
  </svg>
);

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', href: '#hero' },
    { label: 'Categories', href: '#categories' },
    { label: 'Why Us', href: '#why-us' },
    { label: 'Features', href: '#features' },
    { label: 'Showcase', href: '#showcase' },
    { label: 'How It Works', href: '#how-it-works' },
    { label: 'FAQ', href: '#faq' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'glass-nav py-3 shadow-sm'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Logo */}
          <a
            href="#hero"
            className="flex items-center gap-2 group focus:outline-none focus:ring-2 focus:ring-brand-700 rounded-lg p-1"
            aria-label="NearbyEstate Home"
          >
            <img
              src="/nearestatelogo.png"
              alt="NearbyEstate"
              className="h-9 md:h-10 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
              onError={(e) => {
                // Fallback if image fails
                const target = e.currentTarget;
                target.style.display = 'none';
                const sibling = target.nextElementSibling as HTMLElement;
                if (sibling) sibling.style.display = 'flex';
              }}
            />
            <div className="hidden items-center gap-2" style={{ display: 'none' }}>
              <div className="w-8 h-8 rounded-lg bg-brand-800 text-white flex items-center justify-center font-bold text-lg">
                e
              </div>
              <span className="text-xl font-bold text-brand-900 tracking-tight">NearbyEstate</span>
            </div>
          </a>

          {/* Desktop Navigation (lg+) */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="px-3 py-1.5 rounded-full text-sm font-medium text-slate-600 hover:text-brand-800 hover:bg-slate-100/80 transition-colors focus:outline-none focus:ring-2 focus:ring-brand-700"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Action CTAs (sm+) */}
          <div className="hidden sm:flex items-center gap-2.5">
            <a
              href={BRAND_CONFIG.webAppUrl}
              target="_blank"
              rel="noopener noreferrer"
              id="navbar_webapp_cta"
              className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-full bg-slate-100 hover:bg-slate-200/90 text-slate-800 text-xs sm:text-sm font-semibold transition-all duration-200 border border-slate-200/60"
            >
              <span>Try Web App</span>
              <ArrowUpRight className="w-3.5 h-3.5 opacity-70" />
            </a>

            <a
              href={BRAND_CONFIG.playStoreUrl}
              target="_blank"
              rel="noopener noreferrer"
              id="navbar_download_cta"
              className="inline-flex items-center gap-2 px-3.5 sm:px-4 py-2 rounded-full bg-brand-800 hover:bg-brand-900 text-white text-xs sm:text-sm font-semibold shadow-sm hover:shadow-md transition-all duration-200 transform hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-700 shrink-0"
            >
              <GooglePlayIcon className="w-3.5 h-3.5 fill-current text-white" />
              <span>Download App</span>
            </a>
          </div>

          {/* Mobile/Tablet Hamburger Toggle (hidden on lg+) */}
          <div className="flex lg:hidden items-center ml-2">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl text-slate-700 hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-brand-700 transition-colors"
              aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile/Tablet Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white/98 backdrop-blur-xl border-b border-slate-200 px-4 sm:px-6 pt-3 pb-6 space-y-3 shadow-xl animate-in slide-in-from-top-2 duration-200 max-h-[calc(100vh-80px)] overflow-y-auto">
          <nav className="flex flex-col space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2.5 rounded-lg text-base font-medium text-slate-700 hover:bg-brand-50 hover:text-brand-800 transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="pt-2 space-y-2">
            <a
              href={BRAND_CONFIG.webAppUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-900 text-sm font-semibold active:scale-95 transition-all"
            >
              <span>Try Web App (No Install)</span>
              <ArrowUpRight className="w-4 h-4 text-slate-500" />
            </a>

            <a
              href={BRAND_CONFIG.playStoreUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-brand-800 hover:bg-brand-900 text-white text-base font-semibold shadow-md active:scale-95 transition-all"
            >
              <GooglePlayIcon className="w-4 h-4 fill-current text-white" />
              <span>Download on Google Play</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
