'use client'
import { useEffect, useState } from "react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const WhyChooseUsSection = () => {
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

  const cardVariants = {
    hidden: { y: 60, opacity: 0, scale: 0.95 },
    visible: {
      y: 0,
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 70,
        damping: 15,
        duration: 1
      }
    }
  };

  const advantages = [
    {
      title: "Deep Discovery",
      description: "We understand your problem before we offer a solution.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
      ),
      gradient: "from-blue-500/20 to-indigo-500/20",
      accentColor: "bg-blue-500"
    },
    {
      title: "Scalable by Design",
      description: "Built today to grow tomorrow.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
        </svg>
      ),
      gradient: "from-green-500/20 to-emerald-500/20",
      accentColor: "bg-green-500"
    },
    {
      title: "On-Time, On-Point",
      description: "We deliver. Period.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      gradient: "from-purple-500/20 to-pink-500/20",
      accentColor: "bg-purple-500"
    },
    {
      title: "Transparent Process",
      description: "Regular updates, full visibility, no surprises.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
        </svg>
      ),
      gradient: "from-orange-500/20 to-red-500/20",
      accentColor: "bg-orange-500"
    },
    {
      title: "Creative + Technical",
      description: "We blend design thinking with cutting-edge tech.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      ),
      gradient: "from-cyan-500/20 to-blue-500/20",
      accentColor: "bg-cyan-500"
    }
  ];
  
  return (
    <>
      {/* Background Elements */}
      <div className="fixed inset-0 -z-10 overflow-hidden">
        {/* Gradient Orbs */}
        <div className="absolute top-2/3 -left-1/4 w-96 h-96 bg-gradient-to-r from-indigo-400/15 to-purple-600/15 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-1/4 -right-1/4 w-96 h-96 bg-gradient-to-r from-emerald-400/15 to-teal-600/15 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '4s' }}></div>
        
        {/* Floating particles */}
        {[...Array(10)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-black/8 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [-20, 20, -20],
              opacity: [0.1, 0.3, 0.1],
            }}
            transition={{
              duration: 6 + Math.random() * 4,
              repeat: Infinity,
              delay: Math.random() * 3,
            }}
          />
        ))}
      </div>

      {/* Why Choose Us Section */}
      <section 
        ref={sectionRef}
        id="why-choose-us" 
        className="relative py-20 lg:py-32 px-6 md:px-12 lg:px-20 bg-white/30 backdrop-blur-sm"
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
                  <motion.div 
                    className="w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                  <span className="text-sm font-medium text-black/70">Why Choose Faigen</span>
                </motion.div>
                
                <motion.h2 
                  className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-[0.9] tracking-tight"
                  style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                >
                  <span className="block text-black">Why Faigen?</span>
                  <span className="block mt-2">
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-black via-gray-600 to-black">
                      Because We Think
                    </span>
                  </span>
                  <span className="block text-black">Beyond Code.</span>
                </motion.h2>
                
                <motion.p 
                  className="text-lg lg:text-xl text-black/60 leading-relaxed max-w-3xl mx-auto"
                  style={{ fontFamily: "'Inter', sans-serif" }}
                >
                  We're not just developers—we're digital strategists, creative problem-solvers, 
                  and reliable partners. Here's what sets us apart in a crowded marketplace.
                </motion.p>
              </motion.div>

              {/* Advantages Grid */}
              <motion.div 
                variants={containerVariants}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 lg:gap-8"
              >
                {advantages.map((advantage, index) => (
                  <motion.div
                    key={advantage.title}
                    variants={cardVariants}
                    className="group relative"
                  >
                    <motion.div 
                      className="relative h-full p-6 lg:p-8 bg-white/70 backdrop-blur-xl rounded-3xl border border-black/10 shadow-xl overflow-hidden transition-all duration-500 hover:shadow-2xl min-h-[300px] flex flex-col"
                      whileHover={{ 
                        y: -8,
                        transition: { type: "spring", stiffness: 300, damping: 20 }
                      }}
                    >
                      {/* Background Gradient on Hover */}
                      <motion.div 
                        className={`absolute inset-0 bg-gradient-to-br ${advantage.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                      />
                      
                      {/* Animated Border */}
                      <motion.div 
                        className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                        style={{ padding: '1px' }}
                      >
                        <div className="w-full h-full bg-white/90 backdrop-blur-xl rounded-3xl" />
                      </motion.div>
                      
                      {/* Content */}
                      <div className="relative z-10 space-y-6 text-center flex-1 flex flex-col">
                        {/* Icon */}
                        <motion.div 
                          className="mx-auto w-16 h-16 bg-black/90 backdrop-blur-xl rounded-2xl flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300"
                          whileHover={{ rotate: [0, -5, 5, 0] }}
                          transition={{ duration: 0.5 }}
                        >
                          {advantage.icon}
                          
                          {/* Glowing ring effect */}
                          <motion.div
                            className="absolute inset-0 rounded-2xl border-2 border-white/20 opacity-0 group-hover:opacity-100"
                            animate={{
                              scale: [1, 1.2, 1],
                            }}
                            transition={{ 
                              duration: 2, 
                              repeat: Infinity,
                            }}
                          />
                        </motion.div>
                        
                        {/* Title */}
                        <motion.h3 
                          className="text-xl lg:text-2xl font-bold text-black group-hover:text-black transition-colors duration-300"
                          style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                        >
                          {advantage.title}
                        </motion.h3>
                        
                        {/* Description */}
                        <motion.p 
                          className="text-black/70 group-hover:text-black/80 leading-relaxed transition-colors duration-300 flex-1"
                          style={{ fontFamily: "'Inter', sans-serif" }}
                        >
                          {advantage.description}
                        </motion.p>
                        
                        {/* Bottom accent */}
                        <motion.div 
                          className={`mx-auto w-12 h-1 ${advantage.accentColor} opacity-30 group-hover:opacity-60 rounded-full transition-opacity duration-300`}
                          whileHover={{ scaleX: 1.5 }}
                        />
                      </div>
                      
                      {/* Floating Elements */}
                      <motion.div
                        className="absolute top-4 right-4 w-12 h-12 border border-black/5 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                        animate={{ rotate: 360 }}
                        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                      />
                      
                      <motion.div
                        className="absolute bottom-4 left-4 w-2 h-2 bg-black/10 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                        animate={{ 
                          scale: [1, 1.5, 1],
                          opacity: [0.1, 0.4, 0.1]
                        }}
                        transition={{ duration: 3, repeat: Infinity }}
                      />
                    </motion.div>
                  </motion.div>
                ))}
              </motion.div>

              {/* Stats Section */}
              <motion.div 
                variants={itemVariants}
                className="border-t border-black/10 pt-16"
              >
                <motion.div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
                  {[
                    { number: "150+", label: "Projects Delivered" },
                    { number: "98%", label: "Client Satisfaction" },
                    { number: "24/7", label: "Support Available" },
                    { number: "5+", label: "Years of Excellence" }
                  ].map((stat, index) => (
                    <motion.div
                      key={stat.label}
                      className="text-center space-y-2"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 + 1 }}
                    >
                      <motion.div 
                        className="text-3xl lg:text-4xl font-bold text-black"
                        style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                        animate={{ scale: [1, 1.05, 1] }}
                        transition={{ duration: 2, repeat: Infinity, delay: index * 0.5 }}
                      >
                        {stat.number}
                      </motion.div>
                      <div 
                        className="text-sm lg:text-base text-black/60"
                        style={{ fontFamily: "'Inter', sans-serif" }}
                      >
                        {stat.label}
                      </div>
                    </motion.div>
                  ))}
                </motion.div>
              </motion.div>

              {/* CTA Section */}
              <motion.div 
                variants={itemVariants}
                className="text-center pt-16 space-y-8"
              >
                <motion.h3 
                  className="text-2xl lg:text-3xl font-bold text-black"
                  style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                >
                  Ready to Experience the Faigen Difference?
                </motion.h3>
                
                <motion.p 
                  className="text-lg text-black/70 max-w-2xl mx-auto"
                  style={{ fontFamily: "'Inter', sans-serif" }}
                >
                  Join our growing list of satisfied clients who've transformed their 
                  digital presence with our strategic approach and cutting-edge solutions.
                </motion.p>
                
                <motion.div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                  <motion.button
                    whileHover={{ scale: 1.02, y: -2 }}
                    whileTap={{ scale: 0.98 }}
                    className="group px-8 py-4 bg-black text-white rounded-2xl font-semibold text-base transition-all duration-300 shadow-xl hover:shadow-2xl relative overflow-hidden"
                  >
                    <span className="relative z-10">Let's Build Together</span>
                    <div className="absolute inset-0 bg-gradient-to-r from-gray-900 to-black opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </motion.button>
                  
                  <motion.button
                    whileHover={{ scale: 1.02, y: -2 }}
                    whileTap={{ scale: 0.98 }}
                    className="group px-8 py-4 border-2 border-black/20 hover:border-black/40 rounded-2xl font-semibold text-base transition-all duration-300 backdrop-blur-sm hover:bg-black/5"
                  >
                    <span className="flex items-center justify-center space-x-2">
                      <span>See Success Stories</span>
                      <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </span>
                  </motion.button>
                </motion.div>
              </motion.div>
            </motion.div>
          )}
        </div>
        
        {/* Additional Background Elements */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          {/* Subtle Grid Pattern */}
          <div className="absolute inset-0 bg-grid-pattern opacity-[0.01]"></div>
          
          {/* Geometric Accents */}
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-6 h-6 border border-black/5 rounded backdrop-blur-sm"
              style={{
                left: `${10 + Math.random() * 80}%`,
                top: `${10 + Math.random() * 80}%`,
                rotate: `${Math.random() * 360}deg`,
              }}
              animate={{
                y: [-15, 15, -15],
                rotate: [0, 180, 360],
                opacity: [0.05, 0.15, 0.05],
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
            linear-gradient(rgba(0,0,0,0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0,0,0,0.03) 1px, transparent 1px);
          background-size: 50px 50px;
        }
      `}</style>
    </>
  );
};

export default WhyChooseUsSection;