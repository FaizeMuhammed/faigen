'use client'

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, ArrowRight, Bot, Check, Copy, X } from "lucide-react";

export default function FooterSection() {
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

  const triggerPopup = (e) => {
    e.preventDefault();
    setShowPopup(true);
  };

  return (
    <footer className="w-full bg-white pt-2 overflow-hidden font-sans relative">
      
      {/* --- Testimonial Block --- */}
      <div className="w-full px-4 md:px-8 mb-20">
        <motion.div 
          initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={fadeUp}
          className="max-w-[1600px] mx-auto bg-[#F8F9FA] rounded-[2.5rem] md:rounded-[3rem] p-8 md:p-12 lg:p-20"
        >
          <div className="flex flex-col lg:flex-row justify-between items-start gap-8 mb-16 md:mb-24">
            <h2 className="text-[2rem] sm:text-[2.5rem] md:text-[3rem] lg:text-[3.5rem] font-medium tracking-tight text-[#1A1A1A] leading-[1.1] max-w-3xl">
              Kerala Businesses Are Scaling Faster With Faigen. When Will You Start?
            </h2>
            <div className="flex gap-3 shrink-0 lg:mt-4">
              <button className="w-12 h-12 rounded-full border border-gray-300 flex items-center justify-center text-gray-600 hover:bg-white hover:border-gray-400 transition-colors shadow-sm">
                <ArrowLeft size={20} />
              </button>
              <button className="w-12 h-12 rounded-full border border-gray-300 flex items-center justify-center text-gray-600 hover:bg-white hover:border-gray-400 transition-colors shadow-sm">
                <ArrowRight size={20} />
              </button>
            </div>
          </div>

          <div className="flex flex-col-reverse lg:flex-row justify-between items-start lg:items-center gap-10">
            <div className="flex items-end">
              <div className="w-14 h-14 md:w-16 md:h-16 rounded-2xl overflow-hidden border-2 border-[#F8F9FA] shadow-sm z-10">
                <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop" alt="Client 1" className="w-full h-full object-cover" />
              </div>
              <div className="w-16 h-16 md:w-[4.5rem] md:h-[4.5rem] rounded-2xl overflow-hidden border-2 border-[#F8F9FA] shadow-md -ml-4 z-20 mb-2 relative">
                <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200&auto=format&fit=crop" alt="Client 2" className="w-full h-full object-cover" />
                <div className="absolute bottom-1 right-1 bg-white text-[9px] font-bold px-1.5 rounded-md text-gray-800">Sarah M.</div>
              </div>
              <div className="w-14 h-14 md:w-16 md:h-16 rounded-2xl overflow-hidden border-2 border-[#F8F9FA] shadow-sm -ml-4 z-10 opacity-70 grayscale">
                <img src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=200&auto=format&fit=crop" alt="Client 3" className="w-full h-full object-cover grayscale" />
              </div>
            </div>
            <p className="text-[1.1rem] md:text-[1.25rem] text-[#4A4A4A] font-medium leading-relaxed max-w-2xl lg:text-right">
              "Running a busy boutique leaves no time for social media. Faigen's AI handles all our DMs on WhatsApp 24/7, and our new cinematic website looks incredibly premium. Absolute game changer! ❤️"
            </p>
          </div>
        </motion.div>
      </div>

      {/* --- Footer Links --- */}
      <div className="w-full px-4 md:px-8">
        <motion.div 
          initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={fadeUp}
          className="max-w-[1400px] mx-auto px-4 md:px-8 grid grid-cols-1 md:grid-cols-5 gap-12 md:gap-8 mb-20"
        >
          <div className="col-span-1 md:col-span-2 flex flex-col items-start gap-4">
            <div className="flex items-center gap-3">
              <div className="w-18 h-18 flex items-center justify-center overflow-hidden">
                <img src="/logo.png" alt="Faigen Logo" className="h-full w-full object-contain" />
              </div>
             
            </div>
            <p className="text-gray-500 text-sm font-medium max-w-xs mt-2 leading-relaxed">
              Kerala's premier tech agency. Building cinematic websites and intelligent AI agents for modern businesses.
            </p>
          </div>

          <div>
            <h4 className="font-bold text-[#1A1A1A] text-sm tracking-widest uppercase mb-6">Services</h4>
            <ul className="space-y-4 text-sm font-medium text-gray-500">
              <li><button onClick={triggerPopup} className="hover:text-[#2563EB] transition-colors">Web Development</button></li>
              <li><button onClick={triggerPopup} className="hover:text-[#2563EB] transition-colors">WhatsApp AI Agents</button></li>
              <li><button onClick={triggerPopup} className="hover:text-[#2563EB] transition-colors">Insta Auto-DMs</button></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-[#1A1A1A] text-sm tracking-widest uppercase mb-6">Company</h4>
            <ul className="space-y-4 text-sm font-medium text-gray-500">
              <li><button onClick={triggerPopup} className="hover:text-[#2563EB] transition-colors">Our Portfolio</button></li>
              <li><button onClick={triggerPopup} className="hover:text-[#2563EB] transition-colors">Pricing</button></li>
              <li><button onClick={triggerPopup} className="hover:text-[#2563EB] transition-colors">About Us</button></li>
              <li><a href="/privacy" className="hover:text-[#2563EB] transition-colors">Privacy Policy</a></li>
              <li><a href="/terms" className="hover:text-[#2563EB] transition-colors">Terms & Conditions</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-[#1A1A1A] text-sm tracking-widest uppercase mb-6">Connect</h4>
            <ul className="space-y-4 text-sm font-medium text-gray-500">
              <li><button onClick={triggerPopup} className="hover:text-[#2563EB] transition-colors">Book a Demo</button></li>
              <li><button onClick={triggerPopup} className="hover:text-[#2563EB] transition-colors">Contact Us</button></li>
              <li><a href="#" onClick={triggerPopup} className="hover:text-[#2563EB] transition-colors">Instagram</a></li>
            </ul>
          </div>
        </motion.div>
      </div>

      {/* --- Massive Typography --- */}
      <motion.div 
        initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 1, ease: "easeOut" }}
        className="w-full flex justify-center items-end overflow-hidden pt-6"
      >
        <h1 className="text-[16vw] font-black tracking-[-0.04em] leading-[0.72] text-[#1A1A1A] select-none text-center transform translate-y-[8%]">
          faigen.in
        </h1>
      </motion.div>

      {/* --- MINIMALIST POPUP --- */}
      <AnimatePresence>
        {showPopup && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-6">
            <motion.div 
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              onClick={() => setShowPopup(false)}
              className="absolute inset-0 bg-white/60 "
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
                <h2 className="text-2xl font-semibold text-gray-900 tracking-tight mb-2">Request a Demo</h2>
                <p className="text-gray-500 text-[15px] font-medium leading-relaxed">Ready to automate your Malayalam & English sales.</p>
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
                {copied && (
                  <motion.p initial={{ opacity: 0, y: 5 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}
                    className="text-green-600 text-[11px] font-bold uppercase tracking-widest">
                    Address Copied
                  </motion.p>
                )}
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
    </footer>
  );
}