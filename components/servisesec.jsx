'use client'
import { useState, useEffect, useRef } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import Image from "next/image";

const ServicesSection = () => {
  const [mounted, setMounted] = useState(false);
  const [activeService, setActiveService] = useState(0);
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: false, amount: 0.1 });
  
  const services = [
    {
      title: "Web Development",
      description: "Custom, responsive websites and web applications built with Next.js and modern frontend technologies.",
      features: ["Responsive Design", "Next.js", "SEO Optimization", "Performance-First Approach", "Custom CMS Integration"],
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      stats: {
        value: "98%",
        label: "client satisfaction"
      },
      tag: "Most Popular"
    },
    {
      title: "Software Development",
      description: "Scalable software solutions tailored to your business needs with cutting-edge technologies.",
      features: ["Custom Business Software", "Enterprise Solutions", "Cloud Applications", "API Development", "Maintenance & Support"],
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
        </svg>
      ),
      stats: {
        value: "200+",
        label: "projects delivered"
      },
      tag: "Enterprise Ready"
    },
    {
      title: "App Development",
      description: "Native and cross-platform mobile applications designed to deliver exceptional user experiences.",
      features: ["iOS & Android Apps", "React Native", "Flutter", "App Store Optimization", "Push Notifications"],
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
        </svg>
      ),
      stats: {
        value: "50+",
        label: "mobile apps launched"
      },
      tag: "Cross Platform"
    },
    {
      title: "SEO & Landing Pages",
      description: "High-converting landing pages and comprehensive SEO strategies to maximize your online presence.",
      features: ["Conversion-Focused Design", "A/B Testing", "SEO Optimization", "Analytics Integration", "Performance Metrics"],
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z" />
        </svg>
      ),
      stats: {
        value: "3x",
        label: "traffic growth"
      },
      tag: "Revenue Booster"
    },
    {
      title: "SaaS Products",
      description: "End-to-end SaaS product development from concept to market-ready solutions.",
      features: ["Subscription Models", "Multi-tenancy", "Scalable Architecture", "User Authentication", "Payment Integration"],
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
        </svg>
      ),
      stats: {
        value: "40+",
        label: "successful SaaS products"
      },
      tag: "Scalable Solutions"
    }
  ];
  
  useEffect(() => {
    setMounted(true);
    
    // Add font if not already added in home section
    if (!document.querySelector('link[href*="Montserrat"]')) {
      const linkElement = document.createElement('link');
      linkElement.rel = 'stylesheet';
      linkElement.href = 'https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;600;700;800;900&display=swap';
      document.head.appendChild(linkElement);
      
      return () => {
        document.head.removeChild(linkElement);
      };
    }
    
    // Auto rotate featured service every 5 seconds
    const interval = setInterval(() => {
      setActiveService(prev => (prev + 1) % services.length);
    }, 5000);
    
    return () => clearInterval(interval);
  }, [services.length]);
  
  // Animation variants
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
    hidden: { y: 40, opacity: 0 },
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
  
  const featureVariants = {
    hidden: { x: -10, opacity: 0 },
    visible: i => ({
      x: 0,
      opacity: 1,
      transition: {
        delay: i * 0.1,
        duration: 0.5
      }
    })
  };

  const fadeInVariants = {
    initial: { opacity: 0, y: 20 },
    animate: i => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.05,
        duration: 0.5
      }
    }),
    exit: { 
      opacity: 0,
      y: -20,
      transition: { duration: 0.3 } 
    }
  };

  // Service card animation
  const cardVariants = {
    hidden: { opacity: 0, scale: 0.95, y: 30 },
    visible: { 
      opacity: 1, 
      scale: 1,
      y: 0,
      transition: { 
        duration: 0.7,
        ease: "easeOut"
      }
    },
    hover: {
      y: -10,
      boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.1)",
      transition: {
        duration: 0.3,
        ease: "easeOut"
      }
    }
  };
  
  const floatingIconsVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: { 
        duration: 0.7,
        ease: "easeOut",
        staggerChildren: 0.1
      }
    }
  };
  
  const floatingIconVariant = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: i => ({ 
      opacity: 1, 
      scale: 1,
      transition: { 
        delay: i * 0.2,
        duration: 0.7,
        ease: "easeOut"
      }
    })
  };
  
  return (
    <section 
      ref={sectionRef}
      className="relative py-24 md:py-32 px-6 md:px-12 lg:px-20 max-w-7xl mx-auto w-full overflow-hidden bg-gradient-to-b from-white/50 to-white/70"
    >
      {/* Premium background decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: isInView ? 0.4 : 0 }}
          transition={{ duration: 1.5 }}
          className="absolute top-10 left-10 w-64 h-64 rounded-full border border-black/5"
        ></motion.div>
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: isInView ? 0.4 : 0 }}
          transition={{ duration: 1.5, delay: 0.2 }}
          className="absolute bottom-20 right-20 w-80 h-80 rounded-full border border-black/5"
        ></motion.div>
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: isInView ? 0.4 : 0 }}
          transition={{ duration: 1.5, delay: 0.4 }}
          className="absolute top-1/3 right-0 w-40 h-40 rounded-full border border-black/5"
        ></motion.div>
        
        {/* Animated dots */}
        <motion.div 
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: isInView ? 1 : 0, scale: isInView ? 1 : 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="absolute top-1/4 left-1/4 w-6 h-6 rounded-full bg-black/[0.03]"
        ></motion.div>
        <motion.div 
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: isInView ? 1 : 0, scale: isInView ? 1 : 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="absolute bottom-1/4 right-1/3 w-8 h-8 rounded-full bg-black/[0.03]"
        ></motion.div>
        <motion.div 
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: isInView ? 1 : 0, scale: isInView ? 1 : 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="absolute top-2/3 left-1/6 w-4 h-4 rounded-full bg-black/[0.03]"
        ></motion.div>
      </div>
      
      {mounted && (
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="relative"
        >
          {/* Section heading with premium styling - Fixed "We Create Solutions" */}
          <motion.div variants={itemVariants} className="sticky top-20 mb-24 text-center relative z-10">
            <motion.span 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="block uppercase tracking-wider text-black/50 font-medium text-sm mb-3"
            >
              Our expertise
            </motion.span>
            
            <h2 
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight leading-none mb-8"
              style={{ fontFamily: "'Montserrat', sans-serif" }}
            >
              <motion.span 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.7 }}
                className="inline-block relative"
              >
                We Create
                <span className="absolute -bottom-1 left-0 w-full h-1 bg-gradient-to-r from-black/5 via-black/20 to-black/5 rounded-full"></span>
              </motion.span>
              <motion.span 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.7 }}
                className="ml-3 text-transparent bg-clip-text bg-gradient-to-r from-black via-gray-700 to-black"
              >
                Solutions
              </motion.span>
            </h2>
            
            <motion.p 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.7 }}
              className="text-xl text-black/70 max-w-2xl mx-auto mt-8"
            >
              Comprehensive digital solutions to elevate your business to the next level
            </motion.p>
            
            {/* Premium divider */}
            <motion.div 
              initial={{ opacity: 0, scaleX: 0 }}
              animate={{ opacity: 1, scaleX: 1 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="flex items-center justify-center mt-10"
            >
              <div className="w-24 h-px bg-gradient-to-r from-transparent via-black/20 to-transparent"></div>
              <div className="w-2 h-2 rounded-full bg-black/20 mx-2"></div>
              <div className="w-24 h-px bg-gradient-to-r from-black/20 via-transparent to-black/20"></div>
            </motion.div>
          </motion.div>
          
          {/* Service carousel selector for mobile */}
          <motion.div 
            variants={itemVariants}
            className="mb-12 max-w-md mx-auto md:hidden"
          >
            <div className="flex flex-wrap gap-2 justify-center">
              {services.map((service, idx) => (
                <motion.button
                  key={idx}
                  onClick={() => setActiveService(idx)}
                  whileTap={{ scale: 0.95 }}
                  className={`h-3 rounded-full transition-all duration-300 ${
                    activeService === idx 
                      ? "w-10 bg-black" 
                      : "w-3 bg-black/20"
                  }`}
                ></motion.button>
              ))}
            </div>
          </motion.div>
          
          {/* Service Cards - Fancy Grid Layout for desktop / Carousel for mobile */}
          <div className="relative">
            {/* Mobile Carousel View */}
            <div className="md:hidden">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeService}
                  initial={{ opacity: 0, x: 100 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -100 }}
                  transition={{ duration: 0.5 }}
                >
                  <ServiceCard
                    service={services[activeService]}
                    index={activeService}
                    isActive={true}
                    cardVariants={cardVariants}
                    featureVariants={featureVariants}
                  />
                </motion.div>
              </AnimatePresence>
            </div>
            
            {/* Desktop Grid Layout */}
            <div className="hidden md:grid grid-cols-1 lg:grid-cols-2 gap-10">
              {services.map((service, index) => (
                <ServiceCard
                  key={index}
                  service={service}
                  index={index}
                  isActive={index === activeService}
                  cardVariants={cardVariants}
                  featureVariants={featureVariants}
                />
              ))}
            </div>
          </div>
          
          {/* Featured service showcase */}
          <motion.div 
            variants={itemVariants}
            className="mt-32 relative z-10"
          >
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="text-center mb-16"
            >
              <span className="px-5 py-2 rounded-full bg-black/5 text-sm font-medium inline-block mb-6">
                Featured Solution
              </span>
              <h3 className="text-3xl md:text-4xl font-bold mb-4" style={{ fontFamily: "'Montserrat', sans-serif" }}>
                Custom tailored for your needs
              </h3>
              <div className="w-20 h-1 bg-gradient-to-r from-black/5 via-black/20 to-black/5 rounded-full mx-auto"></div>
            </motion.div>
            
            {/* Featured service details with fancy presentation */}
            <div className="bg-white/90 backdrop-blur-md border border-black/5 rounded-3xl p-8 md:p-12 overflow-hidden shadow-2xl relative">
              {/* Inner glow effect for premium look */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/40 via-transparent to-black/[0.01] pointer-events-none"></div>
              
              {/* Abstract decorative elements */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-black/[0.02] to-transparent rounded-bl-full"></div>
              <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-black/[0.03] to-transparent rounded-tr-full"></div>
              
              <div className="flex flex-col lg:flex-row items-center">
                {/* Service content */}
                <div className="lg:w-1/2 p-4 md:p-8 relative z-20">
                  <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7 }}
                    className="flex flex-col h-full"
                  >
                    {/* Animated tag */}
                    <motion.div
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.5, delay: 0.2 }}
                      className="self-start px-4 py-2 rounded-full bg-black text-white text-sm font-medium mb-8 shadow-lg"
                    >
                      {services[activeService].tag}
                    </motion.div>
                    
                    <AnimatePresence mode="wait">
                      <motion.div
                        key={activeService}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.5 }}
                      >
                        <div className="flex items-center mb-6">
                          <div className="w-14 h-14 rounded-full bg-black/5 flex items-center justify-center mr-5">
                            <span className="text-black scale-125">
                              {services[activeService].icon}
                            </span>
                          </div>
                          <h4 className="text-3xl font-bold">{services[activeService].title}</h4>
                        </div>
                        
                        <p className="text-xl text-black/70 mb-8 leading-relaxed">
                          {services[activeService].description}
                        </p>
                        
                        <div className="space-y-4 mb-10">
                          {services[activeService].features.map((feature, idx) => (
                            <motion.div
                              key={idx}
                              custom={idx}
                              variants={fadeInVariants}
                              initial="initial"
                              animate="animate"
                              exit="exit"
                              className="flex items-center gap-3"
                            >
                              <div className="w-6 h-6 rounded-full bg-black/5 flex items-center justify-center">
                                <motion.div
                                  initial={{ scale: 0 }}
                                  animate={{ scale: 1 }}
                                  transition={{ delay: 0.1 * idx, duration: 0.3 }}
                                  className="w-1.5 h-1.5 bg-black rounded-full"
                                ></motion.div>
                              </div>
                              <span className="font-medium">{feature}</span>
                            </motion.div>
                          ))}
                        </div>
                        
                        <div className="mt-auto flex flex-wrap gap-4">
                          <motion.button
                            whileHover={{ scale: 1.05, y: -3 }}
                            whileTap={{ scale: 0.97 }}
                            className="px-8 py-3.5 bg-black text-white rounded-full font-medium inline-flex items-center gap-2 group transition-all duration-300 shadow-lg hover:shadow-xl"
                          >
                            Get Started
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
                          </motion.button>
                          
                          <motion.button
                            whileHover={{ scale: 1.05, y: -3 }}
                            whileTap={{ scale: 0.97 }}
                            className="px-8 py-3.5 border border-black/20 bg-white/50 backdrop-blur-sm text-black rounded-full font-medium inline-flex items-center gap-2 group transition-all duration-300 hover:border-black/40 shadow-md hover:shadow-lg"
                          >
                            Learn More
                          </motion.button>
                        </div>
                      </motion.div>
                    </AnimatePresence>
                  </motion.div>
                </div>
                
                {/* Service illustration with animated icons - Improved mobile visibility */}
                <div className="lg:w-1/2 p-4 md:p-8 relative">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={activeService}
                      className="relative w-full h-[300px] sm:h-[350px] md:h-[400px] lg:h-[500px]"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.5 }}
                    >
                      {/* Main illustration wrapper */}
                      <div className="absolute inset-0 border border-black/10 rounded-2xl overflow-hidden backdrop-blur-sm bg-gradient-to-br from-white/40 to-white/60 shadow-[0_10px_50px_-12px_rgba(0,0,0,0.15)]">
                        <div className="absolute inset-0 bg-gradient-to-br from-transparent to-black/5"></div>
                        
                        {/* Main service illustration */}
                        <div className="absolute inset-0 flex items-center justify-center p-6 sm:p-10">
                          <motion.div
                            initial={{ opacity: 0, scale: 0.9, rotate: -5 }}
                            animate={{ 
                              opacity: 1, 
                              scale: 1, 
                              rotate: 0,
                              transition: { 
                                duration: 0.5,
                                delay: 0.2
                              }
                            }}
                            className="w-full h-full"
                          >
                            <ServiceIllustration serviceIndex={activeService} />
                          </motion.div>
                        </div>
                      </div>
                      
                      {/* Floating icons around the main illustration - Better positioned for mobile */}
                      <motion.div
                        variants={floatingIconsVariants}
                        initial="hidden"
                        animate="visible"
                        className="absolute inset-0 pointer-events-none"
                      >
                        {/* Technology icon 1 */}
                        <motion.div
                          custom={0}
                          variants={floatingIconVariant}
                          className="absolute top-[10%] left-[10%] w-12 h-12 sm:w-16 sm:h-16 flex items-center justify-center border-2 border-black/10 rounded-2xl bg-white shadow-lg z-20 animate-float"
                          style={{ animationDelay: '0s' }}
                        >
                          <TechIcon index={(activeService * 3) % 8} />
                        </motion.div>
                        
                        {/* Technology icon 2 */}
                        <motion.div
                          custom={1}
                          variants={floatingIconVariant}
                          className="absolute bottom-[15%] right-[10%] w-10 h-10 sm:w-14 sm:h-14 flex items-center justify-center border-2 border-black/10 rounded-2xl bg-white shadow-lg z-20 animate-float"
                          style={{ animationDelay: '1.5s' }}
                        >
                          <TechIcon index={(activeService * 3 + 1) % 8} />
                        </motion.div>
                        
                        {/* Technology icon 3 */}
                        <motion.div
                          custom={2}
                          variants={floatingIconVariant}
                          className="absolute top-[60%] left-[5%] w-8 h-8 sm:w-12 sm:h-12 flex items-center justify-center border-2 border-black/10 rounded-2xl bg-white shadow-lg z-20 animate-float"
                          style={{ animationDelay: '3s' }}
                        >
                          <TechIcon index={(activeService * 3 + 2) % 8} />
                        </motion.div>
                      </motion.div>
                      
                      {/* Stats badge */}
                      <motion.div
                        initial={{ opacity: 0, y: 20, x: 20 }}
                        animate={{ opacity: 1, y: 0, x: 0 }}
                        transition={{ delay: 0.7, duration: 0.6 }}
                        className="absolute -bottom-4 -right-4 p-3 sm:p-4 bg-white border border-black/10 rounded-xl shadow-xl z-10"
                      >
                        <div className="text-xs sm:text-sm font-semibold">Success Rate</div>
                        <div className="mt-1 flex items-center gap-1 text-lg sm:text-xl font-bold">
                          {services[activeService].stats.value}
                          <span className="text-[10px] sm:text-xs text-black/60 font-normal ml-1">
                            {services[activeService].stats.label}
                          </span>
                        </div>
                      </motion.div>
                    </motion.div>
                  </AnimatePresence>
                </div>
              </div>
            </div>
          </motion.div>
          
          {/* Premium Call to Action section */}
          <motion.div 
            variants={itemVariants} 
            className="mt-32 text-center relative z-10"
          >
            {/* Premium divider */}
            <div className="flex items-center justify-center mb-12">
              <div className="w-16 h-px bg-gradient-to-r from-transparent via-black/20 to-transparent"></div>
              <div className="w-1.5 h-1.5 rounded-full bg-black/20 mx-2"></div>
              <div className="w-16 h-px bg-gradient-to-r from-black/20 via-transparent to-black/20"></div>
            </div>
            
            <h3 
              className="text-2xl md:text-3xl font-bold mb-6"
              style={{ fontFamily: "'Montserrat', sans-serif" }}
            >
              Ready to transform your digital presence?
            </h3>
            <p className="text-lg text-black/70 max-w-2xl mx-auto mb-10">
              Our team of experts is ready to help you build the perfect solution for your business.
            </p>
            
            {/* Premium CTA button with enhanced styling */}
            <motion.button
              className="px-10 py-4 bg-black text-white rounded-full font-medium text-lg shadow-xl inline-flex items-center gap-2 group transition-all duration-300 hover:shadow-2xl"
              style={{ boxShadow: '0 10px 30px -10px rgba(0, 0, 0, 0.3), 0 4px 6px -4px rgba(0, 0, 0, 0.1)' }}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.97 }}
            >
              Contact Us Today
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                width="24" 
                height="24" 
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
            </motion.button>
          </motion.div>
        </motion.div>
      )}
      
      {/* Custom scrollbar styles and animations */}
      <style jsx global>{`
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        
        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        
        @keyframes float {
          0% { transform: translateY(0px) translateX(0px) rotate(0deg); }
          50% { transform: translateY(-10px) translateX(5px) rotate(3deg); }
          100% { transform: translateY(0px) translateX(0px) rotate(0deg); }
        }
        
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        
        @keyframes pulse-glow {
          0%, 100% { box-shadow: 0 0 0 rgba(0, 0, 0, 0.1); }
          50% { box-shadow: 0 0 15px rgba(0, 0, 0, 0.2); }
        }
        
        .animate-pulse-glow {
          animation: pulse-glow 4s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

// Service Card Component
const ServiceCard = ({ service, index, isActive, cardVariants, featureVariants }) => {
  return (
    <motion.div
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      whileHover="hover"
      viewport={{ once: true, amount: 0.2 }}
      className={`bg-white/90 backdrop-blur-md border border-black/5 rounded-2xl p-8 overflow-hidden shadow-xl relative ${
        isActive ? 'ring-2 ring-black/10 ring-offset-2' : ''
      }`}
      style={{ 
        boxShadow: '0 10px 40px -10px rgba(0, 0, 0, 0.1), 0 2px 10px -3px rgba(0, 0, 0, 0.05)'
      }}
    >
      {/* Inner glow effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/40 via-transparent to-black/[0.01] pointer-events-none"></div>
      
      {/* Enhanced service tag */}
      <div className="absolute top-4 right-4">
        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3 + index * 0.1, duration: 0.5 }}
          className="px-3 py-1 rounded-full bg-black/5 text-xs font-medium backdrop-blur-sm"
        >
          {service.tag}
        </motion.div>
      </div>
      
      <div className="flex flex-col gap-6">
        {/* Service icon with enhanced styling */}
        <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-black/5 backdrop-blur-sm mb-2 animate-pulse-glow">
          <span className="text-black scale-125">{service.icon}</span>
        </div>
        
        {/* Service title with premium styling */}
        <div>
          <h3 className="text-2xl font-bold mb-2">{service.title}</h3>
          <div className="w-16 h-1 bg-gradient-to-r from-black/5 via-black/20 to-black/5 rounded-full"></div>
        </div>
        
        {/* Service description */}
        <p className="text-lg text-black/70 leading-relaxed">
          {service.description}
        </p>
        
        {/* Key features preview - just show 2 on cards */}
        <div className="space-y-2">
          {service.features.slice(0, 3).map((feature, i) => (
            <motion.div 
              key={i}
              custom={i}
              variants={featureVariants}
              className="flex items-center gap-3"
            >
              <div className="w-5 h-5 rounded-full bg-black/5 flex items-center justify-center">
                <div className="w-1.5 h-1.5 bg-black rounded-full"></div>
              </div>
              <span className="text-sm font-medium">{feature}</span>
            </motion.div>
          ))}
          
          {service.features.length > 3 && (
            <motion.div 
              custom={3}
              variants={featureVariants}
              className="text-sm font-medium text-black/60 pl-8"
            >
              + {service.features.length - 3} more
            </motion.div>
          )}
        </div>
        
        {/* Stats badge */}
        <div className="mt-4 bg-black/[0.03] rounded-lg p-3 inline-flex items-center">
          <div className="text-2xl font-bold mr-2">{service.stats.value}</div>
          <div className="text-xs text-black/60">{service.stats.label}</div>
        </div>
        

      </div>
    </motion.div>
  );
};

// Enhanced service illustrations component
const ServiceIllustration = ({ serviceIndex }) => {
  // Different SVG illustrations based on service type with premium design
  const illustrations = [
    // Web Development - Enhanced
    <svg key="web" className="w-full h-full text-black" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="30" y="30" width="140" height="140" rx="10" stroke="currentColor" strokeWidth="2" strokeOpacity="0.6" fill="none" />
      <path d="M30 55 H170" stroke="currentColor" strokeWidth="2" strokeOpacity="0.6" />
      <circle cx="45" cy="42.5" r="5" fill="currentColor" fillOpacity="0.6" />
      <circle cx="65" cy="42.5" r="5" fill="currentColor" fillOpacity="0.6" />
      <circle cx="85" cy="42.5" r="5" fill="currentColor" fillOpacity="0.6" />
      
      {/* Browser UI elements */}
      <rect x="45" y="70" width="110" height="15" rx="2" stroke="currentColor" strokeWidth="1.5" strokeOpacity="0.4" fill="currentColor" fillOpacity="0.05" />
      <rect x="45" y="95" width="70" height="10" rx="2" stroke="currentColor" strokeWidth="1.5" strokeOpacity="0.4" fill="currentColor" fillOpacity="0.05" />
      <rect x="45" y="115" width="110" height="10" rx="2" stroke="currentColor" strokeWidth="1.5" strokeOpacity="0.4" fill="currentColor" fillOpacity="0.05" />
      <rect x="45" y="135" width="90" height="10" rx="2" stroke="currentColor" strokeWidth="1.5" strokeOpacity="0.4" fill="currentColor" fillOpacity="0.05" />
      
      {/* Call to action button */}
      <rect x="120" y="135" width="35" height="15" rx="7.5" stroke="currentColor" strokeWidth="1.5" fill="currentColor" fillOpacity="0.2" />
      
      {/* Decorative elements */}
      <circle cx="150" cy="85" r="10" stroke="currentColor" strokeWidth="1.5" strokeOpacity="0.4" fill="currentColor" fillOpacity="0.05" />
      <path d="M145 85 L148 88 L155 81" stroke="currentColor" strokeWidth="1.5" strokeOpacity="0.6" />
    </svg>,
    
    // Software Development - Enhanced
    <svg key="software" className="w-full h-full text-black" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M50 50 L90 90 L50 130" stroke="currentColor" strokeWidth="2.5" strokeOpacity="0.7" />
      <path d="M150 50 L110 90 L150 130" stroke="currentColor" strokeWidth="2.5" strokeOpacity="0.7" />
      
      {/* Connected nodes */}
      <circle cx="100" cy="30" r="10" stroke="currentColor" strokeWidth="1.5" fill="currentColor" fillOpacity="0.1" />
      <circle cx="50" cy="90" r="10" stroke="currentColor" strokeWidth="1.5" fill="currentColor" fillOpacity="0.1" />
      <circle cx="100" cy="90" r="10" stroke="currentColor" strokeWidth="1.5" fill="currentColor" fillOpacity="0.1" />
      <circle cx="150" cy="90" r="10" stroke="currentColor" strokeWidth="1.5" fill="currentColor" fillOpacity="0.1" />
      <circle cx="100" cy="150" r="10" stroke="currentColor" strokeWidth="1.5" fill="currentColor" fillOpacity="0.1" />
      
      {/* Connection lines */}
      <path d="M100 40 L100 80" stroke="currentColor" strokeWidth="1.5" strokeOpacity="0.4" strokeDasharray="4 4" />
      <path d="M60 90 L90 90" stroke="currentColor" strokeWidth="1.5" strokeOpacity="0.4" strokeDasharray="4 4" />
      <path d="M110 90 L140 90" stroke="currentColor" strokeWidth="1.5" strokeOpacity="0.4" strokeDasharray="4 4" />
      <path d="M100 100 L100 140" stroke="currentColor" strokeWidth="1.5" strokeOpacity="0.4" strokeDasharray="4 4" />
      
      {/* Data flowing */}
      <circle cx="95" cy="55" r="3" fill="currentColor" fillOpacity="0.8">
        <animateMotion path="M0 0 L0 30" dur="3s" repeatCount="indefinite" />
      </circle>
      
      <circle cx="75" cy="90" r="3" fill="currentColor" fillOpacity="0.8">
        <animateMotion path="M0 0 L20 0" dur="2s" repeatCount="indefinite" />
      </circle>
      
      <circle cx="125" cy="90" r="3" fill="currentColor" fillOpacity="0.8">
        <animateMotion path="M0 0 L20 0" dur="2.5s" repeatCount="indefinite" />
      </circle>
      
      <circle cx="95" cy="120" r="3" fill="currentColor" fillOpacity="0.8">
        <animateMotion path="M0 0 L0 25" dur="2.2s" repeatCount="indefinite" />
      </circle>
    </svg>,
    
    // App Development - Enhanced
    <svg key="app" className="w-full h-full text-black" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="60" y="25" width="80" height="150" rx="15" stroke="currentColor" strokeWidth="2.5" strokeOpacity="0.7" fill="none" />
      <path d="M60 45 H140" stroke="currentColor" strokeWidth="2" strokeOpacity="0.5" />
      <path d="M60 155 H140" stroke="currentColor" strokeWidth="2" strokeOpacity="0.5" />
      
      {/* Home button */}
      <circle cx="100" cy="165" r="7" stroke="currentColor" strokeWidth="1.5" fill="currentColor" fillOpacity="0.1" />
      {/* Screen elements */}
      <rect x="75" y="60" width="50" height="50" rx="8" stroke="currentColor" strokeWidth="2" fill="currentColor" fillOpacity="0.1" />
      <rect x="75" y="120" width="23" height="23" rx="6" stroke="currentColor" strokeWidth="2" fill="currentColor" fillOpacity="0.1" />
      <rect x="102" y="120" width="23" height="23" rx="6" stroke="currentColor" strokeWidth="2" fill="currentColor" fillOpacity="0.1" />
      
      {/* App header */}
      <rect x="70" y="35" width="60" height="5" rx="2.5" fill="currentColor" fillOpacity="0.3" />
      
      {/* Notification */}
      <circle cx="120" cy="35" r="3" fill="currentColor" />
      
      {/* App icon details */}
      <path d="M90 75 L110 75 L110 85 L100 95 L90 85 Z" stroke="currentColor" strokeWidth="1.5" fill="currentColor" fillOpacity="0.2" />
      
      {/* Mini icons in bottom squares */}
      <path d="M80 127 L93 133" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M80 133 L93 127" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <circle cx="113.5" cy="131.5" r="4.5" stroke="currentColor" strokeWidth="1.5" fill="none" />
    </svg>,
    
    // SEO & Landing Pages - Enhanced
    <svg key="seo" className="w-full h-full text-black" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Graph background */}
      <path d="M30 30 L30 170 L170 170" stroke="currentColor" strokeWidth="2" strokeOpacity="0.4" />
      
      {/* Graph grid */}
      <path d="M30 50 L170 50" stroke="currentColor" strokeWidth="1" strokeOpacity="0.1" strokeDasharray="4 4" />
      <path d="M30 90 L170 90" stroke="currentColor" strokeWidth="1" strokeOpacity="0.1" strokeDasharray="4 4" />
      <path d="M30 130 L170 130" stroke="currentColor" strokeWidth="1" strokeOpacity="0.1" strokeDasharray="4 4" />
      <path d="M70 30 L70 170" stroke="currentColor" strokeWidth="1" strokeOpacity="0.1" strokeDasharray="4 4" />
      <path d="M110 30 L110 170" stroke="currentColor" strokeWidth="1" strokeOpacity="0.1" strokeDasharray="4 4" />
      <path d="M150 30 L150 170" stroke="currentColor" strokeWidth="1" strokeOpacity="0.1" strokeDasharray="4 4" />
      
      {/* Analytics line */}
      <path d="M30 150 L50 130 L70 140 L90 90 L110 70 L130 60 L150 50 L170 65" 
        stroke="currentColor" strokeWidth="3" strokeOpacity="0.6" fill="none" strokeLinecap="round" strokeLinejoin="round" />
      
      {/* Data points */}
      <circle cx="50" cy="130" r="5" fill="currentColor" fillOpacity="0.6" />
      <circle cx="70" cy="140" r="5" fill="currentColor" fillOpacity="0.6" />
      <circle cx="90" cy="90" r="5" fill="currentColor" fillOpacity="0.6" />
      <circle cx="110" cy="70" r="5" fill="currentColor" fillOpacity="0.6" />
      <circle cx="130" cy="60" r="5" fill="currentColor" fillOpacity="0.6" />
      <circle cx="150" cy="50" r="5" fill="currentColor" fillOpacity="0.6" />
      <circle cx="170" cy="65" r="5" fill="currentColor" fillOpacity="0.6" />
      
      {/* Search magnifying glass */}
      <circle cx="140" cy="115" r="15" stroke="currentColor" strokeWidth="3" strokeOpacity="0.5" fill="none" />
      <path d="M150 125 L165 140" stroke="currentColor" strokeWidth="3" strokeOpacity="0.5" strokeLinecap="round" />
      
      {/* Ranking numbers */}
      <text x="40" y="47" fontSize="10" fill="currentColor" fillOpacity="0.7">#1</text>
      <text x="80" y="87" fontSize="10" fill="currentColor" fillOpacity="0.7">#2</text>
      <text x="120" y="67" fontSize="10" fill="currentColor" fillOpacity="0.7">#3</text>
    </svg>,
    
    // SaaS Products - Enhanced
    <svg key="saas" className="w-full h-full text-black" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Main cloud shapes */}
      <path d="M50 100 A30 30 0 0 1 80 70 A40 40 0 0 1 150 80 A30 30 0 0 1 150 140 L60 140 A20 20 0 0 1 50 100 Z" 
        stroke="currentColor" strokeWidth="2" strokeOpacity="0.5" fill="currentColor" fillOpacity="0.05" />
      
      {/* Server racks */}
      <rect x="70" y="90" width="60" height="10" rx="2" stroke="currentColor" strokeWidth="1.5" fill="currentColor" fillOpacity="0.2" />
      <rect x="70" y="105" width="60" height="10" rx="2" stroke="currentColor" strokeWidth="1.5" fill="currentColor" fillOpacity="0.2" />
      <rect x="70" y="120" width="60" height="10" rx="2" stroke="currentColor" strokeWidth="1.5" fill="currentColor" fillOpacity="0.2" />
      
      {/* Server lights */}
      <circle cx="75" cy="95" r="2" fill="currentColor" />
      <circle cx="75" cy="110" r="2" fill="currentColor" />
      <circle cx="75" cy="125" r="2" fill="currentColor" />
      
      {/* Connection lines */}
      <path d="M60 70 L80 70" stroke="currentColor" strokeWidth="1.5" strokeOpacity="0.4" strokeDasharray="2 2" />
      <path d="M120 70 L140 70" stroke="currentColor" strokeWidth="1.5" strokeOpacity="0.4" strokeDasharray="2 2" />
      <path d="M100 50 L100 90" stroke="currentColor" strokeWidth="1.5" strokeOpacity="0.4" strokeDasharray="2 2" />
      
      {/* Database symbol */}
      <ellipse cx="100" cy="50" rx="15" ry="7" stroke="currentColor" strokeWidth="1.5" fill="currentColor" fillOpacity="0.2" />
      <path d="M85 50 L85 60" stroke="currentColor" strokeWidth="1.5" />
      <path d="M115 50 L115 60" stroke="currentColor" strokeWidth="1.5" />
      <ellipse cx="100" cy="60" rx="15" ry="7" stroke="currentColor" strokeWidth="1.5" fill="currentColor" fillOpacity="0.2" />
      
      {/* Users */}
      <circle cx="60" cy="70" r="7" stroke="currentColor" strokeWidth="1.5" fill="currentColor" fillOpacity="0.2" />
      <path d="M60 77 L60 85" stroke="currentColor" strokeWidth="1.5" />
      <path d="M55 80 L65 80" stroke="currentColor" strokeWidth="1.5" />
      
      <circle cx="140" cy="70" r="7" stroke="currentColor" strokeWidth="1.5" fill="currentColor" fillOpacity="0.2" />
      <path d="M140 77 L140 85" stroke="currentColor" strokeWidth="1.5" />
      <path d="M135 80 L145 80" stroke="currentColor" strokeWidth="1.5" />
      
      {/* Data transfer animation */}
      <circle cx="90" cy="60" r="2" fill="currentColor">
        <animateMotion path="M0 0 L20 0" dur="3s" repeatCount="indefinite" />
      </circle>
      <circle cx="60" cy="75" r="2" fill="currentColor">
        <animateMotion path="M0 0 L20 -5" dur="2s" repeatCount="indefinite" />
      </circle>
    </svg>
  ];

  return illustrations[serviceIndex] || illustrations[0];
};

// Technology icons that float around the service illustrations
const TechIcon = ({ index }) => {
  const icons = [
    // HTML/Code
    <div key="html" className="text-base font-mono font-bold text-black">&lt;/&gt;</div>,
    
    // React 
    <div key="react" className="text-base font-bold">⚛️</div>,
    
    // JavaScript
    <div key="js" className="text-sm font-mono font-bold text-yellow-800">JS</div>,
    
    // CSS
    <div key="css" className="text-sm font-bold text-purple-800">CSS</div>,
    
    // Database
    <svg key="db" viewBox="0 0 24 24" width="22" height="22" stroke="currentColor" strokeWidth="2" fill="none">
      <ellipse cx="12" cy="5" rx="9" ry="3" />
      <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3" />
      <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
    </svg>,
    
    // Mobile
    <svg key="mobile" viewBox="0 0 24 24" width="22" height="22" stroke="currentColor" strokeWidth="2" fill="none">
      <rect x="5" y="2" width="14" height="20" rx="2" ry="2" />
      <line x1="12" y1="18" x2="12" y2="18" />
    </svg>,
    
    // Cloud
    <svg key="cloud" viewBox="0 0 24 24" width="22" height="22" stroke="currentColor" strokeWidth="2" fill="none">
      <path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z" />
    </svg>,
    
    // SEO/Graph
    <svg key="seo" viewBox="0 0 24 24" width="22" height="22" stroke="currentColor" strokeWidth="2" fill="none">
      <line x1="18" y1="20" x2="18" y2="10" />
      <line x1="12" y1="20" x2="12" y2="4" />
      <line x1="6" y1="20" x2="6" y2="14" />
    </svg>
  ];
  
  return icons[index % icons.length];
};

export default ServicesSection;