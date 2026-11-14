import { Wrap } from './ui'
import { WhatsAppGlyph, InstagramGlyph } from '../site/FaigenMark'

// Platforms and AI models Faigen works with (no customer names are claimed here)
const ROW1 = [[<WhatsAppGlyph key="w" className="h-8 w-8" />, 'WhatsApp Business'], [<InstagramGlyph key="i" className="h-8 w-8" />, 'Instagram'], [null, 'Meta Tech Provider']]
const ROW2 = [[null, 'Gemini'], [null, 'OpenAI'], [null, 'Claude'], [null, 'Groq']]

const Logo = ({ icon, label }) => (
  <div className="flex h-[74px] items-center justify-center gap-3 px-8 text-[22px] font-medium tracking-[-0.01em] text-[#1a1a1a]/70">{icon}{label}</div>
)

export default function Logos() {
  return (
    <section className="py-20">
      <Wrap className="flex flex-col gap-10">
        <p className="mx-auto max-w-[780px] text-center text-[clamp(1.05rem,1.5vw,1.3125rem)] leading-[1.4] text-[#535353]">Built on the platforms your customers already use, and the AI models you choose</p>
        <div className="mx-auto flex w-full max-w-[1160px] flex-col gap-5">
          <div className="flex flex-wrap items-center justify-center gap-x-6">{ROW1.map(([i, l]) => <Logo key={l} icon={i} label={l} />)}</div>
          <div className="flex flex-wrap items-center justify-center gap-x-6">{ROW2.map(([i, l]) => <Logo key={l} icon={i} label={l} />)}</div>
        </div>
      </Wrap>
    </section>
  )
}
