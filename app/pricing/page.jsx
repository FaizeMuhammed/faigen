import Nav from '@/components/sb/Nav'
import CtaFooter from '@/components/sb/CtaFooter'
import PricingPlans from '@/components/sb/PricingPlans'
import { FeeCards, CompareTable, Faq } from '@/components/sb/PricingMore'
import { urbanist, jost } from '@/components/sb/fonts'
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
          {LAUNCH_OFFER.active && (
            <a href="#plans" aria-label={LAUNCH_OFFER.text} className="absolute hidden lg:block" style={{ left: 'calc(50% - 560px)', top: 84, width: 156, height: 156, transform: 'rotate(-8deg)' }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/sb/sun-1.png" alt="" aria-hidden className="sb-spin absolute inset-0 h-full w-full select-none" style={{ animationDuration: '30s' }} />
              <span className="font-heading absolute inset-0 flex flex-col items-center justify-center text-center text-[#1a1a1a]" style={{ lineHeight: 1 }}>
                <span style={{ fontFamily: 'inherit', fontSize: 10.5, letterSpacing: '.14em', fontWeight: 600, textTransform: 'uppercase' }}>Launch offer</span>
                <span style={{ fontSize: 30, fontWeight: 500, margin: '5px 0 4px', letterSpacing: '-.02em' }}>₹0 setup</span>
                <span style={{ fontSize: 11.5, fontWeight: 500, opacity: .8 }}>+ Instagram free</span>
              </span>
            </a>
          )}
          <div className="mx-auto flex max-w-[780px] flex-col items-center gap-5">
            <p className="flex items-center gap-2 text-[16px] leading-[22.4px] text-[#535353]"><span className="h-2 w-2 rounded-full bg-[#34c759]" />Meta Verified Tech Provider</p>
            <h1 className="font-heading text-balance text-[clamp(2.6rem,5vw,4rem)] font-medium leading-[1.2]">Simple plans. Everything your business needs.</h1>
            <p className="max-w-[520px] text-[clamp(1.05rem,1.5vw,1.3125rem)] leading-[1.4] text-[#535353]">An AI agent that sells and supports on WhatsApp and Instagram, around the clock. One monthly fee, unlimited conversations.</p>
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
