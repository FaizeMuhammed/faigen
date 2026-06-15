'use client'

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  ShoppingBag, Stethoscope, Utensils, Building2, 
  ArrowRight, CheckCircle2, Bot, Sparkles, MessageSquare, Zap,
  BarChart3, ShieldCheck, X, Mail, Phone, Copy, Check, Menu
} from "lucide-react";
import Link from 'next/link';

/* ── WHATSAPP ICON ───────────────────────────────────────────── */
const WhatsAppIcon = ({ size = 18, className = '' }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
  </svg>
)

/* ── USE CASE DATA ───────────────────────────────────────────── */
const industries = [
  {
    id: 'retail',
    name: 'Retail & E-commerce',
    icon: <ShoppingBag />,
    title: "Turn chats into checkouts instantly.",
    description: "Stop losing customers to slow replies. Faigen AI acts as your 24/7 digital salesman, showcasing catalogs and closing sales natively inside WhatsApp.",
    features: [
      "Browse product catalogs in-chat",
      "Automated order confirmation & billing",
      "Check inventory status automatically",
      "Send shipping updates and tracking IDs"
    ],
    chat: [
      { sender: 'user', text: "Do you have the Premium Coir Mat in stock? Need delivery to Kochi." },
      { sender: 'bot', text: "Yes, we have 45 Premium Coir Mats in stock! 📦\n\nPrice: ₹600 each.\nDelivery to Kochi takes 2 days.\n\nWould you like to place an order?" },
      { sender: 'user', text: "Yes, I'll take 2." },
      { sender: 'bot', text: "Great! That's 2x Premium Coir Mats for ₹1,200.\n\nI've generated your secure payment link below. Once paid, I'll confirm your dispatch! 💳" }
    ]
  },
  {
    id: 'healthcare',
    name: 'Clinics & Hospitals',
    icon: <Stethoscope />,
    title: "Seamless patient booking & care.",
    description: "Reduce front-desk workload by automating appointment scheduling, sending timely reminders, and answering common patient queries.",
    features: [
      "24/7 Appointment scheduling",
      "Automated WhatsApp reminders to reduce no-shows",
      "Doctor availability & OPD timings",
      "Secure sharing of test reports"
    ],
    chat: [
      { sender: 'user', text: "Is Dr. Rajesh available for consultation tomorrow evening?" },
      { sender: 'bot', text: "Hello! Dr. Rajesh (Cardiology) is available tomorrow from 4:00 PM to 8:00 PM. 🩺\n\nWould you like me to book a slot for you?" },
      { sender: 'user', text: "Yes, around 6 PM please." },
      { sender: 'bot', text: "Slot Confirmed! ✅\n\nYour appointment with Dr. Rajesh is scheduled for tomorrow at 6:00 PM at our Aluva clinic. Reply 'Cancel' if you need to reschedule." }
    ]
  },
  {
    id: 'restaurants',
    name: 'Restaurants & Cafes',
    icon: <Utensils />,
    title: "Automate orders and reservations.",
    description: "Let your AI handle the hungry customers. From sharing PDF menus to booking tables for the weekend, Faigen AI keeps your restaurant running smoothly.",
    features: [
      "Share digital menus and daily specials",
      "Takeaway and delivery order processing",
      "Automated table reservations",
      "Broadcast festive offers and discounts"
    ],
    chat: [
      { sender: 'user', text: "Hi, can I get the menu? And do you deliver to Edappally?" },
      { sender: 'bot', text: "Welcome to Malabar Bites! 🍛\n\nYes, we deliver to Edappally within 45 mins. I'm attaching our latest menu below.\n\nWhat would you like to order today?" },
      { sender: 'user', text: "2 Chicken Biriyani and 1 Alfaham." },
      { sender: 'bot', text: "Perfect choice! 🍗\n\nTotal is ₹680. Please provide your exact location or send a Google Maps pin, and our delivery partner will be on their way!" }
    ]
  },
  {
    id: 'realestate',
    name: 'Real Estate & Agencies',
    icon: <Building2 />,
    title: "Qualify leads while you sleep.",
    description: "Engage property seekers instantly. The AI captures their requirements, shares property brochures, and schedules site visits without human intervention.",
    features: [
      "Automated lead qualification (Budget, Location)",
      "Instant brochure & floor plan sharing",
      "Schedule site visits with agents",
      "Follow-up drip campaigns via WhatsApp"
    ],
    chat: [
      { sender: 'user', text: "I saw your ad for the 3BHK villas in Thrissur. What's the starting price?" },
      { sender: 'bot', text: "Hello! Our premium 3BHK villas in Thrissur start at ₹85 Lakhs. 🏡\n\nAre you looking to move in immediately, or is this an investment?" },
      { sender: 'user', text: "Looking to move in by next year." },
      { sender: 'bot', text: "Understood. I've sent the complete project brochure above. 📄\n\nWould you like to schedule a free site visit this weekend with our agent?" }
    ]
  }
];

