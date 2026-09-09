'use client'

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Menu, X, Mail, Check, Copy, ArrowRight,
  MessageSquare, ShoppingBag, KeyRound, Layers,
  Send, Code2, LayoutDashboard, Plus, Minus,
  Infinity, Ticket, Puzzle, Headset, Sliders
} from "lucide-react";
import Link from "next/link";
import FooterSection from "@/components/FooterSection";

const WhatsAppIcon = ({ size = 18, className = '' }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
)

const MetaIcon = ({ size = 15, className = '' }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M6.915 4.03c-1.968 0-3.683 1.28-4.871 3.113C.704 9.208 0 11.883 0 14.449c0 .706.07 1.369.21 1.973a6.624 6.624 0 00.265.86 5.297 5.297 0 00.371.761c.696 1.159 1.818 1.927 3.593 1.927 1.497 0 2.633-.671 3.965-2.444.76-1.012 1.144-1.626 2.663-4.32l.756-1.339.186-.325c.061.1.121.196.183.3l2.152 3.595c.724 1.21 1.665 2.556 2.47 3.314 1.046.987 1.992 1.22 3.06 1.22 1.075 0 1.876-.355 2.455-.843a3.743 3.743 0 00.81-.973c.542-.939.861-2.127.861-3.745 0-2.72-.681-5.357-2.084-7.45-1.282-1.912-2.957-2.93-4.716-2.93-1.047 0-2.088.467-3.053 1.308-.767.665-1.4 1.578-2.173 2.925L12 7.504l-.312-.54C10.432 5.455 9.07 4.03 6.915 4.03z" />
  </svg>
)

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } }
}
const stagger = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.07 } }
}

// ── What's actually included — matches the real product ─────────
// Note on "unlimited": the AI agent itself has no per-message charge, so
// unlimited conversations is accurate. Broadcast/OTP are billed per message
// by design (that's what funds sending them) — so those are described as
// "no monthly cap, billed per message" rather than "unlimited", which would
// be misleading for something that costs money per unit sent.
const CORE_FEATURES = [
  { icon: MessageSquare, title: "WhatsApp AI agent", text: "Replies in English, Manglish and Malayalam — auto-detected, zero configuration." },
  { icon: Infinity, title: "Unlimited conversations", text: "No cap on how many customers message you or how often — one flat monthly fee." },
  { icon: Sliders, title: "Custom AI training & guardrails", text: "Trained on your business's own rules, FAQs and tone, with restrictions to keep it from saying what it shouldn't." },
  { icon: ShoppingBag, title: "Order collection & catalog", text: "Collects name, product, quantity and address end-to-end, and answers from your own product catalog and FAQs." },
  { icon: Layers, title: "Custom services menu", text: "Native WhatsApp list and button menus tailored to what your business actually offers." },
  { icon: LayoutDashboard, title: "Admin dashboard", text: "Conversations, orders, templates and analytics in one place." },
]

const ADVANCED_FEATURES = [
  { icon: KeyRound, title: "OTP & authentication", text: "Send verification codes for logins, checkouts or account actions — no monthly cap, billed per message." },
  { icon: Send, title: "Broadcast campaigns", text: "Send marketing and update campaigns to your list — no monthly cap, billed per message, with delivery tracking." },
  { icon: Code2, title: "Full API access", text: "API keys and documentation to integrate messaging and orders into your own systems." },
]

// These are examples of what a custom build can include, not a fixed
// spec — the actual scope is worked out with each business individually.
const CUSTOM_FEATURES = [
  { icon: ShoppingBag, title: "Full WhatsApp commerce", text: "Browse, cart and checkout entirely inside chat — a complete storefront on WhatsApp." },
  { icon: Ticket, title: "Support workflows, e.g. ticketing", text: "From ticket systems to product care flows — built around whatever process your business already runs." },
  { icon: Puzzle, title: "Custom integrations", text: "Connect to your CRM, ERP, or any system you already run." },
  { icon: Headset, title: "Dedicated onboarding", text: "A build scoped and supported specifically for how your business actually works." },
]

