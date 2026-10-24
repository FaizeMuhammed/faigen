import { Info } from 'lucide-react'
import Nav from '@/components/site/Nav'
import Footer from '@/components/site/Footer'
import PageHero from '@/components/site/PageHero'
import PlanCards from '@/components/site/PlanCards'
import Reveal from '@/components/site/Reveal'
import Accordion from '@/components/site/Accordion'
import FinalCta from '@/components/site/home/FinalCta'
import { PillButton, TextLink } from '@/components/site/Buttons'
import { InstaDoodles } from '@/components/site/Illustrations'
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

        <section className="bg-white pb-20 sm:pb-28">
          <div className="container-x">
            <PlanCards />
            <Reveal className="mt-6 text-center text-[14px] text-muted">Go live within 24–48 hours. Setup is paid once, never again.</Reveal>
          </div>
        </section>

        {/* message rates, as big numbers */}
        <section className="bg-alt section">
          <div className="container-x max-w-4xl">
            <Reveal className="text-center">
              <p className="eyebrow">Message rates</p>
              <h2 className="display-md mt-3">Pay per message for broadcasts.</h2>
              <p className="lead mx-auto mt-5 max-w-xl">Regular customer conversations are never charged extra. These rates apply to broadcasts and OTP messages beyond them.</p>
            </Reveal>
            <Reveal delay={0.1} className="mt-14">
              <div className="grid divide-y divide-black/10 sm:grid-cols-2 sm:divide-x sm:divide-y-0">
                {RATES.map((r, i) => (
                  <div key={r.label} className="py-8 text-center sm:py-4">
                    <p className={`bg-clip-text text-[72px] font-semibold leading-none tracking-[-0.05em] text-transparent sm:text-[88px] ${i === 0 ? 'bg-gradient-to-br from-[#0071e3] to-[#5ac8fa]' : 'bg-gradient-to-br from-[#d62976] to-[#fa7e1e]'}`}>{r.price}</p>
                    <p className="mt-4 text-[17px] font-medium text-ink">{r.label}</p>
                    <p className="text-[14px] text-muted">{r.sub}</p>
                  </div>
                ))}
              </div>
            </Reveal>
            <Reveal className="mt-12">
              <div className="flex items-start gap-3 rounded-2xl bg-white p-5 text-[14.5px] leading-relaxed text-ink">
                <Info size={18} className="mt-0.5 shrink-0 text-accent" />
                <p>WhatsApp’s own conversation charges are billed by Meta directly to your business’s payment method, added during onboarding. They are separate from Faigen’s pricing.</p>
              </div>
            </Reveal>
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
