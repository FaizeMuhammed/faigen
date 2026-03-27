import HeroSection from "@/components/homesec";
import DashboardSection from "@/components/DashboardSection";
import FeatureSection from "@/components/features";
import BentoGrid from "@/components/BentoGrid";
import FooterSection from "@/components/FooterSection";

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-[#1A1A1A] w-full relative overflow-hidden selection:bg-[#2563EB] selection:text-white">
      <HeroSection />
      <DashboardSection />
      <FeatureSection />
      <BentoGrid />
      <FooterSection />
    </main>
  );
}