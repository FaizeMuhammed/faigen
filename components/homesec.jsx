'use client'

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Play, Menu, X, Mail, Phone, ShieldCheck, 
  CheckCircle2, ArrowRight, Check, Copy, Bot, ShoppingBag, Calendar
} from "lucide-react";
import Link from 'next/link'

/* ── META / WHATSAPP SVG ICONS ───────────────────────────────── */

const WhatsAppIcon = ({ size = 18, className = '' }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
  </svg>
)

const MetaIcon = ({ size = 18, className = '' }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M6.915 4.03c-1.968 0-3.683 1.28-4.871 3.113C.704 9.208 0 11.883 0 14.449c0 .706.07 1.369.21 1.973a6.624 6.624 0 00.265.86 5.297 5.297 0 00.371.761c.696 1.159 1.818 1.927 3.593 1.927 1.497 0 2.633-.671 3.965-2.444.76-1.012 1.144-1.626 2.663-4.32l.756-1.339.186-.325c.061.1.121.196.183.3l2.152 3.595c.724 1.21 1.665 2.556 2.47 3.314 1.046.987 1.992 1.22 3.06 1.22 1.075 0 1.876-.355 2.455-.843a3.743 3.743 0 00.81-.973c.542-.939.861-2.127.861-3.745 0-2.72-.681-5.357-2.084-7.45-1.282-1.912-2.957-2.93-4.716-2.93-1.047 0-2.088.467-3.053 1.308-.767.665-1.4 1.578-2.173 2.925L12 7.504l-.312-.54C10.432 5.455 9.07 4.03 6.915 4.03zm5.085 9.252l-.97-1.682c-.547-.943-1.328-2.09-2.17-2.805-.754-.642-1.34-.802-1.95-.802-1.143 0-2.047.72-2.871 2.011C3.118 11.209 2.6 13.433 2.6 14.449c0 .658.073 1.181.194 1.618.12.432.296.776.51 1.043.519.658 1.033.87 1.697.87.966 0 1.58-.339 2.649-1.754.304-.403.622-.915.932-1.465l1.418-2.509zm6.199-6.058c-1.139 0-2.16.95-3.109 2.48l-1.086 1.82 2.37 3.956c.706 1.167 1.443 2.14 2.138 2.73.611.524 1.15.773 1.862.773.669 0 1.14-.188 1.549-.493.397-.296.71-.74.922-1.25.316-.762.486-1.71.486-2.799 0-2.365-.617-4.644-1.733-6.241-.866-1.244-1.875-1.976-3.399-1.976z"/>
  </svg>
)

/* ── TRUST BAR DATA ──────────────────────────────────────────── */

const trustBadges = [
  {
    icon: <MetaIcon size={15} className="text-[#0467DF]" />,
    text: 'Meta Verified Tech Provider',
    bg: '',
    border: 'border-[#c5d8f8]',
    textColor: 'text-[#1a56db]'
  }
]

/* ── DYNAMIC SLIDES (Text Content) ───────────────────────────── */

const slides = [
  {
    title: (
      <>
        AI agents that <br className="hidden lg:block" />
        <span className="text-[#2563EB]">sell & support</span> 24/7.
      </>
    ),
    subtitle: "Turn conversations into conversions. Deploy interactive agents that check stock, process orders, and handle support instantly.",
    tags: ["Interactive Buttons", "Automated Routing", "Order Tracking"],
  },
  {
    title: (
      <>
        Broadcast <br className="hidden lg:block" />
        <span className="text-[#2563EB]">marketing campaigns.</span>
      </>
    ),
    subtitle: "Launch targeted promotions and notify thousands of customers simultaneously with rich media and interactive links.",
    tags: ["Bulk Messaging",  "Delivery Analytics"],
  },
  {
    title: (
      <>
        Speak <br className="hidden lg:block" />
        <span className="text-[#2563EB]">your local language.</span>
      </>
    ),
    subtitle: "Deliver personalized experiences with an AI that fluently understands Malayalam, Manglish, and English automatically.",
    tags: ["Auto-Detection", "Malayalam & Manglish", "Natural NLP"],
  }
]

/* ── CHAT SCENARIOS (For Right Panel) ────────────────────────── */

