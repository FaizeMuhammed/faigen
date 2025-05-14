'use client'
import { useState, useEffect, useRef } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  const [mounted, setMounted] = useState(false);
  const [email, setEmail] = useState('');
  const [subscriptionStatus, setSubscriptionStatus] = useState(null);
  const footerRef = useRef(null);
  const isInView = useInView(footerRef, { once: true, amount: 0.1 });
  
  useEffect(() => {
    setMounted(true);
  }, []);
  
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
        delayChildren: 0.1
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

  const handleSubscribe = async (e) => {
    e.preventDefault();
    
    if (!email) return;
    
    // Set loading state
    setSubscriptionStatus('subscribing');
    
    try {
      // Send data to backend API
      const response = await fetch('https://faigen-backend.onrender.com/mail', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: email, // Using email as name field
          subject: 'Newsletter Subscription',
          description: 'Subscribed to newsletter',
          phoneNumber: ''
        }),
      });
      
      const data = await response.json();
      
      if (response.ok) {
        // Success
        setSubscriptionStatus('success');
        setEmail('');
        
        // Reset status after 5 seconds
        setTimeout(() => {
          setSubscriptionStatus(null);
        }, 5000);
      } else {
        // API returned an error
        console.error('Subscription error:', data);
        setSubscriptionStatus('error');
        
        // Reset error status after 5 seconds
        setTimeout(() => {
          setSubscriptionStatus(null);
        }, 5000);
      }
    } catch (error) {
      console.error('Subscription error:', error);
      setSubscriptionStatus('error');
      
      // Reset error status after 5 seconds
      setTimeout(() => {
        setSubscriptionStatus(null);
      }, 5000);
    }
  };
  
  const currentYear = new Date().getFullYear();
  
  return (
    <footer 
      ref={footerRef}
      className="relative pt-20 pb-10 bg-white/90 backdrop-blur-md border-t border-black/5 overflow-hidden"
    >
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: isInView ? 0.3 : 0 }}
          transition={{ duration: 1.5 }}
          className="absolute -top-20 right-10 w-96 h-96 rounded-full border border-black/5"
        ></motion.div>
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: isInView ? 0.3 : 0 }}
          transition={{ duration: 1.5, delay: 0.2 }}
          className="absolute bottom-0 -left-20 w-64 h-64 rounded-full border border-black/5"
        ></motion.div>
        
        {/* Animated dots */}
        <motion.div 
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: isInView ? 1 : 0, scale: isInView ? 1 : 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="absolute top-1/3 right-1/4 w-6 h-6 rounded-full bg-black/[0.02]"
        ></motion.div>
        <motion.div 
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: isInView ? 1 : 0, scale: isInView ? 1 : 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="absolute bottom-1/3 left-1/4 w-6 h-6 rounded-full bg-black/[0.02]"
        ></motion.div>
      </div>
      
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
        {mounted && (
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            {/* Main footer content */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-8 mb-16">
              {/* Company info */}
              <motion.div variants={itemVariants} className="lg:col-span-1">
                <div className="mb-6">
                  <Link href="/" className="inline-block">
                    {/* Replaced text with image */}
                    <img src="/WhatsApp_Image_2025-04-04_at_9.53.44_PM-removebg-preview.png" alt="Company Logo" className="h-20" />
                  </Link>
                </div>
                
                <p className="text-black/60 mb-8">
                  Creating exceptional digital experiences through innovative solutions and cutting-edge technology.
                </p>
                
                {/* Social links - removed GitHub, kept only Instagram and LinkedIn */}
                <div className="flex space-x-4">
                  {/* LinkedIn */}
                  <motion.a
                    href="#"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ y: -4, scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-10 h-10 rounded-full bg-black/5 flex items-center justify-center hover:bg-black/10 transition-colors duration-300"
                  >
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"></path>
                    </svg>
                  </motion.a>
                  
                  {/* Instagram */}
                  <motion.a
                    href="#"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ y: -4, scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-10 h-10 rounded-full bg-black/5 flex items-center justify-center hover:bg-black/10 transition-colors duration-300"
                  >
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"></path>
                    </svg>
                  </motion.a>
                </div>
              </motion.div>
              
              {/* Quick Links */}
              <motion.div variants={itemVariants} className="lg:col-span-1">
                <h3 className="text-lg font-bold mb-6">Quick Links</h3>
                <ul className="space-y-3">
                  <li>
                    <Link href="#" className="text-black/60 hover:text-black transition-colors duration-300 inline-block">
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="text-black/60 hover:text-black transition-colors duration-300 inline-block">
                      About Us
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="text-black/60 hover:text-black transition-colors duration-300 inline-block">
                      Services
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="text-black/60 hover:text-black transition-colors duration-300 inline-block">
                      Portfolio
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="text-black/60 hover:text-black transition-colors duration-300 inline-block">
                      Blog
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="text-black/60 hover:text-black transition-colors duration-300 inline-block">
                      Contact
                    </Link>
                  </li>
                </ul>
              </motion.div>
              
              {/* Services */}
              <motion.div variants={itemVariants} className="lg:col-span-1">
                <h3 className="text-lg font-bold mb-6">Our Services</h3>
                <ul className="space-y-3">
                  <li>
                    <Link href="#" className="text-black/60 hover:text-black transition-colors duration-300 inline-block">
                      Web Development
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="text-black/60 hover:text-black transition-colors duration-300 inline-block">
                      Software Development
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="text-black/60 hover:text-black transition-colors duration-300 inline-block">
                      App Development
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="text-black/60 hover:text-black transition-colors duration-300 inline-block">
                      SEO & Landing Pages
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="text-black/60 hover:text-black transition-colors duration-300 inline-block">
                      SaaS Products
                    </Link>
                  </li>
                </ul>
              </motion.div>
              
              {/* Newsletter - Updated with API integration */}
              <motion.div variants={itemVariants} className="lg:col-span-1">
                <h3 className="text-lg font-bold mb-6">Stay Updated</h3>
                <p className="text-black/60 mb-4">
                  Subscribe to our newsletter for the latest updates and insights.
                </p>
                
                <form onSubmit={handleSubscribe}>
                  <div className="flex flex-col space-y-3">
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Your email address"
                      required
                      className="px-4 py-3 rounded-xl bg-black/[0.02] border border-black/10 focus:border-black/30 focus:outline-none focus:ring-2 focus:ring-black/5 transition-all duration-300"
                    />
                    
                    <motion.button
                      type="submit"
                      disabled={subscriptionStatus === 'subscribing'}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="px-4 py-3 bg-black text-white rounded-xl font-medium inline-flex items-center justify-center gap-2 group transition-all duration-300 disabled:opacity-70 disabled:pointer-events-none"
                    >
                      {subscriptionStatus === 'subscribing' ? (
                        <>
                          <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                          </svg>
                          Subscribing...
                        </>
                      ) : (
                        <>
                          Subscribe
                          <svg 
                            xmlns="http://www.w3.org/2000/svg" 
                            width="16" 
                            height="16" 
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
                    
                    {/* Success and error messages */}
                    <AnimatePresence>
                      {subscriptionStatus === 'success' && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          className="p-3 bg-green-50 text-green-800 rounded-lg text-sm text-center"
                        >
                          Thanks for subscribing! We'll keep you updated.
                        </motion.div>
                      )}
                      
                      {subscriptionStatus === 'error' && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          className="p-3 bg-red-50 text-red-800 rounded-lg text-sm text-center"
                        >
                          Something went wrong. Please try again later.
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </form>
              </motion.div>
            </div>
            
            {/* Premium divider */}
            <motion.div 
              variants={itemVariants}
              className="flex items-center justify-center my-10"
            >
              <div className="w-full h-px bg-gradient-to-r from-transparent via-black/10 to-transparent"></div>
            </motion.div>
            
            {/* Bottom footer - Copyright and policies */}
            <motion.div variants={itemVariants} className="flex flex-col md:flex-row items-center justify-between text-sm text-black/50">
              <div className="mb-4 md:mb-0">
                &copy; {currentYear} Faigen. All rights reserved.
              </div>
              
              <div className="flex flex-wrap justify-center gap-4 md:gap-8">
                <Link href="#" className="hover:text-black transition-colors duration-300">
                  Privacy Policy
                </Link>
                <Link href="#" className="hover:text-black transition-colors duration-300">
                  Terms of Service
                </Link>
                <Link href="#" className="hover:text-black transition-colors duration-300">
                  Cookie Policy
                </Link>
              </div>
            </motion.div>
          </motion.div>
        )}
      </div>
    </footer>
  );
};

export default Footer;