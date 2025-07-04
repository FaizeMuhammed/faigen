'use client'
import { useEffect, useState } from "react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const ServicesSection = () => {
  const [mounted, setMounted] = useState(false);
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
  }, []);
  
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
      gradient: "from-blue-500/20 to-cyan-500/20",
      borderGradient: "from-blue-500/30 to-cyan-500/30",
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
      gradient: "from-purple-500/20 to-pink-500/20",
      borderGradient: "from-purple-500/30 to-pink-500/30",
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
      gradient: "from-green-500/20 to-emerald-500/20",
      borderGradient: "from-green-500/30 to-emerald-500/30",
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
      gradient: "from-orange-500/20 to-red-500/20",
      borderGradient: "from-orange-500/30 to-red-500/30",
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
      gradient: "from-indigo-500/20 to-blue-500/20",
      borderGradient: "from-indigo-500/30 to-blue-500/30",
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
      gradient: "from-yellow-500/20 to-orange-500/20",
      borderGradient: "from-yellow-500/30 to-orange-500/30",
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
            className="absolute w-1.5 h-1.5 bg-black/15 rounded-full"
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
        className="relative py-20 lg:py-32 px-6 md:px-12 lg:px-20 bg-white/50 backdrop-blur-sm"
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
                  className="inline-flex items-center space-x-2 px-4 py-2 bg-black/5 backdrop-blur-sm rounded-full border border-black/10"
                >
                  <div className="w-2 h-2 bg-purple-500 rounded-full animate-pulse"></div>
                  <span className="text-sm font-medium text-black/70">Our Services</span>
                </motion.div>
                
                <motion.h2 
                  className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-[0.9] tracking-tight"
                  style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                >
                  <span className="block text-black">Our Expertise,</span>
                  <span className="block">
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-black via-gray-600 to-black">
                      Your Advantage
                    </span>
                  </span>
                </motion.h2>
                
                <motion.p 
                  className="text-lg lg:text-xl text-black/60 leading-relaxed max-w-3xl mx-auto"
                  style={{ fontFamily: "'Inter', sans-serif" }}
                >
                  We combine cutting-edge technology with innovative design to deliver 
                  solutions that drive real business results. Every service is crafted 
                  with precision and optimized for performance.
                </motion.p>
              </motion.div>

              {/* Services Grid */}
              <motion.div 
                variants={containerVariants}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
              >
                {services.map((service, index) => (
                  <motion.div
                    key={service.title}
                    variants={cardVariants}
                    className="group relative"
                  >
                    <motion.div 
                      className="relative h-full p-8 bg-white/70 backdrop-blur-xl rounded-3xl border border-black/10 shadow-xl overflow-hidden transition-all duration-500 hover:shadow-2xl"
                      whileHover={{ 
                        y: -8,
                        transition: { type: "spring", stiffness: 300, damping: 20 }
                      }}
                    >
                      {/* Background Gradient on Hover */}
                      <motion.div 
                        className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                      />
                      
                      {/* Border Gradient on Hover */}
                      <motion.div 
                        className={`absolute inset-0 rounded-3xl bg-gradient-to-br ${service.borderGradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                        style={{ padding: '1px' }}
                      >
                        <div className="w-full h-full bg-white/90 backdrop-blur-xl rounded-3xl" />
                      </motion.div>
                      
                      {/* Content */}
                      <div className="relative z-10 space-y-6">
                        {/* Icon */}
                        <motion.div 
                          className="w-16 h-16 bg-black/90 backdrop-blur-xl rounded-2xl flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300"
                          whileHover={{ rotate: 5 }}
                        >
                          {service.icon}
                          
                          {/* Glowing effect */}
                          <motion.div
                            className="absolute inset-0 rounded-2xl border-2 border-white/20 opacity-0 group-hover:opacity-100"
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
                          className="text-xl lg:text-2xl font-bold text-black group-hover:text-black transition-colors duration-300"
                          style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                        >
                          {service.title}
                        </motion.h3>
                        
                        {/* Description */}
                        <motion.p 
                          className="text-black/70 group-hover:text-black/80 leading-relaxed transition-colors duration-300"
                          style={{ fontFamily: "'Inter', sans-serif" }}
                        >
                          {service.description}
                        </motion.p>
                        
                        {/* Technologies */}
                        <motion.div className="flex flex-wrap gap-2">
                          {service.technologies.map((tech, techIndex) => (
                            <motion.span
                              key={tech}
                              className="px-3 py-1 bg-black/10 group-hover:bg-black/20 backdrop-blur-sm rounded-full text-xs font-medium text-black/70 group-hover:text-black transition-all duration-300"
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
                          className="pt-4 border-t border-black/10 group-hover:border-black/20 transition-colors duration-300"
                        >
                          <motion.button
                            className="flex items-center space-x-2 text-black/70 group-hover:text-black font-medium text-sm transition-colors duration-300"
                            whileHover={{ x: 4 }}
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
                        className="absolute top-4 right-4 w-20 h-20 border border-black/5 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                        animate={{ rotate: 360 }}
                        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                      />
                      
                      <motion.div
                        className="absolute bottom-4 left-4 w-2 h-2 bg-black/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                        animate={{ 
                          scale: [1, 1.5, 1],
                          opacity: [0.2, 0.6, 0.2]
                        }}
                        transition={{ duration: 3, repeat: Infinity }}
                      />
                    </motion.div>
                  </motion.div>
                ))}
              </motion.div>

              {/* Bottom CTA */}
              <motion.div 
                variants={itemVariants}
                className="text-center pt-16"
              >
                <motion.div className="space-y-8">
                  <motion.p 
                    className="text-lg text-black/70 max-w-2xl mx-auto"
                    style={{ fontFamily: "'Inter', sans-serif" }}
                  >
                    Ready to transform your ideas into reality? Let's discuss your project 
                    and create something extraordinary together.
                  </motion.p>
                  
                  <motion.div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <motion.button
                      whileHover={{ scale: 1.02, y: -2 }}
                      whileTap={{ scale: 0.98 }}
                      className="group px-8 py-4 bg-black text-white rounded-2xl font-semibold text-base transition-all duration-300 shadow-xl hover:shadow-2xl relative overflow-hidden"
                    >
                      <span className="relative z-10">Start Your Project</span>
                      <div className="absolute inset-0 bg-gradient-to-r from-gray-900 to-black opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </motion.button>
                    
                    <motion.button
                      whileHover={{ scale: 1.02, y: -2 }}
                      whileTap={{ scale: 0.98 }}
                      className="group px-8 py-4 border-2 border-black/20 hover:border-black/40 rounded-2xl font-semibold text-base transition-all duration-300 backdrop-blur-sm hover:bg-black/5"
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
          <div className="absolute inset-0 bg-grid-pattern opacity-[0.01]"></div>
          
          {/* Floating Geometric Shapes */}
          {[...Array(4)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-6 h-6 border border-black/10 rounded backdrop-blur-sm"
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
            linear-gradient(rgba(0,0,0,0.05) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0,0,0,0.05) 1px, transparent 1px);
          background-size: 50px 50px;
        }
      `}</style>
    </>
  );
};

export default ServicesSection;