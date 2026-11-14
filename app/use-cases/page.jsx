import { ShoppingBag, Boxes, Megaphone, CalendarCheck, MessageCircleQuestion, Handshake, Utensils, Receipt, CalendarDays, Target, FileText, MapPin } from 'lucide-react'
import Nav from '@/components/sb/Nav'
import CtaFooter from '@/components/sb/CtaFooter'
import FeatureStack from '@/components/sb/FeatureStack'
import { TryLink, GreyPill, H2, Tag } from '@/components/sb/ui'
import { urbanist, jost } from '@/components/sb/fonts'

export const metadata = {
  title: 'Use cases — Faigen',
  description: 'How retail, clinics, restaurants and real estate businesses use Faigen to sell, book and support on WhatsApp.',
}

const j = a => a.join(' ')
const ITEMS = [
  { title: 'Turn chats into checkouts.', text: 'Stop losing customers to slow replies. Faigen answers stock and price questions from your catalog and closes the order inside WhatsApp.',
    tags: [[Boxes, 'Product, price and stock answers'], [ShoppingBag, 'Order collected in the chat'], [Megaphone, 'Broadcast offers on festival days']], kind: 'convo', link: ['Try it for a shop', '/try'],
    data: { tone: 'purple', title: 'Retail & e-commerce', q: j(['Do you have the Premium', 'Coir Mat in stock?']), a: j(['Yes, 45 in stock! ₹600.', 'Would you like to order?']), done: 'Order collected · ₹600' } },
  { title: 'Appointments without the phone tag.', text: 'Reduce front-desk load. The agent shares doctor timings, books slots and answers the questions patients ask every day.',
    tags: [[CalendarCheck, 'Doctor availability and booking'], [MessageCircleQuestion, 'Common patient questions answered'], [Handshake, 'Staff can take over any chat']], kind: 'convo', link: ['Try it for a clinic', '/try'],
    data: { tone: 'blue', title: 'Clinics & hospitals', q: j(['Is Dr. Rajesh available', 'tomorrow evening?']), a: j(['Yes, 4 to 8 PM tomorrow.', 'Shall I book a slot?']), done: 'Appointment booked · 6 PM' } },
  { title: 'Orders and reservations, handled.', text: 'Share the menu, take delivery orders and book tables while your team stays on the floor.',
    tags: [[Utensils, 'Menu and delivery answers'], [Receipt, 'Orders with totals'], [CalendarDays, 'Table reservations']], kind: 'convo', link: ['Try it for a restaurant', '/try'],
    data: { tone: 'lime', title: 'Restaurants & cafes', q: j(['Menu please, and do', 'you deliver?']), a: j(['Yes, within 45 mins!', 'What would you like?']), done: 'Order total · ₹680' } },
  { title: 'Qualify leads while you sleep.', text: 'Engage property seekers at once. The agent captures requirements, shares details and schedules site visits.',
    tags: [[Target, 'Budget and timeline captured'], [FileText, 'Brochures and details shared'], [MapPin, 'Site visits scheduled']], kind: 'convo', link: ['Try it for real estate', '/try'],
    data: { tone: 'purple', title: 'Real estate', q: j(['What’s the price for', 'the 3BHK villas?']), a: j(['Share your budget and', 'location, I’ll suggest.']), done: 'Lead captured · visit next' } },
]

const MORE = ['Education', 'Salons & spas', 'Gyms & studios', 'Travel & tours', 'Events', 'Services & repairs', 'Agencies']

export default function UseCasesPage() {
  return (
    <div className={`${urbanist.variable} ${jost.className} min-h-screen bg-[#fafafa] text-[#1a1a1a]`}>
      <Nav />
      <main>
        <section className="relative px-5 pb-12 pt-[120px] text-center">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/sb/violet-pillar.png" alt="" aria-hidden className="pointer-events-none absolute hidden select-none lg:block" style={{ left: 'calc(50% - 590px)', top: 70, width: 120, maxWidth: 'none' }} />
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/sb/pink-arch.png" alt="" aria-hidden className="pointer-events-none absolute hidden select-none lg:block" style={{ right: 'calc(50% - 610px)', top: 80, width: 169, maxWidth: 'none' }} />
          <div className="mx-auto flex max-w-[780px] flex-col items-center gap-5">
            <p className="flex items-center gap-2 text-[16px] leading-[22.4px] text-[#535353]"><span className="h-2 w-2 rounded-full bg-[#34c759]" />Use cases</p>
            <h1 className="font-heading text-balance text-[clamp(2.6rem,5vw,4rem)] font-medium leading-[1.2]">Tailored for the way you work.</h1>
            <p className="max-w-[560px] text-[clamp(1.05rem,1.5vw,1.3125rem)] leading-[1.4] text-[#535353]">Faigen is trained on your business, so the same agent can sell, book and support, whatever your day looks like.</p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <TryLink href="/try">Try the live demo</TryLink>
              <GreyPill href="/contact" tall>Tell us about your business</GreyPill>
            </div>
          </div>
        </section>

        <section className="mx-auto w-full max-w-[1240px] px-5 pb-20">
          <FeatureStack items={ITEMS} />
        </section>

        <section style={{ background: '#fafaf9', padding: '80px 0' }}>
          <div className="mx-auto w-full max-w-[1000px] px-5 text-center">
            <H2>Any business that gets messages.</H2>
            <p className="mx-auto mt-5 max-w-[520px] text-[21px] leading-[29.4px] text-[#535353]">If your customers write to you, Faigen can be trained for it.</p>
            <div className="mt-8 flex flex-wrap justify-center gap-2">{MORE.map(m => <Tag key={m}>{m}</Tag>)}</div>
          </div>
        </section>
      </main>
      <CtaFooter />
    </div>
  )
}
