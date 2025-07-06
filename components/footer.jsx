'use client'
import { useEffect, useState } from "react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { 
  MapPin, 
  Phone, 
  Mail, 
  Globe, 
  Send, 
  User, 
  MessageSquare,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Github
} from "lucide-react";

const ContactFooterSection = () => {
  const [mounted, setMounted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    projectIdea: ''
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

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = () => {
    // Handle form submission
    console.log('Form submitted:', formData);
    // Add your form submission logic here
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
    hidden: { y: 50, opacity: 0 },
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

  const formVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 60,
        damping: 15,
        duration: 1
      }
    }
  };
  
  return (
    <>
      {/* Background Elements */}
      <div className="fixed inset-0 -z-10 overflow-hidden">
        {/* Gradient Orbs */}
        <div className="absolute top-2/3 -left-1/3 w-96 h-96 bg-gradient-to-r from-blue-400/10 to-purple-600/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-1/4 -right-1/3 w-96 h-96 bg-gradient-to-r from-green-400/10 to-cyan-600/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '4s' }}></div>
        
        {/* Floating particles */}
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
            }}
            transition={{
              duration: 6 + Math.random() * 4,
              repeat: Infinity,
              delay: Math.random() * 3,
            }}
          />
        ))}
      </div>

      {/* Contact Section */}
      <section 
        ref={sectionRef}
        id="contact" 
        className="relative py-20 lg:py-32 px-6 md:px-12 lg:px-20 bg-black"
      >
        <div className="max-w-7xl mx-auto">
          {mounted && (
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              className="space-y-16"
            >
              {/* Section Header */}
              <motion.div 
                variants={itemVariants}
                className="text-center space-y-6"
              >
                <motion.div 
                  className="inline-flex items-center space-x-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20"
                >
                  <Mail className="w-4 h-4 text-blue-400" />
                  <span className="text-sm font-medium text-white/80">Contact Us</span>
                </motion.div>
                
                <motion.h2 
                  className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-[0.9] tracking-tight"
                  style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                >
                  <span className="block text-white">Let's Start</span>
                  <span className="block">
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-300 to-white">
                      Something Great
                    </span>
                  </span>
                  <span className="block text-white">Together</span>
                </motion.h2>
                
                <motion.p 
                  className="text-lg lg:text-xl text-white/70 leading-relaxed max-w-3xl mx-auto"
                  style={{ fontFamily: "'Inter', sans-serif" }}
                >
                  Ready to transform your ideas into reality? Get in touch with our team 
                  and let's discuss how we can bring your vision to life.
                </motion.p>
              </motion.div>

              {/* Contact Form */}
              <motion.div 
                variants={containerVariants}
                className="grid lg:grid-cols-2 gap-12 lg:gap-16"
              >
                {/* Contact Form */}
                <motion.div variants={formVariants}>
                  <div className="space-y-6">
                    {/* Name Field */}
                    <motion.div 
                      className="relative"
                      whileFocus={{ scale: 1.02 }}
                    >
                      <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                        <User className="h-5 w-5 text-white/50" />
                      </div>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="Your Name"
                        className="w-full pl-12 pr-4 py-4 bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl text-white placeholder-white/50 focus:outline-none focus:border-white/40 focus:ring-2 focus:ring-white/20 transition-all duration-300"
                        style={{ fontFamily: "'Inter', sans-serif" }}
                        required
                      />
                    </motion.div>

                    {/* Email Field */}
                    <motion.div 
                      className="relative"
                      whileFocus={{ scale: 1.02 }}
                    >
                      <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                        <Mail className="h-5 w-5 text-white/50" />
                      </div>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="Your Email"
                        className="w-full pl-12 pr-4 py-4 bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl text-white placeholder-white/50 focus:outline-none focus:border-white/40 focus:ring-2 focus:ring-white/20 transition-all duration-300"
                        style={{ fontFamily: "'Inter', sans-serif" }}
                        required
                      />
                    </motion.div>

                    {/* Phone Field */}
                    <motion.div 
                      className="relative"
                      whileFocus={{ scale: 1.02 }}
                    >
                      <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                        <Phone className="h-5 w-5 text-white/50" />
                      </div>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder="Your Phone Number"
                        className="w-full pl-12 pr-4 py-4 bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl text-white placeholder-white/50 focus:outline-none focus:border-white/40 focus:ring-2 focus:ring-white/20 transition-all duration-300"
                        style={{ fontFamily: "'Inter', sans-serif" }}
                      />
                    </motion.div>

                    {/* Project Idea Field */}
                    <motion.div 
                      className="relative"
                      whileFocus={{ scale: 1.02 }}
                    >
                      <div className="absolute top-4 left-0 pl-4 flex items-start pointer-events-none">
                        <MessageSquare className="h-5 w-5 text-white/50 mt-1" />
                      </div>
                      <textarea
                        name="projectIdea"
                        value={formData.projectIdea}
                        onChange={handleInputChange}
                        placeholder="Tell us about your project idea..."
                        rows={6}
                        className="w-full pl-12 pr-4 py-4 bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl text-white placeholder-white/50 focus:outline-none focus:border-white/40 focus:ring-2 focus:ring-white/20 transition-all duration-300 resize-none"
                        style={{ fontFamily: "'Inter', sans-serif" }}
                        required
                      />
                    </motion.div>

                    {/* Submit Button */}
                    <motion.button
                      onClick={handleSubmit}
                      whileHover={{ scale: 1.02, y: -2 }}
                      whileTap={{ scale: 0.98 }}
                      className="w-full group px-8 py-4 bg-white text-black rounded-2xl font-semibold text-lg transition-all duration-300 shadow-xl hover:shadow-2xl relative overflow-hidden"
                    >
                      <span className="relative z-10 flex items-center justify-center space-x-2">
                        <span>Send Message</span>
                        <Send className="w-5 h-5" />
                      </span>
                      <div className="absolute inset-0 bg-gradient-to-r from-gray-100 to-white opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </motion.button>
                  </div>
                </motion.div>

                {/* Contact Info */}
                <motion.div 
                  variants={itemVariants}
                  className="space-y-8"
                >
                  <div className="space-y-6">
                    <h3 
                      className="text-2xl lg:text-3xl font-bold text-white"
                      style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                    >
                      Get in Touch
                    </h3>
                    <p 
                      className="text-white/70 leading-relaxed"
                      style={{ fontFamily: "'Inter', sans-serif" }}
                    >
                      Whether you have a question about our services, need a quote, 
                      or want to discuss a potential project, we're here to help.
                    </p>
                  </div>

                  {/* Contact Details */}
                  <div className="space-y-6">
                    {[
                      {
                        icon: MapPin,
                        title: "Location",
                        detail: "123 Innovation Street, Tech Hub, CA 94105",
                        color: "text-red-400"
                      },
                      {
                        icon: Phone,
                        title: "Phone Number",
                        detail: "+1 (555) 123-4567",
                        color: "text-green-400"
                      },
                      {
                        icon: Mail,
                        title: "Email",
                        detail: "hello@faigen.com",
                        color: "text-blue-400"
                      },
                      {
                        icon: Globe,
                        title: "Website",
                        detail: "www.faigen.com",
                        color: "text-purple-400"
                      }
                    ].map((item, index) => {
                      const IconComponent = item.icon;
                      return (
                        <motion.div
                          key={index}
                          className="flex items-center space-x-4 p-4 bg-white/5 backdrop-blur-xl rounded-xl border border-white/10 hover:bg-white/10 transition-all duration-300"
                          whileHover={{ x: 4, scale: 1.02 }}
                        >
                          <div className={`w-12 h-12 ${item.color} bg-white/10 rounded-lg flex items-center justify-center`}>
                            <IconComponent className="w-6 h-6" />
                          </div>
                          <div>
                            <h4 className="text-white font-semibold">{item.title}</h4>
                            <p className="text-white/70 text-sm">{item.detail}</p>
                          </div>
                        </motion.div>
                      );
                    })}
                  </div>

                  {/* Social Links */}
                  <motion.div variants={itemVariants}>
                    <h4 className="text-white font-semibold mb-4">Follow Us</h4>
                    <div className="flex space-x-4">
                      {[
                        { icon: Facebook, color: "hover:text-blue-400" },
                        { icon: Twitter, color: "hover:text-sky-400" },
                        { icon: Instagram, color: "hover:text-pink-400" },
                        { icon: Linkedin, color: "hover:text-blue-600" },
                        { icon: Github, color: "hover:text-gray-400" }
                      ].map((social, index) => {
                        const SocialIcon = social.icon;
                        return (
                          <motion.a
                            key={index}
                            href="#"
                            className={`w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center text-white/70 ${social.color} transition-all duration-300 border border-white/10 hover:bg-white/20`}
                            whileHover={{ scale: 1.1, y: -2 }}
                            whileTap={{ scale: 0.95 }}
                          >
                            <SocialIcon className="w-5 h-5" />
                          </motion.a>
                        );
                      })}
                    </div>
                  </motion.div>
                </motion.div>
              </motion.div>
            </motion.div>
          )}
        </div>
      </section>

      {/* Footer */}
      <footer className="relative bg-black border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 py-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {/* Company Info */}
            <div className="space-y-4">
              <h3 
                className="text-xl font-bold text-white"
                style={{ fontFamily: "'Space Grotesk', sans-serif" }}
              >
                Faigen
              </h3>
              <p 
                className="text-white/70 text-sm leading-relaxed"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                Digital innovation meets strategic thinking. We build tomorrow's solutions today.
              </p>
            </div>

            {/* Quick Links */}
            <div className="space-y-4">
              <h4 className="text-white font-semibold">Quick Links</h4>
              <div className="space-y-2">
                {['Services', 'Portfolio', 'Careers', 'Privacy Policy'].map((link, index) => (
                  <motion.a
                    key={index}
                    href="#"
                    className="block text-white/70 hover:text-white transition-colors duration-300 text-sm"
                    whileHover={{ x: 4 }}
                  >
                    {link}
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Services */}
            <div className="space-y-4">
              <h4 className="text-white font-semibold">Services</h4>
              <div className="space-y-2">
                {['Mobile Development', 'Web Development', 'UI/UX Design', 'Backend Development'].map((service, index) => (
                  <motion.a
                    key={index}
                    href="#"
                    className="block text-white/70 hover:text-white transition-colors duration-300 text-sm"
                    whileHover={{ x: 4 }}
                  >
                    {service}
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Contact Info */}
            <div className="space-y-4">
              <h4 className="text-white font-semibold">Contact</h4>
              <div className="space-y-3 text-sm">
                <div className="flex items-center space-x-2 text-white/70">
                  <MapPin className="w-4 h-4" />
                  <span>Tech Hub, CA 94105</span>
                </div>
                <div className="flex items-center space-x-2 text-white/70">
                  <Phone className="w-4 h-4" />
                  <span>+1 (555) 123-4567</span>
                </div>
                <div className="flex items-center space-x-2 text-white/70">
                  <Mail className="w-4 h-4" />
                  <span>hello@faigen.com</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Footer Bottom */}
          <motion.div 
            className="mt-12 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            <p className="text-white/60 text-sm">
              © 2024 Faigen. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-white/60 hover:text-white text-sm transition-colors duration-300">
                Terms of Service
              </a>
              <a href="#" className="text-white/60 hover:text-white text-sm transition-colors duration-300">
                Privacy Policy
              </a>
            </div>
          </motion.div>
        </div>

        {/* Background Elements */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          {/* Subtle Grid Pattern */}
          <div className="absolute inset-0 bg-grid-pattern opacity-[0.02]"></div>
          
          {/* Geometric Shapes */}
          {[...Array(4)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-6 h-6 border border-white/5 rounded backdrop-blur-sm"
              style={{
                left: `${10 + Math.random() * 80}%`,
                top: `${10 + Math.random() * 80}%`,
                rotate: `${Math.random() * 360}deg`,
              }}
              animate={{
                y: [-10, 10, -10],
                rotate: [0, 180, 360],
                opacity: [0.05, 0.15, 0.05],
              }}
              transition={{
                duration: 12 + Math.random() * 8,
                repeat: Infinity,
                delay: Math.random() * 5,
              }}
            />
          ))}
        </div>
      </footer>
      
      {/* Enhanced Styles */}
      <style jsx global>{`
        .bg-grid-pattern {
          background-image: 
            linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px);
          background-size: 50px 50px;
        }
      `}</style>
    </>
  );
};

export default ContactFooterSection;