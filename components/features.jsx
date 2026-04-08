'use client'

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Sparkles, MessageSquare, Layout, UploadCloud, MonitorSmartphone, Bot } from "lucide-react";

/* ── ICONS ─────────────────────────────────────────────────────── */

const WhatsAppIcon = ({ className }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.305-.885-.653-1.48-1.46-1.653-1.758-.173-.298-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.397-.272.322-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
  </svg>
);

const InstagramIcon = ({ className }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
  </svg>
);

/* ── SCROLL WORD ────────────────────────────────────────────────── */

const ScrollWord = ({ word, progress, range }) => {
  const color = useTransform(progress, range, ["#D1D5DB", "#1A1A1A"]);
  return (
    <motion.span style={{ color }} className="inline-block mr-[0.28em] mb-2">
      {word}
    </motion.span>
  );
};

/* ── BENDED NODE ────────────────────────────────────────────────── */

const BendedNode = ({ progress, threshold, x, y, icon, label, bg }) => {
  const scale   = useTransform(progress, [threshold - 0.15, threshold], [0.6, 1]);
  const opacity = useTransform(progress, [threshold - 0.15, threshold], [0.3, 1]);
  const filter  = useTransform(progress, [threshold - 0.15, threshold], ["grayscale(100%)", "grayscale(0%)"]);

  return (
    <motion.div
      style={{ left: x, top: y, scale, opacity, filter }}
      className="absolute -translate-x-1/2 -translate-y-1/2 flex flex-col items-center gap-2 z-20"
    >
      {/* Sharp square node — matches our theme */}
      <div className={`w-11 h-11 flex items-center justify-center text-white border border-white/20 shadow-md ${bg}`}>
        {icon}
      </div>
      <span className="text-[9px] font-bold text-gray-600 tracking-widest uppercase bg-white border border-gray-200 px-2.5 py-1 whitespace-nowrap shadow-sm">
        {label}
      </span>
    </motion.div>
  );
};

/* ── MAIN COMPONENT ─────────────────────────────────────────────── */

