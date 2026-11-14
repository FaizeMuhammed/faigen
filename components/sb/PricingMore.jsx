'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Minus, Plus } from 'lucide-react'
import { COMPARE, FAQS, MESSAGE_FEES, COMING_SOON, PLANS } from '@/lib/site'
import { GreyPill, H2 } from './ui'

const Texture = () => <div aria-hidden style={{ position: 'absolute', inset: 0, backgroundImage: 'url(/sb/grain.png)', backgroundSize: '256px 256px', mixBlendMode: 'overlay', opacity: 0.34, pointerEvents: 'none' }} />

// ── Message fees: three white cards (radius 16, padding 16, 276 high) with a big figure and a 182 x 244 picture ──
const FEES = [
  { label: 'Broadcast', text: 'Offers, festival greetings and campaigns', bg: '#d791f9', art: '/sb/pink-arch.png', w: 150 },
  { label: 'Utility', text: 'Order updates, reminders and confirmations', bg: '#daedfe', art: '/sb/blue-wedge.png', w: 120 },
  { label: 'Authentication', text: 'OTPs and verification codes', bg: '#c1f744', art: '/sb/violet-pillar.png', w: 96 },
]
export function FeeCards() {
  return (
    <section style={{ background: '#fafaf9', padding: '80px 0' }}>
      <div className="mx-auto w-full max-w-[1240px] px-5">
        <div style={{ maxWidth: 780 }}>
          <H2>{MESSAGE_FEES.headline}</H2>
          <p style={{ margin: '20px 0 0', maxWidth: 560, fontSize: 21, lineHeight: '29.4px', color: '#535353' }}>{MESSAGE_FEES.text}</p>
        </div>
        <div className="mt-10 grid gap-3 md:grid-cols-3">
          {FEES.map(f => (
            <div key={f.label} className="flex flex-col-reverse sm:flex-row" style={{ background: '#fff', borderRadius: 16, padding: 16, minHeight: 276, gap: 16 }}>
              <div style={{ flex: 1, minWidth: 0, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                <div>
                  <p className="font-heading" style={{ margin: 0, fontSize: 40, lineHeight: '50px', fontWeight: 500, color: '#1a1a1a' }}>₹0</p>
                  <p style={{ margin: 0, fontSize: 14, color: '#71717a' }}>markup on {f.label.toLowerCase()}</p>
                </div>
                <div>
                  <p style={{ margin: '0 0 12px', fontSize: 16, lineHeight: '22.4px', color: '#1a1a1a' }}>{f.text}</p>
                  <span style={{ display: 'inline-flex', height: 46, alignItems: 'center', borderRadius: 24, background: '#f0eeeb', padding: '0 20px', fontSize: 16, fontWeight: 500, color: '#1a1a1a' }}>At Meta’s price</span>
                </div>
              </div>
              <div className="h-[150px] w-full shrink-0 sm:h-auto sm:w-[182px]" style={{ position: 'relative', borderRadius: 8, overflow: 'hidden', background: f.bg }}>
                <Texture />
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={f.art} alt="" style={{ position: 'absolute', left: '50%', top: '50%', width: f.w * 1.5, transform: 'translate(-50%,-50%)', maxWidth: 'none' }} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ── Compare table, as on the reference: a 340 features column + three 300 plan columns, no borders.
// Plan header cells #f8f6f4 (95 high), body cells #fafaf9 (52 high), values in grey or as a lime tick / grey cross.
function Tick() {
  return <svg viewBox="0 0 24 24" width="24" height="24" aria-hidden><g transform="translate(7 7)"><circle cx="5" cy="5" r="5" fill="#dbfc74" stroke="#dbfc74" strokeWidth="1.29" /><path d="M3.857 5.336s.667.381 1 .938c0 0 1-2.188 2.333-2.917" fill="none" stroke="#1a1a1a" strokeWidth="1.07" strokeLinecap="round" strokeLinejoin="round" /></g></svg>
}
function Cross() {
  return <svg viewBox="0 0 24 24" width="24" height="24" aria-hidden><g transform="translate(7 7)"><circle cx="5" cy="5" r="5" fill="#f0eeeb" /><path d="M3.4 3.4l3.2 3.2M6.6 3.4L3.4 6.6" stroke="#a1a1aa" strokeWidth="1.07" strokeLinecap="round" /></g></svg>
}
function Cell({ v }) {
  if (v === true) return <Tick />
  if (v === false) return <Cross />
  if (v === 'launch') return <span className="sb-launch" style={{ display: 'inline-flex', alignItems: 'center', gap: 6 }}><Tick /><span className="sb-inc" style={{ fontSize: 16, color: '#52525b' }}>Included</span></span>
  return <span style={{ fontSize: 16, lineHeight: '22.4px', color: '#52525b' }}>{v}</span>
}
export function CompareTable() {
    const cell = { background: '#fafaf9', minHeight: 52, padding: '12px 24px', display: 'flex', alignItems: 'center' }
  const first = { ...cell, padding: '12px 0', fontSize: 16, lineHeight: '22.4px', color: '#52525b' }
  return (
    <section style={{ padding: '80px 0' }}>
      <div className="mx-auto w-full max-w-[1240px] px-5">
        <div style={{ textAlign: 'center' }}>
          <H2>Find the perfect plan for your business</H2>
          <p style={{ margin: '12px auto 0', maxWidth: 520, fontSize: 21, lineHeight: '29.4px', color: '#535353' }}>Compare plans and pick the one that fits your business best.</p>
        </div>
        <div className="mt-10">
          <div className="sb-cmp">
            <div className="font-heading" style={{ ...first, minHeight: 95, alignItems: 'flex-end', paddingBottom: 12, fontSize: 20, lineHeight: '28px', fontWeight: 500, color: '#1a1a1a' }}>Features</div>
            {PLANS.map((p, i) => (
              <div key={p.id} className="sb-c" style={{ background: '#f8f6f4', padding: '12px 24px', minHeight: 95, borderRadius: i === 0 ? '24px 0 0 0' : i === 2 ? '0 24px 0 0' : 0 }}>
                <p className="sb-pn" style={{ margin: 0, fontSize: 21, lineHeight: '29.4px', color: '#52525b' }}>{p.name}</p>
                <div>{p.custom
                  ? <p className="font-heading sb-price" style={{ margin: '2px 0 0', fontSize: 31, lineHeight: '37.2px', fontWeight: 500, color: '#1a1a1a' }}>Let’s talk</p>
                  : <p style={{ margin: '2px 0 0', display: 'flex', alignItems: 'baseline', gap: 4 }}><span className="font-heading sb-price" style={{ fontSize: 31, lineHeight: '37.2px', fontWeight: 500, color: '#1a1a1a' }}>₹{p.monthly.toLocaleString('en-IN')}</span><span className="sb-hide-m" style={{ fontSize: 14, color: '#52525b' }}>/month</span></p>}</div>
              </div>
            ))}
            {COMPARE.map(g => (
              <GroupRows key={g.group} g={g} cell={cell} first={first} />
            ))}
          </div>
        </div>
        <div style={{ margin: '32px auto 0', maxWidth: 1240, background: '#f8f6f4', borderRadius: 24, padding: '20px 24px' }}>
          <p style={{ margin: 0, fontSize: 13, fontWeight: 500, letterSpacing: '.06em', textTransform: 'uppercase', color: '#71717a' }}>Coming soon</p>
          <ul style={{ margin: '10px 0 0', padding: 0, listStyle: 'none', display: 'grid', gap: 8, fontSize: 15, color: '#1a1a1a' }} className="sm:grid-cols-3">
            {COMING_SOON.map(t => <li key={t}>{t}</li>)}
          </ul>
          <p style={{ margin: '10px 0 0', fontSize: 13.5, color: '#71717a' }}>Included in your plan as they launch, at no extra charge.</p>
        </div>
      </div>
    </section>
  )
}
function GroupRows({ g, cell, first }) {
  return (
    <>
      <div className="font-heading" style={{ ...first, minHeight: 64, alignItems: 'flex-end', paddingBottom: 8, fontSize: 20, lineHeight: '28px', fontWeight: 500, color: '#1a1a1a' }}>{g.group}</div>
      <div className="sb-c" style={{ ...cell, minHeight: 64 }} /><div className="sb-c" style={{ ...cell, minHeight: 64 }} /><div className="sb-c" style={{ ...cell, minHeight: 64 }} />
      {g.rows.map(([name, ...vals]) => (
        <Row key={name} name={name} vals={vals} cell={cell} first={first} />
      ))}
    </>
  )
}
function Row({ name, vals, cell, first }) {
  return (
    <>
      <div style={first}>{name}</div>
      {vals.map((v, i) => <div key={i} className="sb-c" style={cell}><Cell v={v} /></div>)}
    </>
  )
}

// ── FAQ: closed items are white cards (radius 24, padding 24) inside a #f0eeeb tray ──
export function Faq() {
  const [open, setOpen] = useState(0)
  return (
    <section style={{ padding: '80px 0' }}>
      <div className="mx-auto w-full max-w-[1240px] px-5">
        <div style={{ position: 'relative', textAlign: 'center' }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/sb/pink-arch.png" alt="" aria-hidden className="absolute left-[-14px] top-[-52px] w-[96px] max-w-none lg:left-[93px] lg:top-[10px] lg:w-[168px]" />
          <H2 className="mx-auto max-w-[780px]">Questions? Here are the answers</H2>
          <p style={{ margin: '12px auto 0', maxWidth: 520, fontSize: 21, lineHeight: '29.4px', color: '#535353' }}>Can’t find what you need? <Link href="/contact" style={{ color: '#1a1a1a', textDecoration: 'underline' }}>Talk to us</Link> and we’ll reply the same day.</p>
        </div>
        <div style={{ margin: '40px auto 0', maxWidth: 800, display: 'flex', flexDirection: 'column', gap: 8, background: '#f0eeeb', borderRadius: 32, padding: 8 }}>
          {FAQS.map((f, i) => {
            const on = open === i
            return (
              <div key={f.q} style={{ background: '#fff', borderRadius: 24, padding: 24 }}>
                <button type="button" aria-expanded={on} onClick={() => setOpen(on ? -1 : i)} style={{ display: 'flex', width: '100%', alignItems: 'center', justifyContent: 'space-between', gap: 16, textAlign: 'left', background: 'none', border: 0, padding: 0, cursor: 'pointer', fontSize: 19, lineHeight: '26.6px', fontWeight: 500, color: '#1a1a1a', fontFamily: 'inherit' }}>
                  {f.q}
                  <span style={{ width: 32, height: 32, borderRadius: 16, background: on ? '#dbfc74' : '#f0eeeb', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>{on ? <Minus size={16} /> : <Plus size={16} />}</span>
                </button>
                {on && <p style={{ margin: '12px 0 0', paddingRight: 48, fontSize: 16, lineHeight: '22.4px', color: '#535353' }}>{f.a}</p>}
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
