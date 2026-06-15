'use client'

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, X, Mail, Phone, ShieldCheck, Check, Copy } from "lucide-react";

const faqs = [
  {
    id: 1,
    question: "What is the difference between a standard chatbot and Faigen's AI Agent?",
    answer: "Unlike traditional chatbots that rely on rigid, pre-programmed menu buttons, our AI agents use advanced natural language processing. They can understand intent, negotiate sales, share specific product links from your catalog, and handle complex queries just like a human sales rep."
  },
  {
    id: 2,
    question: "Does the AI truly understand Malayalam and Manglish?",
    answer: "Yes, absolutely. Our engines are specifically trained for the Kerala market. They seamlessly detect and respond in fluent Malayalam, English, or conversational 'Manglish', ensuring your local customers feel completely at home while chatting."
  },
  {
    id: 3,
    question: "How long does it take to deploy an AI agent for my business?",
    answer: "Most WhatsApp and Instagram automation agents can be deployed within 3 to 5 days. All we need is your product catalog, basic business FAQs, and your brand's tone of voice. Custom web development timelines vary based on the project scope."
  },
  {
    id: 4,
    question: "Do I need technical knowledge to manage the platform?",
    answer: "Not at all. We provide you with a clean, centralized Command Dashboard. From there, you can monitor all automated conversations, view sales analytics, and seamlessly take over a chat manually if a customer requires special attention."
  }
];

/* ── CONTACT MODAL ─────────────────────────────────────────────── */

function ContactModal({ onClose }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText("info@faigen.in");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }} 
        animate={{ opacity: 1 }} 
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }} 
        className="fixed inset-0 z-[100] flex items-center justify-center bg-black/20 backdrop-blur-md px-4"
        onClick={(e) => e.target === e.currentTarget && onClose()}
      >
        <motion.div
          initial={{ scale: 0.95, y: 20, opacity: 0 }} 
          animate={{ scale: 1, y: 0, opacity: 1 }} 
          exit={{ scale: 0.95, y: 20, opacity: 0 }}
          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          onClick={(e) => e.stopPropagation()}
          className="bg-white rounded-[32px] shadow-[0_20px_60px_rgba(0,0,0,0.08)] border border-[#E5E5EA] w-full max-w-[420px] overflow-hidden relative"
        >
          <div className="p-8">
            <div className="flex justify-between items-start mb-6">
              <div className="w-12 h-12 rounded-2xl bg-[#F5F5F7] flex items-center justify-center text-[#1D1D1F] border border-[#E5E5EA]">
                <ShieldCheck size={24} strokeWidth={1.5} />
              </div>
              <button onClick={onClose} className="text-[#86868B] hover:text-[#1D1D1F] transition-colors bg-[#F5F5F7] border border-[#E5E5EA] w-8 h-8 flex items-center justify-center rounded-full">
                <X size={16} strokeWidth={2} />
              </button>
            </div>

            <h3 className="text-[20px] font-semibold text-[#1D1D1F] tracking-tight mb-2">Contact our team</h3>
            <p className="text-[14px] text-[#86868B] leading-relaxed mb-8">
              Have a specific question not covered in the FAQ? Reach out to our deployment team for dedicated support.
            </p>

            <div className="space-y-4 mb-2">
              <div className="bg-[#F5F5F7] border border-[#E5E5EA] rounded-2xl p-4 flex items-center justify-between group hover:border-[#D2D2D7] hover:bg-[#EAEAEB] transition-all cursor-pointer">
                <div className="flex items-center gap-4">
                  <Mail size={18} className="text-[#86868B] group-hover:text-[#1D1D1F] transition-colors" />
                  <a href="mailto:info@faigen.in" className="text-[14px] font-medium text-[#1D1D1F]">info@faigen.in</a>
                </div>
                <button onClick={handleCopy} className="text-[#86868B] hover:text-[#0066CC] transition-colors p-2 bg-white shadow-sm rounded-xl border border-[#E5E5EA]">
                  {copied ? <Check size={16} strokeWidth={3} /> : <Copy size={16} />}
                </button>
              </div>
              <a href="tel:+919876543210" className="flex items-center gap-4 p-4 rounded-2xl border border-[#E5E5EA] hover:border-[#D2D2D7] bg-[#F5F5F7] hover:bg-[#EAEAEB] transition-all group">
                <Phone size={18} className="text-[#86868B] group-hover:text-[#1D1D1F] transition-colors" />
                <span className="text-[14px] font-medium text-[#1D1D1F]">+91 98765 43210</span>
              </a>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  )
}

