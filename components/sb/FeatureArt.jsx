'use client'

import { useEffect, useRef, useState } from 'react'
import { Check, Home, MessagesSquare, ShoppingBag, Megaphone, CalendarDays, ClipboardList, LayoutGrid, List, Search, Clock, MessageCircle, ArrowUp, Inbox, Camera } from 'lucide-react'

// The big picture in each feature card, built like Sunbeam's: a flat grained colour with soft clouds, and a product
// window that starts ~52px in and runs off the right and bottom. Design size 540 x 500; scaled to fit on small screens.
// Everything here uses inline styles so nothing depends on generated classes.

const INK = '#1a1a1a', GREY = '#8b8b92'
const abs = o => ({ position: 'absolute', ...o })
const flex = (o = {}) => ({ display: 'flex', alignItems: 'center', ...o })

const BASE = { purple: '#e4b5fd', blue: '#daedfe', lime: '#e6ff97' }
const CLOUD = { purple: 'rgba(215,150,250,.34)', blue: 'rgba(150,196,250,.36)', lime: 'rgba(190,240,70,.36)' }

function Cloud({ style, tint }) {
  return <div aria-hidden style={{ position: 'absolute', background: tint, WebkitMaskImage: 'url(/sb/cloud.png)', maskImage: 'url(/sb/cloud.png)', WebkitMaskSize: '100% 100%', maskSize: '100% 100%', WebkitMaskRepeat: 'no-repeat', maskRepeat: 'no-repeat', ...style }} />
}

const ICONS = [Home, MessagesSquare, ShoppingBag, Megaphone, CalendarDays, ClipboardList]

function Window({ title, active, pills, search, bare, children }) {
  return (
    <div style={abs({ left: 52, top: 58, width: 660, height: 560, borderTopLeftRadius: 16, background: '#f3f2f0', boxShadow: '0 20px 50px -20px rgba(60,40,120,.25)', overflow: 'hidden' })}>
      <div style={abs({ left: 0, top: 0, bottom: 0, width: 53, background: '#fafaf9', borderRight: '1px solid rgba(0,0,0,.03)' })}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/sb/faigen-logo.svg" alt="" style={abs({ left: 13, top: 16, width: 27, height: 27 })} />
        {ICONS.map((Ic, i) => (
          <span key={i} style={abs({ left: 9, top: 58 + i * 34, width: 35, height: 32, borderRadius: 10, background: i === active ? '#ebeae7' : 'transparent', ...flex({ justifyContent: 'center' }) })}><Ic size={17} strokeWidth={1.6} color={i === active ? INK : '#8d8d94'} /></span>
        ))}
      </div>
      <h4 className="font-heading" style={abs({ left: 93, top: 38, margin: 0, fontSize: 25, fontWeight: 500, lineHeight: 1.1, color: INK })}>{title}</h4>
      {!bare && <div style={abs({ left: 93, top: 94, ...flex({ gap: 14 }) })}>
        {pills.map(([Ic, label, on]) => (
          <span key={label} style={{ ...flex({ gap: 6 }), height: 32, padding: '0 14px', borderRadius: 16, fontSize: 12, color: INK, background: on ? '#ebeae7' : 'transparent', border: on ? '1px solid rgba(0,0,0,.05)' : '1px solid transparent' }}><Ic size={14} strokeWidth={1.7} />{label}</span>
        ))}
        <span style={{ ...flex({ gap: 6 }), height: 32, padding: '0 14px', width: 150, borderRadius: 16, fontSize: 11.5, color: GREY, border: '1px solid rgba(0,0,0,.09)', background: '#faf9f8' }}><Search size={13} strokeWidth={1.7} />{search}</span>
      </div>}
      <div style={abs({ left: 93, top: bare ? 92 : 138, right: 0, bottom: 0, ...(bare ? {} : { background: '#fff', borderTopLeftRadius: 14 }) })}>{children}</div>
    </div>
  )
}

