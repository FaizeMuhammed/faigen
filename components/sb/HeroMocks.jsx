'use client'

import { useEffect, useRef, useState } from 'react'
import { LayoutDashboard, Inbox, ShoppingBag, Megaphone, Settings, Search, Check, CheckCheck, Heart, MessageCircle, Send, Phone, Video, MoreHorizontal, Image as ImageIcon, Smile, Plus, ArrowUp, Bookmark } from 'lucide-react'
import { WhatsAppGlyph, InstagramGlyph } from '../site/FaigenMark'

// The product window shown in the home hero: a Faigen dashboard on a 1080 x 634 canvas, scaled to fit.
// Each tab shows the real thing it stands for: a WhatsApp chat, an Instagram comment-to-DM flow, orders from both
// channels, a broadcast with Interested buttons, and the live inbox. Inline styles throughout.

const INK = '#1a1a1a', GREY = '#8b8b92', LINE = 'rgba(0,0,0,.07)'
const abs = o => ({ position: 'absolute', ...o })
const row = (o = {}) => ({ display: 'flex', alignItems: 'center', ...o })
const col = (o = {}) => ({ display: 'flex', flexDirection: 'column', ...o })
const G = ({ C, s = 16 }) => <span style={{ display: 'inline-block', width: s, height: s, flexShrink: 0 }}><C className="h-full w-full" /></span>
const AV = ['linear-gradient(135deg,#9bbcf6,#7fa8ff)', 'linear-gradient(135deg,#f6a56b,#ef7d57)', 'linear-gradient(135deg,#d79bf7,#a87bff)', 'linear-gradient(135deg,#8fd9a8,#4cc07d)', 'linear-gradient(135deg,#f2a3c8,#e87fb0)']
const Avatar = ({ n, i = 0, s = 36, ig }) => (
  <span style={{ position: 'relative', width: s, height: s, borderRadius: s / 2, background: AV[i % 5], color: '#fff', fontSize: s * 0.38, fontWeight: 500, ...row({ justifyContent: 'center' }), flexShrink: 0 }}>
    {n[0].toUpperCase()}
    <span style={abs({ right: -3, bottom: -3, background: '#fff', borderRadius: 9, padding: 1.5, display: 'flex' })}><G C={ig ? InstagramGlyph : WhatsAppGlyph} s={s * 0.36} /></span>
  </span>
)
const Chip = ({ children, bg, color = INK, style }) => <span style={{ display: 'inline-block', fontSize: 11, fontWeight: 500, lineHeight: 1, padding: '5px 10px', borderRadius: 12, background: bg, color, whiteSpace: 'nowrap', ...style }}>{children}</span>

const NAV = [[LayoutDashboard, 'Dashboard'], [Inbox, 'Inbox'], [WhatsAppGlyph, 'WhatsApp', 1], [InstagramGlyph, 'Instagram', 1], [ShoppingBag, 'Orders'], [Megaphone, 'Broadcasts'], [Settings, 'Settings']]

// Something that appears at animation step k (fades and slides in), and stays
const fx = (c, k, extra = {}) => ({ opacity: c >= k ? 1 : 0, transform: c >= k ? 'none' : 'translateY(12px)', transition: 'opacity .5s ease, transform .5s ease', ...extra })

// The story each tab tells, in three steps. The animation moves through them and loops.
const step3 = c => (c <= 1 ? 0 : c <= 4 ? 1 : 2)

