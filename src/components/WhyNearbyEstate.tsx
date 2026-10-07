import React from 'react';
import { motion } from 'framer-motion';
import { Navigation, Layers, Smartphone, MapPin, CheckCircle2, Sparkles } from 'lucide-react';

export const WhyNearbyEstate: React.FC = () => {
  return (
    <section id="why-us" className="py-16 sm:py-24 lg:py-32 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 lg:mb-20 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 text-brand-800 text-xs font-bold uppercase tracking-wider">
            <span>The NearbyEstate Advantage</span>
          </div>
          <h2 className="text-2xl xs:text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
            Property Search, Made Simple
          </h2>
          <p className="text-sm sm:text-base lg:text-lg text-slate-600 font-normal">
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
            className="lg:col-span-7 bg-slate-900 text-white rounded-[28px] sm:rounded-[36px] p-6 sm:p-10 lg:p-12 relative overflow-hidden flex flex-col justify-between shadow-premium border border-slate-800"
          >
            {/* Background Ambience */}
            <div className="absolute top-0 right-0 w-80 h-80 bg-brand-700/20 rounded-full blur-3xl pointer-events-none" />
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
                <div className="bg-slate-800/80 rounded-2xl p-3.5 sm:p-4 border border-slate-700/80 flex flex-col xs:flex-row items-start xs:items-center justify-between gap-3 sm:gap-4">
                  <div className="flex items-center gap-3">
                    <div className="w-9 sm:w-10 h-9 sm:h-10 rounded-xl bg-brand-800 text-white flex items-center justify-center font-bold shrink-0">
                      <MapPin className="w-4 sm:w-5 h-4 sm:h-5 text-emerald-400" />
                    </div>
                    <div className="text-left">
                      <div className="text-xs font-bold text-white">Live Proximity Engine</div>
                      <div className="text-[10px] sm:text-[11px] text-emerald-400 font-mono">Radius: 0 to 15 km search</div>
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    <span className="text-[11px] sm:text-xs bg-slate-950 px-2.5 sm:px-3 py-1 rounded-lg text-slate-300 font-mono border border-slate-800 whitespace-nowrap">
                      1.2 km • 2.5 km • 4.0 km
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-6 sm:pt-8 border-t border-slate-800 flex items-center justify-between text-xs text-emerald-400 font-semibold relative z-10">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 shrink-0" />
                <span>Accurate Device Location Matching</span>
              </div>
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse shrink-0" />
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
              className="bg-emerald-50/70 rounded-3xl p-5 sm:p-7 border border-emerald-200/90 hover:border-emerald-300 hover:bg-emerald-50/90 hover:shadow-soft transition-all duration-300 text-left flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center gap-3.5 mb-3">
                  <div className="w-10 sm:w-12 h-10 sm:h-12 rounded-2xl bg-white border border-emerald-200 shadow-xs flex items-center justify-center text-emerald-800 shrink-0">
                    <Sparkles className="w-5 sm:w-6 h-5 sm:h-6 text-emerald-600" />
                  </div>
                  <div>
                    <h4 className="text-base sm:text-lg font-bold text-slate-900">Unlimited Ads for FREE</h4>
                    <span className="text-[10px] sm:text-[11px] font-semibold text-emerald-800 bg-emerald-100/90 px-2 py-0.5 rounded-md">
                      100% Free • ₹0 Listing Fee
                    </span>
                  </div>
                </div>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
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
              className="bg-slate-50/80 rounded-3xl p-5 sm:p-7 border border-slate-200/80 hover:border-emerald-200 hover:bg-white hover:shadow-soft transition-all duration-300 text-left flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center gap-3.5 mb-3">
                  <div className="w-10 sm:w-12 h-10 sm:h-12 rounded-2xl bg-white border border-slate-200/70 shadow-xs flex items-center justify-center text-brand-800 shrink-0">
                    <Layers className="w-5 sm:w-6 h-5 sm:h-6 text-brand-700" />
                  </div>
                  <div>
                    <h4 className="text-base sm:text-lg font-bold text-slate-900">Multiple Types</h4>
                    <span className="text-[10px] sm:text-[11px] font-semibold text-emerald-700">Unified Catalog</span>
                  </div>
                </div>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
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
              className="bg-slate-50/80 rounded-3xl p-5 sm:p-7 border border-slate-200/80 hover:border-emerald-200 hover:bg-white hover:shadow-soft transition-all duration-300 text-left flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center gap-3.5 mb-3">
                  <div className="w-10 sm:w-12 h-10 sm:h-12 rounded-2xl bg-white border border-slate-200/70 shadow-xs flex items-center justify-center text-brand-800 shrink-0">
                    <Smartphone className="w-5 sm:w-6 h-5 sm:h-6 text-brand-700" />
                  </div>
                  <div>
                    <h4 className="text-base sm:text-lg font-bold text-slate-900">Play Store & Web App</h4>
                    <span className="text-[10px] sm:text-[11px] font-semibold text-emerald-700">Android & Browser</span>
                  </div>
                </div>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
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
