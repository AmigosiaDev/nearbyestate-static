import React from 'react';
import { motion } from 'framer-motion';
import { Compass, Search, Info, MapPin, PlusCircle, PhoneCall, Check } from 'lucide-react';
import { APP_FEATURES } from '../data/websiteData';

const featureIconMap: Record<string, React.ReactNode> = {
  Compass: <Compass className="w-6 h-6 text-brand-800" />,
  Search: <Search className="w-6 h-6 text-brand-800" />,
  Info: <Info className="w-6 h-6 text-brand-800" />,
  MapPin: <MapPin className="w-6 h-6 text-brand-accent" />,
  PlusCircle: <PlusCircle className="w-6 h-6 text-brand-800" />,
  PhoneCall: <PhoneCall className="w-6 h-6 text-brand-800" />,
};

export const AppFeatures: React.FC = () => {
  return (
    <section id="features" className="py-16 sm:py-24 lg:py-28 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 text-brand-800 text-xs font-bold uppercase tracking-wider">
            <span>Features Built For Speed</span>
          </div>
          <h2 className="text-2xl xs:text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Designed to Connect You with Local Real Estate
          </h2>
          <p className="text-sm sm:text-base lg:text-lg text-slate-600">
            From smart proximity searches to Google Plus Code accuracy, experience property exploration built for mobile.
          </p>
        </div>

        {/* 6 Features Grid (1-col mobile, 2-col tablet, 3-col desktop) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 lg:gap-8">
          {APP_FEATURES.map((feat, index) => (
            <motion.div
              key={feat.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="p-6 sm:p-8 rounded-3xl bg-slate-50/70 border border-slate-200/80 hover:bg-white hover:border-emerald-200 hover:shadow-premium transition-all duration-300 flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="w-12 h-12 rounded-2xl bg-white border border-slate-200/80 shadow-xs flex items-center justify-center">
                    {featureIconMap[feat.iconName]}
                  </div>
                  {feat.badge && (
                    <span className="text-[10px] font-bold px-2.5 py-1 rounded-full bg-emerald-100/70 text-brand-800">
                      {feat.badge}
                    </span>
                  )}
                </div>

                <h3 className="text-xl font-bold text-slate-900">
                  {feat.title}
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  {feat.description}
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-slate-200/60 flex items-center gap-2 text-xs font-semibold text-slate-500">
                <Check className="w-3.5 h-3.5 text-emerald-600" />
                <span>Verified in Mobile App</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
