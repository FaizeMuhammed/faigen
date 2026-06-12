'use client'

import React from "react";
import { motion } from "framer-motion";
import {
  MessageCircle, CheckCircle2, ShoppingBag,
  Send, Bot, Megaphone, Package, Zap
} from "lucide-react";

// ── WhatsApp Icon ─────────────────────────────────────────────
const WhatsAppIcon = ({ size = 20, className = '' }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
  </svg>
)

// ── Instagram Icon ────────────────────────────────────────────
const InstagramIcon = ({ size = 20, className = '' }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
  </svg>
)

export default function AgentifiedSection() {
  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
  }

  const float = (delay) => ({
    animate: { y: [-3, 3, -3], transition: { duration: 4, repeat: Infinity, ease: "easeInOut", delay } }
  })

  return (
    <section className="w-full bg-white py-24 md:py-32 font-sans text-[#1A1A1A] overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-4 md:px-8">

        {/* Header */}
        <motion.div
          initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={fadeUp}
          className="flex flex-col items-center text-center mb-16"
        >
          <div className="bg-gray-50 border border-gray-200 px-5 py-2 rounded-full shadow-sm text-[12px] font-bold text-gray-700 mb-8 uppercase tracking-widest">
            What We Do
          </div>
          <h2 className="text-[2.8rem] md:text-[4.5rem] font-medium leading-[1.05] tracking-tight text-[#1A1A1A] mb-6 max-w-4xl">
            Your AI agent that sells,<br /> supports & broadcasts.
          </h2>
          <p className="text-gray-500 text-[16px] md:text-[18px] font-medium max-w-3xl leading-relaxed">
            Agentified deploys intelligent WhatsApp & Instagram bots for your business — taking orders, answering queries, sending campaigns and more, all without lifting a finger.
          </p>
        </motion.div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 h-auto lg:h-[650px]">

          {/* CARD 1: Auto Order Taking (Left Tall Card) */}
          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
            className="lg:col-span-4 bg-[#F8FAFC] rounded-[2rem] overflow-hidden shadow-[0_20px_50px_-15px_rgba(0,0,0,0.05)] border border-gray-100 relative flex flex-col h-[500px] lg:h-full"
          >
            {/* Background Image */}
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: "url('https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=800&auto=format&fit=crop')" }}
            />
            {/* Fade */}
            <div className="absolute inset-x-0 bottom-0 h-[65%] bg-gradient-to-t from-white via-white/95 to-transparent z-10" />

            {/* WhatsApp Chat bubbles */}
            <div className="relative z-20 p-6 flex flex-col gap-3 mt-10">
              <div className="bg-blue-500 text-white text-[13px] font-medium p-4 rounded-2xl rounded-tr-sm shadow-md self-end max-w-[85%] leading-relaxed">
                I want to order 2 Premium Coir Mats. Deliver to Ernakulam.
              </div>
              <div className="bg-white/40 backdrop-blur-md border border-white/60 text-gray-900 text-[13px] font-medium p-4 rounded-2xl rounded-tl-sm shadow-[0_10px_30px_rgba(0,0,0,0.08)] self-start max-w-[90%] leading-relaxed">
                <span className="font-bold">Order confirmed! 🎉</span><br/>
                2× Premium Coir Mat — ₹1,200<br/>
                Delivery to Ernakulam in 2-3 days.
              </div>
            </div>

            {/* Text */}
            <div className="relative z-20 mt-auto p-8 pt-0">
              <h3 className="text-[2rem] font-medium leading-tight text-[#1A1A1A] mb-3 tracking-tight">
                Auto order<br/> taking
              </h3>
              <p className="text-gray-500 text-[15px] font-medium leading-relaxed pr-4">
                Your AI agent takes orders directly in WhatsApp chat — no forms, no apps, no friction for the customer.
              </p>
            </div>
          </motion.div>

          {/* RIGHT COLUMN */}
          <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-8 gap-6 h-full">

            {/* TOP ROW */}

            {/* CARD 2: Malayalam / Manglish / English */}
            <motion.div
              initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} transition={{ delay: 0.1 }}
              className="md:col-span-5 bg-[#F8FAFC] rounded-[2rem] border border-gray-100 p-6 md:p-8 shadow-[0_20px_50px_-15px_rgba(0,0,0,0.05)] relative overflow-hidden flex flex-col justify-center min-h-[280px]"
            >
              {/* Watermark */}
              <div className="absolute -right-6 -bottom-12 text-[200px] font-black text-gray-200/60 leading-none select-none pointer-events-none tracking-tighter">
                അ
              </div>

              <div className="relative z-10 w-full flex flex-col justify-center h-full">
                {/* Language Pills */}
                <div className="flex flex-wrap items-center gap-2.5 mb-6">
                  <span className="text-[10px] font-black text-gray-500 uppercase tracking-widest border border-gray-200 px-2.5 py-1.5 rounded-md bg-white shadow-sm">
                    Auto-Detect
                  </span>
                  <motion.div variants={float(0)} animate="animate" className="px-2.5 py-1.5 bg-blue-50 text-blue-600 border border-blue-100 text-[11px] font-bold rounded-md shadow-sm">
                    മലയാളം
                  </motion.div>
                  <motion.div variants={float(1)} animate="animate" className="px-2.5 py-1.5 bg-rose-50 text-rose-600 border border-rose-100 text-[11px] font-bold rounded-md shadow-sm">
                    Manglish
                  </motion.div>
                  <motion.div variants={float(0.5)} animate="animate" className="px-2.5 py-1.5 bg-emerald-50 text-emerald-600 border border-emerald-100 text-[11px] font-bold rounded-md shadow-sm">
                    English
                  </motion.div>
                </div>

                {/* Typography Block */}
                <h3 className="flex flex-col text-left">
                  <span className="text-[3rem] lg:text-[3.8rem] font-light text-gray-400 leading-[0.85] tracking-tight">Speaks</span>
                  <span className="text-[3.8rem] lg:text-[4.8rem] font-black text-[#1A1A1A] leading-[0.9] tracking-tighter uppercase">Your</span>
                  <span className="text-[3rem] lg:text-[4rem] font-semibold text-[#2563EB] leading-[0.9] tracking-tight -ml-1">Language.</span>
                </h3>
              </div>
            </motion.div>

            {/* CARD 3: Stat — Orders Automated */}
            <motion.div
              initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} transition={{ delay: 0.2 }}
              className="md:col-span-3 bg-[#F8FAFC] border border-gray-100 rounded-[2rem] p-8 shadow-[0_20px_50px_-15px_rgba(0,0,0,0.05)] flex flex-col items-center justify-center text-center h-[280px] lg:h-auto"
            >
              
              <div className="w-16 h-16 rounded-[1.2rem]  flex items-center justify-center mb-6">
                <ShoppingBag className="text-[#16a34a]" size={28} strokeWidth={1.5} />
              </div>
              <h3 className="text-[3.2rem] font-medium tracking-tight text-[#1A1A1A] leading-none mb-1">
                24/7
              </h3>
              <p className="text-[13px] font-semibold text-gray-500 uppercase tracking-widest mt-1">
                Always Online
              </p>
              <p className="text-[12px] text-gray-400 mt-2 leading-relaxed max-w-[140px]">
                Never miss a customer message again
              </p>
            </motion.div>

            {/* BOTTOM ROW */}

            {/* CARD 4: What agent can do */}
            <motion.div
              initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} transition={{ delay: 0.3 }}
              className="md:col-span-4 rounded-[2rem] p-8 shadow-[0_20px_50px_-15px_rgba(0,0,0,0.05)] border border-gray-100 flex flex-col justify-between h-[280px] lg:h-auto relative overflow-hidden"
            >
              {/* Pastel Background */}
              <div className="absolute inset-0 bg-[#F8FAFC] z-0" />
              <div className="absolute -top-10 -left-10 w-48 h-48 bg-[#BBF7D0] blur-[60px] rounded-full z-0 opacity-70" />
              <div className="absolute top-10 -right-10 w-48 h-48 bg-[#BAE6FD] blur-[60px] rounded-full z-0 opacity-60" />
              <div className="absolute -bottom-10 left-1/2 w-48 h-48 bg-[#FDE68A] blur-[60px] rounded-full z-0 opacity-50" />

              {/* Task pills */}
              <div className="relative z-10 flex flex-col gap-3 mt-2">
                <div className="bg-white/90 backdrop-blur-md rounded-xl shadow-[0_8px_15px_rgba(0,0,0,0.04)] p-3 px-4 flex items-center gap-3 w-fit border border-white">
                  <div className="w-5 h-5 rounded-full bg-[#25D366] text-white flex items-center justify-center shrink-0">
                    <CheckCircle2 size={12} />
                  </div>
                  <span className="text-[13px] font-bold text-gray-800">Take & confirm orders instantly</span>
                </div>

                <div className="bg-white/90 backdrop-blur-md rounded-xl shadow-[0_8px_15px_rgba(0,0,0,0.04)] p-3 px-4 flex items-center gap-3 w-fit ml-6 border border-white">
                  <div className="w-5 h-5 rounded-full bg-[#2563EB] text-white flex items-center justify-center shrink-0">
                    <CheckCircle2 size={12} />
                  </div>
                  <span className="text-[13px] font-bold text-gray-800">Send bulk promo campaigns</span>
                </div>

                <div className="bg-white/90 backdrop-blur-md rounded-xl shadow-[0_8px_15px_rgba(0,0,0,0.04)] p-3 px-4 flex items-center gap-3 w-fit border border-white">
                  <div className="w-5 h-5 rounded-full bg-[#f57c00] text-white flex items-center justify-center shrink-0">
                    <CheckCircle2 size={12} />
                  </div>
                  <span className="text-[13px] font-bold text-gray-800">Answer FAQs & product queries</span>
                </div>
              </div>

              <div className="relative z-10 mt-auto">
                <p className="text-[12px] font-bold text-gray-500 mb-1 uppercase tracking-wider">Fully automated</p>
                <h3 className="text-[1.8rem] font-medium tracking-tight text-[#1A1A1A] leading-none">
                  Works for you
                </h3>
              </div>
            </motion.div>

            {/* CARD 5: Omni Channel — WA + IG */}
            <motion.div
              initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} transition={{ delay: 0.4 }}
              className="md:col-span-4 bg-[#F8FAFC] rounded-[2rem] border border-gray-100 p-8 shadow-[0_20px_50px_-15px_rgba(0,0,0,0.05)] flex flex-col h-[280px] lg:h-auto relative overflow-hidden"
            >
              {/* Text */}
              <div className="relative z-20">
                <p className="text-[12px] font-bold text-gray-500 mb-1 uppercase tracking-wider">WhatsApp & Instagram</p>
                <h3 className="text-[1.8rem] font-medium tracking-tight text-[#1A1A1A] leading-none">
                  Both platforms,<br/>one agent.
                </h3>
              </div>

              {/* Decorative Concentric Circles */}
              <div className="absolute -bottom-[20%] -right-[10%] w-[350px] h-[350px] pointer-events-none">
                <svg viewBox="0 0 100 100" className="absolute inset-0 w-full h-full opacity-10">
                  <circle cx="100" cy="100" r="80" stroke="#1A1A1A" strokeWidth="0.75" fill="none" />
                  <circle cx="100" cy="100" r="60" stroke="#1A1A1A" strokeWidth="0.75" fill="none" />
                  <circle cx="100" cy="100" r="40" stroke="#1A1A1A" strokeWidth="0.75" fill="none" />
                  <circle cx="100" cy="100" r="20" fill="#E5E7EB" />
                </svg>

                {/* Platform icons on rings */}
                <div className="absolute top-[12%] left-[60%] bg-white rounded-full p-3 shadow-[0_8px_20px_rgba(0,0,0,0.08)] border border-gray-100">
                  <WhatsAppIcon size={20} className="text-[#25D366]" />
                </div>

                <div className="absolute top-[42%] left-[26%] bg-white rounded-full p-3 shadow-[0_8px_20px_rgba(0,0,0,0.08)] border border-gray-100">
                  <InstagramIcon size={20} className="text-[#E1306C]" />
                </div>

                <div className="absolute top-[72%] left-[4%] bg-white rounded-full p-3 shadow-[0_8px_20px_rgba(0,0,0,0.08)] border border-gray-100">
                  <Megaphone size={20} className="text-[#7c3aed]" />
                </div>

                <div className="absolute top-[82%] left-[58%] bg-white rounded-full p-3 shadow-[0_8px_20px_rgba(0,0,0,0.08)] border border-gray-100">
                  <Bot size={20} className="text-[#2563EB]" />
                </div>
              </div>
            </motion.div>

          </div>
        </div>

      </div>
    </section>
  )
}