import React from 'react';
import { ArrowUpRight, MapPin, Globe } from 'lucide-react';
import { BRAND_CONFIG } from '../data/websiteData';
import { GooglePlayIcon } from './Navbar';

const InstagramIcon: React.FC<{ className?: string }> = ({ className = "w-4 h-4" }) => (
  <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
  </svg>
);

interface FooterProps {
  onOpenLegal: (type: 'privacy' | 'terms') => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenLegal }) => {
  return (
    <footer className="bg-slate-950 text-white pt-12 sm:pt-16 pb-10 sm:pb-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-12 gap-8 sm:gap-10 pb-10 sm:pb-12 border-b border-slate-800">
          {/* Brand & Description */}
          <div className="sm:col-span-2 md:col-span-5 space-y-4 text-left">
            <div className="flex items-center gap-2">
              <img
                src="/nearestatelogo.png"
                alt="NearbyEstate"
                className="h-8 sm:h-9 w-auto object-contain brightness-0 invert"
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                }}
              />
              <span className="text-xl font-bold tracking-tight text-white">NearbyEstate</span>
            </div>

            <p className="text-sm text-slate-400 max-w-sm leading-relaxed">
              Discover properties around you with NearbyEstate. The location-first mobile platform for houses, apartments, land, commercial shops, and offices. Unlimited property ads 100% for free.
            </p>

            <div className="flex items-center gap-2 text-xs text-emerald-400 font-semibold">
              <MapPin className="w-4 h-4 text-brand-accent shrink-0" />
              <span>Available on Android & Web App</span>
            </div>

            {/* Social Icons */}
            <div className="pt-1 flex items-center gap-2.5">
              <a
                href={BRAND_CONFIG.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-xl bg-white/10 hover:bg-white/20 text-slate-300 hover:text-white flex items-center justify-center transition-colors"
                aria-label="NearbyEstate on Instagram (@nearestate_)"
                title="Follow @nearestate_ on Instagram"
              >
                <InstagramIcon className="w-4 h-4" />
              </a>
              <a
                href={BRAND_CONFIG.webAppUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-xl bg-white/10 hover:bg-white/20 text-slate-300 hover:text-white flex items-center justify-center transition-colors"
                aria-label="NearbyEstate Web App"
                title="Open Web App (nearestate.space)"
              >
                <Globe className="w-4 h-4" />
              </a>
            </div>

            {/* Backed By Row */}
            <div className="pt-2 space-y-2">
              <div className="text-[11px] font-semibold text-slate-500 uppercase tracking-wider">
                Recognized & Supported By
              </div>
              <div className="flex flex-wrap items-center gap-3 sm:gap-4">
                <div className="bg-white/10 backdrop-blur-xs p-1.5 rounded-lg">
                  <img
                    src="/ksum-logo.png"
                    alt="Kerala Startup Mission"
                    className="h-5 sm:h-6 w-auto object-contain brightness-0 invert opacity-80 hover:opacity-100 transition-opacity"
                  />
                </div>
                <div className="bg-white/10 backdrop-blur-xs p-1.5 rounded-lg">
                  <img
                    src="/startup-india.png"
                    alt="Startup India"
                    className="h-4 sm:h-5 w-auto object-contain brightness-0 invert opacity-80 hover:opacity-100 transition-opacity"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Quick Navigation Links */}
          <div className="md:col-span-3 space-y-3 text-left">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">Navigation</h4>
            <ul className="space-y-2 text-sm text-slate-300">
              <li>
                <a href="#hero" className="hover:text-emerald-400 transition-colors">Home</a>
              </li>
              <li>
                <a href="#categories" className="hover:text-emerald-400 transition-colors">Property Categories</a>
              </li>
              <li>
                <a href="#features" className="hover:text-emerald-400 transition-colors">Features</a>
              </li>
              <li>
                <a href="#showcase" className="hover:text-emerald-400 transition-colors">Mobile App Showcase</a>
              </li>
              <li>
                <a href="#how-it-works" className="hover:text-emerald-400 transition-colors">How It Works</a>
              </li>
              <li>
                <a href="#agencies" className="hover:text-emerald-400 transition-colors">For Agencies</a>
              </li>
              <li>
                <a href="#faq" className="hover:text-emerald-400 transition-colors">FAQ</a>
              </li>
              <li>
                <a
                  href={BRAND_CONFIG.webAppUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-emerald-400 hover:text-emerald-300 font-semibold flex items-center gap-1 transition-colors pt-1"
                >
                  <span>Launch Web App</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </li>
            </ul>
          </div>

          {/* Download & Legal */}
          <div className="md:col-span-4 space-y-4 text-left">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">Get NearbyEstate</h4>
            <p className="text-xs text-slate-400 leading-relaxed">
              Install the Android app from Google Play or explore directly in your mobile browser with zero installation.
            </p>

            <div className="space-y-2.5">
              <a
                href={BRAND_CONFIG.playStoreUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-5 py-3 rounded-2xl bg-white/10 hover:bg-white/20 border border-white/20 text-white font-semibold text-sm transition-all group w-full"
              >
                <GooglePlayIcon className="w-5 h-5 fill-current text-emerald-400" />
                <div className="text-left leading-tight">
                  <div className="text-[10px] uppercase text-slate-400">Download for Android</div>
                  <div className="text-sm font-bold text-white">Google Play Store</div>
                </div>
                <ArrowUpRight className="w-4 h-4 ml-auto text-slate-400 group-hover:text-white transition-colors" />
              </a>

              <a
                href={BRAND_CONFIG.webAppUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-5 py-2.5 rounded-2xl bg-emerald-950/60 hover:bg-emerald-900/80 border border-emerald-500/30 text-white font-semibold text-xs transition-all group w-full"
              >
                <Globe className="w-4 h-4 text-emerald-400" />
                <div className="text-left leading-tight">
                  <div className="text-[9px] uppercase text-emerald-300 font-bold">Try Without App</div>
                  <div className="text-xs font-bold text-white">Open Web Version (nearestate.space)</div>
                </div>
                <ArrowUpRight className="w-3.5 h-3.5 ml-auto text-slate-400 group-hover:text-white transition-colors" />
              </a>
            </div>

            <div className="pt-2 flex flex-wrap gap-4 text-xs text-slate-400">
              <button
                type="button"
                onClick={() => onOpenLegal('privacy')}
                className="hover:text-emerald-400 transition-colors focus:outline-none focus:underline"
              >
                Privacy Policy
              </button>
              <span>•</span>
              <button
                type="button"
                onClick={() => onOpenLegal('terms')}
                className="hover:text-emerald-400 transition-colors focus:outline-none focus:underline"
              >
                Terms & Conditions
              </button>
            </div>
          </div>
        </div>

        {/* Copyright & Disclaimer */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div>
            © {BRAND_CONFIG.copyrightYear} NearbyEstate. All rights reserved.
          </div>
          <div className="text-center sm:text-right">
            <span>Official marketing landing page for NearbyEstate.</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
