import { ShoppingBag, Languages, Handshake, BookOpen, MessageSquareReply, LayoutGrid, ShieldCheck, BarChart3, FileImage, MousePointerClick, Truck, Image as ImageIcon } from 'lucide-react'
import { TryLink, Tag, Wrap, H2 } from './ui'
import FeaturePanel from './FeatureArt'

// Three #f0eeeb cards: 1200 x 580, padding 40, text column 540 + picture column 540 x 500 (radius 20).
// Each card sticks at 90px from the top so the next one slides over it (shadow 0 -12px 32px rgba(128,128,128,.05)).
// The product window starts ~54px in and runs off the right and bottom of the coloured panel.
const PANELS = [
  { title: 'Conversations that close sales', text: 'Faigen answers from your own catalog and FAQs, asks for what it needs (name, product, quantity, address) and hands you a finished order. In Malayalam, Manglish or English.',
    tags: [[ShoppingBag, 'Order collection'], [BookOpen, 'Your catalog & FAQs'], [Languages, 'Malayalam & Manglish'], [Handshake, 'Human hand-off']], kind: 'inbox', link: ['Try it on WhatsApp', '/try'] },
  { title: 'Instagram, on autopilot', text: 'Someone comments “price” on your Reel. Faigen replies under the comment and sends the details to their DMs, with buttons to tap. It hides spam and shows you the numbers.',
    tags: [[MessageSquareReply, 'Comment-to-DM'], [LayoutGrid, 'Buttons & chat menu'], [ShieldCheck, 'Spam shield']], kind: 'insta', link: ['See what’s included', '/pricing'] },
  { title: 'Campaigns that bring people back', text: 'Send offers, festival greetings and event invites with an image and two buttons. See who read it, who tapped Interested, and download the list to follow up.',
    tags: [[FileImage, 'Images & PDFs'], [MousePointerClick, 'Interested buttons']], kind: 'campaigns', link: ['See how campaigns work', '/features'] },
]

export default function Features() {
  return (
    <section className="py-10">
      <Wrap className="flex flex-col gap-10">
        <H2 className="mx-auto max-w-[780px] text-center">Everything your customers ask for, handled in one place</H2>
        <div className="flex flex-col gap-10">
          {PANELS.map(({ title, text, tags, kind, link }) => (
            <article key={title} className="sticky top-[90px] rounded-[24px] bg-[#f0eeeb] p-6 shadow-[0_-12px_32px_rgba(128,128,128,0.05)] sm:p-10">
              <div className="grid gap-10 lg:min-h-[500px] lg:grid-cols-2">
                <div className="flex flex-col justify-between gap-8">
                  <div className="flex flex-col gap-5">
                    <h3 className="font-heading text-[clamp(1.9rem,3vw,2.625rem)] font-medium leading-[1.2] text-[#1a1a1a]">{title}</h3>
                    <p className="text-[16px] font-normal leading-[22.4px] text-[#52525b]">{text}</p>
                    <div className="mt-1 flex flex-col gap-2">{tags.map(([Icon, label]) => <Tag key={label} icon={Icon}>{label}</Tag>)}</div>
                  </div>
                  <TryLink href={link[1]}>{link[0]}</TryLink>
                </div>
                <FeaturePanel kind={kind} />
              </div>
            </article>
          ))}
        </div>
      </Wrap>
    </section>
  )
}
