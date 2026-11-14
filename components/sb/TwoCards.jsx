'use client'

import { useState } from 'react'
import { Zap, ShoppingBag, SlidersHorizontal, Check, Clock, MessageCircle, ChevronDown, X, ArrowRight } from 'lucide-react'
import { Wrap, Grain, PANEL } from './ui'
import { FaceDisc } from './art'

// Three cards in a #f0eeeb tray: one open (537px, with its picture), two closed (316px). Hover or tap to open another.
const ITEMS = [
  { face: 'blue', Icon: Zap, t: 'Never miss a message', d: 'Every question gets a reply in seconds, day or night, in the language the customer wrote in.', tone: PANEL.blue, art: 'chat' },
  { face: 'violet', Icon: ShoppingBag, t: 'Turn chats into orders', d: 'The agent answers from your catalog, collects name, product, quantity and address, and hands you a finished order.', tone: PANEL.purple, art: 'order' },
  { face: 'lime', Icon: SlidersHorizontal, t: 'Stay in control', d: 'Watch every chat live, take over any conversation, and hand it back to the AI whenever you want.', tone: PANEL.lime, art: 'control' },
]

// Soft clouds baked into each Sunbeam picture: the cloud shape, tinted white, with the panel grain on top
function Cloud({ className = '', a = 0.28 }) {
  return <div aria-hidden className={`absolute ${className}`} style={{ background: `rgba(255,255,255,${a})`, WebkitMaskImage: 'url(/sb/cloud.png)', maskImage: 'url(/sb/cloud.png)', WebkitMaskSize: '100% 100%', maskSize: '100% 100%', WebkitMaskRepeat: 'no-repeat', maskRepeat: 'no-repeat' }} />
}

const SHADOW = '0 14px 34px -10px rgba(40,60,120,.18), 0 2px 6px rgba(40,60,120,.05)'

function Note({ tag, tagBg, text, meta, className = '', avatar }) {
  return (
    <div className={`absolute rounded-[14px] bg-white p-3.5 ${className}`} style={{ boxShadow: SHADOW }}>
      <span className="inline-block rounded-full px-2.5 py-[3px] text-[10px] font-normal leading-none text-[#1a1a1a]" style={{ background: tagBg }}>{tag}</span>
      <p className="mt-2 pr-4 text-[12px] font-normal leading-[1.45] text-[#1a1a1a]">{text}</p>
      <div className="mt-2.5 flex items-center gap-3 text-[10px] text-[#a1a1aa]">
        <span className="flex items-center gap-1"><Clock size={11} />{meta}</span>
        <span className="relative flex items-center gap-1"><MessageCircle size={11} /><i className="absolute -left-0.5 -top-0.5 h-1.5 w-1.5 rounded-full bg-[#ef5350]" />1</span>
        <span className="flex items-center gap-1"><Check size={11} />Sent</span>
      </div>
      <span className="absolute right-3.5 top-3.5 flex gap-[3px]"><i className="h-[3px] w-[3px] rounded-full bg-[#c9c9cf]" /><i className="h-[3px] w-[3px] rounded-full bg-[#c9c9cf]" /><i className="h-[3px] w-[3px] rounded-full bg-[#c9c9cf]" /></span>
      {avatar && <span className="absolute bottom-3 right-3 flex h-7 w-7 items-center justify-center rounded-full bg-gradient-to-br from-[#9bbcf6] to-[#c797f7] text-[11px] font-medium text-white">{avatar}</span>}
    </div>
  )
}

function Field({ label, value, className = '', chevron }) {
  return (
    <div className={className}>
      <p className="text-[8px] leading-none text-[#8b8b92]">{label}</p>
      <div className="mt-1 flex items-center justify-between rounded-[8px] border border-black/[0.07] bg-white px-2 py-[5px] text-[9.5px] leading-none text-[#1a1a1a]"><span className="truncate">{value}</span>{chevron && <ChevronDown size={10} className="shrink-0 text-[#555]" />}</div>
    </div>
  )
}

