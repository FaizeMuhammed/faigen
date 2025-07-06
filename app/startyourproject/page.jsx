'use client'
import { useEffect, useState } from "react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const StartProjectPage = () => {
  const [mounted, setMounted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    projectType: '',
    budget: '',
    timeline: '',
    description: '',
    features: []
  });
  
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

  const projectTypes = [
    { id: 'mobile', name: 'Mobile App', icon: '📱' },
    { id: 'web', name: 'Web Application', icon: '🌐' },
    { id: 'ecommerce', name: 'E-Commerce', icon: '🛒' },
    { id: 'design', name: 'UI/UX Design', icon: '🎨' },
    { id: 'backend', name: 'Backend/API', icon: '⚙️' },
    { id: 'other', name: 'Other', icon: '💡' }
  ];

  const budgetRanges = [
    '$5k - $15k',
    '$15k - $30k', 
    '$30k - $50k',
    '$50k - $100k',
    '$100k+'
  ];

  const timelineOptions = [
    '1-2 months',
    '3-4 months',
    '5-6 months',
    '6+ months'
  ];

  const handleInputChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleFeatureToggle = (feature) => {
    setFormData(prev => ({
      ...prev,
      features: prev.features.includes(feature)
        ? prev.features.filter(f => f !== feature)
        : [...prev.features, feature]
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Project submission:', formData);
    // Handle form submission logic here
  };

  const commonFeatures = [
    'User Authentication',
    'Payment Integration',
    'Push Notifications',
    'Analytics Dashboard',
    'Admin Panel',
    'API Integration',
    'Real-time Chat',
    'Social Media Integration'
  ];

  return (
    <>
      {/* Background Elements */}
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute top-1/4 -left-1/3 w-96 h-96 bg-gradient-to-r from-blue-400/15 to-purple-600/15 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-2/3 -right-1/3 w-96 h-96 bg-gradient-to-r from-green-400/15 to-cyan-600/15 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '3s' }}></div>
        
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
        <div className="max-w-6xl mx-auto">
          {mounted && (
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              className="space-y-16"
            >
              {/* Header */}
              <motion.div 
                variants={itemVariants}
                className="text-center space-y-6"
              >
                <motion.div 
                  className="inline-flex items-center space-x-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20"
                >
                  <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
                  <span className="text-sm font-medium text-white/80">Start Your Journey</span>
                </motion.div>
                
                <motion.h1 
                  className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-[0.9] tracking-tight"
                  style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                >
                  <span className="block text-white">Let's Build</span>
                  <span className="block">
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400">
                      Something Amazing
                    </span>
                  </span>
                </motion.h1>
                
                <motion.p 
                  className="text-lg lg:text-xl text-white/70 leading-relaxed max-w-3xl mx-auto"
                  style={{ fontFamily: "'Inter', sans-serif" }}
                >
                  Tell us about your vision, and we'll help bring it to life. 
                  Every great product starts with a conversation.
                </motion.p>
              </motion.div>

              {/* Main Form */}
              <motion.div 
                variants={itemVariants}
                className="grid grid-cols-1 lg:grid-cols-3 gap-8"
              >
                {/* Contact Info Sidebar */}
                <motion.div 
                  className="lg:col-span-1 space-y-6"
                  variants={itemVariants}
                >
                  <div className="p-8 bg-white/10 backdrop-blur-xl rounded-3xl border border-white/20">
                    <h3 className="text-2xl font-bold text-white mb-6" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                      Get in Touch
                    </h3>
                    
                    <div className="space-y-6">
                      <div className="flex items-center space-x-4">
                        <div className="w-12 h-12 bg-blue-500/20 rounded-2xl flex items-center justify-center">
                          <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                          </svg>
                        </div>
                        <div>
                          <p className="text-white/90 font-medium">Email</p>
                          <p className="text-white/70">hello@yourcompany.com</p>
                        </div>
                      </div>
                      
                      <div className="flex items-center space-x-4">
                        <div className="w-12 h-12 bg-green-500/20 rounded-2xl flex items-center justify-center">
                          <svg className="w-6 h-6 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                          </svg>
                        </div>
                        <div>
                          <p className="text-white/90 font-medium">Phone</p>
                          <p className="text-white/70">+1 (555) 123-4567</p>
                        </div>
                      </div>
                      
                      <div className="flex items-center space-x-4">
                        <div className="w-12 h-12 bg-purple-500/20 rounded-2xl flex items-center justify-center">
                          <svg className="w-6 h-6 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                        </div>
                        <div>
                          <p className="text-white/90 font-medium">Response Time</p>
                          <p className="text-white/70">Within 24 hours</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="p-6 bg-gradient-to-br from-blue-500/20 to-purple-500/20 backdrop-blur-xl rounded-3xl border border-white/20">
                    <h4 className="text-lg font-semibold text-white mb-3">Quick Start</h4>
                    <p className="text-white/70 text-sm mb-4">Need immediate assistance? Schedule a free consultation call.</p>
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="w-full px-4 py-3 bg-white text-black rounded-xl font-medium text-sm transition-all duration-300"
                    >
                      Schedule Call
                    </motion.button>
                  </div>
                </motion.div>

                {/* Main Form */}
                <motion.div 
                  className="lg:col-span-2"
                  variants={itemVariants}
                >
                  <form onSubmit={handleSubmit} className="p-8 bg-white/10 backdrop-blur-xl rounded-3xl border border-white/20 space-y-8">
                    {/* Personal Information */}
                    <div className="space-y-6">
                      <h3 className="text-xl font-bold text-white" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                        Tell us about yourself
                      </h3>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <label className="block text-white/80 font-medium mb-2">Name *</label>
                          <input
                            type="text"
                            required
                            value={formData.name}
                            onChange={(e) => handleInputChange('name', e.target.value)}
                            className="w-full px-4 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl text-white placeholder-white/50 focus:border-blue-400 focus:outline-none transition-colors"
                            placeholder="Your full name"
                          />
                        </div>
                        
                        <div>
                          <label className="block text-white/80 font-medium mb-2">Email *</label>
                          <input
                            type="email"
                            required
                            value={formData.email}
                            onChange={(e) => handleInputChange('email', e.target.value)}
                            className="w-full px-4 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl text-white placeholder-white/50 focus:border-blue-400 focus:outline-none transition-colors"
                            placeholder="your@email.com"
                          />
                        </div>
                        
                        <div>
                          <label className="block text-white/80 font-medium mb-2">Company</label>
                          <input
                            type="text"
                            value={formData.company}
                            onChange={(e) => handleInputChange('company', e.target.value)}
                            className="w-full px-4 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl text-white placeholder-white/50 focus:border-blue-400 focus:outline-none transition-colors"
                            placeholder="Your company name"
                          />
                        </div>
                        
                        <div>
                          <label className="block text-white/80 font-medium mb-2">Phone</label>
                          <input
                            type="tel"
                            value={formData.phone}
                            onChange={(e) => handleInputChange('phone', e.target.value)}
                            className="w-full px-4 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl text-white placeholder-white/50 focus:border-blue-400 focus:outline-none transition-colors"
                            placeholder="+1 (555) 123-4567"
                          />
                        </div>
                      </div>
                    </div>

                    {/* Project Type */}
                    <div className="space-y-6">
                      <h3 className="text-xl font-bold text-white" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                        What type of project? *
                      </h3>
                      
                      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                        {projectTypes.map((type) => (
                          <motion.button
                            key={type.id}
                            type="button"
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            onClick={() => handleInputChange('projectType', type.id)}
                            className={`p-4 rounded-2xl border-2 transition-all duration-300 text-left ${
                              formData.projectType === type.id
                                ? 'border-blue-400 bg-blue-500/20'
                                : 'border-white/20 hover:border-white/40 bg-white/5'
                            }`}
                          >
                            <div className="text-2xl mb-2">{type.icon}</div>
                            <div className="text-white font-medium text-sm">{type.name}</div>
                          </motion.button>
                        ))}
                      </div>
                    </div>

                    {/* Budget & Timeline */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-white/80 font-medium mb-4">Budget Range</label>
                        <div className="space-y-2">
                          {budgetRanges.map((range) => (
                            <motion.button
                              key={range}
                              type="button"
                              whileHover={{ x: 4 }}
                              onClick={() => handleInputChange('budget', range)}
                              className={`w-full px-4 py-3 rounded-xl border transition-all duration-300 text-left ${
                                formData.budget === range
                                  ? 'border-green-400 bg-green-500/20 text-white'
                                  : 'border-white/20 hover:border-white/40 bg-white/5 text-white/80'
                              }`}
                            >
                              {range}
                            </motion.button>
                          ))}
                        </div>
                      </div>
                      
                      <div>
                        <label className="block text-white/80 font-medium mb-4">Timeline</label>
                        <div className="space-y-2">
                          {timelineOptions.map((timeline) => (
                            <motion.button
                              key={timeline}
                              type="button"
                              whileHover={{ x: 4 }}
                              onClick={() => handleInputChange('timeline', timeline)}
                              className={`w-full px-4 py-3 rounded-xl border transition-all duration-300 text-left ${
                                formData.timeline === timeline
                                  ? 'border-purple-400 bg-purple-500/20 text-white'
                                  : 'border-white/20 hover:border-white/40 bg-white/5 text-white/80'
                              }`}
                            >
                              {timeline}
                            </motion.button>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Features */}
                    <div className="space-y-6">
                      <h3 className="text-xl font-bold text-white" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                        Common features you might need
                      </h3>
                      
                      <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                        {commonFeatures.map((feature) => (
                          <motion.button
                            key={feature}
                            type="button"
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            onClick={() => handleFeatureToggle(feature)}
                            className={`px-4 py-2 rounded-xl border text-sm transition-all duration-300 ${
                              formData.features.includes(feature)
                                ? 'border-blue-400 bg-blue-500/20 text-white'
                                : 'border-white/20 hover:border-white/40 bg-white/5 text-white/80'
                            }`}
                          >
                            {feature}
                          </motion.button>
                        ))}
                      </div>
                    </div>

                    {/* Description */}
                    <div className="space-y-4">
                      <h3 className="text-xl font-bold text-white" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                        Tell us about your project
                      </h3>
                      
                      <textarea
                        value={formData.description}
                        onChange={(e) => handleInputChange('description', e.target.value)}
                        rows={6}
                        className="w-full px-4 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl text-white placeholder-white/50 focus:border-blue-400 focus:outline-none transition-colors resize-none"
                        placeholder="Describe your project idea, goals, target audience, and any specific requirements..."
                      />
                    </div>

                    {/* Submit Button */}
                    <motion.button
                      type="submit"
                      whileHover={{ scale: 1.02, y: -2 }}
                      whileTap={{ scale: 0.98 }}
                      className="w-full px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-2xl font-semibold text-lg transition-all duration-300 shadow-xl hover:shadow-2xl relative overflow-hidden group"
                    >
                      <span className="relative z-10">Send Project Details</span>
                      <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </motion.button>
                  </form>
                </motion.div>
              </motion.div>
            </motion.div>
          )}
        </div>
      </section>
    </>
  );
};

export default StartProjectPage;