/* ── BOTTOM FEATURES DATA ── */
const extraFeatures = [
  {
    title: "Broadcast Campaigns",
    desc: "Send Meta-approved marketing templates to thousands of users in one click. Perfect for offers.",
    icon: <Zap />,
    gradient: "from-purple-500/5 to-pink-500/5",
    iconColor: "text-purple-600",
    glow: "bg-purple-300"
  },
  {
    title: "Omnichannel Inbox",
    desc: "If the AI can't answer, a human can take over. Monitor all WhatsApp & IG chats in one place.",
    icon: <MessageSquare />,
    gradient: "from-blue-500/5 to-cyan-500/5",
    iconColor: "text-blue-600",
    glow: "bg-blue-300"
  },
  {
    title: "Custom AI Training",
    desc: "Train your agent on your specific business data, PDFs, and website links for accurate answers.",
    icon: <Bot />,
    gradient: "from-amber-500/5 to-orange-500/5",
    iconColor: "text-amber-600",
    glow: "bg-amber-300"
  },
  {
    title: "Analytics & Insights",
    desc: "Track read rates, order volume, and AI resolution rates to continuously improve performance.",
    icon: <BarChart3 />,
    gradient: "from-emerald-500/5 to-teal-500/5",
    iconColor: "text-emerald-600",
    glow: "bg-emerald-300"
  }
];

