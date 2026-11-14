import { ArrowUpRight, NotebookPen, Bot, Rocket } from 'lucide-react'
import { GreyPill, Wrap, H2 } from './ui'

// Three cards 376 x 430 (radius 24, padding 24), as on the reference's case cards:
// label top left, dark arrow top right, text at the bottom (first sentence dark, rest grey).
// On hover a soft picture fades in over the card.
const STEPS = [
  { Icon: NotebookPen, n: 'Step 1', lead: 'Tell us about your business.', rest: ' Share your products, services, prices and FAQs. A spreadsheet, a PDF or even photos are fine.', disc: '#e6d4ff', img: '/sb/case-1.jpg', hl: '#1a1a1a', hr: 'rgba(26,26,26,.62)' },
  { Icon: Bot, n: 'Step 2', lead: 'We train and connect your agent.', rest: ' We set up the AI, connect your official WhatsApp number and test it with real questions.', disc: '#ffd6ea', img: '/sb/case-2.jpg', hl: '#1a1a1a', hr: 'rgba(26,26,26,.62)' },
  { Icon: Rocket, n: 'Step 3', lead: 'Go live in 24–48 hours.', rest: ' Your agent starts replying. You watch every conversation and order from your dashboard.', disc: '#dbfc74', img: '/sb/case-3.jpg', hl: '#ffffff', hr: 'rgba(255,255,255,.82)' },
]

export default function Cases() {
  return (
    <section className="bg-[#fafaf9] py-20">
      <Wrap className="flex flex-col gap-10">
        <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
          <H2 className="max-w-[600px] !text-left">Live in days, not months. <span className="text-[#a1a1aa]">You share the details. We do the rest.</span></H2>
          <GreyPill href="/contact" tall>Talk to us</GreyPill>
        </div>
        <div className="grid gap-2 rounded-[32px] bg-[#f0eeeb]/70 p-2 md:grid-cols-3">
          {STEPS.map(({ Icon, n, lead, rest, disc, img, hl, hr }) => (
            <div key={n} className="sb-case" style={{ minHeight: 430, display: 'flex', flexDirection: 'column', justifyContent: 'space-between', background: '#fafaf9', borderRadius: 24, padding: 24, '--hl': hl, '--hr': hr }}>
              <div aria-hidden className="sb-case-bg" style={{ backgroundImage: `url(${img})` }} />
              <div style={{ position: 'relative', zIndex: 2, display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '20px 0' }}>
                <span style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                  <span style={{ width: 30, height: 30, borderRadius: 15, background: disc, display: 'flex', alignItems: 'center', justifyContent: 'center' }}><Icon size={16} strokeWidth={1.8} color="#1a1a1a" /></span>
                  <span className="font-heading" style={{ fontSize: 24, fontWeight: 600, letterSpacing: '-0.02em', color: '#1a1a1a' }}>{n}</span>
                </span>
                <span style={{ width: 24, height: 24, borderRadius: 12, background: '#1a1a1a', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><ArrowUpRight size={14} /></span>
              </div>
              <p style={{ position: 'relative', zIndex: 2, margin: 0, fontSize: 19, lineHeight: '26.6px', fontWeight: 400 }}><span className="sb-lead">{lead}</span><span className="sb-rest">{rest}</span></p>
            </div>
          ))}
        </div>
      </Wrap>
    </section>
  )
}
