'use client'

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2,Bot, ShoppingBag, Building, HeartPulse, ArrowRight, Sparkles, MessageCircle } from "lucide-react";

// Extremely high-quality, contextual images
const useCases = [
  {
    id: "ecommerce",
    title: "Retail & E-commerce",
    icon: <ShoppingBag size={18} />,
    headline: "Turn Instagram comments into instant sales.",
    desc: "Don't let leads go cold. When a customer comments 'Price?' on your post, Faigen automatically slides into their DMs, shares the product catalog, and closes the sale via WhatsApp.",
    features: ["Automated Catalog Sharing", "Payment Link Generation", "Order Tracking Updates"],
    metric: { label: "Conversion Lift", value: "+34%" },
    image: "https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?q=80&w=1200&auto=format&fit=crop",
    accent: "bg-blue-500",
    chatBubble: "Hi! The silk saree you liked is ₹2,499. Would you like me to generate a secure payment link? 🛍️",
    channel: "Instagram DM"
  },
  {
    id: "realestate",
    title: "Real Estate & Agencies",
    icon: <Building size={18} />,
    headline: "Qualify leads 24/7 while your team sleeps.",
    desc: "Your AI agent engages new website visitors instantly. It asks qualifying questions, captures budget details, and schedules site visits directly into your sales team's calendar.",
    features: ["Smart Lead Qualification", "Automated Site Visit Booking", "Brochure Distribution"],
    metric: { label: "Lead Capture", value: "24/7" },
    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=1200&auto=format&fit=crop",
    accent: "bg-emerald-500",
    chatBubble: "Are you looking for a 2BHK or 3BHK in Kochi? I can schedule a site visit for you this weekend! 🏢",
    channel: "WhatsApp Bot"
  },
  {
    id: "clinics",
    title: "Clinics & Services",
    icon: <HeartPulse size={18} />,
    headline: "Eliminate phone tag and missed bookings.",
    desc: "Allow patients to check doctor availability, book appointments, and receive automated WhatsApp reminders seamlessly, freeing up your front desk to handle real emergencies.",
    features: ["WhatsApp Booking System", "Automated Reminders", "FAQ Handling (Timings, Location)"],
    metric: { label: "No-shows", value: "-40%" },
    image: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&w=1200&auto=format&fit=crop",
    accent: "bg-rose-500",
    chatBubble: "Dr. Sharma has a slot available tomorrow at 10:30 AM. Reply 'YES' to confirm your booking. 🩺",
    channel: "WhatsApp Bot"
  }
];

