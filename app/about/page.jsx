'use client'

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Target, Heart, Zap, X, Copy, Check,
  ShieldCheck, ArrowRight, Menu, Bot
} from "lucide-react";
import Link from "next/link";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.12 } }
};

export default function AboutPage() {
  const [menuOpen, setMenuOpen]   = useState(false);
  const [popupOpen, setPopupOpen] = useState(false);
  const [copied, setCopied]       = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText("info@faigen.in");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="min-h-screen bg-[#FBFBFD] text-[#1D1D1F] font-sans selection:bg-[#0066CC] selection:text-white overflow-hidden">

      {/* Subtle background glow — same as hero */}
      <div className="fixed top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[#0066CC] opacity-[0.04] blur-[120px] rounded-full pointer-events-none z-0" />

      {/* ── MODAL — identical to hero/use-case ── */}
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
                  <div className="w-12 h-12 rounded-2xl flex items-center justify-center text-[#1D1D1F]">
                    <ShieldCheck size={24} strokeWidth={1.5} />
                  </div>
                  <button onClick={() => setPopupOpen(false)} className="text-[#86868B] hover:text-[#1D1D1F] bg-[#F5F5F7] border border-[#E5E5EA] w-8 h-8 flex items-center justify-center rounded-full transition-colors">
                    <X size={16} strokeWidth={2} />
                  </button>
                </div>
                <h3 className="text-[22px] font-semibold text-[#1D1D1F] tracking-tight mb-2">Get in Touch</h3>
                <p className="text-[14px] text-[#86868B] leading-relaxed mb-8">
                  Ready to automate your business? Contact our team to get started.
                </p>
                <div className="bg-[#F5F5F7] border border-[#E5E5EA] rounded-2xl p-4 flex items-center justify-between group hover:border-[#D2D2D7] transition-all">
                  <span className="text-[14px] font-semibold text-[#1D1D1F] px-2">info@faigen.in</span>
                  <button onClick={handleCopy} className={`p-3 rounded-xl transition-all ${copied ? 'bg-[#34C759] text-white' : 'bg-white text-[#86868B] border border-[#E5E5EA]'}`}>
                    {copied ? <Check size={16} strokeWidth={3} /> : <Copy size={16} />}
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ── HEADER — matches hero exactly ── */}
      <header className="sticky top-0 z-50 bg-[#FBFBFD]/80 backdrop-blur-2xl border-b border-[#E5E5EA]">
        <div className="max-w-[1500px] mx-auto px-6 md:px-10 py-5 flex justify-between items-center">
          <Link href="/">
            <img src="/logonew.png" alt="Faigen Logo" className="h-8 md:h-14 w-auto object-contain" />
          </Link>

          <nav className="hidden lg:flex items-center gap-10 text-[14px] font-medium text-[#86868B]">
            <Link href="/" className="hover:text-[#1D1D1F] transition-colors">Home</Link>
            <button onClick={() => setPopupOpen(true)} className="hover:text-[#1D1D1F] transition-colors">API Pricing</button>
            <Link href="/use-cases" className="hover:text-[#1D1D1F] transition-colors">Use Cases</Link>
            <span className="text-[#1D1D1F] font-semibold">About</span>
            <Link href="/contact" className="hover:text-[#1D1D1F] transition-colors">Contact Us</Link>
          </nav>

          <div className="hidden lg:flex items-center gap-6">
            <button onClick={() => setPopupOpen(true)} className="bg-[#1D1D1F] text-white px-5 py-2 text-[14px] font-semibold rounded-full hover:bg-black transition-colors">
              Get in Touch
            </button>
          </div>

          <button className="lg:hidden p-2 text-[#1D1D1F]" onClick={() => setMenuOpen(v => !v)}>
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </header>

      {/* Mobile drawer */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="lg:hidden fixed top-[73px] left-0 right-0 bg-white/95 backdrop-blur-3xl border-b border-[#E5E5EA] px-6 pb-8 flex flex-col z-40"
          >
            <Link href="/" className="text-[16px] font-medium text-[#86868B] py-5 border-b border-[#F5F5F7]">Home</Link>
            <button onClick={() => { setPopupOpen(true); setMenuOpen(false) }} className="text-[16px] font-medium text-[#1D1D1F] py-5 border-b border-[#F5F5F7] text-left">API Pricing</button>
            <Link href="/use-cases" className="text-[16px] font-medium text-[#86868B] py-5 border-b border-[#F5F5F7]">Use Cases</Link>
            <span className="text-[16px] font-bold text-[#1D1D1F] py-5 border-b border-[#F5F5F7]">About</span>
          </motion.div>
        )}
      </AnimatePresence>

      <main className="relative z-10">

        {/* ── HERO ── */}
        <section className="pt-20 pb-20 md:pt-32 md:pb-28 px-6 text-center flex flex-col items-center">
          <motion.div initial="hidden" animate="visible" variants={fadeUp} className="flex flex-col items-center">

            <div className="bg-white border border-[#E5E5EA] px-5 py-2 rounded-full shadow-sm text-[12px] font-bold text-[#86868B] mb-8 uppercase tracking-widest inline-flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#0066CC] animate-pulse" />
              Built in Kerala. Scaling across India.
            </div>

            <h1 className="text-[3rem] sm:text-[4.5rem] md:text-[5.5rem] font-semibold leading-[1.02] tracking-tighter text-[#1D1D1F] mb-8 max-w-5xl">
              We build AI agents that{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0066CC] to-[#3399FF]">
                work
              </span>{" "}
              while you sleep.
            </h1>

            <p className="max-w-2xl mx-auto text-[#86868B] text-[17px] md:text-[19px] leading-relaxed font-medium tracking-tight">
              Faigen is a Kerala-based AI automation agency helping businesses across India automate their customer conversations, orders, and operations using WhatsApp and Instagram.
            </p>
          </motion.div>
        </section>

        {/* ── OUR STORY ── */}
        <section className="max-w-[1400px] mx-auto px-6 md:px-12 pb-24">
          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={fadeUp}
            className="bg-white border border-[#E5E5EA] rounded-[40px] shadow-[0_8px_30px_rgb(0,0,0,0.04)] flex flex-col lg:flex-row overflow-hidden min-h-[560px]"
          >
            {/* Left — story text */}
            <div className="w-full lg:w-1/2 p-12 lg:p-16 flex flex-col justify-center border-b lg:border-b-0 lg:border-r border-[#E5E5EA]">
              <span className="text-[11px] font-bold text-[#0066CC] uppercase tracking-widest mb-6">Our Story</span>
              <h2 className="text-[2.5rem] md:text-[3.2rem] font-semibold leading-[1.1] tracking-tighter text-[#1D1D1F] mb-8">
                Born from a simple observation.
              </h2>
              <div className="space-y-5 text-[#86868B] text-[16px] md:text-[17px] leading-relaxed font-medium">
                <p>
                  Kerala businesses are brilliant at what they do, but lose customers every day because they can't respond fast enough on WhatsApp and Instagram. A customer asks about a product at midnight. Nobody replies. They go to a competitor.
                </p>
                <p>
                  We built Faigen to solve exactly that. Our AI agents never sleep, never miss a message, and speak your customer's language — whether it's a local boutique or a large agency.
                </p>
              </div>
              <div className="mt-10 pt-8 border-t border-[#E5E5EA]">
                <p className="text-[18px] font-semibold text-[#1D1D1F] tracking-tight italic">
                  "Your customers never sleep. Neither does our AI."
                </p>
              </div>
            </div>

            {/* Right — stat cards */}
            <div className="w-full lg:w-1/2 bg-[#F5F5F7] p-12 flex flex-col justify-center gap-6">
              {[
                { num: "24/7",   label: "Always online — no downtime, no missed messages" },
                { num: "3 days", label: "Average time from signup to going fully live" },
                { num: "3×",     label: "More leads converted vs traditional form-based flows" },
              ].map((stat, i) => (
                <div key={i} className="bg-white border border-[#E5E5EA] rounded-[24px] p-6 flex items-center gap-6 shadow-sm">
                  <span className="text-[2.5rem] font-semibold text-[#0066CC] tracking-tighter leading-none shrink-0 min-w-[90px]">{stat.num}</span>
                  <span className="text-[14px] font-medium text-[#86868B] leading-snug">{stat.label}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </section>

        {/* ── PHILOSOPHY ── */}
        <section className="max-w-[1400px] mx-auto px-6 md:px-12 pb-24">
          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={fadeUp}
            className="text-center mb-14"
          >
            <span className="text-[11px] font-bold text-[#86868B] uppercase tracking-widest mb-4 block">The Faigen Difference</span>
            <h2 className="text-[2.5rem] md:text-[4rem] font-semibold leading-[1.05] tracking-tighter text-[#1D1D1F]">
              Our philosophy.
            </h2>
          </motion.div>

          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
          >
            {[
              {
                icon: <Target size={28} className="text-[#0066CC]" />,
                title: "Built for Conversion",
                desc: "We don't just build chatbots that say hello. We engineer sales agents designed to qualify leads, showcase products, and close deals natively inside WhatsApp.",
                accent: "bg-[#E8F4FF]"
              },
              {
                icon: <Heart size={28} className="text-[#0066CC]" />,
                title: "Malayalam Native",
                desc: "Understanding context, colloquialisms, and regional nuances. Our models are deeply optimized to make your customers feel like they're talking to a local human.",
                accent: "bg-[#E8F4FF]"
              },
              {
                icon: <Zap size={28} className="text-[#0066CC]" />,
                title: "Frictionless Setup",
                desc: "No complex coding or messy integrations. We take your business data and hand you a fully trained, deployed AI agent within 48 hours.",
                accent: "bg-[#E8F4FF]"
              },
            ].map((card, i) => (
              <motion.div
                key={i} variants={fadeUp}
                className="bg-white border border-[#E5E5EA] rounded-[32px] p-10 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_12px_40px_rgb(0,0,0,0.07)] transition-all duration-300 flex flex-col"
              >
                <div className={`w-14 h-14 ${card.accent} rounded-2xl flex items-center justify-center mb-8 border border-[#D1E8FF]`}>
                  {card.icon}
                </div>
                <h3 className="text-[20px] font-semibold text-[#1D1D1F] mb-4 tracking-tight">{card.title}</h3>
                <p className="text-[#86868B] text-[15px] leading-relaxed font-medium">{card.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </section>

        {/* ── TEAM / FOUNDER NOTE ── */}
        <section className="max-w-[1400px] mx-auto px-6 md:px-12 pb-24">
          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={fadeUp}
            className="bg-[#1D1D1F] rounded-[40px] p-12 md:p-20 relative overflow-hidden"
          >
            {/* Subtle glow */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-[#0066CC] blur-[150px] rounded-full z-0 opacity-20 pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#3399FF] blur-[120px] rounded-full z-0 opacity-10 pointer-events-none" />

            <div className="relative z-10 flex flex-col lg:flex-row items-start lg:items-center gap-12">
              <div className="flex-1">
                <span className="text-[11px] font-bold text-[#86868B] uppercase tracking-widest mb-6 block">From the founder</span>
                <h2 className="text-[2.2rem] md:text-[3rem] font-semibold leading-[1.1] tracking-tighter text-white mb-6">
                  We are not just building software. We're building the future of how Kerala businesses operate.
                </h2>
                <p className="text-[#86868B] text-[16px] md:text-[17px] leading-relaxed font-medium max-w-2xl">
                  Every feature in Faigen was born from a real problem we saw a Kerala business face. Our goal is simple — make AI accessible, affordable, and actually useful for every SMB, not just the big players.
                </p>
              </div>

              <div className="shrink-0 flex flex-col items-center gap-4">
                <div className="w-20 h-20 rounded-[24px] bg-[#0066CC]/20 border border-[#0066CC]/30 flex items-center justify-center">
                  <Bot size={36} strokeWidth={1} className="text-[#3399FF]" />
                </div>
                <div className="text-center">
                  <p className="text-white font-semibold text-[15px]">Faige Basheer</p>
                  <p className="text-[#86868B] text-[13px] font-medium">Founder, Faigen</p>
                </div>
              </div>
            </div>
          </motion.div>
        </section>

        {/* ── CTA ── */}
        <section className="max-w-[1400px] mx-auto px-6 md:px-12 pb-24">
          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={fadeUp}
            className="bg-white border border-[#E5E5EA] rounded-[40px] p-12 md:p-20 text-center shadow-[0_8px_30px_rgb(0,0,0,0.04)]"
          >
            <h2 className="text-[2.5rem] md:text-[4rem] font-semibold tracking-tighter text-[#1D1D1F] mb-6">
              Ready to{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0066CC] to-[#3399FF]">automate?</span>
            </h2>
            <p className="text-[#86868B] text-[17px] mb-10 max-w-lg mx-auto font-medium leading-relaxed">
              Join Kerala businesses already using Faigen to scale operations and never miss a customer again.
            </p>
            <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
              <button onClick={() => setPopupOpen(true)} className="bg-[#1D1D1F] text-white px-8 py-4 rounded-full font-semibold text-[15px] hover:bg-black transition-all flex items-center gap-2 shadow-lg shadow-black/10">
                Get Started <ArrowRight size={18} />
              </button>
              <button onClick={() => setPopupOpen(true)} className="bg-white text-[#1D1D1F] border border-[#D2D2D7] px-8 py-4 rounded-full font-semibold text-[15px] hover:bg-[#F5F5F7] transition-colors">
                Contact Sales
              </button>
            </div>
          </motion.div>
        </section>

      </main>

      {/* ── FOOTER ── */}
      <footer className="border-t border-[#E5E5EA] py-10 text-center bg-white relative z-10">
        <div className="max-w-[1400px] mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
         
          <div className="flex gap-6 text-[12px] text-[#86868B] font-bold uppercase tracking-widest">
            <Link href="/privacy" className="hover:text-[#0066CC] transition-colors">Privacy</Link>
            <Link href="/terms" className="hover:text-[#0066CC] transition-colors">Terms</Link>
            <button onClick={() => setPopupOpen(true)} className="hover:text-[#0066CC] transition-colors">Contact</button>
          </div>
        </div>
      </footer>

    </div>
  );
}