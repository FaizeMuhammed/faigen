import { Check } from 'lucide-react'
import { PLANS, LAUNCH_OFFER, inr } from '@/lib/site'
import { TryLink } from './ui'

export default function PricingTeaser() {
  return (
    <section className="py-16 sm:py-24">
      <div className="mx-auto w-[min(1200px,100%-2.5rem)]">
        <div className="text-center">
          {LAUNCH_OFFER.active && <span className="inline-block rounded-full bg-[#d9ff57] px-4 py-1.5 text-[13.5px] font-semibold">{LAUNCH_OFFER.badge}: {LAUNCH_OFFER.text}</span>}
          <h2 className="mx-auto mt-5 max-w-3xl text-[clamp(2.2rem,4.6vw,3.4rem)] text-balance font-medium leading-[1.06] tracking-[-0.03em]">Simple pricing. One monthly fee, unlimited conversations.</h2>
          <p className="mx-auto mt-4 max-w-xl text-[17px] leading-snug text-[#1a1a1a]/60">Message fees are always at Meta’s own price, with no markup from Faigen.</p>
        </div>
        <div className="mt-12 grid gap-4 rounded-[36px] bg-[#eeede6] p-3 lg:grid-cols-3">
          {PLANS.map(p => {
            const dark = p.highlight
            return (
              <div key={p.id} className={`flex flex-col rounded-[28px] p-7 ${dark ? 'bg-[#1a1a1a] text-white' : 'bg-[#fafaf8]'}`}>
                <div className="flex items-center justify-between"><h3 className="text-[24px] font-medium tracking-[-0.02em]">{p.name}</h3>{dark && <span className="rounded-full bg-[#d9ff57] px-3 py-1 text-[12px] font-semibold text-[#1a1a1a]">Most popular</span>}</div>
                <p className={`mt-1.5 min-h-[44px] text-[15px] leading-snug ${dark ? 'text-white/60' : 'text-[#1a1a1a]/60'}`}>{p.tagline}</p>
                <div className="mt-5 min-h-[88px]">
                  {p.custom ? <p className="text-[40px] font-medium tracking-[-0.03em]">Let’s talk</p> : (
                    <>
                      <p><span className="text-[46px] font-medium tracking-[-0.04em]">{inr(p.monthly)}</span><span className={`ml-1 text-[15px] ${dark ? 'text-white/60' : 'text-[#1a1a1a]/55'}`}>/month</span></p>
                      <p className={`mt-1 text-[14px] ${dark ? 'text-white/60' : 'text-[#1a1a1a]/55'}`}>{LAUNCH_OFFER.active && LAUNCH_OFFER.waiveSetup ? (<><span className="line-through">+ {inr(p.setup)}</span> <b className={dark ? 'text-[#d9ff57]' : 'text-[#1a5fd0]'}>₹0</b> one-time setup</>) : <>+ {inr(p.setup)} one-time setup</>}</p>
                    </>
                  )}
                </div>
                <ul className={`mt-5 space-y-3 border-t pt-5 text-[15.5px] ${dark ? 'border-white/15' : 'border-black/10'}`}>
                  {p.includes.slice(0, 5).map(f => <li key={f.t} className="flex items-start gap-3"><Check size={17} strokeWidth={2.6} className={`mt-0.5 shrink-0 ${dark ? 'text-[#d9ff57]' : 'text-[#1a5fd0]'}`} />{f.t}</li>)}
                  {!p.custom && LAUNCH_OFFER.active && <li className="flex items-start gap-3"><Check size={17} strokeWidth={2.6} className="mt-0.5 shrink-0 text-[#d62976]" /><span><b>Instagram automation included</b></span></li>}
                </ul>
              </div>
            )
          })}
        </div>
        <div className="mt-10 flex justify-center"><TryLink href="/pricing" tone="dark">See full pricing</TryLink></div>
      </div>
    </section>
  )
}
