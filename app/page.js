'use client'
import { useEffect } from "react";
import AnimatedBackground from "@/components/animaedbg";
import HomeSection from "@/components/homesec";
// import ServicesSection from "@/components/servisesec";
// import PortfolioSection from "@/components/portfoliyo";
// import ContactSection from "@/components/contactsec";
// import Footer from "@/components/footer";

export default function Home() {
  // Add global style for body - dark theme
  useEffect(() => {
    document.body.style.backgroundColor = '#000000';
    document.body.style.color = '#ffffff';
    document.body.style.margin = '0';
    document.body.style.padding = '0';
    document.body.style.overflowX = 'hidden';
    
    return () => {
      // Reset styles on unmount if needed
      document.body.style.backgroundColor = '';
      document.body.style.color = '';
      document.body.style.margin = '';
      document.body.style.padding = '';
      document.body.style.overflowX = '';
    };
  }, []);

  return (
    <div className="min-h-screen text-white flex flex-col overflow-hidden relative bg-white">
      {/* Background Component - positioned fixed to cover all sections */}
      {/* <AnimatedBackground /> */}
      
      {/* Content Container with relative positioning and higher z-index */}
      <div className="relative z-10 w-full">
        {/* Home Section Component */}
        <HomeSection />
        
        {/* Other sections - uncomment when ready */}
        {/* <ServicesSection />
        <PortfolioSection />
        <ContactSection />
        <Footer /> */}
      </div>
    </div>
  );
}