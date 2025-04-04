'use client'
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Home() {
  const [mounted, setMounted] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeTab, setActiveTab] = useState('web');

  useEffect(() => {
    setMounted(true);
    
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-white text-black flex flex-col overflow-hidden">
      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-500 ${scrolled ? "py-2 bg-white/90 backdrop-blur-lg shadow-sm" : "py-4"}`}>
        <div className="flex justify-between items-center px-4 md:px-8 lg:px-16 max-w-7xl mx-auto w-full">
          <div className={`w-32 h-12 relative transition-all duration-500 ${scrolled ? "scale-90" : ""}`}>
            {/* Logo placeholder */}
            <div className="absolute inset-0 flex items-center">
              <Image 
                src="/ChatGPT_Image_Apr_4__2025__10_40_51_PM-removebg-preview.png" 
                alt="Faigen" 
                width={80} 
                height={48} 
                className="object-contain"
              />
            </div>
          </div>
          
          <div className="flex items-center space-x-4">
            <div className="hidden md:flex space-x-6 mr-8">
              {["Web", "Software", "Products"].map((item) => (
                <a 
                  key={item} 
                  href="#" 
                  className="relative text-sm font-medium hover:text-gray-600 transition-colors duration-300 group"
                >
                  {item}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-black transition-all duration-300 group-hover:w-full"></span>
                </a>
              ))}
            </div>
            
            <button className="px-6 py-2.5 text-sm font-medium border border-black rounded-full hover:bg-black hover:text-white transition-all duration-300 transform hover:scale-105">
              Contact
            </button>
            <button className="p-2 md:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <main className="flex flex-col items-center justify-center px-4 md:px-8 py-24 md:py-28 text-center max-w-7xl mx-auto w-full mt-12">
        <div 
          className={`mb-8 w-48 h-48 relative mx-auto ${mounted ? "animate-fade-in-up" : "opacity-0"}`} 
          style={{animationDelay: "0.2s"}}
        >
          {/* Animated logo */}
          <div className="absolute inset-0 flex items-center justify-center animate-floating">
            <div className="relative">
              <div className="absolute -inset-4 bg-gray-100/80 rounded-full blur-xl"></div>
              <Image 
                src="/WhatsApp_Image_2025-04-04_at_9.53.44_PM-removebg-preview.png" 
                alt="Faigen" 
                width={180} 
                height={180} 
                className="object-contain relative z-10"
              />
            </div>
          </div>
        </div>
        
        <h1 
          className={`text-5xl md:text-6xl lg:text-7xl font-bold mb-6 tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-black via-gray-700 to-black ${mounted ? "animate-fade-in-up" : "opacity-0"}`}
          style={{animationDelay: "0.4s"}}
        >
          Crafting Digital Excellence
        </h1>
        
        <div
          className={`relative w-24 h-1 bg-black mx-auto mb-8 ${mounted ? "animate-width-expand" : "w-0"}`}
          style={{animationDelay: "0.6s"}}
        ></div>
        
        <p 
          className={`text-lg md:text-xl max-w-2xl mb-10 text-gray-600 leading-relaxed ${mounted ? "animate-fade-in-up" : "opacity-0"}`}
          style={{animationDelay: "0.7s"}}
        >
          Our new platform is coming soon. We are
            building exceptional web solutions, custom software, and innovative SaaS products.
        </p>
        
        <div 
          className={`flex flex-col sm:flex-row gap-4 ${mounted ? "animate-fade-in-up" : "opacity-0"}`}
          style={{animationDelay: "0.9s"}}
        >
          <button className="px-8 py-4 bg-black text-white rounded-full hover:bg-gray-900 transition-all duration-300 text-lg font-medium transform hover:scale-105 hover:shadow-lg group overflow-hidden relative">
            <span className="flex items-center justify-center relative z-10">
              Request Early Access
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </span>
            <span className="absolute bottom-0 left-0 w-full h-0 bg-gray-800 transition-all duration-300 group-hover:h-full -z-0"></span>
          </button>
        </div>
        
        {/* Countdown Timer */}
        <div 
          className={`mt-16 flex justify-center space-x-2 md:space-x-6 max-w-2xl w-full ${mounted ? "animate-fade-in-up" : "opacity-0"}`}
          style={{animationDelay: "1.1s"}}
        >
          {[
            { value: "15", label: "Days" },
            { value: "08", label: "Hours" },
            { value: "24", label: "Minutes" },
            { value: "33", label: "Seconds" }
          ].map((item, index) => (
            <div key={index} className="bg-white border border-gray-200 px-3 py-4 md:px-6 md:py-5 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 group hover:border-black">
              <div className="text-2xl md:text-4xl font-bold">{item.value}</div>
              <div className="text-xs md:text-sm text-gray-500 group-hover:text-black transition-colors duration-300">{item.label}</div>
            </div>
          ))}
        </div>
      </main>

      {/* Services Preview */}
      <section className="py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-4 md:px-8">
          <div className="flex justify-center mb-12 overflow-x-auto py-2 no-scrollbar">
            <div className="flex space-x-2 md:space-x-4 rounded-full bg-gray-100 p-1.5">
              {[
                { id: 'web', label: 'Web Development' },
                { id: 'software', label: 'Software Solutions' },
                { id: 'saas', label: 'SaaS Products' }
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`px-4 py-2 md:px-6 md:py-3 rounded-full text-sm md:text-base font-medium transition-all duration-300 ${
                    activeTab === tab.id 
                      ? 'bg-white text-black shadow-md transform scale-105' 
                      : 'text-gray-500 hover:text-gray-800'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className={`transition-all duration-500 transform ${activeTab === 'web' ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0 absolute'}`}>
              <div className="bg-white border border-gray-100 p-6 md:p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-500 h-full">
                <div className="h-64 bg-gray-50 rounded-xl mb-6 overflow-hidden relative">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <svg className="w-16 h-16 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                    </svg>
                  </div>
                  <div className="absolute top-4 left-4 right-4 h-2 bg-gray-200 rounded-full overflow-hidden">
                    <div className="h-full w-3/4 bg-gray-300 rounded-full"></div>
                  </div>
                  <div className="absolute top-10 left-4 right-4 grid grid-cols-3 gap-2">
                    <div className="h-8 bg-gray-200 rounded"></div>
                    <div className="h-8 bg-gray-200 rounded"></div>
                    <div className="h-8 bg-gray-200 rounded"></div>
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-3">Web Development</h3>
                <p className="text-gray-600">Responsive, modern, and performance-optimized websites built with the latest technologies.</p>
              </div>
            </div>
            
            <div className={`transition-all duration-500 transform ${activeTab === 'software' ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0 absolute'}`}>
              <div className="bg-white border border-gray-100 p-6 md:p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-500 h-full">
                <div className="h-64 bg-gray-50 rounded-xl mb-6 overflow-hidden relative">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <svg className="w-16 h-16 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                    </svg>
                  </div>
                  <div className="absolute top-6 left-6 right-6 bottom-6 border-2 border-dashed border-gray-200 rounded-lg flex items-center justify-center">
                    <div className="w-3/4 h-3/4 bg-gray-200 rounded-lg grid grid-cols-2 gap-2 p-4">
                      <div className="h-4 bg-gray-300 rounded"></div>
                      <div className="h-4 bg-gray-300 rounded"></div>
                      <div className="h-4 bg-gray-300 rounded"></div>
                      <div className="h-4 bg-gray-300 rounded"></div>
                    </div>
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-3">Software Solutions</h3>
                <p className="text-gray-600">Custom software development tailored to your business needs, from desktop applications to enterprise systems.</p>
              </div>
            </div>
            
            <div className={`transition-all duration-500 transform ${activeTab === 'saas' ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0 absolute'}`}>
              <div className="bg-white border border-gray-100 p-6 md:p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-500 h-full">
                <div className="h-64 bg-gray-50 rounded-xl mb-6 overflow-hidden relative">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <svg className="w-16 h-16 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"></path>
                    </svg>
                  </div>
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32">
                    <div className="absolute inset-0 rounded-full border-4 border-gray-200 border-dashed animate-slow-spin"></div>
                    <div className="absolute inset-4 rounded-full border-4 border-gray-300 border-dashed animate-reverse-spin"></div>
                    <div className="absolute inset-8 rounded-full border-4 border-gray-200 border-dashed animate-slow-spin"></div>
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-3">SaaS Products</h3>
                <p className="text-gray-600">Innovative cloud-based software solutions that scale with your business and provide recurring value.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Email Capture */}
      <section className="py-16 md:py-24 px-4 md:px-8 relative overflow-hidden">
        <div className="absolute inset-0 bg-gray-50 -z-10"></div>
        <div className="absolute inset-0 opacity-10 -z-10">
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gray-500 to-transparent"></div>
          <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gray-500 to-transparent"></div>
          <div className="absolute top-0 bottom-0 left-0 w-px bg-gradient-to-b from-transparent via-gray-500 to-transparent"></div>
          <div className="absolute top-0 bottom-0 right-0 w-px bg-gradient-to-b from-transparent via-gray-500 to-transparent"></div>
          <div className="grid grid-cols-12 h-full">
            {Array.from({ length: 12 }).map((_, i) => (
              <div key={i} className="border-l border-gray-200 h-full"></div>
            ))}
          </div>
          <div className="grid grid-rows-6 w-full h-full">
            {Array.from({ length: 6 }).map((_, i) => (
              <div key={i} className="border-t border-gray-200 w-full"></div>
            ))}
          </div>
        </div>
        
        <div className="max-w-3xl mx-auto bg-white p-8 md:p-12 rounded-3xl shadow-xl relative z-10">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold mb-4">Stay in the Loop</h2>
            <p className="text-gray-600">Be the first to experience our platform and receive exclusive updates.</p>
          </div>
          
          <form className="flex flex-col md:flex-row gap-4">
            <input 
              type="email" 
              placeholder="Enter your email" 
              className="flex-1 px-6 py-4 rounded-full border border-gray-200 focus:outline-none focus:ring-2 focus:ring-black/20 transition-all duration-300"
            />
            <button className="group relative px-8 py-4 bg-black text-white rounded-full overflow-hidden transition-all duration-300">
              <span className="relative z-10 flex items-center justify-center transform group-hover:translate-x-1 transition-transform duration-300">
                Notify Me
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                </svg>
              </span>
              <div className="absolute inset-0 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500 bg-gray-800"></div>
            </button>
          </form>
        </div>
      </section>

      {/* Abstract design elements */}
      <div className="fixed top-1/4 right-0 w-96 h-96 bg-gray-100 rounded-full blur-3xl opacity-30 -z-10 animate-pulse"></div>
      <div className="fixed bottom-1/4 left-0 w-96 h-96 bg-gray-100 rounded-full blur-3xl opacity-30 -z-10 animate-pulse" style={{animationDuration: "8s"}}></div>
      <div className="absolute top-1/3 left-1/3 w-64 h-64 bg-gray-200 rounded-full blur-3xl opacity-20 -z-10 animate-pulse" style={{animationDuration: "12s"}}></div>
      
      {/* Footer */}
      <footer className="py-8 md:py-12 bg-black text-white">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center mb-8">
            <div className="mb-6 md:mb-0">
              <div className="w-32 h-12 relative">
                <Image 
                  src="/ChatGPT_Image_Apr_4__2025__10_40_51_PM-removebg-preview.png" 
                  alt="Faigen" 
                  width={100} 
                  height={48} 
                  className="object-contain brightness-0 invert"
                />
              </div>
            </div>
            
            <div className="flex flex-wrap justify-center gap-8">
              {["Web Development", "Software Solutions", "SaaS Products", "About Us"].map((link) => (
                <a key={link} href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
                  {link}
                </a>
              ))}
            </div>
          </div>
          
          <div className="pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">© 2025 Faigen. All rights reserved.</p>
            
            <div className="flex space-x-6 mt-4 md:mt-0">
              {/* Social icons */}
              {["github", "linkedin", "twitter"].map((social) => (
                <a key={social} href="#" className="text-gray-400 hover:text-white transition-colors duration-300 hover:scale-110 transform inline-block">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    {social === "github" && <>
                      <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                    </>}
                    {social === "twitter" && <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>}
                    {social === "linkedin" && <>
                      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                      <rect x="2" y="9" width="4" height="12"></rect>
                      <circle cx="4" cy="4" r="2"></circle>
                    </>}
                  </svg>
                </a>
              ))}
            </div>
          </div>
        </div>
      </footer>
      
      {/* CSS for animations */}
      <style jsx global>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes floating {
          0% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
          100% {
            transform: translateY(0px);
          }
        }
        
        @keyframes widthExpand {
          from {
            width: 0;
          }
          to {
            width: 6rem;
          }
        }
        
        @keyframes slowSpin {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
        
        @keyframes reverseSpin {
          from {
            transform: rotate(360deg);
          }
          to {
            transform: rotate(0deg);
          }
        }
        
        .animate-fade-in-up {
          animation: fadeInUp 0.8s ease-out forwards;
        }
        
        .animate-floating {
          animation: floating 6s ease-in-out infinite;
        }
        
        .animate-width-expand {
          animation: widthExpand 1.2s ease-out forwards;
        }
        
        .animate-slow-spin {
          animation: slowSpin 12s linear infinite;
        }
        
        .animate-reverse-spin {
          animation: reverseSpin 10s linear infinite;
        }
        
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        
        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </div>
  );
}
