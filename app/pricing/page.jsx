'use client'

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  MessageCircle, Instagram, LayoutDashboard, 
  Globe, Shield, Users, Mail, MapPin, 
  ArrowRight, Plus, Minus, Zap, Smartphone, Menu, X, CheckCircle2, Clock, Heart, Star, Check
} from "lucide-react";

/* ── ANIMATION VARIANTS ───────────────────────────────────────── */
const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
};

/* ── DATA ─────────────────────────────────────────────────────── */
const FAQS = [
  { q: "Is the setup fee really one time?", a: "Yes. You pay setup fee once and never again. Monthly fee is only for continued service and maintenance." },
  { q: "Can I upgrade my plan later?", a: "Absolutely. You can upgrade anytime and we'll only charge the difference." },
  { q: "What happens after free maintenance period?", a: "After free maintenance, maintenance is included in your monthly fee. No extra charges." },
  { q: "Do you offer discounts for multiple businesses?", a: "Yes. If you refer another business or have multiple locations, contact us for special pricing." },
  { q: "Is there a free trial?", a: "We offer a free demo where we show you exactly how the AI will work for YOUR specific business before you commit." }
];

const ADD_ONS = [
  { name: "Extra Conversations", price: "₹500", desc: "per additional 500 conversations", bestFor: "Seasonal businesses with high volume months" },
  { name: "Additional WhatsApp Number", price: "₹2,000/mo", desc: "per number", bestFor: "Businesses with multiple branches" },
  { name: "Payment Collection", price: "₹1,500/mo", desc: "Accept payments directly inside WhatsApp via Razorpay", bestFor: "E-commerce & retail" },
  { name: "Custom AI Training", price: "₹5,000", desc: "One time. Deep train AI on your specific products, FAQs, and business scenarios", bestFor: "Complex service businesses" },
  { name: "Monthly Report & Strategy", price: "₹2,000/mo", desc: "Monthly performance review call with our team", bestFor: "Growth-focused brands" }
];

const COMPARE_FEATURES = [
  { name: "WhatsApp Agent", starter: true, growth: true, scale: true },
  { name: "Instagram Agent", starter: false, growth: true, scale: true },
  { name: "Conversations/month", starter: "500", growth: "2,000", scale: "Unlimited" },
  { name: "Products in catalog", starter: "20", growth: "Unlimited", scale: "Unlimited" },
  { name: "Malayalam Support", starter: true, growth: true, scale: true },
  { name: "Order Management", starter: "Basic", growth: "Full", scale: "Full" },
  { name: "Analytics Dashboard", starter: false, growth: true, scale: true },
  { name: "Custom AI Personality", starter: false, growth: true, scale: true },
  { name: "Insta Comment Auto-DM", starter: false, growth: true, scale: true },
  { name: "Multiple Accounts", starter: false, growth: false, scale: true },
  { name: "API Integrations", starter: false, growth: false, scale: true },
  { name: "Account Manager", starter: false, growth: false, scale: true },
  { name: "Support", starter: "Email", growth: "WhatsApp", scale: "Dedicated" },
  { name: "Free Maintenance", starter: "1 month", growth: "2 months", scale: "3 months" }
];

