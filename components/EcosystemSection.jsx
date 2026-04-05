'use client'

import React from "react";
import { motion } from "framer-motion";
import { Bot, ShoppingBag, BarChart3, Globe } from "lucide-react";

// --- Real Brand Icons ---
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

export default function EcosystemSection() {
  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
  };

  // Floating animation generator
  const float = (delay = 0, yRange = 12) => ({
    animate: {
      y: [-yRange, yRange, -yRange],
      transition: {
        duration: 5 + Math.random() * 2,
        repeat: Infinity,
        ease: "easeInOut",
        delay: delay
      }
    }
  });

  return (
    <section className="w-full bg-white pt-24 pb-32 font-sans text-[#1A1A1A] overflow-hidden">
      <div className="max-w-[1300px] mx-auto border-x border-gray-200 relative px-4 md:px-0">
        
        {/* --- Top Layout Line --- */}
        <div className="absolute top-0 left-[-100vw] right-[-100vw] h-[1px] bg-gray-200"></div>

        {/* --- Floating Visualizer Area --- */}
        <div className="relative w-full max-w-[1000px] mx-auto aspect-square md:aspect-[2.2/1] mt-10 mb-16">
          
          {/* SVG Connection Lines */}
          <svg className="absolute inset-0 w-full h-full hidden md:block pointer-events-none z-0" viewBox="0 0 1000 450">
            {/* Left Tree */}
            <path d="M 500 225 L 320 225" stroke="#E2E8F0" strokeWidth="2" fill="none" />
            <path d="M 320 225 L 120 225" stroke="#E2E8F0" strokeWidth="2" fill="none" />
            <path d="M 320 225 L 250 100" stroke="#E2E8F0" strokeWidth="2" fill="none" />
            <path d="M 320 225 L 250 350" stroke="#E2E8F0" strokeWidth="2" fill="none" />
            
            {/* Right Tree */}
            <path d="M 500 225 L 680 225" stroke="#E2E8F0" strokeWidth="2" fill="none" />
            <path d="M 680 225 L 880 225" stroke="#E2E8F0" strokeWidth="2" fill="none" />
            <path d="M 680 225 L 750 100" stroke="#E2E8F0" strokeWidth="2" fill="none" />
            <path d="M 680 225 L 750 350" stroke="#E2E8F0" strokeWidth="2" fill="none" />

            {/* Accent Connection Dots */}
            <circle cx="320" cy="225" r="5" fill="#2563EB" opacity="0.8" />
            <circle cx="250" cy="100" r="5" fill="#E1306C" opacity="0.8" /> {/* Insta Color */}
            <circle cx="250" cy="350" r="5" fill="#1A1A1A" opacity="0.8" /> {/* Web Color */}
            
            <circle cx="680" cy="225" r="5" fill="#2563EB" opacity="0.8" />
            <circle cx="750" cy="100" r="5" fill="#25D366" opacity="0.8" /> {/* WA Color */}
            <circle cx="750" cy="350" r="5" fill="#2563EB" opacity="0.8" /> {/* Analytics Color */}
          </svg>

          {/* === THE NODES === */}
          
          {/* 0. Center Main Hub: Faigen AI */}
          <motion.div 
            initial={{ scale: 0 }} whileInView={{ scale: 1 }} viewport={{ once: true }} transition={{ type: "spring", bounce: 0.5 }}
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20"
          >
            <div className="relative">
              {/* Outer Glow */}
              <div className="absolute inset-0 bg-[#2563EB] blur-2xl rounded-full opacity-30 animate-pulse"></div>
              {/* Center App Icon */}
              <div className="relative w-32 h-32 md:w-40 md:h-40 bg-gradient-to-br from-blue-400 to-[#2563EB] rounded-[2rem] md:rounded-[2.5rem] shadow-[0_20px_50px_-10px_rgba(37,99,235,0.4)] flex items-center justify-center border-4 border-white">
                 <Bot size={56} className="text-white" strokeWidth={1.5} />
              </div>
            </div>
          </motion.div>

          {/* 1. Far Left: Customer Avatar */}
          <motion.div variants={float(0)} animate="animate" className="hidden md:block absolute left-[12%] top-[50%] -translate-x-1/2 -translate-y-1/2 z-10">
            <div className="w-20 h-20 rounded-[1.5rem] overflow-hidden border-[4px] border-white shadow-[0_15px_30px_-5px_rgba(0,0,0,0.12)]">
              <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=200&auto=format&fit=crop" alt="Customer Lead" className="w-full h-full object-cover" />
            </div>
          </motion.div>

          {/* 2. Top Left: Instagram Real Icon */}
          <motion.div variants={float(1)} animate="animate" className="hidden md:block absolute left-[25%] top-[22.2%] -translate-x-1/2 -translate-y-1/2 z-10">
            <div className="w-16 h-16 rounded-[1.2rem] bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-600 border-[3px] border-white shadow-[0_15px_30px_-5px_rgba(225,48,108,0.3)] flex items-center justify-center text-white">
              <InstagramIcon className="w-8 h-8" />
            </div>
          </motion.div>

          {/* 3. Bottom Left: E-Commerce / Web Store */}
          <motion.div variants={float(2)} animate="animate" className="hidden md:block absolute left-[25%] top-[77.7%] -translate-x-1/2 -translate-y-1/2 z-10">
            <div className="w-16 h-16 rounded-[1.2rem] bg-[#1A1A1A] border-[3px] border-white shadow-[0_15px_30px_-5px_rgba(0,0,0,0.15)] flex items-center justify-center text-white">
              <Globe size={26} strokeWidth={1.5} />
            </div>
          </motion.div>

          {/* 4. Far Right: E-Commerce Orders / Analytics */}
          <motion.div variants={float(0.5)} animate="animate" className="hidden md:block absolute left-[88%] top-[50%] -translate-x-1/2 -translate-y-1/2 z-10">
            <div className="w-20 h-20 rounded-[1.5rem] bg-white border-[4px] border-white shadow-[0_15px_30px_-5px_rgba(0,0,0,0.08)] flex items-center justify-center text-[#2563EB]">
              <ShoppingBag size={32} strokeWidth={1.5} />
            </div>
          </motion.div>

          {/* 5. Top Right: WhatsApp Real Icon */}
          <motion.div variants={float(1.5)} animate="animate" className="hidden md:block absolute left-[75%] top-[22.2%] -translate-x-1/2 -translate-y-1/2 z-10">
            <div className="w-16 h-16 rounded-[1.2rem] bg-gradient-to-br from-green-400 to-[#25D366] border-[3px] border-white shadow-[0_15px_30px_-5px_rgba(37,211,102,0.3)] flex items-center justify-center text-white">
              <WhatsAppIcon className="w-8 h-8" />
            </div>
          </motion.div>

          {/* 6. Bottom Right: Analytics & Dashboard */}
          <motion.div variants={float(2.5)} animate="animate" className="hidden md:block absolute left-[75%] top-[77.7%] -translate-x-1/2 -translate-y-1/2 z-10">
             <div className="w-16 h-16 rounded-[1.2rem] bg-white border-[3px] border-gray-50 shadow-[0_15px_30px_-5px_rgba(0,0,0,0.08)] flex items-center justify-center text-[#1A1A1A]">
              <BarChart3 size={26} strokeWidth={1.5} />
            </div>
          </motion.div>

          {/* --- Mobile specific layout fallback --- */}
          <div className="md:hidden flex flex-wrap justify-center gap-6 mt-10">
             <div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-600 shadow-md flex items-center justify-center text-white"><InstagramIcon className="w-8 h-8" /></div>
             <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-green-400 to-[#25D366] shadow-md flex items-center justify-center text-white"><WhatsAppIcon className="w-8 h-8" /></div>
             <div className="w-16 h-16 rounded-2xl bg-[#1A1A1A] shadow-md flex items-center justify-center text-white"><Globe size={26} /></div>
          </div>
        </div>

        {/* --- Text & CTA Area --- */}
        <motion.div 
          initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={fadeUp}
          className="text-center max-w-3xl mx-auto px-6 relative z-20"
        >
          <h2 className="text-[2.8rem] md:text-[4rem] leading-[1.05] font-medium tracking-tight text-[#1A1A1A] mb-6">
            The All-in-one <br /> Growth platform
          </h2>
          <p className="text-gray-500 text-[1.1rem] md:text-[1.2rem] leading-relaxed mb-10 font-medium max-w-2xl mx-auto">
            Faigen is a modern, unified ecosystem designed to perfectly fit your business needs. Connect your website, social media, and sales operations into a single intelligent platform.
          </p>
          <button className="bg-[#2563EB] text-white px-8 py-3.5 rounded-[0.85rem] font-semibold text-[15px] shadow-[0_10px_25px_-5px_rgba(37,99,235,0.4)] hover:-translate-y-0.5 hover:shadow-[0_15px_25px_-5px_rgba(37,99,235,0.5)] transition-all">
            Request a Demo
          </button>
        </motion.div>

      </div>
    </section>
  );
}