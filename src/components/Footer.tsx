import React from 'react';
import { ArrowUpRight, ArrowRight, MapPin, Mail, Phone } from 'lucide-react';
import { BRAND_CONFIG } from '../data/websiteData';
import { GooglePlayIcon } from './Navbar';
import { triggerSmartDownload, getPlayStoreTrackedUrl } from '../utils/appLinks';

interface FooterProps {
  onOpenLegal: (type: 'privacy' | 'terms') => void;
  onOpenIOSModal?: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenLegal, onOpenIOSModal }) => {
  // Active footer style: 'cofactr' (can be set to 'classic' if needed)
  const footerStyle: 'cofactr' | 'classic' = 'cofactr';

  return (
    <>
      {footerStyle === 'cofactr' ? (
        /* =========================================================================
           COFACTR-INSPIRED MINIMALIST HIGH-IMPACT FOOTER
           Features:
           1. Top CTA header: "Get Started with Us" + "Let's find your next property together."
           2. High-contrast mint pill CTA button + Web App link
           3. Compact contact information (email, phone, address, logo)
           4. Massive signature lowercase wordmark "nearbyestate"
           5. Clean bottom bar with Terms, Privacy, and Copyright
           ========================================================================= */
        <footer className="bg-[#04140E] text-white pt-10 sm:pt-14 pb-28 sm:pb-12 relative overflow-hidden text-left border-t border-emerald-500/20">
          {/* Subtle top ambient glow */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-32 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            {/* TOP ROW: Hero CTA Banner on Left + Essential Contact on Right */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start pb-10 sm:pb-14 border-b border-emerald-500/15">
              
              {/* Left Column (Conversion & Headline) */}
              <div className="lg:col-span-7 space-y-4 sm:space-y-5">
                <p className="text-xs sm:text-sm font-semibold tracking-wider text-[#00D084] uppercase">
                  Get Started with NearbyEstate
                </p>

                <h2 className="text-3xl xs:text-4xl sm:text-5xl font-extrabold text-white tracking-tight leading-[1.15] max-w-xl">
                  Find Your Next Home
                </h2>

                <p className="text-sm sm:text-base text-slate-300 max-w-lg leading-relaxed">
                  Find plots, homes, and commercial properties near you. Post ads and connect directly with buyers and sellers.
                </p>

                {/* Primary CTA Buttons */}
                <div className="pt-2 flex flex-wrap items-center gap-3 sm:gap-4">
                  <a
                    href={getPlayStoreTrackedUrl('footer_primary')}
                    onClick={(e) => triggerSmartDownload(e, 'footer_primary', onOpenIOSModal)}
                    target="_blank"
                    rel="noopener noreferrer"
                    id="footer_download_cta"
                    className="inline-flex items-center gap-2.5 px-6 sm:px-7 py-3 rounded-full bg-[#00D084] hover:bg-[#00ba76] text-[#051A12] font-extrabold text-sm shadow-lg shadow-[#00D084]/20 transition-all transform hover:-translate-y-0.5 shrink-0"
                  >
                    <GooglePlayIcon className="w-4 h-4 fill-current text-[#051A12]" />
                    <span>Get Mobile App</span>
                    <ArrowRight className="w-4 h-4 stroke-[2.5]" />
                  </a>

                  <a
                    href={BRAND_CONFIG.webAppUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 sm:px-6 py-3 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 text-white font-bold text-sm transition-all"
                  >
                    <span>Launch Web App</span>
                    <ArrowUpRight className="w-4 h-4 text-emerald-400" />
                  </a>
                </div>
              </div>

              {/* Right Column: Contact Details & Brand Info */}
              <div className="lg:col-span-5 space-y-5 lg:pl-8 lg:border-l lg:border-emerald-500/15">
                {/* Brand Logo */}
                <div>
                  <a href="#hero" className="inline-block" aria-label="NearbyEstate Home">
                    <img
                      src="/nearestatelogo.png"
                      alt="NearbyEstate"
                      className="h-8 sm:h-9 w-auto object-contain"
                    />
                  </a>
                </div>

                {/* Contact Details List */}
                <ul className="space-y-3 text-sm text-slate-300">
                  <li className="flex items-center gap-3">
                    <Mail className="w-4 h-4 text-[#00D084] shrink-0" />
                    <a
                      href="mailto:sayyidnishasns200@gmail.com"
                      className="hover:text-white transition-colors"
                    >
                      contact@nearbyestate.in
                    </a>
                  </li>

                  <li className="flex items-center gap-3">
                    <Phone className="w-4 h-4 text-[#00D084] shrink-0" />
                    <a
                      href="tel:+919876543210"
                      className="hover:text-white transition-colors"
                    >
                      +91 999 500 0000 (Direct Helpline)
                    </a>
                  </li>

                  <li className="flex items-start gap-3">
                    <MapPin className="w-4 h-4 text-[#00D084] shrink-0 mt-0.5" />
                    <span className="text-slate-400 leading-snug">
                      Kerala, India • Amigosia Pvt.
                    </span>
                  </li>
                </ul>

                <p className="text-xs text-slate-400 leading-relaxed pt-1">
                  Location-first real estate discovery platform connecting buyers, tenants, and property owners directly.
                </p>
              </div>
            </div>

            {/* MIDDLE ROW: GIGANTIC BOLD LOWERCASE WORDMARK (Signature Cofactr Style) */}
            <div className="py-6 sm:py-10 text-center select-none overflow-hidden">
              <span className="text-4xl xs:text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-black tracking-tighter text-emerald-400/20 hover:text-emerald-400/30 transition-colors lowercase block leading-none">
                nearbyestate
              </span>
            </div>

            {/* BOTTOM ROW: Legal Links & Copyright */}
            <div className="pt-6 border-t border-emerald-500/15 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
              {/* Left: Legal & Navigation */}
              <div className="flex flex-wrap items-center gap-4 sm:gap-6">
                <button
                  type="button"
                  onClick={() => onOpenLegal('terms')}
                  className="hover:text-[#00D084] transition-colors focus:outline-none cursor-pointer"
                >
                  Terms of Use
                </button>

                <button
                  type="button"
                  onClick={() => onOpenLegal('privacy')}
                  className="hover:text-[#00D084] transition-colors focus:outline-none cursor-pointer"
                >
                  Privacy Policy
                </button>

                <a
                  href="#contact"
                  className="hover:text-[#00D084] transition-colors"
                >
                  Contact & Support
                </a>
              </div>

              {/* Right: Copyright */}
              <div className="text-slate-400 text-center sm:text-right">
                © {BRAND_CONFIG.copyrightYear} All rights reserved. NearbyEstate • Amigosia Pvt.
              </div>
            </div>
          </div>
        </footer>
      ) : (
        /* =========================================================================
           CLASSIC MULTI-COLUMN FOOTER (Previous implementation)
           ========================================================================= */
        <footer className="bg-[#04120D] text-white pt-12 sm:pt-16 pb-10 sm:pb-12 border-t border-emerald-500/20 relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-12 gap-8 sm:gap-10 pb-10 sm:pb-12 border-b border-emerald-500/15">
              <div className="sm:col-span-2 md:col-span-5 space-y-4 text-left">
                <img
                  src="/nearestatelogo.png"
                  alt="NearbyEstate"
                  className="h-8 sm:h-9 w-auto object-contain"
                />
                <p className="text-sm text-slate-400 max-w-sm leading-relaxed">
                  Discover properties around you with NearbyEstate. The location-first mobile platform for houses, apartments, land, commercial shops, and offices. Free property ads.
                </p>
                <div className="flex items-center gap-2 text-xs text-emerald-400 font-semibold">
                  <MapPin className="w-4 h-4 text-brand-accent shrink-0" />
                  <span>Available on Android & Web App</span>
                </div>
              </div>

              <div className="md:col-span-3 space-y-3 text-left">
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">Navigation</h4>
                <ul className="space-y-2 text-sm text-slate-300">
                  <li><a href="#hero" className="hover:text-emerald-400 transition-colors">Home</a></li>
                  <li><a href="#categories" className="hover:text-emerald-400 transition-colors">Property Categories</a></li>
                  <li><a href="#why-us" className="hover:text-emerald-400 transition-colors">Why NearbyEstate</a></li>
                  <li>
                    <a
                      href={BRAND_CONFIG.webAppUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-emerald-400 hover:text-emerald-300 font-semibold flex items-center gap-1 transition-colors pt-1"
                    >
                      <span>Launch Web App</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </a>
                  </li>
                </ul>
              </div>

              <div className="md:col-span-4 space-y-4 text-left">
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">Get NearbyEstate</h4>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Install the Android app from Google Play or explore directly in your mobile browser with zero installation.
                </p>
                <div className="space-y-2.5">
                  <a
                    href={BRAND_CONFIG.playStoreUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-3 px-5 py-3 rounded-2xl bg-white/10 hover:bg-white/20 border border-white/20 text-white font-semibold text-sm transition-all group w-full"
                  >
                    <GooglePlayIcon className="w-5 h-5 fill-current text-emerald-400" />
                    <div className="text-left leading-tight">
                      <div className="text-[10px] uppercase text-slate-400">Download for Android</div>
                      <div className="text-sm font-bold text-white">Google Play Store</div>
                    </div>
                    <ArrowUpRight className="w-4 h-4 ml-auto text-slate-400 group-hover:text-white transition-colors" />
                  </a>
                </div>

                <div className="pt-2 flex flex-wrap gap-4 text-xs text-slate-400">
                  <button
                    type="button"
                    onClick={() => onOpenLegal('privacy')}
                    className="hover:text-emerald-400 transition-colors focus:outline-none focus:underline"
                  >
                    Privacy Policy
                  </button>
                  <span>•</span>
                  <button
                    type="button"
                    onClick={() => onOpenLegal('terms')}
                    className="hover:text-emerald-400 transition-colors focus:outline-none focus:underline"
                  >
                    Terms & Conditions
                  </button>
                </div>
              </div>
            </div>

            <div className="pt-8 text-xs text-slate-500 text-left">
              © {BRAND_CONFIG.copyrightYear} NearbyEstate • Amigosia Pvt. All rights reserved.
            </div>
          </div>
        </footer>
      )}
    </>
  );
};

