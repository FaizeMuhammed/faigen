import Reveal from '../Reveal'
import { PillButton } from '../Buttons'
import { InstaDoodles } from '../Illustrations'
import { InstaArtDm, InstaArtReply, InstaArtSpam, InstaArtStats } from '../Scenes'

const ITEMS = [
  { Art: InstaArtDm, title: 'Comment-to-DM', text: 'Someone comments “price” on your Reel. Faigen answers publicly and sends the details to their DMs.' },
  { Art: InstaArtReply, title: 'Smart comment replies', text: 'The AI drafts replies to questions in your comments. You approve, edit or skip each one — or let it reply on its own.' },
  { Art: InstaArtSpam, title: 'Spam shield', text: 'Abusive and spammy comments are hidden automatically, using the words and rules you choose.' },
  { Art: InstaArtStats, title: 'Instagram insights', text: 'Views, reach, your top Reels and the best time to post — clear numbers, in the same dashboard.' },
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

          <div className="relative mt-16 grid gap-x-8 gap-y-14 sm:grid-cols-2 lg:grid-cols-4">
            {ITEMS.map(({ Art, title, text }, i) => (
              <Reveal key={title} delay={(i % 4) * 0.08}>
                <div className="text-center sm:text-left">
                  <Art className="mx-auto h-36 w-auto sm:mx-0" />
                  <h3 className="mt-5 text-[21px] font-semibold tracking-[-0.02em]">{title}</h3>
                  <p className="mt-2 text-[15.5px] leading-relaxed text-white/60">{text}</p>
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
