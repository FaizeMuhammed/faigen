'use client'

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Settings2, Network, Paperclip, Zap, Mail } from "lucide-react";

// Custom WhatsApp Icon for the 3D badge
const WhatsAppIcon = ({ className }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.305-.885-.653-1.48-1.46-1.653-1.758-.173-.298-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.397-.272.322-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/>
  </svg>
);

const features = [
  {
    id: 0,
    icon: <Settings2 size={20} />,
    title: "Natively integrates with your existing tools",
    description: "Connects seamlessly with Shopify, WooCommerce, Zendesk, and your custom CRM to pull inventory and push orders instantly."
  },
  {
    id: 1,
    icon: <Network size={20} />,
    title: "Seamlessly collaborates with your team and support all channels",
    description: "Functions like a team member, collaborating naturally with your staff. Hands off complex inquiries to humans without breaking the chat flow."
  },
  {
    id: 2,
    icon: <Paperclip size={20} />,
    title: "Flexibly adapts to your workflow and process",
    description: "Customizable AI behaviors designed to match your specific brand voice, business hours, and operational requirements."
  },
  {
    id: 3,
    icon: <Zap size={20} />,
    title: "Automate the full spectrum of tasks",
    description: "From answering FAQs and qualifying leads to generating secure payment links and tracking orders automatically."
  }
];

