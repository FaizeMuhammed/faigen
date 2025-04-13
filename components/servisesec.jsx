'use client'
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const ServicesSection = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [mounted, setMounted] = useState(false);
  
  const services = [
    {
      title: "Web Development",
      description: "Custom, responsive websites and web applications built with Next.js and modern frontend technologies.",
      features: ["Responsive Design", "Next.js", "SEO Optimization", "Performance-First Approach", "Custom CMS Integration"]
    },
    {
      title: "Software Development",
      description: "Scalable software solutions tailored to your business needs with cutting-edge technologies.",
      features: ["Custom Business Software", "Enterprise Solutions", "Cloud Applications", "API Development", "Maintenance & Support"]
    },
    {
      title: "App Development",
      description: "Native and cross-platform mobile applications designed to deliver exceptional user experiences.",
      features: ["iOS & Android Apps", "React Native", "Flutter", "App Store Optimization", "Push Notifications"]
    },
    {
      title: "SEO & Landing Pages",
      description: "High-converting landing pages and comprehensive SEO strategies to maximize your online presence.",
      features: ["Conversion-Focused Design", "A/B Testing", "SEO Optimization", "Analytics Integration", "Performance Metrics"]
    },
    {
      title: "SaaS Products",
      description: "End-to-end SaaS product development from concept to market-ready solutions.",
      features: ["Subscription Models", "Multi-tenancy", "Scalable Architecture", "User Authentication", "Payment Integration"]
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
  }, []);
  
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
  
  return (
    <section className="py-20 px-4 md:px-8 max-w-7xl mx-auto w-full relative z-10">
      {mounted && (
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {/* Section heading */}
          <motion.div variants={itemVariants} className="mb-16 text-center">
            <h2 
              className="text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight leading-none mb-4"
              style={{ fontFamily: "'Montserrat', sans-serif" }}
            >
              <span className="block">Our</span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-black via-gray-700 to-black">
                Services
              </span>
            </h2>
            <div className="w-24 h-1 bg-black/20 mx-auto my-6"></div>
            <p className="text-xl text-black/70 max-w-2xl mx-auto">
              Comprehensive digital solutions to elevate your business to the next level
            </p>
          </motion.div>
          
          {/* Tabs navigation */}
          <motion.div variants={itemVariants} className="mb-12">
            <div className="flex flex-wrap justify-center gap-2 md:gap-4">
              {services.map((service, index) => (
                <motion.button
                  key={index}
                  onClick={() => setActiveTab(index)}
                  className={`px-4 py-3 rounded-full text-sm md:text-base font-medium transition-all duration-300 ${
                    activeTab === index 
                      ? "bg-black text-white shadow-md" 
                      : "bg-white/80 text-black/70 border border-black/10 hover:bg-white hover:shadow-sm"
                  }`}
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.97 }}
                >
                  {service.title}
                </motion.button>
              ))}
            </div>
          </motion.div>
          
          {/* Content area */}
          <motion.div 
            variants={itemVariants}
            className="bg-white/80 backdrop-blur-sm border border-black/10 rounded-2xl p-6 md:p-10 shadow-xl"
          >
            {services.map((service, index) => (
              <div 
                key={index}
                className={`${activeTab === index ? "block" : "hidden"}`}
              >
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  key={index}
                  className="flex flex-col md:flex-row gap-8 md:gap-12"
                >
                  {/* Service details */}
                  <div className="flex-1">
                    <h3 className="text-3xl md:text-4xl font-bold mb-4">{service.title}</h3>
                    <p className="text-xl text-black/70 mb-8 leading-relaxed">
                      {service.description}
                    </p>
                    
                    {/* Service features */}
                    <div className="space-y-4">
                      <h4 className="text-xl font-semibold">Key Features</h4>
                      <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        {service.features.map((feature, i) => (
                          <motion.li 
                            custom={i}
                            variants={featureVariants}
                            initial="hidden"
                            animate="visible"
                            key={i}
                            className="flex items-center gap-2"
                          >
                            <div className="w-2 h-2 bg-black rounded-full"></div>
                            <span>{feature}</span>
                          </motion.li>
                        ))}
                      </ul>
                    </div>
                    
                    <motion.button
                      className="mt-10 px-8 py-3 bg-black text-white rounded-full font-medium inline-flex items-center gap-2 group transition-all duration-300"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.97 }}
                    >
                      Learn More
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
                  </div>
                  
                  {/* Service illustration */}
                  <div className="md:w-2/5 flex items-center justify-center">
                    <div className="relative w-full aspect-square max-w-md">
                      <div className="absolute inset-0 border border-black/10 rounded-lg overflow-hidden backdrop-blur-sm bg-white/30">
                        <div className="absolute inset-0 bg-gradient-to-br from-transparent to-black/5"></div>
                        <div className="absolute inset-0 flex items-center justify-center">
                          {/* Abstract service-specific illustration would go here */}
                          <ServiceIllustration serviceIndex={index} />
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
            ))}
          </motion.div>
        </motion.div>
      )}
    </section>
  );
};