const PLANS = [
  {
    id: "starter",
    name: "Starter",
    tagline: "The core AI agent, ready to sell and support",
    setup: 3999,
    monthly: 1499,
    highlight: false,
    custom: false,
    features: CORE_FEATURES,
    notIncluded: ADVANCED_FEATURES.map(f => f.title),
  },
  {
    id: "complete",
    name: "Complete",
    tagline: "Everything, including OTP, broadcasts and API access",
    setup: 5999,
    monthly: 1999,
    highlight: true,
    custom: false,
    features: [...CORE_FEATURES, ...ADVANCED_FEATURES],
    notIncluded: [],
  },
  {
    id: "custom",
    name: "Custom",
    tagline: "Full WhatsApp commerce or a support system, built for you",
    highlight: false,
    custom: true,
    features: CUSTOM_FEATURES,
    notIncluded: [],
  },
]

const USAGE = [
  { label: "Utility / OTP message", price: "₹0.20", sub: "per message" },
  { label: "Marketing message", price: "₹1.10", sub: "per message" },
]

const FAQS = [
  { q: "Is the setup fee really one time?", a: "Yes. You pay the setup fee for your plan once. The monthly fee covers continued service, hosting and support — no surprise charges." },
  { q: "Can the AI reply in Malayalam?", a: "Yes. It auto-detects how the customer writes — Malayalam script, Manglish, or English — and replies the same way. No configuration needed." },
  { q: "What are the broadcast message rates for?", a: "Utility/OTP and marketing messages sent beyond normal conversation are billed per message, shown above. Regular customer conversations aren't charged extra." },
  { q: "Does this include Meta's own WhatsApp charges?", a: "No. Meta bills your business directly for its own conversation costs, through the payment method on your Meta Business account. Our pricing is separate — for the AI agent, dashboard and API." },
  { q: "How quickly can I go live?", a: "Most businesses go live within 24-48 hours of setup. We configure the agent — you just share your product/service details." },
  { q: "Is there a free trial?", a: "We offer a live demo where you can see exactly how the AI behaves for a business like yours before you pay anything." },
]

