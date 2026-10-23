'use client'

import React from "react";
import { motion } from "framer-motion";
import {
  MessageSquare, Sparkles, CheckCircle2, LayoutDashboard, ArrowRight,
  Globe, Mail, Wand2, FileText, Users2, ChevronRight
} from "lucide-react";
import Link from "next/link";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } }
}
const stagger = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.08 } }
}

// ── How the core AI agent actually works, step by step ───────────
const WORKFLOW = [
  { icon: MessageSquare, title: "Customer messages", text: "In Malayalam, Manglish or English — on WhatsApp, your website, or Instagram." },
  { icon: Sparkles, title: "AI understands", text: "Detects language and intent automatically — no menus to navigate." },
  { icon: CheckCircle2, title: "AI resolves", text: "Answers FAQs, takes the order, or hands off to your team when it should." },
  { icon: LayoutDashboard, title: "You see everything", text: "Every conversation, order and lead logged in one dashboard." },
]

// ── Services — WhatsApp is the proven flagship, the rest are the
// same underlying AI applied to a different part of the business ──
const SERVICES = [
  {
    icon: MessageSquare, live: true,
    title: "WhatsApp AI Agent", text: "Sells and supports your customers 24/7 on WhatsApp.",
    href: "/pricing"
  },
  {
    icon: Globe, live: false,
    title: "Website Chat Agent", text: "The same trained AI, answering questions right on your site.",
  },
  {
    icon: Mail, live: false,
    title: "Email Automation", text: "Drafts replies, sorts your inbox, and follows up on quotes that went cold.",
  },
  {
    icon: Wand2, live: false,
    title: "Custom AI Agents", text: "Bespoke internal tools built around exactly how your business runs.",
  },
  {
    icon: FileText, live: false,
    title: "Document Automation", text: "Photo or PDF in, structured data out — invoices, receipts, forms.",
  },
  {
    icon: Users2, live: false,
    title: "Lead Follow-up", text: "Automatic nurture sequences so a cold lead doesn't stay cold.",
  },
]

