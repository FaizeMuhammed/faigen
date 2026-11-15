import { Wrap } from './ui'
import { WhatsAppGlyph, InstagramGlyph } from '../site/FaigenMark'

// The platforms Faigen works on: three small pills. (No customer names or AI model names are claimed here.)
const ITEMS = [
  [<WhatsAppGlyph key="w" className="h-5 w-5" />, 'WhatsApp Business'],
  [<InstagramGlyph key="i" className="h-5 w-5" />, 'Instagram'],
  [<span key="m" className="h-2 w-2 rounded-full bg-[#34c759]" />, 'Meta Tech Provider'],
]

export default function Logos() {
  return (
    <section className="py-10 sm:py-12">
      <Wrap className="flex flex-col items-center gap-5">
        <p className="text-center text-[14px] leading-[19.6px] text-[#71717a]">Built on the platforms your customers already use</p>
        <div className="flex flex-wrap items-center justify-center gap-2.5">
          {ITEMS.map(([icon, label]) => (
            <span key={label} className="inline-flex h-10 items-center gap-2.5 rounded-[20px] bg-white px-4 text-[15px] font-medium leading-[21px] text-[#1a1a1a] ring-1 ring-black/[0.05]">{icon}{label}</span>
          ))}
        </div>
      </Wrap>
    </section>
  )
}
