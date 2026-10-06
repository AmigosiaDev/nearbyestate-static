import React from 'react';
import { motion } from 'framer-motion';
import {
  Building2,
  Layers,
  PhoneCall,
  ShieldCheck,
  CheckCircle2,
  Sparkles,
  ArrowUpRight,
  MessageCircle,
} from 'lucide-react';
import { BRAND_CONFIG, AGENCY_BENEFITS } from '../data/websiteData';

export const AgencySection: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Building2':
        return <Building2 className="w-6 h-6 text-brand-700" />;
      case 'Layers':
        return <Layers className="w-6 h-6 text-brand-700" />;
      case 'PhoneCall':
        return <PhoneCall className="w-6 h-6 text-brand-700" />;
      case 'ShieldCheck':
        return <ShieldCheck className="w-6 h-6 text-brand-700" />;
      default:
        return <Building2 className="w-6 h-6 text-brand-700" />;
    }
  };

  return (
    <section id="agencies" className="py-16 sm:py-24 lg:py-32 bg-slate-50 relative overflow-hidden">
      {/* Decorative background grids */}
      <div className="absolute inset-0 coordinate-grid opacity-35 pointer-events-none" />
      <div className="absolute -top-40 right-1/4 w-96 h-96 bg-emerald-100/40 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 space-y-4">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-100/80 border border-emerald-300 text-brand-900 text-xs font-bold uppercase tracking-wider"
          >
            <Building2 className="w-3.5 h-3.5 text-brand-800" />
            <span>For Real Estate Agencies & Brokers</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-2xl xs:text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight"
          >
            Empowering Real Estate Agencies & Local Brokers
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-sm sm:text-base lg:text-lg text-slate-600 font-normal leading-relaxed"
          >
            Expand your local reach with NearbyEstate. Showcase your entire property portfolio to thousands of nearby buyers, receive direct client inquiries, and build brand presence—100% free with zero brokerage cuts.
          </motion.p>
        </div>

        {/* 4 Bento Feature Cards (2x2 Grid) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 mb-12 sm:mb-16">
          {AGENCY_BENEFITS.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -4 }}
              className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/90 hover:border-emerald-300 hover:shadow-soft transition-all duration-300 text-left flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between gap-4 mb-4">
                  <div className="w-12 h-12 rounded-2xl bg-emerald-50 border border-emerald-100 flex items-center justify-center group-hover:scale-105 transition-transform">
                    {getIcon(item.iconName)}
                  </div>
                  <span className="text-[11px] font-bold text-emerald-800 bg-emerald-100/80 px-2.5 py-1 rounded-full">
                    {item.badge}
                  </span>
                </div>

                <div className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider mb-1">
                  {item.subtitle}
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-slate-900 mb-2">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="pt-5 mt-5 border-t border-slate-100 flex items-center gap-2 text-xs text-brand-800 font-semibold">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Zero Hidden Costs • Instant Setup</span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Agency Partnership Callout Banner */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="rounded-[28px] sm:rounded-[36px] bg-gradient-to-br from-slate-900 via-slate-950 to-brand-950 text-white p-6 sm:p-10 lg:p-12 border border-slate-800 shadow-xl relative overflow-hidden"
        >
          {/* Ambient glow */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-emerald-600/15 rounded-full blur-3xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10 text-left">
            <div className="lg:col-span-8 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 text-xs font-bold uppercase tracking-wider border border-emerald-500/30">
                <Sparkles className="w-3.5 h-3.5 text-emerald-400" />
                <span>Join Our Agency Partner Network</span>
              </div>

              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight leading-tight">
                Ready to List Your Agency&apos;s Properties on NearbyEstate?
              </h3>

              <p className="text-xs sm:text-sm lg:text-base text-slate-300 max-w-2xl leading-relaxed">
                Connect with our partnership team to get your agency verified, list your portfolio of homes, plots, and commercial units, and start receiving direct buyer inquiries today.
              </p>

              <div className="flex flex-wrap items-center gap-4 text-xs text-emerald-200/90 pt-1">
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                  <span>100% Free Forever</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                  <span>Direct Buyer Phone & WhatsApp</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                  <span>Zero Commission Deductions</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col items-stretch gap-3 justify-center">
              <a
                href={BRAND_CONFIG.agencyWhatsAppUrl}
                target="_blank"
                rel="noopener noreferrer"
                id="agency_partner_whatsapp"
                className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-2xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-sm shadow-lg shadow-emerald-500/20 hover:shadow-emerald-500/30 transition-all duration-200 transform hover:-translate-y-0.5"
              >
                <MessageCircle className="w-4 h-4 fill-current" />
                <span>Partner via WhatsApp</span>
              </a>

              <a
                href={BRAND_CONFIG.webAppUrl}
                target="_blank"
                rel="noopener noreferrer"
                id="agency_explore_webapp"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-2xl bg-white/10 hover:bg-white/20 border border-white/20 text-white font-semibold text-sm transition-all"
              >
                <span>Explore Web App</span>
                <ArrowUpRight className="w-4 h-4 text-slate-400" />
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