export default function ServicesSection() {
  return (
    <section className="w-full bg-[#FBFBFD] py-20 md:py-28 font-sans text-[#1D1D1F] border-t border-[#E5E5EA]">
      <div className="max-w-[1300px] mx-auto px-5 md:px-10">

        {/* ── How it works ───────────────────────────────────── */}
        <motion.div
          initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.1 }} variants={fadeUp}
          className="text-center mb-16 md:mb-20"
        >
          <span className="inline-flex items-center px-3.5 py-1.5 rounded-full bg-[#F5F5F7] border border-[#E5E5EA] text-[#86868B] text-[11px] font-bold uppercase tracking-widest mb-5">
            How it works
          </span>
          <h2 className="text-[2rem] sm:text-[2.6rem] md:text-[3.2rem] font-semibold tracking-tighter leading-[1.1] mb-4">
            One AI, doing the work<br className="hidden md:block" /> of a full-time reply.
          </h2>
        </motion.div>

        <motion.div
          initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.1 }} variants={stagger}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-3 mb-24 md:mb-28 relative"
        >
          {WORKFLOW.map((step, i) => (
            <motion.div key={i} variants={fadeUp} className="relative flex flex-col items-center text-center px-2">
              {i < WORKFLOW.length - 1 && (
                <div className="hidden lg:block absolute top-7 left-[calc(50%+32px)] w-[calc(100%-64px)] h-px bg-[#E5E5EA]" />
              )}
              <div className="relative z-10 w-14 h-14 rounded-2xl bg-white border border-[#E5E5EA] shadow-[0_8px_24px_rgb(0,0,0,0.04)] flex items-center justify-center mb-5">
                <step.icon size={22} className="text-[#0066CC]" strokeWidth={1.75} />
              </div>
              <span className="text-[11px] font-bold text-[#0066CC] uppercase tracking-widest mb-1.5">Step {i + 1}</span>
              <h3 className="text-[15.5px] font-semibold text-[#1D1D1F] mb-1.5">{step.title}</h3>
              <p className="text-[13px] text-[#86868B] font-medium leading-relaxed max-w-[220px]">{step.text}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* ── Services ───────────────────────────────────────── */}
        <motion.div
          initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.1 }} variants={fadeUp}
          className="text-center mb-12"
        >
          <span className="inline-flex items-center px-3.5 py-1.5 rounded-full bg-[#F5F5F7] border border-[#E5E5EA] text-[#86868B] text-[11px] font-bold uppercase tracking-widest mb-5">
            What we build
          </span>
          <h2 className="text-[2rem] sm:text-[2.6rem] md:text-[3.2rem] font-semibold tracking-tighter leading-[1.1] mb-4">
            WhatsApp is where we started.<br className="hidden md:block" /> It&apos;s not where we stop.
          </h2>
          <p className="text-[#86868B] text-[15px] md:text-[16px] font-medium max-w-xl mx-auto leading-relaxed">
            The same AI, trained on your business, applied wherever it saves you time.
          </p>
        </motion.div>

        <motion.div
          initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.05 }} variants={stagger}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-16"
        >
          {SERVICES.map((s, i) => {
            const Card = (
              <div className={`h-full bg-white border rounded-[24px] p-6 md:p-7 transition-all ${
                s.live ? 'border-[#0066CC]/25 shadow-[0_8px_30px_rgb(0,0,0,0.05)]' : 'border-[#E5E5EA] hover:border-[#D2D2D7] shadow-[0_8px_30px_rgb(0,0,0,0.03)]'
              }`}>
                <div className="flex items-start justify-between mb-5">
                  <div className="w-11 h-11 rounded-xl bg-[#F5F5F7] border border-[#E5E5EA] flex items-center justify-center">
                    <s.icon size={19} className="text-[#0066CC]" strokeWidth={1.75} />
                  </div>
                  {s.live ? (
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[#F0FFF4] border border-[#C8E6C9] text-[#2E7D32] text-[10px] font-bold uppercase tracking-wide">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#25D366] animate-pulse" /> Live now
                    </span>
                  ) : (
                    <span className="px-2.5 py-1 rounded-full bg-[#F5F5F7] border border-[#E5E5EA] text-[#86868B] text-[10px] font-bold uppercase tracking-wide">
                      On request
                    </span>
                  )}
                </div>
                <h3 className="text-[16.5px] font-semibold text-[#1D1D1F] mb-2 flex items-center gap-1.5">
                  {s.title}
                  {s.live && <ChevronRight size={15} className="text-[#0066CC]" />}
                </h3>
                <p className="text-[13.5px] text-[#86868B] font-medium leading-relaxed">{s.text}</p>
              </div>
            )
            return (
              <motion.div key={i} variants={fadeUp}>
                {s.href ? <Link href={s.href}>{Card}</Link> : Card}
              </motion.div>
            )
          })}
        </motion.div>

        {/* ── Honest multi-model AI note — generic marks, no third-party logos ── */}
        <motion.div
          initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.1 }} variants={fadeUp}
          className="flex flex-col items-center text-center gap-4 pt-10 border-t border-[#E5E5EA]"
        >
          <p className="text-[11px] font-bold text-[#86868B] uppercase tracking-widest">Runs on leading AI models</p>
          <div className="flex items-center gap-3 flex-wrap justify-center">
            {[
              { name: "Claude", color: "#7C3AED" },
              { name: "Gemini", color: "#0066CC" },
              { name: "GPT",    color: "#25D366" },
            ].map((m) => (
              <span key={m.name} className="inline-flex items-center gap-2 px-3.5 py-2 rounded-full bg-white border border-[#E5E5EA] shadow-[0_2px_8px_rgb(0,0,0,0.03)]">
                <span className="w-2 h-2 rounded-full" style={{ backgroundColor: m.color }} />
                <span className="text-[13px] font-semibold text-[#1D1D1F]">{m.name}</span>
              </span>
            ))}
          </div>
          <p className="text-[13px] text-[#86868B] font-medium max-w-sm">Whichever model fits your business best, running under the hood — you never have to choose.</p>
        </motion.div>

      </div>
    </section>
  )
}
