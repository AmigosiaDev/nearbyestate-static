import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { BRAND_CONFIG } from '../data/websiteData';
import { GooglePlayIcon } from './Navbar';

export const MobileStickyCTA: React.FC = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show only when scrolled past 500px and on mobile/tablet screens
      if (window.scrollY > 500) {
        setShow(true);
      } else {
        setShow(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ y: 80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 80, opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed bottom-4 left-4 right-4 z-40 lg:hidden max-w-md mx-auto mb-[env(safe-area-inset-bottom,0px)]"
        >
          <div className="bg-slate-900/95 backdrop-blur-md p-3 xs:p-3.5 rounded-2xl shadow-2xl border border-slate-700/80 flex items-center justify-between gap-3 text-left">
            <div className="flex items-center gap-2.5 min-w-0">
              <div className="w-8 h-8 rounded-xl bg-brand-800 text-white flex items-center justify-center font-bold text-xs shrink-0">
                e
              </div>
              <div className="truncate">
                <div className="text-xs font-bold text-white truncate">NearbyEstate</div>
                <div className="text-[10px] text-emerald-400 font-medium truncate">Find properties around you</div>
              </div>
            </div>

            <a
              href={BRAND_CONFIG.playStoreUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-brand-700 hover:bg-brand-600 text-white text-xs font-bold shrink-0 shadow-sm active:scale-95 transition-all"
            >
              <GooglePlayIcon className="w-3.5 h-3.5 fill-current text-white" />
              <span>Download</span>
            </a>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
