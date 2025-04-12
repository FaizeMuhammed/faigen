'use client'
import { useEffect, useState, useRef } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Home() {
  const [mounted, setMounted] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const textVariants = ["Innovative", "Powerful", "Seamless"];
  
  // Ref for the animated gradient background
  const canvasRef = useRef(null);
  
  // Add link to Montserrat font in the head section
  useEffect(() => {
    const linkElement = document.createElement('link');
    linkElement.rel = 'stylesheet';
    linkElement.href = 'https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;600;700;800;900&display=swap';
    document.head.appendChild(linkElement);
    
    return () => {
      document.head.removeChild(linkElement);
    };
  }, []);
  
  useEffect(() => {
    setMounted(true);
    
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    
    window.addEventListener("scroll", handleScroll);
    
    // Text rotation effect
    const textInterval = setInterval(() => {
      setCurrentTextIndex((prev) => (prev + 1) % textVariants.length);
    }, 3000);
    
    // Initialize gradient canvas
    if (canvasRef.current) {
      initGradientCanvas();
    }
    
    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearInterval(textInterval);
    };
  }, []);
  
  // Elegant wave-like background animation with gradient
  const initGradientCanvas = () => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    
    // Create gradient background
    let gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
    gradient.addColorStop(0, '#ffffff');
    gradient.addColorStop(0.5, '#f5f5f5');
    gradient.addColorStop(1, '#fafafa');
    
    // Animation parameters
    let time = 0;
    const waveCount = 6;
    const dotCount = Math.floor(window.innerWidth / 30); // Dots per wave
    
    function animate() {
      // Clear canvas and fill with gradient
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      
      // Draw very subtle grid
      const gridSize = 50;
      ctx.strokeStyle = 'rgba(0, 0, 0, 0.02)';
      ctx.lineWidth = 1;
      
      for (let x = 0; x < canvas.width; x += gridSize) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, canvas.height);
        ctx.stroke();
      }
      
      for (let y = 0; y < canvas.height; y += gridSize) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(canvas.width, y);
        ctx.stroke();
      }
      
      // Draw waves with dots
      for (let waveIndex = 0; waveIndex < waveCount; waveIndex++) {
        const waveHeight = canvas.height / (waveCount + 1) * (waveIndex + 1);
        const amplitude = 40;
        const frequency = 0.01;
        const phaseShift = time * 0.5 + waveIndex * Math.PI / 4;
        
        // Draw connecting line (very subtle)
        ctx.beginPath();
        ctx.moveTo(0, waveHeight);
        
        for (let x = 0; x < canvas.width; x += 2) {
          const y = waveHeight + Math.sin(x * frequency + phaseShift) * amplitude;
          ctx.lineTo(x, y);
        }
        
        // Create gradient for the wave lines
        const waveGradient = ctx.createLinearGradient(0, 0, canvas.width, 0);
        waveGradient.addColorStop(0, 'rgba(0, 0, 0, 0.01)');
        waveGradient.addColorStop(0.5, 'rgba(0, 0, 0, 0.04)');
        waveGradient.addColorStop(1, 'rgba(0, 0, 0, 0.01)');
        
        ctx.strokeStyle = waveGradient;
        ctx.stroke();
        
        // Draw dots on the wave
        for (let i = 0; i < dotCount; i++) {
          const x = (canvas.width / (dotCount - 1)) * i;
          const y = waveHeight + Math.sin(x * frequency + phaseShift) * amplitude;
          
          // Draw main dot
          const dotSize = (i % 3 === 0) ? 2.5 : 1.5;
          ctx.beginPath();
          ctx.arc(x, y, dotSize, 0, Math.PI * 2);
          
          // Add gradient to dots - darker in the middle of the screen
          const opacity = 0.1 + (0.1 * Math.sin((x / canvas.width) * Math.PI));
          ctx.fillStyle = `rgba(0, 0, 0, ${opacity})`;
          ctx.fill();
          
          // Sometimes draw connector lines between dots
          if (i > 0 && i % 4 === 0) {
            const prevX = (canvas.width / (dotCount - 1)) * (i - 1);
            const prevY = waveHeight + Math.sin(prevX * frequency + phaseShift) * amplitude;
            
            ctx.beginPath();
            ctx.moveTo(prevX, prevY);
            ctx.lineTo(x, y);
            ctx.strokeStyle = 'rgba(0, 0, 0, 0.05)';
            ctx.stroke();
          }
        }
      }
      
      // Draw a few floating isolated dots with gradient opacity
      for (let i = 0; i < 30; i++) {
        const x = Math.random() * canvas.width;
        const y = Math.random() * canvas.height;
        const size = Math.random() * 1.5 + 0.5;
        
        // Calculate opacity based on position for gradient effect
        const centerX = canvas.width / 2;
        const centerY = canvas.height / 2;
        const distFromCenter = Math.sqrt(Math.pow(x - centerX, 2) + Math.pow(y - centerY, 2));
        const maxDist = Math.sqrt(Math.pow(canvas.width/2, 2) + Math.pow(canvas.height/2, 2));
        const opacity = 0.05 + (0.05 * (1 - distFromCenter/maxDist));
        
        ctx.beginPath();
        ctx.arc(x, y, size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(0, 0, 0, ${opacity})`;
        ctx.fill();
      }
      
      // Update time for animation
      time += 0.01;
      
      requestAnimationFrame(animate);
    }
    
    // Handle window resize
    window.addEventListener('resize', () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      
      // Update gradient on resize
      gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
      gradient.addColorStop(0, '#ffffff');
      gradient.addColorStop(0.5, '#f5f5f5');
      gradient.addColorStop(1, '#fafafa');
    });
    
    animate();
  };
  
  // Framer motion variants
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
  
  return (
    <div className="min-h-screen text-black flex flex-col overflow-hidden relative">
      {/* Minimal Grid Animation Background */}
      <canvas 
        ref={canvasRef} 
        className="absolute inset-0 w-full h-full -z-10"
      ></canvas>
      
      {/* Navigation */}
      <motion.nav 
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`fixed w-full z-50 transition-all duration-500 ${scrolled ? "py-2 backdrop-blur-lg  shadow-sm" : "py-4 "}`}
      >
        <div className="flex justify-between items-center px-4 md:px-8 lg:px-16 max-w-7xl mx-auto w-full">
          <div className={`w-32 h-12 relative transition-all duration-500 ${scrolled ? "scale-90" : ""}`}>
            <div className="absolute inset-0 flex items-center">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
              >
                {/* Replace with your logo */}
                {/* <Image 
                  src="/ChatGPT_Image_Apr_4__2025__10_40_51_PM-removebg-preview.png" 
                  alt="Your Company" 
                  width={80} 
                  height={48} 
                  className="object-contain"
                /> */}
              </motion.div>
            </div>
          </div>
          
          <motion.div 
            className="flex items-center space-x-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            <div className="hidden md:flex space-x-8 mr-8">
              {["Products", "Solutions", "Resources", "Pricing"].map((item, index) => (
                <motion.a 
                  key={item} 
                  href="#" 
                  className="relative text-sm font-medium text-black transition-colors duration-300 group"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5 + index * 0.1 }}
                  whileHover={{ y: -2 }}
                >
                  {item}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-black transition-all duration-300 group-hover:w-full"></span>
                </motion.a>
              ))}
            </div>
            
            <motion.button 
              className="px-6 py-2.5 text-sm font-medium border border-black rounded-full hover:bg-black hover:text-white transition-all duration-300 transform hover:scale-105"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Contact
            </motion.button>
            
            <motion.button 
              className="p-2 md:hidden text-black"
              whileTap={{ scale: 0.9 }}
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </motion.button>
          </motion.div>
        </div>
      </motion.nav>

      {/* Hero Section */}
      <main className="flex flex-col md:flex-row items-center justify-between px-4 md:px-8 py-12 md:py-28 min-h-screen max-w-7xl mx-auto w-full">
        {mounted && (
          <>
            {/* Left content */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="z-10 w-full md:w-3/5 text-left"
            >
              {/* Logo */}
              <motion.div 
                variants={itemVariants}
                className="mb-12 w-32 h-32 relative"
              >
                <div className="flex items-center justify-start">
                  <div className="relative">
                    {/* Simple circle around logo */}
                    <div className="absolute -inset-1 border border-black/10 rounded-full"></div>
                    {/* Logo */}
                    <Image 
                      src="/WhatsApp_Image_2025-04-04_at_9.53.44_PM-removebg-preview.png" 
                      alt="Faigen" 
                      width={100} 
                      height={100} 
                      className="object-contain relative z-10"
                    />
                  </div>
                </div>
              </motion.div>
              
              {/* Dynamic text heading with different font */}
              <motion.div variants={itemVariants} className="overflow-hidden mb-12">
                <div className="">
                  <motion.h1 
                    key={currentTextIndex}
                    initial={{ y: 40, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: -40, opacity: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-6xl md:text-7xl lg:text-8xl font-extrabold tracking-tight leading-none font-sans md:leading-[0.9] lg:leading-[0.9]"
                    style={{ fontFamily: "'Montserrat', sans-serif" }}
                  >
                    <span className="block">We Create</span>
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-black via-gray-700 to-black">
                      {textVariants[currentTextIndex]}
                    </span>
                    <span className="block">Solutions.</span>
                  </motion.h1>
                </div>
              </motion.div>
              
              {/* <motion.div
                variants={itemVariants}
                className="relative w-24 h-0.5 bg-black mb-8"
              ></motion.div> */}
              
              {/* Paragraph only visible on mobile */}
              <motion.p 
                variants={itemVariants}
                className="text-lg md:text-xl max-w-xl mb-10 text-black/80 leading-relaxed md:hidden"
              >
                Building exceptional digital experiences that transform 
                how businesses operate in the modern world.
              </motion.p>
              
              {/* Removed all buttons */}
              <motion.div 
                variants={itemVariants}
                className="h-16" /* Empty space where buttons were */
              >
              </motion.div>
            </motion.div>
            
            {/* Right side - Tech image frame with developer icons - back to original size */}
            <motion.div 
              className="hidden md:block w-2/5 h-[500px] relative mt-10 md:mt-0"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              <div className="absolute inset-0 border border-black/10 rounded-lg overflow-hidden backdrop-blur-sm bg-white/30 z-10">
                <div className="absolute inset-0 bg-gradient-to-br from-transparent to-black/5"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  {/* Abstract technology elements with coding icons */}
                  <svg className="w-full h-full p-8 text-black" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
                    {/* Circuit-like pattern */}
                    <path d="M20 100 H70 M130 100 H180" stroke="currentColor" strokeWidth="1" strokeOpacity="0.2" />
                    <path d="M100 20 V70 M100 130 V180" stroke="currentColor" strokeWidth="1" strokeOpacity="0.2" />
                    <circle cx="100" cy="100" r="50" stroke="currentColor" strokeWidth="1" strokeOpacity="0.3" fill="none" />
                    <circle cx="100" cy="100" r="30" stroke="currentColor" strokeWidth="1" strokeOpacity="0.4" fill="none" />
                    <circle cx="100" cy="100" r="10" stroke="currentColor" strokeWidth="1" fill="none" />
                    
                    {/* Connection points */}
                    <circle cx="100" cy="50" r="4" fill="currentColor" fillOpacity="0.5" />
                    <circle cx="100" cy="150" r="4" fill="currentColor" fillOpacity="0.5" />
                    <circle cx="50" cy="100" r="4" fill="currentColor" fillOpacity="0.5" />
                    <circle cx="150" cy="100" r="4" fill="currentColor" fillOpacity="0.5" />
                    
                    {/* Diagonal lines */}
                    <path d="M60 60 L140 140" stroke="currentColor" strokeWidth="1" strokeOpacity="0.3" />
                    <path d="M140 60 L60 140" stroke="currentColor" strokeWidth="1" strokeOpacity="0.3" />
                    
                    {/* Small dots */}
                    <circle cx="70" cy="70" r="2" fill="currentColor" fillOpacity="0.7" />
                    <circle cx="130" cy="130" r="2" fill="currentColor" fillOpacity="0.7" />
                    <circle cx="130" cy="70" r="2" fill="currentColor" fillOpacity="0.7" />
                    <circle cx="70" cy="130" r="2" fill="currentColor" fillOpacity="0.7" />
                    
                    {/* Code brackets - Left */}
                    <path d="M40 60 L30 100 L40 140" stroke="currentColor" strokeWidth="1.5" strokeOpacity="0.6" />
                    
                    {/* Code brackets - Right */}
                    <path d="M160 60 L170 100 L160 140" stroke="currentColor" strokeWidth="1.5" strokeOpacity="0.6" />
                    
                    {/* React-like atom icon */}
                    <ellipse cx="100" cy="100" rx="15" ry="40" stroke="currentColor" strokeWidth="1" strokeOpacity="0.4" transform="rotate(30 100 100)" />
                    <ellipse cx="100" cy="100" rx="15" ry="40" stroke="currentColor" strokeWidth="1" strokeOpacity="0.4" transform="rotate(90 100 100)" />
                    <ellipse cx="100" cy="100" rx="15" ry="40" stroke="currentColor" strokeWidth="1" strokeOpacity="0.4" transform="rotate(150 100 100)" />
                  </svg>
                </div>
                
                {/* Floating coding elements */}
                {/* HTML tag - with higher z-index and more visibility */}
                <div className="absolute top-1/4 left-1/4 px-3 py-2 border-2 border-black/50 rounded-lg bg-white/90 shadow-lg z-20 animate-float" style={{ animationDelay: '0s' }}>
                  <div className="text-base font-mono font-bold text-black">&lt;/&gt;</div>
                </div>
                
                {/* JavaScript icon - higher z-index */}
                <div className="absolute bottom-1/3 right-1/4 w-12 h-12 flex items-center justify-center border-2 border-yellow-500/80 rounded-lg bg-yellow-100/90 shadow-lg z-20 animate-float" style={{ animationDelay: '1s' }}>
                  <div className="text-sm font-mono font-bold text-yellow-800">JS</div>
                </div>
                
                {/* Database icon - higher z-index */}
                <div className="absolute top-1/2 right-1/3 w-11 h-11 border-2 border-blue-500/80 rounded-md bg-blue-100/90 shadow-lg z-20 flex flex-col items-center justify-center animate-float" style={{ animationDelay: '2s' }}>
                  <div className="w-5 h-1 border-t border-blue-600/70 rounded-t-sm"></div>
                  <div className="w-6 h-4 border border-blue-600/70 border-t-0"></div>
                  <div className="w-5 h-1 border-t border-blue-600/70 rounded-b-sm"></div>
                </div>
                
                {/* Git branch icon - higher z-index */}
                <div className="absolute top-1/3 right-1/5 w-12 h-12 flex items-center justify-center border-2 border-gray-500/80 rounded-lg bg-white/90 shadow-lg z-20 animate-float" style={{ animationDelay: '3s' }}>
                  <svg viewBox="0 0 24 24" width="22" height="22" stroke="currentColor" strokeWidth="2" fill="none">
                    <circle cx="12" cy="7" r="3" />
                    <circle cx="17" cy="17" r="3" />
                    <circle cx="7" cy="17" r="3" />
                    <path d="M12 10v3.5a1.5 1.5 0 0 0 1.5 1.5h2" />
                  </svg>
                </div>
                
                {/* Code function icon - higher z-index */}
                <div className="absolute bottom-1/4 left-1/3 px-3 py-2 border-2 border-gray-500/80 rounded-lg bg-white/90 shadow-lg z-20 animate-float" style={{ animationDelay: '1.5s' }}>
                  <div className="text-sm font-mono font-bold">() =&gt;</div>
                </div>
                
                {/* React/Framework icon - higher z-index */}
                <div className="absolute top-1/6 right-1/4 w-11 h-11 flex items-center justify-center border-2 border-cyan-500/80 rounded-full bg-cyan-100/90 shadow-lg z-20 animate-float" style={{ animationDelay: '2.5s' }}>
                  <div className="text-base font-bold">⚛️</div>
                </div>
                
                {/* CSS icon - higher z-index */}
                <div className="absolute bottom-1/5 left-1/5 w-11 h-11 flex items-center justify-center border-2 border-purple-500/80 rounded-lg bg-purple-100/90 shadow-lg z-20 animate-float" style={{ animationDelay: '0.5s' }}>
                  <div className="text-sm font-bold text-purple-800">CSS</div>
                </div>
              </div>
              
              {/* Updated feature highlight with z-index */}
              <div className="absolute -bottom-5 -right-5 p-4 bg-white border border-black/10 rounded-lg shadow-sm z-10">
                <div className="text-sm font-semibold">Client Success Rate</div>
                <div className="mt-1 flex items-center gap-1 text-2xl font-bold">
                  98%
                  <span className="text-xs text-black/60 font-normal ml-1">satisfaction</span>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </main>
      
      {/* CSS for animations */}
      <style jsx global>{`
        @keyframes spin-slow {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        
        @keyframes reverse-spin {
          0% { transform: rotate(360deg); }
          100% { transform: rotate(0deg); }
        }
        
        @keyframes float {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
          100% { transform: translateY(0px); }
        }
        
        .animate-spin-slow {
          animation: spin-slow 30s linear infinite;
        }
        
        .animate-reverse-spin {
          animation: reverse-spin 25s linear infinite;
        }
        
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        
        body {
          background-color: #fff;
          margin: 0;
          padding: 0;
          overflow-x: hidden;
        }
      `}</style>
    </div>
  );
}