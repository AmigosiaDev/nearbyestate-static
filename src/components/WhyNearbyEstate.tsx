import React from 'react';
import { motion } from 'framer-motion';
import { Layers, Smartphone, MapPin } from 'lucide-react';

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
            Property Search & Made Simple
          </h2>
          <p className="text-sm sm:text-base lg:text-lg text-emerald-100/75 font-normal">
            Built to help you find properties near you, easily.
          </p>
        </div>

        {/* Centered Vertical Stack: 3 Simple, Balanced Cards */}
        <div className="max-w-2xl sm:max-w-3xl mx-auto flex flex-col gap-4 sm:gap-5">
          {/* 1. Nearby Discovery (Turned into a short box like the rest) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.1 }}
            whileHover={{ y: -3 }}
            className="bg-gradient-to-br from-[#0D281E] via-[#0A261D] to-[#071F17] rounded-3xl p-5 sm:p-7 border border-[#00D084]/30 hover:border-[#00D084] hover:shadow-2xl hover:shadow-[#00D084]/10 transition-all duration-300 text-left"
          >
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-3">
              <div className="flex items-center gap-3.5">
                <div className="w-11 h-11 rounded-2xl bg-[#00D084]/15 border border-[#00D084]/30 shadow-xs flex items-center justify-center text-[#00D084] shrink-0">
                  <MapPin className="w-5 h-5 text-[#00D084]" />
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl font-bold text-white">Find What's Near You</h3>
                  <span className="text-[10px] sm:text-[11px] font-semibold text-emerald-300 bg-emerald-500/20 px-2 py-0.5 rounded-md border border-emerald-500/30">
                    Near You
                  </span>
                </div>
              </div>

              {/* Live Search Radius Tag */}
              <div className="hidden xs:flex items-center gap-2 self-start sm:self-auto bg-[#051811] px-3 py-1.5 rounded-xl border border-emerald-500/20 text-[11px] font-mono text-emerald-300">
                <span className="w-1.5 h-1.5 rounded-full bg-[#00D084] animate-pulse" />
                <span>1 km • 3 km • 5 km nearby</span>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal sm:pl-14">
              See houses, land, and shops close to your location instead of places far away.
            </p>
          </motion.div>

          {/* 2. Multiple Types */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.15 }}
            whileHover={{ y: -3 }}
            className="bg-gradient-to-br from-[#0D281E] via-[#0A261D] to-[#071F17] rounded-3xl p-5 sm:p-7 border border-emerald-500/25 hover:border-emerald-400/50 hover:shadow-2xl transition-all duration-300 text-left"
          >
            <div className="flex items-center gap-3.5 mb-3">
              <div className="w-11 h-11 rounded-2xl bg-emerald-500/15 border border-emerald-500/30 shadow-xs flex items-center justify-center text-emerald-400 shrink-0">
                <Layers className="w-5 h-5 text-emerald-400" />
              </div>
              <div>
                <h3 className="text-lg sm:text-xl font-bold text-white">All Property Types</h3>
                <span className="text-[10px] sm:text-[11px] font-semibold text-emerald-300 bg-emerald-500/20 px-2 py-0.5 rounded-md border border-emerald-500/30">
                  All In One
                </span>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal sm:pl-14">
              Houses, apartments, plots, shops, and offices — all in one simple place.
            </p>
          </motion.div>

          {/* 3. Play Store & Web App */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.2 }}
            whileHover={{ y: -3 }}
            className="bg-gradient-to-br from-[#0D281E] via-[#0A261D] to-[#071F17] rounded-3xl p-5 sm:p-7 border border-emerald-500/25 hover:border-emerald-400/50 hover:shadow-2xl transition-all duration-300 text-left"
          >
            <div className="flex items-center gap-3.5 mb-3">
              <div className="w-11 h-11 rounded-2xl bg-emerald-500/15 border border-emerald-500/30 shadow-xs flex items-center justify-center text-emerald-400 shrink-0">
                <Smartphone className="w-5 h-5 text-emerald-400" />
              </div>
              <div>
                <h3 className="text-lg sm:text-xl font-bold text-white">Use on Mobile or Web</h3>
                <span className="text-[10px] sm:text-[11px] font-semibold text-emerald-300 bg-emerald-500/20 px-2 py-0.5 rounded-md border border-emerald-500/30">
                  App & Website
                </span>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal sm:pl-14">
              Download on Google Play Store, or browse directly on our website without installing.
            </p>
          </motion.div>
        </div>

        {/* Bottom Tagline Banner */}
        <div className="mt-8 sm:mt-10 pt-6 border-t border-emerald-500/20 text-center">
          <p className="text-xs sm:text-sm font-semibold text-[#00D084] tracking-wide uppercase">
            Less Searching. More Relevant Properties. Direct Connection.
          </p>
        </div>
      </div>
    </section>
  );
};
