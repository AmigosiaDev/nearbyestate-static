import React from 'react';
import { motion } from 'framer-motion';
import { Navigation, Layers, Smartphone, MapPin, CheckCircle2, Sparkles } from 'lucide-react';

export const WhyNearbyEstate: React.FC = () => {
  return (
    <section id="why-us" className="py-16 sm:py-24 lg:py-32 bg-[#071F17] relative overflow-hidden">
      {/* ================= CLEAN GPS MAP & COORDINATE GRID BACKGROUND ================= */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
        {/* Continuous Forest Green Vertical Gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#071F17] via-[#0A261D]/90 to-[#071F17]" />

        {/* Orthographic Land Parcel Topography Subtle Blend */}
        <img
          src="/images/backgrounds/why-us-bg.jpg"
          alt="Topographic land plots from above"
          className="w-full h-full object-cover opacity-10 filter brightness-75 contrast-125 mix-blend-luminosity"
        />

        {/* Soft Ambient Emerald Glows */}
        <div className="absolute top-1/4 left-1/3 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#00D084]/10 rounded-full blur-3xl pointer-events-none" />

        {/* Dotted Location Map Grid with Radial Fade Mask */}
        <div className="absolute inset-0 map-dotted-grid opacity-20 [mask-image:radial-gradient(ellipse_at_center,black_55%,transparent_85%)]" />

        {/* Concentric GPS Radius Rings (1km, 2.5km, 5km) */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[420px] h-[420px] rounded-full border border-dashed border-emerald-400/20 pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[720px] h-[720px] rounded-full border border-dashed border-emerald-400/15 pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1050px] h-[1050px] rounded-full border border-dashed border-emerald-400/10 pointer-events-none" />

        {/* Subtle Vector Road Outlines & GPS Coordinate Crosshairs */}
        <svg
          className="absolute inset-0 w-full h-full opacity-15 stroke-emerald-400"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M-100 200 Q 350 140 700 240 T 1400 180 T 2100 220" strokeWidth="2" />
          <path d="M-100 500 Q 450 420 950 520 T 1750 460 T 2200 510" strokeWidth="1.8" />
          <path d="M400 -50 Q 380 320 420 650 T 390 1200" strokeWidth="1.8" />
          <path d="M900 -50 Q 920 450 870 800 T 910 1200" strokeWidth="1.8" />
          <path d="M1450 -50 Q 1430 380 1470 740 T 1440 1200" strokeWidth="1.8" />
          {/* Coordinate Crosshairs */}
          <g strokeWidth="1.5">
            <path d="M300 220 v 20 M290 230 h 20" />
            <path d="M880 200 v 20 M870 210 h 20" />
            <path d="M1400 280 v 20 M1390 290 h 20" />
            <path d="M550 560 v 20 M540 570 h 20" />
            <path d="M1150 580 v 20 M1140 590 h 20" />
          </g>
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 lg:mb-20 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/15 border border-emerald-400/25 text-emerald-300 text-xs font-bold uppercase tracking-wider">
            <span>The NearbyEstate Advantage</span>
          </div>
          <h2 className="text-2xl xs:text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Property Search, Made Simple
          </h2>
          <p className="text-sm sm:text-base lg:text-lg text-emerald-100/75 font-normal">
            Built specifically to solve the frustration of traditional real-estate websites by putting nearby physical proximity first.
          </p>
        </div>

        {/* Asymmetric Layout: 1 Large Feature Card + 3 Supporting Cards (1-col on mobile, 3-col on tablet, 1-col on desktop) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-stretch">
          {/* LARGE FEATURE CARD: Nearby Discovery */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-7 bg-gradient-to-br from-[#0F2E23] via-[#0A261D] to-[#071B13] text-white rounded-[28px] sm:rounded-[36px] p-6 sm:p-10 lg:p-12 relative overflow-hidden flex flex-col justify-between shadow-2xl border border-emerald-500/30"
          >
            {/* Background Ambience */}
            <div className="absolute top-0 right-0 w-80 h-80 bg-[#00D084]/15 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute inset-0 coordinate-grid opacity-15 pointer-events-none" />

            <div className="space-y-5 sm:space-y-6 relative z-10 text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 text-xs font-bold uppercase tracking-wider border border-emerald-500/30">
                <Navigation className="w-3.5 h-3.5" />
                <span>Core Innovation</span>
              </div>

              <h3 className="text-2xl xs:text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight">
                Nearby Discovery
              </h3>

              <p className="text-sm sm:text-base lg:text-lg text-slate-300 max-w-lg leading-relaxed font-normal">
                Discover properties plotted around your location. Instead of wading through hundreds of distant, irrelevant listings, see what is physically close to you right now.
              </p>

              {/* Visual Radar Demonstration inside the card */}
              <div className="pt-2 sm:pt-4 pb-2">
                <div className="bg-[#051811]/90 rounded-2xl p-3.5 sm:p-4 border border-emerald-500/25 flex flex-col xs:flex-row items-start xs:items-center justify-between gap-3 sm:gap-4">
                  <div className="flex items-center gap-3">
                    <div className="w-9 sm:w-10 h-9 sm:h-10 rounded-xl bg-emerald-500/20 text-white flex items-center justify-center font-bold shrink-0 border border-emerald-400/30">
                      <MapPin className="w-4 sm:w-5 h-4 sm:h-5 text-[#00D084]" />
                    </div>
                    <div className="text-left">
                      <div className="text-xs font-bold text-white">Live Proximity Engine</div>
                      <div className="text-[10px] sm:text-[11px] text-[#00D084] font-mono">Radius: 0 to 15 km search</div>
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    <span className="text-[11px] sm:text-xs bg-[#030E0A] px-2.5 sm:px-3 py-1 rounded-lg text-emerald-300 font-mono border border-emerald-500/30 whitespace-nowrap">
                      1.2 km • 2.5 km • 4.0 km
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-6 sm:pt-8 border-t border-emerald-500/20 flex items-center justify-between text-xs text-[#00D084] font-semibold relative z-10">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 shrink-0" />
                <span>Accurate Device Location Matching</span>
              </div>
              <span className="w-2 h-2 rounded-full bg-[#00D084] animate-pulse shrink-0" />
            </div>
          </motion.div>

          {/* 3 SUPPORTING CARDS: Responsive Tablet 3-col Grid */}
          <div className="lg:col-span-5 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-1 gap-5 sm:gap-6">
            {/* Supporting Card 1: Unlimited Ads for FREE (Key USP from old site) */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              whileHover={{ y: -3 }}
              className="bg-gradient-to-br from-[#0D281E] to-[#071F17] rounded-3xl p-5 sm:p-7 border border-[#00D084]/35 hover:border-[#00D084] hover:shadow-xl transition-all duration-300 text-left flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center gap-3.5 mb-3">
                  <div className="w-10 sm:w-12 h-10 sm:h-12 rounded-2xl bg-[#00D084]/15 border border-[#00D084]/30 shadow-xs flex items-center justify-center text-[#00D084] shrink-0">
                    <Sparkles className="w-5 sm:w-6 h-5 sm:h-6 text-[#00D084]" />
                  </div>
                  <div>
                    <h4 className="text-base sm:text-lg font-bold text-white">Unlimited Ads for FREE</h4>
                    <span className="text-[10px] sm:text-[11px] font-semibold text-emerald-300 bg-emerald-500/20 px-2 py-0.5 rounded-md border border-emerald-500/30">
                      100% Free • ₹0 Listing Fee
                    </span>
                  </div>
                </div>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
                  Post and advertise as many properties as you need with zero listing fees, zero subscription paywalls, and no broker cuts.
                </p>
              </div>
            </motion.div>

            {/* Supporting Card 2: Multiple Property Types */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              whileHover={{ y: -3 }}
              className="bg-gradient-to-br from-[#0D281E] to-[#071F17] rounded-3xl p-5 sm:p-7 border border-emerald-500/20 hover:border-emerald-400/40 hover:shadow-xl transition-all duration-300 text-left flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center gap-3.5 mb-3">
                  <div className="w-10 sm:w-12 h-10 sm:h-12 rounded-2xl bg-emerald-500/15 border border-emerald-500/30 shadow-xs flex items-center justify-center text-emerald-400 shrink-0">
                    <Layers className="w-5 sm:w-6 h-5 sm:h-6 text-emerald-400" />
                  </div>
                  <div>
                    <h4 className="text-base sm:text-lg font-bold text-white">Multiple Types</h4>
                    <span className="text-[10px] sm:text-[11px] font-semibold text-emerald-300">Unified Catalog</span>
                  </div>
                </div>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
                  Explore residential houses, apartments, land plots, commercial buildings, retail shops, and farm land all under one roof.
                </p>
              </div>
            </motion.div>

            {/* Supporting Card 3: Mobile & Web Accessibility */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              whileHover={{ y: -3 }}
              className="bg-gradient-to-br from-[#0D281E] to-[#071F17] rounded-3xl p-5 sm:p-7 border border-emerald-500/20 hover:border-emerald-400/40 hover:shadow-xl transition-all duration-300 text-left flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center gap-3.5 mb-3">
                  <div className="w-10 sm:w-12 h-10 sm:h-12 rounded-2xl bg-emerald-500/15 border border-emerald-500/30 shadow-xs flex items-center justify-center text-emerald-400 shrink-0">
                    <Smartphone className="w-5 sm:w-6 h-5 sm:h-6 text-emerald-400" />
                  </div>
                  <div>
                    <h4 className="text-base sm:text-lg font-bold text-white">Play Store & Web App</h4>
                    <span className="text-[10px] sm:text-[11px] font-semibold text-emerald-300">Android & Browser</span>
                  </div>
                </div>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
                  Enjoy blazing-fast on-device GPS discovery on Android, or explore instantly from any desktop or iPhone browser without installing.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
