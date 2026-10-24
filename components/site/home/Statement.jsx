import { MessageCircle, Instagram, Check } from 'lucide-react'
import Reveal from '../Reveal'

const EVENTS = [
  { time: '12:04 AM', icon: MessageCircle, who: 'Anjali', via: 'WhatsApp', ask: 'Do you deliver to Kakkanad?', did: 'Answered with delivery details', secs: 3 },
  { time: '1:32 AM', icon: Instagram, who: 'ravi.k', via: 'Instagram comment', ask: 'price?', did: 'Replied publicly and sent the price list by DM', secs: 4 },
  { time: '2:15 AM', icon: MessageCircle, who: 'Meera', via: 'WhatsApp', ask: 'Can I book tomorrow at 10 AM?', did: 'Booked the slot and confirmed', secs: 5 },
]

export default function Statement() {
  return (
    <section className="bg-black text-white section">
      <div className="container-x grid items-center gap-14 lg:grid-cols-[1fr_1.05fr] lg:gap-16">
        <Reveal>
          <p className="eyebrow text-[#2997ff]">Why Faigen</p>
          <h2 className="display-lg mt-3 max-w-xl">Your customers message at midnight. Faigen answers.</h2>
          <p className="lead mt-6 max-w-lg text-white/60">On festival days, in the middle of the lunch rush, from WhatsApp, Instagram or your website — every message gets a reply in seconds, in the language it was written in.</p>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="mx-auto w-full max-w-[520px]">
            <div className="rounded-[28px] bg-dark-alt p-6 ring-1 ring-white/10 sm:p-8">
              <div className="flex items-center justify-between">
                <p className="text-[15px] font-semibold text-white">While you slept</p>
                <span className="rounded-full bg-white/10 px-2.5 py-1 text-[12px] text-white/60">Example night</span>
              </div>
              <ol className="relative mt-7 space-y-7 pl-9">
                <span aria-hidden className="absolute bottom-2 left-[13px] top-2 w-px bg-white/15" />
                {EVENTS.map((e, i) => (
                  <Reveal as="li" key={e.time} delay={0.15 + i * 0.15} className="relative">
                    <span className="absolute -left-9 top-0.5 flex h-[27px] w-[27px] items-center justify-center rounded-full bg-black ring-1 ring-white/20"><e.icon size={13} className="text-white/80" /></span>
                    <div className="flex items-baseline justify-between gap-3">
                      <p className="text-[13px] font-medium text-white/50">{e.time} · {e.via}</p>
                      <span className="shrink-0 rounded-full bg-[#0071e3]/20 px-2 py-0.5 text-[12px] font-medium text-[#2997ff]">{e.secs}s</span>
                    </div>
                    <p className="mt-1.5 w-fit max-w-full rounded-2xl rounded-tl-md bg-white/10 px-3.5 py-2 text-[14.5px] leading-snug text-white">{e.who}: “{e.ask}”</p>
                    <p className="mt-2 flex items-start gap-2 text-[14px] leading-snug text-white/65"><Check size={15} strokeWidth={3} className="mt-0.5 shrink-0 text-[#2997ff]" />{e.did}</p>
                  </Reveal>
                ))}
              </ol>
              <p className="mt-8 border-t border-white/10 pt-5 text-[14.5px] text-white/60">Three customers answered. You were asleep.</p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