/* ── FAQ ITEM ──────────────────────────────────────────────────── */

const FAQItem = ({ faq, isOpen, onToggle }) => {
  return (
    <div 
      className={`w-full overflow-hidden transition-all duration-300 rounded-[24px] cursor-pointer border ${
        isOpen 
          ? "bg-white border-[#E5E5EA] shadow-[0_8px_30px_rgb(0,0,0,0.04)] z-10 relative scale-[1.02] md:scale-[1.01]" 
          : "bg-transparent border-[#E5E5EA] hover:bg-[#F5F5F7] relative"
      }`}
      onClick={onToggle}
    >
      <div className="flex justify-between items-center p-6 md:p-8">
        <h4 className={`text-[16px] md:text-[18px] font-semibold tracking-tight pr-6 transition-colors ${isOpen ? "text-[#1D1D1F]" : "text-[#86868B]"}`}>
          {faq.question}
        </h4>
        <div className={`flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 ${isOpen ? "bg-[#1D1D1F] text-white shadow-md rotate-180" : "bg-white border border-[#E5E5EA] text-[#86868B]"}`}>
          {isOpen ? <X size={18} strokeWidth={2.5} /> : <Plus size={18} strokeWidth={2} />}
        </div>
      </div>
      
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }} 
          >
            <div className="px-6 md:px-8 pb-8 text-[15px] font-medium text-[#86868B] leading-relaxed">
              {faq.answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

/* ── MAIN COMPONENT ────────────────────────────────────────────── */

export default function FAQSection() {
  const [openId, setOpenId] = useState(2);
  const [popupOpen, setPopupOpen] = useState(false);

  const handleToggle = (id) => {
    setOpenId((prevId) => (prevId === id ? null : id));
  };

  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
  };

  return (
    <section className="relative w-full py-24 md:py-32 font-sans text-[#1D1D1F] bg-[#FBFBFD] overflow-hidden selection:bg-[#0066CC] selection:text-white">
      
      {/* Background Ambient Glow */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[600px] h-[600px] bg-[#0066CC] opacity-[0.04] blur-[150px] rounded-full pointer-events-none z-0" />

      {/* Main Container */}
      <div className="max-w-[1500px] mx-auto px-6 md:px-12 xl:px-16 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">
          
          {/* Left Column: Heading & CTA */}
          <motion.div 
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={fadeUp}
            className="lg:col-span-5 lg:sticky lg:top-32"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-[#E5E5EA] text-[#86868B] text-[11px] font-bold tracking-widest uppercase shadow-[0_2px_8px_rgba(0,0,0,0.02)] mb-8">
              <span className="w-2 h-2 rounded-full bg-[#0066CC] animate-pulse"></span>
              Support & Queries
            </div>

            <h2 className="text-[3.2rem] md:text-[4.5rem] font-semibold leading-[1.02] tracking-tighter text-[#1D1D1F] mb-6">
              Frequently <br className="hidden lg:block" />
              asked <br className="hidden lg:block" />
              questions.
            </h2>
            <p className="text-[#86868B] text-[16px] md:text-[18px] font-medium mb-12 max-w-[420px] leading-relaxed tracking-tight">
              Find answers to frequently asked questions about our AI agents, integrations, and deployment timelines.
            </p>
            
            {/* Contact Button */}
            <button 
              onClick={() => setPopupOpen(true)}
              className="bg-[#1D1D1F] border border-transparent hover:bg-black text-white px-8 py-4 rounded-full text-[15px] font-semibold shadow-[0_8px_20px_rgba(0,0,0,0.08)] transition-all duration-300 flex items-center gap-2 group"
            >
              Contact our team
              <Mail size={16} className="text-[#86868B] group-hover:text-white transition-colors" />
            </button>
          </motion.div>

          {/* Right Column: Premium Accordion */}
          <motion.div 
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={fadeUp}
            className="lg:col-span-7 flex flex-col gap-4 relative"
          >
            {faqs.map((faq) => (
              <FAQItem 
                key={faq.id} 
                faq={faq} 
                isOpen={openId === faq.id} 
                onToggle={() => handleToggle(faq.id)} 
              />
            ))}
          </motion.div>

        </div>
      </div>

      {/* Render Contact Modal */}
      {popupOpen && <ContactModal onClose={() => setPopupOpen(false)} />}
      
    </section>
  );
}