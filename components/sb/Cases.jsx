import { ArrowUpRight, NotebookPen, Bot, Rocket } from 'lucide-react'
import { GreyPill, Wrap, H2 } from './ui'

// Three cards 376 x 430 (radius 24, padding 24) with a 24px dark arrow, as on the reference's case cards
const STEPS = [
  { Icon: NotebookPen, n: 'Step 1', lead: 'Tell us about your business.', rest: ' Share your products, services, prices and FAQs. A spreadsheet, a PDF or even photos are fine.', bg: 'linear-gradient(160deg,#e6d4ff,#cdb2ff)' },
  { Icon: Bot, n: 'Step 2', lead: 'We train and connect your agent.', rest: ' We set up the AI, connect your official WhatsApp number and test it with real questions.', bg: 'linear-gradient(160deg,#ffd6ea,#ffc9b6)' },
  { Icon: Rocket, n: 'Step 3', lead: 'Go live in 24–48 hours.', rest: ' Your agent starts replying. You watch every conversation and order from your dashboard.', bg: 'linear-gradient(160deg,#ecffb0,#dbfc74)' },
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
          {STEPS.map(({ Icon, n, lead, rest, bg }) => (
            <div key={n} className="flex min-h-[430px] flex-col rounded-[24px] bg-[#fafaf9] p-6 ring-1 ring-black/[0.04]">
              <div className="flex items-center justify-between py-5"><span className="rounded-full bg-white px-3.5 py-1.5 text-[14px] font-medium ring-1 ring-black/[0.05]">{n}</span><span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#1a1a1a] p-1 text-white"><ArrowUpRight size={14} /></span></div>
              <div className="flex flex-1 items-center justify-center rounded-[16px]" style={{ background: bg }}><span className="flex h-20 w-20 items-center justify-center rounded-[24px] bg-white shadow-[0_16px_36px_-14px_rgba(0,0,0,.35)]"><Icon size={34} strokeWidth={1.6} /></span></div>
              <p className="mt-6 text-[21px] font-normal leading-[29.4px] text-[#a1a1aa]"><span className="text-[#1a1a1a]">{lead}</span>{rest}</p>
            </div>
          ))}
        </div>
      </Wrap>
    </section>
  )
}
