'use client'

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Bot, Check, Copy } from "lucide-react";
import Link from "next/link";

export default function FooterSection() {
  const [showPopup, setShowPopup] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText("info@faigen.in");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
  };

  const sections = [
    {
      title: "Services",
      links: [
        { label: "Web Development",    href: null },
        { label: "WhatsApp AI Agents", href: null },
        { label: "Insta Auto-DMs",     href: null },
      ]
    },
    {
      title: "Company",
      links: [
        { label: "Our Portfolio", href: null },
        { label: "Pricing",       href: null },
        { label: "About Us",      href: null },
        { label: "Privacy Policy", href: "/privacy" },
        { label: "Terms",          href: "/terms" },
      ]
    },
    {
      title: "Connect",
      links: [
        { label: "Book a Demo", href: null },
        { label: "Contact Us",  href: null },
        { label: "Instagram",   href: "https://instagram.com/faigenai" },
      ]
    }
  ];

  return (
    <footer className="w-full bg-[#FBFBFD] pt-2 font-sans text-[#1D1D1F] overflow-hidden">

      {/* Testimonial Block */}
      <div className="w-full px-4 md:px-8 mb-12 md:mb-20">
        <motion.div
          initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={fadeUp}
          className="max-w-[1500px] mx-auto bg-white border border-[#E5E5EA] rounded-[24px] md:rounded-[32px] p-7 md:p-16 shadow-[0_8px_30px_rgb(0,0,0,0.04)]"
        >
          <div className="flex flex-col justify-between items-start gap-6 md:gap-8 mb-10 md:mb-20">
            <h2 className="text-[1.9rem] sm:text-[2.5rem] md:text-[3.5rem] font-semibold tracking-tighter text-[#1D1D1F] leading-[1.05] max-w-3xl">
              Kerala Businesses Are Scaling Faster With Faigen. When Will You Start?
            </h2>
          </div>

          {/* Removed the empty avatar placeholder squares — no images to show */}
          <p className="text-[1.1rem] md:text-[1.5rem] text-[#86868B] font-medium leading-relaxed max-w-2xl lg:text-right tracking-tight ml-auto">
            &ldquo;Running a busy boutique leaves no time for social media. Faigen&apos;s AI handles all our DMs on WhatsApp 24/7. Absolute game changer! ❤️&rdquo;
          </p>
        </motion.div>
      </div>

      {/* Footer Links */}
      <div className="w-full px-5 md:px-16">
        <div className="max-w-[1400px] mx-auto grid grid-cols-2 md:grid-cols-5 gap-8 md:gap-8 mb-16 md:mb-24">
          <div className="col-span-2 md:col-span-2">
            <img src="/logonew.png" alt="Faigen Logo" className="h-8 mb-5 md:mb-6" />
            <p className="text-[#86868B] text-[13px] md:text-[14px] font-medium max-w-xs leading-relaxed">
              Kerala&apos;s premier tech agency. Building cinematic experiences and intelligent AI agents for modern businesses.
            </p>
          </div>

          {sections.map((section, idx) => (
            <div key={idx}>
              <h4 className="font-bold text-[#1D1D1F] text-[11px] md:text-[12px] tracking-widest uppercase mb-4 md:mb-6">{section.title}</h4>
              <ul className="space-y-3 md:space-y-4 text-[13px] md:text-[14px] font-semibold text-[#86868B]">
                {section.links.map((link) => (
                  <li key={link.label}>
                    {link.href ? (
                      <Link
                        href={link.href}
                        target={link.href.startsWith('http') ? '_blank' : undefined}
                        rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                        className="hover:text-[#0066CC] transition-colors"
                      >
                        {link.label}
                      </Link>
                    ) : (
                      <button onClick={() => setShowPopup(true)} className="hover:text-[#0066CC] transition-colors text-left">
                        {link.label}
                      </button>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Massive Typography */}
      <div className="w-full flex justify-center items-end overflow-hidden">
        <h1 className="text-[16vw] font-black tracking-[-0.04em] leading-[0.7] text-[#1D1D1F]/5 select-none text-center">
          faigen.in
        </h1>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {showPopup && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-5 md:p-6">
            <motion.div
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              onClick={() => setShowPopup(false)}
              className="absolute inset-0 bg-white/40 backdrop-blur-sm"
            />
            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.95 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="relative w-full max-w-[440px] bg-white rounded-[28px] md:rounded-[32px] border border-[#E5E5EA] shadow-[0_20px_50px_rgba(0,0,0,0.06)] p-7 md:p-10 flex flex-col items-center"
            >
              <h2 className="text-xl md:text-2xl font-semibold text-[#1D1D1F] tracking-tight mb-2">Request a Demo</h2>
              <p className="text-[#86868B] text-[14px] md:text-[15px] font-medium mb-8 md:mb-10 text-center">Ready to automate your sales.</p>

              <div className="w-full bg-[#F5F5F7] border border-[#E5E5EA] p-4 rounded-2xl flex items-center justify-between">
                <span className="text-[14px] font-semibold text-[#1D1D1F] px-2">info@faigen.in</span>
                <button onClick={handleCopy}
                  className={`p-3 rounded-xl transition-all ${copied ? 'bg-[#34C759] text-white' : 'bg-white text-[#86868B] border border-[#E5E5EA]'}`}>
                  {copied ? <Check size={18} strokeWidth={3} /> : <Copy size={18} />}
                </button>
              </div>

              <button onClick={() => setShowPopup(false)}
                className="mt-6 md:mt-8 text-[#86868B] hover:text-[#1D1D1F] text-[13px] font-semibold transition-colors">
                Close
              </button>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </footer>
  );
}