// ── 1 · Live inbox (conversations as cards, like Sunbeam's task board) ──
function Chat({ tag, tagBg, text, meta, n, who, grad }) {
  return (
    <div style={{ background: '#fff', border: '1px solid rgba(0,0,0,.07)', borderRadius: 12, padding: '10px 11px', marginTop: 10, position: 'relative' }}>
      <span style={{ display: 'inline-block', fontSize: 9, lineHeight: 1, padding: '4px 9px', borderRadius: 11, background: tagBg, color: INK }}>{tag}</span>
      <p style={{ margin: '8px 0 0', fontSize: 11, lineHeight: 1.4, color: INK, paddingRight: 24 }}>{text}</p>
      <div style={{ ...flex({ gap: 10 }), marginTop: 8, fontSize: 9.5, color: '#a1a1aa' }}>
        <span style={flex({ gap: 3 })}><Clock size={10} />{meta}</span>
        <span style={flex({ gap: 3 })}><MessageCircle size={10} />{n}</span>
      </div>
      <span style={abs({ right: 9, bottom: 9, width: 20, height: 20, borderRadius: 10, background: grad, color: '#fff', fontSize: 9, fontWeight: 600, ...flex({ justifyContent: 'center' }) })}>{who}</span>
    </div>
  )
}
function Col({ title, count, bg, badge, children }) {
  return (
    <div style={{ width: 218, background: bg, borderRadius: 18, padding: '12px 11px 14px' }}>
      <div style={flex({ gap: 9, padding: '0 3px' })}><span style={{ fontSize: 13, fontWeight: 500, color: INK }}>{title}</span><span style={{ width: 22, height: 22, borderRadius: 11, background: badge, fontSize: 10.5, ...flex({ justifyContent: 'center' }) }}>{count}</span></div>
      {children}
    </div>
  )
}
function InboxWin() {
  return (
    <Window title="Live inbox" active={1} pills={[[LayoutGrid, 'Chats', true], [List, 'Orders']]} search="Search chats">
      <div style={{ ...flex({ alignItems: 'flex-start', gap: 12 }), padding: '14px 14px 0' }}>
        <Col title="AI replying" count="4" bg="#fafaf9" badge="#e9cbfb">
          <Chat tag="WhatsApp" tagBg="#cdf3d6" text="Price ethra aanu Coir Mat?" meta="3 sec" n={2} who="A" grad="linear-gradient(135deg,#9bbcf6,#7fa8ff)" />
          <Chat tag="Instagram" tagBg="#fbd3f3" text="Is the red bag still available?" meta="2 sec" n={1} who="P" grad="linear-gradient(135deg,#d79bf7,#a87bff)" />
          <Chat tag="WhatsApp" tagBg="#cdf3d6" text="Delivery Kochi undo?" meta="4 sec" n={3} who="F" grad="linear-gradient(135deg,#8fd9a8,#4cc07d)" />
        </Col>
        <Col title="Needs you" count="3" bg="#fafdea" badge="#e8fa8f">
          <Chat tag="Human hand-off" tagBg="#ffe2bd" text="Wants to talk to a person about a bulk order" meta="2 min" n={4} who="D" grad="linear-gradient(135deg,#f6a56b,#ef7d57)" />
          <Chat tag="Order" tagBg="#bddafb" text="Order #1048 collected, ready to confirm" meta="1 min" n={6} who="A" grad="linear-gradient(135deg,#9bbcf6,#7fa8ff)" />
        </Col>
      </div>
    </Window>
  )
}

