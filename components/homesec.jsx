'use client'

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Bot, ShoppingCart, Check, Clock, Zap, X, Mail, Copy, CheckCircle2, Sparkles } from "lucide-react";

const WhatsAppIcon = ({ className }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.305-.885-.653-1.48-1.46-1.653-1.758-.173-.298-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.397-.272.322-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/>
  </svg>
);

const InstagramIcon = ({ className }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
  </svg>
);

export default function HeroSection() {
  const [showPopup, setShowPopup] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText("info@faigen.in");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
  };

  const float1 = {
    initial: { y: 0, rotate: -3 },
    animate: { y: [-5, 5, -5], rotate: [-3, -4, -3], transition: { duration: 6, repeat: Infinity, ease: "easeInOut" } }
  };

  const float2 = {
    initial: { y: 0, rotate: 3 },
    animate: { y: [5, -5, 5], rotate: [3, 2, 3], transition: { duration: 7, repeat: Infinity, ease: "easeInOut" } }
  };

  return (
    <div className="w-full min-h-screen bg-white flex flex-col font-sans text-[#1A1A1A] selection:bg-blue-500 selection:text-white">
      
      {/* --- Navbar --- */}
      <header className="relative w-full z-50 bg-white" style={{ height: '64px' }}>
        <nav className="max-w-[1400px] mx-auto h-full flex items-center justify-between px-6 md:px-12">
          
          <div className="flex items-center" style={{ height: '64px', overflow: 'visible' }}>
            <img
              src="/logo.png"
              alt="Faigen Logo"
              style={{ height: '35px', width: 'auto', objectFit: 'contain', display: 'block' }}
              onError={(e) => {
                e.target.style.display = 'none';
                e.target.insertAdjacentHTML('afterend', '<span style="font-weight:700;font-size:1.4rem;color:#1A1A1A;">Faigen</span>');
              }}
            />
          </div>

          <div className="hidden md:flex items-center space-x-10 text-[14px] font-medium text-gray-600">
            <a href="#features" className="hover:text-black transition-colors">Features</a>
            <a href="#solutions" className="hover:text-black transition-colors">Solutions</a>
            <a href="#resources" className="hover:text-black transition-colors">Resources</a>
            <a href="#pricing" className="hover:text-black transition-colors">Pricing</a>
          </div>

          <div className="flex items-center gap-5">
            <button 
              onClick={() => setShowPopup(true)}
              className="bg-white border border-gray-200 text-[#1A1A1A] px-5 py-2 rounded-[0.8rem] text-[14px] font-semibold hover:border-gray-300 shadow-sm transition-all"
            >
              Get demo
            </button>
          </div>
        </nav>
      </header>

      {/* --- Framed Canvas --- */}
      <div className="w-full flex-1 px-3 md:px-6 pb-6 pt-2">
        <div
          className="relative w-full max-w-[1600px] mx-auto rounded-[2.5rem] md:rounded-[3rem] border border-gray-200/80 bg-[#FAFAFA] overflow-hidden flex flex-col items-center justify-center shadow-sm"
          style={{ height: 'calc(100vh - 88px)' }}
        >
          
          <div 
            className="absolute inset-0 opacity-[0.5] pointer-events-none z-0" 
            style={{ backgroundImage: "radial-gradient(#9CA3AF 1.5px, transparent 1.5px)", backgroundSize: "24px 24px" }}
          ></div>
          
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-[#FAFAFA] blur-[100px] rounded-full pointer-events-none z-0"></div>

          {/* --- Top Left: Sticky Note --- */}
          <motion.div
            variants={float1} initial="initial" animate="animate"
            className="hidden lg:block absolute top-[4%] left-[2%] z-30"
          >
            <div className="relative">
              <div className="bg-[#FEF08A] p-5 pt-7 rounded-sm shadow-md w-52 border border-yellow-200/50">
                <div className="w-2.5 h-2.5 bg-red-600 rounded-full absolute top-2 left-1/2 -translate-x-1/2 shadow-sm border border-red-800"></div>
                <p className="font-[400] font-serif italic text-[15px] leading-snug text-gray-800">
                  Manually replying to DMs takes too much time. Let Faigen AI accomplish more tasks with ease.
                </p>
              </div>
              <div className="absolute -bottom-6 -left-6 bg-white/70 backdrop-blur-md p-3.5 rounded-[1.2rem] shadow-[0_20px_40px_-5px_rgba(0,0,0,0.1)] border border-white">
                <div className="bg-[#2563EB] text-white p-2.5 rounded-xl">
                  <Check size={24} strokeWidth={3} />
                </div>
              </div>
            </div>
          </motion.div>

          {/* --- Top Right: AI Agents Folder --- */}
          <motion.div
            variants={float2} initial="initial" animate="animate"
            className="hidden lg:block absolute top-[2%] right-[2%] z-30"
          >
            <div className="relative">
              <div className="absolute -left-10 top-8 bg-white/90 backdrop-blur-md p-3 rounded-[1rem] shadow-[0_20px_40px_-5px_rgba(0,0,0,0.1)] border border-white z-40">
                <Clock size={22} className="text-[#1A1A1A]" strokeWidth={2.5} />
              </div>
              <div className="flex flex-col drop-shadow-[0_15px_30px_rgba(0,0,0,0.1)]">
                <div className="bg-white rounded-t-[1rem] px-5 py-2.5 w-max relative z-10">
                  <span className="text-[13px] font-bold text-gray-900">AI Agents</span>
                </div>
                <div 
                  className="rounded-b-[1.2rem] rounded-tr-[1.2rem] p-5 pt-6 relative z-20 -mt-[1px] w-64 border border-gray-100 bg-cover bg-center overflow-hidden"
                  style={{ backgroundImage: "url('https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?q=80&w=500&auto=format&fit=crop')" }}
                >
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-black/20"></div>
                  <div className="relative z-10">
                    <div className="flex justify-end mb-1">
                      <p className="text-[10px] text-white/70 font-bold uppercase tracking-widest">Activity</p>
                    </div>
                    <p className="text-[15px] font-bold text-white mb-1">Customer Query</p>
                    <p className="text-[12px] text-white/80 font-medium mb-4">Handling product inquiry</p>
                    <div className="bg-white/20 backdrop-blur-md border border-white/20 text-white text-[11px] font-bold px-3 py-1.5 rounded-lg inline-flex items-center gap-1.5">
                      <Clock size={12} /> 13:00 - 13:45
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* --- Bottom Left: Tasks Folder --- */}
          <motion.div
            variants={float2} initial="initial" animate="animate"
            className="hidden lg:block absolute bottom-[4%] left-[2%] z-30"
          >
            <div className="flex flex-col drop-shadow-[0_20px_40px_rgba(0,0,0,0.08)]">
              <div className="bg-white rounded-t-[1rem] px-5 py-2.5 w-max relative z-10">
                <span className="text-[13px] font-bold text-gray-900">Today's tasks</span>
              </div>
              <div className="bg-white rounded-b-[1.2rem] rounded-tr-[1.2rem] p-6 relative z-20 -mt-[1px] w-72 border border-gray-50 space-y-6">
                <div>
                  <div className="flex justify-between items-start mb-2">
                    <div className="flex gap-2.5 items-center">
                      <div className="w-5 h-5 rounded-md bg-[#D9FDD3] text-[#25D366] flex items-center justify-center">
                        <WhatsAppIcon className="w-3 h-3" />
                      </div>
                      <span className="text-[12px] font-bold text-gray-800">WhatsApp Bot Setup</span>
                    </div>
                    <div className="flex -space-x-2">
                      <div className="w-5 h-5 rounded-full bg-blue-200 border border-white z-10 text-[8px] flex items-center justify-center font-bold text-blue-700">A</div>
                      <div className="w-5 h-5 rounded-full bg-pink-200 border border-white z-0 text-[8px] flex items-center justify-center font-bold text-pink-700">M</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-[10px] text-gray-400 font-medium w-8">Sep 10</span>
                    <div className="h-1.5 flex-1 bg-gray-100 rounded-full overflow-hidden">
                      <div className="h-full bg-[#25D366] rounded-full w-[60%]"></div>
                    </div>
                    <span className="text-[10px] text-gray-500 font-bold">60%</span>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between items-start mb-2">
                    <div className="flex gap-2.5 items-center">
                      <div className="w-5 h-5 rounded-md bg-pink-100 text-[#E1306C] flex items-center justify-center">
                        <InstagramIcon className="w-3 h-3" />
                      </div>
                      <span className="text-[12px] font-bold text-gray-800">Landing Page Design</span>
                    </div>
                    <div className="flex -space-x-2">
                      <div className="w-5 h-5 rounded-full bg-purple-200 border border-white z-10 text-[8px] flex items-center justify-center font-bold text-purple-700">J</div>
                      <div className="w-5 h-5 rounded-full bg-orange-200 border border-white z-0 text-[8px] flex items-center justify-center font-bold text-orange-700">D</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-[10px] text-gray-400 font-medium w-8">Sep 18</span>
                    <div className="h-1.5 flex-1 bg-gray-100 rounded-full overflow-hidden">
                      <div className="h-full bg-[#E1306C] rounded-full w-[100%]"></div>
                    </div>
                    <span className="text-[10px] text-gray-500 font-bold">112%</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* --- Bottom Right: Integrations Folder --- */}
          <motion.div
            variants={float1} initial="initial" animate="animate"
            className="hidden lg:block absolute bottom-[4%] right-[5%] z-30"
          >
            <div className="flex flex-col drop-shadow-[0_20px_40px_rgba(0,0,0,0.08)]">
              <div className="bg-white rounded-t-[1rem] px-5 py-2.5 w-max relative z-10">
                <span className="text-[13px] font-bold text-gray-900">100+ Integrations</span>
              </div>
              <div className="bg-white rounded-b-[1.2rem] rounded-tr-[1.2rem] p-6 relative z-20 -mt-[1px] w-auto border border-gray-50 flex gap-3">
                <div className="w-14 h-14 bg-white rounded-2xl shadow-[0_5px_15px_rgba(0,0,0,0.08)] border border-gray-100 flex items-center justify-center text-[#25D366]">
                  <WhatsAppIcon className="w-7 h-7" />
                </div>
                <div className="w-14 h-14 bg-white rounded-2xl shadow-[0_5px_15px_rgba(0,0,0,0.08)] border border-gray-100 flex items-center justify-center text-[#E1306C]">
                  <InstagramIcon className="w-7 h-7" />
                </div>
                <div className="w-14 h-14 bg-white rounded-2xl shadow-[0_5px_15px_rgba(0,0,0,0.08)] border border-gray-100 flex items-center justify-center text-[#2563EB]">
                  <ShoppingCart size={24} fill="currentColor" />
                </div>
              </div>
            </div>
          </motion.div>

          {/* --- Centre Content --- */}
          <main className="relative z-10 flex flex-col items-center justify-center w-full px-4 pt-10 pb-20 max-w-[1200px]">
            
            <motion.div 
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="w-16 h-16 bg-white/90 backdrop-blur-md rounded-2xl shadow-[0_15px_30px_-5px_rgba(0,0,0,0.08)] border border-gray-100 flex items-center justify-center p-2 mb-7 overflow-hidden"
            >
              <img
                src="/icon.png"
                alt="Faigen Logo"
                className="h-full w-full object-contain"
                onError={(e) => {
                  e.target.style.display = 'none';
                  e.target.parentNode.innerHTML = '<span class="font-bold text-2xl text-[#2563EB]">F</span>';
                }}
              />
            </motion.div>

            <motion.h1 
              initial="hidden" animate="visible" variants={fadeUp}
              className="text-[2.8rem] sm:text-[3.8rem] lg:text-[4.5rem] leading-[1.05] font-medium tracking-tight text-[#1A1A1A] text-center"
            >
              Who's keeping leads warm <br />
              <span className="text-[#8C8C8C]">while sales is busy?</span>
            </motion.h1>

            <motion.p 
              initial="hidden" animate="visible" variants={fadeUp}
              className="text-[1.1rem] text-gray-700 font-medium mt-4 mb-8 text-center max-w-lg"
            >
              Faigen builds websites and AI-powered agents that reply, sell, and take orders on WhatsApp and Instagram — automatically.
            </motion.p>

            <motion.div initial="hidden" animate="visible" variants={fadeUp}>
              <button 
                onClick={() => setShowPopup(true)}
                className="bg-[#2563EB] text-white px-7 py-3.5 rounded-[0.85rem] font-semibold text-[15px] shadow-[0_10px_25px_-5px_rgba(37,99,235,0.4)] hover:-translate-y-0.5 hover:shadow-[0_15px_25px_-5px_rgba(37,99,235,0.5)] transition-all"
              >
                Get free demo
              </button>
            </motion.div>

          </main>
        </div>
      </div>

      {/* --- MINIMALIST POPUP --- */}
      <AnimatePresence>
        {showPopup && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-6">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setShowPopup(false)}
              className="absolute inset-0 bg-white/80"
            />
            
            <motion.div 
              initial={{ opacity: 0, y: 15, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 15, scale: 0.98 }}
              transition={{ duration: 0.4, ease: [0.23, 1, 0.32, 1] }}
              className="relative w-full max-w-[480px] bg-white rounded-[2rem] border border-gray-100 shadow-[0_20px_50px_rgba(0,0,0,0.05)] p-10 flex flex-col items-center"
            >
              
              <div className="relative mb-10">
                <div className="w-20 h-20 bg-[#F8FAFC] rounded-full flex items-center justify-center border border-gray-100">
                   <Bot size={32} className="text-[#2563EB]" strokeWidth={1.5} />
                </div>
                <motion.div 
                  animate={{ scale: [1, 1.4], opacity: [0.5, 0] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeOut" }}
                  className="absolute inset-0 bg-[#2563EB]/10 rounded-full"
                />
                <div className="absolute -bottom-1 -right-1 bg-white p-1 rounded-full border border-gray-100 shadow-sm">
                   <div className="w-2.5 h-2.5 bg-green-500 rounded-full" />
                </div>
              </div>

              <div className="text-center mb-8">
                <h2 className="text-2xl font-semibold text-gray-900 tracking-tight mb-2">
                  Request a Demo
                </h2>
                <p className="text-gray-500 text-[15px] font-medium leading-relaxed">
                  Ready to automate your Malayalam & English sales.
                </p>
              </div>

              <div className="w-full bg-[#F8FAFC] border border-gray-100 p-4 rounded-2xl flex items-center justify-between group transition-colors hover:bg-gray-100/50">
                <div className="flex flex-col items-start px-2">
                  <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-0.5">Reach out</span>
                  <span className="text-[16px] font-semibold text-gray-800 tracking-tight">info@faigen.in</span>
                </div>
                <button 
                  onClick={handleCopy}
                  className={`p-3 rounded-xl transition-all ${copied ? 'bg-green-600 text-white' : 'bg-white text-gray-400 shadow-sm border border-gray-100 hover:text-black'}`}
                >
                  {copied ? <Check size={18} strokeWidth={3} /> : <Copy size={18} />}
                </button>
              </div>

              <div className="h-4 mt-4 text-center">
                <AnimatePresence>
                  {copied && (
                    <motion.p 
                      initial={{ opacity: 0, y: 5 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0 }}
                      className="text-green-600 text-[11px] font-bold uppercase tracking-widest"
                    >
                      Address Copied
                    </motion.p>
                  )}
                </AnimatePresence>
              </div>

              <button 
                onClick={() => setShowPopup(false)}
                className="mt-10 text-gray-400 hover:text-gray-600 text-[13px] font-medium transition-colors"
              >
                Close
              </button>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}