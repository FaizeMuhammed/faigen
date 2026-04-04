import HeroSection from "@/components/homesec";
import DashboardSection from "@/components/DashboardSection";
import FeatureSection from "@/components/features";
import BentoGrid from "@/components/BentoGrid";
import FooterSection from "@/components/FooterSection";
import UseCasesSection from "@/components/UseCasesSection";
import JoinLeadersSection from "@/components/JoinLeadersSection";
import FAQSection from "@/components/FAQSection";

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-[#1A1A1A] w-full relative overflow-hidden selection:bg-[#2563EB] selection:text-white">
      <HeroSection />
      <DashboardSection />
      <FeatureSection />
      <UseCasesSection/>
      <BentoGrid />
      <FAQSection/>
      <JoinLeadersSection/>
      <FooterSection />
    </main>
  );
}