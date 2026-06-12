'use client'

import React from "react";
import { motion } from "framer-motion";
import {
  Bot, MonitorSmartphone, MoreVertical,
  Globe, Megaphone, ShoppingBag,
  CheckCheck, Zap, Users, TrendingUp
} from "lucide-react";

const WhatsAppIcon = ({ size = 18, className = '' }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
  </svg>
)

const InstagramIcon = ({ size = 18, className = '' }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
  </svg>
)

const MetaIcon = ({ size = 14, className = '' }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M6.915 4.03c-1.968 0-3.683 1.28-4.871 3.113C.704 9.208 0 11.883 0 14.449c0 .706.07 1.369.21 1.973a6.624 6.624 0 00.265.86 5.297 5.297 0 00.371.761c.696 1.159 1.818 1.927 3.593 1.927 1.497 0 2.633-.671 3.965-2.444.76-1.012 1.144-1.626 2.663-4.32l.756-1.339.186-.325c.061.1.121.196.183.3l2.152 3.595c.724 1.21 1.665 2.556 2.47 3.314 1.046.987 1.992 1.22 3.06 1.22 1.075 0 1.876-.355 2.455-.843a3.743 3.743 0 00.81-.973c.542-.939.861-2.127.861-3.745 0-2.72-.681-5.357-2.084-7.45-1.282-1.912-2.957-2.93-4.716-2.93-1.047 0-2.088.467-3.053 1.308-.767.665-1.4 1.578-2.173 2.925L12 7.504l-.312-.54C10.432 5.455 9.07 4.03 6.915 4.03z"/>
  </svg>
)