function FAQItem({ question, answer, isOpen, onClick }) {
  return (
    <div className="border-b border-[#E5E5EA] py-5 last:border-0">
      <button className="w-full flex items-center justify-between text-left gap-4 group" onClick={onClick}>
        <span className="text-[15px] md:text-[17px] font-semibold text-[#1D1D1F] pr-4 group-hover:text-[#0066CC] transition-colors">
          {question}
        </span>
        <div className={`shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-colors ${isOpen ? 'bg-[#1D1D1F] text-white' : 'bg-[#F5F5F7] text-[#86868B] group-hover:bg-[#E5E5EA]'}`}>
          {isOpen ? <Minus size={14} /> : <Plus size={14} />}
        </div>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden"
          >
            <p className="pt-4 text-[#86868B] text-[14px] leading-relaxed font-medium max-w-2xl">{answer}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default function PricingPage() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [popupOpen, setPopupOpen] = useState(false)
  const [copied, setCopied] = useState(false)
  const [openFAQ, setOpenFAQ] = useState(0)

  const handleCopy = () => {
    navigator.clipboard.writeText("info@faigen.in")
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <main className="w-full min-h-screen bg-[#FBFBFD] font-sans text-[#1D1D1F] overflow-x-hidden selection:bg-[#0066CC] selection:text-white">

      {/* ── Request Access popup — same pattern as home page ── */}
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
                  <div className="w-12 h-12 rounded-2xl bg-[#F5F5F7] border border-[#E5E5EA] flex items-center justify-center text-[#1D1D1F]">
                    <MessageSquare size={20} strokeWidth={1.5} />
                  </div>
                  <button onClick={() => setPopupOpen(false)}
                    className="text-[#86868B] bg-[#F5F5F7] border border-[#E5E5EA] w-8 h-8 flex items-center justify-center rounded-full">
                    <X size={16} strokeWidth={2} />
                  </button>
                </div>
                <h3 className="text-[22px] font-semibold text-[#1D1D1F] tracking-tight mb-2">Get started</h3>
                <p className="text-[14px] text-[#86868B] leading-relaxed mb-8">
                  Tell us about your business and we&apos;ll get your AI agent live within 24-48 hours.
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

      {/* ── Header — same as home page ─────────────────────── */}
      <header className="sticky top-0 z-50 bg-[#FBFBFD]/90 backdrop-blur-2xl border-b border-[#E5E5EA]">
        <div className="max-w-[1500px] mx-auto flex justify-between items-center px-5 md:px-10 py-4">
          <Link href="/" className="flex items-center shrink-0">
            <img src="/logonew.png" alt="Faigen Logo" className="h-8 md:h-12 w-auto object-contain" />
          </Link>
          <nav className="hidden lg:flex items-center gap-8 text-[14px] font-medium text-[#86868B]">
            <Link href="/" className="hover:text-[#1D1D1F] transition-colors">Home</Link>
            <span className="text-[#1D1D1F] font-semibold">Pricing</span>
            <Link href="/use-cases" className="hover:text-[#1D1D1F] transition-colors">Use Cases</Link>
          </nav>
          <div className="hidden lg:flex items-center gap-3">
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
                <Link href="/" onClick={() => setMenuOpen(false)}
                  className="flex items-center justify-between text-[15px] font-medium text-[#1D1D1F] py-4 border-b border-[#F5F5F7]">
                  Home <ArrowRight size={16} className="text-[#86868B]" />
                </Link>
                <Link href="/use-cases" onClick={() => setMenuOpen(false)}
                  className="flex items-center justify-between text-[15px] font-medium text-[#1D1D1F] py-4 border-b border-[#F5F5F7]">
                  Use Cases <ArrowRight size={16} className="text-[#86868B]" />
                </Link>
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

      {/* ── Hero ───────────────────────────────────────────── */}
      <section className="relative pt-16 pb-10 md:pt-24 md:pb-14 px-5 max-w-[900px] mx-auto text-center">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[#0066CC] opacity-[0.04] blur-[120px] rounded-full pointer-events-none" />
        <motion.div initial="hidden" animate="visible" variants={fadeUp} className="relative z-10">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#E8F0FE] border border-[#C5D8F8] text-[#0066CC] text-[11px] font-bold mb-7">
            <MetaIcon size={11} /> Meta Verified Tech Provider
          </div>

          <h1 className="text-[2.6rem] sm:text-[3.4rem] md:text-[4.2rem] font-semibold leading-[1.05] tracking-tighter text-[#1D1D1F] mb-5">
            Simple plans. Everything<br />your business needs.
          </h1>
          <p className="text-[#86868B] text-[16px] md:text-[18px] font-medium leading-relaxed max-w-lg mx-auto">
            A WhatsApp AI agent that sells and supports 24/7 — pick the plan that fits, upgrade anytime.
          </p>
        </motion.div>
      </section>

      {/* ── Pricing plans ──────────────────────────────────── */}
      <section className="px-5 md:px-10 pb-16 max-w-[1200px] mx-auto">
        <motion.div
          initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.1 }} variants={stagger}
          className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-start"
        >
          {PLANS.map((plan) => (
            <motion.div
              key={plan.id}
              variants={fadeUp}
              className={`relative rounded-[32px] p-8 md:p-9 flex flex-col overflow-hidden ${
                plan.highlight
                  ? 'bg-[#1D1D1F] border border-[#1D1D1F] shadow-[0_20px_50px_-15px_rgba(0,0,0,0.25)]'
                  : 'bg-white border border-[#E5E5EA] shadow-[0_8px_30px_rgb(0,0,0,0.04)]'
              }`}
            >
              {plan.highlight && (
                <div className="absolute -top-16 -right-16 w-56 h-56 bg-[#0066CC] blur-[90px] rounded-full opacity-25 pointer-events-none" />
              )}

              <div className="relative z-10">
                <div className="flex items-center justify-between mb-5">
                  <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-bold ${
                    plan.highlight
                      ? 'bg-[#25D366]/15 text-[#4ade80] border border-[#25D366]/25'
                      : 'bg-[#F0FFF4] border border-[#C8E6C9] text-[#2E7D32]'
                  }`}>
                    <WhatsAppIcon size={11} className={plan.highlight ? 'text-[#4ade80]' : 'text-[#25D366]'} /> WhatsApp AI Agent
                  </span>
                  {plan.highlight && (
                    <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-white text-[#1D1D1F]">
                      Most complete
                    </span>
                  )}
                </div>

                <h3 className={`text-[22px] font-semibold tracking-tight mb-1 ${plan.highlight ? 'text-white' : 'text-[#1D1D1F]'}`}>
                  {plan.name}
                </h3>
                <p className={`text-[13.5px] font-medium mb-6 ${plan.highlight ? 'text-gray-400' : 'text-[#86868B]'}`}>
                  {plan.tagline}
                </p>

                {plan.custom ? (
                  <div className="mb-1">
                    <span className="text-[30px] font-semibold tracking-tighter leading-none text-[#1D1D1F]">
                      Let&apos;s talk
                    </span>
                  </div>
                ) : (
                  <div className="flex items-end gap-1.5 mb-1">
                    <span className={`text-[42px] font-semibold tracking-tighter leading-none ${plan.highlight ? 'text-white' : 'text-[#1D1D1F]'}`}>
                      ₹{plan.monthly.toLocaleString()}
                    </span>
                    <span className={`text-[12px] font-bold uppercase tracking-widest mb-1.5 ${plan.highlight ? 'text-gray-500' : 'text-[#86868B]'}`}>/mo</span>
                  </div>
                )}
                {plan.custom ? (
                  <p className="text-[13px] font-semibold text-[#86868B] mb-6">Priced after a quick call about your needs</p>
                ) : (
                  <p className={`text-[13px] font-semibold mb-6 ${plan.highlight ? 'text-[#60A5FA]' : 'text-[#0066CC]'}`}>
                    + ₹{plan.setup.toLocaleString()} setup <span className={plan.highlight ? 'text-gray-500 font-medium' : 'text-[#86868B] font-medium'}>(one time)</span>
                  </p>
                )}

                <button onClick={() => setPopupOpen(true)}
                  className={`w-full py-3.5 rounded-full text-[14.5px] font-semibold transition-colors mb-2 ${
                    plan.highlight ? 'bg-white text-[#1D1D1F] hover:bg-gray-100' : 'bg-[#1D1D1F] text-white hover:bg-black'
                  }`}>
                  {plan.custom ? 'Talk to Us' : 'Get Started'}
                </button>
                <p className={`text-center text-[12px] font-medium mb-6 ${plan.highlight ? 'text-gray-500' : 'text-[#86868B]'}`}>
                  {plan.custom ? 'We\'ll scope it with you first' : 'Live in 24-48 hours'}
                </p>

                <div className={`space-y-3.5 pt-5 border-t ${plan.highlight ? 'border-white/10' : 'border-[#E5E5EA]'}`}>
                  {plan.custom && (
                    <p className="text-[11px] font-bold uppercase tracking-widest text-[#86868B] mb-1">Examples of what we can build</p>
                  )}
                  {plan.features.map((item, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <div className={`shrink-0 w-7 h-7 rounded-lg flex items-center justify-center mt-0.5 ${plan.highlight ? 'bg-white/10' : 'bg-[#F5F5F7] border border-[#E5E5EA]'}`}>
                        <item.icon size={13} className={plan.highlight ? 'text-[#60A5FA]' : 'text-[#0066CC]'} />
                      </div>
                      <p className={`text-[13.5px] font-semibold leading-tight pt-1 ${plan.highlight ? 'text-gray-200' : 'text-[#1D1D1F]'}`}>{item.title}</p>
                    </div>
                  ))}
                </div>

                {plan.notIncluded.length > 0 && (
                  <div className="pt-4 mt-4 border-t border-[#E5E5EA] space-y-2">
                    {plan.notIncluded.map((item, i) => (
                      <div key={i} className="flex items-center gap-2.5 text-[12.5px] font-medium text-[#86868B]">
                        <X size={12} /> {item}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* ── Usage-based messaging ──────────────────────────── */}
      <section className="px-5 md:px-10 pb-16 max-w-[1000px] mx-auto">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.1 }} variants={fadeUp}>
          <h2 className="text-[1.6rem] md:text-[2rem] font-semibold tracking-tight text-[#1D1D1F] mb-2">
            Broadcast &amp; utility messaging
          </h2>
          <p className="text-[#86868B] text-[14px] font-medium mb-6 max-w-lg">
            Regular customer conversations aren&apos;t charged extra. These rates apply to marketing and utility/OTP messages beyond normal support.
          </p>
          <div className="bg-white border border-[#E5E5EA] rounded-[24px] overflow-hidden">
            {USAGE.map((row, i) => (
              <div key={i} className={`flex items-center justify-between px-6 md:px-8 py-5 ${i > 0 ? 'border-t border-[#E5E5EA]' : ''}`}>
                <span className="text-[14px] font-semibold text-[#1D1D1F]">{row.label}</span>
                <span className="text-[15px] font-bold text-[#0066CC]">{row.price} <span className="text-[12px] font-medium text-[#86868B]">{row.sub}</span></span>
              </div>
            ))}
          </div>
          <p className="text-[12.5px] text-[#86868B] font-medium mt-4 leading-relaxed">
            WhatsApp&apos;s own conversation charges are billed by Meta directly to your business&apos;s payment method, added during onboarding — separate from Faigen&apos;s pricing above.
          </p>
        </motion.div>
      </section>

      {/* ── FAQ ─────────────────────────────────────────────── */}
      <section className="py-14 max-w-[760px] mx-auto px-5 border-t border-[#E5E5EA]">
        <div className="text-center mb-10">
          <h2 className="text-[1.8rem] md:text-[2.4rem] font-semibold tracking-tighter text-[#1D1D1F]">Pricing FAQ</h2>
        </div>
        <div className="bg-white rounded-[28px] border border-[#E5E5EA] p-6 md:p-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
          {FAQS.map((faq, i) => (
            <FAQItem
              key={i}
              question={faq.q}
              answer={faq.a}
              isOpen={openFAQ === i}
              onClick={() => setOpenFAQ(openFAQ === i ? null : i)}
            />
          ))}
        </div>
      </section>

      {/* ── Final CTA ──────────────────────────────────────── */}
      <section className="py-16 px-5 md:px-10 max-w-[1200px] mx-auto">
        <motion.div
          initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.1 }} variants={fadeUp}
          className="bg-white border border-[#E5E5EA] rounded-[32px] p-10 md:p-16 text-center relative overflow-hidden"
        >
          <div className="absolute -top-20 -left-20 w-72 h-72 bg-[#0066CC] opacity-[0.05] blur-[100px] rounded-full pointer-events-none" />
          <div className="relative z-10">
            <h2 className="text-[2rem] md:text-[2.8rem] font-semibold leading-[1.1] tracking-tighter text-[#1D1D1F] mb-4">
              Ready to go live?
            </h2>
            <p className="text-[#86868B] text-[15px] md:text-[17px] mb-8 max-w-md mx-auto leading-relaxed font-medium">
              Try the live demo, or request access and we&apos;ll set everything up for you.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-3">
              <Link href="/try"
                className="bg-[#1D1D1F] text-white px-7 py-3.5 rounded-full font-semibold text-[15px] hover:bg-black transition-all flex items-center justify-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#25D366] animate-pulse" />
                Try Live Demo
              </Link>
              <button onClick={() => setPopupOpen(true)}
                className="bg-white text-[#1D1D1F] border border-[#D2D2D7] px-7 py-3.5 rounded-full font-semibold text-[15px] hover:bg-[#F5F5F7] transition-colors">
                Request Access
              </button>
            </div>
          </div>
        </motion.div>
      </section>

      <FooterSection />
    </main>
  )
}
