'use client'
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const HomeSection = () => {
  const [mounted, setMounted] = useState(false);
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const textVariants = ["Future-ready solutions.", "Human-first design.", "Scalable technology."];
  
  useEffect(() => {
    const linkElement = document.createElement('link');
    linkElement.rel = 'stylesheet';
    linkElement.href = 'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&family=Space+Grotesk:wght@300;400;500;600;700&display=swap';
    document.head.appendChild(linkElement);
    
    return () => {
      if (document.head.contains(linkElement)) {
        document.head.removeChild(linkElement);
      }
    };
  }, []);
  
  useEffect(() => {
    setMounted(true);
    
    const textInterval = setInterval(() => {
      setCurrentTextIndex((prev) => (prev + 1) % textVariants.length);
    }, 3000);
    
    return () => {
      clearInterval(textInterval);
    };
  }, []);
  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2
      }
    }
  };
  
  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 80,
        damping: 12
      }
    }
  };

  const menuItems = [
    { name: "Services", href: "#services" },
    { name: "Portfolio", href: "#portfolio" },
    { name: "About", href: "#about" },
    { name: "Process", href: "#process" },
    { name: "Contact", href: "#contact" }
  ];
  
  return (
    <>
      {/* Background Elements */}
      <div className="fixed inset-0 -z-10 overflow-hidden">
        {/* Gradient Orbs */}
        <div className="absolute top-1/4 -left-1/4 w-96 h-96 bg-gradient-to-r from-blue-400/20 to-purple-600/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 -right-1/4 w-96 h-96 bg-gradient-to-r from-purple-400/20 to-pink-600/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        
        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-grid-pattern opacity-[0.02]"></div>
        
        {/* Floating Particles */}
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-black/10 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [-20, 20, -20],
              opacity: [0.1, 0.3, 0.1],
            }}
            transition={{
              duration: 4 + Math.random() * 4,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      {/* Unique Corner Navigation Menu */}
      <div className="fixed top-6 right-6 z-50">
        <motion.button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="relative w-16 h-16 bg-black/90 backdrop-blur-xl rounded-2xl border border-white/10 shadow-2xl flex items-center justify-center group"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <motion.div
            animate={isMenuOpen ? "open" : "closed"}
            className="w-6 h-6 relative"
          >
            <motion.span
              variants={{
                closed: { rotate: 0, y: 0 },
                open: { rotate: 45, y: 6 }
              }}
              className="absolute top-0 left-0 w-full h-0.5 bg-white rounded-full transform origin-center"
            />
            <motion.span
              variants={{
                closed: { opacity: 1 },
                open: { opacity: 0 }
              }}
              className="absolute top-3 left-0 w-full h-0.5 bg-white rounded-full"
            />
            <motion.span
              variants={{
                closed: { rotate: 0, y: 0 },
                open: { rotate: -45, y: -6 }
              }}
              className="absolute top-6 left-0 w-full h-0.5 bg-white rounded-full transform origin-center"
            />
          </motion.div>
          
          {/* Glowing ring effect */}
          <motion.div
            className="absolute inset-0 rounded-2xl border-2 border-white/20"
            animate={{
              scale: isMenuOpen ? [1, 1.2, 1] : 1,
              opacity: isMenuOpen ? [1, 0.5, 1] : 0.7,
            }}
            transition={{ duration: 0.6, repeat: isMenuOpen ? Infinity : 0 }}
          />
        </motion.button>

        {/* Menu Overlay */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, scale: 0.8, originX: 1, originY: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="absolute top-20 right-0 w-72 bg-black/95 backdrop-blur-2xl rounded-3xl border border-white/10 shadow-2xl overflow-hidden"
            >
              <div className="p-8">
                <div className="mb-6">
                  <h3 className="text-white font-semibold text-lg mb-2">Navigation</h3>
                  <div className="w-12 h-0.5 bg-gradient-to-r from-white to-white/30 rounded-full"></div>
                </div>
                
                <nav className="space-y-3">
                  {menuItems.map((item, index) => (
                    <motion.a
                      key={item.name}
                      href={item.href}
                      className="block text-white/80 hover:text-white font-medium py-3 px-4 rounded-xl hover:bg-white/10 transition-all duration-300 group"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      onClick={() => setIsMenuOpen(false)}
                    >
                      <span className="flex items-center space-x-3">
                        <span className="w-1.5 h-1.5 bg-white/50 rounded-full group-hover:bg-white transition-colors duration-300"></span>
                        <span>{item.name}</span>
                      </span>
                    </motion.a>
                  ))}
                </nav>
                
                <div className="mt-8 pt-6 border-t border-white/10">
                  <motion.button
                    className="w-full py-3 bg-white text-black rounded-xl font-semibold hover:bg-white/90 transition-colors duration-300"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Start Project
                  </motion.button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Main Hero Section */}
      <main className="relative min-h-screen flex items-center justify-center px-6 md:px-12 lg:px-20 py-20">
        <div className="max-w-7xl mx-auto w-full">
          {mounted && (
            <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center">
              
              {/* Left Content */}
              <motion.div
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                className="space-y-8"
              >
                {/* Brand Badge */}
                <motion.div 
                  variants={itemVariants}
                  className="inline-flex items-center space-x-2 px-4 py-2 bg-black/5 backdrop-blur-sm rounded-full border border-black/10"
                >
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="text-sm font-medium text-black/70">Available for new projects</span>
                </motion.div>
                
                {/* Main Headline */}
                <motion.div variants={itemVariants} className="space-y-4">
                  <h1 className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold leading-[0.9] tracking-tight"
                      style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                    <span className="block text-black">We Build</span>
                    <span className="block">
                      <span className="text-transparent bg-clip-text bg-gradient-to-r from-black via-gray-600 to-black">
                        Digital
                      </span>
                    </span>
                    <span className="block text-black">Powerhouses</span>
                  </h1>
                </motion.div>
                
                {/* Dynamic Subheading */}
                <motion.div variants={itemVariants} className="h-12 flex items-center">
                  <motion.p 
                    key={currentTextIndex}
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: -20, opacity: 0 }}
                    transition={{ duration: 0.5 }}
                    className="text-2xl lg:text-3xl font-semibold text-black/70"
                    style={{ fontFamily: "'Inter', sans-serif" }}
                  >
                    {textVariants[currentTextIndex]}
                  </motion.p>
                </motion.div>
                
                {/* Description */}
                <motion.p 
                  variants={itemVariants}
                  className="text-lg lg:text-xl text-black/60 leading-relaxed max-w-2xl"
                  style={{ fontFamily: "'Inter', sans-serif" }}
                >
                  From startups to enterprises, Faigen crafts seamless, secure, and scalable 
                  digital products with precision and purpose. We transform ideas into 
                  digital experiences that drive growth.
                </motion.p>
                
                {/* CTA Buttons */}
                <motion.div 
                  variants={itemVariants}
                  className="flex flex-col sm:flex-row gap-4 pt-4"
                >
                  <motion.button
                    whileHover={{ scale: 1.02, y: -2 }}
                    whileTap={{ scale: 0.98 }}
                    className="group px-8 py-4 bg-black text-white rounded-2xl font-semibold text-base transition-all duration-300 shadow-xl hover:shadow-2xl relative overflow-hidden"
                  >
                    <span className="relative z-10">Get a Free Consultation</span>
                    <div className="absolute inset-0 bg-gradient-to-r from-gray-900 to-black opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </motion.button>
                  
                  <motion.button
                    whileHover={{ scale: 1.02, y: -2 }}
                    whileTap={{ scale: 0.98 }}
                    className="group px-8 py-4 border-2 border-black/20 hover:border-black/40 rounded-2xl font-semibold text-base transition-all duration-300 backdrop-blur-sm hover:bg-black/5"
                  >
                    <span className="flex items-center justify-center space-x-2">
                      <span>See Our Work</span>
                      <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </span>
                  </motion.button>
                </motion.div>
                
                {/* Stats */}
                <motion.div 
                  variants={itemVariants}
                  className="flex items-center space-x-8 pt-8 border-t border-black/10"
                >
                  <div>
                    <div className="text-2xl font-bold text-black">150+</div>
                    <div className="text-sm text-black/60">Projects Delivered</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-black">98%</div>
                    <div className="text-sm text-black/60">Client Satisfaction</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-black">24/7</div>
                    <div className="text-sm text-black/60">Support</div>
                  </div>
                </motion.div>
              </motion.div>
              
              {/* Right Visual - Completely New Design */}
              <motion.div 
                className="relative h-[500px] lg:h-[600px]"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, delay: 0.5 }}
              >
                {/* Main Interactive Dashboard */}
                <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-black rounded-3xl overflow-hidden shadow-2xl border border-slate-700/50">
                  
                  {/* Dashboard Header */}
                  <div className="p-6 border-b border-slate-700/50 bg-slate-800/50">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                        <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                        <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                      </div>
                      <div className="text-slate-400 text-sm font-mono">faigen-dashboard.app</div>
                    </div>
                  </div>
                  
                  {/* Dashboard Content */}
                  <div className="p-6 h-full">
                    
                    {/* Metrics Cards */}
                    <div className="grid grid-cols-2 gap-4 mb-6">
                      <motion.div 
                        className="bg-gradient-to-br from-blue-500/20 to-blue-600/20 p-4 rounded-xl border border-blue-500/30"
                        animate={{ scale: [1, 1.02, 1] }}
                        transition={{ duration: 3, repeat: Infinity, delay: 0 }}
                      >
                        <div className="text-blue-400 text-sm mb-1">Active Projects</div>
                        <div className="text-white text-2xl font-bold">24</div>
                        <div className="text-green-400 text-xs">↗ +12%</div>
                      </motion.div>
                      
                      <motion.div 
                        className="bg-gradient-to-br from-purple-500/20 to-purple-600/20 p-4 rounded-xl border border-purple-500/30"
                        animate={{ scale: [1, 1.02, 1] }}
                        transition={{ duration: 3, repeat: Infinity, delay: 1 }}
                      >
                        <div className="text-purple-400 text-sm mb-1">Team Members</div>
                        <div className="text-white text-2xl font-bold">18</div>
                        <div className="text-green-400 text-xs">↗ +3</div>
                      </motion.div>
                    </div>
                    
                    {/* Code Simulation */}
                    <div className="bg-slate-900/80 rounded-xl p-4 mb-6 border border-slate-600/30">
                      <div className="flex items-center space-x-2 mb-3">
                        <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                        <div className="text-slate-400 text-xs">Live Development</div>
                      </div>
                      
                      <div className="font-mono text-xs space-y-1">
                        <motion.div 
                          className="text-slate-500"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ delay: 2 }}
                        >
                          <span className="text-blue-400">const</span> <span className="text-white">project</span> = <span className="text-yellow-400">'faigen-app'</span>
                        </motion.div>
                        <motion.div 
                          className="text-slate-500"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ delay: 2.5 }}
                        >
                          <span className="text-purple-400">function</span> <span className="text-green-400">deployToProduction</span>() {`{`}
                        </motion.div>
                        <motion.div 
                          className="text-slate-500 ml-4"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ delay: 3 }}
                        >
                          <span className="text-blue-400">console</span>.<span className="text-yellow-400">log</span>(<span className="text-green-400">'🚀 Deploying...'</span>)
                        </motion.div>
                        <motion.div 
                          className="text-slate-500"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ delay: 3.5 }}
                        >
                          {`}`}
                        </motion.div>
                      </div>
                    </div>
                    
                    {/* Project Timeline */}
                    <div className="space-y-3">
                      <div className="text-slate-400 text-sm mb-3">Recent Activity</div>
                      
                      {[
                        { action: "UI Design Completed", time: "2m ago", color: "bg-green-400" },
                        { action: "API Integration", time: "15m ago", color: "bg-blue-400" },
                        { action: "Client Review", time: "1h ago", color: "bg-yellow-400" },
                        { action: "Deploy to Staging", time: "3h ago", color: "bg-purple-400" }
                      ].map((item, index) => (
                        <motion.div
                          key={index}
                          className="flex items-center space-x-3 py-2"
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 4 + index * 0.2 }}
                        >
                          <div className={`w-2 h-2 ${item.color} rounded-full`}></div>
                          <div className="text-slate-300 text-sm flex-1">{item.action}</div>
                          <div className="text-slate-500 text-xs">{item.time}</div>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                  
                  {/* Floating Elements */}
                  <motion.div
                    className="absolute top-4 right-4 w-16 h-16 bg-gradient-to-br from-green-400 to-blue-500 rounded-full flex items-center justify-center shadow-lg"
                    animate={{ 
                      rotate: 360,
                      scale: [1, 1.1, 1]
                    }}
                    transition={{ 
                      rotate: { duration: 10, repeat: Infinity, ease: "linear" },
                      scale: { duration: 2, repeat: Infinity }
                    }}
                  >
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </motion.div>
                </div>
                
                {/* Success Metric Card */}
                <motion.div 
                  className="absolute -bottom-6 -left-6 p-6 bg-white rounded-2xl shadow-2xl border border-black/5"
                  initial={{ opacity: 0, y: 20, rotate: -5 }}
                  animate={{ opacity: 1, y: 0, rotate: -5 }}
                  transition={{ delay: 1.5, duration: 0.6 }}
                >
                  <div className="text-center">
                    <div className="text-3xl font-bold text-green-600 mb-1">99.9%</div>
                    <div className="text-sm text-black/60">Uptime</div>
                    <div className="text-xs text-black/40 mt-1">Last 12 months</div>
                  </div>
                </motion.div>
                
                {/* Performance Indicator */}
                <motion.div 
                  className="absolute top-6 -right-6 p-4 bg-gradient-to-br from-purple-600 to-pink-600 rounded-xl shadow-xl text-white"
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 2, duration: 0.6, type: "spring" }}
                >
                  <div className="text-center">
                    <div className="text-2xl font-bold">⚡</div>
                    <div className="text-xs opacity-90">Fast Deploy</div>
                  </div>
                </motion.div>
              </motion.div>
            </div>
          )}
        </div>
      </main>
      
      {/* Enhanced Styles */}
      <style jsx global>{`
        .bg-grid-pattern {
          background-image: 
            linear-gradient(rgba(0,0,0,0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0,0,0,0.1) 1px, transparent 1px);
          background-size: 50px 50px;
        }
        
        html {
          scroll-behavior: smooth;
        }
        
        ::-webkit-scrollbar {
          width: 6px;
        }
        
        ::-webkit-scrollbar-track {
          background: #f1f1f1;
        }
        
        ::-webkit-scrollbar-thumb {
          background: #c1c1c1;
          border-radius: 3px;
        }
        
        ::-webkit-scrollbar-thumb:hover {
          background: #a1a1a1;
        }
      `}</style>
    </>
  );
};

export default HomeSection;