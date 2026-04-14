'use client'

import React from "react"
import { motion } from "framer-motion"
import {
  Scale, FileText, CheckCircle2, AlertCircle,
  ArrowLeft, Landmark, Mail, MapPin, Globe
} from "lucide-react"
import Link from "next/link"

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
}

const sections = [
  "Introduction",
  "Information We Collect",
  "Purpose of Data Collection",
  "AI Agent Communication & Platforms",
  "Data Storage & Security",
  "Data Retention Policy",
  "Third-Party Services",
  "User Rights",
  "Client Responsibilities",
  "Children's Privacy",
  "Limitation of Liability",
  "Payment Terms & Subscription",
  "Service Reliability",
  "Termination of Services",
  "Compliance with Laws",
  "Updates to Terms",
  "Contact Information",
]

export default function TermsAndConditions() {
  return (
    <div className="min-h-screen bg-[#FDFDFD] font-sans text-[#1A1A1A]">

      {/* Navbar */}
      <nav className="sticky top-0 z-50 w-full bg-white/80 backdrop-blur-md border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 group">
            <ArrowLeft size={18} className="text-gray-400 group-hover:text-[#2563EB] transition-colors" />
            <img
              src="/logo.png"
              alt="Faigen"
              style={{ height: '32px', width: 'auto', objectFit: 'contain' }}
              onError={e => {
                e.target.style.display = 'none'
                e.target.insertAdjacentHTML('afterend', '<span style="font-weight:800;font-size:1.1rem;color:#1A1A1A;">Faigen</span>')
              }}
            />
          </Link>
          <div className="flex items-center gap-4">
            <Link href="/privacy" className="text-xs font-bold text-[#2563EB] hover:underline uppercase tracking-widest">
              Privacy Policy
            </Link>
            <div className="hidden md:flex items-center gap-2 text-xs font-bold text-gray-400 uppercase tracking-widest">
              <Scale size={14} className="text-[#2563EB]" /> Legal Framework
            </div>
          </div>
        </div>
      </nav>

      {/* Header */}
      <header className="relative pt-20 pb-16 overflow-hidden border-b border-gray-50">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10 opacity-[0.03]">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-[#2563EB] blur-[120px] rounded-full" />
        </div>
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial="hidden" animate="visible" variants={fadeUp}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-100 text-slate-600 text-xs font-bold mb-6"
          >
            <Scale size={14} /> Terms & Conditions
          </motion.div>
          <motion.h1
            initial="hidden" animate="visible" variants={fadeUp}
            className="text-4xl md:text-5xl font-medium tracking-tight mb-4 text-gray-900"
          >
            Terms & Conditions
          </motion.h1>
          <motion.p
            initial="hidden" animate="visible" variants={fadeUp}
            className="text-gray-500 font-medium"
          >
            Effective as of March 2026 · Kerala, India
          </motion.p>
        </div>
      </header>

      {/* Main */}
      <main className="max-w-7xl mx-auto px-6 py-16 pb-32">
        <div className="flex flex-col lg:flex-row gap-16">

          {/* Sidebar */}
          <aside className="hidden lg:block w-72 shrink-0 sticky top-32 h-fit">
            <div className="bg-white rounded-3xl border border-gray-100 p-6 shadow-sm mb-6">
              <p className="text-[10px] font-bold text-[#2563EB] uppercase tracking-widest mb-4">Quick Summary</p>
              <ul className="space-y-4">
                <li className="flex gap-3 text-[12px] text-gray-600 leading-snug">
                  <CheckCircle2 size={16} className="text-green-500 shrink-0 mt-0.5" />
                  Setup fee is one-time only. Monthly fee covers ongoing service.
                </li>
                <li className="flex gap-3 text-[12px] text-gray-600 leading-snug">
                  <CheckCircle2 size={16} className="text-green-500 shrink-0 mt-0.5" />
                  Cancel anytime with 30 days notice before next billing cycle.
                </li>
                <li className="flex gap-3 text-[12px] text-gray-600 leading-snug">
                  <CheckCircle2 size={16} className="text-green-500 shrink-0 mt-0.5" />
                  We target 99.9% uptime for all AI agent services.
                </li>
                <li className="flex gap-3 text-[12px] text-gray-600 leading-snug">
                  <AlertCircle size={16} className="text-orange-400 shrink-0 mt-0.5" />
                  Governing law: Kerala, India courts.
                </li>
              </ul>
            </div>

            <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-3 px-2">Sections</p>
            <nav className="space-y-0.5">
              {sections.map((item, idx) => (
                <a
                  key={idx}
                  href={`#term-${idx + 1}`}
                  className="block px-3 py-2 text-[13px] font-medium text-gray-500 hover:text-[#2563EB] hover:bg-blue-50/50 rounded-xl transition-all"
                >
                  {idx + 1}. {item}
                </a>
              ))}
            </nav>
          </aside>

          {/* Content */}
          <article className="flex-1 max-w-3xl">
            <div className="space-y-14 text-gray-600 leading-relaxed text-[15px]">

              {/* 1 */}
              <section id="term-1">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4 flex items-center gap-3">
                  <span className="text-[12px] font-black bg-gray-100 w-8 h-8 rounded-xl flex items-center justify-center shrink-0">01</span>
                  Introduction
                </h2>
                <p>
                  Welcome to Faigen ("Company", "we", "us", "our"), a technology agency based in Kerala, India.
                  Faigen specializes in building websites, web applications, and AI-powered automation agents for businesses.
                  This document outlines how we collect, use, store, and protect information when you use our services.
                </p>
                <p className="mt-4">
                  By using our services, you agree to the terms outlined in this document.
                </p>
              </section>

              {/* 2 */}
              <section id="term-2">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4 flex items-center gap-3">
                  <span className="text-[12px] font-black bg-gray-100 w-8 h-8 rounded-xl flex items-center justify-center shrink-0">02</span>
                  Information We Collect
                </h2>
                <div className="space-y-3">
                  {[
                    { title: 'Personal Information', items: ['Name', 'Phone number', 'Email address'] },
                    { title: 'Communication Data', items: ['Messages via WhatsApp and Instagram to AI agents', 'Customer queries, responses, and interaction logs'] },
                    { title: 'Transactional Information', items: ['Order details (product, quantity, delivery address)', 'Payment-related references via third-party providers'] },
                    { title: 'Technical Data', items: ['IP address', 'Browser type and device information', 'Website usage analytics'] },
                  ].map(group => (
                    <div key={group.title} className="bg-gray-50 rounded-2xl p-5 border border-gray-100">
                      <p className="text-[12px] font-bold text-gray-400 uppercase tracking-wider mb-3">{group.title}</p>
                      <ul className="space-y-1.5">
                        {group.items.map(item => (
                          <li key={item} className="flex items-start gap-2 text-[14px] text-gray-600">
                            <div className="w-1.5 h-1.5 rounded-full bg-[#2563EB] mt-2 shrink-0" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </section>

              {/* 3 */}
              <section id="term-3">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4 flex items-center gap-3">
                  <span className="text-[12px] font-black bg-gray-100 w-8 h-8 rounded-xl flex items-center justify-center shrink-0">03</span>
                  Purpose of Data Collection
                </h2>
                <p className="mb-4">We use collected information strictly for:</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {[
                    'AI-powered customer interaction services',
                    'Processing and managing orders',
                    'Improving AI accuracy and response quality',
                    'Client support and service communication',
                    'System performance monitoring',
                    'Usage analytics and improvements',
                  ].map(item => (
                    <div key={item} className="flex items-center gap-3 p-3 rounded-xl border border-gray-100 bg-white text-[13px] font-medium text-gray-700">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#2563EB] shrink-0" />
                      {item}
                    </div>
                  ))}
                </div>
                <p className="mt-5 font-semibold text-gray-700">We do not sell personal data to third parties.</p>
              </section>

              {/* 4 */}
              <section id="term-4" className="bg-blue-50/60 p-8 rounded-3xl border border-blue-100">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4 flex items-center gap-3">
                  <span className="text-[12px] font-black bg-blue-100 w-8 h-8 rounded-xl flex items-center justify-center shrink-0">04</span>
                  AI Agent Communication & Platforms
                </h2>
                <p className="mb-4">
                  Faigen integrates with Meta Platforms Inc. (WhatsApp Business API, Instagram API).
                  All communications are subject to Meta's Terms of Service and handled only for
                  the purpose of delivering contracted services.
                </p>
                <ul className="space-y-2">
                  {[
                    'You are responsible for accuracy of product information and pricing',
                    'You must comply with WhatsApp Business and Instagram policies',
                    'Automated messages sent through agents are your responsibility',
                    'Service availability is subject to Meta API status',
                  ].map(item => (
                    <li key={item} className="flex items-start gap-3 text-[14px]">
                      <AlertCircle size={15} className="text-blue-500 shrink-0 mt-0.5" />
                      {item}
                    </li>
                  ))}
                </ul>
              </section>

              {/* 5 */}
              <section id="term-5">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4 flex items-center gap-3">
                  <span className="text-[12px] font-black bg-gray-100 w-8 h-8 rounded-xl flex items-center justify-center shrink-0">05</span>
                  Data Storage & Security
                </h2>
                <p>
                  All data is stored on secure servers hosted by DigitalOcean (Bangalore, India).
                  Security measures include SSL encryption, role-based access control, secure database management,
                  and regular system monitoring and audits.
                </p>
              </section>

              {/* 6 */}
              <section id="term-6">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4 flex items-center gap-3">
                  <span className="text-[12px] font-black bg-gray-100 w-8 h-8 rounded-xl flex items-center justify-center shrink-0">06</span>
                  Data Retention Policy
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {[
                    { label: 'Conversation Data', value: 'Up to 90 Days' },
                    { label: 'Order & Transaction Data', value: 'Up to 1 Year' },
                  ].map(item => (
                    <div key={item.label} className="p-5 rounded-2xl border border-gray-100 bg-white shadow-sm">
                      <p className="text-[11px] font-bold text-gray-400 uppercase tracking-widest mb-1">{item.label}</p>
                      <p className="text-xl font-black text-gray-900">{item.value}</p>
                    </div>
                  ))}
                </div>
                <p className="mt-4 italic text-gray-500">Data may be deleted earlier upon written request.</p>
              </section>

              {/* 7 */}
              <section id="term-7">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4 flex items-center gap-3">
                  <span className="text-[12px] font-black bg-gray-100 w-8 h-8 rounded-xl flex items-center justify-center shrink-0">07</span>
                  Third-Party Services
                </h2>
                <div className="flex flex-wrap gap-2">
                  {['Meta Platforms Inc.', 'Google (Gemini AI)', 'DigitalOcean', 'MongoDB'].map(service => (
                    <span key={service} className="px-4 py-2 rounded-xl bg-gray-100 text-gray-700 text-[13px] font-semibold">
                      {service}
                    </span>
                  ))}
                </div>
                <p className="mt-4 text-gray-500">These providers have their own privacy policies governing data usage.</p>
              </section>

              {/* 8 */}
              <section id="term-8">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4 flex items-center gap-3">
                  <span className="text-[12px] font-black bg-gray-100 w-8 h-8 rounded-xl flex items-center justify-center shrink-0">08</span>
                  User Rights
                </h2>
                <ul className="space-y-2">
                  {[
                    'Access personal data held by Faigen',
                    'Request correction of inaccurate information',
                    'Request deletion of personal data',
                    'Opt out of automated communication at any time',
                  ].map(item => (
                    <li key={item} className="flex items-start gap-3">
                      <CheckCircle2 size={16} className="text-green-500 shrink-0 mt-0.5" />
                      {item}
                    </li>
                  ))}
                </ul>
              </section>

              {/* 9 */}
              <section id="term-9">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4 flex items-center gap-3">
                  <span className="text-[12px] font-black bg-gray-100 w-8 h-8 rounded-xl flex items-center justify-center shrink-0">09</span>
                  Client Responsibilities
                </h2>
                <p className="mb-4">Businesses using Faigen services agree to:</p>
                <ul className="space-y-2">
                  {[
                    'Provide accurate and lawful data',
                    'Obtain necessary user consent before data collection',
                    'Use AI automation in compliance with applicable laws',
                    'Avoid misuse of the platform for spam, fraud, or illegal activities',
                  ].map(item => (
                    <li key={item} className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full bg-orange-50 border border-orange-100 flex items-center justify-center shrink-0 mt-0.5">
                        <div className="w-1.5 h-1.5 rounded-full bg-orange-400" />
                      </div>
                      {item}
                    </li>
                  ))}
                </ul>
                <p className="mt-4 text-gray-500">Faigen is not liable for misuse of services by clients.</p>
              </section>

              {/* 10 */}
              <section id="term-10">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4 flex items-center gap-3">
                  <span className="text-[12px] font-black bg-gray-100 w-8 h-8 rounded-xl flex items-center justify-center shrink-0">10</span>
                  Children's Privacy
                </h2>
                <p>
                  Faigen's services are not intended for individuals under the age of 18.
                  We do not knowingly collect personal data from children. Parents or guardians who believe
                  that their child has provided personal data to Faigen may contact us to request removal.
                </p>
              </section>

              {/* 11 */}
              <section id="term-11">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4 flex items-center gap-3">
                  <span className="text-[12px] font-black bg-gray-100 w-8 h-8 rounded-xl flex items-center justify-center shrink-0">11</span>
                  Limitation of Liability
                </h2>
                <p>
                  Faigen's liability is strictly limited to the amount paid for the specific service in question.
                  We are not liable for business revenue loss, third-party API outages (Meta/Google),
                  or data loss beyond our reasonable control. AI-generated responses may not always be perfect —
                  clients are responsible for reviewing automation workflows.
                </p>
              </section>

              {/* 12 */}
              <section id="term-12">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4 flex items-center gap-3">
                  <span className="text-[12px] font-black bg-gray-100 w-8 h-8 rounded-xl flex items-center justify-center shrink-0">12</span>
                  Payment Terms & Subscription
                </h2>
                <div className="space-y-3">
                  {[
                    { title: 'Setup Fee', text: 'One-time payment due before service commencement. Never charged again.' },
                    { title: 'Monthly Subscription', text: 'Billed in advance. Plans auto-renew unless cancelled before next billing cycle.' },
                    { title: 'Usage Limits', text: 'Each plan includes a fixed usage quota. Additional credits available if exceeded.' },
                    { title: 'Payment Failure', text: 'Late payment may result in temporary service restriction or suspension of AI agents.' },
                    { title: 'Refund Policy', text: 'Subscription fees are non-refundable once billing cycle starts. Exceptions at Faigen\'s discretion.' },
                    { title: 'Pricing Changes', text: 'Price changes will be communicated in advance and apply to future renewals only.' },
                  ].map(item => (
                    <div key={item.title} className="flex gap-4 p-5 bg-gray-50 rounded-2xl border border-gray-100">
                      <div className="w-1.5 bg-[#2563EB] rounded-full shrink-0" />
                      <div>
                        <p className="font-bold text-gray-800 mb-1">{item.title}</p>
                        <p className="text-[14px] text-gray-500">{item.text}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              {/* 13 */}
              <section id="term-13">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4 flex items-center gap-3">
                  <span className="text-[12px] font-black bg-gray-100 w-8 h-8 rounded-xl flex items-center justify-center shrink-0">13</span>
                  Service Reliability
                </h2>
                <p className="mb-4">
                  We aim to provide consistent uptime, fast response speeds, and stable integrations.
                  We actively monitor and optimize system performance continuously.
                </p>
                <p>
                  In the rare event of major service failure directly caused by Faigen, we will investigate promptly
                  and provide fixes or service adjustments. Faigen limits liability to the amount paid for the active
                  billing cycle. We are not liable for outages caused by Meta, Google, or other third-party platforms.
                </p>
              </section>

              {/* 14 */}
              <section id="term-14">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4 flex items-center gap-3">
                  <span className="text-[12px] font-black bg-gray-100 w-8 h-8 rounded-xl flex items-center justify-center shrink-0">14</span>
                  Termination of Services
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="p-5 bg-red-50 rounded-2xl border border-red-100">
                    <p className="font-bold text-gray-800 mb-2">By Faigen</p>
                    <p className="text-[13px] text-gray-500">
                      We may suspend or terminate services for non-payment, terms violation,
                      platform misuse (spam, illegal activity, system abuse).
                    </p>
                  </div>
                  <div className="p-5 bg-gray-50 rounded-2xl border border-gray-100">
                    <p className="font-bold text-gray-800 mb-2">By Client</p>
                    <p className="text-[13px] text-gray-500">
                      Cancel anytime before next billing cycle. Current cycle stays active until expiry.
                      No partial refunds for unused time.
                    </p>
                  </div>
                </div>
              </section>

              {/* 15 */}
              <section id="term-15">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4 flex items-center gap-3">
                  <span className="text-[12px] font-black bg-gray-100 w-8 h-8 rounded-xl flex items-center justify-center shrink-0">15</span>
                  Compliance with Laws
                </h2>
                <p>
                  Faigen operates in accordance with applicable laws in India. Clients are responsible for ensuring
                  their business usage complies with local regulations, industry-specific rules, and data protection
                  requirements. Where legally required, Faigen may cooperate with regulatory authorities.
                </p>
              </section>

              {/* 16 */}
              <section id="term-16">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4 flex items-center gap-3">
                  <span className="text-[12px] font-black bg-gray-100 w-8 h-8 rounded-xl flex items-center justify-center shrink-0">16</span>
                  Updates to Terms
                </h2>
                <p>
                  Faigen reserves the right to update these terms at any time with a revised effective date.
                  Continued use of services implies acceptance of updated terms.
                </p>
              </section>

              {/* 17 — Governing Law */}
              <section className="p-8 rounded-3xl bg-slate-900 text-slate-300 border border-slate-800">
                <h2 className="text-2xl font-semibold text-white mb-4 flex items-center gap-3">
                  <Landmark className="text-[#2563EB]" size={22} />
                  Governing Law
                </h2>
                <p>
                  These Terms and Conditions are governed by the laws of India.
                  Any disputes shall be subject to the exclusive jurisdiction of courts in{' '}
                  <span className="text-white font-bold">Kerala, India</span>.
                </p>
              </section>

              {/* 17 — Contact */}
              <section id="term-17" className="pt-8 border-t border-gray-100">
                <h2 className="text-2xl font-semibold text-gray-900 mb-6 flex items-center gap-3">
                  <span className="text-[12px] font-black bg-gray-100 w-8 h-8 rounded-xl flex items-center justify-center shrink-0">17</span>
                  Contact Information
                </h2>
                <div className="bg-white rounded-3xl p-8 border border-gray-100 shadow-sm flex flex-col md:flex-row gap-8">
                  <div className="flex-1 space-y-4">
                    <p className="font-black text-gray-900 text-[16px]">Faigen</p>
                    <div className="flex items-center gap-3 text-[14px] text-gray-500">
                      <MapPin size={16} className="text-[#2563EB] shrink-0" />
                      CG Residency Towers 4a1,Kakkanad,ERNAKULAM , Pin 682037
                    </div>
                    <div className="flex items-center gap-3 text-[14px] text-gray-500">
                      <Mail size={16} className="text-[#2563EB] shrink-0" />
                      info@faigen.in
                    </div>
                    <div className="flex items-center gap-3 text-[14px] text-gray-500">
                      <Globe size={16} className="text-[#2563EB] shrink-0" />
                      https://faigen.in
                    </div>
                  </div>
                  <div className="md:w-1/2 flex items-center justify-center p-6 bg-gray-50 rounded-2xl border border-dashed border-gray-200">
                    <a
                      href="mailto:info@faigen.in"
                      className="inline-flex items-center gap-2 bg-white border border-gray-200 px-6 py-3 rounded-full text-[13px] font-bold text-gray-900 shadow-sm hover:shadow-md transition-all"
                    >
                      <FileText size={15} className="text-[#2563EB]" />
                      Contact for Clarification
                    </a>
                  </div>
                </div>
              </section>

            </div>
          </article>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-100 py-10">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-[13px] text-gray-400 font-medium">© 2026 Faigen Technologies. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <Link href="/privacy" className="text-[13px] text-gray-400 hover:text-[#2563EB] font-medium transition-colors">
              Privacy Policy
            </Link>
            <Link href="/" className="text-[13px] text-gray-400 hover:text-[#2563EB] font-medium transition-colors">
              Back to Home
            </Link>
          </div>
        </div>
      </footer>

    </div>
  )
}