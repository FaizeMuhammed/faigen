'use client'
import { useEffect, useState } from "react";
import dynamic from 'next/dynamic';

// Lazy load components for better performance
const HomeSection = dynamic(() => import("@/components/homesec"), {
  loading: () => <div className="min-h-screen bg-white flex items-center justify-center">
    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-gray-900"></div>
  </div>
});

const ServicesSection = dynamic(() => import("@/components/servisesec"), {
  loading: () => <div className="h-96 bg-gray-50 animate-pulse"></div>
});

const WhyChooseUsSection = dynamic(() => import("@/components/whyus"), {
  loading: () => <div className="h-96 bg-white animate-pulse"></div>
});

const PortfolioSection = dynamic(() => import("@/components/portfoliyo"), {
  loading: () => <div className="h-96 bg-gray-50 animate-pulse"></div>
});

const CTASection = dynamic(() => import("@/components/cta"), {
  loading: () => <div className="h-64 bg-white animate-pulse"></div>
});

const ContactFooterSection = dynamic(() => import("@/components/footer"), {
  loading: () => <div className="h-96 bg-gray-900 animate-pulse"></div>
});

export default function Home() {
  const [isInitialLoad, setIsInitialLoad] = useState(true);
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    // Set body styles immediately
    document.body.style.backgroundColor = '#ffffff';
    document.body.style.margin = '0';
    document.body.style.padding = '0';
    document.body.style.overflowX = 'hidden';
    
    // Show content after logo animation
    const contentTimer = setTimeout(() => {
      setShowContent(true);
    }, 1500); // Logo animation duration
    
    // Remove initial load state after animation
    const loadTimer = setTimeout(() => {
      setIsInitialLoad(false);
    }, 1900); // Slight delay after content appears
    
    return () => {
      clearTimeout(contentTimer);
      clearTimeout(loadTimer);
      // Reset styles on unmount if needed
      document.body.style.backgroundColor = '';
      document.body.style.margin = '';
      document.body.style.padding = '';
      document.body.style.overflowX = '';
    };
  }, []);

  // Show animated logo loading state
  if (isInitialLoad) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center relative overflow-hidden">
        {/* Background gradient for depth */}
        <div className="absolute inset-0 bg-gradient-to-br from-white via-gray-50 to-white"></div>
        
        {/* Animated Logo Container */}
        <div className="relative z-10 flex flex-col items-center justify-center">
          {/* Logo Animation */}
          <div className="relative">
            {/* Main Logo */}
            <div 
              className="relative rounded-2xl flex items-center justify-center shadow-2xl overflow-hidden"
              style={{
                animation: 'logoScale 1.5s cubic-bezier(0.34, 1.56, 0.64, 1) forwards',
                width: '60px',
                height: '60px'
              }}
            >
              {/* Replace this src with your actual logo */}
              <img 
                src="/ChatGPT_Image_Apr_4__2025__10_40_51_PM-removebg-preview.png" 
                alt="Faigen Logo" 
                className="w-auto h-26 object-contain"
                onError={(e) => {
                  // Fallback if logo doesn't load - shows 'F' letter
                  e.target.style.display = 'none';
                  e.target.parentElement.innerHTML = '<div class="w-full h-full bg-gradient-to-br from-black via-gray-800 to-black rounded-2xl flex items-center justify-center text-white font-bold text-2xl">F</div>';
                }}
              />
              
              {/* Glow effect */}
              <div 
                className="absolute inset-0 bg-gradient-to-br from-blue-400/20 to-purple-600/20 rounded-2xl blur-xl"
                style={{
                  animation: 'logoGlow 1.5s ease-out forwards'
                }}
              ></div>
            </div>
            
            {/* Pulsing rings */}
            <div 
              className="absolute inset-0 border-2 border-gray-300 rounded-2xl"
              style={{
                animation: 'pulseRing1 1.5s ease-out forwards'
              }}
            ></div>
            <div 
              className="absolute inset-0 border border-gray-200 rounded-2xl"
              style={{
                animation: 'pulseRing2 1.5s ease-out 0.3s forwards'
              }}
            ></div>
          </div>
        </div>

        {/* Content fade in */}
        {showContent && (
          <div 
            className="absolute inset-0 bg-white z-20"
            style={{
              animation: 'contentFadeIn 0.6s ease-out forwards'
            }}
          >
            <div className="relative z-10 w-full">
              <HomeSection />
              <ServicesSection />
              <WhyChooseUsSection />
              <PortfolioSection />
              <CTASection />
              <ContactFooterSection />
            </div>
          </div>
        )}
      </div>
    );
  }

  return (
    <>
      {/* Critical CSS for immediate rendering */}
      <style jsx global>{`
        html {
          scroll-behavior: smooth;
        }
        
        body {
          background-color: white !important;
          margin: 0;
          padding: 0;
          overflow-x: hidden;
          font-family: system-ui, -apple-system, sans-serif;
        }
        
        * {
          box-sizing: border-box;
        }
        
        /* Preload font families */
        .font-space-grotesk {
          font-family: 'Space Grotesk', system-ui, sans-serif;
        }
        
        .font-inter {
          font-family: 'Inter', system-ui, sans-serif;
        }

        /* Logo Animation Keyframes */
        @keyframes logoScale {
          0% {
            transform: scale(0.3) rotate(-5deg);
            opacity: 0;
            width: 60px;
            height: 60px;
          }
          30% {
            transform: scale(0.8) rotate(0deg);
            opacity: 0.7;
          }
          60% {
            transform: scale(1.1);
            opacity: 1;
            width: 120px;
            height: 120px;
          }
          80% {
            transform: scale(0.95);
            width: 120px;
            height: 120px;
          }
          100% {
            transform: scale(1);
            opacity: 1;
            width: 120px;
            height: 120px;
          }
        }

        @keyframes logoGlow {
          0% {
            opacity: 0;
            transform: scale(1);
          }
          50% {
            opacity: 0.6;
            transform: scale(1.5);
          }
          100% {
            opacity: 0.3;
            transform: scale(2);
          }
        }

        @keyframes pulseRing1 {
          0% {
            transform: scale(1);
            opacity: 0;
          }
          30% {
            opacity: 0.6;
          }
          100% {
            transform: scale(2.5);
            opacity: 0;
          }
        }

        @keyframes pulseRing2 {
          0% {
            transform: scale(1);
            opacity: 0;
          }
          30% {
            opacity: 0.4;
          }
          100% {
            transform: scale(3);
            opacity: 0;
          }
        }

        @keyframes contentFadeIn {
          0% {
            opacity: 0;
          }
          100% {
            opacity: 1;
          }
        }
      `}</style>

      <div className="bg-white text-black">
        {/* Content Container */}
        <div className="relative z-10 w-full">
          {/* Home Section - Loads immediately */}
          <HomeSection />
          
          {/* Other sections - Lazy loaded */}
          <ServicesSection />
          <WhyChooseUsSection />
          <PortfolioSection />
          <CTASection />
          <ContactFooterSection />
        </div>
      </div>
    </>
  );
}