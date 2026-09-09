'use client'

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Play, Menu, X, Mail, ShieldCheck,
  CheckCircle2, ArrowRight, Check, Copy, Bot, ShoppingBag, Calendar, Sparkles, Zap
} from "lucide-react";
import Link from 'next/link'

const WhatsAppIcon = ({ size = 18, className = '' }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
  </svg>
)

const MetaIcon = ({ size = 18, className = '' }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M6.915 4.03c-1.968 0-3.683 1.28-4.871 3.113C.704 9.208 0 11.883 0 14.449c0 .706.07 1.369.21 1.973a6.624 6.624 0 00.265.86 5.297 5.297 0 00.371.761c.696 1.159 1.818 1.927 3.593 1.927 1.497 0 2.633-.671 3.965-2.444.76-1.012 1.144-1.626 2.663-4.32l.756-1.339.186-.325c.061.1.121.196.183.3l2.152 3.595c.724 1.21 1.665 2.556 2.47 3.314 1.046.987 1.992 1.22 3.06 1.22 1.075 0 1.876-.355 2.455-.843a3.743 3.743 0 00.81-.973c.542-.939.861-2.127.861-3.745 0-2.72-.681-5.357-2.084-7.45-1.282-1.912-2.957-2.93-4.716-2.93-1.047 0-2.088.467-3.053 1.308-.767.665-1.4 1.578-2.173 2.925L12 7.504l-.312-.54C10.432 5.455 9.07 4.03 6.915 4.03z"/>
  </svg>
)

const trustBadges = [
  { icon: <MetaIcon size={15} className="text-[#0066CC]" />, text: 'Meta Verified Tech Provider', border: 'border-[#E5E5EA]', textColor: 'text-[#1D1D1F]' }
]

