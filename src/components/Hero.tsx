import React from 'react';
import { motion } from 'framer-motion';
import {
  MapPin,
  Navigation,
  Compass,
  ArrowRight,
  ShieldCheck,
  Phone,
  Zap,
  Sparkles,
  Check,
  Apple,
} from 'lucide-react';
import { BRAND_CONFIG } from '../data/websiteData';
import { GooglePlayIcon } from './Navbar';

export const Hero: React.FC = () => {
  return (
    <section
      id="hero"
      className="relative min-h-[92vh] pt-28 pb-16 sm:pt-32 sm:pb-20 lg:pt-36 lg:pb-24 overflow-hidden flex flex-col justify-start lg:justify-center bg-[#FAFAFA]"
    >
      {/* Background Ambience: Minimalist soft off-white with subtle ambient emerald/mint gradients & micro-grid dots */}
      <div className="absolute inset-0 map-dotted-grid opacity-40 pointer-events-none" />
      <div className="absolute inset-0 coordinate-grid opacity-30 pointer-events-none" />

      {/* Subtle ambient emerald/mint green gradients (#E8F5E9) */}
      <div className="absolute -top-24 left-1/4 -translate-x-1/2 w-[550px] h-[550px] bg-[#E8F5E9]/60 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute top-1/2 right-10 w-[600px] h-[600px] bg-emerald-100/35 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-10 left-1/3 w-[450px] h-[450px] bg-[#00D084]/10 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* ================= LEFT COLUMN: HERO CONTENT ================= */}
          <div className="lg:col-span-7 text-left space-y-6 sm:space-y-7">
            {/* Sleek Pill Badge: ⚡ 100% Direct Owner • Zero Brokerage with soft mint border */}
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: 'easeOut' }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-50/90 border border-[#00D084]/50 text-[#0F382C] text-xs sm:text-sm font-bold shadow-xs shadow-emerald-500/10 backdrop-blur-xs"
            >
              <Zap className="w-3.5 h-3.5 text-[#00D084] fill-[#00D084]" />
              <span>100% Direct Owner • Zero Brokerage</span>
            </motion.div>

            {/* Punchy Headline: Discover verified homes & land right next door. */}
            <motion.h1
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-[4.2rem] font-extrabold text-[#111827] tracking-tight leading-[1.12] pb-1"
            >
              Discover verified homes & land{' '}
              <span className="relative inline-block text-[#0F382C]">
                <span className="relative z-10 underline decoration-[#00D084] decoration-[5px] sm:decoration-[6px] underline-offset-[8px] sm:underline-offset-[12px]">
                  right next door.
                </span>
              </span>
            </motion.h1>

            {/* Concise 2-line Subheader */}
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2, ease: 'easeOut' }}
              className="text-base sm:text-lg lg:text-xl text-[#111827]/75 max-w-xl leading-relaxed font-normal"
            >
              Hyperlocal GPS precision connects you directly to vacant plots, houses, and commercial spaces. Post and discover free listings with zero middleman fees.
            </motion.p>

            {/* Dual CTA Group */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3, ease: 'easeOut' }}
              className="pt-1 flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4"
            >
              {/* Primary Button: Solid Deep Forest Green with Apple & Google Play badge icons */}
              <a
                href={BRAND_CONFIG.playStoreUrl}
                target="_blank"
                rel="noopener noreferrer"
                id="hero_download_click"
                className="inline-flex items-center justify-center gap-3 px-6 sm:px-8 py-3.5 sm:py-4 rounded-2xl bg-[#0F382C] hover:bg-[#072018] text-white font-bold text-sm sm:text-base shadow-lg shadow-[#0F382C]/25 hover:shadow-xl hover:shadow-[#0F382C]/35 transition-all duration-200 transform hover:-translate-y-0.5 focus:outline-none focus:ring-4 focus:ring-[#0F382C]/30 group"
              >
                <div className="flex items-center gap-1.5 opacity-90 group-hover:opacity-100">
                  <Apple className="w-4 h-4 fill-current text-white" />
                  <GooglePlayIcon className="w-4 h-4 fill-current text-white" />
                </div>
                <span>Get Mobile App</span>
              </a>

              {/* Secondary Button: Clean outline "Try in Browser →" */}
              <a
                href={BRAND_CONFIG.webAppUrl}
                target="_blank"
                rel="noopener noreferrer"
                id="hero_webapp_click"
                className="inline-flex items-center justify-center gap-2.5 px-6 sm:px-7 py-3.5 sm:py-4 rounded-2xl bg-white hover:bg-slate-50 text-[#111827] hover:text-[#0F382C] font-semibold text-sm sm:text-base border border-slate-200 hover:border-[#00D084] shadow-xs hover:shadow-sm transition-all duration-200 group"
              >
                <span>Try in Browser</span>
                <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-[#0F382C] group-hover:translate-x-1 transition-all" />
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
                <div className="w-5 h-5 rounded-full bg-emerald-100 flex items-center justify-center text-[#0F382C] shrink-0">
                  <Sparkles className="w-3 h-3 text-[#0F382C]" />
                </div>
                <span className="font-semibold text-slate-800">Unlimited Free Ads</span>
              </div>
              <span className="text-slate-300 hidden md:inline">•</span>
              <div className="flex items-center gap-2">
                <div className="w-5 h-5 rounded-full bg-emerald-100 flex items-center justify-center text-[#0F382C] shrink-0">
                  <MapPin className="w-3 h-3 text-[#0F382C]" />
                </div>
                <span className="font-semibold text-slate-800">Google Plus Code Precision</span>
              </div>
              <span className="text-slate-300 hidden md:inline">•</span>
              <div className="flex items-center gap-2">
                <div className="w-5 h-5 rounded-full bg-emerald-100 flex items-center justify-center text-[#0F382C] shrink-0">
                  <ShieldCheck className="w-3 h-3 text-[#0F382C]" />
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

          {/* ================= RIGHT COLUMN: 3D SMARTPHONE MOCKUP & FLOATING CARDS ================= */}
          <div className="lg:col-span-5 relative flex justify-center items-center py-6 sm:py-8 [perspective:1200px]">
            {/* Ambient Backlight Glow */}
            <div className="absolute w-80 sm:w-96 h-80 sm:h-96 rounded-full bg-[#00D084]/15 blur-3xl pointer-events-none -z-10" />

            {/* Photorealistic flagship smartphone (iPhone 16 Pro styling, thin titanium bezels, angled in 3D) */}
            <motion.div
              initial={{ opacity: 0, y: 30, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
              className="relative z-20 w-full max-w-[285px] xs:max-w-[325px] sm:max-w-[360px] lg:max-w-[370px] h-[585px] xs:h-[650px] sm:h-[715px] bg-[#1E293B] rounded-[48px] xs:rounded-[52px] p-2.5 xs:p-3.5 shadow-phone border-[4px] border-slate-700/80 transform-gpu lg:[transform:rotateY(-7deg)_rotateX(5deg)] lg:hover:[transform:rotateY(0deg)_rotateX(0deg)] transition-transform duration-700 ease-out mx-auto group/phone"
            >
              {/* Phone Dynamic Island */}
              <div className="absolute top-4 xs:top-5 left-1/2 -translate-x-1/2 w-24 xs:w-28 h-4 xs:h-5 bg-black rounded-full z-30 flex items-center justify-end px-3">
                <div className="w-2 xs:w-2.5 h-2 xs:h-2.5 rounded-full bg-slate-800 border border-slate-700" />
              </div>

              {/* Internal Screen Content */}
              <div className="w-full h-full bg-[#FAFAFA] rounded-[40px] xs:rounded-[44px] overflow-hidden flex flex-col text-slate-800 relative select-none">
                {/* Status Bar */}
                <div className="pt-2.5 xs:pt-3 px-5 xs:px-6 pb-1 flex justify-between items-center text-[10px] xs:text-[11px] font-semibold text-slate-500 z-10 bg-white">
                  <span>9:41</span>
                  <div className="flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-[#00D084] animate-pulse" />
                    <span className="text-[10px]">5G</span>
                  </div>
                </div>

                {/* Mobile App Search & Location Bar */}
                <div className="px-3.5 xs:px-4 pt-1.5 xs:pt-2 pb-2.5 xs:pb-3 bg-white border-b border-slate-100 shadow-xs z-10">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="w-6 xs:w-7 h-6 xs:h-7 rounded-lg bg-[#0F382C] flex items-center justify-center text-white font-bold text-xs shadow-xs">
                        e
                      </div>
                      <div className="text-left">
                        <div className="text-[9px] xs:text-[10px] uppercase font-bold text-slate-400 leading-none">Discover Nearby</div>
                        <div className="text-[11px] xs:text-xs font-bold text-slate-900 flex items-center gap-1 pt-0.5">
                          <MapPin className="w-3 h-3 text-[#0F382C]" />
                          <span>Within 5 km radius</span>
                        </div>
                      </div>
                    </div>
                    <div className="w-6 xs:w-7 h-6 xs:h-7 rounded-full bg-emerald-50 border border-emerald-200/60 flex items-center justify-center text-[#0F382C] text-xs">
                      <Navigation className="w-3 xs:w-3.5 h-3 xs:h-3.5" />
                    </div>
                  </div>

                  {/* Category Filter Pills */}
                  <div className="flex gap-1.5 mt-2.5 xs:mt-3 overflow-x-hidden text-[9px] xs:text-[10px] font-semibold">
                    <span className="px-2.5 xs:px-3 py-1 rounded-full bg-[#0F382C] text-white shadow-xs">All</span>
                    <span className="px-2.5 xs:px-3 py-1 rounded-full bg-slate-100 text-slate-700">Residential</span>
                    <span className="px-2.5 xs:px-3 py-1 rounded-full bg-slate-100 text-slate-700">Land</span>
                    <span className="px-2.5 xs:px-3 py-1 rounded-full bg-slate-100 text-slate-700">Commercial</span>
                  </div>
                </div>

                {/* Interactive Proximity Map Canvas */}
                <div className="relative flex-1 bg-gradient-to-b from-emerald-50/60 via-teal-50/30 to-slate-100 overflow-hidden flex flex-col justify-between">
                  {/* Map Coordinate Dots / Roads Overlay */}
                  <div className="absolute inset-0 bg-[radial-gradient(#0F382C_1px,transparent_1px)] [background-size:16px_16px] opacity-15 pointer-events-none" />

                  {/* Pulsing GPS Center Location */}
                  <div className="absolute top-[38%] left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none">
                    <div className="relative flex items-center justify-center">
                      <div className="w-16 xs:w-20 h-16 xs:h-20 rounded-full bg-emerald-500/20 animate-ping absolute" />
                      <div className="w-10 xs:w-11 h-10 xs:h-11 rounded-full bg-[#0F382C] text-white flex items-center justify-center shadow-lg border-2 border-white">
                        <Navigation className="w-4 h-4 transform -rotate-45" />
                      </div>
                    </div>
                  </div>

                  {/* Interactive Property Map Pins with Pricing Badges (₹ Lakhs) */}
                  <div className="absolute top-4 xs:top-6 left-3 xs:left-5 bg-white/95 backdrop-blur-xs px-2 xs:px-2.5 py-1 rounded-full shadow-md text-[9px] xs:text-[10px] font-bold text-slate-900 border border-emerald-300 flex items-center gap-1.5 transform hover:scale-105 transition-transform">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#00D084]" />
                    <span>Villa • 1.2 km</span>
                    <span className="bg-emerald-50 text-[#0F382C] px-1 rounded font-extrabold">₹48 L</span>
                  </div>

                  <div className="absolute top-12 xs:top-14 right-3 xs:right-5 bg-white/95 backdrop-blur-xs px-2 xs:px-2.5 py-1 rounded-full shadow-md text-[9px] xs:text-[10px] font-bold text-slate-900 border border-teal-300 flex items-center gap-1.5 transform hover:scale-105 transition-transform">
                    <span className="w-1.5 h-1.5 rounded-full bg-teal-600" />
                    <span>Plot • 650m</span>
                    <span className="bg-teal-50 text-teal-800 px-1 rounded font-extrabold">₹25 L</span>
                  </div>

                  <div className="absolute top-28 xs:top-32 left-4 xs:left-6 bg-white/95 backdrop-blur-xs px-2 xs:px-2.5 py-1 rounded-full shadow-md text-[9px] xs:text-[10px] font-bold text-slate-900 border border-slate-300 flex items-center gap-1.5 transform hover:scale-105 transition-transform">
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-500" />
                    <span>Shop • 2.1 km</span>
                    <span className="bg-amber-50 text-amber-900 px-1 rounded font-extrabold">₹18k/mo</span>
                  </div>

                  {/* Floating Luxury Villa Card at Bottom of Map */}
                  <div className="mt-auto relative z-20 p-2.5 xs:p-3">
                    <div className="bg-white/95 backdrop-blur-md rounded-2xl p-2.5 xs:p-3 shadow-premium border border-slate-200/90 text-left space-y-2">
                      <div className="flex items-center justify-between text-[10px] xs:text-[11px]">
                        <span className="font-bold text-slate-900 flex items-center gap-1">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#00D084]" />
                          Nearby Listings (14 found)
                        </span>
                        <span className="text-[#0F382C] font-semibold text-[9px] xs:text-[10px]">Tap to view</span>
                      </div>

                      <div className="flex items-center gap-2.5">
                        <div className="relative w-14 xs:w-16 h-14 xs:h-16 rounded-xl overflow-hidden bg-slate-100 shrink-0">
                          <img
                            src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=300&q=80"
                            alt="Luxury Villa"
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
                            <span className="text-[9px] font-bold text-[#0F382C] uppercase">Verified Villa</span>
                            <span className="text-[11px] xs:text-xs font-extrabold text-[#0F382C]">₹48 Lakh</span>
                          </div>
                          <h4 className="text-[11px] xs:text-xs font-bold text-slate-900 truncate">3 BHK Luxury Independent Home</h4>
                          <p className="text-[9px] xs:text-[10px] text-slate-500 truncate">1,850 sq.ft • Kakkanad, Kochi</p>
                          <div className="flex items-center justify-between text-[8px] xs:text-[9px] text-slate-600 pt-0.5">
                            <span className="flex items-center gap-1 font-semibold text-[#0F382C]">
                              <Check className="w-2.5 h-2.5 text-[#00D084]" />
                              <span>Direct Owner • 0% Fee</span>
                            </span>
                            <span className="font-mono text-[8px] text-emerald-800 bg-emerald-50 px-1 py-0.5 rounded font-bold">
                              8V43+XP Kochi
                            </span>
                          </div>
                        </div>
                      </div>

                      {/* Direct "Call Owner" Button */}
                      <div className="pt-1 border-t border-slate-100 flex items-center justify-between">
                        <span className="text-[9px] text-slate-500 font-medium">Ready to inspect</span>
                        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-[#0F382C] hover:bg-[#072018] text-white text-[9px] xs:text-[10px] font-bold shadow-xs">
                          <Phone className="w-2.5 h-2.5 text-[#00D084]" />
                          <span>Call Owner</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Bottom Navigation Bar Mock */}
                  <div className="pt-1.5 pb-2 border-t border-slate-100 bg-white flex justify-around text-slate-400 text-[9px] xs:text-[10px] font-semibold">
                    <div className="flex flex-col items-center text-[#0F382C]">
                      <Compass className="w-3.5 xs:w-4 h-3.5 xs:h-4" />
                      <span>Nearby</span>
                    </div>
                    <div className="flex flex-col items-center">
                      <MapPin className="w-3.5 xs:w-4 h-3.5 xs:h-4" />
                      <span>Map</span>
                    </div>
                    <div className="flex flex-col items-center">
                      <ShieldCheck className="w-3.5 xs:w-4 h-3.5 xs:h-4" />
                      <span>Saved</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* ================= ANTIGRAVITY FLOATING FROSTED GLASS NOTIFICATION TAGS ================= */}
            {/* Tag 1 (Top-Left): "Verified Owner - 0% Fee" with green checkmark */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.55, duration: 0.6 }}
              className="absolute top-24 -left-6 lg:-left-12 xl:-left-16 z-30 animate-float-slow hidden lg:flex items-center gap-3 bg-white/90 backdrop-blur-xl p-3 sm:p-3.5 rounded-2xl shadow-premium border border-white/80 text-left pointer-events-none"
            >
              <div className="w-9 h-9 rounded-xl bg-emerald-50 border border-emerald-200/60 text-[#0F382C] flex items-center justify-center font-bold">
                <Check className="w-4 h-4 text-[#00D084] stroke-[3]" />
              </div>
              <div>
                <div className="text-xs font-bold text-slate-900">Verified Owner</div>
                <div className="text-[10px] sm:text-[11px] font-semibold text-[#0F382C]">0% Brokerage Fee</div>
              </div>
            </motion.div>

            {/* Tag 2 (Top-Right): "Within 1.5 km • 3 Plots Available" with radar pulse graphic */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.65, duration: 0.6 }}
              className="absolute top-44 -right-4 lg:-right-8 xl:-right-12 z-30 animate-float-delayed hidden lg:flex items-center gap-3 bg-white/90 backdrop-blur-xl p-3 sm:p-3.5 rounded-2xl shadow-premium border border-white/80 text-left pointer-events-none"
            >
              <div className="w-9 h-9 rounded-xl bg-emerald-50 border border-emerald-200/60 text-[#0F382C] flex items-center justify-center relative font-bold">
                <span className="w-2.5 h-2.5 rounded-full bg-[#00D084] animate-ping absolute" />
                <span className="w-2 h-2 rounded-full bg-[#00D084] relative" />
              </div>
              <div>
                <div className="text-xs font-extrabold text-slate-900">Within 1.5 km</div>
                <div className="text-[10px] sm:text-[11px] font-semibold text-emerald-700">3 Plots Available</div>
              </div>
            </motion.div>

            {/* Mobile & Tablet Pill Tags Strip */}
            <div className="flex lg:hidden flex-wrap items-center justify-center gap-2 mt-5 z-20 w-full px-2">
              <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/90 backdrop-blur-md border border-slate-200/80 shadow-xs text-xs font-semibold text-slate-800">
                <Check className="w-3.5 h-3.5 text-[#00D084] stroke-[3]" />
                <span>Verified Owner • 0% Fee</span>
              </div>
              <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/90 backdrop-blur-md border border-slate-200/80 shadow-xs text-xs font-semibold text-slate-800">
                <span className="w-2 h-2 rounded-full bg-[#00D084]" />
                <span>Within 1.5 km • 3 Plots Available</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
