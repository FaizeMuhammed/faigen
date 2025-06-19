import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Instagram, MessageCircle, Linkedin, Twitter, ArrowRight } from "lucide-react";

const ResponsiveLanding = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="min-h-screen relative overflow-hidden bg-gray-900">
      {/* Background Image with better mobile support */}
      <div className="absolute inset-0">
        {/* Fallback gradient for when image doesn't load */}
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900" />
        
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('/0ae17053-e699-4988-9ca9-34609ac28f0a.png')`,
            // Use contain on mobile for better visibility, cover on larger screens
            backgroundSize: 'cover',
            backgroundPosition: 'center center',
            // Ensure image loads on mobile with proper rendering
            WebkitBackgroundSize: 'cover',
            MozBackgroundSize: 'cover',
            OBackgroundSize: 'cover',
          }}
        />
        
        {/* Lighter overlay for mobile to ensure image visibility */}
        <div 
          className="absolute inset-0 md:hidden"
          style={{
            background: `linear-gradient(180deg, 
              rgba(0, 0, 0, 0.1) 0%, 
              rgba(0, 0, 0, 0.2) 50%, 
              rgba(0, 0, 0, 0.3) 100%
            )`
          }}
        />
        
        {/* Desktop overlay */}
        <div 
          className="absolute inset-0 hidden md:block"
          style={{
            background: `linear-gradient(180deg, 
              rgba(0, 0, 0, 0.05) 0%, 
              rgba(0, 0, 0, 0.1) 30%, 
              rgba(0, 0, 0, 0.05) 50%, 
              rgba(0, 0, 0, 0.1) 70%, 
              rgba(0, 0, 0, 0.3) 100%
            )`
          }}
        />
      </div>

      {/* Navigation */}
      <nav className="relative z-50 flex items-center justify-between px-4 sm:px-6 md:px-12 lg:px-20 py-4 sm:py-6 md:py-8">
        {/* Logo Area (Empty placeholder) */}
        <div className="w-8 h-8 sm:w-10 sm:h-10"></div>

        {/* Center Navigation - Hidden on mobile */}
        <div className="hidden md:flex items-center space-x-6 lg:space-x-10">
          {['About', 'Services', 'Portfolio', 'Contact Us'].map((item) => (
            <a 
              key={item}
              href="#" 
              className="text-white/80 hover:text-white transition-colors duration-300 text-sm lg:text-base"
            >
              {item}
            </a>
          ))}
        </div>

        {/* Get Started Button */}
        <button className="border border-white/20 text-white px-3 sm:px-4 md:px-6 py-1.5 sm:py-2 md:py-2.5 rounded-full hover:bg-white/10 transition-all duration-300 flex items-center space-x-1 sm:space-x-2 text-xs sm:text-sm backdrop-blur-sm">
          <span>Get Started</span>
          <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4" />
        </button>
      </nav>

      {/* Social Media Icons - Right Side */}
      <div className="absolute right-4 sm:right-6 md:right-12 lg:right-20 top-1/4 sm:top-1/3 flex flex-col space-y-4 sm:space-y-6 z-40">
        <Instagram className="w-5 h-5 sm:w-5 sm:h-5 text-white/60 hover:text-white cursor-pointer transition-colors" />
        <MessageCircle className="w-5 h-5 sm:w-5 sm:h-5 text-white/60 hover:text-white cursor-pointer transition-colors" />
        <Linkedin className="w-5 h-5 sm:w-5 sm:h-5 text-white/60 hover:text-white cursor-pointer transition-colors" />
        <Twitter className="w-5 h-5 sm:w-5 sm:h-5 text-white/60 hover:text-white cursor-pointer transition-colors" />
      </div>

      {/* Main Content */}
      <main className="relative z-30 flex flex-col items-center justify-center px-4 sm:px-6 md:px-12 lg:px-20 text-center pt-8 sm:pt-12 md:pt-16 lg:pt-20 pb-32 sm:pb-36 md:pb-40 lg:pb-44">
        {/* Main Headline */}
        <motion.h1 
          className="text-8xl sm:text-5xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-light text-white leading-tight mb-6 sm:mb-6 md:mb-8 max-w-6xl"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <span className="block mb-2 sm:mb-2">Amazing website creation</span>
          <span className="block">
            with{' '}
            <span className="bg-gradient-to-r from-purple-300 via-blue-300 to-indigo-300 bg-clip-text text-transparent">
              our agency
            </span>
          </span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p 
          className="text-white/70 max-w-xl md:max-w-2xl mb-8 sm:mb-10 md:mb-12 text-base sm:text-lg md:text-lg leading-relaxed px-2 sm:px-0"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          help you to build website company that is modern, user friendly, good SEO, and Clean design
        </motion.p>

        {/* CTA Button */}
        <motion.button
          className="bg-white text-gray-900 px-6 sm:px-8 md:px-8 py-3 sm:py-3.5 md:py-3.5 rounded-full font-medium hover:bg-gray-100 transition-all duration-300 flex items-center space-x-2 sm:space-x-2 text-base sm:text-base shadow-xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          <span>Get Started</span>
          <ArrowRight className="w-5 h-5 sm:w-5 sm:h-5" />
        </motion.button>
      </main>

      {/* Bottom Scroll Indicator */}
      <div className="absolute bottom-8 sm:bottom-12 md:bottom-16 left-1/2 transform -translate-x-1/2">
        <div className="relative w-20 h-20 sm:w-20 sm:h-20 md:w-24 md:h-24">
          {/* Rotating Text Circle */}
          <motion.div
            className="absolute inset-0"
            animate={{ rotate: -360 }}
            transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          >
            <svg className="w-full h-full" viewBox="0 0 96 96">
              <defs>
                <path
                  id="circle-path"
                  d="M 48, 48 m -36, 0 a 36, 36 0 1, 1 72, 0 a 36, 36 0 1, 1 -72, 0"
                />
              </defs>
              <text className="text-[6px] sm:text-[6px] md:text-[7px] fill-white/40 font-normal tracking-[0.3em] uppercase">
                <textPath href="#circle-path" startOffset="0%">
                  scroll for works • scroll for works • 
                </textPath>
              </text>
            </svg>
          </motion.div>
          
          {/* Center Number */}
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-white text-2xl sm:text-2xl md:text-3xl font-light">0</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResponsiveLanding;