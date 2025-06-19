import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Code, Palette, Rocket, Zap, Globe, Users } from "lucide-react";

const AboutSection = () => {
  const [mounted, setMounted] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  // Single state for all typing animations
  const [typingState, setTypingState] = useState({
    mainTitle: { text: "", isTyping: false },
    subtitle: { text: "", isTyping: false },
    description: { text: "", isTyping: false }
  });

  useEffect(() => {
    setMounted(true);
    // Start animations after component mounts
    setTimeout(() => setIsVisible(true), 100);
  }, []);

  // Main typing effect logic
  useEffect(() => {
    if (!mounted || !isVisible) return;

    const texts = {
      mainTitle: "Who We Are",
      subtitle: "Building digital experiences that transform businesses",
      description: "We are a passionate team of developers, designers, and strategists dedicated to creating cutting-edge websites and digital solutions. Our mission is to help businesses thrive in the digital landscape through innovative technology and exceptional user experiences."
    };

    const typeText = (key, text, speed, delay) => {
      setTimeout(() => {
        setTypingState(prev => ({
          ...prev,
          [key]: { ...prev[key], isTyping: true }
        }));

        let index = 0;
        const interval = setInterval(() => {
          if (index <= text.length) {
            setTypingState(prev => ({
              ...prev,
              [key]: { ...prev[key], text: text.slice(0, index) }
            }));
            index++;
          } else {
            setTypingState(prev => ({
              ...prev,
              [key]: { ...prev[key], isTyping: false }
            }));
            clearInterval(interval);
          }
        }, speed);
      }, delay);
    };

    // Start typing animations with delays
    typeText('mainTitle', texts.mainTitle, 100, 500);
    typeText('subtitle', texts.subtitle, 30, 1500);
    typeText('description', texts.description, 15, 3500);

  }, [mounted, isVisible]);

  if (!mounted) return null;

  const services = [
    {
      icon: Code,
      title: "Web Development",
      description: "Custom websites built with modern technologies",
      delay: 5.5
    },
    {
      icon: Palette,
      title: "UI/UX Design", 
      description: "Beautiful, intuitive designs that users love",
      delay: 6.0
    },
    {
      icon: Rocket,
      title: "Performance",
      description: "Lightning-fast, optimized experiences",
      delay: 6.5
    },
    {
      icon: Globe,
      title: "SEO Optimization",
      description: "Get found by your target audience",
      delay: 7.0
    },
    {
      icon: Zap,
      title: "Fast Delivery",
      description: "Quick turnaround without compromising quality",
      delay: 7.5
    },
    {
      icon: Users,
      title: "24/7 Support",
      description: "Always here when you need us",
      delay: 8.0
    }
  ];

  return (
    <section className="min-h-screen bg-black text-white relative overflow-hidden py-20 px-4 sm:px-6 md:px-12 lg:px-20">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-20 right-10 w-32 h-32 rounded-full bg-gradient-to-r from-purple-500/10 to-blue-500/10 blur-xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-32 left-16 w-48 h-48 rounded-full bg-gradient-to-r from-indigo-500/10 to-purple-500/10 blur-xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.2, 0.5, 0.2],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Main Title */}
        <div className="text-center mb-16">
          <motion.h2 
            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-light mb-6"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="bg-gradient-to-r from-purple-300 via-blue-300 to-indigo-300 bg-clip-text text-transparent">
              {typingState.mainTitle.text || "Who We Are"}
            </span>
            {typingState.mainTitle.isTyping && (
              <motion.span
                className="text-white ml-1"
                animate={{ opacity: [1, 0] }}
                transition={{ duration: 0.8, repeat: Infinity }}
              >
                |
              </motion.span>
            )}
          </motion.h2>

          <motion.p 
            className="text-xl sm:text-2xl md:text-3xl text-white/70 max-w-4xl mx-auto leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.2 }}
          >
            {typingState.subtitle.text || "Building digital experiences that transform businesses"}
            {typingState.subtitle.isTyping && (
              <motion.span
                className="text-white/70 ml-1"
                animate={{ opacity: [1, 0] }}
                transition={{ duration: 0.8, repeat: Infinity }}
              >
                |
              </motion.span>
            )}
          </motion.p>
        </div>

        {/* Description */}
        <motion.div 
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 3.2 }}
        >
          <p className="text-lg sm:text-xl text-white/60 max-w-4xl mx-auto leading-relaxed">
            {typingState.description.text || "We are a passionate team of developers, designers, and strategists dedicated to creating cutting-edge websites and digital solutions."}
            {typingState.description.isTyping && (
              <motion.span
                className="text-white/60 ml-1"
                animate={{ opacity: [1, 0] }}
                transition={{ duration: 0.8, repeat: Infinity }}
              >
                |
              </motion.span>
            )}
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              className="group relative"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: service.delay }}
            >
              <div className="relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 sm:p-8 h-full transition-all duration-500 group-hover:bg-white/10 group-hover:border-white/20 group-hover:scale-105">
                {/* Icon */}
                <motion.div
                  className="inline-flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-gradient-to-r from-purple-500 to-blue-500 mb-6"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ duration: 0.3 }}
                >
                  <service.icon className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
                </motion.div>

                {/* Title */}
                <h3 className="text-xl sm:text-2xl font-semibold text-white mb-4 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-purple-300 group-hover:to-blue-300 group-hover:bg-clip-text transition-all duration-300">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-white/60 leading-relaxed group-hover:text-white/80 transition-colors duration-300">
                  {service.description}
                </p>

                {/* Hover effect */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-purple-500/0 to-blue-500/0 group-hover:from-purple-500/5 group-hover:to-blue-500/5 transition-all duration-500" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div 
          className="text-center mt-20"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 8.5 }}
        >
          <motion.button
            className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-4 rounded-full font-medium hover:from-purple-700 hover:to-blue-700 transition-all duration-300 shadow-xl"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Let's Work Together
          </motion.button>
        </motion.div>
      </div>

      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-white/20 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [-20, -100],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>
    </section>
  );
};

export default AboutSection;