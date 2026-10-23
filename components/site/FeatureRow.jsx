import { Check } from 'lucide-react'
import Reveal from './Reveal'
import { TextLink } from './Buttons'
import { Blob } from './Illustrations'

// Text on one side, a visual on a soft card on the other. Used on Features and Use cases.
export default function FeatureRow({ eyebrow, title, text, points = [], visual, reverse, badge, link }) {
  return (
    <div className="container-x grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
      <Reveal className={reverse ? 'lg:order-2' : ''}>
        <div className="flex items-center gap-3">
          <p className="eyebrow">{eyebrow}</p>
          {badge && <span className="rounded-full bg-accent-soft px-2.5 py-0.5 text-[11px] font-semibold text-accent">{badge}</span>}
        </div>
        <h2 className="display-md mt-3">{title}</h2>
        <p className="lead mt-5">{text}</p>
        {points.length > 0 && (
          <ul className="mt-7 space-y-3">
            {points.map(p => (
              <li key={p} className="flex items-start gap-3 text-[16px] text-ink">
                <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-accent-soft"><Check size={12} strokeWidth={3.2} className="text-accent" /></span>{p}
              </li>
            ))}
          </ul>
        )}
        {link && <div className="mt-8"><TextLink href={link[1]}>{link[0]}</TextLink></div>}
      </Reveal>
      <Reveal delay={0.12} className={reverse ? 'lg:order-1' : ''}>
        <div className="card relative flex min-h-[440px] items-center justify-center overflow-hidden rounded-[32px] p-6 sm:p-12">
          <Blob className="pointer-events-none absolute -right-14 -top-14 w-64 opacity-60" />
          <div className="relative">{visual}</div>
        </div>
      </Reveal>
    </div>
  )
}
