'use client'
import { useEffect, useState } from "react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const ViewProcessPage = () => {
  const [mounted, setMounted] = useState(false);
  const [activeStep, setActiveStep] = useState(0);
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

  const processSteps = [
    {
      id: 1,
      title: "Discovery & Strategy",
      duration: "1-2 weeks",
      description: "We dive deep into your business goals, target audience, and technical requirements to create a comprehensive project roadmap.",
      activities: [
        "Stakeholder interviews",
        "Market research",
        "Technical feasibility analysis",
        "Project timeline & milestones"
      ],
      deliverables: ["Project brief", "Technical specification", "Timeline & budget"],
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      ),
      gradient: "from-yellow-500/30 to-orange-500/30",
      borderGradient: "from-yellow-500/50 to-orange-500/50"
    },
    {
      id: 2,
      title: "Design & Prototyping",
      duration: "2-3 weeks",
      description: "Our design team creates intuitive user experiences and stunning visual interfaces that align with your brand and user needs.",
      activities: [
        "User experience mapping",
        "Wireframes & mockups",
        "Interactive prototypes",
        "Design system creation"
      ],
      deliverables: ["UI/UX designs", "Interactive prototype", "Design system"],
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zM21 5a2 2 0 00-2-2h-4a2 2 0 00-2 2v12a4 4 0 004 4h4a2 2 0 002-2V5z" />
        </svg>
      ),
      gradient: "from-purple-500/30 to-pink-500/30",
      borderGradient: "from-purple-500/50 to-pink-500/50"
    },
    {
      id: 3,
      title: "Development & Implementation",
      duration: "4-8 weeks",
      description: "Our expert developers bring your design to life using cutting-edge technologies and best practices for optimal performance.",
      activities: [
        "Frontend development",
        "Backend architecture",
        "Database design",
        "API integration",
        "Quality assurance testing"
      ],
      deliverables: ["Functional application", "Admin dashboard", "API documentation"],
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
        </svg>
      ),
      gradient: "from-blue-500/30 to-cyan-500/30",
      borderGradient: "from-blue-500/50 to-cyan-500/50"
    },
    {
      id: 4,
      title: "Testing & Optimization",
      duration: "1-2 weeks",
      description: "Rigorous testing across devices and platforms ensures your application performs flawlessly for every user.",
      activities: [
        "Cross-platform testing",
        "Performance optimization",
        "Security auditing",
        "User acceptance testing",
        "Bug fixes & refinements"
      ],
      deliverables: ["Test reports", "Performance metrics", "Security audit"],
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      gradient: "from-green-500/30 to-emerald-500/30",
      borderGradient: "from-green-500/50 to-emerald-500/50"
    },
    {
      id: 5,
      title: "Launch & Deployment",
      duration: "1 week",
      description: "We handle the complete deployment process and ensure your application goes live smoothly with proper monitoring.",
      activities: [
        "Production deployment",
        "Domain & hosting setup",
        "Analytics integration",
        "Performance monitoring",
        "Team training"
      ],
      deliverables: ["Live application", "Deployment guide", "Training materials"],
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      gradient: "from-indigo-500/30 to-blue-500/30",
      borderGradient: "from-indigo-500/50 to-blue-500/50"
    },
    {
      id: 6,
      title: "Support & Maintenance",
      duration: "Ongoing",
      description: "Continuous support, updates, and enhancements to keep your application running optimally and evolving with your business.",
      activities: [
        "24/7 monitoring",
        "Regular updates",
        "Feature enhancements",
        "Performance optimization",
        "Technical support"
      ],
      deliverables: ["Monthly reports", "Update releases", "Support documentation"],
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192L5.636 18.364M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg>
      ),
      gradient: "from-red-500/30 to-pink-500/30",
      borderGradient: "from-red-500/50 to-pink-500/50"
    }
  ];

  const principles = [
    {
      title: "Agile Methodology",
      description: "Iterative development with regular feedback loops",
      icon: "🔄"
    },
    {
      title: "Transparent Communication",
      description: "Regular updates and open communication channels",
      icon: "💬"
    },
    {
      title: "Quality First",
      description: "Rigorous testing and code review processes",
      icon: "✨"
    },
    {
      title: "Client Collaboration",
      description: "Close partnership throughout the entire journey",
      icon: "🤝"
    }
  ];

  return (
    <>
      {/* Background Elements */}
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute top-1/4 -left-1/3 w-96 h-96 bg-gradient-to-r from-purple-400/15 to-blue-600/15 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-2/3 -right-1/3 w-96 h-96 bg-gradient-to-r from-green-400/15 to-cyan-600/15 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '3s' }}></div>
        
        {[...Array(10)].map((_, i) => (
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

      <section 
        ref={sectionRef}
        className="relative min-h-screen py-20 lg:py-32 px-6 md:px-12 lg:px-20 bg-black"
      >
        <div className="max-w-7xl mx-auto">
          {mounted && (
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              className="space-y-20"
            >
              {/* Header */}
              <motion.div 
                variants={itemVariants}
                className="text-center space-y-6"
              >
                <motion.div 
                  className="inline-flex items-center space-x-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20"
                >
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                  <span className="text-sm font-medium text-white/80">Our Process</span>
                </motion.div>
                
                <motion.h1 
                  className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-[0.9] tracking-tight"
                  style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                >
                  <span className="block text-white">How We Turn</span>
                  <span className="block">
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-blue-400 to-purple-400">
                      Ideas Into Reality
                    </span>
                  </span>
                </motion.h1>
                
                <motion.p 
                  className="text-lg lg:text-xl text-white/70 leading-relaxed max-w-3xl mx-auto"
                  style={{ fontFamily: "'Inter', sans-serif" }}
                >
                  Our proven 6-step process ensures your project is delivered on time, 
                  on budget, and exceeds your expectations. From concept to launch and beyond.
                </motion.p>
              </motion.div>

              {/* Process Overview */}
              <motion.div 
                variants={itemVariants}
                className="grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-8"
              >
                {principles.map((principle, index) => (
                  <motion.div
                    key={principle.title}
                    variants={itemVariants}
                    className="text-center space-y-4 p-6 bg-white/10 backdrop-blur-xl rounded-2xl border border-white/20"
                    whileHover={{ y: -5 }}
                  >
                    <div className="text-4xl">{principle.icon}</div>
                    <h3 className="text-lg font-bold text-white" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                      {principle.title}
                    </h3>
                    <p className="text-white/70 text-sm">
                      {principle.description}
                    </p>
                  </motion.div>
                ))}
              </motion.div>

              {/* Main Process Steps */}
              <motion.div 
                variants={itemVariants}
                className="space-y-8"
              >
                <div className="text-center">
                  <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                    Step-by-Step Process
                  </h2>
                  <p className="text-white/70 max-w-2xl mx-auto">
                    Click on any step to learn more about our detailed approach and what you can expect.
                  </p>
                </div>

                <div className="space-y-6">
                  {processSteps.map((step, index) => (
                    <motion.div
                      key={step.id}
                      variants={itemVariants}
                      className="group cursor-pointer"
                      onClick={() => setActiveStep(activeStep === index ? -1 : index)}
                    >
                      <motion.div 
                        className={`relative p-8 bg-white/10 backdrop-blur-xl rounded-3xl border border-white/20 transition-all duration-500 ${
                          activeStep === index ? 'bg-white/15 border-white/30' : 'hover:bg-white/12'
                        }`}
                        whileHover={{ y: -4 }}
                      >
                        {/* Background Gradient on Active */}
                        <motion.div 
                          className={`absolute inset-0 bg-gradient-to-br ${step.gradient} opacity-0 ${
                            activeStep === index ? 'opacity-100' : 'group-hover:opacity-50'
                          } transition-opacity duration-500 rounded-3xl`}
                        />
                        
                        {/* Content */}
                        <div className="relative z-10">
                          <div className="flex items-start space-x-6">
                            {/* Step Number & Icon */}
                            <div className="flex-shrink-0">
                              <motion.div 
                                className="w-16 h-16 bg-white/10 backdrop-blur-xl rounded-2xl flex items-center justify-center text-white border border-white/20 relative"
                                whileHover={{ rotate: 5 }}
                              >
                                {step.icon}
                                
                                {/* Step Number */}
                                <div className="absolute -top-2 -right-2 w-6 h-6 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-xs font-bold text-white">
                                  {step.id}
                                </div>
                              </motion.div>
                            </div>
                            
                            {/* Main Content */}
                            <div className="flex-1 space-y-4">
                              <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                                <div>
                                  <h3 className="text-2xl font-bold text-white mb-2" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                                    {step.title}
                                  </h3>
                                  <div className="inline-flex items-center space-x-2 px-3 py-1 bg-white/10 backdrop-blur-sm rounded-full border border-white/20">
                                    <svg className="w-4 h-4 text-white/70" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                    <span className="text-sm text-white/70">{step.duration}</span>
                                  </div>
                                </div>
                                
                                <motion.div
                                  animate={{ rotate: activeStep === index ? 180 : 0 }}
                                  transition={{ duration: 0.3 }}
                                >
                                  <svg className="w-6 h-6 text-white/70" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                  </svg>
                                </motion.div>
                              </div>
                              
                              <p className="text-white/80 leading-relaxed">
                                {step.description}
                              </p>
                              
                              {/* Expanded Content */}
                              <motion.div
                                initial={false}
                                animate={{ 
                                  height: activeStep === index ? 'auto' : 0,
                                  opacity: activeStep === index ? 1 : 0 
                                }}
                                transition={{ duration: 0.3 }}
                                className="overflow-hidden"
                              >
                                <div className="pt-6 border-t border-white/20 grid grid-cols-1 md:grid-cols-2 gap-6">
                                  <div>
                                    <h4 className="text-lg font-semibold text-white mb-4">Activities</h4>
                                    <ul className="space-y-2">
                                      {step.activities.map((activity, idx) => (
                                        <li key={idx} className="flex items-center space-x-3 text-white/70">
                                          <div className="w-1.5 h-1.5 bg-blue-400 rounded-full"></div>
                                          <span>{activity}</span>
                                        </li>
                                      ))}
                                    </ul>
                                  </div>
                                  
                                  <div>
                                    <h4 className="text-lg font-semibold text-white mb-4">Deliverables</h4>
                                    <div className="space-y-2">
                                      {step.deliverables.map((deliverable, idx) => (
                                        <div key={idx} className="flex items-center space-x-3 px-3 py-2 bg-white/10 rounded-lg">
                                          <svg className="w-4 h-4 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                          </svg>
                                          <span className="text-white/80">{deliverable}</span>
                                        </div>
                                      ))}
                                    </div>
                                  </div>
                                </div>
                              </motion.div>
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* CTA Section */}
              <motion.div 
                variants={itemVariants}
                className="text-center space-y-8 pt-16"
              >
                <div className="p-8 bg-gradient-to-br from-blue-500/20 to-purple-500/20 backdrop-blur-xl rounded-3xl border border-white/20">
                  <h3 className="text-3xl font-bold text-white mb-4" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                    Ready to Start Your Project?
                  </h3>
                  <p className="text-white/70 text-lg mb-8 max-w-2xl mx-auto">
                    Our process has helped dozens of companies bring their ideas to life. 
                    Let's discuss how we can help you achieve your goals.
                  </p>
                  
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <motion.button
                      whileHover={{ scale: 1.02, y: -2 }}
                      whileTap={{ scale: 0.98 }}
                      className="group px-8 py-4 bg-white text-black rounded-2xl font-semibold text-base transition-all duration-300 shadow-xl hover:shadow-2xl relative overflow-hidden"
                    >
                      <span className="relative z-10">Schedule a Call</span>
                      <div className="absolute inset-0 bg-gradient-to-r from-gray-100 to-white opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </motion.button>
                    
                    <motion.button
                      whileHover={{ scale: 1.02, y: -2 }}
                      whileTap={{ scale: 0.98 }}
                      className="group px-8 py-4 border-2 border-white/30 hover:border-white/50 rounded-2xl font-semibold text-base transition-all duration-300 backdrop-blur-sm hover:bg-white/10 text-white"
                    >
                      <span className="flex items-center justify-center space-x-2">
                        <span>Start Your Project</span>
                        <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </span>
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </div>
      </section>
    </>
  );
};

export default ViewProcessPage;