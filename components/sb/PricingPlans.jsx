'use client'

import { useState } from 'react'
import Link from 'next/link'
import { PLANS, LAUNCH_OFFER, inr } from '@/lib/site'

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

// Icon from the reference: a 10px lime dot with a tiny tick, centred in a 24px square (greyed rows have no icon)
function Dot({ dark }) {
  return (
    <svg viewBox="0 0 24 24" width="24" height="24" aria-hidden style={{ flexShrink: 0 }}>
      <g transform="translate(7 7)"><circle cx="5" cy="5" r="5" fill={dark ? '#1a1a1a' : '#dbfc74'} stroke={dark ? '#1a1a1a' : '#dbfc74'} strokeWidth="1.29" /><path d="M3.857 5.336s.667.381 1 .938c0 0 1-2.188 2.333-2.917" fill="none" stroke={dark ? '#dbfc74' : '#1a1a1a'} strokeWidth="1.07" strokeLinecap="round" strokeLinejoin="round" /></g>
    </svg>
  )
}

// Same ten rows on every plan, as on the reference: what the plan has is dark with the lime tick, what it lacks is grey
const ROWS = [
  { t: () => 'Multilingual AI (English, Manglish, Malayalam)', has: [1, 1, 1] },
  { t: () => 'Trained on your FAQs, catalog and brand tone', has: [1, 1, 1] },
  { t: () => 'Automated order collection', has: [1, 1, 1], tip: 'The AI collects name, product, quantity and address in the chat and creates the order.' },
  { t: i => ['1 team seat', '3 team seats', 'Unlimited team seats'][i] + ' for the live inbox', has: [1, 1, 1], tip: 'Take over any chat from the live inbox, and hand it back to the AI when you are done.' },
  { t: () => 'Instagram automation', has: [1, 1, 1], tip: 'DM AI agent, comment-to-DM, buttons and chat menu, spam shield and insights.', ig: true },
  { t: () => 'Broadcast campaigns with read tracking', has: [0, 1, 1], tip: 'Bulk offers with approved templates, images or PDFs and Interested / Not interested buttons.' },
  { t: () => 'OTP and authentication messages', has: [0, 1, 1] },
  { t: () => 'API keys and developer docs', has: [0, 1, 1] },
  { t: () => 'Custom CRM and ERP integrations', has: [0, 0, 1] },
  { t: () => 'Dedicated onboarding specialist', has: [0, 0, 1] },
]

