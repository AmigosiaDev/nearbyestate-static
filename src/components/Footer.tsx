import React from 'react';
import { ArrowUpRight, MapPin, Globe } from 'lucide-react';
import { BRAND_CONFIG } from '../data/websiteData';
import { GooglePlayIcon } from './Navbar';

interface FooterProps {
  onOpenLegal: (type: 'privacy' | 'terms') => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenLegal }) => {
  return (
    <footer className="bg-[#04120D] text-white pt-12 sm:pt-16 pb-10 sm:pb-12 border-t border-emerald-500/20 relative overflow-hidden">
      {/* Subtle top ambient glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-32 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-12 gap-8 sm:gap-10 pb-10 sm:pb-12 border-b border-emerald-500/15">
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
                <a href="#why-us" className="hover:text-emerald-400 transition-colors">Why NearbyEstate</a>
              </li>
              <li>
                <a href="#faq" className="hover:text-emerald-400 transition-colors">FAQ</a>
              </li>
              <li>
                <a
                  href="https://nearbyestate.in/home"
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
                href="https://nearbyestate.in/home"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-5 py-2.5 rounded-2xl bg-emerald-950/60 hover:bg-emerald-900/80 border border-emerald-500/30 text-white font-semibold text-xs transition-all group w-full"
              >
                <Globe className="w-4 h-4 text-emerald-400" />
                <div className="text-left leading-tight">
                  <div className="text-[9px] uppercase text-emerald-300 font-bold">Try Without App</div>
                  <div className="text-xs font-bold text-white">Open Web Version (nearbyestate.in)</div>
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
