import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Sparkles, QrCode, Smartphone, ArrowUpRight, Star, Globe, Apple, ExternalLink } from 'lucide-react';
import { BRAND_CONFIG } from '../data/websiteData';
import { GooglePlayIcon } from './Navbar';

export const DownloadCTA: React.FC = () => {
  return (
    <section id="download" className="py-16 sm:py-20 md:py-28 bg-slate-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6 }}
          className="relative rounded-[28px] xs:rounded-[36px] sm:rounded-[40px] bg-gradient-to-br from-brand-900 via-brand-800 to-emerald-950 text-white overflow-hidden p-6 sm:p-10 lg:p-16 shadow-2xl"
        >
          {/* Decorative glowing backdrops */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-500/20 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-brand-mint/10 rounded-full blur-2xl pointer-events-none" />
          <div className="absolute inset-0 bg-[radial-gradient(#A1D4D4_1px,transparent_1px)] [background-size:24px_24px] opacity-10 pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center relative z-10">
            {/* Left Column: Heading & Value */}
            <div className="lg:col-span-7 space-y-5 sm:space-y-6 text-left">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/20 border border-emerald-400/30 text-emerald-300 text-xs font-bold uppercase tracking-wider">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Unlimited Ads • 100% Free to Use</span>
              </div>

              <h2 className="text-2xl xs:text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight text-white">
                Your Next Property Could Be Closer Than You Think.
              </h2>

              <p className="text-sm sm:text-base lg:text-lg text-emerald-100 max-w-xl leading-relaxed">
                Discover properties around you with NearbyEstate. Available as a dedicated Android app on Google Play or directly in any web browser.
              </p>

              {/* Action Buttons & Desktop QR Code */}
              <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 sm:gap-4">
                {/* Google Play Button */}
                <a
                  href={BRAND_CONFIG.playStoreUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  id="bottom_download_click"
                  className="inline-flex items-center justify-center gap-3 px-6 sm:px-7 py-3.5 sm:py-4 rounded-2xl bg-white hover:bg-emerald-50 text-slate-900 font-bold text-sm sm:text-base shadow-xl hover:shadow-2xl transition-all duration-200 transform hover:-translate-y-1 focus:outline-none focus:ring-4 focus:ring-white/40 group w-full sm:w-auto"
                >
                  <GooglePlayIcon className="w-5 sm:w-6 h-5 sm:h-6 fill-current text-slate-900 transition-transform group-hover:scale-110" />
                  <div className="text-left leading-tight">
                    <div className="text-[10px] uppercase font-bold text-slate-500">Download on</div>
                    <div className="text-sm sm:text-base font-extrabold text-slate-900">Google Play</div>
                  </div>
                </a>

                {/* Launch Web App Button */}
                <a
                  href={BRAND_CONFIG.webAppUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  id="bottom_webapp_click"
                  className="inline-flex items-center justify-center gap-3 px-5 sm:px-6 py-3.5 sm:py-4 rounded-2xl bg-emerald-950/70 hover:bg-emerald-900/90 text-white font-bold text-sm sm:text-base border border-emerald-500/40 shadow-xl transition-all duration-200 transform hover:-translate-y-1 group w-full sm:w-auto"
                >
                  <Globe className="w-5 h-5 text-emerald-400 group-hover:rotate-12 transition-transform" />
                  <div className="text-left leading-tight">
                    <div className="text-[10px] uppercase font-bold text-emerald-300">Try in Browser</div>
                    <div className="text-sm sm:text-base font-extrabold text-white flex items-center gap-1.5">
                      <span>Launch Web App</span>
                      <ExternalLink className="w-3.5 h-3.5 opacity-70" />
                    </div>
                  </div>
                </a>

                {/* QR Code Helper for Desktop visitors (xl+) */}
                <div className="hidden xl:flex items-center gap-3 bg-emerald-950/60 backdrop-blur-md border border-emerald-500/30 px-3.5 py-2.5 rounded-2xl">
                  <div className="w-10 h-10 bg-white p-1 rounded-xl flex items-center justify-center shrink-0">
                    <img
                      src={`https://api.qrserver.com/v1/create-qr-code/?size=120x120&data=${encodeURIComponent(BRAND_CONFIG.playStoreUrl)}`}
                      alt="Scan to download on Google Play"
                      className="w-full h-full object-contain"
                      loading="lazy"
                    />
                  </div>
                  <div className="text-left">
                    <div className="text-xs font-bold text-white flex items-center gap-1">
                      <QrCode className="w-3 h-3 text-emerald-400" />
                      <span>Scan QR</span>
                    </div>
                    <div className="text-[10px] text-emerald-300">Google Play</div>
                  </div>
                </div>
              </div>

              {/* iOS / Safari Support Callout */}
              <div className="pt-2 flex items-center gap-2.5 text-xs text-emerald-200/90 bg-emerald-950/40 border border-emerald-500/20 px-3.5 py-2 rounded-xl max-w-lg">
                <Apple className="w-4 h-4 text-emerald-300 shrink-0" />
                <span>
                  <strong>On Apple iPhone/iPad?</strong> Open{' '}
                  <a
                    href={BRAND_CONFIG.webAppUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline hover:text-white font-semibold"
                  >
                    nearestate.space
                  </a>{' '}
                  in Safari and tap &ldquo;Add to Home Screen&rdquo; to install.
                </span>
              </div>

              {/* Trust Indicators */}
              <div className="pt-2 flex flex-wrap items-center gap-4 sm:gap-6 text-xs text-emerald-200/80">
                <div className="flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Verified Google Play APK</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Smartphone className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Fast & Lightweight</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Star className="w-4 h-4 text-amber-400 fill-amber-400 shrink-0" />
                  <span>Free Unlimited Ads</span>
                </div>
              </div>
            </div>

            {/* Right Column: Visual Device Showcase */}
            <div className="lg:col-span-5 flex justify-center items-center">
              <div className="relative w-full max-w-[260px] xs:max-w-[280px] h-80 sm:h-96 bg-slate-950 rounded-3xl p-3 border-4 border-slate-700 shadow-2xl overflow-hidden flex flex-col justify-between text-left mx-auto">
                {/* Visual Header */}
                <div className="flex items-center justify-between border-b border-slate-800 pb-2">
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-6 rounded-lg bg-emerald-700 text-white font-bold text-xs flex items-center justify-center">
                      e
                    </div>
                    <span className="text-xs font-bold text-white">NearbyEstate</span>
                  </div>
                  <span className="text-[10px] px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 font-mono">
                    Live
                  </span>
                </div>

                {/* Body Card */}
                <div className="space-y-2 py-2">
                  <div className="h-28 sm:h-32 rounded-xl overflow-hidden bg-slate-800 relative">
                    <img
                      src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=500&q=80"
                      alt="Property"
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        e.currentTarget.src = '/images/home.jpg';
                      }}
                    />
                    <div className="absolute top-2 left-2 bg-black/60 px-2 py-0.5 rounded text-[9px] text-white font-bold">
                      1.5 km away
                    </div>
                  </div>
                  <div className="text-xs font-bold text-white truncate">Independent House / Villa</div>
                  <div className="text-[10px] text-emerald-400 font-bold">₹52 Lakh • Available Near You</div>
                </div>

                {/* Play CTA link */}
                <a
                  href={BRAND_CONFIG.playStoreUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-2.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-xs flex items-center justify-center gap-1.5 transition-colors"
                >
                  <GooglePlayIcon className="w-3.5 h-3.5 fill-current" />
                  <span>Get NearbyEstate on Google Play</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
