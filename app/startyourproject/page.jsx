'use client'
import { useEffect, useState } from "react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { useRouter } from "next/navigation";
import { 
  ArrowLeft, 
  Rocket, 
  Users, 
  Calendar, 
  CheckCircle, 
  MessageSquare,
  Phone,
  Mail,
  ArrowRight,
  Star,
  Target,
  Zap
} from "lucide-react";

const StartYourProjectPage = () => {
  const [mounted, setMounted] = useState(false);
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, threshold: 0.1 });
  const router = useRouter();
  
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
        staggerChildren: 0.1,
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
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const steps = [
    {
      icon: MessageSquare,
      title: "Free Consultation",
      description: "Tell us about your vision and requirements",
      duration: "30 min"
    },
    {
      icon: Target,
      title: "Project Planning",
      description: "We create a detailed roadmap and timeline",
      duration: "2-3 days"
    },
    {
      icon: Zap,
      title: "Development",
      description: "Our team brings your project to life",
      duration: "2-12 weeks"
    },
    {
      icon: Rocket,
      title: "Launch & Support",
      description: "Go live with ongoing maintenance",
      duration: "Ongoing"
    }
  ];

  const benefits = [
    "Free initial consultation & project estimation",
    "Dedicated project manager assigned",
    "Regular progress updates & demos",
    "100% transparency in development process",
    "Post-launch support & maintenance",
    "Flexible payment options available"
  ];

  if (!mounted) return null;
  
  return (
    <div className="min-h-screen bg-black">
      {/* Header */}
      <div className="relative z-10 px-4 md:px-6 pt-6 md:pt-8">
        <div className="max-w-6xl mx-auto">
          <motion.button
            onClick={() => router.push('/')}
            whileHover={{ scale: 1.05, x: -2 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center space-x-2 text-white/70 hover:text-white transition-colors duration-300 mb-8"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <ArrowLeft className="w-5 h-5" />
            <span>Back to Home</span>
          </motion.button>
        </div>
      </div>

      {/* Main Content */}
      <div className="px-4 md:px-6 pb-20">
        <div className="max-w-6xl mx-auto">
          {mounted && (
            <motion.div
              ref={sectionRef}
              variants={containerVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              className="space-y-16"
            >
              {/* Hero Section */}
              <motion.div variants={itemVariants} className="text-center space-y-6">
                <motion.div 
                  className="inline-flex items-center space-x-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20"
                >
                  <Rocket className="w-4 h-4 text-blue-400" />
                  <span className="text-sm font-medium text-white/80">Start Your Project</span>
                </motion.div>
                
                <h1 
                  className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight"
                  style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                >
                  Let's Build Something
                  <span className="block">
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500">
                      Extraordinary
                    </span>
                  </span>
                  Together
                </h1>
                
                <p 
                  className="text-lg md:text-xl text-white/70 leading-relaxed max-w-3xl mx-auto"
                  style={{ fontFamily: "'Inter', sans-serif" }}
                >
                  Ready to transform your ideas into reality? Our streamlined process ensures 
                  your project is delivered on time, within budget, and exceeds expectations.
                </p>
              </motion.div>

              {/* Quick Action Buttons */}
              <motion.div 
                variants={itemVariants}
                className="flex flex-col sm:flex-row gap-4 justify-center"
              >
                <motion.button
                  onClick={() => router.push('/consultation')}
                  whileHover={{ scale: 1.02, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  className="group px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-2xl font-semibold text-lg transition-all duration-300 shadow-xl hover:shadow-2xl relative overflow-hidden"
                >
                  <span className="relative z-10 flex items-center justify-center space-x-2">
                    <MessageSquare className="w-5 h-5" />
                    <span>Get Free Consultation</span>
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </motion.button>
                
                <motion.button
                  whileHover={{ scale: 1.02, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  className="group px-8 py-4 border-2 border-white/30 hover:border-white/50 rounded-2xl font-semibold text-lg transition-all duration-300 backdrop-blur-sm hover:bg-white/10 text-white"
                >
                  <span className="flex items-center justify-center space-x-2">
                    <Phone className="w-5 h-5" />
                    <span>Call Us Directly</span>
                  </span>
                </motion.button>
              </motion.div>

              {/* Process Steps */}
              <motion.div variants={itemVariants} className="space-y-8">
                <div className="text-center">
                  <h2 
                    className="text-3xl md:text-4xl font-bold text-white mb-4"
                    style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                  >
                    Our Simple 4-Step Process
                  </h2>
                  <p 
                    className="text-white/70 text-lg max-w-2xl mx-auto"
                    style={{ fontFamily: "'Inter', sans-serif" }}
                  >
                    From initial idea to successful launch, we guide you through every step
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {steps.map((step, index) => {
                    const IconComponent = step.icon;
                    return (
                      <motion.div
                        key={index}
                        variants={itemVariants}
                        className="relative group"
                      >
                        <motion.div 
                          className="p-6 bg-white/10 backdrop-blur-xl rounded-2xl border border-white/20 hover:bg-white/15 transition-all duration-300 text-center"
                          whileHover={{ y: -4, scale: 1.02 }}
                        >
                          <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                            <IconComponent className="w-8 h-8 text-white" />
                          </div>
                          
                          <h3 
                            className="text-lg font-semibold text-white mb-2"
                            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                          >
                            {step.title}
                          </h3>
                          
                          <p 
                            className="text-white/70 text-sm mb-3"
                            style={{ fontFamily: "'Inter', sans-serif" }}
                          >
                            {step.description}
                          </p>
                          
                          <span className="text-xs text-blue-400 font-medium bg-blue-500/20 px-3 py-1 rounded-full">
                            {step.duration}
                          </span>
                        </motion.div>

                        {/* Connecting Arrow (except for last item) */}
                        {index < steps.length - 1 && (
                          <div className="hidden lg:block absolute top-1/2 -right-3 transform -translate-y-1/2 z-10">
                            <ArrowRight className="w-6 h-6 text-white/30" />
                          </div>
                        )}
                      </motion.div>
                    );
                  })}
                </div>
              </motion.div>

              {/* Benefits Section */}
              <motion.div variants={itemVariants} className="grid lg:grid-cols-2 gap-12 items-center">
                <div className="space-y-6">
                  <h2 
                    className="text-3xl md:text-4xl font-bold text-white"
                    style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                  >
                    Why Choose Faigen?
                  </h2>
                  
                  <p 
                    className="text-white/70 text-lg"
                    style={{ fontFamily: "'Inter', sans-serif" }}
                  >
                    We're committed to delivering exceptional results and building 
                    long-term partnerships with our clients.
                  </p>

                  <div className="space-y-4">
                    {benefits.map((benefit, index) => (
                      <motion.div
                        key={index}
                        className="flex items-center space-x-3"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 + 1 }}
                      >
                        <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0" />
                        <span 
                          className="text-white/80"
                          style={{ fontFamily: "'Inter', sans-serif" }}
                        >
                          {benefit}
                        </span>
                      </motion.div>
                    ))}
                  </div>
                </div>

                <div className="relative">
                  <motion.div 
                    className="bg-gradient-to-r from-blue-500/20 to-purple-600/20 rounded-3xl p-8 backdrop-blur-xl border border-white/20"
                    whileHover={{ scale: 1.02 }}
                  >
                    <div className="text-center space-y-6">
                      <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto">
                        <Star className="w-10 h-10 text-white" />
                      </div>
                      
                      <div>
                        <h3 
                          className="text-2xl font-bold text-white mb-2"
                          style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                        >
                          Ready to Start?
                        </h3>
                        <p 
                          className="text-white/70 mb-6"
                          style={{ fontFamily: "'Inter', sans-serif" }}
                        >
                          Book your free consultation today and let's discuss your project
                        </p>
                      </div>

                      <div className="space-y-4">
                        <motion.button
                          onClick={() => router.push('/consultation')}
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                          className="w-full py-3 bg-white text-black rounded-xl font-semibold hover:bg-white/90 transition-colors duration-300"
                        >
                          Book Free Consultation
                        </motion.button>
                        
                        <div className="flex items-center justify-center space-x-6 text-sm text-white/60">
                          <div className="flex items-center space-x-1">
                            <Mail className="w-4 h-4" />
                            <span>hello@faigen.com</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <Phone className="w-4 h-4" />
                            <span>+91 98765 43210</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </div>
      </div>

      {/* Background Elements */}
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute top-1/4 -left-1/4 w-96 h-96 bg-gradient-to-r from-blue-400/10 to-purple-600/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 -right-1/4 w-96 h-96 bg-gradient-to-r from-purple-400/10 to-pink-600/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        
        {[...Array(10)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1.5 h-1.5 bg-white/20 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [-20, 20, -20],
              opacity: [0.2, 0.5, 0.2],
            }}
            transition={{
              duration: 6 + Math.random() * 4,
              repeat: Infinity,
              delay: Math.random() * 3,
            }}
          />
        ))}
      </div>

      {/* Enhanced Styles */}
      <style jsx global>{`
        html {
          scroll-behavior: smooth;
        }
        
        ::-webkit-scrollbar {
          width: 6px;
        }
        
        ::-webkit-scrollbar-track {
          background: #1a1a1a;
        }
        
        ::-webkit-scrollbar-thumb {
          background: #404040;
          border-radius: 3px;
        }
        
        ::-webkit-scrollbar-thumb:hover {
          background: #606060;
        }
      `}</style>
    </div>
  );
};

export default StartYourProjectPage;