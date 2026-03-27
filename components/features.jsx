'use client'

import React from "react";
import { motion } from "framer-motion";
import { Sparkles, MessageSquare, Layout, UploadCloud, MonitorSmartphone } from "lucide-react";

export default function FeatureSection() {
  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
  };

  return (
    <section className="w-full bg-white py-12 font-sans text-[#1A1A1A]">
      
      {/* --- Central Framed Column (Left & Right Borders) --- */}
      <div className="max-w-[1300px] mx-auto border-x border-gray-200">
        
        {/* --- Top Massive Fading Headline Section --- */}
        {/* Added bottom border here */}
        <div className="px-6 md:px-12 pt-10 pb-24 border-b border-gray-200 flex flex-col lg:flex-row items-start gap-8 lg:gap-20">
          
          {/* Left Side Badge */}
          <motion.div 
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp}
            className="flex-shrink-0 pt-4"
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 border border-gray-300 rounded-full text-[13px] font-medium text-gray-800 shadow-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-red-500"></span>
              Kerala's Premier Tech Agency
            </div>
          </motion.div>

          {/* Right Side Massive Fading Text */}
          <motion.div 
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp}
            className="max-w-[1000px]"
          >
            <h2 className="text-[2.5rem] sm:text-[3.5rem] lg:text-[4.5rem] leading-[1.05] font-normal tracking-[-0.03em]">
              <span className="text-[#1A1A1A]">Now Any Business Can Automate </span>
              <span className="text-gray-300">Sales In Malayalam & English</span>
              <br />
              <span className="text-[#1A1A1A]">Without </span>
              <span className="inline-flex items-center justify-center align-middle mx-1">
                <Sparkles className="w-8 h-8 sm:w-10 sm:h-10 text-teal-600" />
              </span>
              <span className="text-[#1A1A1A]"> Worry</span>
              <span className="text-gray-300">ing About Staffing Or Response Times.</span>
            </h2>
          </motion.div>
        </div>

        {/* --- Feature Block 1: AI WhatsApp Agent --- */}
        {/* Section contained within the borders, with a bottom border */}
        <div className="px-6 md:px-12 py-24 border-b border-gray-200">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-8 items-center">
            
            {/* Left: Copy */}
            <motion.div 
              initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp}
              className="col-span-1 lg:col-span-5 pr-0 lg:pr-12"
            >
              {/* Feature Tag */}
              <div className="flex items-center gap-3 text-gray-800 font-medium text-[13px] mb-6">
                <div className="w-8 h-8 rounded-[8px] bg-[#105c6e] flex items-center justify-center text-white shadow-sm">
                  <MessageSquare size={16} />
                </div>
                WhatsApp AI Agent
              </div>
              
              {/* Feature Headline */}
              <h3 className="text-[2.5rem] md:text-[3.2rem] leading-[1.05] font-normal tracking-[-0.03em] text-[#1A1A1A] mb-8">
                Never Miss An Order With Your <span className="text-[#105c6e]">Virtual Assistant</span>
              </h3>
              
              {/* Feature Description */}
              <p className="text-gray-500 text-[15px] leading-relaxed mb-12 font-medium">
                Upload your catalog to Faigen and our AI will instantly handle customer queries, process orders, and send payment links. It works 24/7, speaks Malayalam and English perfectly, and never takes a day off. Don't believe it? Book a demo now.
              </p>
            </motion.div>

            {/* Right: Split Images + Center Floating UI */}
            <motion.div 
              initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp}
              className="col-span-1 lg:col-span-7 relative flex justify-end"
            >
              {/* Split Images Background */}
              <div className="flex gap-4 w-full md:w-[90%] h-[400px] md:h-[500px]">
                <div 
                  className="w-1/2 h-full rounded-[1.5rem] bg-cover bg-center shadow-sm" 
                  style={{ backgroundImage: "url('https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=1000&auto=format&fit=crop')" }}
                ></div>
                <div 
                  className="w-1/2 h-full rounded-[1.5rem] bg-cover bg-center opacity-90 shadow-sm" 
                  style={{ backgroundImage: "url('https://images.unsplash.com/photo-1542282088-72c9c27ed0cd?q=80&w=1000&auto=format&fit=crop')" }}
                ></div>
              </div>

              {/* Floating Glass UI Card */}
              <div className="absolute top-1/2 left-[5%] md:left-[15%] lg:left-[-10%] -translate-y-1/2 w-[90%] md:w-[80%] max-w-[420px] bg-white/60 backdrop-blur-2xl border border-white p-6 md:p-8 rounded-[1.5rem] shadow-[0_20px_40px_-10px_rgba(0,0,0,0.1)]">
                <div className="flex items-center gap-4 mb-6 bg-white/50 p-2 rounded-xl border border-white/60">
                  <div className="w-10 h-10 bg-[#C87523] rounded-[10px] flex items-center justify-center text-white shadow-sm">
                    <Sparkles size={20} />
                  </div>
                  <div>
                    <p className="text-[10px] text-gray-500 font-medium">Faigen Engine</p>
                    <p className="text-[14px] font-semibold text-gray-900">Upload Store Catalog</p>
                  </div>
                </div>

                <div className="w-full border border-dashed border-gray-300 bg-white/40 rounded-xl py-10 flex flex-col items-center justify-center gap-2 cursor-pointer hover:bg-white/80 hover:border-gray-400 transition-all">
                  <UploadCloud className="text-gray-400 mb-1" size={24} />
                  <p className="text-[13px] font-semibold text-gray-700">Drag & Drop Excel/PDF Here</p>
                  <p className="text-[11px] text-gray-400 font-medium">Max 50MB</p>
                </div>
              </div>
            </motion.div>

          </div>
        </div>

        {/* --- Feature Block 2: Websites & Web Apps --- */}
        {/* Section contained within the borders, with a bottom border */}
        <div className="px-6 md:px-12 py-24 border-b border-gray-200">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-8 items-center">
            
            {/* Left: Copy */}
            <motion.div 
              initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp}
              className="col-span-1 lg:col-span-5 pr-0 lg:pr-12"
            >
              {/* Feature Tag */}
              <div className="flex items-center gap-3 text-gray-800 font-medium text-[13px] mb-6">
                <div className="w-8 h-8 rounded-[8px] bg-[#682496] flex items-center justify-center text-white shadow-sm">
                  <Layout size={16} />
                </div>
                Custom Web Development
              </div>
              
              {/* Feature Headline */}
              <h3 className="text-[2.5rem] md:text-[3.2rem] leading-[1.05] font-normal tracking-[-0.03em] text-[#1A1A1A] mb-8">
                Build A Premium Brand With <span className="text-[#682496]">Stunning Web Design</span>
              </h3>
              
              {/* Feature Description */}
              <p className="text-gray-500 text-[15px] leading-relaxed mb-12 font-medium">
                We don't just build websites; we build digital storefronts that convert. Fast, secure, and perfectly tailored to your business needs. From simple landing pages to full-scale web applications, we handle it all.
              </p>
            </motion.div>

            {/* Right: Image */}
            <motion.div 
              initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp}
              className="col-span-1 lg:col-span-7 relative flex justify-end"
            >
              {/* Single Large Image Container */}
              <div 
                className="w-full md:w-[90%] h-[400px] md:h-[500px] rounded-[1.5rem] bg-cover bg-center shadow-xl relative overflow-hidden" 
                style={{ backgroundImage: "url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1500&auto=format&fit=crop')" }}
              >
                {/* Floating UI element */}
                <div className="absolute bottom-6 right-6 bg-white/95 backdrop-blur-xl border border-white/50 p-4 rounded-xl shadow-[0_10px_30px_rgba(0,0,0,0.1)] w-[220px]">
                  <div className="flex items-center gap-2 mb-3 border-b border-gray-100 pb-2">
                     <MonitorSmartphone size={14} className="text-[#682496]" />
                     <span className="text-[11px] font-bold text-gray-800">Responsive Layout</span>
                  </div>
                  <div className="h-1.5 w-12 bg-purple-200 rounded-full mb-2"></div>
                  <div className="h-1.5 w-full bg-gray-200 rounded-full mb-2"></div>
                  <div className="h-1.5 w-4/5 bg-gray-200 rounded-full"></div>
                </div>
              </div>
            </motion.div>

          </div>
        </div>

      </div>
    </section>
  );
}