const chatScenarios = [
  {
    id: 'ecommerce',
    icon: <ShoppingBag size={20} className="text-[#2563EB]" />,
    title: "Auto Order Taking",
    userMsg: "I want to order 2 Premium Coir Mats. Deliver to Ernakulam.",
    botMsg: (
      <>
        <span className="font-bold">Order confirmed! 🎉</span><br/>
        2× Premium Coir Mat — ₹1,200<br/>
        Delivery to Ernakulam in 2-3 days.
      </>
    )
  },
  {
    id: 'booking',
    icon: <Calendar size={20} className="text-[#2563EB]" />,
    title: "Appointment Booking",
    userMsg: "Can I book a consultation for tomorrow at 10 AM?",
    botMsg: (
      <>
        <span className="font-bold">Slot Available ✅</span><br/>
        I've reserved 10:00 AM tomorrow for you.<br/>
        Reply 'Confirm' to finalize.
      </>
    )
  },
  {
    id: 'support',
    icon: <Bot size={20} className="text-[#2563EB]" />,
    title: "Instant 24/7 Support",
    userMsg: "What are your shop timings today?",
    botMsg: (
      <>
        <span className="font-bold">We're open! 🏪</span><br/>
        Our Aluva branch is open from 9 AM to 8 PM today. How can we help you?
      </>
    )
  }
]

/* ── MAIN COMPONENT ──────────────────────────────────────────── */

