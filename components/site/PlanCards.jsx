'use client'

import { useState } from 'react'
import { Check } from 'lucide-react'
import Reveal from './Reveal'
import { PillButton } from './Buttons'
import InfoTip from './InfoTip'
import { PlanSprout, PlanPlane, PlanPencil } from './Illustrations'
import { PLANS, INSTAGRAM_ADDON, LAUNCH_OFFER, inr } from '@/lib/site'

const ART = { essential: PlanSprout, standard: PlanPlane, custom: PlanPencil }
const YEARLY_MONTHS = 10 // pay for 10 months, get 12

// Pay monthly / Pay yearly, with the "Save 2 Months" tag
function BillingToggle({ yearly, setYearly }) {
  return (
    <div className="relative inline-flex rounded-full bg-[#ececef] p-1" role="group" aria-label="Billing period">
      {[['Pay monthly', false], ['Pay yearly', true]].map(([label, val]) => (
        <button key={label} type="button" aria-pressed={yearly === val} onClick={() => setYearly(val)}
          className={`rounded-full px-5 py-2 text-[15px] font-medium transition-all ${yearly === val ? 'bg-accent text-white shadow-sm' : 'text-ink/60 hover:text-ink'}`}>
          {label}
        </button>
      ))}
      <span className="pointer-events-none absolute -top-9 right-3 rounded-lg bg-black px-2.5 py-1 text-[12px] font-semibold text-white">
        Save 2 Months
        <span aria-hidden className="absolute -bottom-1 left-1/2 h-2 w-2 -translate-x-1/2 rotate-45 bg-black" />
      </span>
    </div>
  )
}

