'use client'

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Shield, Mail, ArrowRight, Plus, Minus,
  Smartphone, Menu, X, CheckCircle2, Clock,
  Heart, Star, Check, BadgeCheck, Bot,
  Package, ShoppingBag, BarChart2, Users,
  Infinity, Zap, MessageSquare, Hash
} from "lucide-react";

// ── Icons ─────────────────────────────────────────────────────
const WhatsAppIcon = ({ size = 18, className = '' }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
  </svg>
)

const MetaIcon = ({ size = 13, className = '' }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M6.915 4.03c-1.968 0-3.683 1.28-4.871 3.113C.704 9.208 0 11.883 0 14.449c0 .706.07 1.369.21 1.973a6.624 6.624 0 00.265.86 5.297 5.297 0 00.371.761c.696 1.159 1.818 1.927 3.593 1.927 1.497 0 2.633-.671 3.965-2.444.76-1.012 1.144-1.626 2.663-4.32l.756-1.339.186-.325c.061.1.121.196.183.3l2.152 3.595c.724 1.21 1.665 2.556 2.47 3.314 1.046.987 1.992 1.22 3.06 1.22 1.075 0 1.876-.355 2.455-.843a3.743 3.743 0 00.81-.973c.542-.939.861-2.127.861-3.745 0-2.72-.681-5.357-2.084-7.45-1.282-1.912-2.957-2.93-4.716-2.93-1.047 0-2.088.467-3.053 1.308-.767.665-1.4 1.578-2.173 2.925L12 7.504l-.312-.54C10.432 5.455 9.07 4.03 6.915 4.03z"/>
  </svg>
)

// ── Animation Variants ────────────────────────────────────────
const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } }
}
const stagger = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.08 } }
}

// ── Pricing Plans ─────────────────────────────────────────────
// WhatsApp-only. Instagram coming soon.
const PLANS = [
  {
    id: 'starter',
    name: 'Starter',
    tagline: 'One WhatsApp number, one business',
    monthly: 3000,
    yearly: 2400,
    setup: 15000,
    highlight: false,
    bestFor: 'Home businesses, small shops, solo entrepreneurs',
    numbers: '1 WhatsApp Number',
    convos: '500 conversations/month',
    features: [
      { text: '1 WhatsApp Business Number', bold: true },
      { text: '500 customer conversations/month' },
      { text: '20 products in AI catalog' },
      { text: 'Malayalam + English responses' },
      { text: 'Basic order taking & confirmation' },
      { text: 'Simple dashboard' },
      { text: 'Email support' },
      { text: '1 month free maintenance' },
    ],
    notIncluded: [
      'Broadcast campaigns',
      'Analytics & reports',
      'Multiple WhatsApp numbers',
      'Priority support',
    ],
    cta: 'Get Started',
    ctaClass: 'border-2 border-gray-200 text-[#1A1A1A] hover:bg-gray-50',
  },
  {
    id: 'growth',
    name: 'Growth',
    tagline: 'Most chosen by Kerala businesses',
    monthly: 5000,
    yearly: 4000,
    setup: 25000,
    highlight: true,
    bestFor: 'Retail shops, restaurants, boutiques, clinics',
    numbers: '1 WhatsApp Number',
    convos: '2,000 conversations/month',
    features: [
      { text: '1 WhatsApp Business Number', bold: true },
      { text: '2,000 customer conversations/month' },
      { text: 'Unlimited products in catalog' },
      { text: 'Malayalam + English + Hindi' },
      { text: 'Full order management & tracking' },
      { text: 'WhatsApp broadcast campaigns' },
      { text: 'Full analytics dashboard' },
      { text: 'Custom AI personality & tone' },
      { text: 'Weekly performance report' },
      { text: 'Priority WhatsApp support' },
      { text: '2 months free maintenance' },
    ],
    notIncluded: [
      'Multiple WhatsApp numbers',
      'Custom API integrations',
      'Dedicated account manager',
    ],
    cta: 'Get Started',
    ctaClass: 'bg-[#2563EB] text-white hover:bg-blue-700 shadow-lg shadow-blue-500/20',
  },
  {
    id: 'multi',
    name: 'Multi-Agent',
    tagline: 'Multiple numbers, one platform',
    monthly: 8000,
    yearly: 6400,
    setup: 40000,
    highlight: false,
    tag: 'Chains & Multi-Branch',
    bestFor: 'Multi-branch businesses, franchises, distributors, hotels',
    numbers: 'Up to 5 WhatsApp Numbers',
    convos: 'Unlimited conversations',
    features: [
      { text: 'Up to 5 WhatsApp Numbers', bold: true },
      { text: 'Unlimited conversations across all numbers' },
      { text: 'Central dashboard for all agents' },
      { text: 'Everything in Growth, plus:' },
      { text: 'Per-branch analytics & reports' },
      { text: 'Custom API integrations (CRM, ERP)' },
      { text: 'Dedicated account manager' },
      { text: 'Monthly strategy call' },
      { text: '99.9% uptime SLA guarantee' },
      { text: 'Staff training included' },
      { text: '3 months free maintenance' },
    ],
    notIncluded: [],
    cta: 'Contact Us',
    ctaClass: 'border-2 border-gray-200 text-[#1A1A1A] hover:bg-gray-50',
  }
]

