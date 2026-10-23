import { Infinity as InfinityIcon, ShoppingBag, Send, SlidersHorizontal, LayoutDashboard, Code2, UserRoundCheck, ShieldCheck, Languages, Instagram as InstaIcon } from 'lucide-react'
import Reveal from '../Reveal'

function Tile({ icon: Icon, title, text, className = '', dark = false, children }) {
  return (
    <div className={`group relative overflow-hidden rounded-[28px] p-7 transition-transform duration-500 hover:-translate-y-1 sm:p-8 ${dark ? 'bg-ink text-white' : 'bg-alt text-ink'} ${className}`}>
      <span className={`flex h-11 w-11 items-center justify-center rounded-2xl ${dark ? 'bg-white/10 text-white' : 'bg-white text-accent shadow-sm'}`}><Icon size={20} /></span>
      <h3 className="mt-6 text-[22px] font-semibold tracking-[-0.02em]">{title}</h3>
      <p className={`mt-2 max-w-md text-[15.5px] leading-relaxed ${dark ? 'text-white/65' : 'text-muted'}`}>{text}</p>
      {children}
    </div>
  )
}

export default function Bento() {
  return (
    <section className="bg-white section">
      <div className="container-x">
        <Reveal className="mx-auto max-w-3xl text-center">
          <p className="eyebrow">Everything included</p>
          <h2 className="display-lg mt-3">Built to sell, support and scale.</h2>
        </Reveal>

        <div className="mt-16 grid gap-5 md:grid-cols-6">
          <Reveal className="md:col-span-4"><Tile icon={InfinityIcon} title="Unlimited conversations" text="No cap on how many customers message you or how often. One flat monthly fee, whether it's ten chats a day or ten thousand." className="h-full min-h-[280px]">
            <p className="pointer-events-none absolute -bottom-8 -right-2 select-none text-[170px] font-semibold leading-none tracking-tighter text-black/[0.04] transition-transform duration-700 group-hover:scale-105">∞</p>
          </Tile></Reveal>
          <Reveal delay={0.08} className="md:col-span-2"><Tile icon={Languages} title="Speaks their language" text="English, Malayalam and Manglish, detected automatically on every message." className="h-full" /></Reveal>

          <Reveal className="md:col-span-2"><Tile icon={ShoppingBag} title="Orders & catalog" text="Answers from your own products and collects the complete order." className="h-full" /></Reveal>
          <Reveal delay={0.08} className="md:col-span-4"><Tile dark icon={Send} title="Broadcasts & OTP" text="Campaigns to your whole list and verification codes for logins and checkouts — billed only per message sent." className="h-full min-h-[240px]">
            <div className="mt-6 flex flex-wrap gap-3">
              {[['₹0.20', 'Utility / OTP'], ['₹1.10', 'Marketing']].map(([p, l]) => (
                <div key={l} className="rounded-2xl bg-white/10 px-4 py-2.5"><p className="text-[20px] font-semibold tracking-tight">{p}</p><p className="text-[12px] text-white/60">{l} · per message</p></div>
              ))}
            </div>
          </Tile></Reveal>

          <Reveal className="md:col-span-2"><Tile icon={SlidersHorizontal} title="Your rules" text="Trained on your FAQs and tone, with guardrails on what it must never say." className="h-full" /></Reveal>
          <Reveal delay={0.08} className="md:col-span-2"><Tile icon={UserRoundCheck} title="You can step in" text="Pause the AI on any chat and take over whenever you like." className="h-full" /></Reveal>
          <Reveal delay={0.16} className="md:col-span-2"><Tile icon={LayoutDashboard} title="Clear dashboard" text="Conversations, orders, templates and analytics in one place." className="h-full" /></Reveal>

          <Reveal className="md:col-span-2"><Tile icon={InstaIcon} title="Instagram automation" text="Comment-to-DM, smart comment replies, a spam shield and insights. Early access." className="h-full" /></Reveal>
          <Reveal delay={0.08} className="md:col-span-2"><Tile icon={Code2} title="API access" text="API keys and docs to plug messaging and orders into your own systems." className="h-full" /></Reveal>
          <Reveal delay={0.16} className="md:col-span-2"><Tile icon={ShieldCheck} title="Security first" text="An official Meta Tech Provider. Your data stays yours and is never sold." className="h-full" /></Reveal>
        </div>
      </div>
    </section>
  )
}
