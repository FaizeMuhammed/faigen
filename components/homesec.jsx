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
  const [showContactPopup, setShowContactPopup] = useState(false);
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

  // Additional effect to handle body scroll when contact popup is open
  useEffect(() => {
    if (showContactPopup) {
      document.body.style.overflow = 'hidden';
    } else {
      // Only re-enable scrolling if mobile menu isn't open
      if (!mobileMenuOpen) {
        document.body.style.overflow = '';
      }
    }
    
    return () => {
      if (!mobileMenuOpen) {
        document.body.style.overflow = '';
      }
    };
  }, [showContactPopup, mobileMenuOpen]);
  
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

  // Function to handle logo click - refresh page
  const handleLogoClick = () => {
    window.location.reload();
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
            className={`fixed w-full z-50 py-3 ${scrolled ? 'shadow-lg bg-black/30 border-b border-white/10' : 'bg-transparent'}`}
          >
            <div className="flex justify-between items-center px-6 md:px-12 lg:px-20 max-w-7xl mx-auto w-full">
              <div className="w-32 h-12 relative scale-90 cursor-pointer" onClick={handleLogoClick}>
                <div className="absolute inset-0 flex items-center">
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                  >
                    {/* Clickable Logo in the nav */}
                    <Image 
                      src="/WhatsApp_Image_2025-04-04_at_9.53.44_PM-removebg-preview.png" 
                      alt="Faigen" 
                      width={80} 
                      height={48} 
                      className="object-contain brightness-0 invert"
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
                      className="relative text-sm font-medium text-white transition-colors duration-300 group hover:text-gray-300"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.5 + index * 0.1 }}
                      whileHover={{ y: -2 }}
                    >
                      {item}
                      <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
                    </motion.a>
                  ))}
                </div>
                
                <motion.button 
                  className="px-6 py-2.5 text-sm font-medium border border-white/30 text-white rounded-full hover:bg-white hover:text-black transition-all duration-300 transform hover:scale-105 hidden md:block"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setShowContactPopup(true)}
                >
                  Contact
                </motion.button>
                
                <motion.button 
                  className="p-2 md:hidden text-white relative z-50"
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
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
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
            className="fixed top-0 right-0 w-4/5 h-full bg-gray-900/95 backdrop-blur-lg border-l border-white/10 z-40 shadow-xl flex flex-col overflow-hidden"
            variants={menuVariants}
            initial="closed"
            animate="open"
            exit="closed"
          >
            <div className="flex flex-col p-8 space-y-8 h-full">
              <div className="mt-16">
                <motion.div
                  variants={menuItemVariants}
                  className="w-28 h-28 relative mx-auto mb-8 cursor-pointer"
                  onClick={handleLogoClick}
                >
                  <Image 
                    src="/WhatsApp_Image_2025-04-04_at_9.53.44_PM-removebg-preview.png" 
                    alt="Faigen" 
                    width={100} 
                    height={100} 
                    className="object-contain brightness-0 invert"
                  />
                </motion.div>
              
                {["Products", "Solutions", "Resources", "Pricing"].map((item) => (
                  <motion.a 
                    key={item}
                    variants={menuItemVariants}
                    href="#" 
                    className="block py-4 text-xl font-semibold border-b border-white/10 text-white hover:text-gray-300 transition-colors"
                  >
                    {item}
                  </motion.a>
                ))}
              </div>
              
              <motion.div variants={menuItemVariants} className="mt-auto">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full py-3 bg-white text-black rounded-lg font-medium text-base transition-all duration-300 hover:bg-gray-200"
                  onClick={() => {
                    setMobileMenuOpen(false);
                    setTimeout(() => setShowContactPopup(true), 100);
                  }}
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
                className="mb-12 md:mb-16 w-28 md:w-32 h-28 md:h-32 relative cursor-pointer"
                onClick={handleLogoClick}
              >
                <div className="flex items-center justify-start">
                  <div className="relative">
                    {/* Enhanced circle around logo */}
                    <div className="absolute -inset-1 border border-white/20 rounded-full shadow-lg"></div>
                    {/* Logo */}
                    <Image 
                      src="/WhatsApp_Image_2025-04-04_at_9.53.44_PM-removebg-preview.png" 
                      alt="Faigen" 
                      width={100} 
                      height={100} 
                      className="object-contain relative z-10 brightness-0 invert"
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
                    className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold tracking-tight leading-[1.1] md:leading-[0.9] lg:leading-[0.9] text-white"
                    style={{ fontFamily: "'Montserrat', sans-serif" }}
                  >
                    <span className="block">We Create</span>
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-300 to-white">
                      {textVariants[currentTextIndex]}
                    </span>
                    <span className="block">Solutions.</span>
                  </motion.h1>
                </div>
              </motion.div>
              
              {/* Enhanced paragraph now visible on all screens with better width and spacing */}
              <motion.p 
                variants={itemVariants}
                className="text-lg md:text-xl max-w-xl mb-12 md:mb-16 text-gray-300 leading-relaxed"
              >
                Building exceptional digital experiences that transform 
                how businesses operate in the modern world.
              </motion.p>
              
              
            </motion.div>
            
            {/* Right side - Tech image frame with improved positioning and dimensions */}
            <motion.div 
              className="w-full md:w-2/5 h-[400px] md:h-[550px] relative mt-8 md:mt-0"
              initial={{ opacity: 0, y: 30, x: 0 }}
              animate={{ opacity: 1, y: 0, x: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              <div className="absolute inset-0 ">
                <div className="absolute inset-0 "></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  {/* Abstract technology elements with coding icons */}
                  <svg className="w-full h-full p-8 text-white" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
                    {/* Circuit-like pattern */}
                    <path d="M20 100 H70 M130 100 H180" stroke="currentColor" strokeWidth="1" strokeOpacity="0.4" />
                    <path d="M100 20 V70 M100 130 V180" stroke="currentColor" strokeWidth="1" strokeOpacity="0.4" />
                    <circle cx="100" cy="100" r="50" stroke="currentColor" strokeWidth="1" strokeOpacity="0.5" fill="none" />
                    <circle cx="100" cy="100" r="30" stroke="currentColor" strokeWidth="1" strokeOpacity="0.6" fill="none" />
                    <circle cx="100" cy="100" r="10" stroke="currentColor" strokeWidth="1" fill="none" />
                    
                    {/* Connection points */}
                    <circle cx="100" cy="50" r="4" fill="currentColor" fillOpacity="0.7" />
                    <circle cx="100" cy="150" r="4" fill="currentColor" fillOpacity="0.7" />
                    <circle cx="50" cy="100" r="4" fill="currentColor" fillOpacity="0.7" />
                    <circle cx="150" cy="100" r="4" fill="currentColor" fillOpacity="0.7" />
                    
                    {/* Diagonal lines */}
                    <path d="M60 60 L140 140" stroke="currentColor" strokeWidth="1" strokeOpacity="0.5" />
                    <path d="M140 60 L60 140" stroke="currentColor" strokeWidth="1" strokeOpacity="0.5" />
                    
                    {/* Small dots */}
                    <circle cx="70" cy="70" r="2" fill="currentColor" fillOpacity="0.8" />
                    <circle cx="130" cy="130" r="2" fill="currentColor" fillOpacity="0.8" />
                    <circle cx="130" cy="70" r="2" fill="currentColor" fillOpacity="0.8" />
                    <circle cx="70" cy="130" r="2" fill="currentColor" fillOpacity="0.8" />
                    
                    {/* Code brackets - Left */}
                    <path d="M40 60 L30 100 L40 140" stroke="currentColor" strokeWidth="1.5" strokeOpacity="0.7" />
                    
                    {/* Code brackets - Right */}
                    <path d="M160 60 L170 100 L160 140" stroke="currentColor" strokeWidth="1.5" strokeOpacity="0.7" />
                    
                    {/* React-like atom icon */}
                    <ellipse cx="100" cy="100" rx="15" ry="40" stroke="currentColor" strokeWidth="1" strokeOpacity="0.6" transform="rotate(30 100 100)" />
                    <ellipse cx="100" cy="100" rx="15" ry="40" stroke="currentColor" strokeWidth="1" strokeOpacity="0.6" transform="rotate(90 100 100)" />
                    <ellipse cx="100" cy="100" rx="15" ry="40" stroke="currentColor" strokeWidth="1" strokeOpacity="0.6" transform="rotate(150 100 100)" />
                  </svg>
                </div>
                
                {/* Enhanced floating coding elements with better shadow and animations */}
                {/* HTML tag */}
                <div className="absolute top-1/4 left-1/4 px-3 py-2 border-2 border-white/30 rounded-lg bg-gray-900/80 backdrop-blur-sm shadow-xl z-20 animate-float" style={{ animationDelay: '0s' }}>
                  <div className="text-base font-mono font-bold text-white">&lt;/&gt;</div>
                </div>
                
                {/* JavaScript icon */}
                <div className="absolute bottom-1/3 right-1/4 w-12 h-12 flex items-center justify-center border-2 border-yellow-400/60 rounded-lg bg-yellow-900/70 backdrop-blur-sm shadow-xl z-20 animate-float" style={{ animationDelay: '1s' }}>
                  <div className="text-sm font-mono font-bold text-yellow-200">JS</div>
                </div>
                
                {/* Database icon */}
                <div className="absolute top-1/2 right-1/3 w-11 h-11 border-2 border-blue-400/60 rounded-md bg-blue-900/70 backdrop-blur-sm shadow-xl z-20 flex flex-col items-center justify-center animate-float" style={{ animationDelay: '2s' }}>
                  <div className="w-5 h-1 border-t border-blue-300/70 rounded-t-sm"></div>
                  <div className="w-6 h-4 border border-blue-300/70 border-t-0"></div>
                  <div className="w-5 h-1 border-t border-blue-300/70 rounded-b-sm"></div>
                </div>
                
                {/* Git branch icon */}
                <div className="absolute top-1/3 right-1/5 w-12 h-12 flex items-center justify-center border-2 border-white/30 rounded-lg bg-gray-900/80 backdrop-blur-sm shadow-xl z-20 animate-float" style={{ animationDelay: '3s' }}>
                  <svg viewBox="0 0 24 24" width="22" height="22" stroke="currentColor" strokeWidth="2" fill="none" className="text-white">
                    <circle cx="12" cy="7" r="3" />
                    <circle cx="17" cy="17" r="3" />
                    <circle cx="7" cy="17" r="3" />
                    <path d="M12 10v3.5a1.5 1.5 0 0 0 1.5 1.5h2" />
                  </svg>
                </div>
                
                {/* Code function icon */}
                <div className="absolute bottom-1/4 left-1/3 px-3 py-2 border-2 border-white/30 rounded-lg bg-gray-900/80 backdrop-blur-sm shadow-xl z-20 animate-float" style={{ animationDelay: '1.5s' }}>
                  <div className="text-sm font-mono font-bold text-white">() =&gt;</div>
                </div>
                
                {/* React/Framework icon */}
                <div className="absolute top-1/6 right-1/4 w-11 h-11 flex items-center justify-center border-2 border-cyan-400/60 rounded-full bg-cyan-900/70 backdrop-blur-sm shadow-xl z-20 animate-float" style={{ animationDelay: '2.5s' }}>
                  <div className="text-base font-bold">⚛️</div>
                </div>
                
                {/* CSS icon */}
                <div className="absolute bottom-1/5 left-1/5 w-11 h-11 flex items-center justify-center border-2 border-purple-400/60 rounded-lg bg-purple-900/70 backdrop-blur-sm shadow-xl z-20 animate-float" style={{ animationDelay: '0.5s' }}>
                  <div className="text-sm font-bold text-purple-200">CSS</div>
                </div>
              </div>
              
              {/* Enhanced feature highlight with better shadow and positioning */}
              {/* <div className="absolute -bottom-4 -right-4 md:-bottom-6 md:-right-6 p-4 bg-gray-900/90 backdrop-blur-sm border border-white/20 rounded-lg shadow-2xl z-10">
                <div className="text-sm font-semibold text-white">Client Success Rate</div>
                <div className="mt-1 flex items-center gap-1 text-xl md:text-2xl font-bold text-white">
                  98%
                  <span className="text-xs text-gray-400 font-normal ml-1">satisfaction</span>
                </div>
              </div> */}
            </motion.div>
          </>
        )}
      </main>

      {/* Contact Popup Form */}
      <AnimatePresence>
        {showContactPopup && (
          <>
            {/* Backdrop */}
            <motion.div 
              className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setShowContactPopup(false)}
            />
            
            {/* Modal */}
            <motion.div 
              className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full max-w-xl max-h-[90vh] overflow-y-auto p-6 z-50"
              initial={{ opacity: 0, scale: 0.8, y: 50 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.8, y: 50 }}
              transition={{ type: "spring", duration: 0.5 }}
            >
              <ContactPopupForm onClose={() => setShowContactPopup(false)} />
            </motion.div>
          </>
        )}
      </AnimatePresence>
      
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

