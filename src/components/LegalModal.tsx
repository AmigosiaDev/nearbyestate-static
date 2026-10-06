import React from 'react';
import { X, Shield, FileText } from 'lucide-react';

interface LegalModalProps {
  type: 'privacy' | 'terms' | null;
  onClose: () => void;
}

export const LegalModal: React.FC<LegalModalProps> = ({ type, onClose }) => {
  if (!type) return null;

  const isPrivacy = type === 'privacy';

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-xs animate-in fade-in duration-200"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      <div
        className="relative w-full max-w-2xl max-h-[85vh] bg-white rounded-3xl shadow-2xl border border-slate-200 flex flex-col overflow-hidden animate-in zoom-in-95 duration-200"
      >
        {/* Modal Header */}
        <div className="p-6 border-b border-slate-100 flex items-center justify-between bg-slate-50/50">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-emerald-50 text-brand-800 flex items-center justify-center">
              {isPrivacy ? <Shield className="w-5 h-5" /> : <FileText className="w-5 h-5" />}
            </div>
            <div>
              <h3 id="modal-title" className="text-xl font-bold text-slate-900">
                {isPrivacy ? 'Privacy Policy' : 'Terms & Conditions'}
              </h3>
              <p className="text-xs text-slate-500">NearbyEstate Application & Website</p>
            </div>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="w-9 h-9 rounded-full bg-slate-100 hover:bg-slate-200 flex items-center justify-center text-slate-600 transition-colors focus:outline-none focus:ring-2 focus:ring-brand-700"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Scrollable Content */}
        <div className="p-6 overflow-y-auto space-y-4 text-sm text-slate-600 leading-relaxed text-left">
          {isPrivacy ? (
            <>
              <p>
                NearbyEstate is committed to protecting your privacy and ensuring your personal information is handled responsibly.
              </p>
              <h4 className="font-bold text-slate-900 pt-2">1. Information We Collect</h4>
              <p>
                NearbyEstate requests device location permissions solely to determine properties situated near you and display distance measurements. When users post properties, contact numbers and property details are collected to enable direct communication between interested parties.
              </p>
              <h4 className="font-bold text-slate-900 pt-2">2. How We Use Information</h4>
              <p>
                Location coordinates are processed in real-time to compute proximity. We do not sell or trade your personal data to third parties.
              </p>
              <h4 className="font-bold text-slate-900 pt-2">3. Google Maps & Plus Codes</h4>
              <p>
                NearbyEstate uses Google Maps APIs to deliver accurate geographic mapping and Plus Code representations for verified plot locations.
              </p>
              <h4 className="font-bold text-slate-900 pt-2">4. Contact</h4>
              <p>
                For privacy inquiries or account data assistance, please contact through the official NearbyEstate mobile application or website.
              </p>
            </>
          ) : (
            <>
              <p>
                By using NearbyEstate, you agree to comply with the following Terms and Conditions.
              </p>
              <h4 className="font-bold text-slate-900 pt-2">1. Use of the Platform</h4>
              <p>
                NearbyEstate is a property discovery application designed to help users identify properties in their vicinity. Users agree to use the service only for lawful property exploration and advertising.
              </p>
              <h4 className="font-bold text-slate-900 pt-2">2. Property Listings & Accuracy</h4>
              <p>
                Property listings are uploaded by respective owners and posters. Users are advised to independently inspect properties, title deeds, and terms prior to entering into financial commitments.
              </p>
              <h4 className="font-bold text-slate-900 pt-2">3. Disclaimer</h4>
              <p>
                NearbyEstate acts as a discovery medium connecting users and owners, and is not a party to bilateral property sale, purchase, or leasing agreements.
              </p>
            </>
          )}
        </div>

        {/* Modal Footer */}
        <div className="p-4 border-t border-slate-100 bg-slate-50 flex justify-end">
          <button
            type="button"
            onClick={onClose}
            className="px-5 py-2 rounded-xl bg-brand-800 hover:bg-brand-900 text-white font-semibold text-sm transition-colors"
          >
            I Understand
          </button>
        </div>
      </div>
    </div>
  );
};
