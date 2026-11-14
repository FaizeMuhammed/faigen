'use client'

import { useState } from 'react'
import { ShoppingBag, Megaphone, Inbox } from 'lucide-react'
import { WhatsAppGlyph, InstagramGlyph } from '../site/FaigenMark'
import { TryLink, GreyPill } from './ui'
import { Scallop, HalfRing, HalfDisc, Diamond, Dot } from './art'
import { WhatsAppMock, InstagramMock, OrdersMock, BroadcastMock, InboxMock } from './mocks'

const TABS = [
  { id: 'wa', label: 'WhatsApp', Icon: WhatsAppGlyph, Mock: WhatsAppMock, bg: 'from-[#e1d1ff] to-[#bda4ff]' },
  { id: 'ig', label: 'Instagram', Icon: InstagramGlyph, Mock: InstagramMock, bg: 'from-[#ffd3e6] via-[#ffcab6] to-[#e4c8ff]' },
  { id: 'orders', label: 'Orders', Icon: ShoppingBag, Mock: OrdersMock, bg: 'from-[#d3e3ff] to-[#b4cdff]' },
  { id: 'bc', label: 'Broadcasts', Icon: Megaphone, Mock: BroadcastMock, bg: 'from-[#efffb8] to-[#cdf56e]' },
  { id: 'inbox', label: 'Live inbox', Icon: Inbox, Mock: InboxMock, bg: 'from-[#e1d1ff] to-[#c7b2ff]' },
]

export default function Hero() {
  const [tab, setTab] = useState('wa')
  const cur = TABS.find(t => t.id === tab)
  const Mock = cur.Mock
  return (
    <section className="relative overflow-hidden pb-16 pt-32 sm:pt-40">
      {/* floating shapes */}
      <Scallop className="absolute left-[7%] top-[22%] hidden h-[96px] w-[96px] lg:block" style={{ '--r': '-6deg' }} />
      <HalfRing className="absolute right-[9%] top-[18%] hidden h-[86px] w-[130px] lg:block" style={{ '--r': '8deg' }} />
      <HalfDisc className="absolute right-[15%] top-[44%] hidden h-[110px] w-[110px] lg:block" style={{ '--r': '-4deg' }} />
      <Diamond className="absolute left-[16%] top-[52%] hidden h-9 w-9 lg:block" />
      <Dot className="absolute left-[34%] top-[16%] hidden h-5 w-5 lg:block" />

      <div className="relative mx-auto w-[min(1200px,100%-2.5rem)] text-center">
        <p className="mx-auto inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-[13.5px] font-medium ring-1 ring-black/[0.06]">
          <span className="h-2 w-2 rounded-full bg-[#34c759]" /> Meta Verified Tech Provider
        </p>
        <h1 className="mx-auto mt-6 max-w-3xl text-balance text-[clamp(2.6rem,6.2vw,4.5rem)] font-medium leading-[1.04] tracking-[-0.035em]">Never miss a customer again.</h1>
        <p className="mx-auto mt-6 max-w-[540px] text-[clamp(1.05rem,1.6vw,1.25rem)] leading-snug text-[#1a1a1a]/65">The AI agent that replies, takes orders and follows up on WhatsApp and Instagram, in English, Malayalam and Manglish. Live in 24–48 hours.</p>
        <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
          <TryLink href="/try">Try the live demo</TryLink>
          <GreyPill href="/contact">Talk to us</GreyPill>
        </div>

        <div className="mt-16 flex flex-wrap items-center justify-center gap-2.5" role="tablist" aria-label="Product views">
          {TABS.map(t => (
            <button key={t.id} role="tab" aria-selected={tab === t.id} onClick={() => setTab(t.id)}
              className={`inline-flex items-center gap-2 rounded-full px-4 py-2.5 text-[14.5px] font-medium transition-all ${tab === t.id ? 'bg-white shadow-[0_8px_24px_-12px_rgba(0,0,0,.3)] ring-1 ring-black/10' : 'text-[#1a1a1a]/65 hover:bg-black/[0.04]'}`}>
              <t.Icon className="h-[17px] w-[17px]" />{t.label}
            </button>
          ))}
        </div>

        <div className={`relative mx-auto mt-5 overflow-hidden rounded-[32px] bg-gradient-to-br ${cur.bg} p-4 transition-colors duration-500 sm:rounded-[40px] sm:p-8 lg:p-12`}>
          <div aria-hidden className="pointer-events-none absolute inset-0 opacity-60 [background:radial-gradient(600px_300px_at_85%_-10%,rgba(255,255,255,.7),transparent_60%)]" />
          <div className="relative mx-auto max-w-[900px]" key={tab}><Mock /></div>
        </div>
      </div>
    </section>
  )
}
