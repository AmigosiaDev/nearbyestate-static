import React from 'react';
import { motion } from 'framer-motion';
import { Check, ArrowUpRight, ShieldCheck, MapPin, Sparkles } from 'lucide-react';
import { BRAND_CONFIG } from '../data/websiteData';

export const AgentProSection: React.FC = () => {
  const whatsappBase = 'https://wa.me/919946465431?text=';

  const starterWhatsAppUrl = `${whatsappBase}${encodeURIComponent(
    'Hello NearbyEstate, I want to claim the Free 1-Month Starter Plan (1 free post).'
  )}`;

  const growthWhatsAppUrl = `${whatsappBase}${encodeURIComponent(
    'Hello NearbyEstate, I want to subscribe to the ₹99 Growth Plan (3 properties, 3 months).'
  )}`;

  const agencyWhatsAppUrl = BRAND_CONFIG.agencyWhatsAppUrl || `${whatsappBase}${encodeURIComponent(
    'Hello NearbyEstate, I want to register as a Verified Agent (₹499 Agency Pro, 20 properties).'
  )}`;

  return (
    <section id="agent-pro" className="py-14 sm:py-20 lg:py-24 bg-[#071F17] relative overflow-hidden text-white">
      {/* Anchor for pricing navigation */}
      <div id="pricing" className="sr-only" />

      {/* Ambient background depth glows */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[850px] h-[450px] bg-[#00D084]/10 blur-[130px] rounded-full" />
        <div className="absolute bottom-10 right-10 w-[450px] h-[350px] bg-emerald-700/10 blur-[100px] rounded-full" />
        <div className="absolute inset-0 coordinate-grid opacity-25" />
      </div>

      <div className="max-w-[1180px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#00D084]/15 border border-[#00D084]/30 text-[#00D084] text-xs font-bold tracking-wide uppercase">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Agent & Property Plans</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-extrabold text-white tracking-tight leading-tight">
            List Properties. <span className="text-[#00D084]">Connect Directly.</span>
          </h2>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            Choose a flexible plan tailored to your needs. Showcase your properties with exact Google Plus Code locations and direct WhatsApp leads.
          </p>
        </div>

        {/* 3-Column Pricing Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-stretch">
          
          {/* ================= PLAN 1: FREE STARTER (₹0) ================= */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="rounded-3xl bg-[#0A261D]/80 backdrop-blur-xl border border-white/10 p-7 lg:p-8 flex flex-col justify-between hover:border-[#00D084]/40 transition-all duration-300 shadow-xl group"
          >
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-300 bg-white/5 border border-white/10 px-3 py-1 rounded-full">
                  Free Starter
                </span>
                <span className="text-xs text-slate-400 font-medium">1 Month Validity</span>
              </div>

              <div>
                <div className="flex items-baseline">
                  <span className="text-4xl sm:text-5xl font-black text-white tracking-tight">₹0</span>
                </div>
                <p className="text-xs text-slate-300 mt-2 leading-relaxed">
                  Test NearbyEstate and get your first local property in front of nearby buyers.
                </p>
              </div>

              {/* Features List */}
              <ul className="space-y-3.5 pt-2 text-sm text-slate-200">
                <li className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-[#00D084]/15 flex items-center justify-center shrink-0">
                    <Check className="w-3.5 h-3.5 text-[#00D084]" />
                  </div>
                  <span className="font-bold text-white">1 Post Free</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-[#00D084]/15 flex items-center justify-center shrink-0">
                    <Check className="w-3.5 h-3.5 text-[#00D084]" />
                  </div>
                  <span>Google Plus Code location</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-[#00D084]/15 flex items-center justify-center shrink-0">
                    <Check className="w-3.5 h-3.5 text-[#00D084]" />
                  </div>
                  <span>Direct WhatsApp & phone leads</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-[#00D084]/15 flex items-center justify-center shrink-0">
                    <Check className="w-3.5 h-3.5 text-[#00D084]" />
                  </div>
                  <span>Nearby search discovery</span>
                </li>
              </ul>
            </div>

            <div className="pt-8">
              <a
                href={starterWhatsAppUrl}
                target="_blank"
                rel="noopener noreferrer"
                id="plan_starter_claim"
                className="w-full inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl bg-white/10 hover:bg-white/20 text-white font-bold text-sm border border-white/15 transition-all duration-200 cursor-pointer"
              >
                <span>Get Started Free</span>
                <ArrowUpRight className="w-4 h-4 text-[#00D084]" />
              </a>
              <p className="text-[11px] text-slate-400 text-center mt-2.5">Instant free setup</p>
            </div>
          </motion.div>

          {/* ================= PLAN 2: GROWTH PLAN (₹99 - POPULAR) ================= */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="rounded-3xl bg-gradient-to-b from-[#0D382A] to-[#0A261D] border-2 border-[#00D084]/60 p-7 lg:p-8 flex flex-col justify-between relative shadow-2xl shadow-[#00D084]/20 transform md:-translate-y-2"
          >
            {/* Most Popular Highlight Pill */}
            <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 z-20">
              <span className="bg-[#00D084] text-[#051A12] text-[11px] font-black uppercase tracking-wider px-4 py-1 rounded-full shadow-lg shadow-[#00D084]/30">
                Most Popular
              </span>
            </div>

            <div className="space-y-6">
              <div className="flex items-center justify-between pt-1">
                <span className="text-xs font-bold uppercase tracking-wider text-[#00D084] bg-[#00D084]/15 border border-[#00D084]/30 px-3 py-1 rounded-full">
                  Growth Plan
                </span>
                <span className="text-xs text-emerald-300 font-semibold">3 Months Validity</span>
              </div>

              <div>
                <div className="flex items-baseline">
                  <span className="text-4xl sm:text-5xl font-black text-white tracking-tight">₹99</span>
                </div>
                <p className="text-xs text-slate-300 mt-2 leading-relaxed">
                  Ideal for independent agents & sellers needing multiple local property listings.
                </p>
              </div>

              {/* Features List */}
              <ul className="space-y-3.5 pt-2 text-sm text-slate-200">
                <li className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-[#00D084] flex items-center justify-center shrink-0 text-[#051A12]">
                    <Check className="w-3.5 h-3.5" strokeWidth={3} />
                  </div>
                  <span className="font-bold text-white">Post up to 3 properties</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-[#00D084]/20 flex items-center justify-center shrink-0">
                    <Check className="w-3.5 h-3.5 text-[#00D084]" />
                  </div>
                  <span>Google Plus Code location</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-[#00D084]/20 flex items-center justify-center shrink-0">
                    <Check className="w-3.5 h-3.5 text-[#00D084]" />
                  </div>
                  <span>Direct WhatsApp & phone contacts</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-[#00D084]/20 flex items-center justify-center shrink-0">
                    <Check className="w-3.5 h-3.5 text-[#00D084]" />
                  </div>
                  <span>Priority nearby radius listing</span>
                </li>
              </ul>
            </div>

            <div className="pt-8">
              <a
                href={growthWhatsAppUrl}
                target="_blank"
                rel="noopener noreferrer"
                id="plan_growth_subscribe"
                className="w-full inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl bg-[#00D084] hover:bg-[#00D084]/90 text-[#051A12] font-black text-sm shadow-lg shadow-[#00D084]/25 transition-all duration-200 transform hover:-translate-y-0.5 cursor-pointer"
              >
                <span>Choose Growth Plan</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
              <p className="text-[11px] text-slate-300 text-center mt-2.5 font-medium">Only ₹33 / month equivalent</p>
            </div>
          </motion.div>

          {/* ================= PLAN 3: AGENCY PRO (₹499) ================= */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.3 }}
            className="rounded-3xl bg-[#0A261D]/80 backdrop-blur-xl border border-white/10 p-7 lg:p-8 flex flex-col justify-between hover:border-[#00D084]/40 transition-all duration-300 shadow-xl group"
          >
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold uppercase tracking-wider text-emerald-300 bg-emerald-500/15 border border-emerald-500/25 px-3 py-1 rounded-full">
                  Agency Pro
                </span>
                <span className="text-xs text-slate-400 font-medium">6 Months Validity</span>
              </div>

              <div>
                <div className="flex items-baseline">
                  <span className="text-4xl sm:text-5xl font-black text-white tracking-tight">₹499</span>
                </div>
                <p className="text-xs text-slate-300 mt-2 leading-relaxed">
                  For established agencies wanting verified brand presence & high volume.
                </p>
              </div>

              {/* Features List */}
              <ul className="space-y-3.5 pt-2 text-sm text-slate-200">
                <li className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-[#00D084]/15 flex items-center justify-center shrink-0">
                    <Check className="w-3.5 h-3.5 text-[#00D084]" />
                  </div>
                  <span className="font-bold text-white">Up to 20 property listings</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-[#00D084]/15 flex items-center justify-center shrink-0">
                    <ShieldCheck className="w-3.5 h-3.5 text-[#00D084]" />
                  </div>
                  <span className="font-medium text-emerald-300">Verified agency profile badge</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-[#00D084]/15 flex items-center justify-center shrink-0">
                    <Check className="w-3.5 h-3.5 text-[#00D084]" />
                  </div>
                  <span>Google Plus Code location</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-[#00D084]/15 flex items-center justify-center shrink-0">
                    <Check className="w-3.5 h-3.5 text-[#00D084]" />
                  </div>
                  <span>Admin-reviewed listings & support</span>
                </li>
              </ul>
            </div>

            <div className="pt-8">
              <a
                href={agencyWhatsAppUrl}
                target="_blank"
                rel="noopener noreferrer"
                id="agent_pro_subscribe_click"
                className="w-full inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl bg-white/10 hover:bg-white/20 text-white font-bold text-sm border border-white/15 transition-all duration-200 cursor-pointer"
              >
                <span>Register as Verified Agent</span>
                <ArrowUpRight className="w-4 h-4 text-[#00D084]" />
              </a>
              <p className="text-[11px] text-slate-400 text-center mt-2.5">Activation after verification</p>
            </div>
          </motion.div>

        </div>

        {/* Reassurance Footer Bar */}
        <div className="text-center text-xs text-slate-400 pt-10 sm:pt-12 flex items-center justify-center gap-6 flex-wrap">
          <span className="inline-flex items-center gap-1.5">
            <ShieldCheck className="w-4 h-4 text-[#00D084]" />
            Direct buyer connection • Zero brokerage commissions
          </span>
          <span className="hidden sm:inline">•</span>
          <span className="inline-flex items-center gap-1.5">
            <MapPin className="w-3.5 h-3.5 text-[#00D084]" />
            Location accuracy via Google Plus Codes
          </span>
          <span className="hidden sm:inline">•</span>
          <span>WhatsApp instant agent onboarding</span>
        </div>
      </div>
    </section>
  );
};
