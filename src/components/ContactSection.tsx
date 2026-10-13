import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, CheckCircle2, ChevronDown, ShieldCheck, Loader2, AlertCircle } from 'lucide-react';

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    phoneNumber: '',
    emailAddress: '',
    enquiryType: 'Buying a Property',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [emailError, setEmailError] = useState<string | null>(null);

  const isValidEmail = (email: string) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage(null);
    setEmailError(null);

    // Validate Full Name (letters only)
    const cleanName = formData.fullName.trim();
    if (!cleanName || !/^[a-zA-Z\s]+$/.test(cleanName)) {
      setErrorMessage('Please enter your full name (letters only).');
      return;
    }

    // Validate Phone Number (numbers only)
    const cleanPhone = formData.phoneNumber.trim();
    if (!cleanPhone || cleanPhone.length < 7 || !/^\d+$/.test(cleanPhone)) {
      setErrorMessage('Please enter a valid phone number (numbers only, at least 7 digits).');
      return;
    }

    // Validate Email Address (must contain @ and .)
    if (formData.emailAddress.trim()) {
      if (!isValidEmail(formData.emailAddress.trim())) {
        setEmailError("Email must contain '@' and '.' (e.g. name@example.com)");
        setErrorMessage("Please enter a valid email address containing '@' and '.'");
        return;
      }
    }

    // Validate Message (max 100 characters)
    if (!formData.message.trim()) {
      setErrorMessage('Please enter your message (up to 100 characters).');
      return;
    }

    if (formData.message.length > 100) {
      setErrorMessage('Message cannot exceed 100 characters.');
      return;
    }

    setIsSubmitting(true);

    try {
      const res = await fetch('/api/contact.php', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result = await res.json().catch(() => ({}));

      if (!res.ok) {
        throw new Error(result.error || 'Failed to send your enquiry. Please try again.');
      }

      setSubmitted(true);
    } catch (err: any) {
      setErrorMessage(err.message || 'Network error. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="pt-16 pb-28 sm:py-24 lg:py-28 bg-[#071F17] relative overflow-hidden text-white">
      {/* Ambient Radiant Forest Background */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-[#00D084]/10 blur-[100px] rounded-full" />
        <div className="absolute bottom-10 right-10 w-[400px] h-[300px] bg-emerald-700/10 blur-[80px] rounded-full" />
        <div className="absolute inset-0 coordinate-grid opacity-25" />
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10 space-y-3">
          <h2 className="text-3xl sm:text-4xl lg:text-[2.6rem] font-extrabold text-white tracking-tight leading-tight">
            Need Help? <span className="text-[#00D084]">Contact Us.</span>
          </h2>

          <p className="text-slate-300 text-sm sm:text-base leading-relaxed font-normal pt-1">
            Have questions about NearbyEstate or need help listing your property? Contact us. We're here to help.
          </p>
        </div>

        {/* Minimal Uncluttered Contact Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="bg-[#0A261D]/80 backdrop-blur-2xl border border-white/10 rounded-3xl p-6 sm:p-10 shadow-2xl shadow-black/50 relative overflow-hidden text-left"
        >
          {/* Subtle Top Gradient Rim Highlight */}
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#00D084]/40 to-transparent" />

          {submitted ? (
            <div className="py-12 text-center space-y-4">
              <div className="w-16 h-16 rounded-full bg-[#00D084]/20 border border-[#00D084]/40 flex items-center justify-center text-[#00D084] mx-auto shadow-lg shadow-[#00D084]/15">
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
                className="mt-4 px-6 py-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-white text-xs font-bold transition-colors cursor-pointer"
              >
                Send Another Message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Row 1: Full Name & Phone Number */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
                <div className="space-y-1.5">
                  <label htmlFor="fullName" className="text-xs font-semibold text-slate-200 flex items-center justify-between">
                    <span>Full Name</span>
                    <span className="text-[#00D084] text-[11px]">* Required</span>
                  </label>
                  <input
                    id="fullName"
                    type="text"
                    required
                    value={formData.fullName}
                    onChange={(e) => {
                      // Only alphabetic characters and spaces allowed; numeric & symbols stripped immediately
                      const cleanVal = e.target.value.replace(/[^a-zA-Z\s]/g, '');
                      setFormData({ ...formData, fullName: cleanVal });
                      if (errorMessage) setErrorMessage(null);
                    }}
                    placeholder="Enter your full name (letters only)"
                    className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/10 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-[#00D084] focus:ring-1 focus:ring-[#00D084] transition-all"
                  />
                </div>

                <div className="space-y-1.5">
                  <label htmlFor="phoneNumber" className="text-xs font-semibold text-slate-200 flex items-center justify-between">
                    <span>Phone Number</span>
                    <span className="text-[#00D084] text-[11px]">* Required</span>
                  </label>
                  <input
                    id="phoneNumber"
                    type="tel"
                    inputMode="numeric"
                    required
                    value={formData.phoneNumber}
                    onChange={(e) => {
                      // Only numeric digits allowed; alphabetic characters stripped immediately
                      const cleanVal = e.target.value.replace(/\D/g, '').slice(0, 15);
                      setFormData({ ...formData, phoneNumber: cleanVal });
                      if (errorMessage) setErrorMessage(null);
                    }}
                    placeholder="Enter phone number (numbers only)"
                    className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/10 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-[#00D084] focus:ring-1 focus:ring-[#00D084] transition-all font-mono"
                  />
                </div>
              </div>

              {/* Row 2: Email Address & Enquiry Dropdown */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
                <div className="space-y-1.5">
                  <label htmlFor="emailAddress" className="text-xs font-semibold text-slate-200 flex items-center justify-between">
                    <span>Email Address</span>
                    <span className="text-slate-400 text-[11px] font-normal">Optional</span>
                  </label>
                  <input
                    id="emailAddress"
                    type="email"
                    value={formData.emailAddress}
                    onChange={(e) => {
                      const val = e.target.value;
                      setFormData({ ...formData, emailAddress: val });
                      if (emailError && (val === '' || isValidEmail(val))) {
                        setEmailError(null);
                      }
                      if (errorMessage) setErrorMessage(null);
                    }}
                    onBlur={() => {
                      if (formData.emailAddress.trim()) {
                        if (!isValidEmail(formData.emailAddress.trim())) {
                          setEmailError("Email must contain '@' and '.' (e.g. name@example.com)");
                        } else {
                          setEmailError(null);
                        }
                      } else {
                        setEmailError(null);
                      }
                    }}
                    placeholder="name@example.com"
                    className={`w-full px-4 py-3 rounded-xl bg-white/[0.04] border ${
                      emailError ? 'border-red-500/60 focus:border-red-400 focus:ring-red-400' : 'border-white/10 focus:border-[#00D084] focus:ring-[#00D084]'
                    } text-white placeholder-slate-500 text-sm focus:outline-none focus:ring-1 transition-all`}
                  />
                  {emailError && (
                    <p className="text-[11px] text-red-400 flex items-center gap-1.5 pt-0.5">
                      <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                      <span>{emailError}</span>
                    </p>
                  )}
                </div>

                <div className="space-y-1.5">
                  <label htmlFor="enquiryType" className="text-xs font-semibold text-slate-200 flex items-center justify-between">
                    <span>What is your enquiry about?</span>
                    <span className="text-[#00D084] text-[11px]">*</span>
                  </label>
                  <div className="relative">
                    <select
                      id="enquiryType"
                      value={formData.enquiryType}
                      onChange={(e) => setFormData({ ...formData, enquiryType: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-[#092219] border border-white/10 text-white text-sm focus:outline-none focus:border-[#00D084] focus:ring-1 focus:ring-[#00D084] transition-all appearance-none cursor-pointer pr-10"
                    >
                      <option value="Buying a Property">Buying a Property</option>
                      <option value="Selling or Listing a Property">Selling or Listing a Property</option>
                      <option value="Real Estate Agent / Agent Pro">Real Estate Agent / Agent Pro</option>
                      <option value="App Support">App Support</option>
                      <option value="Other Enquiries">Other Enquiries</option>
                    </select>
                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3.5 text-slate-400">
                      <ChevronDown className="w-4 h-4" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Row 3: Your Message */}
              <div className="space-y-1.5">
                <label htmlFor="message" className="text-xs font-semibold text-slate-200 flex items-center justify-between">
                  <span>Your Message</span>
                  <div className="flex items-center gap-2">
                    <span className={`text-[11px] font-mono transition-colors ${
                      formData.message.length >= 100
                        ? 'text-amber-400 font-bold'
                        : 'text-slate-400'
                    }`}>
                      {formData.message.length}/100
                    </span>
                    <span className="text-[#00D084] text-[11px]">* Required</span>
                  </div>
                </label>
                <textarea
                  id="message"
                  required
                  rows={3}
                  maxLength={100}
                  value={formData.message}
                  onChange={(e) => {
                    const val = e.target.value.slice(0, 100);
                    setFormData({ ...formData, message: val });
                    if (errorMessage) setErrorMessage(null);
                  }}
                  placeholder="Tell us what you're looking for (max 100 chars)..."
                  className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/10 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-[#00D084] focus:ring-1 focus:ring-[#00D084] transition-all resize-none leading-relaxed"
                />
              </div>

              {/* Error Banner */}
              {errorMessage && (
                <div className="p-3.5 rounded-xl bg-red-500/15 border border-red-500/30 text-red-200 text-xs flex items-center gap-2.5">
                  <AlertCircle className="w-4 h-4 text-red-400 shrink-0" />
                  <span>{errorMessage}</span>
                </div>
              )}

              {/* Row 4: Submit Button & Reassurance Note */}
              <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
                <button
                  type="submit"
                  id="contact_form_submit"
                  disabled={isSubmitting}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-3.5 rounded-xl bg-[#00D084] hover:bg-[#00D084]/90 text-[#051A12] font-extrabold text-sm shadow-lg shadow-[#00D084]/20 transition-all transform hover:-translate-y-0.5 cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed disabled:transform-none"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin text-[#051A12]" />
                      <span>Sending Enquiry...</span>
                    </>
                  ) : (
                    <>
                      <span>Submit Enquiry</span>
                      <Send className="w-4 h-4" />
                    </>
                  )}
                </button>

                <div className="flex items-center gap-2 text-xs text-slate-400 font-medium">
                  <ShieldCheck className="w-4 h-4 text-[#00D084]" />
                  <span>Your information is strictly private • Direct response within 24h</span>
                </div>
              </div>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  );
};
