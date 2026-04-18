'use client'

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Play, Menu, X, Mail, Send, Check, Copy, Globe, Instagram } from "lucide-react";

/* ── CUSTOM WHATSAPP ICON ─────────────────────────────────────── */
const WhatsappIcon = ({ size = 24, className = "" }) => (
  <svg 
    viewBox="0 0 24 24" 
    width={size} 
    height={size} 
    stroke="currentColor" 
    strokeWidth="2" 
    fill="none" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className}
  >
    <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
  </svg>
);

/* ── DATA ─────────────────────────────────────────────────────── */

const HEADLINES = [
  { 
    line1: (
      <>
        You handle the <span className="relative inline-block z-10">
          business.
          <svg className="absolute -bottom-1 left-[-2%] w-[104%] h-3 md:h-5 z-[-1]" viewBox="0 0 200 20" preserveAspectRatio="none">
            <path d="M0,15 C50,12 150,12 200,8" stroke="#DBEAFE" strokeWidth="4" fill="none" />
            <path d="M15,19 C70,16 130,17 180,14" stroke="#DBEAFE" strokeWidth="3" fill="none" />
          </svg>
        </span>
      </>
    ), 
    line2: (
      <>
        We convert messages into revenue.
      </>
    )
  },
  { 
    line1: (
      <>
        AI agents that <span className="relative inline-block z-10">
          reply instantly,
          <svg className="absolute -bottom-1 left-[-2%] w-[104%] h-3 md:h-5 z-[-1]" viewBox="0 0 200 20" preserveAspectRatio="none">
            <path d="M0,15 C50,12 150,12 200,8" stroke="#DBEAFE" strokeWidth="4" fill="none" />
            <path d="M15,19 C70,16 130,17 180,14" stroke="#DBEAFE" strokeWidth="3" fill="none" />
          </svg>
        </span> 
      </>
    ), 
    line2: (
      <>
        sell continuously, 24/7.
      </>
    )
  },
  { 
    line1: (
      <>
        Every unread message is a <span className="relative inline-block z-10">
          lost customer.
          <svg className="absolute -bottom-1 left-[-2%] w-[104%] h-3 md:h-5 z-[-1]" viewBox="0 0 200 20" preserveAspectRatio="none">
            <path d="M0,15 C50,12 150,12 200,8" stroke="#DBEAFE" strokeWidth="4" fill="none" />
            <path d="M15,19 C70,16 130,17 180,14" stroke="#DBEAFE" strokeWidth="3" fill="none" />
          </svg>
        </span>
      </>
    ), 
    line2: (
      <>
        Faigen makes sure that never happens.
      </>
    ) 
  },
];

const SUBTEXTS = [
  "AI agents that reply instantly, sell continuously, and take orders across WhatsApp, Instagram, and your website — 24/7.",
  "Zero chaos and seamless communication across multiple platforms. Faigen makes sure you never miss a sale.",
  "24/7 instant replies in every language — built to convert. While others reply late, Faigen moves the conversation toward a sale.",
];

/* ── COMPONENT ────────────────────────────────────────────────── */

