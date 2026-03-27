'use client'

import React from "react";
import { motion } from "framer-motion";
import { Star, Bot, Layout, MessageSquare, Sparkles, Download, ChevronDown, MousePointer2, Smartphone, CheckCircle2 } from "lucide-react";

export default function Home() {
  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
  };

  return (
    <div className="relative min-h-screen text-[#1A1A1A] font-sans selection:bg-[#3B453A] selection:text-white bg-white">
      
      {/* --- Pure White Navbar --- */}
      <header className="relative w-full bg-white z-50 pt-6 pb-4 px-6 md:px-12">
        <nav className="max-w-[1400px] mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-lg flex items-center justify-center overflow-hidden bg-white border border-gray-100 shadow-sm p-1">
              <img
                src="/ChatGPT_Image_Apr_4__2025__10_40_51_PM-removebg-preview.png"
                alt="Faigen Logo"
                className="h-full w-full object-contain"
                onError={(e) => {
                  e.target.style.display = 'none';
                  e.target.parentNode.innerHTML = '<div class="bg-black w-full h-full rounded-lg flex items-center justify-center text-white font-bold">F</div>';
                }}
              />
            </div>
            <span className="font-bold text-[1.15rem] tracking-tight text-[#1A1A1A]">Faigen</span>
          </div>

          <div className="hidden md:flex items-center space-x-10 text-[14px] font-medium text-[#4A4A4A]">
            <a href="#home" className="text-black font-semibold">Home</a>
            <a href="#services" className="hover:text-black transition-colors">Services</a>
            <a href="#ai" className="hover:text-black transition-colors">AI Bots</a>
            <a href="#about" className="hover:text-black transition-colors">About</a>
            <a href="#contact" className="hover:text-black transition-colors">Contact</a>
          </div>

          <div className="flex items-center gap-6">
            <button className="hidden md:block text-[14px] font-medium text-[#4A4A4A] hover:text-black transition-colors">
              Join Waiting List
            </button>
            <button className="bg-[#1C2022] text-white px-6 py-2.5 rounded-full text-[14px] font-medium hover:bg-black transition-all">
              Get App
            </button>
          </div>
        </nav>
      </header>

      {/* --- Top Hero Content with "Smoky/Cloudy" Background --- */}
      <main className="relative z-10 w-full pt-16 md:pt-20 pb-16 bg-[#FDFDFD]">
        <div className="absolute inset-0 pointer-events-none -z-10 overflow-hidden">
          <div className="absolute top-[5%] left-[10%] w-[50vw] h-[40vw] bg-[#E8EAE9] blur-[100px] rounded-[100%] opacity-60 mix-blend-multiply rotate-12"></div>
          <div className="absolute top-[20%] right-[5%] w-[45vw] h-[35vw] bg-[#EBECEB] blur-[120px] rounded-[100%] opacity-70 mix-blend-multiply -rotate-12"></div>
          <div className="absolute bottom-[10%] left-[30%] w-[60vw] h-[40vw] bg-[#E4E6E5] blur-[120px] rounded-[100%] opacity-50 mix-blend-multiply"></div>
          <div className="absolute inset-0 opacity-[0.2] mix-blend-overlay" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E")' }}></div>
        </div>

        <div className="max-w-[1400px] mx-auto px-6 md:px-12 relative z-10">
          <motion.div initial="hidden" animate="visible" variants={fadeUp} className="flex items-center gap-2 text-[#4A4A4C] font-medium text-sm mb-6">
            <Star className="w-4 h-4 fill-current text-[#1A1A1A]" />
            <span>Loved By 100+ Kerala Businesses</span>
          </motion.div>

          <div className="relative w-full">
            <motion.div className="w-full lg:w-[85%] space-y-8" variants={staggerContainer} initial="hidden" animate="visible">
              <motion.h1 variants={fadeUp} className="text-[3rem] sm:text-[4.2rem] lg:text-[5.5rem] xl:text-[6rem] leading-[1.05] font-normal tracking-[-0.02em] text-[#29302B] uppercase">
                WE BUILD WEBSITES <br className="hidden md:block"/>
                <span className="flex items-center flex-wrap gap-y-2 mt-1 md:mt-3">
                  THAT 
                  <span className="text-[#29302B]/40 blur-[5px] select-none hover:blur-none transition-all duration-500 cursor-default mx-3 md:mx-5">SELL</span> 
                  <span className="inline-flex items-center justify-center w-20 h-12 sm:w-28 sm:h-[4rem] lg:w-36 lg:h-[4.5rem] border-[3px] border-[#29302B] rounded-[2rem] mr-3 md:mr-5 text-[#29302B] align-middle bg-transparent shadow-sm">
                    <Bot className="w-6 h-6 sm:w-8 sm:h-8 lg:w-10 lg:h-10 fill-current opacity-80" />
                  </span>
                  & BOTS
                </span>
                THAT NEVER SLEEP
              </motion.h1>

              <motion.p variants={fadeUp} className="max-w-md text-[1rem] sm:text-[1.05rem] text-[#3A3A3A] leading-relaxed font-medium pt-2">
                Stop wasting hours manually replying to messages. We build beautiful websites for your brand and smart AI agents that take orders at 3 AM.
              </motion.p>

              <motion.div variants={fadeUp} className="pt-2 pb-12 lg:pb-0">
                <button className="bg-[#0A0A0A] text-white px-8 py-3.5 rounded-full font-medium text-[14px] shadow-xl hover:-translate-y-0.5 transition-all duration-300">
                  Automate My Business!
                </button>
              </motion.div>
            </motion.div>

            {/* Right Column Icons */}
            <motion.div className="flex gap-4 sm:gap-6 lg:absolute lg:right-0 lg:bottom-4" variants={staggerContainer} initial="hidden" animate="visible">
              {[
                { icon: Layout, label: "Web Apps", bg: "from-[#217899] to-[#0A3D54]" },       
                { icon: MessageSquare, label: "WhatsApp", bg: "from-[#91238C] to-[#450A43]" }, 
                { icon: Sparkles, label: "AI Agents", bg: "from-[#C77200] to-[#703B00]" },     
                { icon: Smartphone, label: "Auto-DM", bg: "from-[#17856D] to-[#094235]" },     
              ].map((tool, i) => (
                <motion.div key={i} variants={fadeUp} className="flex flex-col items-center gap-2 group cursor-pointer" whileHover={{ y: -4 }}>
                  <div className={`w-[3.5rem] h-[3.5rem] sm:w-[4rem] sm:h-[4rem] rounded-[1rem] bg-gradient-to-b ${tool.bg} shadow-md flex items-center justify-center text-white relative overflow-hidden ring-1 ring-white/20`}>
                    <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <tool.icon className="w-6 h-6 sm:w-7 sm:h-7 relative z-10 drop-shadow-md text-white/90" strokeWidth={1.5} />
                  </div>
                  <span className="text-[11px] font-semibold text-[#1A1A1A]">{tool.label}</span>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </main>

      {/* --- Second Section: Pure White Background --- */}
      <section className="relative w-full pt-16 md:pt-24 pb-32 bg-white">
        
        <div className="relative z-20 max-w-[850px] mx-auto px-4 sm:px-6">
          <motion.div 
            initial={{ y: 80, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, type: "spring", stiffness: 45 }}
            className="bg-white rounded-[1.5rem] border border-gray-100 shadow-[0_20px_50px_-15px_rgba(0,0,0,0.08)] p-6 sm:p-8 relative"
          >
            {/* Card Header */}
            <div className="flex items-center justify-between bg-white border border-gray-100 p-3 rounded-2xl mb-8 shadow-sm">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-[#25D366] rounded-xl flex items-center justify-center shadow-inner text-white">
                  <MessageSquare size={24} fill="currentColor" />
                </div>
                <div>
                  <p className="text-[11px] text-gray-500 font-medium">Faigen AI Bot</p>
                  <h3 className="text-[15px] font-semibold text-gray-900">WhatsApp Order Automation</h3>
                </div>
              </div>
              <ChevronDown size={20} className="text-gray-400 mr-2" />
            </div>

            {/* Sub Header */}
            <div className="flex justify-between items-center pb-4 mb-4">
              <h2 className="text-[1.35rem] font-medium tracking-tight text-gray-900">Live AI Conversation</h2>
              <div className="flex items-center gap-2">
                 <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500"></span>
                </span>
                <span className="text-[12px] font-semibold text-gray-600">Bot Active</span>
              </div>
            </div>

            {/* --- WhatsApp Authentic Chat Interface --- */}
            <div className="relative w-full h-[280px] rounded-[1rem] border border-gray-200 mb-10 overflow-hidden bg-[#EFEAE2] shadow-inner flex flex-col">
              <div 
                className="absolute inset-0 opacity-[0.06] mix-blend-multiply z-0 pointer-events-none" 
                style={{ backgroundImage: "url('https://i.pinimg.com/736x/8c/98/99/8c98994518b575bfd8c949e91d20548b.jpg')", backgroundSize: "300px" }}
              ></div>

              {/* Chat Content */}
              <div className="relative z-10 p-5 flex flex-col gap-4 overflow-y-auto h-full scrollbar-hide">
                <div className="flex justify-center w-full">
                  <span className="bg-white/80 backdrop-blur-sm text-gray-600 text-[10px] font-medium px-3 py-1 rounded-lg shadow-sm">
                    Today, 3:10 AM
                  </span>
                </div>

                {/* Customer Message */}
                <div className="bg-[#D9FDD3] text-gray-800 text-[13.5px] p-3 rounded-2xl rounded-tr-sm max-w-[85%] shadow-sm w-fit self-end relative pb-5">
                  Namaskaram, do you have the floral dress available? Need it urgently for a wedding tomorrow! 😭
                  <div className="absolute bottom-1 right-2 flex items-center gap-1">
                    <span className="text-[9px] text-gray-500">3:12 AM</span>
                    <CheckCircle2 size={10} className="text-blue-500 fill-current" />
                  </div>
                </div>

                {/* AI Bot Message */}
                <div className="bg-white text-gray-800 text-[13.5px] p-3 rounded-2xl rounded-tl-sm max-w-[85%] shadow-sm w-fit relative pb-6">
                  <p className="mb-2">Namaskaram! Yes, we have exactly 2 left in size M. ✨</p>
                  <p>I have reserved one for you. Click below to pay and we will dispatch it by 9 AM.</p>
                  <div className="absolute bottom-1 right-2">
                    <span className="text-[9px] text-gray-400">3:12 AM</span>
                  </div>
                </div>

                {/* Interactive Action inside chat */}
                <div className="bg-white border border-gray-100 text-gray-800 text-[13px] p-3 rounded-xl max-w-[85%] shadow-md w-fit flex items-center gap-3 cursor-pointer hover:bg-gray-50 transition-colors">
                  <div className="w-8 h-8 bg-[#25D366]/10 rounded-full flex items-center justify-center text-[#25D366]">
                    <Smartphone size={16} />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Pay ₹1,299</p>
                    <p className="text-[10px] text-gray-500">Secure Razorpay Link</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Grid Section */}
            <div>
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-[1.15rem] font-medium tracking-tight text-gray-900">Recent AI Orders</h3>
                <span className="text-[11px] font-medium text-gray-500 flex items-center gap-2">
                  Processing.. (14%) <span className="w-3.5 h-3.5 border-2 border-gray-200 border-t-gray-600 rounded-full animate-spin"></span>
                </span>
              </div>
              
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                <div className="space-y-2 cursor-pointer">
                  <div className="aspect-square rounded-2xl bg-cover bg-center shadow-sm border border-gray-100" style={{backgroundImage: "url('https://images.unsplash.com/photo-1546069901-ba9599a7e63c?q=80&w=500&auto=format&fit=crop')"}}></div>
                  <div className="text-center">
                    <p className="text-[11px] font-bold text-gray-900">Salad_Bowl.jpg</p>
                    <p className="text-[10px] text-gray-500">Order • ₹450</p>
                  </div>
                </div>

                <div className="space-y-2 cursor-pointer relative">
                  <div className="aspect-square rounded-2xl bg-cover bg-center shadow-sm border border-gray-100" style={{backgroundImage: "url('https://images.unsplash.com/photo-1550639525-c97d455acf70?q=80&w=500&auto=format&fit=crop')"}}></div>
                  <div className="text-center">
                    <p className="text-[11px] font-bold text-gray-900">Floral_Dress.jpg</p>
                    <p className="text-[10px] text-gray-500">Order • ₹1299</p>
                  </div>
                </div>

                <div className="space-y-2 cursor-pointer">
                  <div className="aspect-square rounded-2xl bg-cover bg-center relative shadow-sm border border-gray-100" style={{backgroundImage: "url('https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=500&auto=format&fit=crop')"}}>
                    <div className="absolute bottom-2 right-2 w-4 h-4 border-2 border-white/80 border-t-white rounded-full animate-spin"></div>
                  </div>
                  <div className="text-center">
                    <p className="text-[11px] font-bold text-gray-900">Sneakers.jpg</p>
                    <p className="text-[10px] text-gray-500">Syncing • ₹3999</p>
                  </div>
                </div>
                
                <div className="space-y-2">
                  <div className="aspect-square border-2 border-dashed border-gray-200 rounded-2xl flex flex-col items-center justify-center text-gray-500 hover:bg-gray-50 hover:border-gray-400 transition-colors cursor-pointer bg-white">
                    <span className="text-[11px] font-medium text-center px-4">Upload<br/>Catalog</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Overlapping Floating Corner Image with Cursor */}
            <div className="absolute -bottom-10 right-4 sm:right-16 z-30 animate-bounce" style={{ animationDuration: '4s' }}>
              <div 
                className="w-24 h-24 sm:w-28 sm:h-28 rounded-2xl bg-cover bg-center border-4 border-white shadow-xl rotate-6" 
                style={{backgroundImage: "url('https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?q=80&w=500&auto=format&fit=crop')"}}
              ></div>
              <MousePointer2 size={24} className="absolute -bottom-4 -right-2 text-[#1A1A1A] fill-white -rotate-12" />
              <div className="absolute -bottom-8 -right-8 bg-[#1A1A1A] text-white text-[10px] font-bold px-3 py-1 rounded-full shadow-md">
                Processing Order...
              </div>
            </div>

            {/* Left side floating cursor */}
            <div className="absolute -bottom-6 left-12 flex items-center gap-1 animate-bounce" style={{ animationDuration: '3s' }}>
              <MousePointer2 size={16} className="text-emerald-500 fill-emerald-500 -rotate-12" />
              <div className="bg-emerald-500 text-white text-[10px] font-bold px-2 py-0.5 rounded-full shadow-md">
                Store Owner
              </div>
            </div>

          </motion.div>
        </div>
      </section>

    </div>
  );
}