import React from 'react';
import { motion } from 'framer-motion';
import {
  MapPin,
  Navigation,
  Compass,
  ArrowRight,
  ShieldCheck,
  Sparkles,
  Check,
  Apple,
  Search,
  Heart,
  User,
  Home,
} from 'lucide-react';
import { BRAND_CONFIG } from '../data/websiteData';
import { GooglePlayIcon } from './Navbar';

export const Hero: React.FC = () => {
  return (
    <section
      id="hero"
      className="relative min-h-[95vh] pt-32 pb-20 sm:pt-36 sm:pb-24 lg:pt-40 lg:pb-28 overflow-hidden flex flex-col justify-center bg-[#071F17] text-white"
    >
      {/* ================= LUXURY ARCHITECTURAL VILLA BACKGROUND ================= */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        <img
          src="/hero-luxury-villa.jpg"
          alt="Modern Architectural Luxury Villa"
          className="w-full h-full object-cover object-[center_right] sm:object-center filter brightness-[0.95] contrast-[1.05]"
          loading="eager"
        />
      </div>

      {/* Asymmetric Forest Green Gradient Overlay for Maximum Readability */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#071F17] via-[#071F17]/85 to-transparent z-10 pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#071F17] via-transparent to-black/35 z-10 pointer-events-none" />

      {/* Main Content Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* ================= LEFT COLUMN: HERO CONTENT ================= */}
          <div className="lg:col-span-7 text-left space-y-6 sm:space-y-7">

            {/* Punchy Headline: Find Properties Near You */}
            <motion.h1
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-[4.2rem] font-extrabold text-white tracking-tight leading-[1.12] pb-1"
            >
              Find Properties Near You
            </motion.h1>

            {/* Concise 2-line Subheader */}
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2, ease: 'easeOut' }}
              className="text-base sm:text-lg lg:text-xl text-slate-200 max-w-xl leading-relaxed font-normal"
            >
              Discover nearby plots, homes, and commercial spaces. Post free listings and connect directly—no middlemen, no brokerage fees.
            </motion.p>

            {/* Dual CTA Group */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3, ease: 'easeOut' }}
              className="pt-1 flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4"
            >
              {/* Primary Button: Solid Accent Mint */}
              <a
                href={BRAND_CONFIG.playStoreUrl}
                target="_blank"
                rel="noopener noreferrer"
                id="hero_download_click"
                className="inline-flex items-center justify-center gap-3 px-6 sm:px-8 py-3.5 sm:py-4 rounded-2xl bg-[#00D084] hover:bg-[#00D084]/90 text-[#0A231B] font-bold text-sm sm:text-base shadow-xl shadow-[#00D084]/20 transition-all duration-200 transform hover:-translate-y-0.5 focus:outline-none focus:ring-4 focus:ring-emerald-400/30 group"
              >
                <div className="flex items-center gap-1.5 opacity-90 group-hover:opacity-100">
                  <Apple className="w-4 h-4 fill-current text-[#0A231B]" />
                  <GooglePlayIcon className="w-4 h-4 fill-current text-[#0A231B]" />
                </div>
                <span>Get Mobile App</span>
              </a>

              {/* Secondary Button: Frosted Glass outline "Try in Browser →" */}
              <a
                href={BRAND_CONFIG.webAppUrl}
                target="_blank"
                rel="noopener noreferrer"
                id="hero_webapp_click"
                className="inline-flex items-center justify-center gap-2.5 px-6 sm:px-7 py-3.5 sm:py-4 rounded-2xl bg-white/10 hover:bg-white/15 text-white font-semibold text-sm sm:text-base border border-white/20 backdrop-blur-md shadow-xs hover:shadow-md transition-all duration-200 group"
              >
                <span>Try in Browser</span>
                <ArrowRight className="w-4 h-4 text-emerald-400 group-hover:translate-x-1 transition-all" />
              </a>
            </motion.div>

            {/* Feature Checklist: Horizontal row below CTAs */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="pt-6 border-t border-white/15 flex flex-wrap items-center gap-y-3 gap-x-4 sm:gap-x-6 text-xs sm:text-sm font-medium text-slate-200"
            >
              <div className="flex items-center gap-2">
                <div className="w-5 h-5 rounded-full bg-emerald-500/20 flex items-center justify-center text-[#00D084] shrink-0">
                  <Sparkles className="w-3 h-3 text-[#00D084]" />
                </div>
                <span className="font-semibold text-white">Unlimited Free Ads</span>
              </div>
              <span className="text-white/30 hidden md:inline">•</span>
              <div className="flex items-center gap-2">
                <div className="w-5 h-5 rounded-full bg-emerald-500/20 flex items-center justify-center text-[#00D084] shrink-0">
                  <MapPin className="w-3 h-3 text-[#00D084]" />
                </div>
                <span className="font-semibold text-white">Google Plus Code Precision</span>
              </div>
              <span className="text-white/30 hidden md:inline">•</span>
              <div className="flex items-center gap-2">
                <div className="w-5 h-5 rounded-full bg-emerald-500/20 flex items-center justify-center text-[#00D084] shrink-0">
                  <ShieldCheck className="w-3 h-3 text-[#00D084]" />
                </div>
                <span className="font-semibold text-white">Zero Brokerage</span>
              </div>
            </motion.div>

          </div>

          {/* ================= RIGHT COLUMN: 3D SMARTPHONE MOCKUP & FLOATING CARDS ================= */}
          <div className="lg:col-span-5 relative flex justify-center items-center py-6 sm:py-8 [perspective:1400px]">
            {/* Ambient Radiant Emerald Backlight Glow casting on villa */}
            <div
              className="absolute top-1/2 left-1/2 -translate-x-1/4 -translate-y-1/2 w-80 sm:w-[380px] h-[540px] bg-[#00D084]/35 blur-[65px] rounded-full pointer-events-none -z-10 animate-pulse"
              style={{ animationDuration: '4s' }}
            />
            <div className="absolute top-1/3 right-0 w-64 h-80 bg-emerald-400/30 blur-[50px] rounded-full pointer-events-none -z-10" />

            {/* Deep Directional Cast Grounding Shadow on Villa Wall */}
            <motion.div
              animate={{
                y: [0, -14, 0],
                scale: [1, 0.97, 1],
                opacity: [0.85, 0.7, 0.85],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
              className="absolute top-14 left-4 w-[280px] xs:w-[310px] sm:w-[330px] lg:w-[345px] h-[580px] xs:h-[630px] sm:h-[670px] bg-black/90 blur-[40px] rounded-[60px] transform-gpu -translate-x-12 translate-y-14 rotate-[13deg] pointer-events-none -z-10"
            />

            {/* Photorealistic 3D Flagship Smartphone with Solid Titanium Extrusion & Continuous Levitation */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{
                opacity: 1,
                y: [0, -14, 0],
                rotateZ: [13.5, 15, 13.5],
                rotateX: [13, 15, 13],
                rotateY: [-17, -19, -17],
              }}
              transition={{
                opacity: { duration: 0.8, ease: 'easeOut' },
                y: { duration: 5, repeat: Infinity, ease: 'easeInOut' },
                rotateZ: { duration: 6, repeat: Infinity, ease: 'easeInOut' },
                rotateX: { duration: 6, repeat: Infinity, ease: 'easeInOut' },
                rotateY: { duration: 6.5, repeat: Infinity, ease: 'easeInOut' },
              }}
              whileHover={{
                scale: 1.02,
                transition: { duration: 0.3 },
              }}
              style={{
                transformStyle: 'preserve-3d',
                boxShadow:
                  '1px 1px 0px #475569, 2px 2px 0px #334155, 3px 3px 0px #334155, 4px 4px 0px #1e293b, 5px 5px 0px #1e293b, 6px 6px 0px #0f172a, 7px 7px 0px #0f172a, 8px 8px 0px #020617, 9px 9px 0px #020617, -25px 45px 65px -10px rgba(0,0,0,0.9), -12px 25px 35px -5px rgba(0,0,0,0.75), 0px 0px 55px 8px rgba(0,208,132,0.38)',
              }}
              className="relative z-20 w-full max-w-[285px] xs:max-w-[320px] sm:max-w-[340px] lg:max-w-[355px] h-[585px] xs:h-[635px] sm:h-[675px] bg-[#0B1120] rounded-[48px] xs:rounded-[52px] p-2.5 xs:p-3 border-[4.5px] border-slate-600/90 border-t-slate-400/90 border-l-slate-400/90 border-r-slate-800 border-b-slate-900 mx-auto cursor-pointer group/phone select-none"
            >
              {/* Left Titanium Frame Buttons: Action Button & Volume Rockers */}
              <div className="absolute -left-[6px] top-28 w-[3.5px] h-7 bg-slate-400 rounded-l-sm shadow-xs pointer-events-none" />
              <div className="absolute -left-[6px] top-40 w-[3.5px] h-12 bg-slate-400 rounded-l-sm shadow-xs pointer-events-none" />
              <div className="absolute -left-[6px] top-56 w-[3.5px] h-12 bg-slate-400 rounded-l-sm shadow-xs pointer-events-none" />
              {/* Right Titanium Frame Power Button */}
              <div className="absolute -right-[6px] top-36 w-[3.5px] h-16 bg-slate-500 rounded-r-sm shadow-xs pointer-events-none" />

              {/* Phone Dynamic Island */}
              <div className="absolute top-3.5 xs:top-4 left-1/2 -translate-x-1/2 w-24 xs:w-28 h-4 xs:h-5 bg-black rounded-full z-30 flex items-center justify-end px-3">
                <div className="w-2 xs:w-2.5 h-2 xs:h-2.5 rounded-full bg-slate-800 border border-slate-700" />
              </div>

              {/* Internal Screen Content */}
              <div className="w-full h-full bg-[#F4F7F5] rounded-[40px] xs:rounded-[44px] overflow-hidden flex flex-col text-slate-800 relative select-none">
                {/* Photorealistic Diagonal Glass Specular Sheen across Screen */}
                <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/[0.12] to-transparent pointer-events-none z-20 rounded-[40px] xs:rounded-[44px]" />

                {/* Status Bar */}
                <div className="pt-2.5 xs:pt-3 px-5 xs:px-6 pb-1 flex justify-between items-center text-[10px] xs:text-[11px] font-semibold text-slate-500 z-10 bg-white">
                  <span>9:41</span>
                  <div className="flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-[#00D084] animate-pulse" />
                    <span className="text-[10px]">5G</span>
                  </div>
                </div>

                {/* Search Bar matching mockup: "interactive real GPS map" */}
                <div className="px-3.5 pt-1.5 pb-2 bg-white border-b border-slate-100 shadow-xs z-10">
                  <div className="flex items-center justify-between bg-slate-100/90 rounded-xl px-3 py-1.5 text-xs text-slate-500">
                    <div className="flex items-center gap-2">
                      <Search className="w-3.5 h-3.5 text-slate-400" />
                      <span className="font-medium text-[11px] text-slate-700">interactive real GPS map</span>
                    </div>
                    <div className="w-4 h-4 rounded-full bg-emerald-50 text-[#00D084] flex items-center justify-center text-[9px] font-bold">
                      ⊚
                    </div>
                  </div>
                </div>

                {/* Interactive Proximity Map Canvas */}
                <div className="relative flex-1 bg-gradient-to-b from-emerald-50/70 via-teal-50/40 to-slate-100 overflow-hidden flex flex-col justify-between">
                  {/* Map Coordinate Dots / Roads Overlay */}
                  <div className="absolute inset-0 bg-[radial-gradient(#0F382C_1.2px,transparent_1.2px)] [background-size:18px_18px] opacity-20 pointer-events-none" />

                  {/* Pulsing GPS Center Location Radar */}
                  <div className="absolute top-[32%] left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none">
                    <div className="relative flex items-center justify-center">
                      <div className="w-20 xs:w-24 h-20 xs:h-24 rounded-full bg-emerald-500/25 animate-ping absolute" />
                      <div className="w-12 xs:w-14 h-12 xs:h-14 rounded-full bg-[#00D084]/20 animate-pulse absolute" />
                      <div className="w-9 xs:w-10 h-9 xs:h-10 rounded-full bg-[#0F382C] text-white flex items-center justify-center shadow-lg border-2 border-white">
                        <Navigation className="w-4 h-4 transform -rotate-45 text-[#00D084]" />
                      </div>
                    </div>
                  </div>

                  {/* Clean Map Pins matching mockup screenshot */}
                  <div className="absolute top-4 left-5 bg-white/95 backdrop-blur-xs px-2.5 py-1 rounded-full shadow-md text-[10px] font-bold text-slate-900 border border-emerald-300 flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-[#00D084]" />
                    <span>Villa • 1.2 km</span>
                    <span className="bg-emerald-50 text-[#0F382C] px-1 rounded font-extrabold">₹48 L</span>
                  </div>

                  <div className="absolute top-8 right-4 bg-white/95 backdrop-blur-xs px-2.5 py-1 rounded-full shadow-md text-[10px] font-bold text-slate-900 border border-teal-300 flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-teal-600" />
                    <span>Plot • 650m</span>
                    <span className="bg-teal-50 text-teal-800 px-1 rounded font-extrabold">₹25 L</span>
                  </div>

                  <div className="absolute top-24 left-6 bg-white/95 backdrop-blur-xs px-2 py-0.5 rounded-full shadow-md text-[9px] font-bold text-slate-900 border border-slate-300 flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-500" />
                    <span>Shop • 2.1 km</span>
                  </div>

                  <div className="absolute top-20 right-8 w-6 h-6 rounded-full bg-[#00D084] text-white flex items-center justify-center text-[10px] font-bold shadow-md border-2 border-white animate-bounce">
                    ⌂
                  </div>

                  {/* Floating Luxury Villa Card at Bottom matching mockup */}
                  <div className="mt-auto relative z-20 p-2.5 xs:p-3">
                    <div className="bg-white/95 backdrop-blur-md rounded-2xl p-2.5 xs:p-3 shadow-xl border border-slate-200/90 text-left space-y-2">
                      <div className="flex items-center justify-between text-[10px] xs:text-[11px]">
                        <span className="font-bold text-slate-900 flex items-center gap-1">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#00D084]" />
                          Specific Villa
                        </span>
                        <span className="text-[#00D084] font-extrabold text-[11px] xs:text-xs">₹48 Lakh</span>
                      </div>

                      <div className="flex items-center gap-2.5">
                        <div className="relative w-14 xs:w-16 h-14 xs:h-16 rounded-xl overflow-hidden bg-slate-100 shrink-0">
                          <img
                            src="/hero-luxury-villa.jpg"
                            alt="Luxury Villa"
                            className="w-full h-full object-cover"
                          />
                          <span className="absolute bottom-1 right-1 bg-black/70 text-white text-[8px] font-bold px-1 rounded">
                            1.2 km
                          </span>
                        </div>

                        <div className="flex-1 min-w-0">
                          <h4 className="text-[11px] xs:text-xs font-bold text-slate-900 truncate">3 BHK Luxury Villa</h4>
                          <p className="text-[9px] xs:text-[10px] text-slate-500 truncate">3 Bed • 2 Baths • Kakkanad</p>
                          <div className="flex items-center justify-between text-[8px] xs:text-[9px] text-slate-600 pt-1">
                            <span className="flex items-center gap-1 font-semibold text-[#0F382C]">
                              <Check className="w-2.5 h-2.5 text-[#00D084]" />
                              <span>Verified Owner • 0% Fee</span>
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Micro Bottom Navigation Bar */}
                  <div className="pt-2 pb-2.5 border-t border-slate-100 bg-white flex justify-around text-slate-400 text-[10px] font-semibold">
                    <div className="flex flex-col items-center text-[#00D084]">
                      <Home className="w-3.5 h-3.5" />
                    </div>
                    <div className="flex flex-col items-center">
                      <Compass className="w-3.5 h-3.5" />
                    </div>
                    <div className="flex flex-col items-center">
                      <Heart className="w-3.5 h-3.5" />
                    </div>
                    <div className="flex flex-col items-center">
                      <User className="w-3.5 h-3.5" />
                    </div>
                  </div>
                </div>
              </div>

              {/* ================= FLOATING FROSTED GLASS BADGES OVERLAPPING PHONE ================= */}
              {/* Tag 1 (Top-Left): "Verified Owner • 0% Fee" */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut', delay: 0.3 }}
                className="absolute top-20 -left-6 sm:-left-10 z-30 flex items-center gap-2 bg-white/90 backdrop-blur-xl px-4 py-1.5 rounded-full shadow-2xl border border-white/80 pointer-events-none whitespace-nowrap"
              >
                <span className="w-2 h-2 rounded-full bg-[#00D084]" />
                <span className="text-xs font-bold text-slate-900">Verified Owner • 0% Fee</span>
              </motion.div>

              {/* Tag 2 (Bottom-Right): "Verified Owner • 0% Fee" matching mockup screenshot */}
              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
                className="absolute bottom-20 -right-6 sm:-right-10 z-30 flex items-center gap-2 bg-white/90 backdrop-blur-xl px-4 py-1.5 rounded-full shadow-2xl border border-white/80 pointer-events-none whitespace-nowrap"
              >
                <span className="w-2 h-2 rounded-full bg-[#00D084]" />
                <span className="text-xs font-bold text-slate-900">Verified Owner • 0% Fee</span>
              </motion.div>
            </motion.div>

            {/* Mobile & Tablet Pill Tags Strip */}
            <div className="flex sm:hidden flex-wrap items-center justify-center gap-2 mt-5 z-20 w-full px-2">
              <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/90 backdrop-blur-md border border-slate-200/80 shadow-xs text-xs font-semibold text-slate-800">
                <Check className="w-3.5 h-3.5 text-[#00D084] stroke-[3]" />
                <span>Verified Owner • 0% Fee</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
