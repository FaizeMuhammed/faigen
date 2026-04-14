'use client'

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Play, Plus, ThumbsUp, ThumbsDown, Copy, Send, CheckCircle2, Circle, Menu, X, Mail, ArrowRight } from "lucide-react";

/* ── DATA ─────────────────────────────────────────────────────── */

const HEADLINES = [
  { 
    line1: (
      <>
        You handle the <span className="relative inline-block z-10">
          business.
          <svg className="absolute -bottom-1 left-[-2%] w-[104%] h-4 md:h-5 z-[-1]" viewBox="0 0 200 20" preserveAspectRatio="none">
            <path d="M0,15 C50,12 150,12 200,8" stroke="#F8DA5D" strokeWidth="3" fill="none" />
            <path d="M15,19 C70,16 130,17 180,14" stroke="#F8DA5D" strokeWidth="2.5" fill="none" />
          </svg>
        </span>
      </>
    ), 
    line2: (
      <>
        We convert <span className="bg-[#FFD6EB] px-4 md:px-6 py-0 md:py-1 rounded-full inline-block leading-tight mt-1 md:mt-2">messages</span> into <span className="bg-[#DDF1E4] px-4 md:px-6 py-0 md:py-1 rounded-full inline-block leading-tight mt-1 md:mt-2">revenue.</span> ✨
      </>
    )
  },
  { 
    line1: (
      <>
        AI agents that <span className="relative inline-block z-10">
          reply instantly,
          <svg className="absolute -bottom-1 left-[-2%] w-[104%] h-4 md:h-5 z-[-1]" viewBox="0 0 200 20" preserveAspectRatio="none">
            <path d="M0,15 C50,12 150,12 200,8" stroke="#F8DA5D" strokeWidth="3" fill="none" />
            <path d="M15,19 C70,16 130,17 180,14" stroke="#F8DA5D" strokeWidth="2.5" fill="none" />
          </svg>
        </span>
      </>
    ), 
    line2: (
      <>
        sell <span className="bg-[#FFD6EB] px-4 md:px-6 py-0 md:py-1 rounded-full inline-block leading-tight mt-1 md:mt-2">continuously</span>, <span className="bg-[#DDF1E4] px-4 md:px-6 py-0 md:py-1 rounded-full inline-block leading-tight mt-1 md:mt-2">24/7.</span> 🚀
      </>
    )
  },
  { 
    line1: (
      <>
        Every <span className="relative inline-block z-10">
          unread message
          <svg className="absolute -bottom-1 left-[-2%] w-[104%] h-4 md:h-5 z-[-1]" viewBox="0 0 200 20" preserveAspectRatio="none">
            <path d="M0,15 C50,12 150,12 200,8" stroke="#F8DA5D" strokeWidth="3" fill="none" />
            <path d="M15,19 C70,16 130,17 180,14" stroke="#F8DA5D" strokeWidth="2.5" fill="none" />
          </svg>
        </span>
      </>
    ), 
    line2: (
      <>
        is a <span className="bg-[#FFD6EB] px-4 md:px-6 py-0 md:py-1 rounded-full inline-block leading-tight mt-1 md:mt-2">lost</span> <span className="bg-[#DDF1E4] px-4 md:px-6 py-0 md:py-1 rounded-full inline-block leading-tight mt-1 md:mt-2">customer.</span> 💡
      </>
    ) 
  },
];

const SUBTEXTS = [
  " ",
  "Faigen makes sure that never happens with zero chaos and seamless communication across multiple platforms.",
  "While others reply late, Faigen moves the conversation toward a sale.",
];