export default function UseCasesPage() {
  const [activeTab, setActiveTab] = useState(industries[0]);
  
  // Navigation State
  const [menuOpen, setMenuOpen] = useState(false);

  // Contact Popup State
  const [popupOpen, setPopupOpen] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText("info@faigen.in");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const fadeUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
  };

  return (
    <div className="min-h-screen bg-[#fafcff] bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-50 via-white to-white text-[#1A1A1A] font-sans selection:bg-blue-100 selection:text-blue-900 relative overflow-hidden">
      
      {/* ── POPUP MODAL ── */}
      <AnimatePresence>
        {popupOpen && (
          <motion.div
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            transition={{ duration: 0.15 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/40 backdrop-blur-md px-4"
            onClick={() => setPopupOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.96, y: 10, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.96, y: 10, opacity: 0 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              onClick={e => e.stopPropagation()}
              className="bg-white/90 backdrop-blur-xl rounded-3xl shadow-2xl border border-white w-full max-w-[420px] overflow-hidden"
            >
              <div className="p-8">
                <div className="flex justify-between items-start mb-6">
                  <div className="w-12 h-12 rounded-2xl bg-blue-50 flex items-center justify-center text-[#2563EB] border border-blue-100 shadow-sm">
                    <ShieldCheck size={24} strokeWidth={1.5} />
                  </div>
                  <button onClick={() => setPopupOpen(false)} className="text-gray-400 hover:text-gray-800 bg-gray-50 border border-gray-200 w-8 h-8 flex items-center justify-center rounded-full transition-colors">
                    <X size={16} strokeWidth={2} />
                  </button>
                </div>
                <h3 className="text-[22px] font-bold text-[#1A1A1A] tracking-tight mb-2">Request API Access</h3>
                <p className="text-[14px] text-gray-500 leading-relaxed mb-8">
                  Faigen Console is available for businesses. Contact our deployment team to get started.
                </p>
                <div className="space-y-4">
                  <div className="bg-white border border-gray-200 rounded-2xl p-4 flex items-center justify-between group hover:border-[#2563EB] transition-all cursor-pointer shadow-sm">
                    <div className="flex items-center gap-4">
                      <Mail size={18} className="text-gray-400 group-hover:text-[#2563EB] transition-colors" />
                      <a href="mailto:info@faigen.in" className="text-[15px] font-bold text-[#1A1A1A]">info@faigen.in</a>
                    </div>
                    <button onClick={handleCopy} className="text-[#2563EB] hover:text-blue-800 bg-blue-50 p-2 rounded-xl transition-colors">
                      {copied ? <Check size={16} strokeWidth={3} /> : <Copy size={16} />}
                    </button>
                  </div>
                  <a href="tel:+919876543210" className="flex items-center gap-4 p-4 rounded-2xl border border-gray-200 bg-white hover:border-[#2563EB] hover:bg-gray-50 transition-all group shadow-sm">
                    <Phone size={18} className="text-gray-400 group-hover:text-[#2563EB] transition-colors" />
                    <span className="text-[15px] font-bold text-[#1A1A1A]">+91 98765 43210</span>
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ── HEADER ── */}
      <header className="relative flex justify-between items-center px-6 md:px-10 py-5 w-full z-50 bg-white border-b border-gray-100 max-w-[1500px] mx-auto">
        <div className="flex items-center gap-3 cursor-pointer">
          <Link href="/">
            <img src="/logonew.png" alt="Faigen Logo" className="h-9 md:h-8 w-auto object-contain" />
          </Link>
        </div>

        <nav className="hidden lg:flex items-center gap-8 text-[15px] font-semibold text-gray-500">
          <a href="/" className="hover:text-[#1A1A1A] transition-colors">Home</a>
          <button onClick={() => setPopupOpen(true)} className="hover:text-[#1A1A1A] transition-colors">API Pricing</button>
          <button onClick={() => setPopupOpen(true)} className="text-[#1A1A1A] transition-colors">Use Cases</button>
        </nav>

        <div className="hidden lg:flex items-center gap-5">
          <Link href="/login" className="text-gray-600 text-[15px] font-semibold hover:text-[#1A1A1A] transition-colors">Sign in</Link>
          <button onClick={() => setPopupOpen(true)} className="bg-[#2563EB] text-white px-5 py-2.5 text-[14px] font-bold rounded-lg hover:bg-blue-700 transition-colors shadow-sm">Request Access</button>
        </div>

        <button className="lg:hidden p-2 text-[#1A1A1A]" onClick={() => setMenuOpen(v => !v)}>
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </header>

      {/* Mobile drawer */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -6 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.2 }}
            className="lg:hidden absolute top-[70px] left-0 right-0 bg-white border-b border-gray-100 px-6 pb-6 flex flex-col z-40 shadow-xl"
          >
            <a href="#" onClick={() => setMenuOpen(false)} className="text-[16px] font-bold text-[#1A1A1A] py-4 border-b border-gray-100">Platform</a>
            <button onClick={() => { setPopupOpen(true); setMenuOpen(false) }} className="text-[16px] font-bold text-[#1A1A1A] py-4 border-b border-gray-100 text-left">API Pricing</button>
            <button onClick={() => { setPopupOpen(true); setMenuOpen(false) }} className="text-[16px] font-bold text-[#1A1A1A] py-4 border-b border-gray-100 text-left">Use Cases</button>
            <div className="mt-6 flex flex-col gap-3">
              <Link href="/login" className="text-center bg-gray-50 border border-gray-200 text-[#1A1A1A] py-3.5 rounded-lg text-[15px] font-bold">Sign in</Link>
              <button onClick={() => { setPopupOpen(true); setMenuOpen(false) }} className="bg-[#2563EB] text-white py-3.5 rounded-lg text-[15px] font-bold shadow-sm">Request Access</button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <main className="pb-24">
        {/* ── HERO SECTION ── */}
        <section className="pt-20 pb-16 px-6 text-center max-w-[900px] mx-auto relative">
          <motion.div initial="hidden" animate="visible" variants={fadeUp} className="relative z-10">
            <div className="flex items-center justify-center gap-2 mb-6">
              <span className="bg-white text-[#2563EB] px-3.5 py-1.5 rounded-full text-[12px] font-bold tracking-widest uppercase border border-blue-100 shadow-sm flex items-center gap-1.5">
                <Sparkles size={14} /> Solutions
              </span>
            </div>
            <h1 className="text-[3rem] md:text-[4.5rem] font-medium leading-[1.05] tracking-tight text-[#1A1A1A] mb-6">
              Tailored for <span className="text-[#2563EB]">every</span> business.
            </h1>
            <p className="text-gray-500 text-[18px] md:text-[20px] font-medium leading-relaxed max-w-[700px] mx-auto">
              From taking food orders to booking clinic appointments, see how Faigen AI acts as the ultimate digital employee for your industry.
            </p>
          </motion.div>
        </section>

        {/* ── INTERACTIVE USE CASE SECTION (GLASSMORPHISM) ── */}
        <section className="max-w-[1400px] mx-auto px-4 md:px-6">
          
          {/* Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-3 mb-10 relative z-10">
            {industries.map((ind) => (
              <button
                key={ind.id}
                onClick={() => setActiveTab(ind)}
                className={`flex items-center gap-2.5 px-6 py-3.5 rounded-2xl text-[15px] font-bold transition-all duration-300 ${
                  activeTab.id === ind.id 
                    ? 'bg-[#2563EB] text-white shadow-[0_8px_20px_-5px_rgba(37,99,235,0.4)] scale-105' 
                    : 'bg-white/60 backdrop-blur-md text-gray-500 border border-white hover:bg-white hover:text-gray-900 shadow-sm'
                }`}
              >
                {/* Dynamically size the icon for the tab */}
                {React.cloneElement(ind.icon, { size: 18, strokeWidth: 2 })}
                {ind.name}
              </button>
            ))}
          </div>

          {/* Content Window (Glass Effect) */}
          <div className="bg-white/60 backdrop-blur-2xl border border-white rounded-[2.5rem] overflow-hidden shadow-[0_30px_60px_-15px_rgba(0,0,0,0.05)] flex flex-col lg:flex-row min-h-[650px] relative">
            
            {/* Ambient Backgrounds inside the container */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#EFF6FF] blur-[100px] rounded-full z-0 opacity-70 pointer-events-none" />

            {/* Left Side: Text & Features */}
            <div className="w-full lg:w-1/2 p-10 lg:p-16 flex flex-col justify-center relative z-10 border-b lg:border-b-0 lg:border-r border-white/50">
              <AnimatePresence mode="wait">
                <motion.div
                  key={`text-${activeTab.id}`}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="mb-6 text-[#2563EB]">
                    {/* Clean, large icon without a background box */}
                    {React.cloneElement(activeTab.icon, { size: 48, strokeWidth: 1.5 })}
                  </div>
                  
                  <h2 className="text-[2.2rem] md:text-[3rem] font-bold leading-[1.1] tracking-tight text-[#1A1A1A] mb-6">
                    {activeTab.title}
                  </h2>
                  <p className="text-[17px] text-gray-500 leading-relaxed font-medium mb-10">
                    {activeTab.description}
                  </p>

                  <div className="space-y-4">
                    {activeTab.features.map((feature, idx) => (
                      <div key={idx} className="flex items-start gap-3">
                        <div className="mt-0.5">
                          <CheckCircle2 size={20} className="text-[#2563EB]" />
                        </div>
                        <span className="text-[15.5px] font-bold text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Right Side: Chat Simulation UI */}
            <div className="w-full lg:w-1/2 p-6 lg:p-12 flex items-center justify-center relative z-10 bg-gradient-to-br from-blue-50/50 to-transparent">
              <AnimatePresence mode="wait">
                <motion.div
                  key={`chat-${activeTab.id}`}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                  className="w-full max-w-[420px] bg-white rounded-[2rem] shadow-[0_30px_60px_-15px_rgba(0,0,0,0.1)] border border-white overflow-hidden flex flex-col"
                >
                  {/* Fake WhatsApp Header */}
                  <div className="bg-[#075E54] px-5 py-4 flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center text-white shrink-0">
                      <Bot size={22} />
                    </div>
                    <div>
                      <h3 className="text-white text-[15px] font-bold leading-tight">Faigen AI</h3>
                      <p className="text-white/70 text-[12px] font-medium">Online</p>
                    </div>
                    <WhatsAppIcon size={24} className="text-white/50 ml-auto" />
                  </div>

                  {/* Chat Body (Increased Height) */}
                  <div className="bg-[#efeae2] p-5 flex flex-col gap-4 h-[500px] overflow-y-auto relative"
                       style={{ backgroundImage: "url('https://i.pinimg.com/736x/8c/98/99/8c98994518b575bfd8c949e91d20548b.jpg')", backgroundSize: 'cover', backgroundBlendMode: 'overlay' }}>
                    
                    {activeTab.chat.map((msg, idx) => (
                      <motion.div 
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: idx * 0.2 }}
                        key={idx} 
                        className={`max-w-[85%] p-3 px-4 text-[14.5px] font-medium leading-relaxed shadow-sm ${
                          msg.sender === 'user' 
                            ? 'bg-white text-[#1A1A1A] rounded-2xl rounded-tl-sm self-start' 
                            : 'bg-[#dcf8c6] text-[#1A1A1A] rounded-2xl rounded-tr-sm self-end border border-[#c5e1b0]'
                        }`}
                      >
                        {msg.text.split('\n').map((line, i) => (
                          <React.Fragment key={i}>
                            {line}
                            {i !== msg.text.split('\n').length - 1 && <br />}
                          </React.Fragment>
                        ))}
                      </motion.div>
                    ))}
                  </div>

                  {/* Fake Input */}
                  <div className="bg-white p-3 flex items-center gap-3 border-t border-gray-100">
                    <div className="flex-1 bg-gray-100 h-11 rounded-full px-5 flex items-center text-gray-400 text-[14.5px]">
                      Message...
                    </div>
                    <div className="w-11 h-11 bg-[#00A884] rounded-full flex items-center justify-center text-white shrink-0 shadow-sm">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m22 2-7 20-4-9-9-4Z"/><path d="M22 2 11 13"/></svg>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

          </div>
        </section>

        {/* ── GRADIENT GLASS CARDS (4 COLUMNS) ── */}
        <section className="max-w-[1400px] mx-auto px-4 md:px-6 mt-32">
          <div className="text-center mb-12">
            <h3 className="text-[2.5rem] font-bold text-[#1A1A1A] tracking-tight mb-4">More than just chat.</h3>
            <p className="text-gray-500 font-medium text-[18px]">Powerful tools running behind the scenes.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {extraFeatures.map((feature, i) => (
              <div 
                key={i} 
                className={`relative overflow-hidden bg-gradient-to-br ${feature.gradient} bg-white/60 backdrop-blur-xl border border-white rounded-[2.5rem] p-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)] flex flex-col group hover:shadow-[0_15px_40px_rgb(0,0,0,0.08)] transition-all duration-300`}
              >
                {/* Ambient glow behind the card */}
                <div className={`absolute -right-8 -top-8 w-32 h-32 blur-[50px] opacity-40 rounded-full ${feature.glow} transition-opacity duration-500 group-hover:opacity-70`} />
                
                <div className="relative z-10 flex flex-col h-full">
                  {/* Clean icon styling without background boxes */}
                  <div className={`mb-6 ${feature.iconColor}`}>
                    {React.cloneElement(feature.icon, { size: 40, strokeWidth: 1.5 })}
                  </div>
                  <h4 className="text-[20px] font-bold text-[#1A1A1A] mb-3 leading-tight">{feature.title}</h4>
                  <p className="text-gray-500 font-medium leading-relaxed text-[15px]">
                    {feature.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── CTA BOTTOM (OMNI BENTO STYLE) ── */}
        <section className="max-w-[1400px] mx-auto px-4 md:px-6 mt-32 mb-10">
          <div className="bg-[#F8FAFC] rounded-[3rem] p-12 md:p-20 text-center relative overflow-hidden border border-gray-100 shadow-[0_20px_50px_-15px_rgba(0,0,0,0.05)]">
            
            {/* Pastel Background Blurs (Matching the Omni Component theme) */}
            <div className="absolute -top-10 -left-10 w-64 h-64 bg-[#BBF7D0] blur-[80px] rounded-full z-0 opacity-60 pointer-events-none" />
            <div className="absolute top-10 -right-10 w-64 h-64 bg-[#BAE6FD] blur-[80px] rounded-full z-0 opacity-60 pointer-events-none" />
            <div className="absolute -bottom-10 left-1/2 w-64 h-64 bg-[#FDE68A] blur-[80px] rounded-full z-0 opacity-50 pointer-events-none" />
            
            <div className="relative z-10">
              <h2 className="text-[2.8rem] md:text-[4.5rem] font-medium text-[#1A1A1A] tracking-tight leading-[1.05] mb-6">
                Ready to <span className="text-[#2563EB]">automate?</span>
              </h2>
              <p className="text-gray-500 text-[18px] md:text-[20px] max-w-[600px] mx-auto font-medium mb-10 leading-relaxed">
                Join other top businesses in Kerala using Faigen's Agentified platform to scale their customer operations 24/7.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <button onClick={() => setPopupOpen(true)} className="bg-[#2563EB] text-white px-10 py-4 rounded-xl font-bold text-[16px] hover:bg-blue-700 transition-all shadow-[0_8px_20px_-5px_rgba(37,99,235,0.4)] hover:shadow-[0_8px_25px_-5px_rgba(37,99,235,0.5)] flex items-center justify-center gap-2">
                  Request API Access <ArrowRight size={18} />
                </button>
              </div>
            </div>
          </div>
        </section>

      </main>
    </div>
  );
}