import React, { useEffect, useRef, useState } from 'react';
import { motion, useInView, useReducedMotion } from 'framer-motion';
import { UserRound, MapPin, LocateFixed, Phone } from 'lucide-react';

interface WorkflowStep {
  step: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  isRadar?: boolean;
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
    isRadar: true,
  },
  {
    step: '04',
    title: 'Connect Directly',
    description:
      'Receive property inquiries and coordinate conversations and visits with interested clients.',
    icon: <Phone className="w-5 h-5 text-[#00D084]" strokeWidth={1.8} />,
  },
];

/* ── Static star data: x/y in %, size px, opacity, twinkle, duration s, delay s ── */
const STARS = [
  { x:  3, y:  4, s: 3, o: 0.45, t: false, dur: 3.2, d: 0.0 },
  { x: 15, y:  4, s: 2, o: 0.60, t: true , dur: 4.0, d: 0.3 },
  { x: 31, y:  4, s: 2, o: 0.65, t: false, dur: 4.8, d: 0.6 },
  { x: 39, y:  6, s: 3, o: 0.80, t: false, dur: 5.5, d: 0.9 },
  { x: 55, y:  4, s: 2, o: 0.50, t: false, dur: 3.6, d: 1.2 },
  { x: 63, y:  4, s: 2, o: 0.55, t: true , dur: 4.5, d: 1.5 },
  { x: 79, y:  5, s: 3, o: 0.70, t: false, dur: 5.2, d: 1.8 },
  { x: 87, y:  4, s: 2, o: 0.75, t: false, dur: 3.8, d: 2.1 },
  { x:  5, y: 13, s: 2, o: 0.75, t: false, dur: 4.8, d: 0.4 },
  { x: 13, y: 10, s: 2, o: 0.45, t: true , dur: 5.5, d: 0.7 },
  { x: 29, y: 15, s: 3, o: 0.60, t: false, dur: 3.6, d: 1.0 },
  { x: 37, y: 12, s: 2, o: 0.65, t: false, dur: 4.5, d: 1.3 },
  { x: 53, y: 17, s: 2, o: 0.80, t: false, dur: 5.2, d: 1.6 },
  { x: 61, y: 14, s: 3, o: 0.50, t: true , dur: 3.8, d: 1.9 },
  { x: 77, y: 11, s: 2, o: 0.55, t: false, dur: 3.2, d: 2.2 },
  { x: 94, y: 16, s: 2, o: 0.70, t: false, dur: 4.0, d: 2.5 },
  { x:  3, y: 27, s: 2, o: 0.70, t: false, dur: 3.6, d: 0.8 },
  { x: 11, y: 24, s: 3, o: 0.75, t: true , dur: 4.5, d: 1.1 },
  { x: 27, y: 21, s: 2, o: 0.45, t: false, dur: 5.2, d: 1.4 },
  { x: 44, y: 26, s: 2, o: 0.60, t: false, dur: 3.8, d: 1.7 },
  { x: 51, y: 23, s: 3, o: 0.65, t: false, dur: 3.2, d: 2.0 },
  { x: 68, y: 28, s: 2, o: 0.80, t: true , dur: 4.0, d: 2.3 },
  { x: 75, y: 25, s: 2, o: 0.50, t: false, dur: 4.8, d: 2.6 },
  { x: 92, y: 22, s: 3, o: 0.55, t: false, dur: 5.5, d: 2.9 },
  { x:  3, y: 33, s: 3, o: 0.55, t: false, dur: 5.2, d: 1.2 },
  { x: 18, y: 38, s: 2, o: 0.70, t: true , dur: 3.8, d: 1.5 },
  { x: 25, y: 35, s: 2, o: 0.75, t: false, dur: 3.2, d: 1.8 },
  { x: 42, y: 32, s: 3, o: 0.45, t: false, dur: 4.0, d: 2.1 },
  { x: 49, y: 37, s: 2, o: 0.60, t: false, dur: 4.8, d: 2.4 },
  { x: 66, y: 34, s: 2, o: 0.65, t: true , dur: 5.5, d: 2.7 },
  { x: 73, y: 39, s: 3, o: 0.80, t: false, dur: 3.6, d: 0.0 },
  { x: 90, y: 36, s: 2, o: 0.50, t: false, dur: 4.5, d: 0.3 },
  { x:  3, y: 47, s: 2, o: 0.50, t: false, dur: 3.2, d: 1.6 },
  { x: 16, y: 44, s: 2, o: 0.55, t: true , dur: 4.0, d: 1.9 },
  { x: 23, y: 49, s: 3, o: 0.70, t: false, dur: 4.8, d: 2.2 },
  { x: 40, y: 46, s: 2, o: 0.75, t: false, dur: 5.5, d: 2.5 },
  { x: 56, y: 43, s: 2, o: 0.45, t: false, dur: 3.6, d: 2.8 },
  { x: 64, y: 48, s: 3, o: 0.60, t: true , dur: 4.5, d: 0.1 },
  { x: 80, y: 45, s: 2, o: 0.65, t: false, dur: 5.2, d: 0.4 },
  { x: 88, y: 50, s: 2, o: 0.80, t: false, dur: 3.8, d: 0.7 },
  { x:  6, y: 62, s: 2, o: 0.80, t: false, dur: 4.8, d: 2.0 },
  { x: 14, y: 59, s: 3, o: 0.50, t: true , dur: 5.5, d: 2.3 },
  { x: 30, y: 56, s: 2, o: 0.55, t: false, dur: 3.6, d: 2.6 },
  { x: 38, y: 61, s: 2, o: 0.70, t: false, dur: 4.5, d: 2.9 },
  { x: 54, y: 58, s: 3, o: 0.75, t: false, dur: 5.2, d: 0.2 },
  { x: 62, y: 55, s: 2, o: 0.45, t: true , dur: 3.8, d: 0.5 },
  { x: 78, y: 60, s: 2, o: 0.60, t: false, dur: 3.2, d: 0.8 },
  { x: 86, y: 57, s: 3, o: 0.65, t: false, dur: 4.0, d: 1.1 },
  { x:  4, y: 68, s: 3, o: 0.65, t: false, dur: 3.6, d: 2.4 },
  { x: 12, y: 73, s: 2, o: 0.80, t: true , dur: 4.5, d: 2.7 },
  { x: 28, y: 70, s: 2, o: 0.50, t: false, dur: 5.2, d: 0.0 },
  { x: 36, y: 67, s: 3, o: 0.55, t: false, dur: 3.8, d: 0.3 },
  { x: 52, y: 72, s: 2, o: 0.70, t: false, dur: 3.2, d: 0.6 },
  { x: 69, y: 69, s: 2, o: 0.75, t: true , dur: 4.0, d: 0.9 },
  { x: 76, y: 66, s: 3, o: 0.45, t: false, dur: 4.8, d: 1.2 },
  { x: 93, y: 71, s: 2, o: 0.60, t: false, dur: 5.5, d: 1.5 },
  { x:  3, y: 82, s: 2, o: 0.60, t: false, dur: 5.2, d: 2.8 },
  { x: 19, y: 79, s: 2, o: 0.65, t: true , dur: 3.8, d: 0.1 },
  { x: 26, y: 84, s: 3, o: 0.80, t: false, dur: 3.2, d: 0.4 },
  { x: 43, y: 81, s: 2, o: 0.50, t: false, dur: 4.0, d: 0.7 },
  { x: 50, y: 78, s: 2, o: 0.55, t: false, dur: 4.8, d: 1.0 },
  { x: 67, y: 83, s: 3, o: 0.70, t: true , dur: 5.5, d: 1.3 },
  { x: 74, y: 80, s: 2, o: 0.75, t: false, dur: 3.6, d: 1.6 },
  { x: 91, y: 77, s: 2, o: 0.45, t: false, dur: 4.5, d: 1.9 },
  { x:  3, y: 88, s: 2, o: 0.45, t: false, dur: 3.2, d: 0.2 },
  { x: 17, y: 93, s: 3, o: 0.60, t: true , dur: 4.0, d: 0.5 },
  { x: 24, y: 90, s: 2, o: 0.65, t: false, dur: 4.8, d: 0.8 },
  { x: 41, y: 95, s: 2, o: 0.80, t: false, dur: 5.5, d: 1.1 },
  { x: 48, y: 92, s: 3, o: 0.50, t: false, dur: 3.6, d: 1.4 },
  { x: 65, y: 89, s: 2, o: 0.55, t: true , dur: 4.5, d: 1.7 },
  { x: 81, y: 94, s: 2, o: 0.70, t: false, dur: 5.2, d: 2.0 },
  { x: 89, y: 91, s: 3, o: 0.75, t: false, dur: 3.8, d: 2.3 },
] as const;

