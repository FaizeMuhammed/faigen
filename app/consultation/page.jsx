'use client'
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  ArrowRight, 
  ArrowLeft, 
  Check, 
  Smartphone, 
  Monitor, 
  Palette, 
  ShoppingCart,
  Heart,
  Briefcase,
  DollarSign,
  Calendar,
  Star,
  User,
  Mail,
  Phone,
  MessageSquare,
  Sparkles
} from "lucide-react";
import { useRouter } from "next/navigation";

const ConsultationPage = () => {
  const [mounted, setMounted] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState({});
  const [isComplete, setIsComplete] = useState(false);
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

  const questions = [
    {
      id: 'projectType',
      title: 'What type of project are you looking to build?',
      subtitle: 'Choose the option that best describes your vision',
      type: 'multiChoice',
      options: [
        { 
          value: 'mobile-app', 
          label: 'Mobile Application', 
          description: 'iOS, Android, or Cross-platform app',
          icon: Smartphone,
          color: 'from-blue-500 to-indigo-600'
        },
        { 
          value: 'web-app', 
          label: 'Web Application', 
          description: 'Complex web platform or SaaS product',
          icon: Monitor,
          color: 'from-purple-500 to-pink-600'
        },
        { 
          value: 'website', 
          label: 'Website Design', 
          description: 'Business website or landing page',
          icon: Palette,
          color: 'from-green-500 to-emerald-600'
        },
        { 
          value: 'ecommerce', 
          label: 'E-Commerce Platform', 
          description: 'Online store or marketplace',
          icon: ShoppingCart,
          color: 'from-orange-500 to-red-600'
        },
        { 
          value: 'other', 
          label: 'Other/Multiple', 
          description: 'Custom solution or combination',
          icon: Sparkles,
          color: 'from-cyan-500 to-blue-600'
        }
      ]
    },
    {
      id: 'industry',
      title: 'What industry is your project in?',
      subtitle: 'This helps us understand your specific needs',
      type: 'multiChoice',
      options: [
        { 
          value: 'healthcare', 
          label: 'Healthcare & Medical', 
          icon: Heart,
          color: 'from-red-500 to-pink-600'
        },
        { 
          value: 'fintech', 
          label: 'Finance & Fintech', 
          icon: DollarSign,
          color: 'from-green-500 to-emerald-600'
        },
        { 
          value: 'education', 
          label: 'Education & E-Learning', 
          icon: Star,
          color: 'from-blue-500 to-indigo-600'
        },
        { 
          value: 'business', 
          label: 'Business & Enterprise', 
          icon: Briefcase,
          color: 'from-purple-500 to-violet-600'
        },
        { 
          value: 'ecommerce-retail', 
          label: 'E-Commerce & Retail', 
          icon: ShoppingCart,
          color: 'from-orange-500 to-red-600'
        },
        { 
          value: 'other-industry', 
          label: 'Other Industry', 
          icon: Sparkles,
          color: 'from-cyan-500 to-teal-600'
        }
      ]
    },
    {
      id: 'budget',
      title: 'What\'s your estimated budget range?',
      subtitle: 'This helps us recommend the best approach for your project',
      type: 'multiChoice',
      options: [
        { 
          value: 'under-5l', 
          label: 'Under ₹5,00,000', 
          description: 'Perfect for MVPs and simple solutions',
          color: 'from-green-400 to-green-600'
        },
        { 
          value: '5l-12l', 
          label: '₹5,00,000 - ₹12,00,000', 
          description: 'Great for feature-rich applications',
          color: 'from-blue-400 to-blue-600'
        },
        { 
          value: '12l-25l', 
          label: '₹12,00,000 - ₹25,00,000', 
          description: 'Ideal for complex platforms',
          color: 'from-purple-400 to-purple-600'
        },
        { 
          value: '25l-50l', 
          label: '₹25,00,000 - ₹50,00,000', 
          description: 'Enterprise-grade solutions',
          color: 'from-orange-400 to-orange-600'
        },
        { 
          value: 'over-50l', 
          label: 'Over ₹50,00,000', 
          description: 'Large-scale custom development',
          color: 'from-pink-400 to-pink-600'
        },
        { 
          value: 'discuss', 
          label: 'Let\'s Discuss', 
          description: 'I\'d prefer to talk about budget',
          color: 'from-gray-400 to-gray-600'
        }
      ]
    },
    {
      id: 'timeline',
      title: 'When do you need your project completed?',
      subtitle: 'Understanding your timeline helps us plan resources',
      type: 'multiChoice',
      options: [
        { 
          value: 'asap', 
          label: 'ASAP (Rush Project)', 
          description: 'Willing to pay premium for speed',
          icon: Calendar,
          color: 'from-red-500 to-orange-600'
        },
        { 
          value: '1-2-months', 
          label: '1-2 Months', 
          description: 'Quick turnaround needed',
          icon: Calendar,
          color: 'from-orange-500 to-yellow-600'
        },
        { 
          value: '3-4-months', 
          label: '3-4 Months', 
          description: 'Standard development timeline',
          icon: Calendar,
          color: 'from-green-500 to-emerald-600'
        },
        { 
          value: '6-months', 
          label: '6+ Months', 
          description: 'Complex project, quality focused',
          icon: Calendar,
          color: 'from-blue-500 to-indigo-600'
        },
        { 
          value: 'flexible', 
          label: 'Flexible Timeline', 
          description: 'Quality over speed',
          icon: Calendar,
          color: 'from-purple-500 to-pink-600'
        }
      ]
    },
    {
      id: 'contact',
      title: 'How can we reach you?',
      subtitle: 'We\'ll use this information to send your custom proposal',
      type: 'form',
      fields: [
        { name: 'name', label: 'Full Name', type: 'text', icon: User, required: true },
        { name: 'email', label: 'Email Address', type: 'email', icon: Mail, required: true },
        { name: 'phone', label: 'Phone Number', type: 'tel', icon: Phone, required: false },
        { name: 'message', label: 'Additional Details', type: 'textarea', icon: MessageSquare, required: false, placeholder: 'Tell us more about your project vision...' }
      ]
    }
  ];

  const handleAnswer = (questionId, answer) => {
    setAnswers(prev => ({
      ...prev,
      [questionId]: answer
    }));
  };

  const nextStep = () => {
    if (currentStep < questions.length - 1) {
      setCurrentStep(prev => prev + 1);
    } else {
      // Submit form
      setIsComplete(true);
      console.log('Consultation completed:', answers);
    }
  };

  const prevStep = () => {
    if (currentStep > 0) {
      setCurrentStep(prev => prev - 1);
    }
  };

  const progress = ((currentStep + 1) / questions.length) * 100;
  const currentQuestion = questions[currentStep];
  const canProceed = answers[currentQuestion?.id];

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
        type: "spring",
        stiffness: 80,
        damping: 12
      }
    }
  };

  if (!mounted) return null;

  if (isComplete) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center px-4 md:px-6">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="max-w-3xl mx-auto text-center space-y-6 md:space-y-8"
        >
          <motion.div
            className="w-16 h-16 md:w-24 md:h-24 bg-green-500 rounded-full flex items-center justify-center mx-auto"
            animate={{ 
              scale: [1, 1.1, 1],
              rotate: [0, 10, -10, 0]
            }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <Check className="w-8 h-8 md:w-12 md:h-12 text-white" />
          </motion.div>
          
          <div className="space-y-3 md:space-y-4">
            <h1 
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white"
              style={{ fontFamily: "'Space Grotesk', sans-serif" }}
            >
              Thank You!
            </h1>
            <p 
              className="text-base md:text-xl text-white/70 leading-relaxed px-2"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              We've received your consultation request. Our team will review your 
              requirements and get back to you within 24 hours with a custom proposal.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center pt-6 md:pt-8">
            <motion.button
              onClick={() => router.push('/')}
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="px-6 md:px-8 py-3 md:py-4 bg-white text-black rounded-xl md:rounded-2xl font-semibold transition-all duration-300 shadow-xl hover:shadow-2xl text-sm md:text-base"
            >
              Back to Home
            </motion.button>
            
            <motion.button
              onClick={() => router.push('/portfolio')}
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="px-6 md:px-8 py-3 md:py-4 border-2 border-white/30 hover:border-white/50 rounded-xl md:rounded-2xl font-semibold transition-all duration-300 backdrop-blur-sm hover:bg-white/10 text-white text-sm md:text-base"
            >
              View Our Work
            </motion.button>
          </div>

          {/* Background Elements for Success Page */}
          <div className="fixed inset-0 -z-10 overflow-hidden">
            <div className="absolute top-1/4 -left-1/4 w-96 h-96 bg-gradient-to-r from-green-400/10 to-emerald-600/10 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-1/4 -right-1/4 w-96 h-96 bg-gradient-to-r from-blue-400/10 to-cyan-600/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
            
            {[...Array(8)].map((_, i) => (
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
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black">
      {/* Header with Progress */}
      <div className="relative z-10 px-4 md:px-6 pt-4 md:pt-8 pb-2 md:pb-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center justify-between mb-4 md:mb-8">
            <motion.button
              onClick={() => router.push('/')}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center space-x-2 text-white/70 hover:text-white transition-colors duration-300 text-sm md:text-base"
            >
              <ArrowLeft className="w-4 h-4 md:w-5 md:h-5" />
              <span>Back</span>
            </motion.button>
            
            <div className="text-xs md:text-sm text-white/60">
              {currentStep + 1}/{questions.length}
            </div>
          </div>
          
          {/* Progress Bar */}
          <div className="w-full bg-white/10 rounded-full h-1.5 md:h-2 mb-4 md:mb-8">
            <motion.div
              className="bg-gradient-to-r from-blue-500 to-purple-600 h-1.5 md:h-2 rounded-full"
              initial={{ width: 0 }}
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.5, ease: "easeOut" }}
            />
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="px-4 md:px-6 pb-16 md:pb-20">
        <div className="max-w-6xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentStep}
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              exit={{ opacity: 0, y: -20 }}
              className="space-y-4 md:space-y-8"
            >
              {/* Question Header */}
              <motion.div variants={itemVariants} className="text-center space-y-2 md:space-y-4">
                <h1 
                  className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-white leading-tight px-2"
                  style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                >
                  {currentQuestion.title}
                </h1>
                <p 
                  className="text-sm sm:text-base md:text-lg lg:text-xl text-white/70 max-w-3xl mx-auto px-2"
                  style={{ fontFamily: "'Inter', sans-serif" }}
                >
                  {currentQuestion.subtitle}
                </p>
              </motion.div>

              {/* Question Content */}
              <motion.div variants={itemVariants}>
                {currentQuestion.type === 'multiChoice' && (
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4 lg:gap-6 max-w-7xl mx-auto">
                    {currentQuestion.options.map((option, index) => {
                      const IconComponent = option.icon;
                      const isSelected = answers[currentQuestion.id] === option.value;
                      
                      return (
                        <motion.button
                          key={option.value}
                          onClick={() => handleAnswer(currentQuestion.id, option.value)}
                          variants={itemVariants}
                          whileHover={{ scale: 1.02, y: -2 }}
                          whileTap={{ scale: 0.98 }}
                          className={`p-4 md:p-6 rounded-xl md:rounded-2xl border-2 transition-all duration-300 text-left backdrop-blur-xl ${
                            isSelected
                              ? 'border-blue-500 bg-blue-500/20 shadow-2xl shadow-blue-500/20'
                              : 'border-white/20 bg-white/10 hover:border-white/30 hover:bg-white/15 hover:shadow-xl'
                          }`}
                        >
                          <div className="space-y-3 md:space-y-4">
                            {IconComponent && (
                              <div className="w-10 h-10 md:w-12 md:h-12 rounded-lg md:rounded-xl bg-white/10 backdrop-blur-xl border border-white/20 flex items-center justify-center">
                                <IconComponent className="w-5 h-5 md:w-6 md:h-6 text-white" />
                              </div>
                            )}
                            
                            <div className="space-y-1 md:space-y-2">
                              <h3 
                                className="text-base md:text-lg font-semibold text-white"
                                style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                              >
                                {option.label}
                              </h3>
                              {option.description && (
                                <p 
                                  className="text-xs md:text-sm text-white/70 leading-relaxed"
                                  style={{ fontFamily: "'Inter', sans-serif" }}
                                >
                                  {option.description}
                                </p>
                              )}
                            </div>

                            {isSelected && (
                              <motion.div
                                initial={{ scale: 0 }}
                                animate={{ scale: 1 }}
                                className="w-5 h-5 md:w-6 md:h-6 bg-blue-500 rounded-full flex items-center justify-center ml-auto"
                              >
                                <Check className="w-3 h-3 md:w-4 md:h-4 text-white" />
                              </motion.div>
                            )}
                          </div>
                        </motion.button>
                      );
                    })}
                  </div>
                )}

                {currentQuestion.type === 'form' && (
                  <div className="max-w-3xl mx-auto space-y-4 md:space-y-6">
                    {currentQuestion.fields.map((field, index) => {
                      const IconComponent = field.icon;
                      const fieldValue = answers[currentQuestion.id]?.[field.name] || '';
                      
                      return (
                        <motion.div
                          key={field.name}
                          variants={itemVariants}
                          className="relative"
                        >
                          <div className="absolute inset-y-0 left-0 pl-3 md:pl-4 flex items-center pointer-events-none">
                            <IconComponent className="h-4 w-4 md:h-5 md:w-5 text-white/50" />
                          </div>
                          
                          {field.type === 'textarea' ? (
                            <textarea
                              value={fieldValue}
                              onChange={(e) => handleAnswer(currentQuestion.id, {
                                ...answers[currentQuestion.id],
                                [field.name]: e.target.value
                              })}
                              placeholder={field.placeholder || field.label}
                              rows={3}
                              className="w-full pl-10 md:pl-12 pr-3 md:pr-4 py-3 md:py-4 text-sm md:text-base bg-white/10 backdrop-blur-xl border-2 border-white/20 rounded-xl md:rounded-2xl text-white placeholder-white/50 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all duration-300 resize-none"
                              style={{ fontFamily: "'Inter', sans-serif" }}
                              required={field.required}
                            />
                          ) : (
                            <input
                              type={field.type}
                              value={fieldValue}
                              onChange={(e) => handleAnswer(currentQuestion.id, {
                                ...answers[currentQuestion.id],
                                [field.name]: e.target.value
                              })}
                              placeholder={field.label}
                              className="w-full pl-10 md:pl-12 pr-3 md:pr-4 py-3 md:py-4 text-sm md:text-base bg-white/10 backdrop-blur-xl border-2 border-white/20 rounded-xl md:rounded-2xl text-white placeholder-white/50 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all duration-300"
                              style={{ fontFamily: "'Inter', sans-serif" }}
                              required={field.required}
                            />
                          )}
                        </motion.div>
                      );
                    })}
                  </div>
                )}
              </motion.div>

              {/* Navigation Buttons */}
              <motion.div 
                variants={itemVariants}
                className="flex justify-between items-center max-w-3xl mx-auto pt-4 md:pt-8"
              >
                <motion.button
                  onClick={prevStep}
                  disabled={currentStep === 0}
                  whileHover={{ scale: currentStep === 0 ? 1 : 1.02 }}
                  whileTap={{ scale: currentStep === 0 ? 1 : 0.98 }}
                  className={`flex items-center space-x-1 md:space-x-2 px-4 md:px-6 py-2 md:py-3 rounded-lg md:rounded-xl font-medium transition-all duration-300 text-sm md:text-base ${
                    currentStep === 0
                      ? 'text-white/30 cursor-not-allowed'
                      : 'text-white/70 hover:text-white hover:bg-white/10'
                  }`}
                >
                  <ArrowLeft className="w-3 h-3 md:w-4 md:h-4" />
                  <span>Previous</span>
                </motion.button>

                <motion.button
                  onClick={nextStep}
                  disabled={!canProceed}
                  whileHover={{ scale: canProceed ? 1.02 : 1 }}
                  whileTap={{ scale: canProceed ? 0.98 : 1 }}
                  className={`flex items-center space-x-1 md:space-x-2 px-6 md:px-8 py-3 md:py-4 rounded-xl md:rounded-2xl font-semibold transition-all duration-300 text-sm md:text-base ${
                    canProceed
                      ? 'bg-white text-black shadow-xl hover:shadow-2xl'
                      : 'bg-white/20 text-white/40 cursor-not-allowed'
                  }`}
                >
                  <span>{currentStep === questions.length - 1 ? 'Complete' : 'Next'}</span>
                  {currentStep === questions.length - 1 ? (
                    <Check className="w-3 h-3 md:w-4 md:h-4" />
                  ) : (
                    <ArrowRight className="w-3 h-3 md:w-4 md:h-4" />
                  )}
                </motion.button>
              </motion.div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Background Elements */}
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute top-1/4 -left-1/4 w-96 h-96 bg-gradient-to-r from-blue-400/10 to-purple-600/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 -right-1/4 w-96 h-96 bg-gradient-to-r from-purple-400/10 to-pink-600/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        
        {[...Array(12)].map((_, i) => (
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

export default ConsultationPage;