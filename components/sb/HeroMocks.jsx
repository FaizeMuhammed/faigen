'use client'

import { useEffect, useRef, useState } from 'react'
import { Inbox, LayoutGrid, Clock, ShoppingBag, Megaphone, Search, Check, CheckCheck, Heart, MessageCircle, Send, Phone, Video, MoreHorizontal, Image as ImageIcon, Smile, ArrowUp, Bookmark, PieChart, Package, Sparkles, SlidersHorizontal, Headphones, Code2, Bell, Plus, StickyNote, Tag as TagIcon, UserRound } from 'lucide-react'
import { WhatsAppGlyph, InstagramGlyph } from '../site/FaigenMark'

// The product window in the home hero, drawn like the real Faigen console (icon rail, console tabs, white page card)
// in the landing page's colours. Each tab plays a short use case on a loop, in three steps shown at the top right.
// Profile pictures are small illustrated portraits. Inline styles throughout. Design canvas: 1080 x 634.

const INK = '#1a1a1a', GREY = '#8b8b92', LINE = 'rgba(0,0,0,.07)'
const abs = o => ({ position: 'absolute', ...o })
const row = (o = {}) => ({ display: 'flex', alignItems: 'center', ...o })
const col = (o = {}) => ({ display: 'flex', flexDirection: 'column', ...o })
const G = ({ C, s = 16 }) => <span style={{ display: 'inline-block', width: s, height: s, flexShrink: 0 }}><C className="h-full w-full" /></span>
const Chip = ({ children, bg, color = INK, style }) => <span style={{ display: 'inline-block', fontSize: 11, fontWeight: 500, lineHeight: 1, padding: '5px 10px', borderRadius: 12, background: bg, color, whiteSpace: 'nowrap', ...style }}>{children}</span>

// ── profile pictures: small illustrated portraits ──
const PEOPLE = {
  Anjali: { bg: '#cfe3ff', skin: '#e9b48c', hair: '#2b1d17', shirt: '#7fa8ff', style: 'long' },
  Rahul: { bg: '#ffe2bd', skin: '#c98d65', hair: '#1f1713', shirt: '#ef7d57', style: 'short' },
  Fathima: { bg: '#e6d4ff', skin: '#dfa77c', hair: '#6b4bd0', shirt: '#a87bff', style: 'scarf' },
  Joseph: { bg: '#cdf3d6', skin: '#d9a077', hair: '#3a2a20', shirt: '#4cc07d', style: 'beard' },
  Meera: { bg: '#fbd3f3', skin: '#e0a37c', hair: '#241914', shirt: '#e87fb0', style: 'bob' },
  Daniel: { bg: '#ffd9b3', skin: '#c98d65', hair: '#2b1d17', shirt: '#3b6fd4', style: 'cap' },
  priya_crafts: { bg: '#e6d4ff', skin: '#e9b48c', hair: '#2b1d17', shirt: '#c04fd8', style: 'bun' },
  'arjun.k': { bg: '#cfe3ff', skin: '#d9a077', hair: '#1f1713', shirt: '#2b8cf0', style: 'short' },
  'meera.s': { bg: '#fff1cf', skin: '#e0a37c', hair: '#241914', shirt: '#f0b429', style: 'long' },
  Kiran: { bg: '#dbfc74', skin: '#d9a077', hair: '#1f1713', shirt: '#1a1a1a', style: 'short' },
}
// Real human portraits (stock photos from the design template, used with the designer's permission); fall back to the drawing
const FACE = { Anjali: 2, Rahul: 7, Fathima: 6, Joseph: 3, Meera: 5, Daniel: 1, priya_crafts: 9, 'arjun.k': 10, 'meera.s': 8, Kiran: 4 }
function Portrait({ name, size }) {
  if (FACE[name]) {
    // eslint-disable-next-line @next/next/no-img-element
    return <img src={`/sb/faces/f${FACE[name]}.png`} alt="" width={size} height={size} draggable={false} style={{ display: 'block', width: size, height: size, borderRadius: size / 2, objectFit: 'cover', background: '#e4e4e7' }} />
  }
  return <DrawnPortrait name={name} size={size} />
}
function DrawnPortrait({ name, size }) {
  const P = PEOPLE[name] || PEOPLE.Anjali
  const { bg, skin, hair, shirt, style } = P
  return (
    <svg viewBox="0 0 64 64" width={size} height={size} style={{ display: 'block', borderRadius: size / 2 }} aria-hidden>
      <rect width="64" height="64" fill={bg} />
      {style === 'long' && <path d="M17 30c0-12 6-18 15-18s15 6 15 18v16H17z" fill={hair} />}
      {style === 'bob' && <path d="M17 32c0-12 6-18 15-18s15 6 15 18c0 6-2 9-4 10H21c-2-1-4-4-4-10z" fill={hair} />}
      {style === 'scarf' && <path d="M14 64c0-10 6-16 10-18-5-3-8-9-8-16 0-9 7-17 16-17s16 8 16 17c0 7-3 13-8 16 4 2 10 8 10 18z" fill={hair} />}
      <path d="M8 64c0-13 11-19 24-19s24 6 24 19z" fill={style === 'scarf' ? hair : shirt} />
      <rect x="28" y="38" width="8" height="10" rx="3" fill={skin} />
      <ellipse cx="32" cy="29" rx="10.5" ry="12.5" fill={skin} />
      {style === 'short' && <path d="M21 28c-1-11 5-15 11-15s12 4 11 15c-2-5-6-7-11-7s-9 2-11 7z" fill={hair} />}
      {style === 'beard' && <><path d="M21 28c-1-11 5-15 11-15s12 4 11 15c-2-5-6-7-11-7s-9 2-11 7z" fill={hair} /><path d="M21.5 31c0 9 6 13 10.500 13s10.500-4 10.500-13c-2 5-6 7-10.500 7s-8.500-2-10.500-7z" fill={hair} /></>}
      {style === 'cap' && <><path d="M21 27c0-9 5-13 11-13s11 4 11 13z" fill={hair} /><path d="M19 27h26l4 3H19z" fill={hair} /></>}
      {style === 'bun' && <><circle cx="32" cy="12" r="6" fill={hair} /><path d="M21 28c-1-11 5-15 11-15s12 4 11 15c-2-5-6-7-11-7s-9 2-11 7z" fill={hair} /></>}
      {(style === 'long' || style === 'bob') && <path d="M21 27c2-8 6-10 11-10s9 2 11 10c-3-4-7-5-11-5s-8 1-11 5z" fill={hair} />}
      {style === 'scarf' && <path d="M21 28c0-9 5-12 11-12s11 3 11 12c-3-3-7-4-11-4s-8 1-11 4z" fill={hair} />}
      <circle cx="28" cy="29" r="1.3" fill="#2b1d17" /><circle cx="36" cy="29" r="1.3" fill="#2b1d17" />
      <path d="M28.500 34c1.800 1.800 5.200 1.800 7 0" fill="none" stroke="#7a3f2a" strokeWidth="1.200" strokeLinecap="round" />
    </svg>
  )
}
const Avatar = ({ n, s = 36, ig, ch = true }) => (
  <span style={{ position: 'relative', width: s, height: s, flexShrink: 0, display: 'inline-block' }}>
    <Portrait name={n} size={s} />
    {ch && <span style={abs({ right: -3, bottom: -3, background: '#fff', borderRadius: 9, padding: 1.5, display: 'flex' })}><G C={ig ? InstagramGlyph : WhatsAppGlyph} s={Math.max(11, s * 0.3)} /></span>}
  </span>
)

