'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Check } from 'lucide-react'
import { InstagramGlyph } from '../site/FaigenMark'
import { PLANS, INSTAGRAM_ADDON, LAUNCH_OFFER, inr } from '@/lib/site'

// Pricing strip, as on the reference: monthly / yearly switch, then a #f0eeeb tray (radius 32, padding 8)
// holding three joined white cards (padding 24): name, line, price, a bordered feature box, a note and a button.
const YEARLY_MONTHS = 10 // pay for 10 months, get 12
const NOTE = {
  essential: 'Go live in 24–48 hours with your catalog and FAQs.',
  standard: 'Everything in Essential, plus campaigns, OTPs and API access.',
  custom: 'Tell us what you need and we will design it with you.',
}

function Switch({ yearly, setYearly }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 12, height: 24, fontSize: 16, lineHeight: '22.4px', fontWeight: 500, color: '#1a1a1a' }}>
      <span style={{ color: yearly ? '#a1a1aa' : '#1a1a1a' }}>Monthly</span>
      <button type="button" role="switch" aria-checked={yearly} aria-label="Pay yearly" onClick={() => setYearly(!yearly)}
        style={{ width: 44, height: 24, borderRadius: 12, padding: 2, border: 0, cursor: 'pointer', background: yearly ? '#dbfc74' : '#e4e1dc', transition: 'background .25s', display: 'flex', justifyContent: yearly ? 'flex-end' : 'flex-start' }}>
        <span style={{ width: 20, height: 20, borderRadius: 10, background: '#1a1a1a', display: 'block' }} />
      </button>
      <span style={{ color: yearly ? '#1a1a1a' : '#a1a1aa', display: 'flex', alignItems: 'center', gap: 8 }}>Yearly<span style={{ background: '#dbfc74', color: '#1a1a1a', fontSize: 12, lineHeight: 1, padding: '5px 8px', borderRadius: 10 }}>Save 2 months</span></span>
    </div>
  )
}

function Row({ children, tip, ig }) {
  return (
    <li title={tip || undefined} style={{ display: 'flex', alignItems: 'flex-start', gap: 8, padding: '8px 0', fontSize: 15, lineHeight: '22px', color: '#1a1a1a' }}>
      <span style={{ width: 24, height: 24, borderRadius: 12, background: ig ? '#fff' : '#f0eeeb', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
        {ig ? <span style={{ width: 18, height: 18, display: 'block' }}><InstagramGlyph className="h-full w-full" /></span> : <Check size={13} strokeWidth={2.6} />}
      </span>
      <span style={{ paddingTop: 1 }}>{children}</span>
    </li>
  )
}

export default function PricingPlans() {
  const [yearly, setYearly] = useState(false)
  const offer = LAUNCH_OFFER.active && LAUNCH_OFFER.waiveSetup
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
      <Switch yearly={yearly} setYearly={setYearly} />
      <div style={{ background: '#f0eeeb', borderRadius: 32, padding: 8 }}>
        <div className="grid gap-2 lg:grid-cols-3 lg:gap-0">
          {PLANS.map((p, i) => {
            const rad = i === 0 ? '24px 0 0 24px' : i === PLANS.length - 1 ? '0 24px 24px 0' : 0
            return (
              <div key={p.id} className="max-lg:!rounded-[24px]"
                style={{ background: '#fff', borderRadius: rad, padding: 24, display: 'flex', flexDirection: 'column' }}>
                <h3 className="font-heading" style={{ margin: 0, fontSize: 24, lineHeight: '28.8px', fontWeight: 500, color: '#1a1a1a' }}>{p.name}</h3>
                <p style={{ margin: '8px 0 0', minHeight: 40, fontSize: 14, lineHeight: '19.6px', color: '#71717a' }}>{p.tagline}</p>

                <div style={{ marginTop: 16, minHeight: 92 }}>
                  {p.custom ? (
                    <>
                      <p className="font-heading" style={{ margin: 0, fontSize: 40, lineHeight: '50px', fontWeight: 500 }}>Let’s talk</p>
                      <p style={{ margin: '6px 0 0', fontSize: 13.5, color: '#71717a' }}>Custom pricing and billing.</p>
                    </>
                  ) : (
                    <>
                      <p style={{ margin: 0, display: 'flex', alignItems: 'baseline', gap: 6 }}><span className="font-heading" style={{ fontSize: 40, lineHeight: '50px', fontWeight: 500 }}>{inr(p.monthly)}</span><span style={{ fontSize: 16, color: '#71717a' }}>/month</span></p>
                      <p style={{ margin: '4px 0 0', fontSize: 13.5, lineHeight: '19px', color: '#71717a' }}>
                        {yearly && <><b style={{ color: '#1a1a1a', fontWeight: 500 }}>{inr(p.monthly * YEARLY_MONTHS)}/year</b> · 2 months free · </>}
                        {offer ? <><span style={{ textDecoration: 'line-through' }}>+ {inr(p.setup)}</span> <b style={{ color: '#1a1a1a', fontWeight: 500 }}>₹0</b> one-time AI training fee <span style={{ background: '#dbfc74', color: '#1a1a1a', fontSize: 11, padding: '2px 7px', borderRadius: 9, marginLeft: 4, whiteSpace: 'nowrap' }}>{LAUNCH_OFFER.badge}</span></> : <>+ {inr(p.setup)} one-time AI training fee</>}
                      </p>
                    </>
                  )}
                </div>

                <ul style={{ listStyle: 'none', margin: '16px 0 0', padding: 8, border: '1px solid #f0eeeb', borderRadius: 12 }}>
                  {p.includes.map(f => <Row key={f.t} tip={f.tip}>{f.t}</Row>)}
                  {!p.custom && (
                    <Row ig tip={INSTAGRAM_ADDON.includes.map(x => x.t).join(' · ')}>
                      Instagram automation{' '}
                      <span style={{ background: LAUNCH_OFFER.active ? '#dbfc74' : '#f0eeeb', fontSize: 11, padding: '2px 7px', borderRadius: 9, whiteSpace: 'nowrap' }}>{LAUNCH_OFFER.active ? 'Included · launch offer' : `+ ${inr(INSTAGRAM_ADDON.monthly)}/month`}</span>
                    </Row>
                  )}
                </ul>

                <p style={{ margin: '20px 0 0', fontSize: 16, lineHeight: '22.4px', color: '#71717a' }}>{NOTE[p.id]}</p>
                <Link href={p.ctaHref} style={{ marginTop: 20, height: 50, borderRadius: 24, background: p.highlight ? '#dbfc74' : '#f0eeeb', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 16, fontWeight: 500, color: '#1a1a1a', textDecoration: 'none' }}>{p.cta}</Link>
              </div>
            )
          })}
        </div>
      </div>
      <p style={{ margin: 0, textAlign: 'center', fontSize: 14, color: '#71717a' }}>{offer ? 'Launch offer: no setup fee and Instagram included. Go live within 24–48 hours.' : 'Go live within 24–48 hours. Setup is paid once, never again.'}</p>
    </div>
  )
}
