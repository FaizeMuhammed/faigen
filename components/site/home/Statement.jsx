import Reveal from '../Reveal'
import FaigenMark, { WhatsAppGlyph, InstagramGlyph } from '../FaigenMark'

const EVENTS = [
  { time: '12:04 AM', via: 'WhatsApp', Icon: WhatsAppGlyph, who: 'Anjali', ask: 'Do you deliver to Kakkanad?', reply: 'Yes, we deliver to Kakkanad in 2 days. Want me to place the order?', secs: 3 },
  { time: '1:32 AM', via: 'Instagram comment', Icon: InstagramGlyph, who: 'ravi.k', ask: 'price?', reply: 'Replied under the comment and sent the price list to ravi.k by DM.', secs: 4 },
  { time: '2:15 AM', via: 'WhatsApp', Icon: WhatsAppGlyph, who: 'Meera', ask: 'Can I book tomorrow at 10 AM?', reply: '10 AM tomorrow is free. Booked it, and I’ll send you a reminder.', secs: 5 },
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
          <div className="relative mx-auto w-full max-w-[540px]">
            <div aria-hidden className="pointer-events-none absolute -right-16 -top-16 h-[300px] w-[300px] rounded-full bg-[radial-gradient(circle,rgba(0,113,227,.35),transparent_70%)] blur-2xl" />
            <div className="relative rounded-[28px] bg-dark-alt p-6 ring-1 ring-white/10 sm:p-8">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <FaigenMark className="h-7 w-7" />
                  <p className="text-[15px] font-semibold text-white">While you slept</p>
                </div>
                <span className="rounded-full bg-white/10 px-2.5 py-1 text-[12px] text-white/60">Example night</span>
              </div>

              <div className="mt-7 space-y-8">
                {EVENTS.map((e, i) => (
                  <Reveal key={e.time} delay={0.15 + i * 0.15}>
                    <div className="flex items-center gap-2.5 text-[13px] text-white/50">
                      <e.Icon className="h-5 w-5 shrink-0" />
                      <span>{e.time} · {e.via}</span>
                    </div>
                    <p className="mt-2.5 w-fit max-w-[90%] rounded-2xl rounded-tl-md bg-white/10 px-4 py-2.5 text-[15px] leading-snug text-white">
                      <span className="text-white/50">{e.who}:</span> {e.ask}
                    </p>
                    <div className="mt-2.5 flex items-start gap-2.5">
                      <FaigenMark className="mt-0.5 h-7 w-7 shrink-0" />
                      <div className="min-w-0">
                        <p className="rounded-2xl rounded-tl-md bg-[#0071e3]/20 px-4 py-2.5 text-[15px] leading-snug text-white ring-1 ring-[#2997ff]/30">{e.reply}</p>
                        <p className="mt-1.5 pl-1 text-[12px] font-medium text-[#2997ff]">Replied in {e.secs}s</p>
                      </div>
                    </div>
                  </Reveal>
                ))}
              </div>

              <p className="mt-8 border-t border-white/10 pt-5 text-[14.5px] text-white/60">Three customers answered. You were asleep.</p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
