import React from 'react';
import { motion } from 'framer-motion';
import { Camera, FileText, PhoneCall, ArrowUpRight } from 'lucide-react';

export const AgentProSection: React.FC = () => {
  return (
    <section id="agent-pro" className="py-16 sm:py-24 bg-[#FAFCFB] relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="relative overflow-hidden rounded-[32px] bg-gradient-to-br from-[#0F2A20] via-[#0D231B] to-[#081912] border border-[#00D084]/25 p-8 sm:p-12 lg:p-14 shadow-2xl text-white"
        >
          {/* Ambient Glow */}
          <div className="absolute -top-24 -right-24 w-80 h-80 bg-[#00D084]/20 rounded-full blur-3xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center relative z-10">
            {/* Left Column: Proposition & 3 Perks */}
            <div className="lg:col-span-7 text-left space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#00D084]/15 border border-[#00D084]/35 text-[#00D084] text-xs font-bold uppercase tracking-wider">
                <span className="w-2 h-2 rounded-full bg-[#00D084] shadow-xs shadow-[#00D084]" />
                <span>NearbyEstate Agent Pro</span>
              </div>

              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight leading-tight">
                For Agencies & Brokers.{' '}
                <br className="hidden sm:inline" />
                <span className="text-[#00D084]">0% Brokerage. 100% Leads.</span>
              </h2>

              <p className="text-sm sm:text-base text-slate-300 font-normal leading-relaxed max-w-xl">
                List your complete portfolio with full transparency. Connect directly with nearby buyers without losing commissions.
              </p>

              <div className="space-y-3.5 pt-2">
                <div className="flex items-center gap-3.5 text-xs sm:text-sm text-slate-200">
                  <div className="w-8 h-8 rounded-xl bg-[#00D084]/15 border border-[#00D084]/30 flex items-center justify-center text-[#00D084] shrink-0">
                    <Camera className="w-4 h-4" />
                  </div>
                  <span>
                    <strong className="text-white font-semibold">Unlimited Photos:</strong> High-res galleries, floor plans & layout blueprints.
                  </span>
                </div>

                <div className="flex items-center gap-3.5 text-xs sm:text-sm text-slate-200">
                  <div className="w-8 h-8 rounded-xl bg-[#00D084]/15 border border-[#00D084]/30 flex items-center justify-center text-[#00D084] shrink-0">
                    <FileText className="w-4 h-4" />
                  </div>
                  <span>
                    <strong className="text-white font-semibold">Full Spec Sheets:</strong> Carpet area, facing, RERA verification & amenities.
                  </span>
                </div>

                <div className="flex items-center gap-3.5 text-xs sm:text-sm text-slate-200">
                  <div className="w-8 h-8 rounded-xl bg-[#00D084]/15 border border-[#00D084]/30 flex items-center justify-center text-[#00D084] shrink-0">
                    <PhoneCall className="w-4 h-4" />
                  </div>
                  <span>
                    <strong className="text-white font-semibold">Direct Inquiries:</strong> Direct calls & verified buyer leads straight to your desk.
                  </span>
                </div>
              </div>
            </div>

            {/* Right Column: Pricing Pass Card */}
            <div className="lg:col-span-5">
              <div className="bg-white/[0.05] border border-white/10 backdrop-blur-md rounded-2xl p-6 sm:p-8 text-center space-y-5">
                <div className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">
                  Monthly Partner Pass
                </div>

                <div className="space-y-1">
                  <div className="text-3xl sm:text-4xl font-extrabold text-white">
                    ₹1,999<span className="text-sm font-medium text-slate-400">/mo</span>
                  </div>
                  <div className="text-xs text-[#00D084] font-semibold">
                    ✓ Verified Agency Badge Included
                  </div>
                </div>

                <a
                  href="https://nearbyestate.in/home"
                  target="_blank"
                  rel="noopener noreferrer"
                  id="agent_pro_subscribe_click"
                  className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-6 rounded-xl bg-[#00D084] hover:bg-[#00b875] text-[#051A12] font-bold text-sm shadow-lg shadow-[#00D084]/25 transition-all transform hover:-translate-y-0.5"
                >
                  <span>Subscribe as Agent Pro</span>
                  <ArrowUpRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
