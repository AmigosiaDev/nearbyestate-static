import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Compass, Search, PlusCircle, CheckCircle, MapPin, Phone, ShieldCheck, ArrowUpRight, Radio } from 'lucide-react';
import { BRAND_CONFIG } from '../data/websiteData';
import { GooglePlayIcon } from './Navbar';

export const AppShowcase: React.FC = () => {
  const [activeTab, setActiveTab] = useState(0);

  // Live Discovery Simulation Sequence:
  const [simStep, setSimStep] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setSimStep((prev) => (prev + 1) % 5);
    }, 2400);
    return () => clearInterval(timer);
  }, []);

  const simulationStates = [
    { text: 'Searching nearby...', dist: 'Scanning GPS radius...', color: 'text-amber-400', isSearching: true },
    { text: '1.2 km away', dist: 'Found: 3 BHK Independent Villa', color: 'text-emerald-400', isSearching: false },
    { text: '2.4 km away', dist: 'Found: Commercial Shop / Retail', color: 'text-teal-400', isSearching: false },
    { text: '3.1 km away', dist: 'Found: Residential Land Plot', color: 'text-emerald-300', isSearching: false },
    { text: 'Properties found nearby', dist: 'Tap any listing to inspect specs', color: 'text-emerald-400', isSearching: false },
  ];

  const currentSim = simulationStates[simStep];

  const showcaseTabs = [
    {
      id: 'discover',
      badge: '01 • Discover',
      title: 'Nearby Radar & Proximity Map',
      subtitle: 'See verified listings plotted by physical proximity from where you stand.',
      highlights: [
        'Live GPS distance meter (e.g. 1.2 km away)',
        'Accurate map coordinates and boundary pins',
        'One-tap direction routing via Google Maps',
      ],
    },
    {
      id: 'search',
      badge: '02 • Search & Filter',
      title: 'Smart Category & Budget Filters',
      subtitle: 'Narrow down precisely what you need across multiple property categories.',
      highlights: [
        'Filter by Residential, Land, Commercial, Shops, or Farm',
        'Sort by asking price and budget range',
        'Direct toggle between Buy and Rent',
      ],
    },
    {
      id: 'details',
      badge: '03 • Property Details',
      title: 'Full Specifications & Plus Code',
      subtitle: 'Everything you need to evaluate the property before getting in touch.',
      highlights: [
        'Exact Google Plus Code for pinpointing rural plots',
        'Carpet area, cent measurements, and specifications',
        'Direct phone call with property owners',
      ],
    },
    {
      id: 'post',
      badge: '04 • Post Property',
      title: 'Fast & Simple Ad Posting',
      subtitle: 'List your house, land, or commercial premise directly from your smartphone.',
      highlights: [
        'Upload property photos from your device',
        'Set category, price, and location pin',
        'Reach active property seekers around your area',
      ],
    },
  ];

  return (
    <section id="showcase" className="py-16 sm:py-24 lg:py-32 bg-slate-950 text-white relative overflow-hidden">
      {/* Subtle Background Ambience */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-brand-800/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[500px] h-[500px] bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute inset-0 coordinate-grid opacity-15 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 lg:mb-20 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-800/50 border border-emerald-500/30 text-emerald-300 text-xs font-bold uppercase tracking-wider">
            <span>Mobile App Showcase</span>
          </div>
          <h2 className="text-2xl xs:text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white">
            Everything You Need, Right on Your Phone.
          </h2>
          <p className="text-sm sm:text-base lg:text-lg text-slate-400 font-normal">
            Take property discovery with you. Purpose-built for speed, clarity, and location accuracy on Android.
          </p>
        </div>

        {/* ================= LIVE DISCOVERY ANIMATION DEMO BAR ================= */}
        <div className="max-w-2xl mx-auto mb-10 sm:mb-14 bg-slate-900/90 border border-slate-800 p-3 sm:p-4 rounded-2xl shadow-xl flex items-center justify-between gap-3 sm:gap-4">
          <div className="flex items-center gap-2.5 sm:gap-3 text-left min-w-0">
            <div className="w-9 sm:w-10 h-9 sm:h-10 rounded-xl bg-emerald-950 border border-emerald-500/30 flex items-center justify-center text-emerald-400 shrink-0">
              <Radio className={`w-4 sm:w-5 h-4 sm:h-5 ${currentSim.isSearching ? 'animate-pulse' : ''}`} />
            </div>
            <div className="min-w-0">
              <div className="text-[9px] sm:text-[10px] uppercase font-bold tracking-wider text-slate-400">
                Visual Concept Demonstration
              </div>
              <div className="flex flex-wrap items-center gap-1.5 sm:gap-2">
                <span className={`text-xs sm:text-sm font-extrabold ${currentSim.color}`}>
                  {currentSim.text}
                </span>
                <span className="text-slate-600 text-xs hidden xs:inline">•</span>
                <span className="text-[11px] sm:text-xs text-slate-300 font-medium truncate">
                  {currentSim.dist}
                </span>
              </div>
            </div>
          </div>

          <div className="hidden sm:flex items-center gap-1.5 shrink-0">
            {[0, 1, 2, 3, 4].map((step) => (
              <span
                key={step}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  simStep === step ? 'w-5 bg-emerald-400' : 'bg-slate-700'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Mobile/Tablet Horizontal Quick Tab Switcher (lg:hidden) */}
        <div className="flex lg:hidden overflow-x-auto gap-2 pb-3 mb-6 no-scrollbar -mx-4 px-4 sm:mx-0 sm:px-0">
          {showcaseTabs.map((tab, idx) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(idx)}
              className={`px-3.5 py-2 rounded-full text-xs font-bold whitespace-nowrap transition-all ${
                activeTab === idx
                  ? 'bg-emerald-500 text-slate-950 shadow-md ring-2 ring-emerald-400/40'
                  : 'bg-slate-900 border border-slate-800 text-slate-400 hover:text-white'
              }`}
            >
              {tab.badge.replace(/^0\d\s*•\s*/, '')}
            </button>
          ))}
        </div>

        {/* Split Showcase Layout: Tabs on Left, Phone on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
          {/* Left Column: 4 Interactive Tabs */}
          <div className="lg:col-span-6 space-y-3 sm:space-y-3.5 order-2 lg:order-1 text-left">
            {showcaseTabs.map((tab, idx) => {
              const isActive = activeTab === idx;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(idx)}
                  type="button"
                  className={`w-full text-left p-4 sm:p-6 rounded-2xl sm:rounded-3xl transition-all duration-300 border focus:outline-none focus:ring-2 focus:ring-emerald-500 ${
                    isActive
                      ? 'bg-slate-900/95 border-emerald-500/60 shadow-xl shadow-brand-950/50'
                      : 'bg-slate-900/40 border-slate-800/80 hover:bg-slate-900/60'
                  }`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <span
                      className={`text-[10px] sm:text-[11px] font-bold px-2.5 py-0.5 rounded-full ${
                        isActive
                          ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/30'
                          : 'bg-slate-800 text-slate-400'
                      }`}
                    >
                      {tab.badge}
                    </span>
                    {isActive && (
                      <span className="text-xs text-emerald-400 font-semibold flex items-center gap-1">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                        <span>Active View</span>
                      </span>
                    )}
                  </div>

                  <h3 className={`text-base sm:text-xl font-bold mb-1 ${isActive ? 'text-white' : 'text-slate-200'}`}>
                    {tab.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-400 mb-3 font-normal leading-relaxed">
                    {tab.subtitle}
                  </p>

                  <ul className="space-y-1.5 text-xs text-slate-300">
                    {tab.highlights.map((h, i) => (
                      <li key={i} className="flex items-center gap-2">
                        <CheckCircle className={`w-3.5 h-3.5 shrink-0 ${isActive ? 'text-emerald-400' : 'text-slate-600'}`} />
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                </button>
              );
            })}

            <div className="pt-2">
              <a
                href={BRAND_CONFIG.playStoreUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-emerald-400 hover:text-emerald-300 font-semibold text-xs sm:text-sm transition-colors group"
              >
                <GooglePlayIcon className="w-4 h-4 fill-current" />
                <span>Get NearbyEstate from Google Play</span>
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>
            </div>
          </div>

          {/* Right Column: Large Phone Mockup with Screen Switcher */}
          <div className="lg:col-span-6 flex justify-center items-center order-1 lg:order-2">
            <div className="relative w-full max-w-[280px] xs:max-w-[320px] sm:max-w-[350px] lg:max-w-[360px] h-[580px] xs:h-[640px] sm:h-[690px] bg-slate-950 rounded-[42px] xs:rounded-[48px] p-2.5 xs:p-3.5 shadow-2xl border-[4px] xs:border-[5px] border-slate-700 mx-auto">
              {/* Dynamic Island */}
              <div className="absolute top-4 xs:top-5 left-1/2 -translate-x-1/2 w-24 xs:w-28 h-4 xs:h-5 bg-black rounded-full z-30 flex items-center justify-end px-3">
                <div className="w-2 xs:w-2.5 h-2 xs:h-2.5 rounded-full bg-slate-800 border border-slate-700" />
              </div>

              {/* Internal Screen */}
              <div className="w-full h-full bg-slate-100 rounded-[34px] xs:rounded-[38px] overflow-hidden flex flex-col text-slate-800 relative select-none">
                {/* Status Bar */}
                <div className="pt-2.5 xs:pt-3 px-5 xs:px-6 pb-1 flex justify-between items-center text-[10px] font-bold text-slate-500 z-20 bg-white">
                  <span>9:41</span>
                  <div className="flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                    <span>5G</span>
                  </div>
                </div>

                {/* Animated Screens based on Active Tab */}
                <AnimatePresence mode="wait">
                  {/* TAB 0: DISCOVER RADAR */}
                  {activeTab === 0 && (
                    <motion.div
                      key="screen-discover"
                      initial={{ opacity: 0, scale: 0.98 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.98 }}
                      transition={{ duration: 0.25 }}
                      className="flex-1 flex flex-col justify-between"
                    >
                      <div className="p-3 bg-white border-b border-slate-200 text-left">
                        <div className="flex items-center gap-2">
                          <div className="w-6 h-6 rounded-lg bg-brand-800 text-white flex items-center justify-center font-bold text-[11px]">
                            e
                          </div>
                          <div>
                            <div className="text-[9px] uppercase font-bold text-slate-400">Discover Nearby</div>
                            <div className="text-[11px] font-bold text-slate-900 flex items-center gap-1">
                              <MapPin className="w-2.5 h-2.5 text-brand-accent" />
                              <span>Within 5 km radius</span>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Map Radar */}
                      <div className="h-48 xs:h-56 sm:h-64 bg-emerald-50/70 relative overflow-hidden border-b border-slate-200">
                        <div className="absolute inset-0 bg-[radial-gradient(#2D6A4F_1px,transparent_1px)] [background-size:14px_14px] opacity-25" />
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                          <div className="w-20 h-20 rounded-full bg-emerald-400/20 animate-ping absolute -top-5 -left-5" />
                          <div className="w-10 h-10 rounded-full bg-brand-800 text-white flex items-center justify-center shadow-lg">
                            <Compass className="w-5 h-5" />
                          </div>
                        </div>

                        {/* Discovery Pins */}
                        <div className="absolute top-6 left-6 bg-white px-2 py-0.5 rounded-full shadow text-[9px] font-bold text-slate-800 border border-slate-200 flex items-center gap-1">
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                          <span>Villa • 1.2 km</span>
                        </div>
                        <div className="absolute bottom-8 right-6 bg-white px-2 py-0.5 rounded-full shadow text-[9px] font-bold text-slate-800 border border-slate-200 flex items-center gap-1">
                          <span className="w-1.5 h-1.5 rounded-full bg-brand-accent" />
                          <span>Shop • 2.4 km</span>
                        </div>
                      </div>

                      {/* Bottom Listing Card */}
                      <div className="p-3 bg-white flex-1 flex flex-col justify-between text-left">
                        <div className="flex gap-2.5">
                          <img
                            src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=400&q=80"
                            alt="Villa"
                            className="w-16 h-16 rounded-xl object-cover"
                            onError={(e) => {
                              e.currentTarget.src = '/images/home.jpg';
                            }}
                          />
                          <div className="space-y-0.5">
                            <div className="text-[10px] font-bold text-emerald-700">Residential Villa</div>
                            <div className="text-xs font-bold text-slate-900">Modern 3 BHK Home</div>
                            <div className="text-[11px] font-extrabold text-brand-800">₹45 Lakh</div>
                            <div className="text-[9px] text-slate-500">1.2 km away • Verified Post</div>
                          </div>
                        </div>

                        <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-[10px]">
                          <span className="text-slate-500">Contact Owner</span>
                          <span className="font-bold text-brand-800 flex items-center gap-1">
                            <Phone className="w-3 h-3 text-emerald-600" />
                            <span>Direct Call</span>
                          </span>
                        </div>
                      </div>
                    </motion.div>
                  )}

                  {/* TAB 1: SEARCH & FILTER */}
                  {activeTab === 1 && (
                    <motion.div
                      key="screen-search"
                      initial={{ opacity: 0, scale: 0.98 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.98 }}
                      transition={{ duration: 0.25 }}
                      className="flex-1 flex flex-col bg-slate-50 p-3.5 justify-between text-left"
                    >
                      <div className="space-y-3">
                        <div className="bg-white p-2.5 rounded-xl border border-slate-200 flex items-center gap-2">
                          <Search className="w-4 h-4 text-slate-400" />
                          <span className="text-xs text-slate-700 font-medium">Search near location...</span>
                        </div>

                        <div>
                          <div className="text-[9px] uppercase font-bold text-slate-400 mb-1.5">Property Category</div>
                          <div className="grid grid-cols-2 gap-1.5 text-[10px] font-bold">
                            <span className="p-2 rounded-lg bg-brand-800 text-white text-center">Residential</span>
                            <span className="p-2 rounded-lg bg-white border border-slate-200 text-slate-700 text-center">Land / Plots</span>
                            <span className="p-2 rounded-lg bg-white border border-slate-200 text-slate-700 text-center">Commercial</span>
                            <span className="p-2 rounded-lg bg-white border border-slate-200 text-slate-700 text-center">Farm Land</span>
                          </div>
                        </div>

                        <div>
                          <div className="text-[9px] uppercase font-bold text-slate-400 mb-1">Max Distance</div>
                          <div className="bg-white p-2.5 rounded-xl border border-slate-200">
                            <div className="flex justify-between text-[10px] font-bold text-brand-800 mb-1">
                              <span>Radius</span>
                              <span>5 km</span>
                            </div>
                            <div className="w-full bg-slate-100 h-1.5 rounded-full overflow-hidden">
                              <div className="bg-brand-700 h-full w-2/3" />
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="bg-emerald-50 border border-emerald-200 p-2.5 rounded-xl text-center">
                        <span className="text-xs font-bold text-emerald-800">14 Properties Available Nearby</span>
                      </div>
                    </motion.div>
                  )}

                  {/* TAB 2: PROPERTY DETAILS */}
                  {activeTab === 2 && (
                    <motion.div
                      key="screen-details"
                      initial={{ opacity: 0, scale: 0.98 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.98 }}
                      transition={{ duration: 0.25 }}
                      className="flex-1 flex flex-col bg-white overflow-hidden text-left"
                    >
                      <div className="relative h-36 xs:h-40 sm:h-44 bg-slate-200">
                        <img
                          src="https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=600&q=80"
                          alt="Apartment"
                          className="w-full h-full object-cover"
                          onError={(e) => {
                            e.currentTarget.src = '/images/appartment.jpg';
                          }}
                        />
                        <div className="absolute top-2 right-2 bg-emerald-700 text-white text-[9px] font-bold px-2 py-0.5 rounded-full flex items-center gap-1">
                          <ShieldCheck className="w-3 h-3" />
                          <span>Verified</span>
                        </div>
                        <div className="absolute bottom-2 left-2 bg-black/70 text-white text-[10px] font-extrabold px-2.5 py-0.5 rounded">
                          ₹38 Lakh
                        </div>
                      </div>

                      <div className="p-3.5 space-y-3 flex-1 flex flex-col justify-between">
                        <div className="space-y-1">
                          <div className="text-[10px] uppercase font-bold text-emerald-700">Residential Flat</div>
                          <h4 className="text-xs font-bold text-slate-900">2 BHK Sea-Breeze Apartment</h4>
                          <p className="text-[10px] text-slate-500">1,250 sq.ft • 2 Bathrooms • Balcony</p>
                        </div>

                        <div className="p-2 rounded-xl bg-slate-50 border border-slate-200 text-[10px] space-y-0.5">
                          <div className="text-[9px] font-bold text-slate-400 uppercase">Exact Location</div>
                          <div className="font-mono text-[10px] text-slate-800 flex items-center gap-1 font-bold">
                            <MapPin className="w-3 h-3 text-brand-accent" />
                            <span>8V8V+7Q Ernakulam</span>
                          </div>
                        </div>

                        <div className="pt-2 border-t border-slate-100 flex items-center gap-2">
                          <button
                            type="button"
                            className="flex-1 py-2 bg-brand-800 text-white text-[11px] font-bold rounded-xl flex items-center justify-center gap-1 shadow-sm"
                          >
                            <Phone className="w-3 h-3" />
                            <span>Call Owner</span>
                          </button>
                        </div>
                      </div>
                    </motion.div>
                  )}

                  {/* TAB 3: POST PROPERTY */}
                  {activeTab === 3 && (
                    <motion.div
                      key="screen-post"
                      initial={{ opacity: 0, scale: 0.98 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.98 }}
                      transition={{ duration: 0.25 }}
                      className="flex-1 flex flex-col bg-slate-50 p-3.5 justify-between text-left"
                    >
                      <div className="space-y-3">
                        <div className="text-center pt-2">
                          <div className="w-10 h-10 rounded-2xl bg-emerald-100 text-brand-800 flex items-center justify-center mx-auto mb-2">
                            <PlusCircle className="w-5 h-5" />
                          </div>
                          <h4 className="text-xs font-bold text-slate-900">Post Your Property Ad</h4>
                          <p className="text-[10px] text-slate-500">Quick and easy mobile posting</p>
                        </div>

                        <div className="bg-white p-3 rounded-xl border border-slate-200/80 space-y-2 shadow-xs text-[10px]">
                          <div>
                            <span className="text-slate-400 block font-semibold text-[9px]">CATEGORY</span>
                            <span className="font-bold text-slate-800">Commercial Shop</span>
                          </div>
                          <div>
                            <span className="text-slate-400 block font-semibold text-[9px]">ASKING PRICE</span>
                            <span className="font-bold text-slate-800">₹22,000 / month</span>
                          </div>
                          <div>
                            <span className="text-slate-400 block font-semibold text-[9px]">LOCATION</span>
                            <span className="font-bold text-slate-800">Use Device GPS (Plus Code)</span>
                          </div>
                        </div>

                        <div className="p-2.5 rounded-xl bg-emerald-50 border border-emerald-200 text-center space-y-0.5">
                          <div className="text-[11px] font-bold text-emerald-800 flex items-center justify-center gap-1">
                            <CheckCircle className="w-3.5 h-3.5 text-emerald-600" />
                            <span>POSTED SUCCESSFULLY</span>
                          </div>
                          <div className="text-[9px] text-emerald-600">Visible to nearby users immediately</div>
                        </div>
                      </div>

                      <div className="text-center text-[10px] text-slate-400 py-2">
                        Manage or edit your listings at any time.
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
