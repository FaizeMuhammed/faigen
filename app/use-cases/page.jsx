'use client'

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  ShoppingBag, Stethoscope, Utensils, Building2, 
  ArrowRight, CheckCircle2, Bot, Sparkles, MessageSquare, Zap,
  BarChart3, ShieldCheck, X, Mail, Phone, Copy, Check, Menu
} from "lucide-react";
import Link from 'next/link';

/* ── CONSTANTS ───────────────────────────────────────────── */
const industries = [
  {
    id: 'retail',
    name: 'Retail & E-commerce',
    icon: <ShoppingBag />,
    title: "Turn chats into checkouts instantly.",
    description: "Stop losing customers to slow replies. Faigen AI acts as your 24/7 digital salesman, showcasing catalogs and closing sales natively inside WhatsApp.",
    features: ["Browse product catalogs in-chat", "Automated order confirmation", "Check inventory status", "Send shipping updates"],
    chat: [
      { sender: 'user', text: "Do you have the Premium Coir Mat in stock?" },
      { sender: 'bot', text: "Yes, we have 45 in stock! Price: ₹600. Would you like to order?" },
      { sender: 'user', text: "Yes, I'll take 2." },
      { sender: 'bot', text: "Great! That's ₹1,200. I've generated your secure payment link below. 💳" }
    ]
  },
  {
    id: 'healthcare',
    name: 'Clinics & Hospitals',
    icon: <Stethoscope />,
    title: "Seamless patient booking & care.",
    description: "Reduce front-desk workload by automating appointment scheduling, sending timely reminders, and answering common patient queries.",
    features: ["24/7 Appointment scheduling", "Automated WhatsApp reminders", "Doctor availability & OPD", "Secure sharing of reports"],
    chat: [
      { sender: 'user', text: "Is Dr. Rajesh available tomorrow evening?" },
      { sender: 'bot', text: "Dr. Rajesh is available tomorrow from 4:00 PM to 8:00 PM. Book a slot?" },
      { sender: 'user', text: "Yes, 6 PM." },
      { sender: 'bot', text: "Confirmed! Your appointment is scheduled for tomorrow at 6:00 PM. ✅" }
    ]
  },
  {
    id: 'restaurants',
    name: 'Restaurants & Cafes',
    icon: <Utensils />,
    title: "Automate orders and reservations.",
    description: "Let your AI handle hungry customers. From sharing menus to booking tables, Faigen AI keeps your restaurant running smoothly.",
    features: ["Share digital menus", "Takeaway order processing", "Automated table reservations", "Broadcast festive offers"],
    chat: [
      { sender: 'user', text: "Can I get the menu and do you deliver?" },
      { sender: 'bot', text: "Welcome! Yes, we deliver within 45 mins. Attached is our menu. What would you like?" },
      { sender: 'user', text: "2 Chicken Biriyani." },
      { sender: 'bot', text: "Perfect! Total is ₹680. Please share your location to proceed." }
    ]
  },
  {
    id: 'realestate',
    name: 'Real Estate',
    icon: <Building2 />,
    title: "Qualify leads while you sleep.",
    description: "Engage property seekers instantly. The AI captures requirements, shares brochures, and schedules site visits.",
    features: ["Automated lead qualification", "Instant brochure sharing", "Schedule site visits", "Follow-up campaigns"],
    chat: [
      { sender: 'user', text: "What's the price for the 3BHK villas?" },
      { sender: 'bot', text: "Our 3BHK villas start at ₹85 Lakhs. Are you looking to move in immediately?" },
      { sender: 'user', text: "Looking for next year." },
      { sender: 'bot', text: "Understood. I've sent the project brochure. Would you like to schedule a site visit?" }
    ]
  }
];

const extraFeatures = [
  { title: "Broadcast Campaigns", desc: "Send templates to thousands in one click.", icon: <Zap />, iconColor: "text-[#7c3aed]" },
  { title: "Omnichannel Inbox", desc: "Monitor WhatsApp & IG chats in one place.", icon: <MessageSquare />, iconColor: "text-[#2563EB]" },
  { title: "Custom AI Training", desc: "Train on your business data and PDFs.", icon: <Bot />, iconColor: "text-[#d97706]" },
  { title: "Analytics & Insights", desc: "Track read rates and order volume.", icon: <BarChart3 />, iconColor: "text-[#059669]" }
];

