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
    icon: <MetaIcon size={15} className="text-[#0066CC]" />,
    text: 'Meta Verified Tech Provider',
    border: 'border-[#E5E5EA]',
    textColor: 'text-[#1D1D1F]'
  }
]

/* ── DYNAMIC SLIDES ───────────────────────────── */
const slides = [
  {
    title: (
      <>
        AI agents that <br className="hidden lg:block" />
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0066CC] to-[#3399FF]">sell & support</span> 24/7.
      </>
    ),
    subtitle: "Turn conversations into conversions. Deploy interactive agents that check stock, process orders, and handle support instantly.",
    tags: ["Interactive Buttons", "Automated Routing", "Order Tracking"],
  },
  {
    title: (
      <>
        Broadcast <br className="hidden lg:block" />
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0066CC] to-[#3399FF]">marketing campaigns.</span>
      </>
    ),
    subtitle: "Launch targeted promotions and notify thousands of customers simultaneously with rich media and interactive links.",
    tags: ["Bulk Messaging",  "Delivery Analytics"],
  },
  {
    title: (
      <>
        Speak <br className="hidden lg:block" />
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0066CC] to-[#3399FF]">your local language.</span>
      </>
    ),
    subtitle: "Deliver personalized experiences with an AI that fluently understands Malayalam, Manglish, and English automatically.",
    tags: ["Auto-Detection", "Malayalam & Manglish", "Natural NLP"],
  }
]

/* ── CHAT SCENARIOS ────────────────────────── */
const chatScenarios = [
  {
    id: 'ecommerce',
    icon: <ShoppingBag size={20} className="text-[#0066CC]" />,
    title: "Auto Order Taking",
    userMsg: "I want to order 2 Premium Coir Mats. Deliver to Ernakulam.",
    botMsg: (
      <>
        <span className="font-semibold text-[#1D1D1F]">Order confirmed! 🎉</span><br/>
        <span className="text-[#424245]">2× Premium Coir Mat — ₹1,200<br/>
        Delivery to Ernakulam in 2-3 days.</span>
      </>
    )
  },
  {
    id: 'booking',
    icon: <Calendar size={20} className="text-[#0066CC]" />,
    title: "Appointment Booking",
    userMsg: "Can I book a consultation for tomorrow at 10 AM?",
    botMsg: (
      <>
        <span className="font-semibold text-[#1D1D1F]">Slot Available ✅</span><br/>
        <span className="text-[#424245]">I've reserved 10:00 AM tomorrow for you.<br/>
        Reply 'Confirm' to finalize.</span>
      </>
    )
  },
  {
    id: 'support',
    icon: <Bot size={20} className="text-[#0066CC]" />,
    title: "Instant 24/7 Support",
    userMsg: "What are your shop timings today?",
    botMsg: (
      <>
        <span className="font-semibold text-[#1D1D1F]">We're open! 🏪</span><br/>
        <span className="text-[#424245]">Our Aluva branch is open from 9 AM to 8 PM today. How can we help you?</span>
      </>
    )
  }
]

