'use client'

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Sparkles, MessageSquare, Layout, UploadCloud, MonitorSmartphone } from "lucide-react";

// Helper component for the scroll-linked word reveal
const ScrollWord = ({ word, progress, range }) => {
  // Smoothly transitions from light gray to solid black based on scroll progress
  const color = useTransform(progress, range, ["#D1D5DB", "#1A1A1A"]);
  return (
    <motion.span style={{ color }} className="inline-block mr-[0.28em] mb-2">
      {word}
    </motion.span>
  );
};

export default function FeatureSection() {
  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
  };

  const headlineText = "Now Any Business Can Automate Sales In Malayalam & English Without Worrying About Staffing Or Response Times.";
  const words = headlineText.split(" ");
  
  // Ref for tracking the scroll position of the headline
  const textRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: textRef,
    // Starts animating when the top of the text is at 85% of the viewport height, 
    // finishes when the end of the text reaches 50% of the viewport height.
    offset: ["start 85%", "end 50%"]
  });

  return (
    <section className="w-full bg-white pt-16 pb-20 font-sans text-[#1A1A1A] overflow-hidden">
      
      {/* --- Central Framed Column (Vertical Borders) --- */}
      <div className="max-w-[1300px] mx-auto border-x border-gray-200 relative">
        
        {/* --- Top Fading Headline Section --- */}
        <div className="px-6 md:px-12 py-20 bg-white relative">
          <div className="absolute top-0 left-[-100vw] right-[-100vw] h-[1px] bg-gray-200"></div>
          <div className="absolute bottom-0 left-[-100vw] right-[-100vw] h-[1px] bg-gray-200"></div>

          <div className="flex flex-col lg:flex-row items-start gap-8 lg:gap-20">
            {/* Left Side Badge */}
            <motion.div 
              initial="hidden" whileInView="visible" viewport={{ once: false, margin: "-50px" }} variants={fadeUp}
              className="flex-shrink-0 pt-4"
            >
              <div className="inline-flex items-center gap-2 px-4 py-1.5 border border-gray-300 rounded-full text-[13px] font-medium text-gray-800 shadow-sm bg-white relative z-10">
                <span className="w-1.5 h-1.5 rounded-full bg-[#2563EB]"></span>
                Kerala's Premier Tech Agency
              </div>
            </motion.div>

            {/* Right Side Scroll-Scrub Reveal Text */}
            <div className="max-w-[1000px] relative z-10">
              <h2 ref={textRef} className="text-[2.5rem] sm:text-[3.5rem] lg:text-[4.5rem] leading-[1.05] font-normal tracking-[-0.03em] bg-white">
                {words.map((word, i) => {
                  // Calculate the start and end progress for each individual word
                  const start = i / words.length;
                  const end = start + (1 / words.length);
                  return (
                    <ScrollWord key={i} word={word} progress={scrollYProgress} range={[start, end]} />
                  );
                })}
              </h2>
            </div>
          </div>
        </div>

        {/* --- GAP BETWEEN SECTIONS --- */}
        <div className="h-10 w-full bg-white"></div>

        {/* --- Feature Block 1: AI WhatsApp Agent --- */}
        <div className="px-6 md:px-12 py-24 bg-white relative">
          <div className="absolute top-0 left-[-100vw] right-[-100vw] h-[1px] bg-gray-200"></div>
          <div className="absolute bottom-0 left-[-100vw] right-[-100vw] h-[1px] bg-gray-200"></div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-8 items-center relative z-10">
            {/* Left: Copy */}
            <motion.div 
              initial="hidden" whileInView="visible" viewport={{ once: false, margin: "-50px" }} variants={fadeUp}
              className="col-span-1 lg:col-span-5 pr-0 lg:pr-12"
            >
              {/* Feature Tag */}
              <div className="flex items-center gap-3 text-gray-800 font-medium text-[13px] mb-6">
                <div className="w-8 h-8 rounded-[8px] bg-[#2563EB] flex items-center justify-center text-white shadow-sm">
                  <MessageSquare size={16} />
                </div>
                WhatsApp & Insta AI Agents
              </div>
              
              {/* Feature Headline */}
              <h3 className="text-[2.5rem] md:text-[3.2rem] leading-[1.05] font-normal tracking-[-0.03em] text-[#1A1A1A] mb-8">
                Never Miss An Order With Your <span className="text-[#2563EB] font-semibold">Virtual Assistant</span>
              </h3>
              
              {/* Feature Description */}
              <p className="text-gray-500 text-[15px] leading-relaxed mb-12 font-medium">
                Upload your catalog to Faigen and our AI will instantly handle customer queries, process orders, and send secure payment links. Perfect for Kerala's boutiques, restaurants, and clinics. It works 24/7, speaks fluent Malayalam and English, and never takes a day off.
              </p>
            </motion.div>

            {/* Right: Split Images + Center Floating UI */}
            <motion.div 
              initial="hidden" whileInView="visible" viewport={{ once: false, margin: "-50px" }} variants={fadeUp}
              className="col-span-1 lg:col-span-7 relative flex justify-end"
            >
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
                  <div className="w-10 h-10 bg-[#2563EB] rounded-[10px] flex items-center justify-center text-white shadow-sm">
                    <Sparkles size={20} />
                  </div>
                  <div>
                    <p className="text-[10px] text-gray-500 font-medium">Faigen AI Engine</p>
                    <p className="text-[14px] font-semibold text-gray-900">Upload Store Catalog</p>
                  </div>
                </div>

                <div className="w-full border border-dashed border-gray-300 bg-white/40 rounded-xl py-10 flex flex-col items-center justify-center gap-2 cursor-pointer hover:bg-white/80 hover:border-[#2563EB] transition-all">
                  <UploadCloud className="text-gray-400 mb-1" size={24} />
                  <p className="text-[13px] font-semibold text-gray-700">Drag & Drop Excel/PDF Here</p>
                  <p className="text-[11px] text-gray-400 font-medium">Auto-trains your agent instantly</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* --- GAP BETWEEN SECTIONS --- */}
        <div className="h-10 w-full bg-white"></div>

        {/* --- Feature Block 2: Websites & Web Apps --- */}
        <div className="px-6 md:px-12 py-24 bg-white relative">
          <div className="absolute top-0 left-[-100vw] right-[-100vw] h-[1px] bg-gray-200"></div>
          <div className="absolute bottom-0 left-[-100vw] right-[-100vw] h-[1px] bg-gray-200"></div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-8 items-center relative z-10">
            
            {/* Left: Copy */}
            <motion.div 
              initial="hidden" whileInView="visible" viewport={{ once: false, margin: "-50px" }} variants={fadeUp}
              className="col-span-1 lg:col-span-5 pr-0 lg:pr-12"
            >
              {/* Feature Tag */}
              <div className="flex items-center gap-3 text-gray-800 font-medium text-[13px] mb-6">
                <div className="w-8 h-8 rounded-[8px] bg-[#0F172A] flex items-center justify-center text-white shadow-sm">
                  <Layout size={16} />
                </div>
                Custom Web Development
              </div>
              
              {/* Feature Headline */}
              <h3 className="text-[2.5rem] md:text-[3.2rem] leading-[1.05] font-normal tracking-[-0.03em] text-[#1A1A1A] mb-8">
                Build A Premium Brand With <span className="text-[#0F172A] font-semibold">Stunning Web Design</span>
              </h3>
              
              {/* Feature Description */}
              <p className="text-gray-500 text-[15px] leading-relaxed mb-12 font-medium">
                We don't just build websites; we build digital storefronts that convert. Fast, secure, and perfectly tailored to your brand. From high-converting landing pages for local shops to full-scale web applications for growing enterprises.
              </p>
            </motion.div>

            {/* Right: Image */}
            <motion.div 
              initial="hidden" whileInView="visible" viewport={{ once: false, margin: "-50px" }} variants={fadeUp}
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
                     <MonitorSmartphone size={14} className="text-[#0F172A]" />
                     <span className="text-[11px] font-bold text-gray-800">Responsive Layout</span>
                  </div>
                  <div className="h-1.5 w-12 bg-[#2563EB] rounded-full mb-2"></div>
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