'use client'

import React from "react";
import { motion } from "framer-motion";
import { 
  Check, Play, Square, Search, Bell, User, LayoutDashboard, 
  MessageCircle, ShoppingBag, Folder, Settings, Plus, BarChart3, 
  Bot, Network, CheckSquare, MoreVertical, Instagram, Globe,Calendar, ChevronDown
} from "lucide-react";

export default function DashboardSection() {
  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
  };

  const float1 = {
    initial: { y: 0, rotate: -6 },
    animate: { y: [-5, 5, -5], rotate: [-6, -4, -6], transition: { duration: 5, repeat: Infinity, ease: "easeInOut" } }
  };

  const float2 = {
    initial: { y: 0, rotate: 6 },
    animate: { y: [5, -5, 5], rotate: [6, 4, 6], transition: { duration: 6, repeat: Infinity, ease: "easeInOut" } }
  };

  return (
    <section className="w-full pt-20 pb-32 bg-white font-sans text-[#1A1A1A] overflow-hidden">
      <div className="max-w-[1300px] mx-auto px-4 sm:px-6 md:px-12">
        
        {/* --- Top Text Section --- */}
        <motion.div 
          initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp}
          className="flex flex-col items-center text-center mb-16"
        >
          <div className="bg-white border border-gray-200 px-5 py-1.5 rounded-full shadow-[0_2px_10px_rgba(0,0,0,0.04)] text-sm font-semibold text-gray-600 mb-8 cursor-pointer hover:bg-gray-50 transition-colors">
            Solutions
          </div>
          <h2 className="text-[2.5rem] md:text-[3.5rem] leading-[1.1] font-medium tracking-tight text-[#1A1A1A] max-w-2xl mb-16">
            Solve your business's biggest challenges
          </h2>

          {/* Three Columns Info */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-6 w-full max-w-4xl text-left relative">
            {/* Connecting subtle line behind icons */}
            <div className="hidden md:block absolute top-[14px] left-[15%] right-[15%] h-[1px] bg-gray-100 z-0"></div>

            <div className="relative z-10 px-4">
              <div className="w-8 h-8 bg-white border border-yellow-200 text-yellow-500 rounded-lg flex items-center justify-center shadow-sm mb-4 mx-auto md:mx-0">
                <Network size={16} />
              </div>
              <p className="text-gray-600 text-[14px] font-medium leading-relaxed text-center md:text-left">
                Ensure your team is always on the same page with synced WhatsApp and Insta DMs.
              </p>
            </div>
            <div className="relative z-10 px-4">
              <div className="w-8 h-8 bg-white border border-orange-200 text-orange-500 rounded-lg flex items-center justify-center shadow-sm mb-4 mx-auto md:mx-0">
                <CheckSquare size={16} />
              </div>
              <p className="text-gray-600 text-[14px] font-medium leading-relaxed text-center md:text-left">
                Prioritize and manage orders effectively so your team can focus on packing and delivery.
              </p>
            </div>
            <div className="relative z-10 px-4">
              <div className="w-8 h-8 bg-white border border-blue-200 text-[#2563EB] rounded-lg flex items-center justify-center shadow-sm mb-4 mx-auto md:mx-0">
                <User size={16} />
              </div>
              <p className="text-gray-600 text-[14px] font-medium leading-relaxed text-center md:text-left">
                Hold everyone accountable without the need for constant manual check-ins.
              </p>
            </div>
          </div>
        </motion.div>

        {/* --- Massive Dashboard Container --- */}
        <motion.div 
          initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp}
          className="relative w-full max-w-[1150px] mx-auto mt-20"
        >
          {/* Floating Left Block (24/7) */}
          <motion.div variants={float1} initial="initial" animate="animate" className="absolute -left-6 md:-left-12 top-[40%] z-30">
            <div className="bg-white p-4 rounded-2xl shadow-[0_20px_40px_-5px_rgba(0,0,0,0.15)] border border-gray-100 flex items-center justify-center">
               <span className="text-[2rem] font-medium text-gray-800 tracking-tighter">24<span className="text-[#2563EB]">/</span>7</span>
            </div>
          </motion.div>

          {/* Floating Right Block (Checkmark) */}
          <motion.div variants={float2} initial="initial" animate="animate" className="absolute -right-6 md:-right-12 top-[60%] z-30">
            <div className="bg-white p-4 rounded-2xl shadow-[0_20px_40px_-5px_rgba(0,0,0,0.15)] border border-gray-100 flex items-center justify-center">
               <div className="bg-[#10B981] text-white p-2 rounded-xl">
                 <Check size={28} strokeWidth={3} />
               </div>
            </div>
          </motion.div>

          {/* Brand Blue Wrapper matching your Hero section CTA */}
          <div className="bg-[#2563EB] rounded-[2rem] md:rounded-[2.5rem] p-3 md:p-6 shadow-2xl relative overflow-hidden">
            
            {/* Inner Dashboard App UI */}
            <div className="bg-[#F8F9FA] rounded-[1.5rem] md:rounded-[2rem] shadow-inner w-full flex flex-col md:flex-row overflow-hidden border border-white/20 h-[700px]">
              
              {/* Sidebar (Hidden on mobile) */}
              <div className="hidden md:flex w-[240px] bg-[#F8F9FA] border-r border-gray-200 flex-col py-6">
                
                {/* Logo Area */}
                <div className="px-6 flex items-center gap-2 mb-8">
                  <div className="w-6 h-6 flex flex-wrap gap-[2px]">
                    <div className="w-[10px] h-[10px] bg-[#2563EB] rounded-full"></div>
                    <div className="w-[10px] h-[10px] bg-[#1A1A1A] rounded-full"></div>
                    <div className="w-[10px] h-[10px] bg-[#1A1A1A] rounded-full"></div>
                    <div className="w-[10px] h-[10px] bg-[#1A1A1A] rounded-full"></div>
                  </div>
                  <span className="font-bold tracking-tight text-lg text-gray-900">Faigen</span>
                </div>

                {/* Create Button */}
                <div className="px-6 mb-8">
                  <button className="w-full bg-white border border-gray-200 rounded-full py-2 flex items-center justify-center gap-2 text-sm font-bold text-gray-700 shadow-sm hover:bg-gray-50 transition-colors">
                    <Plus size={16} /> Add Agent
                  </button>
                </div>

                {/* Menu Items */}
                <div className="px-4 space-y-1 mb-8">
                  <p className="px-4 text-[10px] font-bold text-gray-400 tracking-wider mb-2">GENERAL</p>
                  <div className="flex items-center justify-between bg-white px-4 py-2.5 rounded-xl shadow-sm border border-gray-100 cursor-pointer">
                    <div className="flex items-center gap-3 text-gray-900 font-semibold text-[13px]">
                      <LayoutDashboard size={16} /> Home
                    </div>
                  </div>
                  <div className="flex items-center justify-between px-4 py-2.5 rounded-xl cursor-pointer hover:bg-gray-100 text-gray-600 transition-colors">
                    <div className="flex items-center gap-3 font-medium text-[13px]">
                      <MessageCircle size={16} /> Live Inbox
                    </div>
                    <span className="bg-red-100 text-red-600 text-[10px] font-bold px-2 py-0.5 rounded-full">22</span>
                  </div>
                  <div className="flex items-center justify-between px-4 py-2.5 rounded-xl cursor-pointer hover:bg-gray-100 text-gray-600 transition-colors">
                    <div className="flex items-center gap-3 font-medium text-[13px]">
                      <ShoppingBag size={16} /> Orders
                    </div>
                    <span className="text-gray-400 text-[11px] font-bold">15</span>
                  </div>
                  <div className="flex items-center gap-3 px-4 py-2.5 rounded-xl cursor-pointer hover:bg-gray-100 text-gray-600 font-medium text-[13px] transition-colors">
                    <BarChart3 size={16} /> Analytics
                  </div>
                  <div className="flex items-center gap-3 px-4 py-2.5 rounded-xl cursor-pointer hover:bg-gray-100 text-gray-600 font-medium text-[13px] transition-colors">
                    <Folder size={16} /> Catalog
                  </div>
                </div>

                {/* Workspace Section */}
                <div className="px-4 space-y-1 flex-1">
                  <div className="flex items-center justify-between px-4 mb-2">
                    <p className="text-[10px] font-bold text-gray-400 tracking-wider">MY AGENTS</p>
                    <Plus size={12} className="text-gray-400 cursor-pointer" />
                  </div>
                  <div className="flex items-center gap-3 px-4 py-2 rounded-lg cursor-pointer hover:bg-gray-100 text-gray-600 font-medium text-[13px]">
                    <Bot size={14} className="text-[#25D366]" /> WhatsApp Sales Bot
                  </div>
                  <div className="flex items-center gap-3 px-4 py-2 rounded-lg cursor-pointer hover:bg-gray-100 text-gray-600 font-medium text-[13px]">
                    <Bot size={14} className="text-[#E1306C]" /> Insta DM Auto-reply
                  </div>
                  <div className="flex items-center gap-3 px-4 py-2 rounded-lg cursor-pointer hover:bg-gray-100 text-gray-600 font-medium text-[13px]">
                    <Bot size={14} className="text-[#2563EB]" /> Website Support
                  </div>
                </div>
              </div>

              {/* --- Main Dashboard Area --- */}
              <div className="flex-1 bg-[#F8F9FA] flex flex-col overflow-y-auto">
                
                {/* Topbar */}
                <div className="h-16 border-b border-gray-200 px-6 flex items-center justify-between bg-white/50 backdrop-blur-sm sticky top-0 z-20">
                  <div className="flex items-center gap-2 text-gray-500 font-medium text-[13px]">
                    <Calendar size={16} /> Today, 27 March
                  </div>
                  <div className="flex items-center gap-5">
                    <Search size={18} className="text-gray-400 cursor-pointer hover:text-gray-600 transition-colors" />
                    <Bell size={18} className="text-gray-400 cursor-pointer hover:text-gray-600 transition-colors" />
                    
                    {/* User Profile Avatar with Real Image */}
                    <div className="flex items-center gap-2 cursor-pointer bg-white py-1 px-1.5 pr-2 rounded-full border border-gray-200 shadow-sm hover:bg-gray-50 transition-colors">
                      <div className="w-7 h-7 rounded-full overflow-hidden border border-gray-100">
                        <img src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=100&auto=format&fit=crop" alt="Rahul" className="w-full h-full object-cover" />
                      </div>
                      <span className="text-[12px] font-semibold text-gray-700 pr-1">Rahul M.</span>
                      <ChevronDown size={14} className="text-gray-400" />
                    </div>

                  </div>
                </div>

                {/* Dashboard Content */}
                <div className="p-6 md:p-8">
                  
                  {/* Header */}
                  <div className="flex items-center justify-between mb-8">
                    <h1 className="text-[2rem] font-medium tracking-tight text-gray-400">
                      Good morning, <span className="text-[#1A1A1A]">Rahul</span>
                    </h1>
                    <button className="bg-white border border-gray-200 rounded-full px-4 py-1.5 text-xs font-bold text-gray-600 shadow-sm flex items-center gap-1 hover:bg-gray-50 transition-colors">
                      Customize <Settings size={12} />
                    </button>
                  </div>

                  {/* Grid Layout */}
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
                    
                    {/* LEFT COLUMN: Action List */}
                    <div className="lg:col-span-5 bg-white rounded-2xl shadow-sm border border-gray-100 p-6 flex flex-col h-[400px]">
                      <div className="flex items-center gap-2 border-b border-gray-200 pb-3 mb-4">
                        <CheckSquare size={20} className="text-yellow-500" fill="#FEF08A" />
                        <h3 className="text-xl font-bold text-gray-900">Action required</h3>
                      </div>
                      
                      <div className="text-xs text-gray-400 font-bold mb-3 flex items-center gap-2 cursor-pointer hover:text-gray-600 transition-colors">
                        <Plus size={14} /> Handle manually
                      </div>

                      <div className="space-y-4 flex-1 overflow-y-auto pr-2">
                        {/* Item 1 (Done) - With Product Thumbnail */}
                        <div className="flex items-start gap-3 opacity-50">
                          <div className="w-4 h-4 mt-0.5 rounded bg-[#2563EB] text-white flex items-center justify-center shrink-0">
                            <Check size={12} strokeWidth={3} />
                          </div>
                          <div className="flex items-center gap-3">
                            <img src="https://images.unsplash.com/photo-1550639525-c97d455acf70?q=80&w=100&auto=format&fit=crop" alt="Floral Dress" className="w-8 h-8 rounded-md object-cover shadow-sm border border-gray-200 shrink-0" />
                            <p className="text-[13px] font-medium text-gray-600 line-through">
                              Approve floral dress order for Aisha via WhatsApp <span className="text-orange-500 not-italic line-through">🔥</span>
                            </p>
                          </div>
                        </div>
                        
                        {/* Item 2 - With User Avatars */}
                        <div className="flex items-start gap-3">
                          <div className="w-4 h-4 mt-0.5 rounded border-2 border-[#2563EB] bg-white text-[#2563EB] flex items-center justify-center shrink-0">
                            <Check size={12} strokeWidth={3} />
                          </div>
                          <div className="flex items-start gap-2 flex-col">
                            <p className="text-[13px] font-bold text-gray-800 leading-snug">
                              Send follow-up messages to potential leads (Cart Abandoned)
                            </p>
                            <div className="flex -space-x-1.5 mt-1">
                              <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=100&auto=format&fit=crop" alt="Lead 1" className="w-5 h-5 rounded-full border-2 border-white object-cover shadow-sm"/>
                              <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=100&auto=format&fit=crop" alt="Lead 2" className="w-5 h-5 rounded-full border-2 border-white object-cover shadow-sm"/>
                              <div className="w-5 h-5 rounded-full border-2 border-white bg-gray-100 flex items-center justify-center text-[8px] font-bold text-gray-500 shadow-sm">+3</div>
                            </div>
                          </div>
                        </div>

                        {/* Item 3 */}
                        <div className="flex items-start gap-3">
                          <div className="w-4 h-4 mt-0.5 rounded border-2 border-gray-300 bg-white flex items-center justify-center shrink-0"></div>
                          <p className="text-[13px] font-bold text-gray-800 leading-snug">
                            Review AI bot responses for Custom Design inquiries 🎀
                          </p>
                        </div>

                        {/* Item 4 */}
                        <div className="flex items-start gap-3">
                          <div className="w-4 h-4 mt-0.5 rounded border-2 border-[#2563EB] bg-white text-[#2563EB] flex items-center justify-center shrink-0">
                            <Check size={12} strokeWidth={3} />
                          </div>
                          <p className="text-[13px] font-bold text-gray-800 leading-snug">
                            Upload new inventory catalog to Faigen Engine
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* RIGHT COLUMN (Split into Top & Bottom) */}
                    <div className="lg:col-span-7 flex flex-col gap-6">
                      
                      {/* Top Row: Timer & Chart */}
                      <div className="grid grid-cols-2 gap-6">
                        
                        {/* Timer Widget */}
                        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 flex flex-col justify-between h-[190px]">
                          <div className="flex items-center justify-between">
                            <h3 className="font-bold text-gray-800 text-[14px]">AI Uptime</h3>
                            <MoreVertical size={16} className="text-gray-400 cursor-pointer" />
                          </div>
                          <div className="text-center">
                            <p className="text-[2.2rem] font-medium text-gray-900 tracking-tight leading-none mb-4">
                              124:21:58
                            </p>
                            <div className="flex items-center justify-center gap-3">
                              <button className="w-8 h-8 rounded-full bg-red-50 text-red-500 flex items-center justify-center hover:bg-red-100 transition-colors border border-red-100">
                                <Square size={12} fill="currentColor" />
                              </button>
                              <button className="w-10 h-10 rounded-full bg-red-500 text-white flex items-center justify-center shadow-md hover:bg-red-600 transition-colors">
                                <Play size={16} fill="currentColor" className="ml-1" />
                              </button>
                            </div>
                          </div>
                        </div>

                        {/* Chart Widget */}
                        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 flex flex-col justify-between h-[190px]">
                          <div className="flex items-center justify-between">
                            <h3 className="font-bold text-gray-800 text-[14px]">Order Sources</h3>
                            <div className="flex gap-2 text-[10px] font-bold">
                              <span className="text-[#2563EB] border-b-2 border-[#2563EB] pb-1">weekly</span>
                              <span className="text-gray-400 pb-1 cursor-pointer">daily</span>
                            </div>
                          </div>
                          
                          <div className="flex items-center justify-between mt-2">
                            {/* Stats */}
                            <div className="flex flex-col gap-3">
                              <div>
                                <p className="text-[10px] text-gray-400 font-bold mb-0.5">WHATSAPP</p>
                                <p className="text-lg font-bold text-gray-900 leading-none">29<span className="text-gray-400 text-sm">/40</span></p>
                              </div>
                              <div>
                                <p className="text-[10px] text-gray-400 font-bold mb-0.5">INSTAGRAM</p>
                                <p className="text-lg font-bold text-gray-900 leading-none">8<span className="text-gray-400 text-sm">/12</span></p>
                              </div>
                              <div>
                                <p className="text-[10px] text-gray-400 font-bold mb-0.5">WEBSITE</p>
                                <p className="text-lg font-bold text-gray-900 leading-none">4<span className="text-gray-400 text-sm">/7</span></p>
                              </div>
                            </div>
                            
                            {/* Concentric Circle Chart (SVG) */}
                            <div className="w-24 h-24">
                              <svg viewBox="0 0 100 100" className="w-full h-full transform -rotate-90">
                                {/* Outer (WhatsApp - Green) */}
                                <circle cx="50" cy="50" r="40" stroke="#F3F4F6" strokeWidth="8" fill="none" />
                                <circle cx="50" cy="50" r="40" stroke="#25D366" strokeWidth="8" fill="none" strokeDasharray="251.2" strokeDashoffset="62.8" strokeLinecap="round" />
                                {/* Middle (Insta - Yellow/Orange) */}
                                <circle cx="50" cy="50" r="28" stroke="#F3F4F6" strokeWidth="8" fill="none" />
                                <circle cx="50" cy="50" r="28" stroke="#FBBF24" strokeWidth="8" fill="none" strokeDasharray="175.9" strokeDashoffset="52.7" strokeLinecap="round" />
                                {/* Inner (Web - Brand Blue) */}
                                <circle cx="50" cy="50" r="16" stroke="#F3F4F6" strokeWidth="8" fill="none" />
                                <circle cx="50" cy="50" r="16" stroke="#2563EB" strokeWidth="8" fill="none" strokeDasharray="100.5" strokeDashoffset="40.2" strokeLinecap="round" />
                              </svg>
                            </div>
                          </div>
                        </div>

                      </div>

                      {/* Bottom Row: Tasks Assigned */}
                      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 flex-1 flex flex-col justify-between">
                         <div className="flex items-center justify-between mb-4">
                            <h3 className="font-bold text-gray-800 text-[15px]">Automations Running</h3>
                            <div className="w-6 h-6 rounded-full bg-gray-50 border border-gray-200 flex items-center justify-center cursor-pointer hover:bg-gray-100 transition-colors">
                              <Plus size={14} className="text-gray-500" />
                            </div>
                         </div>
                         <div className="flex gap-4 text-[11px] font-bold text-gray-400 mb-4 border-b border-gray-100 pb-2">
                            <span className="text-[#2563EB] border-b-2 border-[#2563EB] pb-2">Active</span>
                            <span className="cursor-pointer hover:text-gray-600 transition-colors">Paused</span>
                            <span className="cursor-pointer hover:text-gray-600 transition-colors">Drafts</span>
                         </div>
                         
                         <div className="space-y-4">
                            {/* Task 1 */}
                            <div className="flex items-center justify-between">
                              <div className="flex items-center gap-2 w-[40%]">
                                <div className="w-5 h-5 rounded bg-orange-100 text-orange-500 flex items-center justify-center text-[10px]"><MessageCircle size={10} fill="currentColor"/></div>
                                <span className="text-[12px] font-bold text-gray-800 truncate">WhatsApp Sales</span>
                              </div>
                              <div className="w-[40%] h-1.5 bg-gray-100 rounded-full overflow-hidden">
                                <div className="h-full bg-[#2563EB] rounded-full w-[60%]"></div>
                              </div>
                              <div className="w-[15%] flex justify-end items-center gap-2">
                                <span className="text-[10px] font-bold text-gray-600">60%</span>
                                <div className="w-4 h-4 rounded-full bg-gray-200 border border-white"></div>
                              </div>
                            </div>
                            
                            {/* Task 2 */}
                            <div className="flex items-center justify-between">
                              <div className="flex items-center gap-2 w-[40%]">
                                <div className="w-5 h-5 rounded bg-yellow-100 text-yellow-600 flex items-center justify-center text-[10px]"><Instagram size={10}/></div>
                                <span className="text-[12px] font-bold text-gray-800 truncate">Insta Comments Auto-reply</span>
                              </div>
                              <div className="w-[40%] h-1.5 bg-gray-100 rounded-full overflow-hidden">
                                <div className="h-full bg-[#2563EB] rounded-full w-[27%]"></div>
                              </div>
                              <div className="w-[15%] flex justify-end items-center gap-2">
                                <span className="text-[10px] font-bold text-gray-600">27%</span>
                                <div className="w-4 h-4 rounded-full bg-gray-200 border border-white"></div>
                              </div>
                            </div>

                            {/* Task 3 */}
                            <div className="flex items-center justify-between">
                              <div className="flex items-center gap-2 w-[40%]">
                                <div className="w-5 h-5 rounded bg-blue-100 text-[#2563EB] flex items-center justify-center text-[10px]"><Globe size={10}/></div>
                                <span className="text-[12px] font-bold text-gray-800 truncate">Website Lead Capture</span>
                              </div>
                              <div className="w-[40%] h-1.5 bg-gray-100 rounded-full overflow-hidden">
                                <div className="h-full bg-[#2563EB] rounded-full w-[95%]"></div>
                              </div>
                              <div className="w-[15%] flex justify-end items-center gap-2">
                                <span className="text-[10px] font-bold text-gray-600">95%</span>
                                <div className="w-4 h-4 rounded-full bg-gray-200 border border-white"></div>
                              </div>
                            </div>
                         </div>
                      </div>

                    </div>
                  </div>

                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}