// Simple service illustrations component
const ServiceIllustration = ({ serviceIndex }) => {
  // Different SVG illustrations based on service type
  const illustrations = [
    // Web Development
    <svg key="web" className="w-full h-full p-8 text-black" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="40" y="40" width="120" height="120" rx="8" stroke="currentColor" strokeWidth="2" strokeOpacity="0.6" fill="none" />
      <path d="M40 60 H160" stroke="currentColor" strokeWidth="2" strokeOpacity="0.6" />
      <circle cx="50" cy="50" r="4" fill="currentColor" fillOpacity="0.6" />
      <circle cx="65" cy="50" r="4" fill="currentColor" fillOpacity="0.6" />
      <circle cx="80" cy="50" r="4" fill="currentColor" fillOpacity="0.6" />
      <path d="M60 80 L90 80" stroke="currentColor" strokeWidth="2" strokeOpacity="0.4" />
      <path d="M60 90 L140 90" stroke="currentColor" strokeWidth="2" strokeOpacity="0.4" />
      <path d="M60 100 L120 100" stroke="currentColor" strokeWidth="2" strokeOpacity="0.4" />
      <path d="M60 110 L130 110" stroke="currentColor" strokeWidth="2" strokeOpacity="0.4" />
      <path d="M60 120 L100 120" stroke="currentColor" strokeWidth="2" strokeOpacity="0.4" />
      <rect x="110" y="115" width="30" height="15" rx="4" stroke="currentColor" strokeWidth="1.5" fill="none" />
    </svg>,
    
    // Software Development
    <svg key="software" className="w-full h-full p-8 text-black" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M60 60 L90 90 L60 120" stroke="currentColor" strokeWidth="2" strokeOpacity="0.7" />
      <path d="M140 60 L110 90 L140 120" stroke="currentColor" strokeWidth="2" strokeOpacity="0.7" />
      <circle cx="100" cy="140" r="10" stroke="currentColor" strokeWidth="1.5" strokeOpacity="0.6" fill="none" />
      <circle cx="100" cy="140" r="5" fill="currentColor" fillOpacity="0.4" />
      <rect x="80" y="40" width="40" height="10" rx="5" stroke="currentColor" strokeWidth="1.5" strokeOpacity="0.6" fill="none" />
      <path d="M40 100 H160" stroke="currentColor" strokeWidth="1" strokeOpacity="0.3" strokeDasharray="4 4" />
      <path d="M100 40 V160" stroke="currentColor" strokeWidth="1" strokeOpacity="0.3" strokeDasharray="4 4" />
      <circle cx="70" cy="70" r="4" fill="currentColor" fillOpacity="0.5" />
      <circle cx="130" cy="70" r="4" fill="currentColor" fillOpacity="0.5" />
      <circle cx="70" cy="130" r="4" fill="currentColor" fillOpacity="0.5" />
      <circle cx="130" cy="130" r="4" fill="currentColor" fillOpacity="0.5" />
    </svg>,
    
    // App Development
    <svg key="app" className="w-full h-full p-8 text-black" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="70" y="40" width="60" height="120" rx="10" stroke="currentColor" strokeWidth="2" strokeOpacity="0.6" fill="none" />
      <path d="M70 60 H130" stroke="currentColor" strokeWidth="2" strokeOpacity="0.4" />
      <path d="M70 140 H130" stroke="currentColor" strokeWidth="2" strokeOpacity="0.4" />
      <circle cx="100" cy="150" r="4" stroke="currentColor" strokeWidth="1.5" strokeOpacity="0.5" fill="none" />
      <rect x="85" y="70" width="30" height="30" rx="4" stroke="currentColor" strokeWidth="1.5" strokeOpacity="0.5" fill="none" />
      <rect x="85" y="105" width="30" height="10" rx="2" stroke="currentColor" strokeWidth="1.5" strokeOpacity="0.5" fill="none" />
      <rect x="85" y="120" width="15" height="10" rx="2" stroke="currentColor" strokeWidth="1.5" strokeOpacity="0.5" fill="none" />
      <rect x="105" y="120" width="10" height="10" rx="2" stroke="currentColor" strokeWidth="1.5" strokeOpacity="0.5" fill="none" />
      <circle cx="100" cy="50" r="3" fill="currentColor" fillOpacity="0.5" />
    </svg>,
    
    // SEO & Landing Pages
    <svg key="seo" className="w-full h-full p-8 text-black" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M50 60 H150" stroke="currentColor" strokeWidth="3" strokeOpacity="0.7" />
      <path d="M60 80 H140" stroke="currentColor" strokeWidth="2" strokeOpacity="0.5" />
      <path d="M70 90 H130" stroke="currentColor" strokeWidth="1.5" strokeOpacity="0.4" />
      <path d="M50 110 H90" stroke="currentColor" strokeWidth="2" strokeOpacity="0.5" />
      <path d="M50 125 H80" stroke="currentColor" strokeWidth="2" strokeOpacity="0.5" />
      <path d="M110 110 H150" stroke="currentColor" strokeWidth="2" strokeOpacity="0.5" />
      <path d="M120 125 H150" stroke="currentColor" strokeWidth="2" strokeOpacity="0.5" />
      <circle cx="135" cy="145" r="15" stroke="currentColor" strokeWidth="2" strokeOpacity="0.6" fill="none" />
      <path d="M145 155 L160 170" stroke="currentColor" strokeWidth="2" strokeOpacity="0.6" />
      <path d="M40 40 L40 160 L160 160" stroke="currentColor" strokeWidth="1" strokeOpacity="0.3" />
      <circle cx="70" cy="140" r="3" fill="currentColor" fillOpacity="0.5" />
      <circle cx="90" cy="120" r="3" fill="currentColor" fillOpacity="0.5" />
      <circle cx="110" cy="130" r="3" fill="currentColor" fillOpacity="0.5" />
      <circle cx="130" cy="110" r="3" fill="currentColor" fillOpacity="0.5" />
    </svg>,
    
    // SaaS Products
    <svg key="saas" className="w-full h-full p-8 text-black" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="50" y="60" width="100" height="60" rx="6" stroke="currentColor" strokeWidth="2" strokeOpacity="0.6" fill="none" />
      <path d="M50 80 H150" stroke="currentColor" strokeWidth="1.5" strokeOpacity="0.4" />
      <circle cx="60" cy="70" r="3" fill="currentColor" fillOpacity="0.6" />
      <circle cx="70" cy="70" r="3" fill="currentColor" fillOpacity="0.6" />
      <circle cx="80" cy="70" r="3" fill="currentColor" fillOpacity="0.6" />
      <path d="M65 100 A15 15 0 0 1 95 100" stroke="currentColor" strokeWidth="1.5" strokeOpacity="0.5" />
      <circle cx="65" cy="100" r="4" fill="currentColor" fillOpacity="0.5" />
      <circle cx="95" cy="100" r="4" fill="currentColor" fillOpacity="0.5" />
      <circle cx="80" cy="100" r="4" fill="currentColor" fillOpacity="0.5" />
      <path d="M115 90 L125 90 L125 110 L115 110 Z" stroke="currentColor" strokeWidth="1.5" strokeOpacity="0.5" fill="none" />
      <path d="M125 90 L135 90 L135 110 L125 110 Z" stroke="currentColor" strokeWidth="1.5" strokeOpacity="0.5" fill="none" />
      <rect x="70" y="130" width="60" height="20" rx="4" stroke="currentColor" strokeWidth="1.5" strokeOpacity="0.5" fill="none" />
      <path d="M80 140 H120" stroke="currentColor" strokeWidth="1.5" strokeOpacity="0.4" />
    </svg>
  ];

  return illustrations[serviceIndex] || illustrations[0];
};

export default ServicesSection;