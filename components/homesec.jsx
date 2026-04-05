'use client'

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  ArrowRight, Play, Check, Copy, Menu, Activity, 
  ShoppingCart, Globe, Users, CalendarCheck, Zap, 
  ShieldCheck, ArrowUpRight
} from "lucide-react";

// --- Dynamic Use Case Data ---
const useCases = [
  {
    id: "leads",
    headline: "Scale up leads,",
    highlight: "zero effort.",
    subtext: "Instantly capture, qualify, and segment leads from your campaigns. Automatically sync data to your CRM and book meetings 24/7.",
    bgImage: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2000&auto=format&fit=crop", // Data/Analytics image
    widget: {
      title: "Lead Pipeline",
      metric: "+124",
      metricLabel: "New Qualified Leads Today",
      activities: [
        { icon: <Users size={14} />, title: "Lead Captured: Instagram", time: "Just now" },
        { icon: <Activity size={14} />, title: "High Intent Qualification", time: "2 mins ago" },
        { icon: <CalendarCheck size={14} />, title: "Discovery Call Booked", time: "15 mins ago" },
      ]
    }
  },
  {
    id: "ecommerce",
    headline: "DMs into orders,",
    highlight: "instantly.",
    subtext: "AI agents with live access to your catalog guide customers from discovery to secure checkout, right inside WhatsApp and Instagram.",
    bgImage: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=2000&auto=format&fit=crop", // Ecommerce/Tech
    widget: {
      title: "Storefront Activity",
      metric: "₹48.5K",
      metricLabel: "Revenue Processed Today",
      activities: [
        { icon: <ShoppingCart size={14} />, title: "Order #4092 Confirmed", time: "Just now" },
        { icon: <Zap size={14} />, title: "Payment Link Generated", time: "1 min ago" },
        { icon: <ArrowUpRight size={14} />, title: "Catalog Auto-Synced", time: "10 mins ago" },
      ]
    }
  },
  {
    id: "support",
    headline: "24/7 support,",
    highlight: "any language.",
    subtext: "Break the language barrier. Provide instant, empathetic customer support in Malayalam, English, or the exact tone your customers prefer.",
    bgImage: "https://images.unsplash.com/photo-1531746790731-6c087fecd65a?q=80&w=2000&auto=format&fit=crop", // AI/Global network
    widget: {
      title: "Support Operations",
      metric: "< 30s",
      metricLabel: "Average Resolution Time",
      activities: [
        { icon: <Globe size={14} />, title: "Malayalam Query Detected", time: "Just now" },
        { icon: <ShieldCheck size={14} />, title: "Issue Auto-Resolved", time: "15 secs ago" },
        { icon: <Check size={14} />, title: "Customer Satisfaction: 5/5", time: "5 mins ago" },
      ]
    }
  }
];

