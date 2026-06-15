'use client'

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, ArrowRight, Bot, Check, Copy, X, Mail, Phone, ShieldCheck } from "lucide-react";

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

  return (
    <footer className="w-full bg-[#FBFBFD] pt-2 font-sans text-[#1D1D1F] overflow-hidden">
      
      {/* --- Testimonial Block --- */}
      <div className="w-full px-4 md:px-8 mb-20">
        <motion.div 
          initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={fadeUp}
          className="max-w-[1500px] mx-auto bg-white border border-[#E5E5EA] rounded-[32px] p-8 md:p-16 shadow-[0_8px_30px_rgb(0,0,0,0.04)]"
        >
          <div className="flex flex-col lg:flex-row justify-between items-start gap-8 mb-20">
            <h2 className="text-[2.5rem] md:text-[3.5rem] font-semibold tracking-tighter text-[#1D1D1F] leading-[1.05] max-w-3xl">
              Kerala Businesses Are Scaling Faster With Faigen. When Will You Start?
            </h2>
            <div className="flex gap-3 shrink-0 lg:mt-4">
              <button className="w-14 h-14 rounded-full border border-[#E5E5EA] flex items-center justify-center text-[#86868B] hover:bg-[#F5F5F7] transition-colors">
                <ArrowLeft size={20} />
              </button>
              <button className="w-14 h-14 rounded-full border border-[#E5E5EA] flex items-center justify-center text-[#1D1D1F] hover:bg-[#F5F5F7] transition-colors">
                <ArrowRight size={20} />
              </button>
            </div>
          </div>

          <div className="flex flex-col-reverse lg:flex-row justify-between items-start lg:items-center gap-10">
            <div className="flex items-end">
              {[1, 2, 3].map((i) => (
                <div key={i} className={`w-16 h-16 rounded-2xl overflow-hidden border-[3px] border-white shadow-md ${i === 2 ? 'z-20 mb-2 scale-110' : 'z-10 grayscale opacity-80'} ${i !== 1 ? '-ml-4' : ''}`}>
                  
                </div>
              ))}
            </div>
            <p className="text-[1.2rem] md:text-[1.5rem] text-[#86868B] font-medium leading-relaxed max-w-2xl lg:text-right tracking-tight">
              "Running a busy boutique leaves no time for social media. Faigen's AI handles all our DMs on WhatsApp 24/7. Absolute game changer! ❤️"
            </p>
          </div>
        </motion.div>
      </div>

      {/* --- Footer Links --- */}
      <div className="w-full px-6 md:px-16">
        <div className="max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-5 gap-12 md:gap-8 mb-24">
          <div className="col-span-1 md:col-span-2">
            <img src="/logonew.png" alt="Faigen Logo" className="h-8 mb-6" />
            <p className="text-[#86868B] text-[14px] font-medium max-w-xs leading-relaxed">
              Kerala's premier tech agency. Building cinematic experiences and intelligent AI agents for modern businesses.
            </p>
          </div>

          {[
            { title: "Services", links: ["Web Development", "WhatsApp AI Agents", "Insta Auto-DMs"] },
            { title: "Company", links: ["Our Portfolio", "Pricing", "About Us", "Privacy Policy"] },
            { title: "Connect", links: ["Book a Demo", "Contact Us", "Instagram"] }
          ].map((section, idx) => (
            <div key={idx}>
              <h4 className="font-bold text-[#1D1D1F] text-[12px] tracking-widest uppercase mb-6">{section.title}</h4>
              <ul className="space-y-4 text-[14px] font-semibold text-[#86868B]">
                {section.links.map((link) => (
                  <li key={link}>
                    <button onClick={() => setShowPopup(true)} className="hover:text-[#0066CC] transition-colors">{link}</button>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* --- Massive Typography --- */}
      <div className="w-full flex justify-center items-end overflow-hidden">
        <h1 className="text-[16vw] font-black tracking-[-0.04em] leading-[0.7] text-[#1D1D1F]/5 select-none text-center">
          faigen.in
        </h1>
      </div>

      {/* --- PREMIUM LIGHT MODAL --- */}
      <AnimatePresence>
        {showPopup && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-6">
            <motion.div 
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              onClick={() => setShowPopup(false)}
              className="absolute inset-0 bg-white/40 backdrop-blur-sm"
            />
            <motion.div 
              initial={{ opacity: 0, y: 20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.95 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="relative w-full max-w-[440px] bg-white rounded-[32px] border border-[#E5E5EA] shadow-[0_20px_50px_rgba(0,0,0,0.06)] p-10 flex flex-col items-center"
            >
              <div className="w-20 h-20 bg-[#F5F5F7] rounded-full flex items-center justify-center border border-[#E5E5EA] mb-8">
                 <Bot size={32} className="text-[#0066CC]" strokeWidth={1.5} />
              </div>

              <h2 className="text-2xl font-semibold text-[#1D1D1F] tracking-tight mb-2">Request a Demo</h2>
              <p className="text-[#86868B] text-[15px] font-medium mb-10">Ready to automate your sales.</p>

              <div className="w-full bg-[#F5F5F7] border border-[#E5E5EA] p-4 rounded-2xl flex items-center justify-between">
                <span className="text-[14px] font-semibold text-[#1D1D1F] px-2">info@faigen.in</span>
                <button onClick={handleCopy} className={`p-3 rounded-xl transition-all ${copied ? 'bg-[#34C759] text-white' : 'bg-white text-[#86868B] border border-[#E5E5EA]'}`}>
                  {copied ? <Check size={18} strokeWidth={3} /> : <Copy size={18} />}
                </button>
              </div>

              <button onClick={() => setShowPopup(false)} className="mt-8 text-[#86868B] hover:text-[#1D1D1F] text-[13px] font-semibold transition-colors">
                Close
              </button>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </footer>
  );
}