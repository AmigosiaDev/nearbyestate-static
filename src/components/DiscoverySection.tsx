import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Navigation, Compass, Sparkles, Check, SlidersHorizontal, ArrowUpRight, MapPin, Copy, ExternalLink } from 'lucide-react';
import { BRAND_CONFIG } from '../data/websiteData';

interface DemoProperty {
  id: string;
  name: string;
  category: string;
  distance: number; // in km
  price: string;
  specs: string;
  color: string;
  position: { top: string; left: string };
  image: string;
  plusCode: string;
  city: string;
}

const DEMO_PROPERTIES: DemoProperty[] = [
  {
    id: 'prop-1',
    name: '3 BHK Modern Independent Villa',
    category: 'Residential',
    distance: 1.4,
    price: '₹48 Lakh',
    specs: '1,850 sq.ft • 4.5 Cents',
    color: 'emerald',
    position: { top: '22%', left: '22%' },
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=400&q=80',
    plusCode: '8V43+XP Kochi',
    city: 'Kakkanad, Kochi',
  },
  {
    id: 'prop-2',
    name: 'Prime Retail Storefront / Shop',
    category: 'Commercial',
    distance: 2.8,
    price: '₹22,000 / mo',
    specs: '850 sq.ft • Roadside Frontage',
    color: 'teal',
    position: { top: '68%', left: '24%' },
    image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=400&q=80',
    plusCode: '7M52+7W Bengaluru',
    city: 'Indiranagar, Bengaluru',
  },
  {
    id: 'prop-3',
    name: 'Residential Land Plot',
    category: 'Land',
    distance: 4.2,
    price: '₹25 Lakh',
    specs: '6.5 Cents • Clear Title Deed',
    color: 'amber',
    position: { top: '24%', left: '72%' },
    image: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=400&q=80',
    plusCode: '6V82+Q9 Kochi',
    city: 'Edappally, Kochi',
  },
  {
    id: 'prop-4',
    name: 'Luxury Sea-Breeze Apartment',
    category: 'Residential',
    distance: 7.5,
    price: '₹68 Lakh',
    specs: '2,100 sq.ft • 3 Bathrooms',
    color: 'emerald',
    position: { top: '70%', left: '70%' },
    image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=400&q=80',
    plusCode: '9V32+8P Marine Drive',
    city: 'Ernakulam, Kochi',
  },
  {
    id: 'prop-5',
    name: 'Fertile Agricultural Farm Land',
    category: 'Farm Land',
    distance: 11.8,
    price: '₹35 Lakh / acre',
    specs: '2.5 Acres • Road Access',
    color: 'emerald',
    position: { top: '16%', left: '50%' },
    image: 'https://images.unsplash.com/photo-1500937386664-56d1dfef3854?auto=format&fit=crop&w=400&q=80',
    plusCode: '5Q22+MN Aluva',
    city: 'Aluva, Kerala',
  },
];

