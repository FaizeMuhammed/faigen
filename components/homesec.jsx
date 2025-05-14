'use client'
import { useEffect, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

const HomeSection = () => {
  const [mounted, setMounted] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [showNav, setShowNav] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const textVariants = ["Innovative", "Powerful", "Seamless"];
  
  // Add link to Montserrat font in the head section
  useEffect(() => {
    const linkElement = document.createElement('link');
    linkElement.rel = 'stylesheet';
    linkElement.href = 'https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;600;700;800;900&display=swap';
    document.head.appendChild(linkElement);
    
    return () => {
      document.head.removeChild(linkElement);
    };
  }, []);
  
  useEffect(() => {
    setMounted(true);
    
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Check if we've scrolled down from our last position and we're not at the top
      if (currentScrollY > lastScrollY && currentScrollY > 20) {
        setShowNav(true);
      } else if (currentScrollY <= 20) {
        // Hide nav when at the top of the page
        setShowNav(false);
      }
      
      // Update scrolled state for styling
      setScrolled(currentScrollY > 20);
      
      // Update our last scroll position
      setLastScrollY(currentScrollY);
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
  }, [lastScrollY]);

  useEffect(() => {
    // Prevent scrolling when mobile menu is open
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
      // Show navigation when mobile menu is open regardless of scroll position
      setShowNav(true);
    } else {
      document.body.style.overflow = '';
      // When closing mobile menu, check if we should hide nav based on scroll position
      setShowNav(window.scrollY > 20);
    }
    
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);
  
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

  // Mobile menu animation variants
  const menuVariants = {
    closed: {
      opacity: 0,
      x: "100%",
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 40
      }
    },
    open: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 40,
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const menuItemVariants = {
    closed: { x: 20, opacity: 0 },
    open: { 
      x: 0, 
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 20
      }
    }
  };

  // Nav animation variants
  const navVariants = {
    hidden: { y: -100, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { 
        duration: 0.4, 
        ease: "easeOut" 
      }
    }
  };
  
  return (
    <>
      {/* Navigation - Only visible when scrolling down */}
      <AnimatePresence>
        {(showNav || mobileMenuOpen) && (
          <motion.nav 
            key="navigation"
            variants={navVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
            className={`fixed w-full z-50 py-3 ${scrolled ? 'backdrop-blur-lg shadow-sm' : 'bg-transparent'}`}
          >
            <div className="flex justify-between items-center px-6 md:px-12 lg:px-20 max-w-7xl mx-auto w-full">
              <div className="w-32 h-12 relative scale-90">
                <div className="absolute inset-0 flex items-center">
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                  >
                    {/* Logo in the nav */}
                    <Image 
                      src="/WhatsApp_Image_2025-04-04_at_9.53.44_PM-removebg-preview.png" 
                      alt="Faigen" 
                      width={80} 
                      height={48} 
                      className="object-contain"
                    />
                  </motion.div>
                </div>
              </div>
              
              <motion.div 
                className="flex items-center space-x-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.6 }}
              >
                <div className="hidden md:flex space-x-10 mr-10">
                  {["Products", "Solutions", "Resources", "Pricing"].map((item, index) => (
                    <motion.a 
                      key={item} 
                      href="#" 
                      className="relative text-sm font-medium text-black transition-colors duration-300 group"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.5 + index * 0.1 }}
                      whileHover={{ y: -2 }}
                    >
                      {item}
                      <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-black transition-all duration-300 group-hover:w-full"></span>
                    </motion.a>
                  ))}
                </div>
                
                <motion.button 
                  className="px-6 py-2.5 text-sm font-medium border border-black rounded-full hover:bg-black hover:text-white transition-all duration-300 transform hover:scale-105 hidden md:block"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Contact
                </motion.button>
                
                <motion.button 
                  className="p-2 md:hidden text-black relative z-50"
                  whileTap={{ scale: 0.9 }}
                  onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                  aria-label="Toggle mobile menu"
                >
                  <AnimatePresence mode="wait">
                    {mobileMenuOpen ? (
                      <motion.svg 
                        key="close"
                        xmlns="http://www.w3.org/2000/svg" 
                        fill="none" 
                        viewBox="0 0 24 24" 
                        stroke="currentColor" 
                        className="w-6 h-6"
                        initial={{ opacity: 0, rotate: -90 }}
                        animate={{ opacity: 1, rotate: 0 }}
                        exit={{ opacity: 0, rotate: 90 }}
                        transition={{ duration: 0.3 }}
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      </motion.svg>
                    ) : (
                      <motion.svg 
                        key="menu"
                        xmlns="http://www.w3.org/2000/svg" 
                        fill="none" 
                        viewBox="0 0 24 24" 
                        stroke="currentColor" 
                        className="w-6 h-6"
                        initial={{ opacity: 0, rotate: 90 }}
                        animate={{ opacity: 1, rotate: 0 }}
                        exit={{ opacity: 0, rotate: -90 }}
                        transition={{ duration: 0.3 }}
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                      </motion.svg>
                    )}
                  </AnimatePresence>
                </motion.button>
              </motion.div>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>

      {/* Mobile menu overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setMobileMenuOpen(false)}
          />
        )}
      </AnimatePresence>

      {/* Mobile navigation menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            className="fixed top-0 right-0 w-4/5 h-full bg-white z-40 shadow-xl flex flex-col overflow-hidden"
            variants={menuVariants}
            initial="closed"
            animate="open"
            exit="closed"
          >
            <div className="flex flex-col p-8 space-y-8 h-full">
              <div className="mt-16">
                <motion.div
                  variants={menuItemVariants}
                  className="w-28 h-28 relative mx-auto mb-8"
                >
                  <Image 
                    src="/WhatsApp_Image_2025-04-04_at_9.53.44_PM-removebg-preview.png" 
                    alt="Faigen" 
                    width={100} 
                    height={100} 
                    className="object-contain"
                  />
                </motion.div>
              
                {["Products", "Solutions", "Resources", "Pricing"].map((item) => (
                  <motion.a 
                    key={item}
                    variants={menuItemVariants}
                    href="#" 
                    className="block py-4 text-xl font-semibold border-b border-gray-100 text-black hover:text-gray-700 transition-colors"
                  >
                    {item}
                  </motion.a>
                ))}
              </div>
              
              <motion.div variants={menuItemVariants} className="mt-auto">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full py-3 bg-black text-white rounded-lg font-medium text-base transition-all duration-300"
                >
                  Contact Us
                </motion.button>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Hero Section - Using flex-col on mobile and flex-row on desktop with better spacing */}
      <main className="flex flex-col md:flex-row items-start md:items-center justify-between px-6 md:px-12 lg:px-20 py-16 md:py-28 min-h-screen max-w-7xl mx-auto w-full">
        {mounted && (
          <>
            {/* Left content with improved spacing */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="z-10 w-full md:w-3/5 text-left"
            >
              {/* Logo with better positioning */}
              <motion.div 
                variants={itemVariants}
                className="mb-12 md:mb-16 w-28 md:w-32 h-28 md:h-32 relative"
              >
                <div className="flex items-center justify-start">
                  <div className="relative">
                    {/* Enhanced circle around logo */}
                    <div className="absolute -inset-1 border border-black/15 rounded-full shadow-sm"></div>
                    {/* Logo */}
                    <Image 
                      src="/WhatsApp_Image_2025-04-04_at_9.53.44_PM-removebg-preview.png" 
                      alt="Faigen" 
                      width={100} 
                      height={100} 
                      className="object-contain relative z-10"
                    />
                  </div>
                </div>
              </motion.div>
              
              {/* Dynamic text heading with increased spacing and better sizing */}
              <motion.div variants={itemVariants} className="overflow-hidden mb-8 md:mb-16">
                <div className="">
                  <motion.h1 
                    key={currentTextIndex}
                    initial={{ y: 40, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: -40, opacity: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold tracking-tight leading-[1.1] md:leading-[0.9] lg:leading-[0.9]"
                    style={{ fontFamily: "'Montserrat', sans-serif" }}
                  >
                    <span className="block">We Create</span>
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-black via-gray-700 to-black">
                      {textVariants[currentTextIndex]}
                    </span>
                    <span className="block">Solutions.</span>
                  </motion.h1>
                </div>
              </motion.div>
              
              {/* Enhanced paragraph now visible on all screens with better width and spacing */}
              <motion.p 
                variants={itemVariants}
                className="text-lg md:text-xl max-w-xl mb-12 md:mb-16 text-black/80 leading-relaxed"
              >
                Building exceptional digital experiences that transform 
                how businesses operate in the modern world.
              </motion.p>
              
              {/* Call to action buttons */}
              {/* <motion.div 
                variants={itemVariants}
                className="flex flex-wrap gap-5 mb-16 md:mb-0"
              >
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-3 bg-black text-white rounded-full font-medium text-base transition-all duration-300"
                >
                  Get Started
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-3 border border-black/30 rounded-full font-medium text-base transition-all duration-300 hover:border-black/70"
                >
                  Learn More
                </motion.button>
              </motion.div> */}
            </motion.div>
            
            {/* Right side - Tech image frame with improved positioning and dimensions */}
            <motion.div 
              className="w-full md:w-2/5 h-[400px] md:h-[550px] relative mt-8 md:mt-0"
              initial={{ opacity: 0, y: 30, x: 0 }}
              animate={{ opacity: 1, y: 0, x: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              <div className="absolute inset-0 border border-black/10 rounded-xl overflow-hidden backdrop-blur-sm bg-white/30 z-10 shadow-lg">
                <div className="absolute inset-0 bg-gradient-to-br from-transparent to-black/5"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  {/* Abstract technology elements with coding icons */}
                  <svg className="w-full h-full p-8 text-black" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
                    {/* Circuit-like pattern */}
                    <path d="M20 100 H70 M130 100 H180" stroke="currentColor" strokeWidth="1" strokeOpacity="0.2" />
                    <path d="M100 20 V70 M100 130 V180" stroke="currentColor" strokeWidth="1" strokeOpacity="0.2" />
                    <circle cx="100" cy="100" r="50" stroke="currentColor" strokeWidth="1" strokeOpacity="0.3" fill="none" />
                    <circle cx="100" cy="100" r="30" stroke="currentColor" strokeWidth="1" strokeOpacity="0.4" fill="none" />
                    <circle cx="100" cy="100" r="10" stroke="currentColor" strokeWidth="1" fill="none" />
                    
                    {/* Connection points */}
                    <circle cx="100" cy="50" r="4" fill="currentColor" fillOpacity="0.5" />
                    <circle cx="100" cy="150" r="4" fill="currentColor" fillOpacity="0.5" />
                    <circle cx="50" cy="100" r="4" fill="currentColor" fillOpacity="0.5" />
                    <circle cx="150" cy="100" r="4" fill="currentColor" fillOpacity="0.5" />
                    
                    {/* Diagonal lines */}
                    <path d="M60 60 L140 140" stroke="currentColor" strokeWidth="1" strokeOpacity="0.3" />
                    <path d="M140 60 L60 140" stroke="currentColor" strokeWidth="1" strokeOpacity="0.3" />
                    
                    {/* Small dots */}
                    <circle cx="70" cy="70" r="2" fill="currentColor" fillOpacity="0.7" />
                    <circle cx="130" cy="130" r="2" fill="currentColor" fillOpacity="0.7" />
                    <circle cx="130" cy="70" r="2" fill="currentColor" fillOpacity="0.7" />
                    <circle cx="70" cy="130" r="2" fill="currentColor" fillOpacity="0.7" />
                    
                    {/* Code brackets - Left */}
                    <path d="M40 60 L30 100 L40 140" stroke="currentColor" strokeWidth="1.5" strokeOpacity="0.6" />
                    
                    {/* Code brackets - Right */}
                    <path d="M160 60 L170 100 L160 140" stroke="currentColor" strokeWidth="1.5" strokeOpacity="0.6" />
                    
                    {/* React-like atom icon */}
                    <ellipse cx="100" cy="100" rx="15" ry="40" stroke="currentColor" strokeWidth="1" strokeOpacity="0.4" transform="rotate(30 100 100)" />
                    <ellipse cx="100" cy="100" rx="15" ry="40" stroke="currentColor" strokeWidth="1" strokeOpacity="0.4" transform="rotate(90 100 100)" />
                    <ellipse cx="100" cy="100" rx="15" ry="40" stroke="currentColor" strokeWidth="1" strokeOpacity="0.4" transform="rotate(150 100 100)" />
                  </svg>
                </div>
                
                {/* Enhanced floating coding elements with better shadow and animations */}
                {/* HTML tag */}
                <div className="absolute top-1/4 left-1/4 px-3 py-2 border-2 border-black/50 rounded-lg bg-white/90 shadow-lg z-20 animate-float" style={{ animationDelay: '0s' }}>
                  <div className="text-base font-mono font-bold text-black">&lt;/&gt;</div>
                </div>
                
                {/* JavaScript icon */}
                <div className="absolute bottom-1/3 right-1/4 w-12 h-12 flex items-center justify-center border-2 border-yellow-500/80 rounded-lg bg-yellow-100/90 shadow-lg z-20 animate-float" style={{ animationDelay: '1s' }}>
                  <div className="text-sm font-mono font-bold text-yellow-800">JS</div>
                </div>
                
                {/* Database icon */}
                <div className="absolute top-1/2 right-1/3 w-11 h-11 border-2 border-blue-500/80 rounded-md bg-blue-100/90 shadow-lg z-20 flex flex-col items-center justify-center animate-float" style={{ animationDelay: '2s' }}>
                  <div className="w-5 h-1 border-t border-blue-600/70 rounded-t-sm"></div>
                  <div className="w-6 h-4 border border-blue-600/70 border-t-0"></div>
                  <div className="w-5 h-1 border-t border-blue-600/70 rounded-b-sm"></div>
                </div>
                
                {/* Git branch icon */}
                <div className="absolute top-1/3 right-1/5 w-12 h-12 flex items-center justify-center border-2 border-gray-500/80 rounded-lg bg-white/90 shadow-lg z-20 animate-float" style={{ animationDelay: '3s' }}>
                  <svg viewBox="0 0 24 24" width="22" height="22" stroke="currentColor" strokeWidth="2" fill="none">
                    <circle cx="12" cy="7" r="3" />
                    <circle cx="17" cy="17" r="3" />
                    <circle cx="7" cy="17" r="3" />
                    <path d="M12 10v3.5a1.5 1.5 0 0 0 1.5 1.5h2" />
                  </svg>
                </div>
                
                {/* Code function icon */}
                <div className="absolute bottom-1/4 left-1/3 px-3 py-2 border-2 border-gray-500/80 rounded-lg bg-white/90 shadow-lg z-20 animate-float" style={{ animationDelay: '1.5s' }}>
                  <div className="text-sm font-mono font-bold">() =&gt;</div>
                </div>
                
                {/* React/Framework icon */}
                <div className="absolute top-1/6 right-1/4 w-11 h-11 flex items-center justify-center border-2 border-cyan-500/80 rounded-full bg-cyan-100/90 shadow-lg z-20 animate-float" style={{ animationDelay: '2.5s' }}>
                  <div className="text-base font-bold">⚛️</div>
                </div>
                
                {/* CSS icon */}
                <div className="absolute bottom-1/5 left-1/5 w-11 h-11 flex items-center justify-center border-2 border-purple-500/80 rounded-lg bg-purple-100/90 shadow-lg z-20 animate-float" style={{ animationDelay: '0.5s' }}>
                  <div className="text-sm font-bold text-purple-800">CSS</div>
                </div>
              </div>
              
              {/* Enhanced feature highlight with better shadow and positioning */}
              <div className="absolute -bottom-4 -right-4 md:-bottom-6 md:-right-6 p-4 bg-white border border-black/10 rounded-lg shadow-xl z-10">
                <div className="text-sm font-semibold">Client Success Rate</div>
                <div className="mt-1 flex items-center gap-1 text-xl md:text-2xl font-bold">
                  98%
                  <span className="text-xs text-black/60 font-normal ml-1">satisfaction</span>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </main>
      
      {/* Enhanced CSS for animations */}
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
          50% { transform: translateY(-10px) translateX(3px); }
          100% { transform: translateY(0px) translateX(0px); }
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
        
        /* Responsive animation adjustments */
        @media (max-width: 768px) {
          @keyframes float {
            0% { transform: translateY(0px) translateX(0px); }
            50% { transform: translateY(-7px) translateX(2px); }
            100% { transform: translateY(0px) translateX(0px); }
          }
        }
      `}</style>
    </>
  );
};

export default HomeSection;