export default function HeroSection() {
  const [showPopup, setShowPopup] = useState(false);
  const [copied, setCopied] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  const handleCopy = () => {
    navigator.clipboard.writeText("info@faigen.in");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  // Carousel timer
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % useCases.length);
    }, 7000);
    return () => clearInterval(timer);
  }, []);

  const activeCase = useCases[activeIndex];

  // Animation variants
  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 1, ease: [0.16, 1, 0.3, 1] } }
  };

  const bgFade = {
    hidden: { opacity: 0, scale: 1.05 },
    visible: { opacity: 0.6, scale: 1, transition: { duration: 1.5, ease: "easeOut" } },
    exit: { opacity: 0, transition: { duration: 1, ease: "easeInOut" } }
  };

  const contentFade = {
    hidden: { opacity: 0, y: 15, filter: "blur(4px)" },
    visible: { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 0.6, ease: "easeOut", delay: 0.2 } },
    exit: { opacity: 0, y: -15, filter: "blur(4px)", transition: { duration: 0.4, ease: "easeIn" } }
  };

  return (
    // Outer wrapper enables sticky scroll effect for Dashboard component
    <section className="relative w-full h-screen min-h-[800px] z-0 overflow-hidden selection:bg-[#38BDF8] selection:text-black font-sans">
      
      {/* Sticky container holds hero in place */}
      <div className="sticky top-0 w-full h-screen bg-[#060B14] overflow-hidden">
        
        {/* --- Immersive Cinematic Background (Light Blue Toned) --- */}
        <div className="absolute inset-0 z-0">
          <AnimatePresence mode="wait">
            <motion.img 
              key={activeCase.bgImage}
              initial="hidden" animate="visible" exit="exit" variants={bgFade}
              src={activeCase.bgImage}
              alt="AI Hero Background" 
              className="w-full h-full object-cover object-top mix-blend-screen"
            />
          </AnimatePresence>
          {/* Deep gradient overlays with a slate/light-blue tint */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#020617]/95 via-[#020617]/60 to-[#020617]/80"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-[#020617] via-transparent to-[#020617]/40"></div>
          <div className="absolute inset-0 bg-blue-900/10 mix-blend-overlay"></div>
        </div>

        {/* --- Top Navigation --- */}
        <header className="absolute top-6 left-0 w-full z-50 px-6 md:px-12 flex justify-between items-center max-w-[1600px] mx-auto right-0">
          
          {/* Left: Your Logo */}
          <div className="flex items-center cursor-pointer">
            <img 
              src="/logo.png" 
              alt="Faigen Logo" 
              className="h-7 w-auto object-contain"
              style={{ filter: "brightness(0) invert(1)" }} // Forces white logo on dark background
            />
          </div>

          {/* Center: Dark Glassmorphic Nav Pill */}
          <div className="hidden lg:flex items-center gap-8 bg-[#0F172A]/60 backdrop-blur-xl border border-white/10 rounded-full px-8 py-3 text-[13px] font-medium shadow-2xl">
            <a href="#" className="text-[#38BDF8]">Home</a>
            <a href="#features" className="text-white/80 hover:text-white transition-colors">Features</a>
            <a href="#product" className="text-white/80 hover:text-white transition-colors">Product</a>
            <a href="#resources" className="text-white/80 hover:text-white transition-colors">Resources</a>
          </div>

          {/* Right: Auth Buttons & Menu */}
          <div className="flex items-center gap-4">
            <button className="hidden md:block text-white/90 text-[13px] font-medium hover:text-[#38BDF8] transition-colors px-2">
              Login
            </button>
            <button 
              onClick={() => setShowPopup(true)}
              className="hidden md:block bg-white text-[#0F172A] hover:bg-gray-100 rounded-full px-6 py-2.5 text-[13px] font-bold shadow-[0_0_20px_rgba(56,189,248,0.2)] transition-transform hover:scale-105"
            >
              Sign up
            </button>
            <button className="w-10 h-10 rounded-full bg-[#0F172A]/60 backdrop-blur-xl border border-white/10 flex items-center justify-center text-white/90 hover:bg-white/20 transition-colors">
              <Menu size={18} />
            </button>
          </div>

        </header>

        {/* --- Main Content Container --- */}
        <div className="relative z-10 w-full h-full max-w-[1400px] mx-auto px-6 md:px-12 flex flex-col pt-32 pb-16">
          
          <div className="flex-1 flex flex-col lg:flex-row justify-between items-end w-full gap-12">
            
            {/* --- Left Column: Typography & CTAs --- */}
            <div className="w-full lg:max-w-2xl pb-8">
              
              {/* Trusted By Pill */}
              <motion.div initial="hidden" animate="visible" variants={fadeUp} className="flex items-center gap-3 mb-6">
                <div className="flex -space-x-2">
                  <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=100&auto=format&fit=crop" className="w-7 h-7 rounded-full border-2 border-[#0F172A] object-cover relative z-30" alt="User 1" />
                  <img src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=100&auto=format&fit=crop" className="w-7 h-7 rounded-full border-2 border-[#0F172A] object-cover relative z-20" alt="User 2" />
                  <img src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=100&auto=format&fit=crop" className="w-7 h-7 rounded-full border-2 border-[#0F172A] object-cover relative z-10" alt="User 3" />
                </div>
                <span className="text-[13px] text-white/90 font-medium">
                  🔥 Trusted by <span className="font-bold text-white">10,000+</span>
                </span>
              </motion.div>

              {/* Dynamic Headline */}
              <div className="min-h-[160px]">
                <AnimatePresence mode="wait">
                  <motion.div key={activeCase.id} initial="hidden" animate="visible" exit="exit" variants={contentFade}>
                    <h1 className="text-[3.5rem] md:text-[5rem] lg:text-[5.5rem] leading-[1.05] font-semibold tracking-tight text-white mb-6">
                      {activeCase.headline} <br />
                      <span className="font-serif italic text-[#38BDF8] font-light pr-4">
                        {activeCase.highlight}
                      </span>
                    </h1>
                    <p className="text-[1rem] md:text-[1.1rem] text-white/70 font-medium leading-relaxed max-w-[480px]">
                      {activeCase.subtext}
                    </p>
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* CTA Buttons */}
              <motion.div initial="hidden" animate="visible" variants={fadeUp} className="flex flex-wrap items-center gap-6 mt-10">
                {/* Light Blue Get Started Button */}
                <button 
                  onClick={() => setShowPopup(true)}
                  className="bg-[#38BDF8] hover:bg-[#0EA5E9] text-[#0F172A] pl-6 pr-2 py-2 rounded-full font-bold text-[14px] shadow-[0_0_30px_rgba(56,189,248,0.3)] transition-all flex items-center gap-4 group"
                >
                  Get Started
                  <div className="w-8 h-8 bg-[#0F172A] rounded-full flex items-center justify-center text-[#38BDF8] group-hover:scale-105 transition-transform">
                    <ArrowRight size={14} strokeWidth={2.5} />
                  </div>
                </button>

                {/* See Pricing Button */}
                <button className="flex items-center gap-3 text-white/90 text-[14px] font-medium hover:text-[#38BDF8] transition-colors">
                  See pricing
                  <div className="w-8 h-8 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full flex items-center justify-center text-white">
                    <Play size={12} fill="currentColor" className="ml-0.5" />
                  </div>
                </button>
              </motion.div>

              {/* Slide Indicators */}
              <div className="flex gap-3 mt-12">
                {useCases.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveIndex(idx)}
                    className={`h-1.5 rounded-full transition-all duration-500 ${
                      activeIndex === idx ? "w-10 bg-[#38BDF8]" : "w-4 bg-white/20"
                    }`}
                  />
                ))}
              </div>

            </div>

            {/* --- Right Column: Dynamic "Command Center" Widget --- */}
            <motion.div 
              initial={{ opacity: 0, y: 50 }} 
              animate={{ opacity: 1, y: 0 }} 
              transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
              className="w-full lg:w-[420px] relative pb-6"
            >
              <AnimatePresence mode="wait">
                <motion.div 
                  key={`widget-${activeCase.id}`}
                  initial="hidden" animate="visible" exit="exit" variants={contentFade}
                  className="bg-[#0B1120]/80 backdrop-blur-2xl border border-white/10 rounded-[1.5rem] p-6 shadow-2xl relative overflow-hidden"
                >
                  {/* Decorative glowing accent */}
                  <div className="absolute -top-10 -right-10 w-32 h-32 bg-[#38BDF8]/20 blur-3xl rounded-full pointer-events-none"></div>

                  {/* Widget Header */}
                  <div className="flex justify-between items-center mb-6">
                    <span className="text-white/60 text-xs font-bold uppercase tracking-wider">
                      {activeCase.widget.title}
                    </span>
                    <span className="flex h-2.5 w-2.5 relative">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#38BDF8] opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#0EA5E9]"></span>
                    </span>
                  </div>

                  {/* Primary Metric */}
                  <div className="mb-8">
                    <h3 className="text-5xl font-light text-white tracking-tight drop-shadow-sm">
                      {activeCase.widget.metric}
                    </h3>
                    <p className="text-[#38BDF8] text-sm mt-2 font-medium">
                      {activeCase.widget.metricLabel}
                    </p>
                  </div>

                  {/* Recent Activity List */}
                  <div className="space-y-3">
                     {activeCase.widget.activities.map((activity, i) => (
                       <div key={i} className="flex items-center gap-3 bg-white/5 p-3 rounded-xl border border-white/5 shadow-sm">
                         <div className="w-8 h-8 rounded-lg bg-[#38BDF8]/10 text-[#38BDF8] flex items-center justify-center shrink-0">
                           {activity.icon}
                         </div>
                         <div className="min-w-0">
                            <p className="text-[13px] font-medium text-white/90 truncate">{activity.title}</p>
                            <p className="text-[10px] text-white/50 mt-0.5">{activity.time}</p>
                         </div>
                       </div>
                     ))}
                  </div>
                </motion.div>
              </AnimatePresence>
            </motion.div>

          </div>
        </div>
      </div>

      {/* --- MINIMALIST POPUP --- */}
      <AnimatePresence>
        {showPopup && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-6">
            <motion.div 
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              onClick={() => setShowPopup(false)}
              className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            />
            
            <motion.div 
              initial={{ opacity: 0, y: 15, scale: 0.98 }} animate={{ opacity: 1, y: 0, scale: 1 }} exit={{ opacity: 0, y: 15, scale: 0.98 }}
              transition={{ duration: 0.4, ease: [0.23, 1, 0.32, 1] }}
              className="relative w-full max-w-[480px] bg-[#0F172A] border border-white/10 rounded-[2rem] shadow-[0_20px_60px_rgba(0,0,0,0.8)] p-10 flex flex-col items-center z-50 overflow-hidden"
            >
              <div className="relative mb-8 z-10">
                <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center border-[4px] border-[#0F172A] shadow-lg overflow-hidden relative z-10">
                   <img 
                      src="https://images.unsplash.com/photo-1544717305-2782549b5136?q=80&w=300&auto=format&fit=crop" 
                      alt="AI Sales Agent" 
                      className="w-full h-full object-cover"
                   />
                </div>
                <motion.div 
                  animate={{ scale: [1, 1.3], opacity: [0.3, 0] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeOut" }}
                  className="absolute inset-0 bg-[#38BDF8] rounded-full z-0"
                />
                <div className="absolute bottom-0 right-0 bg-[#0F172A] p-1 rounded-full shadow-sm z-20">
                   <div className="w-3.5 h-3.5 bg-emerald-500 rounded-full border-2 border-[#0F172A]" />
                </div>
              </div>

              <div className="text-center mb-8 z-10">
                <h2 className="text-2xl font-semibold text-white tracking-tight mb-2">Request a Demo</h2>
                <p className="text-white/60 text-[15px] font-medium leading-relaxed">Ready to automate your sales? Connect with our team today.</p>
              </div>

              <div className="w-full bg-white/5 border border-white/10 p-4 rounded-2xl flex items-center justify-between z-10">
                <div className="flex flex-col items-start px-2">
                  <span className="text-[10px] font-bold text-white/40 uppercase tracking-widest mb-0.5">Reach out via Email</span>
                  <span className="text-[16px] font-semibold text-white tracking-tight">info@faigen.in</span>
                </div>
                <button 
                  onClick={handleCopy}
                  className={`p-3 rounded-xl transition-all ${copied ? 'bg-emerald-500 text-white' : 'bg-white/10 text-white shadow-sm border border-white/20 hover:bg-white hover:text-black'}`}
                >
                  {copied ? <Check size={18} strokeWidth={3} /> : <Copy size={18} />}
                </button>
              </div>

              <div className="h-4 mt-4 text-center z-10">
                <AnimatePresence>
                  {copied && (
                    <motion.p 
                      initial={{ opacity: 0, y: 5 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}
                      className="text-emerald-400 text-[11px] font-bold uppercase tracking-widest"
                    >
                      Email Address Copied
                    </motion.p>
                  )}
                </AnimatePresence>
              </div>

              <button onClick={() => setShowPopup(false)} className="mt-6 text-white/50 hover:text-white text-[13px] font-bold uppercase tracking-wider transition-colors z-10">
                Close
              </button>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}