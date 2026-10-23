import Reveal from '../Reveal'
import { NetworkDiagram } from '../Illustrations'

export default function Statement() {
  return (
    <section className="bg-black text-white section">
      <div className="container-x grid items-center gap-14 lg:grid-cols-[1.05fr_1fr] lg:gap-10">
        <Reveal>
          <p className="eyebrow text-[#2997ff]">Why Faigen</p>
          <h2 className="display-lg mt-3 max-w-xl">Your customers message at midnight. Faigen answers.</h2>
          <p className="lead mt-6 max-w-lg text-white/60">On festival days, in the middle of the lunch rush, from WhatsApp, Instagram or your website — every message gets a reply in seconds, in the language it was written in.</p>
        </Reveal>
        <Reveal delay={0.1}>
          <NetworkDiagram className="mx-auto w-full max-w-[560px]" />
        </Reveal>
      </div>
    </section>
  )
}
