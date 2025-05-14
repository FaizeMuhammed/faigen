'use client'
import { useState, useEffect, useRef } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";

const PortfolioSection = () => {
  const [mounted, setMounted] = useState(false);
  const [showContactPopup, setShowContactPopup] = useState(false);
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: false, amount: 0.1 });
  
  // Portfolio projects data - just 3 featured projects
  const projects = [
    {
      id: 1,
      title: "Fintech Dashboard",
      description: "An intuitive financial analytics dashboard with real-time data visualization and comprehensive reporting tools for enterprise clients. The solution includes customizable widgets, interactive charts, and secure data integration capabilities that help financial institutions monitor performance metrics and make data-driven decisions.",
      technologies: ["React", "Next.js", "TailwindCSS", "Chart.js"],
    },
    {
      id: 2,
      title: "E-commerce Mobile App",
      description: "A cross-platform shopping application with seamless checkout experience and personalized product recommendations. Features include user authentication, product search and filtering, wishlist functionality, shopping cart management, secure payment processing, order tracking, and push notifications for promotions and delivery updates.",
      technologies: ["React Native", "Node.js", "Firebase", "Stripe"],
    },
    {
      id: 3,
      title: "Healthcare Management System",
      description: "Complete hospital management solution with patient records, scheduling, and integrated billing system for medical institutions. The platform streamlines administrative workflows, enhances patient care coordination, and offers comprehensive reporting and analytics tools. Includes modules for appointment scheduling, electronic health records, inventory management, and staff allocation.",
      technologies: ["Python", "Django", "PostgreSQL", "Docker"],
    }
  ];
  
  useEffect(() => {
    setMounted(true);
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
  
  const cardVariants = {
    hidden: { opacity: 0, scale: 0.95, y: 30 },
    visible: i => ({ 
      opacity: 1, 
      scale: 1,
      y: 0,
      transition: { 
        duration: 0.7,
        delay: i * 0.1,
        ease: "easeOut"
      }
    }),
    hover: {
      y: -10,
      scale: 1.02,
      boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.15)",
      transition: {
        duration: 0.3,
        ease: "easeOut"
      }
    }
  };

  const backdropVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { duration: 0.3 }
    },
    exit: {
      opacity: 0,
      transition: { duration: 0.3 }
    }
  };
  
  return (
    <section 
      ref={sectionRef}
      className="relative py-24 md:py-32 px-6 md:px-12 lg:px-20 max-w-7xl mx-auto w-full overflow-hidden"
    >
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: isInView ? 0.4 : 0 }}
          transition={{ duration: 1.5 }}
          className="absolute top-1/4 right-10 w-72 h-72 rounded-full border border-black/5"
        ></motion.div>
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: isInView ? 0.4 : 0 }}
          transition={{ duration: 1.5, delay: 0.2 }}
          className="absolute bottom-1/4 left-20 w-96 h-96 rounded-full border border-black/5"
        ></motion.div>
        
        {/* Animated dots */}
        <motion.div 
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: isInView ? 1 : 0, scale: isInView ? 1 : 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="absolute top-1/3 right-1/4 w-6 h-6 rounded-full bg-black/[0.03]"
        ></motion.div>
        <motion.div 
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: isInView ? 1 : 0, scale: isInView ? 1 : 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="absolute bottom-1/3 left-1/3 w-8 h-8 rounded-full bg-black/[0.03]"
        ></motion.div>
      </div>
      
      {mounted && (
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="relative"
        >
          {/* Section heading */}
          <motion.div variants={itemVariants} className="mb-24 text-center relative z-10">
            <motion.span 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="block uppercase tracking-wider text-black/50 font-medium text-sm mb-3"
            >
              Our Work
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
                Recent
                <span className="absolute -bottom-1 left-0 w-full h-1 bg-gradient-to-r from-black/5 via-black/20 to-black/5 rounded-full"></span>
              </motion.span>
              <motion.span 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.7 }}
                className="ml-3 text-transparent bg-clip-text bg-gradient-to-r from-black via-gray-700 to-black"
              >
                Projects
              </motion.span>
            </h2>
            
            <motion.p 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.7 }}
              className="text-xl text-black/70 max-w-2xl mx-auto mt-8"
            >
              Explore a selection of our successful projects delivered with expertise and passion
            </motion.p>
            
            {/* Divider */}
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
          
          {/* Featured projects - single row layout */}
          <motion.div variants={itemVariants} className="mb-16">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project, index) => (
                <motion.div
                  key={project.id}
                  custom={index}
                  variants={cardVariants}
                  whileHover="hover"
                  className="bg-white border border-black/5 rounded-2xl overflow-hidden shadow-xl group relative h-full"
                  style={{ 
                    boxShadow: '0 10px 40px -10px rgba(0, 0, 0, 0.1), 0 2px 10px -3px rgba(0, 0, 0, 0.05)'
                  }}
                >
                  {/* Inner glow effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-white/40 via-transparent to-black/[0.01] pointer-events-none z-10"></div>
                  
                  {/* Dashboard frame based on project type */}
                  <div className="relative h-56 md:h-64 overflow-hidden">
                    {index === 0 && (
                      <div className="w-full h-full bg-gray-900 p-4 flex flex-col">
                        {/* Finance dashboard mockup */}
                        <div className="flex items-center justify-between mb-2">
                          <div className="bg-gray-800 h-4 w-20 rounded-md"></div>
                          <div className="flex space-x-1">
                            <div className="bg-blue-500 h-4 w-4 rounded-md"></div>
                            <div className="bg-gray-800 h-4 w-4 rounded-md"></div>
                          </div>
                        </div>
                        <div className="grid grid-cols-3 gap-2 mb-2">
                          <div className="bg-gray-800 h-12 rounded-lg"></div>
                          <div className="bg-gray-800 h-12 rounded-lg"></div>
                          <div className="bg-gray-800 h-12 rounded-lg"></div>
                        </div>
                        <div className="flex-1 bg-gray-800 rounded-lg"></div>
                        <div className="mt-2 grid grid-cols-6 gap-1">
                          <div className="bg-gray-700 h-2 rounded-md col-span-1"></div>
                          <div className="bg-gray-700 h-2 rounded-md col-span-2"></div>
                          <div className="bg-gray-700 h-2 rounded-md col-span-3"></div>
                        </div>
                      </div>
                    )}
                    {index === 1 && (
                      <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-gray-100 to-gray-300">
                        <div className="w-40 h-full relative bg-white rounded-2xl border-4 border-gray-800 flex flex-col overflow-hidden">
                          {/* Mobile app mockup */}
                          <div className="bg-gray-800 h-3 w-full flex justify-center items-center">
                            <div className="bg-gray-600 h-1 w-8 rounded-full"></div>
                          </div>
                          <div className="flex-1 p-2 flex flex-col gap-2">
                            <div className="bg-gray-100 h-4 w-full rounded-full"></div>
                            <div className="grid grid-cols-2 gap-2 flex-1">
                              <div className="bg-gray-100 rounded-lg"></div>
                              <div className="bg-gray-100 rounded-lg"></div>
                              <div className="bg-gray-100 rounded-lg"></div>
                              <div className="bg-gray-100 rounded-lg"></div>
                            </div>
                            <div className="h-6 bg-blue-500 rounded-lg"></div>
                          </div>
                          <div className="h-6 bg-gray-100 w-full flex justify-around items-center px-2">
                            <div className="h-3 w-3 bg-gray-300 rounded-full"></div>
                            <div className="h-3 w-3 bg-gray-300 rounded-full"></div>
                            <div className="h-3 w-3 bg-gray-300 rounded-full"></div>
                            <div className="h-3 w-3 bg-gray-300 rounded-full"></div>
                          </div>
                        </div>
                      </div>
                    )}
                    {index === 2 && (
                      <div className="w-full h-full p-4 bg-white flex flex-col border border-gray-200">
                        {/* Healthcare system mockup */}
                        <div className="flex items-center justify-between mb-2">
                          <div className="bg-teal-500 h-4 w-20 rounded-md"></div>
                          <div className="flex space-x-1">
                            <div className="bg-gray-200 h-4 w-4 rounded-full"></div>
                            <div className="bg-gray-200 h-4 w-4 rounded-full"></div>
                          </div>
                        </div>
                        <div className="flex gap-2 h-full">
                          <div className="w-1/4 bg-gray-100 rounded-lg p-2">
                            <div className="space-y-2">
                              <div className="bg-gray-200 h-3 w-full rounded-md"></div>
                              <div className="bg-gray-200 h-3 w-full rounded-md"></div>
                              <div className="bg-gray-200 h-3 w-full rounded-md"></div>
                              <div className="bg-teal-100 h-3 w-full rounded-md"></div>
                            </div>
                          </div>
                          <div className="w-3/4 flex flex-col gap-2">
                            <div className="h-6 bg-gray-100 rounded-lg flex items-center px-2">
                              <div className="bg-gray-200 h-3 w-20 rounded-md"></div>
                            </div>
                            <div className="flex-1 bg-gray-100 rounded-lg grid grid-cols-3 gap-2 p-2">
                              <div className="bg-white h-12 rounded-lg shadow"></div>
                              <div className="bg-white h-12 rounded-lg shadow"></div>
                              <div className="bg-white h-12 rounded-lg shadow"></div>
                              <div className="bg-white h-12 rounded-lg shadow"></div>
                              <div className="bg-white h-12 rounded-lg shadow"></div>
                              <div className="bg-white h-12 rounded-lg shadow"></div>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                  
                  {/* Project details */}
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2 group-hover:text-black/80 transition-colors duration-300">{project.title}</h3>
                    
                    {/* Line divider */}
                    <div className="w-12 h-1 bg-gradient-to-r from-black/5 via-black/20 to-black/5 rounded-full mb-3"></div>
                    
                    {/* Short description */}
                    <p className="text-black/60 text-sm mb-4 line-clamp-3">{project.description}</p>
                    
                    {/* Technologies used */}
                    <div className="flex flex-wrap gap-1 mb-4">
                      {project.technologies.map((tech, i) => (
                        <span 
                          key={i} 
                          className="px-2 py-1 bg-black/5 rounded-md text-black/70 text-xs font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
          
          {/* Call to action */}
          <motion.div 
            variants={itemVariants} 
            className="mt-20 text-center relative z-10"
          >
            <div className="mx-auto max-w-4xl bg-white/90 backdrop-blur-md border border-black/5 rounded-3xl p-8 md:p-12 shadow-2xl relative overflow-hidden">
              {/* Background decorative elements */}
              <div className="absolute top-0 right-0 w-48 h-48 bg-black/[0.02] rounded-bl-full"></div>
              <div className="absolute bottom-0 left-0 w-48 h-48 bg-black/[0.02] rounded-tr-full"></div>
              
              <h3 
                className="text-2xl md:text-3xl font-bold mb-6"
                style={{ fontFamily: "'Montserrat', sans-serif" }}
              >
                Have a project in mind?
              </h3>
              <p className="text-lg text-black/70 max-w-2xl mx-auto mb-10">
                Let's collaborate to bring your vision to life. Our team is ready to help you create exceptional digital experiences.
              </p>
              
              <div className="flex flex-wrap justify-center gap-4">
                <motion.button
                  whileHover={{ scale: 1.05, y: -3 }}
                  whileTap={{ scale: 0.97 }}
                  className="px-8 py-4 bg-black text-white rounded-full font-medium text-lg shadow-xl inline-flex items-center justify-center gap-2 group transition-all duration-300 hover:shadow-2xl"
                  onClick={() => setShowContactPopup(true)} // Show contact popup
                >
                  Start a Project
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
                  className="px-8 py-4 border border-black/20 bg-white/50 backdrop-blur-sm text-black rounded-full font-medium text-lg inline-flex items-center gap-2 group transition-all duration-300 hover:border-black/40 shadow-md hover:shadow-lg"
                >
                  View All Work
                </motion.button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
      
      {/* Contact Popup Form */}
      <AnimatePresence>
        {showContactPopup && (
          <>
            {/* Backdrop */}
            <motion.div 
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50"
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
      
      {/* Custom scrollbar styles */}
      <style jsx global>{`
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        
        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </section>
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
    <div className="bg-white/90 backdrop-blur-md border border-black/5 rounded-3xl p-8 md:p-10 shadow-2xl relative overflow-hidden">
      {/* Inner glow effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/40 via-transparent to-black/[0.01] pointer-events-none"></div>
      
      {/* Close button */}
      <button 
        onClick={onClose}
        className="absolute top-6 right-6 w-8 h-8 rounded-full bg-black/5 flex items-center justify-center hover:bg-black/10 transition-colors duration-300"
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
      
      {/* Form header */}
      <div className="mb-10">
        <h3 className="text-2xl md:text-3xl font-bold mb-4">Get In Touch</h3>
        <div className="w-16 h-1 bg-gradient-to-r from-black/5 via-black/20 to-black/5 rounded-full"></div>
        <p className="mt-4 text-black/60">Tell us about your project and we'll get back to you promptly.</p>
      </div>
      
      {/* Contact form */}
      <form onSubmit={handleFormSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Name field */}
          <div>
            <label htmlFor="popup-name" className="block text-sm font-medium text-black/70 mb-2">Your Name</label>
            <input
              type="text"
              id="popup-name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              required
              className="w-full px-4 py-3 rounded-xl bg-black/[0.02] border border-black/10 focus:border-black/30 focus:outline-none focus:ring-2 focus:ring-black/5 transition-all duration-300"
              placeholder="John Smith"
            />
          </div>
          
          {/* Email field */}
          <div>
            <label htmlFor="popup-email" className="block text-sm font-medium text-black/70 mb-2">Email Address</label>
            <input
              type="email"
              id="popup-email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              required
              className="w-full px-4 py-3 rounded-xl bg-black/[0.02] border border-black/10 focus:border-black/30 focus:outline-none focus:ring-2 focus:ring-black/5 transition-all duration-300"
              placeholder="john@example.com"
            />
          </div>
        </div>
        
        {/* Subject field */}
        <div>
          <label htmlFor="popup-subject" className="block text-sm font-medium text-black/70 mb-2">Subject</label>
          <input
            type="text"
            id="popup-subject"
            name="subject"
            value={formData.subject}
            onChange={handleInputChange}
            required
            className="w-full px-4 py-3 rounded-xl bg-black/[0.02] border border-black/10 focus:border-black/30 focus:outline-none focus:ring-2 focus:ring-black/5 transition-all duration-300"
            placeholder="Project Inquiry"
          />
        </div>
        
        {/* Phone number field */}
        <div>
          <label htmlFor="popup-phoneNumber" className="block text-sm font-medium text-black/70 mb-2">Phone Number (Optional)</label>
          <input
            type="tel"
            id="popup-phoneNumber"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleInputChange}
            className="w-full px-4 py-3 rounded-xl bg-black/[0.02] border border-black/10 focus:border-black/30 focus:outline-none focus:ring-2 focus:ring-black/5 transition-all duration-300"
            placeholder="+1 (234) 567-890"
          />
        </div>
        
        {/* Message field */}
        <div>
          <label htmlFor="popup-message" className="block text-sm font-medium text-black/70 mb-2">Your Message</label>
          <textarea
            id="popup-message"
            name="message"
            value={formData.message}
            onChange={handleInputChange}
            rows="4"
            required
            className="w-full px-4 py-3 rounded-xl bg-black/[0.02] border border-black/10 focus:border-black/30 focus:outline-none focus:ring-2 focus:ring-black/5 transition-all duration-300 resize-none"
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
            className="w-full px-8 py-4 bg-black text-white rounded-xl font-medium text-lg shadow-xl inline-flex items-center justify-center gap-2 group transition-all duration-300 hover:shadow-2xl disabled:opacity-70 disabled:pointer-events-none"
          >
            {formStatus === 'submitting' ? (
              <>
                <svg className="animate-spin -ml-1 mr-2 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
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
                className="mt-4 p-4 bg-green-50 border border-green-200 text-green-800 rounded-xl text-center"
              >
                Your message has been sent successfully. We'll get back to you soon!
              </motion.div>
            )}
            {formStatus === 'error' && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                className="mt-4 p-4 bg-red-50 border border-red-200 text-red-800 rounded-xl text-center"
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

export default PortfolioSection;