function Shell({ title, scenario, steps, c, active, children }) {
  const cur = step3(c)
  return (
    <div style={{ position: 'relative', width: 1080, height: 634, background: '#f3f2f0', borderRadius: 8, overflow: 'hidden', fontSize: 14, color: INK, boxShadow: '0 30px 80px -30px rgba(60,30,120,.45)' }}>
      <div style={abs({ left: 0, top: 0, bottom: 0, width: 76, background: '#fafaf9', borderRight: `1px solid ${LINE}` })}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/sb/faigen-logo.svg" alt="" style={abs({ left: 20, top: 18, width: 36, height: 36 })} />
        {NAV.map(([Ic, label, brand], i) => (
          <span key={label} title={label} style={abs({ left: 14, top: 84 + i * 50, width: 48, height: 42, borderRadius: 12, background: i === active ? '#ebeae7' : 'transparent', ...row({ justifyContent: 'center' }) })}>
            {brand ? <G C={Ic} s={20} /> : <Ic size={20} strokeWidth={1.6} color={i === active ? INK : '#8d8d94'} />}
          </span>
        ))}
      </div>
      <div style={abs({ left: 76, right: 0, top: 0, height: 72, ...row({ padding: '0 28px', gap: 24 }) })}>
        <div style={{ lineHeight: 1.15 }}>
          <span className="font-heading" style={{ fontSize: 25, fontWeight: 500 }}>{title}</span>
          <div style={{ marginTop: 4, fontSize: 12.5, color: GREY, whiteSpace: 'nowrap' }}><b style={{ fontWeight: 500, color: '#5c5c63' }}>Use case:</b> {scenario}</div>
        </div>
        <div style={{ ...row({ gap: 8 }), marginLeft: 'auto' }}>
          {steps.map((label, i) => {
            const on = i === cur, done = i < cur
            return (
              <span key={label} style={{ ...row({ gap: 8 }), height: 36, padding: '0 14px 0 8px', borderRadius: 18, fontSize: 13, background: on ? INK : '#fff', color: on ? '#fff' : '#52525b', border: `1px solid ${on ? INK : LINE}`, transition: 'all .4s' }}>
                <span style={{ width: 22, height: 22, borderRadius: 11, background: done ? '#dbfc74' : on ? '#fff' : '#f0eeeb', color: INK, fontSize: 11.5, fontWeight: 600, ...row({ justifyContent: 'center' }), transition: 'all .4s' }}>{done ? <Check size={12} strokeWidth={3} /> : i + 1}</span>{label}
              </span>
            )
          })}
        </div>
        <span style={{ width: 34, height: 34, borderRadius: 17, background: AV[2], color: '#fff', fontSize: 13, fontWeight: 500, ...row({ justifyContent: 'center' }) }}>K</span>
      </div>
      <div style={abs({ left: 76, right: 0, top: 72, bottom: 0, padding: '0 20px 0 20px' })}>{children}</div>
    </div>
  )
}

