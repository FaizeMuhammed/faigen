import Nav from '@/components/site/Nav'
import Footer from '@/components/site/Footer'
import PageHero from '@/components/site/PageHero'
import Reveal from '@/components/site/Reveal'
import FinalCta from '@/components/site/home/FinalCta'
import { MoonDoodle } from '@/components/site/Illustrations'

export const metadata = {
  title: 'About — Faigen',
  description: 'Faigen is a Kerala-based team building AI agents that answer your customers on WhatsApp and Instagram.',
}

const STATS = [
  ['24/7', 'Always online. No downtime, no missed messages.'],
  ['24–48h', 'From sharing your details to going live.'],
  ['3', 'Languages understood: English, Malayalam and Manglish.'],
]

const VALUES = [
  ['01', 'Built for conversion', 'Every reply is meant to move a customer closer to an order or a booking, not just to answer.'],
  ['02', 'Local by design', 'Customers write the way they speak. The agent understands context and replies in kind.'],
  ['03', 'Frictionless setup', 'No coding, no messy integrations. You share your business details; we hand you a trained agent.'],
  ['04', 'Your data stays yours', 'We are an official Meta Tech Provider. Your data is never sold, and you can delete it any time.'],
]

export default function AboutPage() {
  return (
    <>
      <Nav />
      <main>
        <PageHero
          eyebrow="About"
          title="We help Kerala’s businesses answer every customer."
          lead="Faigen is a Kerala-based team building AI agents that handle customer conversations, orders and follow-ups on WhatsApp and Instagram."
        />

        {/* story + pull quote */}
        <section className="bg-white section !pt-8">
          <div className="container-x grid items-stretch gap-10 lg:grid-cols-2 lg:gap-16">
            <Reveal>
              <p className="eyebrow">Our story</p>
              <h2 className="display-md mt-3">Born from a simple observation.</h2>
              <div className="lead mt-6 space-y-5">
                <p>Kerala businesses are brilliant at what they do, but lose customers every day because they can’t reply fast enough. A customer asks about a product at midnight. Nobody answers. They go to a competitor.</p>
                <p>We built Faigen to fix exactly that. Our agents never sleep, never miss a message, and speak your customer’s language, whether you run a local boutique or a large agency.</p>
              </div>
            </Reveal>
            <Reveal delay={0.12}>
              <div className="relative flex h-full min-h-[360px] flex-col justify-end overflow-hidden rounded-[36px] bg-black p-8 text-white sm:p-12">
                <div aria-hidden className="pointer-events-none absolute -right-24 -top-24 h-[380px] w-[380px] rounded-full bg-[radial-gradient(circle,rgba(0,113,227,.55),transparent_70%)] blur-2xl" />
                <div aria-hidden className="pointer-events-none absolute -bottom-32 -left-16 h-[300px] w-[300px] rounded-full bg-[radial-gradient(circle,rgba(214,41,118,.4),rgba(250,126,30,.2)_50%,transparent_70%)] blur-2xl" />
                <MoonDoodle className="pointer-events-none absolute right-8 top-8 h-28 w-32" />
                <p className="relative text-[clamp(1.9rem,3.6vw,2.8rem)] font-semibold leading-[1.1] tracking-[-0.035em]">
                  Your customers never sleep.{' '}
                  <span className="bg-gradient-to-r from-[#2997ff] to-[#7dd3fc] bg-clip-text text-transparent">Neither does our AI.</span>
                </p>
              </div>
            </Reveal>
          </div>
        </section>

        {/* three numbers */}
        <section className="bg-alt section !py-16 sm:!py-24">
          <div className="container-x">
            <div className="grid gap-10 text-center sm:grid-cols-3 sm:gap-6">
              {STATS.map(([n, l], i) => (
                <Reveal key={n} delay={i * 0.1}>
                  <p className="bg-gradient-to-br from-[#0071e3] to-[#5ac8fa] bg-clip-text text-[64px] font-semibold leading-none tracking-[-0.05em] text-transparent sm:text-[80px]">{n}</p>
                  <p className="mx-auto mt-4 max-w-[230px] text-[16px] leading-snug text-muted">{l}</p>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* values as an editorial list */}
        <section className="bg-white section">
          <div className="container-x max-w-4xl">
            <Reveal className="text-center"><p className="eyebrow">What we believe</p><h2 className="display-lg mt-3">Simple, useful, trustworthy.</h2></Reveal>
            <div className="mt-14 divide-y divide-black/10 border-y border-black/10">
              {VALUES.map(([n, t, d], i) => (
                <Reveal key={n} delay={i * 0.06}>
                  <div className="grid gap-3 py-8 sm:grid-cols-[90px_1fr_1.3fr] sm:items-baseline sm:gap-8 sm:py-10">
                    <span className="text-[34px] leading-none text-accent" style={{ fontFamily: 'var(--font-hand), cursive', fontWeight: 600 }}>{n}</span>
                    <h3 className="text-[24px] font-semibold tracking-[-0.025em]">{t}</h3>
                    <p className="text-[16.5px] leading-relaxed text-muted">{d}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <FinalCta />
      </main>
      <Footer />
    </>
  )
}
