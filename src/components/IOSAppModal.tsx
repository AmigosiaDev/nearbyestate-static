import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Apple, ExternalLink, Share, PlusSquare } from 'lucide-react';
import { BRAND_CONFIG } from '../data/websiteData';

interface IOSAppModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const IOSAppModal: React.FC<IOSAppModalProps> = ({ isOpen, onClose }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/80 backdrop-blur-md"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            className="relative w-full max-w-md bg-[#0A261D] border border-emerald-500/30 rounded-3xl p-6 shadow-2xl text-white text-left z-10 overflow-hidden"
          >
            {/* Ambient Background Glow */}
            <div className="absolute top-0 right-0 w-48 h-48 bg-[#00D084]/15 rounded-full blur-3xl pointer-events-none" />

            {/* Header */}
            <div className="flex items-center justify-between pb-4 border-b border-white/10">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-2xl bg-white/10 flex items-center justify-center border border-white/15">
                  <Apple className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="font-extrabold text-lg text-white">Apple iOS Experience</h3>
                  <p className="text-xs text-emerald-300">Fast & Native-Feel Web App (PWA)</p>
                </div>
              </div>

              <button
                type="button"
                onClick={onClose}
                className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-slate-300 hover:text-white transition-colors"
                aria-label="Close modal"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Body */}
            <div className="py-5 space-y-4">
              <p className="text-xs sm:text-sm text-slate-200 leading-relaxed">
                NearbyEstate is optimized for iPhone and iPad as a high-speed Progressive Web App. You get full access to verified listings, interactive radar maps, and direct owner connections.
              </p>

              {/* Step Guide for Adding to Home Screen */}
              <div className="bg-black/30 border border-white/10 rounded-2xl p-4 space-y-3">
                <div className="text-[11px] font-bold uppercase tracking-wider text-emerald-400">
                  Quick Install on iPhone (Safari):
                </div>

                <div className="flex items-start gap-3 text-xs text-slate-300">
                  <div className="w-5 h-5 rounded-full bg-emerald-500/20 text-[#00D084] font-bold text-[10px] flex items-center justify-center shrink-0 mt-0.5">
                    1
                  </div>
                  <div>
                    Tap <strong className="text-white">Launch Web App</strong> below in Safari.
                  </div>
                </div>

                <div className="flex items-start gap-3 text-xs text-slate-300">
                  <div className="w-5 h-5 rounded-full bg-emerald-500/20 text-[#00D084] font-bold text-[10px] flex items-center justify-center shrink-0 mt-0.5">
                    2
                  </div>
                  <div className="flex items-center gap-1.5 flex-wrap">
                    Tap the Safari <Share className="w-3.5 h-3.5 text-emerald-400 inline" />{' '}
                    <strong className="text-white">Share</strong> icon at the bottom.
                  </div>
                </div>

                <div className="flex items-start gap-3 text-xs text-slate-300">
                  <div className="w-5 h-5 rounded-full bg-emerald-500/20 text-[#00D084] font-bold text-[10px] flex items-center justify-center shrink-0 mt-0.5">
                    3
                  </div>
                  <div className="flex items-center gap-1.5 flex-wrap">
                    Select <PlusSquare className="w-3.5 h-3.5 text-emerald-400 inline" />{' '}
                    <strong className="text-white">&ldquo;Add to Home Screen&rdquo;</strong>.
                  </div>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="pt-2 flex flex-col gap-2.5">
              <a
                href={BRAND_CONFIG.webAppUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={onClose}
                className="w-full py-3.5 px-4 rounded-xl bg-[#00D084] hover:bg-[#00D084]/90 text-[#0A231B] font-extrabold text-sm flex items-center justify-center gap-2 shadow-lg shadow-[#00D084]/20 transition-all active:scale-95"
              >
                <span>Launch iOS Web App Now</span>
                <ExternalLink className="w-4 h-4" />
              </a>

              <button
                type="button"
                onClick={onClose}
                className="w-full py-2.5 rounded-xl text-xs text-slate-400 hover:text-white transition-colors"
              >
                Dismiss
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
