import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, HelpCircle } from 'lucide-react';
import { FAQS } from '../data/websiteData';

export const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-16 sm:py-20 md:py-28 bg-[#071F17] relative overflow-hidden">
      {/* ================= CLEAN GPS MAP & COORDINATE GRID BACKGROUND ================= */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
        {/* Continuous Forest Green Vertical Gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#071F17] via-[#0A261D]/90 to-[#071F17]" />

        {/* Zen Architectural Courtyard Subtle Blend */}
        <img
          src="/images/backgrounds/faq-bg.jpg"
          alt="Architectural courtyard texture"
          className="w-full h-full object-cover opacity-10 filter brightness-75 contrast-125 mix-blend-luminosity"
        />

        {/* Soft Ambient Emerald Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

        {/* Dotted Location Map Grid with Radial Fade Mask */}
        <div className="absolute inset-0 map-dotted-grid opacity-20 [mask-image:radial-gradient(ellipse_at_center,black_55%,transparent_85%)]" />

        {/* Concentric GPS Radius Rings (1km, 2.5km, 5km) centered behind FAQ */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[380px] h-[380px] rounded-full border border-dashed border-emerald-400/20 pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[680px] h-[680px] rounded-full border border-dashed border-emerald-400/15 pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[980px] h-[980px] rounded-full border border-dashed border-emerald-400/10 pointer-events-none" />

        {/* Subtle Vector Road Outlines & GPS Coordinate Crosshairs */}
        <svg
          className="absolute inset-0 w-full h-full opacity-15 stroke-emerald-400"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M-100 180 Q 400 240 800 160 T 1500 220 T 2100 170" strokeWidth="2" />
          <path d="M-100 480 Q 350 390 850 490 T 1650 430 T 2200 480" strokeWidth="1.8" />
          <path d="M350 -50 Q 330 280 370 600 T 340 1100" strokeWidth="1.8" />
          <path d="M850 -50 Q 870 380 830 720 T 860 1100" strokeWidth="1.8" />
          <path d="M1380 -50 Q 1360 320 1400 680 T 1370 1100" strokeWidth="1.8" />
          {/* Coordinate Crosshairs */}
          <g strokeWidth="1.5">
            <path d="M280 200 v 20 M270 210 h 20" />
            <path d="M850 170 v 20 M840 180 h 20" />
            <path d="M1360 250 v 20 M1350 260 h 20" />
            <path d="M480 500 v 20 M470 510 h 20" />
            <path d="M1100 520 v 20 M1090 530 h 20" />
          </g>
        </svg>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/15 border border-emerald-400/25 text-emerald-300 text-xs font-bold uppercase tracking-wider">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>Frequently Asked Questions</span>
          </div>
          <h2 className="text-2xl xs:text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Got Questions? We've Got Answers
          </h2>
          <p className="text-sm sm:text-base lg:text-lg text-emerald-100/75">
            Learn more about how NearbyEstate makes discovering properties around your location fast and straightforward.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-3.5 sm:space-y-4">
          {FAQS.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className={`rounded-2xl border transition-all duration-200 overflow-hidden backdrop-blur-xs ${
                  isOpen
                    ? 'border-[#00D084]/60 bg-[#0F3325]/90 shadow-xl shadow-emerald-950/40'
                    : 'border-emerald-500/20 bg-[#0A261D]/75 hover:border-emerald-400/40 hover:bg-[#0C2D22]/85'
                }`}
              >
                <button
                  type="button"
                  onClick={() => toggleFAQ(index)}
                  className="w-full text-left p-4 sm:p-6 flex items-center justify-between gap-3 sm:gap-4 focus:outline-none focus:ring-2 focus:ring-emerald-400"
                  aria-expanded={isOpen}
                >
                  <span className="text-sm xs:text-base sm:text-lg font-bold text-white leading-snug">
                    {faq.question}
                  </span>
                  <div
                    className={`w-7 sm:w-8 h-7 sm:h-8 rounded-full flex items-center justify-center shrink-0 transition-transform duration-200 ${
                      isOpen ? 'bg-[#00D084] text-[#051A12] rotate-180' : 'bg-white/10 text-emerald-300'
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: 'easeInOut' }}
                    >
                      <div className="px-4 sm:px-6 pb-5 sm:pb-6 pt-1 text-xs xs:text-sm sm:text-base text-slate-300 leading-relaxed border-t border-emerald-500/20">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
