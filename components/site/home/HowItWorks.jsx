import Reveal from '../Reveal'
import { StepNotebook, StepAgent, StepLaunch } from '../Illustrations'

const STEPS = [
  { Art: StepNotebook, t: 'Tell us about your business', d: 'Share your products, services, prices and FAQs. A spreadsheet, a PDF or even photos are fine.' },
  { Art: StepAgent, t: 'We train and connect your agent', d: 'We set up the AI, connect your official WhatsApp number and test it with real questions.' },
  { Art: StepLaunch, t: 'Go live in 24–48 hours', d: 'Your agent starts replying. You watch every conversation and order from your dashboard.' },
]

export default function HowItWorks() {
  return (
    <section className="bg-white section">
      <div className="container-x">
        <Reveal className="mx-auto max-w-3xl text-center">
          <p className="eyebrow">How it works</p>
          <h2 className="display-lg mt-3">Live in days, not months.</h2>
          <p className="lead mt-5">You share the details. We do the rest.</p>
        </Reveal>
        <div className="mt-16 grid gap-10 md:grid-cols-3 md:gap-6">
          {STEPS.map(({ Art, t, d }, i) => (
            <Reveal key={t} delay={i * 0.08}>
              <div className="text-center md:px-3">
                <Art className="mx-auto h-44 w-auto" />
                <p className="mt-6 text-[13px] font-semibold text-accent">Step {i + 1}</p>
                <h3 className="mt-1.5 text-[22px] font-semibold tracking-[-0.02em]">{t}</h3>
                <p className="mx-auto mt-3 max-w-xs text-[16px] leading-relaxed text-muted">{d}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