const COMPARE = [
  { feature: 'WhatsApp Numbers', starter: '1', growth: '1', multi: 'Up to 5' },
  { feature: 'Conversations/month', starter: '500', growth: '2,000', multi: 'Unlimited' },
  { feature: 'Product catalog', starter: '20 items', growth: 'Unlimited', multi: 'Unlimited' },
  { feature: 'Malayalam AI', starter: true, growth: true, multi: true },
  { feature: 'Order management', starter: 'Basic', growth: 'Full', multi: 'Full' },
  { feature: 'Broadcast campaigns', starter: false, growth: true, multi: true },
  { feature: 'Analytics dashboard', starter: false, growth: true, multi: true },
  { feature: 'Custom AI personality', starter: false, growth: true, multi: true },
  { feature: 'Central multi-branch dashboard', starter: false, growth: false, multi: true },
  { feature: 'Custom API integrations', starter: false, growth: false, multi: true },
  { feature: 'Dedicated account manager', starter: false, growth: false, multi: true },
  { feature: 'Per-branch analytics', starter: false, growth: false, multi: true },
  { feature: 'Support channel', starter: 'Email', growth: 'WhatsApp', multi: 'Dedicated' },
  { feature: 'Free maintenance', starter: '1 month', growth: '2 months', multi: '3 months' },
]

const ADD_ONS = [
  {
    name: 'Extra Conversations',
    price: '₹500',
    sub: 'per 500 extra convos',
    desc: 'Top up when you hit your monthly limit. Automatically added.',
    tag: null,
  },
  {
    name: 'Additional WhatsApp Number',
    price: '₹2,000/mo',
    sub: 'per number',
    desc: 'Add more WhatsApp numbers to any plan. Ideal for multiple branches.',
    tag: null,
  },
  {
    name: 'Broadcast Credits',
    price: '₹1/credit',
    sub: 'per message sent',
    desc: 'Buy credits to send WhatsApp broadcast campaigns to your customers.',
    tag: null,
  },
  {
    name: 'Deep AI Training',
    price: '₹5,000',
    sub: 'one time',
    desc: 'Train AI deeply on your specific products, FAQs and business scenarios.',
    tag: null,
  },
  {
    name: 'Instagram Agent',
    price: 'Coming Soon',
    sub: '',
    desc: 'Instagram DM automation is under development. Join waitlist for early access.',
    tag: 'soon',
  },
]

const FAQS = [
  {
    q: "Is the setup fee really one time?",
    a: "Yes. You pay the setup fee once, and never again. Monthly fee covers continued service, hosting and support. No surprises."
  },
  {
    q: "How quickly can my agent go live?",
    a: "Most agents go live within 24-48 hours of setup. We configure everything — just share your product catalog and business details."
  },
  {
    q: "Can the AI reply in Malayalam?",
    a: "Yes. The AI auto-detects language and replies in Malayalam, Manglish, or English — whatever the customer sends. Zero configuration needed."
  },
  {
    q: "What counts as a conversation?",
    a: "A conversation is a 24-hour messaging session with one customer. If the same customer messages multiple times in 24 hours, it counts as one conversation."
  },
  {
    q: "Can I upgrade my plan later?",
    a: "Absolutely. Upgrade anytime and we only charge the difference. No penalties, no re-setup fees."
  },
  {
    q: "When is Instagram coming?",
    a: "Instagram DM automation is currently in development. Sign up for the waitlist and you'll be the first to know when it's ready."
  },
  {
    q: "Is there a free trial?",
    a: "We offer a free live demo where we show you exactly how the AI works for your specific business — before you pay anything."
  }
]

