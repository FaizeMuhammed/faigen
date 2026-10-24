import Nav from '@/components/site/Nav'
import Footer from '@/components/site/Footer'
import PageHero from '@/components/site/PageHero'
import PlanCards from '@/components/site/PlanCards'
import Reveal from '@/components/site/Reveal'
import Accordion from '@/components/site/Accordion'
import FinalCta from '@/components/site/home/FinalCta'
import { PillButton, TextLink } from '@/components/site/Buttons'
import { InstaDoodles } from '@/components/site/Illustrations'
import { FAQS } from '@/lib/site'

export const metadata = {
  title: 'Pricing — Faigen',
  description: 'Simple flat pricing for your WhatsApp AI agent: one setup fee, one monthly fee, unlimited conversations.',
}

export default function PricingPage() {
  return (
    <>
      <Nav />
      <main>
        <PageHero
          eyebrow="Pricing"
          title="Simple plans. Everything your business needs."
          lead="A WhatsApp AI agent that sells and supports around the clock. One setup fee, one monthly fee, unlimited conversations."
        >
          <PillButton href="/try" arrow>Try the live demo</PillButton>
          <TextLink href="/contact">Talk to us</TextLink>
        </PageHero>

        <section className="bg-white pb-20 sm:pb-28">
          <div className="container-x">
            <PlanCards />
            <Reveal className="mt-6 text-center text-[14px] text-muted">Go live within 24–48 hours. Setup is paid once, never again.</Reveal>
          </div>
        </section>

        {/* Instagram, full-width black */}
        <section className="relative overflow-hidden bg-black text-white">
          <div aria-hidden className="pointer-events-none absolute right-0 top-0 h-[460px] w-[460px] translate-x-1/3 -translate-y-1/3 rounded-full bg-[radial-gradient(circle,rgba(214,41,118,.45),rgba(250,126,30,.22)_45%,transparent_70%)] blur-2xl" />
          <div className="container-x relative grid items-center gap-8 py-16 sm:py-24 lg:grid-cols-[1.2fr_0.8fr]">
            <Reveal>
              <div className="flex items-center gap-3"><p className="eyebrow text-[#ff9ec7]">Instagram</p><span className="rounded-full bg-white/15 px-2.5 py-0.5 text-[11px] font-semibold">Early access</span></div>
              <h2 className="display-md mt-3 max-w-lg">Instagram automation is opening to early customers.</h2>
              <p className="lead mt-5 max-w-lg text-white/60">Comment-to-DM, smart comment replies, a spam shield and insights. Tell us about your business and we’ll share the details.</p>
              <div className="mt-8"><PillButton href="/contact" tone="light" arrow>Ask about Instagram</PillButton></div>
            </Reveal>
            <InstaDoodles className="pointer-events-none mx-auto hidden w-[300px] lg:block" />
          </div>
        </section>

        <section className="bg-white section">
          <div className="container-x max-w-3xl">
            <Reveal className="text-center"><p className="eyebrow">Questions</p><h2 className="display-lg mt-3">Pricing, answered.</h2></Reveal>
            <Reveal delay={0.1} className="mt-12"><Accordion items={FAQS} /></Reveal>
          </div>
        </section>

        <FinalCta />
      </main>
      <Footer />
    </>
  )
}