// ── 2 · Instagram (comment-to-DM table, like Sunbeam's projects list) ──
const ROWS = [
  ['priya_crafts', 'price?', 'Replied', ['#7fb800', '#f3fbd8'], 'Details sent to DMs'],
  ['arjun.k', 'link please', 'DM sent', ['#2b8cf0', '#e9f3ff'], 'Buttons & menu'],
  ['free_followers_99', 'Get 10k followers!!', 'Hidden', ['#f59e0b', '#fff4e0'], 'Spam shield'],
  ['meera.s', 'size M available?', 'DM sent', ['#2b8cf0', '#e9f3ff'], 'Buttons & menu'],
  ['rahul_v', 'details', 'Replied', ['#7fb800', '#f3fbd8'], 'Details sent to DMs'],
  ['anu.thomas', 'where are you located?', 'DM sent', ['#2b8cf0', '#e9f3ff'], 'Location shared'],
  ['kochi_cafe', 'bulk price', 'Replied', ['#7fb800', '#f3fbd8'], 'Details sent to DMs'],
]
function InstaWin() {
  const cols = '230px 120px 190px'
  return (
    <Window title="Instagram" active={1} pills={[[Inbox, 'Comments', true], [Camera, 'Reels']]} search="Search comments">
      <div style={{ padding: '16px 14px 0' }}>
        <div style={{ display: 'grid', gridTemplateColumns: cols, height: 34, alignItems: 'center', padding: '0 14px', background: '#faf9f8', borderRadius: 10, fontSize: 12.5, fontWeight: 500, color: INK }}><span>Comment</span><span>Status</span><span>What Faigen did</span></div>
        {ROWS.map(([who, said, st, [c, bg], did]) => (
          <div key={who} style={{ display: 'grid', gridTemplateColumns: cols, height: 44, alignItems: 'center', padding: '0 14px', borderBottom: '1px solid rgba(0,0,0,.06)', fontSize: 12, color: INK }}>
            <span style={{ overflow: 'hidden', whiteSpace: 'nowrap', textOverflow: 'ellipsis', paddingRight: 8 }}><b style={{ fontWeight: 500 }}>{who}</b> <span style={{ color: GREY }}>“{said}”</span></span>
            <span><span style={{ fontSize: 11.5, fontWeight: 500, color: c, background: bg, padding: '4px 11px', borderRadius: 12 }}>{st}</span></span>
            <span style={{ color: '#6b6b72' }}>{did}</span>
          </div>
        ))}
      </div>
    </Window>
  )
}

