import { Check } from 'lucide-react'
import Reveal from './Reveal'
import { PillButton } from './Buttons'
import { PLANS, inr } from '@/lib/site'

export default function PlanCards() {
  return (
    <div className="grid gap-5 lg:grid-cols-3">
      {PLANS.map((p, i) => (
        <Reveal key={p.id} delay={i * 0.1}>
          <div className={`flex h-full flex-col rounded-[28px] p-8 ${p.highlight ? 'bg-ink text-white shadow-[0_30px_70px_-25px_rgba(0,0,0,.5)]' : 'bg-white shadow-[0_1px_2px_rgba(0,0,0,.04),0_12px_40px_-14px_rgba(0,0,0,.1)]'}`}>
            <div className="flex items-center justify-between">
              <h3 className="text-[22px] font-semibold tracking-[-0.02em]">{p.name}</h3>
              {p.highlight && <span className="rounded-full bg-white/15 px-3 py-1 text-[12px] font-medium">Most popular</span>}
            </div>
            <p className={`mt-2 min-h-[42px] text-[14.5px] ${p.highlight ? 'text-white/60' : 'text-muted'}`}>{p.tagline}</p>
            <div className="mt-6 min-h-[88px]">
              {p.custom ? (
                <p className="text-[34px] font-semibold tracking-tight">Let’s talk</p>
              ) : (
                <>
                  <p><span className="text-[44px] font-semibold tracking-[-0.04em]">{inr(p.monthly)}</span><span className={`ml-1 text-[15px] ${p.highlight ? 'text-white/60' : 'text-muted'}`}>/month</span></p>
                  <p className={`mt-1 text-[14px] ${p.highlight ? 'text-white/60' : 'text-muted'}`}>+ {inr(p.setup)} one-time setup</p>
                </>
              )}
            </div>
            <div className="mt-6"><PillButton href={p.custom ? '/contact' : '/try'} tone={p.highlight ? 'light' : 'ink'} className="w-full">{p.custom ? 'Contact us' : 'Try the demo'}</PillButton></div>
            <ul className={`mt-8 space-y-3 border-t pt-6 text-[14.5px] ${p.highlight ? 'border-white/15' : 'border-soft'}`}>
              {p.includes.map(f => (
                <li key={f} className="flex items-start gap-3"><Check size={17} strokeWidth={2.6} className={`mt-0.5 shrink-0 ${p.highlight ? 'text-[#2997ff]' : 'text-accent'}`} />{f}</li>
              ))}
            </ul>
          </div>
        </Reveal>
      ))}
    </div>
  )
}