export default function UseCasesPage() {
  const [activeTab, setActiveTab] = useState(industries[0]);
  const [popupOpen, setPopupOpen] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText("info@faigen.in");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="min-h-screen bg-[#FBFBFD] text-[#1D1D1F] font-sans selection:bg-[#0066CC] selection:text-white">
      
      {/* ── MODAL ── */}
      <AnimatePresence>
        {popupOpen && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-[100] flex items-center justify-center bg-black/20 backdrop-blur-md px-4" onClick={() => setPopupOpen(false)}>
            <motion.div initial={{ scale: 0.95, y: 20 }} animate={{ scale: 1, y: 0 }} exit={{ scale: 0.95, y: 20 }} className="bg-white rounded-[32px] border border-[#E5E5EA] w-full max-w-[420px] p-8 shadow-2xl" onClick={e => e.stopPropagation()}>
              <div className="flex justify-between items-start mb-6">
                <div className="w-12 h-12 rounded-2xl bg-[#F5F5F7] flex items-center justify-center border border-[#E5E5EA] text-[#1D1D1F]"><ShieldCheck size={24} strokeWidth={1.5} /></div>
                <button onClick={() => setPopupOpen(false)} className="text-[#86868B] hover:text-[#1D1D1F] bg-[#F5F5F7] w-8 h-8 rounded-full flex items-center justify-center"><X size={16} /></button>
              </div>
              <h3 className="text-[20px] font-semibold text-[#1D1D1F] mb-2">Request API Access</h3>
              <p className="text-[#86868B] text-[14px] mb-8">Faigen Console is for businesses. Contact our team to get started.</p>
              <div className="bg-[#F5F5F7] border border-[#E5E5EA] rounded-2xl p-4 flex items-center justify-between">
                <span className="text-[14px] font-medium text-[#1D1D1F]">info@faigen.in</span>
                <button onClick={handleCopy} className="p-2 bg-white rounded-xl border border-[#E5E5EA] text-[#86868B]">{copied ? <Check size={16} /> : <Copy size={16} />}</button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ── HEADER ── */}
      <header className="sticky top-0 z-50 bg-[#FBFBFD]/80 backdrop-blur-xl border-b border-[#E5E5EA]">
        <div className="max-w-[1500px] mx-auto px-6 py-5 flex justify-between items-center">
          <Link href="/"><img src="/logonew.png" alt="Logo" className="h-8 w-auto" /></Link>
          <nav className="hidden lg:flex gap-8 text-[14px] font-semibold text-[#86868B]">
            <Link href="/" className="hover:text-[#1D1D1F]">Home</Link>
            <button onClick={() => setPopupOpen(true)}>API Pricing</button>
            <span className="text-[#1D1D1F]">Use Cases</span>
          </nav>
          <button onClick={() => setPopupOpen(true)} className="bg-[#1D1D1F] text-white px-6 py-2.5 rounded-full text-[14px] font-semibold hover:bg-black transition-colors">Request Access</button>
        </div>
      </header>

      <main className="py-20">
        <section className="text-center px-6 mb-20">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-[#E5E5EA] text-[#86868B] text-[11px] font-bold tracking-widest uppercase shadow-[0_2px_8px_rgba(0,0,0,0.02)] mb-6">
            <Sparkles size={12} className="text-[#0066CC]" /> Solutions
          </span>
          <h1 className="text-[3.5rem] md:text-[5rem] font-semibold tracking-tighter text-[#1D1D1F] mb-6">Tailored for <span className="text-[#0066CC]">every</span> business.</h1>
          <p className="text-[#86868B] text-[18px] max-w-xl mx-auto font-medium">From taking food orders to booking clinic appointments, see how Faigen AI acts as your ultimate digital employee.</p>
        </section>

        <section className="max-w-[1400px] mx-auto px-6">
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {industries.map((ind) => (
              <button key={ind.id} onClick={() => setActiveTab(ind)} className={`flex items-center gap-3 px-6 py-4 rounded-full text-[14px] font-semibold transition-all ${activeTab.id === ind.id ? 'bg-[#1D1D1F] text-white shadow-xl' : 'bg-white border border-[#E5E5EA] text-[#86868B] hover:border-[#D2D2D7]'}`}>
                {React.cloneElement(ind.icon, { size: 18 })} {ind.name}
              </button>
            ))}
          </div>

          <div className="bg-white border border-[#E5E5EA] rounded-[40px] shadow-[0_8px_30px_rgb(0,0,0,0.04)] flex flex-col lg:flex-row overflow-hidden min-h-[600px]">
            <div className="w-full lg:w-1/2 p-12 lg:p-16 flex flex-col justify-center border-b lg:border-b-0 lg:border-r border-[#E5E5EA]">
              <div className="text-[#0066CC] mb-6">{React.cloneElement(activeTab.icon, { size: 48, strokeWidth: 1.5 })}</div>
              <h2 className="text-[2.5rem] font-semibold tracking-tighter text-[#1D1D1F] mb-6">{activeTab.title}</h2>
              <p className="text-[#86868B] text-[17px] font-medium mb-10 leading-relaxed">{activeTab.description}</p>
              <div className="space-y-4">
                {activeTab.features.map((f, i) => (
                  <div key={i} className="flex items-center gap-3 font-semibold text-[#1D1D1F]">
                    <CheckCircle2 size={20} className="text-[#0066CC]" /> {f}
                  </div>
                ))}
              </div>
            </div>

            <div className="w-full lg:w-1/2 bg-[#F5F5F7] p-12 flex items-center justify-center">
              <div className="w-full max-w-[360px] bg-white rounded-[32px] p-6 shadow-2xl border border-[#E5E5EA]">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-full bg-[#1D1D1F] text-white flex items-center justify-center"><Bot size={20} /></div>
                  <div><p className="text-[14px] font-bold">Faigen AI</p><p className="text-[12px] text-[#86868B]">Online</p></div>
                </div>
                <div className="space-y-4">
                  {activeTab.chat.map((msg, i) => (
                    <div key={i} className={`p-4 rounded-2xl text-[14px] max-w-[85%] ${msg.sender === 'bot' ? 'bg-[#E8F4FF] text-[#0066CC] rounded-tr-sm self-end ml-auto' : 'bg-[#F5F5F7] text-[#1D1D1F] rounded-tl-sm'}`}>
                      {msg.text}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="max-w-[1400px] mx-auto px-6 mt-32">
          <h3 className="text-[2.5rem] font-bold text-[#1D1D1F] text-center mb-16">More than just chat.</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {extraFeatures.map((f, i) => (
              <div key={i} className="bg-white border border-[#E5E5EA] rounded-[32px] p-8 shadow-sm hover:shadow-lg transition-all">
                <div className={`mb-6 ${f.iconColor}`}>{React.cloneElement(f.icon, { size: 32 })}</div>
                <h4 className="text-[18px] font-bold mb-2">{f.title}</h4>
                <p className="text-[#86868B] text-[14px] font-medium">{f.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="max-w-[1400px] mx-auto px-6 mt-32">
          <div className="bg-[#1D1D1F] rounded-[40px] p-16 md:p-24 text-center text-white relative overflow-hidden">
            <h2 className="text-[3.5rem] font-semibold tracking-tighter mb-6">Ready to <span className="text-[#0066CC]">automate?</span></h2>
            <p className="text-[#86868B] text-[18px] mb-10 max-w-lg mx-auto">Join 50+ Kerala businesses using Faigen's platform to scale operations.</p>
            <button onClick={() => setPopupOpen(true)} className="bg-white text-black px-10 py-4 rounded-full font-bold">Request API Access</button>
          </div>
        </section>
      </main>
    </div>
  );
}