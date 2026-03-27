'use client'

import React from "react";
import { motion } from "framer-motion";
import { Shield, Mail, MapPin, Globe, ArrowLeft, Lock } from "lucide-react";
import Link from "next/link";

export default function PrivacyPolicy() {
  const sections = [
    "Introduction", "Information We Collect", "How We Use Your Information", 
    "WhatsApp and Instagram Data", "Data Storage and Security", "Data Retention",
    "Third Party Services", "Your Rights", "Cookies", "Children's Privacy", 
    "Changes to This Policy", "Contact Us"
  ];

  const fadeUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <div className="min-h-screen bg-[#FDFDFD] font-sans text-[#1A1A1A]">
      {/* --- Navigation Bar --- */}
      <nav className="sticky top-0 z-50 w-full bg-white/80 backdrop-blur-md border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 group">
            <ArrowLeft size={18} className="text-gray-400 group-hover:text-[#2563EB] transition-colors" />
            <span className="font-bold text-xl tracking-tight"></span>
          </Link>
          <div className="hidden md:flex items-center gap-2 text-xs font-bold text-gray-400 uppercase tracking-widest">
            <Lock size={14} className="text-[#2563EB]" /> Secure Document
          </div>
        </div>
      </nav>

      {/* --- Hero Header --- */}
      <header className="relative pt-20 pb-16 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10 opacity-[0.03]">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-[#2563EB] blur-[120px] rounded-full"></div>
        </div>
        
        <div className="max-w-4xl mx-auto px-6 text-center">
         
          <motion.h1 initial="hidden" animate="visible" variants={fadeUp} className="text-4xl md:text-5xl font-medium tracking-tight mb-4">
            Privacy Policy
          </motion.h1>
          <motion.p initial="hidden" animate="visible" variants={fadeUp} className="text-gray-500 font-medium">
            Last updated: March 2026 • Kerala, India
          </motion.p>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-6 pb-32">
        <div className="flex flex-col lg:flex-row gap-16">
          
          {/* --- Sidebar Table of Contents --- */}
          <aside className="hidden lg:block w-64 shrink-0 sticky top-32 h-fit">
            <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-6">Contents</p>
            <ul className="space-y-4">
              {sections.map((item, idx) => (
                <li key={idx}>
                  <a 
                    href={`#section-${idx + 1}`} 
                    className="text-[13px] font-medium text-gray-500 hover:text-[#2563EB] transition-colors block"
                  >
                    {idx + 1}. {item}
                  </a>
                </li>
              ))}
            </ul>
          </aside>

          {/* --- Content Body --- */}
          <article className="flex-1 max-w-3xl">
            <div className="prose prose-gray prose-headings:font-medium prose-headings:tracking-tight max-w-none space-y-12 text-gray-600 leading-relaxed">
              
              <section id="section-1">
                <h2 className="text-2xl text-gray-900 mb-4">1. Introduction</h2>
                <p>
                  Faigen ("we", "us", "our") is a technology agency based in Kerala, India. We build websites, web applications, and AI-powered automation agents for businesses. This Privacy Policy explains how we collect, use, store, and protect your information when you use our services or interact with AI agents we build and operate.
                </p>
              </section>

              <section id="section-2">
                <h2 className="text-2xl text-gray-900 mb-4">2. Information We Collect</h2>
                <p>We may collect the following information:</p>
                <ul className="list-disc pl-5 space-y-2 mt-4">
                  <li>Name, phone number, and email address</li>
                  <li>WhatsApp and Instagram messages sent to AI agents we operate</li>
                  <li>Order details including product, quantity, and delivery address</li>
                  <li>Business information provided by our clients</li>
                  <li>Website usage data including IP address and browser type</li>
                </ul>
              </section>

              <section id="section-3">
                <h2 className="text-2xl text-gray-900 mb-4">3. How We Use Your Information</h2>
                <p>We use collected information to:</p>
                <ul className="list-disc pl-5 space-y-2 mt-4">
                  <li>Provide AI-powered customer support on behalf of our business clients</li>
                  <li>Process and manage customer orders placed through our agents</li>
                  <li>Improve the quality and accuracy of AI responses</li>
                  <li>Send service-related communications to our clients</li>
                  <li>Analyze usage patterns to improve our services</li>
                </ul>
              </section>

              <section id="section-4" className="bg-blue-50/50 p-8 rounded-3xl border border-blue-100">
                <h2 className="text-2xl text-gray-900 mb-4 flex items-center gap-2">
                   4. WhatsApp and Instagram Data
                </h2>
                <p>
                  Our AI agent services integrate with WhatsApp Business API and Instagram API, both provided by Meta Platforms Inc. Messages processed through our platform are subject to Meta's Terms of Service in addition to this policy. We do not sell, share, or distribute message data to any third parties outside of providing the contracted service.
                </p>
              </section>

              <section id="section-5">
                <h2 className="text-2xl text-gray-900 mb-4">5. Data Storage and Security</h2>
                <p>
                  All data is stored on secure servers hosted on DigitalOcean infrastructure located in Bangalore, India. We implement industry-standard security measures including SSL encryption, access controls, and regular security audits to protect your data.
                </p>
              </section>

              <section id="section-6">
                <h2 className="text-2xl text-gray-900 mb-4">6. Data Retention</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
                    <div className="p-4 rounded-2xl border border-gray-100 bg-white">
                        <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1">Conversations</p>
                        <p className="text-lg font-bold text-gray-800">90 Days</p>
                    </div>
                    <div className="p-4 rounded-2xl border border-gray-100 bg-white">
                        <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1">Order History</p>
                        <p className="text-lg font-bold text-gray-800">1 Year</p>
                    </div>
                </div>
                <p className="mt-6 italic">Data can be deleted upon written request.</p>
              </section>

              <section id="section-7">
                <h2 className="text-2xl text-gray-900 mb-4">7. Third Party Services We Use</h2>
                <div className="flex flex-wrap gap-2">
                    {["Meta API", "Google Gemini", "DigitalOcean", "MongoDB"].map((service) => (
                        <span key={service} className="px-4 py-2 rounded-xl bg-gray-100 text-gray-700 text-sm font-medium">
                            {service}
                        </span>
                    ))}
                </div>
              </section>

              <section id="section-8">
                <h2 className="text-2xl text-gray-900 mb-4">8. Your Rights</h2>
                <p>You have the right to access the personal data we hold about you, request correction of inaccurate data, or request deletion of your data. You may opt out of automated messaging at any time.</p>
              </section>

              {/* ... Other sections follow similar formatting ... */}

              <section id="section-12" className="pt-12 border-t border-gray-100">
                <h2 className="text-2xl text-gray-900 mb-6">12. Contact Us</h2>
                <div className="bg-white rounded-3xl p-8 border border-gray-100 shadow-sm flex flex-col md:flex-row gap-8">
                    <div className="flex-1 space-y-4">
                        <h4 className="font-bold text-gray-900">Faigen </h4>
                        <div className="flex items-center gap-3 text-sm text-gray-500">
                            <MapPin size={16} className="text-[#2563EB]" /> Kerala, India
                        </div>
                        <div className="flex items-center gap-3 text-sm text-gray-500">
                            <Mail size={16} className="text-[#2563EB]" /> info@faigen.in
                        </div>
                        <div className="flex items-center gap-3 text-sm text-gray-500">
                            <Globe size={16} className="text-[#2563EB]" /> https://faigen.in
                        </div>
                    </div>
                    <div className="md:w-1/2 flex items-center justify-center p-6 bg-gray-50 rounded-2xl border border-dashed border-gray-200">
                        <p className="text-xs text-center text-gray-400 leading-relaxed font-medium">
                            For any privacy-related questions or requests, please reach out via our official email for verified processing.
                        </p>
                    </div>
                </div>
              </section>
            </div>
          </article>
        </div>
      </main>

      {/* --- Simple Footer --- */}
      <footer className="bg-white border-t border-gray-100 py-12">
        <div className="max-w-7xl mx-auto px-6 text-center">
            <p className="text-sm text-gray-400 font-medium italic">© 2026 Faigen. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}