// Contact Popup Form Component
const ContactPopupForm = ({ onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
    phoneNumber: ''
  });
  const [formStatus, setFormStatus] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    
    // Set loading state
    setFormStatus('submitting');
    
    try {
      // Send data to backend API
      const response = await fetch('https://faigen-backend.onrender.com/mail', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          subject: formData.subject,
          description: formData.message, // Map message field to description
          phoneNumber: formData.phoneNumber || ''
        }),
      });
      
      const data = await response.json();
      
      if (response.ok) {
        // Success
        setFormStatus('success');
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: '',
          phoneNumber: ''
        });
        
        // Close popup after 3 seconds on success
        setTimeout(() => {
          onClose();
        }, 3000);
      } else {
        // API returned an error
        console.error('Contact form submission error:', data);
        setFormStatus('error');
        
        // Reset error status after 5 seconds
        setTimeout(() => {
          setFormStatus(null);
        }, 5000);
      }
    } catch (error) {
      console.error('Contact form submission error:', error);
      setFormStatus('error');
      
      // Reset error status after 5 seconds
      setTimeout(() => {
        setFormStatus(null);
      }, 5000);
    }
  };

  return (
    <div className="bg-gray-900/95 backdrop-blur-md border border-white/10 rounded-3xl p-8 md:p-10 shadow-2xl relative overflow-hidden">
      {/* Inner glow effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-white/[0.02] pointer-events-none"></div>
      
      {/* Close button */}
      <button 
        onClick={onClose}
        className="absolute top-6 right-6 w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors duration-300 text-white"
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
      
      {/* Form header */}
      <div className="mb-10">
        <h3 className="text-2xl md:text-3xl font-bold mb-4 text-white">Get In Touch</h3>
        <div className="w-16 h-1 bg-gradient-to-r from-white/20 via-white/40 to-white/20 rounded-full"></div>
        <p className="mt-4 text-gray-300">Tell us about your project and we'll get back to you promptly.</p>
      </div>
      
      {/* Contact form */}
      <form onSubmit={handleFormSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Name field */}
          <div>
            <label htmlFor="popup-name" className="block text-sm font-medium text-gray-300 mb-2">Your Name</label>
            <input
              type="text"
              id="popup-name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              required
              className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/20 focus:border-white/40 focus:outline-none focus:ring-2 focus:ring-white/10 transition-all duration-300 text-white placeholder-gray-400"
              placeholder="John Smith"
            />
          </div>
          
          {/* Email field */}
          <div>
            <label htmlFor="popup-email" className="block text-sm font-medium text-gray-300 mb-2">Email Address</label>
            <input
              type="email"
              id="popup-email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              required
              className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/20 focus:border-white/40 focus:outline-none focus:ring-2 focus:ring-white/10 transition-all duration-300 text-white placeholder-gray-400"
              placeholder="john@example.com"
            />
          </div>
        </div>
        
        {/* Subject field */}
        <div>
          <label htmlFor="popup-subject" className="block text-sm font-medium text-gray-300 mb-2">Subject</label>
          <input
            type="text"
            id="popup-subject"
            name="subject"
            value={formData.subject}
            onChange={handleInputChange}
            required
            className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/20 focus:border-white/40 focus:outline-none focus:ring-2 focus:ring-white/10 transition-all duration-300 text-white placeholder-gray-400"
            placeholder="Project Inquiry"
          />
        </div>
        
        {/* Phone number field */}
        <div>
          <label htmlFor="popup-phoneNumber" className="block text-sm font-medium text-gray-300 mb-2">Phone Number (Optional)</label>
          <input
            type="tel"
            id="popup-phoneNumber"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleInputChange}
            className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/20 focus:border-white/40 focus:outline-none focus:ring-2 focus:ring-white/10 transition-all duration-300 text-white placeholder-gray-400"
            placeholder="+1 (234) 567-890"
          />
        </div>
        
        {/* Message field */}
        <div>
          <label htmlFor="popup-message" className="block text-sm font-medium text-gray-300 mb-2">Your Message</label>
          <textarea
            id="popup-message"
            name="message"
            value={formData.message}
            onChange={handleInputChange}
            rows="4"
            required
            className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/20 focus:border-white/40 focus:outline-none focus:ring-2 focus:ring-white/10 transition-all duration-300 resize-none text-white placeholder-gray-400"
            placeholder="Tell us about your project..."
          ></textarea>
        </div>
        
        {/* Submit button */}
        <div className="pt-4">
          <motion.button
            type="submit"
            disabled={formStatus === 'submitting'}
            whileHover={{ scale: 1.02, y: -2 }}
            whileTap={{ scale: 0.98 }}
            className="w-full px-8 py-4 bg-white text-black rounded-xl font-medium text-lg shadow-xl inline-flex items-center justify-center gap-2 group transition-all duration-300 hover:shadow-2xl hover:bg-gray-100 disabled:opacity-70 disabled:pointer-events-none"
          >
            {formStatus === 'submitting' ? (
              <>
                <svg className="animate-spin -ml-1 mr-2 h-5 w-5 text-black" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Sending...
              </>
            ) : (
              <>
                Send Message
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  width="20" 
                  height="20" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="2" 
                  strokeLinecap="round" 
                  strokeLinejoin="round"
                  className="transition-transform duration-300 group-hover:translate-x-1"
                >
                  <path d="M5 12h14"></path>
                  <path d="m12 5 7 7-7 7"></path>
                </svg>
              </>
            )}
          </motion.button>
          
          {/* Success/Error messages */}
          <AnimatePresence>
            {formStatus === 'success' && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                className="mt-4 p-4 bg-green-900/50 border border-green-500/30 text-green-300 rounded-xl text-center backdrop-blur-sm"
              >
                Your message has been sent successfully. We'll get back to you soon!
              </motion.div>
            )}
            {formStatus === 'error' && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                className="mt-4 p-4 bg-red-900/50 border border-red-500/30 text-red-300 rounded-xl text-center backdrop-blur-sm"
              >
                Something went wrong while sending your message. Please try again later.
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </form>
    </div>
  );
};

export default HomeSection;