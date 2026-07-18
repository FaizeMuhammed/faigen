'use client'

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Mail, MapPin, Globe, Copy, Check,
  ArrowRight, X, Menu, Send, CheckCircle2
} from "lucide-react";
import Link from "next/link";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
};

export default function ContactPage() {
  const [menuOpen, setMenuOpen]     = useState(false);
  const [copied, setCopied]         = useState(false);
  const [submitted, setSubmitted]   = useState(false);
  const [sending, setSending]       = useState(false);
  const [form, setForm] = useState({ name: '', email: '', business: '', message: '' });

  const handleCopy = () => {
    navigator.clipboard.writeText("info@faigen.in");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSending(true);
    // Replace with your actual form submission endpoint if needed
    await new Promise(r => setTimeout(r, 1200));
    setSending(false);
    setSubmitted(true);
  };

  const set = (key, val) => setForm(f => ({ ...f, [key]: val }));

  const inputCls = "w-full px-5 py-4 rounded-[16px] border border-[#E5E5EA] bg-[#F5F5F7] text-[15px] text-[#1D1D1F] placeholder-[#86868B] outline-none focus:border-[#0066CC] focus:bg-white focus:ring-4 focus:ring-[#0066CC]/10 transition-all font-medium";

  const contactDetails = [
    {
      icon: <Mail size={22} className="text-[#0066CC]" />,
      label: "Email",
      value: "info@faigen.in",
      href: "mailto:info@faigen.in",
      copyable: true,
    },
    {
      icon: <MapPin size={22} className="text-[#0066CC]" />,
      label: "Address",
      value: "BCG Residency Towers 4a1, Kakkanad, Ernakulam — 682037",
      href: "https://maps.google.com/?q=BCG+Residency+Towers+Kakkanad+Ernakulam",
      copyable: false,
    },
    {
      icon: <Globe size={22} className="text-[#0066CC]" />,
      label: "Website",
      value: "faigen.in",
      href: "https://faigen.in",
      copyable: false,
    },
  ];

  return (
    <div className="min-h-screen bg-[#FBFBFD] text-[#1D1D1F] font-sans selection:bg-[#0066CC] selection:text-white overflow-hidden">

      {/* Background glow */}
      <div className="fixed top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[#0066CC] opacity-[0.04] blur-[120px] rounded-full pointer-events-none z-0" />

      {/* ── HEADER ── */}
      <header className="sticky top-0 z-50 bg-[#FBFBFD]/80 backdrop-blur-2xl border-b border-[#E5E5EA]">
        <div className="max-w-[1500px] mx-auto px-6 md:px-10 py-5 flex justify-between items-center">
          <Link href="/">
            <img src="/logonew.png" alt="Faigen Logo" className="h-8 md:h-14 w-auto object-contain" />
          </Link>

          <nav className="hidden lg:flex items-center gap-10 text-[14px] font-medium text-[#86868B]">
            <Link href="/" className="hover:text-[#1D1D1F] transition-colors">Home</Link>
            <Link href="/use-cases" className="hover:text-[#1D1D1F] transition-colors">Use Cases</Link>
            <Link href="/about" className="hover:text-[#1D1D1F] transition-colors">About</Link>
            <span className="text-[#1D1D1F] font-semibold">Contact</span>
          </nav>

          <div className="hidden lg:flex items-center gap-6">
            <a href="mailto:info@faigen.in" className="bg-[#1D1D1F] text-white px-5 py-2 text-[14px] font-semibold rounded-full hover:bg-black transition-colors">
              Email Us
            </a>
          </div>

          <button className="lg:hidden p-2 text-[#1D1D1F]" onClick={() => setMenuOpen(v => !v)}>
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </header>

      {/* Mobile drawer */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="lg:hidden fixed top-[73px] left-0 right-0 bg-white/95 backdrop-blur-3xl border-b border-[#E5E5EA] px-6 pb-8 flex flex-col z-40"
          >
            <Link href="/" className="text-[16px] font-medium text-[#86868B] py-5 border-b border-[#F5F5F7]">Home</Link>
            <Link href="/use-cases" className="text-[16px] font-medium text-[#86868B] py-5 border-b border-[#F5F5F7]">Use Cases</Link>
            <Link href="/about" className="text-[16px] font-medium text-[#86868B] py-5 border-b border-[#F5F5F7]">About</Link>
            <span className="text-[16px] font-bold text-[#1D1D1F] py-5">Contact</span>
          </motion.div>
        )}
      </AnimatePresence>

      <main className="relative z-10">

        {/* ── HERO ── */}
        <section className="pt-20 pb-16 md:pt-28 md:pb-20 px-6 text-center flex flex-col items-center">
          <motion.div initial="hidden" animate="visible" variants={fadeUp} className="flex flex-col items-center">

            <div className="bg-white border border-[#E5E5EA] px-5 py-2 rounded-full shadow-sm text-[12px] font-bold text-[#86868B] mb-8 uppercase tracking-widest inline-flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#0066CC] animate-pulse" />
              We'd love to hear from you
            </div>

            <h1 className="text-[3rem] sm:text-[4.5rem] md:text-[5.5rem] font-semibold leading-[1.02] tracking-tighter text-[#1D1D1F] mb-6 max-w-4xl">
              Let's build something{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0066CC] to-[#3399FF]">
                great together.
              </span>
            </h1>

            <p className="max-w-xl mx-auto text-[#86868B] text-[17px] md:text-[19px] leading-relaxed font-medium tracking-tight">
              Have a question, want a demo, or ready to automate your business? Reach out — we typically reply within a few hours.
            </p>
          </motion.div>
        </section>

        {/* ── MAIN CONTENT — form + contact info ── */}
        <section className="max-w-[1400px] mx-auto px-6 md:px-12 pb-24">
          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={fadeUp}
            className="bg-white border border-[#E5E5EA] rounded-[40px] shadow-[0_8px_30px_rgb(0,0,0,0.04)] flex flex-col lg:flex-row overflow-hidden"
          >

            {/* LEFT — Contact form */}
            <div className="w-full lg:w-[58%] p-10 md:p-14 lg:p-16 border-b lg:border-b-0 lg:border-r border-[#E5E5EA]">
              <h2 className="text-[1.8rem] md:text-[2.2rem] font-semibold tracking-tighter text-[#1D1D1F] mb-2">
                Send us a message
              </h2>
              <p className="text-[#86868B] text-[15px] font-medium mb-10">
                Fill in the details below and we'll get back to you shortly.
              </p>

              <AnimatePresence mode="wait">
                {submitted ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }}
                    className="flex flex-col items-center justify-center py-16 text-center"
                  >
                    <div className="w-20 h-20 bg-[#E8F4FF] border border-[#D1E8FF] rounded-full flex items-center justify-center mb-6">
                      <CheckCircle2 size={36} className="text-[#0066CC]" strokeWidth={1.5} />
                    </div>
                    <h3 className="text-[22px] font-semibold text-[#1D1D1F] mb-2 tracking-tight">Message sent!</h3>
                    <p className="text-[#86868B] text-[15px] font-medium max-w-xs leading-relaxed">
                      Thanks for reaching out. We'll reply to <span className="text-[#1D1D1F] font-semibold">{form.email}</span> within a few hours.
                    </p>
                    <button
                      onClick={() => { setSubmitted(false); setForm({ name: '', email: '', business: '', message: '' }) }}
                      className="mt-8 text-[#0066CC] text-[14px] font-semibold hover:underline"
                    >
                      Send another message
                    </button>
                  </motion.div>
                ) : (
                  <motion.form
                    key="form"
                    initial={{ opacity: 0 }} animate={{ opacity: 1 }}
                    onSubmit={handleSubmit}
                    className="space-y-5"
                  >
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div className="flex flex-col gap-2">
                        <label className="text-[12px] font-semibold text-[#86868B] uppercase tracking-wider ml-1">Your Name *</label>
                        <input
                          required
                          value={form.name}
                          onChange={e => set('name', e.target.value)}
                          className={inputCls}
                          placeholder="Faize Basheer"
                        />
                      </div>
                      <div className="flex flex-col gap-2">
                        <label className="text-[12px] font-semibold text-[#86868B] uppercase tracking-wider ml-1">Email *</label>
                        <input
                          required
                          type="email"
                          value={form.email}
                          onChange={e => set('email', e.target.value)}
                          className={inputCls}
                          placeholder="you@business.com"
                        />
                      </div>
                    </div>

                    <div className="flex flex-col gap-2">
                      <label className="text-[12px] font-semibold text-[#86868B] uppercase tracking-wider ml-1">Business Name</label>
                      <input
                        value={form.business}
                        onChange={e => set('business', e.target.value)}
                        className={inputCls}
                        placeholder="Your shop or company name"
                      />
                    </div>

                    <div className="flex flex-col gap-2">
                      <label className="text-[12px] font-semibold text-[#86868B] uppercase tracking-wider ml-1">Message *</label>
                      <textarea
                        required
                        rows={5}
                        value={form.message}
                        onChange={e => set('message', e.target.value)}
                        className={`${inputCls} resize-none`}
                        placeholder="Tell us what you need — WhatsApp automation, demo request, pricing question…"
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={sending}
                      className="w-full bg-[#1D1D1F] text-white py-4 rounded-full font-semibold text-[15px] hover:bg-black transition-all flex items-center justify-center gap-2 shadow-lg shadow-black/10 disabled:opacity-60 disabled:cursor-not-allowed"
                    >
                      {sending ? (
                        <>
                          <svg className="animate-spin w-5 h-5" viewBox="0 0 24 24" fill="none">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z" />
                          </svg>
                          Sending…
                        </>
                      ) : (
                        <>
                          Send Message <Send size={17} />
                        </>
                      )}
                    </button>

                    <p className="text-center text-[12px] text-[#86868B] font-medium">
                      Or email us directly at{" "}
                      <a href="mailto:info@faigen.in" className="text-[#0066CC] hover:underline font-semibold">info@faigen.in</a>
                    </p>
                  </motion.form>
                )}
              </AnimatePresence>
            </div>

            {/* RIGHT — Contact details + map placeholder */}
            <div className="w-full lg:w-[42%] bg-[#F5F5F7] p-10 md:p-14 lg:p-16 flex flex-col justify-between gap-10">

              <div>
                <h3 className="text-[1.4rem] font-semibold text-[#1D1D1F] tracking-tight mb-8">Contact details</h3>

                <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }} className="space-y-4">
                  {contactDetails.map((item, i) => (
                    <motion.div key={i} variants={fadeUp}>
                      {item.copyable ? (
                        <div className="bg-white border border-[#E5E5EA] rounded-[20px] p-5 flex items-center justify-between shadow-sm">
                          <div className="flex items-start gap-4">
                            <div className="w-10 h-10 bg-[#E8F4FF] border border-[#D1E8FF] rounded-[12px] flex items-center justify-center shrink-0">
                              {item.icon}
                            </div>
                            <div>
                              <p className="text-[11px] font-bold text-[#86868B] uppercase tracking-widest mb-1">{item.label}</p>
                              <p className="text-[14px] font-semibold text-[#1D1D1F]">{item.value}</p>
                            </div>
                          </div>
                          <button
                            onClick={handleCopy}
                            className={`p-2.5 rounded-[12px] border transition-all shrink-0 ${copied ? 'bg-[#0066CC] border-[#0066CC] text-white' : 'bg-[#F5F5F7] border-[#E5E5EA] text-[#86868B] hover:border-[#D2D2D7]'}`}
                          >
                            {copied ? <Check size={15} strokeWidth={3} /> : <Copy size={15} />}
                          </button>
                        </div>
                      ) : (
                        <a
                          href={item.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="bg-white border border-[#E5E5EA] rounded-[20px] p-5 flex items-start gap-4 shadow-sm hover:border-[#0066CC] hover:shadow-md transition-all group block"
                        >
                          <div className="w-10 h-10 bg-[#E8F4FF] border border-[#D1E8FF] rounded-[12px] flex items-center justify-center shrink-0">
                            {item.icon}
                          </div>
                          <div className="flex-1 min-w-0">
                            <p className="text-[11px] font-bold text-[#86868B] uppercase tracking-widest mb-1">{item.label}</p>
                            <p className="text-[14px] font-semibold text-[#1D1D1F] leading-snug group-hover:text-[#0066CC] transition-colors">{item.value}</p>
                          </div>
                          <ArrowRight size={16} className="text-[#86868B] group-hover:text-[#0066CC] shrink-0 mt-1 transition-colors" />
                        </a>
                      )}
                    </motion.div>
                  ))}
                </motion.div>
              </div>

              {/* Map embed placeholder — replace src with real Google Maps embed URL */}
              <div className="rounded-[24px] overflow-hidden border border-[#E5E5EA] shadow-sm h-[220px] bg-white relative">
                <iframe
                  title="Faigen Office Location"
                  src="https://maps.google.com/maps?q=BCG+Residency+Towers+Kakkanad+Ernakulam&output=embed"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="grayscale opacity-90 hover:grayscale-0 hover:opacity-100 transition-all duration-500"
                />
              </div>

              <div className="bg-[#1D1D1F] rounded-[24px] p-6 flex items-center gap-4">
                <div className="w-3 h-3 rounded-full bg-[#25D366] shadow-[0_0_10px_rgba(37,211,102,0.6)] shrink-0 animate-pulse" />
                <div>
                  <p className="text-white font-semibold text-[14px]">Typically reply within 2-4 hours</p>
                  <p className="text-[#86868B] text-[12px] font-medium mt-0.5">Mon – Sat, 9 AM to 8 PM IST</p>
                </div>
              </div>
            </div>

          </motion.div>
        </section>

      </main>

      {/* ── FOOTER ── */}
      <footer className="border-t border-[#E5E5EA] py-10 bg-white relative z-10">
        <div className="max-w-[1400px] mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
       
          <div className="flex gap-6 text-[12px] text-[#86868B] font-bold uppercase tracking-widest">
            <Link href="/privacy" className="hover:text-[#0066CC] transition-colors">Privacy</Link>
            <Link href="/terms" className="hover:text-[#0066CC] transition-colors">Terms</Link>
            <Link href="/about" className="hover:text-[#0066CC] transition-colors">About</Link>
          </div>
        </div>
      </footer>

    </div>
  );
}