export default function FaigenHero() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [popupOpen, setPopupOpen] = useState(false)
  const [copied, setCopied] = useState(false)
  
  // Left side slider state
  const [activeSlide, setActiveSlide] = useState(0)
  
  // Right side chat scenario state
  const [activeChat, setActiveChat] = useState(0)

  // Auto-slide logic for left text
  useEffect(() => {
    const slideTimer = setInterval(() => {
      setActiveSlide(prev => (prev + 1) % slides.length)
    }, 6000)
    return () => clearInterval(slideTimer)
  }, [])

  // Auto-slide logic for right chat bubbles
  useEffect(() => {
    const chatTimer = setInterval(() => {
      setActiveChat(prev => (prev + 1) % chatScenarios.length)
    }, 4500)
    return () => clearInterval(chatTimer)
  }, [])

  const handleCopy = () => {
    navigator.clipboard.writeText("info@faigen.in")
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  // Animation variants
  const fadeUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  }

  return (
    <section className="w-full min-h-screen bg-white font-sans text-[#1A1A1A] border-b border-gray-200 flex flex-col overflow-hidden relative">

      {/* ── POPUP MODAL ── */}
      <AnimatePresence>
        {popupOpen && (
          <motion.div
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            transition={{ duration: 0.15 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/40 backdrop-blur-sm px-4"
            onClick={() => setPopupOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.96, y: 10, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.96, y: 10, opacity: 0 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              onClick={e => e.stopPropagation()}
              className="bg-white rounded-2xl shadow-2xl border border-gray-100 w-full max-w-[420px] overflow-hidden"
            >
              <div className="p-8">
                <div className="flex justify-between items-start mb-6">
                  <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center text-[#2563EB] border border-blue-100">
                    <ShieldCheck size={24} strokeWidth={1.5} />
                  </div>
                  <button onClick={() => setPopupOpen(false)} className="text-gray-400 hover:text-gray-800 bg-gray-50 border border-gray-200 w-8 h-8 flex items-center justify-center rounded-full">
                    <X size={16} strokeWidth={2} />
                  </button>
                </div>
                <h3 className="text-[22px] font-bold text-[#1A1A1A] tracking-tight mb-2">Request API Access</h3>
                <p className="text-[14px] text-gray-500 leading-relaxed mb-8">
                  Faigen Console is available for businesses. Contact our deployment team to get started.
                </p>
                <div className="space-y-4">
                  <div className="bg-gray-50 border border-gray-200 rounded-xl p-4 flex items-center justify-between group hover:border-[#2563EB] transition-all cursor-pointer">
                    <div className="flex items-center gap-4">
                      <Mail size={18} className="text-gray-400 group-hover:text-[#2563EB]" />
                      <a href="mailto:info@faigen.in" className="text-[15px] font-bold text-[#1A1A1A]">info@faigen.in</a>
                    </div>
                    <button onClick={handleCopy} className="text-[#2563EB] hover:text-blue-800 bg-blue-50 p-2 rounded-md">
                      {copied ? <Check size={16} strokeWidth={3} /> : <Copy size={16} />}
                    </button>
                  </div>
                  <a href="tel:+919876543210" className="flex items-center gap-4 p-4 rounded-xl border border-gray-200 hover:border-[#2563EB] hover:bg-gray-50 transition-all group">
                    <Phone size={18} className="text-gray-400 group-hover:text-[#2563EB]" />
                    <span className="text-[15px] font-bold text-[#1A1A1A]">+91 98765 43210</span>
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ── HEADER ── */}
      <header className="relative flex justify-between items-center px-6 md:px-10 py-5 w-full z-50 bg-white border-b border-gray-100 max-w-[1500px] mx-auto">
        <div className="flex items-center gap-3 cursor-pointer">
          <img src="/logonew.png" alt="Faigen Logo" className="h-9 md:h-8 w-auto object-contain" />
        </div>

        <nav className="hidden lg:flex items-center gap-8 text-[15px] font-semibold text-gray-500">
          <a href="#" className="text-[#1A1A1A]">Platform</a>
          <button onClick={() => setPopupOpen(true)} className="hover:text-[#1A1A1A] transition-colors">API Pricing</button>
          <a href="/use-cases" className="hover:text-[#1A1A1A] transition-colors">Use Cases</a>
        </nav>

        <div className="hidden lg:flex items-center gap-5">
          <Link href="/login" className="text-gray-600 text-[15px] font-semibold hover:text-[#1A1A1A] transition-colors">Sign in</Link>
          <button onClick={() => setPopupOpen(true)} className="bg-[#2563EB] text-white px-5 py-2.5 text-[14px] font-bold rounded-lg hover:bg-blue-700 transition-colors shadow-sm">Request Access</button>
        </div>

        <button className="lg:hidden p-2 text-[#1A1A1A]" onClick={() => setMenuOpen(v => !v)}>
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </header>

      {/* Mobile drawer */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -6 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.2 }}
            className="lg:hidden absolute top-[70px] left-0 right-0 bg-white border-b border-gray-100 px-6 pb-6 flex flex-col z-40 shadow-xl"
          >
            <a href="#" onClick={() => setMenuOpen(false)} className="text-[16px] font-bold text-[#1A1A1A] py-4 border-b border-gray-100">Platform</a>
            <button onClick={() => { setPopupOpen(true); setMenuOpen(false) }} className="text-[16px] font-bold text-[#1A1A1A] py-4 border-b border-gray-100 text-left">API Pricing</button>
            <button href="/use-case" className="text-[16px] font-bold text-[#1A1A1A] py-4 border-b border-gray-100 text-left">Use Cases</button>
            <div className="mt-6 flex flex-col gap-3">
              <Link href="/login" className="text-center bg-gray-50 border border-gray-200 text-[#1A1A1A] py-3.5 rounded-lg text-[15px] font-bold">Sign in</Link>
              <button onClick={() => { setPopupOpen(true); setMenuOpen(false) }} className="bg-[#2563EB] text-white py-3.5 rounded-lg text-[15px] font-bold shadow-sm">Request Access</button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ── TRUST BAR ── */}
      <div className="w-full border-b border-gray-100 bg-[#fafafa] py-2.5 px-6 overflow-x-auto">
        <div className="max-w-[1500px] mx-auto flex items-center justify-center gap-3 sm:gap-6 flex-nowrap">
          {trustBadges.map((badge, i) => (
            <div
              key={i}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full border text-[11px] font-semibold whitespace-nowrap ${badge.bg} ${badge.border} ${badge.textColor}`}
            >
              {badge.icon}
              {badge.text}
            </div>
          ))}
          <div className="hidden sm:block w-px h-4 bg-gray-200 mx-2" />
          <a
            href="https://www.facebook.com/business/partner-directory"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:flex items-center gap-1.5 text-[11px] text-gray-400 hover:text-[#0467DF] transition-colors whitespace-nowrap font-medium"
          >
            <MetaIcon size={11} />
            View in Meta Partner Directory
            <ArrowRight size={10} />
          </a>
        </div>
      </div>

      {/* ── MAIN CONTENT ── */}
      <div className="max-w-[1500px] mx-auto w-full flex flex-col lg:flex-row flex-1 bg-white">

        {/* LEFT PANEL - SLIDING TEXT */}
        <main className="w-full lg:w-[50%] xl:w-[55%] relative flex flex-col items-start justify-center pt-12 lg:pt-0 pb-16 lg:pb-0 px-6 md:px-12 xl:px-16 text-left border-r border-gray-100">
          <AnimatePresence mode="wait" initial={false}>
            <motion.div
              key={`text-${activeSlide}`}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.3 }}
              className="w-full relative z-10"
            >
              <h1 className="text-[2.8rem] md:text-[4.2rem] lg:text-[4.5rem] font-medium leading-[1.05] tracking-tight text-[#1A1A1A] max-w-[800px] mb-6">
                {slides[activeSlide].title}
              </h1>

              <p className="text-gray-500 text-[16px] md:text-[18px] font-medium max-w-[550px] leading-relaxed mb-10">
                {slides[activeSlide].subtitle}
              </p>

              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 z-20 relative">
                <button onClick={() => setPopupOpen(true)} className="bg-[#2563EB] text-white px-8 py-4 rounded-xl font-bold text-[16px] hover:bg-blue-700 transition-all shadow-[0_8px_20px_-5px_rgba(37,99,235,0.4)] hover:shadow-[0_8px_25px_-5px_rgba(37,99,235,0.5)] flex items-center gap-2">
                  Start Building Free <ArrowRight size={18} />
                </button>
                <button onClick={() => setPopupOpen(true)} className="bg-white text-[#1A1A1A] border border-gray-200 px-8 py-4 rounded-xl font-bold text-[16px] hover:bg-gray-50 transition-colors flex items-center gap-2 shadow-sm">
                  <Play size={18} className="text-gray-400" fill="currentColor" /> Watch Demo
                </button>
              </div>

              <div className="mt-12 flex-col gap-3.5 hidden sm:flex">
                {slides[activeSlide].tags.map((tag, idx) => (
                  <div key={idx} className="flex items-center gap-3 text-[14.5px] font-bold text-gray-500">
                    <CheckCircle2 size={18} className="text-[#2563EB]" strokeWidth={2.5} /> {tag}
                  </div>
                ))}
              </div>

              <p className="mt-10 text-[11px] text-gray-400 flex items-center gap-1.5 font-medium uppercase tracking-wider">
                <WhatsAppIcon size={12} className="text-[#25D366]" />
                Built on WhatsApp Business Platform by Meta
              </p>

            </motion.div>
          </AnimatePresence>

          {/* Slider dots */}
          <div className="absolute bottom-8 lg:bottom-12 left-6 md:left-12 xl:left-16 flex gap-2.5 z-20">
            {slides.map((_, i) => (
              <button
                key={i}
                onClick={() => setActiveSlide(i)}
                className={`h-1.5 rounded-full transition-all duration-300 ${activeSlide === i ? 'w-8 bg-[#2563EB]' : 'w-2 bg-gray-200 hover:bg-gray-300'}`}
              />
            ))}
          </div>
        </main>

        {/* ── RIGHT PANEL - USE CASE BENTO GRID ── */}
        <div className="w-full lg:w-[50%] xl:w-[45%] p-4 lg:p-8 bg-[#fbfbfb] flex flex-col justify-center gap-4 min-h-[500px] lg:min-h-0 relative z-0">
          
          {/* Card 1: Live Chat Simulation (Dynamic) */}
          <motion.div 
            initial="hidden" animate="visible" variants={fadeUp}
            className="w-full bg-white rounded-3xl border border-gray-100 p-6 lg:p-8 shadow-[0_20px_50px_-15px_rgba(0,0,0,0.05)] flex flex-col relative overflow-hidden h-[300px]"
          >
            {/* Background Image & Overlay */}
            <div 
              className="absolute inset-0 bg-cover bg-center opacity-60" 
              style={{ backgroundImage: "url('https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=800&auto=format&fit=crop')" }} 
            />
            <div className="absolute inset-0 bg-gradient-to-t from-white via-white/70 to-transparent z-0" />
            <div className="absolute top-2 right-2 p-6 opacity-[0.12] text-[#25D366] z-0">
              <WhatsAppIcon size={120} />
            </div>
            
            <AnimatePresence mode="wait">
              <motion.div
                key={chatScenarios[activeChat].id}
                initial={{ opacity: 0, x: 10 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -10 }}
                transition={{ duration: 0.3 }}
                className="relative z-10 flex flex-col h-full"
              >
                <h3 className="text-lg font-bold text-[#1A1A1A] flex items-center gap-2 mb-auto">
                  {chatScenarios[activeChat].icon} 
                  {chatScenarios[activeChat].title}
                </h3>

                {/* Chat Bubbles */}
                <div className="flex flex-col gap-3 mt-4">
                  <div className="bg-white/95 backdrop-blur-md text-[#334155] text-[13.5px] font-medium p-4 rounded-2xl rounded-tl-sm shadow-sm self-start max-w-[85%] leading-relaxed border border-gray-100">
                    {chatScenarios[activeChat].userMsg}
                  </div>
                  <div className="bg-[#EFF6FF]/95 backdrop-blur-md text-[#1D4ED8] text-[13.5px] font-medium p-4 rounded-2xl rounded-tr-sm shadow-sm self-end max-w-[85%] leading-relaxed border border-[#DBEAFE]">
                    {chatScenarios[activeChat].botMsg}
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </motion.div>

          {/* Bottom Row */}
          <div className="flex flex-col sm:flex-row gap-4 h-full sm:h-[220px]">
            
            {/* Card 2: Language Support */}
            <motion.div 
              initial="hidden" animate="visible" variants={fadeUp} transition={{ delay: 0.1 }}
              className="flex-1 bg-white rounded-3xl border border-gray-100 p-6 shadow-[0_20px_50px_-15px_rgba(0,0,0,0.05)] flex flex-col justify-center relative overflow-hidden group"
            >
              {/* Blue Ambient Blurs */}
              <div className="absolute -top-10 -left-10 w-32 h-32 bg-[#DBEAFE] blur-[50px] rounded-full z-0 opacity-80" />
              <div className="absolute bottom-0 right-0 w-32 h-32 bg-[#EFF6FF] blur-[50px] rounded-full z-0 opacity-80" />
              
              <div className="absolute -right-4 -bottom-6 text-[100px] font-black text-gray-50 leading-none select-none pointer-events-none tracking-tighter transition-transform duration-500 group-hover:scale-110 z-0">
                അ
              </div>
              
              <div className="relative z-10">
                <span className="text-[11px] font-bold text-gray-400 uppercase tracking-widest mb-3 block">Speaks Native</span>
                <h4 className="text-[1.35rem] font-bold text-[#1A1A1A] mb-4 leading-tight tracking-tight">
                  Malayalam,<br/>Manglish & English.
                </h4>
                <div className="flex flex-wrap gap-2">
                  <span className="px-2.5 py-1 bg-white/80 backdrop-blur-sm text-[#2563EB] border border-blue-100 rounded-md text-[10px] font-bold uppercase tracking-wider shadow-sm">Auto-Detect</span>
                </div>
              </div>
            </motion.div>

            {/* Card 3: 24/7 Agent */}
            <motion.div 
              initial="hidden" animate="visible" variants={fadeUp} transition={{ delay: 0.2 }}
              className="flex-1 bg-white border border-gray-100 rounded-3xl p-6 shadow-[0_20px_50px_-15px_rgba(0,0,0,0.05)] flex flex-col justify-center items-center text-center relative overflow-hidden"
            >
              {/* Cool Blue Ambient Gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#EFF6FF] to-white z-0" />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-[#DBEAFE] blur-[50px] rounded-full z-0 opacity-60" />

              <div className="relative z-10 flex flex-col items-center">
                <div className="text-[#2563EB] flex items-center justify-center mb-4 relative">
                  <div className="absolute top-0 right-0 w-2.5 h-2.5 bg-[#25D366] rounded-full animate-pulse shadow-[0_0_8px_rgba(37,211,102,0.6)]" />
                  <Bot size={44} strokeWidth={1.5} />
                </div>
                <span className="text-[2.5rem] font-bold text-[#1A1A1A] leading-none mb-1 tracking-tight">24/7</span>
                <span className="text-[11px] font-bold text-gray-500 uppercase tracking-widest mt-1">Always Online</span>
              </div>
            </motion.div>

          </div>
        </div>

      </div>
    </section>
  )
}