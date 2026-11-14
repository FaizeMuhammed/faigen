'use client'

import { useState } from 'react'
import { Zap, ShoppingBag, SlidersHorizontal } from 'lucide-react'
import { Wrap } from './ui'
import { FaceDisc } from './art'
import { WhatsAppGlyph, InstagramGlyph } from '../site/FaigenMark'

// Three cards in a #f0eeeb tray: one open (537px, with its picture), two closed (316px). Hover or tap to open another.
const ITEMS = [
  { face: 'blue', Icon: Zap, t: 'Never miss a message', d: 'Every question gets a reply in seconds, day or night, in the language the customer wrote in.', tone: '#daedfe', art: 'chat' },
  { face: 'violet', Icon: ShoppingBag, t: 'Turn chats into orders', d: 'The agent answers from your catalog, collects name, product, quantity and address, and hands you a finished order.', tone: '#d791f9', art: 'order' },
  { face: 'lime', Icon: SlidersHorizontal, t: 'Stay in control', d: 'Watch every chat live, take over any conversation, and hand it back to the AI whenever you want.', tone: '#c1f744', art: 'control' },
]

// Film grain like the reference: a fine noise tile blended over the flat colour
function Texture() {
  return <div aria-hidden style={{ position: 'absolute', inset: 0, pointerEvents: 'none', backgroundImage: 'url(/sb/grain.png)', backgroundSize: '256px 256px', mixBlendMode: 'overlay', opacity: 0.34 }} />
}

// Pictures inside the cards. All layout and sizes here are inline styles (no utility classes), so they cannot go missing.
const SHADOW = '0 16px 36px -12px rgba(30,50,110,.28), 0 2px 6px rgba(30,50,110,.06)'
const abs = o => ({ position: 'absolute', ...o })
const row = (o = {}) => ({ display: 'flex', alignItems: 'center', ...o })
const Glyph = ({ G, size = 12 }) => <span style={{ display: 'inline-block', width: size, height: size, flexShrink: 0 }}><G className="h-full w-full" /></span>

// Soft tone-on-tone clouds baked into each Sunbeam picture (darker on blue and purple, lighter on lime)
function Cloud({ style, tint }) {
  return <div aria-hidden style={{ position: 'absolute', background: tint, WebkitMaskImage: 'url(/sb/cloud.png)', maskImage: 'url(/sb/cloud.png)', WebkitMaskSize: '100% 100%', maskSize: '100% 100%', WebkitMaskRepeat: 'no-repeat', maskRepeat: 'no-repeat', ...style }} />
}

// A real WhatsApp conversation: customer in white, the agent's reply in green
function Bubble({ me, children, time }) {
  return (
    <div style={{ alignSelf: me ? 'flex-end' : 'flex-start', maxWidth: '80%', background: me ? '#d9fdd3' : '#fff', borderRadius: me ? '10px 10px 3px 10px' : '10px 10px 10px 3px', padding: '6px 9px 4px', fontSize: 11.5, lineHeight: 1.35, color: '#111b21', boxShadow: '0 1px 1px rgba(11,20,26,.1)' }}>
      {children}
      <span style={{ display: 'block', textAlign: 'right', fontSize: 8.5, color: '#667781', marginTop: 1 }}>{time}{me && <span style={{ color: '#53bdeb', marginLeft: 3 }}>✓✓</span>}</span>
    </div>
  )
}