export const DiscoverySection: React.FC = () => {
  const [selectedRadius, setSelectedRadius] = useState<number>(5);
  const [activePropertyId, setActivePropertyId] = useState<string>('prop-1');
  const [copiedPlusCode, setCopiedPlusCode] = useState<string | null>(null);

  const presets = [2, 5, 8, 12, 15];

  const activeProperties = DEMO_PROPERTIES.filter((p) => p.distance <= selectedRadius);
  const activeCount = activeProperties.length;
  const selectedProperty = DEMO_PROPERTIES.find((p) => p.id === activePropertyId) || DEMO_PROPERTIES[0];

  const handleCopyPlusCode = (code: string) => {
    navigator.clipboard?.writeText(code);
    setCopiedPlusCode(code);
    setTimeout(() => {
      setCopiedPlusCode(null);
    }, 2500);
  };

  return (
    <section className="py-16 sm:py-24 lg:py-32 bg-[#FAFCFB] relative overflow-hidden border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 border border-emerald-200/60 text-brand-800 text-xs font-bold uppercase tracking-wider">
            <Compass className="w-3.5 h-3.5 text-brand-700" />
            <span>Interactive Concept Experience</span>
          </div>
          <h2 className="text-2xl xs:text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
            Find What You Need, Closer to You.
          </h2>
          <p className="text-sm sm:text-base lg:text-lg text-slate-600 font-normal">
            Experience how proximity-based discovery works. Adjust your preferred search radius to see available properties illuminate around your device.
          </p>
        </div>

        {/* ================= APPLE-STYLE INTERACTIVE RADIUS SLIDER BAR ================= */}
        <div className="max-w-3xl mx-auto mb-10 bg-white rounded-3xl p-5 sm:p-8 border border-slate-200/80 shadow-soft">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
            <div className="flex items-center gap-2.5 text-left">
              <div className="w-9 h-9 rounded-xl bg-emerald-50 text-brand-700 flex items-center justify-center font-bold shrink-0">
                <SlidersHorizontal className="w-4 h-4" />
              </div>
              <div>
                <div className="text-xs font-bold uppercase tracking-wider text-slate-400">Search Radius</div>
                <div className="text-base sm:text-lg font-black text-slate-900 flex items-center gap-2">
                  <span>Within {selectedRadius} km</span>
                  <span className="text-[11px] sm:text-xs font-semibold px-2 py-0.5 rounded-md bg-emerald-100 text-emerald-800">
                    GPS Active
                  </span>
                </div>
              </div>
            </div>

            {/* Quick Preset Pills (Responsive Wrap) */}
            <div className="flex flex-wrap items-center gap-1.5">
              {presets.map((preset) => (
                <button
                  key={preset}
                  type="button"
                  onClick={() => setSelectedRadius(preset)}
                  className={`px-2.5 xs:px-3 py-1.5 rounded-xl text-xs font-bold transition-all ${
                    selectedRadius === preset
                      ? 'bg-brand-800 text-white shadow-sm'
                      : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                  }`}
                >
                  {preset} km
                </button>
              ))}
            </div>
          </div>

          {/* Interactive Range Slider */}
          <div className="space-y-2">
            <div className="relative flex items-center">
              <input
                type="range"
                min="1"
                max="15"
                step="0.5"
                value={selectedRadius}
                onChange={(e) => setSelectedRadius(parseFloat(e.target.value))}
                className="w-full h-2.5 bg-slate-100 rounded-lg appearance-none cursor-pointer accent-brand-700 focus:outline-none"
                aria-label="Adjust property discovery search radius"
              />
            </div>
            <div className="flex justify-between text-[11px] font-semibold text-slate-400">
              <span>1 km (Immediate Neighborhood)</span>
              <span>8 km (City District)</span>
              <span>15 km (Extended Suburbs)</span>
            </div>
          </div>

          {/* Live Status Counter Bar */}
          <div className="mt-5 pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-semibold">
            <div className="flex items-center gap-2 text-emerald-700">
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-600"></span>
              </span>
              <span>{activeCount} properties illuminated inside your {selectedRadius} km radius</span>
            </div>
            <span className="text-slate-400 hidden sm:inline">Tap any property pin to inspect</span>
          </div>
        </div>

        {/* ================= HIGH-END DISCOVERY VISUAL CANVAS ================= */}
        <div className="relative rounded-[28px] xs:rounded-[36px] sm:rounded-[44px] overflow-hidden border border-slate-200/80 shadow-premium bg-slate-950">
          <div className="relative h-[480px] xs:h-[540px] sm:h-[620px] lg:h-[640px] w-full">
            {/* Cinematic Background Aerial Map / Neighborhood View */}
            <img
              src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1600&q=85"
              alt="Nearby neighborhood property discovery visual"
              loading="lazy"
              className="w-full h-full object-cover opacity-85"
              onError={(e) => {
                e.currentTarget.src = '/images/home.jpg';
              }}
            />

            {/* Dark Gradient Vignette */}
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />
            <div className="absolute inset-0 coordinate-grid opacity-20 pointer-events-none" />

            {/* ================= EXPANDING DYNAMIC RADIUS CIRCLE OVERLAY ================= */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none flex items-center justify-center">
              {/* Dynamic Scaling Radius Ring based on slider value (clamped on mobile) */}
              <motion.div
                animate={{
                  width: `${Math.min(100 + selectedRadius * 28, 540)}px`,
                  height: `${Math.min(100 + selectedRadius * 28, 540)}px`,
                }}
                transition={{ type: 'spring', damping: 25, stiffness: 120 }}
                className="rounded-full border-2 border-dashed border-emerald-400/50 bg-emerald-500/10 shadow-[0_0_50px_rgba(16,185,129,0.18)] flex items-center justify-center relative max-w-[88vw]"
              >
                <div className="absolute top-2 xs:top-3 text-[9px] xs:text-[10px] font-mono font-bold text-emerald-300 bg-slate-900/85 px-2 xs:px-2.5 py-0.5 rounded-full border border-emerald-500/30 whitespace-nowrap">
                  {selectedRadius} km Search Boundary
                </div>
              </motion.div>

              {/* Center Device Position Indicator */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
                <div className="relative flex items-center justify-center">
                  <span className="absolute w-14 xs:w-16 h-14 xs:h-16 rounded-full bg-emerald-400/30 animate-radar-pulse" />
                  <div className="w-9 xs:w-11 h-9 xs:h-11 rounded-full bg-brand-800 text-white flex items-center justify-center shadow-2xl border-2 border-white">
                    <Navigation className="w-4 xs:w-5 h-4 xs:h-5 transform -rotate-45" />
                  </div>
                </div>
                <div className="mt-1.5 xs:mt-2 bg-slate-900/90 backdrop-blur-md px-2.5 xs:px-3 py-0.5 xs:py-1 rounded-full text-white text-[10px] xs:text-[11px] font-bold border border-slate-700 shadow-md whitespace-nowrap">
                  Your Location
                </div>
              </div>
            </div>

            {/* ================= DYNAMIC PROPERTY PINS ON THE CANVAS ================= */}
            {DEMO_PROPERTIES.map((prop) => {
              const isInside = prop.distance <= selectedRadius;
              const isSelected = activePropertyId === prop.id;

              return (
                <div
                  key={prop.id}
                  style={{ top: prop.position.top, left: prop.position.left }}
                  className="absolute z-20 -translate-x-1/2 -translate-y-1/2 cursor-pointer"
                  onClick={() => setActivePropertyId(prop.id)}
                >
                  {/* Pin Representation */}
                  <motion.div
                    animate={{
                      scale: isInside ? (isSelected ? 1.05 : 1) : 0.85,
                      opacity: isInside ? 1 : 0.45,
                    }}
                    transition={{ duration: 0.3 }}
                    className={`group relative p-2.5 xs:p-3 sm:p-3.5 rounded-xl xs:rounded-2xl shadow-xl transition-all duration-300 text-left ${
                      isInside
                        ? isSelected
                          ? 'bg-white text-slate-900 ring-3 xs:ring-4 ring-emerald-500/40 border border-emerald-400'
                          : 'bg-white/95 backdrop-blur-md text-slate-900 hover:bg-white border border-slate-200/90'
                        : 'bg-slate-900/75 backdrop-blur-xs text-slate-400 border border-slate-700'
                    }`}
                  >
                    <div className="flex items-center gap-1.5 xs:gap-2 mb-1">
                      <span
                        className={`text-[8px] xs:text-[9px] font-bold uppercase tracking-wider px-1.5 xs:px-2 py-0.5 rounded-md ${
                          isInside
                            ? 'bg-emerald-100 text-emerald-800'
                            : 'bg-slate-800 text-slate-400'
                        }`}
                      >
                        {prop.category}
                      </span>
                      <span className="text-[9px] xs:text-[10px] font-semibold opacity-70">
                        {prop.distance} km
                      </span>
                    </div>

                    <div className="text-[11px] xs:text-xs sm:text-sm font-bold truncate max-w-[125px] xs:max-w-[155px] sm:max-w-[190px]">
                      {prop.name}
                    </div>

                    <div className="mt-1 flex items-center justify-between gap-2 xs:gap-3 text-[10px] xs:text-xs">
                      <span className={`font-extrabold ${isInside ? 'text-brand-800' : 'text-slate-400'}`}>
                        {prop.price}
                      </span>
                      {isInside && (
                        <span className="text-[9px] xs:text-[10px] text-emerald-700 font-semibold flex items-center gap-0.5">
                          <Check className="w-2.5 xs:w-3 h-2.5 xs:h-3" />
                          <span>Nearby</span>
                        </span>
                      )}
                    </div>
                  </motion.div>
                </div>
              );
            })}

            {/* Bottom Floating Bar */}
            <div className="absolute bottom-4 sm:bottom-6 right-4 sm:right-6 left-4 sm:left-auto z-20 bg-slate-900/95 backdrop-blur-md p-3.5 sm:p-4 rounded-2xl border border-slate-800 text-white flex flex-col xs:flex-row items-start xs:items-center justify-between gap-3 sm:gap-6 shadow-2xl">
              <div className="text-left space-y-0.5">
                <div className="text-[11px] sm:text-xs font-semibold text-emerald-400 flex items-center gap-1.5">
                  <Sparkles className="w-3 sm:w-3.5 h-3 sm:h-3.5" />
                  <span>Proximity Engine Live on Mobile</span>
                </div>
                <div className="text-xs sm:text-sm font-bold text-white">Download NearbyEstate from Google Play</div>
              </div>
              <a
                href={BRAND_CONFIG.playStoreUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full xs:w-auto px-4 py-2 rounded-xl bg-brand-700 hover:bg-brand-600 text-white font-bold text-xs flex items-center justify-center gap-1.5 shadow-sm transition-colors shrink-0"
              >
                <span>Get App</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>

        {/* Interactive Google Plus Code Precision Showcase */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-8 bg-white rounded-3xl p-5 sm:p-7 border border-slate-200/90 shadow-soft"
        >
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
            <div className="space-y-2 text-left max-w-xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 text-emerald-800 text-xs font-bold uppercase tracking-wider border border-emerald-200/70">
                <MapPin className="w-3.5 h-3.5 text-emerald-700" />
                <span>Exact Location Precision with Google Plus Code</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">
                No Door Number? No Problem.
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Many vacant plots, layout sites, and rural lands lack street numbers. NearbyEstate integrates exact Google Plus Codes so you or your visitors navigate directly to the property gate on Google Maps with 100% precision.
              </p>
            </div>

            {/* Interactive Plus Code Action Box */}
            <div className="w-full lg:w-auto bg-slate-900 text-white p-4 sm:p-5 rounded-2xl shadow-md border border-slate-800 flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5">
              <div className="text-left space-y-0.5">
                <div className="text-[10px] uppercase font-bold text-emerald-400">
                  Selected Property Plus Code
                </div>
                <div className="text-base sm:text-lg font-mono font-black text-white tracking-wider flex items-center gap-2">
                  <span>{selectedProperty.plusCode}</span>
                </div>
                <div className="text-[11px] text-slate-400">
                  {selectedProperty.name} ({selectedProperty.distance} km away)
                </div>
              </div>

              <div className="flex items-center gap-2 pt-2 sm:pt-0">
                <button
                  type="button"
                  onClick={() => handleCopyPlusCode(selectedProperty.plusCode)}
                  className="flex-1 sm:flex-none inline-flex items-center justify-center gap-1.5 px-3.5 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-white text-xs font-bold border border-slate-700 transition-colors"
                >
                  {copiedPlusCode === selectedProperty.plusCode ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                      <span className="text-emerald-400">Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Copy Code</span>
                    </>
                  )}
                </button>

                <a
                  href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(selectedProperty.plusCode)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 sm:flex-none inline-flex items-center justify-center gap-1.5 px-3.5 py-2.5 rounded-xl bg-brand-700 hover:bg-brand-600 text-white text-xs font-bold shadow-xs transition-colors"
                >
                  <ExternalLink className="w-3.5 h-3.5" />
                  <span>Open in Maps</span>
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
