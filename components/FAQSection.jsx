'use client'

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, X } from "lucide-react";

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

const FAQItem = ({ faq, isOpen, onToggle }) => {
  return (
    <div 
      className={`w-full overflow-hidden transition-all duration-500 rounded-[1.5rem] cursor-pointer border ${
        isOpen 
          ? "bg-white/80 backdrop-blur-xl border-white shadow-[0_20px_40px_-15px_rgba(0,0,0,0.1)] scale-[1.02] z-10" 
          : "bg-white/40 backdrop-blur-md border-white/50 hover:bg-white/60 shadow-[0_8px_20px_-10px_rgba(0,0,0,0.05)] scale-100"
      }`}
      onClick={onToggle}
    >
      <div className="flex justify-between items-center p-6 md:p-8">
        <h4 className={`text-[16px] md:text-[17px] font-bold pr-4 transition-colors ${isOpen ? "text-gray-900" : "text-gray-700"}`}>
          {faq.question}
        </h4>
        <div className={`flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center transition-colors duration-300 ${isOpen ? "bg-white shadow-sm text-gray-900" : "bg-white/50 text-gray-500"}`}>
          {isOpen ? <X size={18} strokeWidth={2.5} /> : <Plus size={18} strokeWidth={2.5} />}
        </div>
      </div>
      
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.23, 1, 0.32, 1] }}
          >
            <div className="px-6 md:px-8 pb-8 text-[15px] text-gray-600 leading-relaxed font-medium">
              {faq.answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default function FAQSection() {
  const [openId, setOpenId] = useState(2);

  const handleToggle = (id) => {
    setOpenId((prevId) => (prevId === id ? null : id));
  };

  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
  };

  return (
    // Changed overall background to pure white (bg-white)
    <section className="relative w-full bg-white py-24 md:py-32 font-sans text-[#1A1A1A] overflow-hidden">
      
      {/* --- Ambient Background Blurs for Glass Refraction --- */}
      <div className="absolute top-[10%] left-[15%] w-[500px] h-[500px] bg-blue-200/40 rounded-full blur-[120px] pointer-events-none z-0" />
      <div className="absolute bottom-[10%] right-[10%] w-[600px] h-[600px] bg-emerald-200/30 rounded-full blur-[120px] pointer-events-none z-0" />

      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Heading & CTA */}
          <motion.div 
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={fadeUp}
            className="lg:col-span-5 lg:sticky lg:top-32"
          >
            <h2 className="text-[3.2rem] md:text-[4.5rem] font-medium leading-[1.05] tracking-tight text-[#1A1A1A] mb-6">
              Frequently <br />
              Asked <br />
              Questions.
            </h2>
            <p className="text-gray-500 text-[16px] font-medium mb-10 max-w-sm leading-relaxed">
              Find answers to frequently asked questions about our AI agents and cinematic digital storefronts.
            </p>
            {/* CTA button with its own glass effect works on pure white background too */}
            <button className="bg-white/80 backdrop-blur-md border border-gray-200 hover:bg-white hover:border-gray-300 text-gray-900 px-8 py-3.5 rounded-xl text-[15px] font-bold shadow-[0_8px_20px_rgba(0,0,0,0.04)] transition-all">
              Contact us
            </button>
          </motion.div>

          {/* Right Column: Glass Accordion */}
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
    </section>
  );
}