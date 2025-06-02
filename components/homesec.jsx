'use client'
import { useEffect, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

const HomeSection = () => {
  const [mounted, setMounted] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const textVariants = ["Innovative", "Powerful", "Seamless"];
  
  // Add link to Montserrat font in the head section
  useEffect(() => {
    const linkElement = document.createElement('link');
    linkElement.rel = 'stylesheet';
    linkElement.href = 'https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700;800;900&display=swap';
    document.head.appendChild(linkElement);
    
    return () => {
      document.head.removeChild(linkElement);
    };
  }, []);
  
  useEffect(() => {
    setMounted(true);
    
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    
    window.addEventListener("scroll", handleScroll);
    
    // Text rotation effect
    const textInterval = setInterval(() => {
      setCurrentTextIndex((prev) => (prev + 1) % textVariants.length);
    }, 3000);
    
    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearInterval(textInterval);
    };
  }, []);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);
  
  // Framer motion variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
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
        stiffness: 100,
        damping: 10
      }
    }
  };

  // Full screen menu variants
  const menuVariants = {
    closed: {
      y: "-100%",
      opacity: 0,
      transition: {
        duration: 0.6,
        ease: [0.43, 0.13, 0.23, 0.96]
      }
    },
    open: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: [0.43, 0.13, 0.23, 0.96]
      }
    }
  };

  const menuItemVariants = {
    closed: { x: -20, opacity: 0 },
    open: (i) => ({
      x: 0,
      opacity: 1,
      transition: {
        delay: 0.3 + i * 0.1,
        duration: 0.5
      }
    })
  };

  const menuItems = [
    "Products",
    "Solutions", 
    "Resources",
    "Pricing",
    "About",
    "Contact"
  ];
  
  return (
    <>
      {/* Curved Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        {/* Primary curved background */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="absolute -top-1/2 -right-1/4 w-[120vw] h-[120vh] transform rotate-12"
        >
          <div className="w-full h-full bg-gradient-to-br from-gray-50 via-white to-gray-100 rounded-[40%] shadow-2xl opacity-60"></div>
        </motion.div>
        
        {/* Secondary curved element */}
        <motion.div
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 2, delay: 0.5, ease: "easeOut" }}
          className="absolute -bottom-1/3 -left-1/4 w-[100vw] h-[80vh] transform -rotate-45"
        >
          <div className="w-full h-full bg-gradient-to-tr from-black/5 via-gray-50 to-white rounded-[50%] shadow-xl opacity-40"></div>
        </motion.div>
        
        {/* Tertiary accent curves */}
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1.8, delay: 1, ease: "easeOut" }}
          className="absolute top-1/4 right-0 w-[60vw] h-[40vh] transform rotate-45"
        >
          <div className="w-full h-full bg-gradient-to-l from-gray-900/10 via-transparent to-transparent rounded-[60%] opacity-30"></div>
        </motion.div>
        
        {/* Floating geometric shapes */}
        <motion.div
          animate={{ 
            y: [0, -20, 0],
            rotate: [0, 5, 0]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-1/3 left-1/4 w-32 h-32 border border-black/10 rounded-full opacity-20"
        ></motion.div>
        
        <motion.div
          animate={{ 
            y: [0, 15, 0],
            rotate: [0, -3, 0]
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
          className="absolute bottom-1/4 right-1/3 w-24 h-24 border border-black/15 rounded-lg rotate-45 opacity-25"
        ></motion.div>
      </div>

      {/* Menu Icon - Fixed position */}
      <motion.div 
        className="fixed top-6 right-6 md:top-8 md:right-8 z-50"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1, duration: 0.5 }}
      >
        <motion.button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="w-14 h-14 flex items-center justify-center bg-white/90 backdrop-blur-lg border-2 border-black/10 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:border-black/30"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <motion.div
            animate={isMenuOpen ? "open" : "closed"}
            className="flex flex-col items-center justify-center"
          >
            {/* Hamburger to X animation */}
            <motion.span
              variants={{
                closed: { rotate: 0, y: 0 },
                open: { rotate: 45, y: 6 }
              }}
              className="w-5 h-0.5 bg-black block mb-1.5 origin-center transition-all duration-300"
            />
            <motion.span
              variants={{
                closed: { opacity: 1 },
                open: { opacity: 0 }
              }}
              className="w-5 h-0.5 bg-black block mb-1.5 transition-all duration-300"
            />
            <motion.span
              variants={{
                closed: { rotate: 0, y: 0 },
                open: { rotate: -45, y: -6 }
              }}
              className="w-5 h-0.5 bg-black block origin-center transition-all duration-300"
            />
          </motion.div>
        </motion.button>
      </motion.div>

      {/* Full Screen Navigation */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            variants={menuVariants}
            initial="closed"
            animate="open"
            exit="closed"
            className="fixed inset-0 z-40 bg-white/95 backdrop-blur-xl"
          >
            {/* Enhanced Background with curved elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              {/* Primary curved background for menu */}
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
                className="absolute -top-1/3 -right-1/4 w-[100vw] h-[80vh] transform rotate-45"
              >
                <div className="w-full h-full bg-gradient-to-br from-gray-100 via-white to-gray-50 rounded-[50%] shadow-xl opacity-40"></div>
              </motion.div>
              
              {/* Secondary curved element */}
              <motion.div
                initial={{ scale: 0.6, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 1.2, delay: 0.4, ease: "easeOut" }}
                className="absolute -bottom-1/4 -left-1/3 w-[80vw] h-[60vh] transform -rotate-30"
              >
                <div className="w-full h-full bg-gradient-to-tr from-black/5 via-gray-100 to-white rounded-[60%] shadow-lg opacity-30"></div>
              </motion.div>
              
              {/* Tertiary accent curve */}
              <motion.div
                initial={{ x: 100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 1.5, delay: 0.6, ease: "easeOut" }}
                className="absolute top-1/2 right-0 w-[50vw] h-[30vh] transform rotate-12"
              >
                <div className="w-full h-full bg-gradient-to-l from-gray-200/20 via-transparent to-transparent rounded-[70%] opacity-25"></div>
              </motion.div>
              
              {/* Floating circles for navigation */}
              <motion.div
                animate={{ 
                  y: [0, -15, 0],
                  rotate: [0, 10, 0]
                }}
                transition={{
                  duration: 10,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="absolute top-1/4 left-1/6 w-20 h-20 border border-black/8 rounded-full opacity-30"
              ></motion.div>
              
              <motion.div
                animate={{ 
                  y: [0, 12, 0],
                  rotate: [0, -8, 0]
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 3
                }}
                className="absolute bottom-1/3 right-1/5 w-16 h-16 border border-black/10 rounded-lg rotate-45 opacity-20"
              ></motion.div>
            </div>
            
            {/* Navigation content */}
            <div className="relative h-full flex flex-col justify-between px-4 sm:px-6 py-6 sm:py-8 md:py-12">
              {/* Logo at top */}
              <motion.div
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.5 }}
                className="flex justify-start"
              >
                <div className="relative">
                  <div className="absolute -inset-2 border border-black/10 rounded-full shadow-lg bg-gradient-to-br from-white to-gray-50"></div>
                  <Image 
                    src="/WhatsApp_Image_2025-04-04_at_9.53.44_PM-removebg-preview.png" 
                    alt="Faigen" 
                    width={50} 
                    height={50} 
                    className="object-contain relative z-10 filter drop-shadow-sm sm:w-[60px] sm:h-[60px]"
                  />
                </div>
              </motion.div>

              {/* Main navigation items - Centered */}
              <nav className="flex-1 flex flex-col items-center justify-center text-center space-y-3 sm:space-y-4 md:space-y-6">
                {menuItems.map((item, index) => (
                  <div key={item} className="w-full">
                    <motion.a
                      href="#"
                      custom={index}
                      variants={menuItemVariants}
                      initial="closed"
                      animate="open"
                      className="block text-xl sm:text-2xl md:text-2xl lg:text-3xl font-bold text-black hover:text-gray-600 transition-colors duration-300 py-1.5 sm:py-2 md:py-3"
                      style={{ fontFamily: "'Montserrat', sans-serif" }}
                      whileHover={{ x: 10 }}
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item}
                    </motion.a>
                    
                    {/* Separator - Don't show after last item */}
                    {index < menuItems.length - 1 && (
                      <motion.div
                        initial={{ scaleX: 0, opacity: 0 }}
                        animate={{ scaleX: 1, opacity: 1 }}
                        transition={{ delay: 0.5 + index * 0.1, duration: 0.6 }}
                        className="w-16 sm:w-20 md:w-28 h-px bg-gradient-to-r from-transparent via-black/30 to-transparent mx-auto mt-2 sm:mt-3 md:mt-4"
                      />
                    )}
                  </div>
                ))}
              </nav>

              {/* Bottom content */}
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.8, duration: 0.5 }}
                className="text-center"
              >
                <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 md:gap-8">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-6 sm:px-8 py-2.5 sm:py-3 bg-black text-white rounded-full font-semibold text-sm sm:text-base transition-all duration-300 shadow-lg hover:shadow-xl"
                    style={{ fontFamily: "'Montserrat', sans-serif" }}
                  >
                    Get Started
                  </motion.button>
                  
                  <div className="flex gap-4 sm:gap-6 text-xs sm:text-sm text-gray-600">
                    <motion.a 
                      href="#" 
                      className="hover:text-black transition-colors duration-200"
                      whileHover={{ y: -2 }}
                    >
                      Privacy
                    </motion.a>
                    <motion.a 
                      href="#" 
                      className="hover:text-black transition-colors duration-200"
                      whileHover={{ y: -2 }}
                    >
                      Terms
                    </motion.a>
                    <motion.a 
                      href="#" 
                      className="hover:text-black transition-colors duration-200"
                      whileHover={{ y: -2 }}
                    >
                      Support
                    </motion.a>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Hero Section - Enhanced with better spacing and visual hierarchy */}
      <main className="relative flex flex-col md:flex-row items-start md:items-center justify-between px-6 md:px-12 lg:px-20 py-16 md:py-28 min-h-screen max-w-7xl mx-auto w-full">
        {mounted && (
          <>
            {/* Left content with enhanced typography */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="z-10 w-full md:w-3/5 text-left"
            >
              {/* Enhanced logo with sophisticated styling */}
              <motion.div 
                variants={itemVariants}
                className="mb-12 md:mb-16 w-28 md:w-32 h-28 md:h-32 relative"
              >
                <div className="flex items-center justify-start">
                  <div className="relative group">
                    {/* Multi-layered circle design */}
                    <div className="absolute -inset-3 border-2 border-black/5 rounded-full shadow-xl group-hover:border-black/15 transition-all duration-500"></div>
                    <div className="absolute -inset-1 border border-black/10 rounded-full shadow-lg bg-gradient-to-br from-white to-gray-50 group-hover:shadow-2xl transition-all duration-500"></div>
                    <div className="absolute -inset-0.5 bg-gradient-to-br from-gray-100 to-white rounded-full opacity-60"></div>
                    
                    <Image 
                      src="/WhatsApp_Image_2025-04-04_at_9.53.44_PM-removebg-preview.png" 
                      alt="Faigen" 
                      width={100} 
                      height={100} 
                      className="object-contain relative z-10 filter drop-shadow-lg group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                </div>
              </motion.div>
              
              {/* Enhanced dynamic text heading */}
              <motion.div variants={itemVariants} className="overflow-hidden mb-8 md:mb-16">
                <div className="relative">
                  <motion.h1 
                    key={currentTextIndex}
                    initial={{ y: 40, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: -40, opacity: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold tracking-tight leading-[1.1] md:leading-[0.9] lg:leading-[0.9]"
                    style={{ fontFamily: "'Montserrat', sans-serif" }}
                  >
                    <span className="block text-black">We Create</span>
                    <span className="block text-transparent bg-clip-text bg-gradient-to-r from-black via-gray-600 to-black relative">
                      {textVariants[currentTextIndex]}
                      {/* Subtle underline accent */}
                      <div className="absolute bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-black/20 to-transparent rounded-full"></div>
                    </span>
                    <span className="block text-black">Solutions.</span>
                  </motion.h1>
                </div>
              </motion.div>
              
              {/* Enhanced description with better typography */}
              <motion.p 
                variants={itemVariants}
                className="text-lg md:text-xl max-w-xl mb-12 md:mb-16 text-gray-700 leading-relaxed font-medium tracking-wide"
                style={{ fontFamily: "'Montserrat', sans-serif" }}
              >
                Building exceptional digital experiences that transform 
                how businesses operate in the modern world.
              </motion.p>
              
              {/* Enhanced call to action buttons */}
              <motion.div 
                variants={itemVariants}
                className="flex flex-wrap gap-5 mb-16 md:mb-0"
              >
                <motion.button
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-black text-white rounded-full font-semibold text-base transition-all duration-300 shadow-lg hover:shadow-2xl relative overflow-hidden group"
                  style={{ fontFamily: "'Montserrat', sans-serif" }}
                >
                  <span className="relative z-10">Get Started</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-gray-800 to-black opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 border-2 border-black/20 rounded-full font-semibold text-base transition-all duration-300 hover:border-black hover:bg-black hover:text-white relative overflow-hidden group"
                  style={{ fontFamily: "'Montserrat', sans-serif" }}
                >
                  <span className="relative z-10">Learn More</span>
                </motion.button>
              </motion.div>
            </motion.div>
            
            {/* Enhanced right side with sophisticated tech visualization */}
            <motion.div 
              className="w-full md:w-2/5 h-[400px] md:h-[550px] relative mt-8 md:mt-0"
              initial={{ opacity: 0, y: 30, x: 0 }}
              animate={{ opacity: 1, y: 0, x: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              <div className="absolute inset-0 overflow-hidden">
                {/* Sophisticated background pattern */}
                <div className="absolute inset-0 bg-gradient-to-br from-gray-50/30 via-white/50 to-gray-100/30 rounded-3xl"></div>
                
                {/* Enhanced central tech visualization */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <svg className="w-full h-full p-8 text-black" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
                    {/* Sophisticated circuit pattern */}
                    <motion.g
                      animate={{ rotate: 360 }}
                      transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
                    >
                      <circle cx="100" cy="100" r="70" stroke="currentColor" strokeWidth="0.5" strokeOpacity="0.2" fill="none" strokeDasharray="5,10" />
                      <circle cx="100" cy="100" r="55" stroke="currentColor" strokeWidth="0.5" strokeOpacity="0.3" fill="none" strokeDasharray="3,8" />
                    </motion.g>
                    
                    <motion.g
                      animate={{ rotate: -360 }}
                      transition={{ duration: 45, repeat: Infinity, ease: "linear" }}
                    >
                      <circle cx="100" cy="100" r="40" stroke="currentColor" strokeWidth="1" strokeOpacity="0.4" fill="none" strokeDasharray="2,6" />
                      <circle cx="100" cy="100" r="25" stroke="currentColor" strokeWidth="1" strokeOpacity="0.5" fill="none" />
                    </motion.g>
                    
                    {/* Central core */}
                    <circle cx="100" cy="100" r="8" stroke="currentColor" strokeWidth="2" fill="none" strokeOpacity="0.8" />
                    <circle cx="100" cy="100" r="3" fill="currentColor" fillOpacity="0.6" />
                    
                    {/* Connection lines with animation */}
                    <motion.g
                      initial={{ pathLength: 0 }}
                      animate={{ pathLength: 1 }}
                      transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
                    >
                      <path d="M20 100 H80 M120 100 H180" stroke="currentColor" strokeWidth="1.5" strokeOpacity="0.3" />
                      <path d="M100 20 V80 M100 120 V180" stroke="currentColor" strokeWidth="1.5" strokeOpacity="0.3" />
                    </motion.g>
                    
                    {/* Diagonal connections */}
                    <path d="M65 65 L135 135" stroke="currentColor" strokeWidth="0.8" strokeOpacity="0.25" strokeDasharray="4,4" />
                    <path d="M135 65 L65 135" stroke="currentColor" strokeWidth="0.8" strokeOpacity="0.25" strokeDasharray="4,4" />
                    
                    {/* Node points */}
                    <circle cx="100" cy="45" r="3" fill="currentColor" fillOpacity="0.6" />
                    <circle cx="100" cy="155" r="3" fill="currentColor" fillOpacity="0.6" />
                    <circle cx="45" cy="100" r="3" fill="currentColor" fillOpacity="0.6" />
                    <circle cx="155" cy="100" r="3" fill="currentColor" fillOpacity="0.6" />
                    
                    {/* Code brackets with enhanced styling */}
                    <path d="M35 65 L25 100 L35 135" stroke="currentColor" strokeWidth="2.5" strokeOpacity="0.7" strokeLinecap="round" />
                    <path d="M165 65 L175 100 L165 135" stroke="currentColor" strokeWidth="2.5" strokeOpacity="0.7" strokeLinecap="round" />
                    
                    {/* Sophisticated atom structure */}
                    <motion.g
                      animate={{ rotate: 360 }}
                      transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    >
                      <ellipse cx="100" cy="100" rx="18" ry="45" stroke="currentColor" strokeWidth="1.2" strokeOpacity="0.4" transform="rotate(30 100 100)" />
                      <ellipse cx="100" cy="100" rx="18" ry="45" stroke="currentColor" strokeWidth="1.2" strokeOpacity="0.4" transform="rotate(90 100 100)" />
                      <ellipse cx="100" cy="100" rx="18" ry="45" stroke="currentColor" strokeWidth="1.2" strokeOpacity="0.4" transform="rotate(150 100 100)" />
                    </motion.g>
                  </svg>
                </div>
                
                {/* Enhanced floating elements with sophisticated styling */}
                {/* HTML/Code tag */}
                <motion.div 
                  className="absolute top-1/4 left-1/4 px-4 py-3 border-2 border-black/30 rounded-xl bg-white/95 shadow-2xl z-20 backdrop-blur-sm"
                  animate={{ y: [0, -8, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                >
                  <div className="text-lg font-mono font-bold text-black">&lt;/&gt;</div>
                </motion.div>
                
                {/* JavaScript badge */}
                <motion.div 
                  className="absolute bottom-1/3 right-1/4 w-14 h-14 flex items-center justify-center border-2 border-amber-400/60 rounded-xl bg-gradient-to-br from-amber-50 to-yellow-100 shadow-2xl z-20 backdrop-blur-sm"
                  animate={{ y: [0, 10, 0], rotate: [0, 5, 0] }}
                  transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                >
                  <div className="text-base font-mono font-bold text-amber-800">JS</div>
                </motion.div>
                
                {/* Database icon */}
                <motion.div 
                  className="absolute top-1/2 right-1/3 w-12 h-12 border-2 border-blue-400/60 rounded-lg bg-gradient-to-br from-blue-50 to-blue-100 shadow-2xl z-20 flex flex-col items-center justify-center backdrop-blur-sm"
                  animate={{ y: [0, -6, 0] }}
                  transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 2 }}
                >
                  <div className="w-6 h-1.5 border-t-2 border-blue-600/70 rounded-t-md"></div>
                  <div className="w-7 h-5 border-2 border-blue-600/70 border-t-0 rounded-b-sm"></div>
                  <div className="w-6 h-1 border-t border-blue-600/70"></div>
                </motion.div>
                
                {/* Git branch */}
                <motion.div 
                  className="absolute top-1/3 right-1/5 w-14 h-14 flex items-center justify-center border-2 border-gray-400/60 rounded-xl bg-gradient-to-br from-gray-50 to-gray-100 shadow-2xl z-20 backdrop-blur-sm"
                  animate={{ y: [0, 8, 0], rotate: [0, -3, 0] }}
                  transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 3 }}
                >
                  <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" className="text-gray-700">
                    <circle cx="12" cy="7" r="3" />
                    <circle cx="17" cy="17" r="3" />
                    <circle cx="7" cy="17" r="3" />
                    <path d="M12 10v3.5a1.5 1.5 0 0 0 1.5 1.5h2" />
                  </svg>
                </motion.div>
                
                {/* Arrow function */}
                <motion.div 
                  className="absolute bottom-1/4 left-1/3 px-4 py-3 border-2 border-purple-400/60 rounded-xl bg-gradient-to-br from-purple-50 to-purple-100 shadow-2xl z-20 backdrop-blur-sm"
                  animate={{ y: [0, -7, 0] }}
                  transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
                >
                  <div className="text-sm font-mono font-bold text-purple-800">() =&gt;</div>
                </motion.div>
                
                {/* React atom */}
                <motion.div 
                  className="absolute top-1/6 right-1/4 w-12 h-12 flex items-center justify-center border-2 border-cyan-400/60 rounded-full bg-gradient-to-br from-cyan-50 to-cyan-100 shadow-2xl z-20 backdrop-blur-sm"
                  animate={{ 
                    y: [0, -10, 0],
                    rotate: [0, 360, 0]
                  }}
                  transition={{ 
                    y: { duration: 5, repeat: Infinity, ease: "easeInOut", delay: 2.5 },
                    rotate: { duration: 8, repeat: Infinity, ease: "linear" }
                  }}
                >
                  <div className="text-lg">⚛️</div>
                </motion.div>
                
                {/* CSS badge */}
                <motion.div 
                  className="absolute bottom-1/5 left-1/5 w-12 h-12 flex items-center justify-center border-2 border-pink-400/60 rounded-lg bg-gradient-to-br from-pink-50 to-pink-100 shadow-2xl z-20 backdrop-blur-sm"
                  animate={{ y: [0, 6, 0] }}
                  transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                >
                  <div className="text-xs font-bold text-pink-800">CSS</div>
                </motion.div>
              </div>
            </motion.div>
          </>
        )}
      </main>
      
      {/* Enhanced global styles */}
      <style jsx global>{`
        @keyframes spin-slow {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        
        @keyframes reverse-spin {
          0% { transform: rotate(360deg); }
          100% { transform: rotate(0deg); }
        }
        
        @keyframes float {
          0% { transform: translateY(0px) translateX(0px); }
          50% { transform: translateY(-12px) translateX(4px); }
          100% { transform: translateY(0px) translateX(0px); }
        }
        
        @keyframes pulse-glow {
          0%, 100% { box-shadow: 0 0 5px rgba(0,0,0,0.1); }
          50% { box-shadow: 0 0 20px rgba(0,0,0,0.2), 0 0 30px rgba(0,0,0,0.1); }
        }
        
        .animate-spin-slow {
          animation: spin-slow 30s linear infinite;
        }
        
        .animate-reverse-spin {
          animation: reverse-spin 25s linear infinite;
        }
        
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        
        .animate-pulse-glow {
          animation: pulse-glow 4s ease-in-out infinite;
        }
        
        /* Smooth scrolling for better UX */
        html {
          scroll-behavior: smooth;
        }
        
        /* Enhanced backdrop blur support */
        .backdrop-blur-xl {
          backdrop-filter: blur(16px);
          -webkit-backdrop-filter: blur(16px);
        }
        
        /* Responsive animation adjustments */
        @media (max-width: 768px) {
          @keyframes float {
            0% { transform: translateY(0px) translateX(0px); }
            50% { transform: translateY(-8px) translateX(2px); }
            100% { transform: translateY(0px) translateX(0px); }
          }
        }
        
        /* Enhanced typography */
        body {
          font-family: 'Montserrat', sans-serif;
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
        }
      `}</style>
    </>
  );
};

export default HomeSection;