import { ShoppingBag, Languages, Handshake, BookOpen, MessageSquareReply, LayoutGrid, ShieldCheck, BarChart3, FileImage, MousePointerClick, ImageIcon, Truck } from 'lucide-react'
import { TryLink, Chip } from './ui'
import { WhatsAppMock, InstagramMock, BroadcastMock } from './mocks'
import { LAUNCH_OFFER } from '@/lib/site'

const PANELS = [
  { title: 'Conversations that close sales', text: 'Faigen answers from your own catalog and FAQs, asks for what it needs — name, product, quantity, address — and hands you a finished order. In Malayalam, Manglish or English.',
    chips: [[ShoppingBag, 'Order collection'], [BookOpen, 'Your catalog & FAQs'], [Languages, 'Malayalam & Manglish'], [Handshake, 'Human hand-off']], Mock: WhatsAppMock, bg: 'from-[#e1d1ff] to-[#bda4ff]', link: ['Try it on WhatsApp', '/try'] },
  { title: 'Instagram, on autopilot', text: 'Someone comments “price” on your Reel. Faigen replies under the comment and sends the details to their DMs, with buttons to tap. It hides spam and shows you the numbers.',
    chips: [[MessageSquareReply, 'Comment-to-DM'], [LayoutGrid, 'Buttons & chat menu'], [ShieldCheck, 'Spam shield'], [BarChart3, 'Insights']], Mock: InstagramMock, bg: 'from-[#ffd3e6] via-[#ffcab6] to-[#e4c8ff]', link: ['See what’s included', '/pricing'], badge: LAUNCH_OFFER.active ? 'Launch offer: included in your plan' : null },
  { title: 'Campaigns that bring people back', text: 'Send offers, festival greetings and event invites with an image and two buttons. See who read it, who tapped Interested, and download the list to follow up.',
    chips: [[FileImage, 'Images & PDFs'], [MousePointerClick, 'Interested buttons'], [Truck, 'Delivery tracking'], [ImageIcon, 'Approved templates']], Mock: BroadcastMock, bg: 'from-[#efffb8] to-[#cdf56e]', link: ['See how campaigns work', '/features'] },
]

export default function Features() {
  return (
    <section className="py-16 sm:py-24">
      <div className="mx-auto w-[min(1200px,100%-2.5rem)]">
        <h2 className="mx-auto max-w-3xl text-center text-[clamp(2.2rem,4.6vw,3.4rem)] text-balance font-medium leading-[1.06] tracking-[-0.03em]">Everything your customers ask for, handled in one place</h2>
        <div className="mt-14 space-y-6">
          {PANELS.map(({ title, text, chips, Mock, bg, link, badge }, i) => (
            <article key={title} className="sticky overflow-hidden rounded-[36px] bg-[#eeede6] p-6 ring-1 ring-black/[0.04] sm:p-10 lg:p-12" style={{ top: 96 + i * 18, zIndex: i + 1 }}>
              <div className="grid items-center gap-10 lg:grid-cols-[0.9fr_1.1fr]">
                <div>
                  {badge && <span className="mb-4 inline-block rounded-full bg-[#d9ff57] px-3 py-1.5 text-[12.5px] font-semibold">{badge}</span>}
                  <h3 className="text-[clamp(1.9rem,3.2vw,2.7rem)] font-medium leading-[1.08] tracking-[-0.025em]">{title}</h3>
                  <p className="mt-4 max-w-md text-[17px] leading-snug text-[#1a1a1a]/65">{text}</p>
                  <div className="mt-6 flex flex-wrap gap-2.5">{chips.map(([Icon, label]) => <Chip key={label} icon={Icon}>{label}</Chip>)}</div>
                  <div className="mt-8"><TryLink href={link[1]} tone="dark">{link[0]}</TryLink></div>
                </div>
                <div className={`rounded-[28px] bg-gradient-to-br ${bg} p-4 sm:p-7`}><Mock /></div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
