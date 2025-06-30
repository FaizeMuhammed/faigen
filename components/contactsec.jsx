'use client'
import { useState, useEffect, useRef } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";

const ContactSection = () => {
  const [mounted, setMounted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [formStatus, setFormStatus] = useState(null);
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: false, amount: 0.1 });
  
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
    hidden: { opacity: 0, scale: 0.95, y: 20 },
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
      y: -5,
      boxShadow: "0 20px 40px -12px rgba(0, 0, 0, 0.1)",
      transition: {
        duration: 0.3,
        ease: "easeOut"
      }
    }
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    
    // Simulate form submission
    setFormStatus('submitting');
    
    // After a delay, show success message
    setTimeout(() => {
      setFormStatus('success');
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
      
      // Reset form status after 5 seconds
      setTimeout(() => {
        setFormStatus(null);
      }, 5000);
    }, 1500);
  };
  
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
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
          className="absolute top-1/3 left-1/4 w-96 h-96 rounded-full border border-black/5"
        ></motion.div>
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: isInView ? 0.4 : 0 }}
          transition={{ duration: 1.5, delay: 0.2 }}
          className="absolute -bottom-20 right-1/3 w-64 h-64 rounded-full border border-black/5"
        ></motion.div>
        
        {/* Animated dots */}
        <motion.div 
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: isInView ? 1 : 0, scale: isInView ? 1 : 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="absolute top-1/4 right-1/4 w-6 h-6 rounded-full bg-black/[0.03]"
        ></motion.div>
        <motion.div 
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: isInView ? 1 : 0, scale: isInView ? 1 : 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="absolute bottom-1/3 left-1/4 w-8 h-8 rounded-full bg-black/[0.03]"
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
          <motion.div variants={itemVariants} className="mb-20 text-center relative z-10">
            <motion.span 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="block uppercase tracking-wider text-black/50 font-medium text-sm mb-3"
            >
              Get in Touch
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
                Let's 
                <span className="absolute -bottom-1 left-0 w-full h-1 bg-gradient-to-r from-black/5 via-black/20 to-black/5 rounded-full"></span>
              </motion.span>
              <motion.span 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.7 }}
                className="ml-3 text-transparent bg-clip-text bg-gradient-to-r from-black via-gray-700 to-black"
              >
                Connect
              </motion.span>
            </h2>
            
            <motion.p 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.7 }}
              className="text-xl text-black/70 max-w-2xl mx-auto mt-8"
            >
              Ready to start your project? We're here to help turn your ideas into reality.
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
          
          {/* Contact layout - Two columns on desktop */}
          <motion.div variants={itemVariants}>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
              {/* Left column - Contact form */}
              <motion.div 
                variants={cardVariants}
                whileHover="hover"
                className="bg-white/90 backdrop-blur-md border border-black/5 rounded-3xl p-8 md:p-10 shadow-xl relative overflow-hidden"
              >
                {/* Inner glow effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/40 via-transparent to-black/[0.01] pointer-events-none"></div>
                
                {/* Form header */}
                <div className="mb-10">
                  <h3 className="text-2xl md:text-3xl font-bold mb-4">Send a Message</h3>
                  <div className="w-16 h-1 bg-gradient-to-r from-black/5 via-black/20 to-black/5 rounded-full"></div>
                  <p className="mt-4 text-black/60">Fill out the form below and we'll get back to you as soon as possible.</p>
                </div>
                
                {/* Contact form */}
                <form onSubmit={handleFormSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Name field */}
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-black/70 mb-2">Your Name</label>
                      <input
                        type="text"
                        id="name"
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
                      <label htmlFor="email" className="block text-sm font-medium text-black/70 mb-2">Email Address</label>
                      <input
                        type="email"
                        id="email"
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
                    <label htmlFor="subject" className="block text-sm font-medium text-black/70 mb-2">Subject</label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 rounded-xl bg-black/[0.02] border border-black/10 focus:border-black/30 focus:outline-none focus:ring-2 focus:ring-black/5 transition-all duration-300"
                      placeholder="Project Inquiry"
                    />
                  </div>
                  
                  {/* Message field */}
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-black/70 mb-2">Your Message</label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      rows="5"
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
                    
                    {/* Success message */}
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
                    </AnimatePresence>
                  </div>
                </form>
              </motion.div>
              
              {/* Right column - Contact info & Map */}
              <div className="space-y-8">
                {/* Contact info cards */}
                <motion.div
                  variants={cardVariants}
                  className="bg-white/90 backdrop-blur-md border border-black/5 rounded-3xl p-8 shadow-xl relative overflow-hidden"
                >
                  {/* Inner glow effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-white/40 via-transparent to-black/[0.01] pointer-events-none"></div>
                  
                  <h3 className="text-2xl font-bold mb-8">Contact Information</h3>
                  
                  <div className="space-y-6">
                    {/* Email contact */}
                    <div className="flex items-start">
                      <div className="w-12 h-12 rounded-full bg-black/5 flex items-center justify-center mr-4 shrink-0">
                        <svg className="w-5 h-5 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                      </div>
                      <div>
                        <h4 className="text-sm text-black/50 font-medium mb-1">Email Us</h4>
                        <a href="mailto:info@companyname.com" className="text-lg hover:text-black/70 transition-colors duration-300">
                          info@companyname.com
                        </a>
                      </div>
                    </div>
                    
                    {/* Phone contact */}
                    <div className="flex items-start">
                      <div className="w-12 h-12 rounded-full bg-black/5 flex items-center justify-center mr-4 shrink-0">
                        <svg className="w-5 h-5 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                        </svg>
                      </div>
                      <div>
                        <h4 className="text-sm text-black/50 font-medium mb-1">Call Us</h4>
                        <a href="tel:+1234567890" className="text-lg hover:text-black/70 transition-colors duration-300">
                          +1 (234) 567-890
                        </a>
                      </div>
                    </div>
                    
                    {/* Office location */}
                    <div className="flex items-start">
                      <div className="w-12 h-12 rounded-full bg-black/5 flex items-center justify-center mr-4 shrink-0">
                        <svg className="w-5 h-5 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                      </div>
                      <div>
                        <h4 className="text-sm text-black/50 font-medium mb-1">Visit Us</h4>
                        <p className="text-lg">
                          123 Business Avenue, <br />
                          Tech District, CA 94107
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.div>
                
                {/* Office hours */}
                <motion.div
                  variants={cardVariants}
                  className="bg-white/90 backdrop-blur-md border border-black/5 rounded-3xl p-8 shadow-xl relative overflow-hidden"
                >
                  {/* Inner glow effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-white/40 via-transparent to-black/[0.01] pointer-events-none"></div>
                  
                  <h3 className="text-2xl font-bold mb-8">Office Hours</h3>
                  
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span className="font-medium">Monday - Friday</span>
                      <span>9:00 AM - 6:00 PM</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="font-medium">Saturday</span>
                      <span>10:00 AM - 4:00 PM</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="font-medium">Sunday</span>
                      <span>Closed</span>
                    </div>
                  </div>
                </motion.div>
                
                {/* Map or location visualization */}
                <motion.div
                  variants={cardVariants}
                  className="relative h-80 rounded-3xl overflow-hidden shadow-xl border border-black/5"
                >
                  {/* This would be replaced with an actual map component */}
                  <div className="absolute inset-0 bg-gradient-to-br from-gray-200 to-gray-300">
                    <div className="w-full h-full bg-center bg-no-repeat bg-cover opacity-90"
                      style={{ backgroundImage: "url('https://via.placeholder.com/800x600?text=Location+Map')" }}>
                    </div>
                  </div>
                  
                  {/* Map pin */}
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center text-white shadow-lg animate-pulse">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>
          
          {/* Social media and quick links */}
          <motion.div 
            variants={itemVariants} 
            className="mt-20 text-center relative z-10"
          >
            <h3 className="text-2xl font-bold mb-6">Follow Us</h3>
            <div className="flex justify-center gap-6">
              {/* Twitter/X */}
              <motion.a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -5, scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="w-12 h-12 rounded-full bg-black/5 flex items-center justify-center hover:bg-black/10 transition-colors duration-300"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path>
                </svg>
              </motion.a>
              
              {/* LinkedIn */}
              <motion.a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -5, scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="w-12 h-12 rounded-full bg-black/5 flex items-center justify-center hover:bg-black/10 transition-colors duration-300"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"></path>
                </svg>
              </motion.a>
              
              {/* Instagram */}
              <motion.a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -5, scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="w-12 h-12 rounded-full bg-black/5 flex items-center justify-center hover:bg-black/10 transition-colors duration-300"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"></path>
                </svg>
              </motion.a>
              
              {/* GitHub */}
              <motion.a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -5, scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="w-12 h-12 rounded-full bg-black/5 flex items-center justify-center hover:bg-black/10 transition-colors duration-300"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"></path>
                </svg>
              </motion.a>
            </div>
          </motion.div>
        </motion.div>
      )}
    </section>
  );
};

export default ContactSection;