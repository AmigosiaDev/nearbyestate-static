import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Apple } from 'lucide-react';
import { GooglePlayIcon } from './Navbar';
import { isIOS, triggerSmartDownload, getPlayStoreTrackedUrl } from '../utils/appLinks';

interface MobileStickyCTAProps {
  onOpenIOSModal?: () => void;
}

export const MobileStickyCTA: React.FC<MobileStickyCTAProps> = ({ onOpenIOSModal }) => {
  const [show, setShow] = useState(false);
  const [appleDevice, setAppleDevice] = useState(false);

  useEffect(() => {
    setAppleDevice(isIOS());

    const handleScroll = () => {
      // Show only when scrolled past 450px and on mobile/tablet screens
      if (window.scrollY > 450) {
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
          className="fixed bottom-3 xs:bottom-4 left-3 xs:left-4 right-3 xs:right-4 z-40 lg:hidden max-w-md mx-auto mb-[env(safe-area-inset-bottom,0px)]"
        >
          <div className="bg-[#0A261D]/95 backdrop-blur-md p-3 xs:p-3.5 rounded-2xl shadow-2xl border border-emerald-500/30 flex items-center justify-between gap-3 text-left">
            <div className="flex items-center gap-2.5 min-w-0">
              <div className="w-9 h-9 rounded-xl bg-emerald-500/20 text-[#00D084] border border-emerald-400/30 flex items-center justify-center font-bold text-xs shrink-0">
                e
              </div>
              <div className="truncate">
                <div className="text-xs font-bold text-white truncate">NearbyEstate</div>
                <div className="text-[10px] text-emerald-300 font-medium truncate">Find properties around you</div>
              </div>
            </div>

            <a
              href={getPlayStoreTrackedUrl('sticky_cta')}
              onClick={(e) => triggerSmartDownload(e, 'sticky_cta', onOpenIOSModal)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-[#00D084] hover:bg-[#00b875] text-[#051A12] text-xs font-bold shrink-0 shadow-sm active:scale-95 transition-all min-h-[44px]"
            >
              {appleDevice ? (
                <>
                  <Apple className="w-3.5 h-3.5 fill-current text-[#051A12]" />
                  <span>Launch App</span>
                </>
              ) : (
                <>
                  <GooglePlayIcon className="w-3.5 h-3.5 fill-current text-[#051A12]" />
                  <span>Get App</span>
                </>
              )}
            </a>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
