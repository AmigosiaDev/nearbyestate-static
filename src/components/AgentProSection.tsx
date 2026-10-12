import React from 'react';
import { motion } from 'framer-motion';
import { Check, ArrowUpRight, Globe, ExternalLink, MapPin } from 'lucide-react';
import { BRAND_CONFIG } from '../data/websiteData';
import { GooglePlayIcon } from './Navbar';

export const AgentProSection: React.FC = () => {
  return (
    <section id="pricing" className="py-12 sm:py-16 lg:py-20 bg-[#071F17] relative overflow-hidden">
      {/* Anchor for download navigation if needed */}
      <div id="download" className="sr-only" />

      <div className="max-w-[1180px] mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="relative rounded-[28px] bg-gradient-to-br from-[#0C2B20]/95 via-[#0A261C]/95 to-[#071E16]/95 border border-[#00D084]/20 p-8 sm:p-10 lg:p-12 shadow-2xl overflow-hidden text-white"
        >
          {/* Ambient background depth glows */}
          <div className="absolute -top-32 -right-32 w-80 h-80 bg-[#00D084]/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-32 -left-32 w-80 h-80 bg-[#00D084]/10 rounded-full blur-3xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start relative z-10">
            {/* ================= LEFT COLUMN: VERIFIED AGENCY PLAN ================= */}
            <div className="lg:col-span-7 space-y-6 text-left">
              {/* Headline & Supporting Headline */}
              <div className="space-y-1.5">
                <h2 className="text-2xl sm:text-3xl lg:text-[34px] font-extrabold text-white tracking-tight leading-tight">
                  Grow Your Real Estate Agency.
                </h2>
                <div className="text-lg sm:text-2xl lg:text-[26px] font-bold text-[#00D084] tracking-tight">
                  Get Verified. Connect Directly.
                </div>
              </div>

              {/* Description */}
              <p className="text-sm sm:text-base text-slate-300 font-normal leading-relaxed max-w-xl">
                Create your verified agency profile, showcase your properties, and connect directly with buyers through WhatsApp and phone.
              </p>

              {/* 4 Compact Benefits */}
              <ul className="space-y-3 pt-1 text-sm sm:text-base text-slate-200">
                <li className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-[#00D084]/15 flex items-center justify-center shrink-0">
                    <Check className="w-3.5 h-3.5 text-[#00D084]" />
                  </div>
                  <span>Verified agency profile</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-[#00D084]/15 flex items-center justify-center shrink-0">
                    <Check className="w-3.5 h-3.5 text-[#00D084]" />
                  </div>
                  <span>Direct WhatsApp and phone contacts</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-[#00D084]/15 flex items-center justify-center shrink-0">
                    <Check className="w-3.5 h-3.5 text-[#00D084]" />
                  </div>
                  <span>Up to 20 property listings</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-[#00D084]/15 flex items-center justify-center shrink-0">
                    <Check className="w-3.5 h-3.5 text-[#00D084]" />
                  </div>
                  <span>Admin-reviewed property listings</span>
                </li>
              </ul>

              {/* Pricing & CTA */}
              <div className="pt-2 space-y-4">
                <div className="flex flex-wrap items-baseline gap-2.5">
                  <span className="text-4xl sm:text-5xl font-black text-white tracking-tight">₹499</span>
                  <span className="text-base text-slate-300 font-medium">/ 6 months</span>
                  <span className="text-xs text-emerald-300 bg-emerald-500/15 border border-emerald-500/25 px-2.5 py-0.5 rounded-full font-medium ml-1">
                    Up to 20 property listings
                  </span>
                </div>

                <div className="space-y-2">
                  <a
                    href={BRAND_CONFIG.agencyWhatsAppUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    id="agent_pro_subscribe_click"
                    className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl bg-[#00D084] hover:bg-[#00b875] text-[#051A12] font-extrabold text-sm sm:text-base shadow-lg shadow-[#00D084]/20 transition-all duration-200 transform hover:-translate-y-0.5"
                  >
                    <span>Register as a Verified Agent</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </a>
                  <p className="text-xs text-slate-400">
                    Activation after admin verification
                  </p>
                </div>
              </div>
            </div>

            {/* ================= RIGHT COLUMN: NEARBYESTATE APP ================= */}
            <div className="lg:col-span-5 flex flex-col space-y-5 text-left">
              {/* Headline & Description */}
              <div className="space-y-2">
                <h3 className="text-xl sm:text-2xl lg:text-[28px] font-bold text-white tracking-tight leading-snug">
                  Your Next Property Could Be Closer Than You Think.
                </h3>
                <p className="text-sm sm:text-base text-slate-300 font-normal leading-relaxed">
                  Discover nearby properties with NearbyEstate. Use our Android app or browse directly on the web.
                </p>
              </div>

              {/* Two Clear Actions directly below description */}
              <div className="flex flex-wrap items-center gap-3 pt-1">
                {/* Get it on Google Play */}
                <a
                  href={BRAND_CONFIG.playStoreUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  id="bottom_download_click"
                  className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-white hover:bg-slate-100 text-slate-900 font-bold text-xs shadow-md transition-all duration-200 transform hover:-translate-y-0.5"
                >
                  <GooglePlayIcon className="w-4 h-4 fill-current text-slate-900" />
                  <span>Get it on Google Play</span>
                </a>

                {/* Explore on Web */}
                <a
                  href="https://nearbyestate.in/home"
                  target="_blank"
                  rel="noopener noreferrer"
                  id="bottom_webapp_click"
                  className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-white/10 hover:bg-white/15 text-white font-semibold text-xs border border-white/15 shadow-sm transition-all duration-200 transform hover:-translate-y-0.5"
                >
                  <Globe className="w-3.5 h-3.5 text-[#00D084]" />
                  <span>Explore on Web</span>
                  <ExternalLink className="w-3 h-3 opacity-60" />
                </a>
              </div>

              {/* Realistic Phone Mockup with Property Listing */}
              <div className="pt-2 flex justify-center lg:justify-start">
                <div className="relative w-full max-w-[280px] bg-slate-950 rounded-[26px] p-3 border-2 border-slate-700/80 shadow-2xl overflow-hidden flex flex-col justify-between text-left">
                  {/* Phone Screen Header */}
                  <div className="flex items-center justify-between border-b border-slate-800 pb-2">
                    <div className="flex items-center gap-1.5">
                      <div className="w-5 h-5 rounded-md bg-[#00D084] text-[#051A12] font-black text-[10px] flex items-center justify-center">
                        e
                      </div>
                      <span className="text-xs font-bold text-white">NearbyEstate</span>
                    </div>
                    <span className="inline-flex items-center gap-1 text-[9px] px-2 py-0.5 rounded-full bg-emerald-500/20 text-[#00D084] font-mono font-bold">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#00D084] animate-pulse" />
                      Live
                    </span>
                  </div>

                  {/* Property Card on Phone Screen */}
                  <div className="space-y-2 py-2">
                    <div className="h-28 rounded-xl overflow-hidden bg-slate-800 relative">
                      <img
                        src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=500&q=80"
                        alt="Independent House / Villa"
                        className="w-full h-full object-cover"
                        onError={(e) => {
                          e.currentTarget.src = '/images/home.jpg';
                        }}
                      />
                      <div className="absolute top-2 left-2 bg-black/75 px-2 py-0.5 rounded text-[9px] text-white font-bold backdrop-blur-xs flex items-center gap-1">
                        <MapPin className="w-2.5 h-2.5 text-[#00D084]" />
                        <span>1.5 km away</span>
                      </div>
                    </div>
                    <div className="text-xs font-bold text-white truncate">Independent House / Villa</div>
                    <div className="text-[10px] text-[#00D084] font-bold">₹52 Lakh • Available Near You</div>
                  </div>

                  {/* In-app action indicator */}
                  <div className="pt-1">
                    <span className="w-full py-1.5 rounded-lg bg-emerald-500/15 border border-emerald-500/30 text-[#00D084] text-[10px] font-bold flex items-center justify-center gap-1">
                      <span>Direct Owner Listings</span>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