const CHATS = [
  {
    lang: "EN", flag: "🇬🇧",
    user: "Can you handle the midnight influx from the Instagram ad?",
    reply: "Sure. I've qualified {45 leads}, processed {12 WhatsApp orders}, and handed off {2 support tickets}. Anything else?",
  },
  {
    lang: "ML", flag: "🇮🇳",
    user: "രാത്രി Instagram പരസ്യത്തിൽ നിന്ന് enquiries handle ചെയ്തോ?",
    reply: "ഉവ്വ്. {45 leads} qualify ചെയ്തു, {12 orders} process ചെയ്തു, {2 tickets} team-ലേക്ക് കൈമാറി. വേറെ എന്തെങ്കിലും?",
  },
  {
    lang: "HI", flag: "🇮🇳",
    user: "रात को Instagram ad से आई enquiries handle हो गईं?",
    reply: "हाँ। {45 leads} qualify किए, {12 orders} process हुए, और {2 tickets} टीम को भेजे। कुछ और चाहिए?",
  },
  {
    lang: "TA", flag: "🇮🇳",
    user: "Instagram விளம்பரத்தில் இருந்து வந்த enquiries handle செய்தீர்களா?",
    reply: "{45 leads} தகுதிப்படுத்தப்பட்டனர், {12 orders} செயல்படுத்தப்பட்டன, {2 tickets} team-க்கு அனுப்பப்பட்டன. வேறு ஏதாவது?",
  },
  {
    lang: "AR", flag: "🇦🇪",
    user: "هل تمت معالجة الاستفسارات الواردة من إعلان Instagram الليلة؟",
    reply: "نعم. تم تأهيل {45 عميلاً}، ومعالجة {12 طلباً}، وإحالة {تذكرتين} للفريق. هل تحتاج شيئاً آخر؟",
  },
  {
    lang: "FR", flag: "🇫🇷",
    user: "Pouvez-vous gérer l'afflux de nuit de la pub Instagram ?",
    reply: "Bien sûr. J'ai qualifié {45 prospects}, traité {12 commandes} et transmis {2 tickets}. Autre chose ?",
  },
  {
    lang: "DE", flag: "🇩🇪",
    user: "Kannst du den nächtlichen Ansturm aus der Instagram-Anzeige bewältigen?",
    reply: "Klar. Ich habe {45 Leads} qualifiziert, {12 Bestellungen} bearbeitet und {2 Tickets} weitergeleitet. Noch etwas?",
  },
];

/* ── HELPERS ──────────────────────────────────────────────────── */

function BoldText({ text, dir }) {
  const parts = text.split(/\{([^}]+)\}/g);
  return (
    <p className="text-[14px] text-gray-800 font-medium leading-relaxed mb-4 pr-4" dir={dir}>
      {parts.map((p, i) =>
        i % 2 === 1
          ? <strong key={i} className="font-bold text-[#1A1A1A]">{p}</strong>
          : <span key={i}>{p}</span>
      )}
    </p>
  );
}

const slideUp = {
  enter:  { opacity: 0, y: 10 },
  center: { opacity: 1, y: 0,  transition: { duration: 0.32, ease: "easeOut" } },
  exit:   { opacity: 0, y: -10, transition: { duration: 0.2 } },
};

/* ── SHARED CHAT PANEL ────────────────────────────────────────── */

