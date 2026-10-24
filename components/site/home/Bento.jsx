import { Infinity as InfinityIcon, Send, SlidersHorizontal, Code2, UserRoundCheck, Languages, Check } from 'lucide-react'
import Reveal from '../Reveal'
import { InfinityDoodle } from '../Illustrations'

function Tile({ icon: Icon, title, text, className = '', dark = false, children }) {
  return (
    <div className={`group relative flex h-full flex-col overflow-hidden rounded-[28px] p-7 transition-transform duration-500 hover:-translate-y-1 sm:p-8 ${dark ? 'bg-ink text-white' : 'bg-alt text-ink'} ${className}`}>
      <span className={`flex h-11 w-11 items-center justify-center rounded-2xl ${dark ? 'bg-white/10 text-white' : 'bg-white text-accent shadow-sm'}`}><Icon size={20} /></span>
      <h3 className="mt-6 text-[22px] font-semibold tracking-[-0.02em]">{title}</h3>
      <p className={`mt-2 max-w-md text-[15.5px] leading-relaxed ${dark ? 'text-white/65' : 'text-muted'}`}>{text}</p>
      {children}
    </div>
  )
}

const Pill = ({ children, dark = false }) => (
  <span className={`rounded-full px-3 py-1.5 text-[13px] font-medium ${dark ? 'bg-white/10 text-white' : 'bg-white text-ink shadow-sm'}`}>{children}</span>
)

export default function Bento() {
  return (
    <section className="bg-white section">
      <div className="container-x">
        <Reveal className="mx-auto max-w-3xl text-center">
          <p className="eyebrow">Everything included</p>
          <h2 className="display-lg mt-3">Built to sell, support and scale.</h2>
        </Reveal>

        <div className="mt-16 grid gap-5 md:grid-cols-6">
          <Reveal className="md:col-span-4">
            <Tile icon={InfinityIcon} title="Unlimited conversations" text="No cap on how many customers message you or how often. One flat monthly fee, whether it's ten chats a day or ten thousand.">
              <InfinityDoodle className="pointer-events-none absolute -bottom-2 right-4 hidden w-[210px] sm:block" />
            </Tile>
          </Reveal>
          <Reveal delay={0.08} className="md:col-span-2">
            <Tile icon={Languages} title="Speaks their language" text="Detected automatically on every message, and answered the same way.">
              <div className="mt-6 flex flex-wrap gap-2"><Pill>English</Pill><Pill>Malayalam</Pill><Pill>Manglish</Pill></div>
            </Tile>
          </Reveal>

          <Reveal className="md:col-span-3">
            <Tile icon={SlidersHorizontal} title="Your rules" text="Trained on your FAQs and tone, with guardrails on what it must never say.">
              <div className="mt-6 space-y-2 text-[13.5px]">
                <p className="flex items-center gap-2 rounded-xl bg-white px-3.5 py-2.5 shadow-sm"><Check size={15} strokeWidth={3} className="text-accent" /> Friendly, short replies</p>
                <p className="flex items-center gap-2 rounded-xl bg-white px-3.5 py-2.5 shadow-sm"><Check size={15} strokeWidth={3} className="text-accent" /> Never promise what you don’t offer</p>
              </div>
            </Tile>
          </Reveal>
          <Reveal delay={0.08} className="md:col-span-3">
            <Tile icon={UserRoundCheck} title="You can step in" text="Pause the AI on any chat and take over whenever you like — it steps back when you do.">
              <div className="mt-6 flex items-center justify-between rounded-xl bg-white px-4 py-3 shadow-sm">
                <div className="flex items-center gap-3"><span className="flex h-8 w-8 items-center justify-center rounded-full bg-ink text-[12px] font-semibold text-white">A</span><div className="leading-tight"><p className="text-[13.5px] font-medium text-ink">Anjali Menon</p><p className="text-[12px] text-muted">AI is replying</p></div></div>
                <span className="flex h-6 w-11 items-center rounded-full bg-accent p-0.5"><span className="ml-auto h-5 w-5 rounded-full bg-white shadow" /></span>
              </div>
            </Tile>
          </Reveal>

          <Reveal className="md:col-span-4">
            <Tile dark icon={Send} title="Broadcasts & OTP" text="Campaigns to your whole list and verification codes for logins and checkouts — billed only per message sent.">
              <div className="mt-6 flex flex-wrap gap-3">
                {[['₹0.20', 'Utility / OTP'], ['₹1.10', 'Marketing']].map(([p, l]) => (
                  <div key={l} className="rounded-2xl bg-white/10 px-4 py-2.5"><p className="text-[20px] font-semibold tracking-tight">{p}</p><p className="text-[12px] text-white/60">{l} · per message</p></div>
                ))}
              </div>
            </Tile>
          </Reveal>
          <Reveal delay={0.08} className="md:col-span-2">
            <Tile icon={Code2} title="Open and secure" text="API keys and docs for your own systems. An official Meta Tech Provider; your data is never sold.">
              <div className="mt-6 flex flex-wrap gap-2"><Pill>API keys</Pill><Pill>Meta Tech Provider</Pill></div>
            </Tile>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
