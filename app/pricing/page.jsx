import Nav from '@/components/site/Nav'
import Footer from '@/components/site/Footer'
import PageHero from '@/components/site/PageHero'
import PlanCards from '@/components/site/PlanCards'
import PlanCompare from '@/components/site/PlanCompare'
import Reveal from '@/components/site/Reveal'
import Accordion from '@/components/site/Accordion'
import FinalCta from '@/components/site/home/FinalCta'
import { PillButton, TextLink } from '@/components/site/Buttons'
import { FAQS, COMING_SOON, LAUNCH_OFFER, MESSAGE_FEES } from '@/lib/site'

export const metadata = {
  title: 'Pricing — Faigen',
  description: 'Simple flat pricing for your AI agent on WhatsApp and Instagram: one setup fee, one monthly fee, unlimited conversations.',
}

export default function PricingPage() {
  return (
    <>
      <Nav />
      <main>
        <PageHero
          eyebrow="Pricing"
          title="Simple plans. Everything your business needs."
          lead="An AI agent that sells and supports on WhatsApp and Instagram, around the clock. One setup fee, one monthly fee, unlimited conversations."
        >
          <PillButton href="/try" arrow>Try the live demo</PillButton>
          <TextLink href="/contact">Talk to us</TextLink>
        </PageHero>

        <section className="bg-white pb-20 sm:pb-28">
          <div className="container-x">
            <PlanCards />
            <Reveal className="mt-8 text-center text-[14px] text-muted">{LAUNCH_OFFER.active && LAUNCH_OFFER.waiveSetup ? 'Launch offer: no setup fee and Instagram included. Go live within 24–48 hours.' : 'Go live within 24–48 hours. Setup is paid once, never again.'}</Reveal>
          </div>
        </section>

        {/* Message fees: at Meta's price */}
        <section className="bg-white pb-20 sm:pb-28">
          <div className="container-x max-w-4xl">
            <Reveal className="rounded-[32px] bg-gradient-to-b from-[#eaf3ff] to-[#f5f5f7] p-8 sm:p-12">
              <p className="eyebrow">Message fees</p>
              <h2 className="display-md mt-3">{MESSAGE_FEES.headline}</h2>
              <p className="lead mt-4 max-w-2xl">{MESSAGE_FEES.text}</p>
              <div className="mt-8 grid gap-4 sm:grid-cols-3">
                {MESSAGE_FEES.items.map(it => (
                  <div key={it.label} className="rounded-[24px] bg-white p-6 ring-1 ring-black/[0.05]">
                    <p className="text-[18px] font-semibold tracking-[-0.02em]">{it.label}</p>
                    <p className="mt-1 min-h-[42px] text-[14px] leading-snug text-muted">{it.sub}</p>
                    <p className="mt-4 text-[15px] font-semibold text-accent">At Meta’s price</p>
                    <p className="text-[13.5px] text-muted">+ ₹0 markup from Faigen</p>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </section>

        {/* What is in each plan */}
        <section className="bg-[#f5f5f7] section">
          <div className="container-x max-w-4xl">
            <Reveal className="text-center">
              <p className="eyebrow">Compare plans</p>
              <h2 className="display-md mt-3">See exactly what you get.</h2>
            </Reveal>
            <Reveal delay={0.1} className="mt-10"><PlanCompare /></Reveal>
            <Reveal delay={0.15} className="mt-8 rounded-[24px] bg-white p-6 ring-1 ring-black/[0.06] sm:p-7">
              <p className="text-[13px] font-semibold uppercase tracking-wider text-muted">Coming soon</p>
              <ul className="mt-3 grid gap-2 sm:grid-cols-3">
                {COMING_SOON.map(t => <li key={t} className="text-[15px] leading-snug text-ink/80">{t}</li>)}
              </ul>
              <p className="mt-3 text-[13.5px] text-muted">Included in your plan as they launch, at no extra charge.</p>
            </Reveal>
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
