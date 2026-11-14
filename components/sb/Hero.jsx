'use client'

import { useState } from 'react'
import { ShoppingBag, Megaphone, Inbox } from 'lucide-react'
import { WhatsAppGlyph, InstagramGlyph } from '../site/FaigenMark'
import { TryLink, GreyPill, Wrap } from './ui'
import { Scallop, HalfRing, HalfDisc, Diamond, Dot } from './art'
import HeroWindow from './HeroMocks'

const TABS = [
  { id: 'wa', label: 'WhatsApp', Icon: WhatsAppGlyph },
  { id: 'ig', label: 'Instagram', Icon: InstagramGlyph },
  { id: 'orders', label: 'Orders', Icon: ShoppingBag },
  { id: 'bc', label: 'Broadcasts', Icon: Megaphone },
  { id: 'inbox', label: 'Live inbox', Icon: Inbox },
]

export default function Hero() {
  const [tab, setTab] = useState('wa')
  const cur = TABS.find(t => t.id === tab)
  return (
    <section className="overflow-x-clip pt-[120px]">
      <Wrap>
        {/* Hero block: 600px high, content centred, shapes placed as on the reference */}
        <div className="relative flex min-h-[600px] items-center justify-center overflow-visible">
          <HalfRing className="absolute left-[310px] top-[36px] h-[169px] w-[169px] lg:left-[80.4%] lg:top-[124px]" style={{ '--r': '8deg' }} />
          <HalfDisc className="absolute left-[355px] top-[488px] h-[235px] w-[178px] lg:left-[72.75%] lg:top-[400px]" style={{ '--r': '-4deg' }} />
          <Scallop className="absolute left-[-87px] top-[330px] h-[115px] w-[115px] lg:left-[12.8%] lg:top-[73px]" style={{ '--r': '-6deg' }} />
          <Dot className="absolute left-[53.25%] top-0 hidden h-14 w-14 lg:block" color="#86b4ff" />
          <Diamond className="absolute left-[-126px] top-[597px] h-[73px] w-[73px] lg:left-[24.4%] lg:top-[460px]" />
          <div className="relative flex flex-col items-center gap-10 text-center">
            <div className="flex flex-col items-center gap-5">
              <p className="flex items-center gap-2 text-[16px] font-normal leading-[22.4px] text-[#535353]"><span className="h-2 w-2 rounded-full bg-[#34c759]" />Meta Verified Tech Provider</p>
              <h1 className="font-heading max-w-[780px] text-balance text-[40px] sm:text-[clamp(2.6rem,5vw,4rem)] font-medium leading-[1.2] text-[#1a1a1a]">Never miss a customer again.</h1>
              <p className="max-w-[520px] text-[clamp(1.05rem,1.5vw,1.3125rem)] font-normal leading-[1.4] text-[#535353]">The AI agent that replies, takes orders and follows up on WhatsApp and Instagram, in English, Malayalam and Manglish. Live in 24–48 hours.</p>
            </div>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <TryLink href="/try">Try the live demo</TryLink>
              <GreyPill href="/contact" tall>Talk to us</GreyPill>
            </div>
          </div>
        </div>

        {/* Tabs + product panel */}
        <div className="mt-[52px] flex flex-col items-center gap-5 pb-8">
          <div className="-mx-5 flex w-[calc(100%+40px)] max-w-none flex-nowrap justify-start gap-x-5 overflow-x-auto px-5 [scrollbar-width:none] sm:mx-0 sm:w-auto sm:max-w-full sm:flex-wrap sm:justify-center sm:gap-y-2 sm:overflow-visible sm:px-0" role="tablist" aria-label="Product views">
            {TABS.map(t => (
              <button key={t.id} role="tab" aria-selected={tab === t.id} onClick={() => setTab(t.id)}
                className={`inline-flex h-10 shrink-0 items-center gap-1 rounded-[24px] py-1 pl-3 pr-6 text-[16px] font-medium leading-[22.4px] transition-colors ${tab === t.id ? 'bg-[#f0eeeb]' : 'hover:bg-[#f0eeeb]/60'}`}>
                <span className="flex h-8 w-8 items-center justify-center rounded-[12px] p-1"><t.Icon className="h-6 w-6" /></span>{t.label}
              </button>
            ))}
          </div>
          <div className="relative h-[195px] w-full overflow-hidden rounded-[24px] sm:h-[560px] lg:h-[668px]">
            <img aria-hidden alt="" src="/sb/hero-bg.jpg" draggable={false} className="absolute -left-10 -top-[22px] h-[712px] w-[calc(100%+80px)] max-w-none select-none object-cover" />
            <div className="relative mx-auto mt-[57px] w-[calc(100%-36px)] max-w-[1080px] sm:mt-12 sm:w-[calc(100%-32px)] lg:mt-[81px]" key={tab}>
              <HeroWindow tab={tab} />
            </div>
          </div>
        </div>
      </Wrap>
    </section>
  )
}
