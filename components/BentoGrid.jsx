'use client'

import React from "react";
import { motion } from "framer-motion";
import { Sparkles, Bot, MessageSquare, ShoppingCart, Layout, MonitorSmartphone, Plus, User } from "lucide-react";

export default function BentoGrid() {
  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  return (
    <section className="w-full bg-white px-4 md:px-8 py-20 font-sans text-[#1A1A1A]">
      <div className="max-w-[1600px] mx-auto bg-[#0B0E14] rounded-[2rem] md:rounded-[3rem] p-6 md:p-12 shadow-2xl overflow-hidden">
        
        {/* --- Headline --- */}
        <motion.div 
          initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={fadeUp}
          className="flex flex-col items-center justify-center text-center mb-12 md:mb-16"
        >
          <h2 className="text-[2.5rem] sm:text-[3rem] md:text-[3.5rem] font-medium tracking-tight text-white leading-[1.1] max-w-3xl">
            No Matter How Busy Your Business Is. <span className="text-gray-400">We Have It Covered ✌️</span>
          </h2>
        </motion.div>

        {/* --- Bento Grid --- */}
        <motion.div 
          variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6"
        >
          
          {/* Card 1: Top Left - Person with Laptop/Phone */}
          <motion.div variants={cardVariants} className="bg-[#151921] rounded-2xl md:rounded-[1.5rem] p-6 flex flex-col justify-end min-h-[350px] md:min-h-[400px] relative overflow-hidden group hover:bg-[#1A1E28] transition-colors border border-white/5">
            {/* Image Background */}
            <div 
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: "url('https://images.unsplash.com/photo-1541746972996-4e0b0f43e02a?q=80&w=500&auto=format&fit=crop')" }}
            >
              {/* Overlay for better text readability */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#151921] to-transparent"></div>
            </div>
            {/* Internal Mockup Content */}
            <div className="relative z-10 p-3 bg-white/10 backdrop-blur-md rounded-xl border border-white/10 flex items-center gap-3 w-4/5 mx-auto mb-6">
                <div className="w-9 h-9 rounded-full bg-blue-100 flex items-center justify-center text-[#2563EB] text-xs font-bold">F</div>
                <div className="flex-1 space-y-1">
                    <p className="text-[12px] font-semibold text-white">Faigen AI Agent</p>
                    <p className="text-[11px] text-white/80">Seamless chat management experience</p>
                </div>
                <div className="w-4 h-4 rounded-full bg-green-500 border border-white"></div>
            </div>
            {/* Text Area */}
            <div className="relative z-10 mt-auto">
              <h3 className="text-white text-lg font-medium leading-snug">
                Seamless Chat Management <br/> Experience
              </h3>
            </div>
          </motion.div>

          {/* Card 2: Top Middle - Hand with Malayalam Phone Chat */}
          <motion.div variants={cardVariants} className="bg-[#151921] rounded-2xl md:rounded-[1.5rem] p-6 flex flex-col justify-end min-h-[350px] md:min-h-[400px] relative overflow-hidden group hover:bg-[#1A1E28] transition-colors border border-white/5">
            {/* Image Background */}
            <div 
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: "url('https://images.unsplash.com/photo-1596526131083-e8c633c948d2?q=80&w=500&auto=format&fit=crop')" }}
            >
              <div className="absolute inset-0 bg-gradient-to-t from-[#151921] to-transparent"></div>
            </div>
            {/* Redesigned Chat Bubbles Internal Content */}
            <div className="relative z-10 w-[90%] mx-auto mb-6 p-4 bg-white/10 backdrop-blur-md rounded-xl border border-white/10 flex flex-col gap-3">
              <div className="bg-gray-100 text-gray-800 text-[11px] font-medium px-3.5 py-2.5 rounded-2xl rounded-tl-sm w-fit flex items-center gap-2">
                <span className="bg-white text-[#2563EB] text-[9px] px-1.5 py-0.5 rounded font-bold">ML</span> നമസ്കാരം! ഫ്ലോറൽ ഡ്രസ്സ് ഉണ്ടോ?
              </div>
              <div className="bg-[#2563EB] text-white text-[11px] font-medium px-3.5 py-2.5 rounded-2xl rounded-tr-sm w-fit self-end flex items-center gap-2">
                <span className="bg-white text-[#2563EB] text-[9px] px-1.5 py-0.5 rounded font-bold">EN</span> Yes, it's available in size M! ✨
              </div>
            </div>
            {/* Text Area */}
            <div className="relative z-10 mt-auto">
              <h3 className="text-white text-lg font-medium leading-snug">
                AI Speaks Fluent Malayalam <br/> & English
              </h3>
            </div>
          </motion.div>

          {/* Card 3: Top Right - Person with Headset working */}
          <motion.div variants={cardVariants} className="bg-[#151921] rounded-2xl md:rounded-[1.5rem] p-6 flex flex-col justify-end min-h-[350px] md:min-h-[400px] relative overflow-hidden group hover:bg-[#1A1E28] transition-colors border border-white/5">
            {/* Image Background */}
            <div 
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: "url('https://images.unsplash.com/photo-1522204523234-8729aa6e3d5f?q=80&w=500&auto=format&fit=crop')" }}
            >
              <div className="absolute inset-0 bg-gradient-to-t from-[#151921] to-transparent"></div>
            </div>
            {/* Simplified Circle Graph and Floating UI */}
            <div className="relative z-10 p-3 bg-white/10 backdrop-blur-md rounded-xl border border-white/10 flex flex-col gap-2 w-4/5 mx-auto mb-6">
               <div className="flex justify-between items-center text-white/70 text-[10px] font-bold">ACTIVITY <MoreVertical size={14} className="text-gray-400" /></div>
               <div className="w-20 h-20 mx-auto relative flex items-center justify-center">
                 <svg viewBox="0 0 36 36" className="w-full h-full transform -rotate-90">
                   <path className="text-gray-200/20" stroke="currentColor" strokeWidth="3" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none"/>
                   <path className="text-[#25D366]" stroke="currentColor" strokeWidth="3" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" strokeDasharray="60, 100" strokeLinecap="round" fill="none"/>
                 </svg>
                 <div className="absolute w-12 h-12 bg-white/10 rounded-full flex items-center justify-center text-white"><Bot size={24} /></div>
               </div>
               <div className="text-center text-white/80 text-[10px] font-bold">Removing distractions...</div>
            </div>
            {/* Text Area */}
            <div className="relative z-10 mt-auto">
              <h3 className="text-white text-lg font-medium leading-snug">
                Remove Distracting Manual <br/> Tasks Forever
              </h3>
            </div>
          </motion.div>

          {/* Card 4: Bottom Left (Wider) - Cinematic Storefront */}
          <motion.div variants={cardVariants} className="md:col-span-2 bg-[#151921] rounded-2xl md:rounded-[1.5rem] p-6 flex flex-col justify-end min-h-[300px] md:min-h-[350px] relative overflow-hidden group hover:bg-[#1A1E28] transition-colors border border-white/5">
            {/* Large Cinematic Image Background - Modern Office/Dashboard feel */}
            <div 
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: "url('https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=1500&auto=format&fit=crop')" }}
            >
              {/* Deep gradient overlay to integrate with dark card design */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#151921] via-[#151921]/80 to-[#151921]/20"></div>
            </div>
            
            {/* Cinematic Mockup UI element */}
            <div className="relative z-10 w-full md:w-[85%] mx-auto mb-6 p-4 bg-gradient-to-br from-white/10 to-transparent backdrop-blur-md rounded-2xl border border-white/10 flex flex-col gap-3">
              <div className="flex justify-between items-center text-white/70 text-[10px] font-bold border-b border-white/10 pb-2">PREMIUM STOREFRONT <MonitorSmartphone size={16} className="text-gray-400" /></div>
              <div className="w-full flex justify-between items-center bg-black/30 p-2 rounded-full border border-white/10">
                 <div className="text-white/60 text-sm flex items-center gap-2 pl-3"> <Layout size={16} />Cinematic Digital Storefront</div>
                 <button className="bg-white text-[#1A1A1A] text-xs px-5 py-2 rounded-full font-bold hover:bg-gray-100 transition-colors">Book a demo</button>
              </div>
              <div className="text-xs text-white/80 font-medium">Create a stunning, fast digital storefront tailored to your business. We build premium, custom websites & apps. <span className="text-gray-400">Believ it. Don't believe? Book a demo now.</span></div>
            </div>
            {/* Text Area */}
            <div className="relative z-10 mt-auto">
              <h3 className="text-white text-xl md:text-2xl font-medium leading-snug w-full max-w-xl">
                Create A Premium Cinematic Digital <br/> Storefront In Your Hand!
              </h3>
            </div>
          </motion.div>

          {/* Card 5: Bottom Right - Designed for Kerala */}
          <motion.div variants={cardVariants} className="md:col-span-1 bg-[#151921] rounded-2xl md:rounded-[1.5rem] p-6 flex flex-col justify-end min-h-[300px] md:min-h-[350px] relative overflow-hidden group hover:bg-[#1A1E28] transition-colors border border-white/5">
            {/* Updated Image Background - Kerala boutique/shop context */}
            <div 
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: "url('https://images.unsplash.com/photo-1567401893414-76b7b1e5a7a5?q=80&w=1000&auto=format&fit=crop')" }}
            >
              {/* Stronger overlay to ensure mockups and text stay visible */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#151921] via-[#151921]/90 to-[#151921]/30"></div>
            </div>
            
            {/* Simplified Floating Tags Internal Mockup */}
            <div className="relative z-10 w-[90%] mx-auto mb-6 p-4 bg-white/10 backdrop-blur-md rounded-xl border border-white/10 flex flex-col gap-3">
               <div className="flex gap-2 text-[10px] font-bold text-white/80 border-b border-white/10 pb-2">DESIGNED FOR KERALA BUSINESSES <CheckSquare size={16} className="text-emerald-400" /></div>
               <div className="flex flex-wrap gap-2">
                 <span className="bg-[#2563EB]/20 text-blue-300 border border-[#2563EB]/30 px-3 py-1.5 rounded-full text-[11px] font-medium shadow-sm">WhatsApp Automations</span>
                 <span className="bg-orange-500/20 text-orange-300 border border-orange-500/30 px-3 py-1.5 rounded-full text-[11px] font-medium shadow-sm">Secure Malayalam AI</span>
                 <span className="bg-purple-500/20 text-purple-300 border border-purple-500/30 px-3 py-1.5 rounded-full text-[11px] font-medium shadow-sm">Local Brand Focus</span>
                 <span className="bg-white/10 text-white/90 border border-white/20 px-3 py-1.5 rounded-full text-[11px] font-bold flex items-center gap-1.5 shadow-sm"><User size={12} className="text-red-500" />Kerala Tech Agency</span>
               </div>
            </div>
            {/* Text Area */}
            <div className="relative z-10 mt-auto pt-40">
              <h3 className="text-white text-lg font-medium leading-snug">
                Many Features Of Faigen Are Designed Only For Kerala Businesses
              </h3>
            </div>
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
}

// Custom icons used in mockups
const MoreVertical = ({ size, className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><circle cx="12" cy="12" r="1"/><circle cx="12" cy="5" r="1"/><circle cx="12" cy="19" r="1"/></svg>
)
const CheckSquare = ({ size, className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><polyline points="9 11 12 14 22 4"/><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"/></svg>
)