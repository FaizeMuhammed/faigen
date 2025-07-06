'use client'
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Palette, Zap, Rocket, Shield, Smartphone, Cloud } from "lucide-react";
import { useRouter } from "next/navigation";

const HomeSection = () => {
  const [mounted, setMounted] = useState(false);
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const router = useRouter();
  const textVariants = ["Future-ready solutions.", "Human-first design.", "Scalable technology."];
  
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
    
    const textInterval = setInterval(() => {
      setCurrentTextIndex((prev) => (prev + 1) % textVariants.length);
    }, 3000);
    
    return () => {
      clearInterval(textInterval);
    };
  }, []);

  const scrollToPortfolio = () => {
    const portfolioSection = document.getElementById('portfolio');
    if (portfolioSection) {
      portfolioSection.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };
  
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
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 80,
        damping: 12
      }
    }
  };

  const menuItems = [
    { name: "Services", href: "#services" },
    { name: "Portfolio", href: "#portfolio" },
    { name: "About", href: "#about" },
    { name: "Process", href: "#process" },
    { name: "Contact", href: "#contact" }
  ];
  
  return (
    <>
      {/* Background Elements */}
      <div className="fixed inset-0 -z-10 overflow-hidden">
        {/* Gradient Orbs */}
        <div className="absolute top-1/4 -left-1/4 w-96 h-96 bg-gradient-to-r from-blue-400/20 to-purple-600/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 -right-1/4 w-96 h-96 bg-gradient-to-r from-purple-400/20 to-pink-600/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        
        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-grid-pattern opacity-[0.02]"></div>
        
        {/* Floating Particles */}
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-black/10 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [-20, 20, -20],
              opacity: [0.1, 0.3, 0.1],
            }}
            transition={{
              duration: 4 + Math.random() * 4,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      {/* Top Left Logo - Always Visible */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="fixed top-4 left-4 md:top-6 md:left-6 z-50"
      >
        <motion.div
          className="bg-white/90 backdrop-blur-xl rounded-xl md:rounded-2xl border border-gray-200 shadow-xl p-2 md:p-3"
          whileHover={{ scale: 1.05 }}
        >
          <img 
            src="/ChatGPT_Image_Apr_4__2025__10_40_51_PM-removebg-preview.png" 
            alt="Company Logo" 
            className="h-12 md:h-16 lg:h-18 w-auto"
          />
        </motion.div>
      </motion.div>

      {/* Unique Corner Navigation Menu */}
      <div className="fixed top-6 right-6 z-50">
        <motion.button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="relative w-16 h-16 bg-black/90 backdrop-blur-xl rounded-2xl border border-white/10 shadow-2xl flex items-center justify-center group"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <motion.div
            animate={isMenuOpen ? "open" : "closed"}
            className="w-6 h-6 relative"
          >
            <motion.span
              variants={{
                closed: { rotate: 0, y: 0 },
                open: { rotate: 45, y: 6 }
              }}
              className="absolute top-0 left-0 w-full h-0.5 bg-white rounded-full transform origin-center"
            />
            <motion.span
              variants={{
                closed: { opacity: 1 },
                open: { opacity: 0 }
              }}
              className="absolute top-3 left-0 w-full h-0.5 bg-white rounded-full"
            />
            <motion.span
              variants={{
                closed: { rotate: 0, y: 0 },
                open: { rotate: -45, y: -6 }
              }}
              className="absolute top-6 left-0 w-full h-0.5 bg-white rounded-full transform origin-center"
            />
          </motion.div>
          
          {/* Glowing ring effect */}
          <motion.div
            className="absolute inset-0 rounded-2xl border-2 border-white/20"
            animate={{
              scale: isMenuOpen ? [1, 1.2, 1] : 1,
              opacity: isMenuOpen ? [1, 0.5, 1] : 0.7,
            }}
            transition={{ duration: 0.6, repeat: isMenuOpen ? Infinity : 0 }}
          />
        </motion.button>

        {/* Menu Overlay */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, scale: 0.8, originX: 1, originY: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="absolute top-20 right-0 w-72 bg-black/95 backdrop-blur-2xl rounded-3xl border border-white/10 shadow-2xl overflow-hidden"
            >
              <div className="p-8">
                <div className="mb-6">
                  <h3 className="text-white font-semibold text-lg mb-2">Navigation</h3>
                  <div className="w-12 h-0.5 bg-gradient-to-r from-white to-white/30 rounded-full"></div>
                </div>
                
                <nav className="space-y-3">
                  {menuItems.map((item, index) => (
                    <motion.a
                      key={item.name}
                      href={item.href}
                      className="block text-white/80 hover:text-white font-medium py-3 px-4 rounded-xl hover:bg-white/10 transition-all duration-300 group"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      onClick={() => setIsMenuOpen(false)}
                    >
                      <span className="flex items-center space-x-3">
                        <span className="w-1.5 h-1.5 bg-white/50 rounded-full group-hover:bg-white transition-colors duration-300"></span>
                        <span>{item.name}</span>
                      </span>
                    </motion.a>
                  ))}
                </nav>
                
                <div className="mt-8 pt-6 border-t border-white/10">
                  <motion.button
                    className="w-full py-3 bg-white text-black rounded-xl font-semibold hover:bg-white/90 transition-colors duration-300"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => {
                      setIsMenuOpen(false);
                      router.push('/consultation');
                    }}
                  >
                    Start Project
                  </motion.button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Main Hero Section */}
      <main className="relative min-h-screen flex items-center justify-center px-6 md:px-12 lg:px-20 py-20">
        <div className="max-w-7xl mx-auto w-full">
          {mounted && (
            <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center">
              
              {/* Left Content */}
              <motion.div
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                className="space-y-6"
              >
                {/* Brand Badge */}
                <motion.div 
                  variants={itemVariants}
                  className="inline-flex items-center space-x-2 px-4 py-2 bg-black/5 backdrop-blur-sm rounded-full border border-black/10"
                >
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="text-sm font-medium text-black/70">Available for new projects</span>
                </motion.div>
                
                {/* Main Headline */}
                <motion.div variants={itemVariants} className="space-y-4 pt-2">
                  <h1 className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold leading-[0.9] tracking-tight"
                      style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                    <span className="block text-black">We Build</span>
                    <span className="block">
                      <span className="text-transparent bg-clip-text bg-gradient-to-r from-black via-gray-600 to-black">
                        Digital
                      </span>
                    </span>
                    <span className="block text-black">Powerhouses</span>
                  </h1>
                </motion.div>
                
                {/* Dynamic Subheading */}
                <motion.div variants={itemVariants} className="h-12 flex items-center">
                  <motion.p 
                    key={currentTextIndex}
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: -20, opacity: 0 }}
                    transition={{ duration: 0.5 }}
                    className="text-2xl lg:text-3xl font-semibold text-black/70"
                    style={{ fontFamily: "'Inter', sans-serif" }}
                  >
                    {textVariants[currentTextIndex]}
                  </motion.p>
                </motion.div>
                
                {/* Description */}
                <motion.p 
                  variants={itemVariants}
                  className="text-lg lg:text-xl text-black/60 leading-relaxed max-w-2xl"
                  style={{ fontFamily: "'Inter', sans-serif" }}
                >
                  From startups to enterprises, Faigen crafts seamless, secure, and scalable 
                  digital products with precision and purpose. We transform ideas into 
                  digital experiences that drive growth.
                </motion.p>
                
                {/* CTA Buttons */}
                <motion.div 
                  variants={itemVariants}
                  className="flex flex-col sm:flex-row gap-4 pt-4"
                >
                  <motion.button
                    onClick={() => router.push('/consultation')}
                    whileHover={{ scale: 1.02, y: -2 }}
                    whileTap={{ scale: 0.98 }}
                    className="group px-8 py-4 bg-black text-white rounded-2xl font-semibold text-base transition-all duration-300 shadow-xl hover:shadow-2xl relative overflow-hidden"
                  >
                    <span className="relative z-10">Get a Free Consultation</span>
                    <div className="absolute inset-0 bg-gradient-to-r from-gray-900 to-black opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </motion.button>
                  
                  <motion.button
                    onClick={scrollToPortfolio}
                    whileHover={{ scale: 1.02, y: -2 }}
                    whileTap={{ scale: 0.98 }}
                    className="group px-8 py-4 border-2 border-black/20 hover:border-black/40 rounded-2xl font-semibold text-base transition-all duration-300 backdrop-blur-sm hover:bg-black/5"
                  >
                    <span className="flex items-center justify-center space-x-2">
                      <span>See Our Work</span>
                      <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </span>
                  </motion.button>
                </motion.div>
              </motion.div>
              
              {/* Right Visual - Centered Device Hero */}
              <motion.div 
                className="relative h-[400px] sm:h-[500px] lg:h-[600px] flex items-center justify-center"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 0.5 }}
              >
                {/* Central Laptop */}
                <motion.div 
                  className="relative z-20"
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 1.2, delay: 0.8 }}
                >
                  {/* Laptop Container with Enhanced Black Border */}
                  <div className="relative">
                    {/* Laptop Screen with Prominent Black Border */}
                    <motion.div 
                      className="w-72 sm:w-80 lg:w-96 h-44 sm:h-52 lg:h-60 bg-gray-900 rounded-t-3xl border-4 border-black shadow-2xl relative overflow-hidden"
                      animate={{ 
                        rotateY: [0, -2, 0],
                        rotateX: [0, 1, 0]
                      }}
                      transition={{ duration: 8, repeat: Infinity }}
                    >
                      {/* Inner Screen Bezel */}
                      <div className="absolute inset-1.5 bg-white rounded-t-2xl overflow-hidden">
                        {/* Browser Header */}
                        <div className="flex items-center justify-between p-2 lg:p-3 border-b border-gray-200 bg-gray-50">
                          <div className="flex items-center space-x-2">
                            <div className="flex space-x-1.5">
                              <div className="w-2.5 lg:w-3 h-2.5 lg:h-3 bg-red-500 rounded-full"></div>
                              <div className="w-2.5 lg:w-3 h-2.5 lg:h-3 bg-yellow-500 rounded-full"></div>
                              <div className="w-2.5 lg:w-3 h-2.5 lg:h-3 bg-green-500 rounded-full"></div>
                            </div>
                            <span className="text-xs lg:text-sm font-medium text-gray-700 ml-2 lg:ml-4">Faigen Store - E-commerce</span>
                          </div>
                        </div>
                        
                        {/* E-commerce Content */}
                        <div className="p-3 lg:p-4 space-y-3 lg:space-y-4 bg-white">
                          {/* Store Header */}
                          <div className="flex items-center justify-between">
                            <div className="text-sm lg:text-lg font-bold text-gray-800">Premium Collection</div>
                            <div className="flex items-center space-x-1 lg:space-x-2">
                              <div className="w-4 lg:w-6 h-4 lg:h-6 bg-blue-500 rounded flex items-center justify-center">
                                <span className="text-white text-xs">🛒</span>
                              </div>
                              <span className="text-xs lg:text-sm text-gray-600">3</span>
                            </div>
                          </div>
                          
                          {/* Product Grid */}
                          <div className="grid grid-cols-3 gap-2 lg:gap-3">
                            {[
                              { name: 'Sneakers', price: '₹6,999', color: 'bg-blue-100' },
                              { name: 'Watch', price: '₹15,999', color: 'bg-purple-100' },
                              { name: 'Bag', price: '₹9,999', color: 'bg-green-100' },
                              { name: 'Phone', price: '₹64,999', color: 'bg-red-100' },
                              { name: 'Laptop', price: '₹99,999', color: 'bg-yellow-100' },
                              { name: 'Camera', price: '₹49,999', color: 'bg-pink-100' }
                            ].map((product, i) => (
                              <motion.div
                                key={i}
                                className={`${product.color} p-2 lg:p-3 rounded-lg border border-gray-200`}
                                animate={{ scale: [1, 1.02, 1] }}
                                transition={{ duration: 3, repeat: Infinity, delay: i * 0.5 }}
                              >
                                <div className="w-full h-6 lg:h-10 bg-white rounded mb-1 lg:mb-2"></div>
                                <div className="text-xs font-medium text-gray-700">{product.name}</div>
                                <div className="text-xs lg:text-sm font-bold text-gray-900">{product.price}</div>
                              </motion.div>
                            ))}
                          </div>
                          
                          {/* Sales Stats */}
                          <div className="bg-gradient-to-r from-green-50 to-blue-50 p-2 lg:p-3 rounded-lg border border-green-200">
                            <div className="flex justify-between items-center">
                              <div>
                                <div className="text-xs text-gray-600">Today's Sales</div>
                                <div className="text-sm lg:text-lg font-bold text-green-600">₹2,31,847</div>
                              </div>
                              <div className="flex space-x-1">
                                {[...Array(6)].map((_, i) => (
                                  <motion.div
                                    key={i}
                                    className="w-1 lg:w-2 bg-gradient-to-t from-green-400 to-green-500 rounded-sm"
                                    style={{ height: `${Math.random() * 16 + 8}px` }}
                                    animate={{ height: [`${Math.random() * 16 + 8}px`, `${Math.random() * 16 + 8}px`] }}
                                    transition={{ duration: 2, repeat: Infinity, delay: i * 0.2 }}
                                  />
                                ))}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      {/* Screen Reflection */}
                      <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent pointer-events-none rounded-t-3xl"></div>
                    </motion.div>
                    
                    {/* Laptop Base with Enhanced Black Border */}
                    <div className="w-72 sm:w-80 lg:w-96 h-6 lg:h-8 bg-gradient-to-br from-gray-300 to-gray-400 rounded-b-3xl shadow-xl border-x-4 border-b-4 border-black relative">
                      <div className="absolute inset-0 bg-gradient-to-t from-gray-400 to-transparent rounded-b-3xl"></div>
                      {/* Trackpad */}
                      <div className="absolute top-1 left-1/2 transform -translate-x-1/2 w-16 lg:w-20 h-3 lg:h-4 bg-gray-200 rounded-lg border border-gray-300"></div>
                    </div>
                  </div>
                </motion.div>

                {/* Mobile Phone - Right */}
                <motion.div
                  className="absolute right-[-30px] lg:right-[-50px] top-12 z-10 hidden md:block"
                  initial={{ opacity: 0, x: 100, rotate: 15 }}
                  animate={{ 
                    opacity: 1, 
                    x: 0,
                    rotate: [15, 8, 15],
                    y: [0, -8, 0]
                  }}
                  transition={{ 
                    opacity: { delay: 1.5, duration: 1 },
                    x: { delay: 1.5, duration: 1 },
                    rotate: { duration: 6, repeat: Infinity },
                    y: { duration: 4, repeat: Infinity }
                  }}
                >
                  <div className="w-24 lg:w-28 h-48 lg:h-56 bg-black rounded-3xl shadow-2xl border-2 border-black relative overflow-hidden transform rotate-12">
                    {/* Inner Phone Bezel - Corrected Alignment */}
                    <div className="absolute inset-0.5 bg-white rounded-3xl overflow-hidden">
                      {/* Status Bar */}
                      <div className="flex justify-between items-center px-2 py-1.5 text-xs border-b border-gray-100 bg-gray-50">
                        <span className="font-semibold text-xs">9:41</span>
                        <div className="flex items-center space-x-1">
                          <div className="flex space-x-0.5">
                            <div className="w-1 h-1 bg-gray-600 rounded-full"></div>
                            <div className="w-1 h-1 bg-gray-600 rounded-full"></div>
                            <div className="w-1 h-1 bg-gray-600 rounded-full"></div>
                            <div className="w-1 h-1 bg-gray-600 rounded-full"></div>
                          </div>
                          <div className="w-5 h-2.5 border border-gray-600 rounded-sm relative">
                            <div className="w-4/5 h-full bg-green-500 rounded-sm"></div>
                          </div>
                        </div>
                      </div>
                      
                      {/* App Header */}
                      <div className="text-center py-2 px-2 bg-gradient-to-r from-blue-50 to-indigo-50 border-b border-blue-100">
                        <div className="text-xs lg:text-sm font-bold text-blue-700">Faigen App</div>
                        <div className="text-xs text-blue-500">Mobile First</div>
                      </div>
                      
                      {/* Mobile Analytics */}
                      <div className="p-2 space-y-2">
                        {/* Quick Metrics */}
                        <div className="grid grid-cols-2 gap-1.5">
                          {[
                            { label: 'Revenue', value: '₹45k', color: 'bg-green-50 border-green-200 text-green-700' },
                            { label: 'Users', value: '2.1k', color: 'bg-blue-50 border-blue-200 text-blue-700' },
                            { label: 'Sales', value: '834', color: 'bg-purple-50 border-purple-200 text-purple-700' },
                            { label: 'Growth', value: '+18%', color: 'bg-orange-50 border-orange-200 text-orange-700' }
                          ].map((metric, i) => (
                            <motion.div
                              key={i}
                              className={`${metric.color} p-1.5 rounded-lg border text-center`}
                              animate={{ scale: [1, 1.05, 1] }}
                              transition={{ duration: 2.5, repeat: Infinity, delay: i * 0.4 }}
                            >
                              <div className="text-xs font-medium opacity-70">{metric.label}</div>
                              <div className="text-xs font-bold">{metric.value}</div>
                            </motion.div>
                          ))}
                        </div>
                        
                        {/* Mini Chart */}
                        <div className="bg-gray-50 p-1.5 rounded-lg border border-gray-200">
                          <div className="text-xs font-semibold text-gray-700 mb-1">📊 Live Analytics</div>
                          <div className="flex items-end space-x-0.5 h-6">
                            {[...Array(8)].map((_, i) => (
                              <motion.div
                                key={i}
                                className="bg-gradient-to-t from-blue-500 to-blue-400 rounded-sm flex-1"
                                style={{ height: `${40 + Math.random() * 60}%` }}
                                animate={{ 
                                  height: [`${40 + Math.random() * 60}%`, `${40 + Math.random() * 60}%`]
                                }}
                                transition={{ 
                                  duration: 2, 
                                  repeat: Infinity, 
                                  delay: i * 0.15 
                                }}
                              />
                            ))}
                          </div>
                        </div>
                        
                        {/* Action Buttons */}
                        <div className="grid grid-cols-2 gap-1.5">
                          <div className="bg-blue-500 text-white p-1.5 rounded-lg text-center">
                            <div className="text-xs font-semibold">🚀 Deploy</div>
                          </div>
                          <div className="bg-green-500 text-white p-1.5 rounded-lg text-center">
                            <div className="text-xs font-semibold">✅ Live</div>
                          </div>
                        </div>
                      </div>
                      
                      {/* Bottom Navigation */}
                      <div className="absolute bottom-1.5 left-1.5 right-1.5 bg-gray-100 rounded-lg py-1.5">
                        <div className="flex justify-around">
                          {['📊', '📱', '⚙️', '👤'].map((icon, i) => (
                            <motion.div
                              key={i}
                              className={`w-6 h-5 flex items-center justify-center rounded ${i === 0 ? 'bg-blue-100' : ''}`}
                              animate={{ scale: [1, 1.1, 1] }}
                              transition={{ duration: 1.5, repeat: Infinity, delay: i * 0.2 }}
                            >
                              <span className="text-xs">{icon}</span>
                            </motion.div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>

                {/* Tablet/Small Device - Left (New Addition) */}
                <motion.div
                  className="absolute left-[-20px] lg:left-[-40px] bottom-16 z-10 hidden lg:block"
                  initial={{ opacity: 0, x: -100, rotate: -10 }}
                  animate={{ 
                    opacity: 1, 
                    x: 0,
                    rotate: [-10, -5, -10],
                    y: [0, -6, 0]
                  }}
                  transition={{ 
                    opacity: { delay: 2, duration: 1 },
                    x: { delay: 2, duration: 1 },
                    rotate: { duration: 5, repeat: Infinity },
                    y: { duration: 3, repeat: Infinity }
                  }}
                >
                  <div className="w-20 h-32 bg-black rounded-2xl shadow-xl border border-black relative overflow-hidden transform -rotate-12">
                    {/* Inner Device Bezel - Corrected Alignment */}
                    <div className="absolute inset-0.5 bg-white rounded-2xl overflow-hidden">
                      {/* Header */}
                      <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-1.5 border-b border-green-100">
                        <div className="text-xs font-bold text-green-700 text-center">Analytics</div>
                      </div>
                      
                      {/* Mini Dashboard */}
                      <div className="p-1.5 space-y-1.5">
                        {/* Key Metrics */}
                        <div className="space-y-1">
                          {[
                            { label: 'Users', value: '2.1k', color: 'text-blue-600' },
                            { label: 'Sales', value: '₹8.4L', color: 'text-green-600' },
                            { label: 'Views', value: '12k', color: 'text-purple-600' }
                          ].map((metric, i) => (
                            <motion.div
                              key={i}
                              className="flex justify-between items-center py-0.5 px-1 bg-gray-50 rounded text-xs"
                              animate={{ opacity: [0.7, 1, 0.7] }}
                              transition={{ duration: 2, repeat: Infinity, delay: i * 0.3 }}
                            >
                              <span className="text-gray-600 text-xs">{metric.label}</span>
                              <span className={`font-bold text-xs ${metric.color}`}>{metric.value}</span>
                            </motion.div>
                          ))}
                        </div>
                        
                        {/* Mini Chart */}
                        <div className="bg-gray-50 p-1 rounded">
                          <div className="flex items-end space-x-0.5 h-5">
                            {[...Array(6)].map((_, i) => (
                              <motion.div
                                key={i}
                                className="bg-gradient-to-t from-green-500 to-green-400 rounded-sm flex-1"
                                style={{ height: `${50 + Math.random() * 50}%` }}
                                animate={{ 
                                  height: [`${50 + Math.random() * 50}%`, `${50 + Math.random() * 50}%`]
                                }}
                                transition={{ 
                                  duration: 2.5, 
                                  repeat: Infinity, 
                                  delay: i * 0.2 
                                }}
                              />
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>

                {/* Floating Capability Spheres */}
                {[
                  { 
                    icon: Palette, 
                    title: "Design", 
                    position: "top-4 lg:top-8 left-4 lg:left-8",
                    delay: 2.5
                  },
                  { 
                    icon: Zap, 
                    title: "Speed", 
                    position: "top-4 lg:top-8 right-4 lg:right-8",
                    delay: 2.8
                  },
                  { 
                    icon: Rocket, 
                    title: "Deploy", 
                    position: "bottom-4 lg:bottom-8 right-4 lg:right-8",
                    delay: 3.1
                  },
                  { 
                    icon: Shield, 
                    title: "Secure", 
                    position: "bottom-4 lg:bottom-8 left-4 lg:left-8",
                    delay: 3.4
                  },
                  { 
                    icon: Smartphone, 
                    title: "Mobile", 
                    position: "top-1/2 left-0 lg:left-2 transform -translate-y-1/2",
                    delay: 3.7
                  },
                  { 
                    icon: Cloud, 
                    title: "Cloud", 
                    position: "top-1/2 right-0 lg:right-2 transform -translate-y-1/2",
                    delay: 4
                  }
                ].map((sphere, index) => {
                  const IconComponent = sphere.icon;
                  return (
                    <motion.div
                      key={index}
                      className={`absolute z-5 ${sphere.position}`}
                      initial={{ scale: 0, opacity: 0, y: 50 }}
                      animate={{ 
                        scale: 1, 
                        opacity: 1, 
                        y: [0, -8, 0],
                        rotate: [0, 5, -5, 0]
                      }}
                      transition={{ 
                        scale: { delay: sphere.delay, duration: 0.8 },
                        opacity: { delay: sphere.delay, duration: 0.8 },
                        y: { duration: 4, repeat: Infinity, delay: sphere.delay + 1 },
                        rotate: { duration: 6, repeat: Infinity, delay: sphere.delay + 2 }
                      }}
                    >
                      <motion.div 
                        className="w-14 sm:w-16 lg:w-20 h-14 sm:h-16 lg:h-20 rounded-full bg-gray-50/90 backdrop-blur-xl border border-gray-200 shadow-xl flex flex-col items-center justify-center text-gray-700 relative"
                        whileHover={{ 
                          scale: 1.1, 
                          y: -5
                        }}
                      >
                        <IconComponent className="w-4 sm:w-5 lg:w-6 h-4 sm:h-5 lg:h-6 mb-1" />
                        <div className="text-xs font-medium hidden sm:block">{sphere.title}</div>
                      </motion.div>
                    </motion.div>
                  );
                })}

                {/* Connecting Ribbons - More Outer and Visible */}
                <svg className="absolute inset-0 w-full h-full pointer-events-none z-1" viewBox="0 0 500 400">
                  {/* Main ribbon connections to capability spheres */}
                  {[
                    "M250,200 Q100,50 40,40",     // Center to top-left
                    "M250,200 Q400,50 460,40",    // Center to top-right
                    "M250,200 Q100,350 40,360",   // Center to bottom-left
                    "M250,200 Q400,350 460,360",  // Center to bottom-right
                    "M250,200 Q50,200 10,200",    // Center to left
                    "M250,200 Q450,200 490,200"   // Center to right
                  ].map((path, index) => (
                    <motion.path
                      key={index}
                      d={path}
                      stroke="url(#ribbonGradient)"
                      strokeWidth="3"
                      fill="none"
                      strokeDasharray="12,6"
                      initial={{ pathLength: 0, opacity: 0 }}
                      animate={{ 
                        pathLength: [0, 1, 0],
                        opacity: [0, 0.8, 0],
                        strokeDashoffset: [0, -18]
                      }}
                      transition={{ 
                        duration: 5,
                        repeat: Infinity,
                        delay: index * 0.8 + 4
                      }}
                    />
                  ))}
                  
                  {/* Connection to mobile phone */}
                  {[
                    "M250,200 Q350,150 380,120",  // Center to mobile area
                    "M250,200 Q330,180 360,160"   // Secondary connection to mobile
                  ].map((path, index) => (
                    <motion.path
                      key={`mobile-${index}`}
                      d={path}
                      stroke="url(#ribbonGradient2)"
                      strokeWidth="2"
                      fill="none"
                      strokeDasharray="8,4"
                      initial={{ pathLength: 0, opacity: 0 }}
                      animate={{ 
                        pathLength: [0, 1, 0],
                        opacity: [0, 0.6, 0],
                        strokeDashoffset: [0, -12]
                      }}
                      transition={{ 
                        duration: 4,
                        repeat: Infinity,
                        delay: index * 0.8 + 6
                      }}
                    />
                  ))}
                  
                  {/* Additional flowing ribbons for visual richness */}
                  {[
                    "M250,200 Q150,100 80,80",    // Additional curved paths
                    "M250,200 Q350,100 420,80",
                    "M250,200 Q150,300 80,320",
                    "M250,200 Q350,300 420,320"
                  ].map((path, index) => (
                    <motion.path
                      key={`flow-${index}`}
                      d={path}
                      stroke="url(#ribbonGradient3)"
                      strokeWidth="1.5"
                      fill="none"
                      strokeDasharray="6,3"
                      initial={{ pathLength: 0, opacity: 0 }}
                      animate={{ 
                        pathLength: [0, 1, 0],
                        opacity: [0, 0.4, 0],
                        strokeDashoffset: [0, -9]
                      }}
                      transition={{ 
                        duration: 6,
                        repeat: Infinity,
                        delay: index * 0.5 + 8
                      }}
                    />
                  ))}
                  
                  <defs>
                    <linearGradient id="ribbonGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="rgba(59,130,246,0.8)" />
                      <stop offset="50%" stopColor="rgba(147,51,234,0.9)" />
                      <stop offset="100%" stopColor="rgba(239,68,68,0.8)" />
                    </linearGradient>
                    <linearGradient id="ribbonGradient2" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="rgba(16,185,129,0.7)" />
                      <stop offset="50%" stopColor="rgba(245,158,11,0.8)" />
                      <stop offset="100%" stopColor="rgba(168,85,247,0.7)" />
                    </linearGradient>
                    <linearGradient id="ribbonGradient3" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="rgba(59,130,246,0.5)" />
                      <stop offset="50%" stopColor="rgba(34,197,94,0.6)" />
                      <stop offset="100%" stopColor="rgba(251,146,60,0.5)" />
                    </linearGradient>
                  </defs>
                </svg>

                {/* Floating Data Particles */}
                {[...Array(15)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute w-2 h-2 rounded-full z-0"
                    style={{
                      background: `linear-gradient(45deg, ${
                        ['#3B82F6', '#8B5CF6', '#EF4444', '#10B981', '#F59E0B'][i % 5]
                      }, ${
                        ['#1E40AF', '#7C3AED', '#DC2626', '#059669', '#D97706'][i % 5]
                      })`,
                      left: `${Math.random() * 100}%`,
                      top: `${Math.random() * 100}%`,
                    }}
                    animate={{
                      x: [0, Math.random() * 100 - 50],
                      y: [0, Math.random() * 100 - 50],
                      scale: [0, 1, 0],
                      opacity: [0, 0.8, 0],
                    }}
                    transition={{
                      duration: 6 + Math.random() * 4,
                      repeat: Infinity,
                      delay: Math.random() * 5,
                    }}
                  />
                ))}
              </motion.div>
            </div>
          )}
        </div>
      </main>
      
      {/* Enhanced Styles */}
      <style jsx global>{`
        .bg-grid-pattern {
          background-image: 
            linear-gradient(rgba(0,0,0,0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0,0,0,0.1) 1px, transparent 1px);
          background-size: 50px 50px;
        }
        
        html {
          scroll-behavior: smooth;
        }
        
        ::-webkit-scrollbar {
          width: 6px;
        }
        
        ::-webkit-scrollbar-track {
          background: #f1f1f1;
        }
        
        ::-webkit-scrollbar-thumb {
          background: #c1c1c1;
          border-radius: 3px;
        }
        
        ::-webkit-scrollbar-thumb:hover {
          background: #a1a1a1;
        }
      `}</style>
    </>
  );
};

export default HomeSection;