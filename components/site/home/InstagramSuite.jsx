import { MessageCircle, Reply, ShieldCheck, BarChart3, ArrowRight, EyeOff, Check } from 'lucide-react'
import Reveal from '../Reveal'
import { PillButton } from '../Buttons'
import { InstaDoodles } from '../Illustrations'

/* Tiny pictures that show what each feature does */
const Mini = {
  dm: () => (
    <div className="flex h-full items-center gap-2.5">
      <p className="rounded-2xl rounded-bl-md bg-white/10 px-3 py-2 text-[12.5px] leading-tight text-white"><span className="font-semibold">ravi.k</span> price?</p>
      <ArrowRight size={16} className="shrink-0 text-[#ff9ec7]" />
      <p className="rounded-2xl rounded-br-md bg-gradient-to-br from-[#d62976] to-[#fa7e1e] px-3 py-2 text-[12.5px] leading-tight text-white">Here’s the price list 📩</p>
    </div>
  ),
  reply: () => (
    <div className="flex h-full flex-col justify-center gap-2.5">
      <p className="rounded-xl bg-white/10 px-3 py-2 text-[12.5px] leading-tight text-white/90">Yes, we deliver to Aluva — 2 days!</p>
      <div className="flex gap-2 text-[12px] font-medium">
        <span className="inline-flex items-center gap-1 rounded-full bg-[#0071e3] px-3 py-1 text-white"><Check size={12} strokeWidth={3} /> Approve</span>
        <span className="rounded-full bg-white/10 px-3 py-1 text-white/80">Edit</span>
        <span className="rounded-full bg-white/10 px-3 py-1 text-white/80">Skip</span>
      </div>
    </div>
  ),
  spam: () => (
    <div className="flex h-full flex-col justify-center gap-2">
      <div className="flex items-center gap-2 text-[12.5px]"><span className="text-white/35 line-through">buy followers now!!! click link</span><span className="ml-auto inline-flex shrink-0 items-center gap-1 rounded-full bg-white/10 px-2 py-0.5 text-[11px] text-white/70"><EyeOff size={11} /> Hidden</span></div>
      <p className="text-[12.5px] text-white/90"><span className="font-semibold">meera.s</span> Love this! Do you ship to Dubai?</p>
    </div>
  ),
  stats: () => (
    <div className="flex h-full items-end gap-4">
      <div className="flex h-full flex-1 items-end gap-1.5">
        {[34, 48, 40, 62, 54, 82, 70].map((h, i) => <span key={i} className={`flex-1 rounded-t ${i === 5 ? 'bg-[#2997ff]' : 'bg-white/20'}`} style={{ height: `${h}%` }} />)}
      </div>
      <div className="pb-0.5 text-right leading-tight"><p className="text-[11px] text-white/50">Best time to post</p><p className="text-[15px] font-semibold text-white">7 PM</p></div>
    </div>
  ),
}

const ITEMS = [
  { mini: 'dm', icon: MessageCircle, title: 'Comment-to-DM', text: 'Someone comments “price” on your Reel. Faigen answers publicly and sends the details to their DMs.' },
  { mini: 'reply', icon: Reply, title: 'Smart comment replies', text: 'The AI drafts replies to questions in your comments. You approve, edit or skip each one — or let it reply on its own.' },
  { mini: 'spam', icon: ShieldCheck, title: 'Spam shield', text: 'Abusive and spammy comments are hidden automatically, using the words and rules you choose.' },
  { mini: 'stats', icon: BarChart3, title: 'Instagram insights', text: 'Views, reach, your top Reels and the best time to post — clear numbers, in the same dashboard.' },
]

export default function InstagramSuite() {
  return (
    <section className="relative overflow-hidden bg-black text-white">
      <div aria-hidden className="pointer-events-none absolute right-0 top-0 translate-x-1/3 -translate-y-1/3 h-[520px] w-[520px] rounded-full bg-[radial-gradient(circle,rgba(214,41,118,.45),rgba(250,126,30,.22)_45%,transparent_70%)] blur-2xl" />
      <div aria-hidden className="pointer-events-none absolute bottom-0 left-0 -translate-x-1/3 translate-y-1/3 h-[460px] w-[460px] rounded-full bg-[radial-gradient(circle,rgba(0,113,227,.35),transparent_70%)] blur-2xl" />
      <div className="container-x">
        <div className="relative py-20 sm:py-28">

          <InstaDoodles className="pointer-events-none absolute right-6 top-8 hidden w-[300px] opacity-90 lg:block xl:right-12 xl:w-[340px]" />

          <div className="relative max-w-3xl">
            <Reveal>
              <div className="flex items-center gap-3">
                <p className="eyebrow text-[#ff9ec7]">Instagram</p>
                <span className="rounded-full bg-white/15 px-2.5 py-0.5 text-[11px] font-semibold">Early access</span>
              </div>
              <h2 className="display-lg mt-3">Your Instagram, on autopilot.</h2>
              <p className="lead mt-5 text-white/65">The same agent that handles your WhatsApp now works your Instagram too — comments, DMs and the numbers behind them.</p>
            </Reveal>
          </div>

          <div className="relative mt-14 grid gap-4 sm:grid-cols-2">
            {ITEMS.map((it, i) => (
              <Reveal key={it.title} delay={(i % 2) * 0.1}>
                <div className="h-full rounded-[26px] bg-white/[0.07] p-7 ring-1 ring-white/10 backdrop-blur transition-all duration-500 hover:-translate-y-1 hover:bg-white/[0.11]">
                  <div className="h-[104px] overflow-hidden rounded-2xl bg-black/45 p-4 ring-1 ring-white/10">{Mini[it.mini]()}</div>
                  <div className="mt-6 flex items-center gap-3">
                    <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-white/12 text-white"><it.icon size={17} /></span>
                    <h3 className="text-[21px] font-semibold tracking-[-0.02em]">{it.title}</h3>
                  </div>
                  <p className="mt-3 text-[15.5px] leading-relaxed text-white/65">{it.text}</p>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal className="relative mt-10 flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:gap-6">
            <PillButton href="/contact" tone="light" arrow>Get early access</PillButton>
            <p className="text-[15px] text-white/55">Rolling out to early customers first.</p>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
