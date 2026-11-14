import { ShoppingBag, BookOpen, Handshake, Megaphone, CheckCheck, Banknote, Inbox, BarChart3, Users, MessageSquareReply, ShieldCheck, Sparkles } from 'lucide-react'
import Nav from '@/components/sb/Nav'
import CtaFooter from '@/components/sb/CtaFooter'
import FeatureStack from '@/components/sb/FeatureStack'
import { FaceDisc } from '@/components/sb/art'
import { TryLink, GreyPill, H2, Tag } from '@/components/sb/ui'
import { urbanist, jost } from '@/components/sb/fonts'

export const metadata = {
  title: 'Features — Faigen',
  description: 'AI replies, orders, broadcasts, OTP, a clear dashboard and Instagram automation — everything Faigen does for your business.',
}

const ITEMS = [
  { title: 'Answers from your business, not from guesswork.', text: 'Faigen learns your products, prices and policies, then replies like your best salesperson, and turns the chat into a finished order.',
    tags: [[BookOpen, 'Trained on your FAQs, catalog and tone'], [ShoppingBag, 'Collects name, product, quantity and address'], [Handshake, 'Hands off to you whenever you want']], kind: 'inbox', link: ['Try it on WhatsApp', '/try'] },
  { title: 'Reach your whole list in minutes.', text: 'Send offers and updates with approved templates, and see exactly who received and read them.',
    tags: [[CheckCheck, 'Delivery and read tracking per campaign'], [Megaphone, 'OTP and verification messages'], [Banknote, 'Message fees at Meta’s price, no markup']], kind: 'campaigns', link: ['See pricing', '/pricing'] },
  { title: 'Every conversation in one calm place.', text: 'Live inbox, orders, templates and analytics. Take over any chat, or let the agent run.',
    tags: [[Inbox, 'Live inbox with AI on/off per chat'], [Users, 'Orders and customers at a glance'], [BarChart3, 'Numbers that matter, no clutter']], kind: 'dashboard', link: ['Try the live demo', '/try'] },
  { title: 'Comments become conversations.', text: 'The same agent works your Instagram: it replies to comments, sends the details by DM, hides spam and shows you the numbers.',
    tags: [[Sparkles, 'Included in the launch offer'], [MessageSquareReply, 'Comment-to-DM with a public reply'], [ShieldCheck, 'Spam shield and account insights']], kind: 'insta', link: ['See what’s included', '/pricing'] },
]

const HIGHLIGHTS = [
  { tone: 'blue', t: 'Always on', d: 'Every question gets a reply in seconds, day or night, with no missed messages.' },
  { tone: 'violet', t: 'In your customer’s language', d: 'It understands every language, and replies the way the customer wrote.' },
  { tone: 'lime', t: 'You stay in control', d: 'Watch every chat live, take over any conversation, and hand it back to the AI.' },
]

const ALSO = ['Order collection', 'Product catalog', 'Custom services menu', 'WhatsApp templates', 'OTP messages', 'Delivery and read tracking', 'Live inbox', 'Analytics', 'API keys and docs']

export default function FeaturesPage() {
  return (
    <div className={`${urbanist.variable} ${jost.className} min-h-screen overflow-x-clip bg-[#fafafa] text-[#1a1a1a]`}>
      <Nav />
      <main>
        <section className="relative px-5 pb-12 pt-[120px] text-center">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/sb/pink-arch.png" alt="" aria-hidden className="pointer-events-none absolute left-[-52px] top-[300px] w-[120px] max-w-none select-none lg:left-[calc(50%-600px)] lg:top-[80px] lg:w-[169px]" />
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/sb/blue-wedge.png" alt="" aria-hidden className="pointer-events-none absolute right-[-56px] top-[84px] w-[110px] max-w-none select-none lg:right-[calc(50%-600px)] lg:top-[90px] lg:w-[178px]" />
          <div className="relative mx-auto flex max-w-[780px] flex-col items-center gap-5">
            <p className="flex items-center gap-2 text-[16px] leading-[22.4px] text-[#535353]"><span className="h-2 w-2 rounded-full bg-[#34c759]" />Features</p>
            <h1 className="font-heading text-balance text-[clamp(2.6rem,5vw,4rem)] font-medium leading-[1.2]">One agent. Every conversation.</h1>
            <p className="max-w-[560px] text-[clamp(1.05rem,1.5vw,1.3125rem)] leading-[1.4] text-[#535353]">Faigen answers your customers, collects orders, sends broadcasts and gives you a clear view of it all, on WhatsApp and Instagram.</p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <TryLink href="/try">Try the live demo</TryLink>
              <GreyPill href="/pricing" tall>See pricing</GreyPill>
            </div>
          </div>
        </section>

        <section className="mx-auto w-full max-w-[1240px] px-5 pb-20">
          <FeatureStack items={ITEMS} />
        </section>

        <section style={{ background: '#fafaf9', padding: '80px 0' }}>
          <div className="mx-auto w-full max-w-[1240px] px-5">
            <div className="text-center"><H2 className="mx-auto max-w-[780px]">Built for businesses that talk to customers all day</H2></div>
            <div style={{ marginTop: 40, background: '#f0eeeb', borderRadius: 20, padding: 8 }}>
              <div className="grid gap-2 lg:grid-cols-3">
                {HIGHLIGHTS.map(c => (
                  <div key={c.t} style={{ background: '#fafaf9', borderRadius: 12, padding: 24, display: 'flex', flexDirection: 'column', gap: 16, minHeight: 238 }}>
                    <div style={{ padding: '0 8px 8px 0' }}><FaceDisc tone={c.tone} className="h-16 w-16" /></div>
                    <div style={{ marginTop: 'auto' }}>
                      <h3 className="font-heading" style={{ margin: 0, fontSize: 21, lineHeight: '29.4px', fontWeight: 500 }}>{c.t}</h3>
                      <p style={{ margin: '4px 0 0', fontSize: 16, lineHeight: '22.4px', color: '#52525b' }}>{c.d}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section style={{ padding: '80px 0' }}>
          <div className="mx-auto w-full max-w-[1000px] px-5 text-center">
            <H2>Also included</H2>
            <div className="mt-8 flex flex-wrap justify-center gap-2">{ALSO.map(a => <Tag key={a}>{a}</Tag>)}</div>
          </div>
        </section>
      </main>
      <CtaFooter />
    </div>
  )
}