function ChatPanel({ chatIndex, setChatIndex, onOpenPopup, className = "" }) {
  const chat  = CHATS[chatIndex];
  const isRTL = chat.lang === "AR";

  return (
    <div className={`bg-[#EFEFEF] flex flex-col p-5 h-full ${className}`}>

      {/* Header */}
      <div className="flex items-center gap-2 mb-6">
        <h3 className="text-[14px] font-semibold text-gray-800">Faigen AI</h3>
        <AnimatePresence mode="wait">
          <motion.span
            key={chatIndex}
            initial={{ opacity: 0, scale: 0.85 }} animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.85 }} transition={{ duration: 0.18 }}
            className="text-[10px] font-black bg-white border border-gray-300 text-gray-500 px-2 py-0.5 uppercase tracking-widest"
          >
            {chat.flag} {chat.lang}
          </motion.span>
        </AnimatePresence>
        <div className="ml-auto flex items-center gap-1.5">
          <div className="w-1.5 h-1.5 bg-[#22C55E] rounded-full animate-pulse" />
          <span className="text-[10px] text-gray-500 font-medium">Live</span>
        </div>
      </div>

      {/* User message */}
      <AnimatePresence mode="wait">
        <motion.div
          key={`u-${chatIndex}`} variants={slideUp} initial="enter" animate="center" exit="exit"
          className="self-end bg-[#D4D4D4] text-gray-800 text-[13px] font-medium p-3 rounded-md max-w-[85%] mb-6 leading-relaxed"
          dir={isRTL ? "rtl" : "ltr"}
        >
          {chat.user}
        </motion.div>
      </AnimatePresence>

      {/* Action badge */}
      <div className="mb-2">
        <span className="bg-[#E4E0FA] text-[#6955E8] text-[10px] font-bold px-2 py-1 rounded-sm uppercase tracking-wider">
          Faigen Action
        </span>
      </div>

      {/* AI reply */}
      <AnimatePresence mode="wait">
        <motion.div key={`r-${chatIndex}`} variants={slideUp} initial="enter" animate="center" exit="exit">
          <BoldText text={chat.reply} dir={isRTL ? "rtl" : "ltr"} />
        </motion.div>
      </AnimatePresence>

      {/* Feedback icons */}
      <div className="flex items-center gap-3 text-gray-500 mb-auto">
        <ThumbsUp size={14} className="cursor-pointer hover:text-gray-800 transition-colors" />
        <ThumbsDown size={14} className="cursor-pointer hover:text-gray-800 transition-colors" />
        <Copy size={14} className="cursor-pointer hover:text-gray-800 transition-colors" />
      </div>

      {/* Language picker dots */}
      <div className="flex items-center gap-1 mb-3 mt-1 flex-wrap">
        {CHATS.map((c, i) => (
          <button key={i} onClick={() => setChatIndex(i)} title={`${c.flag} ${c.lang}`}
            className={`transition-all duration-300 ${i === chatIndex ? "w-4 h-1.5 bg-[#6955E8]" : "w-1.5 h-1.5 bg-gray-300 hover:bg-gray-400"}`}
          />
        ))}
      </div>

      {/* Input */}
      <div className="bg-white flex items-center gap-3 p-2.5 mt-1 shadow-sm border border-gray-200">
        <Plus size={18} className="text-gray-400 shrink-0" />
        <input type="text" placeholder="Ask anything" readOnly
          className="flex-1 outline-none text-[14px] text-gray-800 placeholder:text-gray-400 bg-transparent" />
        <button 
          onClick={onOpenPopup}
          className="bg-gray-100 p-1.5 rounded-sm text-gray-600 hover:bg-gray-200 transition-colors"
        >
          <Send size={14} />
        </button>
      </div>
    </div>
  );
}

/* ── COMPONENT ────────────────────────────────────────────────── */

