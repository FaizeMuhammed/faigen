'use client'

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  Bot, Megaphone, CheckCheck,
  UploadCloud, MonitorSmartphone,
  ShieldCheck, BadgeCheck, Zap,
  Package, TrendingUp
} from "lucide-react";

// ── WhatsApp Icon ─────────────────────────────────────────────
const WhatsAppIcon = ({ size = 18, className = '' }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
  </svg>
)

// ── Meta Icon ─────────────────────────────────────────────────
const MetaIcon = ({ size = 16, className = '' }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M6.915 4.03c-1.968 0-3.683 1.28-4.871 3.113C.704 9.208 0 11.883 0 14.449c0 .706.07 1.369.21 1.973a6.624 6.624 0 00.265.86 5.297 5.297 0 00.371.761c.696 1.159 1.818 1.927 3.593 1.927 1.497 0 2.633-.671 3.965-2.444.76-1.012 1.144-1.626 2.663-4.32l.756-1.339.186-.325c.061.1.121.196.183.3l2.152 3.595c.724 1.21 1.665 2.556 2.47 3.314 1.046.987 1.992 1.22 3.06 1.22 1.075 0 1.876-.355 2.455-.843a3.743 3.743 0 00.81-.973c.542-.939.861-2.127.861-3.745 0-2.72-.681-5.357-2.084-7.45-1.282-1.912-2.957-2.93-4.716-2.93-1.047 0-2.088.467-3.053 1.308-.767.665-1.4 1.578-2.173 2.925L12 7.504l-.312-.54C10.432 5.455 9.07 4.03 6.915 4.03z"/>
  </svg>
)

// ── Scroll Word Reveal ────────────────────────────────────────
const ScrollWord = ({ word, progress, range }) => {
  const color = useTransform(progress, range, ["#e0e0e0", "#1A1A1A"])
  return (
    <motion.span style={{ color }} className="inline-block mr-[0.28em] mb-2">
      {word}
    </motion.span>
  )
}

