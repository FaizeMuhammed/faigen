'use client'

import React from "react";
import { Bot, CheckCircle2, ShoppingBag, ShieldCheck, Zap, MessageSquare } from "lucide-react";

const WhatsAppIcon = ({ size = 16, className = '' }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
  </svg>
)

// Real Kerala business use cases floating around the orb
const businessCards = [
  {
    id: 1,
    icon: <ShoppingBag size={16} className="text-[#25D366]" />,
    business: "Natural Floors Kerala",
    text: "Before Agentified, we missed orders at night. Now our bot takes orders 24/7 in Malayalam. Sales went up by 40% in the first month.",
    position: "top-[15%] left-[5%] md:left-[16%]",
    depth: "z-10 scale-90 opacity-80 blur-[1px]",
  },
  {
    id: 2,
    icon: <WhatsAppIcon size={16} className="text-[#25D366]" />,
    business: "Kerala Restaurant",
    text: "Customers used to call and we'd miss it. Now they WhatsApp our menu, place orders, and get confirmations instantly. Game changer.",
    position: "top-[35%] md:top-[38%] left-[2%] md:left-[4%]",
    depth: "z-30 scale-100 shadow-xl",
  },
  {
    id: 3,
    icon: <Zap size={16} className="text-[#f57c00]" />,
    business: "Boutique, Kozhikode",
    text: "We sent an Onam offer broadcast to 800 customers on WhatsApp. 90 orders came in the same day. Best campaign we've ever run.",
    position: "top-[70%] md:top-[65%] left-[8%] md:left-[12%]",
    depth: "z-10 scale-95 opacity-90 blur-[0.5px]",
  },
  {
    id: 4,
    icon: <ShieldCheck size={16} className="text-[#7c3aed]" />,
    business: "Clinic, Thrissur",
    text: "Patients book appointments directly on WhatsApp now. The AI collects their name, date and complaint — all automated.",
    position: "top-[10%] md:top-[15%] right-[5%] md:right-[18%]",
    depth: "z-0 scale-90 opacity-70 blur-[1.5px]",
  },
  {
    id: 5,
    icon: <Bot size={16} className="text-[#387ed1]" />,
    business: "Hardware Store, Kochi",
    text: "We serve contractors who message late at night asking for stock availability. Agentified answers in Malayalam instantly. We don't miss a single lead.",
    position: "top-[40%] md:top-[42%] right-[2%] md:right-[3%]",
    depth: "z-30 scale-100 shadow-xl",
  },
  {
    id: 6,
    icon: <CheckCircle2 size={16} className="text-[#25D366]" />,
    business: "Textile Shop, Palakkad",
    text: "Our Instagram DM AI now handles product queries automatically. Earlier we had one person doing this full time. Now it's free.",
    position: "top-[75%] md:top-[70%] right-[10%] md:right-[15%]",
    depth: "z-0 scale-85 opacity-60 blur-[2px]",
  }
]

