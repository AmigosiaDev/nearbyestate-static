import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Navigation, Compass, ArrowRight, Smartphone, ShieldCheck, Phone, Sparkles, ExternalLink } from 'lucide-react';
import { BRAND_CONFIG } from '../data/websiteData';
import { GooglePlayIcon } from './Navbar';

export const Hero: React.FC = () => {
  return (
    <section
      id="hero"
      className="relative min-h-[92vh] pt-24 pb-16 sm:pt-28 sm:pb-20 lg:pt-36 lg:pb-28 overflow-hidden flex flex-col justify-start lg:justify-center bg-[#FAFCFB]"
    >
      {/* Background Ambience: Low-contrast coordinate & dotted matrix grid with soft ambient glows */}
      <div className="absolute inset-0 coordinate-grid opacity-50 pointer-events-none" />
      <div className="absolute inset-0 map-dotted-grid opacity-45 pointer-events-none" />

      {/* Soft Ambient Radial Glows */}
      <div className="absolute top-1/3 left-1/4 -translate-y-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-emerald-100/40 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[600px] h-[600px] radial-green-glow pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          {/* ================= LEFT COLUMN: HERO CONTENT ================= */}
          <div className="lg:col-span-7 text-left space-y-5 sm:space-y-7">
            {/* Top Badge: 100% Free & Unlimited Ads USP Pill */}
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: 'easeOut' }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50/90 border border-emerald-300/80 text-[#123B2A] text-xs sm:text-sm font-bold shadow-xs shadow-emerald-500/10 backdrop-blur-xs"
            >
              <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
              <span>100% FREE • Unlimited Ads • Zero Brokerage</span>
            </motion.div>

            {/* Main Headline: Bold, high-contrast H1 with non-clipping accent underline */}
            <motion.h1
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-[4.25rem] font-extrabold text-slate-900 tracking-tight leading-[1.18] sm:leading-[1.12] pb-2"
            >
              Find Properties{' '}
              <span className="relative inline-block text-[#123B2A]">
                <span className="relative z-10 underline decoration-emerald-400 decoration-[5px] sm:decoration-[6px] underline-offset-[10px] sm:underline-offset-[14px]">
                  Near You.
                </span>
              </span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2, ease: 'easeOut' }}
              className="text-base sm:text-lg lg:text-xl text-slate-600 max-w-xl leading-relaxed font-normal"
            >
              Explore verified homes, land, shops, and offices with exact location proximity. Post unlimited property ads for free with zero commission.
            </motion.p>

            {/* CTAs: Side-by-side buttons */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3, ease: 'easeOut' }}
              className="pt-1 flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-3.5"
            >
              {/* Primary Button: Dark emerald green (#123B2A) */}
              <a
                href={BRAND_CONFIG.playStoreUrl}
                target="_blank"
                rel="noopener noreferrer"
                id="hero_download_click"
                className="inline-flex items-center justify-center gap-2.5 px-6 sm:px-7 py-3.5 sm:py-4 rounded-2xl bg-[#123B2A] hover:bg-[#0b241a] text-white font-bold text-sm sm:text-base shadow-lg shadow-[#123B2A]/20 hover:shadow-xl hover:shadow-[#123B2A]/30 transition-all duration-200 transform hover:-translate-y-0.5 focus:outline-none focus:ring-4 focus:ring-[#123B2A]/30 group"
              >
                <GooglePlayIcon className="w-5 h-5 fill-current text-white transition-transform group-hover:scale-110" />
                <span>Download App</span>
              </a>

              {/* Secondary Button: Try Web App in Browser (No Install Needed) */}
              <a
                href={BRAND_CONFIG.webAppUrl}
                target="_blank"
                rel="noopener noreferrer"
                id="hero_webapp_click"
                className="inline-flex items-center justify-center gap-2 px-5 sm:px-6 py-3.5 sm:py-4 rounded-2xl bg-white hover:bg-emerald-50/50 text-slate-800 hover:text-[#123B2A] font-semibold text-sm sm:text-base border border-slate-200 hover:border-emerald-300 shadow-xs hover:shadow-sm transition-all duration-200 group"
              >
                <span>Try Web App</span>
                <span className="text-[11px] px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800 font-bold">
                  No Install
                </span>
                <ExternalLink className="w-4 h-4 text-slate-400 group-hover:text-[#123B2A] transition-colors" />
              </a>

              {/* Subtle Tertiary Link */}
              <a
                href="#categories"
                id="hero_browse_click"
                className="inline-flex items-center justify-center gap-1.5 px-3 py-2 text-slate-500 hover:text-[#123B2A] font-semibold text-xs sm:text-sm transition-colors"
              >
                <span>Browse Types</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </motion.div>

            {/* Feature Checklist: Horizontal row below CTAs */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="pt-6 border-t border-slate-200/70 flex flex-wrap items-center gap-y-3 gap-x-4 sm:gap-x-6 text-xs sm:text-sm font-medium text-slate-700"
            >
              <div className="flex items-center gap-2">
                <div className="w-5 h-5 rounded-full bg-emerald-100 flex items-center justify-center text-[#123B2A] shrink-0">
                  <Sparkles className="w-3 h-3 text-[#123B2A]" />
                </div>
                <span className="font-semibold text-slate-800">Unlimited Free Ads</span>
              </div>
              <span className="text-slate-300 hidden md:inline">•</span>
              <div className="flex items-center gap-2">
                <div className="w-5 h-5 rounded-full bg-emerald-100 flex items-center justify-center text-[#123B2A] shrink-0">
                  <MapPin className="w-3 h-3 text-[#123B2A]" />
                </div>
                <span className="font-semibold text-slate-800">Google Plus Code Precision</span>
              </div>
              <span className="text-slate-300 hidden md:inline">•</span>
              <div className="flex items-center gap-2">
                <div className="w-5 h-5 rounded-full bg-emerald-100 flex items-center justify-center text-[#123B2A] shrink-0">
                  <ShieldCheck className="w-3 h-3 text-[#123B2A]" />
                </div>
                <span className="font-semibold text-slate-800">Zero Brokerage</span>
              </div>
            </motion.div>

            {/* Accreditations: Recognised & Supported By KSUM & Startup India */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.5 }}
              className="pt-1 flex flex-wrap items-center gap-3 sm:gap-5"
            >
              <span className="text-[10px] sm:text-[11px] font-semibold text-slate-400 uppercase tracking-wider">
                Recognised & Supported By
              </span>
              <div className="flex items-center gap-4 opacity-80 hover:opacity-100 transition-opacity">
                <img
                  src="/ksum-logo.png"
                  alt="Kerala Startup Mission"
                  className="h-5 sm:h-6 w-auto object-contain grayscale hover:grayscale-0 transition-all"
                />
                <img
                  src="/startup-india.png"
                  alt="Startup India"
                  className="h-4 sm:h-5 w-auto object-contain grayscale hover:grayscale-0 transition-all"
                />
              </div>
            </motion.div>
          </div>

          {/* ================= RIGHT COLUMN: 3D SMARTPHONE MOCKUP ================= */}
          <div className="lg:col-span-5 relative flex justify-center items-center py-6 sm:py-8 [perspective:1200px]">
            {/* Ambient Backlight Glow */}
            <div className="absolute w-72 xs:w-80 sm:w-96 h-72 xs:h-80 sm:h-96 rounded-full bg-emerald-500/10 blur-3xl pointer-events-none -z-10" />

            {/* Modern 3D Tilted Smartphone Mockup */}
            <motion.div
              initial={{ opacity: 0, y: 30, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
              className="relative z-20 w-full max-w-[285px] xs:max-w-[325px] sm:max-w-[360px] lg:max-w-[370px] h-[585px] xs:h-[650px] sm:h-[715px] bg-slate-900 rounded-[44px] xs:rounded-[50px] p-2.5 xs:p-3.5 shadow-phone border-[4px] xs:border-[5px] border-slate-800 transform-gpu lg:[transform:rotateY(-6deg)_rotateX(4deg)] lg:hover:[transform:rotateY(0deg)_rotateX(0deg)] transition-transform duration-700 ease-out mx-auto group/phone"
            >
              {/* Phone Dynamic Island */}
              <div className="absolute top-4 xs:top-5 left-1/2 -translate-x-1/2 w-24 xs:w-28 h-4 xs:h-5 bg-black rounded-full z-30 flex items-center justify-end px-3">
                <div className="w-2 xs:w-2.5 h-2 xs:h-2.5 rounded-full bg-slate-800 border border-slate-700" />
              </div>

              {/* Internal Screen Content */}
              <div className="w-full h-full bg-slate-50 rounded-[36px] xs:rounded-[42px] overflow-hidden flex flex-col text-slate-800 relative select-none">
                {/* Status Bar */}
                <div className="pt-2.5 xs:pt-3 px-5 xs:px-6 pb-1 flex justify-between items-center text-[10px] xs:text-[11px] font-semibold text-slate-500 z-10 bg-white">
                  <span>9:41</span>
                  <div className="flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                    <span className="text-[10px]">5G</span>
                  </div>
                </div>

                {/* Mobile App Search & Location Bar */}
                <div className="px-3.5 xs:px-4 pt-1.5 xs:pt-2 pb-2.5 xs:pb-3 bg-white border-b border-slate-100 shadow-xs z-10">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="w-6 xs:w-7 h-6 xs:h-7 rounded-lg bg-[#123B2A] flex items-center justify-center text-white font-bold text-xs shadow-xs">
                        e
                      </div>
                      <div className="text-left">
                        <div className="text-[9px] xs:text-[10px] uppercase font-bold text-slate-400 leading-none">Discover Nearby</div>
                        <div className="text-[11px] xs:text-xs font-bold text-slate-900 flex items-center gap-1 pt-0.5">
                          <MapPin className="w-3 h-3 text-emerald-600" />
                          <span>Within 5 km radius</span>
                        </div>
                      </div>
                    </div>
                    <div className="w-6 xs:w-7 h-6 xs:h-7 rounded-full bg-emerald-50 border border-emerald-200/60 flex items-center justify-center text-[#123B2A] text-xs">
                      <Navigation className="w-3 xs:w-3.5 h-3 xs:h-3.5" />
                    </div>
                  </div>

                  {/* Category Filter Pills */}
                  <div className="flex gap-1.5 mt-2.5 xs:mt-3 overflow-x-hidden text-[9px] xs:text-[10px] font-semibold">
                    <span className="px-2.5 xs:px-3 py-1 rounded-full bg-[#123B2A] text-white shadow-xs">All</span>
                    <span className="px-2.5 xs:px-3 py-1 rounded-full bg-slate-100 text-slate-700">Residential</span>
                    <span className="px-2.5 xs:px-3 py-1 rounded-full bg-slate-100 text-slate-700">Land</span>
                    <span className="px-2.5 xs:px-3 py-1 rounded-full bg-slate-100 text-slate-700">Commercial</span>
                  </div>
                </div>

                {/* Interactive Proximity Map Canvas */}
                <div className="relative flex-1 bg-gradient-to-b from-emerald-50/50 via-teal-50/30 to-slate-100 overflow-hidden flex flex-col justify-between">
                  {/* Map Coordinate Dots / Roads Overlay */}
                  <div className="absolute inset-0 bg-[radial-gradient(#123B2A_1px,transparent_1px)] [background-size:16px_16px] opacity-15 pointer-events-none" />

                  {/* Pulsing GPS Center Location */}
                  <div className="absolute top-[38%] left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none">
                    <div className="relative flex items-center justify-center">
                      <div className="w-16 xs:w-20 h-16 xs:h-20 rounded-full bg-emerald-500/20 animate-ping absolute" />
                      <div className="w-10 xs:w-11 h-10 xs:h-11 rounded-full bg-[#123B2A] text-white flex items-center justify-center shadow-lg border-2 border-white">
                        <Navigation className="w-4 h-4 transform -rotate-45" />
                      </div>
                    </div>
                  </div>

                  {/* Interactive Property Map Pins with Pricing Badges */}
                  <div className="absolute top-4 xs:top-6 left-3 xs:left-5 bg-white/95 backdrop-blur-xs px-2 xs:px-2.5 py-1 rounded-full shadow-md text-[9px] xs:text-[10px] font-bold text-slate-900 border border-emerald-300 flex items-center gap-1.5 transform hover:scale-105 transition-transform">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-600"></span>
                    <span>Villa • 1.2 km</span>
                    <span className="bg-emerald-50 text-[#123B2A] px-1 rounded font-extrabold">₹85 L</span>
                  </div>

                  <div className="absolute top-12 xs:top-14 right-3 xs:right-5 bg-white/95 backdrop-blur-xs px-2 xs:px-2.5 py-1 rounded-full shadow-md text-[9px] xs:text-[10px] font-bold text-slate-900 border border-teal-300 flex items-center gap-1.5 transform hover:scale-105 transition-transform">
                    <span className="w-1.5 h-1.5 rounded-full bg-teal-600"></span>
                    <span>Plot • 650m</span>
                    <span className="bg-teal-50 text-teal-800 px-1 rounded font-extrabold">₹25 L</span>
                  </div>

                  <div className="absolute top-28 xs:top-32 left-4 xs:left-6 bg-white/95 backdrop-blur-xs px-2 xs:px-2.5 py-1 rounded-full shadow-md text-[9px] xs:text-[10px] font-bold text-slate-900 border border-slate-300 flex items-center gap-1.5 transform hover:scale-105 transition-transform">
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-500"></span>
                    <span>Office • 2.1 km</span>
                    <span className="bg-amber-50 text-amber-900 px-1 rounded font-extrabold">₹35k/mo</span>
                  </div>

                  {/* Floating "Nearby Listings" Card Overlay at Bottom of Map */}
                  <div className="mt-auto relative z-20 p-2.5 xs:p-3">
                    <div className="bg-white/95 backdrop-blur-md rounded-2xl p-2.5 xs:p-3 shadow-premium border border-slate-200/90 text-left space-y-2">
                      <div className="flex items-center justify-between text-[10px] xs:text-[11px]">
                        <span className="font-bold text-slate-900 flex items-center gap-1">
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                          Nearby Listings (14 found)
                        </span>
                        <span className="text-emerald-700 font-semibold text-[9px] xs:text-[10px]">Tap to view</span>
                      </div>

                      <div className="flex items-center gap-2.5">
                        <div className="relative w-14 xs:w-16 h-14 xs:h-16 rounded-xl overflow-hidden bg-slate-100 shrink-0">
                          <img
                            src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=300&q=80"
                            alt="Featured property"
                            className="w-full h-full object-cover"
                            onError={(e) => {
                              e.currentTarget.src = '/images/home.jpg';
                            }}
                          />
                          <span className="absolute bottom-1 right-1 bg-black/70 text-white text-[8px] font-bold px-1 rounded">
                            1.2 km
                          </span>
                        </div>

                        <div className="flex-1 min-w-0">
                          <div className="flex items-center justify-between">
                            <span className="text-[9px] font-bold text-emerald-700 uppercase">Verified Villa</span>
                            <span className="text-[11px] xs:text-xs font-extrabold text-[#123B2A]">₹48 Lakh</span>
                          </div>
                          <h4 className="text-[11px] xs:text-xs font-bold text-slate-900 truncate">3 BHK Luxury Independent Home</h4>
                          <p className="text-[9px] xs:text-[10px] text-slate-500 truncate">1,850 sq.ft • Kakkanad, Kochi</p>
                          <div className="flex items-center justify-between text-[8px] xs:text-[9px] text-slate-600 pt-0.5">
                            <span className="flex items-center gap-1">
                              <span className="w-1.5 h-1.5 rounded-full bg-emerald-600"></span>
                              <span>Direct Owner • ₹0 Fee</span>
                            </span>
                            <span className="font-mono text-[8px] text-emerald-800 bg-emerald-50 px-1 py-0.5 rounded font-bold">
                              8V43+XP Kochi
                            </span>
                          </div>
                        </div>
                      </div>

                      {/* Quick Contact Owner Action */}
                      <div className="pt-1 border-t border-slate-100 flex items-center justify-between">
                        <span className="text-[9px] text-slate-500 font-medium">Ready to inspect</span>
                        <div className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-[#123B2A] text-white text-[9px] xs:text-[10px] font-bold">
                          <Phone className="w-2.5 h-2.5 text-emerald-400" />
                          <span>Contact Owner</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Bottom App Navigation Mock */}
                  <div className="pt-1.5 pb-2 border-t border-slate-100 bg-white flex justify-around text-slate-400 text-[9px] xs:text-[10px] font-semibold">
                    <div className="flex flex-col items-center text-[#123B2A]">
                      <Compass className="w-3.5 xs:w-4 h-3.5 xs:h-4" />
                      <span>Nearby</span>
                    </div>
                    <div className="flex flex-col items-center">
                      <MapPin className="w-3.5 xs:w-4 h-3.5 xs:h-4" />
                      <span>Map</span>
                    </div>
                    <div className="flex flex-col items-center">
                      <Smartphone className="w-3.5 xs:w-4 h-3.5 xs:h-4" />
                      <span>App</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Restrained Floating Badges around Phone (Desktop Only) */}
            {/* Card 1: Top-Left "Verified Listings • Direct Owner" */}
            <motion.div
              initial={{ opacity: 0, x: -25 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.55, duration: 0.55 }}
              className="absolute top-28 -left-8 lg:-left-12 xl:-left-16 z-30 animate-float-slow hidden lg:flex items-center gap-3 bg-white/95 backdrop-blur-md p-3 sm:p-3.5 rounded-2xl shadow-premium border border-slate-200/80 text-left pointer-events-none"
            >
              <div className="w-8 sm:w-9 h-8 sm:h-9 rounded-xl bg-emerald-100 text-[#123B2A] flex items-center justify-center font-bold">
                <ShieldCheck className="w-4 sm:w-5 h-4 sm:h-5 text-[#123B2A]" />
              </div>
              <div>
                <div className="text-xs font-bold text-slate-900">Verified Listings</div>
                <div className="text-[10px] sm:text-[11px] font-semibold text-emerald-700">100% Direct Owners</div>
              </div>
            </motion.div>

            {/* Card 2: Top-Right "450+ Properties Near You" */}
            <motion.div
              initial={{ opacity: 0, x: 25 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.65, duration: 0.55 }}
              className="absolute top-44 -right-6 lg:-right-8 xl:-right-12 z-30 animate-float-delayed hidden lg:flex items-center gap-3 bg-white/95 backdrop-blur-md p-3 sm:p-3.5 rounded-2xl shadow-premium border border-slate-200/80 text-left pointer-events-none"
            >
              <div className="w-8 sm:w-9 h-8 sm:h-9 rounded-xl bg-emerald-50 text-[#123B2A] flex items-center justify-center font-bold text-xs">
                <MapPin className="w-4 h-4 text-emerald-600" />
              </div>
              <div>
                <div className="text-[10px] text-slate-400 font-bold uppercase">Proximity Search</div>
                <div className="text-xs font-extrabold text-slate-900">450+ Active Nearby</div>
              </div>
            </motion.div>

            {/* Tablet & Mobile Stat Badges Strip (visible on < lg screens) */}
            <div className="flex lg:hidden flex-wrap items-center justify-center gap-2 mt-5 z-20 w-full px-2">
              <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white border border-slate-200/80 shadow-xs text-xs font-semibold text-slate-800">
                <ShieldCheck className="w-3.5 h-3.5 text-[#123B2A] shrink-0" />
                <span>Verified Listings • Direct Owners</span>
              </div>
              <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white border border-slate-200/80 shadow-xs text-xs font-semibold text-slate-800">
                <MapPin className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                <span>450+ Properties Nearby</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
