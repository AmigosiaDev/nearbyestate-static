import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, CheckCircle2 } from 'lucide-react';
import { USE_CASES, BRAND_CONFIG } from '../data/websiteData';

export const UseCases: React.FC = () => {
  const buyCase = USE_CASES.find((c) => c.id === 'buy') || USE_CASES[0];
  const otherCases = USE_CASES.filter((c) => c.id !== 'buy');

  return (
    <section id="use-cases" className="py-16 sm:py-24 lg:py-32 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 lg:mb-20 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 text-brand-800 text-xs font-bold uppercase tracking-wider">
            <span>Flexible Real Estate Use Cases</span>
          </div>
          <h2 className="text-2xl xs:text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
            Whatever You're Looking For, Start Here.
          </h2>
          <p className="text-sm sm:text-base lg:text-lg text-slate-600 font-normal">
            Whether you are buying your first home, renting an office, selling land, or leasing retail premises.
          </p>
        </div>

        {/* Asymmetric Editorial-Style Layout: Large 'Buy' Card + 3 Stacked Cards (3-col on tablet) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-stretch">
          {/* ================= LARGE 'BUY' CARD (7 COLUMNS) ================= */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            whileHover={{ y: -4 }}
            className="lg:col-span-7 bg-slate-900 text-white rounded-[28px] sm:rounded-[36px] overflow-hidden shadow-premium border border-slate-800 flex flex-col justify-between group"
          >
            {/* Image Header with Cinematic Height */}
            <div className="relative h-56 xs:h-64 sm:h-80 w-full overflow-hidden bg-slate-800">
              <img
                src={buyCase.image}
                alt={buyCase.title}
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                onError={(e) => {
                  e.currentTarget.src = buyCase.fallbackImage;
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/30 to-transparent" />

              <div className="absolute top-4 sm:top-6 left-4 sm:left-6 bg-white/95 backdrop-blur-xs px-3.5 sm:px-4 py-1.5 rounded-full shadow-md">
                <span className="text-[11px] sm:text-xs font-black text-brand-900 uppercase tracking-wider">
                  Featured • {buyCase.title}
                </span>
              </div>

              <div className="absolute bottom-4 sm:bottom-5 left-4 sm:left-6 right-4 sm:right-6">
                <span className="text-xs sm:text-sm font-semibold text-emerald-300">
                  {buyCase.subtitle}
                </span>
              </div>
            </div>

            {/* Content Body */}
            <div className="p-6 sm:p-8 lg:p-10 flex-1 flex flex-col justify-between space-y-5 sm:space-y-6 text-left">
              <div className="space-y-2 sm:space-y-3">
                <h3 className="text-xl xs:text-2xl sm:text-3xl font-extrabold text-white">
                  Buy Homes, Land & Commercial Properties
                </h3>
                <p className="text-xs sm:text-sm lg:text-base text-slate-300 leading-relaxed font-normal max-w-xl">
                  {buyCase.description} Search nearby plots, independent villas, and commercial real estate with clear distance indicators and direct seller contact.
                </p>
              </div>

              <div className="pt-5 sm:pt-6 border-t border-slate-800 flex flex-col xs:flex-row items-start xs:items-center justify-between gap-3">
                <div className="flex items-center gap-2 text-xs font-semibold text-emerald-400">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Explore Listings in NearbyEstate</span>
                </div>
                <a
                  href={BRAND_CONFIG.playStoreUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full xs:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-white text-slate-900 hover:bg-slate-100 font-bold text-xs transition-colors"
                >
                  <span>Find Properties</span>
                  <ArrowUpRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </motion.div>

          {/* ================= 3 SUPPORTING CARDS: Responsive Tablet 3-col Grid ================= */}
          <div className="lg:col-span-5 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-1 gap-5 sm:gap-6">
            {otherCases.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -3 }}
                className="group bg-slate-50/80 rounded-3xl p-4 sm:p-6 border border-slate-200/80 hover:bg-white hover:border-emerald-200 hover:shadow-soft transition-all duration-300 flex flex-col xs:flex-row items-start xs:items-center gap-4 sm:gap-5 text-left"
              >
                {/* Thumbnail Image */}
                <div className="w-full xs:w-24 sm:w-28 h-36 xs:h-24 sm:h-28 rounded-2xl overflow-hidden shrink-0 bg-slate-200 relative">
                  <img
                    src={item.image}
                    alt={item.title}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    onError={(e) => {
                      e.currentTarget.src = item.fallbackImage;
                    }}
                  />
                  <div className="absolute top-2 left-2 bg-black/60 px-2 py-0.5 rounded text-[9px] font-bold text-white uppercase">
                    {item.title}
                  </div>
                </div>

                {/* Details */}
                <div className="flex-1 min-w-0 space-y-1 w-full">
                  <h4 className="text-sm sm:text-base font-bold text-slate-900 group-hover:text-brand-800 transition-colors">
                    {item.title}
                  </h4>
                  <p className="text-[11px] sm:text-xs text-slate-500 font-medium">
                    {item.subtitle}
                  </p>
                  <p className="text-xs text-slate-600 leading-relaxed line-clamp-2 font-normal">
                    {item.description}
                  </p>

                  <div className="pt-1.5 flex items-center gap-1 text-[11px] font-bold text-emerald-700">
                    <span>Available on Mobile</span>
                    <ArrowUpRight className="w-3 h-3 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
