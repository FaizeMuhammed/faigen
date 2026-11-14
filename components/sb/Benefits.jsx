import { Zap, ShoppingBag, SlidersHorizontal } from 'lucide-react'

const ITEMS = [
  { Icon: Zap, t: 'Never miss a message', d: 'Every question gets a reply in seconds, day or night, in the language the customer wrote in.', tone: 'from-[#cfe0ff] to-[#e6dcff]', chips: ['Replies in seconds', '24/7'] },
  { Icon: ShoppingBag, t: 'Turn chats into orders', d: 'The agent answers from your catalog, collects name, product, quantity and address, and hands you a finished order.', tone: 'from-[#ffe9bd] to-[#ffd3c2]', chips: ['Orders in chat', 'Your catalog'] },
  { Icon: SlidersHorizontal, t: 'Stay in control', d: 'Watch every chat live, take over any conversation, and hand it back to the AI whenever you want.', tone: 'from-[#d9f7c9] to-[#c8f0e6]', chips: ['Live inbox', 'One-tap take over'] },
]

export default function Benefits() {
  return (
    <section className="py-12 sm:py-16">
      <div className="mx-auto w-[min(1200px,100%-2.5rem)]">
        <div className="grid gap-3 rounded-[36px] bg-[#eeede6] p-3 md:grid-cols-3">
          {ITEMS.map(({ Icon, t, d, tone, chips }) => (
            <div key={t} className="flex flex-col rounded-[28px] bg-[#fafaf8] p-6 sm:p-7">
              <div className={`flex h-36 items-center justify-center rounded-[22px] bg-gradient-to-br ${tone}`}>
                <span className="flex h-16 w-16 items-center justify-center rounded-2xl bg-white shadow-[0_12px_30px_-12px_rgba(0,0,0,.3)]"><Icon size={28} strokeWidth={1.8} /></span>
              </div>
              <h3 className="mt-6 text-[26px] font-medium tracking-[-0.02em]">{t}</h3>
              <p className="mt-2 text-[16.5px] leading-snug text-[#1a1a1a]/65">{d}</p>
              <div className="mt-5 flex flex-wrap gap-2">{chips.map(c => <span key={c} className="rounded-full bg-[#eeede6] px-3 py-1.5 text-[13px] font-medium">{c}</span>)}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
