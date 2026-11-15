import { Wrap } from './ui'
import { WhatsAppGlyph, InstagramGlyph } from '../site/FaigenMark'

// The platforms Faigen works on: three small pills. Facebook is on the way and says so on hover (or tap / keyboard focus).
const FacebookGlyph = ({ className = '' }) => (
  <svg viewBox="0 0 24 24" className={className} aria-hidden>
    <circle cx="12" cy="12" r="12" fill="#1877f2" />
    <path fill="#fff" d="M16.67 15.47 17.2 12h-3.33V9.75c0-.95.47-1.88 1.96-1.88h1.52V4.92s-1.38-.24-2.7-.24c-2.75 0-4.55 1.67-4.55 4.68V12H7.05v3.47h3.05v8.4a12.1 12.1 0 0 0 3.77 0v-8.4h2.8Z" />
  </svg>
)

export default function Logos() {
  const pill = 'inline-flex h-10 items-center gap-2.5 rounded-[20px] bg-white px-4 text-[15px] font-medium leading-[21px] text-[#1a1a1a] ring-1 ring-black/[0.05]'
  return (
    <section className="py-10 sm:py-12">
      <Wrap className="flex flex-col items-center gap-5">
        <p className="text-center text-[14px] leading-[19.6px] text-[#71717a]">Built on the platforms your customers already use</p>
        <div className="flex flex-wrap items-center justify-center gap-2.5">
          <span className={pill}><WhatsAppGlyph className="h-5 w-5" />WhatsApp Business</span>
          <span className={pill}><InstagramGlyph className="h-5 w-5" />Instagram</span>
          <button type="button" className={`group relative cursor-default ${pill}`} aria-describedby="fb-soon">
            <FacebookGlyph className="h-5 w-5" />Facebook
            <span id="fb-soon" role="tooltip" className="pointer-events-none absolute left-1/2 top-[46px] z-10 -translate-x-1/2 whitespace-nowrap rounded-[12px] bg-[#1a1a1a] px-3 py-1.5 text-[13px] font-medium leading-[18px] text-white opacity-0 shadow-[0_10px_24px_-10px_rgba(0,0,0,.5)] transition-opacity duration-200 group-hover:opacity-100 group-focus:opacity-100">
              Coming soon
              <span aria-hidden className="absolute -top-1 left-1/2 h-2 w-2 -translate-x-1/2 rotate-45 bg-[#1a1a1a]" />
            </span>
          </button>
        </div>
      </Wrap>
    </section>
  )
}
