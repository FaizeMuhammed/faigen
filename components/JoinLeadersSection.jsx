'use client'

import React from "react";
import { Bot, CheckCircle2, MessageSquare, ShieldCheck, Zap, Mail } from "lucide-react";

// AI Action Logs to replace testimonials
const aiLogs = [
  {
    id: 1,
    icon: <MessageSquare size={16} className="text-[#2563EB]" />,
    text: "At our firm, we heavily rely on Faigen AI to effectively communicate with countless tenants on a weekly basis.",
    position: "top-[15%] left-[5%] md:left-[16%]",
    depth: "z-10 scale-90 opacity-80 blur-[1px]",
  },
  {
    id: 2,
    icon: <Bot size={16} className="text-[#10B981]" />,
    text: "Each week, we connect with many tenants through Faigen AI, boosting our outreach.",
    position: "top-[35%] md:top-[38%] left-[2%] md:left-[4%]",
    depth: "z-30 scale-100 shadow-xl",
  },
  {
    id: 3,
    icon: <Zap size={16} className="text-[#F59E0B]" />,
    text: "My company uses Faigen AI to text with thousands of renters every week. We run a real estate company that leases homes and part of the effort of leasing is responding to leads quick.",
    position: "top-[70%] md:top-[65%] left-[8%] md:left-[12%]",
    depth: "z-10 scale-95 opacity-90 blur-[0.5px]",
  },
  {
    id: 4,
    icon: <ShieldCheck size={16} className="text-[#6366F1]" />,
    text: "We depend on Faigen AI to send messages to a large number of renters each week.",
    position: "top-[10%] md:top-[15%] right-[5%] md:right-[18%]",
    depth: "z-0 scale-90 opacity-70 blur-[1.5px]",
  },
  {
    id: 5,
    icon: <CheckCircle2 size={16} className="text-[#8B5CF6]" />,
    text: "In our thriving real estate business, we utilize Faigen AI to efficiently handle a multitude of inquiries from prospective tenants each week. This innovative tool allows us to respond swiftly and effectively.",
    position: "top-[40%] md:top-[42%] right-[2%] md:right-[3%]",
    depth: "z-30 scale-100 shadow-xl",
  },
  {
    id: 6,
    icon: <Mail size={16} className="text-[#EF4444]" />,
    text: "Our company leverages Faigen AI to text with a vast number of renters each week.",
    position: "top-[75%] md:top-[70%] right-[10%] md:right-[15%]",
    depth: "z-0 scale-85 opacity-60 blur-[2px]",
  }
];

export default function JoinLeadersSection() {
  return (
    <section className="w-full bg-white py-10 font-sans text-[#1A1A1A]">
      <div className="w-full px-4 md:px-6">
        
        {/* The Massive Full-Width Gradient Container */}
        <div 
          className="relative w-full rounded-[2.5rem] md:rounded-[3.5rem] overflow-hidden pt-16 md:pt-24 pb-24 md:pb-32 px-4 border border-gray-100"
          style={{
            background: "linear-gradient(180deg, #D4E8F0 0%, #E8EBE0 40%, #F5E5C9 75%, #F7DCAE 100%)"
          }}
        >
          
          {/* --- TOP HALF: The 3D Orb & Context Cards --- */}
          <div className="relative w-full h-[500px] md:h-[650px] max-w-[1300px] mx-auto">
            
            {/* The Central 3D Glowing Orb */}
            <div 
              className="absolute top-[45%] left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 w-[220px] h-[220px] md:w-[320px] md:h-[320px]"
            >
              <div 
                className="w-full h-full rounded-full relative shadow-[0_30px_60px_rgba(56,189,248,0.4)]"
                style={{
                  background: "radial-gradient(circle at 35% 35%, #BAE6FD 0%, #38BDF8 40%, #0284C7 100%)",
                  boxShadow: "inset -20px -20px 40px rgba(0,0,0,0.2), inset 10px 10px 30px rgba(255,255,255,0.8), 0 30px 60px rgba(56,189,248,0.5)"
                }}
              >
                <div className="absolute top-[12%] left-[18%] w-[40%] h-[30%] bg-white/80 rounded-[100%] blur-[2px] transform -rotate-45" />
                <div className="absolute bottom-[10%] right-[15%] w-[30%] h-[15%] bg-white/30 rounded-[100%] blur-[4px] transform rotate-12" />
              </div>
            </div>

            {/* Fixed Glassmorphism Cards */}
            {aiLogs.map((item) => (
              <div
                key={item.id}
                className={`absolute ${item.position} ${item.depth} hidden md:flex items-start gap-3 bg-white/30 backdrop-blur-md border border-white/40 p-4 rounded-xl max-w-[280px] md:max-w-[340px] shadow-[0_10px_30px_rgba(0,0,0,0.05)]`}
              >
                <div className="w-8 h-8 rounded-full bg-white/60 flex items-center justify-center shrink-0 border border-white/80 shadow-sm">
                  {item.icon}
                </div>
                <p className="text-[12px] font-medium text-gray-800 leading-relaxed pt-1.5">
                  {item.text}
                </p>
              </div>
            ))}

            {/* Mobile Fallback for Cards */}
            <div className="md:hidden absolute top-[5%] left-[5%] right-[5%] z-30 flex flex-col gap-4">
               <div className="bg-white/40 backdrop-blur-md border border-white/50 p-4 rounded-xl flex items-start gap-3 shadow-lg">
                  <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center shrink-0">
                    <MessageSquare size={14} className="text-[#2563EB]" />
                  </div>
                  <p className="text-[12px] font-medium text-gray-800 leading-snug">{aiLogs[1].text}</p>
               </div>
               <div className="bg-white/40 backdrop-blur-md border border-white/50 p-4 rounded-xl flex items-start gap-3 shadow-lg mt-48">
                  <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center shrink-0">
                    <CheckCircle2 size={14} className="text-[#8B5CF6]" />
                  </div>
                  <p className="text-[12px] font-medium text-gray-800 leading-snug">{aiLogs[4].text}</p>
               </div>
            </div>

          </div>

          {/* --- BOTTOM HALF: Headline & CTA --- */}
          <div className="relative z-30 flex flex-col items-center text-center mt-[-10px] md:mt-[-40px]">
            <h2 className="text-[3rem] md:text-[5.5rem] font-medium tracking-tight text-[#1A1A1A] leading-[1.05] max-w-4xl mb-10">
              Join forward-thinking <br /> AI leaders
            </h2>

            {/* Form Input Group */}
            <form className="flex flex-col sm:flex-row items-center gap-3 w-full max-w-[440px]" onSubmit={(e) => e.preventDefault()}>
              <input 
                type="email" 
                placeholder="Your email address" 
                required
                className="w-full sm:w-auto flex-1 bg-white/70 backdrop-blur-md border border-white rounded-xl px-5 py-3.5 text-[15px] text-gray-900 placeholder:text-gray-500 shadow-sm focus:outline-none focus:ring-2 focus:ring-[#2563EB]/50 transition-all font-medium"
              />
              <button 
                type="submit"
                className="w-full sm:w-auto bg-[#1A1A1A] hover:bg-black text-white px-8 py-3.5 rounded-xl text-[15px] font-medium shadow-md transition-colors"
              >
                Notify
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
}