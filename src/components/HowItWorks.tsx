import React from 'react';
import { motion } from 'framer-motion';
import { Download, Compass, CheckCircle2, ArrowRight } from 'lucide-react';
import { STEPS, BRAND_CONFIG } from '../data/websiteData';
import { GooglePlayIcon } from './Navbar';

const stepIconMap: Record<string, React.ReactNode> = {
  Download: <Download className="w-6 h-6 text-brand-800" />,
  Compass: <Compass className="w-6 h-6 text-brand-800" />,
  CheckCircle2: <CheckCircle2 className="w-6 h-6 text-brand-800" />,
};

export const HowItWorks: React.FC = () => {
  return (
    <section id="how-it-works" className="py-16 sm:py-24 lg:py-32 bg-slate-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 lg:mb-20 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-100/80 text-brand-800 text-xs font-bold uppercase tracking-wider">
            <span>Simple 3-Step Process</span>
          </div>
          <h2 className="text-2xl xs:text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
            Start Exploring in 3 Simple Steps
          </h2>
          <p className="text-sm sm:text-base lg:text-lg text-slate-600 font-normal">
            No complicated sign-up funnels or hidden charges. Install the app, grant location permissions, and immediately discover what is available.
          </p>
        </div>

        {/* 3 Steps Cards: Connected Timeline */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 relative">
          {/* Subtle Horizontal Connector on Desktop */}
          <div className="hidden md:block absolute top-12 left-1/4 right-1/4 h-0.5 bg-slate-200 -z-0" />

          {STEPS.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, delay: index * 0.12 }}
              whileHover={{ y: -5 }}
              className="relative z-10 bg-white rounded-3xl p-6 sm:p-8 lg:p-10 border border-slate-200/80 shadow-soft hover:shadow-premium hover:border-emerald-200 transition-all duration-300 flex flex-col justify-between text-left"
            >
              <div>
                <div className="flex items-center justify-between mb-6 sm:mb-8">
                  <div className="w-12 sm:w-14 h-12 sm:h-14 rounded-2xl bg-emerald-50 border border-emerald-100/80 flex items-center justify-center shadow-xs">
                    {stepIconMap[step.iconName]}
                  </div>
                  <span className="text-2xl sm:text-3xl font-black text-slate-200 font-mono">
                    {step.number}
                  </span>
                </div>

                <h3 className="text-lg sm:text-xl font-bold text-slate-900 mb-2">
                  {step.title}
                </h3>
                <p className="text-xs sm:text-sm font-semibold text-emerald-800 mb-2.5 sm:mb-3">
                  {step.description}
                </p>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                  {step.details}
                </p>
              </div>

              <div className="pt-5 sm:pt-6 mt-6 sm:mt-8 border-t border-slate-100 flex items-center justify-between">
                <span className="text-[11px] sm:text-xs font-bold text-slate-400 uppercase tracking-wider">
                  Step {step.number}
                </span>
                <span className="w-2 h-2 rounded-full bg-brand-700" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Action Link */}
        <div className="mt-10 sm:mt-14 text-center">
          <a
            href={BRAND_CONFIG.playStoreUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-3 px-6 sm:px-7 py-3.5 rounded-full bg-brand-800 hover:bg-brand-900 text-white font-semibold text-xs sm:text-sm shadow-md hover:shadow-lg transition-all duration-200 w-full sm:w-auto"
          >
            <GooglePlayIcon className="w-4 h-4 fill-current text-white" />
            <span>Download NearbyEstate on Google Play</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
};
