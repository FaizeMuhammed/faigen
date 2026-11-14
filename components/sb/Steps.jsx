import { NotebookPen, Bot, Rocket } from 'lucide-react'

const STEPS = [
  { Icon: NotebookPen, t: 'Tell us about your business', d: 'Share your products, services, prices and FAQs. A spreadsheet, a PDF or even photos are fine.', tone: 'from-[#e1d1ff] to-[#cdb9ff]' },
  { Icon: Bot, t: 'We train and connect your agent', d: 'We set up the AI, connect your official WhatsApp number and test it with real questions.', tone: 'from-[#ffd3e6] to-[#ffcab6]' },
  { Icon: Rocket, t: 'Go live in 24–48 hours', d: 'Your agent starts replying. You watch every conversation and order from your dashboard.', tone: 'from-[#efffb8] to-[#cdf56e]' },
]

export default function Steps() {
  return (
    <section className="py-16 sm:py-24">
      <div className="mx-auto w-[min(1200px,100%-2.5rem)]">
        <h2 className="max-w-3xl text-[clamp(2.2rem,4.6vw,3.4rem)] text-balance font-medium leading-[1.06] tracking-[-0.03em]">Live in days, not months. <span className="text-[#1a1a1a]/40">You share the details. We do the rest.</span></h2>
        <div className="mt-12 grid gap-4 rounded-[36px] bg-[#eeede6] p-3 md:grid-cols-3">
          {STEPS.map(({ Icon, t, d, tone }, i) => (
            <div key={t} className="rounded-[28px] bg-[#fafaf8] p-4">
              <div className={`relative flex h-52 items-center justify-center rounded-[22px] bg-gradient-to-br ${tone}`}>
                <span className="absolute left-4 top-4 rounded-full bg-white px-3 py-1 text-[13px] font-semibold">Step {i + 1}</span>
                <span className="flex h-20 w-20 items-center justify-center rounded-[24px] bg-white shadow-[0_16px_36px_-14px_rgba(0,0,0,.35)]"><Icon size={34} strokeWidth={1.6} /></span>
              </div>
              <div className="px-3 pb-3 pt-6"><h3 className="text-[23px] font-medium leading-tight tracking-[-0.02em]">{t}</h3><p className="mt-2 text-[16px] leading-snug text-[#1a1a1a]/60">{d}</p></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
