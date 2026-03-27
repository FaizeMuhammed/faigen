'use client'

import React from "react";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";

export default function FooterSection() {
  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
  };

  return (
    <footer className="w-full bg-white pt-2 overflow-hidden font-sans">
      
      {/* --- Testimonial Block --- */}
      <div className="w-full px-4 md:px-8 mb-20">
        <motion.div 
          initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={fadeUp}
          className="max-w-[1600px] mx-auto bg-[#F8F9FA] rounded-[2.5rem] md:rounded-[3rem] p-8 md:p-12 lg:p-20"
        >
          
          {/* Top Row: Headline & Arrows */}
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

          {/* Middle Row: Avatars & Quote */}
          <div className="flex flex-col-reverse lg:flex-row justify-between items-start lg:items-center gap-10">
            
            {/* Avatars */}
            <div className="flex items-end">
              <div className="w-14 h-14 md:w-16 md:h-16 rounded-2xl overflow-hidden border-2 border-[#F8F9FA] shadow-sm z-10">
                <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop" alt="Client 1" className="w-full h-full object-cover" />
              </div>
              <div className="w-16 h-16 md:w-[4.5rem] md:h-[4.5rem] rounded-2xl overflow-hidden border-2 border-[#F8F9FA] shadow-md -ml-4 z-20 mb-2 relative">
                <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200&auto=format&fit=crop" alt="Client 2" className="w-full h-full object-cover" />
                <div className="absolute bottom-1 right-1 bg-white text-[9px] font-bold px-1.5 rounded-md text-gray-800">Sarah M.</div>
              </div>
              <div className="w-14 h-14 md:w-16 md:h-16 rounded-2xl overflow-hidden border-2 border-[#F8F9FA] shadow-sm -ml-4 z-10 opacity-70">
                <img src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=200&auto=format&fit=crop" alt="Client 3" className="w-full h-full object-cover grayscale" />
              </div>
              <div className="w-14 h-14 md:w-16 md:h-16 rounded-2xl overflow-hidden border-2 border-[#F8F9FA] shadow-sm -ml-4 z-0 opacity-90">
                <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=200&auto=format&fit=crop" alt="Client 4" className="w-full h-full object-cover" />
              </div>
            </div>

            {/* Quote */}
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
          {/* Brand Logo & Description */}
          <div className="col-span-1 md:col-span-2 flex flex-col items-start gap-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 flex items-center justify-center overflow-hidden">
                <img
                  src="/ChatGPT_Image_Apr_4__2025__10_40_51_PM-removebg-preview.png"
                  alt="Faigen Logo"
                  className="h-full w-full object-contain"
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.parentNode.innerHTML = '<span class="font-bold text-xl">F</span>';
                  }}
                />
              </div>
              <span className="font-bold text-xl tracking-tight text-[#1A1A1A] mt-1.5">Faigen</span>
            </div>
            <p className="text-gray-500 text-sm font-medium max-w-xs mt-2 leading-relaxed">
              Kerala's premier tech agency. Building cinematic websites and intelligent AI agents for modern businesses.
            </p>
          </div>

          {/* Column 1: Services */}
          <div>
            <h4 className="font-bold text-[#1A1A1A] text-sm tracking-widest uppercase mb-6">Services</h4>
            <ul className="space-y-4 text-sm font-medium text-gray-500">
              <li><a href="#" className="hover:text-[#2563EB] transition-colors">Web Development</a></li>
              <li><a href="#" className="hover:text-[#2563EB] transition-colors">WhatsApp AI Agents</a></li>
              <li><a href="#" className="hover:text-[#2563EB] transition-colors">Insta Auto-DMs</a></li>
            </ul>
          </div>

          {/* Column 2: Company */}
          <div>
            <h4 className="font-bold text-[#1A1A1A] text-sm tracking-widest uppercase mb-6">Company</h4>
            <ul className="space-y-4 text-sm font-medium text-gray-500">
              <li><a href="#" className="hover:text-[#2563EB] transition-colors">Our Portfolio</a></li>
              <li><a href="#" className="hover:text-[#2563EB] transition-colors">Pricing</a></li>
              <li><a href="#" className="hover:text-[#2563EB] transition-colors">About Us</a></li>
              <li><a href="/privacy" className="hover:text-[#2563EB] transition-colors">Privacy Policy</a></li>
              <li><a href="/terms" className="hover:text-[#2563EB] transition-colors">Terms & Conditions</a></li>


              

            </ul>
          </div>

          {/* Column 3: Connect */}
          <div>
            <h4 className="font-bold text-[#1A1A1A] text-sm tracking-widest uppercase mb-6">Connect</h4>
            <ul className="space-y-4 text-sm font-medium text-gray-500">
              <li><a href="#" className="hover:text-[#2563EB] transition-colors">Book a Demo</a></li>
              <li><a href="#" className="hover:text-[#2563EB] transition-colors">Contact Us</a></li>
              <li><a href="#" className="hover:text-[#2563EB] transition-colors">Instagram</a></li>
            </ul>
          </div>
        </motion.div>
      </div>

      {/* --- Massive Footer Typography --- */}
      <motion.div 
        initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 1, ease: "easeOut" }}
        className="w-full flex justify-center items-end overflow-hidden pt-6"
      >
        <h1 className="text-[16vw] font-black tracking-[-0.04em] leading-[0.72] text-[#1A1A1A] select-none text-center transform translate-y-[8%]">
          faigen.in
        </h1>
      </motion.div>

    </footer>
  );
}