// ── WhatsApp: a customer asks in Manglish, the AI answers, and an order is collected ──
const CHATS = [['Anjali', 'Price ethra aanu Coir Mat?', '10:41', 2, true], ['Rahul', 'Is this available in black?', '10:32', 0], ['Fathima', 'Delivery Kochi undo?', '10:20', 1], ['Joseph', 'Order cheyyanam 🙌', '9:58', 0], ['Meera', 'Do you have size M?', '9:41', 0]]
function Bub({ me, children, t, c, k }) {
  return <div style={fx(c, k, { alignSelf: me ? 'flex-end' : 'flex-start', maxWidth: '76%', background: me ? '#d9fdd3' : '#fff', borderRadius: me ? '10px 10px 3px 10px' : '10px 10px 10px 3px', padding: '8px 11px 5px', fontSize: 14, lineHeight: 1.35, boxShadow: '0 1px 1px rgba(11,20,26,.1)' })}>{children}<span style={{ display: 'block', textAlign: 'right', fontSize: 10.5, color: '#667781', marginTop: 2 }}>{t}{me && <CheckCheck size={13} color="#53bdeb" style={{ marginLeft: 4, verticalAlign: -2 }} />}</span></div>
}
function WhatsAppTab({ c }) {
  const typing = c === 1 || c === 3
  return (
    <Shell c={c} title="WhatsApp" scenario="a shop gets a price question late at night" steps={['Customer asks', 'AI replies', 'Order collected']} active={2}>
      <div style={abs({ left: 20, top: 0, width: 280, bottom: 0, background: '#fff', borderRadius: '14px 0 0 0', borderRight: `1px solid ${LINE}`, overflow: 'hidden' })}>
        {CHATS.map(([n, m, t, u], i) => (
          <div key={n} style={{ ...row({ gap: 12, padding: '13px 16px' }), background: i === 0 ? '#f5f7f5' : 'transparent', borderBottom: `1px solid ${LINE}` }}>
            <Avatar n={n} i={i} s={42} />
            <div style={{ flex: 1, minWidth: 0 }}><div style={row({ justifyContent: 'space-between' })}><b style={{ fontWeight: 500, fontSize: 14.5 }}>{n}</b><span style={{ fontSize: 11, color: u ? '#25a352' : GREY }}>{t}</span></div><div style={row({ justifyContent: 'space-between', marginTop: 4 })}><span style={{ fontSize: 12.5, color: GREY, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{i === 0 && c >= 5 ? 'Order #1048 collected ✓' : m}</span>{u > 0 && <span style={{ minWidth: 18, height: 18, borderRadius: 9, background: '#25d366', color: '#fff', fontSize: 11, ...row({ justifyContent: 'center' }), marginLeft: 8 }}>{u}</span>}</div></div>
          </div>
        ))}
      </div>
      <div style={abs({ left: 300, top: 0, width: 440, bottom: 0, background: '#efeae2', overflow: 'hidden' })}>
        <div style={{ ...row({ gap: 12, padding: '12px 18px' }), background: '#fff', borderBottom: `1px solid ${LINE}` }}>
          <Avatar n="Anjali" s={38} /><div style={{ lineHeight: 1.2 }}><b style={{ fontWeight: 500, fontSize: 15 }}>Anjali</b><div style={{ fontSize: 12, color: '#1d7a36' }}>{typing ? 'AI is replying…' : 'online'}</div></div>
          <span style={{ marginLeft: 'auto', ...row({ gap: 14 }), color: '#667781' }}><Video size={18} /><Phone size={17} /><MoreHorizontal size={18} /></span>
        </div>
        <div style={{ ...col({ gap: 9 }), padding: '16px 18px' }}>
          <Bub c={c} k={1} t="10:41">Price ethra aanu Coir Mat?</Bub>
          <Bub c={c} k={2} me t="10:41">₹600 aanu 😊 45 stock undu. Ethra venam?</Bub>
          <Bub c={c} k={3} t="10:42">2 venam. Kakkanad delivery undo?</Bub>
          <Bub c={c} k={3.5} me t="10:42">Undu, 2 days-il ethum 🚚 Name and address ayakkamo?</Bub>
          <Bub c={c} k={4} t="10:43">Anjali, Kakkanad 682030</Bub>
          <div style={fx(c, 5, { alignSelf: 'center', ...row({ gap: 8 }), background: '#dbfc74', borderRadius: 14, padding: '8px 14px', fontSize: 13, fontWeight: 500 })}><Check size={15} strokeWidth={3} />Order #1048 collected by the AI</div>
        </div>
        <div style={abs({ left: 14, right: 14, bottom: 14, height: 44, borderRadius: 22, background: '#fff', ...row({ padding: '0 8px 0 16px', gap: 12 }) })}><Smile size={20} color="#8696a0" /><span style={{ fontSize: 14, color: '#8696a0', flex: 1 }}>Type a message</span><span style={{ width: 32, height: 32, borderRadius: 16, background: '#25d366', ...row({ justifyContent: 'center' }) }}><Send size={15} color="#fff" /></span></div>
      </div>
      <div style={abs({ left: 740, right: 0, top: 0, bottom: 0, background: '#fff', borderRadius: '0 14px 0 0', padding: 20, ...col({ gap: 14 }) })}>
        <div style={fx(c, 5, { border: `1px solid ${LINE}`, borderRadius: 14, padding: 16 })}>
          <div style={row({ justifyContent: 'space-between' })}><b className="font-heading" style={{ fontSize: 17, fontWeight: 500 }}>Order #1048</b><Chip bg="#fff1cf" color="#9a6b00">Pending</Chip></div>
          <p style={{ margin: '10px 0 0', color: GREY, fontSize: 13 }}>2 × Premium Coir Mat</p>
          <div style={{ height: 1, background: LINE, margin: '12px 0' }} />
          <div style={row({ justifyContent: 'space-between', fontSize: 15 })}><span style={{ color: GREY }}>Total</span><b style={{ fontWeight: 600 }}>₹1,200</b></div>
          <p style={{ margin: '10px 0 0', ...row({ gap: 5 }), fontSize: 12.5, color: '#1d7a36' }}><Check size={14} />Collected by the AI</p>
        </div>
        <div style={{ border: `1px solid ${LINE}`, borderRadius: 14, padding: 16 }}>
          <b style={{ fontWeight: 500, fontSize: 15 }}>Anjali</b>
          <p style={{ margin: '4px 0 0', fontSize: 12.5, color: GREY }}>+91 98••• ••21 · Kakkanad</p>
          <div style={row({ justifyContent: 'space-between', marginTop: 14 })}><Chip bg="#e8f1ff" color="#1c5fd4">New customer</Chip><span style={{ background: INK, color: '#fff', borderRadius: 18, padding: '9px 16px', fontSize: 13 }}>Take over</span></div>
        </div>
        <p style={fx(c, 5, { margin: 0, fontSize: 12.5, lineHeight: 1.45, color: '#52525b', background: '#fafdea', border: '1px solid #ecf5b4', borderRadius: 12, padding: '10px 12px' })}>Answered in 3 seconds, at 10:41 PM, with nobody on shift.</p>
      </div>
    </Shell>
  )
}

// ── Instagram: a comment on a Reel becomes a DM with buttons, then a sale ──
const COMMENTS = [['priya_crafts', 'price?', 'DM sent', ['#2b8cf0', '#e9f3ff'], 1], ['arjun.k', 'link please', 'DM sent', ['#2b8cf0', '#e9f3ff'], 0], ['free_followers_99', 'Get 10k followers!!', 'Hidden', ['#c77a00', '#fff1d6'], 0], ['meera.s', 'size M available?', 'Replied', ['#5c9a00', '#f1fbd2'], 0]]
function InstagramTab({ c }) {
  const grad = 'linear-gradient(135deg,#7b5cff,#c04fd8)'
  return (
    <Shell c={c} title="Instagram" scenario="a boutique turns Reel comments into customers" steps={['Comment on a Reel', 'Faigen DMs back', 'Customer taps a button']} active={3}>
      <div style={abs({ left: 20, top: 0, width: 430, bottom: 0, background: '#fff', borderRadius: '14px 0 0 0', padding: 20, overflow: 'hidden' })}>
        <div style={row({ gap: 14 })}>
          <div style={{ width: 86, height: 108, borderRadius: 12, background: 'linear-gradient(160deg,#feda75,#fa7e1e 35%,#d62976 65%,#962fbf)', position: 'relative', flexShrink: 0 }}><span style={abs({ left: 8, bottom: 8, fontSize: 11, color: '#fff', fontWeight: 600 })}>▶ Reel</span></div>
          <div><div style={row({ gap: 8 })}><span style={{ width: 28, height: 28, borderRadius: 14, padding: 2, background: 'linear-gradient(45deg,#feda75,#d62976,#962fbf)' }}><span style={{ display: 'block', width: '100%', height: '100%', borderRadius: 12, background: '#fff', border: '2px solid #fff' }} /></span><b style={{ fontWeight: 500 }}>keralacoir.co</b></div>
            <p style={{ margin: '8px 0 0', fontSize: 13.5, lineHeight: 1.4 }}>New arrivals ✨ Comment <b>PRICE</b> and we’ll DM the price list.</p>
            <div style={{ ...row({ gap: 14 }), marginTop: 10, color: GREY, fontSize: 12.5 }}><span style={row({ gap: 4 })}><Heart size={14} />1.2k</span><span style={row({ gap: 4 })}><MessageCircle size={14} />{148 + (c >= 1 ? 1 : 0)}</span><Bookmark size={14} /></div></div>
        </div>
        <div style={{ height: 1, background: LINE, margin: '16px 0 6px' }} />
        {COMMENTS.map(([u, cm, st, [fg, bg], first], i) => (
          <div key={u} style={{ ...row({ gap: 11, padding: '11px 0' }), borderBottom: i < 3 ? `1px solid ${LINE}` : 0, ...(first ? fx(c, 1) : {}) }}>
            <span style={{ width: 32, height: 32, borderRadius: 16, background: AV[i + 1], flexShrink: 0 }} />
            <div style={{ flex: 1, fontSize: 13.5 }}><b style={{ fontWeight: 500 }}>{u}</b> <span style={{ color: '#52525b' }}>{cm}</span>{first ? <div style={fx(c, 2, { marginTop: 4, fontSize: 12.5, color: '#6b3fc4' })}>↳ keralacoir.co: “Check your DMs 📩”</div> : null}</div>
            {first ? <span style={fx(c, 2)}><Chip bg={bg} color={fg}>{st}</Chip></span> : <Chip bg={bg} color={fg}>{st}</Chip>}
          </div>
        ))}
        <div style={fx(c, 6, { ...row({ gap: 8 }), marginTop: 12, background: '#fafdea', border: '1px solid #ecf5b4', borderRadius: 12, padding: '10px 12px', fontSize: 12.5 })}><span style={{ width: 20, height: 20, borderRadius: 10, background: '#dbfc74', ...row({ justifyContent: 'center' }) }}><Check size={12} strokeWidth={3} /></span>128 comments turned into DMs today</div>
      </div>
      <div style={abs({ left: 450, right: 0, top: 0, bottom: 0, background: '#fff', borderRadius: '0 14px 0 0', borderLeft: `1px solid ${LINE}`, overflow: 'hidden' })}>
        <div style={{ ...row({ gap: 12, padding: '14px 20px' }), borderBottom: `1px solid ${LINE}` }}>
          <span style={{ width: 38, height: 38, borderRadius: 19, padding: 2, background: 'linear-gradient(45deg,#feda75,#d62976,#962fbf)' }}><span style={{ display: 'flex', width: '100%', height: '100%', borderRadius: 17, background: AV[2], color: '#fff', alignItems: 'center', justifyContent: 'center', border: '2px solid #fff', fontSize: 14 }}>P</span></span>
          <div style={{ lineHeight: 1.2 }}><b style={{ fontWeight: 500 }}>priya_crafts</b><div style={{ fontSize: 12, color: GREY }}>Instagram · from your Reel</div></div>
          <span style={{ marginLeft: 'auto' }}><Chip bg="#f3e8ff" color="#7a3cc4">AI is replying</Chip></span>
        </div>
        <div style={{ ...col({ gap: 10 }), padding: '18px 20px' }}>
          <div style={fx(c, 3, { alignSelf: 'flex-end', maxWidth: '82%', background: grad, color: '#fff', borderRadius: 20, padding: '10px 15px', fontSize: 14, lineHeight: 1.4 })}>Hi Priya 👋 Thanks for commenting! Which one would you like to know more about?</div>
          <div style={fx(c, 4, { alignSelf: 'flex-end', ...row({ gap: 8 }) })}>{['Price list', 'Location', 'Talk to a person'].map(b => <span key={b} style={{ border: `1px solid ${b === 'Price list' && c >= 5 ? '#6b3fc4' : '#cdb6f5'}`, background: b === 'Price list' && c >= 5 ? '#6b3fc4' : '#fff', color: b === 'Price list' && c >= 5 ? '#fff' : '#6b3fc4', borderRadius: 18, padding: '8px 14px', fontSize: 13, transition: 'all .4s' }}>{b}</span>)}</div>
          <div style={fx(c, 5, { alignSelf: 'flex-start', background: '#efefef', borderRadius: 20, padding: '10px 15px', fontSize: 14 })}>Price list</div>
          <div style={fx(c, 5.5, { alignSelf: 'flex-end', maxWidth: '82%', background: grad, color: '#fff', borderRadius: 20, padding: '10px 15px', fontSize: 14, lineHeight: 1.4 })}>Tote ₹899 · Sling ₹1,199 · Backpack ₹1,799. Shall I place an order?</div>
          <div style={fx(c, 6, { alignSelf: 'flex-start', background: '#efefef', borderRadius: 20, padding: '10px 15px', fontSize: 14 })}>Sling bag please 🙌</div>
        </div>
        <div style={abs({ left: 20, right: 20, bottom: 16, height: 42, borderRadius: 21, border: `1px solid ${LINE}`, ...row({ padding: '0 14px', gap: 10 }), color: GREY, fontSize: 13.5 })}><Smile size={18} />Message…<span style={{ marginLeft: 'auto', ...row({ gap: 10 }) }}><ImageIcon size={18} /><Heart size={18} /></span></div>
      </div>
    </Shell>
  )
}

// ── Orders: chats from both channels turn into orders, one after another ──
const ORDERS = [['#1048', 'Anjali', 'WhatsApp', '2 × Premium Coir Mat', '₹1,200', 'Pending', ['#9a6b00', '#fff1cf']], ['#1047', 'priya_crafts', 'Instagram', 'Sling bag', '₹1,199', 'Confirmed', ['#1d7a36', '#e1f7e5']], ['#1046', 'Rahul', 'WhatsApp', 'Coir Doormat (black)', '₹450', 'Shipped', ['#1c5fd4', '#e8f1ff']], ['#1045', 'Fathima', 'WhatsApp', '3 × Coir Mat', '₹1,800', 'Confirmed', ['#1d7a36', '#e1f7e5']], ['#1044', 'arjun.k', 'Instagram', 'Tote bag', '₹899', 'Shipped', ['#1c5fd4', '#e8f1ff']]]
function Stat({ label, value, sub, bar, w, left, width = 224 }) {
  return <div style={abs({ left, top: 0, width, height: 92, background: '#fff', borderRadius: 14, padding: '14px 16px' })}><div style={row({ justifyContent: 'space-between' })}><span style={{ fontSize: 13.5, color: '#52525b' }}>{label}</span><span style={{ ...row({ gap: 3 }), fontSize: 15, fontWeight: 500 }}>{value}{sub && <ArrowUp size={12} color="#5ad07f" />}</span></div><div style={abs({ left: 16, right: 16, bottom: 16, height: 5, borderRadius: 3, background: '#efeff2' })}><div style={{ width: w, height: '100%', borderRadius: 3, background: bar, transition: 'width .6s ease' }} /></div></div>
}
function OrdersTab({ c }) {
  const n = Math.min(c, 5)
  return (
    <Shell c={c} title="Orders" scenario="WhatsApp and Instagram chats become orders on their own" steps={['Customers chat', 'AI collects details', 'Orders arrive']} active={4}>
      <div style={{ position: 'relative', height: 92 }}>
        <Stat left={0} label="Orders today" value={19 + n} sub bar="#d3f56a" w={`${40 + n * 8}%`} />
        <Stat left={236} label="Revenue" value={`₹${(30.2 + n * 1.6).toFixed(1)}k`} sub bar="#d79bf7" w={`${30 + n * 7}%`} />
        <Stat left={472} label="Via WhatsApp" value={14 + Math.round(n * 0.8)} bar="#7be08f" w={`${50 + n * 4}%`} />
        <Stat left={708} label="Via Instagram" value={5 + (n >= 2 ? 1 : 0)} bar="#f6a5d0" w={`${20 + (n >= 2 ? 6 : 0)}%`} width={232} />
      </div>
      <div style={abs({ left: 20, right: 0, top: 112, bottom: 0, background: '#fff', borderRadius: '14px 0 0 0', padding: '8px 20px' })}>
        <div style={{ display: 'grid', gridTemplateColumns: '90px 170px 150px 1fr 110px 120px', height: 44, alignItems: 'center', fontSize: 13, fontWeight: 500, color: GREY, borderBottom: `1px solid ${LINE}` }}><span>Order</span><span>Customer</span><span>Channel</span><span>Items</span><span>Total</span><span>Status</span></div>
        {ORDERS.map((o, i) => [o, i]).filter(([, i]) => c >= 5 - i).map(([[id, nm, ch, it, tot, st, [fg, bg]], i], idx, arr) => (
          <div key={id} style={{ display: 'grid', gridTemplateColumns: '90px 170px 150px 1fr 110px 120px', height: 56, alignItems: 'center', fontSize: 14, borderBottom: idx < arr.length - 1 ? `1px solid ${LINE}` : 0, background: idx === 0 ? '#fcfff0' : 'transparent', animation: idx === 0 && c > 1 ? 'sbRowIn .5s ease' : undefined }}>
            <b style={{ fontWeight: 500 }}>{id}</b><span>{nm}</span><span style={row({ gap: 7 })}><G C={ch === 'WhatsApp' ? WhatsAppGlyph : InstagramGlyph} s={18} />{ch}</span><span style={{ color: '#52525b' }}>{it}</span><b style={{ fontWeight: 500 }}>{tot}</b><span><Chip bg={bg} color={fg}>{st}</Chip></span>
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
    <Shell c={c} title="Broadcasts" scenario="an event invite that finds the people who want to come" steps={['Send the offer', 'People tap Interested', 'Follow up the leads']} active={5}>
      <div style={abs({ left: 20, top: 0, width: 330, bottom: 0, background: '#efeae2', borderRadius: '14px 0 0 0', padding: 22, overflow: 'hidden' })}>
        <p style={{ margin: '0 0 12px', fontSize: 12.5, color: '#667781', ...row({ gap: 6 }) }}><G C={WhatsAppGlyph} s={15} />Template preview</p>
        <div style={fx(c, 1, { background: '#fff', borderRadius: '4px 14px 14px 14px', padding: 6, boxShadow: '0 1px 2px rgba(11,20,26,.12)' })}>
          <div style={{ height: 150, borderRadius: 10, background: 'linear-gradient(135deg,#c8fb68,#9be05a 55%,#f2f98a)', position: 'relative' }}><span className="font-heading" style={abs({ left: 16, bottom: 14, fontSize: 22, fontWeight: 500, lineHeight: 1.1 })}>FinFest v.2<br />Thrissur</span></div>
          <p style={{ margin: '10px 8px 4px', fontSize: 13.5, lineHeight: 1.4 }}>You’re invited! Join us on Sat 21 Nov for talks on investing, mutual funds and more.</p>
          <span style={{ display: 'block', textAlign: 'right', fontSize: 10.5, color: '#667781', margin: '0 8px 6px' }}>10:00 AM</span>
        </div>
        {['Interested', 'Not interested'].map(b => <div key={b} style={fx(c, 1, { marginTop: 6, background: b === 'Interested' && c >= 3 ? '#0a7cff' : '#fff', borderRadius: 10, padding: '11px 0', textAlign: 'center', fontSize: 14, color: b === 'Interested' && c >= 3 ? '#fff' : '#0a7cff', boxShadow: '0 1px 2px rgba(11,20,26,.12)' })}>↩ {b}</div>)}
      </div>
      <div style={abs({ left: 350, right: 0, top: 0, bottom: 0, background: '#fff', borderRadius: '0 14px 0 0', padding: 22 })}>
        <div style={row({ justifyContent: 'space-between' })}><b className="font-heading" style={{ fontSize: 19, fontWeight: 500 }}>Kochi Customer Meet · Invite</b><span style={fx(c, 1)}><Chip bg="#e1f7e5" color="#1d7a36">Sent</Chip></span></div>
        <div style={{ ...row({ gap: 12 }), marginTop: 16 }}>
          {[['Delivered', c >= 2 ? '1,240' : '0', '#d3f56a', c >= 2 ? '92%' : '0%'], ['Read', c >= 2 ? '912' : '0', '#bfdcfb', c >= 2 ? '68%' : '0%'], ['Interested', String(taps), '#d79bf7', c >= 3 ? '16%' : '0%']].map(([l, v, col2, w]) => (
            <div key={l} style={{ flex: 1, background: '#f8f6f4', borderRadius: 14, padding: '14px 16px' }}><span style={{ fontSize: 13, color: '#52525b' }}>{l}</span><div className="font-heading" style={{ fontSize: 30, fontWeight: 500, marginTop: 4, lineHeight: 1.1 }}>{v}</div><div style={{ height: 5, borderRadius: 3, background: '#e9e6e1', marginTop: 12 }}><div style={{ width: w, height: '100%', borderRadius: 3, background: col2, transition: 'width .8s ease' }} /></div></div>
          ))}
        </div>
        <p style={fx(c, 3, { margin: '20px 0 8px', fontSize: 14, fontWeight: 500 })}>People who tapped Interested</p>
        {leads.map(([nm, ph, t], i) => (
          <div key={nm} style={fx(c, 3 + i, { ...row({ gap: 12, padding: '10px 0' }), borderTop: `1px solid ${LINE}` })}><Avatar n={nm} i={i} s={34} /><b style={{ fontWeight: 500, width: 90 }}>{nm}</b><span style={{ color: GREY, fontSize: 13, flex: 1 }}>{ph}</span><span style={{ color: GREY, fontSize: 12.5 }}>{t}</span><Chip bg="#f3e8ff" color="#7a3cc4">Interested</Chip></div>
        ))}
        <div style={fx(c, 6, { marginTop: 14, ...row({ gap: 8 }), fontSize: 13, color: '#52525b' })}><span style={{ background: INK, color: '#fff', borderRadius: 16, padding: '8px 14px' }}>Download Interested list</span>Your team can call them today.</div>
      </div>
    </Shell>
  )
}

// ── Live inbox: the AI handles it, flags a person, and you take over ──
function InboxCard({ n, i, ig, tag, tagBg, text, meta, style }) {
  return <div style={{ background: '#fff', border: `1px solid ${LINE}`, borderRadius: 14, padding: 13, marginTop: 10, ...style }}><div style={row({ gap: 10 })}><Avatar n={n} i={i} s={32} ig={ig} /><b style={{ fontWeight: 500, fontSize: 14 }}>{n}</b><span style={{ marginLeft: 'auto' }}><Chip bg={tagBg}>{tag}</Chip></span></div><p style={{ margin: '10px 0 0', fontSize: 13.5, lineHeight: 1.4, color: '#3f3f46' }}>{text}</p><p style={{ margin: '8px 0 0', fontSize: 11.5, color: GREY }}>{meta}</p></div>
}
function InboxTab({ c }) {
  const Col = ({ t, count, bg, badge, children }) => <div style={{ flex: 1, background: bg, borderRadius: 18, padding: '14px 14px 16px' }}><div style={row({ gap: 9, padding: '0 3px' })}><b style={{ fontWeight: 500, fontSize: 15 }}>{t}</b><span style={{ width: 24, height: 24, borderRadius: 12, background: badge, fontSize: 12, ...row({ justifyContent: 'center' }) }}>{count}</span></div>{children}</div>
  const danielHere = c >= 2 // moves to "Needs you" at step 2
  const taken = c >= 4
  return (
    <Shell c={c} title="Live inbox" scenario="the AI handles chats, and calls you only when it matters" steps={['AI replies', 'A person is needed', 'You take over']} active={1}>
      <div style={abs({ left: 20, right: 0, top: 0, bottom: 0, background: '#fff', borderRadius: '14px 0 0 0', padding: 18, ...row({ gap: 14, alignItems: 'flex-start' }) })}>
        <Col t="AI replying" count={danielHere ? 3 : 4} bg="#fafaf9" badge="#e9cbfb">
          <InboxCard n="Anjali" i={0} tag="WhatsApp" tagBg="#cdf3d6" text="Price ethra aanu Coir Mat?" meta="3 sec · Order forming" />
          <InboxCard n="priya_crafts" i={2} ig tag="Instagram" tagBg="#fbd3f3" text="Is the red bag still available?" meta="2 sec · from a Reel comment" />
          <InboxCard n="Fathima" i={3} tag="WhatsApp" tagBg="#cdf3d6" text="Delivery Kochi undo?" meta="4 sec" />
          {!danielHere && <InboxCard n="Daniel" i={1} tag="WhatsApp" tagBg="#cdf3d6" text="I want 200 mats for my hotel. Can you give a bulk price?" meta="AI is replying…" style={fx(c, 1)} />}
        </Col>
        <Col t="Needs you" count={danielHere ? (taken ? 3 : 4) : 3} bg="#fafdea" badge="#e8fa8f">
          {danielHere && !taken && <InboxCard n="Daniel" i={1} tag="Human hand-off" tagBg="#ffe2bd" text="Wants a bulk price. The AI passed this chat to you." meta="Waiting 1 min" style={fx(c, 2, { borderColor: '#f3c98b', boxShadow: '0 0 0 3px rgba(255,200,120,.25)' })} />}
          <InboxCard n="meera.s" i={4} ig tag="Instagram" tagBg="#fbd3f3" text="Can I change the delivery address?" meta="Waiting 1 min" />
          <InboxCard n="Joseph" i={2} tag="Human hand-off" tagBg="#ffe2bd" text="Needs to speak about a refund" meta="Waiting 4 min" />
        </Col>
        <Col t={taken ? 'You’re replying' : 'Done today'} count={taken ? 1 : 18} bg={taken ? '#f1f7ff' : '#f5f8ff'} badge="#cfe3ff">
          {taken ? (
            <>
              <InboxCard n="Daniel" i={1} tag="You took over" tagBg="#cfe3ff" text="Hi Daniel, I’m Kiran from Kerala Coir. For 200 mats I can offer ₹520 each." meta="AI is paused for this chat" style={fx(c, 4)} />
              <p style={fx(c, 5, { margin: '12px 3px 0', fontSize: 12.5, lineHeight: 1.45, color: '#52525b' })}>Hand it back to the AI any time, from the same screen.</p>
            </>
          ) : (
            <>
              <InboxCard n="Rahul" i={3} tag="Order placed" tagBg="#bddafb" text="Order #1046 confirmed · ₹450" meta="12 min ago" />
              <InboxCard n="Joseph" i={2} tag="Order placed" tagBg="#bddafb" text="Order #1045 confirmed · ₹1,800" meta="25 min ago" />
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

// Scales the 1080 x 634 window to the width it is given (never above 1), keeping its own height
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
