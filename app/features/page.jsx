import { Infinity as InfinityIcon, Languages, SlidersHorizontal, UserCheck, LayoutGrid, Code2, ShieldCheck, ShoppingBag, Send, KeyRound } from 'lucide-react'
import Nav from '@/components/site/Nav'
import Footer from '@/components/site/Footer'
import PageHero from '@/components/site/PageHero'
import FeatureRow from '@/components/site/FeatureRow'
import Reveal from '@/components/site/Reveal'
import FinalCta from '@/components/site/home/FinalCta'
import { PillButton, TextLink } from '@/components/site/Buttons'
import { OrdersVisual, InstagramVisual, BroadcastVisual, DashboardVisual } from '@/components/site/Visuals'

export const metadata = {
  title: 'Features — Faigen',
  description: 'AI replies, orders, broadcasts, OTP, a clear dashboard and Instagram automation — everything Faigen does for your business.',
}

const MORE = [
  { icon: InfinityIcon, title: 'Unlimited conversations', text: 'No cap on how many customers message you. One flat monthly fee.' },
  { icon: Languages, title: 'Speaks their language', text: 'English, Malayalam and Manglish, detected on every message.' },
  { icon: SlidersHorizontal, title: 'Your rules', text: 'Trained on your FAQs and tone, with guardrails on what it must never say.' },
  { icon: UserCheck, title: 'You can step in', text: 'Pause the AI on any chat and take over whenever you like.' },
  { icon: KeyRound, title: 'OTP messages', text: 'Verification codes for logins and checkouts, billed per message sent.' },
  { icon: Code2, title: 'API access', text: 'API keys and docs to plug messaging and orders into your own systems.' },
  { icon: ShoppingBag, title: 'Orders & catalog', text: 'Products, prices and stock answered from your own data.' },
  { icon: Send, title: 'Templates', text: 'Create and send approved WhatsApp templates from the dashboard.' },
  { icon: ShieldCheck, title: 'Security first', text: 'An official Meta Tech Provider. Your data stays yours and is never sold.' },
]

export default function FeaturesPage() {
  return (
    <>
      <Nav />
      <main>
        <PageHero
          eyebrow="Features"
          title="One agent. Every conversation."
          lead="Faigen answers your customers, collects orders, sends broadcasts and gives you a clear view of it all — on WhatsApp, and soon Instagram."
        >
          <PillButton href="/try" arrow>Try the live demo</PillButton>
          <TextLink href="/pricing">See pricing</TextLink>
        </PageHero>

        <section className="bg-white section !pt-8 space-y-28 sm:space-y-40">
          <FeatureRow
            eyebrow="Replies & orders"
            title="Answers from your business, not from guesswork."
            text="Faigen learns your products, prices and policies, then replies like your best salesperson — and turns the chat into a finished order."
            points={['Trained on your FAQs, catalog and tone', 'Collects name, product, quantity and address', 'Hands off to you whenever you want']}
            visual={<OrdersVisual />}
          />
          <FeatureRow
            reverse
            eyebrow="Broadcasts & OTP"
            title="Reach your whole list in minutes."
            text="Send offers and updates with approved templates, and see exactly who received and read them."
            points={['Delivery and read tracking per campaign', 'OTP and verification messages', 'Billed only per message sent']}
            visual={<BroadcastVisual />}
            link={['See message rates', '/pricing']}
          />
          <FeatureRow
            eyebrow="Dashboard"
            title="Every conversation in one calm place."
            text="Live inbox, orders, templates and analytics. Take over any chat, or let the agent run."
            points={['Live inbox with AI on/off per chat', 'Orders and customers at a glance', 'Numbers that matter, no clutter']}
            visual={<DashboardVisual />}
          />
          <FeatureRow
            reverse
            badge="Early access"
            eyebrow="Instagram"
            title="Comments become conversations."
            text="The same agent works your Instagram: it replies to comments, sends the details by DM, hides spam and shows you the numbers."
            points={['Comment-to-DM with a public reply', 'AI drafts replies you approve first', 'Spam shield and account insights']}
            visual={<InstagramVisual />}
            link={['Ask about Instagram', '/contact']}
          />
        </section>

        <section className="bg-alt section">
          <div className="container-x">
            <Reveal className="mx-auto max-w-3xl text-center">
              <p className="eyebrow">And more</p>
              <h2 className="display-lg mt-3">The details matter.</h2>
            </Reveal>
            <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {MORE.map((f, i) => (
                <Reveal key={f.title} delay={(i % 3) * 0.08}>
                  <div className="card-white h-full p-7">
                    <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-accent-soft text-accent"><f.icon size={20} /></span>
                    <h3 className="mt-5 text-[19px] font-semibold tracking-[-0.02em] text-ink">{f.title}</h3>
                    <p className="mt-2 text-[15px] leading-relaxed text-muted">{f.text}</p>
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