// something that appears at animation step k (fades and slides in) and stays
const fx = (c, k, extra = {}) => ({ opacity: c >= k ? 1 : 0, transform: c >= k ? 'none' : 'translateY(12px)', transition: 'opacity .5s ease, transform .5s ease', ...extra })
const step3 = c => (c <= 1 ? 0 : c <= 4 ? 1 : 2)

// the console's icon rail, as in the dashboard: one soft colour per icon
const RAIL = [[PieChart, '#f59e0b'], [Inbox, '#387ed1'], [ShoppingBag, '#2f9e44'], [Package, '#e08e0b'], [Sparkles, '#7c3aed'], [InstagramGlyph, '#d6249f', 1], [SlidersHorizontal, '#667085']]
const CAMPAIGN_RAIL = [[LayoutGrid, '#7c3aed'], [Megaphone, '#e91e63'], [Clock, '#0ea5a4']]
const CONSOLES = [[Headphones, 'Agent Console', '#387ed1'], [Megaphone, 'Campaign Console', '#7c3aed'], [Code2, 'Developer', '#0d9488']]

function Shell({ title, icon: Icon, tone, scenario, steps, c, rail, console: cons = 0, children }) {
  const cur = step3(c)
  return (
    <div style={{ position: 'relative', width: 1080, height: 634, background: '#f3f4f6', borderRadius: 8, overflow: 'hidden', fontSize: 14, color: INK, boxShadow: '0 30px 80px -30px rgba(60,30,120,.45)' }}>
      <div style={abs({ left: 12, top: 12, bottom: 12, width: 64, background: '#fff', borderRadius: 20 })}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/sb/faigen-logo.svg" alt="" style={abs({ left: 14, top: 14, width: 36, height: 36 })} />
        <div style={abs({ left: 10, right: 10, top: 66, height: 1, background: LINE })} />
        {(cons === 1 ? CAMPAIGN_RAIL : RAIL).map(([Ic, color, brand], i) => (
          <span key={i} style={abs({ left: 9, top: 82 + i * 52, width: 46, height: 42, borderRadius: 14, background: i === rail ? '#eaf1fe' : 'transparent', ...row({ justifyContent: 'center' }) })}>
            {brand ? <G C={Ic} s={20} /> : <Ic size={20} strokeWidth={1.8} color={color} />}
            {i === rail && <i style={abs({ right: 7, top: 18, width: 5, height: 5, borderRadius: 3, background: '#387ed1' })} />}
          </span>
        ))}
      </div>
      <div style={abs({ left: 88, right: 12, top: 12, height: 56, background: '#fff', borderRadius: 20, ...row({ padding: '0 14px', gap: 6 }) })}>
        {CONSOLES.map(([Ic, label, color], i) => (
          <span key={label} style={{ position: 'relative', ...row({ gap: 9 }), height: 38, padding: '0 14px', borderRadius: 14, fontSize: 14, fontWeight: 500, background: i === cons ? '#f2f4f8' : 'transparent', color: i === cons ? '#2f3a4a' : '#6b7280' }}>
            <Ic size={17} color={color} strokeWidth={1.9} />{label}
            {i === cons && <i style={abs({ left: 14, right: 14, bottom: -9, height: 2, borderRadius: 1, background: color })} />}
          </span>
        ))}
        <span style={{ marginLeft: 'auto', ...row({ gap: 16 }) }}>
          <Bell size={18} color="#8b8b92" />
          <span style={{ width: 1, height: 26, background: LINE }} />
          <span style={row({ gap: 10 })}><Portrait name="Kiran" size={34} /><span style={{ lineHeight: 1.2 }}><b style={{ fontWeight: 500, fontSize: 13 }}>Kiran</b><div style={{ fontSize: 11.5, color: GREY }}>Kerala Coir Co.</div></span></span>
        </span>
      </div>
      <div style={abs({ left: 88, right: 12, top: 80, bottom: 12, background: '#fff', borderRadius: 20, overflow: 'hidden' })}>
        <div style={{ ...row({ padding: '0 22px', gap: 12 }), height: 66, borderBottom: `1px solid ${LINE}` }}>
          <span style={{ width: 34, height: 34, borderRadius: 11, background: tone + '1f', ...row({ justifyContent: 'center' }) }}><Icon size={19} color={tone} strokeWidth={1.9} /></span>
          <div style={{ lineHeight: 1.15 }}>
            <span className="font-heading" style={{ fontSize: 22, fontWeight: 500 }}>{title}</span>
            <div style={{ marginTop: 3, fontSize: 12.5, color: GREY, whiteSpace: 'nowrap' }}><b style={{ fontWeight: 500, color: '#5c5c63' }}>Use case:</b> {scenario}</div>
          </div>
          <div style={{ ...row({ gap: 7 }), marginLeft: 'auto' }}>
            {steps.map((label, i) => {
              const on = i === cur, done = i < cur
              return (
                <span key={label} style={{ ...row({ gap: 7 }), height: 32, padding: '0 12px 0 6px', borderRadius: 16, fontSize: 12.5, background: on ? INK : '#fff', color: on ? '#fff' : '#52525b', border: `1px solid ${on ? INK : LINE}`, transition: 'all .4s', whiteSpace: 'nowrap' }}>
                  <span style={{ width: 20, height: 20, borderRadius: 10, background: done ? '#dbfc74' : on ? '#fff' : '#f0eeeb', color: INK, fontSize: 11, fontWeight: 600, ...row({ justifyContent: 'center' }), transition: 'all .4s' }}>{done ? <Check size={11} strokeWidth={3} /> : i + 1}</span>{label}
                </span>
              )
            })}
          </div>
        </div>
        <div style={abs({ left: 0, right: 0, top: 66, bottom: 0 })}>{children}</div>
      </div>
    </div>
  )
}

