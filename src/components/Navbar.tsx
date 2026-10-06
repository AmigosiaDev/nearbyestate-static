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
    { label: 'Explore', href: '#categories' },
    { label: 'Categories', href: '#categories' },
    { label: 'For Agents', href: '#agencies' },
    { label: 'FAQ', href: '#faq' },
  ];

  return (
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
            onError={(e) => {
              const target = e.currentTarget;
              target.style.display = 'none';
              const sibling = target.nextElementSibling as HTMLElement;
              if (sibling) sibling.style.display = 'flex';
            }}
          />
          <div className="hidden items-center gap-2" style={{ display: 'none' }}>
            <div className="w-7 h-7 rounded-lg bg-[#0F382C] text-white flex items-center justify-center font-bold text-sm">
              e
            </div>
            <span className="text-lg font-extrabold text-[#0F382C] tracking-tight">NearbyEstate</span>
          </div>
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

        {/* Action CTAs */}
        <div className="hidden sm:flex items-center gap-2 sm:gap-2.5">
          {/* Secondary Outline: Launch Web App */}
          <a
            href={BRAND_CONFIG.webAppUrl}
            target="_blank"
            rel="noopener noreferrer"
            id="navbar_webapp_cta"
            className="inline-flex items-center gap-1.5 px-3.5 sm:px-4 py-1.5 sm:py-2 rounded-full bg-white hover:bg-slate-50 text-slate-800 hover:text-[#0F382C] text-xs sm:text-sm font-semibold transition-all duration-200 border border-slate-200 hover:border-emerald-400"
          >
            <span>Launch Web App</span>
            <ArrowUpRight className="w-3.5 h-3.5 opacity-60" />
          </a>

          {/* Primary Solid: Get Mobile App */}
          <a
            href={BRAND_CONFIG.playStoreUrl}
            target="_blank"
            rel="noopener noreferrer"
            id="navbar_download_cta"
            className="inline-flex items-center gap-2 px-4 sm:px-5 py-1.5 sm:py-2 rounded-full bg-[#0F382C] hover:bg-[#072018] text-white text-xs sm:text-sm font-bold shadow-sm hover:shadow-md transition-all duration-200 transform hover:-translate-y-0.5 shrink-0"
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

          <div className="pt-2 space-y-2 border-t border-slate-100">
            <a
              href={BRAND_CONFIG.webAppUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-900 text-xs font-semibold transition-all"
            >
              <span>Launch Web App</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-slate-500" />
            </a>

            <a
              href={BRAND_CONFIG.playStoreUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-[#0F382C] hover:bg-[#072018] text-white text-xs font-bold shadow-md transition-all"
            >
              <GooglePlayIcon className="w-3.5 h-3.5 fill-current text-white" />
              <span>Get Mobile App</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
