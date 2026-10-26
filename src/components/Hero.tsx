import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import {
  MapPin,
  ArrowRight,
  ShieldCheck,
  Sparkles,
  Check,
  Apple,
  Heart,
  Home,
  Building2,
  FileText,
  PlusCircle,
  Settings,
} from 'lucide-react';
import { BRAND_CONFIG } from '../data/websiteData';
import { GooglePlayIcon } from './Navbar';
import { triggerSmartDownload, getPlayStoreTrackedUrl } from '../utils/appLinks';

interface HeroProps {
  onOpenIOSModal?: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenIOSModal }) => {
  const [selectedTab, setSelectedTab] = useState<'residential' | 'commercial'>('residential');
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(min-width: 1024px)');
    const updateMatch = (e: MediaQueryListEvent | MediaQueryList) => {
      setIsDesktop(e.matches);
    };
    setIsDesktop(mediaQuery.matches);
    mediaQuery.addEventListener('change', updateMatch);
    return () => mediaQuery.removeEventListener('change', updateMatch);
  }, []);

  return (
    <section
      id="hero"
      className="relative min-h-[92vh] pt-28 pb-14 sm:pt-36 sm:pb-20 lg:pt-40 lg:pb-28 overflow-hidden flex flex-col justify-center bg-[#071F17] text-white"
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
              Discover nearby plots, homes, and commercial spaces. Post free listings and connect directly with verified owners.
            </motion.p>

            {/* Dual CTA Group */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3, ease: 'easeOut' }}
              className="pt-1 flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4"
            >
              {/* Primary Button: Solid Accent Mint with Smart Link Routing */}
              <a
                href={getPlayStoreTrackedUrl('hero_primary')}
                onClick={(e) => triggerSmartDownload(e, 'hero_primary', onOpenIOSModal)}
                target="_blank"
                rel="noopener noreferrer"
                id="hero_download_click"
                className="inline-flex items-center justify-center gap-2.5 sm:gap-3 px-5 sm:px-6 lg:px-8 py-3.5 sm:py-4 rounded-2xl bg-[#00D084] hover:bg-[#00D084]/90 text-[#0A231B] font-bold text-xs xs:text-sm sm:text-base shadow-xl shadow-[#00D084]/20 transition-all duration-200 transform hover:-translate-y-0.5 focus:outline-none focus:ring-4 focus:ring-emerald-400/30 group text-center min-h-[48px]"
              >
                <div className="flex items-center gap-1.5 opacity-90 group-hover:opacity-100 shrink-0">
                  <Apple className="w-4 h-4 fill-current text-[#0A231B]" />
                  <GooglePlayIcon className="w-4 h-4 fill-current text-[#0A231B]" />
                </div>
                <span>Explore More – Download the App Now</span>
              </a>

              {/* Secondary Button: Frosted Glass outline "Try in Browser →" */}
              <a
                href={BRAND_CONFIG.webAppUrl}
                target="_blank"
                rel="noopener noreferrer"
                id="hero_webapp_click"
                className="inline-flex items-center justify-center gap-2.5 px-6 sm:px-7 py-3.5 sm:py-4 rounded-2xl bg-white/10 hover:bg-white/15 text-white font-semibold text-sm sm:text-base border border-white/20 backdrop-blur-md shadow-xs hover:shadow-md transition-all duration-200 group min-h-[48px]"
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
                <span className="font-semibold text-white">Free Ads</span>
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
                <span className="font-semibold text-white">Direct Lead</span>
              </div>
            </motion.div>

          </div>

          {/* ================= RIGHT COLUMN: GENUINE APP DEMONSTRATION PHONE ================= */}
          <div className="lg:col-span-5 relative flex flex-col justify-center items-center py-4 sm:py-6 lg:mt-8 w-full lg:[perspective:1200px]">
            {/* Ambient Radiant Emerald Backlight Glow casting on villa */}
            <div
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 sm:w-[380px] h-[500px] sm:h-[560px] bg-[#00D084]/35 blur-[65px] rounded-full pointer-events-none -z-10 animate-pulse"
              style={{ animationDuration: '4s' }}
            />
            <div className="absolute top-1/3 right-0 w-64 h-80 bg-emerald-400/25 blur-[50px] rounded-full pointer-events-none -z-10" />

            {/* Directional Grounding Shadow (Angled for right tilt) */}
            <motion.div
              animate={
                isDesktop
                  ? {
                      y: [0, -12, 0],
                      scale: [1, 0.96, 1],
                      opacity: [0.85, 0.7, 0.85],
                    }
                  : { y: [0, -6, 0] }
              }
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
              style={{
                transform: isDesktop
                  ? 'translate(-18px, 18px) rotate(7deg)'
                  : 'none',
              }}
              className="absolute top-20 left-1/2 -translate-x-1/2 w-[270px] sm:w-[320px] h-[540px] sm:h-[600px] bg-black/90 blur-[45px] rounded-[50px] pointer-events-none -z-10"
            />

            {/* Smartphone Mockup with Subtle Right Tilt (~7° on Desktop) */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={
                isDesktop
                  ? {
                      opacity: 1,
                      y: [0, -12, 0],
                      rotateZ: [6.5, 7.8, 6.5],
                      rotateY: [-6, -7.5, -6],
                      rotateX: [5, 6.5, 5],
                    }
                  : {
                      opacity: 1,
                      y: [0, -6, 0],
                      rotateZ: 2,
                      rotateY: 0,
                      rotateX: 0,
                    }
              }
              transition={
                isDesktop
                  ? {
                      opacity: { duration: 0.8, ease: 'easeOut' },
                      y: { duration: 5, repeat: Infinity, ease: 'easeInOut' },
                      rotateZ: { duration: 6, repeat: Infinity, ease: 'easeInOut' },
                      rotateY: { duration: 6.5, repeat: Infinity, ease: 'easeInOut' },
                      rotateX: { duration: 6, repeat: Infinity, ease: 'easeInOut' },
                    }
                  : {
                      opacity: { duration: 0.8, ease: 'easeOut' },
                      y: { duration: 4, repeat: Infinity, ease: 'easeInOut' },
                    }
              }
              whileHover={{
                scale: 1.025,
                rotateZ: 4.5,
                transition: { duration: 0.3 },
              }}
              style={{
                transformStyle: 'preserve-3d',
                boxShadow: isDesktop
                  ? '1px 1px 0px #475569, 2px 2px 0px #334155, 3px 3px 0px #1e293b, 4px 4px 0px #0f172a, 16px 36px 55px -10px rgba(0,0,0,0.85), -10px 20px 30px -5px rgba(0,0,0,0.6), 0 0 50px 10px rgba(0, 208, 132, 0.32), inset 0 0 0 1px rgba(255, 255, 255, 0.12)'
                  : '0 25px 60px -15px rgba(0, 0, 0, 0.9), 0 0 40px rgba(0, 208, 132, 0.28), inset 0 0 0 1px rgba(255, 255, 255, 0.12)',
              }}
              className="relative z-20 w-full max-w-[275px] xs:max-w-[305px] sm:max-w-[335px] lg:max-w-[345px] h-[530px] xs:h-[585px] sm:h-[625px] lg:h-[650px] bg-[#0B1120] rounded-[44px] xs:rounded-[48px] sm:rounded-[52px] p-2.5 xs:p-3 border-[4.5px] border-slate-600/90 border-t-slate-400/90 border-l-slate-400/90 border-r-slate-800 border-b-slate-900 mx-auto select-none cursor-pointer group/phone"
            >
              {/* Left Titanium Frame Buttons: Action Button & Volume Rockers */}
              <div className="absolute -left-[6px] top-28 w-[3.5px] h-7 bg-slate-400 rounded-l-sm shadow-xs pointer-events-none" />
              <div className="absolute -left-[6px] top-40 w-[3.5px] h-12 bg-slate-400 rounded-l-sm shadow-xs pointer-events-none" />
              <div className="absolute -left-[6px] top-56 w-[3.5px] h-12 bg-slate-400 rounded-l-sm shadow-xs pointer-events-none" />
              {/* Right Titanium Frame Power Button */}
              <div className="absolute -right-[6px] top-36 w-[3.5px] h-16 bg-slate-500 rounded-r-sm shadow-xs pointer-events-none" />

              {/* Phone Dynamic Island */}
              <div className="absolute top-2.5 xs:top-3 left-1/2 -translate-x-1/2 w-22 xs:w-24 h-3.5 xs:h-4 bg-black rounded-full z-40 flex items-center justify-end px-3">
                <div className="w-1.5 xs:w-2 h-1.5 xs:h-2 rounded-full bg-slate-800 border border-slate-700" />
              </div>

              {/* Internal Screen Content - Genuine App Home Screen */}
              <div className="w-full h-full bg-[#FAFCFB] rounded-[38px] xs:rounded-[42px] overflow-hidden flex flex-col text-slate-800 relative select-none shadow-inner">
                {/* Photorealistic Diagonal Glass Specular Sheen across Screen */}
                <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/[0.1] to-transparent pointer-events-none z-30 rounded-[38px] xs:rounded-[42px]" />

                {/* 1. App Top Header (Dark Green Theme matching genuine App) */}
                <div className="pt-5 xs:pt-6 px-3.5 pb-2 bg-[#0F382C] text-white shrink-0 shadow-sm z-20">
                  <div className="flex items-center justify-between">
                    <span className="font-extrabold text-sm xs:text-base tracking-tight text-white">
                      NearbyEstate
                    </span>
                    <button
                      type="button"
                      className="px-3 py-0.5 rounded-full bg-white text-[#0F382C] text-[10px] xs:text-[11px] font-bold shadow-xs hover:bg-slate-100 transition-colors"
                    >
                      Login
                    </button>
                  </div>
                  {/* Location Selector Bar */}
                  <div className="flex items-center gap-1.5 mt-1.5 text-[10px] xs:text-[11px] text-white/90">
                    <MapPin className="w-3 h-3 text-emerald-400 shrink-0" />
                    <span className="font-medium truncate max-w-[170px] xs:max-w-[190px]">
                      Polytechnic Bus Stop, Po...
                    </span>
                    <span className="px-1.5 py-0.2 rounded bg-white/20 text-[9px] font-semibold text-emerald-200">
                      All
                    </span>
                  </div>
                </div>

                {/* 2. Scrollable App Interior */}
                <div className="flex-1 overflow-y-auto no-scrollbar px-3 py-2 space-y-2.5 text-left bg-[#F7FAF8]">
                  {/* Promo Carousel Banner: "Find estate Quick and Easy" */}
                  <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-amber-50 to-orange-50/70 border border-orange-100/90 shadow-2xs p-2.5">
                    <div className="flex items-center justify-between">
                      <div className="space-y-0.5">
                        <p className="text-[10px] font-medium text-slate-700">Find estate</p>
                        <h4 className="text-xs xs:text-sm font-extrabold text-slate-900 leading-tight">
                          Quick and Easy
                        </h4>
                      </div>
                      <div className="w-16 xs:w-20 h-12 xs:h-14 shrink-0 flex items-center justify-center">
                        <img
                          src="/images/C3.png"
                          alt="Quick and Easy"
                          className="w-full h-full object-contain"
                        />
                      </div>
                    </div>
                    {/* Carousel Dots */}
                    <div className="flex items-center justify-center gap-1 mt-1">
                      <span className="w-2.5 h-1 rounded-full bg-slate-700" />
                      <span className="w-1 h-1 rounded-full bg-slate-300" />
                      <span className="w-1 h-1 rounded-full bg-slate-300" />
                    </div>
                  </div>

                  {/* Segmented Filter Toggle: Residential vs Commercial */}
                  <div className="grid grid-cols-2 gap-1.5">
                    <button
                      type="button"
                      onClick={() => setSelectedTab('residential')}
                      className={`flex items-center justify-center gap-1.5 py-1.5 px-2 rounded-xl text-[10px] xs:text-[11px] font-bold transition-all shadow-2xs ${
                        selectedTab === 'residential'
                          ? 'bg-[#0F382C] text-white shadow-emerald-950/20'
                          : 'bg-white text-slate-600 border border-slate-200 hover:bg-slate-50'
                      }`}
                    >
                      <Home className="w-3 h-3" />
                      <span>Residential</span>
                    </button>
                    <button
                      type="button"
                      onClick={() => setSelectedTab('commercial')}
                      className={`flex items-center justify-center gap-1.5 py-1.5 px-2 rounded-xl text-[10px] xs:text-[11px] font-bold transition-all shadow-2xs ${
                        selectedTab === 'commercial'
                          ? 'bg-[#0F382C] text-white shadow-emerald-950/20'
                          : 'bg-white text-slate-600 border border-slate-200 hover:bg-slate-50'
                      }`}
                    >
                      <Building2 className="w-3 h-3" />
                      <span>Commercial</span>
                    </button>
                  </div>

                  {/* 4-Item Category Grid */}
                  <div className="grid grid-cols-4 gap-1.5">
                    {[
                      { name: 'Land', img: '/images/land.jpg' },
                      { name: 'House/Villas', img: '/images/home.jpg' },
                      { name: 'Apartments', img: '/images/appartment.jpg' },
                      { name: 'Others', img: '/images/commercialBuilding.jpg' },
                    ].map((cat, i) => (
                      <div key={i} className="flex flex-col items-center group/cat">
                        <div className="w-full aspect-square rounded-xl overflow-hidden bg-slate-100 border border-slate-200 shadow-2xs relative">
                          <img
                            src={cat.img}
                            alt={cat.name}
                            className="w-full h-full object-cover group-hover/cat:scale-105 transition-transform duration-300"
                          />
                        </div>
                        <span className="text-[8.5px] xs:text-[9.5px] font-semibold text-slate-700 mt-1 truncate max-w-full text-center">
                          {cat.name}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* Quick Links Section */}
                  <div>
                    <div className="flex items-center justify-between mb-1.5">
                      <span className="text-[10px] xs:text-[11px] font-bold text-slate-800">Quick Links</span>
                    </div>
                    <div className="grid grid-cols-4 gap-1.5">
                      {[
                        { name: 'Hostels', img: '/images/home.jpg' },
                        { name: 'PG', img: '/images/office.jpg' },
                        { name: 'Farms', img: '/images/farmLand.jpg' },
                        { name: 'Others', img: '/images/shop.jpg' },
                      ].map((link, i) => (
                        <div key={i} className="flex flex-col items-center group/ql">
                          <div className="w-full aspect-square rounded-xl overflow-hidden bg-slate-100 border border-slate-200 shadow-2xs relative">
                            <img
                              src={link.img}
                              alt={link.name}
                              className="w-full h-full object-cover group-hover/ql:scale-105 transition-transform duration-300"
                            />
                          </div>
                          <span className="text-[8.5px] xs:text-[9.5px] font-semibold text-slate-700 mt-1 truncate max-w-full text-center">
                            {link.name}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Properties Near By */}
                  <div>
                    <div className="flex items-center justify-between mb-1.5">
                      <span className="text-[10px] xs:text-[11px] font-bold text-slate-900">Properties near by</span>
                      <span className="text-[9px] xs:text-[10px] font-bold text-[#0F382C] hover:underline">
                        View All
                      </span>
                    </div>

                    <div className="grid grid-cols-2 gap-2">
                      <div className="rounded-xl overflow-hidden bg-white border border-slate-200 shadow-xs relative group/card">
                        <div className="relative h-16 xs:h-18 w-full overflow-hidden bg-slate-100">
                          <img
                            src="/hero-luxury-villa.jpg"
                            alt="Property"
                            className="w-full h-full object-cover"
                          />
                          <span className="absolute top-1 left-1 bg-[#0F382C]/90 text-white text-[7.5px] font-bold px-1.5 py-0.5 rounded-full flex items-center gap-0.5">
                            0.0 Km
                          </span>
                          <button
                            type="button"
                            className="absolute top-1 right-1 w-4 h-4 rounded-full bg-white/90 text-slate-600 flex items-center justify-center shadow-xs"
                          >
                            <Heart className="w-2.5 h-2.5" />
                          </button>
                        </div>
                      </div>

                      <div className="rounded-xl overflow-hidden bg-white border border-slate-200 shadow-xs relative group/card">
                        <div className="relative h-16 xs:h-18 w-full overflow-hidden bg-slate-100">
                          <img
                            src="/images/appartment.jpg"
                            alt="Property"
                            className="w-full h-full object-cover"
                          />
                          <span className="absolute top-1 left-1 bg-[#0F382C]/90 text-white text-[7.5px] font-bold px-1.5 py-0.5 rounded-full flex items-center gap-0.5">
                            0.0 Km
                          </span>
                          <button
                            type="button"
                            className="absolute top-1 right-1 w-4 h-4 rounded-full bg-white/90 text-slate-600 flex items-center justify-center shadow-xs"
                          >
                            <Heart className="w-2.5 h-2.5" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* 3. App Bottom Navigation Bar (5 tabs) */}
                <div className="pt-1.5 pb-2.5 px-3 bg-white border-t border-slate-200 flex justify-between items-center text-[8.5px] font-bold shrink-0 z-20">
                  <div className="flex flex-col items-center text-emerald-600 gap-0.5">
                    <Home className="w-3.5 h-3.5 text-emerald-600" />
                    <span>Home</span>
                  </div>
                  <div className="flex flex-col items-center text-slate-500 hover:text-slate-700 gap-0.5">
                    <FileText className="w-3.5 h-3.5" />
                    <span>My Ads</span>
                  </div>
                  <div className="flex flex-col items-center text-emerald-600 gap-0.5">
                    <div className="w-5 h-5 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center">
                      <PlusCircle className="w-4 h-4" />
                    </div>
                    <span>Post</span>
                  </div>
                  <div className="flex flex-col items-center text-slate-500 hover:text-slate-700 gap-0.5">
                    <Heart className="w-3.5 h-3.5" />
                    <span>Favourites</span>
                  </div>
                  <div className="flex flex-col items-center text-slate-500 hover:text-slate-700 gap-0.5">
                    <Settings className="w-3.5 h-3.5" />
                    <span>Settings</span>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Mobile & Tablet Pill Tags Strip */}
            <div className="flex lg:hidden flex-wrap items-center justify-center gap-2 mt-5 z-20 w-full px-2">
              <div className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white/90 backdrop-blur-md border border-slate-200/80 shadow-xs text-xs font-semibold text-slate-800">
                <Check className="w-3.5 h-3.5 text-[#00D084] stroke-[3]" />
                <span>Verified Owner</span>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Decorative Sparkle Accent Star on bottom right (matching Image 2) */}
      <div className="absolute bottom-8 right-8 pointer-events-none opacity-80 hidden sm:block">
        <svg className="w-8 h-8 text-white/60 animate-pulse" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 0L14.59 9.41L24 12L14.59 14.59L12 24L9.41 14.59L0 12L9.41 9.41L12 0Z" />
        </svg>
      </div>
    </section>
  );
};