// ── WhatsApp: a customer asks in Manglish, the AI answers, an order is collected, and the contact panel fills in ──
// Kept deliberately calm: four short messages, a quiet chat list, and a contact panel with room to breathe.
const CHATS = [['Anjali', 'Price ethra aanu Coir Mat?', '10:41', 2], ['Rahul', 'Is this available in black?', '10:32', 0], ['Fathima', 'Delivery Kochi undo?', '10:20', 1], ['Joseph', 'Order cheyyanam 🙌', '9:58', 0]]
function Bub({ me, children, t, c, k }) {
  return <div style={fx(c, k, { alignSelf: me ? 'flex-end' : 'flex-start', maxWidth: '80%', background: me ? '#d9fdd3' : '#fff', borderRadius: me ? '12px 12px 4px 12px' : '12px 12px 12px 4px', padding: '9px 13px 6px', fontSize: 14, lineHeight: 1.4, boxShadow: '0 1px 1px rgba(11,20,26,.08)' })}>{children}<span style={{ display: 'block', textAlign: 'right', fontSize: 10, color: '#7a8a93', marginTop: 3 }}>{t}{me && <CheckCheck size={12} color="#53bdeb" style={{ marginLeft: 4, verticalAlign: -2 }} />}</span></div>
}
const STAGES = ['New lead', 'Interested', 'Order placed', 'Customer']
function Label({ icon: Ic, children }) {
  return <div style={{ ...row({ gap: 7 }), marginBottom: 10, fontSize: 11, fontWeight: 600, letterSpacing: '.07em', textTransform: 'uppercase', color: '#9a9aa2' }}><Ic size={13} />{children}</div>
}
function ContactPanel({ c }) {
  const stage = c >= 5 ? 2 : c >= 2 ? 1 : 0
  return (
    <div style={abs({ left: 600, right: 0, top: 0, bottom: 0, borderLeft: `1px solid ${LINE}`, padding: '20px 24px', ...col({ gap: 20 }), overflow: 'hidden' })}>
      <div style={row({ gap: 14 })}>
        <Avatar n="Anjali" s={52} />
        <div style={{ lineHeight: 1.3, flex: 1 }}><b className="font-heading" style={{ fontSize: 19, fontWeight: 500 }}>Anjali</b><div style={{ fontSize: 12.5, color: GREY, marginTop: 2 }}>+91 98••• ••21 · Kochi</div></div>
      </div>
      <div>
        <Label icon={Sparkles}>Stage</Label>
        <div style={{ ...row({ gap: 5 }), flexWrap: 'nowrap' }}>
          {STAGES.map((s, i) => (
            <span key={s} style={{ fontSize: 11.5, padding: '7px 10px', borderRadius: 16, whiteSpace: 'nowrap', border: `1px solid ${i === stage ? INK : LINE}`, background: i === stage ? INK : '#fff', color: i === stage ? '#fff' : '#6b7280', transition: 'all .4s' }}>{s}</span>
          ))}
        </div>
      </div>
      <div>
        <Label icon={TagIcon}>Tags</Label>
        <div style={{ ...row({ gap: 7 }), flexWrap: 'wrap', minHeight: 28 }}>
          <span style={fx(c, 1)}><Chip bg="#e8f1ff" color="#1c5fd4" style={{ padding: '7px 12px', fontSize: 12 }}>Price enquiry</Chip></span>
          <span style={fx(c, 2)}><Chip bg="#f3e8ff" color="#7a3cc4" style={{ padding: '7px 12px', fontSize: 12 }}>Coir mats</Chip></span>
          <span style={fx(c, 5)}><Chip bg="#e1f7e5" color="#1d7a36" style={{ padding: '7px 12px', fontSize: 12 }}>Kochi</Chip></span>
        </div>
      </div>
      <div>
        <Label icon={StickyNote}>Note</Label>
        <div style={{ borderRadius: 14, background: '#f8f6f4', padding: '12px 14px', minHeight: 70, fontSize: 12.5, lineHeight: 1.5, color: '#3f3f46' }}>
          <span style={fx(c, 5)}>Wants 2 Premium Coir Mats. Deliver to Kochi, pay on delivery.</span>
          {c < 5 && <span style={{ color: '#a1a1aa' }}>Add a note for your team…</span>}
        </div>
      </div>
      <div style={{ ...row({ justifyContent: 'space-between' }), marginTop: 'auto' }}>
        <span style={row({ gap: 10 })}><Portrait name="Kiran" size={30} /><span style={{ fontSize: 13 }}>Kiran<span style={{ display: 'block', fontSize: 11.5, color: GREY }}>Owner</span></span></span>
        <span style={{ background: INK, color: '#fff', borderRadius: 18, padding: '10px 18px', fontSize: 13 }}>Take over</span>
      </div>
    </div>
  )
}
function WhatsAppTab({ c }) {
  const typing = c === 1 || c === 3
  return (
    <Shell c={c} title="Live Inbox" icon={Inbox} tone="#387ed1" scenario="a shop gets a price question late at night" steps={['Customer asks', 'AI replies', 'Order collected']} rail={1}>
      <div style={abs({ left: 0, top: 0, width: 230, bottom: 0, borderRight: `1px solid ${LINE}`, overflow: 'hidden', padding: '16px 10px' })}>
        {CHATS.map(([n, m, t, u], i) => (
          <div key={n} style={{ ...row({ gap: 12, padding: '12px 10px' }), borderRadius: 14, background: i === 0 ? '#f4f7fd' : 'transparent', marginBottom: 4 }}>
            <Avatar n={n} s={40} />
            <div style={{ flex: 1, minWidth: 0 }}><div style={row({ justifyContent: 'space-between' })}><b style={{ fontWeight: 500, fontSize: 14 }}>{n}</b><span style={{ fontSize: 10.5, color: u ? '#25a352' : GREY }}>{t}</span></div><div style={row({ justifyContent: 'space-between', marginTop: 4 })}><span style={{ fontSize: 12, color: GREY, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{i === 0 && c >= 5 ? 'Order #1048 collected ✓' : m}</span>{u > 0 && <span style={{ minWidth: 17, height: 17, borderRadius: 9, background: '#25d366', color: '#fff', fontSize: 10.5, ...row({ justifyContent: 'center' }), marginLeft: 6 }}>{u}</span>}</div></div>
          </div>
        ))}
      </div>
      <div style={abs({ left: 230, top: 0, width: 370, bottom: 0, background: '#efeae2', overflow: 'hidden' })}>
        <div style={{ ...row({ gap: 12, padding: '12px 20px' }), background: '#fff', borderBottom: `1px solid ${LINE}` }}>
          <Avatar n="Anjali" s={36} /><div style={{ lineHeight: 1.25 }}><b style={{ fontWeight: 500, fontSize: 14.5 }}>Anjali</b><div style={{ fontSize: 12, color: '#1d7a36' }}>{typing ? 'AI is replying…' : 'online'}</div></div>
          <span style={{ marginLeft: 'auto', ...row({ gap: 14 }), color: '#8696a0' }}><Video size={17} /><Phone size={16} /></span>
        </div>
        <div style={{ ...col({ gap: 12 }), padding: '20px 20px' }}>
          <Bub c={c} k={1} t="10:41">Price ethra aanu Coir Mat?</Bub>
          <Bub c={c} k={2} me t="10:41">₹600 aanu 😊 Name and address ayakkamo?</Bub>
          <Bub c={c} k={3} t="10:43">Anjali, 2 mats. Kochi 682030</Bub>
          <Bub c={c} k={4} me t="10:43">Done 🚚 Order #1048 placed.</Bub>
          <div style={fx(c, 5, { alignSelf: 'center', ...row({ gap: 8 }), background: '#dbfc74', borderRadius: 16, padding: '8px 14px', fontSize: 12.5, fontWeight: 500, marginTop: 2 })}><Check size={14} strokeWidth={3} />Order #1048 collected by the AI</div>
        </div>
        <div style={abs({ left: 16, right: 16, bottom: 16, height: 44, borderRadius: 22, background: '#fff', ...row({ padding: '0 8px 0 18px', gap: 10 }) })}><span style={{ fontSize: 13.5, color: '#8696a0', flex: 1 }}>Type a reply (pauses AI)</span><span style={{ width: 32, height: 32, borderRadius: 16, background: '#25d366', ...row({ justifyContent: 'center' }) }}><Send size={15} color="#fff" /></span></div>
      </div>
      <ContactPanel c={c} />
    </Shell>
  )
}

// ── Instagram: a Reel comment becomes a DM with buttons, then a sale; the thread shows stage and tags ──
const COMMENTS = [['priya_crafts', 'price?', 'DM sent', ['#2b8cf0', '#e9f3ff'], 1], ['arjun.k', 'link please', 'DM sent', ['#2b8cf0', '#e9f3ff'], 0], ['free_followers_99', 'Get 10k followers!!', 'Hidden', ['#c77a00', '#fff1d6'], 0], ['meera.s', 'size M available?', 'Replied', ['#5c9a00', '#f1fbd2'], 0]]
function InstagramTab({ c }) {
  const grad = 'linear-gradient(135deg,#7b5cff,#c04fd8)'
  const bg = ['#e8f1ff', '#f3e8ff', '#e1f7e5', '#fff1cf']
  return (
    <Shell c={c} title="Instagram" icon={InstagramGlyph} tone="#d6249f" scenario="a boutique turns Reel comments into customers" steps={['Comment on a Reel', 'Faigen DMs back', 'Customer taps a button']} rail={5}>
      <div style={abs({ left: 0, top: 0, width: 420, bottom: 0, padding: 18, borderRight: `1px solid ${LINE}`, overflow: 'hidden' })}>
        <div style={row({ gap: 14 })}>
          <div style={{ width: 80, height: 100, borderRadius: 12, background: 'linear-gradient(160deg,#feda75,#fa7e1e 35%,#d62976 65%,#962fbf)', position: 'relative', flexShrink: 0 }}><span style={abs({ left: 8, bottom: 8, fontSize: 11, color: '#fff', fontWeight: 600 })}>▶ Reel</span></div>
          <div><div style={row({ gap: 8 })}><span style={{ width: 26, height: 26, borderRadius: 13, padding: 2, background: 'linear-gradient(45deg,#feda75,#d62976,#962fbf)' }}><span style={{ display: 'block', width: '100%', height: '100%', borderRadius: 11, background: '#fff', border: '2px solid #fff' }} /></span><b style={{ fontWeight: 500, fontSize: 13.5 }}>keralacoir.co</b></div>
            <p style={{ margin: '7px 0 0', fontSize: 13, lineHeight: 1.4 }}>New arrivals ✨ Comment <b>PRICE</b> and we’ll DM the price list.</p>
            <div style={{ ...row({ gap: 14 }), marginTop: 9, color: GREY, fontSize: 12 }}><span style={row({ gap: 4 })}><Heart size={13} />1.2k</span><span style={row({ gap: 4 })}><MessageCircle size={13} />{148 + (c >= 1 ? 1 : 0)}</span><Bookmark size={13} /></div></div>
        </div>
        <div style={{ height: 1, background: LINE, margin: '14px 0 4px' }} />
        {COMMENTS.map(([u, cm, st, [fg, b2], first], i) => (
          <div key={u} style={{ ...row({ gap: 10, padding: '10px 0' }), borderBottom: i < 3 ? `1px solid ${LINE}` : 0, ...(first ? fx(c, 1) : {}) }}>
            <Avatar n={u} s={32} ig ch={false} />
            <div style={{ flex: 1, fontSize: 13 }}><b style={{ fontWeight: 500 }}>{u}</b> <span style={{ color: '#52525b' }}>{cm}</span>{first ? <div style={fx(c, 2, { marginTop: 3, fontSize: 12, color: '#6b3fc4' })}>↳ keralacoir.co: “Check your DMs 📩”</div> : null}</div>
            {first ? <span style={fx(c, 2)}><Chip bg={b2} color={fg}>{st}</Chip></span> : <Chip bg={b2} color={fg}>{st}</Chip>}
          </div>
        ))}
        <div style={fx(c, 6, { ...row({ gap: 8 }), marginTop: 10, background: '#fafdea', border: '1px solid #ecf5b4', borderRadius: 12, padding: '9px 12px', fontSize: 12 })}><span style={{ width: 19, height: 19, borderRadius: 10, background: '#dbfc74', ...row({ justifyContent: 'center' }) }}><Check size={11} strokeWidth={3} /></span>128 comments turned into DMs today</div>
      </div>
      <div style={abs({ left: 420, right: 0, top: 0, bottom: 0, overflow: 'hidden' })}>
        <div style={{ ...row({ gap: 12, padding: '12px 20px' }), borderBottom: `1px solid ${LINE}` }}>
          <span style={{ width: 40, height: 40, borderRadius: 20, padding: 2, background: 'linear-gradient(45deg,#feda75,#d62976,#962fbf)' }}><span style={{ display: 'block', borderRadius: 18, border: '2px solid #fff', overflow: 'hidden' }}><Portrait name="priya_crafts" size={32} /></span></span>
          <div style={{ lineHeight: 1.2 }}><b style={{ fontWeight: 500 }}>priya_crafts</b><div style={{ fontSize: 12, color: GREY }}>Instagram · from your Reel</div></div>
          <span style={{ marginLeft: 'auto' }}><Chip bg="#f3e8ff" color="#7a3cc4">AI is replying</Chip></span>
        </div>
        <div style={{ ...row({ gap: 8, padding: '9px 20px' }), background: '#fafaf9', borderBottom: `1px solid ${LINE}`, fontSize: 12, color: '#52525b' }}>
          <span style={{ color: GREY }}>Stage</span><span style={{ background: INK, color: '#fff', borderRadius: 12, padding: '4px 10px' }}>{c >= 5 ? 'Interested' : 'New lead'}</span>
          <span style={{ color: GREY, marginLeft: 6 }}>Tags</span><span style={fx(c, 1)}><Chip bg={bg[1]} color="#7a3cc4">Reel lead</Chip></span><span style={fx(c, 4)}><Chip bg={bg[3]} color="#9a6b00">Handbags</Chip></span>
        </div>
        <div style={{ ...col({ gap: 9 }), padding: '16px 20px' }}>
          <div style={fx(c, 3, { alignSelf: 'flex-end', maxWidth: '82%', background: grad, color: '#fff', borderRadius: 20, padding: '9px 14px', fontSize: 13.5, lineHeight: 1.4 })}>Hi Priya 👋 Thanks for commenting! Which one would you like to know more about?</div>
          <div style={fx(c, 4, { alignSelf: 'flex-end', ...row({ gap: 7 }) })}>{['Price list', 'Location', 'Talk to a person'].map(b => <span key={b} style={{ border: `1px solid ${b === 'Price list' && c >= 5 ? '#6b3fc4' : '#cdb6f5'}`, background: b === 'Price list' && c >= 5 ? '#6b3fc4' : '#fff', color: b === 'Price list' && c >= 5 ? '#fff' : '#6b3fc4', borderRadius: 18, padding: '7px 13px', fontSize: 12.5, transition: 'all .4s' }}>{b}</span>)}</div>
          <div style={fx(c, 5, { alignSelf: 'flex-start', background: '#efefef', borderRadius: 20, padding: '9px 14px', fontSize: 13.5 })}>Price list</div>
          <div style={fx(c, 5.5, { alignSelf: 'flex-end', maxWidth: '82%', background: grad, color: '#fff', borderRadius: 20, padding: '9px 14px', fontSize: 13.5, lineHeight: 1.4 })}>Tote ₹899 · Sling ₹1,199 · Backpack ₹1,799. Shall I place an order?</div>
          <div style={fx(c, 6, { alignSelf: 'flex-start', background: '#efefef', borderRadius: 20, padding: '9px 14px', fontSize: 13.5 })}>Sling bag please 🙌</div>
        </div>
        <div style={abs({ left: 20, right: 20, bottom: 14, height: 40, borderRadius: 20, border: `1px solid ${LINE}`, ...row({ padding: '0 14px', gap: 10 }), color: GREY, fontSize: 13 })}><Smile size={17} />Message…<span style={{ marginLeft: 'auto', ...row({ gap: 10 }) }}><ImageIcon size={17} /><Heart size={17} /></span></div>
      </div>
    </Shell>
  )
}

// ── Orders: chats from both channels become orders, one after another ──
const ORDERS = [['#1048', 'Anjali', 'WhatsApp', '2 × Premium Coir Mat', '₹1,200', 'Pending', ['#9a6b00', '#fff1cf']], ['#1047', 'priya_crafts', 'Instagram', 'Sling bag', '₹1,199', 'Confirmed', ['#1d7a36', '#e1f7e5']], ['#1046', 'Rahul', 'WhatsApp', 'Coir Doormat (black)', '₹450', 'Shipped', ['#1c5fd4', '#e8f1ff']], ['#1045', 'Fathima', 'WhatsApp', '3 × Coir Mat', '₹1,800', 'Confirmed', ['#1d7a36', '#e1f7e5']], ['#1044', 'arjun.k', 'Instagram', 'Tote bag', '₹899', 'Shipped', ['#1c5fd4', '#e8f1ff']]]
function Stat({ label, value, sub, bar, w, left }) {
  return <div style={abs({ left, top: 0, width: 224, height: 84, background: '#fff', border: `1px solid ${LINE}`, borderRadius: 16, padding: '13px 16px' })}><div style={row({ justifyContent: 'space-between' })}><span style={{ fontSize: 13, color: '#52525b' }}>{label}</span><span style={{ ...row({ gap: 3 }), fontSize: 15, fontWeight: 500 }}>{value}{sub && <ArrowUp size={12} color="#5ad07f" />}</span></div><div style={abs({ left: 16, right: 16, bottom: 14, height: 5, borderRadius: 3, background: '#efeff2' })}><div style={{ width: w, height: '100%', borderRadius: 3, background: bar, transition: 'width .6s ease' }} /></div></div>
}
function OrdersTab({ c }) {
  const n = Math.min(c, 5)
  const T = '82px 160px 150px 1fr 100px 110px'
  return (
    <Shell c={c} title="Orders" icon={ShoppingBag} tone="#2f9e44" scenario="WhatsApp and Instagram chats become orders on their own" steps={['Customers chat', 'AI collects details', 'Orders arrive']} rail={2}>
      <div style={abs({ left: 22, right: 22, top: 18, height: 84 })}>
        <Stat left={0} label="Orders today" value={19 + n} sub bar="#d3f56a" w={`${40 + n * 8}%`} />
        <Stat left={236} label="Revenue" value={`₹${(30.2 + n * 1.6).toFixed(1)}k`} sub bar="#d79bf7" w={`${30 + n * 7}%`} />
        <Stat left={472} label="Via WhatsApp" value={14 + Math.round(n * 0.8)} bar="#7be08f" w={`${50 + n * 4}%`} />
        <Stat left={708} label="Via Instagram" value={5 + (n >= 2 ? 1 : 0)} bar="#f6a5d0" w={`${20 + (n >= 2 ? 6 : 0)}%`} />
      </div>
      <div style={abs({ left: 22, right: 22, top: 118, bottom: 18, border: `1px solid ${LINE}`, borderRadius: 16, padding: '0 18px', overflow: 'hidden' })}>
        <div style={{ display: 'grid', gridTemplateColumns: T, height: 42, alignItems: 'center', fontSize: 12, fontWeight: 600, letterSpacing: '.04em', textTransform: 'uppercase', color: GREY, borderBottom: `1px solid ${LINE}` }}><span>Order</span><span>Customer</span><span>Source</span><span>Items</span><span>Total</span><span>Status</span></div>
        {ORDERS.map((o, i) => [o, i]).filter(([, i]) => c >= 5 - i).map(([[id, nm, ch, it, tot, st, [fg, bg]], i], idx, arr) => (
          <div key={id} style={{ display: 'grid', gridTemplateColumns: T, height: 54, alignItems: 'center', fontSize: 13.5, borderBottom: idx < arr.length - 1 ? `1px solid ${LINE}` : 0, background: idx === 0 ? '#fcfff0' : 'transparent', animation: idx === 0 && c > 1 ? 'sbRowIn .5s ease' : undefined }}>
            <b style={{ fontWeight: 500 }}>{id}</b><span style={row({ gap: 9 })}><Avatar n={nm} s={28} ig={ch === 'Instagram'} ch={false} />{nm}</span><span style={row({ gap: 7 })}><G C={ch === 'WhatsApp' ? WhatsAppGlyph : InstagramGlyph} s={17} />{ch}</span><span style={{ color: '#52525b' }}>{it}</span><b style={{ fontWeight: 500 }}>{tot}</b><span><Chip bg={bg} color={fg}>{st}</Chip></span>
          </div>
        ))}
      </div>
    </Shell>
  )
}

// ── Broadcasts: send an offer, people tap Interested, you get the lead list ──
function BroadcastTab({ c }) {
  const taps = c >= 3 ? 212 + Math.min(c - 3, 3) * 3 : 0
  const leads = [['Anjali', '+91 98••• ••21', '2 min ago'], ['Rahul', '+91 99••• ••08', '6 min ago'], ['Fathima', '+91 97••• ••64', '11 min ago']]
  return (
    <Shell c={c} console={1} title="Campaign History" icon={Megaphone} tone="#7c3aed" scenario="an event invite that finds the people who want to come" steps={['Send the offer', 'People tap Interested', 'Follow up the leads']} rail={2}>
      <div style={abs({ left: 0, top: 0, width: 320, bottom: 0, background: '#efeae2', padding: 20, overflow: 'hidden' })}>
        <p style={{ margin: '0 0 10px', fontSize: 12, color: '#667781', ...row({ gap: 6 }) }}><G C={WhatsAppGlyph} s={14} />Template preview</p>
        <div style={fx(c, 1, { background: '#fff', borderRadius: '4px 14px 14px 14px', padding: 6, boxShadow: '0 1px 2px rgba(11,20,26,.12)' })}>
          <div style={{ height: 134, borderRadius: 10, background: 'linear-gradient(135deg,#c8fb68,#9be05a 55%,#f2f98a)', position: 'relative' }}><span className="font-heading" style={abs({ left: 14, bottom: 12, fontSize: 21, fontWeight: 500, lineHeight: 1.1 })}>FinFest v.2<br />Thrissur</span></div>
          <p style={{ margin: '9px 8px 3px', fontSize: 13, lineHeight: 1.4 }}>You’re invited! Join us on Sat 21 Nov for talks on investing, mutual funds and more.</p>
          <span style={{ display: 'block', textAlign: 'right', fontSize: 10, color: '#667781', margin: '0 8px 5px' }}>10:00 AM</span>
        </div>
        {['Interested', 'Not interested'].map(b => <div key={b} style={fx(c, 1, { marginTop: 5, background: b === 'Interested' && c >= 3 ? '#0a7cff' : '#fff', borderRadius: 10, padding: '10px 0', textAlign: 'center', fontSize: 13.5, color: b === 'Interested' && c >= 3 ? '#fff' : '#0a7cff', boxShadow: '0 1px 2px rgba(11,20,26,.12)', transition: 'all .4s ease, opacity .5s, transform .5s' })}>↩ {b}</div>)}
      </div>
      <div style={abs({ left: 320, right: 0, top: 0, bottom: 0, padding: 22 })}>
        <div style={row({ justifyContent: 'space-between' })}><b className="font-heading" style={{ fontSize: 18, fontWeight: 500 }}>Kochi Customer Meet · Invite</b><span style={fx(c, 1)}><Chip bg="#e1f7e5" color="#1d7a36">Sent</Chip></span></div>
        <div style={{ ...row({ gap: 12 }), marginTop: 14 }}>
          {[['Delivered', c >= 2 ? '1,240' : '0', '#d3f56a', c >= 2 ? '92%' : '0%'], ['Read', c >= 2 ? '912' : '0', '#bfdcfb', c >= 2 ? '68%' : '0%'], ['Interested', String(taps), '#d79bf7', c >= 3 ? '16%' : '0%']].map(([l, v, col2, w]) => (
            <div key={l} style={{ flex: 1, background: '#f8f6f4', borderRadius: 14, padding: '12px 14px' }}><span style={{ fontSize: 12.5, color: '#52525b' }}>{l}</span><div className="font-heading" style={{ fontSize: 28, fontWeight: 500, marginTop: 3, lineHeight: 1.1 }}>{v}</div><div style={{ height: 5, borderRadius: 3, background: '#e9e6e1', marginTop: 10 }}><div style={{ width: w, height: '100%', borderRadius: 3, background: col2, transition: 'width .8s ease' }} /></div></div>
          ))}
        </div>
        <p style={fx(c, 3, { margin: '16px 0 6px', fontSize: 13.5, fontWeight: 500 })}>People who tapped Interested</p>
        {leads.map(([nm, ph, t], i) => (
          <div key={nm} style={fx(c, 3 + i, { ...row({ gap: 12, padding: '9px 0' }), borderTop: `1px solid ${LINE}` })}><Avatar n={nm} s={32} /><b style={{ fontWeight: 500, width: 84, fontSize: 13.5 }}>{nm}</b><span style={{ color: GREY, fontSize: 12.5, flex: 1 }}>{ph}</span><span style={{ color: GREY, fontSize: 12 }}>{t}</span><Chip bg="#f3e8ff" color="#7a3cc4">Interested</Chip></div>
        ))}
        <div style={fx(c, 6, { marginTop: 12, ...row({ gap: 8 }), fontSize: 12.5, color: '#52525b' })}><span style={{ background: INK, color: '#fff', borderRadius: 16, padding: '7px 13px' }}>Download Interested list</span>Your team can call them today.</div>
      </div>
    </Shell>
  )
}

// ── Live inbox: the AI handles it, flags a person, and you take over ──
function InboxCard({ n, ig, tag, tagBg, text, meta, style }) {
  return <div style={{ background: '#fff', border: `1px solid ${LINE}`, borderRadius: 14, padding: 12, marginTop: 9, ...style }}><div style={row({ gap: 10 })}><Avatar n={n} s={32} ig={ig} /><b style={{ fontWeight: 500, fontSize: 13.5 }}>{n}</b><span style={{ marginLeft: 'auto' }}><Chip bg={tagBg}>{tag}</Chip></span></div><p style={{ margin: '9px 0 0', fontSize: 13, lineHeight: 1.4, color: '#3f3f46' }}>{text}</p><p style={{ margin: '7px 0 0', fontSize: 11.5, color: GREY }}>{meta}</p></div>
}
function InboxTab({ c }) {
  const Col = ({ t, count, bg, badge, children }) => <div style={{ flex: 1, background: bg, borderRadius: 18, padding: '12px 12px 14px', alignSelf: 'stretch', overflow: 'hidden' }}><div style={row({ gap: 9, padding: '0 3px' })}><b style={{ fontWeight: 500, fontSize: 14.5 }}>{t}</b><span style={{ width: 23, height: 23, borderRadius: 12, background: badge, fontSize: 11.5, ...row({ justifyContent: 'center' }) }}>{count}</span></div>{children}</div>
  const danielHere = c >= 2
  const taken = c >= 4
  return (
    <Shell c={c} title="Live Inbox" icon={Inbox} tone="#387ed1" scenario="the AI handles chats, and calls you only when it matters" steps={['AI replies', 'A person is needed', 'You take over']} rail={1}>
      <div style={abs({ left: 0, right: 0, top: 0, bottom: 0, padding: 16, ...row({ gap: 12, alignItems: 'flex-start' }) })}>
        <Col t="AI replying" count={danielHere ? 3 : 4} bg="#fafaf9" badge="#e9cbfb">
          <InboxCard n="Anjali" tag="WhatsApp" tagBg="#cdf3d6" text="Price ethra aanu Coir Mat?" meta="3 sec · Stage: New lead" />
          <InboxCard n="priya_crafts" ig tag="Instagram" tagBg="#fbd3f3" text="Is the red bag still available?" meta="2 sec · Stage: Interested" />
          {!danielHere ? <InboxCard n="Daniel" tag="WhatsApp" tagBg="#cdf3d6" text="I want 200 mats for my hotel. Can you give a bulk price?" meta="AI is replying…" style={fx(c, 1)} /> : <InboxCard n="Fathima" tag="WhatsApp" tagBg="#cdf3d6" text="Delivery Kochi undo?" meta="4 sec · Stage: New lead" />}
        </Col>
        <Col t="Needs you" count={danielHere ? (taken ? 2 : 3) : 2} bg="#fafdea" badge="#e8fa8f">
          {danielHere && !taken && <InboxCard n="Daniel" tag="Human hand-off" tagBg="#ffe2bd" text="Wants a bulk price. The AI passed this chat to you." meta="Waiting 1 min · Tag: Bulk order" style={fx(c, 2, { borderColor: '#f3c98b', boxShadow: '0 0 0 3px rgba(255,200,120,.25)' })} />}
          <InboxCard n="meera.s" ig tag="Instagram" tagBg="#fbd3f3" text="Can I change the delivery address?" meta="Waiting 1 min" />
          <InboxCard n="Joseph" tag="Human hand-off" tagBg="#ffe2bd" text="Needs to speak about a refund" meta="Waiting 4 min · Tag: Refund" />
        </Col>
        <Col t={taken ? 'You’re replying' : 'Done today'} count={taken ? 1 : 18} bg="#f5f8ff" badge="#cfe3ff">
          {taken ? (
            <>
              <InboxCard n="Daniel" tag="You took over" tagBg="#cfe3ff" text="Hi Daniel, I’m Kiran from Kerala Coir. For 200 mats I can offer ₹520 each." meta="AI is paused for this chat · Owner: Kiran" style={fx(c, 4)} />
              <p style={fx(c, 5, { margin: '12px 3px 0', fontSize: 12.5, lineHeight: 1.45, color: '#52525b' })}>Hand it back to the AI any time, from the same screen.</p>
            </>
          ) : (
            <>
              <InboxCard n="Rahul" tag="Order placed" tagBg="#bddafb" text="Order #1046 confirmed · ₹450" meta="12 min ago · Stage: Customer" />
              <InboxCard n="Joseph" tag="Order placed" tagBg="#bddafb" text="Order #1045 confirmed · ₹1,800" meta="25 min ago · Stage: Customer" />
            </>
          )}
        </Col>
      </div>
    </Shell>
  )
}

export const HERO_TABS = { wa: WhatsAppTab, ig: InstagramTab, orders: OrdersTab, bc: BroadcastTab, inbox: InboxTab }

const LAST = 6
// Steps the story forward every 1.3 seconds, holds the finished picture for a few seconds, then starts again.
// With reduced motion it just shows the finished picture.
function useCycle() {
  const [c, setC] = useState(0)
  useEffect(() => {
    if (window.matchMedia?.('(prefers-reduced-motion: reduce)').matches) { setC(LAST); return }
    const t = setInterval(() => setC(v => (v >= LAST + 2 ? 0 : v + 1)), 1300)
    const first = setTimeout(() => setC(1), 350)
    return () => { clearInterval(t); clearTimeout(first) }
  }, [])
  return Math.min(c, LAST)
}

function Runner({ tab, at }) {
  const cycle = useCycle()
  const c = at ?? cycle
  const Tab = HERO_TABS[tab] || WhatsAppTab
  return <Tab c={c} />
}

// Scales the 1080 x 634 window to the width it is given (never above 1). On phones that is about 0.29, like the
// reference, which shows the whole product picture small inside a 195px panel.
export default function HeroWindow({ tab, at }) {
  const outer = useRef(null)
  const [scale, setScale] = useState(1)
  useEffect(() => {
    const fit = () => setScale(Math.min(1, (outer.current?.clientWidth || 1080) / 1080))
    fit()
    const ro = new ResizeObserver(fit)
    outer.current && ro.observe(outer.current)
    return () => ro.disconnect()
  }, [])
  return (
    <div ref={outer} style={{ width: '100%', height: 634 * scale }}>
      <div style={{ width: 1080, height: 634, transform: `scale(${scale})`, transformOrigin: 'top left' }}><Runner key={tab} tab={tab} at={at} /></div>
    </div>
  )
}
