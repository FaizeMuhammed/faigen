import Reveal from '../Reveal'
import { PillButton, TextLink } from '../Buttons'

export default function FinalCta() {
  return (
    <section className="relative overflow-hidden bg-black text-white section">
      <div aria-hidden className="pointer-events-none absolute inset-0 bg-[radial-gradient(800px_400px_at_50%_110%,rgba(0,113,227,.35),transparent_70%)]" />
      <div className="container-x relative text-center">
        <Reveal>
          <h2 className="display-xl mx-auto max-w-4xl">Ready when your customers are.</h2>
          <p className="lead mx-auto mt-6 max-w-xl text-white/60">Try Faigen on WhatsApp in under a minute, or tell us about your business and we’ll set it up for you.</p>
          <div className="mt-10 flex flex-col items-center justify-center gap-5 sm:flex-row sm:gap-8">
            <PillButton href="/try" tone="light" size="lg" arrow>Try it on WhatsApp</PillButton>
            <TextLink href="/contact" dark>Talk to us</TextLink>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