function Row({ on, title, children, hi }) {
  return (
    <li title={title || undefined} style={{ display: 'flex', alignItems: 'flex-start', gap: 8, padding: '8px 0', minHeight: 40 }}>
      <span style={{ width: 24, height: 24, flexShrink: 0, display: 'block' }}>{on && <Dot dark={hi} />}</span>
      <span style={{ fontSize: 16, lineHeight: '22.4px', color: on ? (hi ? '#1a1a1a' : '#52525b') : (hi ? 'rgba(26,26,26,.38)' : '#a1a1aa'), paddingTop: 1 }}>{children}</span>
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
            const rad = i === 0 ? '24px 0 0 24px' : i === PLANS.length - 1 ? '0 24px 24px 0' : 24
            return (
              <div key={p.id} className="max-lg:!rounded-[24px]"
                style={{ position: 'relative', overflow: 'hidden', background: p.highlight ? 'linear-gradient(160deg,#e9ffa4 0%,#d9fb6e 45%,#c4f84a 100%)' : '#fff', borderRadius: rad, padding: 24, display: 'flex', flexDirection: 'column', gap: 20 }}>
                {p.highlight && <div aria-hidden style={{ position: 'absolute', inset: 0, backgroundImage: 'url(/sb/grain.png)', backgroundSize: '256px 256px', mixBlendMode: 'overlay', opacity: 0.3, pointerEvents: 'none' }} />}
                <h3 style={{ position: 'relative', margin: 0, display: 'flex', alignItems: 'center', gap: 10, fontSize: 21, lineHeight: '29.4px', fontWeight: 400, color: p.highlight ? '#1a1a1a' : '#52525b' }}>{p.name}{p.highlight && <span style={{ background: '#1a1a1a', color: '#dbfc74', fontSize: 11, lineHeight: 1, padding: '5px 9px', borderRadius: 10, fontWeight: 500 }}>Most popular</span>}</h3>
                <div style={{ position: 'relative', height: 1, background: p.highlight ? 'rgba(26,26,26,.14)' : '#f8f6f4' }} />
                <p style={{ position: 'relative', margin: 0, minHeight: 38, fontSize: 16, lineHeight: '19.2px', color: p.highlight ? '#1a1a1a' : '#52525b' }}>{p.tagline}</p>

                <div style={{ position: 'relative', minHeight: 76 }}>
                  {p.custom ? (
                    <p className="font-heading" style={{ margin: 0, fontSize: 42, lineHeight: '50.4px', fontWeight: 500, color: '#1a1a1a' }}>Let’s talk</p>
                  ) : (
                    <>
                      <p style={{ margin: 0, display: 'flex', alignItems: 'baseline', gap: 4 }}><span className="font-heading" style={{ fontSize: 42, lineHeight: '50.4px', fontWeight: 500, color: '#1a1a1a' }}>{inr(p.monthly)}</span><span style={{ fontSize: 14, lineHeight: '19.6px', color: p.highlight ? '#1a1a1a' : '#52525b' }}>/month</span></p>
                      <p style={{ margin: '6px 0 0', fontSize: 14, lineHeight: '19.6px', color: p.highlight ? '#1a1a1a' : '#52525b' }}>
                        {yearly && <><b style={{ color: '#1a1a1a', fontWeight: 500 }}>{inr(p.monthly * YEARLY_MONTHS)}/year</b>, 2 months free. </>}
                        {offer ? <><s style={{ color: p.highlight ? 'rgba(26,26,26,.5)' : '#a1a1aa' }}>{inr(p.setup)}</s> <b style={{ color: '#1a1a1a', fontWeight: 500 }}>₹0</b> one-time setup <span style={{ background: p.highlight ? '#1a1a1a' : '#dbfc74', color: p.highlight ? '#dbfc74' : '#1a1a1a', fontSize: 11, padding: '2px 8px', borderRadius: 9, marginLeft: 4, whiteSpace: 'nowrap' }}>{LAUNCH_OFFER.badge}</span></> : <>+ {inr(p.setup)} one-time setup</>}
                      </p>
                    </>
                  )}
                </div>

                <ul style={{ position: 'relative', listStyle: 'none', margin: 0, padding: 8, borderRadius: 12 }}>
                  {ROWS.map(r => <Row key={r.t(0)} on={!!r.has[i]} title={r.tip} hi={p.highlight}>{r.t(i)}{r.ig && r.has[i] && LAUNCH_OFFER.active && !p.custom ? <span style={{ background: p.highlight ? '#1a1a1a' : '#dbfc74', color: p.highlight ? '#dbfc74' : '#1a1a1a', fontSize: 11, padding: '2px 7px', borderRadius: 9, marginLeft: 6, whiteSpace: 'nowrap' }}>Included</span> : null}</Row>)}
                </ul>

                <p style={{ position: 'relative', margin: 0, fontSize: 16, lineHeight: '22.4px', color: '#1a1a1a' }}>{NOTE[p.id]}</p>
                <Link href={p.ctaHref} style={{ position: 'relative', height: 50, borderRadius: 24, background: p.highlight ? '#1a1a1a' : '#f0eeeb', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 16, lineHeight: '22.4px', fontWeight: 500, color: p.highlight ? '#fff' : '#1a1a1a', textDecoration: 'none', marginTop: 'auto' }}>{p.cta}</Link>
              </div>
            )
          })}
        </div>
      </div>
      <p style={{ margin: 0, textAlign: 'center', fontSize: 14, color: '#71717a' }}>{offer ? 'Launch offer: no setup fee and Instagram included. Go live within 24–48 hours.' : 'Go live within 24–48 hours. Setup is paid once, never again.'}</p>
    </div>
  )
}
