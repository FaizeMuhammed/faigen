import { Globe, Code2, ShoppingBag, KeyRound, Megaphone, LayoutDashboard, Languages, Bell } from 'lucide-react'
import { WhatsAppGlyph, InstagramGlyph } from '../site/FaigenMark'
import { Scallop } from './art'
import { TryLink, Wrap, H2 } from './ui'
import ScaleBox from './ScaleBox'

// Circles container 1200 x 544; rings centred 99px below its bottom edge (measured on the reference).
// Each ring carries icons every 36 degrees; only the upper five are visible.
const CX = 600, CY = 643, ANGLES = [162, 126, 90, 54, 18]
const OUTER = [<Megaphone key="m" size={26} className="text-[#7a5cff]" />, <Globe key="g" size={26} className="text-[#0071e3]" />, <WhatsAppGlyph key="w" className="h-8 w-8" />, <InstagramGlyph key="i" className="h-8 w-8" />, <Bell key="b" size={26} className="text-[#e08e0b]" />]
const INNER = [<KeyRound key="k" size={24} />, <LayoutDashboard key="l" size={24} />, <Languages key="n" size={24} className="text-[#0071e3]" />, <Code2 key="c" size={24} />, <ShoppingBag key="s" size={24} className="text-[#1d7a36]" />]

const Icon = ({ node, r, a }) => {
  const x = CX + r * Math.cos((a * Math.PI) / 180), y = CY - r * Math.sin((a * Math.PI) / 180)
  return <div className="absolute flex h-16 w-16 items-center justify-center rounded-full bg-[#fafaf9] shadow-[0_10px_30px_-10px_rgba(0,0,0,.28)] ring-1 ring-black/[0.04]" style={{ left: x - 32, top: y - 32 }}>{node}</div>
}

export default function Orbit() {
  return (
    <section className="bg-[#fafaf9] py-20">
      <Wrap className="flex flex-col gap-10">
        <div className="flex flex-col items-center gap-8 text-center"><H2 className="max-w-[780px]">One agent for every channel, working from one dashboard</H2><TryLink href="/try">Try the live demo</TryLink></div>
        <ScaleBox base={1200} min={0} className="mx-auto w-full max-w-[1200px] overflow-hidden">
          <div className="relative h-[544px] w-[1200px] overflow-hidden">
            {[643, 550, 498, 430, 378].map(r => <div key={r} aria-hidden className="absolute rounded-full border border-[#1a1a1a]/[0.07] bg-gradient-to-b from-[#1a1a1a]/[0.02] to-transparent" style={{ width: r * 2, height: r * 2, left: CX - r, top: CY - r }} />)}
            {ANGLES.map((a, i) => <Icon key={'o' + a} node={OUTER[i]} r={550} a={a} />)}
            {ANGLES.map((a, i) => <Icon key={'i' + a} node={INNER[i]} r={430} a={a} />)}
            <Scallop className="absolute left-1/2 top-[440px] h-[120px] w-[120px] -translate-x-1/2" />
          </div>
        </ScaleBox>
      </Wrap>
    </section>
  )
}
