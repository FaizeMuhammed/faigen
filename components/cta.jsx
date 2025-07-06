'use client'
import { useEffect, useState } from "react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { TrendingUp, Rocket, Target, Lightbulb } from "lucide-react";

const CTASection = () => {
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
        staggerChildren: 0.15,
        delayChildren: 0.2
      }
    }
  };
  
  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
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

  const floatingVariants = {
    hidden: { y: 20, opacity: 0, scale: 0.8 },
    visible: {
      y: 0,
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
        duration: 1
      }
    }
  };
  
  return (
    <>
      {/* Background Elements */}
      <div className="fixed inset-0 -z-10 overflow-hidden">
        {/* Gradient Orbs */}
        <div className="absolute top-1/2 -left-1/4 w-96 h-96 bg-gradient-to-r from-blue-400/15 to-purple-600/15 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-1/3 -right-1/4 w-96 h-96 bg-gradient-to-r from-green-400/15 to-cyan-600/15 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '4s' }}></div>
        
        {/* Floating particles */}
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-black/8 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [-20, 20, -20],
              opacity: [0.1, 0.4, 0.1],
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

      {/* CTA Section */}
      <section 
        ref={sectionRef}
        className="relative py-20 lg:py-32 px-6 md:px-12 lg:px-20 bg-white/50 backdrop-blur-sm overflow-hidden"
      >
        <div className="max-w-6xl mx-auto">
          {mounted && (
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              className="text-center space-y-12"
            >
              {/* Growth Badge */}
              <motion.div 
                variants={itemVariants}
                className="flex justify-center"
              >
                <motion.div 
                  className="inline-flex items-center space-x-3 px-6 py-3 bg-black/5 backdrop-blur-sm rounded-full border border-black/10"
                  whileHover={{ scale: 1.05 }}
                >
                  <motion.div 
                    className="w-6 h-6 text-green-600"
                    animate={{ 
                      scale: [1, 1.2, 1],
                      rotate: [0, 10, -10, 0]
                    }}
                    transition={{ 
                      duration: 3, 
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  >
                    <TrendingUp className="w-full h-full" />
                  </motion.div>
                  <span className="text-base font-semibold text-black/80 tracking-wide">
                    LET'S GROW TOGETHER
                  </span>
                </motion.div>
              </motion.div>
              
              {/* Main Heading */}
              <motion.div variants={itemVariants} className="space-y-6">
                <motion.h2 
                  className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-[0.9] tracking-tight"
                  style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                >
                  <span className="block text-black">Have a Vision?</span>
                  <span className="block mt-2">
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-black via-gray-600 to-black">
                      Let's Build It.
                    </span>
                  </span>
                </motion.h2>
                
                <motion.p 
                  className="text-xl lg:text-2xl text-black/70 leading-relaxed max-w-4xl mx-auto"
                  style={{ fontFamily: "'Inter', sans-serif" }}
                >
                  Book a free strategy session with our experts and turn your ideas 
                  into a product roadmap.
                </motion.p>
              </motion.div>

              {/* CTA Buttons */}
              <motion.div 
                variants={itemVariants}
                className="flex flex-col sm:flex-row gap-6 justify-center pt-8"
              >
                <motion.button
                  whileHover={{ 
                    scale: 1.02, 
                    y: -4,
                    boxShadow: "0 20px 40px rgba(0,0,0,0.15)"
                  }}
                  whileTap={{ scale: 0.98 }}
                  className="group px-10 py-5 bg-black text-white rounded-2xl font-semibold text-lg transition-all duration-300 shadow-xl hover:shadow-2xl relative overflow-hidden"
                >
                  <span className="relative z-10 flex items-center justify-center space-x-2">
                    <span>Start Your Project</span>
                    <motion.svg 
                      className="w-5 h-5" 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                      animate={{ x: [0, 3, 0] }}
                      transition={{ 
                        duration: 2, 
                        repeat: Infinity,
                        ease: "easeInOut" 
                      }}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </motion.svg>
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-gray-900 to-black opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </motion.button>
                
                <motion.button
                  whileHover={{ 
                    scale: 1.02, 
                    y: -4,
                    borderColor: "rgba(0,0,0,0.4)"
                  }}
                  whileTap={{ scale: 0.98 }}
                  className="group px-10 py-5 border-2 border-black/20 hover:border-black/40 rounded-2xl font-semibold text-lg transition-all duration-300 backdrop-blur-sm hover:bg-black/5"
                >
                  <span className="flex items-center justify-center space-x-2 text-black/80 group-hover:text-black">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                    </svg>
                    <span>Talk to a Developer</span>
                  </span>
                </motion.button>
              </motion.div>

              {/* Visual Elements */}
              <motion.div 
                variants={containerVariants}
                className="relative pt-16"
              >
                {/* Floating achievement cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 max-w-4xl mx-auto">
                  {[
                    { 
                      icon: Rocket, 
                      title: "Fast Launch", 
                      desc: "From idea to MVP in weeks",
                      delay: 0.2,
                      color: "text-blue-600"
                    },
                    { 
                      icon: Target, 
                      title: "Strategic Focus", 
                      desc: "Clear roadmap & milestones",
                      delay: 0.4,
                      color: "text-purple-600"
                    },
                    { 
                      icon: Lightbulb, 
                      title: "Expert Guidance", 
                      desc: "Industry best practices",
                      delay: 0.6,
                      color: "text-orange-600"
                    }
                  ].map((item, index) => {
                    const IconComponent = item.icon;
                    return (
                    <motion.div
                      key={index}
                      variants={floatingVariants}
                      transition={{ delay: item.delay }}
                      className="group"
                    >
                      <motion.div 
                        className="p-6 bg-white/70 backdrop-blur-xl rounded-2xl border border-black/10 shadow-lg hover:shadow-xl transition-all duration-300"
                        whileHover={{ 
                          y: -5,
                          scale: 1.02
                        }}
                      >
                        <motion.div 
                          className={`w-8 h-8 mb-3 ${item.color}`}
                          animate={{ 
                            rotate: [0, 10, -10, 0],
                            scale: [1, 1.1, 1]
                          }}
                          transition={{ 
                            duration: 4, 
                            repeat: Infinity,
                            delay: index * 0.5
                          }}
                        >
                          <IconComponent className="w-full h-full" />
                        </motion.div>
                        <h4 
                          className="text-lg font-bold text-black mb-2"
                          style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                        >
                          {item.title}
                        </h4>
                        <p 
                          className="text-black/70 text-sm"
                          style={{ fontFamily: "'Inter', sans-serif" }}
                        >
                          {item.desc}
                        </p>
                      </motion.div>
                    </motion.div>
                    );
                  })}
                </div>

                {/* Connecting lines */}
                <svg className="absolute inset-0 w-full h-full pointer-events-none hidden md:block" viewBox="0 0 800 200">
                  <motion.path
                    d="M150,100 Q400,50 650,100"
                    stroke="rgba(0,0,0,0.1)"
                    strokeWidth="2"
                    fill="none"
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={{ 
                      pathLength: [0, 1, 0],
                      opacity: [0, 0.5, 0]
                    }}
                    transition={{ 
                      duration: 4,
                      repeat: Infinity,
                      delay: 2
                    }}
                  />
                </svg>
              </motion.div>
            </motion.div>
          )}
        </div>
        
        {/* Additional Background Elements */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          {/* Subtle Grid Pattern */}
          <div className="absolute inset-0 bg-grid-pattern opacity-[0.01]"></div>
          
          {/* Geometric Shapes */}
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-8 h-8 border border-black/5 rounded-lg backdrop-blur-sm"
              style={{
                left: `${10 + Math.random() * 80}%`,
                top: `${20 + Math.random() * 60}%`,
                rotate: `${Math.random() * 360}deg`,
              }}
              animate={{
                y: [-15, 15, -15],
                rotate: [0, 180, 360],
                opacity: [0.05, 0.2, 0.05],
              }}
              transition={{
                duration: 12 + Math.random() * 8,
                repeat: Infinity,
                delay: Math.random() * 5,
              }}
            />
          ))}

          {/* Central glow effect */}
          <motion.div 
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-blue-500/5 to-purple-500/5 rounded-full blur-3xl"
            animate={{ 
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.6, 0.3]
            }}
            transition={{ 
              duration: 8, 
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        </div>
      </section>
      
      {/* Enhanced Styles */}
      <style jsx global>{`
        .bg-grid-pattern {
          background-image: 
            linear-gradient(rgba(0,0,0,0.02) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0,0,0,0.02) 1px, transparent 1px);
          background-size: 50px 50px;
        }
      `}</style>
    </>
  );
};

export default CTASection;