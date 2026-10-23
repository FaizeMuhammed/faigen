import { Info, Instagram } from 'lucide-react'
import Nav from '@/components/site/Nav'
import Footer from '@/components/site/Footer'
import PageHero from '@/components/site/PageHero'
import PlanCards from '@/components/site/PlanCards'
import Reveal from '@/components/site/Reveal'
import Accordion from '@/components/site/Accordion'
import FinalCta from '@/components/site/home/FinalCta'
import { PillButton, TextLink } from '@/components/site/Buttons'
import { RATES, FAQS } from '@/lib/site'

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

        <section className="bg-alt section !pt-16 sm:!pt-20">
          <div className="container-x">
            <PlanCards />
            <Reveal className="mt-6 text-center text-[14px] text-muted">Go live within 24–48 hours. Setup is paid once, never again.</Reveal>
          </div>
        </section>

        <section className="bg-white section">
          <div className="container-x max-w-4xl">
            <Reveal className="text-center">
              <p className="eyebrow">Message rates</p>
              <h2 className="display-md mt-3">Pay per message for broadcasts.</h2>
              <p className="lead mx-auto mt-5 max-w-xl">Regular customer conversations are never charged extra. These rates apply to broadcasts and OTP messages beyond them.</p>
            </Reveal>
            <div className="mt-12 grid gap-5 sm:grid-cols-2">
              {RATES.map((r, i) => (
                <Reveal key={r.label} delay={i * 0.1}>
                  <div className="card h-full p-8 text-center">
                    <p className="text-[56px] font-semibold leading-none tracking-[-0.04em] text-ink">{r.price}</p>
                    <p className="mt-3 text-[16px] font-medium text-ink">{r.label}</p>
                    <p className="text-[14px] text-muted">{r.sub}</p>
                  </div>
                </Reveal>
              ))}
            </div>
            <Reveal className="mt-6">
              <div className="flex items-start gap-3 rounded-2xl bg-accent-soft p-5 text-[14.5px] leading-relaxed text-ink">
                <Info size={18} className="mt-0.5 shrink-0 text-accent" />
                <p>WhatsApp’s own conversation charges are billed by Meta directly to your business’s payment method, added during onboarding. They are separate from Faigen’s pricing.</p>
              </div>
            </Reveal>
          </div>
        </section>

        <section className="bg-alt section !py-16 sm:!py-20">
          <div className="container-x max-w-4xl">
            <Reveal>
              <div className="flex flex-col items-start gap-5 rounded-[28px] bg-white p-8 shadow-[0_12px_40px_-14px_rgba(0,0,0,.1)] sm:flex-row sm:items-center sm:p-10">
                <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-accent-soft text-accent"><Instagram size={26} /></span>
                <div className="flex-1">
                  <div className="flex items-center gap-3">
                    <h3 className="text-[22px] font-semibold tracking-[-0.02em]">Instagram automation</h3>
                    <span className="rounded-full bg-accent-soft px-2.5 py-0.5 text-[11px] font-semibold text-accent">Early access</span>
                  </div>
                  <p className="mt-2 text-[15.5px] leading-relaxed text-muted">Comment-to-DM, smart comment replies and insights are opening to early customers. Tell us about your business and we’ll share the details.</p>
                </div>
                <PillButton href="/contact" tone="ink">Ask about Instagram</PillButton>
              </div>
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