export default function FaigenGridHero() {
  const [hlIndex, setHlIndex] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);
  const [popupOpen, setPopupOpen] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText("info@faigen.in");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  // Timers
  useEffect(() => {
    const t = setInterval(() => setHlIndex(p => (p + 1) % HEADLINES.length), 4000);
    return () => clearInterval(t);
  }, []);

  const textV = {
    enter:  { opacity: 0, y: 20, filter: "blur(6px)" },
    center: { opacity: 1, y: 0,  filter: "blur(0px)", transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] } },
    exit:   { opacity: 0, y: -16, filter: "blur(4px)", transition: { duration: 0.35, ease: [0.4, 0, 1, 1] } },
  };
  
  const subV = {
    enter:  { opacity: 0, y: 10 },
    center: { opacity: 1, y: 0, transition: { duration: 0.5, delay: 0.15, ease: "easeOut" } },
    exit:   { opacity: 0, y: -8, transition: { duration: 0.25 } },
  };

  return (
    <section className="w-full min-h-screen bg-white font-sans text-[#1A1A1A] flex flex-col selection:bg-blue-100 overflow-hidden relative pb-20">

      {/* ── DESIGNED POPUP MODAL ── */}
      <AnimatePresence>
        {popupOpen && (
          <motion.div
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/40 backdrop-blur-sm px-4"
            onClick={() => setPopupOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.95, y: 10, opacity: 0 }} animate={{ scale: 1, y: 0, opacity: 1 }} exit={{ scale: 0.95, y: 10, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white rounded-2xl shadow-2xl w-full max-w-[480px] overflow-hidden relative"
            >
              <div className="h-28 bg-gradient-to-r from-blue-50 via-blue-100 to-indigo-50 relative flex items-start justify-end p-4">
                <button onClick={() => setPopupOpen(false)} className="bg-white/40 hover:bg-white/80 p-2 rounded-full text-gray-800 transition-colors backdrop-blur-md">
                  <X size={20} />
                </button>
              </div>

              <div className="p-8 pt-6 relative">
                <div className="absolute -top-12 left-8 bg-white p-2 rounded-2xl shadow-sm border border-gray-100">
                  <div className="bg-[#2563EB] text-white p-4 rounded-xl shadow-inner">
                    <Send size={28} />
                  </div>
                </div>
                <div className="mt-8">
                  <span className="bg-blue-50 text-blue-600 text-[12px] font-bold px-3 py-1.5 rounded-full uppercase tracking-wider mb-4 inline-block border border-blue-100">
                    Get in touch
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3 leading-tight">
                    Let's build something great.
                  </h3>
                  <p className="text-gray-600 mb-8 text-[15px] leading-relaxed pr-2">
                    Ready to automate your sales and customer support? Reach out to our team to see how Faigen can help scale your business 24/7.
                  </p>
                  
                  <div className="bg-gray-50 border border-gray-200 rounded-xl p-5 flex items-center justify-between group hover:border-blue-400/50 hover:bg-blue-50/50 transition-all duration-300">
                    <div className="flex items-center gap-4">
                      <div className="bg-white p-3 rounded-lg shadow-sm border border-gray-100 text-[#2563EB] group-hover:scale-105 transition-transform">
                        <Mail size={22} />
                      </div>
                      <div>
                        <p className="text-[11px] text-gray-500 font-bold uppercase tracking-widest mb-1">Email Us</p>
                        <a href="mailto:info@faigen.in" className="text-[16px] font-bold text-gray-900 group-hover:text-[#2563EB] transition-colors">
                          info@faigen.in
                        </a>
                      </div>
                    </div>
                    <button onClick={handleCopy} className="bg-blue-100 text-[#2563EB] p-2.5 rounded-lg hover:bg-blue-200 transition-colors">
                      {copied ? <Check size={20} strokeWidth={3} /> : <Copy size={20} />}
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ── CENTRAL FRAMED COLUMN ── */}
      <div className="max-w-[1400px] mx-auto w-full border-x border-gray-200 relative flex flex-col z-10 bg-white">

        {/* ── HEADER ── */}
        <header className="relative flex justify-between items-center px-6 md:px-12 py-6 w-full z-50 bg-white">
           {/* Top Separator Line for Header */}
          <div className="absolute bottom-0 left-[-100vw] right-[-100vw] h-[1px] bg-gray-200 z-10"></div>

          <div className="flex items-center gap-2 cursor-pointer">
            <img src="/logo.png" alt="Faigen Logo" className="h-8 md:h-10 w-auto object-contain" />
          </div>

          <nav className="hidden lg:flex items-center gap-8 text-[15px] font-medium text-gray-600">
            <a href="#" className="font-semibold text-black hover:text-[#2563EB] transition-colors">Home</a>
            <button onClick={() => setPopupOpen(true)} className="hover:text-[#2563EB] transition-colors">Pricing</button>
            <button onClick={() => setPopupOpen(true)} className="hover:text-[#2563EB] transition-colors">About</button>
          </nav>

          <div className="hidden lg:flex items-center gap-4">
            <button onClick={() => setPopupOpen(true)} className="text-gray-600 text-[15px] font-semibold px-4 py-2 hover:text-[#2563EB] transition-colors">Sign in</button>
            <button onClick={() => setPopupOpen(true)} className="bg-gray-100 text-gray-900 px-6 py-2.5 text-[15px] font-semibold rounded-lg hover:bg-gray-200 transition-colors">Try it for free</button>
          </div>

          <button className="lg:hidden p-2 text-gray-700" onClick={() => setMenuOpen(v => !v)} aria-label="Menu">
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </header>

        {/* Mobile drawer */}
        <AnimatePresence>
          {menuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -6 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -6 }}
              transition={{ duration: 0.18 }}
              className="lg:hidden absolute top-[80px] left-0 right-0 bg-white border-b border-gray-200 px-6 pb-6 flex flex-col z-40 text-left shadow-xl"
            >
              <a href="#" onClick={() => setMenuOpen(false)} className="text-[16px] font-medium text-gray-700 py-3.5 border-b border-gray-100">Home</a>
              <button onClick={() => { setPopupOpen(true); setMenuOpen(false); }} className="text-[16px] font-medium text-gray-700 py-3.5 border-b border-gray-100 text-left">Pricing</button>
              <button onClick={() => { setPopupOpen(true); setMenuOpen(false); }} className="text-[16px] font-medium text-gray-700 py-3.5 border-b border-gray-100 text-left last:border-0">About</button>
              <button onClick={() => { setPopupOpen(true); setMenuOpen(false); }} className="mt-4 bg-[#2563EB] text-white py-3.5 rounded-lg text-[15px] font-semibold hover:bg-blue-700 transition-colors">Try it for free</button>
            </motion.div>
          )}
        </AnimatePresence>

        {/* ── 75/25 HERO SECTION SPLIT ── */}
        <div className="flex flex-col lg:flex-row w-full border-b border-gray-200 relative">
           {/* Infinite Horizontal Bleed Line */}
           <div className="absolute bottom-[-1px] left-[-50vw] right-[-50vw] h-[1px] bg-gray-200 z-10"></div>

           {/* LEFT 75% - TEXT AREA */}
           <main className="w-full lg:w-[75%] lg:border-r border-gray-200 relative flex flex-col items-start justify-center pt-20 pb-20 px-8 md:px-16 text-left">
              <motion.h1
                initial="hidden" animate="visible" variants={textV}
                className="text-[2.6rem] sm:text-[3.8rem] md:text-[4.5rem] lg:text-[5rem] font-medium leading-[1.05] tracking-tight text-[#1A1A1A] max-w-[900px] mb-8"
              >
                <span className="block mb-2">
                  AI agents that <span className="relative inline-block z-10">
                    reply instantly,
                    <svg className="absolute -bottom-2 left-[-2%] w-[104%] h-3 md:h-5 z-[-1]" viewBox="0 0 200 20" preserveAspectRatio="none">
                      <path d="M0,15 C50,12 150,12 200,8" stroke="#DBEAFE" strokeWidth="4" fill="none" />
                      <path d="M15,19 C70,16 130,17 180,14" stroke="#DBEAFE" strokeWidth="3" fill="none" />
                    </svg>
                  </span>
                </span>
                <span className="block">sell continuously, 24/7. </span>
              </motion.h1>

              <motion.p
                initial="hidden" animate="visible" variants={subV}
                className="text-gray-500 text-[1.1rem] md:text-[1.25rem] leading-relaxed max-w-[650px]"
              >
                Zero chaos and seamless communication across multiple platforms. Faigen makes sure you never miss a sale.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3, duration: 0.5 }}
                className="flex flex-wrap items-center gap-4 z-20 relative mt-10"
              >
                <button onClick={() => setPopupOpen(true)} className="bg-[#2563EB] text-white px-8 py-3.5 rounded-lg font-semibold text-[16px] hover:bg-blue-700 transition-all shadow-md hover:shadow-lg">
                  Start Building Free
                </button>
                <button onClick={() => setPopupOpen(true)} className="bg-white text-gray-800 border border-gray-300 px-8 py-3.5 rounded-lg font-semibold text-[16px] hover:bg-gray-50 transition-colors flex items-center gap-2 shadow-sm">
                  <Play size={18} className="text-[#2563EB]" fill="currentColor" /> Watch demo
                </button>
              </motion.div>
           </main>

           {/* RIGHT 25% - OMNICHANNEL VISUAL */}
           <div className="w-full lg:w-[25%] bg-gray-50/50 relative overflow-hidden flex items-center justify-center min-h-[350px] lg:min-h-full border-t lg:border-t-0 border-gray-200">
              
              {/* Connecting tech line from left column */}
              <div className="absolute top-1/2 left-0 w-1/4 h-[2px] bg-blue-500 -translate-y-1/2 z-10 hidden lg:block"></div>
              
              {/* Concentric Architectural Rings */}
              <div className="absolute top-1/2 left-[20%] w-[120%] aspect-square rounded-full border border-gray-200 -translate-y-1/2"></div>
              <div className="absolute top-1/2 left-[45%] w-[80%] aspect-square rounded-full border border-gray-200 -translate-y-1/2"></div>
              <div className="absolute top-1/2 left-[70%] w-[40%] aspect-square rounded-full border border-gray-200 -translate-y-1/2"></div>

              {/* Floating Tech Nodes */}
              <motion.div 
                initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 0.5, type: "spring" }}
                className="absolute top-[25%] left-[10%] bg-white p-3.5 rounded-full shadow-lg border border-gray-100 text-[#25D366] z-20"
              >
                <WhatsappIcon size={24} />
              </motion.div>

              <motion.div 
                initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 0.7, type: "spring" }}
                className="absolute bottom-[25%] left-[30%] bg-white p-3.5 rounded-full shadow-lg border border-gray-100 text-[#E1306C] z-20"
              >
                <Instagram size={24} />
              </motion.div>

              <motion.div 
                initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 0.9, type: "spring" }}
                className="absolute top-[45%] right-[20%] bg-white p-4 rounded-full shadow-xl border border-blue-100 text-blue-600 z-20"
              >
                <Globe size={28} />
              </motion.div>
           </div>
        </div>

      </div>
    </section>
  );
}