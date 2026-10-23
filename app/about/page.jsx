import { Zap, Languages, Handshake, ShieldCheck } from 'lucide-react'
import Nav from '@/components/site/Nav'
import Footer from '@/components/site/Footer'
import PageHero from '@/components/site/PageHero'
import Reveal from '@/components/site/Reveal'
import FinalCta from '@/components/site/home/FinalCta'
import { Blob } from '@/components/site/Illustrations'

export const metadata = {
  title: 'About — Faigen',
  description: 'Faigen is a Kerala-based team building AI agents that answer your customers on WhatsApp and Instagram.',
}

const STATS = [
  ['24/7', 'Always online — no downtime, no missed messages'],
  ['24–48h', 'From sharing your details to going live'],
  ['3', 'Languages understood: English, Malayalam and Manglish'],
]

const VALUES = [
  { icon: Zap, title: 'Built for conversion', text: 'Every reply is meant to move a customer closer to an order or a booking, not just to answer.' },
  { icon: Languages, title: 'Local by design', text: 'Customers write the way they speak. The agent understands context and replies in kind.' },
  { icon: Handshake, title: 'Frictionless setup', text: 'No coding, no messy integrations. You share your business details; we hand you a trained agent.' },
  { icon: ShieldCheck, title: 'Your data stays yours', text: 'We are an official Meta Tech Provider. Your data is never sold, and you can delete it any time.' },
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

        <section className="bg-white section !pt-8">
          <div className="container-x grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
            <Reveal>
              <p className="eyebrow">Our story</p>
              <h2 className="display-md mt-3">Born from a simple observation.</h2>
              <div className="lead mt-6 space-y-5">
                <p>Kerala businesses are brilliant at what they do, but lose customers every day because they can’t reply fast enough. A customer asks about a product at midnight. Nobody answers. They go to a competitor.</p>
                <p>We built Faigen to fix exactly that. Our agents never sleep, never miss a message, and speak your customer’s language — whether you run a local boutique or a large agency.</p>
              </div>
              <p className="mt-8 text-[19px] font-semibold tracking-[-0.015em] text-ink">“Your customers never sleep. Neither does our AI.”</p>
            </Reveal>
            <Reveal delay={0.12}>
              <div className="card relative overflow-hidden rounded-[32px] p-6 sm:p-10">
                <Blob className="pointer-events-none absolute -right-12 -top-12 w-56 opacity-60" />
                <div className="relative space-y-4">
                  {STATS.map(([n, l]) => (
                    <div key={n} className="card-white flex items-center gap-6 p-6">
                      <span className="min-w-[96px] text-[34px] font-semibold leading-none tracking-[-0.04em] text-accent">{n}</span>
                      <span className="text-[14.5px] leading-snug text-muted">{l}</span>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        <section className="bg-alt section">
          <div className="container-x">
            <Reveal className="mx-auto max-w-3xl text-center"><p className="eyebrow">What we believe</p><h2 className="display-lg mt-3">Simple, useful, trustworthy.</h2></Reveal>
            <div className="mt-14 grid gap-5 sm:grid-cols-2">
              {VALUES.map((v, i) => (
                <Reveal key={v.title} delay={(i % 2) * 0.08}>
                  <div className="card-white h-full p-8">
                    <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-accent-soft text-accent"><v.icon size={20} /></span>
                    <h3 className="mt-5 text-[21px] font-semibold tracking-[-0.02em] text-ink">{v.title}</h3>
                    <p className="mt-2 text-[15.5px] leading-relaxed text-muted">{v.text}</p>
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
