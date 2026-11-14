import { Globe, Code2, ShoppingBag, KeyRound, Megaphone, LayoutDashboard, Languages, Bell, CreditCard, BarChart3 } from 'lucide-react'
import FaigenMark, { WhatsAppGlyph, InstagramGlyph } from '../site/FaigenMark'
import { TryLink } from './ui'

const W = 1000, H = 440
// Icons sit on two arcs around the Faigen mark at the bottom centre
const OUTER = [[<WhatsAppGlyph key="w" className="h-6 w-6 text-[#25d366]" />, 'WhatsApp'], [<InstagramGlyph key="i" className="h-6 w-6 text-[#d62976]" />, 'Instagram'], [<Globe key="g" size={22} className="text-[#0071e3]" />, 'Website chat'], [<Code2 key="c" size={22} />, 'API'], [<Megaphone key="m" size={22} className="text-[#7a5cff]" />, 'Broadcasts'], [<Bell key="b" size={22} className="text-[#e08e0b]" />, 'OTP & alerts']]
const INNER = [[<ShoppingBag key="s" size={21} className="text-[#1d7a36]" />, 'Orders'], [<LayoutDashboard key="l" size={21} />, 'Dashboard'], [<Languages key="n" size={21} className="text-[#0071e3]" />, 'Malayalam'], [<KeyRound key="k" size={21} />, 'API keys']]

function place(list, r, from, to) {
  return list.map(([node, label], i) => {
    const a = (from + ((to - from) * i) / (list.length - 1)) * (Math.PI / 180)
    const x = 50 + ((r * Math.cos(a)) / W) * 100
    const y = ((H - 20 - r * Math.sin(a)) / H) * 100
    return (
      <div key={label} title={label} className="absolute flex h-11 w-11 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white shadow-[0_10px_30px_-10px_rgba(0,0,0,.3)] ring-1 ring-black/[0.05] sm:h-14 sm:w-14" style={{ left: `${x}%`, top: `${y}%` }}>{node}</div>
    )
  })
}

export default function Orbit() {
  return (
    <section className="overflow-hidden py-16 text-center sm:py-24">
      <div className="mx-auto w-[min(1200px,100%-2.5rem)]">
        <h2 className="mx-auto max-w-3xl text-[clamp(2.2rem,4.6vw,3.4rem)] text-balance font-medium leading-[1.06] tracking-[-0.03em]">One agent for every channel, working from one dashboard</h2>
        <div className="mt-8"><TryLink href="/try" tone="dark">Try the live demo</TryLink></div>
        <div className="relative mx-auto mt-12 aspect-[1000/440] w-full max-w-[1000px]">
          {[330, 220, 110].map(r => (
            <div key={r} aria-hidden className="absolute left-1/2 rounded-full border border-black/[0.07] bg-gradient-to-b from-black/[0.015] to-transparent" style={{ width: `${(2 * r / W) * 100}%`, aspectRatio: '1/1', bottom: `${(-(r - 20) / H) * 100}%`, transform: 'translateX(-50%)' }} />
          ))}
          {place(OUTER, 330, 12, 168)}
          {place(INNER, 190, 28, 152)}
          <div className="absolute bottom-[3%] left-1/2 -translate-x-1/2"><FaigenMark className="sb-float h-20 w-20 drop-shadow-[0_16px_26px_rgba(0,113,227,.4)] sm:h-28 sm:w-28" /></div>
        </div>
      </div>
    </section>
  )
}
