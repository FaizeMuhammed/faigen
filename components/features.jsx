'use client'

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Sparkles, MessageSquare, Layout, UploadCloud, MonitorSmartphone, Bot } from "lucide-react";

// --- Custom Icons ---
const WhatsAppIcon = ({ className }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.305-.885-.653-1.48-1.46-1.653-1.758-.173-.298-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.397-.272.322-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/></svg>
);

const InstagramIcon = ({ className }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
);

// --- Helper Components ---

// 1. Text Reveal Word
const ScrollWord = ({ word, progress, range }) => {
  const color = useTransform(progress, range, ["#D1D5DB", "#1A1A1A"]);
  return (
    <motion.span style={{ color }} className="inline-block mr-[0.28em] mb-2">
      {word}
    </motion.span>
  );
};

// 2. Animated Floating Node on the Bended Path
const BendedNode = ({ progress, threshold, x, y, icon, label, colorClass }) => {
  const scale = useTransform(progress, [threshold - 0.15, threshold], [0.6, 1]);
  const opacity = useTransform(progress, [threshold - 0.15, threshold], [0.4, 1]);
  const filter = useTransform(progress, [threshold - 0.15, threshold], ["grayscale(100%)", "grayscale(0%)"]);

  return (
    <motion.div
      style={{ left: x, top: y, scale, opacity, filter }}
      className="absolute -translate-x-1/2 -translate-y-1/2 flex flex-col items-center gap-2 z-20"
    >
      <div className={`w-12 h-12 rounded-[0.9rem] flex items-center justify-center shadow-lg border-2 border-white text-white ${colorClass}`}>
        {icon}
      </div>
      <span className="text-[10px] font-bold text-gray-700 tracking-wider uppercase bg-white/90 backdrop-blur-md px-2.5 py-1 rounded-lg shadow-sm whitespace-nowrap border border-gray-100">
        {label}
      </span>
    </motion.div>
  );
};

