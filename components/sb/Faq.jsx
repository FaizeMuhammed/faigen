import { Plus } from 'lucide-react'
import { FAQS } from '@/lib/site'

export default function Faq() {
  return (
    <section className="py-16 sm:py-24">
      <div className="mx-auto w-[min(860px,100%-2.5rem)]">
        <h2 className="text-center text-[clamp(2.2rem,4.6vw,3.4rem)] text-balance font-medium leading-[1.06] tracking-[-0.03em]">Questions, answered.</h2>
        <div className="mt-12 space-y-3">
          {FAQS.slice(0, 7).map(f => (
            <details key={f.q} className="group rounded-[24px] bg-[#eeede6] px-6 py-5 [&_summary::-webkit-details-marker]:hidden">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-[18px] font-medium tracking-[-0.01em]">{f.q}<span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#fafaf8] transition-transform group-open:rotate-45"><Plus size={18} /></span></summary>
              <p className="mt-3 max-w-[680px] text-[16.5px] leading-relaxed text-[#1a1a1a]/65">{f.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}
