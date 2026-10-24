import Nav from '@/components/site/Nav'
import Footer from '@/components/site/Footer'
import PageHero from '@/components/site/PageHero'
import FeatureRow from '@/components/site/FeatureRow'
import Reveal from '@/components/site/Reveal'
import Bento from '@/components/site/home/Bento'
import FinalCta from '@/components/site/home/FinalCta'
import { PillButton, TextLink } from '@/components/site/Buttons'
import { OrdersScene, InstagramScene, BroadcastScene, DashboardScene } from '@/components/site/Scenes'

export const metadata = {
  title: 'Features — Faigen',
  description: 'AI replies, orders, broadcasts, OTP, a clear dashboard and Instagram automation — everything Faigen does for your business.',
}

const ALSO = ['Order collection', 'Product catalog', 'Custom services menu', 'WhatsApp templates', 'OTP messages', 'Delivery and read tracking', 'Live inbox', 'Analytics', 'API keys and docs']

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
            bare
            eyebrow="Replies & orders"
            title="Answers from your business, not from guesswork."
            text="Faigen learns your products, prices and policies, then replies like your best salesperson — and turns the chat into a finished order."
            points={['Trained on your FAQs, catalog and tone', 'Collects name, product, quantity and address', 'Hands off to you whenever you want']}
            visual={<OrdersScene className="w-full" />}
          />
          <FeatureRow
            bare
            reverse
            eyebrow="Broadcasts & OTP"
            title="Reach your whole list in minutes."
            text="Send offers and updates with approved templates, and see exactly who received and read them."
            points={['Delivery and read tracking per campaign', 'OTP and verification messages', 'Billed only per message sent']}
            visual={<BroadcastScene className="w-full" />}
            link={['See message rates', '/pricing']}
          />
          <FeatureRow
            bare
            eyebrow="Dashboard"
            title="Every conversation in one calm place."
            text="Live inbox, orders, templates and analytics. Take over any chat, or let the agent run."
            points={['Live inbox with AI on/off per chat', 'Orders and customers at a glance', 'Numbers that matter, no clutter']}
            visual={<DashboardScene className="w-full" />}
          />
          <FeatureRow
            bare
            reverse
            badge="Early access"
            eyebrow="Instagram"
            title="Comments become conversations."
            text="The same agent works your Instagram: it replies to comments, sends the details by DM, hides spam and shows you the numbers."
            points={['Comment-to-DM with a public reply', 'AI drafts replies you approve first', 'Spam shield and account insights']}
            visual={<InstagramScene className="w-full" />}
            link={['Ask about Instagram', '/contact']}
          />
        </section>

        <Bento />

        <section className="bg-alt section !py-16 sm:!py-20">
          <div className="container-x max-w-4xl text-center">
            <Reveal>
              <p className="eyebrow">Also included</p>
              <div className="mt-6 flex flex-wrap justify-center gap-2.5">
                {ALSO.map(a => <span key={a} className="rounded-full bg-white px-4 py-2 text-[14.5px] font-medium text-ink shadow-[0_1px_2px_rgba(0,0,0,.05)]">{a}</span>)}
              </div>
            </Reveal>
          </div>
        </section>

        <FinalCta />
      </main>
      <Footer />
    </>
  )
}