export default function FaigenGridHero() {
  const [hlIndex,   setHlIndex]   = useState(0);
  const [chatIndex, setChatIndex] = useState(0);
  const [menuOpen,  setMenuOpen]  = useState(false);
  const [popupOpen, setPopupOpen] = useState(false);

  // Interval for changing the main text
  useEffect(() => {
    const t = setInterval(() => setHlIndex(p => (p + 1) % HEADLINES.length), 3800);
    return () => clearInterval(t);
  }, []);

  // Interval for changing the chat panel text
  useEffect(() => {
    const t = setInterval(() => setChatIndex(p => (p + 1) % CHATS.length), 3800);
    return () => clearInterval(t);
  }, []);

  const textV = {
    enter:  { opacity: 0, y: 28, filter: "blur(6px)" },
    center: { opacity: 1, y: 0,  filter: "blur(0px)", transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] } },
    exit:   { opacity: 0, y: -24, filter: "blur(4px)", transition: { duration: 0.35, ease: [0.4, 0, 1, 1] } },
  };
  
  const subV = {
    enter:  { opacity: 0, y: 14 },
    center: { opacity: 1, y: 0, transition: { duration: 0.5, delay: 0.15, ease: "easeOut" } },
    exit:   { opacity: 0, y: -10, transition: { duration: 0.25 } },
  };

  return (
    <section className="min-h-screen bg-white font-sans text-[#1A1A1A] flex flex-col selection:bg-blue-100">

      {/* ── DESIGNED POPUP MODAL ────────────────────────────────────────── */}
      <AnimatePresence>
        {popupOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/40 backdrop-blur-sm px-4"
            onClick={() => setPopupOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.95, y: 10, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.95, y: 10, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white rounded-2xl shadow-2xl w-full max-w-lg overflow-hidden relative"
            >
              {/* Colorful Header Strip */}
              <div className="h-28 bg-gradient-to-r from-[#FFD6EB] via-[#E4E0FA] to-[#DDF1E4] relative flex items-start justify-end p-4">
                <button
                  onClick={() => setPopupOpen(false)}
                  className="bg-white/40 hover:bg-white/80 p-2 rounded-full text-gray-800 transition-colors backdrop-blur-md"
                >
                  <X size={20} />
                </button>
              </div>

              {/* Main Content Area */}
              <div className="p-8 pt-6 relative">
                
                {/* Floating Icon overlapping header */}
                <div className="absolute -top-12 left-8 bg-white p-2 rounded-2xl shadow-sm border border-gray-100">
                  <div className="bg-[#2563EB] text-white p-4 rounded-xl shadow-inner">
                    <Send size={28} />
                  </div>
                </div>

                <div className="mt-8">
                  <span className="bg-gray-100 text-gray-600 text-[11px] font-bold px-3 py-1.5 rounded-full uppercase tracking-wider mb-4 inline-block">
                    Get in touch
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3 leading-tight">
                    Let's build something great.
                  </h3>
                  <p className="text-gray-600 mb-8 text-[15px] leading-relaxed pr-4">
                    Ready to automate your sales and customer support? Reach out to our team to see how Faigen can help scale your business 24/7.
                  </p>
                  
                  {/* Contact Information Card */}
                  <div className="bg-gray-50 border border-gray-200 rounded-xl p-5 flex items-center justify-between group hover:border-[#6955E8]/50 hover:bg-[#F9F8FF] transition-all duration-300">
                    <div className="flex items-center gap-4">
                      <div className="bg-white p-3 rounded-lg shadow-sm border border-gray-100 text-[#6955E8] group-hover:scale-105 transition-transform">
                        <Mail size={22} />
                      </div>
                      <div>
                        <p className="text-[11px] text-gray-500 font-bold uppercase tracking-widest mb-1">Email Us</p>
                        <a href="mailto:info@faigen.in" className="text-lg font-bold text-gray-900 group-hover:text-[#6955E8] transition-colors">
                          info@faigen.in
                        </a>
                      </div>
                    </div>
                    <a href="mailto:info@faigen.in" className="bg-[#E4E0FA] text-[#6955E8] p-2.5 rounded-lg hover:bg-[#d4cdfa] transition-colors">
                      <ArrowRight size={20} />
                    </a>
                  </div>

                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ── HEADER ─────────────────────────────────────────────── */}
      <header className="flex justify-between items-center px-6 md:px-12 py-6 max-w-[1400px] mx-auto w-full z-50">

        <div className="flex items-center gap-2 cursor-pointer">
          <img src="/logo.png" alt="Faigen Logo" className="h-8 md:h-10 w-auto object-contain" />
        </div>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-8 text-[15px] font-medium text-gray-800">
          <a href="#" className="font-semibold text-black hover:text-black transition-colors">Home</a>
          <button onClick={() => setPopupOpen(true)} className="hover:text-black transition-colors">Pricing</button>
          <button onClick={() => setPopupOpen(true)} className="hover:text-black transition-colors">About</button>
        </nav>

        <div className="hidden lg:flex items-center gap-3">
          <button onClick={() => setPopupOpen(true)} className="text-gray-600 text-[14px] font-semibold px-4 py-2.5 hover:text-black transition-colors">Sign in</button>
          <button onClick={() => setPopupOpen(true)} className="bg-gray-100 text-gray-900 px-5 py-2.5 text-[14px] font-semibold hover:bg-gray-200 transition-colors">Try it for free</button>
        </div>

        <button className="lg:hidden p-2 text-gray-700" onClick={() => setMenuOpen(v => !v)} aria-label="Menu">
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </header>

      {/* Mobile drawer */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -6 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.18 }}
            className="lg:hidden bg-white border-b border-gray-200 px-6 pb-5 flex flex-col z-40 text-left"
          >
            <a 
              href="#" 
              onClick={() => setMenuOpen(false)} 
              className="text-[15px] font-medium text-gray-700 py-3 border-b border-gray-100"
            >
              Home
            </a>
            <button 
              onClick={() => { setPopupOpen(true); setMenuOpen(false); }} 
              className="text-[15px] font-medium text-gray-700 py-3 border-b border-gray-100 text-left"
            >
              Pricing
            </button>
            <button 
              onClick={() => { setPopupOpen(true); setMenuOpen(false); }} 
              className="text-[15px] font-medium text-gray-700 py-3 border-b border-gray-100 text-left last:border-0"
            >
              About
            </button>
            
            <button onClick={() => { setPopupOpen(true); setMenuOpen(false); }} className="mt-4 bg-gray-100 text-gray-900 py-3 text-[14px] font-semibold hover:bg-gray-200 transition-colors">
              Try it for free
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ── HERO TEXT ───────────────────────────────────────────── */}
      <main className="flex flex-col items-center justify-center pt-16 pb-14 px-6 relative z-10 w-full max-w-[1200px] mx-auto text-center flex-1">

        <div className="relative w-full flex flex-col items-center mb-6 min-h-[160px] md:min-h-[220px]">
          <AnimatePresence mode="wait">
            <motion.h1
              key={hlIndex} variants={textV} initial="enter" animate="center" exit="exit"
              className="absolute top-0 left-0 right-0 text-[2.2rem] sm:text-[3.2rem] md:text-[4.2rem] lg:text-[4.8rem] font-medium leading-[1.25] tracking-tight text-[#1A1A1A]"
            >
              {HEADLINES[hlIndex].line1}<br />{HEADLINES[hlIndex].line2}
            </motion.h1>
          </AnimatePresence>
        </div>

        <div className="relative w-full max-w-2xl mx-auto min-h-[80px]">
          <AnimatePresence mode="wait">
            <motion.p
              key={hlIndex} variants={subV} initial="enter" animate="center" exit="exit"
              className="absolute top-0 left-0 right-0 text-gray-600 text-[14px] md:text-[16px] leading-relaxed"
            >
              {SUBTEXTS[hlIndex]}
            </motion.p>
          </AnimatePresence>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4, duration: 0.5 }}
          className="flex flex-wrap justify-center items-center gap-4 mt-8 md:mt-12"
        >
          <button onClick={() => setPopupOpen(true)} className="bg-[#2563EB] text-white px-7 py-3 rounded-md font-semibold text-[15px] hover:bg-blue-700 transition-all shadow-sm">
            Try it for free
          </button>
          <button onClick={() => setPopupOpen(true)} className="bg-white text-gray-800 border border-gray-200 px-7 py-3 rounded-md font-semibold text-[15px] hover:bg-gray-50 transition-colors flex items-center gap-2 shadow-sm">
            <Play size={16} className="text-gray-600" fill="currentColor" /> Watch demo
          </button>
        </motion.div>
      </main>
      
      {/* ══════════════════════════════════════════════════════════
          MOBILE  (< lg) — stacked layout, no horizontal scroll
      ══════════════════════════════════════════════════════════ */}
      <div className="lg:hidden w-full border-t border-gray-200">

        {/* Chat panel — full width */}
        <div style={{ minHeight: 420 }}>
          <ChatPanel chatIndex={chatIndex} setChatIndex={setChatIndex} onOpenPopup={() => setPopupOpen(true)} />
        </div>

        {/* Two info cards side by side */}
        <div className="grid grid-cols-2 border-t border-gray-200">

          <div className="border-r border-gray-200 bg-[#EFEFEF]/50 p-5 flex flex-col justify-center relative min-h-[170px]">
            <h4 className="text-[12px] font-bold text-gray-800 mb-3">3 Orders Processed</h4>
            <ul className="space-y-2.5">
              <li className="flex items-center gap-2 text-[12px] text-gray-800 font-medium">
                <CheckCircle2 size={13} className="text-[#2563EB] shrink-0" /> Payment Confirmed
              </li>
              <li className="flex items-center gap-2 text-[12px] text-gray-600">
                <Circle size={13} className="text-gray-300 shrink-0" /> CRM Synced
              </li>
              <li className="flex items-center gap-2 text-[12px] text-gray-600">
                <Circle size={13} className="text-gray-300 shrink-0" /> Invoice Sent
              </li>
            </ul>
            <span className="absolute bottom-3 right-3 text-[9px] font-semibold text-gray-400">3:17 AM</span>
          </div>

          <div className="bg-[#EFEFEF]/50 p-5 flex flex-col justify-center relative overflow-hidden min-h-[170px]">
            <h4 className="text-[12px] font-bold text-gray-800 mb-2">Drafted WhatsApp to Sarah J.</h4>
            <div className="relative h-16 overflow-hidden">
              <p className="text-[11px] text-gray-600 font-medium leading-relaxed">
                "Hi Sarah, just following up on your inquiry about the Sabine dress. We have size M in stock. Would you like to proceed with..."
              </p>
              <div className="absolute bottom-0 left-0 w-full h-8 bg-gradient-to-t from-[#F5F5F5] to-transparent" />
            </div>
            <div className="absolute bottom-3 left-5 flex items-center gap-1.5">
              <div className="w-1.5 h-1.5 bg-[#2563EB] rounded-full" />
              <span className="text-[9px] font-semibold text-[#2563EB]">Draft Ready</span>
            </div>
          </div>
        </div>
      </div>

      {/* ══════════════════════════════════════════════════════════
          DESKTOP  (lg+) — original pixel-perfect 5-col grid
      ══════════════════════════════════════════════════════════ */}
      <div className="hidden lg:block w-full border-t border-gray-200 mt-4">
        <div className="min-w-[1200px] grid grid-cols-5 w-full bg-white">

          {/* ROW 1 */}
          <div className="h-32 border-r border-b border-gray-200" />
          <div className="h-32 border-r border-b border-gray-200" />

          {/* CENTER CHAT */}
          <div className="border-r border-gray-200 row-span-3 h-[450px]">
            <ChatPanel chatIndex={chatIndex} setChatIndex={setChatIndex} onOpenPopup={() => setPopupOpen(true)} />
          </div>

          <div className="h-32 border-r border-b border-gray-200" />
          <div className="h-32 border-b border-gray-200" />

          {/* ROW 2 */}
          <div className="h-48 border-r border-b border-gray-200" />

          <div className="h-48 border-r border-b border-gray-200 bg-[#EFEFEF]/50 p-5 flex flex-col justify-center relative">
            <h4 className="text-[13px] font-bold text-gray-800 mb-3">3 Orders Processed</h4>
            <ul className="space-y-2.5">
              <li className="flex items-center gap-2 text-[13px] text-gray-800 font-medium">
                <CheckCircle2 size={14} className="text-[#2563EB]" /> Payment Confirmed
              </li>
              <li className="flex items-center gap-2 text-[13px] text-gray-600">
                <Circle size={14} className="text-gray-300" /> CRM Synced
              </li>
              <li className="flex items-center gap-2 text-[13px] text-gray-600">
                <Circle size={14} className="text-gray-300" /> Invoice Sent
              </li>
            </ul>
            <span className="absolute bottom-3 right-4 text-[9px] font-semibold text-gray-500">
              Auto-Logged at 3:17 AM
            </span>
          </div>

          <div className="h-48 border-r border-b border-gray-200 bg-[#EFEFEF]/50 p-5 flex flex-col justify-center relative overflow-hidden">
            <h4 className="text-[13px] font-bold text-gray-800 mb-2">Drafted WhatsApp to Sarah J.</h4>
            <div className="relative h-20 overflow-hidden">
              <p className="text-[12px] text-gray-600 font-medium leading-relaxed">
                "Hi Sarah, just following up on your inquiry about the Sabine dress. We have size M in stock. Would you like to proceed with..."
              </p>
              <div className="absolute bottom-0 left-0 w-full h-10 bg-gradient-to-t from-[#F5F5F5] to-transparent" />
            </div>
            <div className="absolute bottom-4 left-5 flex items-center gap-1.5">
              <div className="w-1.5 h-1.5 bg-[#2563EB] rounded-full" />
              <span className="text-[10px] font-semibold text-[#2563EB]">Draft Ready</span>
            </div>
          </div>

          <div className="h-48 border-b border-gray-200" />

          {/* ROW 3 */}
          <div className="h-32 border-r border-gray-200" />
          <div className="h-32 border-r border-gray-200" />
          <div className="h-32 border-r border-gray-200" />
          <div className="h-32" />

        </div>
      </div>

    </section>
  );
}