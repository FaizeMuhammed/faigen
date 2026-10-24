import Reveal from '../Reveal'
import Accordion from '../Accordion'
import { TextLink } from '../Buttons'
import { DoodleAsk } from '../Illustrations'
import { FAQS } from '@/lib/site'

export default function Faq() {
  return (
    <section className="bg-white section">
      <div className="container-x max-w-3xl">
        <Reveal className="relative text-center">
          <DoodleAsk className="pointer-events-none absolute -right-16 -top-6 hidden h-24 w-24 lg:block" />
          <p className="eyebrow">Questions</p>
          <h2 className="display-lg mt-3">Good to know.</h2>
        </Reveal>
        <Reveal delay={0.1} className="mt-12"><Accordion items={FAQS} /></Reveal>
        <Reveal className="mt-10 text-center"><p className="text-muted">Something else on your mind?</p><div className="mt-2"><TextLink href="/contact">Talk to our team</TextLink></div></Reveal>
      </div>
    </section>
  )
}