export default function TransformationSection() {
  const [activeTab, setActiveTab] = useState(1); // Set second item active by default

  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
  };

  const floatingMail = {
    animate: { y: [-6, 6, -6], rotate: [-2, 2, -2], transition: { duration: 5, repeat: Infinity, ease: "easeInOut" } }
  };

  const floatingWA = {
    animate: { y: [6, -6, 6], rotate: [2, -2, 2], transition: { duration: 6, repeat: Infinity, ease: "easeInOut" } }
  };

  return (
    <section className="w-full bg-white py-24 md:py-32 font-sans text-[#1A1A1A]">
      <div className="max-w-[1200px] mx-auto px-6 md:px-12">
        
        {/* Header Section */}
        <motion.div 
          initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={fadeUp}
          className="flex flex-col items-center text-center mb-16 md:mb-20"
        >
          <div className="bg-gray-50 border border-gray-100 px-4 py-1.5 rounded-full text-[12px] font-bold text-gray-700 mb-6 shadow-sm">
            Platform
          </div>
          <h2 className="text-[2.5rem] md:text-[4rem] font-medium leading-[1.1] tracking-tight text-[#1A1A1A]">
            Lead your AI transformation
          </h2>
        </motion.div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Interactive Accordion List */}
          <div className="lg:col-span-5 flex flex-col gap-2">
            {features.map((feature) => {
              const isActive = activeTab === feature.id;

              return (
                <div
                  key={feature.id}
                  onClick={() => setActiveTab(feature.id)}
                  className={`cursor-pointer transition-all duration-500 rounded-2xl overflow-hidden ${
                    isActive ? "bg-[#FEF3C7] shadow-sm" : "hover:bg-gray-50/50"
                  }`}
                >
                  <div className="px-5 py-4 flex items-start gap-4">
                    <div className={`mt-0.5 transition-colors duration-300 ${isActive ? "text-gray-900" : "text-gray-400"}`}>
                      {feature.icon}
                    </div>
                    <div className="flex-1">
                      <h3 className={`text-[16px] font-bold transition-colors duration-300 ${isActive ? "text-gray-900" : "text-gray-600"}`}>
                        {feature.title}
                      </h3>
                      
                      <AnimatePresence initial={false}>
                        {isActive && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3, ease: [0.23, 1, 0.32, 1] }}
                          >
                            <p className="text-[13px] font-medium text-gray-600 mt-2 leading-relaxed">
                              {feature.description}
                            </p>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right Column: 3D Visualizer */}
          <div className="lg:col-span-7 w-full">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="w-full bg-[#F8FAFC] rounded-[2.5rem] aspect-square md:aspect-[4/3] relative flex items-center justify-center shadow-inner border border-gray-100 overflow-hidden"
            >
              
              {/* Central Frosted Glass Chat Card */}
              <div className="relative z-10 w-[85%] md:w-[70%] bg-white/70 backdrop-blur-2xl rounded-3xl p-4 shadow-[0_20px_50px_-15px_rgba(0,0,0,0.1)] border border-white">
                
                {/* Chat Item 1 */}
                <div className="flex items-center gap-3 p-3 bg-white rounded-2xl shadow-sm mb-3">
                  <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=100&auto=format&fit=crop" className="w-10 h-10 rounded-xl object-cover shrink-0" alt="Helen" />
                  <div className="flex-1 min-w-0">
                    <div className="flex justify-between items-center mb-0.5">
                      <h4 className="text-[14px] font-bold text-gray-900 truncate">Aisha Rahman</h4>
                      <span className="text-[10px] font-bold text-gray-400">10:30</span>
                    </div>
                    <p className="text-[12px] font-medium text-gray-500 truncate">Is the floral dress available?</p>
                  </div>
                  <div className="w-5 h-5 rounded-full bg-[#2563EB] text-white flex items-center justify-center text-[10px] font-bold shrink-0 shadow-sm">
                    3
                  </div>
                </div>

                {/* Chat Item 2 */}
                <div className="flex items-center gap-3 p-3 rounded-2xl opacity-70">
                  <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=100&auto=format&fit=crop" className="w-10 h-10 rounded-xl object-cover shrink-0" alt="Bradley" />
                  <div className="flex-1 min-w-0">
                    <div className="flex justify-between items-center mb-0.5">
                      <h4 className="text-[14px] font-bold text-gray-900 truncate">Rahul Menon</h4>
                    </div>
                    <div className="w-[60%] h-2.5 bg-gray-200 rounded-full mt-1"></div>
                  </div>
                  <div className="w-2.5 h-2.5 rounded-full bg-gray-300 shrink-0"></div>
                </div>

                {/* Chat Item 3 (Blurred) */}
                <div className="flex items-center gap-3 p-3 rounded-2xl opacity-40 blur-[1px]">
                  <img src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=100&auto=format&fit=crop" className="w-10 h-10 rounded-xl object-cover shrink-0" alt="Emily" />
                  <div className="flex-1 min-w-0">
                    <div className="flex justify-between items-center mb-0.5">
                      <h4 className="text-[14px] font-bold text-gray-900 truncate">Sneha P.</h4>
                    </div>
                    <div className="w-[80%] h-2.5 bg-gray-200 rounded-full mt-1"></div>
                  </div>
                </div>

              </div>

              {/* Floating 3D Elements */}
              
              {/* Top Left: 3D Mail Icon */}
              <motion.div 
                variants={floatingMail} animate="animate"
                className="absolute top-[10%] md:top-[15%] left-[5%] md:left-[10%] z-20"
              >
                <div className="w-16 h-16 rounded-[1.2rem] bg-gradient-to-br from-orange-100 to-orange-200/50 shadow-[0_15px_30px_-5px_rgba(249,115,22,0.3)] border border-white flex items-center justify-center transform -rotate-6">
                  <Mail className="text-[#F97316]" size={28} strokeWidth={2.5} />
                </div>
              </motion.div>

              {/* Bottom Right: 3D WhatsApp Icon */}
              <motion.div 
                variants={floatingWA} animate="animate"
                className="absolute bottom-[10%] md:bottom-[15%] right-[5%] md:right-[10%] z-20"
              >
                <div className="w-[4.5rem] h-[4.5rem] rounded-full bg-gradient-to-b from-[#4ADE80] to-[#16A34A] shadow-[0_20px_40px_-5px_rgba(22,163,74,0.4)] border-2 border-white flex items-center justify-center transform rotate-12">
                  <WhatsAppIcon className="text-white w-9 h-9" />
                </div>
              </motion.div>

            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}