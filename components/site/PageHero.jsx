import Reveal from './Reveal'
import { Blob, Sparkle } from './Illustrations'

// Shared top-of-page block for inner pages: eyebrow, big title, lead, optional actions.
export default function PageHero({ eyebrow, title, lead, children, dark = false }) {
  return (
    <section className={`relative overflow-hidden pt-36 pb-16 sm:pt-44 sm:pb-24 ${dark ? 'bg-black text-white' : 'bg-white'}`}>
      <Blob className="pointer-events-none absolute -right-24 -top-24 w-[420px] opacity-50" />
      <Sparkle className="pointer-events-none absolute left-[8%] top-40 hidden w-6 sm:block" />
      <div className="container-x relative text-center">
        <Reveal>
          {eyebrow && <p className="eyebrow">{eyebrow}</p>}
          <h1 className="display-xl mx-auto mt-4 max-w-4xl">{title}</h1>
          {lead && <p className={`lead mx-auto mt-6 max-w-2xl ${dark ? 'text-white/60' : ''}`}>{lead}</p>}
          {children && <div className="mt-9 flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-6">{children}</div>}
        </Reveal>
      </div>
    </section>
  )
}
