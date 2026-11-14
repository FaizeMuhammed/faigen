import Nav from '@/components/sb/Nav'
import CtaFooter from '@/components/sb/CtaFooter'
import PricingPlans from '@/components/sb/PricingPlans'
import { FeeCards, CompareTable, Faq } from '@/components/sb/PricingMore'
import { urbanist, jost } from '@/components/sb/fonts'
import { Scallop } from '@/components/sb/art'
import { LAUNCH_OFFER } from '@/lib/site'

export const metadata = {
  title: 'Pricing — Faigen',
  description: 'Simple flat pricing for your AI agent on WhatsApp and Instagram: one monthly fee, unlimited conversations, message fees at Meta’s price.',
}

// Pricing page in the same layout as the reference pricing page (branch: sunbeam-style):
// hero, switch + joined plan cards, fees, compare table, FAQ, closing call to action and footer.
export default function PricingPage() {
  return (
    <div className={`${urbanist.variable} ${jost.className} min-h-screen bg-[#fafafa] text-[#1a1a1a]`}>
      <Nav />
      <main>
        <section className="relative px-5 pb-10 pt-[120px] text-center">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/sb/blue-wedge.png" alt="" aria-hidden className="pointer-events-none absolute hidden select-none lg:block" style={{ right: 'calc(50% - 600px)', top: 70, width: 178, maxWidth: 'none' }} />
          <Scallop className="absolute hidden lg:block" style={{ left: 'calc(50% - 540px)', top: 96, width: 115, height: 115 }} />
          <div className="mx-auto flex max-w-[780px] flex-col items-center gap-5">
            <p className="flex items-center gap-2 text-[16px] leading-[22.4px] text-[#535353]"><span className="h-2 w-2 rounded-full bg-[#34c759]" />Meta Verified Tech Provider</p>
            <h1 className="font-heading text-balance text-[clamp(2.6rem,5vw,4rem)] font-medium leading-[1.2]">Simple plans. Everything your business needs.</h1>
            <p className="max-w-[520px] text-[clamp(1.05rem,1.5vw,1.3125rem)] leading-[1.4] text-[#535353]">An AI agent that sells and supports on WhatsApp and Instagram, around the clock. One monthly fee, unlimited conversations.</p>
            {LAUNCH_OFFER.active && (
              <a href="#plans" className="mt-1 inline-flex items-center gap-2 rounded-full bg-[#dbfc74] px-4 py-2 text-[15px] font-medium leading-[22px] text-[#1a1a1a]">
                <span className="rounded-full bg-[#1a1a1a] px-2 py-0.5 text-[11px] text-white">{LAUNCH_OFFER.badge}</span>{LAUNCH_OFFER.text}
              </a>
            )}
          </div>
        </section>
        <section id="plans" className="mx-auto w-full max-w-[1240px] px-5 pb-20">
          <PricingPlans />
        </section>
        <FeeCards />
        <CompareTable />
        <Faq />
      </main>
      <CtaFooter />
    </div>
  )
}
