'use client'
import { useEffect, useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { useRouter } from 'next/navigation';

const ServicesSection = () => {
  const [mounted, setMounted] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [activeCard, setActiveCard] = useState(null);
  const router = useRouter();
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, threshold: 0.1 });
  
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
    
    // Detect if device supports touch (mobile/tablet)
    const checkIfMobile = () => {
      setIsMobile('ontouchstart' in window || navigator.maxTouchPoints > 0);
    };
    
    checkIfMobile();
    window.addEventListener('resize', checkIfMobile);
    
    return () => window.removeEventListener('resize', checkIfMobile);
  }, []);

  // Navigation handlers
  const handleStartProject = () => {
    router.push('/startyourproject');
  };

  const handleViewProcess = () => {
    router.push('/ourprocess');
  };

  // Mobile card interaction
  const handleCardTouch = (index) => {
    if (isMobile) {
      setActiveCard(activeCard === index ? null : index);
    }
  };
  
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
    hidden: { y: 60, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 80,
        damping: 12,
        duration: 0.8
      }
    }
  };

  const cardVariants = {
    hidden: { y: 50, opacity: 0, scale: 0.95 },
    visible: {
      y: 0,
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 60,
        damping: 15,
        duration: 0.9
      }
    }
  };

  const services = [
    {
      title: "Mobile App Development",
      description: "Flutter, React Native, Android, iOS — fast, responsive, and user-focused.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
        </svg>
      ),
      gradient: "from-blue-500/30 to-cyan-500/30",
      borderGradient: "from-blue-500/50 to-cyan-500/50",
      technologies: ["Flutter", "React Native", "iOS", "Android"]
    },
    {
      title: "Web App Development",
      description: "Modern, scalable, and SEO-optimized web solutions that grow with you.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
        </svg>
      ),
      gradient: "from-purple-500/30 to-pink-500/30",
      borderGradient: "from-purple-500/50 to-pink-500/50",
      technologies: ["React", "Next.js", "Node.js", "TypeScript"]
    },
    {
      title: "UI/UX Design",
      description: "Designs that speak. Interfaces that convert. Experiences that last.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zM21 5a2 2 0 00-2-2h-4a2 2 0 00-2 2v12a4 4 0 004 4h4a2 2 0 002-2V5z" />
        </svg>
      ),
      gradient: "from-green-500/30 to-emerald-500/30",
      borderGradient: "from-green-500/50 to-emerald-500/50",
      technologies: ["Figma", "Sketch", "Adobe XD", "Principle"]
    },
    {
      title: "Backend & API Development",
      description: "Secure, scalable backend solutions that power your product reliably.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
        </svg>
      ),
      gradient: "from-orange-500/30 to-red-500/30",
      borderGradient: "from-orange-500/50 to-red-500/50",
      technologies: ["Node.js", "Python", "PostgreSQL", "AWS"]
    },
    {
      title: "E-Commerce Solutions",
      description: "Boost online sales with optimized, lightning-fast, and mobile-ready e-commerce platforms.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17M17 13v6a2 2 0 01-2 2H9a2 2 0 01-2-2v-6m8 0V9a2 2 0 00-2-2H9a2 2 0 00-2 2v4.01" />
        </svg>
      ),
      gradient: "from-indigo-500/30 to-blue-500/30",
      borderGradient: "from-indigo-500/50 to-blue-500/50",
      technologies: ["Shopify", "WooCommerce", "Stripe", "PayPal"]
    },
    {
      title: "Maintenance & Support",
      description: "We don't just build and leave. We grow with you and maintain your digital assets.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      gradient: "from-yellow-500/30 to-orange-500/30",
      borderGradient: "from-yellow-500/50 to-orange-500/50",
      technologies: ["24/7 Support", "Updates", "Security", "Performance"]
    }
  ];
  
  return (
    <>
      {/* Background Elements */}
      <div className="fixed inset-0 -z-10 overflow-hidden">
        {/* Gradient Orbs */}
        <div className="absolute top-3/4 -left-1/3 w-96 h-96 bg-gradient-to-r from-purple-400/15 to-blue-600/15 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/3 -right-1/3 w-96 h-96 bg-gradient-to-r from-green-400/15 to-cyan-600/15 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '3s' }}></div>
        
        {/* Additional floating particles for this section */}
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1.5 h-1.5 bg-white/20 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [-15, 15, -15],
              opacity: [0.2, 0.5, 0.2],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 6 + Math.random() * 4,
              repeat: Infinity,
              delay: Math.random() * 3,
            }}
          />
        ))}
      </div>

      {/* Services Section */}
      <section 
        ref={sectionRef}
        id="services" 
        className="relative py-20 lg:py-32 px-6 md:px-12 lg:px-20 bg-black"
      >
        <div className="max-w-7xl mx-auto">
          {mounted && (
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              className="space-y-16"
            >
              {/* Section Header */}
              <motion.div 
                variants={itemVariants}
                className="text-center space-y-6"
              >
                <motion.div 
                  className="inline-flex items-center space-x-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20"
                >
                  <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse"></div>
                  <span className="text-sm font-medium text-white/80">Our Services</span>
                </motion.div>
                
                <motion.h2 
                  className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-[0.9] tracking-tight"
                  style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                >
                  <span className="block text-white">Our Expertise,</span>
                  <span className="block">
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-300 to-white">
                      Your Advantage
                    </span>
                  </span>
                </motion.h2>
                
                <motion.p 
                  className="text-lg lg:text-xl text-white/70 leading-relaxed max-w-3xl mx-auto"
                  style={{ fontFamily: "'Inter', sans-serif" }}
                >
                  We combine cutting-edge technology with innovative design to deliver 
                  solutions that drive real business results. Every service is crafted 
                  with precision and optimized for performance.
                </motion.p>
                
                {/* Mobile instruction */}
                {isMobile && (
                  <motion.p 
                    className="text-sm text-white/50 mt-4 md:hidden"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1 }}
                  >
                    💡 Tap on cards to explore our services
                  </motion.p>
                )}
              </motion.div>

              {/* Services Grid */}
              <motion.div 
                variants={containerVariants}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
              >
                {services.map((service, index) => {
                  const isActive = activeCard === index;
                  
                  return (
                    <motion.div
                      key={service.title}
                      variants={cardVariants}
                      className="group relative"
                    >
                      <motion.div 
                        className={`relative h-full p-8 bg-white/10 backdrop-blur-xl rounded-3xl border border-white/20 shadow-2xl overflow-hidden transition-all duration-500 cursor-pointer
                          ${isMobile ? (isActive ? 'bg-white/15 border-white/30' : '') : 'hover:shadow-white/10 hover:shadow-2xl'}
                        `}
                        onClick={() => handleCardTouch(index)}
                        onTouchStart={() => handleCardTouch(index)}
                        animate={isMobile ? {
                          y: isActive ? -8 : 0,
                          scale: isActive ? 1.02 : 1,
                        } : {}}
                        whileHover={!isMobile ? { 
                          y: -8,
                          transition: { type: "spring", stiffness: 300, damping: 20 }
                        } : {}}
                        whileTap={isMobile ? { scale: 0.98 } : {}}
                      >
                        {/* Background Gradient - Desktop: on hover, Mobile: when active */}
                        <motion.div 
                          className={`absolute inset-0 bg-gradient-to-br ${service.gradient} transition-opacity duration-500
                            ${isMobile 
                              ? (isActive ? 'opacity-100' : 'opacity-0')
                              : 'opacity-0 group-hover:opacity-100'
                            }
                          `}
                        />
                        
                        {/* Border Gradient - Desktop: on hover, Mobile: when active */}
                        <motion.div 
                          className={`absolute inset-0 rounded-3xl bg-gradient-to-br ${service.borderGradient} transition-opacity duration-500
                            ${isMobile 
                              ? (isActive ? 'opacity-100' : 'opacity-0')
                              : 'opacity-0 group-hover:opacity-100'
                            }
                          `}
                          style={{ padding: '1px' }}
                        >
                          <div className="w-full h-full bg-black/90 backdrop-blur-xl rounded-3xl" />
                        </motion.div>
                        
                        {/* Content */}
                        <div className="relative z-10 space-y-6">
                          {/* Icon */}
                          <motion.div 
                            className={`w-16 h-16 bg-white/10 backdrop-blur-xl rounded-2xl flex items-center justify-center text-white border border-white/20 transition-all duration-300
                              ${isMobile 
                                ? (isActive ? 'bg-white/15 border-white/30 scale-110' : '')
                                : 'group-hover:scale-110 group-hover:bg-white/15 group-hover:border-white/30'
                              }
                            `}
                            animate={isMobile ? (isActive ? { rotate: 5 } : { rotate: 0 }) : {}}
                            whileHover={!isMobile ? { rotate: 5 } : {}}
                          >
                            {service.icon}
                            
                            {/* Glowing effect */}
                            <motion.div
                              className={`absolute inset-0 rounded-2xl border-2 border-white/30 transition-opacity duration-300
                                ${isMobile 
                                  ? (isActive ? 'opacity-100' : 'opacity-0')
                                  : 'opacity-0 group-hover:opacity-100'
                                }
                              `}
                              animate={{
                                scale: [1, 1.1, 1],
                              }}
                              transition={{ 
                                duration: 2, 
                                repeat: Infinity,
                                repeatType: "reverse"
                              }}
                            />
                          </motion.div>
                          
                          {/* Title */}
                          <motion.h3 
                            className={`text-xl lg:text-2xl font-bold text-white transition-colors duration-300
                              ${isMobile ? '' : 'group-hover:text-white'}
                            `}
                            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                          >
                            {service.title}
                          </motion.h3>
                          
                          {/* Description */}
                          <motion.p 
                            className={`text-white/70 leading-relaxed transition-colors duration-300
                              ${isMobile 
                                ? (isActive ? 'text-white/90' : '')
                                : 'group-hover:text-white/90'
                              }
                            `}
                            style={{ fontFamily: "'Inter', sans-serif" }}
                          >
                            {service.description}
                          </motion.p>
                          
                          {/* Technologies */}
                          <motion.div className="flex flex-wrap gap-2">
                            {service.technologies.map((tech, techIndex) => (
                              <motion.span
                                key={tech}
                                className={`px-3 py-1 bg-white/10 backdrop-blur-sm rounded-full text-xs font-medium text-white/80 border border-white/10 transition-all duration-300
                                  ${isMobile 
                                    ? (isActive ? 'bg-white/20 text-white border-white/20' : '')
                                    : 'group-hover:bg-white/20 group-hover:text-white group-hover:border-white/20'
                                  }
                                `}
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ delay: index * 0.1 + techIndex * 0.05 }}
                              >
                                {tech}
                              </motion.span>
                            ))}
                          </motion.div>
                          
                          {/* Learn More Link */}
                          <motion.div 
                            className={`pt-4 border-t border-white/20 transition-colors duration-300
                              ${isMobile 
                                ? (isActive ? 'border-white/30' : '')
                                : 'group-hover:border-white/30'
                              }
                            `}
                          >
                            <motion.button
                              className={`flex items-center space-x-2 text-white/70 font-medium text-sm transition-colors duration-300
                                ${isMobile 
                                  ? (isActive ? 'text-white' : '')
                                  : 'group-hover:text-white'
                                }
                              `}
                              animate={isMobile ? (isActive ? { x: 4 } : { x: 0 }) : {}}
                              whileHover={!isMobile ? { x: 4 } : {}}
                            >
                              <span>Learn More</span>
                              <motion.svg 
                                className="w-4 h-4" 
                                fill="none" 
                                stroke="currentColor" 
                                viewBox="0 0 24 24"
                                animate={{ x: [0, 4, 0] }}
                                transition={{ 
                                  duration: 2, 
                                  repeat: Infinity,
                                  ease: "easeInOut" 
                                }}
                              >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                              </motion.svg>
                            </motion.button>
                          </motion.div>
                        </div>
                        
                        {/* Floating Elements */}
                        <motion.div
                          className={`absolute top-4 right-4 w-20 h-20 border border-white/10 rounded-full transition-opacity duration-500
                            ${isMobile 
                              ? (isActive ? 'opacity-100' : 'opacity-0')
                              : 'opacity-0 group-hover:opacity-100'
                            }
                          `}
                          animate={{ rotate: 360 }}
                          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                        />
                        
                        <motion.div
                          className={`absolute bottom-4 left-4 w-2 h-2 bg-white/30 rounded-full transition-opacity duration-500
                            ${isMobile 
                              ? (isActive ? 'opacity-100' : 'opacity-0')
                              : 'opacity-0 group-hover:opacity-100'
                            }
                          `}
                          animate={{ 
                            scale: [1, 1.5, 1],
                            opacity: [0.3, 0.7, 0.3]
                          }}
                          transition={{ duration: 3, repeat: Infinity }}
                        />
                        
                        {/* Mobile tap indicator */}
                        {isMobile && (
                          <motion.div
                            className={`absolute top-4 left-4 text-white/50 transition-opacity duration-300
                              ${isActive ? 'opacity-0' : 'opacity-100'}
                            `}
                          >
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M6.672 1.911a1 1 0 10-1.932.518l.259.966a1 1 0 001.932-.518l-.26-.966zM2.429 4.74a1 1 0 10-.517 1.932l.966.259a1 1 0 00.517-1.932l-.966-.26zm8.814-.569a1 1 0 00-1.415-1.414l-.707.707a1 1 0 101.415 1.415l.707-.708zm-7.071 7.072l.707-.707A1 1 0 003.465 9.12l-.708.707a1 1 0 001.415 1.415zm3.2-5.171a1 1 0 00-1.3 1.3l4 10a1 1 0 001.823.075l1.38-2.759 3.018 3.02a1 1 0 001.414-1.415l-3.019-3.02 2.76-1.379a1 1 0 00-.076-1.822l-10-4z" clipRule="evenodd" />
                            </svg>
                          </motion.div>
                        )}
                      </motion.div>
                    </motion.div>
                  );
                })}
              </motion.div>

              {/* Bottom CTA */}
              <motion.div 
                variants={itemVariants}
                className="text-center pt-16"
              >
                <motion.div className="space-y-8">
                  <motion.p 
                    className="text-lg text-white/70 max-w-2xl mx-auto"
                    style={{ fontFamily: "'Inter', sans-serif" }}
                  >
                    Ready to transform your ideas into reality? Let's discuss your project 
                    and create something extraordinary together.
                  </motion.p>
                  
                  <motion.div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <motion.button
                      whileHover={{ scale: 1.02, y: -2 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={handleStartProject}
                      className="group px-8 py-4 bg-white text-black rounded-2xl font-semibold text-base transition-all duration-300 shadow-xl hover:shadow-2xl relative overflow-hidden"
                    >
                      <span className="relative z-10">Start Your Project</span>
                      <div className="absolute inset-0 bg-gradient-to-r from-gray-100 to-white opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </motion.button>
                    
                    <motion.button
                      whileHover={{ scale: 1.02, y: -2 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={handleViewProcess}
                      className="group px-8 py-4 border-2 border-white/30 hover:border-white/50 rounded-2xl font-semibold text-base transition-all duration-300 backdrop-blur-sm hover:bg-white/10 text-white"
                    >
                      <span className="flex items-center justify-center space-x-2">
                        <span>View Our Process</span>
                        <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </span>
                    </motion.button>
                  </motion.div>
                </motion.div>
              </motion.div>
            </motion.div>
          )}
        </div>
        
        {/* Additional Background Elements */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          {/* Subtle Grid Pattern */}
          <div className="absolute inset-0 bg-grid-pattern opacity-[0.02]"></div>
          
          {/* Floating Geometric Shapes */}
          {[...Array(4)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-6 h-6 border border-white/10 rounded backdrop-blur-sm"
              style={{
                left: `${10 + Math.random() * 80}%`,
                top: `${10 + Math.random() * 80}%`,
                rotate: `${Math.random() * 360}deg`,
              }}
              animate={{
                y: [-20, 20, -20],
                rotate: [0, 180, 360],
                opacity: [0.1, 0.3, 0.1],
              }}
              transition={{
                duration: 12 + Math.random() * 8,
                repeat: Infinity,
                delay: Math.random() * 5,
              }}
            />
          ))}
        </div>
      </section>
      
      {/* Enhanced Styles */}
      <style jsx global>{`
        .bg-grid-pattern {
          background-image: 
            linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px);
          background-size: 50px 50px;
        }
        
        /* Custom touch styles for mobile */
        @media (max-width: 768px) {
          .group:active {
            transform: scale(0.98);
          }
        }
      `}</style>
    </>
  );
};

export default ServicesSection;