/* ── FAQ COMPONENT ────────────────────────────────────────────── */
function FAQItem({ question, answer, isOpen, onClick }) {
  return (
    <div className="border-b border-gray-100 py-5">
      <button 
        className="w-full flex items-center justify-between text-left gap-4 group"
        onClick={onClick}
      >
        <span className="text-[16px] md:text-[18px] font-semibold text-[#1A1A1A] pr-4 group-hover:text-[#2563EB] transition-colors">{question}</span>
        <div className={`shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-colors ${isOpen ? 'bg-[#2563EB] text-white' : 'bg-gray-50 text-gray-400 group-hover:bg-gray-100 group-hover:text-gray-800'}`}>
          {isOpen ? <Minus size={16} /> : <Plus size={16} />}
        </div>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden"
          >
            <p className="pt-4 text-gray-500 text-[15px] leading-relaxed max-w-3xl font-medium">
              {answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

/* ── MAIN COMPONENT ───────────────────────────────────────────── */
export default function PricingPage() {
  const [openFAQ, setOpenFAQ] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);
  const [popupOpen, setPopupOpen] = useState(false);
  const [isYearly, setIsYearly] = useState(false);

  return (
    <main className="min-h-screen bg-white font-sans text-[#1A1A1A] selection:bg-blue-100 overflow-hidden">
      
      {/* ── POPUP MODAL ────────────────────────────────────────── */}
      <AnimatePresence>
        {popupOpen && (
          <motion.div
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/40 backdrop-blur-sm px-4"
            onClick={() => setPopupOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.95, y: 10, opacity: 0 }} animate={{ scale: 1, y: 0, opacity: 1 }} exit={{ scale: 0.95, y: 10, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white rounded-2xl shadow-2xl w-full max-w-lg overflow-hidden relative"
            >
              <div className="h-28 bg-gradient-to-r from-[#FFD6EB] via-[#E4E0FA] to-[#DDF1E4] relative flex items-start justify-end p-4">
                <button onClick={() => setPopupOpen(false)} className="bg-white/40 hover:bg-white/80 p-2 rounded-full text-gray-800 transition-colors backdrop-blur-md">
                  <X size={20} />
                </button>
              </div>
              <div className="p-8 pt-6 relative">
                <div className="absolute -top-12 left-8 bg-white p-2 rounded-2xl shadow-sm border border-gray-100">
                  <div className="bg-[#2563EB] text-white p-4 rounded-xl shadow-inner">
                    <Mail size={28} />
                  </div>
                </div>
                <div className="mt-8">
                  <span className="bg-gray-100 text-gray-600 text-[11px] font-bold px-3 py-1.5 rounded-full uppercase tracking-wider mb-4 inline-block">
                    Get in touch
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-bold text-[#1A1A1A] mb-3 leading-tight tracking-tight">
                    Let's build something great.
                  </h3>
                  <p className="text-gray-500 mb-8 text-[15px] leading-relaxed pr-4 font-medium">
                    Ready to automate your sales and customer support? Reach out to our team to see how Faigen can help scale your business 24/7.
                  </p>
                  <div className="bg-[#F8FAFC] border border-gray-100 rounded-xl p-5 flex items-center justify-between group hover:border-[#2563EB]/50 hover:bg-[#EFF6FF] transition-all duration-300">
                    <div className="flex items-center gap-4">
                      <div className="bg-white p-3 rounded-lg shadow-sm border border-gray-100 text-[#2563EB] group-hover:scale-105 transition-transform">
                        <Mail size={22} />
                      </div>
                      <div>
                        <p className="text-[11px] text-gray-500 font-bold uppercase tracking-widest mb-1">Email Us</p>
                        <a href="mailto:info@faigen.in" className="text-lg font-bold text-[#1A1A1A] group-hover:text-[#2563EB] transition-colors">
                          info@faigen.in
                        </a>
                      </div>
                    </div>
                    <a href="mailto:info@faigen.in" className="bg-[#DBEAFE] text-[#2563EB] p-2.5 rounded-lg hover:bg-[#BFDBFE] transition-colors">
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
      <header className="flex justify-between items-center px-6 md:px-12 py-6 max-w-[1400px] mx-auto w-full z-50 relative">
        <div className="flex items-center gap-2 cursor-pointer">
          <img src="/logo.png" alt="Faigen Logo" className="h-8 md:h-10 w-auto object-contain" />
        </div>
        <nav className="hidden lg:flex items-center gap-8 text-[15px]">
          <a href="#" className="font-semibold text-gray-500 hover:text-black transition-colors">Home</a>
          <span className="font-semibold text-black border-b-2 border-[#2563EB] pb-1 cursor-default">Pricing</span>
          <button className="font-semibold text-gray-500 hover:text-black transition-colors">About</button>
        </nav>
        <div className="hidden lg:flex items-center gap-3">
          <button onClick={() => setPopupOpen(true)} className="text-gray-600 text-[14px] font-semibold px-4 py-2.5 hover:text-black transition-colors">Sign in</button>
          <button onClick={() => setPopupOpen(true)} className="bg-[#1A1A1A] text-white px-5 py-2.5 text-[14px] font-semibold hover:bg-gray-800 transition-colors rounded-lg">Try it for free</button>
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
            className="lg:hidden bg-white border-b border-gray-100 px-6 pb-5 flex flex-col z-40 text-left absolute w-full"
          >
            <a href="#" className="text-[15px] font-medium text-gray-500 py-3 border-b border-gray-50">Home</a>
            <button className="text-[15px] font-bold text-[#1A1A1A] py-3 border-b border-gray-50 text-left">Pricing</button>
            <button className="text-[15px] font-medium text-gray-500 py-3 border-b border-gray-50 text-left last:border-0">About</button>
            <button onClick={() => { setPopupOpen(true); setMenuOpen(false); }} className="mt-4 bg-[#1A1A1A] text-white py-3 text-[14px] font-semibold rounded-lg">Try it for free</button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ── HERO SECTION ────────────────────────────────────────── */}
      <section className="pt-20 pb-16 md:pt-28 md:pb-20 px-6 md:px-12 max-w-[1000px] mx-auto text-center flex flex-col items-center relative">
        <motion.div initial="hidden" animate="visible" variants={fadeUp}>
          <div className="bg-gray-50 border border-gray-200 px-5 py-2 rounded-full shadow-sm text-[12px] font-bold text-gray-700 mb-8 uppercase tracking-widest inline-flex items-center gap-2">
            Simple Pricing
          </div>
          
          <h1 className="text-[3rem] sm:text-[4.5rem] md:text-[5.5rem] font-medium leading-[1.05] tracking-tight text-[#1A1A1A] mb-6">
            Invest once. <br className="hidden md:block"/>
            Grow <span className="relative inline-block z-10">
              forever.
              <svg className="absolute -bottom-1 left-[-2%] w-[104%] h-4 md:h-6 z-[-1]" viewBox="0 0 200 20" preserveAspectRatio="none">
                <path d="M0,15 C50,12 150,12 200,8" stroke="#F8DA5D" strokeWidth="3" fill="none" />
                <path d="M15,19 C70,16 130,17 180,14" stroke="#F8DA5D" strokeWidth="2.5" fill="none" />
              </svg>
            </span> 🚀
          </h1>

          <p className="max-w-2xl mx-auto text-gray-500 text-[16px] md:text-[18px] leading-relaxed font-medium mb-12">
            No hidden charges. No long contracts. Cancel anytime. <br className="hidden sm:block"/> Setup fee is one-time only.
          </p>

          {/* Pricing Toggle */}
          <div className="flex items-center justify-center gap-4 bg-gray-50 border border-gray-200 p-2 rounded-full w-fit mx-auto shadow-sm">
            <button 
              onClick={() => setIsYearly(false)}
              className={`px-6 py-2.5 rounded-full text-[14px] font-bold transition-all ${!isYearly ? 'bg-white shadow-sm text-[#1A1A1A]' : 'text-gray-500 hover:text-gray-900'}`}
            >
              Monthly
            </button>
            <button 
              onClick={() => setIsYearly(true)}
              className={`px-6 py-2.5 rounded-full text-[14px] font-bold transition-all flex items-center gap-2 ${isYearly ? 'bg-[#2563EB] shadow-sm text-white' : 'text-gray-500 hover:text-gray-900'}`}
            >
              Yearly <span className={`text-[10px] uppercase tracking-widest px-2 py-0.5 rounded-full ${isYearly ? 'bg-white/20 text-white' : 'bg-[#DDF1E4] text-[#059669]'}`}>Save 20%</span>
            </button>
          </div>
        </motion.div>
      </section>

      {/* ── PRICING CARDS ───────────────────────────────────────── */}
      <section className="py-10 px-6 md:px-12 max-w-[1400px] mx-auto">
        <motion.div 
          initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={staggerContainer}
          className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start"
        >
          {/* Plan 1: Starter */}
          <motion.div variants={fadeUp} className="bg-[#F8FAFC] p-8 md:p-10 rounded-[2rem] border border-gray-100 shadow-[0_20px_50px_-15px_rgba(0,0,0,0.05)] flex flex-col h-full relative">
            <h3 className="text-[24px] font-medium tracking-tight text-[#1A1A1A] mb-1">Starter</h3>
            <p className="text-gray-500 text-[14px] font-medium mb-6 min-h-[40px]">Perfect for small businesses just getting started</p>
            
            <div className="flex items-end gap-1 mb-2">
              <span className="text-[40px] font-medium tracking-tight text-[#1A1A1A] leading-none">₹{isYearly ? '2,400' : '3,000'}</span>
              <span className="text-[15px] font-bold text-gray-400 uppercase tracking-widest mb-1">/mo</span>
            </div>
            <p className="text-[13px] font-bold text-[#2563EB] uppercase tracking-widest mb-2">+ ₹15,000 setup fee <span className="text-gray-400 font-medium normal-case tracking-normal">(one time)</span></p>
            {isYearly && <p className="text-[13px] text-gray-500 font-medium mb-6">Billed ₹28,800/year</p>}
            {!isYearly && <div className="h-6 mb-6"></div>}

            <button onClick={() => setPopupOpen(true)} className="w-full py-4 rounded-xl border-2 border-gray-200 text-[#1A1A1A] font-bold hover:bg-gray-100 hover:border-gray-300 transition-all mb-3">
              Get Started
            </button>
            <p className="text-center text-[12px] text-gray-400 font-medium mb-8">Setup within 48 hours</p>

            <div className="space-y-4 mb-8 flex-1">
              {['WhatsApp AI Agent', 'Up to 500 conversations/month', 'Malayalam + English support', 'Basic order management', 'Simple dashboard access', 'Product catalog (up to 20 products)', 'Email support', '1 month free maintenance'].map((item, i) => (
                <div key={i} className="flex items-start gap-3 text-[14px] font-medium text-gray-700">
                  <CheckCircle2 size={18} className="text-[#2563EB] shrink-0 mt-0.5" /> <span>{item}</span>
                </div>
              ))}
              <div className="pt-4 border-t border-gray-200 space-y-4">
                <p className="text-[12px] font-bold text-gray-400 uppercase tracking-widest">Not Included</p>
                {['Instagram Agent', 'Analytics & Reports', 'Priority Support', 'Custom integrations'].map((item, i) => (
                  <div key={i} className="flex items-start gap-3 text-[14px] font-medium text-gray-400 opacity-70">
                    <X size={18} className="text-gray-400 shrink-0 mt-0.5" /> <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="mt-auto pt-6 border-t border-gray-200">
              <p className="text-[12px] font-bold text-gray-400 uppercase tracking-widest mb-1">Best for</p>
              <p className="text-[14px] text-gray-600 font-medium">Small shops, home businesses, solo entrepreneurs</p>
            </div>
          </motion.div>

          {/* Plan 2: Growth (Most Popular) */}
          <motion.div variants={fadeUp} className="bg-[#1A1A1A] p-8 md:p-10 rounded-[2rem] border border-gray-800 shadow-2xl flex flex-col h-full relative lg:-mt-4 lg:-mb-4 z-10 overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#2563EB] blur-[100px] rounded-full z-0 opacity-20"></div>
            
            <div className="relative z-10">
              <div className="absolute -top-4 right-0 bg-[#F8DA5D] text-[#1A1A1A] text-[11px] font-bold px-4 py-1.5 rounded-full uppercase tracking-wider shadow-sm flex items-center gap-1">
                <Star size={12} className="fill-[#1A1A1A]" /> Most Popular
              </div>

              <h3 className="text-[24px] font-medium tracking-tight text-white mb-1">Growth</h3>
              <p className="text-gray-400 text-[14px] font-medium mb-6 min-h-[40px]">For growing businesses that want more automation</p>
              
              <div className="flex items-end gap-1 mb-2">
                <span className="text-[40px] font-medium tracking-tight text-white leading-none">₹{isYearly ? '4,000' : '5,000'}</span>
                <span className="text-[15px] font-bold text-gray-500 uppercase tracking-widest mb-1">/mo</span>
              </div>
              <p className="text-[13px] font-bold text-[#60A5FA] uppercase tracking-widest mb-2">+ ₹25,000 setup fee <span className="text-gray-500 font-medium normal-case tracking-normal">(one time)</span></p>
              {isYearly && <p className="text-[13px] text-gray-400 font-medium mb-6">Billed ₹48,000/year</p>}
              {!isYearly && <div className="h-6 mb-6"></div>}

              <button onClick={() => setPopupOpen(true)} className="w-full py-4 rounded-xl bg-[#2563EB] text-white font-bold hover:bg-blue-600 transition-all shadow-lg shadow-blue-500/25 mb-3">
                Get Started
              </button>
              <p className="text-center text-[12px] text-gray-400 font-medium mb-8">Most chosen by Kerala businesses</p>

              <div className="space-y-4 mb-8 flex-1">
                {['WhatsApp AI Agent', 'Instagram AI Agent', 'Up to 2,000 conversations/month', 'Malayalam + English + Hindi support', 'Full order management', 'Complete dashboard + analytics', 'Product catalog (unlimited products)', 'Instagram comment auto-DM', 'Custom AI personality & tone', 'Weekly performance report', 'Priority WhatsApp support', '2 months free maintenance'].map((item, i) => (
                  <div key={i} className="flex items-start gap-3 text-[14px] font-medium text-gray-200">
                    <CheckCircle2 size={18} className="text-[#60A5FA] shrink-0 mt-0.5" /> <span>{item}</span>
                  </div>
                ))}
                <div className="pt-4 border-t border-gray-800 space-y-4">
                  <p className="text-[12px] font-bold text-gray-500 uppercase tracking-widest">Not Included</p>
                  {['Multiple agent accounts', 'Custom API integrations', 'Dedicated account manager'].map((item, i) => (
                    <div key={i} className="flex items-start gap-3 text-[14px] font-medium text-gray-500 opacity-70">
                      <X size={18} className="text-gray-600 shrink-0 mt-0.5" /> <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="mt-auto pt-6 border-t border-gray-800">
                <p className="text-[12px] font-bold text-gray-500 uppercase tracking-widest mb-1">Best for</p>
                <p className="text-[14px] text-gray-300 font-medium">Retail shops, restaurants, boutiques, service businesses</p>
              </div>
            </div>
          </motion.div>

          {/* Plan 3: Scale */}
          <motion.div variants={fadeUp} className="bg-[#F8FAFC] p-8 md:p-10 rounded-[2rem] border border-gray-100 shadow-[0_20px_50px_-15px_rgba(0,0,0,0.05)] flex flex-col h-full relative">
            <div className="inline-flex bg-[#E4E0FA] text-[#6955E8] text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider mb-4 w-fit">
              For Agencies & Large Businesses
            </div>
            <h3 className="text-[24px] font-medium tracking-tight text-[#1A1A1A] mb-1">Scale</h3>
            <p className="text-gray-500 text-[14px] font-medium mb-6 min-h-[40px]">Full power for businesses that need everything</p>
            
            <div className="flex items-end gap-1 mb-2">
              <span className="text-[40px] font-medium tracking-tight text-[#1A1A1A] leading-none">₹{isYearly ? '6,400' : '8,000'}</span>
              <span className="text-[15px] font-bold text-gray-400 uppercase tracking-widest mb-1">/mo</span>
            </div>
            <p className="text-[13px] font-bold text-[#2563EB] uppercase tracking-widest mb-2">+ ₹40,000 setup fee <span className="text-gray-400 font-medium normal-case tracking-normal">(one time)</span></p>
            {isYearly && <p className="text-[13px] text-gray-500 font-medium mb-6">Billed ₹76,800/year</p>}
            {!isYearly && <div className="h-6 mb-6"></div>}

            <button onClick={() => setPopupOpen(true)} className="w-full py-4 rounded-xl border-2 border-gray-200 text-[#1A1A1A] font-bold hover:bg-gray-100 hover:border-gray-300 transition-all mb-3">
              Contact Us
            </button>
            <p className="text-center text-[12px] text-gray-400 font-medium mb-8">Custom setup available</p>

            <div className="space-y-4 mb-8 flex-1">
              <div className="flex items-start gap-3 text-[14px] font-bold text-[#1A1A1A]">
                <CheckCircle2 size={18} className="text-[#2563EB] shrink-0 mt-0.5" /> <span>Everything in Growth, plus:</span>
              </div>
              {['Unlimited conversations', 'Multiple WhatsApp numbers', 'Multiple Instagram accounts', 'Custom API integrations', 'Advanced analytics dashboard', 'Dedicated account manager', 'Monthly strategy call', 'Custom feature development', 'White label option available', 'SLA guarantee — 99.9% uptime', '3 months free maintenance', 'Staff training included'].map((item, i) => (
                <div key={i} className="flex items-start gap-3 text-[14px] font-medium text-gray-700">
                  <CheckCircle2 size={18} className="text-[#2563EB] shrink-0 mt-0.5" /> <span>{item}</span>
                </div>
              ))}
            </div>
            <div className="mt-auto pt-6 border-t border-gray-200">
              <p className="text-[12px] font-bold text-gray-400 uppercase tracking-widest mb-1">Best for</p>
              <p className="text-[14px] text-gray-600 font-medium">Chains, franchises, agencies, large retailers, hotels</p>
            </div>
          </motion.div>

        </motion.div>

        {/* Plan 4: Enterprise Banner */}
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="mt-8 bg-gradient-to-r from-[#EFF6FF] via-[#F8FAFC] to-[#F5F3FF] border border-blue-100 rounded-[2rem] p-8 md:p-10 shadow-sm flex flex-col lg:flex-row justify-between items-center lg:items-start gap-8">
          <div className="flex-1 text-center lg:text-left">
            <h3 className="text-[28px] font-medium tracking-tight text-[#1A1A1A] mb-2">Enterprise</h3>
            <p className="text-gray-500 text-[16px] font-medium mb-6">Built specifically for your business needs</p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-3 gap-x-6">
              {['Everything in Scale', 'Fully custom development', 'On-premise deployment option', 'Custom AI model training', 'Dedicated infrastructure', 'Legal & compliance support', '24/7 phone support', 'Quarterly business reviews'].map((item, i) => (
                <div key={i} className="flex items-start gap-3 text-[14px] font-medium text-gray-700">
                  <Check size={18} className="text-[#2563EB] shrink-0 mt-0.5" /> <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="shrink-0 flex flex-col items-center lg:items-end lg:w-64 border-t lg:border-t-0 lg:border-l border-gray-200 pt-8 lg:pt-0 lg:pl-8 w-full lg:w-auto">
            <p className="text-[13px] font-bold text-gray-400 uppercase tracking-widest mb-2">Custom Pricing</p>
            <p className="text-[32px] font-medium tracking-tight text-[#1A1A1A] mb-6">Let's talk</p>
            <button onClick={() => setPopupOpen(true)} className="w-full py-4 rounded-xl bg-[#1A1A1A] text-white font-bold hover:bg-gray-800 transition-all shadow-md mb-3">
              Book a Call
            </button>
            <p className="text-[12px] text-gray-500 font-medium">Response within 24 hours</p>
            <div className="mt-6 text-center lg:text-right w-full">
              <p className="text-[11px] font-bold text-gray-400 uppercase tracking-widest mb-1">Best for</p>
              <p className="text-[13px] text-gray-600 font-medium">Hospital groups, hotel chains, large distributors, corporates</p>
            </div>
          </div>
        </motion.div>
      </section>

      {/* ── COMPARISON TABLE ────────────────────────────────────── */}
      <section className="py-24 px-6 md:px-12 max-w-[1200px] mx-auto border-t border-gray-100">
        <div className="text-center mb-16">
          <h2 className="text-[2.5rem] md:text-[3.5rem] font-medium leading-[1.05] tracking-tight text-[#1A1A1A]">
            Compare Plans
          </h2>
        </div>

        <div className="overflow-x-auto pb-4">
          <table className="w-full text-left border-collapse min-w-[800px]">
            <thead>
              <tr>
                <th className="py-6 px-4 border-b-2 border-gray-200 text-[15px] font-bold text-gray-500 uppercase tracking-widest w-1/3">Feature</th>
                <th className="py-6 px-4 border-b-2 border-gray-200 text-[18px] font-bold text-[#1A1A1A]">Starter</th>
                <th className="py-6 px-4 border-b-2 border-gray-200 text-[18px] font-bold text-[#2563EB]">Growth</th>
                <th className="py-6 px-4 border-b-2 border-gray-200 text-[18px] font-bold text-[#1A1A1A]">Scale</th>
              </tr>
            </thead>
            <tbody>
              {COMPARE_FEATURES.map((feature, idx) => (
                <tr key={idx} className="hover:bg-gray-50/50 transition-colors group">
                  <td className="py-5 px-4 border-b border-gray-100 text-[15px] font-medium text-gray-800">{feature.name}</td>
                  <td className="py-5 px-4 border-b border-gray-100 text-[15px] font-medium text-gray-600">
                    {typeof feature.starter === 'boolean' ? (feature.starter ? <CheckCircle2 size={20} className="text-[#22C55E]"/> : <Minus size={20} className="text-gray-300"/>) : feature.starter}
                  </td>
                  <td className="py-5 px-4 border-b border-gray-100 text-[15px] font-bold text-[#1A1A1A] bg-blue-50/30 group-hover:bg-blue-50/50">
                    {typeof feature.growth === 'boolean' ? (feature.growth ? <CheckCircle2 size={20} className="text-[#2563EB]"/> : <Minus size={20} className="text-gray-300"/>) : feature.growth}
                  </td>
                  <td className="py-5 px-4 border-b border-gray-100 text-[15px] font-medium text-gray-600">
                    {typeof feature.scale === 'boolean' ? (feature.scale ? <CheckCircle2 size={20} className="text-[#1A1A1A]"/> : <Minus size={20} className="text-gray-300"/>) : feature.scale}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* ── ADD-ONS ─────────────────────────────────────────────── */}
      <section className="py-24 bg-[#F8FAFC] border-y border-gray-200">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12">
          <div className="text-center mb-12">
            <h2 className="text-[2.2rem] md:text-[3.2rem] font-medium leading-[1.05] tracking-tight text-[#1A1A1A] mb-4">
              Optional Add-ons
            </h2>
            <p className="text-gray-500 text-[16px] font-medium">Need something extra? Add it to any plan.</p>
          </div>

          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
            {ADD_ONS.map((addon, i) => (
              <motion.div key={i} variants={fadeUp} className="bg-white p-6 rounded-[1.5rem] border border-gray-100 shadow-sm hover:shadow-md transition-shadow flex flex-col h-full">
                <h3 className="text-[18px] font-bold text-[#1A1A1A] mb-2 leading-tight">{addon.name}</h3>
                <div className="text-[20px] font-bold text-[#2563EB] mb-3">{addon.price}</div>
                <p className="text-gray-500 text-[14px] font-medium mb-6 leading-relaxed flex-1">{addon.desc}</p>
                <div className="pt-4 border-t border-gray-100 mt-auto">
                  <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1">Best For</p>
                  <p className="text-[12px] text-gray-600 font-medium leading-tight">{addon.bestFor}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── TRUST SECTION ────────────────────────────────────────── */}
      <section className="py-24 px-6 md:px-12 max-w-[1400px] mx-auto text-center">
        <h2 className="text-[2.2rem] md:text-[3.2rem] font-medium leading-[1.05] tracking-tight text-[#1A1A1A] mb-16">
          Why businesses trust Faigen
        </h2>
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { icon: Shield, text: "No lock-in contracts. Cancel anytime with 30 days notice.", color: "text-[#2563EB]", bg: "bg-[#EFF6FF]" },
            { icon: Clock, text: "Live in 48 hours. We move fast so you don't wait.", color: "text-[#059669]", bg: "bg-[#ECFDF5]" },
            { icon: Heart, text: "Kerala based support. Talk to us in Malayalam anytime.", color: "text-[#E1306C]", bg: "bg-[#FDF2F8]" },
            { icon: Star, text: "First month satisfaction guarantee. Not happy? Full refund.", color: "text-[#D97706]", bg: "bg-[#FFFBEB]" }
          ].map((item, i) => (
            <motion.div key={i} variants={fadeUp} className="flex flex-col items-center">
              <div className={`w-16 h-16 ${item.bg} ${item.color} rounded-[1.2rem] flex items-center justify-center mb-6 shadow-sm`}>
                <item.icon size={28} />
              </div>
              <p className="text-[16px] font-medium text-gray-700 leading-relaxed max-w-[250px]">{item.text}</p>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* ── FAQ SECTION ────────────────────────────────────────── */}
      <section className="py-24 max-w-[900px] mx-auto px-6 md:px-12 border-t border-gray-100">
        <div className="text-center mb-12">
          <h2 className="text-[2.8rem] md:text-[3.5rem] font-medium leading-[1.05] tracking-tight text-[#1A1A1A]">
            Pricing FAQ
          </h2>
        </div>
        <div className="bg-[#F8FAFC] rounded-[2rem] border border-gray-100 p-8 shadow-[0_20px_50px_-15px_rgba(0,0,0,0.05)]">
          {FAQS.map((faq, i) => (
            <FAQItem key={i} question={faq.q} answer={faq.a} isOpen={openFAQ === i} onClick={() => setOpenFAQ(openFAQ === i ? null : i)} />
          ))}
        </div>
      </section>

      {/* ── FINAL CTA ──────────────────────────────────────────── */}
      <section className="py-24 px-6 md:px-12 max-w-[1400px] mx-auto text-center border-t border-gray-100">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="bg-[#F8FAFC] border border-gray-100 rounded-[3rem] p-12 md:p-24 shadow-[0_20px_50px_-15px_rgba(0,0,0,0.05)] relative overflow-hidden">
          <div className="absolute -top-32 -left-32 w-96 h-96 bg-[#BAE6FD] blur-[100px] rounded-full z-0 opacity-40"></div>
          <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-[#FFD6EB] blur-[100px] rounded-full z-0 opacity-40"></div>

          <div className="relative z-10">
            <h2 className="text-[2.8rem] md:text-[4rem] font-medium leading-[1.05] tracking-tight text-[#1A1A1A] mb-6">
              Not sure which plan is <br className="hidden md:block"/> right for you?
            </h2>
            <p className="text-gray-500 text-[16px] md:text-[18px] mb-12 max-w-2xl mx-auto leading-relaxed font-medium">
              Book a free 30-minute call. We'll understand your business and recommend the perfect plan.
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mb-16">
              <button onClick={() => setPopupOpen(true)} className="bg-[#1A1A1A] text-white px-8 py-4 rounded-xl font-bold text-[16px] hover:bg-gray-800 transition-all shadow-md w-full sm:w-auto">
                Book Free Demo Call
              </button>
              <button onClick={() => setPopupOpen(true)} className="bg-white text-gray-800 border border-gray-200 px-8 py-4 rounded-xl font-bold text-[16px] hover:bg-gray-50 transition-colors w-full sm:w-auto shadow-sm flex items-center justify-center gap-2">
                <MessageCircle size={18} className="text-[#22C55E]" /> WhatsApp Us Now
              </button>
            </div>

            <div className="flex flex-wrap justify-center items-center gap-8 text-gray-500 text-[14px] font-bold uppercase tracking-widest">
              <a href="mailto:info@faigen.in" className="flex items-center gap-2 hover:text-[#2563EB] transition-colors"><Mail size={16}/> info@faigen.in</a>
              <span className="flex items-center gap-2"><Smartphone size={16}/> +91 62388 18210</span>
              <span className="text-[#059669]">🇮🇳 Proudly built in Kerala, India</span>
            </div>
          </div>
        </motion.div>
      </section>

      {/* ── FOOTER ─────────────────────────────────────────────── */}
      <footer className="border-t border-gray-100 py-10 text-center bg-white">
        <div className="max-w-[1400px] mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-[14px] text-gray-500 font-bold tracking-wide">© 2026 FAIGEN TECHNOLOGIES</p>
          <p className="text-[14px] text-[#1A1A1A] font-bold tracking-wide hidden md:block uppercase">Your customers never sleep. Neither does our AI.</p>
          <div className="flex gap-6 text-[13px] text-gray-400 font-bold uppercase tracking-widest">
            <a href="#" className="hover:text-[#2563EB] transition-colors">Privacy</a>
            <a href="#" className="hover:text-[#2563EB] transition-colors">Terms</a>
            <button onClick={() => setPopupOpen(true)} className="hover:text-[#2563EB] transition-colors">Contact</button>
          </div>
        </div>
      </footer>

    </main>
  );
}