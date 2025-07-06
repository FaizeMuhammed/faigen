'use client'
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Palette, Zap, Rocket, Shield, Smartphone, Cloud } from "lucide-react";
import { useRouter } from "next/navigation";

const HomeSection = () => {
  const [mounted, setMounted] = useState(false);
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const router = useRouter();
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

      {/* Top Left Logo - Always Visible */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="fixed top-4 left-4 md:top-6 md:left-6 z-50"
      >
        <motion.div
          className="bg-white/90 backdrop-blur-xl rounded-xl md:rounded-2xl border border-gray-200 shadow-xl p-2 md:p-3"
          whileHover={{ scale: 1.05 }}
        >
          <img 
            src="/ChatGPT_Image_Apr_4__2025__10_40_51_PM-removebg-preview.png" 
            alt="Company Logo" 
            className="h-12 md:h-16 lg:h-18 w-auto"
          />
        </motion.div>
      </motion.div>

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
                    onClick={() => {
                      setIsMenuOpen(false);
                      router.push('/consultation');
                    }}
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
                className="space-y-6"
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
                <motion.div variants={itemVariants} className="space-y-4 pt-2">
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
                    onClick={() => router.push('/consultation')}
                    whileHover={{ scale: 1.02, y: -2 }}
                    whileTap={{ scale: 0.98 }}
                    className="group px-8 py-4 bg-black text-white rounded-2xl font-semibold text-base transition-all duration-300 shadow-xl hover:shadow-2xl relative overflow-hidden"
                  >
                    <span className="relative z-10">Get a Free Consultation</span>
                    <div className="absolute inset-0 bg-gradient-to-r from-gray-900 to-black opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </motion.button>
                  
                  <motion.button
                    onClick={scrollToPortfolio}
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
              </motion.div>
              
              {/* Right Visual - Abstract Energy Ecosystem */}
              <motion.div 
                className="relative h-[400px] lg:h-[600px] flex items-center justify-center overflow-hidden"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 0.5 }}
              >
                {/* Central Energy Core */}
                <motion.div 
                  className="relative z-20"
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 1.5, delay: 0.8 }}
                >
                  <div className="w-32 lg:w-48 h-32 lg:h-48 relative">
                    {/* Core Rings */}
                    <motion.div 
                      className="absolute inset-0 rounded-full border-2 border-gradient-to-r from-blue-400/30 to-purple-600/30"
                      style={{
                        background: 'conic-gradient(from 0deg, rgba(59,130,246,0.1), rgba(147,51,234,0.3), rgba(59,130,246,0.1))'
                      }}
                      animate={{ 
                        rotate: 360,
                        scale: [1, 1.05, 1]
                      }}
                      transition={{ 
                        rotate: { duration: 20, repeat: Infinity, ease: "linear" },
                        scale: { duration: 4, repeat: Infinity }
                      }}
                    />
                    
                    {/* Inner Core - Now Pure White with Logo */}
                    <motion.div 
                      className="absolute inset-8 lg:inset-12 rounded-full bg-white backdrop-blur-xl border border-gray-200 shadow-xl flex items-center justify-center"
                      animate={{ 
                        boxShadow: [
                          "0 0 20px rgba(59,130,246,0.3)",
                          "0 0 40px rgba(147,51,234,0.5)",
                          "0 0 20px rgba(59,130,246,0.3)"
                        ]
                      }}
                      transition={{ duration: 3, repeat: Infinity }}
                    >
                      <motion.div 
                        className="w-full h-full flex items-center justify-center p-4"
                        animate={{ opacity: [0.8, 1, 0.8] }}
                        transition={{ duration: 2, repeat: Infinity }}
                      >
                        {/* Logo placeholder - replace src with your logo */}
                        <img 
                          src="/ChatGPT_Image_Apr_4__2025__10_36_21_PM-removebg-preview.png" 
                          alt="Company Logo" 
                          className="w-full h-full object-contain max-w-16 lg:max-w-20 max-h-16 lg:max-h-20"
                        />
                      </motion.div>
                    </motion.div>
                  </div>
                </motion.div>

                {/* Floating Capability Spheres */}
                {[
                  { 
                    icon: Palette, 
                    title: "Design", 
                    position: { top: "10%", left: "20%" },
                    delay: 1
                  },
                  { 
                    icon: Zap, 
                    title: "Speed", 
                    position: { top: "15%", right: "15%" },
                    delay: 1.3
                  },
                  { 
                    icon: Rocket, 
                    title: "Deploy", 
                    position: { bottom: "20%", right: "20%" },
                    delay: 1.6
                  },
                  { 
                    icon: Shield, 
                    title: "Secure", 
                    position: { bottom: "15%", left: "15%" },
                    delay: 1.9
                  },
                  { 
                    icon: Smartphone, 
                    title: "Mobile", 
                    position: { top: "45%", left: "5%" },
                    delay: 2.2
                  },
                  { 
                    icon: Cloud, 
                    title: "Cloud", 
                    position: { top: "45%", right: "5%" },
                    delay: 2.5
                  }
                ].map((sphere, index) => {
                  const IconComponent = sphere.icon;
                  return (
                    <motion.div
                      key={index}
                      className="absolute z-10"
                      style={sphere.position}
                      initial={{ scale: 0, opacity: 0, y: 50 }}
                      animate={{ 
                        scale: 1, 
                        opacity: 1, 
                        y: [0, -10, 0],
                        rotate: [0, 5, -5, 0]
                      }}
                      transition={{ 
                        scale: { delay: sphere.delay, duration: 0.8 },
                        opacity: { delay: sphere.delay, duration: 0.8 },
                        y: { duration: 4, repeat: Infinity, delay: sphere.delay + 1 },
                        rotate: { duration: 6, repeat: Infinity, delay: sphere.delay + 2 }
                      }}
                    >
                      <motion.div 
                        className="w-16 lg:w-24 h-16 lg:h-24 rounded-full bg-gray-50/90 backdrop-blur-xl border border-gray-200 shadow-xl flex flex-col items-center justify-center text-gray-700 relative"
                        whileHover={{ 
                          scale: 1.1, 
                          y: -5
                        }}
                        animate={{
                          boxShadow: [
                            "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
                            "0 25px 30px -5px rgba(0, 0, 0, 0.15), 0 15px 15px -5px rgba(0, 0, 0, 0.06)",
                            "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
                          ]
                        }}
                        transition={{ duration: 3, repeat: Infinity }}
                      >
                        <IconComponent className="w-6 lg:w-8 h-6 lg:h-8 mb-1" />
                        <div className="text-xs lg:text-sm font-medium">{sphere.title}</div>
                      </motion.div>
                    </motion.div>
                  );
                })}

                {/* Energy Streams */}
                <svg className="absolute inset-0 w-full h-full pointer-events-none z-5" viewBox="0 0 400 400">
                  {/* Connecting Energy Lines */}
                  {[
                    "M80,60 Q200,100 320,60",
                    "M360,100 Q250,200 360,300",
                    "M320,340 Q200,300 80,340",
                    "M40,300 Q150,200 40,100",
                    "M80,60 Q150,150 40,100",
                    "M320,60 Q250,150 360,100"
                  ].map((path, index) => (
                    <motion.path
                      key={index}
                      d={path}
                      stroke="url(#energyGradient)"
                      strokeWidth="1.5"
                      fill="none"
                      initial={{ pathLength: 0, opacity: 0 }}
                      animate={{ 
                        pathLength: [0, 1, 0],
                        opacity: [0, 0.6, 0]
                      }}
                      transition={{ 
                        duration: 4,
                        repeat: Infinity,
                        delay: index * 0.8 + 3
                      }}
                    />
                  ))}
                  
                  <defs>
                    <linearGradient id="energyGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="rgba(59,130,246,0.8)" />
                      <stop offset="50%" stopColor="rgba(147,51,234,0.9)" />
                      <stop offset="100%" stopColor="rgba(239,68,68,0.8)" />
                    </linearGradient>
                  </defs>
                </svg>

                {/* Floating Data Particles */}
                {[...Array(15)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute w-1 lg:w-2 h-1 lg:h-2 rounded-full"
                    style={{
                      background: `linear-gradient(45deg, ${
                        ['#3B82F6', '#8B5CF6', '#EF4444', '#10B981', '#F59E0B'][i % 5]
                      }, ${
                        ['#1E40AF', '#7C3AED', '#DC2626', '#059669', '#D97706'][i % 5]
                      })`,
                      left: `${Math.random() * 100}%`,
                      top: `${Math.random() * 100}%`,
                    }}
                    animate={{
                      x: [0, Math.random() * 100 - 50],
                      y: [0, Math.random() * 100 - 50],
                      scale: [0, 1, 0],
                      opacity: [0, 0.8, 0],
                    }}
                    transition={{
                      duration: 6 + Math.random() * 4,
                      repeat: Infinity,
                      delay: Math.random() * 5,
                    }}
                  />
                ))}

                {/* Geometric Background Elements */}
                {[...Array(8)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute border border-white/5 rounded-lg"
                    style={{
                      width: `${40 + Math.random() * 60}px`,
                      height: `${40 + Math.random() * 60}px`,
                      left: `${Math.random() * 80 + 10}%`,
                      top: `${Math.random() * 80 + 10}%`,
                      transform: `rotate(${Math.random() * 360}deg)`,
                    }}
                    animate={{
                      rotate: [0, 360],
                      scale: [1, 1.1, 1],
                      opacity: [0.1, 0.3, 0.1],
                    }}
                    transition={{
                      duration: 10 + Math.random() * 10,
                      repeat: Infinity,
                      delay: Math.random() * 5,
                    }}
                  />
                ))}

                {/* Holographic Grid */}
                <motion.div 
                  className="absolute inset-0 opacity-5"
                  animate={{ opacity: [0.02, 0.08, 0.02] }}
                  transition={{ duration: 8, repeat: Infinity }}
                  style={{
                    backgroundImage: `
                      linear-gradient(rgba(59,130,246,0.1) 1px, transparent 1px),
                      linear-gradient(90deg, rgba(59,130,246,0.1) 1px, transparent 1px)
                    `,
                    backgroundSize: '30px 30px'
                  }}
                />
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