const slides = [
  {
    title: (<>AI agents that <br className="hidden lg:block" /><span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0066CC] to-[#3399FF]">sell & support</span> 24/7.</>),
    subtitle: "Turn conversations into conversions. Deploy interactive agents that check stock, process orders, and handle support instantly.",
    tags: ["Interactive Buttons", "Automated Routing", "Order Tracking"],
  },
  {
    title: (<>Broadcast <br className="hidden lg:block" /><span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0066CC] to-[#3399FF]">marketing campaigns.</span></>),
    subtitle: "Launch targeted promotions and notify thousands of customers simultaneously with rich media and interactive links.",
    tags: ["Bulk Messaging", "Delivery Analytics"],
  },
  {
    title: (<>Speak <br className="hidden lg:block" /><span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0066CC] to-[#3399FF]">your local language.</span></>),
    subtitle: "Deliver personalized experiences with an AI that fluently understands Malayalam, Manglish, and English automatically.",
    tags: ["Auto-Detection", "Malayalam & Manglish", "Natural NLP"],
  }
]

const chatScenarios = [
  {
    id: 'ecommerce', icon: <ShoppingBag size={20} className="text-[#0066CC]" />, title: "Auto Order Taking",
    userMsg: "I want to order 2 Premium Coir Mats. Deliver to Ernakulam.",
    botMsg: (<><span className="font-semibold text-[#1D1D1F]">Order confirmed! 🎉</span><br /><span className="text-[#424245]">2× Premium Coir Mat — ₹1,200<br />Delivery in 2-3 days.</span></>)
  },
  {
    id: 'booking', icon: <Calendar size={20} className="text-[#0066CC]" />, title: "Appointment Booking",
    userMsg: "Can I book a consultation for tomorrow at 10 AM?",
    botMsg: (<><span className="font-semibold text-[#1D1D1F]">Slot Available ✅</span><br /><span className="text-[#424245]">Reserved 10:00 AM tomorrow.<br />Reply &apos;Confirm&apos; to finalize.</span></>)
  },
  {
    id: 'support', icon: <Bot size={20} className="text-[#0066CC]" />, title: "Instant 24/7 Support",
    userMsg: "What are your shop timings today?",
    botMsg: (<><span className="font-semibold text-[#1D1D1F]">We&apos;re open! 🏪</span><br /><span className="text-[#424245]">Aluva branch open 9 AM–8 PM. How can we help?</span></>)
  }
]

export default function FaigenHero() {
  const [menuOpen, setMenuOpen]       = useState(false)
  const [popupOpen, setPopupOpen]     = useState(false)
  const [copied, setCopied]           = useState(false)
  const [activeSlide, setActiveSlide] = useState(0)
  const [activeChat, setActiveChat]   = useState(0)

  useEffect(() => {
    const t = setInterval(() => setActiveSlide(p => (p + 1) % slides.length), 6000)
    return () => clearInterval(t)
  }, [])

  useEffect(() => {
    const t = setInterval(() => setActiveChat(p => (p + 1) % chatScenarios.length), 4500)
    return () => clearInterval(t)
  }, [])

  useEffect(() => {
    const h = () => { if (window.innerWidth >= 1024) setMenuOpen(false) }
    window.addEventListener('resize', h)
    return () => window.removeEventListener('resize', h)
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

  const navLinks = [
    { label: 'Pricing', href: '/pricing' },
    { label: 'Use Cases', href: '/use-cases' },
    // { label: 'About Us',  href: '/about' },
    // { label: 'Contact',   href: '/contact' },
  ]

  return (
    <section className="w-full min-h-screen bg-[#FBFBFD] font-sans text-[#1D1D1F] flex flex-col relative selection:bg-[#0066CC] selection:text-white">
      <div className="absolute top-0 left-0 right-0 h-[400px] overflow-hidden pointer-events-none z-0">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[#0066CC] opacity-[0.04] blur-[120px] rounded-full" />
      </div>

      {/* POPUP */}
      <AnimatePresence>
        {popupOpen && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/20 backdrop-blur-md px-4"
            onClick={() => setPopupOpen(false)}>
            <motion.div
              initial={{ scale: 0.95, y: 20, opacity: 0 }} animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.95, y: 20, opacity: 0 }} transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              onClick={e => e.stopPropagation()}
              className="bg-white rounded-[28px] border border-[#E5E5EA] w-full max-w-[420px] overflow-hidden shadow-2xl">
              <div className="p-8">
                <div className="flex justify-between items-start mb-6">
                  <div className="w-12 h-12 rounded-2xl flex items-center justify-center text-[#1D1D1F]">
                    <ShieldCheck size={24} strokeWidth={1.5} />
                  </div>
                  <button onClick={() => setPopupOpen(false)}
                    className="text-[#86868B] bg-[#F5F5F7] border border-[#E5E5EA] w-8 h-8 flex items-center justify-center rounded-full">
                    <X size={16} strokeWidth={2} />
                  </button>
                </div>
                <h3 className="text-[22px] font-semibold text-[#1D1D1F] tracking-tight mb-2">Request Access</h3>
                <p className="text-[14px] text-[#86868B] leading-relaxed mb-8">
                  Faigen Console is for businesses. Contact our team to get started.
                </p>
                <div className="bg-[#F5F5F7] border border-[#E5E5EA] rounded-2xl p-4 flex items-center justify-between group hover:border-[#D2D2D7] transition-all">
                  <div className="flex items-center gap-4">
                    <Mail size={18} className="text-[#86868B]" />
                    <a href="mailto:info@faigen.in" className="text-[15px] font-medium text-[#1D1D1F]">info@faigen.in</a>
                  </div>
                  <button onClick={handleCopy} className="text-[#86868B] hover:text-[#0066CC] bg-white shadow-sm border border-[#E5E5EA] p-2 rounded-xl transition-all">
                    {copied ? <Check size={16} strokeWidth={3} /> : <Copy size={16} />}
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* HEADER */}
      <header className="sticky top-0 z-50 bg-[#FBFBFD]/90 backdrop-blur-2xl border-b border-[#E5E5EA]">
        <div className="max-w-[1500px] mx-auto flex justify-between items-center px-5 md:px-10 py-4">
          <Link href="/" className="flex items-center shrink-0">
            <img src="/logonew.png" alt="Faigen Logo" className="h-8 md:h-12 w-auto object-contain" />
          </Link>
          <nav className="hidden lg:flex items-center gap-8 text-[14px] font-medium text-[#86868B]">
            {navLinks.map(l => (
              <Link key={l.href} href={l.href} className="hover:text-[#1D1D1F] transition-colors">{l.label}</Link>
            ))}
          </nav>
          <div className="hidden lg:flex items-center gap-3">
            {/* Live demo link in header — draws attention */}
            <Link href="/try"
              className="flex items-center gap-1.5 px-4 py-2.5 rounded-full border border-[#25D366] text-[#1D1D1F] text-[13px] font-semibold hover:bg-[#F0FFF4] transition-colors">
              <span className="w-2 h-2 rounded-full bg-[#25D366] animate-pulse" />
              Try Live Demo
            </Link>
            <button onClick={() => setPopupOpen(true)}
              className="bg-[#1D1D1F] text-white px-5 py-2.5 text-[14px] font-semibold rounded-full hover:bg-black transition-colors">
              Request Access
            </button>
          </div>
          <button className="lg:hidden p-2 -mr-1 text-[#1D1D1F] rounded-lg hover:bg-[#F5F5F7] transition-colors"
            onClick={() => setMenuOpen(v => !v)}>
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        <AnimatePresence>
          {menuOpen && (
            <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }} transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
              className="lg:hidden overflow-hidden bg-white border-t border-[#E5E5EA]">
              <div className="flex flex-col px-5 py-3">
                {navLinks.map(l => (
                  <Link key={l.href} href={l.href} onClick={() => setMenuOpen(false)}
                    className="flex items-center justify-between text-[15px] font-medium text-[#1D1D1F] py-4 border-b border-[#F5F5F7] last:border-0">
                    {l.label} <ArrowRight size={16} className="text-[#86868B]" />
                  </Link>
                ))}
                {/* Try Live Demo in mobile drawer */}
                <Link href="/try" onClick={() => setMenuOpen(false)}
                  className="flex items-center justify-between text-[15px] font-semibold text-[#1D1D1F] py-4 border-b border-[#F5F5F7]">
                  <span className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#25D366] animate-pulse" />
                    Try Live Demo
                  </span>
                  <ArrowRight size={16} className="text-[#86868B]" />
                </Link>
                <button onClick={() => { setPopupOpen(true); setMenuOpen(false) }}
                  className="mt-5 mb-2 w-full bg-[#1D1D1F] text-white py-3.5 text-[15px] font-semibold rounded-full flex items-center justify-center gap-2">
                  Request Access <ArrowRight size={16} />
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* TRUST BAR */}
      <div className="w-full border-b border-[#E5E5EA] bg-white/40 backdrop-blur-md py-3 px-6 overflow-x-auto relative z-10">
        <div className="max-w-[1500px] mx-auto flex items-center justify-center gap-3 flex-nowrap">
          {trustBadges.map((badge, i) => (
            <div key={i} className={`flex items-center gap-2 px-4 py-1.5 rounded-full border text-[12px] font-medium whitespace-nowrap bg-white ${badge.border} ${badge.textColor}`}>
              {badge.icon} {badge.text}
            </div>
          ))}
        </div>
      </div>

      {/* MAIN CONTENT */}
      <div className="max-w-[1500px] mx-auto w-full flex flex-col lg:flex-row flex-1 relative z-10">

        {/* LEFT */}
        <main className="w-full lg:w-[50%] xl:w-[55%] relative flex flex-col items-start justify-center pt-12 lg:pt-0 pb-24 lg:pb-0 px-5 md:px-12 xl:px-16 text-left">
          <AnimatePresence mode="wait" initial={false}>
            <motion.div
              key={`text-${activeSlide}`}
              initial={{ opacity: 0, filter: "blur(10px)", y: 20 }}
              animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
              exit={{ opacity: 0, filter: "blur(10px)", y: -20 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="w-full relative z-10"
            >
              {/* Attention tag above headline */}
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue/10 border border-blue/20 text-blue/80 text-[12px] font-semibold mb-5 shadow-sm">
               
                Live on WhatsApp — Try it now free
              </div>

              <h1 className="text-[3.2rem] sm:text-[3.5rem] md:text-[4.5rem] lg:text-[5rem] font-semibold leading-[1.02] tracking-tighter text-[#1D1D1F] max-w-[800px] mb-5">
                {slides[activeSlide].title}
              </h1>
              <p className="text-[#86868B] text-[16px] sm:text-[17px] md:text-[18px] font-medium max-w-[550px] leading-relaxed mb-7 tracking-tight">
                {slides[activeSlide].subtitle}
              </p>

              {/* CTAs */}
              <div className="flex flex-row items-center gap-2 sm:gap-3 z-20 relative w-full sm:w-auto">
                {/* Primary — Try Live Demo → /try */}
                <Link href="/try"
                  className="bg-[#1D1D1F] text-white px-4 py-2.5 sm:px-7 sm:py-4 rounded-full font-semibold text-[13px] sm:text-[15px] hover:bg-black transition-all flex items-center justify-center gap-1.5 sm:gap-2 shadow-lg shadow-black/10 flex-1 sm:flex-none">
                  <span className="w-2 h-2 rounded-full bg-[#25D366] animate-pulse shrink-0" />
                  Try Live Demo
                  <ArrowRight size={14} className="sm:hidden" />
                  <ArrowRight size={17} className="hidden sm:block" />
                </Link>

                {/* Secondary — Request Access → popup */}
                <button onClick={() => setPopupOpen(true)}
                  className="bg-white text-[#1D1D1F] border border-[#D2D2D7] px-4 py-2.5 sm:px-7 sm:py-4 rounded-full font-semibold text-[13px] sm:text-[15px] hover:bg-[#F5F5F7] transition-colors flex items-center justify-center gap-1.5 sm:gap-2 flex-1 sm:flex-none">
                  Get Access
                  <ArrowRight size={13} className="sm:hidden" />
                  <ArrowRight size={16} className="hidden sm:block" />
                </button>
              </div>

              {/* Small nudge below buttons */}
              <p className="mt-3 text-[12px] text-[#86868B] font-medium flex items-center gap-1.5">
                <WhatsAppIcon size={12} className="text-[#25D366]" />
                No app download — chat directly on WhatsApp
              </p>

              <div className="mt-6 flex flex-col gap-2.5 sm:gap-3">
                {slides[activeSlide].tags.map((tag, idx) => (
                  <div key={idx} className="flex items-center gap-2.5 text-[13px] sm:text-[14px] font-medium text-[#86868B] tracking-tight">
                    <CheckCircle2 size={16} className="text-[#0066CC] shrink-0" strokeWidth={2} /> {tag}
                  </div>
                ))}
              </div>
            </motion.div>
          </AnimatePresence>

          <div className="absolute bottom-8 lg:bottom-12 left-5 md:left-12 xl:left-16 flex gap-3 z-20">
            {slides.map((_, i) => (
              <button key={i} onClick={() => setActiveSlide(i)}
                className={`h-1.5 rounded-full transition-all duration-500 ease-in-out ${activeSlide === i ? 'w-10 bg-[#1D1D1F]' : 'w-2 bg-[#D2D2D7]'}`} />
            ))}
          </div>
        </main>

        {/* RIGHT — desktop bento */}
        <div className="hidden sm:flex w-full lg:w-[50%] xl:w-[45%] p-4 lg:p-8 flex-col justify-center gap-4 min-h-[500px] lg:min-h-0 relative z-0">
          <motion.div initial="hidden" animate="visible" variants={fadeUp}
            className="w-full bg-white rounded-[32px] border border-[#E5E5EA] shadow-[0_8px_30px_rgb(0,0,0,0.04)] p-6 lg:p-8 flex flex-col relative overflow-hidden h-[320px]">
            <div className="absolute -top-20 -right-20 w-64 h-64 bg-[#F5F5F7] rounded-full pointer-events-none z-0" />
            <AnimatePresence mode="wait">
              <motion.div key={chatScenarios[activeChat].id}
                initial={{ opacity: 0, filter: "blur(8px)", x: 10 }}
                animate={{ opacity: 1, filter: "blur(0px)", x: 0 }}
                exit={{ opacity: 0, filter: "blur(8px)", x: -10 }}
                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                className="relative z-10 flex flex-col h-full">
                <h3 className="text-lg font-semibold text-[#1D1D1F] flex items-center gap-3 mb-auto tracking-tight">
                  <div className="p-2 bg-[#F5F5F7] rounded-xl border border-[#E5E5EA]">{chatScenarios[activeChat].icon}</div>
                  {chatScenarios[activeChat].title}
                </h3>
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

          <div className="flex flex-col sm:flex-row gap-4 h-full sm:h-[240px]">
            <motion.div initial="hidden" animate="visible" variants={fadeUp} transition={{ delay: 0.1 }}
              className="flex-1 bg-white rounded-[32px] border border-[#E5E5EA] shadow-[0_8px_30px_rgb(0,0,0,0.04)] p-8 flex flex-col justify-center relative overflow-hidden group">
              <div className="absolute -right-4 -bottom-6 text-[120px] font-black text-black/[0.02] leading-none select-none pointer-events-none tracking-tighter transition-transform duration-700 group-hover:scale-110 z-0">അ</div>
              <div className="relative z-10">
                <span className="text-[11px] font-semibold text-[#86868B] uppercase tracking-widest mb-3 block">Speaks Native</span>
                <h4 className="text-[1.5rem] font-semibold text-[#1D1D1F] mb-5 leading-tight tracking-tight">Malayalam,<br />Manglish & English.</h4>
                <span className="px-3 py-1.5 bg-[#F5F5F7] text-[#424245] border border-[#E5E5EA] rounded-full text-[11px] font-semibold uppercase tracking-wider">Auto-Detect</span>
              </div>
            </motion.div>

            <motion.div initial="hidden" animate="visible" variants={fadeUp} transition={{ delay: 0.2 }}
              className="flex-1 bg-white border border-[#E5E5EA] shadow-[0_8px_30px_rgb(0,0,0,0.04)] rounded-[32px] p-8 flex flex-col justify-center items-center text-center relative overflow-hidden">
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

        {/* Mobile-only simple chat */}
        <div className="sm:hidden px-5 pb-8 relative z-10">
          <div className="bg-white rounded-[28px] border border-[#E5E5EA] shadow-[0_8px_30px_rgb(0,0,0,0.04)] p-6">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-9 h-9 rounded-full bg-[#1D1D1F] flex items-center justify-center">
                <Bot size={18} className="text-white" strokeWidth={1.5} />
              </div>
              <div>
                <p className="text-[14px] font-bold text-[#1D1D1F]">Faigen AI</p>
                <div className="flex items-center gap-1.5">
                  <div className="w-2 h-2 rounded-full bg-[#25D366] animate-pulse" />
                  <p className="text-[11px] font-medium text-[#86868B]">Online 24/7</p>
                </div>
              </div>
              {/* Try it nudge on mobile chat card */}
              <Link href="/try"
                className="ml-auto flex items-center gap-1 px-3 py-1.5 rounded-full bg-[#E8F5E9] border border-[#C8E6C9] text-[#2E7D32] text-[11px] font-bold">
                <span className="w-1.5 h-1.5 rounded-full bg-[#25D366] animate-pulse" />
                Try it
              </Link>
            </div>
            <div className="flex flex-col gap-3">
              <div className="bg-[#F5F5F7] text-[#1D1D1F] text-[13px] font-medium p-3.5 px-4 rounded-2xl rounded-tl-sm self-start max-w-[85%] leading-relaxed border border-[#E5E5EA]">
                I want to order 2 Coir Mats. Deliver to Ernakulam.
              </div>
              <div className="bg-[#E8F4FF] text-[#0066CC] text-[13px] font-medium p-3.5 px-4 rounded-2xl rounded-tr-sm self-end max-w-[85%] leading-relaxed border border-[#D1E8FF]">
                <span className="font-semibold">Order confirmed! 🎉</span><br />
                <span className="text-[#424245]">2× Coir Mat — ₹1,200. Delivery in 2-3 days.</span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}