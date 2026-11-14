import { Urbanist, Jost } from "next/font/google";
import Nav from "@/components/sb/Nav";
import Hero from "@/components/sb/Hero";
import TwoCards from "@/components/sb/TwoCards";
import Logos from "@/components/sb/Logos";
import Features from "@/components/sb/Features";
import Orbit from "@/components/sb/Orbit";
import Cases from "@/components/sb/Cases";
import CtaFooter from "@/components/sb/CtaFooter";

const urbanist = Urbanist({ subsets: ["latin"], weight: ["500"], display: "swap", variable: "--font-heading" });
const jost = Jost({ subsets: ["latin"], weight: ["400", "500"], display: "swap" });

// Home page, built to the measurements of the reference layout (branch: sunbeam-style).
// Sections in order: hero + product tabs, three cards, platforms, feature cards, conversations, orbit, steps, CTA + footer.
export default function Home() {
  return (
    <div className={`${urbanist.variable} ${jost.className} min-h-screen overflow-x-clip bg-[#fafafa] text-[#1a1a1a]`}>
      <Nav />
      <main>
        <Hero />
        <TwoCards />
        <Logos />
        <Features />
        {/* <Conversations /> hidden for now */}
        <Orbit />
        <Cases />
      </main>
      <CtaFooter />
    </div>
  );
}
