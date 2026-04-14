'use client'

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  MessageCircle, Instagram, LayoutDashboard, Target, Zap, Heart, Menu, X, ArrowRight, Mail
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

/* ── MAIN COMPONENT ───────────────────────────────────────────── */
export default function AboutPage() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [popupOpen, setPopupOpen] = useState(false);

  return (
    <main className="min-h-screen bg-white font-sans text-[#1A1A1A] selection:bg-blue-100 overflow-hidden">
      
      {/* ── POPUP MODAL ────────────────────────────────────────── */}
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
              <div className="h-28 bg-gradient-to-r from-[#FFD6EB] via-[#E4E0FA] to-[#DDF1E4] relative flex items-start justify-end p-4">
                <button
                  onClick={() => setPopupOpen(false)}
                  className="bg-white/40 hover:bg-white/80 p-2 rounded-full text-gray-800 transition-colors backdrop-blur-md"
                >
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
          <button onClick={() => setPopupOpen(true)} className="font-semibold text-gray-500 hover:text-black transition-colors">Pricing</button>
          <span className="font-semibold text-black border-b-2 border-[#2563EB] pb-1 cursor-default">About</span>
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
            <a href="#" onClick={() => setMenuOpen(false)} className="text-[15px] font-medium text-gray-500 py-3 border-b border-gray-50">Home</a>
            <button onClick={() => { setPopupOpen(true); setMenuOpen(false); }} className="text-[15px] font-medium text-gray-500 py-3 border-b border-gray-50 text-left">Pricing</button>
            <button onClick={() => setMenuOpen(false)} className="text-[15px] font-bold text-[#1A1A1A] py-3 border-b border-gray-50 text-left last:border-0">About</button>
            <button onClick={() => { setPopupOpen(true); setMenuOpen(false); }} className="mt-4 bg-[#1A1A1A] text-white py-3 text-[14px] font-semibold rounded-lg">Try it for free</button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ── HERO SECTION ────────────────────────────────────────── */}
      <section className="pt-20 pb-16 md:pt-32 md:pb-24 px-6 md:px-12 max-w-[1200px] mx-auto text-center flex flex-col items-center relative">
        {/* Subtle background gradient glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-50/50 rounded-full blur-[100px] -z-10 pointer-events-none"></div>
        
        <motion.div initial="hidden" animate="visible" variants={fadeUp}>
          <div className="bg-white border border-gray-200 px-5 py-2 rounded-full shadow-sm text-[12px] font-bold text-gray-700 mb-8 uppercase tracking-widest inline-flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#2563EB] animate-pulse"></span>
            Built in Kerala. Scaling across India.
          </div>
          
          <h1 className="text-[3rem] sm:text-[4rem] md:text-[5.5rem] font-medium leading-[1.05] tracking-tight text-[#1A1A1A] mb-8">
            We build AI agents <br className="hidden md:block"/>
            that <span className="relative inline-block z-10">
              work
              <svg className="absolute -bottom-1 left-[-2%] w-[104%] h-4 md:h-6 z-[-1]" viewBox="0 0 200 20" preserveAspectRatio="none">
                <path d="M0,15 C50,12 150,12 200,8" stroke="#F8DA5D" strokeWidth="3" fill="none" />
                <path d="M15,19 C70,16 130,17 180,14" stroke="#F8DA5D" strokeWidth="2.5" fill="none" />
              </svg>
            </span> while you <span className="bg-[#DDF1E4] px-4 md:px-6 py-0 md:py-2 rounded-[1rem] inline-block leading-tight mt-1 text-[#059669]">sleep.</span>
          </h1>

          <p className="max-w-3xl mx-auto text-gray-500 text-[16px] md:text-[18px] leading-relaxed font-medium">
            Faigen is a Kerala-based AI automation agency helping businesses across India automate their customer conversations, orders, and operations using WhatsApp and Instagram.
          </p>
        </motion.div>
      </section>

      {/* ── BENTO GRID (WITH APP IMAGES) ────────────────────────── */}
      <section className="py-16 px-6 md:px-12 max-w-[1400px] mx-auto">
        <motion.div 
          initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {/* Card 1: WhatsApp */}
          <motion.div variants={fadeUp} className="rounded-[2rem] border border-gray-200 shadow-sm h-[420px] relative overflow-hidden group bg-cover bg-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=1000&auto=format&fit=crop')" }}>
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/10 group-hover:bg-black/60 transition-colors duration-500"></div>
            <div className="relative z-10 p-8 flex flex-col h-full justify-between">
              <div className="w-14 h-14 bg-white/20 backdrop-blur-md rounded-[1.2rem] flex items-center justify-center text-[#4ade80] border border-white/20 shadow-lg">
                <MessageCircle size={28} />
              </div>
              <div>
                <h3 className="text-[26px] font-medium tracking-tight text-white mb-3">WhatsApp Agents</h3>
                <p className="text-gray-300 text-[15px] font-medium leading-relaxed">
                  Intelligent bots that talk to your customers in Malayalam and English, take orders, and answer queries 24/7.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Card 2: Instagram */}
          <motion.div variants={fadeUp} className="rounded-[2rem] border border-gray-200 shadow-sm h-[420px] relative overflow-hidden group bg-cover bg-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?q=80&w=1000&auto=format&fit=crop')" }}>
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/10 group-hover:bg-black/60 transition-colors duration-500"></div>
            <div className="relative z-10 p-8 flex flex-col h-full justify-between">
              <div className="w-14 h-14 bg-white/20 backdrop-blur-md rounded-[1.2rem] flex items-center justify-center text-[#f472b6] border border-white/20 shadow-lg">
                <Instagram size={28} />
              </div>
              <div>
                <h3 className="text-[26px] font-medium tracking-tight text-white mb-3">Instagram Auto</h3>
                <p className="text-gray-300 text-[15px] font-medium leading-relaxed">
                  Turn comments and DMs into a sales machine. Our AI responds instantly and converts followers into buyers.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Card 3: Dashboard */}
          <motion.div variants={fadeUp} className="rounded-[2rem] border border-gray-200 shadow-sm h-[420px] relative overflow-hidden group bg-cover bg-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1000&auto=format&fit=crop')" }}>
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/10 group-hover:bg-black/60 transition-colors duration-500"></div>
            <div className="relative z-10 p-8 flex flex-col h-full justify-between">
              <div className="w-14 h-14 bg-white/20 backdrop-blur-md rounded-[1.2rem] flex items-center justify-center text-[#60a5fa] border border-white/20 shadow-lg">
                <LayoutDashboard size={28} />
              </div>
              <div>
                <h3 className="text-[26px] font-medium tracking-tight text-white mb-3">Smart Dashboard</h3>
                <p className="text-gray-300 text-[15px] font-medium leading-relaxed">
                  Monitor all conversations, orders, and AI performance from one clean, real-time analytics dashboard.
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* ── OUR STORY (SPLIT LAYOUT) ─────────────────────────────── */}
      <section className="py-24 px-6 md:px-12 max-w-[1400px] mx-auto">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <div className="order-2 lg:order-1">
            <div className="text-[12px] font-bold text-[#2563EB] uppercase tracking-widest mb-6">Our Story</div>
            <h2 className="text-[2.8rem] sm:text-[3.5rem] font-medium leading-[1.1] tracking-tight text-[#1A1A1A] mb-8">
              Born from a <span className="bg-[#FFD6EB] px-4 rounded-[1rem] inline-block leading-tight text-[#be185d]">simple</span> observation.
            </h2>
            <div className="space-y-6 text-gray-500 text-[16px] md:text-[18px] leading-relaxed font-medium">
              <p>
                Kerala businesses are brilliant at what they do, but lose customers every day because they can't respond fast enough on WhatsApp and Instagram. A customer asks about a product at midnight. Nobody replies. They go to a competitor.
              </p>
              <p>
                We built Faigen to solve exactly that. Our AI agents never sleep, never miss a message, and speak your customer's language. Whether it's a local boutique or a large agency, we ensure every customer gets an instant, intelligent response.
              </p>
              <div className="pt-6 mt-6 border-t border-gray-200">
                <p className="text-[#1A1A1A] font-semibold text-[20px] italic">
                  "Your customers never sleep. Neither does our AI."
                </p>
              </div>
            </div>
          </div>

          <div className="order-1 lg:order-2 h-[500px] lg:h-[650px] rounded-[2rem] overflow-hidden shadow-xl border border-gray-100 bg-cover bg-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1500&auto=format&fit=crop')" }}>
            {/* Image container */}
          </div>

        </motion.div>
      </section>

      {/* ── OUR PHILOSOPHY (STRAIGHT LINES & GRID) ─────────────────── */}
      <section className="py-24 bg-[#F8FAFC] border-y border-gray-200">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12">
          <div className="text-center mb-16">
            <div className="text-[12px] font-bold text-gray-500 uppercase tracking-widest mb-4">The Faigen Difference</div>
            <h2 className="text-[2.8rem] md:text-[4rem] font-medium leading-[1.05] tracking-tight text-[#1A1A1A]">
              Our Philosophy
            </h2>
          </div>

          {/* Straight line grid layout */}
          <motion.div 
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer} 
            className="grid grid-cols-1 md:grid-cols-3 bg-white border border-gray-200 rounded-3xl overflow-hidden shadow-sm divide-y md:divide-y-0 md:divide-x divide-gray-200"
          >
            <motion.div variants={fadeUp} className="p-10 md:p-12 hover:bg-blue-50/50 transition-colors duration-300">
              <Target size={32} className="text-[#2563EB] mb-6" />
              <h3 className="text-[22px] font-semibold text-[#1A1A1A] mb-4">Built for Conversion</h3>
              <p className="text-gray-500 text-[15px] leading-relaxed font-medium">
                We don't just build chatbots that say "Hello". We engineer sales agents designed to qualify leads, showcase products, and close deals natively within social apps.
              </p>
            </motion.div>

            <motion.div variants={fadeUp} className="p-10 md:p-12 hover:bg-rose-50/50 transition-colors duration-300">
              <Heart size={32} className="text-[#E1306C] mb-6" />
              <h3 className="text-[22px] font-semibold text-[#1A1A1A] mb-4">Malayalam Native</h3>
              <p className="text-gray-500 text-[15px] leading-relaxed font-medium">
                Understanding context, colloquialisms, and regional nuances. Our models are deeply optimized to make your customers feel like they are talking to a local human.
              </p>
            </motion.div>

            <motion.div variants={fadeUp} className="p-10 md:p-12 hover:bg-emerald-50/50 transition-colors duration-300">
              <Zap size={32} className="text-[#059669] mb-6" />
              <h3 className="text-[22px] font-semibold text-[#1A1A1A] mb-4">Frictionless Setup</h3>
              <p className="text-gray-500 text-[15px] leading-relaxed font-medium">
                No complex coding or messy integrations on your end. We take your business data and hand you a fully trained, deployed AI agent within 48 hours.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ── CTA SECTION ─────────────────────────────────────────── */}
      <section className="py-24 px-6 md:px-12 max-w-[1400px] mx-auto text-center">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="bg-[#1A1A1A] rounded-[3rem] p-12 md:p-24 shadow-2xl relative overflow-hidden">
          
          {/* Subtle dark gradients */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#2563EB] blur-[150px] rounded-full z-0 opacity-30"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#E1306C] blur-[150px] rounded-full z-0 opacity-20"></div>

          <div className="relative z-10">
            <h2 className="text-[3rem] md:text-[4.5rem] font-medium leading-[1.05] tracking-tight text-white mb-6">
              Ready to automate?
            </h2>
            <p className="text-gray-400 text-[16px] md:text-[18px] mb-12 max-w-2xl mx-auto leading-relaxed font-medium">
              Join the forward-thinking businesses already using Faigen. Let's build your AI agent today.
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
              <button onClick={() => setPopupOpen(true)} className="bg-[#2563EB] text-white px-8 py-4 rounded-xl font-bold text-[16px] hover:bg-blue-600 transition-all shadow-md w-full sm:w-auto flex items-center justify-center gap-2">
                Get Started <ArrowRight size={18} />
              </button>
              <button onClick={() => setPopupOpen(true)} className="bg-transparent text-white border border-gray-600 px-8 py-4 rounded-xl font-bold text-[16px] hover:bg-white/10 transition-colors w-full sm:w-auto">
                Contact Sales
              </button>
            </div>
          </div>
        </motion.div>
      </section>

      {/* ── FOOTER ─────────────────────────────────────────────── */}
      <footer className="border-t border-gray-100 py-10 text-center bg-white">
        <div className="max-w-[1400px] mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-[14px] text-gray-500 font-bold tracking-wide">© 2026 FAIGEN TECHNOLOGIES</p>
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