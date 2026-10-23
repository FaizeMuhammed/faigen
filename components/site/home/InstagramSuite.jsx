import { MessageCircle, Reply, ShieldCheck, BarChart3 } from 'lucide-react'
import Reveal from '../Reveal'
import { TextLink } from '../Buttons'
import { InstaDoodles } from '../Illustrations'

const ITEMS = [
  { icon: MessageCircle, title: 'Comment-to-DM', text: 'Someone comments “price” on your Reel. Faigen answers publicly and sends the details to their DMs.' },
  { icon: Reply, title: 'Smart comment replies', text: 'The AI drafts replies to questions in your comments. You approve, edit or skip each one — or let it reply on its own.' },
  { icon: ShieldCheck, title: 'Spam shield', text: 'Abusive and spammy comments are hidden automatically, using the words and rules you choose.' },
  { icon: BarChart3, title: 'Instagram insights', text: 'Views, reach, your top Reels and the best time to post — clear numbers, in the same dashboard.' },
]

export default function InstagramSuite() {
  return (
    <section className="bg-white pb-8 pt-4 sm:pt-10">
      <div className="container-wide">
        <div className="relative overflow-hidden rounded-[36px] bg-black px-6 py-16 text-white sm:rounded-[44px] sm:px-14 sm:py-24">
          <div aria-hidden className="pointer-events-none absolute -right-24 -top-32 h-[420px] w-[420px] rounded-full bg-[radial-gradient(circle,rgba(214,41,118,.45),rgba(250,126,30,.22)_45%,transparent_70%)] blur-2xl" />
          <div aria-hidden className="pointer-events-none absolute -bottom-40 -left-24 h-[380px] w-[380px] rounded-full bg-[radial-gradient(circle,rgba(0,113,227,.35),transparent_70%)] blur-2xl" />

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
                  <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-white/12 text-white"><it.icon size={20} /></span>
                  <h3 className="mt-5 text-[21px] font-semibold tracking-[-0.02em]">{it.title}</h3>
                  <p className="mt-2 text-[15.5px] leading-relaxed text-white/65">{it.text}</p>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal className="relative mt-10"><TextLink href="/contact" dark>Get early access</TextLink></Reveal>
        </div>
      </div>
    </section>
  )
}