// ── 3 · Campaigns (stat cards + replies chart, like Sunbeam's dashboard) ──
function Stat({ title, sub, value, bar, w, left }) {
  return (
    <div style={abs({ left, top: 0, width: 280, height: 76, background: '#fff', borderRadius: 14, padding: '12px 16px', boxShadow: '0 1px 0 rgba(0,0,0,.03)' })}>
      <div style={flex({ justifyContent: 'space-between' })}><span style={{ fontSize: 14, color: INK }}>{title}</span><span style={flex({ gap: 3, fontSize: 13 })}>{value}<ArrowUp size={12} color="#5ad07f" /></span></div>
      <p style={{ margin: '3px 0 0', fontSize: 10.5, color: '#a1a1aa' }}>{sub}</p>
      <div style={abs({ left: 16, right: 16, bottom: 12, height: 5, borderRadius: 3, background: '#efeff2' })}><div style={{ width: w, height: '100%', borderRadius: 3, background: bar }} /></div>
    </div>
  )
}
function CampWin() {
  return (
    <Window title="Campaigns" active={3} pills={[]} search="" bare>
      <div style={abs({ left: 0, top: 0, right: 0, bottom: 0 })}>
        <Stat title="Delivered" sub="Kochi Customer Meet · Invite" value="1,240" bar="#d3f56a" w="86%" left={0} />
        <Stat title="Interested" sub="Taps on the Interested button" value="212" bar="#d79bf7" w="52%" left={292} />
        <div style={abs({ left: 0, top: 90, width: 640, height: 400, background: '#fff', borderRadius: 14 })}>
          <p style={{ margin: 0, padding: '18px 20px 0', fontSize: 15, color: INK }}>Replies</p>
          <svg viewBox="0 0 640 300" width="640" height="300" style={abs({ left: 0, top: 50 })}>
            <defs>
              <linearGradient id="fa-b" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stopColor="#bfdcfb" stopOpacity=".35" /><stop offset="1" stopColor="#bfdcfb" stopOpacity="0" /></linearGradient>
              <linearGradient id="fa-g" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stopColor="#dcf86b" stopOpacity=".35" /><stop offset="1" stopColor="#dcf86b" stopOpacity="0" /></linearGradient>
            </defs>
            {[40, 130, 220, 310, 400, 490, 580].map(x => <line key={x} x1={x} x2={x} y1="20" y2="270" stroke="#e8e8ec" strokeDasharray="3 4" />)}
            <path d="M0 150 C40 120 90 200 150 215 C210 230 250 130 290 100 C330 70 370 140 410 190 C450 240 500 230 540 190 L640 170 L640 270 L0 270Z" fill="url(#fa-b)" />
            <path d="M0 150 C40 120 90 200 150 215 C210 230 250 130 290 100 C330 70 370 140 410 190 C450 240 500 230 540 190 L640 170" fill="none" stroke="#a9d3fb" strokeWidth="2.2" />
            <path d="M0 130 C60 130 120 170 170 210 C215 245 240 240 270 190 C310 120 340 60 390 70 C430 80 450 140 480 190 C510 235 560 245 640 260 L640 270 L0 270Z" fill="url(#fa-g)" />
            <path d="M0 130 C60 130 120 170 170 210 C215 245 240 240 270 190 C310 120 340 60 390 70 C430 80 450 140 480 190 C510 235 560 245 640 260" fill="none" stroke="#c9ee52" strokeWidth="2.4" />
            <circle cx="425" cy="88" r="7" fill="#d9f76a" opacity=".9" />
            <g transform="translate(445 82)"><rect width="150" height="54" rx="6" fill="#fff" stroke="#f0f0f3" /><text x="14" y="21" fontSize="11.5" fill="#8b8b92">Sat 21 Nov</text><text x="14" y="42" fontSize="16" fontWeight="600" fill="#1a1a1a">212 interested</text></g>
          </svg>
          <div style={abs({ left: 0, right: 0, bottom: 0, height: 36, borderTop: '1px solid #f0f0f3', ...flex({ justifyContent: 'space-around' }), fontSize: 11.5, color: '#8f8fa0' })}>{['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map(d => <span key={d} style={d === 'Sat' ? { color: INK, fontWeight: 500 } : undefined}>{d}</span>)}</div>
        </div>
      </div>
    </Window>
  )
}

function DashWin() {
  return (
    <Window title="Dashboard" active={0} pills={[]} search="" bare>
      <div style={abs({ left: 0, top: 0, right: 0, bottom: 0 })}>
        <Stat title="Conversations" sub="This week, answered by the AI" value="1,240" bar="#d3f56a" w="86%" left={0} />
        <Stat title="Orders" sub="Collected in chat" value="86" bar="#d79bf7" w="52%" left={292} />
        <div style={abs({ left: 0, top: 90, width: 640, height: 400, background: '#fff', borderRadius: 14 })}>
          <p style={{ margin: 0, padding: '18px 20px 0', fontSize: 15, color: INK }}>Orders</p>
          <svg viewBox="0 0 640 300" width="640" height="300" style={abs({ left: 0, top: 50 })}>
            <defs>
              <linearGradient id="fa-b" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stopColor="#bfdcfb" stopOpacity=".35" /><stop offset="1" stopColor="#bfdcfb" stopOpacity="0" /></linearGradient>
              <linearGradient id="fa-g" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stopColor="#dcf86b" stopOpacity=".35" /><stop offset="1" stopColor="#dcf86b" stopOpacity="0" /></linearGradient>
            </defs>
            {[40, 130, 220, 310, 400, 490, 580].map(x => <line key={x} x1={x} x2={x} y1="20" y2="270" stroke="#e8e8ec" strokeDasharray="3 4" />)}
            <path d="M0 150 C40 120 90 200 150 215 C210 230 250 130 290 100 C330 70 370 140 410 190 C450 240 500 230 540 190 L640 170 L640 270 L0 270Z" fill="url(#fa-b)" />
            <path d="M0 150 C40 120 90 200 150 215 C210 230 250 130 290 100 C330 70 370 140 410 190 C450 240 500 230 540 190 L640 170" fill="none" stroke="#a9d3fb" strokeWidth="2.2" />
            <path d="M0 130 C60 130 120 170 170 210 C215 245 240 240 270 190 C310 120 340 60 390 70 C430 80 450 140 480 190 C510 235 560 245 640 260 L640 270 L0 270Z" fill="url(#fa-g)" />
            <path d="M0 130 C60 130 120 170 170 210 C215 245 240 240 270 190 C310 120 340 60 390 70 C430 80 450 140 480 190 C510 235 560 245 640 260" fill="none" stroke="#c9ee52" strokeWidth="2.4" />
            <circle cx="425" cy="88" r="7" fill="#d9f76a" opacity=".9" />
            <g transform="translate(445 82)"><rect width="150" height="54" rx="6" fill="#fff" stroke="#f0f0f3" /><text x="14" y="21" fontSize="11.5" fill="#8b8b92">Saturday</text><text x="14" y="42" fontSize="16" fontWeight="600" fill="#1a1a1a">24 orders</text></g>
          </svg>
          <div style={abs({ left: 0, right: 0, bottom: 0, height: 36, borderTop: '1px solid #f0f0f3', ...flex({ justifyContent: 'space-around' }), fontSize: 11.5, color: '#8f8fa0' })}>{['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map(d => <span key={d} style={d === 'Sat' ? { color: INK, fontWeight: 500 } : undefined}>{d}</span>)}</div>
        </div>
      </div>
    </Window>
  )
}

// ── 4 · A conversation (used for the use-case cards): chat window with the customer's question, the agent's reply and the outcome ──
function ConvoWin({ data }) {
  const d = data || {}
  const bub = (me, text) => (
    <div style={{ alignSelf: me ? 'flex-end' : 'flex-start', maxWidth: '82%', background: me ? '#d9fdd3' : '#fff', border: me ? 0 : '1px solid rgba(0,0,0,.06)', borderRadius: me ? '12px 12px 4px 12px' : '12px 12px 12px 4px', padding: '9px 12px', fontSize: 12.5, lineHeight: 1.4, color: INK }}>{text}</div>
  )
  return (
    <Window title={d.title || 'Chats'} active={1} pills={[[MessagesSquare, 'Chats', true], [List, 'Orders']]} search="Search chats">
      <div style={{ padding: '16px 18px', width: 385, boxSizing: 'border-box' }}>
        <div style={{ ...flex({ gap: 8 }), fontSize: 11.5, color: GREY }}>
          <span style={{ width: 22, height: 22, borderRadius: 11, background: 'linear-gradient(135deg,#9bbcf6,#7fa8ff)', color: '#fff', fontSize: 10, ...flex({ justifyContent: 'center' }) }}>A</span>
          Anjali · WhatsApp <span style={{ background: '#e1f7e5', color: '#1d7a36', fontSize: 10, fontWeight: 500, padding: '3px 8px', borderRadius: 10 }}>AI is replying</span>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 10, marginTop: 14 }}>
          {bub(false, d.q)}
          {bub(true, d.a)}
          {bub(false, 'Yes please 👍')}
          {bub(true, 'Done! I have noted everything and will send the details now.')}
        </div>
        <div style={{ ...flex({ gap: 8 }), marginTop: 16, background: '#fafdea', border: '1px solid #ecf5b4', borderRadius: 12, padding: '10px 12px', fontSize: 12, fontWeight: 500 }}>
          <span style={{ width: 20, height: 20, borderRadius: 10, background: '#dbfc74', ...flex({ justifyContent: 'center' }) }}><Check size={12} strokeWidth={3} /></span>{d.done}
        </div>
      </div>
    </Window>
  )
}

const WINDOWS = { inbox: InboxWin, insta: InstaWin, campaigns: CampWin, dashboard: DashWin, convo: ConvoWin }
const TONE = { inbox: 'purple', insta: 'blue', campaigns: 'lime', dashboard: 'purple' }

export default function FeaturePanel({ kind, data }) {
  const outer = useRef(null)
  const [scale, setScale] = useState(1)
  useEffect(() => {
    const fit = () => setScale(Math.min(1, (outer.current?.clientWidth || 540) / 540))
    fit()
    const ro = new ResizeObserver(fit)
    outer.current && ro.observe(outer.current)
    return () => ro.disconnect()
  }, [])
  const tone = (data && data.tone) || TONE[kind], Win = WINDOWS[kind]
  return (
    <div ref={outer} style={{ position: 'relative', width: '100%', height: 500 * scale, borderRadius: 20, overflow: 'hidden', background: BASE[tone] }}>
      <div style={{ position: 'absolute', left: 0, top: 0, width: 540, height: 500, transform: `scale(${scale})`, transformOrigin: 'top left', overflow: 'hidden', background: BASE[tone] }}>
        <Cloud tint={CLOUD[tone]} style={{ left: -60, top: -40, width: 330, height: 165 }} />
        <Cloud tint={CLOUD[tone]} style={{ left: -20, top: 150, width: 240, height: 120 }} />
        <div aria-hidden style={{ position: 'absolute', inset: 0, backgroundImage: 'url(/sb/grain.png)', backgroundSize: '256px 256px', mixBlendMode: 'overlay', opacity: 0.3, pointerEvents: 'none' }} />
        <Win data={data} />
      </div>
    </div>
  )
}
