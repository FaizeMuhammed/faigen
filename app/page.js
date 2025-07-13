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
  const [isLoading, setIsLoading] = useState(true);
  const [showLogo, setShowLogo] = useState(true);

  useEffect(() => {
    // Set initial body styles
    const originalStyles = {
      backgroundColor: document.body.style.backgroundColor,
      margin: document.body.style.margin,
      padding: document.body.style.padding,
      overflowX: document.body.style.overflowX,
    };

    // Apply styles immediately
    document.body.style.backgroundColor = '#ffffff';
    document.body.style.margin = '0';
    document.body.style.padding = '0';
    document.body.style.overflowX = 'hidden';
    
    // Shorter, more reliable loading sequence
    const logoTimer = setTimeout(() => {
      setShowLogo(false);
    }, 1200);
    
    const loadingTimer = setTimeout(() => {
      setIsLoading(false);
    }, 1400);
    
    return () => {
      clearTimeout(logoTimer);
      clearTimeout(loadingTimer);
      // Restore original styles
      Object.assign(document.body.style, originalStyles);
    };
  }, []);

  // Show loading screen with logo animation
  if (isLoading) {
    return (
      <div className="fixed inset-0 bg-white z-50 flex items-center justify-center">
        {/* Background with immediate render */}
        <div className="absolute inset-0 bg-gradient-to-br from-white via-gray-50 to-white"></div>
        
        {/* Logo Container */}
        <div className="relative z-10 flex flex-col items-center justify-center">
          <div 
            className={`relative transition-all duration-1000 ease-out ${
              showLogo 
                ? 'scale-75 opacity-0 rotate-[-5deg]' 
                : 'scale-100 opacity-100 rotate-0'
            }`}
          >
            {/* Main Logo */}
            <div className="relative w-24 h-24 md:w-32 md:h-32 rounded-2xl flex items-center justify-center shadow-2xl overflow-hidden bg-white border border-gray-200">
              <img 
                src="/ChatGPT_Image_Apr_4__2025__10_40_51_PM-removebg-preview.png" 
                alt="Faigen Logo" 
                className="w-20 h-20 md:w-26 md:h-26 object-contain"
                onError={(e) => {
                  e.target.style.display = 'none';
                  e.target.parentElement.innerHTML = '<div class="w-full h-full bg-gradient-to-br from-black via-gray-800 to-black rounded-2xl flex items-center justify-center text-white font-bold text-3xl">F</div>';
                }}
              />
              
              {/* Subtle glow effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-400/10 to-purple-600/10 rounded-2xl"></div>
            </div>
          </div>
        </div>
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
          margin: 0 !important;
          padding: 0 !important;
          overflow-x: hidden !important;
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

        /* Smooth transitions */
        .transition-all {
          transition-property: all;
          transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
        }
      `}</style>

      <div className="bg-white text-black min-h-screen">
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