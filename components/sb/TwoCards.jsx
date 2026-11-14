'use client'

import { useState } from 'react'
import { Zap, ShoppingBag, SlidersHorizontal, Check } from 'lucide-react'
import { Wrap, Grain, PANEL } from './ui'

// Three cards in a #f0eeeb tray: one open (537px, with its picture), two closed (316px). Hover or tap to open another.
const ITEMS = [
  { Icon: Zap, t: 'Never miss a message', d: 'Every question gets a reply in seconds, day or night, in the language the customer wrote in.', tone: PANEL.blue, art: 'chat' },
  { Icon: ShoppingBag, t: 'Turn chats into orders', d: 'The agent answers from your catalog, collects name, product, quantity and address, and hands you a finished order.', tone: PANEL.purple, art: 'order' },
  { Icon: SlidersHorizontal, t: 'Stay in control', d: 'Watch every chat live, take over any conversation, and hand it back to the AI whenever you want.', tone: PANEL.lime, art: 'control' },
]

function Art({ kind }) {
  if (kind === 'chat') return (
    <div className="flex h-full flex-col justify-center gap-2.5 p-3 text-[12.5px] leading-snug">
      <div className="w-[88%] rounded-2xl rounded-bl-md bg-white px-3 py-2 shadow-sm">Price ethra aanu?</div>
      <div className="ml-auto w-[88%] rounded-2xl rounded-br-md bg-[#1a1a1a] px-3 py-2 text-white">₹600 aanu 😊 Order cheyyano?</div>
      <div className="w-[70%] rounded-2xl rounded-bl-md bg-white px-3 py-2 shadow-sm">Delivery undo?</div>
      <div className="ml-auto flex items-center gap-1.5 rounded-full bg-white/80 px-2.5 py-1 text-[11px] font-medium"><span className="h-1.5 w-1.5 rounded-full bg-[#34c759]" />Replied in 3 sec</div>
    </div>
  )
  if (kind === 'order') return (
    <div className="flex h-full items-center p-3">
      <div className="w-full rounded-2xl bg-white p-3.5 text-[12.5px] shadow-sm">
        <div className="flex justify-between font-semibold"><span>Order #1048</span><span className="rounded-full bg-[#fff1cf] px-2 py-0.5 text-[10.5px] text-[#9a6b00]">Pending</span></div>
        <p className="mt-2 text-black/55">2 × Premium Coir Mat</p>
        <p className="text-black/55">Kakkanad · 2–3 days</p>
        <div className="mt-2 flex justify-between border-t border-black/[0.06] pt-2 font-semibold"><span>Total</span><span>₹1,200</span></div>
        <p className="mt-2 flex items-center gap-1 text-[#1d7a36]"><Check size={12} strokeWidth={3} />Collected by the AI</p>
      </div>
    </div>
  )
  return (
    <div className="flex h-full flex-col justify-center gap-2.5 p-3 text-[12.5px]">
      <div className="flex items-center justify-between rounded-2xl bg-white px-3 py-2.5 shadow-sm"><span className="font-medium">AI replies</span><span className="h-5 w-9 rounded-full bg-[#34c759] p-0.5"><span className="ml-auto block h-4 w-4 rounded-full bg-white" /></span></div>
      <div className="rounded-2xl bg-white px-3 py-2.5 shadow-sm"><p className="font-medium">Daniel · Needs you</p><p className="text-black/50">Wants to talk to a person</p></div>
      <div className="rounded-full bg-[#1a1a1a] px-3 py-2 text-center font-medium text-white">Take over</div>
    </div>
  )
}

export default function TwoCards() {
  const [open, setOpen] = useState(0)
  return (
    <section className="pb-10 pt-5">
      <Wrap>
        <div className="flex flex-col gap-2 rounded-[32px] bg-[#f0eeeb] p-2 lg:h-[436px] lg:flex-row">
          {ITEMS.map(({ Icon, t, d, tone, art }, i) => {
            const isOpen = open === i
            return (
              <div key={t} onMouseEnter={() => setOpen(i)} onClick={() => setOpen(i)}
                className={`relative flex shrink-0 overflow-hidden rounded-[24px] p-2 transition-[width,background-color] duration-500 ease-out max-lg:w-full ${isOpen ? 'bg-white lg:w-[537px]' : 'bg-[#f8f6f4] lg:w-[316px]'}`}>
                <div className={`flex w-full flex-col justify-between p-6 lg:shrink-0 ${isOpen ? "lg:w-[254px]" : "lg:w-[300px]"}`}>
                  <span className="relative flex h-16 w-16 items-center justify-center overflow-hidden rounded-full shadow-[0_10px_24px_-10px_rgba(0,0,0,.25)]" style={{ background: tone }}><Icon size={28} strokeWidth={1.8} className="text-[#1a1a1a]" /></span>
                  <div className="mt-8 flex flex-col gap-1.5 lg:mt-0">
                    <h3 className="font-heading text-[24px] font-medium leading-[28.8px] text-[#1a1a1a]">{t}</h3>
                    <p className="text-[16px] font-normal leading-[22.4px] text-[#52525b]">{d}</p>
                  </div>
                </div>
                <div className={`relative ml-0 hidden h-full w-[267px] shrink-0 overflow-hidden rounded-[16px] ${isOpen ? 'lg:block' : ''}`} style={{ background: tone }}><Grain /><div className="relative h-full"><Art kind={art} /></div></div>
              </div>
            )
          })}
        </div>
      </Wrap>
    </section>
  )
}
