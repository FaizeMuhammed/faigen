import Reveal from '../Reveal'
import { TextLink } from '../Buttons'
import PlanCards from '../PlanCards'

export default function PricingTeaser() {
  return (
    <section className="bg-alt section">
      <div className="container-x">
        <Reveal className="mx-auto max-w-3xl text-center">
          <p className="eyebrow">Pricing</p>
          <h2 className="display-lg mt-3">Simple, flat, honest.</h2>
          <p className="lead mt-5">One setup fee, one monthly fee. Unlimited conversations on every plan.</p>
        </Reveal>

        <div className="mt-14"><PlanCards /></div>
        <Reveal className="mt-10 text-center"><TextLink href="/pricing">Compare plans and message rates</TextLink></Reveal>
      </div>
    </section>
  )
}
