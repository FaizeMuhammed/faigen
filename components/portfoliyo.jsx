'use client'
import { useEffect, useState } from "react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const PortfolioSection = () => {
  const [mounted, setMounted] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);
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

  const projects = [
    {
      id: 1,
      title: "Event App UI",
      category: "Mobile Application",
      technology: "Flutter",
      result: "3x user growth",
      description: "A comprehensive event management application with real-time updates, social features, and seamless booking system.",
      features: ["Real-time notifications", "Social integration", "Payment gateway", "Event analytics"],
      duration: "3 months",
      client: "EventHub Inc.",
      gradient: "from-blue-500/30 to-purple-500/30",
      accentColor: "bg-blue-500",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
        </svg>
      )
    },
    {
      id: 2,
      title: "Library Manager Console",
      category: "Desktop Application",
      technology: "Dart",
      result: "Local storage & async power",
      description: "Advanced library management system with offline capabilities, book tracking, and member management features.",
      features: ["Offline functionality", "Book cataloging", "Member tracking", "Report generation"],
      duration: "2 months",
      client: "Central Library",
      gradient: "from-green-500/30 to-emerald-500/30",
      accentColor: "bg-green-500",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
      )
    },
    {
      id: 3,
      title: "Business Site",
      category: "Web Development",
      technology: "HTML/CSS",
      result: "Mobile-first, SEO boosted",
      description: "Modern business website with responsive design, optimized performance, and enhanced SEO capabilities.",
      features: ["Mobile-first design", "SEO optimization", "Fast loading", "Contact forms"],
      duration: "1 month",
      client: "TechCorp Solutions",
      gradient: "from-purple-500/30 to-pink-500/30",
      accentColor: "bg-purple-500",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
        </svg>
      )
    },
    {
      id: 4,
      title: "E-Commerce Platform",
      category: "Full Stack",
      technology: "React + Node.js",
      result: "200% sales increase",
      description: "Complete e-commerce solution with inventory management, payment processing, and analytics dashboard.",
      features: ["Inventory management", "Payment integration", "Admin dashboard", "Customer analytics"],
      duration: "4 months",
      client: "ShopMart",
      gradient: "from-orange-500/30 to-red-500/30",
      accentColor: "bg-orange-500",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17M17 13v6a2 2 0 01-2 2H9a2 2 0 01-2-2v-6m8 0V9a2 2 0 00-2-2H9a2 2 0 00-2 2v4.01" />
        </svg>
      )
    },
    {
      id: 5,
      title: "Finance Dashboard",
      category: "Web Application",
      technology: "Vue.js + Python",
      result: "Real-time analytics",
      description: "Comprehensive financial dashboard with real-time data visualization and automated reporting.",
      features: ["Real-time charts", "Data visualization", "Automated reports", "User permissions"],
      duration: "3.5 months",
      client: "FinanceFirst",
      gradient: "from-indigo-500/30 to-blue-500/30",
      accentColor: "bg-indigo-500",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      )
    },
    {
      id: 6,
      title: "Healthcare App",
      category: "Mobile Application",
      technology: "React Native",
      result: "10K+ active users",
      description: "Patient management application with appointment scheduling, medical records, and telemedicine features.",
      features: ["Appointment booking", "Medical records", "Video consultations", "Prescription tracking"],
      duration: "5 months",
      client: "MedCare Solutions",
      gradient: "from-cyan-500/30 to-teal-500/30",
      accentColor: "bg-cyan-500",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
      )
    }
  ];
  
  return (
    <>
      {/* Background Elements */}
      <div className="fixed inset-0 -z-10 overflow-hidden">
        {/* Gradient Orbs */}
        <div className="absolute top-1/3 -left-1/3 w-96 h-96 bg-gradient-to-r from-purple-400/10 to-blue-600/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '3s' }}></div>
        <div className="absolute bottom-1/2 -right-1/3 w-96 h-96 bg-gradient-to-r from-green-400/10 to-cyan-600/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '5s' }}></div>
        
        {/* Floating particles */}
        {[...Array(12)].map((_, i) => (
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
            }}
            transition={{
              duration: 5 + Math.random() * 5,
              repeat: Infinity,
              delay: Math.random() * 4,
            }}
          />
        ))}
      </div>

      {/* Portfolio Section */}
      <section 
        ref={sectionRef}
        id="portfolio" 
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
                  <div className="w-2 h-2 bg-orange-400 rounded-full animate-pulse"></div>
                  <span className="text-sm font-medium text-white/80">Our Portfolio</span>
                </motion.div>
                
                <motion.h2 
                  className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-[0.9] tracking-tight"
                  style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                >
                  <span className="block text-white">Success Stories</span>
                  <span className="block mt-2">
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-300 to-white">
                      that Speak for
                    </span>
                  </span>
                  <span className="block text-white">Themselves</span>
                </motion.h2>
                
                <motion.p 
                  className="text-lg lg:text-xl text-white/70 leading-relaxed max-w-3xl mx-auto"
                  style={{ fontFamily: "'Inter', sans-serif" }}
                >
                  From concept to deployment — here's how we turned ideas into impact. 
                  Each project represents our commitment to excellence and innovation.
                </motion.p>
              </motion.div>

              {/* Projects Grid */}
              <motion.div 
                variants={containerVariants}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
              >
                {projects.map((project, index) => (
                  <motion.div
                    key={project.id}
                    variants={cardVariants}
                    className="group relative cursor-pointer"
                    onClick={() => setSelectedProject(project)}
                  >
                    <motion.div 
                      className="relative h-full bg-white/10 backdrop-blur-xl rounded-3xl border border-white/20 shadow-2xl overflow-hidden transition-all duration-500 hover:shadow-white/10 hover:shadow-2xl"
                      whileHover={{ 
                        y: -12,
                        transition: { type: "spring", stiffness: 300, damping: 20 }
                      }}
                    >
                      {/* Background Gradient on Hover */}
                      <motion.div 
                        className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                      />
                      
                      {/* Project Image Placeholder */}
                      <div className="relative h-48 bg-gradient-to-br from-white/5 to-white/10 overflow-hidden">
                        <motion.div 
                          className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent"
                        />
                        
                        {/* Mock UI Elements */}
                        <div className="absolute inset-4 space-y-3">
                          <div className="flex items-center space-x-2">
                            <motion.div 
                              className={`w-8 h-8 ${project.accentColor} rounded-lg flex items-center justify-center text-white`}
                              whileHover={{ scale: 1.1, rotate: 5 }}
                            >
                              {project.icon}
                            </motion.div>
                            <div className="flex-1 h-2 bg-white/20 rounded-full">
                              <motion.div 
                                className={`h-full ${project.accentColor} rounded-full`}
                                initial={{ width: 0 }}
                                animate={{ width: "60%" }}
                                transition={{ delay: index * 0.1 + 1, duration: 1 }}
                              />
                            </div>
                          </div>
                          
                          <div className="space-y-2">
                            <div className="h-3 bg-white/20 rounded-full w-3/4"></div>
                            <div className="h-3 bg-white/10 rounded-full w-1/2"></div>
                          </div>
                          
                          <div className="absolute bottom-4 right-4">
                            <motion.div 
                              className="w-16 h-16 border-2 border-white/20 rounded-full"
                              animate={{ rotate: 360 }}
                              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                            />
                          </div>
                        </div>
                        
                        {/* Floating dots */}
                        {[...Array(3)].map((_, i) => (
                          <motion.div
                            key={i}
                            className="absolute w-2 h-2 bg-white/30 rounded-full"
                            style={{
                              left: `${20 + i * 25}%`,
                              top: `${60 + i * 10}%`,
                            }}
                            animate={{ 
                              y: [-5, 5, -5],
                              opacity: [0.3, 0.7, 0.3]
                            }}
                            transition={{
                              duration: 2 + i * 0.5,
                              repeat: Infinity,
                              delay: i * 0.3
                            }}
                          />
                        ))}
                      </div>
                      
                      {/* Content */}
                      <div className="relative z-10 p-6 space-y-4">
                        {/* Technology Badge */}
                        <motion.div className="flex items-center justify-between">
                          <span className="px-3 py-1 bg-white/10 group-hover:bg-white/20 backdrop-blur-sm rounded-full text-xs font-medium text-white/80 group-hover:text-white transition-all duration-300 border border-white/10">
                            {project.technology}
                          </span>
                          <span className="text-xs text-white/60 group-hover:text-white/80 transition-colors duration-300">
                            {project.category}
                          </span>
                        </motion.div>
                        
                        {/* Title */}
                        <motion.h3 
                          className="text-xl lg:text-2xl font-bold text-white group-hover:text-white transition-colors duration-300"
                          style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                        >
                          {project.title}
                        </motion.h3>
                        
                        {/* Description */}
                        <motion.p 
                          className="text-white/70 group-hover:text-white/90 leading-relaxed transition-colors duration-300 text-sm line-clamp-2"
                          style={{ fontFamily: "'Inter', sans-serif" }}
                        >
                          {project.description}
                        </motion.p>
                        
                        {/* Result */}
                        <motion.div className="flex items-center justify-between pt-4 border-t border-white/20 group-hover:border-white/30 transition-colors duration-300">
                          <div>
                            <motion.div 
                              className="text-lg font-bold text-white"
                              style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                            >
                              {project.result}
                            </motion.div>
                            <div className="text-xs text-white/60">Key Result</div>
                          </div>
                          
                          <motion.div
                            className="w-8 h-8 bg-white/10 group-hover:bg-white/20 rounded-full flex items-center justify-center transition-colors duration-300 border border-white/10"
                            whileHover={{ scale: 1.1 }}
                          >
                            <svg className="w-4 h-4 text-white/70 group-hover:text-white transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                          </motion.div>
                        </motion.div>
                      </div>
                      
                      {/* Hover overlay */}
                      <motion.div 
                        className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl"
                      />
                    </motion.div>
                  </motion.div>
                ))}
              </motion.div>

              {/* View All Projects Button */}
              <motion.div 
                variants={itemVariants}
                className="text-center pt-8"
              >
                <motion.button
                  whileHover={{ scale: 1.02, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  className="group px-8 py-4 border-2 border-white/30 hover:border-white/50 rounded-2xl font-semibold text-base transition-all duration-300 backdrop-blur-sm hover:bg-white/10 text-white"
                >
                  <span className="flex items-center justify-center space-x-2">
                    <span>View All Projects</span>
                    <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </span>
                </motion.button>
              </motion.div>

              {/* CTA Section */}
              <motion.div 
                variants={itemVariants}
                className="text-center pt-16 space-y-8"
              >
                <motion.h3 
                  className="text-2xl lg:text-3xl font-bold text-white"
                  style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                >
                  Ready to Create Your Success Story?
                </motion.h3>
                
                <motion.p 
                  className="text-lg text-white/70 max-w-2xl mx-auto"
                  style={{ fontFamily: "'Inter', sans-serif" }}
                >
                  Let's discuss your project and turn your vision into a digital reality 
                  that drives real business results.
                </motion.p>
                
                <motion.div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                  <motion.button
                    whileHover={{ scale: 1.02, y: -2 }}
                    whileTap={{ scale: 0.98 }}
                    className="group px-8 py-4 bg-white text-black rounded-2xl font-semibold text-base transition-all duration-300 shadow-xl hover:shadow-2xl relative overflow-hidden"
                  >
                    <span className="relative z-10">Start Your Project</span>
                    <div className="absolute inset-0 bg-gradient-to-r from-gray-100 to-white opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </motion.button>
                  
                  <motion.button
                    whileHover={{ scale: 1.02, y: -2 }}
                    whileTap={{ scale: 0.98 }}
                    className="group px-8 py-4 border-2 border-white/30 hover:border-white/50 rounded-2xl font-semibold text-base transition-all duration-300 backdrop-blur-sm hover:bg-white/10 text-white"
                  >
                    <span className="flex items-center justify-center space-x-2">
                      <span>Get Free Consultation</span>
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
          <div className="absolute inset-0 bg-grid-pattern opacity-[0.02]"></div>
          
          {/* Geometric Accents */}
          {[...Array(8)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-4 h-4 border border-white/10 rounded backdrop-blur-sm"
              style={{
                left: `${10 + Math.random() * 80}%`,
                top: `${10 + Math.random() * 80}%`,
                rotate: `${Math.random() * 360}deg`,
              }}
              animate={{
                y: [-10, 10, -10],
                rotate: [0, 180, 360],
                opacity: [0.1, 0.3, 0.1],
              }}
              transition={{
                duration: 10 + Math.random() * 8,
                repeat: Infinity,
                delay: Math.random() * 6,
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
          background-size: 40px 40px;
        }
        
        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </>
  );
};

export default PortfolioSection;