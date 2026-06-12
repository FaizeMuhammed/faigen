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
        transition={{ duration: 0.15 }} 
        className="fixed inset-0 z-[100] flex items-center justify-center bg-black/40 backdrop-blur-sm px-4"
        onClick={(e) => e.target === e.currentTarget && onClose()}
      >
        <motion.div
          initial={{ scale: 0.96, y: 10, opacity: 0 }} 
          animate={{ scale: 1, y: 0, opacity: 1 }} 
          exit={{ scale: 0.96, y: 10, opacity: 0 }}
          transition={{ duration: 0.2, ease: "easeOut" }}
          onClick={(e) => e.stopPropagation()}
          className="bg-white rounded-[4px] shadow-[0_16px_40px_rgba(0,0,0,0.12)] border border-[#eeeeee] w-full max-w-[400px] overflow-hidden relative"
        >
          <div className="p-6 sm:p-8">
            <div className="flex justify-between items-start mb-5">
              <div className="w-10 h-10 rounded-[2px] bg-[#e8f0fe] flex items-center justify-center text-[#387ed1] border border-[#d2e3fc]">
                <ShieldCheck size={20} strokeWidth={1.5} />
              </div>
              <button onClick={onClose} className="text-[#9e9e9e] hover:text-[#424242] transition-colors bg-[#fbfbfb] border border-[#eeeeee] w-8 h-8 flex items-center justify-center rounded-[2px]">
                <X size={16} strokeWidth={2} />
              </button>
            </div>

            <h3 className="text-[18px] font-medium text-[#424242] tracking-tight mb-2">Contact our team</h3>
            <p className="text-[13px] text-[#9e9e9e] leading-relaxed mb-6">
              Have a specific question not covered in the FAQ? Reach out to our deployment team for dedicated support.
            </p>

            <div className="space-y-3 mb-2">
              <div className="bg-[#fbfbfb] border border-[#eeeeee] rounded-[2px] p-3 flex items-center justify-between group hover:border-[#387ed1] transition-all cursor-pointer">
                <div className="flex items-center gap-3">
                  <Mail size={16} className="text-[#9e9e9e] group-hover:text-[#387ed1]" />
                  <a href="mailto:info@faigen.in" className="text-[13px] font-medium text-[#424242]">info@faigen.in</a>
                </div>
                <button onClick={handleCopy} className="text-[#387ed1] hover:text-[#2d65a8] transition-colors">
                  {copied ? <Check size={16} strokeWidth={3} /> : <Copy size={16} />}
                </button>
              </div>
              <a href="tel:+919876543210" className="flex items-center gap-3 p-3 rounded-[2px] border border-[#eeeeee] hover:border-[#387ed1] hover:bg-[#fbfbfb] transition-all group">
                <Phone size={16} className="text-[#9e9e9e] group-hover:text-[#387ed1]" />
                <span className="text-[13px] font-medium text-[#424242]">+91 98765 43210</span>
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
      className={`w-full overflow-hidden transition-colors duration-200 rounded-[4px] cursor-pointer border ${
        isOpen 
          ? "bg-white border-[#387ed1] shadow-[0_4px_20px_rgba(0,0,0,0.04)] z-10 relative" 
          : "bg-[#fbfbfb] border-[#eeeeee] hover:bg-white relative"
      }`}
      onClick={onToggle}
    >
      <div className="flex justify-between items-center p-5 md:p-6">
        <h4 className={`text-[15px] md:text-[16px] font-medium pr-4 transition-colors ${isOpen ? "text-[#1A1A1A]" : "text-[#424242]"}`}>
          {faq.question}
        </h4>
        <div className={`flex-shrink-0 w-8 h-8 rounded-[2px] flex items-center justify-center transition-colors duration-200 ${isOpen ? "bg-[#e8f0fe] text-[#387ed1] border border-[#d2e3fc]" : "bg-white border border-[#eeeeee] text-[#9e9e9e]"}`}>
          {isOpen ? <X size={16} strokeWidth={2} /> : <Plus size={16} strokeWidth={2} />}
        </div>
      </div>
      
      {/* Added initial={false} to fix page-restore bugs, and simplified transition for speed */}
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeOut" }} // Snappy, clean easeOut avoids lag
          >
            <div className="px-5 md:px-6 pb-6 text-[14px] text-[#666666] leading-relaxed">
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
    <section className="relative w-full py-24 md:py-32 font-sans text-[#1A1A1A] overflow-hidden">
      
      {/* Main Container aligned with previous sections */}
      <div className="max-w-[1500px] mx-auto px-6 md:px-12 xl:px-16 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Heading & CTA */}
          <motion.div 
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={fadeUp}
            className="lg:col-span-5 lg:sticky lg:top-32"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-[2px] bg-white border border-[#eeeeee] text-[#424242] text-[11px] font-bold tracking-widest uppercase shadow-sm mb-6">
              <span className="w-2 h-2 rounded-full bg-[#387ed1]"></span>
              Support & Queries
            </div>

            <h2 className="text-[3.2rem] md:text-[4.2rem] font-medium leading-[1.05] tracking-tight text-[#1A1A1A] mb-6">
              Frequently <br />
              asked <br />
              questions.
            </h2>
            <p className="text-[#666666] text-[15px] mb-10 max-w-[380px] leading-relaxed">
              Find answers to frequently asked questions about our AI agents, integrations, and deployment timelines.
            </p>
            
            {/* Contact Button opens the popup */}
            <button 
              onClick={() => setPopupOpen(true)}
              className="bg-white border border-[#e0e0e0] hover:border-[#387ed1] hover:text-[#387ed1] text-[#424242] px-8 py-3.5 rounded-[2px] text-[14px] font-medium shadow-sm transition-all flex items-center gap-2"
            >
              Contact our team
            </button>
          </motion.div>

          {/* Right Column: Flat Accordion */}
          <motion.div 
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={fadeUp}
            className="lg:col-span-7 flex flex-col gap-3 relative"
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