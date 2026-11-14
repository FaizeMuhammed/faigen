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

// Card 1: three tilted message notes, like Sunbeam's task notes, but each is a real customer message
const FACES = { Anjali: '/sb/faces/f2.png', priya_crafts: '/sb/faces/f9.png', Fathima: '/sb/faces/f6.png', Daniel: '/sb/faces/f1.png' }
function Note({ ch, tag, tagBg, user, text, reply, meta, style }) {
  return (
    <div style={abs({ width: 200, left: 'calc(50% - 100px)', background: '#fff', borderRadius: 14, padding: '9px 11px 8px', boxShadow: SHADOW, ...style })}>
      <div style={row({ gap: 8 })}>
        <span style={{ position: 'relative', width: 26, height: 26, flexShrink: 0 }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={FACES[user]} alt="" width={26} height={26} style={{ display: 'block', width: 26, height: 26, borderRadius: 13, objectFit: 'cover' }} />
          <span style={abs({ right: -4, bottom: -4, background: '#fff', borderRadius: 8, padding: 1.5, display: 'flex' })}><Glyph G={ch} size={11} /></span>
        </span>
        <span style={{ fontSize: 12, fontWeight: 500, color: '#1a1a1a' }}>{user}</span>
        <span style={{ marginLeft: 'auto', fontSize: 9.5, lineHeight: 1, padding: '4px 8px', borderRadius: 10, background: tagBg, color: '#1a1a1a' }}>{tag}</span>
      </div>
      <p style={{ margin: '7px 0 0', fontSize: 12, lineHeight: 1.35, color: '#1a1a1a' }}>{text}</p>
      <div style={{ marginTop: 7, background: '#d9fdd3', borderRadius: '12px 12px 4px 12px', padding: '5px 9px', fontSize: 11, lineHeight: 1.35, color: '#111b21' }}>
        <span style={{ fontSize: 9.5, fontWeight: 700, letterSpacing: '.04em', color: '#1d7a36', marginRight: 6 }}>AI</span>{reply}
      </div>
      <div style={{ ...row({ gap: 6 }), marginTop: 6, fontSize: 9.5, color: '#8b8b92' }}>
        <span style={{ width: 5, height: 6, borderRadius: 3, background: '#34c759' }} />{meta}
        <span style={{ marginLeft: 'auto', color: '#53bdeb', letterSpacing: -2 }}>✓✓</span>
      </div>
    </div>
  )
}
function ChatArt() {
  return (
    <>
      <Cloud style={{ left: -34, top: -8, width: 200, height: 100 }} tint="rgba(143,190,248,.42)" />
      <Cloud style={{ right: -44, bottom: -22, width: 240, height: 120 }} tint="rgba(143,190,248,.42)" />
      <Note ch={WhatsAppGlyph} tag="WhatsApp" tagBg="#cdf3d6" user="Anjali" text="Price ethra aanu Coir Mat?" reply="₹600 aanu 😊 Order?" meta="Replied in 3 sec" style={{ top: 26, transform: 'rotate(-2deg)', zIndex: 1 }} />
      <Note ch={InstagramGlyph} tag="Instagram" tagBg="#fbd3f3" user="priya_crafts" text="Is the red bag still available?" reply="Yes! Check your DMs 📩" meta="Replied in 2 sec" style={{ top: 150, zIndex: 2 }} />
      <Note ch={WhatsAppGlyph} tag="Malayalam" tagBg="#e6d4ff" user="Fathima" text="Delivery Kochi undo?" reply="Undu, 2 days-il ethum 🚚" meta="Replied in 3 sec" style={{ top: 274, transform: 'rotate(2deg)', zIndex: 3 }} />
    </>
  )
}

function OrderArt() {
  const Line = ({ k, v }) => <div style={row({ justifyContent: 'space-between', padding: '3px 0', fontSize: 10.5 })}><span style={{ color: '#8b8b92' }}>{k}</span><span style={{ color: '#1a1a1a', fontWeight: 500 }}>{v}</span></div>
  return (
    <>
      <Cloud style={{ left: -34, top: 0, width: 190, height: 95 }} tint="rgba(203,118,243,.40)" />
      <Cloud style={{ right: -46, bottom: -26, width: 230, height: 115 }} tint="rgba(203,118,243,.40)" />
      {[[44, 0.22, 44], [54, 0.34, 34], [62, 0.5, 24]].map(([top, o, inset]) => <div key={top} aria-hidden style={abs({ top, left: inset, right: inset, height: 80, borderRadius: 20, background: '#fff', opacity: o })} />)}
      <div style={abs({ width: 212, left: 'calc(50% - 106px)', top: 70, borderRadius: 18, background: '#fff', padding: 12, boxShadow: SHADOW })}>
        <div style={row({ justifyContent: 'space-between' })}>
          <span className="font-heading" style={{ fontSize: 14, fontWeight: 500, lineHeight: 1 }}>Order #1048</span>
          <span style={{ background: '#fff1cf', color: '#9a6b00', fontSize: 10, fontWeight: 500, padding: '3px 8px', borderRadius: 10 }}>Pending</span>
        </div>
        <div style={row({ gap: 5, marginTop: 7, fontSize: 10, color: '#71717a' })}><Glyph G={WhatsAppGlyph} size={12} />Captured from a WhatsApp chat</div>
        <div style={{ height: 1, background: 'rgba(0,0,0,.07)', margin: '10px 0 6px' }} />
        <div style={row({ justifyContent: 'space-between', fontSize: 11, fontWeight: 500, padding: '3px 0 5px' })}><span>2 × Premium Coir Mat</span><span>₹1,200</span></div>
        <Line k="Customer" v="Anjali" />
        <Line k="Phone" v="+91 98••• ••21" />
        <Line k="Address" v="Kochi" />
        <Line k="Delivery" v="2–3 days" />
        <div style={{ height: 1, background: 'rgba(0,0,0,.07)', margin: '6px 0' }} />
        <div style={row({ justifyContent: 'space-between', fontSize: 12.5, fontWeight: 600 })}><span>Total</span><span>₹1,200</span></div>
        <div style={row({ gap: 4, marginTop: 6, fontSize: 10.5, color: '#1d7a36' })}><span style={{ fontWeight: 700 }}>✓</span>Collected by the AI</div>
        <div style={{ marginTop: 9, background: '#1a1a1a', color: '#fff', borderRadius: 10, textAlign: 'center', fontSize: 11, fontWeight: 500, padding: '7px 0' }}>Confirm order</div>
      </div>
    </>
  )
}

// Card 3: a small live inbox. Chats from both channels, one flagged "Needs you", with the Take over button
function InboxArt() {
  const Chat = ({ user, ch, last, chip, tone, hot }) => (
    <div style={{ ...row({ gap: 9 }), padding: '6px 7px', borderRadius: 11, background: hot ? '#fff3e2' : 'transparent', border: hot ? '1px solid #f6d9ad' : '1px solid transparent' }}>
      <span style={{ position: 'relative', width: 30, height: 30, flexShrink: 0 }}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={FACES[user]} alt="" width={30} height={30} style={{ display: 'block', width: 30, height: 30, borderRadius: 15, objectFit: 'cover' }} />
        <span style={abs({ right: -4, bottom: -4, background: '#fff', borderRadius: 8, padding: 1.5, display: 'flex' })}><Glyph G={ch} size={12} /></span>
      </span>
      <span style={{ display: 'flex', flexDirection: 'column', gap: 3, minWidth: 0, flex: 1 }}>
        <span style={{ fontSize: 11.5, fontWeight: 500, lineHeight: 1 }}>{user}</span>
        <span style={{ fontSize: 10, lineHeight: 1.1, color: '#71717a', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{last}</span>
      </span>
      <span style={{ fontSize: 9, fontWeight: 600, padding: '4px 7px', borderRadius: 9, background: tone[0], color: tone[1], flexShrink: 0 }}>{chip}</span>
    </div>
  )
  const AI = ['#e1f7e5', '#1d7a36']
  return (
    <>
      <Cloud style={{ left: -34, top: -8, width: 200, height: 100 }} tint="rgba(255,255,255,.3)" />
      <Cloud style={{ right: -44, bottom: -22, width: 240, height: 120 }} tint="rgba(255,255,255,.26)" />
      <div style={abs({ left: 'calc(50% - 108px)', top: 40, width: 216, borderRadius: 18, background: '#fff', boxShadow: SHADOW, padding: '12px 6px 10px' })}>
        <div style={row({ justifyContent: 'space-between', padding: '0 7px 8px' })}>
          <span className="font-heading" style={{ fontSize: 15, fontWeight: 500, lineHeight: 1 }}>Live inbox</span>
          <span style={row({ gap: 6, fontSize: 10.5, fontWeight: 500 })}>AI replies<span style={{ width: 28, height: 16, borderRadius: 8, background: '#34c759', padding: 2, display: 'flex', justifyContent: 'flex-end' }}><span style={{ width: 12, height: 12, borderRadius: 6, background: '#fff' }} /></span></span>
        </div>
        <Chat user="Anjali" ch={WhatsAppGlyph} last="Price ethra aanu Coir Mat?" chip="AI" tone={AI} />
        <Chat user="priya_crafts" ch={InstagramGlyph} last="Is the red bag available?" chip="AI" tone={AI} />
        <Chat user="Daniel" ch={WhatsAppGlyph} last="Wants a person" chip="Needs you" tone={['#ffe2bd', '#a64b00']} hot />
        <div style={{ ...row({ justifyContent: 'center', gap: 6 }), margin: '8px 4px 0', background: '#1a1a1a', color: '#fff', borderRadius: 11, padding: '9px 0', fontSize: 11.5, fontWeight: 500 }}>Take over Daniel’s chat <span>→</span></div>
      </div>
      <div style={abs({ left: 'calc(50% - 84px)', top: 292, width: 168, borderRadius: 12, background: '#fff', boxShadow: SHADOW, padding: '8px 10px', transform: 'rotate(2deg)' })}>
        <div style={row({ gap: 8 })}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/sb/faces/f4.png" alt="" width={24} height={24} style={{ display: 'block', width: 24, height: 24, borderRadius: 12, objectFit: 'cover' }} />
          <span style={{ fontSize: 11, lineHeight: 1.3 }}><b style={{ fontWeight: 500 }}>You’re replying.</b><br /><span style={{ color: '#71717a' }}>AI paused for this chat</span></span>
        </div>
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
                <div className="relative mt-2 overflow-hidden rounded-[16px] lg:hidden" style={{ background: tone, height: 420 }}><Texture /><div className="relative h-full"><Art kind={art} /></div></div>
              </div>
            )
          })}
        </div>
      </Wrap>
    </section>
  )
}
