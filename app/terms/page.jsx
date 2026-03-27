'use client'

import React from "react";
import { motion } from "framer-motion";
import { Scale, FileText, CheckCircle2, AlertCircle, ExternalLink, ArrowLeft, Landmark } from "lucide-react";
import Link from "next/link";

export default function TermsAndConditions() {
  const sections = [
    "Acceptance of Terms", "About Faigen", "Services", "Client Obligations", 
    "AI Agent Services", "Payment Terms", "Intellectual Property", 
    "Confidentiality", "Limitation of Liability", "Service Availability", 
    "Termination", "Governing Law", "Changes to Terms", "Contact Us"
  ];

  const fadeUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <div className="min-h-screen bg-[#FDFDFD] font-sans text-[#1A1A1A]">
      {/* --- Navigation --- */}
      <nav className="sticky top-0 z-50 w-full bg-white/80 backdrop-blur-md border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 group">
            <ArrowLeft size={18} className="text-gray-400 group-hover:text-[#2563EB] transition-colors" />
            
          </Link>
          <Link href="/privacy" className="text-xs font-bold text-[#2563EB] hover:underline uppercase tracking-widest">
            Privacy Policy
          </Link>
        </div>
      </nav>

      {/* --- Header --- */}
      <header className="relative pt-20 pb-12 overflow-hidden border-b border-gray-50">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div initial="hidden" animate="visible" variants={fadeUp} className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 text-slate-600 text-xs font-bold mb-6">
            <Scale size={14} /> Legal Framework
          </motion.div>
          <motion.h1 initial="hidden" animate="visible" variants={fadeUp} className="text-4xl md:text-5xl font-medium tracking-tight mb-4 text-gray-900">
            Terms & Conditions
          </motion.h1>
          <motion.p initial="hidden" animate="visible" variants={fadeUp} className="text-gray-500 font-medium">
            Effective as of March 2026 • Kerala, India
          </motion.p>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-6 py-16">
        <div className="flex flex-col lg:flex-row gap-16">
          
          {/* --- Sticky Sidebar Info --- */}
          <aside className="hidden lg:block w-72 shrink-0 sticky top-32 h-fit">
            <div className="bg-white rounded-3xl border border-gray-100 p-6 shadow-sm mb-8">
              <p className="text-[10px] font-bold text-[#2563EB] uppercase tracking-widest mb-4">Quick Summary</p>
              <ul className="space-y-4">
                <li className="flex gap-3 text-xs text-gray-600 leading-snug">
                  <CheckCircle2 size={16} className="text-green-500 shrink-0" />
                  <span>99% Uptime target for all hosted AI services.</span>
                </li>
                <li className="flex gap-3 text-xs text-gray-600 leading-snug">
                  <CheckCircle2 size={16} className="text-green-500 shrink-0" />
                  <span>Intellectual property transfers upon full payment.</span>
                </li>
                <li className="flex gap-3 text-xs text-gray-600 leading-snug">
                  <AlertCircle size={16} className="text-orange-500 shrink-0" />
                  <span>30-day notice required for service termination.</span>
                </li>
              </ul>
            </div>

            <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-4 px-2">Sections</p>
            <nav className="space-y-1">
              {sections.map((item, idx) => (
                <a 
                  key={idx}
                  href={`#term-${idx + 1}`} 
                  className="block px-2 py-2 text-[13px] font-medium text-gray-500 hover:text-[#2563EB] hover:bg-blue-50/50 rounded-lg transition-all"
                >
                  {idx + 1}. {item}
                </a>
              ))}
            </nav>
          </aside>

          {/* --- Terms Content --- */}
          <article className="flex-1 max-w-3xl">
            <div className="space-y-16 text-gray-600 leading-relaxed">
              
              <section id="term-1">
                <h2 className="text-2xl font-medium text-gray-900 mb-6 flex items-center gap-3">
                  <span className="text-sm font-bold bg-gray-100 w-8 h-8 rounded-lg flex items-center justify-center">01</span>
                  Acceptance of Terms
                </h2>
                <p>
                  By accessing our website at <span className="text-[#2563EB] font-medium underline">faigen.in</span> or using any services provided by Faigen, you agree to be bound by these Terms and Conditions. If you do not agree, please do not use our services.
                </p>
              </section>

              <section id="term-3">
                <h2 className="text-2xl font-medium text-gray-900 mb-6 flex items-center gap-3">
                  <span className="text-sm font-bold bg-gray-100 w-8 h-8 rounded-lg flex items-center justify-center">03</span>
                  Services
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {[
                    "Website & App Dev", "AI WhatsApp Agents", 
                    "Instagram Automation", "UI/UX Design", 
                    "Cloud Infrastructure", "Digital Strategy"
                  ].map((s) => (
                    <div key={s} className="flex items-center gap-2 p-3 rounded-xl border border-gray-100 bg-white text-sm font-medium text-gray-700">
                       <div className="w-1.5 h-1.5 rounded-full bg-[#2563EB]"></div> {s}
                    </div>
                  ))}
                </div>
              </section>

              <section id="term-5" className="p-8 rounded-[2rem] bg-slate-900 text-slate-300 border border-slate-800 shadow-2xl">
                <h2 className="text-2xl font-medium text-white mb-6 flex items-center gap-3">
                   <AlertCircle className="text-[#2563EB]" />
                   AI Agent Services
                </h2>
                <div className="space-y-4 text-sm">
                  <p>For clients utilizing our WhatsApp and Instagram AI automation:</p>
                  <ul className="list-disc pl-5 space-y-3 opacity-80">
                    <li>You are responsible for the accuracy of product information and pricing.</li>
                    <li>You must comply with <span className="text-white font-medium">WhatsApp Business & Instagram Policies</span>.</li>
                    <li>Automated messages sent through our agents are your responsibility.</li>
                    <li>Service availability is subject to Meta API status.</li>
                  </ul>
                </div>
              </section>

              <section id="term-6">
                <h2 className="text-2xl font-medium text-gray-900 mb-6">6. Payment Terms</h2>
                <p className="mb-6">Our billing cycle ensures transparency and continuous service delivery:</p>
                <div className="space-y-4">
                  <div className="flex justify-between p-4 rounded-2xl bg-gray-50 border border-gray-100">
                    <span className="text-sm font-bold text-gray-700">Setup Fees</span>
                    <span className="text-sm text-gray-500 italic font-medium">Due before commencement</span>
                  </div>
                  <div className="flex justify-between p-4 rounded-2xl bg-gray-50 border border-gray-100">
                    <span className="text-sm font-bold text-gray-700">Monthly Maintenance</span>
                    <span className="text-sm text-gray-500 italic font-medium">Due 1st of every month</span>
                  </div>
                </div>
              </section>

              <section id="term-9">
                <h2 className="text-2xl font-medium text-gray-900 mb-6">9. Limitation of Liability</h2>
                <p>
                  Faigen's liability is strictly limited to the amount paid for the specific service in question. We are not liable for business revenue loss, third-party API outages (Meta/Google), or data loss beyond our reasonable control.
                </p>
              </section>

              <section id="term-12" className="pt-12 border-t border-gray-100">
                <h2 className="text-2xl font-medium text-gray-900 mb-6 flex items-center gap-3">
                  <Landmark className="text-[#2563EB]" />
                  Governing Law
                </h2>
                <p className="bg-blue-50 p-6 rounded-2xl border border-blue-100 text-[#2563EB] font-medium">
                  These Terms and Conditions are governed by the laws of India. Any disputes shall be subject to the exclusive jurisdiction of courts in <span className="font-bold">Kerala, India</span>.
                </p>
              </section>

              <footer className="pt-20">
                <div className="p-8 rounded-3xl bg-gray-50 border border-gray-100 text-center">
                  <p className="text-sm font-medium text-gray-500 mb-4">Have questions about our terms?</p>
                  <a href="mailto:info@faigen.in" className="inline-flex items-center gap-2 bg-white border border-gray-200 px-6 py-3 rounded-full text-sm font-bold text-gray-900 shadow-sm hover:shadow-md transition-all">
                    <FileText size={16} className="text-[#2563EB]" /> Get Clarification
                  </a>
                </div>
              </footer>

            </div>
          </article>
        </div>
      </main>
    </div>
  );
}