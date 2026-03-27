import HomeSection from "@/components/homesec";
import FeatureSection from "@/components/features";

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-[#1A1A1A] w-full relative overflow-hidden selection:bg-[#3B453A] selection:text-white">
      <HomeSection />
      <FeatureSection />
    </main>
  );
}