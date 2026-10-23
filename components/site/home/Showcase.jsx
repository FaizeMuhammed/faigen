import { Check } from 'lucide-react'
import Reveal from '../Reveal'
import { TextLink } from '../Buttons'
import { Blob } from '../Illustrations'
import { OrdersVisual, InstagramVisual, BroadcastVisual, DashboardVisual } from '../Visuals'

function Row({ eyebrow, title, text, points, visual, reverse, badge, link }) {
  return (
    <div className="container-x grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
      <Reveal className={reverse ? 'lg:order-2' : ''}>
        <div className="flex items-center gap-3">
          <p className="eyebrow">{eyebrow}</p>
          {badge && <span className="rounded-full bg-accent-soft px-2.5 py-0.5 text-[11px] font-semibold text-accent">{badge}</span>}
        </div>
        <h2 className="display-md mt-3">{title}</h2>
        <p className="lead mt-5">{text}</p>
        <ul className="mt-7 space-y-3">
          {points.map(p => (
            <li key={p} className="flex items-start gap-3 text-[16px] text-ink">
              <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-accent-soft"><Check size={12} strokeWidth={3.2} className="text-accent" /></span>{p}
            </li>
          ))}
        </ul>
        {link && <div className="mt-8"><TextLink href={link[1]}>{link[0]}</TextLink></div>}
      </Reveal>
      <Reveal delay={0.12} className={reverse ? 'lg:order-1' : ''}>
        <div className="card relative flex min-h-[440px] items-center justify-center overflow-hidden rounded-[32px] p-6 sm:p-12"><Blob className="pointer-events-none absolute -right-14 -top-14 w-64 opacity-60" /><div className="relative">{visual}</div></div>
      </Reveal>
    </div>
  )
}

export default function Showcase() {
  return (
    <section className="bg-white section space-y-28 sm:space-y-40">
      <Row
        eyebrow="Orders"
        title="From “I want two” to a confirmed order."
        text="The agent answers from your own catalog, asks for what it needs — name, product, quantity, address — and hands you a finished order. No forms, no waiting."
        points={['Answers from your products and FAQs', 'Collects the full order inside the chat', 'You see every order in your dashboard']}
        visual={<OrdersVisual />}
        link={['See how orders work', '/features']}
      />
      <Row
        reverse
        badge="Early access"
        eyebrow="Instagram"
        title="Comments turn into conversations."
        text="When someone comments “price” on your Reel, Faigen replies publicly and slides into their DMs with the details — and keeps the conversation going."
        points={['A public reply plus a private DM, automatically', 'You choose the trigger words and the wording', 'Spam comments hidden for you']}
        visual={<InstagramVisual />}
        link={['Ask about Instagram', '/contact']}
      />
      <Row
        eyebrow="Broadcasts"
        title="One message. A thousand customers."
        text="Send offers, festival greetings and order updates to your whole list in minutes, with delivery and read tracking for every campaign."
        points={['Approved WhatsApp templates', 'Delivery and read reports', 'Pay per message — no monthly cap']}
        visual={<BroadcastVisual />}
        link={['See pricing', '/pricing']}
      />
      <Row
        reverse
        eyebrow="Dashboard"
        title="Everything, in one calm place."
        text="Every conversation, order and number — clear at a glance. Pause the AI on any chat and reply yourself whenever you want to."
        points={['Live inbox across your channels', 'Orders and analytics', 'API keys for your own systems']}
        visual={<DashboardVisual />}
        link={['Explore the dashboard', '/guide']}
      />
    </section>
  )
}