export default function FeatureSection() {
  const textRef = useRef(null);
  const { scrollYProgress: textProgress } = useScroll({
    target: textRef,
    offset: ["start 85%", "end 50%"],
  });

  const fadeUp = {
    hidden:   { opacity: 0, y: 30 },
    visible:  { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } },
  };

  const headlineText =
    "Now Any Business Can Automate Sales In Malayalam & English Without Worrying About Staffing Or Response Times.";
  const words = headlineText.split(" ");

  return (
    <section className="w-full bg-white pt-16 pb-32 font-sans text-[#1A1A1A] relative overflow-hidden">

      {/* ── SECTION 1: Scroll-reveal headline + SVG thread ──────── */}
      <div className="max-w-[1400px] mx-auto border-x border-gray-200 relative">

        <div className="px-6 md:px-12 py-20 relative">
          {/* Full-bleed top rule */}
          <div className="absolute top-0 left-[-100vw] right-[-100vw] h-[1px] bg-gray-200" />

          <div className="flex flex-col lg:flex-row items-center lg:items-start gap-8 lg:gap-16">

            {/* SVG thread — desktop only */}
            <div className="hidden lg:block relative w-[200px] h-[550px] shrink-0">
              <svg width="200" height="550" viewBox="0 0 200 550" fill="none" className="absolute inset-0">
                {/* Ghost track */}
                <path
                  d="M100 0 C100 100 170 150 170 220 C170 320 30 380 30 450 C30 510 100 530 100 550"
                  stroke="#F3F4F6" strokeWidth="3" strokeLinecap="round"
                />
                {/* Animated fill */}
                <motion.path
                  d="M100 0 C100 100 170 150 170 220 C170 320 30 380 30 450 C30 510 100 530 100 550"
                  stroke="#2563EB" strokeWidth="3" strokeLinecap="round"
                  style={{ pathLength: textProgress }}
                />
              </svg>

              <BendedNode
                progress={textProgress} threshold={0.35}
                x="170px" y="220px"
                icon={<WhatsAppIcon className="w-5 h-5" />}
                label="WhatsApp"
                bg="bg-[#25D366]"
              />
              <BendedNode
                progress={textProgress} threshold={0.75}
                x="30px" y="450px"
                icon={<InstagramIcon className="w-5 h-5" />}
                label="Instagram"
                bg="bg-[#E1306C]"
              />
              <BendedNode
                progress={textProgress} threshold={0.95}
                x="100px" y="550px"
                icon={<Bot className="w-5 h-5" />}
                label="AI Agent"
                bg="bg-[#2563EB]"
              />
            </div>

            {/* Mobile badge */}
            <motion.div
              initial="hidden" whileInView="visible" viewport={{ once: false, margin: "-50px" }} variants={fadeUp}
              className="lg:hidden"
            >
              <div className="inline-flex items-center gap-2 px-4 py-1.5 border border-gray-200 text-[11px] font-bold text-gray-600 bg-white tracking-widest uppercase">
                <span className="w-1.5 h-1.5 bg-[#2563EB] animate-pulse" />
                Kerala's Premier Tech Agency
              </div>
            </motion.div>

            {/* Scroll-scrub text */}
            <div className="max-w-[1000px] relative z-10 lg:pt-8" ref={textRef}>
              <h2 className="text-[2.2rem] sm:text-[3rem] lg:text-[4.2rem] leading-[1.05] font-medium tracking-tight">
                {words.map((word, i) => {
                  const start = i / words.length;
                  const end   = start + 1 / words.length;
                  return <ScrollWord key={i} word={word} progress={textProgress} range={[start, end]} />;
                })}
              </h2>
            </div>
          </div>
        </div>

        {/* ── SECTION 2: WhatsApp & Insta AI ───────────────────── */}
        <div className="px-6 md:px-12 py-20 md:py-28 relative">
          <div className="absolute top-0 left-[-100vw] right-[-100vw] h-[1px] bg-gray-200" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">

            {/* Copy */}
            <div className="col-span-1 lg:col-span-5">

              {/* Label chip — sharp, matches hero style */}
              <div className="inline-flex items-center gap-2 border border-gray-200 bg-white px-3 py-1.5 mb-6">
                <div className="w-6 h-6 bg-blue-50 border border-blue-100 flex items-center justify-center">
                  <MessageSquare size={13} className="text-[#2563EB]" />
                </div>
                <span className="text-[10px] font-bold text-[#2563EB] uppercase tracking-widest">WhatsApp & Insta AI</span>
              </div>

              <h3 className="text-[2.2rem] md:text-[3rem] leading-[1.05] font-medium tracking-tight text-[#1A1A1A] mb-6">
                Never Miss An Order With Your{" "}
                <span className="text-[#2563EB]">Virtual Assistant</span>
              </h3>

              <p className="text-gray-500 text-[15px] leading-relaxed mb-10 font-normal max-w-[480px]">
                Upload your catalog to Faigen and our AI will instantly handle customer queries, process orders, and send secure payment links. Perfect for Kerala's boutiques, restaurants, and clinics. Works 24/7, speaks fluent Malayalam and English.
              </p>

              {/* Feature bullets — matches omni section card style */}
              <ul className="space-y-3">
                {[
                  "Instant replies in Malayalam & English",
                  "Auto-process orders via WhatsApp",
                  "Secure payment links on demand",
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-[14px] text-gray-700 font-medium">
                    <div className="w-5 h-5 bg-[#2563EB] flex items-center justify-center shrink-0">
                      <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                        <path d="M1.5 5L4 7.5L8.5 2.5" stroke="white" strokeWidth="1.5" strokeLinecap="square" />
                      </svg>
                    </div>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Visual — sharp card, no rounded corners */}
            <div className="col-span-1 lg:col-span-7">
              <div className="relative w-full min-h-[420px] md:min-h-[500px] flex items-center justify-center">

                {/* Background split images — sharp */}
                <div className="flex gap-3 w-full h-[420px] md:h-[500px]">
                  <div
                    className="w-1/2 h-full bg-cover bg-center border border-gray-200 shadow-sm"
                    style={{ backgroundImage: "url('https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=1000&auto=format&fit=crop')" }}
                  />
                  <div
                    className="w-1/2 h-full bg-cover bg-center border border-gray-200 shadow-sm"
                    style={{ backgroundImage: "url('https://images.unsplash.com/photo-1542282088-72c9c27ed0cd?q=80&w=1000&auto=format&fit=crop')" }}
                  />
                </div>

                {/* Centered UI card — sharp, matches hero chat card style */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[85%] md:w-[68%] bg-white border border-gray-200 p-5 md:p-7 shadow-[0_20px_50px_-10px_rgba(0,0,0,0.15)] z-10">

                  {/* Card header */}
                  <div className="flex items-center gap-3 mb-5 pb-4 border-b border-gray-100">
                    <div className="w-10 h-10 bg-[#2563EB] flex items-center justify-center text-white shrink-0">
                      <Sparkles size={18} />
                    </div>
                    <div>
                      <p className="text-[10px] text-gray-400 font-bold uppercase tracking-widest">Faigen AI Engine</p>
                      <p className="text-[14px] font-bold text-gray-900">Upload Store Catalog</p>
                    </div>
                    {/* Live dot */}
                    <div className="ml-auto flex items-center gap-1.5">
                      <div className="w-1.5 h-1.5 bg-[#22C55E] rounded-full animate-pulse" />
                      <span className="text-[10px] font-semibold text-gray-400">Ready</span>
                    </div>
                  </div>

                  {/* Upload zone — sharp dashed border */}
                  <div className="w-full border-2 border-dashed border-gray-300 bg-gray-50 py-9 flex flex-col items-center justify-center gap-2 cursor-pointer hover:border-[#2563EB] hover:bg-blue-50/30 transition-colors group">
                    <UploadCloud
                      className="text-gray-300 mb-1 group-hover:text-[#2563EB] transition-colors"
                      size={26} strokeWidth={1.5}
                    />
                    <p className="text-[13px] font-bold text-gray-700">Drag & Drop Excel / PDF</p>
                    <p className="text-[11px] text-gray-400 font-medium">Auto-trains your agent instantly</p>
                  </div>

                  {/* Progress indicators */}
                  <div className="flex items-center gap-2 mt-4">
                    {["Catalog", "Training", "Live"].map((step, i) => (
                      <React.Fragment key={step}>
                        <div className={`flex items-center gap-1.5 ${i === 0 ? "text-[#2563EB]" : "text-gray-300"}`}>
                          <div className={`w-4 h-4 border flex items-center justify-center text-[8px] font-black ${i === 0 ? "border-[#2563EB] bg-[#2563EB] text-white" : "border-gray-200"}`}>
                            {i + 1}
                          </div>
                          <span className={`text-[10px] font-bold uppercase tracking-wider ${i === 0 ? "text-[#2563EB]" : "text-gray-300"}`}>
                            {step}
                          </span>
                        </div>
                        {i < 2 && <div className="flex-1 h-px bg-gray-200" />}
                      </React.Fragment>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ── SECTION 3: Custom Web Development ────────────────── */}
        <div className="px-6 md:px-12 py-20 md:py-28 relative">
          <div className="absolute top-0 left-[-100vw] right-[-100vw] h-[1px] bg-gray-200" />
          <div className="absolute bottom-0 left-[-100vw] right-[-100vw] h-[1px] bg-gray-200" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">

            {/* Copy */}
            <div className="col-span-1 lg:col-span-5">

              <div className="inline-flex items-center gap-2 border border-gray-200 bg-white px-3 py-1.5 mb-6">
                <div className="w-6 h-6 bg-gray-100 border border-gray-200 flex items-center justify-center">
                  <Layout size={13} className="text-gray-700" />
                </div>
                <span className="text-[10px] font-bold text-gray-600 uppercase tracking-widest">Custom Web Development</span>
              </div>

              <h3 className="text-[2.2rem] md:text-[3rem] leading-[1.05] font-medium tracking-tight text-[#1A1A1A] mb-6">
                Build A Premium Brand With{" "}
                <span className="text-[#1A1A1A] underline decoration-gray-300 underline-offset-4">Stunning Web Design</span>
              </h3>

              <p className="text-gray-500 text-[15px] leading-relaxed mb-10 font-normal max-w-[480px]">
                We don't just build websites — we build digital storefronts that convert. Fast, secure, and perfectly tailored to your brand. From high-converting landing pages to full-scale web applications.
              </p>

              <ul className="space-y-3">
                {[
                  "Mobile-first, lightning fast performance",
                  "SEO-optimised from day one",
                  "Integrated with WhatsApp & payment gateways",
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-[14px] text-gray-700 font-medium">
                    <div className="w-5 h-5 bg-[#1A1A1A] flex items-center justify-center shrink-0">
                      <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                        <path d="M1.5 5L4 7.5L8.5 2.5" stroke="white" strokeWidth="1.5" strokeLinecap="square" />
                      </svg>
                    </div>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Visual */}
            <div className="col-span-1 lg:col-span-7">
              <div className="relative w-full min-h-[420px] md:min-h-[500px]">

                {/* Main image — sharp */}
                <div
                  className="w-full h-[420px] md:h-[500px] bg-cover bg-center border border-gray-200 shadow-sm relative overflow-hidden"
                  style={{ backgroundImage: "url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1500&auto=format&fit=crop')" }}
                >
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                </div>

                {/* Info card — bottom right, sharp */}
                <div className="absolute bottom-4 right-4 md:bottom-8 md:right-8 bg-white border border-gray-200 p-5 shadow-[0_10px_30px_rgba(0,0,0,0.10)] w-[220px] z-10">

                  <div className="flex items-center gap-2.5 mb-4 pb-3 border-b border-gray-100">
                    <div className="w-7 h-7 bg-[#1A1A1A] text-white flex items-center justify-center">
                      <MonitorSmartphone size={13} />
                    </div>
                    <span className="text-[12px] font-bold text-gray-900">Responsive Layout</span>
                  </div>

                  {/* Mock UI bars */}
                  <div className="space-y-2">
                    <div className="h-1.5 w-14 bg-[#2563EB]" />
                    <div className="h-1.5 w-full bg-gray-100" />
                    <div className="h-1.5 w-4/5 bg-gray-100" />
                    <div className="h-1.5 w-full bg-gray-100" />
                    <div className="h-1.5 w-3/5 bg-gray-100" />
                  </div>

                  {/* Score pill */}
                  <div className="mt-4 flex items-center gap-2">
                    <div className="text-[10px] font-black text-[#22C55E] border border-[#BBF7D0] bg-[#F0FDF4] px-2 py-0.5 uppercase tracking-widest">
                      100 / 100
                    </div>
                    <span className="text-[10px] text-gray-400 font-semibold">PageSpeed</span>
                  </div>
                </div>

              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}