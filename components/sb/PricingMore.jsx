'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Check, Minus, Plus } from 'lucide-react'
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
            <div key={f.label} style={{ background: '#fff', borderRadius: 16, padding: 16, minHeight: 276, display: 'flex', gap: 16 }}>
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
              <div className="hidden sm:block" style={{ position: 'relative', width: 182, flexShrink: 0, borderRadius: 8, overflow: 'hidden', background: f.bg }}>
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

// ── Compare table: features column plus three plan columns (header cells #f8f6f4, rows 52 high) ──
function Cell({ v }) {
  if (v === true) return <span style={{ width: 24, height: 24, borderRadius: 12, background: '#dbfc74', display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}><Check size={14} strokeWidth={2.8} /></span>
  if (v === false) return <Minus size={16} color="#c4c4cb" />
  if (v === 'launch') return <span style={{ background: '#dbfc74', fontSize: 12, padding: '4px 10px', borderRadius: 10, whiteSpace: 'nowrap' }}>Included · launch offer</span>
  return <span style={{ fontSize: 15, color: '#1a1a1a' }}>{v}</span>
}
export function CompareTable() {
  const cols = 'minmax(220px,340px) repeat(3,minmax(150px,300px))'
  const cell = { background: '#fafaf9', minHeight: 52, padding: '12px 24px', display: 'flex', alignItems: 'center', borderBottom: '1px solid #f0eeeb' }
  return (
    <section style={{ padding: '80px 0' }}>
      <div className="mx-auto w-full max-w-[1240px] px-5">
        <div style={{ textAlign: 'center' }}>
          <H2>Compare plans</H2>
          <p style={{ margin: '12px auto 0', maxWidth: 520, fontSize: 21, lineHeight: '29.4px', color: '#535353' }}>See exactly what you get in each plan.</p>
        </div>
        <div className="mt-10 overflow-x-auto">
          <div style={{ minWidth: 880, display: 'grid', gridTemplateColumns: cols, justifyContent: 'center' }}>
            <div style={{ ...cell, background: 'transparent', borderBottom: 0, minHeight: 95 }} />
            {PLANS.map((p, i) => (
              <div key={p.id} style={{ background: '#f8f6f4', padding: '12px 24px', minHeight: 95, borderRadius: i === 0 ? '24px 0 0 0' : i === 2 ? '0 24px 0 0' : 0 }}>
                <p className="font-heading" style={{ margin: 0, fontSize: 24, lineHeight: '29px', fontWeight: 500 }}>{p.name}</p>
                <p style={{ margin: '4px 0 0', fontSize: 14, color: '#71717a' }}>{p.custom ? 'Let’s talk' : `₹${p.monthly.toLocaleString('en-IN')}/month`}</p>
              </div>
            ))}
            {COMPARE.map(g => (
              <FragmentRows key={g.group} g={g} cell={cell} />
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
function FragmentRows({ g, cell }) {
  return (
    <>
      <div style={{ ...cell, gridColumn: '1 / -1', background: '#f0eeeb', minHeight: 44, padding: '10px 24px', fontSize: 14, fontWeight: 500, letterSpacing: '.02em' }}>{g.group}</div>
      {g.rows.map(([name, ...vals]) => (
        <FragmentRow key={name} name={name} vals={vals} cell={cell} />
      ))}
    </>
  )
}
function FragmentRow({ name, vals, cell }) {
  return (
    <>
      <div style={{ ...cell, fontSize: 16, lineHeight: '22.4px', color: '#1a1a1a' }}>{name}</div>
      {vals.map((v, i) => <div key={i} style={cell}><Cell v={v} /></div>)}
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
          <img src="/sb/pink-arch.png" alt="" aria-hidden className="hidden lg:block" style={{ position: 'absolute', left: 93, top: 10, width: 168, maxWidth: 'none' }} />
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
