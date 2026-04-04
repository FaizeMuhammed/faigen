'use client'

import React from "react";
import { motion } from "framer-motion";
import { MessageCircle, CheckCircle2, Globe, Mail, Mic, Calendar } from "lucide-react";

export default function OmniChannelSection() {
  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
  };

  // Organic floating animation for language pills
  const float = (delay) => ({
    animate: { y: [-3, 3, -3], transition: { duration: 4, repeat: Infinity, ease: "easeInOut", delay } }
  });

  return (
    <section className="w-full bg-white py-24 md:py-32 font-sans text-[#1A1A1A] overflow-hidden">
      {/* Increased max-width for a wider, more expansive grid */}
      <div className="max-w-[1400px] mx-auto px-4 md:px-8">
        
        {/* --- Header Section --- */}
        <motion.div 
          initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={fadeUp}
          className="flex flex-col items-center text-center mb-16"
        >
          <div className="bg-gray-50 border border-gray-200 px-5 py-2 rounded-full shadow-sm text-[12px] font-bold text-gray-700 mb-8 uppercase tracking-widest">
            Service
          </div>
          <h2 className="text-[2.8rem] md:text-[4.5rem] font-medium leading-[1.05] tracking-tight text-[#1A1A1A] mb-6 max-w-4xl">
            Omni-channel, any task,<br /> multi-language
          </h2>
          <p className="text-gray-500 text-[16px] md:text-[18px] font-medium max-w-3xl leading-relaxed">
            Faigen offers a human-like AI service that effortlessly blends into your sales process, completing nearly any task and collaborating with your team within the Agent Platform.
          </p>
        </motion.div>

        {/* --- Exact Bento Grid Replication --- */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 h-auto lg:h-[650px]">
          
          {/* CARD 1: Collaborative Intelligence (Left Tall Card) */}
          <motion.div 
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
            className="lg:col-span-4 bg-[#F8FAFC] rounded-[2rem] overflow-hidden shadow-[0_20px_50px_-15px_rgba(0,0,0,0.05)] border border-gray-100 relative flex flex-col h-[500px] lg:h-full"
          >
            {/* Background Image */}
            <div 
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: "url('https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=800&auto=format&fit=crop')" }}
            />
            {/* White Fade Gradient at Bottom */}
            <div className="absolute inset-x-0 bottom-0 h-[60%] bg-gradient-to-t from-white via-white/95 to-transparent z-10" />

            {/* Glassmorphism Chat Bubbles */}
            <div className="relative z-20 p-6 flex flex-col gap-4 mt-10">
              <div className="bg-[#2563EB] text-white text-[13px] font-medium p-4 rounded-2xl rounded-tr-sm shadow-md self-end max-w-[85%] leading-relaxed">
                I ordered the floral dress, but the tracking shows delayed. How do I fix this?
              </div>
              <div className="bg-white/40 backdrop-blur-md border border-white/60 text-gray-900 text-[13px] font-medium p-4 rounded-2xl rounded-tl-sm shadow-[0_10px_30px_rgba(0,0,0,0.08)] self-start max-w-[90%] leading-relaxed">
                <span className="font-bold">Please share your Order ID</span> for more detailed information on resolving your issue.
              </div>
            </div>

            {/* Text Content at Bottom */}
            <div className="relative z-20 mt-auto p-8 pt-0">
              <h3 className="text-[2rem] font-medium leading-tight text-[#1A1A1A] mb-3 tracking-tight">
                Collaborative <br/> intelligence
              </h3>
              <p className="text-gray-500 text-[15px] font-medium leading-relaxed pr-4">
                Sub-agents work together seamlessly to handle complex scenarios, achieving superior results through coordinated effort.
              </p>
            </div>
          </motion.div>

          {/* RIGHT COLUMN WRAPPER */}
          <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-8 gap-6 h-full">
            
            {/* --- TOP ROW --- */}

            {/* CARD 2: Languages (Typographic Graphic Design) */}
            <motion.div 
              initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} transition={{ delay: 0.1 }}
              className="md:col-span-5 bg-[#F8FAFC] rounded-[2rem] border border-gray-100 p-6 md:p-8 shadow-[0_20px_50px_-15px_rgba(0,0,0,0.05)] relative overflow-hidden flex flex-col justify-center min-h-[280px]"
            >
              {/* Decorative Background Symbol (Malayalam Letter 'A' acting as a graphic watermark) */}
              <div className="absolute -right-6 -bottom-12 text-[200px] font-black text-gray-200/60 leading-none select-none pointer-events-none tracking-tighter">
                അ
              </div>

              <div className="relative z-10 w-full flex flex-col justify-center h-full">
                
                {/* Top Floating Context Pills */}
                <div className="flex flex-wrap items-center gap-2.5 mb-6">
                  <span className="text-[10px] font-black text-gray-500 uppercase tracking-widest border border-gray-200 px-2.5 py-1.5 rounded-md bg-white shadow-sm">
                    Auto-Detect
                  </span>
                  <motion.div variants={float(0)} animate="animate" className="px-2.5 py-1.5 bg-blue-50 text-blue-600 border border-blue-100 text-[11px] font-bold rounded-md shadow-sm">
                    മലയാളം
                  </motion.div>
                  <motion.div variants={float(1)} animate="animate" className="px-2.5 py-1.5 bg-rose-50 text-rose-600 border border-rose-100 text-[11px] font-bold rounded-md shadow-sm">
                    हिंदी
                  </motion.div>
                  <motion.div variants={float(0.5)} animate="animate" className="px-2.5 py-1.5 bg-emerald-50 text-emerald-600 border border-emerald-100 text-[11px] font-bold rounded-md shadow-sm">
                    தமிழ்
                  </motion.div>
                </div>

                {/* Massive Typographic Block */}
                <h3 className="flex flex-col text-left">
                  <span className="text-[3rem] lg:text-[3.8rem] font-light text-gray-400 leading-[0.85] tracking-tight">All</span>
                  <span className="text-[3.8rem] lg:text-[4.8rem] font-black text-[#1A1A1A] leading-[0.9] tracking-tighter uppercase">Regional</span>
                  <span className="text-[3rem] lg:text-[4rem] font-semibold text-[#2563EB] leading-[0.9] tracking-tight -ml-1">Languages.</span>
                </h3>
                
              </div>
            </motion.div>

            {/* CARD 3: 300K Conversations (Top Right) */}
            <motion.div 
              initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} transition={{ delay: 0.2 }}
              className="md:col-span-3 bg-[#F8FAFC] border border-gray-100 rounded-[2rem] p-8 shadow-[0_20px_50px_-15px_rgba(0,0,0,0.05)] flex flex-col items-center justify-center text-center h-[280px] lg:h-auto"
            >
              <div className="w-16 h-16 rounded-[1.2rem] bg-gradient-to-b from-blue-100 to-blue-200/50 shadow-[0_10px_20px_-5px_rgba(37,99,235,0.15)] flex items-center justify-center mb-6">
                <MessageCircle className="text-[#2563EB]" fill="#BFDBFE" size={28} />
              </div>
              <h3 className="text-[3.2rem] font-medium tracking-tight text-[#1A1A1A] leading-none mb-1">
                300K
              </h3>
              <p className="text-[13px] font-semibold text-gray-500 uppercase tracking-widest mt-1">
                Daily Chats
              </p>
            </motion.div>

            {/* --- BOTTOM ROW --- */}

            {/* CARD 4: Multitasking Gradient Card (Bottom Middle) */}
            <motion.div 
              initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} transition={{ delay: 0.3 }}
              className="md:col-span-4 rounded-[2rem] p-8 shadow-[0_20px_50px_-15px_rgba(0,0,0,0.05)] border border-gray-100 flex flex-col justify-between h-[280px] lg:h-auto relative overflow-hidden"
            >
              {/* Complex Pastel Blur Background */}
              <div className="absolute inset-0 bg-[#F8FAFC] z-0"></div>
              <div className="absolute -top-10 -left-10 w-48 h-48 bg-[#FEF08A] blur-[60px] rounded-full z-0 opacity-70"></div>
              <div className="absolute top-10 -right-10 w-48 h-48 bg-[#BAE6FD] blur-[60px] rounded-full z-0 opacity-60"></div>
              <div className="absolute -bottom-10 left-1/2 w-48 h-48 bg-[#D9F99D] blur-[60px] rounded-full z-0 opacity-50"></div>

              {/* Floating Pills */}
              <div className="relative z-10 flex flex-col gap-3 mt-2">
                <div className="bg-white/90 backdrop-blur-md rounded-xl shadow-[0_8px_15px_rgba(0,0,0,0.04)] p-3 px-4 flex items-center gap-3 w-fit border border-white">
                  <div className="w-5 h-5 rounded-full bg-[#F97316] text-white flex items-center justify-center shrink-0">
                    <CheckCircle2 size={12} />
                  </div>
                  <span className="text-[13px] font-bold text-gray-800">Generate secure payment links</span>
                </div>
                
                <div className="bg-white/90 backdrop-blur-md rounded-xl shadow-[0_8px_15px_rgba(0,0,0,0.04)] p-3 px-4 flex items-center gap-3 w-fit ml-6 border border-white">
                  <div className="w-5 h-5 rounded-full bg-[#1A202C] text-white flex items-center justify-center shrink-0">
                    <CheckCircle2 size={12} />
                  </div>
                  <span className="text-[13px] font-bold text-gray-800">Identify new leads from Instagram</span>
                </div>
              </div>

              <div className="relative z-10 mt-auto">
                <p className="text-[12px] font-bold text-gray-500 mb-1 uppercase tracking-wider">Any task done by a human</p>
                <h3 className="text-[1.8rem] font-medium tracking-tight text-[#1A1A1A] leading-none">
                  Multitasking
                </h3>
              </div>
            </motion.div>

            {/* CARD 5: Omni Channel Circles (Bottom Right) */}
            <motion.div 
              initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} transition={{ delay: 0.4 }}
              className="md:col-span-4 bg-[#F8FAFC] rounded-[2rem] border border-gray-100 p-8 shadow-[0_20px_50px_-15px_rgba(0,0,0,0.05)] flex flex-col h-[280px] lg:h-auto relative overflow-hidden"
            >
              {/* Text Top */}
              <div className="relative z-20">
                <p className="text-[12px] font-bold text-gray-500 mb-1 uppercase tracking-wider">WhatsApp, Insta, Web etc.</p>
                <h3 className="text-[1.8rem] font-medium tracking-tight text-[#1A1A1A] leading-none">
                  Omni channel
                </h3>
              </div>

              {/* Decorative Concentric Circles & Icons at Bottom Right */}
              <div className="absolute -bottom-[20%] -right-[10%] w-[350px] h-[350px] pointer-events-none">
                {/* SVG Concentric Rings */}
                <svg viewBox="0 0 100 100" className="absolute inset-0 w-full h-full opacity-10">
                  <circle cx="100" cy="100" r="80" stroke="#1A1A1A" strokeWidth="0.75" fill="none" />
                  <circle cx="100" cy="100" r="60" stroke="#1A1A1A" strokeWidth="0.75" fill="none" />
                  <circle cx="100" cy="100" r="40" stroke="#1A1A1A" strokeWidth="0.75" fill="none" />
                  <circle cx="100" cy="100" r="20" fill="#E5E7EB" />
                </svg>

                {/* Floating Icons positioned on the rings */}
                <div className="absolute top-[15%] left-[65%] bg-white rounded-full p-3 shadow-[0_8px_20px_rgba(0,0,0,0.08)] border border-gray-100 text-[#F97316]">
                  <Globe size={20} />
                </div>
                
                <div className="absolute top-[45%] left-[30%] bg-white rounded-full p-3 shadow-[0_8px_20px_rgba(0,0,0,0.08)] border border-gray-100 text-[#06B6D4]">
                  <Mic size={20} />
                </div>

                <div className="absolute top-[75%] left-[5%] bg-white rounded-full p-3 shadow-[0_8px_20px_rgba(0,0,0,0.08)] border border-gray-100 text-gray-500">
                  <Mail size={20} />
                </div>

                <div className="absolute top-[85%] left-[60%] bg-white rounded-full p-3 shadow-[0_8px_20px_rgba(0,0,0,0.08)] border border-gray-100 text-gray-400">
                  <Calendar size={20} />
                </div>
              </div>
            </motion.div>

          </div>
        </div>

      </div>
    </section>
  );
}