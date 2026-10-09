import React from 'react';
import { motion } from 'framer-motion';
import { Home, MapPin, Building2, ShoppingBag, Briefcase, Sprout, ArrowUpRight } from 'lucide-react';
import { PROPERTY_CATEGORIES, BRAND_CONFIG } from '../data/websiteData';

const iconMap: Record<string, React.ReactNode> = {
  Home: <Home className="w-5 h-5 text-brand-700" />,
  MapPin: <MapPin className="w-5 h-5 text-brand-700" />,
  Building2: <Building2 className="w-5 h-5 text-brand-700" />,
  ShoppingBag: <ShoppingBag className="w-5 h-5 text-brand-700" />,
  Briefcase: <Briefcase className="w-5 h-5 text-brand-700" />,
  Sprout: <Sprout className="w-5 h-5 text-brand-700" />,
};

export const PropertyCategories: React.FC = () => {
  return (
    <section id="categories" className="py-16 sm:py-24 lg:py-28 bg-[#071F17] relative overflow-hidden">
      {/* ================= SEAMLESS MATCHING HERO FOREST GREEN BACKGROUND ================= */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
        {/* Soft top gradient to ensure 100% continuous flow from Hero */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#071F17] via-[#0A261D] to-[#071F17]" />

        {/* Ambient Emerald & Mint Glows */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] sm:w-[950px] h-[500px] bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute top-16 left-1/4 w-80 h-80 bg-[#00D084]/10 rounded-full blur-2xl pointer-events-none" />
        <div className="absolute bottom-16 right-1/4 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl pointer-events-none" />

        {/* Dotted Grid with Soft Vignette Radial Mask */}
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
          <path d="M-100 150 Q 300 200 600 120 T 1300 250 T 2000 180" strokeWidth="2" />
          <path d="M-100 450 Q 400 380 900 480 T 1700 420 T 2200 490" strokeWidth="1.8" />
          <path d="M300 -50 Q 320 300 280 600 T 350 1100" strokeWidth="1.8" />
          <path d="M850 -50 Q 820 400 880 750 T 830 1100" strokeWidth="1.8" />
          <path d="M1400 -50 Q 1420 350 1380 700 T 1450 1100" strokeWidth="1.8" />
          {/* Coordinate Crosshairs */}
          <g strokeWidth="1.5">
            <path d="M250 240 v 20 M240 250 h 20" />
            <path d="M820 180 v 20 M810 190 h 20" />
            <path d="M1350 260 v 20 M1340 270 h 20" />
            <path d="M500 520 v 20 M490 530 h 20" />
            <path d="M1100 540 v 20 M1090 550 h 20" />
          </g>
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 space-y-3.5">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-500/15 border border-emerald-400/25 text-emerald-300 text-[11px] font-extrabold uppercase tracking-wider">
            <span className="w-1.5 h-1.5 rounded-full bg-[#00D084]" />
            <span>Property Categories</span>
          </div>
          <h2 className="text-2xl xs:text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
            Find a Property That Fits You
          </h2>
          <p className="text-sm sm:text-base lg:text-lg text-emerald-100/75 font-normal max-w-2xl mx-auto leading-relaxed">
            Explore homes, land, and commercial spaces near you
          </p>
        </div>

        {/* Categories: Desktop Grid (3-col), Tablet (2-col), Mobile Touch-Horizontal Scroll */}
        <div className="flex sm:grid sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 overflow-x-auto sm:overflow-visible pb-4 sm:pb-0 snap-x snap-mandatory no-scrollbar -mx-4 px-4 sm:mx-0 sm:px-0">
          {PROPERTY_CATEGORIES.map((cat, index) => (
            <motion.div
              key={cat.id}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.45, delay: index * 0.06 }}
              whileHover={{ y: -5 }}
              className="min-w-[260px] xs:min-w-[280px] sm:min-w-0 snap-center group relative bg-white rounded-[26px] border border-slate-200/70 hover:border-emerald-300 overflow-hidden shadow-xs hover:shadow-xl hover:shadow-emerald-950/5 transition-all duration-300 flex flex-col justify-between"
            >
              {/* Category Image Header */}
              <div className="relative h-48 w-full overflow-hidden bg-slate-100">
                <img
                  src={cat.image}
                  alt={cat.name}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  onError={(e) => {
                    e.currentTarget.src = cat.fallbackImage;
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-slate-950/10 to-transparent" />

                {/* Badge with Icon */}
                <div className="absolute top-4 left-4 flex items-center gap-2 bg-white/95 backdrop-blur-xs px-3 py-1.5 rounded-full shadow-xs">
                  {iconMap[cat.iconName]}
                  <span className="text-xs font-bold text-slate-900">{cat.name}</span>
                </div>

                <div className="absolute bottom-3 left-4 text-white text-xs font-medium opacity-90">
                  {cat.count}
                </div>
              </div>

              {/* Card Content */}
              <div className="p-6 flex-1 flex flex-col justify-between space-y-4 text-left">
                <div className="space-y-1.5">
                  <h3 className="text-xl font-bold text-slate-900 group-hover:text-brand-800 transition-colors">
                    {cat.name}
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed font-normal">
                    {cat.description}
                  </p>
                </div>

                <div className="pt-3.5 border-t border-slate-100/90 flex items-center justify-between">
                  <a
                    href={BRAND_CONFIG.playStoreUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-[#0F382C] hover:text-emerald-600 transition-colors group/link"
                  >
                    <span>Find on Mobile App</span>
                    <ArrowUpRight className="w-3.5 h-3.5 text-emerald-600 transition-transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Mobile Touch Swipe Cue */}
        <div className="flex sm:hidden items-center justify-center gap-1.5 mt-4 text-xs font-semibold text-emerald-300/70">
          <span>Swipe to explore all categories</span>
          <span className="text-emerald-400">→</span>
        </div>
      </div>
    </section>
  );
};
