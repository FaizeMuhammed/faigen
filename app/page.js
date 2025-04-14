'use client'
import { useEffect } from "react";
import AnimatedBackground from "@/components/animaedbg";
import HomeSection from "@/components/homesec";
import ServicesSection from "@/components/servisesec";
import PortfolioSection from "@/components/portfoliyo";
import ContactSection from "@/components/contactsec";
import Footer from "@/components/footer";

export default function Home() {
  // Add global style for body
  useEffect(() => {
    document.body.style.backgroundColor = '#fff';
    document.body.style.margin = '0';
    document.body.style.padding = '0';
    document.body.style.overflowX = 'hidden';
    
    return () => {
      // Reset styles on unmount if needed
      document.body.style.backgroundColor = '';
      document.body.style.margin = '';
      document.body.style.padding = '';
      document.body.style.overflowX = '';
    };
  }, []);

  return (
    <div className="min-h-screen text-black flex flex-col overflow-hidden relative">
      {/* Background Component - positioned fixed to cover all sections */}
      <AnimatedBackground />
      
      {/* Content Container with relative positioning and higher z-index */}
      <div className="relative z-10 w-full">
        {/* Home Section Component */}
        <HomeSection />
        
        {/* Services Section Component */}
        <ServicesSection />
        <PortfolioSection />
        <ContactSection />
        <Footer />
      </div>
    </div>
  );
}