export default function JoinLeadersSection() {
  return (
    <section className="w-full py-16 md:py-24 px-4 md:px-8 xl:px-12 font-sans text-[#1A1A1A] overflow-hidden flex justify-center">

      <div
        className="relative w-full max-w-[1500px] rounded-[24px] md:rounded-[40px] overflow-hidden pt-16 md:pt-24 pb-24 md:pb-32 px-4 border border-[#eeeeee] shadow-[0_8px_40px_rgba(0,0,0,0.06)]"
        style={{
          background: "linear-gradient(180deg, #D4E8F0 0%, #E8EBE0 40%, #F5E5C9 75%, #F7DCAE 100%)"
        }}
      >

        {/* Top: Orb + floating cards */}
        <div className="relative w-full h-[500px] md:h-[650px] max-w-[1200px] mx-auto">

          {/* Central Orb */}
          <div className="absolute top-[45%] left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 w-[220px] h-[220px] md:w-[320px] md:h-[320px]">
            <div
              className="w-full h-full rounded-full relative"
              style={{
                background: "radial-gradient(circle at 35% 35%, #BAE6FD 0%, #38BDF8 40%, #0284C7 100%)",
                boxShadow: "inset -20px -20px 40px rgba(0,0,0,0.2), inset 10px 10px 30px rgba(255,255,255,0.8), 0 30px 60px rgba(56,189,248,0.5)"
              }}
            >
              <div className="absolute top-[12%] left-[18%] w-[40%] h-[30%] bg-white/80 rounded-[100%] blur-[2px] transform -rotate-45" />
              <div className="absolute bottom-[10%] right-[15%] w-[30%] h-[15%] bg-white/30 rounded-[100%] blur-[4px] transform rotate-12" />

              {/* WA icon inside orb */}
              <div className="absolute inset-0 flex items-center justify-center">
                <WhatsAppIcon size={48} className="text-white/80" />
              </div>
            </div>
          </div>

          {/* Desktop floating cards */}
          {businessCards.map((item) => (
            <div
              key={item.id}
              className={`absolute ${item.position} ${item.depth} hidden md:flex items-start gap-3 bg-white/30 backdrop-blur-md border border-white/40 p-4 rounded-xl max-w-[280px] md:max-w-[320px] shadow-[0_10px_30px_rgba(0,0,0,0.05)]`}
            >
              <div className="w-8 h-8 rounded-full bg-white/60 flex items-center justify-center shrink-0 border border-white/80 shadow-sm">
                {item.icon}
              </div>
              <div>
                <p className="text-[10px] font-bold text-gray-500 uppercase tracking-wide mb-1">{item.business}</p>
                <p className="text-[12px] font-medium text-gray-800 leading-relaxed">
                  "{item.text}"
                </p>
              </div>
            </div>
          ))}

          {/* Mobile fallback */}
          <div className="md:hidden absolute top-[5%] left-[5%] right-[5%] z-30 flex flex-col gap-4">
            <div className="bg-white/40 backdrop-blur-md border border-white/50 p-4 rounded-xl flex items-start gap-3 shadow-lg">
              <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center shrink-0">
                <WhatsAppIcon size={14} className="text-[#25D366]" />
              </div>
              <div>
                <p className="text-[10px] font-bold text-gray-500 uppercase tracking-wide mb-0.5">Kerala Restaurant</p>
                <p className="text-[12.5px] font-medium text-gray-800 leading-snug">"{businessCards[1].text}"</p>
              </div>
            </div>
            <div className="bg-white/40 backdrop-blur-md border border-white/50 p-4 rounded-xl flex items-start gap-3 shadow-lg mt-48">
              <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center shrink-0">
                <Zap size={14} className="text-[#f57c00]" />
              </div>
              <div>
                <p className="text-[10px] font-bold text-gray-500 uppercase tracking-wide mb-0.5">Boutique, Kozhikode</p>
                <p className="text-[12.5px] font-medium text-gray-800 leading-snug">"{businessCards[2].text}"</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom: CTA */}
        <div className="relative z-30 flex flex-col items-center text-center mt-[-10px] md:mt-[-40px]">

          {/* Social proof counter */}
          <div className="flex items-center gap-2 mb-6">
            <div className="flex -space-x-2">
              {['🏪', '🏥', '🧵', '🏗️', '🍽️'].map((emoji, i) => (
                <div key={i} className="w-8 h-8 rounded-full bg-white border-2 border-white/80 flex items-center justify-center text-[14px] shadow-sm">
                  {emoji}
                </div>
              ))}
            </div>
            <p className="text-[13px] font-semibold text-gray-700">
              <span className="font-bold text-[#1A1A1A]">50+ Kerala businesses</span> already automated
            </p>
          </div>

          <h2 className="text-[2.8rem] md:text-[4.5rem] font-medium tracking-tight text-[#1A1A1A] leading-[1.05] max-w-4xl mb-4">
            Every missed WhatsApp message<br />
            <span className="text-[#25D366]">is a sale going to someone else.</span>
          </h2>

          <p className="text-[16px] text-gray-600 font-medium mb-10 max-w-md">
            Set up your AI agent today and never lose a customer to slow replies again.
          </p>

          {/* Form */}
          <form
            className="flex flex-col sm:flex-row items-center gap-3 w-full max-w-[480px]"
            onSubmit={e => e.preventDefault()}
          >
            <input
              type="email"
              placeholder="Your email address"
              required
              className="w-full sm:w-auto flex-1 bg-white/70 backdrop-blur-md border border-white/80 hover:border-white rounded-xl px-5 py-3.5 text-[14px] text-[#1A1A1A] placeholder-[#666666] shadow-sm focus:outline-none focus:border-[#387ed1] focus:ring-1 focus:ring-[#387ed1] transition-all font-medium"
            />
            <button
              type="submit"
              className="w-full sm:w-auto bg-[#1A1A1A] hover:bg-[#333333] text-white px-8 py-3.5 rounded-xl text-[14px] font-medium shadow-md transition-colors"
            >
              Get Started Free
            </button>
          </form>

          <p className="text-[12px] text-gray-500 mt-4">
            Agent live in 24 hours · No credit card needed · Cancel anytime
          </p>
        </div>

      </div>
    </section>
  )
}