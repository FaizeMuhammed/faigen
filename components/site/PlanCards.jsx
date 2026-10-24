import { Check } from 'lucide-react'
import Reveal from './Reveal'
import { PillButton } from './Buttons'
import { PlanSprout, PlanPlane, PlanPencil } from './Illustrations'
import { PLANS, inr } from '@/lib/site'

const ART = { starter: PlanSprout, complete: PlanPlane, custom: PlanPencil }

export default function PlanCards() {
  return (
    <div className="grid gap-5 lg:grid-cols-3">
      {PLANS.map((p, i) => {
        const Art = ART[p.id]
        const dark = p.highlight
        return (
          <Reveal key={p.id} delay={i * 0.1}>
            <div className={`relative flex h-full flex-col overflow-hidden rounded-[32px] p-8 sm:p-9 ${dark ? 'bg-black text-white' : p.custom ? 'bg-gradient-to-b from-[#eaf3ff] to-[#f5f5f7]' : 'bg-gradient-to-b from-white to-[#f5f5f7] ring-1 ring-black/[0.05]'}`}>
              {dark && (
                <>
                  <div aria-hidden className="pointer-events-none absolute -right-20 -top-20 h-[300px] w-[300px] rounded-full bg-[radial-gradient(circle,rgba(0,113,227,.6),transparent_70%)] blur-2xl" />
                  <div aria-hidden className="pointer-events-none absolute -bottom-28 -left-16 h-[260px] w-[260px] rounded-full bg-[radial-gradient(circle,rgba(214,41,118,.4),rgba(250,126,30,.2)_50%,transparent_70%)] blur-2xl" />
                </>
              )}
              <div className="relative flex h-full flex-col">
                <div className="flex items-start justify-between">
                  <Art className="h-16 w-16" color={dark ? '#fff' : '#1d1d1f'} />
                  {dark && <span className="rounded-full bg-white/15 px-3 py-1 text-[12px] font-medium">Most popular</span>}
                </div>
                <h3 className="mt-6 text-[26px] font-semibold tracking-[-0.025em]">{p.name}</h3>
                <p className={`mt-2 min-h-[44px] text-[15px] leading-snug ${dark ? 'text-white/60' : 'text-muted'}`}>{p.tagline}</p>
                <div className="mt-6 min-h-[92px]">
                  {p.custom ? (
                    <p className="text-[40px] font-semibold tracking-[-0.04em]">Let’s talk</p>
                  ) : (
                    <>
                      <p><span className="text-[52px] font-semibold tracking-[-0.045em]">{inr(p.monthly)}</span><span className={`ml-1 text-[16px] ${dark ? 'text-white/60' : 'text-muted'}`}>/month</span></p>
                      <p className={`mt-1 text-[14.5px] ${dark ? 'text-white/60' : 'text-muted'}`}>+ {inr(p.setup)} one-time setup</p>
                    </>
                  )}
                </div>
                <div className="mt-6"><PillButton href={p.custom ? '/contact' : '/try'} tone={dark ? 'light' : 'ink'} className="w-full">{p.custom ? 'Contact us' : 'Try the demo'}</PillButton></div>
                <ul className={`mt-8 space-y-3 border-t pt-6 text-[15px] ${dark ? 'border-white/15' : 'border-black/10'}`}>
                  {p.includes.map(f => (
                    <li key={f} className="flex items-start gap-3"><Check size={17} strokeWidth={2.6} className={`mt-0.5 shrink-0 ${dark ? 'text-[#2997ff]' : 'text-accent'}`} />{f}</li>
                  ))}
                </ul>
              </div>
            </div>
          </Reveal>
        )
      })}
    </div>
  )
}