export default function UseCasesSection() {
  const [activeTab, setActiveTab] = useState(useCases[0].id);

  const activeData = useCases.find((uc) => uc.id === activeTab);

  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
  };

  return (
    <section className="w-full bg-white py-24 lg:py-32 font-sans text-[#1A1A1A] overflow-hidden">
      <div className="max-w-[1300px] mx-auto px-6 md:px-12">
        
        {/* --- Header --- */}
        <motion.div 
          initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={fadeUp}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-gray-100 text-gray-600 text-xs font-bold mb-6 tracking-wide">
             <Sparkles size={14} className="text-[#2563EB]" /> Tailored Intelligence
          </div>
          <h2 className="text-[2.5rem] md:text-[3.5rem] font-medium leading-[1.05] tracking-tight mb-6 text-[#1A1A1A]">
            Built specifically for <br className="hidden md:block" /> your industry.
          </h2>
          <p className="text-gray-500 text-[1.15rem] font-medium leading-relaxed">
            Whether you sell products, book appointments, or qualify leads, Faigen's AI adapts to your business model instantly.
          </p>
        </motion.div>

        {/* --- Interactive iOS-Style Tab Switcher --- */}
        <motion.div 
          initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
          className="flex justify-center mb-12"
        >
          <div className="flex flex-wrap justify-center gap-2 bg-[#F8F9FA] p-2 rounded-full border border-gray-100 shadow-inner">
            {useCases.map((tab) => {
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`relative px-6 py-3 rounded-full text-[14px] font-bold transition-colors flex items-center gap-2.5 z-10 ${
                    isActive ? "text-white" : "text-gray-500 hover:text-gray-900"
                  }`}
                >
                  <span className={isActive ? "text-white" : "text-gray-400"}>{tab.icon}</span>
                  {tab.title}
                  
                  {/* Sliding Pill Background Effect */}
                  {isActive && (
                    <motion.div
                      layoutId="useCaseActiveTab"
                      className="absolute inset-0 bg-[#1A1A1A] rounded-full -z-10 shadow-[0_8px_20px_rgba(0,0,0,0.12)]"
                      transition={{ type: "spring", stiffness: 400, damping: 30 }}
                    />
                  )}
                </button>
              );
            })}
          </div>
        </motion.div>

        {/* --- Massive Content Bento Card --- */}
        <div className="w-full bg-[#F8F9FA] rounded-[3rem] border border-gray-200/80 shadow-sm relative min-h-[550px] p-3 overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, scale: 0.98, filter: "blur(8px)" }}
              animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
              exit={{ opacity: 0, scale: 0.98, filter: "blur(8px)" }}
              transition={{ duration: 0.4, ease: [0.23, 1, 0.32, 1] }}
              className="flex flex-col lg:flex-row w-full h-full bg-white rounded-[2.5rem] shadow-sm border border-gray-100 overflow-hidden"
            >
              
              {/* Left: Text & Features */}
              <div className="w-full lg:w-[45%] p-10 lg:p-14 flex flex-col h-full justify-center">
                <div className="mb-10">
                  <h3 className="text-[2rem] md:text-[2.6rem] leading-[1.1] font-medium tracking-tight text-[#1A1A1A] mb-5">
                    {activeData.headline}
                  </h3>
                  <p className="text-gray-500 text-[16px] font-medium leading-relaxed">
                    {activeData.desc}
                  </p>
                </div>

                <div className="space-y-4 mb-12 flex-1">
                  {activeData.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-4 text-[15px] font-semibold text-gray-800 bg-gray-50/50 p-3 rounded-2xl border border-gray-100/50">
                      <div className="w-8 h-8 rounded-full bg-white shadow-sm flex items-center justify-center shrink-0">
                         <CheckCircle2 size={18} className="text-[#2563EB]" />
                      </div>
                      {feature}
                    </div>
                  ))}
                </div>

                <div className="flex items-center justify-between border-t border-gray-100 pt-8 mt-auto">
                  <div>
                    <p className="text-[11px] font-bold text-gray-400 uppercase tracking-widest mb-1">{activeData.metric.label}</p>
                    <p className="text-[2.2rem] font-bold text-[#1A1A1A] leading-none tracking-tight">{activeData.metric.value}</p>
                  </div>
                  <button className="flex items-center justify-center w-14 h-14 rounded-full bg-gray-50 border border-gray-200 text-gray-900 hover:bg-[#2563EB] hover:text-white hover:border-[#2563EB] transition-all group shadow-sm">
                    <ArrowRight size={20} className="group-hover:translate-x-0.5 transition-transform" />
                  </button>
                </div>
              </div>

              {/* Right: Premium Image & Floating Notification */}
              <div className="w-full lg:w-[55%] h-[400px] lg:h-auto relative p-3">
                <div 
                  className="absolute inset-3 bg-cover bg-center rounded-[2rem] shadow-inner"
                  style={{ backgroundImage: `url('${activeData.image}')` }}
                >
                  {/* Subtle vignette for text readability */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/10 rounded-[2rem]"></div>
                </div>

                {/* Floating Native-Style Notification Widget */}
                <motion.div 
                  initial={{ opacity: 0, y: 30, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{ delay: 0.4, type: "spring", damping: 25, stiffness: 200 }}
                  className="absolute bottom-10 left-10 right-10 md:left-12 md:right-12 lg:left-[-30px] lg:right-auto lg:w-[380px] bg-white/80 backdrop-blur-2xl border border-white/60 p-5 rounded-[1.5rem] shadow-[0_30px_60px_-15px_rgba(0,0,0,0.3)]"
                >
                  <div className="flex items-center justify-between mb-3 border-b border-gray-200/50 pb-3">
                     <div className="flex items-center gap-3">
                       <div className={`w-10 h-10 rounded-[0.8rem] flex items-center justify-center text-white ${activeData.accent} shadow-sm`}>
                          <Bot size={20} />
                       </div>
                       <div>
                         <p className="text-[14px] font-bold text-gray-900 leading-none">Faigen AI</p>
                         <p className="text-[11px] font-bold text-gray-500 mt-1 flex items-center gap-1">
                           <MessageCircle size={10} /> {activeData.channel}
                         </p>
                       </div>
                     </div>
                     <span className="text-[10px] font-bold text-gray-400 bg-gray-100 px-2 py-1 rounded-md">Just now</span>
                  </div>
                  <p className="text-[14.5px] text-gray-800 font-medium leading-relaxed">
                    {activeData.chatBubble}
                  </p>
                </motion.div>

              </div>
            </motion.div>
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
}