export default function FeatureSection() {
  // --- Refs & Animations for First Section Only ---
  const textRef = useRef(null);
  const { scrollYProgress: textProgress } = useScroll({
    target: textRef,
    offset: ["start 85%", "end 50%"]
  });

  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  const headlineText = "Now Any Business Can Automate Sales In Malayalam & English Without Worrying About Staffing Or Response Times.";
  const words = headlineText.split(" ");

  return (
    <section className="w-full bg-white pt-16 pb-32 font-sans text-[#1A1A1A] relative overflow-hidden">
      
      {/* Subtle Ambient Background Blurs */}
      <div className="absolute top-[30%] right-0 w-[600px] h-[600px] bg-blue-50/50 blur-[120px] rounded-full pointer-events-none z-0" />
      <div className="absolute bottom-[10%] left-0 w-[500px] h-[500px] bg-gray-50 blur-[100px] rounded-full pointer-events-none z-0" />

      {/* --- Central Framed Column (Vertical Borders) --- */}
      <div className="max-w-[1300px] mx-auto border-x border-gray-300 relative z-10">
        
        {/* ======================================================= */}
        {/* SECTION 1: Top Headline Section with Bended Scroll Thread */}
        {/* ======================================================= */}
        <div className="px-6 md:px-12 py-20 relative">
          <div className="absolute top-0 left-[-100vw] right-[-100vw] h-[1px] bg-gray-300"></div>

          <div className="flex flex-col lg:flex-row items-center lg:items-start gap-8 lg:gap-16">
            
            {/* Left Side: Animated Bended SVG Thread */}
            <div className="hidden lg:block relative w-[200px] h-[550px] shrink-0">
              <svg width="200" height="550" viewBox="0 0 200 550" fill="none" className="absolute inset-0">
                <path 
                  d="M100 0 C100 100 170 150 170 220 C170 320 30 380 30 450 C30 510 100 530 100 550" 
                  stroke="#F3F4F6" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"
                />
                <motion.path 
                  d="M100 0 C100 100 170 150 170 220 C170 320 30 380 30 450 C30 510 100 530 100 550" 
                  stroke="#2563EB" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" 
                  style={{ pathLength: textProgress }} 
                />
              </svg>

              <BendedNode 
                progress={textProgress} threshold={0.35} 
                x="170px" y="220px" 
                icon={<WhatsAppIcon className="w-6 h-6" />} 
                label="WhatsApp" 
                colorClass="bg-[#25D366]" 
              />
              <BendedNode 
                progress={textProgress} threshold={0.75} 
                x="30px" y="450px" 
                icon={<InstagramIcon className="w-6 h-6" />} 
                label="Insta DMs" 
                colorClass="bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-600" 
              />
              <BendedNode 
                progress={textProgress} threshold={0.95} 
                x="100px" y="550px" 
                icon={<Bot className="w-6 h-6" />} 
                label="AI Chatbot" 
                colorClass="bg-[#2563EB]" 
              />
            </div>

            {/* Mobile Fallback Badge */}
            <motion.div 
              initial="hidden" whileInView="visible" viewport={{ once: false, margin: "-50px" }} variants={fadeUp}
              className="lg:hidden flex-shrink-0"
            >
              <div className="inline-flex items-center gap-2 px-4 py-1.5 border border-gray-300 rounded-full text-[13px] font-bold text-gray-700 shadow-sm bg-white tracking-wide uppercase">
                <span className="w-1.5 h-1.5 rounded-full bg-[#2563EB] animate-pulse"></span>
                Kerala's Premier Tech Agency
              </div>
            </motion.div>

            {/* Right Side: Scroll-Scrub Reveal Text */}
            <div className="max-w-[1000px] relative z-10 lg:pt-8" ref={textRef}>
              <h2 className="text-[2.5rem] sm:text-[3.5rem] lg:text-[4.5rem] leading-[1.05] font-medium tracking-tight">
                {words.map((word, i) => {
                  const start = i / words.length;
                  const end = start + (1 / words.length);
                  return (
                    <ScrollWord key={i} word={word} progress={textProgress} range={[start, end]} />
                  );
                })}
              </h2>
            </div>
          </div>
        </div>

        {/* ======================================================= */}
        {/* SECTION 2: Feature Block 1 (AI WhatsApp Agent) - STATIC */}
        {/* ======================================================= */}
        <div className="px-6 md:px-12 py-24 md:py-32 relative">
          <div className="absolute top-0 left-[-100vw] right-[-100vw] h-[1px] bg-gray-300"></div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-12 items-center">
            
            {/* Left: Copy */}
            <div className="col-span-1 lg:col-span-5 pr-0 lg:pr-10">
              <div className="flex items-center gap-3 text-[#2563EB] font-bold text-[13px] mb-6 uppercase tracking-widest">
                <div className="w-8 h-8 rounded-lg bg-blue-50 flex items-center justify-center border border-blue-100">
                  <MessageSquare size={16} />
                </div>
                WhatsApp & Insta AI
              </div>
              <h3 className="text-[2.5rem] md:text-[3.5rem] leading-[1.05] font-medium tracking-tight text-[#1A1A1A] mb-8">
                Never Miss An Order With Your <span className="text-[#2563EB]">Virtual Assistant</span>
              </h3>
              <p className="text-gray-500 text-[16px] leading-relaxed mb-12 font-medium">
                Upload your catalog to Faigen and our AI will instantly handle customer queries, process orders, and send secure payment links. Perfect for Kerala's boutiques, restaurants, and clinics. It works 24/7, speaks fluent Malayalam and English, and never takes a day off.
              </p>
            </div>

            {/* Right: Static Image Group */}
            <div className="col-span-1 lg:col-span-7 relative flex justify-end w-full h-full min-h-[400px] md:min-h-[500px]">
              <div className="w-full h-full relative flex items-center justify-center">
                {/* Split Images */}
                <div className="flex gap-4 w-full md:w-[90%] h-[400px] md:h-[500px] relative z-0">
                  <div 
                    className="w-1/2 h-full rounded-[2rem] bg-cover bg-center shadow-[0_20px_40px_rgba(0,0,0,0.1)] border border-gray-200" 
                    style={{ backgroundImage: "url('https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=1000&auto=format&fit=crop')" }}
                  />
                  <div 
                    className="w-1/2 h-full rounded-[2rem] bg-cover bg-center opacity-95 shadow-[0_20px_40px_rgba(0,0,0,0.1)] border border-gray-200" 
                    style={{ backgroundImage: "url('https://images.unsplash.com/photo-1542282088-72c9c27ed0cd?q=80&w=1000&auto=format&fit=crop')" }}
                  />
                </div>

                {/* Fixed Glass UI Card (Centered) */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[85%] md:w-[70%] bg-white/70 backdrop-blur-xl border border-white p-6 md:p-8 rounded-[2rem] shadow-[0_30px_60px_-15px_rgba(0,0,0,0.2)] z-10">
                  <div className="flex items-center gap-4 mb-6 bg-white/60 p-3 rounded-2xl border border-white/80 shadow-sm">
                    <div className="w-12 h-12 bg-[#2563EB] rounded-[0.8rem] flex items-center justify-center text-white shadow-md">
                      <Sparkles size={20} />
                    </div>
                    <div>
                      <p className="text-[11px] text-gray-500 font-bold uppercase tracking-widest">Faigen AI Engine</p>
                      <p className="text-[15px] font-bold text-gray-900">Upload Store Catalog</p>
                    </div>
                  </div>

                  <div className="w-full border-2 border-dashed border-gray-300 bg-white/50 rounded-2xl py-10 flex flex-col items-center justify-center gap-2 cursor-pointer hover:bg-white hover:border-[#2563EB] transition-all group">
                    <UploadCloud className="text-gray-400 mb-1 group-hover:text-[#2563EB] transition-colors" size={28} strokeWidth={1.5} />
                    <p className="text-[14px] font-bold text-gray-800">Drag & Drop Excel/PDF Here</p>
                    <p className="text-[12px] text-gray-500 font-medium">Auto-trains your agent instantly</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ======================================================= */}
        {/* SECTION 3: Feature Block 2 (Websites) - STATIC          */}
        {/* ======================================================= */}
        <div className="px-6 md:px-12 py-24 md:py-32 relative">
          <div className="absolute top-0 left-[-100vw] right-[-100vw] h-[1px] bg-gray-300"></div>
          <div className="absolute bottom-0 left-[-100vw] right-[-100vw] h-[1px] bg-gray-300"></div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-12 items-center">
            
            {/* Left: Copy */}
            <div className="col-span-1 lg:col-span-5 pr-0 lg:pr-10">
              <div className="flex items-center gap-3 text-[#0F172A] font-bold text-[13px] mb-6 uppercase tracking-widest">
                <div className="w-8 h-8 rounded-lg bg-gray-100 flex items-center justify-center border border-gray-200">
                  <Layout size={16} />
                </div>
                Custom Web Development
              </div>
              <h3 className="text-[2.5rem] md:text-[3.5rem] leading-[1.05] font-medium tracking-tight text-[#1A1A1A] mb-8">
                Build A Premium Brand With <span className="text-[#0F172A]">Stunning Web Design</span>
              </h3>
              <p className="text-gray-500 text-[16px] leading-relaxed mb-12 font-medium">
                We don't just build websites; we build digital storefronts that convert. Fast, secure, and perfectly tailored to your brand. From high-converting landing pages for local shops to full-scale web applications for growing enterprises.
              </p>
            </div>

            {/* Right: Static Single Image */}
            <div className="col-span-1 lg:col-span-7 relative flex justify-end w-full h-full min-h-[400px] md:min-h-[500px]">
              <div className="w-full h-full relative flex items-center justify-center">
                {/* Single Large Image Container */}
                <div 
                  className="w-full md:w-[95%] h-[400px] md:h-[500px] rounded-[2rem] bg-cover bg-center shadow-[0_30px_60px_rgba(0,0,0,0.2)] border border-gray-200 relative overflow-hidden" 
                  style={{ backgroundImage: "url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1500&auto=format&fit=crop')" }}
                >
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                </div>

                {/* Fixed Glass UI element (Bottom Right) */}
                <div className="absolute bottom-[-10px] right-2 md:bottom-10 md:right-10 bg-white/80 backdrop-blur-2xl border border-white p-5 rounded-[1.5rem] shadow-[0_20px_40px_-10px_rgba(0,0,0,0.2)] w-[240px] z-10">
                  <div className="flex items-center gap-3 mb-4 border-b border-gray-200/50 pb-3">
                     <div className="w-8 h-8 rounded-lg bg-gray-900 text-white flex items-center justify-center shadow-sm">
                       <MonitorSmartphone size={14} />
                     </div>
                     <span className="text-[13px] font-bold text-gray-900">Responsive Layout</span>
                  </div>
                  {/* Fake UI bars */}
                  <div className="space-y-2.5">
                    <div className="h-2 w-16 bg-[#2563EB] rounded-full"></div>
                    <div className="h-2 w-full bg-gray-200 rounded-full"></div>
                    <div className="h-2 w-4/5 bg-gray-200 rounded-full"></div>
                    <div className="h-2 w-full bg-gray-200 rounded-full"></div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}