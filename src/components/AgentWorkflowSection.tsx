import React from 'react';
import { motion } from 'framer-motion';
import { UserRound, MapPin, LocateFixed, Phone, ArrowRight } from 'lucide-react';

interface WorkflowStep {
  step: string;
  title: string;
  description: string;
  icon: React.ReactNode;
}

const STEPS: WorkflowStep[] = [
  {
    step: '01',
    title: 'Build Your Profile',
    description:
      'Create your agent profile or register your agency to establish your local presence.',
    icon: <UserRound className="w-5 h-5 text-[#00D084]" strokeWidth={1.8} />,
  },
  {
    step: '02',
    title: 'List Your Properties',
    description:
      'Showcase property details, photos, pricing, and location using Google Plus Codes.',
    icon: <MapPin className="w-5 h-5 text-[#00D084]" strokeWidth={1.8} />,
  },
  {
    step: '03',
    title: 'Reach Nearby Buyers',
    description:
      'Help local buyers and tenants discover relevant property listings through location-based discovery.',
    icon: <LocateFixed className="w-5 h-5 text-[#00D084]" strokeWidth={1.8} />,
  },
  {
    step: '04',
    title: 'Connect Directly',
    description:
      'Receive property inquiries and coordinate conversations and visits with interested clients.',
    icon: <Phone className="w-5 h-5 text-[#00D084]" strokeWidth={1.8} />,
  },
];

export const AgentWorkflowSection: React.FC = () => {
  return (
    <section
      id="agent-workflow"
      className="py-16 sm:py-24 lg:py-28 bg-[#0A231B] relative overflow-hidden text-white border-t border-[#285044]/40"
    >
      {/* ================= BACKGROUND: SUBTLE TOPOGRAPHIC CONTOUR LINES ================= */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-0" aria-hidden="true">
        {/* Top-Left Corner: Abstract Elevation Map Contours */}
        <svg
          className="absolute -top-12 -left-12 w-[340px] sm:w-[460px] h-[340px] sm:h-[460px] stroke-[#00D084] opacity-[0.06] pointer-events-none select-none"
          fill="none"
          viewBox="0 0 500 500"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M-60,100 C60,60 140,180 240,160 S420,240 480,210" strokeWidth="1.2" />
          <path d="M-60,170 C70,130 160,250 270,220 S440,310 510,280" strokeWidth="1.2" />
          <path d="M-60,240 C80,200 180,320 300,280 S460,380 540,350" strokeWidth="1.2" />
          <path d="M-60,310 C90,270 200,390 330,340 S480,450 570,420" strokeWidth="1.2" />
          <path d="M80,-60 C150,80 260,120 310,220 S450,280 520,330" strokeWidth="1" strokeDasharray="4 6" />
          <path d="M160,-60 C230,90 330,140 380,240 S490,320 560,380" strokeWidth="1.2" />
        </svg>

        {/* Bottom-Right Corner: Topographic Contour Curves */}
        <svg
          className="absolute -bottom-12 -right-12 w-[360px] sm:w-[480px] h-[360px] sm:h-[480px] stroke-[#00D084] opacity-[0.06] pointer-events-none select-none"
          fill="none"
          viewBox="0 0 500 500"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M20,560 C140,420 220,360 320,260 S460,140 540,40" strokeWidth="1.2" />
          <path d="M90,560 C200,440 270,390 370,300 S490,200 560,110" strokeWidth="1.2" />
          <path d="M160,560 C260,470 330,420 420,340 S510,260 580,180" strokeWidth="1.2" />
          <path d="M230,560 C320,490 380,450 460,390 S530,330 600,250" strokeWidth="1.2" />
          <path d="M-20,440 C110,330 230,280 320,180 S450,80 520,-20" strokeWidth="1" strokeDasharray="4 6" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* ================= SECTION INTRODUCTION ================= */}
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-20 space-y-3.5">
          {/* Eyebrow */}
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#00D084]/10 border border-[#00D084]/25 text-[#00D084] text-[11px] font-bold uppercase tracking-wider">
            <span>AGENT WORKFLOW</span>
          </div>

          {/* Heading */}
          <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-extrabold text-white tracking-tight leading-tight">
            Your Local Market. Your Next Growth.
          </h2>

          {/* Description */}
          <p className="text-[#C3D4CC] text-sm sm:text-base leading-relaxed max-w-2xl mx-auto font-normal">
            Put your properties on the map, reach nearby customers, and build stronger connections.
          </p>
        </div>

        {/* ================= 4-STEP WORKFLOW CARDS ================= */}
        <div className="relative">
          {/* Subtle horizontal connecting line on desktop behind cards */}
          <div
            className="hidden lg:block absolute top-[44px] left-[10%] right-[10%] h-[1px] bg-gradient-to-r from-transparent via-[#00D084]/20 to-transparent pointer-events-none z-0"
            aria-hidden="true"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-7 items-stretch relative z-10">
            {STEPS.map((item, index) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: index * 0.08 }}
                whileHover={{ y: -3 }}
                className="bg-[#12352B] rounded-2xl sm:rounded-3xl p-6 sm:p-7 border border-[#285044] hover:border-[#00D084]/50 transition-all duration-300 text-left flex flex-col justify-between group shadow-sm hover:shadow-lg hover:shadow-[#00D084]/5"
              >
                <div>
                  {/* Step Header: Icon & Clear Step Number */}
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-10 h-10 rounded-xl bg-[#00D084]/10 border border-[#00D084]/25 flex items-center justify-center transition-colors group-hover:bg-[#00D084]/20 shrink-0">
                      {item.icon}
                    </div>
                    <span className="text-xs font-bold font-mono tracking-wider text-[#00D084] bg-[#00D084]/10 border border-[#00D084]/25 px-2.5 py-0.5 rounded-full">
                      {item.step}
                    </span>
                  </div>

                  {/* Step Heading */}
                  <h3 className="text-lg sm:text-[19px] font-bold text-white mb-2 leading-snug tracking-tight">
                    {item.title}
                  </h3>

                  {/* Concise Description */}
                  <p className="text-xs sm:text-[13px] text-[#C3D4CC] leading-relaxed font-normal">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* ================= BOTTOM CALL-TO-ACTION ================= */}
        <div className="mt-16 sm:mt-20 text-center max-w-xl mx-auto space-y-3">
          <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
            Ready to start listing?
          </h3>
          <p className="text-xs sm:text-sm text-[#C3D4CC] leading-relaxed">
            Explore the available plans and find the right fit for your property portfolio.
          </p>
          <div className="pt-2">
            <a
              href="#agent-pro"
              className="inline-flex items-center justify-center gap-2 px-6 sm:px-7 py-3 rounded-full bg-[#00D084] hover:bg-[#00b875] text-[#0A231B] text-xs sm:text-sm font-bold shadow-md hover:shadow-lg transition-all duration-200 transform hover:-translate-y-0.5 active:translate-y-0"
            >
              <span>Explore Agent Plans</span>
              <ArrowRight className="w-4 h-4 ml-0.5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