/* ── Radar Pulse rings behind card 03 ── */
const RadarPulse: React.FC<{ reduced: boolean }> = ({ reduced }) => (
  <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden rounded-2xl sm:rounded-3xl" aria-hidden="true">
    {[0, 1, 2].map((i) => (
      <span
        key={i}
        className="absolute rounded-full border border-[#00D084]/20"
        style={
          reduced
            ? { width: 80 + i * 52, height: 80 + i * 52, opacity: 0.08 }
            : {
                width: 80 + i * 52,
                height: 80 + i * 52,
                animation: `radarPing 2.8s ease-out ${i * 0.9}s infinite`,
              }
        }
      />
    ))}
  </div>
);

export const AgentWorkflowSection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-80px' });
  const reduced = useReducedMotion() ?? false;

  /* active card index for staggered border glow */
  const [activeIdx, setActiveIdx] = useState<number>(-1);

  useEffect(() => {
    if (!isInView || reduced) {
      if (reduced) setActiveIdx(3); // show all lit if reduced motion
      return;
    }
    STEPS.forEach((_, i) => {
      setTimeout(() => setActiveIdx(i), 400 + i * 500);
    });
  }, [isInView, reduced]);

  return (
    <section
      id="agent-workflow"
      className="py-10 sm:py-14 lg:py-16 bg-[#0C2B21] relative overflow-hidden text-white"
    >
      {/* ── CSS for radar ping + journey traveler ── */}
      <style>{`
        @keyframes radarPing {
          0%   { transform: scale(0.6); opacity: 0.22; }
          70%  { transform: scale(1.5); opacity: 0.06; }
          100% { transform: scale(1.9); opacity: 0; }
        }
        @keyframes travelH {
          0%   { left: 0%; opacity: 0; }
          5%   { opacity: 1; }
          95%  { opacity: 1; }
          100% { left: 100%; opacity: 0; }
        }
        @keyframes travelV {
          0%   { top: 0%; opacity: 0; }
          5%   { opacity: 1; }
          95%  { opacity: 1; }
          100% { top: 100%; opacity: 0; }
        }
        .traveler-h { animation: travelH 2.4s ease-in-out 0.3s forwards; }
        .traveler-v { animation: travelV 2.4s ease-in-out 0.3s forwards; }
        @keyframes twinkle {
          0%, 100% { opacity: var(--so); }
          50%       { opacity: calc(var(--so) * 0.12); }
        }
        .star-twinkle {
          animation: twinkle var(--sd, 4s) ease-in-out var(--sl, 0s) infinite;
        }
        @media (prefers-reduced-motion: reduce) {
          .traveler-h, .traveler-v { animation: none; opacity: 0; }
          .star-twinkle { animation: none; }
        }
      `}</style>

      {/* ── BACKGROUND: topographic contours ── */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-0" aria-hidden="true">

        {/* Soft centered radial depth glow — same-family green, very low opacity */}
        <div
          className="absolute inset-0"
          style={{
            background:
              'radial-gradient(ellipse 65% 55% at 50% 58%, rgba(0,208,132,0.08) 0%, rgba(12,43,33,0.5) 55%, transparent 100%)',
          }}
        />

        {/* Starfield — CSS-only dots, some twinkling */}
        {STARS.map((star, i) => (
          <span
            key={i}
            className={star.t ? 'star-twinkle' : undefined}
            style={{
              position: 'absolute',
              left: `${star.x}%`,
              top: `${star.y}%`,
              width: `${star.s}px`,
              height: `${star.s}px`,
              borderRadius: '50%',
              background: star.x % 3 === 0
                ? `rgba(0,208,132,${star.o})`
                : `rgba(255,255,255,${star.o})`,
              ['--so' as string]: star.o,
              ['--sd' as string]: `${star.dur}s`,
              ['--sl' as string]: star.t ? `${star.d}s` : '0s',
            } as React.CSSProperties}
          />
        ))}

        <svg
          className="absolute -top-12 -left-12 w-[340px] sm:w-[460px] h-[340px] sm:h-[460px] stroke-[#00D084] opacity-[0.06] pointer-events-none select-none"
          fill="none" viewBox="0 0 500 500" xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M-60,100 C60,60 140,180 240,160 S420,240 480,210" strokeWidth="1.2" />
          <path d="M-60,170 C70,130 160,250 270,220 S440,310 510,280" strokeWidth="1.2" />
          <path d="M-60,240 C80,200 180,320 300,280 S460,380 540,350" strokeWidth="1.2" />
          <path d="M-60,310 C90,270 200,390 330,340 S480,450 570,420" strokeWidth="1.2" />
          <path d="M80,-60 C150,80 260,120 310,220 S450,280 520,330" strokeWidth="1" strokeDasharray="4 6" />
          <path d="M160,-60 C230,90 330,140 380,240 S490,320 560,380" strokeWidth="1.2" />
        </svg>
        <svg
          className="absolute -bottom-12 -right-12 w-[360px] sm:w-[480px] h-[360px] sm:h-[480px] stroke-[#00D084] opacity-[0.06] pointer-events-none select-none"
          fill="none" viewBox="0 0 500 500" xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M20,560 C140,420 220,360 320,260 S460,140 540,40" strokeWidth="1.2" />
          <path d="M90,560 C200,440 270,390 370,300 S490,200 560,110" strokeWidth="1.2" />
          <path d="M160,560 C260,470 330,420 420,340 S510,260 580,180" strokeWidth="1.2" />
          <path d="M230,560 C320,490 380,450 460,390 S530,330 600,250" strokeWidth="1.2" />
          <path d="M-20,440 C110,330 230,280 320,180 S450,80 520,-20" strokeWidth="1" strokeDasharray="4 6" />
        </svg>
      </div>

      <div ref={sectionRef} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Top-left aligned label */}
        <div className="text-left mb-2 sm:mb-3">
          <span className="text-[15px] italic text-white font-normal select-none">
            For Agents
          </span>
        </div>

        {/* Section header */}
        <div className="text-center max-w-3xl mx-auto mb-6 sm:mb-8 space-y-3.5">
          <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-extrabold text-white tracking-tight leading-tight">
            Your Local Market &amp; Your Next Growth.
          </h2>
          <p className="text-[#C3D4CC] text-sm sm:text-base leading-relaxed max-w-2xl mx-auto font-normal">
            List your properties in your area and let nearby customers find you easily.
          </p>
        </div>

        {/* Journey line + cards */}
        <div className="relative">
          {/* Faint radial depth glow — same green, slightly lighter, behind cards only */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                'radial-gradient(ellipse 75% 65% at 50% 50%, rgba(0,208,132,0.12) 0%, rgba(0,208,132,0.03) 60%, transparent 100%)',
            }}
            aria-hidden="true"
          />

          {/* ── Desktop horizontal journey line ── */}
          <div
            className="hidden lg:block absolute top-[44px] left-[10%] right-[10%] h-[1px] z-0 pointer-events-none overflow-hidden"
            aria-hidden="true"
          >
            {/* Base dim line */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#00D084]/15 to-transparent" />
            {/* Glowing traveler dot */}
            {isInView && !reduced && (
              <span
                className="traveler-h absolute top-1/2 -translate-y-1/2 w-6 h-6 rounded-full"
                style={{
                  background: 'radial-gradient(circle, #00D084 0%, #00D08440 60%, transparent 100%)',
                  boxShadow: '0 0 12px 4px #00D08466',
                  marginLeft: '-12px',
                }}
              />
            )}
          </div>

          {/* ── Mobile vertical journey line ── */}
          <div
            className="lg:hidden absolute top-[5%] bottom-[5%] left-[28px] w-[1px] z-0 pointer-events-none overflow-hidden"
            aria-hidden="true"
          >
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#00D084]/15 to-transparent" />
            {isInView && !reduced && (
              <span
                className="traveler-v absolute left-1/2 -translate-x-1/2 w-6 h-6 rounded-full"
                style={{
                  background: 'radial-gradient(circle, #00D084 0%, #00D08440 60%, transparent 100%)',
                  boxShadow: '0 0 12px 4px #00D08466',
                  marginTop: '-12px',
                }}
              />
            )}
          </div>

          {/* ── Cards grid ── */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-7 items-stretch relative z-10">
            {STEPS.map((item, index) => {
              const lit = reduced || activeIdx >= index;
              return (
                <motion.div
                  key={item.step}
                  initial={{ opacity: 0, y: 14 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.35, delay: index * 0.08 }}
                  whileHover={{ y: -3 }}
                  className="relative bg-[#12352B] rounded-2xl sm:rounded-3xl p-6 sm:p-7 text-left flex flex-col justify-between group shadow-sm transition-all duration-500"
                  style={{
                    border: lit
                      ? '1px solid rgba(0,208,132,0.45)'
                      : '1px solid #285044',
                    boxShadow: lit
                      ? '0 0 18px 2px rgba(0,208,132,0.08)'
                      : undefined,
                  }}
                >
                  {/* ENHANCEMENT 3 — Radar pulse (card 03 only) */}
                  {item.isRadar && <RadarPulse reduced={reduced} />}

                  <div className="relative z-10">
                    {/* Step Header: Icon & Step Number */}
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

                    {/* Description */}
                    <p className="text-xs sm:text-[13px] text-[#C3D4CC] leading-relaxed font-normal">
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>



      </div>
    </section>
  );
};