export default function PlanCards() {
  const [yearly, setYearly] = useState(false)

  return (
    <div>
      <div className="mb-10 mt-8 flex flex-col items-center sm:mt-10">
        <BillingToggle yearly={yearly} setYearly={setYearly} />
      </div>

      <div className="grid items-start gap-5 lg:grid-cols-3">
        {PLANS.map((p, i) => {
          const Art = ART[p.id]
          const dark = p.highlight
          const monthly = p.monthly
          const setup = p.setup
          const sub = dark ? 'text-white/60' : 'text-muted'
          return (
            <Reveal key={p.id} delay={i * 0.1}>
              <div className={`relative flex h-full flex-col rounded-[32px] p-7 sm:p-9 ${dark ? 'bg-black text-white' : p.custom ? 'bg-gradient-to-b from-[#eaf3ff] to-[#f5f5f7]' : 'bg-gradient-to-b from-white to-[#f5f5f7] ring-1 ring-black/[0.05]'}`}>
                {dark && (
                  <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden rounded-[32px]">
                    <div className="absolute -right-20 -top-20 h-[300px] w-[300px] rounded-full bg-[radial-gradient(circle,rgba(0,113,227,.6),transparent_70%)] blur-2xl" />
                    <div className="absolute -bottom-28 -left-16 h-[260px] w-[260px] rounded-full bg-[radial-gradient(circle,rgba(214,41,118,.4),rgba(250,126,30,.2)_50%,transparent_70%)] blur-2xl" />
                  </div>
                )}
                <div className="relative flex h-full flex-col">
                  <div className="flex items-start justify-between">
                    <Art className="h-16 w-16" color={dark ? '#fff' : '#1d1d1f'} />
                    {dark && <span className="rounded-full bg-[#ffe500] px-3 py-1 text-[12px] font-semibold text-black">Most popular</span>}
                  </div>
                  <h3 className="mt-6 text-[26px] font-semibold tracking-[-0.025em]">{p.name}</h3>
                  <p className={`mt-2 min-h-[44px] text-[15px] leading-snug ${sub}`}>{p.tagline}</p>

                  <div className="mt-6 min-h-[132px]">
                    {p.custom ? (
                      <>
                        <p className="text-[40px] font-semibold tracking-[-0.04em]">Let’s talk</p>
                        <p className={`mt-1 text-[14.5px] ${sub}`}>Custom pricing &amp; billing.</p>
                      </>
                    ) : (
                      <>
                        <p><span className="text-[52px] font-semibold tracking-[-0.045em]">{inr(monthly)}</span><span className={`ml-1 text-[16px] ${sub}`}>/month</span></p>
                        {yearly && <p className="mt-1 text-[15px] font-medium">Total {inr(monthly * YEARLY_MONTHS)}/year <span className={`font-normal ${sub}`}>· 2 months free</span></p>}
                        {LAUNCH_OFFER.active && LAUNCH_OFFER.waiveSetup ? (
                          <p className={`mt-1 text-[14.5px] ${sub}`}>
                            <span className="line-through decoration-[1.5px]">+ {inr(setup)}</span>{' '}
                            <span className={`font-semibold ${dark ? 'text-[#5ac8fa]' : 'text-accent'}`}>₹0</span>{' '}one-time Catalog &amp; AI Training fee
                            <span className={`ml-2 inline-block rounded-full px-2 py-0.5 text-[11.5px] font-semibold ${dark ? 'bg-white/15 text-white' : 'bg-accent/10 text-accent'}`}>{LAUNCH_OFFER.badge} · save {inr(setup)}</span>
                          </p>
                        ) : (
                          <p className={`mt-1 text-[14.5px] ${sub}`}>+ {inr(setup)} one-time Catalog &amp; AI Training fee</p>
                        )}
                      </>
                    )}
                  </div>

                  <div className="mt-6"><PillButton href={p.ctaHref} tone={dark ? 'light' : 'ink'} className="w-full">{p.cta}</PillButton></div>

                  <ul className={`mt-8 space-y-3 border-t pt-6 text-[15px] ${dark ? 'border-white/15' : 'border-black/10'}`}>
                    {p.includes.map(f => (
                      <li key={f.t} className="flex items-start gap-3">
                        <Check size={17} strokeWidth={2.6} className={`mt-0.5 shrink-0 ${dark ? 'text-[#2997ff]' : 'text-accent'}`} />
                        <span>{f.t}{f.tip && <InfoTip text={f.tip} dark={dark} />}</span>
                      </li>
                    ))}
                  </ul>

                  {!p.custom && (
                    <div className={`mt-6 rounded-2xl p-4 ${dark ? 'bg-white/10' : 'bg-white ring-1 ring-black/[0.06]'}`}>
                      <div className="flex flex-wrap items-center justify-between gap-2">
                        <p className="flex items-center gap-2 text-[12.5px] font-semibold uppercase tracking-wider">
                          <span className="h-2.5 w-2.5 rounded-full bg-gradient-to-br from-[#d62976] to-[#fa7e1e]" /> Instagram automation
                        </p>
                        {LAUNCH_OFFER.active
                          ? <span className="rounded-full bg-gradient-to-r from-[#d62976] to-[#fa7e1e] px-2.5 py-0.5 text-[11.5px] font-semibold text-white">{LAUNCH_OFFER.badge} · Included</span>
                          : <span className={`rounded-full px-2.5 py-0.5 text-[11.5px] font-semibold ${dark ? 'bg-white/15 text-white' : 'bg-black/[0.06] text-ink'}`}>Add-on</span>}
                      </div>
                      <p className={`mt-1.5 text-[13px] ${sub}`}>
                        {LAUNCH_OFFER.active
                          ? <>Free with your plan{LAUNCH_OFFER.endsOn ? ` until ${LAUNCH_OFFER.endsOn}` : ''}. <span className="line-through">+ {inr(INSTAGRAM_ADDON.monthly)}/month</span></>
                          : <>+ {inr(INSTAGRAM_ADDON.monthly)}/month · + {inr(INSTAGRAM_ADDON.setup)} one-time setup</>}
                      </p>
                      <ul className="mt-3 space-y-2.5 text-[14.5px]">
                        {INSTAGRAM_ADDON.includes.map(f => (
                          <li key={f.t} className="flex items-start gap-2.5">
                            <Check size={16} strokeWidth={2.6} className="mt-0.5 shrink-0 text-[#d62976]" />
                            <span>{f.t}<InfoTip text={f.tip} dark={dark} /></span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </div>
            </Reveal>
          )
        })}
      </div>
    </div>
  )
}