function FAQItem({ question, answer, isOpen, onClick }) {
  return (
    <div className="border-b border-gray-100 py-5">
      <button className="w-full flex items-center justify-between text-left gap-4 group" onClick={onClick}>
        <span className="text-[16px] md:text-[18px] font-semibold text-[#1A1A1A] pr-4 group-hover:text-[#2563EB] transition-colors">
          {question}
        </span>
        <div className={`shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-colors ${isOpen ? 'bg-[#2563EB] text-white' : 'bg-gray-50 text-gray-400 group-hover:bg-gray-100'}`}>
          {isOpen ? <Minus size={15} /> : <Plus size={15} />}
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
            <p className="pt-4 text-gray-500 text-[15px] leading-relaxed font-medium max-w-3xl">{answer}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default function PricingPage() {
  const [openFAQ, setOpenFAQ] = useState(0)
  const [menuOpen, setMenuOpen] = useState(false)
  const [popupOpen, setPopupOpen] = useState(false)
  const [isYearly, setIsYearly] = useState(false)

  // ── Fix back-nav blank page issue ─────────────────────────
  const [mounted, setMounted] = useState(false)
  useEffect(() => {
    setMounted(true)
    // Force scroll to top on mount so whileInView triggers correctly
    window.scrollTo(0, 0)
  }, [])

  if (!mounted) return null

  return (
    <main className="min-h-screen bg-white font-sans text-[#1A1A1A] overflow-x-hidden">

      {/* ── Popup ──────────────────────────────────────────── */}
      <AnimatePresence>
        {popupOpen && (
          <motion.div
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/40 backdrop-blur-sm px-4"
            onClick={() => setPopupOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.96, y: 10, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.96, y: 10, opacity: 0 }}
              onClick={e => e.stopPropagation()}
              className="bg-white rounded-2xl shadow-2xl w-full max-w-[420px] overflow-hidden"
            >
              <div className="h-24 bg-gradient-to-r from-[#e8f5e9] via-[#e3f2fd] to-[#f3f0ff]" />
              <div className="p-8 pt-0 relative">
                <div className="absolute -top-8 left-8 bg-white p-2 rounded-2xl shadow border border-gray-100">
                  <div className="bg-[#1A1A1A] text-white p-3 rounded-xl">
                    <WhatsAppIcon size={24} className="text-[#25D366]" />
                  </div>
                </div>
                <div className="mt-10">
                  <h3 className="text-[22px] font-bold text-[#1A1A1A] mb-2">Let's talk about your business</h3>
                  <p className="text-gray-500 mb-6 text-[14px] leading-relaxed">
                    Free demo — we'll show you exactly how the AI works for your business before you pay anything.
                  </p>
                  <div className="space-y-3">
                    <a href="mailto:info@faigen.in" className="flex items-center justify-between p-4 bg-[#f8fafc] border border-gray-100 rounded-xl hover:border-[#2563EB] hover:bg-[#eff6ff] transition-all group">
                      <div className="flex items-center gap-3">
                        <Mail size={16} className="text-gray-400 group-hover:text-[#2563EB]" />
                        <span className="text-[14px] font-bold">info@faigen.in</span>
                      </div>
                      <ArrowRight size={15} className="text-gray-300 group-hover:text-[#2563EB]" />
                    </a>
                    <a href="tel:+916238818210" className="flex items-center justify-between p-4 bg-[#f8fafc] border border-gray-100 rounded-xl hover:border-[#25D366] hover:bg-[#e8f5e9] transition-all group">
                      <div className="flex items-center gap-3">
                        <WhatsAppIcon size={16} className="text-gray-400 group-hover:text-[#25D366]" />
                        <span className="text-[14px] font-bold">+91 62388 18210</span>
                      </div>
                      <ArrowRight size={15} className="text-gray-300 group-hover:text-[#25D366]" />
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ── Header ─────────────────────────────────────────── */}
      <header className="flex justify-between items-center px-6 md:px-12 py-6 max-w-[1400px] mx-auto border-b border-gray-100">
        <img src="/logonew.png" alt="Agentified" className="h-8 md:h-9 w-auto object-contain" />
        <nav className="hidden lg:flex items-center gap-8 text-[15px]">
          <a href="/" className="font-semibold text-gray-500 hover:text-black transition-colors">Home</a>
          <span className="font-semibold text-black border-b-2 border-[#2563EB] pb-1">Pricing</span>
          <button onClick={() => setPopupOpen(true)} className="font-semibold text-gray-500 hover:text-black transition-colors">Contact</button>
        </nav>
        <div className="hidden lg:flex items-center gap-3">
          <a href="/login" className="text-gray-600 text-[14px] font-semibold px-4 py-2.5 hover:text-black">Sign in</a>
          <button onClick={() => setPopupOpen(true)} className="bg-[#1A1A1A] text-white px-5 py-2.5 text-[14px] font-bold hover:bg-gray-800 transition-colors rounded-lg">
            Book Free Demo
          </button>
        </div>
        <button className="lg:hidden" onClick={() => setMenuOpen(v => !v)}>
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </header>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -6 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -6 }}
            className="lg:hidden bg-white border-b border-gray-100 px-6 pb-5 flex flex-col absolute w-full z-40"
          >
            <a href="/" className="text-[15px] font-medium text-gray-500 py-3 border-b border-gray-50">Home</a>
            <span className="text-[15px] font-bold text-[#1A1A1A] py-3 border-b border-gray-50">Pricing</span>
            <button onClick={() => { setPopupOpen(true); setMenuOpen(false) }} className="mt-4 bg-[#1A1A1A] text-white py-3 text-[14px] font-bold rounded-lg">
              Book Free Demo
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ── Hero ───────────────────────────────────────────── */}
      <section className="pt-20 pb-14 md:pt-28 md:pb-16 px-6 max-w-[900px] mx-auto text-center">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeUp}
        >
          {/* Trust badges */}
          <div className="flex flex-wrap items-center justify-center gap-2 mb-8">
            <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#e8f5e9] border border-[#c8e6c9] text-[#2e7d32] text-[11px] font-bold">
              <WhatsAppIcon size={11} className="text-[#25D366]" /> Official WhatsApp Partner
            </div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#e8f0fe] border border-[#c5d8f8] text-[#1a56db] text-[11px] font-bold">
              <MetaIcon size={11} className="text-[#0467DF]" /> Meta Verified Tech Provider
              <BadgeCheck size={11} />
            </div>
          </div>

          <h1 className="text-[3rem] sm:text-[4.5rem] md:text-[5.5rem] font-medium leading-[1.05] tracking-tight text-[#1A1A1A] mb-6">
            Simple pricing.<br />
            <span className="relative inline-block">
              No surprises.
              <svg className="absolute -bottom-1 left-0 w-full h-4 md:h-6" viewBox="0 0 200 20" preserveAspectRatio="none">
                <path d="M0,15 C50,12 150,12 200,8" stroke="#F8DA5D" strokeWidth="3" fill="none" />
                <path d="M15,19 C70,16 130,17 180,14" stroke="#F8DA5D" strokeWidth="2.5" fill="none" />
              </svg>
            </span>
          </h1>

          <p className="text-gray-500 text-[16px] md:text-[18px] leading-relaxed font-medium mb-4 max-w-lg mx-auto">
            WhatsApp AI agents for Kerala businesses. One-time setup. Simple monthly fee. Live in 24 hours.
          </p>

          {/* Social proof */}
          <div className="flex items-center justify-center gap-2 mb-10">
            <div className="flex -space-x-2">
              {['🏪','🍽️','🧵','🏥','🏗️'].map((e, i) => (
                <div key={i} className="w-7 h-7 rounded-full bg-gray-100 border-2 border-white flex items-center justify-center text-[12px]">{e}</div>
              ))}
            </div>
            <span className="text-[13px] font-semibold text-gray-600">
              <span className="font-bold text-[#1A1A1A]">50+ Kerala businesses</span> already live
            </span>
          </div>

          {/* Toggle */}
          <div className="flex items-center justify-center gap-2 bg-gray-50 border border-gray-200 p-1.5 rounded-full w-fit mx-auto shadow-sm">
            <button
              onClick={() => setIsYearly(false)}
              className={`px-6 py-2.5 rounded-full text-[14px] font-bold transition-all ${!isYearly ? 'bg-white shadow-sm text-[#1A1A1A]' : 'text-gray-400 hover:text-gray-700'}`}
            >
              Monthly
            </button>
            <button
              onClick={() => setIsYearly(true)}
              className={`px-6 py-2.5 rounded-full text-[14px] font-bold transition-all flex items-center gap-2 ${isYearly ? 'bg-[#1A1A1A] text-white shadow-sm' : 'text-gray-400 hover:text-gray-700'}`}
            >
              Yearly
              <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${isYearly ? 'bg-[#25D366] text-white' : 'bg-[#e8f5e9] text-[#2e7d32]'}`}>
                Save 20%
              </span>
            </button>
          </div>
        </motion.div>
      </section>

      {/* ── Plans ──────────────────────────────────────────── */}
      <section className="pb-16 px-6 md:px-12 max-w-[1400px] mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.05 }}
          variants={stagger}
          className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-start"
        >
          {PLANS.map((plan) => (
            <motion.div
              key={plan.id}
              variants={fadeUp}
              className={`relative rounded-[2rem] p-8 md:p-10 flex flex-col overflow-hidden ${
                plan.highlight
                  ? 'bg-[#0B0E14] border border-gray-800 shadow-2xl lg:-mt-6 lg:-mb-6 z-10'
                  : 'bg-[#F8FAFC] border border-gray-100 shadow-[0_20px_50px_-15px_rgba(0,0,0,0.05)]'
              }`}
            >
              {plan.highlight && (
                <div className="absolute -top-20 -right-20 w-64 h-64 bg-[#2563EB] blur-[100px] rounded-full opacity-20 pointer-events-none" />
              )}

              {plan.highlight && (
                <div className="absolute top-8 right-8 bg-[#F8DA5D] text-[#1A1A1A] text-[10px] font-bold px-3 py-1.5 rounded-full flex items-center gap-1 z-10">
                  <Star size={10} className="fill-[#1A1A1A]" /> Most Popular
                </div>
              )}

              {plan.tag && (
                <div className="inline-flex bg-[#E4E0FA] text-[#6955E8] text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider mb-3 w-fit">
                  {plan.tag}
                </div>
              )}

              <div className="relative z-10">
                {/* WA number badge */}
                <div className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-bold mb-3 ${
                  plan.highlight
                    ? 'bg-[#25D366]/15 text-[#4ade80] border border-[#25D366]/20'
                    : 'bg-[#e8f5e9] text-[#2e7d32] border border-[#c8e6c9]'
                }`}>
                  <WhatsAppIcon size={10} className={plan.highlight ? 'text-[#4ade80]' : 'text-[#25D366]'} />
                  {plan.numbers}
                </div>

                <h3 className={`text-[24px] font-medium tracking-tight mb-1 ${plan.highlight ? 'text-white' : 'text-[#1A1A1A]'}`}>
                  {plan.name}
                </h3>
                <p className={`text-[14px] font-medium mb-6 ${plan.highlight ? 'text-gray-400' : 'text-gray-500'}`}>
                  {plan.tagline}
                </p>

                {/* Price */}
                <div className="flex items-end gap-1 mb-1">
                  <span className={`text-[42px] font-medium tracking-tight leading-none ${plan.highlight ? 'text-white' : 'text-[#1A1A1A]'}`}>
                    ₹{(isYearly ? plan.yearly : plan.monthly).toLocaleString()}
                  </span>
                  <span className={`text-[13px] font-bold uppercase tracking-widest mb-1.5 ${plan.highlight ? 'text-gray-500' : 'text-gray-400'}`}>/mo</span>
                </div>

                <p className={`text-[13px] font-bold uppercase tracking-wide mb-1 ${plan.highlight ? 'text-[#60A5FA]' : 'text-[#2563EB]'}`}>
                  + ₹{plan.setup.toLocaleString()} setup
                  <span className={`font-normal normal-case tracking-normal text-[12px] ml-1 ${plan.highlight ? 'text-gray-500' : 'text-gray-400'}`}>(one time)</span>
                </p>

                {isYearly
                  ? <p className={`text-[12px] font-medium mb-5 ${plan.highlight ? 'text-gray-500' : 'text-gray-400'}`}>
                      Billed ₹{(plan.yearly * 12).toLocaleString()}/year
                    </p>
                  : <div className="mb-5" />
                }

                <button
                  onClick={() => setPopupOpen(true)}
                  className={`w-full py-4 rounded-xl text-[15px] font-bold transition-all ${plan.ctaClass}`}
                >
                  {plan.cta}
                </button>
                <p className={`text-center text-[12px] mt-2 mb-7 font-medium ${plan.highlight ? 'text-gray-600' : 'text-gray-400'}`}>
                  Live in 24 hours · No contract
                </p>

                {/* Features */}
                <div className={`space-y-3 mb-6 pt-5 border-t ${plan.highlight ? 'border-gray-800' : 'border-gray-100'}`}>
                  {plan.features.map((f, i) => (
                    <div key={i} className={`flex items-start gap-2.5 text-[14px] ${f.bold ? 'font-bold' : 'font-medium'} ${plan.highlight ? 'text-gray-200' : 'text-gray-700'}`}>
                      <WhatsAppIcon size={14} className={`shrink-0 mt-0.5 ${plan.highlight ? 'text-[#4ade80]' : 'text-[#25D366]'}`} />
                      {f.text}
                    </div>
                  ))}
                </div>

                {/* Not included */}
                {plan.notIncluded.length > 0 && (
                  <div className={`pt-4 border-t space-y-2.5 ${plan.highlight ? 'border-gray-800' : 'border-gray-100'}`}>
                    <p className={`text-[10px] font-bold uppercase tracking-wider ${plan.highlight ? 'text-gray-600' : 'text-gray-400'}`}>Not included</p>
                    {plan.notIncluded.map((item, i) => (
                      <div key={i} className={`flex items-center gap-2.5 text-[13px] font-medium ${plan.highlight ? 'text-gray-600' : 'text-gray-400'}`}>
                        <X size={13} /> {item}
                      </div>
                    ))}
                  </div>
                )}

                {/* Best for */}
                <div className={`mt-6 pt-5 border-t ${plan.highlight ? 'border-gray-800' : 'border-gray-100'}`}>
                  <p className={`text-[10px] font-bold uppercase tracking-wider mb-1 ${plan.highlight ? 'text-gray-500' : 'text-gray-400'}`}>Best for</p>
                  <p className={`text-[13px] font-medium ${plan.highlight ? 'text-gray-300' : 'text-gray-600'}`}>{plan.bestFor}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Enterprise */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.05 }}
          variants={fadeUp}
          className="mt-8 bg-gradient-to-r from-[#EFF6FF] via-[#F8FAFC] to-[#F5F3FF] border border-blue-100 rounded-[2rem] p-8 md:p-10 flex flex-col lg:flex-row justify-between items-start gap-8"
        >
          <div className="flex-1">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#e8f0fe] border border-[#c5d8f8] text-[#1a56db] text-[11px] font-bold mb-4">
              <MetaIcon size={11} className="text-[#0467DF]" /> Enterprise Grade
            </div>
            <h3 className="text-[28px] font-medium tracking-tight text-[#1A1A1A] mb-2">Enterprise</h3>
            <p className="text-gray-500 text-[15px] font-medium mb-6 max-w-lg">
              Custom-built solution for large businesses. On-premise deployment, custom AI training, dedicated infrastructure and SLA.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-3 gap-x-6">
              {[
                'Everything in Multi-Agent',
                'Unlimited WhatsApp numbers',
                'Custom AI model training',
                'On-premise deployment option',
                'Dedicated infrastructure',
                '24/7 phone support',
                'Legal & compliance support',
                'Quarterly business reviews',
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-2.5 text-[14px] font-medium text-gray-700">
                  <Check size={15} className="text-[#2563EB] shrink-0" /> {item}
                </div>
              ))}
            </div>
          </div>
          <div className="shrink-0 flex flex-col items-start lg:items-end border-t lg:border-t-0 lg:border-l border-gray-200 pt-6 lg:pt-0 lg:pl-8 w-full lg:w-60">
            <p className="text-[12px] font-bold text-gray-400 uppercase tracking-widest mb-1">Custom Pricing</p>
            <p className="text-[32px] font-medium tracking-tight text-[#1A1A1A] mb-5">Let's talk</p>
            <button onClick={() => setPopupOpen(true)} className="w-full py-4 rounded-xl bg-[#1A1A1A] text-white font-bold hover:bg-gray-800 transition-all shadow-md mb-2">
              Book a Call
            </button>
            <p className="text-[12px] text-gray-500 font-medium text-center w-full">Response within 24 hours</p>
            <div className="mt-5 w-full">
              <p className="text-[11px] font-bold text-gray-400 uppercase tracking-widest mb-1">Best for</p>
              <p className="text-[13px] text-gray-600 font-medium">Hospital groups, hotel chains, large distributors, corporates</p>
            </div>
          </div>
        </motion.div>
      </section>

      {/* ── Add-ons ─────────────────────────────────────────── */}
      <section className="py-20 bg-[#F8FAFC] border-y border-gray-200">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12">
          <div className="text-center mb-12">
            <h2 className="text-[2rem] md:text-[3rem] font-medium tracking-tight text-[#1A1A1A] mb-3">Optional Add-ons</h2>
            <p className="text-gray-500 text-[15px] font-medium">Add to any plan at any time.</p>
          </div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.05 }}
            variants={stagger}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5"
          >
            {ADD_ONS.map((addon, i) => (
              <motion.div key={i} variants={fadeUp} className={`bg-white p-6 rounded-[1.5rem] border flex flex-col h-full ${addon.tag === 'soon' ? 'border-dashed border-gray-200 opacity-80' : 'border-gray-100 shadow-sm hover:shadow-md transition-shadow'}`}>
                {addon.tag === 'soon' && (
                  <div className="inline-flex items-center gap-1 px-2 py-0.5 bg-[#fff8e1] border border-[#ffe082] text-[#f57f17] text-[10px] font-bold rounded-full mb-3 w-fit">
                    Coming Soon
                  </div>
                )}
                <h3 className="text-[17px] font-bold text-[#1A1A1A] mb-1 leading-tight">{addon.name}</h3>
                <div className="flex items-baseline gap-1 mb-3">
                  <span className={`text-[20px] font-bold ${addon.tag === 'soon' ? 'text-gray-400' : 'text-[#2563EB]'}`}>{addon.price}</span>
                  {addon.sub && <span className="text-[12px] text-gray-400 font-medium">{addon.sub}</span>}
                </div>
                <p className="text-gray-500 text-[13px] font-medium leading-relaxed flex-1">{addon.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── Compare ─────────────────────────────────────────── */}
      <section className="py-20 px-6 md:px-12 max-w-[1100px] mx-auto border-t border-gray-100">
        <div className="text-center mb-12">
          <h2 className="text-[2.2rem] md:text-[3.2rem] font-medium tracking-tight text-[#1A1A1A]">Compare Plans</h2>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse min-w-[640px]">
            <thead>
              <tr>
                <th className="py-5 px-4 border-b-2 border-gray-200 text-[12px] font-bold text-gray-400 uppercase tracking-widest w-2/5">Feature</th>
                <th className="py-5 px-4 border-b-2 border-gray-200 text-[16px] font-bold text-[#1A1A1A]">Starter</th>
                <th className="py-5 px-4 border-b-2 border-[#2563EB] text-[16px] font-bold text-[#2563EB] bg-blue-50/50">Growth ⭐</th>
                <th className="py-5 px-4 border-b-2 border-gray-200 text-[16px] font-bold text-[#1A1A1A]">Multi-Agent</th>
              </tr>
            </thead>
            <tbody>
              {COMPARE.map((row, i) => (
                <tr key={i} className="hover:bg-gray-50/50 group">
                  <td className="py-4 px-4 border-b border-gray-100 text-[14px] font-medium text-gray-700">{row.feature}</td>
                  <td className="py-4 px-4 border-b border-gray-100 text-[14px] text-gray-500">
                    {typeof row.starter === 'boolean'
                      ? row.starter ? <CheckCircle2 size={18} className="text-[#22C55E]" /> : <Minus size={18} className="text-gray-200" />
                      : row.starter}
                  </td>
                  <td className="py-4 px-4 border-b border-gray-100 text-[14px] font-bold text-[#1A1A1A] bg-blue-50/30 group-hover:bg-blue-50/50">
                    {typeof row.growth === 'boolean'
                      ? row.growth ? <CheckCircle2 size={18} className="text-[#2563EB]" /> : <Minus size={18} className="text-gray-200" />
                      : row.growth}
                  </td>
                  <td className="py-4 px-4 border-b border-gray-100 text-[14px] text-gray-500">
                    {typeof row.multi === 'boolean'
                      ? row.multi ? <CheckCircle2 size={18} className="text-[#1A1A1A]" /> : <Minus size={18} className="text-gray-200" />
                      : row.multi}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* ── Trust ───────────────────────────────────────────── */}
      <section className="py-20 px-6 md:px-12 max-w-[1200px] mx-auto text-center border-t border-gray-100">
        <h2 className="text-[2rem] md:text-[2.8rem] font-medium tracking-tight text-[#1A1A1A] mb-12">
          Why Kerala businesses trust Agentified
        </h2>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.05 }}
          variants={stagger}
          className="grid grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {[
            { icon: Shield, label: 'No lock-in', text: 'Cancel anytime with 30 days notice. No penalties.', color: 'text-[#2563EB]', bg: 'bg-[#EFF6FF]' },
            { icon: Clock, label: 'Live in 24 hours', text: 'We handle the full setup. You go live the next day.', color: 'text-[#059669]', bg: 'bg-[#ECFDF5]' },
            { icon: Heart, label: 'Kerala support', text: 'Talk to us in Malayalam. Local team, fast replies.', color: 'text-[#E1306C]', bg: 'bg-[#FDF2F8]' },
            { icon: BadgeCheck, label: 'Meta verified', text: 'Official WhatsApp Business API partner. Fully compliant.', color: 'text-[#0467DF]', bg: 'bg-[#E8F0FE]' },
          ].map((item, i) => (
            <motion.div key={i} variants={fadeUp} className="flex flex-col items-center text-center">
              <div className={`w-14 h-14 ${item.bg} ${item.color} rounded-[1rem] flex items-center justify-center mb-4 shadow-sm`}>
                <item.icon size={24} strokeWidth={1.5} />
              </div>
              <p className="text-[15px] font-bold text-[#1A1A1A] mb-2">{item.label}</p>
              <p className="text-[13px] font-medium text-gray-500 leading-relaxed max-w-[200px]">{item.text}</p>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* ── FAQ ─────────────────────────────────────────────── */}
      <section className="py-20 max-w-[800px] mx-auto px-6 border-t border-gray-100">
        <div className="text-center mb-12">
          <h2 className="text-[2.2rem] md:text-[3rem] font-medium tracking-tight text-[#1A1A1A]">Pricing FAQ</h2>
        </div>
        <div className="bg-[#F8FAFC] rounded-[2rem] border border-gray-100 p-8 shadow-sm">
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

      {/* ── Final CTA ────────────────────────────────────────── */}
      <section className="py-20 px-6 md:px-12 max-w-[1400px] mx-auto border-t border-gray-100">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.05 }}
          variants={fadeUp}
          className="bg-[#F8FAFC] border border-gray-100 rounded-[3rem] p-12 md:p-20 text-center relative overflow-hidden"
        >
          <div className="absolute -top-24 -left-24 w-80 h-80 bg-[#BAE6FD] blur-[100px] rounded-full opacity-40 pointer-events-none" />
          <div className="absolute -bottom-24 -right-24 w-80 h-80 bg-[#D9F99D] blur-[100px] rounded-full opacity-40 pointer-events-none" />

          <div className="relative z-10">
            <h2 className="text-[2.5rem] md:text-[3.8rem] font-medium leading-[1.05] tracking-tight text-[#1A1A1A] mb-4">
              Not sure which plan fits?
            </h2>
            <p className="text-gray-500 text-[16px] md:text-[18px] mb-10 max-w-xl mx-auto leading-relaxed font-medium">
              Book a free 30-minute call. We'll understand your business and recommend the right plan — no pressure.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4 mb-12">
              <button onClick={() => setPopupOpen(true)} className="bg-[#1A1A1A] text-white px-8 py-4 rounded-xl font-bold text-[16px] hover:bg-gray-800 transition-all shadow-md">
                Book Free Demo Call
              </button>
              <button onClick={() => setPopupOpen(true)} className="bg-white text-gray-800 border border-gray-200 px-8 py-4 rounded-xl font-bold text-[16px] hover:bg-gray-50 flex items-center justify-center gap-2 shadow-sm">
                <WhatsAppIcon size={18} className="text-[#25D366]" /> WhatsApp Us Now
              </button>
            </div>
            <div className="flex flex-wrap justify-center gap-6 text-gray-500 text-[14px] font-bold">
              <a href="mailto:info@faigen.in" className="flex items-center gap-2 hover:text-[#2563EB] transition-colors">
                <Mail size={15} /> info@faigen.in
              </a>
              <span className="flex items-center gap-2"><Smartphone size={15} /> +91 62388 18210</span>
              <span className="text-[#059669]">🇮🇳 Built in Kerala, India</span>
            </div>
          </div>
        </motion.div>
      </section>

      {/* ── Footer ──────────────────────────────────────────── */}
      <footer className="border-t border-gray-100 py-8 bg-white">
        <div className="max-w-[1400px] mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-[12px] text-gray-500 font-bold tracking-widest uppercase">© 2026 Faigen Technologies</p>
          <p className="text-[13px] font-bold text-[#1A1A1A] uppercase tracking-wide hidden md:block">Your customers never sleep. Neither does our AI.</p>
          <div className="flex gap-6 text-[12px] text-gray-400 font-bold uppercase tracking-widest">
            <a href="#" className="hover:text-[#2563EB]">Privacy</a>
            <a href="#" className="hover:text-[#2563EB]">Terms</a>
            <button onClick={() => setPopupOpen(true)} className="hover:text-[#2563EB]">Contact</button>
          </div>
        </div>
      </footer>

    </main>
  )
}