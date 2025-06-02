'use client'
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

const HomeSection = () => {
  const [mounted, setMounted] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHoveringText, setIsHoveringText] = useState(false);
  const textRef = React.useRef(null);
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
    
    // Mouse tracking for torch effect
    const handleMouseMove = (e) => {
      if (textRef.current && isHoveringText) {
        const rect = textRef.current.getBoundingClientRect();
        setMousePosition({ 
          x: e.clientX - rect.left, 
          y: e.clientY - rect.top 
        });
      }
    };
    
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("mousemove", handleMouseMove);
    
    // Text rotation effect
    const textInterval = setInterval(() => {
      setCurrentTextIndex((prev) => (prev + 1) % textVariants.length);
    }, 3000);
    
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("mousemove", handleMouseMove);
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
    <section className="relative min-h-screen bg-white overflow-hidden isolate">
      {/* Curved Background Elements - Contained within section */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Primary curved background */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="absolute -top-1/2 -right-1/4 w-[100vw] h-[100vh] transform rotate-12"
        >
          <div className="w-full h-full bg-gradient-to-br from-gray-50 via-white to-gray-100 rounded-[40%] opacity-60" 
               style={{ 
                 boxShadow: '0 30px 60px -15px rgba(59, 130, 246, 0.25), 0 0 120px rgba(59, 130, 246, 0.18)' 
               }}></div>
        </motion.div>
        
        {/* Secondary curved element */}
        <motion.div
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 2, delay: 0.5, ease: "easeOut" }}
          className="absolute -bottom-1/3 -left-1/4 w-[80vw] h-[60vh] transform -rotate-45"
        >
          <div className="w-full h-full bg-gradient-to-tr from-black/5 via-gray-50 to-white rounded-[50%] opacity-40"
               style={{ 
                 boxShadow: '0 25px 50px -12px rgba(59, 130, 246, 0.20), 0 0 100px rgba(59, 130, 246, 0.15)' 
               }}></div>
        </motion.div>
        
        {/* Tertiary accent curves */}
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1.8, delay: 1, ease: "easeOut" }}
          className="absolute top-1/4 right-0 w-[50vw] h-[30vh] transform rotate-45"
        >
          <div className="w-full h-full bg-gradient-to-l from-gray-900/10 via-transparent to-transparent rounded-[60%] opacity-30"
               style={{ 
                 boxShadow: '0 20px 40px -10px rgba(59, 130, 246, 0.16), 0 0 80px rgba(59, 130, 246, 0.12)' 
               }}></div>
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
          style={{ 
            boxShadow: '0 12px 24px -6px rgba(59, 130, 246, 0.14)' 
          }}
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
          style={{ 
            boxShadow: '0 10px 20px -5px rgba(59, 130, 246, 0.12)' 
          }}
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

      {/* Hero Section - Back to original spacious layout */}
      <main className="relative flex flex-col md:flex-row items-start md:items-center justify-between px-6 md:px-12 lg:px-20 py-16 md:py-28 min-h-screen max-w-7xl mx-auto w-full">
        {mounted && (
          <>
            {/* Left content with original spacing */}
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
            
            {/* Enhanced right side with business services visualization */}
            <motion.div 
              className="w-full md:w-2/5 h-[300px] sm:h-[350px] md:h-[550px] relative mt-6 md:mt-0"
              initial={{ opacity: 0, y: 30, x: 0 }}
              animate={{ opacity: 1, y: 0, x: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              <div className="absolute inset-0 overflow-hidden">
                {/* Sophisticated background pattern */}
                <div className="absolute inset-0 bg-gradient-to-br from-gray-50/30 via-white/50 to-gray-100/30 rounded-2xl md:rounded-3xl"></div>
                
                {/* Enhanced central tech visualization */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <svg className="w-full h-full p-4 sm:p-6 md:p-8 text-black" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
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
                    
                    {/* Digital connection lines */}
                    <path d="M35 65 L25 100 L35 135" stroke="currentColor" strokeWidth="2.5" strokeOpacity="0.7" strokeLinecap="round" />
                    <path d="M165 65 L175 100 L165 135" stroke="currentColor" strokeWidth="2.5" strokeOpacity="0.7" strokeLinecap="round" />
                    
                    {/* Business network structure */}
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
                
                {/* Enhanced floating business service elements - Icons only */}
                
                {/* Web Development */}
                <motion.div 
                  className="absolute top-1/4 left-1/6 sm:left-1/4 w-10 h-10 sm:w-12 md:w-14 sm:h-12 md:h-14 flex items-center justify-center border-2 border-blue-400/60 rounded-lg sm:rounded-xl bg-gradient-to-br from-blue-50 to-blue-100 shadow-xl sm:shadow-2xl z-20 backdrop-blur-sm"
                  animate={{ y: [0, -8, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                >
                  <svg className="w-5 h-5 sm:w-6 md:w-7 md:h-7 text-blue-700" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M3 3h18v18H3V3zm2 2v14h14V5H5zm2 2h10v2H7V7zm0 4h10v2H7v-2zm0 4h7v2H7v-2z"/>
                  </svg>
                </motion.div>
                
                {/* Digital Marketing */}
                <motion.div 
                  className="absolute bottom-1/3 right-1/6 sm:right-1/4 w-10 h-10 sm:w-12 md:w-14 sm:h-12 md:h-14 flex items-center justify-center border-2 border-green-400/60 rounded-lg sm:rounded-xl bg-gradient-to-br from-green-50 to-green-100 shadow-xl sm:shadow-2xl z-20 backdrop-blur-sm"
                  animate={{ y: [0, 10, 0], rotate: [0, 5, 0] }}
                  transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                >
                  <svg className="w-5 h-5 sm:w-6 md:w-7 md:h-7 text-green-700" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2l2.4 7.4h7.6l-6 4.6 2.4 7.4-6-4.6-6 4.6 2.4-7.4-6-4.6h7.6z"/>
                  </svg>
                </motion.div>
                
                {/* App Development */}
                <motion.div 
                  className="absolute top-1/2 right-1/4 sm:right-1/3 w-10 h-10 sm:w-12 md:w-14 sm:h-12 md:h-14 flex items-center justify-center border-2 border-purple-400/60 rounded-lg sm:rounded-xl bg-gradient-to-br from-purple-50 to-purple-100 shadow-xl sm:shadow-2xl z-20 backdrop-blur-sm"
                  animate={{ y: [0, -6, 0] }}
                  transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 2 }}
                >
                  <svg className="w-5 h-5 sm:w-6 md:w-7 md:h-7 text-purple-700" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M7 1h10c1.1 0 2 .9 2 2v18c0 1.1-.9 2-2 2H7c-1.1 0-2-.9-2-2V3c0-1.1.9-2 2-2zm8 20V3H9v18h6z"/>
                  </svg>
                </motion.div>
                
                {/* E-Commerce */}
                <motion.div 
                  className="absolute top-1/3 right-1/6 sm:right-1/5 w-10 h-10 sm:w-12 md:w-14 sm:h-12 md:h-14 flex items-center justify-center border-2 border-orange-400/60 rounded-lg sm:rounded-xl bg-gradient-to-br from-orange-50 to-orange-100 shadow-xl sm:shadow-2xl z-20 backdrop-blur-sm"
                  animate={{ y: [0, 8, 0], rotate: [0, -3, 0] }}
                  transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 3 }}
                >
                  <svg className="w-5 h-5 sm:w-6 md:w-7 md:h-7 text-orange-700" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M7 4V2a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1v2h3a1 1 0 0 1 1 1v15a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1h3zM9 3v1h6V3H9zm-4 3v13h14V6H5z"/>
                  </svg>
                </motion.div>
                
                {/* SEO Services */}
                <motion.div 
                  className="absolute bottom-1/4 left-1/4 sm:left-1/3 w-10 h-10 sm:w-12 md:w-14 sm:h-12 md:h-14 flex items-center justify-center border-2 border-teal-400/60 rounded-lg sm:rounded-xl bg-gradient-to-br from-teal-50 to-teal-100 shadow-xl sm:shadow-2xl z-20 backdrop-blur-sm"
                  animate={{ y: [0, -7, 0] }}
                  transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
                >
                  <svg className="w-5 h-5 sm:w-6 md:w-7 md:h-7 text-teal-700" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/>
                  </svg>
                </motion.div>
                
                {/* UI/UX Design */}
                <motion.div 
                  className="absolute top-1/6 right-1/4 w-10 h-10 sm:w-12 md:w-14 sm:h-12 md:h-14 flex items-center justify-center border-2 border-pink-400/60 rounded-lg sm:rounded-xl bg-gradient-to-br from-pink-50 to-pink-100 shadow-xl sm:shadow-2xl z-20 backdrop-blur-sm"
                  animate={{ 
                    y: [0, -10, 0],
                    rotate: [0, 360, 0]
                  }}
                  transition={{ 
                    y: { duration: 5, repeat: Infinity, ease: "easeInOut", delay: 2.5 },
                    rotate: { duration: 8, repeat: Infinity, ease: "linear" }
                  }}
                >
                  <svg className="w-5 h-5 sm:w-6 md:w-7 md:h-7 text-pink-700" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                  </svg>
                </motion.div>
                
                {/* Consulting */}
                <motion.div 
                  className="absolute bottom-1/5 left-1/6 sm:left-1/5 w-10 h-10 sm:w-12 md:w-14 sm:h-12 md:h-14 flex items-center justify-center border-2 border-gray-400/60 rounded-lg sm:rounded-xl bg-gradient-to-br from-gray-50 to-gray-100 shadow-xl sm:shadow-2xl z-20 backdrop-blur-sm"
                  animate={{ y: [0, 6, 0] }}
                  transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                >
                  <svg className="w-5 h-5 sm:w-6 md:w-7 md:h-7 text-gray-700" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 3l8 5v7c0 5.55-3.84 9.74-9 9.95-5.16-.21-9-4.4-9-9.95V8l8-5z"/>
                  </svg>
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
        
        /* Torch effect styles */
        .torch-text {
          transition: all 0.1s ease-out;
          cursor: none;
        }
        
        .torch-effect {
          transition: background 0.1s ease-out;
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
        
        /* Custom cursor for torch effect */
        .torch-text:hover {
          cursor: none;
        }
      `}</style>
    </section>
  );
};

export default HomeSection;