function ChatArt() {
  return (
    <>
      <Cloud style={{ left: -34, top: -8, width: 200, height: 100 }} tint="rgba(143,190,248,.42)" />
      <Cloud style={{ right: -44, bottom: -22, width: 240, height: 120 }} tint="rgba(143,190,248,.42)" />
      <div style={abs({ left: 16, top: 30, width: 235, height: 352, borderRadius: 22, background: '#efeae2', boxShadow: SHADOW, overflow: 'hidden' })}>
        <div style={row({ height: 48, background: '#fff', padding: '0 12px', gap: 8, borderBottom: '1px solid rgba(0,0,0,.05)' })}>
          <span style={{ width: 28, height: 28, borderRadius: 14, background: 'linear-gradient(135deg,#9bbcf6,#c797f7)', color: '#fff', fontSize: 11, fontWeight: 500, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>K</span>
          <span style={{ display: 'flex', flexDirection: 'column', gap: 2 }}><span style={{ fontSize: 11.5, fontWeight: 500, lineHeight: 1, color: '#111b21' }}>Kerala Coir Co.</span><span style={{ fontSize: 9, lineHeight: 1, color: '#1d7a36' }}>AI is replying…</span></span>
          <span style={{ marginLeft: 'auto' }}><Glyph G={WhatsAppGlyph} size={16} /></span>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 6, padding: '10px 10px 0' }}>
          <Bubble time="10:41">Price ethra aanu?</Bubble>
          <Bubble me time="10:41">₹600 aanu 😊 Order cheyyano?</Bubble>
          <Bubble time="10:42">Delivery undo? Kakkanad</Bubble>
          <Bubble me time="10:42">Undu, 2 days-il ethum 🚚 Name and address ayakkumo?</Bubble>
        </div>
        <div style={abs({ left: 8, right: 8, bottom: 8, height: 30, borderRadius: 15, background: '#fff', ...row({ padding: '0 6px 0 12px', justifyContent: 'space-between' }) })}>
          <span style={{ fontSize: 10.5, color: '#8696a0' }}>Type a message</span>
          <span style={{ width: 22, height: 22, borderRadius: 11, background: '#25d366', color: '#fff', fontSize: 11, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>➤</span>
        </div>
      </div>
      <div style={abs({ right: 10, top: 366, background: '#fff', borderRadius: 14, padding: '5px 10px', fontSize: 10, fontWeight: 500, boxShadow: SHADOW, ...row({ gap: 5 }) })}><span style={{ width: 6, height: 6, borderRadius: 3, background: '#34c759' }} />Replied in 3 sec</div>
    </>
  )
}

function OrderArt() {
  const Line = ({ k, v }) => <div style={row({ justifyContent: 'space-between', padding: '4px 0', fontSize: 11 })}><span style={{ color: '#8b8b92' }}>{k}</span><span style={{ color: '#1a1a1a', fontWeight: 500 }}>{v}</span></div>
  return (
    <>
      <Cloud style={{ left: -34, top: 0, width: 190, height: 95 }} tint="rgba(203,118,243,.40)" />
      <Cloud style={{ right: -46, bottom: -26, width: 230, height: 115 }} tint="rgba(203,118,243,.40)" />
      {[[40, 0.22, 36], [50, 0.34, 26], [60, 0.5, 16]].map(([top, o, inset]) => <div key={top} aria-hidden style={abs({ top, left: inset, right: inset, height: 80, borderRadius: 22, background: '#fff', opacity: o })} />)}
      <div style={abs({ left: 16, right: 16, top: 74, borderRadius: 20, background: '#fff', padding: 14, boxShadow: SHADOW })}>
        <div style={row({ justifyContent: 'space-between' })}>
          <span className="font-heading" style={{ fontSize: 15, fontWeight: 500, lineHeight: 1 }}>Order #1048</span>
          <span style={{ background: '#fff1cf', color: '#9a6b00', fontSize: 10, fontWeight: 500, padding: '3px 8px', borderRadius: 10 }}>Pending</span>
        </div>
        <div style={row({ gap: 5, marginTop: 7, fontSize: 10, color: '#71717a' })}><Glyph G={WhatsAppGlyph} size={12} />Captured from a WhatsApp chat</div>
        <div style={{ height: 1, background: 'rgba(0,0,0,.07)', margin: '10px 0 6px' }} />
        <div style={row({ justifyContent: 'space-between', fontSize: 11.5, fontWeight: 500, padding: '3px 0 6px' })}><span>2 × Premium Coir Mat</span><span>₹1,200</span></div>
        <Line k="Customer" v="Anjali" />
        <Line k="Phone" v="+91 98••• ••21" />
        <Line k="Address" v="Kakkanad" />
        <Line k="Delivery" v="2–3 days" />
        <div style={{ height: 1, background: 'rgba(0,0,0,.07)', margin: '6px 0' }} />
        <div style={row({ justifyContent: 'space-between', fontSize: 12.5, fontWeight: 600 })}><span>Total</span><span>₹1,200</span></div>
        <div style={row({ gap: 4, marginTop: 6, fontSize: 10.5, color: '#1d7a36' })}><span style={{ fontWeight: 700 }}>✓</span>Collected by the AI</div>
        <div style={{ marginTop: 10, background: '#1a1a1a', color: '#fff', borderRadius: 10, textAlign: 'center', fontSize: 11.5, fontWeight: 500, padding: '8px 0' }}>Confirm order</div>
      </div>
    </>
  )
}

function InboxArt() {
  const Chat = ({ ic, name, last, chip, tone, hot, avatar }) => (
    <div style={row({ gap: 8, padding: '8px 10px', borderRadius: 12, background: hot ? '#fff6ea' : 'transparent' })}>
      <span style={{ position: 'relative', width: 30, height: 30, borderRadius: 15, background: avatar, color: '#fff', fontSize: 11.5, fontWeight: 500, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>{name[0].toUpperCase()}<span style={{ position: 'absolute', right: -3, bottom: -3, background: '#fff', borderRadius: 8, padding: 1, display: 'flex' }}><Glyph G={ic} size={11} /></span></span>
      <span style={{ display: 'flex', flexDirection: 'column', gap: 3, minWidth: 0, flex: 1 }}><span style={{ fontSize: 11.5, fontWeight: 500, lineHeight: 1 }}>{name}</span><span style={{ fontSize: 10, lineHeight: 1.1, color: '#71717a', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{last}</span></span>
      <span style={{ fontSize: 9, fontWeight: 600, padding: '3px 7px', borderRadius: 9, background: tone[0], color: tone[1], flexShrink: 0 }}>{chip}</span>
    </div>
  )
  const AI = ['#e1f7e5', '#1d7a36'], NEED = ['#ffe2bd', '#a64b00']
  return (
    <>
      <Cloud style={{ left: -34, top: -8, width: 200, height: 100 }} tint="rgba(255,255,255,.26)" />
      <Cloud style={{ right: -44, bottom: -22, width: 240, height: 120 }} tint="rgba(255,255,255,.26)" />
      <div style={abs({ left: 16, top: 30, width: 235, height: 352, borderRadius: 22, background: '#fff', boxShadow: SHADOW, padding: '14px 8px' })}>
        <div style={row({ justifyContent: 'space-between', padding: '0 6px 10px' })}>
          <span style={{ display: 'flex', flexDirection: 'column', gap: 4 }}><span className="font-heading" style={{ fontSize: 15, fontWeight: 500, lineHeight: 1 }}>Live inbox</span><span style={{ fontSize: 9.5, color: '#71717a', lineHeight: 1 }}>24 chats today</span></span>
          <span style={row({ gap: 5, fontSize: 9.5, fontWeight: 500 })}>AI replies<span style={{ width: 26, height: 15, borderRadius: 8, background: '#34c759', padding: 2, display: 'flex', justifyContent: 'flex-end' }}><span style={{ width: 11, height: 11, borderRadius: 6, background: '#fff' }} /></span></span>
        </div>
        <Chat ic={WhatsAppGlyph} name="Anjali" last="Delivery undo? Kakkanad" chip="AI" tone={AI} avatar="linear-gradient(135deg,#9bbcf6,#7fa8ff)" />
        <Chat ic={WhatsAppGlyph} name="Daniel" last="Wants to talk to a person" chip="Needs you" tone={NEED} avatar="linear-gradient(135deg,#f6a56b,#ef7d57)" hot />
        <Chat ic={InstagramGlyph} name="priya_crafts" last="Price for the red bag?" chip="AI" tone={AI} avatar="linear-gradient(135deg,#d79bf7,#a87bff)" />
        <Chat ic={WhatsAppGlyph} name="Meera" last="Do you have size M in stock?" chip="AI" tone={AI} avatar="linear-gradient(135deg,#f2a3c8,#e87fb0)" />
        <Chat ic={WhatsAppGlyph} name="Rahul" last="Order placed ✓ ₹1,200" chip="AI" tone={AI} avatar="linear-gradient(135deg,#8fd9a8,#4cc07d)" />
        <div style={abs({ left: 12, right: 12, bottom: 12, background: '#1a1a1a', color: '#fff', borderRadius: 12, padding: '9px 12px', fontSize: 11.5, fontWeight: 500, ...row({ justifyContent: 'space-between' }) })}>Take over Daniel’s chat<span>→</span></div>
      </div>
    </>
  )
}

function Art({ kind }) {
  return <div style={{ position: 'relative', width: '100%', height: '100%', overflow: 'hidden', minWidth: 267 }}>{kind === 'chat' ? <ChatArt /> : kind === 'order' ? <OrderArt /> : <InboxArt />}</div>
}

export default function TwoCards() {
  const [open, setOpen] = useState(0)
  return (
    <section className="pb-10 pt-5">
      <Wrap>
        <div className="flex flex-col gap-2 rounded-[32px] bg-[#f0eeeb] p-2 lg:h-[436px] lg:flex-row">
          {ITEMS.map(({ face, t, d, tone, art }, i) => {
            const isOpen = open === i
            return (
              <div key={t} onMouseEnter={() => setOpen(i)} onClick={() => setOpen(i)}
                className={`relative flex shrink-0 overflow-hidden rounded-[24px] p-2 transition-[width,background-color] duration-500 ease-out max-lg:w-full max-lg:flex-col max-lg:bg-white ${isOpen ? 'bg-white lg:w-[537px]' : 'bg-[#f8f6f4] lg:w-[316px]'}`}>
                <div className={`flex w-full flex-col justify-between p-6 max-lg:gap-4 max-lg:px-4 lg:shrink-0 ${isOpen ? "lg:w-[254px]" : "lg:w-[300px]"}`}>
                  <FaceDisc tone={face} className="h-16 w-16 drop-shadow-[0_10px_16px_rgba(0,0,0,.14)]" />
                  <div className="mt-8 flex flex-col gap-1.5 lg:mt-0">
                    <h3 className="font-heading text-[24px] font-medium leading-[28.8px] text-[#1a1a1a]">{t}</h3>
                    <p className="text-[16px] font-normal leading-[22.4px] text-[#52525b]">{d}</p>
                  </div>
                </div>
                <div className={`relative ml-0 hidden h-full w-[267px] shrink-0 overflow-hidden rounded-[16px] ${isOpen ? 'lg:block' : ''}`} style={{ background: tone, width: 267, borderRadius: 16 }}><Texture /><div className="relative h-full"><Art kind={art} /></div></div>
                <div className="relative mt-2 overflow-hidden rounded-[16px] lg:hidden" style={{ background: tone, height: 350 }}><Texture /><div className="relative h-full"><Art kind={art} /></div></div>
              </div>
            )
          })}
        </div>
      </Wrap>
    </section>
  )
}