export default function FeatureSection() {
  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
  }

  const headlineText = "Any Kerala Business Can Now Automate Sales, Support & Marketing On WhatsApp — Without Hiring More Staff."
  const words = headlineText.split(" ")

  const textRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: textRef,
    offset: ["start 85%", "end 50%"]
  })

  return (
    <section className="w-full bg-white pt-16 pb-20 font-sans text-[#1A1A1A] overflow-hidden">
      <div className="max-w-[1500px] mx-auto border-x border-[#eeeeee] relative bg-white">

        {/* ── Scroll Reveal Headline ───────────────────────────── */}
        <div className="px-6 md:px-12 xl:px-16 py-24 relative bg-white">
          <div className="absolute top-0 left-[-50vw] right-[-50vw] h-[1px] bg-[#eeeeee]" />
          <div className="absolute bottom-0 left-[-50vw] right-[-50vw] h-[1px] bg-[#eeeeee]" />

          <div className="flex flex-col lg:flex-row items-start gap-10 lg:gap-20">

            {/* Left Badge */}
            <motion.div
              initial="hidden" whileInView="visible" viewport={{ once: false, margin: "-50px" }} variants={fadeUp}
              className="flex-shrink-0 pt-4 flex flex-col gap-3"
            >
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-[2px] bg-[#fbfbfb] border border-[#eeeeee] text-[#424242] text-[11px] font-bold tracking-widest uppercase shadow-sm">
                <span className="w-2 h-2 rounded-full bg-[#2563EB] animate-pulse" />
                For Kerala Businesses
              </div>

              {/* Meta Verified Badge */}
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-[2px] bg-[#e8f0fe] border border-[#c5d8f8] text-[#1a56db] text-[11px] font-bold shadow-sm">
                <MetaIcon size={12} className="text-[#0467DF]" />
                Meta Verified Tech Provider
                <BadgeCheck size={12} className="text-[#0467DF]" />
              </div>

              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-[2px] bg-[#e8f5e9] border border-[#c8e6c9] text-[#2e7d32] text-[11px] font-bold shadow-sm">
                <WhatsAppIcon size={12} className="text-[#25D366]" />
                Official WhatsApp Partner
              </div>
            </motion.div>

            {/* Scroll Reveal Text */}
            <div className="max-w-[1100px] relative z-10">
              <h2 ref={textRef} className="text-[2.6rem] md:text-[3.8rem] lg:text-[4.2rem] leading-[1.05] font-medium tracking-tight bg-white">
                {words.map((word, i) => {
                  const start = i / words.length
                  const end = start + (1 / words.length)
                  return <ScrollWord key={i} word={word} progress={scrollYProgress} range={[start, end]} />
                })}
              </h2>
            </div>
          </div>
        </div>

        {/* ── Feature 1: AI WhatsApp & Instagram Agent ─────────── */}
        <div className="px-6 md:px-12 xl:px-16 py-24 bg-white relative">
          <div className="absolute bottom-0 left-[-50vw] right-[-50vw] h-[1px] bg-[#eeeeee]" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-12 items-center relative z-10">

            {/* Copy */}
            <motion.div
              initial="hidden" whileInView="visible" viewport={{ once: false, margin: "-50px" }} variants={fadeUp}
              className="col-span-1 lg:col-span-5 pr-0 lg:pr-8"
            >
              <div className="flex items-center gap-3 text-[14.5px] font-bold text-[#666666] mb-6">
                <WhatsAppIcon size={18} className="text-[#25D366]" />
                WhatsApp & Instagram AI Agent
              </div>

              <h3 className="text-[2.4rem] md:text-[3.2rem] leading-[1.05] font-medium tracking-tight text-[#1A1A1A] mb-6">
                Your business takes orders <span className="text-[#2563EB]">even while you sleep.</span>
              </h3>

              <p className="text-[#666666] text-[15px] leading-relaxed mb-8">
                Upload your product catalog and Agentified's AI instantly handles customer queries, takes orders, shares prices and sends payment links — all inside WhatsApp. Speaks fluent Malayalam, Manglish and English. Works 24/7 without a day off.
              </p>

              {/* Proof points */}
              <div className="flex flex-col gap-3">
                {[
                  { icon: <CheckCheck size={15} className="text-[#25D366]" />, text: 'Responds in seconds — even at midnight' },
                  { icon: <Package size={15} className="text-[#2563EB]" />, text: 'Takes orders directly in the chat' },
                  { icon: <TrendingUp size={15} className="text-[#f57c00]" />, text: 'Converts 3x more leads than forms' },
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3 text-[14px] text-[#424242] font-medium">
                    {item.icon} {item.text}
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Visual */}
            <motion.div
              initial="hidden" whileInView="visible" viewport={{ once: false, margin: "-50px" }} variants={fadeUp}
              className="col-span-1 lg:col-span-7 relative flex justify-end"
            >
              <div className="flex gap-4 w-full md:w-[90%] h-[400px] md:h-[500px]">
                <div
                  className="w-1/2 h-full rounded-[4px] bg-cover bg-center border border-[#eeeeee]"
                  style={{ backgroundImage: "url('https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=1000&auto=format&fit=crop')" }}
                />
                <div
                  className="w-1/2 h-full rounded-[4px] bg-cover bg-center border border-[#eeeeee] opacity-90"
                  style={{ backgroundImage: "url('https://images.unsplash.com/photo-1542282088-72c9c27ed0cd?q=80&w=1000&auto=format&fit=crop')" }}
                />
              </div>

              {/* Floating UI Card */}
              <div className="absolute top-1/2 left-[5%] md:left-[15%] lg:left-[-10%] -translate-y-1/2 w-[90%] md:w-[80%] max-w-[420px] bg-white border border-[#eeeeee] p-6 md:p-8 rounded-[4px] shadow-[0_16px_40px_rgba(0,0,0,0.06)]">

                {/* Header */}
                <div className="flex items-center gap-4 mb-6 bg-[#fbfbfb] border border-[#eeeeee] p-3 rounded-[2px]">
                  <div className="w-10 h-10 bg-[#e8f5e9] rounded-[2px] flex items-center justify-center border border-[#c8e6c9]">
                    <WhatsAppIcon size={20} className="text-[#25D366]" />
                  </div>
                  <div>
                    <p className="text-[11px] text-[#9e9e9e] font-medium tracking-wide uppercase">Agentified AI</p>
                    <p className="text-[14px] font-bold text-[#424242]">Upload Product Catalog</p>
                  </div>
                </div>

                <div className="w-full border border-dashed border-[#cccccc] bg-[#fbfbfb] rounded-[2px] py-10 flex flex-col items-center justify-center gap-2 cursor-pointer hover:bg-white hover:border-[#25D366] transition-all group">
                  <UploadCloud className="text-[#9e9e9e] group-hover:text-[#25D366] transition-colors mb-1" size={24} strokeWidth={1.5} />
                  <p className="text-[13px] font-bold text-[#424242]">Drop your Excel / PDF / Image</p>
                  <p className="text-[12px] text-[#9e9e9e]">Agent trains itself instantly</p>
                </div>

                {/* Meta trust footer */}
                <div className="mt-4 flex items-center justify-between pt-3 border-t border-[#eeeeee]">
                  <div className="flex items-center gap-1.5 text-[11px] text-[#9e9e9e]">
                    <MetaIcon size={11} className="text-[#0467DF]" />
                    Built on WhatsApp Business Platform
                  </div>
                  <div className="flex items-center gap-1 text-[10px] text-[#25D366] font-semibold">
                    <ShieldCheck size={11} /> Secure
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* ── Feature 2: Broadcast Campaigns ───────────────────── */}
        <div className="px-6 md:px-12 xl:px-16 py-24 bg-white relative">
          <div className="absolute bottom-0 left-[-50vw] right-[-50vw] h-[1px] bg-[#eeeeee]" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-12 items-center relative z-10">

            {/* Copy */}
            <motion.div
              initial="hidden" whileInView="visible" viewport={{ once: false, margin: "-50px" }} variants={fadeUp}
              className="col-span-1 lg:col-span-5 pr-0 lg:pr-8"
            >
              <div className="flex items-center gap-3 text-[14.5px] font-bold text-[#666666] mb-6">
                <Megaphone size={18} className="text-[#7c3aed]" strokeWidth={2.5} />
                WhatsApp Broadcast Campaigns
              </div>

              <h3 className="text-[2.4rem] md:text-[3.2rem] leading-[1.05] font-medium tracking-tight text-[#1A1A1A] mb-6">
                Reach all your customers <span className="text-[#7c3aed]">in one click.</span>
              </h3>

              <p className="text-[#666666] text-[15px] leading-relaxed mb-8">
                Send promotions, festival offers, and order updates to hundreds of customers simultaneously on WhatsApp. With pre-approved templates and a simple dashboard, your next campaign is just a few clicks away.
              </p>

              {/* Proof points */}
              <div className="flex flex-col gap-3">
                {[
                  { icon: <Zap size={15} className="text-[#7c3aed]" />, text: 'Send to 1000 contacts in minutes' },
                  { icon: <CheckCheck size={15} className="text-[#25D366]" />, text: 'WhatsApp blue tick delivery reports' },
                  { icon: <TrendingUp size={15} className="text-[#f57c00]" />, text: '5× higher open rate than SMS or email' },
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3 text-[14px] text-[#424242] font-medium">
                    {item.icon} {item.text}
                  </div>
                ))}
              </div>

              {/* Meta verified badge */}
              <div className="mt-8 inline-flex items-center gap-2.5 px-4 py-2.5 bg-[#f3f0ff] border border-[#ddd6fe] rounded-[4px]">
                <MetaIcon size={14} className="text-[#0467DF]" />
                <div>
                  <p className="text-[11px] font-bold text-[#6d28d9]">Meta Verified Tech Provider</p>
                  <p className="text-[10px] text-[#9e9e9e]">Approved to send on WhatsApp Business API</p>
                </div>
                <BadgeCheck size={16} className="text-[#0467DF] ml-1" />
              </div>
            </motion.div>

            {/* Visual */}
            <motion.div
              initial="hidden" whileInView="visible" viewport={{ once: false, margin: "-50px" }} variants={fadeUp}
              className="col-span-1 lg:col-span-7 relative flex justify-end"
            >
              <div
                className="w-full md:w-[90%] h-[400px] md:h-[500px] rounded-[4px] bg-cover bg-center border border-[#eeeeee] relative overflow-hidden"
                style={{ backgroundImage: "url('https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=1500&auto=format&fit=crop')" }}
              >
                {/* Campaign Stats Card */}
                <div className="absolute bottom-6 right-6 bg-white border border-[#eeeeee] p-5 rounded-[4px] shadow-[0_8px_30px_rgba(0,0,0,0.06)] w-[240px]">
                  <div className="flex items-center gap-2.5 mb-4 border-b border-[#eeeeee] pb-3">
                    <Megaphone size={15} className="text-[#7c3aed]" strokeWidth={2} />
                    <span className="text-[12px] font-bold text-[#424242] tracking-wide uppercase">Last Campaign</span>
                  </div>
                  <div className="flex flex-col gap-2.5">
                    {[
                      { label: 'Sent', value: '1,240', color: 'bg-[#e8f5e9]', bar: 'bg-[#25D366]', w: 'w-full' },
                      { label: 'Delivered', value: '1,198', color: 'bg-[#e8f0fe]', bar: 'bg-[#2563EB]', w: 'w-[95%]' },
                      { label: 'Read', value: '876', color: 'bg-[#f3f0ff]', bar: 'bg-[#7c3aed]', w: 'w-[70%]' },
                    ].map(item => (
                      <div key={item.label}>
                        <div className="flex justify-between mb-1">
                          <span className="text-[11px] text-[#9e9e9e] font-medium">{item.label}</span>
                          <span className="text-[11px] font-bold text-[#424242]">{item.value}</span>
                        </div>
                        <div className="h-1.5 bg-[#f5f5f5] rounded-full overflow-hidden">
                          <div className={`h-full rounded-full ${item.bar} ${item.w}`} />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>

          </div>
        </div>

      </div>
    </section>
  )
}