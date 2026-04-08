'use client'

import React from "react";
import { motion } from "framer-motion";
import { MessageCircle, CheckCircle2, Globe, Mail, Mic, Calendar } from "lucide-react";

export default function OmniChannelSection() {
  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } }
  };

  const float = (delay) => ({
    animate: { y: [-3, 3, -3], transition: { duration: 4, repeat: Infinity, ease: "easeInOut", delay } }
  });

  return (
    <section className="w-full bg-white py-24 md:py-32 font-sans text-[#1A1A1A] overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-4 md:px-8">

        {/* --- Header --- */}
        <motion.div
          initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={fadeUp}
          className="flex flex-col items-center text-center mb-16"
        >
          <div className="bg-gray-100 border border-gray-200 px-5 py-2 rounded-full text-[11px] font-bold text-gray-600 mb-7 uppercase tracking-widest">
            Service
          </div>
          <h2 className="text-[2.6rem] md:text-[4.2rem] font-medium leading-[1.05] tracking-tight text-[#1A1A1A] mb-5 max-w-4xl">
            Omni-channel, any task,<br /> multi-language
          </h2>
          <p className="text-gray-500 text-[16px] md:text-[17px] font-normal max-w-2xl leading-relaxed">
            Faigen offers a human-like AI service that effortlessly blends into your sales process, completing nearly any task and collaborating with your team within the Agent Platform.
          </p>
        </motion.div>

        {/* --- Bento Grid --- */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 h-auto lg:h-[640px]">

          {/* CARD 1: Collaborative Intelligence (Left Tall) */}
          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
            className="lg:col-span-4 bg-[#F5F5F5] border border-gray-200 overflow-hidden relative flex flex-col h-[500px] lg:h-full"
          >
            {/* Background image */}
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: "url('https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=800&auto=format&fit=crop')" }}
            />
            {/* Fade */}
            <div className="absolute inset-x-0 bottom-0 h-[65%] bg-gradient-to-t from-[#F5F5F5] via-[#F5F5F5]/90 to-transparent z-10" />

            {/* Chat bubbles */}
            <div className="relative z-20 p-6 flex flex-col gap-3 mt-8">
              <div className="bg-[#2563EB] text-white text-[13px] font-medium p-3.5 rounded-none shadow-sm self-end max-w-[85%] leading-relaxed">
                I ordered the floral dress, but the tracking shows delayed. How do I fix this?
              </div>
              <div className="bg-white border border-gray-200 text-gray-800 text-[13px] font-medium p-3.5 self-start max-w-[90%] leading-relaxed shadow-sm">
                <span className="font-bold">Please share your Order ID</span> for more detailed information on resolving your issue.
              </div>
            </div>

            {/* Bottom text */}
            <div className="relative z-20 mt-auto p-7 pt-0">
              <h3 className="text-[1.9rem] font-medium leading-tight text-[#1A1A1A] mb-2.5 tracking-tight">
                Collaborative<br />intelligence
              </h3>
              <p className="text-gray-500 text-[14px] font-normal leading-relaxed pr-4">
                Sub-agents work together seamlessly to handle complex scenarios, achieving superior results through coordinated effort.
              </p>
            </div>
          </motion.div>

          {/* RIGHT COLUMN */}
          <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-8 gap-4 h-full">

            {/* CARD 2: Languages */}
            <motion.div
              initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} transition={{ delay: 0.1 }}
              className="md:col-span-5 bg-[#F5F5F5] border border-gray-200 p-7 relative overflow-hidden flex flex-col justify-center min-h-[280px]"
            >
              {/* Watermark letter */}
              <div className="absolute -right-4 -bottom-10 text-[180px] font-black text-gray-200 leading-none select-none pointer-events-none">
                അ
              </div>

              <div className="relative z-10 w-full flex flex-col justify-center h-full">
                {/* Floating pills */}
                <div className="flex flex-wrap items-center gap-2 mb-6">
                  <span className="text-[10px] font-bold text-gray-500 uppercase tracking-widest border border-gray-300 px-2.5 py-1.5 bg-white">
                    Auto-Detect
                  </span>
                  <motion.div variants={float(0)} animate="animate" className="px-2.5 py-1.5 bg-blue-50 text-blue-600 border border-blue-100 text-[11px] font-bold">
                    മലയാളം
                  </motion.div>
                  <motion.div variants={float(1)} animate="animate" className="px-2.5 py-1.5 bg-rose-50 text-rose-600 border border-rose-100 text-[11px] font-bold">
                    हिंदी
                  </motion.div>
                  <motion.div variants={float(0.5)} animate="animate" className="px-2.5 py-1.5 bg-emerald-50 text-emerald-600 border border-emerald-100 text-[11px] font-bold">
                    தமிழ்
                  </motion.div>
                </div>

                <h3 className="flex flex-col text-left">
                  <span className="text-[2.8rem] lg:text-[3.5rem] font-light text-gray-400 leading-[0.85] tracking-tight">All</span>
                  <span className="text-[3.5rem] lg:text-[4.5rem] font-black text-[#1A1A1A] leading-[0.9] tracking-tighter uppercase">Regional</span>
                  <span className="text-[2.8rem] lg:text-[3.8rem] font-semibold text-[#2563EB] leading-[0.9] tracking-tight -ml-0.5">Languages.</span>
                </h3>
              </div>
            </motion.div>

            {/* CARD 3: 300K Daily Chats */}
            <motion.div
              initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} transition={{ delay: 0.2 }}
              className="md:col-span-3 bg-[#F5F5F5] border border-gray-200 p-8 flex flex-col items-center justify-center text-center h-[280px] lg:h-auto"
            >
              <div className="w-14 h-14 bg-white border border-gray-200 shadow-sm flex items-center justify-center mb-6">
                <MessageCircle className="text-[#2563EB]" fill="#DBEAFE" size={26} />
              </div>
              <h3 className="text-[3rem] font-medium tracking-tight text-[#1A1A1A] leading-none mb-1">
                300K
              </h3>
              <p className="text-[11px] font-bold text-gray-400 uppercase tracking-widest mt-2">
                Daily Chats
              </p>
            </motion.div>

            {/* CARD 4: Multitasking */}
            <motion.div
              initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} transition={{ delay: 0.3 }}
              className="md:col-span-4 border border-gray-200 p-7 flex flex-col justify-between h-[280px] lg:h-auto relative overflow-hidden"
            >
              {/* Soft pastel blobs — toned down to match cleaner hero style */}
              <div className="absolute inset-0 bg-[#FAFAFA] z-0" />
              <div className="absolute -top-12 -left-12 w-44 h-44 bg-[#FEF9C3] blur-[70px] rounded-full z-0 opacity-80" />
              <div className="absolute top-8 -right-12 w-44 h-44 bg-[#BFDBFE] blur-[70px] rounded-full z-0 opacity-60" />
              <div className="absolute -bottom-12 left-1/3 w-40 h-40 bg-[#D1FAE5] blur-[70px] rounded-full z-0 opacity-50" />

              {/* Task pills */}
              <div className="relative z-10 flex flex-col gap-3 mt-1">
                <div className="bg-white border border-gray-200 shadow-sm p-3 px-4 flex items-center gap-3 w-fit">
                  <div className="w-5 h-5 bg-[#F97316] text-white flex items-center justify-center shrink-0">
                    <CheckCircle2 size={11} />
                  </div>
                  <span className="text-[13px] font-semibold text-gray-800">Generate secure payment links</span>
                </div>
                <div className="bg-white border border-gray-200 shadow-sm p-3 px-4 flex items-center gap-3 w-fit ml-5">
                  <div className="w-5 h-5 bg-[#1A1A1A] text-white flex items-center justify-center shrink-0">
                    <CheckCircle2 size={11} />
                  </div>
                  <span className="text-[13px] font-semibold text-gray-800">Identify new leads from Instagram</span>
                </div>
              </div>

              <div className="relative z-10 mt-auto">
                <p className="text-[10px] font-bold text-gray-400 mb-1.5 uppercase tracking-wider">Any task done by a human</p>
                <h3 className="text-[1.75rem] font-medium tracking-tight text-[#1A1A1A] leading-none">
                  Multitasking
                </h3>
              </div>
            </motion.div>

            {/* CARD 5: Omni Channel */}
            <motion.div
              initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} transition={{ delay: 0.4 }}
              className="md:col-span-4 bg-[#F5F5F5] border border-gray-200 p-7 flex flex-col h-[280px] lg:h-auto relative overflow-hidden"
            >
              <div className="relative z-20">
                <p className="text-[10px] font-bold text-gray-400 mb-1.5 uppercase tracking-wider">WhatsApp, Insta, Web etc.</p>
                <h3 className="text-[1.75rem] font-medium tracking-tight text-[#1A1A1A] leading-none">
                  Omni channel
                </h3>
              </div>

              {/* Concentric rings + icons */}
              <div className="absolute -bottom-[18%] -right-[8%] w-[340px] h-[340px] pointer-events-none">
                <svg viewBox="0 0 100 100" className="absolute inset-0 w-full h-full opacity-[0.12]">
                  <circle cx="100" cy="100" r="80" stroke="#1A1A1A" strokeWidth="0.6" fill="none" />
                  <circle cx="100" cy="100" r="58" stroke="#1A1A1A" strokeWidth="0.6" fill="none" />
                  <circle cx="100" cy="100" r="36" stroke="#1A1A1A" strokeWidth="0.6" fill="none" />
                  <circle cx="100" cy="100" r="16" fill="#E5E7EB" />
                </svg>

                <div className="absolute top-[15%] left-[63%] bg-white border border-gray-200 p-2.5 shadow-sm text-[#F97316]">
                  <Globe size={18} />
                </div>
                <div className="absolute top-[44%] left-[28%] bg-white border border-gray-200 p-2.5 shadow-sm text-[#2563EB]">
                  <Mic size={18} />
                </div>
                <div className="absolute top-[73%] left-[4%] bg-white border border-gray-200 p-2.5 shadow-sm text-gray-500">
                  <Mail size={18} />
                </div>
                <div className="absolute top-[83%] left-[58%] bg-white border border-gray-200 p-2.5 shadow-sm text-gray-400">
                  <Calendar size={18} />
                </div>
              </div>
            </motion.div>

          </div>
        </div>

      </div>
    </section>
  );
}