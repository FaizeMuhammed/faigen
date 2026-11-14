import { Urbanist } from "next/font/google";
import Nav from "@/components/sb/Nav";
import Hero from "@/components/sb/Hero";
import Benefits from "@/components/sb/Benefits";
import Features from "@/components/sb/Features";
import UseCases from "@/components/sb/UseCases";
import Orbit from "@/components/sb/Orbit";
import Steps from "@/components/sb/Steps";
import PricingTeaser from "@/components/sb/PricingTeaser";
import Faq from "@/components/sb/Faq";
import Cta from "@/components/sb/Cta";
import Footer from "@/components/sb/Footer";

const urbanist = Urbanist({ subsets: ["latin"], weight: ["400", "500", "600"], display: "swap" });

// Home page in the "sunbeam-style" design (branch: sunbeam-style).
export default function Home() {
  return (
    <div className={`${urbanist.className} min-h-screen bg-[#fafaf8] text-[#1a1a1a]`}>
      <Nav />
      <main>
        <Hero />
        <Benefits />
        <Features />
        <UseCases />
        <Orbit />
        <Steps />
        <PricingTeaser />
        <Faq />
        <Cta />
      </main>
      <Footer />
    </div>
  );
}
