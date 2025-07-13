'use client'
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Palette, Zap, Rocket, Shield, Smartphone, Cloud } from "lucide-react";
import { useRouter } from "next/navigation";

const HomeSection = () => {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const router = useRouter();
  const textVariants = ["Future-ready solutions.", "Human-first design.", "Scalable technology."];
  
  useEffect(() => {
    // Load fonts immediately without blocking render
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = 'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&family=Space+Grotesk:wght@300;400;500;600;700&display=swap';
    link.media = 'print';
    link.onload = function() { this.media = 'all'; };
    document.head.appendChild(link);
    
    return () => {
      if (document.head.contains(link)) {
        document.head.removeChild(link);
      }
    };
  }, []);
  
  useEffect(() => {
    const textInterval = setInterval(() => {
      setCurrentTextIndex((prev) => (prev + 1) % textVariants.length);
    }, 3000);
    
    return () => clearInterval(textInterval);
  }, []);

  const scrollToPortfolio = () => {
    const portfolioSection = document.getElementById('portfolio');
    if (portfolioSection) {
      portfolioSection.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };
  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };
  
  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 60,
        damping: 15
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
    <div className="relative min-h-screen bg-gradient-to-br from-sky-50/40 via-white to-blue-50/30">
      {/* Background Elements with Sky Blue Gradient */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Main Sky Blue Gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-sky-50/30 via-white to-blue-50/20"></div>
        
        {/* Gradient Orbs */}
        <div className="absolute top-1/4 -left-1/4 w-96 h-96 bg-gradient-to-r from-sky-400/12 to-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 -right-1/4 w-96 h-96 bg-gradient-to-r from-blue-400/10 to-sky-600/12 rounded-full blur-3xl"></div>
        
        {/* Additional subtle sky gradient */}
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-full h-1/2 bg-gradient-to-b from-sky-100/20 to-transparent"></div>
        
        {/* Grid Pattern */}
        <div className="absolute inset-0 opacity-[0.02]" style={{
          backgroundImage: 'linear-gradient(rgba(0,0,0,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.1) 1px, transparent 1px)',
          backgroundSize: '50px 50px'
        }}></div>
      </div>

      {/* Top Left Logo */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="fixed top-4 left-4 md:top-6 md:left-6 z-50"
      >
        <div className="bg-white/95 backdrop-blur-sm rounded-xl md:rounded-2xl border border-gray-200 shadow-lg p-2 md:p-3 hover:scale-105 transition-transform duration-200">
          <img 
            src="/ChatGPT_Image_Apr_4__2025__10_40_51_PM-removebg-preview.png" 
            alt="Company Logo" 
            className="h-10 md:h-14 lg:h-16 w-auto"
            onError={(e) => {
              e.target.style.display = 'none';
              e.target.parentElement.innerHTML = '<div class="h-10 md:h-14 lg:h-16 w-10 md:w-14 lg:w-16 bg-black rounded-lg flex items-center justify-center text-white font-bold text-lg">F</div>';
            }}
          />
        </div>
      </motion.div>

      {/* Corner Navigation Menu */}
      <div className="fixed top-6 right-6 z-50">
        <motion.button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="relative w-14 h-14 bg-black/90 backdrop-blur-sm rounded-xl border border-white/10 shadow-lg flex items-center justify-center"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <motion.div
            animate={isMenuOpen ? "open" : "closed"}
            className="w-5 h-5 relative"
          >
            <motion.span
              variants={{
                closed: { rotate: 0, y: 0 },
                open: { rotate: 45, y: 5 }
              }}
              className="absolute top-0 left-0 w-full h-0.5 bg-white rounded-full transform origin-center"
            />
            <motion.span
              variants={{
                closed: { opacity: 1 },
                open: { opacity: 0 }
              }}
              className="absolute top-2.5 left-0 w-full h-0.5 bg-white rounded-full"
            />
            <motion.span
              variants={{
                closed: { rotate: 0, y: 0 },
                open: { rotate: -45, y: -5 }
              }}
              className="absolute top-5 left-0 w-full h-0.5 bg-white rounded-full transform origin-center"
            />
          </motion.div>
        </motion.button>

        {/* Menu Overlay */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, scale: 0.9, originX: 1, originY: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.2 }}
              className="absolute top-16 right-0 w-64 bg-black/95 backdrop-blur-xl rounded-2xl border border-white/10 shadow-xl overflow-hidden"
            >
              <div className="p-6">
                <div className="mb-4">
                  <h3 className="text-white font-semibold text-base mb-2">Navigation</h3>
                  <div className="w-10 h-0.5 bg-white/30 rounded-full"></div>
                </div>
                
                <nav className="space-y-2">
                  {menuItems.map((item, index) => (
                    <motion.a
                      key={item.name}
                      href={item.href}
                      className="block text-white/80 hover:text-white font-medium py-2.5 px-3 rounded-lg hover:bg-white/10 transition-all duration-200"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.05 }}
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item.name}
                    </motion.a>
                  ))}
                </nav>
                
                <div className="mt-6 pt-4 border-t border-white/10">
                  <button
                    className="w-full py-2.5 bg-white text-black rounded-lg font-semibold hover:bg-white/90 transition-colors duration-200"
                    onClick={() => {
                      setIsMenuOpen(false);
                      router.push('/consultation');
                    }}
                  >
                    Start Project
                  </button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Main Hero Section */}
      <main className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 md:px-12 lg:px-20 py-16 sm:py-20">
        <div className="max-w-7xl mx-auto w-full">
          <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
            
            {/* Left Content */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="space-y-4 sm:space-y-6 order-1 lg:order-1"
            >
              {/* Brand Badge */}
              <motion.div 
                variants={itemVariants}
                className="inline-flex items-center space-x-2 px-4 py-2 bg-black/5 rounded-full border border-black/10"
              >
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-sm font-medium text-black/70">Available for new projects</span>
              </motion.div>
              
              {/* Main Headline */}
              <motion.div variants={itemVariants} className="space-y-3 sm:space-y-4 pt-1 sm:pt-2">
                <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-7xl xl:text-8xl font-bold leading-[0.9] tracking-tight font-space-grotesk">
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
              <motion.div variants={itemVariants} className="h-10 sm:h-12 flex items-center">
                <AnimatePresence mode="wait">
                  <motion.p 
                    key={currentTextIndex}
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: -20, opacity: 0 }}
                    transition={{ duration: 0.4 }}
                    className="text-xl sm:text-2xl lg:text-3xl font-semibold text-black/70 font-inter"
                  >
                    {textVariants[currentTextIndex]}
                  </motion.p>
                </AnimatePresence>
              </motion.div>
              
              {/* Description */}
              <motion.p 
                variants={itemVariants}
                className="text-lg lg:text-xl text-black/60 leading-relaxed max-w-2xl font-inter"
              >
                From startups to enterprises, Faigen crafts seamless, secure, and scalable 
                digital products with precision and purpose. We transform ideas into 
                digital experiences that drive growth.
              </motion.p>
              
              {/* CTA Buttons */}
              <motion.div 
                variants={itemVariants}
                className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-2 sm:pt-4"
              >
                <motion.button
                  onClick={() => router.push('/consultation')}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="px-5 sm:px-6 py-3 bg-black text-white rounded-xl font-semibold text-sm sm:text-base transition-all duration-200 shadow-lg hover:shadow-xl w-full sm:w-auto"
                >
                  Get a Free Consultation
                </motion.button>
                
                <motion.button
                  onClick={scrollToPortfolio}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="px-5 sm:px-6 py-3 border-2 border-black/20 hover:border-black/40 rounded-xl font-semibold text-sm sm:text-base transition-all duration-200 hover:bg-black/5 w-full sm:w-auto"
                >
                  <span className="flex items-center justify-center space-x-2">
                    <span>See Our Work</span>
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </span>
                </motion.button>
              </motion.div>
            </motion.div>
            
            {/* Right Visual - Enhanced Symmetric 3D Tech Constellation */}
            <motion.div 
              className="relative h-[350px] sm:h-[450px] lg:h-[600px] flex items-center justify-center order-2 lg:order-2 overflow-hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
            >
              {/* 3D Wireframe Container with Tech Enhancement */}
              <div className="absolute inset-0 flex items-center justify-center" style={{ perspective: '1200px' }}>
                
                {/* Digital Grid Background */}
                <div className="absolute inset-0" style={{
                  backgroundImage: `
                    linear-gradient(rgba(34,211,238,0.1) 1px, transparent 1px),
                    linear-gradient(90deg, rgba(34,211,238,0.1) 1px, transparent 1px)
                  `,
                  backgroundSize: '20px 20px',
                  animation: 'gridPulse 4s ease-in-out infinite'
                }}></div>

                {/* Binary Code Streams */}
                {[...Array(8)].map((_, i) => (
                  <motion.div
                    key={`binary-${i}`}
                    className="absolute text-xs font-mono text-cyan-400/40 pointer-events-none"
                    style={{
                      left: `${10 + i * 12}%`,
                      transform: 'rotate(-90deg)',
                    }}
                    animate={{
                      y: [-400, 400],
                      opacity: [0, 0.6, 0],
                    }}
                    transition={{
                      duration: 6 + i * 0.5,
                      repeat: Infinity,
                      delay: i * 0.3
                    }}
                  >
                    {Array.from({length: 20}, () => Math.round(Math.random())).join('')}
                  </motion.div>
                ))}
                
                {/* Central Symmetric Wireframe Structure */}
                <motion.div
                  className="relative"
                  initial={{ scale: 0, rotateY: 0 }}
                  animate={{ 
                    scale: 1, 
                    rotateY: 360,
                    rotateX: [0, 10, -10, 0]
                  }}
                  transition={{ 
                    scale: { duration: 1.5, delay: 0.8 },
                    rotateY: { duration: 30, repeat: Infinity, ease: "linear" },
                    rotateX: { duration: 8, repeat: Infinity }
                  }}
                  style={{ transformStyle: 'preserve-3d' }}
                >
                  
                  {/* Enhanced Octahedral Wireframe Core */}
                  <div className="relative w-40 h-40 sm:w-48 sm:h-48 lg:w-56 lg:h-56">
                    
                    {/* Top Pyramid with Tech Enhancement */}
                    <motion.div 
                      className="absolute inset-0 flex items-center justify-center"
                      style={{ transformStyle: 'preserve-3d' }}
                    >
                      {[0, 72, 144, 216, 288].map((angle, i) => (
                        <motion.div
                          key={`top-${i}`}
                          className="absolute w-px bg-gradient-to-b from-cyan-400 via-blue-500 to-transparent"
                          style={{
                            height: '100px',
                            transformOrigin: 'bottom center',
                            transform: `rotateY(${angle}deg) rotateX(-35deg) translateZ(50px)`,
                            filter: 'drop-shadow(0 0 3px currentColor)'
                          }}
                          animate={{
                            background: [
                              'linear-gradient(to bottom, #22d3ee 0%, #3b82f6 50%, transparent 100%)',
                              'linear-gradient(to bottom, #3b82f6 0%, #8b5cf6 50%, transparent 100%)',
                              'linear-gradient(to bottom, #8b5cf6 0%, #10b981 50%, transparent 100%)',
                              'linear-gradient(to bottom, #10b981 0%, #22d3ee 50%, transparent 100%)'
                            ]
                          }}
                          transition={{ 
                            duration: 4, 
                            repeat: Infinity, 
                            delay: i * 0.2 
                          }}
                        />
                      ))}
                    </motion.div>

                    {/* Bottom Pyramid with Enhanced Glow */}
                    <motion.div 
                      className="absolute inset-0 flex items-center justify-center"
                      style={{ transformStyle: 'preserve-3d' }}
                    >
                      {[0, 72, 144, 216, 288].map((angle, i) => (
                        <motion.div
                          key={`bottom-${i}`}
                          className="absolute w-px bg-gradient-to-t from-purple-400 via-pink-500 to-transparent"
                          style={{
                            height: '100px',
                            transformOrigin: 'top center',
                            transform: `rotateY(${angle}deg) rotateX(35deg) translateZ(50px)`,
                            filter: 'drop-shadow(0 0 3px currentColor)'
                          }}
                          animate={{
                            background: [
                              'linear-gradient(to top, #c084fc 0%, #ec4899 50%, transparent 100%)',
                              'linear-gradient(to top, #ec4899 0%, #f59e0b 50%, transparent 100%)',
                              'linear-gradient(to top, #f59e0b 0%, #10b981 50%, transparent 100%)',
                              'linear-gradient(to top, #10b981 0%, #c084fc 50%, transparent 100%)'
                            ]
                          }}
                          transition={{ 
                            duration: 4, 
                            repeat: Infinity, 
                            delay: i * 0.3 
                          }}
                        />
                      ))}
                    </motion.div>

                    {/* Enhanced Central Ring with Tech Pulse */}
                    <motion.div
                      className="absolute inset-0 flex items-center justify-center"
                      style={{ transformStyle: 'preserve-3d' }}
                    >
                      {[...Array(12)].map((_, i) => (
                        <motion.div
                          key={`ring-${i}`}
                          className="absolute w-px h-20 bg-gradient-to-b from-emerald-400 via-blue-500 to-emerald-400"
                          style={{
                            transformOrigin: 'center center',
                            transform: `rotateY(${i * 30}deg) translateZ(60px)`,
                            filter: 'drop-shadow(0 0 2px currentColor)'
                          }}
                          animate={{
                            scaleY: [0.5, 1.5, 0.5],
                            background: [
                              'linear-gradient(to bottom, #10b981 0%, #3b82f6 50%, #10b981 100%)',
                              'linear-gradient(to bottom, #3b82f6 0%, #8b5cf6 50%, #3b82f6 100%)',
                              'linear-gradient(to bottom, #8b5cf6 0%, #22d3ee 50%, #8b5cf6 100%)',
                              'linear-gradient(to bottom, #22d3ee 0%, #10b981 50%, #22d3ee 100%)'
                            ]
                          }}
                          transition={{ 
                            duration: 3, 
                            repeat: Infinity, 
                            delay: i * 0.1 
                          }}
                        />
                      ))}
                    </motion.div>

                    {/* Tech-Enhanced Central Core */}
                    <motion.div
                      className="absolute inset-0 flex items-center justify-center"
                      animate={{
                        scale: [1, 1.2, 1],
                      }}
                      transition={{ duration: 2, repeat: Infinity }}
                    >
                      <motion.div
                        className="w-6 h-6 sm:w-8 sm:h-8 lg:w-10 lg:h-10 rounded-full border-2 border-cyan-400"
                        animate={{
                          background: [
                            'radial-gradient(circle, #22d3ee 0%, #3b82f6 50%, transparent 100%)',
                            'radial-gradient(circle, #8b5cf6 0%, #ec4899 50%, transparent 100%)',
                            'radial-gradient(circle, #10b981 0%, #f59e0b 50%, transparent 100%)',
                            'radial-gradient(circle, #22d3ee 0%, #3b82f6 50%, transparent 100%)'
                          ],
                          boxShadow: [
                            '0 0 20px #22d3ee, 0 0 40px #3b82f6, 0 0 60px #22d3ee',
                            '0 0 20px #8b5cf6, 0 0 40px #ec4899, 0 0 60px #8b5cf6',
                            '0 0 20px #10b981, 0 0 40px #f59e0b, 0 0 60px #10b981',
                            '0 0 20px #22d3ee, 0 0 40px #3b82f6, 0 0 60px #22d3ee'
                          ]
                        }}
                        transition={{ duration: 4, repeat: Infinity }}
                      >
                        {/* Tech Symbol in Center */}
                        <div className="absolute inset-0 flex items-center justify-center text-white font-bold text-xs">
                          ⚡
                        </div>
                      </motion.div>
                    </motion.div>
                  </div>
                </motion.div>

                {/* Floating Tech Icons Around Constellation */}
                {[
                  { 
                    symbol: "⚛️", 
                    name: "React", 
                    position: { x: 120, y: -80, z: 60 },
                    delay: 2,
                    color: "#61dafb"
                  },
                  { 
                    symbol: "💾", 
                    name: "Database", 
                    position: { x: -120, y: -80, z: 60 },
                    delay: 2.3,
                    color: "#4caf50"
                  },
                  { 
                    symbol: "☁️", 
                    name: "Cloud", 
                    position: { x: 120, y: 80, z: -60 },
                    delay: 2.6,
                    color: "#2196f3"
                  },
                  { 
                    symbol: "🔒", 
                    name: "Security", 
                    position: { x: -120, y: 80, z: -60 },
                    delay: 2.9,
                    color: "#ff9800"
                  },
                  { 
                    symbol: "📡", 
                    name: "API", 
                    position: { x: 0, y: -120, z: 0 },
                    delay: 3.2,
                    color: "#9c27b0"
                  },
                  { 
                    symbol: "⚙️", 
                    name: "Config", 
                    position: { x: 0, y: 120, z: 0 },
                    delay: 3.5,
                    color: "#ff5722"
                  }
                ].map((tech, i) => (
                  <motion.div
                    key={`tech-${i}`}
                    className="absolute flex flex-col items-center pointer-events-none"
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ 
                      scale: [0, 1, 0],
                      opacity: [0, 1, 0],
                      rotateY: [0, 360],
                    }}
                    transition={{ 
                      scale: { duration: 4, repeat: Infinity, delay: tech.delay },
                      opacity: { duration: 4, repeat: Infinity, delay: tech.delay },
                      rotateY: { duration: 8, repeat: Infinity }
                    }}
                    style={{
                      transform: `translate3d(${tech.position.x}px, ${tech.position.y}px, ${tech.position.z}px)`,
                      transformStyle: 'preserve-3d'
                    }}
                  >
                    <motion.div
                      className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 rounded-lg bg-black/80 backdrop-blur-xl border border-white/20 flex items-center justify-center shadow-2xl"
                      animate={{
                        boxShadow: [
                          `0 0 20px ${tech.color}40`,
                          `0 0 30px ${tech.color}60`,
                          `0 0 20px ${tech.color}40`
                        ]
                      }}
                      transition={{ duration: 3, repeat: Infinity, delay: i * 0.5 }}
                    >
                      <span className="text-lg sm:text-xl lg:text-2xl">{tech.symbol}</span>
                    </motion.div>
                    <motion.div
                      className="mt-2 px-2 py-1 bg-black/60 backdrop-blur-sm rounded text-xs text-white font-mono border border-white/10"
                      animate={{ opacity: [0.7, 1, 0.7] }}
                      transition={{ duration: 2, repeat: Infinity, delay: i * 0.3 }}
                    >
                      {tech.name}
                    </motion.div>
                  </motion.div>
                ))}

                {/* Enhanced Orbital Symmetric Lines with Tech Labels */}
                {[...Array(6)].map((_, i) => (
                  <motion.div
                    key={`orbital-${i}`}
                    className="absolute inset-0 flex items-center justify-center"
                    initial={{ opacity: 0 }}
                    animate={{ 
                      opacity: 1,
                      rotateZ: 360,
                    }}
                    transition={{ 
                      opacity: { delay: 2 + i * 0.2 },
                      rotateZ: { duration: 20 + i * 5, repeat: Infinity, ease: "linear" }
                    }}
                    style={{ 
                      transformStyle: 'preserve-3d',
                      transform: `rotateX(${i * 30}deg) rotateY(${i * 60}deg)`
                    }}
                  >
                    <motion.div
                      className="w-48 h-48 sm:w-60 sm:h-60 lg:w-72 lg:h-72 border-2 border-blue-400/20 rounded-full"
                      animate={{
                        borderColor: [
                          'rgba(59, 130, 246, 0.2)',
                          'rgba(139, 92, 246, 0.3)',
                          'rgba(34, 211, 238, 0.2)',
                          'rgba(16, 185, 129, 0.3)',
                          'rgba(59, 130, 246, 0.2)'
                        ],
                        filter: [
                          'drop-shadow(0 0 10px #3b82f640)',
                          'drop-shadow(0 0 15px #8b5cf660)',
                          'drop-shadow(0 0 10px #22d3ee40)'
                        ]
                      }}
                      transition={{ 
                        duration: 6, 
                        repeat: Infinity, 
                        delay: i * 0.5 
                      }}
                    />
                  </motion.div>
                ))}

                {/* Code Syntax Floating Elements */}
                {[
                  { text: "{ }", pos: { x: 80, y: -60 }, color: "#fbbf24" },
                  { text: "< />", pos: { x: -80, y: -60 }, color: "#22d3ee" },
                  { text: "=>", pos: { x: 80, y: 60 }, color: "#a78bfa" },
                  { text: "( )", pos: { x: -80, y: 60 }, color: "#34d399" },
                ].map((syntax, i) => (
                  <motion.div
                    key={`syntax-${i}`}
                    className="absolute font-mono font-bold text-lg sm:text-xl lg:text-2xl pointer-events-none"
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{
                      scale: [0, 1, 0],
                      opacity: [0, 0.8, 0],
                      rotateZ: [0, 180, 360],
                      color: [syntax.color, '#ffffff', syntax.color]
                    }}
                    transition={{
                      duration: 5,
                      repeat: Infinity,
                      delay: i * 0.7 + 3
                    }}
                    style={{
                      left: `calc(50% + ${syntax.pos.x}px)`,
                      top: `calc(50% + ${syntax.pos.y}px)`,
                      filter: `drop-shadow(0 0 8px ${syntax.color})`
                    }}
                  >
                    {syntax.text}
                  </motion.div>
                ))}

                {/* Enhanced Symmetric Node Points with Tech Icons */}
                {[
                  { x: 0, y: -140, z: 0, icon: "📊", label: "Analytics", color: "#22d3ee" },
                  { x: 120, y: -70, z: 80, icon: "🚀", label: "Deploy", color: "#8b5cf6" },
                  { x: -120, y: -70, z: 80, icon: "🔧", label: "DevOps", color: "#10b981" },
                  { x: 120, y: 70, z: -80, icon: "💻", label: "Frontend", color: "#f59e0b" },
                  { x: -120, y: 70, z: -80, icon: "🗄️", label: "Backend", color: "#ec4899" },
                  { x: 0, y: 140, z: 0, icon: "🌐", label: "Network", color: "#3b82f6" },
                ].map((node, i) => (
                  <motion.div
                    key={`node-${i}`}
                    className="absolute flex flex-col items-center pointer-events-none"
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ 
                      scale: [0, 1, 0],
                      opacity: [0, 1, 0],
                      rotateY: [0, 360],
                    }}
                    transition={{ 
                      scale: { duration: 5, repeat: Infinity, delay: i * 0.4 },
                      opacity: { duration: 5, repeat: Infinity, delay: i * 0.4 },
                      rotateY: { duration: 10, repeat: Infinity }
                    }}
                    style={{
                      transform: `translate3d(${node.x}px, ${node.y}px, ${node.z}px)`,
                      transformStyle: 'preserve-3d'
                    }}
                  >
                    <motion.div
                      className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 rounded-full bg-black/80 backdrop-blur-xl border-2 flex items-center justify-center shadow-2xl"
                      animate={{
                        borderColor: [node.color, '#ffffff', node.color],
                        boxShadow: [
                          `0 0 15px ${node.color}60`,
                          `0 0 25px ${node.color}80`,
                          `0 0 15px ${node.color}60`
                        ]
                      }}
                      transition={{ duration: 3, repeat: Infinity, delay: i * 0.3 }}
                    >
                      <span className="text-sm sm:text-base lg:text-lg">{node.icon}</span>
                    </motion.div>
                    <motion.div
                      className="mt-1 px-2 py-0.5 bg-black/70 backdrop-blur-sm rounded text-xs text-white font-mono border border-white/10"
                      animate={{ opacity: [0.6, 1, 0.6] }}
                      transition={{ duration: 2, repeat: Infinity, delay: i * 0.2 }}
                    >
                      {node.label}
                    </motion.div>
                  </motion.div>
                ))}

                {/* Enhanced Connecting Energy Lines with Tech Patterns */}
                <svg 
                  className="absolute inset-0 w-full h-full pointer-events-none" 
                  viewBox="0 0 400 400"
                  style={{ transformStyle: 'preserve-3d' }}
                >
                  {/* Main Tech Network Lines */}
                  {[
                    { path: "M200,50 Q200,125 200,200 Q200,275 200,350", label: "Data Flow" },
                    { path: "M50,200 Q125,200 200,200 Q275,200 350,200", label: "API Calls" },
                    { path: "M100,100 Q150,150 200,200 Q250,250 300,300", label: "Microservices" },
                    { path: "M300,100 Q250,150 200,200 Q150,250 100,300", label: "Load Balancer" },
                  ].map((line, i) => (
                    <g key={`tech-line-${i}`}>
                      <motion.path
                        d={line.path}
                        stroke="url(#techGradient)"
                        strokeWidth="3"
                        fill="none"
                        strokeDasharray="10,5"
                        initial={{ pathLength: 0, opacity: 0 }}
                        animate={{ 
                          pathLength: [0, 1, 0],
                          opacity: [0, 0.9, 0],
                          strokeDashoffset: [0, -15]
                        }}
                        transition={{ 
                          duration: 4,
                          repeat: Infinity,
                          delay: i * 0.8
                        }}
                        filter="drop-shadow(0 0 3px currentColor)"
                      />
                      {/* Tech Labels on Lines */}
                      <motion.text
                        x="200"
                        y={50 + i * 20}
                        fill="#22d3ee"
                        fontSize="10"
                        fontFamily="monospace"
                        textAnchor="middle"
                        animate={{
                          opacity: [0, 1, 0],
                          fill: ['#22d3ee', '#8b5cf6', '#10b981', '#22d3ee']
                        }}
                        transition={{
                          duration: 4,
                          repeat: Infinity,
                          delay: i * 0.8 + 1
                        }}
                      >
                        {line.label}
                      </motion.text>
                    </g>
                  ))}

                  {/* Circuit-like Connection Patterns */}
                  {[
                    "M200,200 L250,150 L280,150 L280,120 L320,120",
                    "M200,200 L150,150 L120,150 L120,120 L80,120",
                    "M200,200 L250,250 L280,250 L280,280 L320,280",
                    "M200,200 L150,250 L120,250 L120,280 L80,280",
                  ].map((path, i) => (
                    <motion.path
                      key={`circuit-${i}`}
                      d={path}
                      stroke="url(#circuitGradient)"
                      strokeWidth="2"
                      fill="none"
                      strokeDasharray="4,4"
                      initial={{ pathLength: 0, opacity: 0 }}
                      animate={{ 
                        pathLength: [0, 1, 0],
                        opacity: [0, 0.7, 0],
                        strokeDashoffset: [0, -8]
                      }}
                      transition={{ 
                        duration: 3,
                        repeat: Infinity,
                        delay: i * 0.5 + 3
                      }}
                    />
                  ))}

                  {/* Enhanced Expanding Tech Rings */}
                  {[100, 140, 180].map((radius, i) => (
                    <motion.circle
                      key={`tech-ring-${i}`}
                      cx="200"
                      cy="200"
                      r={radius}
                      stroke="url(#techRingGradient)"
                      strokeWidth="2"
                      fill="none"
                      strokeDasharray="12,8"
                      initial={{ scale: 0, opacity: 0 }}
                      animate={{ 
                        scale: [0.8, 1.3, 0.8],
                        opacity: [0, 0.6, 0],
                        strokeDashoffset: [0, -20]
                      }}
                      transition={{ 
                        duration: 6,
                        repeat: Infinity,
                        delay: i * 1.5
                      }}
                      filter="drop-shadow(0 0 5px currentColor)"
                    />
                  ))}

                  <defs>
                    <linearGradient id="techGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#22d3ee" />
                      <stop offset="25%" stopColor="#3b82f6" />
                      <stop offset="50%" stopColor="#8b5cf6" />
                      <stop offset="75%" stopColor="#10b981" />
                      <stop offset="100%" stopColor="#22d3ee" />
                    </linearGradient>
                    <linearGradient id="circuitGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#f59e0b" />
                      <stop offset="50%" stopColor="#ec4899" />
                      <stop offset="100%" stopColor="#f59e0b" />
                    </linearGradient>
                    <linearGradient id="techRingGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#8b5cf6" />
                      <stop offset="33%" stopColor="#22d3ee" />
                      <stop offset="66%" stopColor="#10b981" />
                      <stop offset="100%" stopColor="#8b5cf6" />
                    </linearGradient>
                  </defs>
                </svg>

                {/* Enhanced Floating Tech Particles */}
                {[...Array(24)].map((_, i) => (
                  <motion.div
                    key={`tech-particle-${i}`}
                    className="absolute w-1.5 h-1.5 rounded-full pointer-events-none"
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{
                      scale: [0, 1, 0],
                      opacity: [0, 0.8, 0],
                      x: [
                        Math.cos(i * 15 * Math.PI / 180) * 180,
                        Math.cos(i * 15 * Math.PI / 180) * 220,
                        Math.cos(i * 15 * Math.PI / 180) * 180
                      ],
                      y: [
                        Math.sin(i * 15 * Math.PI / 180) * 180,
                        Math.sin(i * 15 * Math.PI / 180) * 220,
                        Math.sin(i * 15 * Math.PI / 180) * 180
                      ],
                      background: [
                        '#22d3ee',
                        '#8b5cf6',
                        '#10b981',
                        '#f59e0b',
                        '#ec4899',
                        '#22d3ee'
                      ]
                    }}
                    transition={{
                      duration: 6 + (i % 4),
                      repeat: Infinity,
                      delay: i * 0.15
                    }}
                    style={{
                      left: '50%',
                      top: '50%',
                      transform: 'translate(-50%, -50%)',
                      filter: 'drop-shadow(0 0 3px currentColor)'
                    }}
                  />
                ))}

                {/* Tech Performance Indicators */}
                {[
                  { label: "99.9%", desc: "Uptime", pos: { x: -160, y: -100 } },
                  { label: "<100ms", desc: "Response", pos: { x: 160, y: -100 } },
                  { label: "24/7", desc: "Support", pos: { x: -160, y: 100 } },
                  { label: "SSL", desc: "Secure", pos: { x: 160, y: 100 } },
                ].map((stat, i) => (
                  <motion.div
                    key={`stat-${i}`}
                    className="absolute flex flex-col items-center pointer-events-none"
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{
                      scale: [0, 1, 0],
                      opacity: [0, 0.9, 0],
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      delay: i * 0.8 + 4
                    }}
                    style={{
                      left: `calc(50% + ${stat.pos.x}px)`,
                      top: `calc(50% + ${stat.pos.y}px)`,
                    }}
                  >
                    <motion.div
                      className="px-3 py-1.5 bg-black/80 backdrop-blur-xl border border-cyan-400/50 rounded-lg shadow-xl"
                      animate={{
                        borderColor: ['#22d3ee80', '#8b5cf680', '#10b98180', '#22d3ee80'],
                        boxShadow: [
                          '0 0 15px #22d3ee40',
                          '0 0 20px #8b5cf640',
                          '0 0 15px #10b98140',
                          '0 0 15px #22d3ee40'
                        ]
                      }}
                      transition={{ duration: 3, repeat: Infinity, delay: i * 0.5 }}
                    >
                      <div className="text-cyan-400 font-bold text-sm sm:text-base">{stat.label}</div>
                      <div className="text-white/70 text-xs font-mono">{stat.desc}</div>
                    </motion.div>
                  </motion.div>
                ))}

                {/* Enhanced Data Flow Streams */}
                {[...Array(20)].map((_, i) => (
                  <motion.div
                    key={`data-stream-${i}`}
                    className="absolute w-px h-20 bg-gradient-to-b from-transparent via-cyan-400 to-transparent pointer-events-none"
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{
                      opacity: [0, 1, 0],
                      scale: [0, 1, 0],
                      y: [-300, 300],
                    }}
                    transition={{
                      duration: 5,
                      repeat: Infinity,
                      delay: i * 0.25
                    }}
                    style={{
                      left: `${50 + Math.cos(i * 18 * Math.PI / 180) * 35}%`,
                      top: `${50 + Math.sin(i * 18 * Math.PI / 180) * 35}%`,
                      transform: `rotate(${i * 18}deg)`,
                      filter: 'drop-shadow(0 0 2px currentColor)'
                    }}
                  />
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </main>
      
      {/* Enhanced Styles for 3D Wireframe Constellation */}
      <style jsx global>{`
        .font-space-grotesk {
          font-family: 'Space Grotesk', system-ui, sans-serif;
        }
        
        .font-inter {
          font-family: 'Inter', system-ui, sans-serif;
        }

        /* 3D Perspective and Transform Utilities */
        .perspective-1200 {
          perspective: 1200px;
        }

        .transform-style-3d {
          transform-style: preserve-3d;
        }

        .backface-hidden {
          backface-visibility: hidden;
        }

        /* Tech-Enhanced Animation Keyframes */
        @keyframes gridPulse {
          0%, 100% {
            opacity: 0.1;
            transform: scale(1);
          }
          50% {
            opacity: 0.3;
            transform: scale(1.02);
          }
        }

        @keyframes binaryFlow {
          0% {
            transform: translateY(-400px) rotate(-90deg);
            opacity: 0;
          }
          50% {
            opacity: 0.6;
          }
          100% {
            transform: translateY(400px) rotate(-90deg);
            opacity: 0;
          }
        }

        @keyframes techNodePulse {
          0%, 100% {
            transform: scale(1);
            box-shadow: 0 0 15px currentColor;
          }
          50% {
            transform: scale(1.1);
            box-shadow: 0 0 25px currentColor, 0 0 35px currentColor;
          }
        }

        @keyframes circuitFlow {
          0% {
            stroke-dashoffset: 0;
            opacity: 0;
          }
          50% {
            opacity: 0.8;
          }
          100% {
            stroke-dashoffset: -20;
            opacity: 0;
          }
        }

        @keyframes techIndicatorGlow {
          0%, 100% {
            background: rgba(34, 211, 238, 0.1);
            border-color: rgba(34, 211, 238, 0.5);
            box-shadow: 0 0 10px rgba(34, 211, 238, 0.3);
          }
          33% {
            background: rgba(139, 92, 246, 0.1);
            border-color: rgba(139, 92, 246, 0.5);
            box-shadow: 0 0 15px rgba(139, 92, 246, 0.4);
          }
          66% {
            background: rgba(16, 185, 129, 0.1);
            border-color: rgba(16, 185, 129, 0.5);
            box-shadow: 0 0 12px rgba(16, 185, 129, 0.3);
          }
        }

        @keyframes performanceCounter {
          0% {
            transform: scale(0.9);
            opacity: 0.7;
          }
          50% {
            transform: scale(1.05);
            opacity: 1;
          }
          100% {
            transform: scale(0.9);
            opacity: 0.7;
          }
        }

        @keyframes synthaxHighlight {
          0%, 100% {
            color: currentColor;
            text-shadow: 0 0 5px currentColor;
          }
          50% {
            color: #ffffff;
            text-shadow: 0 0 10px currentColor, 0 0 20px currentColor;
          }
        }

        @keyframes techParticleOrbit {
          0% {
            transform: rotate(0deg) translateX(180px) rotate(0deg) scale(1);
          }
          50% {
            transform: rotate(180deg) translateX(220px) rotate(-180deg) scale(1.2);
          }
          100% {
            transform: rotate(360deg) translateX(180px) rotate(-360deg) scale(1);
          }
        }
        @keyframes wireframePulse {
          0%, 100% {
            opacity: 0.3;
            transform: scale(1);
          }
          50% {
            opacity: 1;
            transform: scale(1.05);
          }
        }

        @keyframes energyFlow {
          0% {
            stroke-dashoffset: 0;
            opacity: 0;
          }
          50% {
            opacity: 1;
          }
          100% {
            stroke-dashoffset: -20;
            opacity: 0;
          }
        }

        @keyframes coreGlow {
          0%, 100% {
            box-shadow: 
              0 0 20px #22d3ee,
              0 0 40px #3b82f6,
              0 0 60px #22d3ee,
              inset 0 0 20px #22d3ee;
          }
          25% {
            box-shadow: 
              0 0 30px #8b5cf6,
              0 0 60px #ec4899,
              0 0 90px #8b5cf6,
              inset 0 0 30px #8b5cf6;
          }
          50% {
            box-shadow: 
              0 0 25px #10b981,
              0 0 50px #f59e0b,
              0 0 75px #10b981,
              inset 0 0 25px #10b981;
          }
          75% {
            box-shadow: 
              0 0 35px #f59e0b,
              0 0 70px #22d3ee,
              0 0 105px #f59e0b,
              inset 0 0 35px #f59e0b;
          }
        }

        @keyframes orbitalRotation {
          0% {
            transform: rotateX(0deg) rotateY(0deg) rotateZ(0deg);
          }
          100% {
            transform: rotateX(360deg) rotateY(360deg) rotateZ(360deg);
          }
        }

        @keyframes symmetricFloat {
          0%, 100% {
            transform: translateY(0px) rotateX(0deg);
          }
          50% {
            transform: translateY(-15px) rotateX(10deg);
          }
        }

        @keyframes particleOrbit {
          0% {
            transform: rotate(0deg) translateX(150px) rotate(0deg);
          }
          100% {
            transform: rotate(360deg) translateX(150px) rotate(-360deg);
          }
        }

        @keyframes dataStreamFlow {
          0% {
            transform: translateY(-200px) scaleY(0);
            opacity: 0;
          }
          50% {
            transform: translateY(0px) scaleY(1);
            opacity: 1;
          }
          100% {
            transform: translateY(200px) scaleY(0);
            opacity: 0;
          }
        }

        @keyframes ringExpansion {
          0% {
            transform: scale(0.5) rotateZ(0deg);
            opacity: 0.8;
          }
          50% {
            transform: scale(1) rotateZ(180deg);
            opacity: 0.4;
          }
          100% {
            transform: scale(1.5) rotateZ(360deg);
            opacity: 0;
          }
        }

        /* Holographic Effect Animations */
        @keyframes holographicShift {
          0%, 100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }

        @keyframes energyBeam {
          0% {
            transform: translateX(-100%) skewX(-15deg);
            opacity: 0;
          }
          50% {
            opacity: 1;
          }
          100% {
            transform: translateX(100%) skewX(-15deg);
            opacity: 0;
          }
        }

        /* Tech Element Styles */
        .tech-node {
          animation: techNodePulse 3s ease-in-out infinite;
        }

        .binary-stream {
          animation: binaryFlow 6s linear infinite;
        }

        .circuit-line {
          animation: circuitFlow 3s ease-in-out infinite;
        }

        .tech-indicator {
          animation: techIndicatorGlow 4s ease-in-out infinite;
        }

        .performance-stat {
          animation: performanceCounter 2s ease-in-out infinite;
        }

        .syntax-element {
          animation: synthaxHighlight 3s ease-in-out infinite;
        }

        .tech-particle {
          animation: techParticleOrbit 8s linear infinite;
        }

        /* Enhanced Glow Effects for Tech Elements */
        .tech-glow-cyan {
          filter: drop-shadow(0 0 8px #22d3ee) drop-shadow(0 0 16px #22d3ee40);
        }

        .tech-glow-purple {
          filter: drop-shadow(0 0 8px #8b5cf6) drop-shadow(0 0 16px #8b5cf640);
        }

        .tech-glow-green {
          filter: drop-shadow(0 0 8px #10b981) drop-shadow(0 0 16px #10b98140);
        }

        .tech-glow-orange {
          filter: drop-shadow(0 0 8px #f59e0b) drop-shadow(0 0 16px #f59e0b40);
        }

        /* Holographic Tech Card Effects */
        .tech-card {
          background: linear-gradient(
            135deg,
            rgba(0,0,0,0.8) 0%,
            rgba(34,211,238,0.1) 25%,
            rgba(139,92,246,0.1) 50%,
            rgba(16,185,129,0.1) 75%,
            rgba(0,0,0,0.8) 100%
          );
          backdrop-filter: blur(20px);
          border: 1px solid rgba(255,255,255,0.1);
          box-shadow: 
            0 8px 32px rgba(0,0,0,0.3),
            inset 0 1px 0 rgba(255,255,255,0.1);
        }

        .tech-card:hover {
          transform: translateY(-5px) rotateX(5deg) rotateY(5deg);
          box-shadow: 
            0 12px 40px rgba(0,0,0,0.4),
            0 0 20px rgba(34,211,238,0.3),
            inset 0 1px 0 rgba(255,255,255,0.2);
        }
        .wireframe-line {
          transform-origin: center;
          animation: wireframePulse 3s ease-in-out infinite;
        }

        .energy-core {
          animation: coreGlow 4s ease-in-out infinite;
        }

        .orbital-ring {
          animation: orbitalRotation 20s linear infinite;
        }

        .symmetric-particle {
          animation: particleOrbit 8s linear infinite;
        }

        .data-stream {
          animation: dataStreamFlow 4s ease-in-out infinite;
        }

        .expanding-ring {
          animation: ringExpansion 6s ease-out infinite;
        }

        /* Gradient Backgrounds for Wireframes */
        .gradient-wireframe {
          background: linear-gradient(
            45deg,
            #22d3ee 0%,
            #3b82f6 25%,
            #8b5cf6 50%,
            #ec4899 75%,
            #22d3ee 100%
          );
          background-size: 400% 400%;
          animation: holographicShift 8s ease-in-out infinite;
        }

        /* Performance Optimizations */
        .gpu-accelerated {
          transform: translateZ(0);
          will-change: transform, opacity;
          backface-visibility: hidden;
        }

        /* Mobile Optimizations for Wireframe */
        @media (max-width: 768px) {
          .perspective-1200 {
            perspective: 800px;
          }
          
          .wireframe-line {
            animation-duration: 4s;
          }
          
          .orbital-ring {
            animation-duration: 25s;
          }
          
          .symmetric-particle {
            animation-duration: 10s;
          }
        }

        /* Enhanced Scrollbar for 3D Experience */
        ::-webkit-scrollbar {
          width: 8px;
        }
        
        ::-webkit-scrollbar-track {
          background: linear-gradient(45deg, rgba(0,0,0,0.05), rgba(59,130,246,0.05));
          border-radius: 4px;
        }
        
        ::-webkit-scrollbar-thumb {
          background: linear-gradient(45deg, #22d3ee, #8b5cf6);
          border-radius: 4px;
          box-shadow: 0 0 10px rgba(34,211,238,0.3);
        }
        
        ::-webkit-scrollbar-thumb:hover {
          background: linear-gradient(45deg, #0891b2, #7c3aed);
          box-shadow: 0 0 15px rgba(34,211,238,0.5);
        }

        /* Accessibility and Reduced Motion */
        @media (prefers-reduced-motion: reduce) {
          .wireframe-line,
          .energy-core,
          .orbital-ring,
          .symmetric-particle,
          .data-stream,
          .expanding-ring {
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
          }
        }
      `}</style>
    </div>
  );
};

export default HomeSection;