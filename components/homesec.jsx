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
              
              {/* Right Visual - Beautiful New Design */}
              <motion.div 
                className="relative h-[500px] lg:h-[600px]"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, delay: 0.5 }}
              >
                {/* Central Glowing Orb */}
                <motion.div 
                  className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 rounded-full bg-gradient-to-r from-white/20 to-white/10 backdrop-blur-sm border border-white/20"
                  animate={{ 
                    scale: [1, 1.1, 1],
                    rotate: 360,
                  }}
                  transition={{ 
                    scale: { duration: 4, repeat: Infinity },
                    rotate: { duration: 20, repeat: Infinity, ease: "linear" }
                  }}
                >
                  <div className="absolute inset-4 rounded-full bg-gradient-to-br from-black/80 to-black/60 backdrop-blur-xl flex items-center justify-center">
                    <motion.div 
                      className="text-white font-bold text-lg"
                      animate={{ opacity: [0.5, 1, 0.5] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    >
                      FAIGEN
                    </motion.div>
                  </div>
                </motion.div>

                {/* Floating UI Cards */}
                <motion.div
                  className="absolute top-16 left-8 w-48 bg-white/90 backdrop-blur-xl rounded-2xl p-4 shadow-2xl border border-black/10"
                  initial={{ y: 50, opacity: 0, rotate: -5 }}
                  animate={{ 
                    y: [0, -10, 0],
                    opacity: 1,
                    rotate: -5
                  }}
                  transition={{ 
                    y: { duration: 6, repeat: Infinity },
                    opacity: { delay: 0.8 },
                    rotate: { delay: 0.8 }
                  }}
                >
                  <div className="flex items-center space-x-3 mb-3">
                    <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                      </svg>
                    </div>
                    <div>
                      <div className="font-semibold text-sm text-black">Project Alpha</div>
                      <div className="text-xs text-black/60">In Development</div>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between text-xs">
                      <span className="text-black/70">Progress</span>
                      <span className="text-black font-medium">78%</span>
                    </div>
                    <div className="w-full bg-black/10 rounded-full h-2">
                      <motion.div 
                        className="bg-gradient-to-r from-blue-500 to-purple-600 h-2 rounded-full"
                        initial={{ width: 0 }}
                        animate={{ width: "78%" }}
                        transition={{ delay: 1.5, duration: 1.5 }}
                      />
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  className="absolute top-24 right-4 w-40 bg-gradient-to-br from-black/90 to-black/80 backdrop-blur-xl rounded-2xl p-4 shadow-2xl border border-white/10"
                  initial={{ y: -50, opacity: 0, rotate: 8 }}
                  animate={{ 
                    y: [0, 10, 0],
                    opacity: 1,
                    rotate: 8
                  }}
                  transition={{ 
                    y: { duration: 5, repeat: Infinity, delay: 1 },
                    opacity: { delay: 1.2 },
                    rotate: { delay: 1.2 }
                  }}
                >
                  <div className="text-white text-xs mb-2">Live Analytics</div>
                  <div className="text-2xl font-bold text-white mb-1">2.4K</div>
                  <div className="text-green-400 text-xs flex items-center">
                    <svg className="w-3 h-3 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                    </svg>
                    +24% this week
                  </div>
                  <div className="mt-3 flex space-x-1">
                    {[...Array(8)].map((_, i) => (
                      <motion.div
                        key={i}
                        className="bg-white/20 rounded-sm flex-1"
                        style={{ height: `${Math.random() * 20 + 8}px` }}
                        animate={{ 
                          height: [
                            `${Math.random() * 20 + 8}px`,
                            `${Math.random() * 20 + 8}px`,
                          ]
                        }}
                        transition={{ 
                          duration: 2,
                          repeat: Infinity,
                          delay: i * 0.2 + 2
                        }}
                      />
                    ))}
                  </div>
                </motion.div>

                <motion.div
                  className="absolute bottom-20 left-4 w-52 bg-white/95 backdrop-blur-xl rounded-2xl p-4 shadow-2xl border border-black/5"
                  initial={{ y: 50, opacity: 0, rotate: -3 }}
                  animate={{ 
                    y: [0, -8, 0],
                    opacity: 1,
                    rotate: -3
                  }}
                  transition={{ 
                    y: { duration: 7, repeat: Infinity, delay: 2 },
                    opacity: { delay: 1.8 },
                    rotate: { delay: 1.8 }
                  }}
                >
                  <div className="flex items-center justify-between mb-3">
                    <div className="font-semibold text-sm text-black">Team Collaboration</div>
                    <div className="flex -space-x-2">
                      {[...Array(3)].map((_, i) => (
                        <div 
                          key={i}
                          className="w-6 h-6 rounded-full border-2 border-white"
                          style={{ 
                            background: `linear-gradient(45deg, ${['#3B82F6', '#8B5CF6', '#EF4444'][i]}, ${['#1D4ED8', '#7C3AED', '#DC2626'][i]})` 
                          }}
                        />
                      ))}
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                      <span className="text-xs text-black/70">Sarah is designing</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
                      <span className="text-xs text-black/70">Alex is coding</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-purple-500 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
                      <span className="text-xs text-black/70">Mike is testing</span>
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  className="absolute bottom-16 right-8 w-44 bg-gradient-to-br from-black/95 to-black/85 backdrop-blur-xl rounded-2xl p-4 shadow-2xl border border-white/10"
                  initial={{ y: 30, opacity: 0, rotate: 5 }}
                  animate={{ 
                    y: [0, 12, 0],
                    opacity: 1,
                    rotate: 5
                  }}
                  transition={{ 
                    y: { duration: 6, repeat: Infinity, delay: 3 },
                    opacity: { delay: 2.2 },
                    rotate: { delay: 2.2 }
                  }}
                >
                  <div className="text-white text-xs mb-2">Deploy Status</div>
                  <div className="flex items-center space-x-2 mb-3">
                    <motion.div 
                      className="w-3 h-3 bg-green-400 rounded-full"
                      animate={{ scale: [1, 1.2, 1] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                    />
                    <span className="text-green-400 text-sm font-medium">Production</span>
                  </div>
                  <div className="text-xs text-white/70 space-y-1">
                    <div>✓ Build successful</div>
                    <div>✓ Tests passed</div>
                    <div>✓ Deploy complete</div>
                  </div>
                  <motion.div 
                    className="mt-3 bg-gradient-to-r from-green-400/20 to-blue-400/20 rounded-lg p-2"
                    animate={{ opacity: [0.7, 1, 0.7] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    <div className="text-xs text-white/90 font-mono">
                      v2.4.1 • 3 min ago
                    </div>
                  </motion.div>
                </motion.div>

                {/* Connecting Lines */}
                <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 400 500">
                  <motion.path
                    d="M200,250 Q180,200 120,160"
                    stroke="rgba(0,0,0,0.1)"
                    strokeWidth="1"
                    fill="none"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 2, delay: 3 }}
                  />
                  <motion.path
                    d="M200,250 Q320,220 350,180"
                    stroke="rgba(0,0,0,0.1)"
                    strokeWidth="1"
                    fill="none"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 2, delay: 3.5 }}
                  />
                  <motion.path
                    d="M200,250 Q160,350 120,420"
                    stroke="rgba(0,0,0,0.1)"
                    strokeWidth="1"
                    fill="none"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 2, delay: 4 }}
                  />
                  <motion.path
                    d="M200,250 Q280,350 320,420"
                    stroke="rgba(0,0,0,0.1)"
                    strokeWidth="1"
                    fill="none"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 2, delay: 4.5 }}
                  />
                </svg>

                {/* Floating Geometric Shapes */}
                {[...Array(6)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute w-4 h-4 bg-gradient-to-r from-black/20 to-black/10 rounded backdrop-blur-sm"
                    style={{
                      left: `${20 + Math.random() * 60}%`,
                      top: `${10 + Math.random() * 80}%`,
                      rotate: `${Math.random() * 360}deg`,
                    }}
                    animate={{
                      y: [-10, 10, -10],
                      rotate: [0, 180, 360],
                      opacity: [0.3, 0.8, 0.3],
                    }}
                    transition={{
                      duration: 8 + Math.random() * 4,
                      repeat: Infinity,
                      delay: Math.random() * 5,
                    }}
                  />
                ))}
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