function Art({ kind }) {
  if (kind === 'chat') return (
    <div className="relative h-full w-full overflow-hidden">
      <Cloud className="-left-8 -top-2 h-[100px] w-[200px]" a={0.34} />
      <Cloud className="-bottom-6 -right-10 h-[120px] w-[240px]" a={0.4} />
      <Note tag="Malayalam" tagBg="#e2fb96" text="Price ethra aanu? Stock undo?" meta="3 sec" className="left-[20px] top-[40px] z-[1] w-[236px] rotate-[8deg]" />
      <Note tag="English" tagBg="#ecd2fb" text="Do you deliver to Kakkanad? What is the price for 2 mats?" meta="2 sec" className="left-[16px] top-[148px] z-[2] w-[234px]" />
      <Note tag="Manglish" tagBg="#bddafb" text="Delivery undo? Nale kittumo? Address ithu aanu." meta="3 sec" avatar="A" className="left-[10px] top-[238px] z-[3] w-[240px] -rotate-[9deg]" />
    </div>
  )
  if (kind === 'order') return (
    <div className="relative h-full w-full overflow-hidden">
      <Cloud className="-left-8 top-1 h-[90px] w-[180px]" a={0.3} />
      <Cloud className="-bottom-8 -right-10 h-[100px] w-[200px]" a={0.3} />
      {[[66, 0.2, 38], [75, 0.3, 28], [84, 0.45, 18]].map(([top, o, inset]) => <div key={top} aria-hidden className="absolute rounded-[22px] bg-white" style={{ top, left: inset, right: inset, height: 70, opacity: o }} />)}
      <div className="absolute left-[16px] right-[16px] top-[92px] rounded-[18px] bg-white px-3.5 pb-3.5 pt-4" style={{ boxShadow: SHADOW }}>
        <div className="flex items-center justify-between"><p className="font-heading text-[14px] font-medium leading-none">Order #1048</p><X size={12} className="text-[#444]" /></div>
        <div className="mt-3 grid grid-cols-2 gap-2"><Field label="Customer" value="Anjali" /><Field label="Phone" value="+91 98•••" /></div>
        <Field className="mt-2" label="Product" value="2 × Premium Coir Mat" />
        <Field className="mt-2" label="Address" value="Kakkanad, Ernakulam" />
        <div className="mt-2 grid grid-cols-2 gap-2"><Field label="Delivery" value="2–3 days" chevron /><Field label="Payment" value="Cash on delivery" chevron /></div>
        <div className="mt-3 flex items-center justify-between"><span className="text-[9.5px] text-[#8b8b92]">Cancel</span><span className="flex items-center gap-2"><span className="rounded-[8px] border border-black/[0.1] px-2 py-1.5 text-[9.5px] leading-none">Edit</span><span className="rounded-[8px] bg-[#1a1a1a] px-3 py-1.5 text-[9.5px] leading-none text-white">Confirm ₹1,200</span></span></div>
      </div>
    </div>
  )
  return (
    <div className="relative h-full w-full overflow-hidden">
      <Cloud className="-left-8 -top-2 h-[100px] w-[200px]" a={0.38} />
      <div className="absolute left-[34px] top-[79px] h-[420px] w-[300px] rounded-[18px] bg-white px-3.5 pt-4" style={{ boxShadow: SHADOW }}>
        <p className="font-heading text-[18px] font-medium leading-none">Live inbox</p>
        <p className="mt-2 text-[9px] text-[#8b8b92]">Today · <span className="font-medium text-[#1a1a1a]">24 chats</span></p>
        <div className="mt-3 rounded-[10px] border border-black/[0.07] p-2.5">
          <div className="flex items-start justify-between"><div><p className="text-[8px] text-[#8b8b92]">Needs you</p><p className="mt-1 text-[11px] font-medium leading-none">Daniel</p></div><div className="text-right"><p className="text-[8px] text-[#8b8b92]">Waiting</p><p className="mt-1 text-[11px] font-medium leading-none">2 min</p></div></div>
          <p className="mt-2 border-t border-black/[0.06] pt-2 text-[9px] leading-snug text-[#555]">Wants to talk to a person about a bulk order.</p>
        </div>
        <div className="mt-3 overflow-hidden rounded-[10px] border border-black/[0.07] text-[9px]">
          <div className="grid grid-cols-[1.3fr_.8fr_.8fr] bg-[#fdfde4] px-2.5 py-1.5 text-[#8b8b92]"><span>Chat</span><span>Msgs</span><span>By</span></div>
          {[['Anjali', '12', 'AI'], ['Daniel', '5', 'You'], ['Meera', '8', 'AI'], ['Rahul', '3', 'AI']].map(r => (
            <div key={r[0]} className="grid grid-cols-[1.3fr_.8fr_.8fr] border-t border-black/[0.05] px-2.5 py-[7px]"><span>{r[0]}</span><span>{r[1]}</span><span>{r[2]}</span></div>
          ))}
        </div>
        <div className="mt-3 flex w-[150px] items-center justify-between rounded-[8px] bg-[#1a1a1a] px-3 py-2 text-[10px] text-white"><span>Take over</span><ArrowRight size={11} /></div>
      </div>
    </div>
  )
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
                className={`relative flex shrink-0 overflow-hidden rounded-[24px] p-2 transition-[width,background-color] duration-500 ease-out max-lg:w-full ${isOpen ? 'bg-white lg:w-[537px]' : 'bg-[#f8f6f4] lg:w-[316px]'}`}>
                <div className={`flex w-full flex-col justify-between p-6 lg:shrink-0 ${isOpen ? "lg:w-[254px]" : "lg:w-[300px]"}`}>
                  <FaceDisc tone={face} className="h-16 w-16 drop-shadow-[0_10px_16px_rgba(0,0,0,.14)]" />
                  <div className="mt-8 flex flex-col gap-1.5 lg:mt-0">
                    <h3 className="font-heading text-[24px] font-medium leading-[28.8px] text-[#1a1a1a]">{t}</h3>
                    <p className="text-[16px] font-normal leading-[22.4px] text-[#52525b]">{d}</p>
                  </div>
                </div>
                <div className={`relative ml-0 hidden h-full w-[267px] shrink-0 overflow-hidden rounded-[16px] ${isOpen ? 'lg:block' : ''}`} style={{ background: tone }}><div className="relative h-full"><Art kind={art} /></div><Grain strength={0.9} /></div>
              </div>
            )
          })}
        </div>
      </Wrap>
    </section>
  )
}
