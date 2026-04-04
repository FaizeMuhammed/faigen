'use client'

import React from "react";
import { motion } from "framer-motion";
import { 
  Phone, Maximize, Globe, Share2, X, Plus, 
  ArrowUpRight, Bot, HelpCircle, Menu
} from "lucide-react";

export default function FeaturesPage() {
  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
  };

  return (
    <div className="w-full min-h-screen bg-white font-sans text-[#1A1A1A] selection:bg-[#2563EB] selection:text-white overflow-x-hidden">
      
      <div className="w-full relative pb-20">
        
        {/* --- Top Navigation --- */}
        <header className="flex items-center justify-between relative z-50 mb-4 px-4 md:px-8 pt-4">
          {/* Left: Logo Pill */}
          <div className="bg-white/80 backdrop-blur-md rounded-full px-5 py-2.5 flex items-center gap-3 shadow-sm border border-gray-100">
            <div className="w-5 h-5 flex flex-wrap gap-[2px]">
              <div className="w-[8px] h-[8px] bg-black rounded-sm"></div>
              <div className="w-[8px] h-[8px] bg-black rounded-sm opacity-50"></div>
              <div className="w-[8px] h-[8px] bg-black rounded-sm opacity-50"></div>
              <div className="w-[8px] h-[8px] bg-black rounded-sm"></div>
            </div>
            <span className="font-bold text-[14px] tracking-tight">Faigen AI</span>
          </div>

          {/* Center: Toggle (Decorative) */}
          <div className="hidden md:flex items-center justify-center absolute left-1/2 -translate-x-1/2">
            <div className="w-12 h-6 rounded-full border border-gray-200 flex items-center px-1">
              <div className="w-4 h-4 bg-gray-200 rounded-full"></div>
            </div>
          </div>

          {/* Right: Info & Controls */}
          <div className="flex items-center gap-4">
            <span className="hidden md:block text-[13px] font-medium text-gray-500 mr-2">
              Kerala, IND 3:47 PM
            </span>
            <button className="w-10 h-10 rounded-full bg-white shadow-sm border border-gray-100 flex items-center justify-center text-gray-700 hover:bg-gray-50 transition-colors">
              <HelpCircle size={18} strokeWidth={2} />
            </button>
            <button className="w-10 h-10 rounded-full bg-white shadow-sm border border-gray-100 flex items-center justify-center text-gray-700 hover:bg-gray-50 transition-colors">
              <Menu size={18} strokeWidth={2} />
            </button>
          </div>
        </header>

        {/* --- Hero Image Banner (Edge to Edge) --- */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="w-full h-[35vh] md:h-[45vh] bg-gray-100 relative bg-cover bg-center shadow-[0_10px_40px_rgba(0,0,0,0.04)]"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=2000&auto=format&fit=crop')" }}
        >
          {/* Soft overlay */}
          <div className="absolute inset-0 bg-white/10"></div>

          {/* Floating Center Badge */}
          <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 bg-white rounded-full p-2 pr-6 flex items-center gap-4 shadow-[0_15px_35px_rgba(0,0,0,0.08)] border border-gray-100 z-20 transition-transform hover:-translate-y-1 cursor-pointer">
            <div className="flex -space-x-3">
              <img src="https://images.unsplash.com/photo-1544717305-2782549b5136?q=80&w=100&auto=format&fit=crop" className="w-12 h-12 rounded-full border-2 border-white object-cover relative z-20 shadow-sm" alt="Agent 1" />
              <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=100&auto=format&fit=crop" className="w-12 h-12 rounded-full border-2 border-white object-cover relative z-10 shadow-sm" alt="Agent 2" />
            </div>
            <div>
              <p className="text-[13px] font-bold text-gray-900 leading-tight">Our<br/>Agents</p>
            </div>
            <div className="w-7 h-7 rounded-full bg-gray-50 flex items-center justify-center text-gray-600 border border-gray-200 ml-1">
               <ArrowUpRight size={14} strokeWidth={2.5} />
            </div>
          </div>

          {/* Floating Small Icon */}
          <div className="hidden md:flex absolute -bottom-4 left-[calc(50%+120px)] w-9 h-9 bg-white rounded-full shadow-md border border-gray-100 items-center justify-center animate-bounce" style={{ animationDuration: '3s' }}>
            <Bot size={16} className="text-[#2563EB]" />
          </div>
        </motion.div>

        {/* --- Main Content Section --- */}
        <div className="mt-20 md:mt-24 max-w-[1400px] mx-auto relative px-4 sm:px-8 lg:px-12 flex flex-col lg:flex-row justify-between items-start gap-12 lg:gap-16">
          
          {/* Left Side (Menu + Text) */}
          <div className="relative flex-1 flex gap-8 md:gap-16 w-full">
            
            {/* Vertical Floating Toolbar */}
            <div className="hidden md:flex flex-col bg-white rounded-full shadow-[0_10px_30px_rgba(0,0,0,0.06)] border border-gray-100 p-2.5 gap-4 mt-12 z-20">
              <button className="w-11 h-11 rounded-full flex items-center justify-center text-gray-400 hover:text-gray-900 hover:bg-gray-50 transition-colors"><Phone size={18} /></button>
              <button className="w-11 h-11 rounded-full flex items-center justify-center text-gray-400 hover:text-gray-900 hover:bg-gray-50 transition-colors"><Maximize size={18} /></button>
              <button className="w-11 h-11 rounded-full flex items-center justify-center text-gray-400 hover:text-gray-900 hover:bg-gray-50 transition-colors"><Globe size={18} /></button>
              <button className="w-11 h-11 rounded-full flex items-center justify-center text-gray-400 hover:text-gray-900 hover:bg-gray-50 transition-colors"><Share2 size={18} /></button>
              <button className="w-11 h-11 rounded-full bg-[#1A1A1A] flex items-center justify-center text-white hover:bg-black transition-colors"><X size={18} /></button>
            </div>

            {/* Typography Content */}
            <div className="pt-8 w-full">
              
              {/* Top tiny floating card */}
              <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="relative inline-block mb-12">
                <div className="bg-white rounded-[1.5rem] rounded-bl-sm shadow-sm border border-gray-100 p-5 pr-16 relative z-10">
                  <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[3px] h-8 bg-gray-200 rounded-r-md"></div>
                  <p className="text-[14px] font-bold text-gray-800 leading-snug tracking-tight">Intelligent<br/>sales solutions</p>
                </div>
                <div className="absolute top-1/2 -right-8 -translate-y-1/2 -rotate-90 text-[10px] text-gray-400 tracking-widest font-bold">2026</div>
                <div className="absolute -bottom-3 left-8 w-6 h-6 rounded-full border border-gray-200 flex items-center justify-center bg-white z-20 shadow-sm">
                  <Plus size={12} className="text-gray-600"/>
                </div>
              </motion.div>

              {/* Massive Headline */}
              <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="relative mb-12">
                {/* Dotted Plus 1 (Left) */}
                <div className="absolute -left-12 top-3 w-9 h-9 rounded-full border border-dashed border-gray-300 flex items-center justify-center hidden md:flex">
                   <Plus size={16} className="text-gray-900" strokeWidth={2.5} />
                </div>

                <h1 className="text-[3rem] md:text-[3.8rem] lg:text-[4.5rem] leading-[1.05] font-medium tracking-tight text-[#1A1A1A] max-w-[650px]">
                  Automated sales with care for your leads
                </h1>

                {/* Dotted Pluses (Right) */}
                <div className="absolute right-4 bottom-8 flex gap-1.5 hidden lg:flex">
                  <div className="w-7 h-7 rounded-full border border-dashed border-gray-300 flex items-center justify-center text-gray-400 hover:text-[#2563EB] hover:border-[#2563EB] cursor-pointer transition-colors"><ArrowUpRight size={12}/></div>
                  <div className="w-9 h-9 rounded-full border border-dashed border-gray-300 flex items-center justify-center text-gray-900 hover:bg-gray-50 cursor-pointer transition-colors"><Plus size={16} strokeWidth={2.5}/></div>
                </div>
              </motion.div>

              {/* Action Button & Subtext */}
              <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="flex flex-col sm:flex-row items-start sm:items-center gap-8">
                <div className="flex items-center bg-[#1A1A1A] text-white rounded-full p-1.5 pr-2 shadow-lg hover:bg-black transition-all cursor-pointer">
                  <span className="px-6 py-3 text-[14px] font-bold tracking-wide">Explore work</span>
                  <div className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center ml-2 bg-white/5">
                    <div className="flex flex-wrap w-4 h-4 gap-[2px]">
                      <div className="w-[6px] h-[6px] rounded-full border-[1.5px] border-white"></div>
                      <div className="w-[6px] h-[6px] rounded-full border-[1.5px] border-white"></div>
                      <div className="w-[6px] h-[6px] rounded-full border-[1.5px] border-white"></div>
                    </div>
                  </div>
                </div>
                <p className="text-[14px] font-medium text-gray-600 max-w-[300px] leading-relaxed">
                  We develop innovative solutions for the automation and scaling of your digital sales.
                </p>
              </motion.div>
            </div>
          </div>

          {/* Right Side (Floating Stacked Cards) */}
          <div className="w-full lg:w-[340px] flex flex-col gap-6 relative mt-10 lg:mt-[-80px] z-20">
            
            {/* Top Right Card: Contact Us */}
            <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="bg-white rounded-[2rem] border border-gray-100 shadow-[0_20px_40px_rgba(0,0,0,0.06)] p-3 overflow-hidden group cursor-pointer">
              <div className="w-full h-[200px] bg-gray-50 rounded-[1.5rem] relative overflow-hidden flex items-end justify-center pb-0">
                <img 
                  src="https://images.unsplash.com/photo-1596524430615-b46475ddff6e?q=80&w=500&auto=format&fit=crop" 
                  alt="Contact" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="bg-white/80 backdrop-blur-md px-6 py-3 rounded-full shadow-sm border border-white/50 text-[#1A1A1A]">
                    <span className="text-[14px] font-bold tracking-wide">Contact us</span>
                  </div>
                </div>
              </div>
              <div className="p-5 pt-6 flex justify-between items-end">
                <p className="text-[16px] font-bold text-gray-900 leading-snug w-[75%] tracking-tight">We are always glad to collaborate</p>
                <div className="w-9 h-9 rounded-full border border-gray-200 flex items-center justify-center text-gray-500 group-hover:bg-gray-50 group-hover:text-gray-900 transition-colors">
                  <ArrowUpRight size={16} strokeWidth={2} />
                </div>
              </div>
            </motion.div>

            {/* Bottom Right Card: Subscribe */}
            <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.1 }} className="bg-white rounded-[2rem] border border-gray-100 shadow-[0_20px_40px_rgba(0,0,0,0.06)] p-3 overflow-hidden group cursor-pointer">
              <div 
                className="w-full h-[240px] rounded-[1.5rem] bg-cover bg-center relative p-5 flex flex-col justify-between overflow-hidden"
                style={{ backgroundImage: "url('https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=500&auto=format&fit=crop')" }}
              >
                <div className="absolute inset-0 bg-blue-900/20 group-hover:bg-blue-900/30 transition-colors duration-500"></div>
                
                <div className="relative z-10 bg-white rounded-[1.2rem] rounded-bl-sm p-5 w-[90%] shadow-lg">
                  <p className="text-[15px] font-bold text-gray-900 leading-snug tracking-tight">Subscribe to our news & updates</p>
                </div>

                <div className="relative z-10 self-start bg-white rounded-full px-6 py-3 shadow-lg mt-auto hover:scale-105 transition-transform">
                  <span className="text-[14px] font-bold text-gray-900">Subscribe</span>
                </div>
              </div>
            </motion.div>

          </div>

        </div>

        {/* --- Stats Pill Row --- */}
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="flex flex-wrap items-center justify-center lg:justify-between gap-4 mt-32 max-w-[1300px] mx-auto px-4">
          
          <div className="border border-gray-200 rounded-full p-1.5 pr-5 flex items-center gap-3 bg-white shadow-sm hover:shadow-md transition-shadow cursor-default">
            <span className="bg-gray-50 text-gray-900 text-[13px] font-bold px-4 py-2 rounded-full border border-gray-100">98 units</span>
            <span className="text-[13px] font-medium text-gray-600">New integrations</span>
          </div>
          
          <div className="flex gap-4">
            <div className="border border-gray-200 rounded-full px-5 py-2.5 flex items-center gap-2.5 bg-white shadow-sm hover:shadow-md transition-shadow cursor-default">
              <Bot size={16} className="text-gray-400" />
              <span className="text-[13px] font-medium text-gray-600">Certified Specialist</span>
            </div>
            <div className="border border-gray-200 rounded-full px-5 py-2.5 flex items-center gap-2.5 bg-white shadow-sm hover:shadow-md transition-shadow cursor-default">
              <ArrowUpRight size={16} className="text-gray-400" />
              <span className="text-[13px] font-medium text-gray-600">Auto Technologies</span>
            </div>
          </div>

          <div className="border border-gray-200 rounded-full p-1.5 pl-5 flex items-center gap-3 bg-white shadow-sm hover:shadow-md transition-shadow cursor-default">
            <span className="text-[13px] font-medium text-gray-600">Satisfied Clients</span>
            <span className="bg-gray-50 text-gray-900 text-[13px] font-bold px-4 py-2 rounded-full border border-gray-100">1.5k+</span>
          </div>

        </motion.div>

        {/* --- Bottom Heading --- */}
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="mt-32 text-center pb-20">
          <h2 className="text-[2.5rem] md:text-[3.5rem] font-medium tracking-tight text-[#1A1A1A] leading-[1.1]">
            Explore our key features <br/> and achievements
          </h2>
        </motion.div>

      </div>
    </div>
  );
}