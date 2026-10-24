import Nav from "@/components/site/Nav";
import Footer from "@/components/site/Footer";
import Hero from "@/components/site/home/Hero";
import Statement from "@/components/site/home/Statement";
import Showcase from "@/components/site/home/Showcase";
import InstagramSuite from "@/components/site/home/InstagramSuite";
import Bento from "@/components/site/home/Bento";
import UseCases from "@/components/site/home/UseCases";
import HowItWorks from "@/components/site/home/HowItWorks";
import Faq from "@/components/site/home/Faq";
import FinalCta from "@/components/site/home/FinalCta";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Statement />
        <Showcase />
        <InstagramSuite />
        <Bento />
        <UseCases />
        <HowItWorks />
        <Faq />
        <FinalCta />
      </main>
      <Footer />
    </>
  );
}
