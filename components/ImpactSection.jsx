'use client'

import React from "react";
import { motion } from "framer-motion";
import { Bot, Zap, Clock, Globe, MessageSquare, ArrowUpRight, CheckCircle2 } from "lucide-react";

// Brand Icons
const WhatsAppIcon = ({ className }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.305-.885-.653-1.48-1.46-1.653-1.758-.173-.298-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.397-.272.322-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/></svg>
);

const InstagramIcon = ({ className }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
);

export default function ImpactSection() {
  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
  };

  const float = {
    animate: { y: [-8, 8, -8], transition: { duration: 6, repeat: Infinity, ease: "easeInOut" } }
  };

  return (
    <section className="w-full bg-white py-24 md:py-32 font-sans text-[#1A1A1A] overflow-hidden">
      <div className="max-w-[1300px] mx-auto px-6 lg:px-12 border-x border-gray-200 relative">
        
        {/* --- Top Layout Line --- */}
        <div className="absolute top-0 left-[-100vw] right-[-100vw] h-[1px] bg-gray-200"></div>

        {/* ========================================= */}
        {/* TOP SECTION: Insights & Widgets           */}
        {/* ========================================= */}
        <div className="flex flex-col lg:flex-row justify-between items-start gap-16 mb-40">
          
          {/* Left Text & Tags */}
          <motion.div 
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={fadeUp}
            className="w-full lg:w-5/12 flex flex-col"
          >
            <h2 className="text-[3rem] md:text-[4rem] font-medium leading-[1.05] tracking-tight mb-8">
              Sales automation <br /> made simple
            </h2>

            {/* Feature Tags */}
            <div className="flex flex-wrap gap-3 mb-10">
              <div className="bg-gray-50 border border-gray-100 rounded-xl px-5 py-3 text-[13px] font-semibold text-gray-700 shadow-sm flex items-center gap-2">
                <Bot size={16} className="text-[#2563EB]" /> Automated Replies
              </div>
              <div className="bg-gray-50 border border-gray-100 rounded-xl px-5 py-3 text-[13px] font-semibold text-gray-700 shadow-sm flex items-center gap-2">
                <Zap size={16} className="text-yellow-500 fill-yellow-500" /> Smart Routing
              </div>
              <div className="bg-gray-50 border border-gray-100 rounded-xl px-5 py-3 text-[13px] font-semibold text-gray-700 shadow-sm flex items-center gap-2">
                <Clock size={16} className="text-green-500" /> 24/7 Live Capture
              </div>
            </div>

            {/* Huge Metric */}
            <div className="flex items-center gap-4 mt-auto pt-8">
              <span className="text-[6rem] md:text-[8rem] font-normal leading-none tracking-[-0.05em] text-[#1A1A1A]">10x</span>
              <p className="text-[13px] font-semibold text-gray-500 uppercase tracking-widest max-w-[120px] leading-relaxed">
                Faster lead response times
              </p>
            </div>
          </motion.div>

          {/* Right Visualizer Cluster */}
          <div className="w-full lg:w-7/12 relative h-[450px] flex items-center justify-center">
            
            <p className="absolute top-0 right-0 text-[14px] text-gray-500 leading-relaxed font-medium max-w-[320px] text-right hidden lg:block">
              Faigen brings all your customer interactions into one intelligent platform. Automate replies, process orders, and uncover growth opportunities.
            </p>

            {/* Center Graphic: The Chart Card */}
            <motion.div 
              initial={{ scale: 0.9, opacity: 0 }} whileInView={{ scale: 1, opacity: 1 }} transition={{ duration: 0.6 }} viewport={{ once: true }}
              className="relative z-20 w-[340px] bg-[#F8F9FA] rounded-[2rem] p-6 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.1)] border border-white"
            >
              <h4 className="text-[15px] font-bold text-gray-900 mb-8">Lead Conversion by Channel</h4>
              
              {/* Bar Chart Mockup */}
              <div className="flex items-end gap-4 h-[200px] mt-4">
                {/* Bar 1 */}
                <div className="flex flex-col items-center flex-1 gap-2">
                  <span className="text-[10px] font-bold text-gray-400">12%</span>
                  <div className="w-full h-[30%] bg-gray-200 rounded-t-xl relative overflow-hidden">
                    <div className="absolute bottom-0 w-full h-[40%] bg-gray-300"></div>
                  </div>
                  <span className="text-[10px] font-bold text-gray-600 mt-1">Web</span>
                </div>
                {/* Bar 2 */}
                <div className="flex flex-col items-center flex-1 gap-2">
                  <span className="text-[10px] font-bold text-gray-400">28%</span>
                  <div className="w-full h-[60%] bg-blue-100 rounded-t-xl relative overflow-hidden">
                     <div className="absolute bottom-0 w-full h-[100%] bg-gradient-to-t from-blue-200 to-blue-100"></div>
                  </div>
                  <span className="text-[10px] font-bold text-gray-600 mt-1">Insta</span>
                </div>
                {/* Bar 3 (Active) */}
                <div className="flex flex-col items-center flex-1 gap-2">
                  <div className="bg-[#2563EB] text-white text-[10px] font-bold px-2 py-0.5 rounded-full mb-1 shadow-sm">60%</div>
                  <div className="w-full h-[100%] bg-gradient-to-t from-[#2563EB] to-indigo-400 rounded-t-xl shadow-lg shadow-blue-500/20"></div>
                  <span className="text-[10px] font-bold text-[#2563EB] mt-1">WhatsApp</span>
                </div>
              </div>
            </motion.div>

            {/* Floating Top Widget: AI Engine */}
            <motion.div 
              variants={float} animate="animate"
              className="absolute top-10 left-0 md:left-10 z-30 bg-white rounded-2xl p-4 shadow-xl border border-gray-100 flex items-center gap-3"
            >
              <div className="w-10 h-10 bg-gray-900 rounded-xl flex items-center justify-center text-white">
                <Bot size={20} />
              </div>
              <div>
                 <p className="text-[10px] font-black uppercase text-gray-400 tracking-widest">Faigen Core</p>
                 <p className="text-[13px] font-bold text-gray-900">Active</p>
              </div>
            </motion.div>

            {/* Floating Bottom Widget: Channels */}
            <motion.div 
              variants={float} animate="animate" style={{ animationDelay: "1s" }}
              className="absolute bottom-10 right-0 md:-right-10 z-30 bg-white/80 backdrop-blur-xl rounded-[1.5rem] p-4 shadow-[0_20px_40px_-10px_rgba(0,0,0,0.1)] border border-white"
            >
              <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest text-center mb-3">Integrations</p>
              <div className="flex gap-3">
                 <div className="w-12 h-12 rounded-xl bg-green-100 text-[#25D366] flex items-center justify-center"><WhatsAppIcon className="w-6 h-6" /></div>
                 <div className="w-12 h-12 rounded-xl bg-pink-100 text-[#E1306C] flex items-center justify-center"><InstagramIcon className="w-6 h-6" /></div>
                 <div className="w-12 h-12 rounded-xl bg-blue-100 text-[#2563EB] flex items-center justify-center"><Globe size={20} strokeWidth={2} /></div>
              </div>
            </motion.div>

          </div>
        </div>


        {/* ========================================= */}
        {/* BOTTOM SECTION: Impact Numbers            */}
        {/* ========================================= */}
        <div className="pt-20 border-t border-gray-100">
          
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={fadeUp} className="flex flex-col md:flex-row justify-between items-end gap-6 mb-16">
            <h2 className="text-[2.5rem] md:text-[3.5rem] font-medium leading-[1.1] tracking-tight text-[#1A1A1A] max-w-lg">
              Numbers that show our real impact
            </h2>
            <p className="text-gray-500 text-[15px] font-medium leading-relaxed max-w-md md:text-right">
              Faigen helps businesses scale without adding headcount. Our AI platform delivers measurable results through powerful automation.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            
            {/* Card 1: 24/7 Status */}
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="group cursor-pointer">
              <div className="w-full aspect-[4/3] rounded-[2.5rem] bg-gradient-to-br from-emerald-400 to-teal-500 mb-6 flex items-center justify-center shadow-lg transition-transform duration-500 group-hover:-translate-y-2">
                <div className="w-[140px] h-[140px] bg-white rounded-[2rem] shadow-xl flex items-center justify-center">
                   <span className="text-[2.5rem] font-normal tracking-tight text-gray-900">24/7</span>
                </div>
              </div>
              <h4 className="text-[1.25rem] font-bold text-gray-900 mb-2">Always Online</h4>
              <p className="text-gray-500 text-[14px] font-medium leading-relaxed pr-4">
                Teams make sales faster with our AI agents that never sleep, ensuring zero missed leads or inquiries.
              </p>
            </motion.div>

            {/* Card 2: 95% Rate */}
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} transition={{ delay: 0.1 }} className="group cursor-pointer">
              <div className="w-full aspect-[4/3] rounded-[2.5rem] bg-gradient-to-br from-[#2563EB] to-indigo-600 mb-6 flex items-center justify-center shadow-lg transition-transform duration-500 group-hover:-translate-y-2">
                <div className="w-[140px] h-[140px] bg-white rounded-[2rem] shadow-xl flex items-center justify-center">
                   <span className="text-[2.5rem] font-normal tracking-tight text-gray-900">95%</span>
                </div>
              </div>
              <h4 className="text-[1.25rem] font-bold text-gray-900 mb-2">Automation Rate</h4>
              <p className="text-gray-500 text-[14px] font-medium leading-relaxed pr-4">
                Businesses trust Faigen to handle repetitive queries reliably without requiring human intervention.
              </p>
            </motion.div>

            {/* Card 3: 1M+ Messages */}
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} transition={{ delay: 0.2 }} className="group cursor-pointer">
              <div className="w-full aspect-[4/3] rounded-[2.5rem] bg-gradient-to-br from-orange-400 to-rose-500 mb-6 flex items-center justify-center shadow-lg transition-transform duration-500 group-hover:-translate-y-2">
                <div className="w-[140px] h-[140px] bg-white rounded-[2rem] shadow-xl flex items-center justify-center">
                   <span className="text-[2.5rem] font-normal tracking-tight text-gray-900">1M+</span>
                </div>
              </div>
              <h4 className="text-[1.25rem] font-bold text-gray-900 mb-2">Messages Processed</h4>
              <p className="text-gray-500 text-[14px] font-medium leading-relaxed pr-4">
                Total customer interactions and orders analyzed across WhatsApp, Instagram, and web platforms.
              </p>
            </motion.div>

          </div>
        </div>

      </div>
    </section>
  );
}