/* ── MAIN COMPONENT ──────────────────────────────────────────── */
export default function FaigenHero() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [popupOpen, setPopupOpen] = useState(false)
  const [copied, setCopied] = useState(false)
  
  const [activeSlide, setActiveSlide] = useState(0)
  const [activeChat, setActiveChat] = useState(0)

  useEffect(() => {
    const slideTimer = setInterval(() => {
      setActiveSlide(prev => (prev + 1) % slides.length)
    }, 6000)
    return () => clearInterval(slideTimer)
  }, [])

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

  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
  }

  return (
    <section className="w-full min-h-screen bg-[#FBFBFD] font-sans text-[#1D1D1F] flex flex-col overflow-hidden relative selection:bg-[#0066CC] selection:text-white">
      
      {/* Subtle Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[#0066CC] opacity-[0.04] blur-[120px] rounded-full pointer-events-none z-0" />

      {/* ── POPUP MODAL ── */}
      <AnimatePresence>
        {popupOpen && (
          <motion.div
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/20 backdrop-blur-md px-4"
            onClick={() => setPopupOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.95, y: 20, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.95, y: 20, opacity: 0 }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              onClick={e => e.stopPropagation()}
              className="bg-white rounded-[28px] border border-[#E5E5EA] w-full max-w-[420px] overflow-hidden shadow-2xl"
            >
              <div className="p-8">
                <div className="flex justify-between items-start mb-6">
                  <div className="w-12 h-12 rounded-2xl bg-[#F5F5F7] flex items-center justify-center text-[#1D1D1F] border border-[#E5E5EA]">
                    <ShieldCheck size={24} strokeWidth={1.5} />
                  </div>
                  <button onClick={() => setPopupOpen(false)} className="text-[#86868B] hover:text-[#1D1D1F] bg-[#F5F5F7] border border-[#E5E5EA] w-8 h-8 flex items-center justify-center rounded-full transition-colors">
                    <X size={16} strokeWidth={2} />
                  </button>
                </div>
                <h3 className="text-[22px] font-semibold text-[#1D1D1F] tracking-tight mb-2">Request API Access</h3>
                <p className="text-[14px] text-[#86868B] leading-relaxed mb-8">
                  Faigen Console is available for businesses. Contact our deployment team to get started.
                </p>
                <div className="space-y-4">
                  <div className="bg-[#F5F5F7] border border-[#E5E5EA] rounded-2xl p-4 flex items-center justify-between group hover:border-[#D2D2D7] transition-all cursor-pointer">
                    <div className="flex items-center gap-4">
                      <Mail size={18} className="text-[#86868B] group-hover:text-[#1D1D1F] transition-colors" />
                      <a href="mailto:info@faigen.in" className="text-[15px] font-medium text-[#1D1D1F]">info@faigen.in</a>
                    </div>
                    <button onClick={handleCopy} className="text-[#86868B] hover:text-[#0066CC] bg-white shadow-sm border border-[#E5E5EA] p-2 rounded-xl transition-all">
                      {copied ? <Check size={16} strokeWidth={3} /> : <Copy size={16} />}
                    </button>
                  </div>
                  <a href="tel:+919876543210" className="flex items-center gap-4 p-4 rounded-2xl border border-[#E5E5EA] hover:border-[#D2D2D7] bg-[#F5F5F7] hover:bg-[#EAEAEB] transition-all group">
                    <Phone size={18} className="text-[#86868B] group-hover:text-[#1D1D1F] transition-colors" />
                    <span className="text-[15px] font-medium text-[#1D1D1F]">+91 98765 43210</span>
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ── HEADER ── */}
      <header className="relative flex justify-between items-center px-6 md:px-10 py-5 w-full z-50 bg-[#FBFBFD]/80 backdrop-blur-2xl border-b border-[#E5E5EA] max-w-[1500px] mx-auto">
        <div className="flex items-center gap-3 cursor-pointer">
          {/* Logo should be dark/colored for light theme */}
          <img src="/logonew.png" alt="Faigen Logo" className="h-9 md:h-8 w-auto object-contain" />
        </div>

        <nav className="hidden lg:flex items-center gap-10 text-[14px] font-medium text-[#86868B]">
          <a href="#" className="hover:text-[#1D1D1F] transition-colors">Platform</a>
          <button onClick={() => setPopupOpen(true)} className="hover:text-[#1D1D1F] transition-colors">API Pricing</button>
          <a href="/use-cases" className="hover:text-[#1D1D1F] transition-colors">Use Cases</a>
        </nav>

        <div className="hidden lg:flex items-center gap-6">
          <Link href="/login" className="text-[#86868B] text-[14px] font-medium hover:text-[#1D1D1F] transition-colors">Sign in</Link>
          <button onClick={() => setPopupOpen(true)} className="bg-[#1D1D1F] text-white px-5 py-2 text-[14px] font-semibold rounded-full hover:bg-black transition-colors">
            Request Access
          </button>
        </div>

        <button className="lg:hidden p-2 text-[#1D1D1F]" onClick={() => setMenuOpen(v => !v)}>
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </header>

      {/* Mobile drawer */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="lg:hidden absolute top-[70px] left-0 right-0 bg-white/95 backdrop-blur-3xl border-b border-[#E5E5EA] px-6 pb-8 flex flex-col z-40"
          >
            <a href="#" onClick={() => setMenuOpen(false)} className="text-[16px] font-medium text-[#1D1D1F] py-5 border-b border-[#F5F5F7]">Platform</a>
            <button onClick={() => { setPopupOpen(true); setMenuOpen(false) }} className="text-[16px] font-medium text-[#1D1D1F] py-5 border-b border-[#F5F5F7] text-left">API Pricing</button>
            <button href="/use-case" className="text-[16px] font-medium text-[#1D1D1F] py-5 border-b border-[#F5F5F7] text-left">Use Cases</button>
            <div className="mt-8 flex flex-col gap-4">
              <Link href="/login" className="text-center bg-[#F5F5F7] border border-[#E5E5EA] text-[#1D1D1F] py-3.5 rounded-full text-[15px] font-medium">Sign in</Link>
              <button onClick={() => { setPopupOpen(true); setMenuOpen(false) }} className="bg-[#1D1D1F] text-white py-3.5 rounded-full text-[15px] font-semibold">Request Access</button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ── TRUST BAR ── */}
      <div className="w-full border-b border-[#E5E5EA] bg-white/40 backdrop-blur-md py-3 px-6 overflow-x-auto relative z-10">
        <div className="max-w-[1500px] mx-auto flex items-center justify-center gap-3 sm:gap-6 flex-nowrap">
          {trustBadges.map((badge, i) => (
            <div
              key={i}
              className={`flex items-center gap-2 px-4 py-1.5 rounded-full border text-[12px] font-medium whitespace-nowrap bg-white ${badge.border} ${badge.textColor}`}
            >
              {badge.icon}
              {badge.text}
            </div>
          ))}
          <div className="hidden sm:block w-px h-4 bg-[#E5E5EA] mx-2" />
          <a
            href="https://www.facebook.com/business/partner-directory"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:flex items-center gap-2 text-[12px] text-[#86868B] hover:text-[#0066CC] transition-colors whitespace-nowrap font-medium"
          >
            <MetaIcon size={12} />
            View in Meta Partner Directory
            <ArrowRight size={12} />
          </a>
        </div>
      </div>

      {/* ── MAIN CONTENT ── */}
      <div className="max-w-[1500px] mx-auto w-full flex flex-col lg:flex-row flex-1 relative z-10">

        {/* LEFT PANEL - SLIDING TEXT */}
        <main className="w-full lg:w-[50%] xl:w-[55%] relative flex flex-col items-start justify-center pt-16 lg:pt-0 pb-20 lg:pb-0 px-6 md:px-12 xl:px-16 text-left">
          <AnimatePresence mode="wait" initial={false}>
            <motion.div
              key={`text-${activeSlide}`}
              initial={{ opacity: 0, filter: "blur(10px)", y: 20 }}
              animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
              exit={{ opacity: 0, filter: "blur(10px)", y: -20 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="w-full relative z-10"
            >
              <h1 className="text-[3rem] md:text-[4.5rem] lg:text-[5rem] font-semibold leading-[1.02] tracking-tighter text-[#1D1D1F] max-w-[800px] mb-6">
                {slides[activeSlide].title}
              </h1>

              <p className="text-[#86868B] text-[17px] md:text-[19px] font-medium max-w-[550px] leading-relaxed mb-10 tracking-tight">
                {slides[activeSlide].subtitle}
              </p>

              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 z-20 relative">
                <button onClick={() => setPopupOpen(true)} className="bg-[#1D1D1F] text-white px-8 py-4 rounded-full font-semibold text-[15px] hover:bg-black transition-all flex items-center gap-2 shadow-lg shadow-black/10">
                  Start Building Free <ArrowRight size={18} />
                </button>
                <button onClick={() => setPopupOpen(true)} className="bg-white text-[#1D1D1F] border border-[#D2D2D7] px-8 py-4 rounded-full font-semibold text-[15px] hover:bg-[#F5F5F7] transition-colors flex items-center gap-2">
                  <Play size={18} fill="currentColor" /> Watch Demo
                </button>
              </div>

              <div className="mt-14 flex-col gap-4 hidden sm:flex">
                {slides[activeSlide].tags.map((tag, idx) => (
                  <div key={idx} className="flex items-center gap-3 text-[14px] font-medium text-[#86868B] tracking-tight">
                    <CheckCircle2 size={18} className="text-[#0066CC]" strokeWidth={2} /> {tag}
                  </div>
                ))}
              </div>

              <p className="mt-12 text-[12px] text-[#86868B] flex items-center gap-2 font-medium tracking-wide">
                <WhatsAppIcon size={14} className="text-[#25D366]" />
                Built on WhatsApp Business Platform by Meta
              </p>

            </motion.div>
          </AnimatePresence>

          {/* Slider dots */}
          <div className="absolute bottom-8 lg:bottom-12 left-6 md:left-12 xl:left-16 flex gap-3 z-20">
            {slides.map((_, i) => (
              <button
                key={i}
                onClick={() => setActiveSlide(i)}
                className={`h-1.5 rounded-full transition-all duration-500 ease-in-out ${activeSlide === i ? 'w-10 bg-[#1D1D1F]' : 'w-2 bg-[#D2D2D7] hover:bg-[#A1A1A6]'}`}
              />
            ))}
          </div>
        </main>

        {/* ── RIGHT PANEL - USE CASE BENTO GRID ── */}
        <div className="w-full lg:w-[50%] xl:w-[45%] p-4 lg:p-8 flex flex-col justify-center gap-4 min-h-[500px] lg:min-h-0 relative z-0">
          
          {/* Card 1: Live Chat Simulation */}
          <motion.div 
            initial="hidden" animate="visible" variants={fadeUp}
            className="w-full bg-white rounded-[32px] border border-[#E5E5EA] shadow-[0_8px_30px_rgb(0,0,0,0.04)] p-6 lg:p-8 flex flex-col relative overflow-hidden h-[320px]"
          >
            {/* Subtle Inner Background element */}
            <div className="absolute -top-20 -right-20 w-64 h-64 bg-[#F5F5F7] rounded-full pointer-events-none z-0" />
            
            <AnimatePresence mode="wait">
              <motion.div
                key={chatScenarios[activeChat].id}
                initial={{ opacity: 0, filter: "blur(8px)", x: 10 }}
                animate={{ opacity: 1, filter: "blur(0px)", x: 0 }}
                exit={{ opacity: 0, filter: "blur(8px)", x: -10 }}
                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                className="relative z-10 flex flex-col h-full"
              >
                <h3 className="text-lg font-semibold text-[#1D1D1F] flex items-center gap-3 mb-auto tracking-tight">
                  <div className="p-2 bg-[#F5F5F7] rounded-xl border border-[#E5E5EA]">
                    {chatScenarios[activeChat].icon} 
                  </div>
                  {chatScenarios[activeChat].title}
                </h3>

                {/* Chat Bubbles */}
                <div className="flex flex-col gap-4 mt-6">
                  <div className="bg-[#F5F5F7] text-[#1D1D1F] text-[14px] font-medium p-4 px-5 rounded-2xl rounded-tl-sm self-start max-w-[85%] leading-relaxed border border-[#E5E5EA]">
                    {chatScenarios[activeChat].userMsg}
                  </div>
                  <div className="bg-[#E8F4FF] text-[#0066CC] text-[14px] font-medium p-4 px-5 rounded-2xl rounded-tr-sm self-end max-w-[85%] leading-relaxed border border-[#D1E8FF]">
                    {chatScenarios[activeChat].botMsg}
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </motion.div>

          {/* Bottom Row */}
          <div className="flex flex-col sm:flex-row gap-4 h-full sm:h-[240px]">
            
            {/* Card 2: Language Support */}
            <motion.div 
              initial="hidden" animate="visible" variants={fadeUp} transition={{ delay: 0.1 }}
              className="flex-1 bg-white rounded-[32px] border border-[#E5E5EA] shadow-[0_8px_30px_rgb(0,0,0,0.04)] p-8 flex flex-col justify-center relative overflow-hidden group"
            >
              <div className="absolute -right-4 -bottom-6 text-[120px] font-black text-black/[0.02] leading-none select-none pointer-events-none tracking-tighter transition-transform duration-700 group-hover:scale-110 z-0">
                അ
              </div>
              
              <div className="relative z-10">
                <span className="text-[11px] font-semibold text-[#86868B] uppercase tracking-widest mb-3 block">Speaks Native</span>
                <h4 className="text-[1.5rem] font-semibold text-[#1D1D1F] mb-5 leading-tight tracking-tight">
                  Malayalam,<br/>Manglish & English.
                </h4>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1.5 bg-[#F5F5F7] text-[#424245] border border-[#E5E5EA] rounded-full text-[11px] font-semibold uppercase tracking-wider">Auto-Detect</span>
                </div>
              </div>
            </motion.div>

            {/* Card 3: 24/7 Agent */}
            <motion.div 
              initial="hidden" animate="visible" variants={fadeUp} transition={{ delay: 0.2 }}
              className="flex-1 bg-white border border-[#E5E5EA] shadow-[0_8px_30px_rgb(0,0,0,0.04)] rounded-[32px] p-8 flex flex-col justify-center items-center text-center relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#F5F5F7]/50 z-0" />
              <div className="relative z-10 flex flex-col items-center">
                <div className="text-[#1D1D1F] flex items-center justify-center mb-6 relative">
                  <div className="absolute top-0 right-0 w-3 h-3 bg-[#25D366] rounded-full animate-pulse shadow-[0_0_12px_rgba(37,211,102,0.6)]" />
                  <Bot size={48} strokeWidth={1} />
                </div>
                <span className="text-[2.8rem] font-semibold text-[#1D1D1F] leading-none mb-2 tracking-tighter">24/7</span>
                <span className="text-[12px] font-medium text-[#86868B] uppercase tracking-widest mt-1">Always Online</span>
              </div>
            </motion.div>

          </div>
        </div>

      </div>
    </section>
  )
}