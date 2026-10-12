import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, CheckCircle2, HelpCircle } from 'lucide-react';

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    phoneNumber: '',
    emailAddress: '',
    enquiryType: 'Buying a Property',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-16 sm:py-24 lg:py-28 bg-[#071F17] relative overflow-hidden">
      {/* Seamless Ambient Background */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[450px] bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute inset-0 coordinate-grid opacity-15" />
        <div className="absolute inset-0 map-dotted-grid opacity-15" />
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header from PDF */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14 space-y-3.5">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/15 border border-emerald-400/25 text-emerald-300 text-xs font-bold uppercase tracking-wider">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>We're Here to Help</span>
          </div>
          <h2 className="text-2xl xs:text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
            Have More Questions? <span className="text-[#00D084]">Get in Touch.</span>
          </h2>
          <p className="text-sm sm:text-base lg:text-lg text-emerald-100/80 font-normal max-w-2xl mx-auto leading-relaxed">
            Need more information about NearbyEstate, property listings, or our Agent Pro plan? Get in touch with us, and our team will be happy to assist you.
          </p>
        </div>

        {/* Contact Form Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="rounded-[32px] bg-gradient-to-br from-[#0F2E23] via-[#0A261D] to-[#071B13] border border-emerald-500/30 p-6 sm:p-10 lg:p-12 shadow-2xl relative overflow-hidden text-left"
        >
          {submitted ? (
            <div className="py-12 text-center space-y-4">
              <div className="w-16 h-16 rounded-full bg-[#00D084]/20 border border-[#00D084]/40 flex items-center justify-center text-[#00D084] mx-auto">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-extrabold text-white">Thank You!</h3>
              <p className="text-sm text-slate-300 max-w-md mx-auto leading-relaxed">
                Your enquiry regarding <span className="text-[#00D084] font-semibold">{formData.enquiryType}</span> has been received. Our team will get in touch with you shortly at <span className="text-white font-medium">{formData.phoneNumber}</span>.
              </p>
              <button
                type="button"
                onClick={() => {
                  setSubmitted(false);
                  setFormData({
                    fullName: '',
                    phoneNumber: '',
                    emailAddress: '',
                    enquiryType: 'Buying a Property',
                    message: '',
                  });
                }}
                className="mt-4 px-6 py-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-white text-xs font-bold transition-colors"
              >
                Send Another Message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5 sm:space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6">
                {/* Full Name */}
                <div className="space-y-2">
                  <label htmlFor="fullName" className="text-xs font-bold text-slate-300 uppercase tracking-wider block">
                    Full Name <span className="text-[#00D084]">*</span>
                  </label>
                  <input
                    id="fullName"
                    type="text"
                    required
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    placeholder="Enter your full name"
                    className="w-full px-4 py-3.5 rounded-2xl bg-white/5 border border-white/15 text-white placeholder-slate-400 text-sm focus:outline-none focus:border-[#00D084] focus:ring-1 focus:ring-[#00D084] transition-all"
                  />
                </div>

                {/* Phone Number */}
                <div className="space-y-2">
                  <label htmlFor="phoneNumber" className="text-xs font-bold text-slate-300 uppercase tracking-wider block">
                    Phone Number <span className="text-[#00D084]">*</span>
                  </label>
                  <input
                    id="phoneNumber"
                    type="tel"
                    required
                    value={formData.phoneNumber}
                    onChange={(e) => setFormData({ ...formData, phoneNumber: e.target.value })}
                    placeholder="+91 98765 43210"
                    className="w-full px-4 py-3.5 rounded-2xl bg-white/5 border border-white/15 text-white placeholder-slate-400 text-sm focus:outline-none focus:border-[#00D084] focus:ring-1 focus:ring-[#00D084] transition-all"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6">
                {/* Email Address (Optional) */}
                <div className="space-y-2">
                  <label htmlFor="emailAddress" className="text-xs font-bold text-slate-300 uppercase tracking-wider block">
                    Email Address <span className="text-slate-400 font-normal lowercase">(optional)</span>
                  </label>
                  <input
                    id="emailAddress"
                    type="email"
                    value={formData.emailAddress}
                    onChange={(e) => setFormData({ ...formData, emailAddress: e.target.value })}
                    placeholder="name@example.com"
                    className="w-full px-4 py-3.5 rounded-2xl bg-white/5 border border-white/15 text-white placeholder-slate-400 text-sm focus:outline-none focus:border-[#00D084] focus:ring-1 focus:ring-[#00D084] transition-all"
                  />
                </div>

                {/* What is your enquiry about? Dropdown */}
                <div className="space-y-2">
                  <label htmlFor="enquiryType" className="text-xs font-bold text-slate-300 uppercase tracking-wider block">
                    What is your enquiry about? <span className="text-[#00D084]">*</span>
                  </label>
                  <select
                    id="enquiryType"
                    value={formData.enquiryType}
                    onChange={(e) => setFormData({ ...formData, enquiryType: e.target.value })}
                    className="w-full px-4 py-3.5 rounded-2xl bg-[#092219] border border-white/15 text-white text-sm focus:outline-none focus:border-[#00D084] focus:ring-1 focus:ring-[#00D084] transition-all"
                  >
                    <option value="Buying a Property">Buying a Property</option>
                    <option value="Selling or Listing a Property">Selling or Listing a Property</option>
                    <option value="Real Estate Agent / Agent Pro">Real Estate Agent / Agent Pro</option>
                    <option value="App Support">App Support</option>
                    <option value="Other Enquiries">Other Enquiries</option>
                  </select>
                </div>
              </div>

              {/* Your Message */}
              <div className="space-y-2">
                <label htmlFor="message" className="text-xs font-bold text-slate-300 uppercase tracking-wider block">
                  Your Message <span className="text-[#00D084]">*</span>
                </label>
                <textarea
                  id="message"
                  required
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Tell us what you're looking for or how we can help..."
                  className="w-full px-4 py-3.5 rounded-2xl bg-white/5 border border-white/15 text-white placeholder-slate-400 text-sm focus:outline-none focus:border-[#00D084] focus:ring-1 focus:ring-[#00D084] transition-all resize-none"
                />
              </div>

              {/* Submit Button */}
              <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
                <button
                  type="submit"
                  id="contact_form_submit"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-2xl bg-[#00D084] hover:bg-[#00D084]/90 text-[#051A12] font-bold text-sm sm:text-base shadow-xl shadow-[#00D084]/25 transition-all transform hover:-translate-y-0.5"
                >
                  <span>Submit Enquiry</span>
                  <Send className="w-4 h-4" />
                </button>

                <div className="text-xs text-slate-400 flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#00D084]" />
                  <span>Prompt response within 24 hours</span>
                </div>
              </div>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  );
};