export default function BentoGrid() {
  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
  }

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
  }

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  }

  return (
    <section className="w-full bg-white px-4 md:px-8 py-20 font-sans text-[#1A1A1A]">
      <div className="max-w-[1600px] mx-auto bg-[#0B0E14] rounded-[2rem] md:rounded-[3rem] p-6 md:p-12 shadow-2xl overflow-hidden">

        {/* Headline */}
        <motion.div
          initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={fadeUp}
          className="flex flex-col items-center justify-center text-center mb-12 md:mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-white/80 text-[11px] font-bold tracking-widest uppercase shadow-sm mb-6">
            <span className="w-2 h-2 rounded-full bg-[#25D366] animate-pulse" />
            Built for Kerala Businesses
          </div>
          <h2 className="text-[2.8rem] sm:text-[3.5rem] md:text-[4.2rem] font-medium tracking-tight text-white leading-[1.05] max-w-4xl">
            Your customers are on WhatsApp.<br className="hidden md:block"/>
            <span className="text-gray-400">Your agent should be too. 🚀</span>
          </h2>
        </motion.div>

        {/* Grid */}
        <motion.div
          variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6"
        >

          {/* Card 1: Orders on autopilot */}
          <motion.div variants={cardVariants} className="bg-[#151921] rounded-2xl md:rounded-[1.5rem] p-6 flex flex-col justify-end min-h-[350px] md:min-h-[400px] relative overflow-hidden group hover:bg-[#1A1E28] transition-colors border border-white/5">
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: "url('https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=500&auto=format&fit=crop')" }}
            >
              <div className="absolute inset-0 bg-gradient-to-t from-[#151921] via-[#151921]/60 to-transparent" />
            </div>

            {/* Order confirmation mockup */}
            <div className="relative z-10 p-3 bg-white/10 backdrop-blur-md rounded-xl border border-white/10 w-[90%] md:w-4/5 mx-auto mb-6 shadow-lg flex flex-col gap-2">
              <div className="flex items-center gap-2 pb-2 border-b border-white/10">
                <WhatsAppIcon size={13} className="text-[#25D366]" />
                <span className="text-[10px] font-bold text-white/70 tracking-widest uppercase">Order Confirmed</span>
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-[12px] font-semibold text-white">2× Premium Coir Mat</p>
                  <p className="text-[11px] text-white/60">Delivery: Ernakulam · 2-3 days</p>
                </div>
                <span className="text-[11px] font-bold text-[#25D366] bg-[#25D366]/10 px-2 py-1 rounded-md">₹1,200</span>
              </div>
            </div>

            <div className="relative z-10 mt-auto">
              <h3 className="text-white text-[20px] md:text-[22px] font-medium leading-[1.2] tracking-tight">
                Orders taken &amp; confirmed<br/>automatically
              </h3>
            </div>
          </motion.div>

          {/* Card 2: Speaks Malayalam */}
          <motion.div variants={cardVariants} className="bg-[#151921] rounded-2xl md:rounded-[1.5rem] p-6 flex flex-col justify-end min-h-[350px] md:min-h-[400px] relative overflow-hidden group hover:bg-[#1A1E28] transition-colors border border-white/5">
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: "url('https://images.unsplash.com/photo-1596526131083-e8c633c948d2?q=80&w=500&auto=format&fit=crop')" }}
            >
              <div className="absolute inset-0 bg-gradient-to-t from-[#151921] via-[#151921]/60 to-transparent" />
            </div>

            {/* Chat bubbles */}
            <div className="relative z-10 w-[95%] md:w-[90%] mx-auto mb-6 p-4 bg-white/10 backdrop-blur-md rounded-xl border border-white/10 flex flex-col gap-3 shadow-lg">
              <div className="bg-gray-100 text-gray-800 text-[11px] font-medium px-3.5 py-2.5 rounded-2xl rounded-tl-sm w-fit flex items-center gap-2">
                <span className="bg-white text-[#25D366] text-[9px] px-1.5 py-0.5 rounded font-bold">ML</span>
                എന്റെ ഓർഡർ എന്ന് ഡെലിവർ ആകും?
              </div>
              <div className="bg-[#25D366] text-white text-[11px] font-medium px-3.5 py-2.5 rounded-2xl rounded-tr-sm w-fit self-end flex items-center gap-2">
                <span className="bg-white text-[#25D366] text-[9px] px-1.5 py-0.5 rounded font-bold">AI</span>
                നാളെ വൈകുന്നേരം ഡെലിവർ ആകും! 🎉
              </div>
            </div>

            <div className="relative z-10 mt-auto">
              <h3 className="text-white text-[20px] md:text-[22px] font-medium leading-[1.2] tracking-tight">
                Replies in Malayalam,<br/>Manglish &amp; English
              </h3>
            </div>
          </motion.div>

          {/* Card 3: 24/7 no staff needed */}
          <motion.div variants={cardVariants} className="bg-[#151921] rounded-2xl md:rounded-[1.5rem] p-6 flex flex-col justify-end min-h-[350px] md:min-h-[400px] relative overflow-hidden group hover:bg-[#1A1E28] transition-colors border border-white/5">
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: "url('https://images.unsplash.com/photo-1522204523234-8729aa6e3d5f?q=80&w=500&auto=format&fit=crop')" }}
            >
              <div className="absolute inset-0 bg-gradient-to-t from-[#151921] via-[#151921]/60 to-transparent" />
            </div>

            {/* Activity ring */}
            <div className="relative z-10 p-3 bg-white/10 backdrop-blur-md rounded-xl border border-white/10 w-[90%] md:w-4/5 mx-auto mb-6 shadow-lg">
              <div className="flex justify-between items-center text-white/70 text-[10px] font-bold tracking-widest mb-2">
                AGENT STATUS <span className="text-[#25D366]">● LIVE</span>
              </div>
              <div className="w-16 h-16 mx-auto relative flex items-center justify-center my-1">
                <svg viewBox="0 0 36 36" className="w-full h-full transform -rotate-90">
                  <path className="text-gray-200/20" stroke="currentColor" strokeWidth="3" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none"/>
                  <path className="text-[#25D366]" stroke="currentColor" strokeWidth="3" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" strokeDasharray="100, 100" strokeLinecap="round" fill="none"/>
                </svg>
                <div className="absolute w-10 h-10 bg-white/10 rounded-full flex items-center justify-center text-white backdrop-blur-sm">
                  <Bot size={20} />
                </div>
              </div>
              <div className="text-center text-white/80 text-[10px] font-bold">Responding 24/7 — no breaks</div>
            </div>

            <div className="relative z-10 mt-auto">
              <h3 className="text-white text-[20px] md:text-[22px] font-medium leading-[1.2] tracking-tight">
                No staff needed for<br/>basic queries &amp; orders
              </h3>
            </div>
          </motion.div>

          {/* Card 4: Broadcast Campaigns — wide */}
          <motion.div variants={cardVariants} className="md:col-span-2 bg-[#151921] rounded-2xl md:rounded-[1.5rem] p-6 flex flex-col justify-end min-h-[300px] md:min-h-[350px] relative overflow-hidden group hover:bg-[#1A1E28] transition-colors border border-white/5">
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: "url('https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=1500&auto=format&fit=crop')" }}
            >
              <div className="absolute inset-0 bg-gradient-to-t from-[#151921] via-[#151921]/80 to-[#151921]/20" />
            </div>

            {/* Campaign stats */}
            <div className="relative z-10 w-full md:w-[85%] mx-auto mb-6 p-4 bg-gradient-to-br from-white/10 to-transparent backdrop-blur-md rounded-2xl border border-white/10 shadow-xl">
              <div className="flex justify-between items-center text-white/70 text-[10px] font-bold tracking-widest border-b border-white/10 pb-2 mb-3">
                ONAM SALE CAMPAIGN
                <Megaphone size={14} className="text-[#7c3aed]" />
              </div>
              <div className="grid grid-cols-3 gap-3">
                {[
                  { label: 'Sent', value: '1,240', color: 'text-white' },
                  { label: 'Delivered', value: '1,198', color: 'text-[#25D366]' },
                  { label: 'Orders', value: '87', color: 'text-[#f57c00]' },
                ].map(item => (
                  <div key={item.label} className="bg-black/30 rounded-xl p-2.5 text-center border border-white/5">
                    <p className={`text-[18px] font-bold ${item.color}`}>{item.value}</p>
                    <p className="text-[10px] text-white/50 font-medium mt-0.5">{item.label}</p>
                  </div>
                ))}
              </div>
              <div className="mt-3 flex items-center justify-between">
                <div className="flex items-center gap-1.5">
                  <MetaIcon size={11} className="text-white/40" />
                  <span className="text-[10px] text-white/40">Sent via WhatsApp Business API</span>
                </div>
                <span className="text-[10px] font-bold text-[#25D366]">↑ 7% conversion</span>
              </div>
            </div>

            <div className="relative z-10 mt-auto">
              <h3 className="text-white text-[24px] md:text-[28px] font-medium leading-[1.2] tracking-tight max-w-xl">
                Send Onam offers to 1,000 customers<br/>in one click
              </h3>
            </div>
          </motion.div>

          {/* Card 5: Kerala focus */}
          <motion.div variants={cardVariants} className="md:col-span-1 bg-[#151921] rounded-2xl md:rounded-[1.5rem] p-6 flex flex-col justify-end min-h-[300px] md:min-h-[350px] relative overflow-hidden group hover:bg-[#1A1E28] transition-colors border border-white/5">
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: "url('https://images.unsplash.com/photo-1567401893414-76b7b1e5a7a5?q=80&w=1000&auto=format&fit=crop')" }}
            >
              <div className="absolute inset-0 bg-gradient-to-t from-[#151921] via-[#151921]/90 to-[#151921]/30" />
            </div>

            {/* Tags */}
            <div className="relative z-10 w-[95%] md:w-[90%] mx-auto mb-6 p-4 bg-white/10 backdrop-blur-md rounded-xl border border-white/10 flex flex-col gap-3 shadow-lg">
              <div className="flex justify-between items-center text-[10px] font-bold text-white/80 tracking-widest border-b border-white/10 pb-2">
                BUILT FOR KERALA <Globe size={14} className="text-gray-400" />
              </div>
              <div className="flex flex-wrap gap-2">
                <span className="bg-[#25D366]/20 text-green-300 border border-[#25D366]/30 px-3 py-1.5 rounded-[4px] text-[11px] font-medium flex items-center gap-1">
                  <WhatsAppIcon size={10} /> WhatsApp AI
                </span>
                <span className="bg-[#E1306C]/20 text-pink-300 border border-[#E1306C]/30 px-3 py-1.5 rounded-[4px] text-[11px] font-medium flex items-center gap-1">
                  <InstagramIcon size={10} /> Instagram DM
                </span>
                <span className="bg-orange-500/20 text-orange-300 border border-orange-500/30 px-3 py-1.5 rounded-[4px] text-[11px] font-medium">
                  Malayalam AI
                </span>
                <span className="bg-white/10 text-white/90 border border-white/20 px-3 py-1.5 rounded-[4px] text-[11px] font-bold flex items-center gap-1.5 mt-1">
                  <MetaIcon size={10} className="text-[#4a90e2]" /> Meta Verified
                </span>
              </div>
            </div>

            <div className="relative z-10 mt-auto pt-10 md:pt-20">
              <h3 className="text-white text-[20px] md:text-[22px] font-medium leading-[1.2] tracking-tight">
                Made for Kerala shops,<br/>clinics &amp; restaurants
              </h3>
            </div>
          </motion.div>

        </motion.div>
      </div>
    </section>
  )
}