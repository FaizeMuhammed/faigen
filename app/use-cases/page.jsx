import { ShoppingBag, Stethoscope, UtensilsCrossed, Building2, GraduationCap, Scissors } from 'lucide-react'
import Nav from '@/components/site/Nav'
import Footer from '@/components/site/Footer'
import PageHero from '@/components/site/PageHero'
import FeatureRow from '@/components/site/FeatureRow'
import Reveal from '@/components/site/Reveal'
import FinalCta from '@/components/site/home/FinalCta'
import { PillButton, TextLink } from '@/components/site/Buttons'

export const metadata = {
  title: 'Use cases — Faigen',
  description: 'How retail, clinics, restaurants and real estate businesses use Faigen to sell, book and support on WhatsApp.',
}

function Chat({ title, lines }) {
  return (
    <div className="w-full max-w-[400px] overflow-hidden rounded-[22px] bg-[#efeae2] shadow-[0_30px_70px_-28px_rgba(0,0,0,.3)] ring-1 ring-black/5">
      <div className="flex items-center gap-3 bg-[#f7f7f7] px-4 py-3">
        <span className="flex h-8 w-8 items-center justify-center rounded-full bg-ink text-[13px] font-semibold text-white">F</span>
        <div className="leading-tight"><p className="text-[14px] font-semibold text-ink">{title}</p><p className="text-[11px] text-muted">online</p></div>
      </div>
      <div className="space-y-2 p-4">
        {lines.map(([who, text], i) => (
          <p key={i} className={`w-fit max-w-[86%] rounded-2xl px-3.5 py-2 text-[14px] leading-snug text-ink shadow-sm ${who === 'me' ? 'ml-auto rounded-br-md bg-[#d9fdd3]' : 'rounded-bl-md bg-white'}`}>{text}</p>
        ))}
      </div>
    </div>
  )
}

const CASES = [
  {
    eyebrow: 'Retail & e-commerce', title: 'Turn chats into checkouts.',
    text: 'Stop losing customers to slow replies. Faigen answers stock and price questions from your catalog and closes the order inside WhatsApp.',
    points: ['Product, price and stock answers', 'Order collected in the chat', 'Broadcast offers on festival days'],
    chat: ['Faigen Store', [['me', 'Do you have the Premium Coir Mat in stock?'], ['bot', 'Yes, we have 45 in stock! Price: ₹600. Would you like to order?'], ['me', '2, deliver to Ernakulam'], ['bot', 'Done ✅ 2 × Premium Coir Mat, ₹1,200. We’ll message you when it ships.']]],
  },
  {
    eyebrow: 'Clinics & hospitals', title: 'Appointments without the phone tag.',
    text: 'Reduce front-desk load. The agent shares doctor timings, books slots and answers the questions patients ask every day.',
    points: ['Doctor availability and booking', 'Common patient questions answered', 'Staff can take over any chat'],
    chat: ['City Clinic', [['me', 'Is Dr. Rajesh available tomorrow evening?'], ['bot', 'Dr. Rajesh is available tomorrow from 4:00 PM to 8:00 PM. Book a slot?'], ['me', '6 PM please'], ['bot', 'Confirmed! Your appointment is tomorrow at 6:00 PM. ✅']]],
  },
  {
    eyebrow: 'Restaurants & cafes', title: 'Orders and reservations, handled.',
    text: 'Share the menu, take delivery orders and book tables while your team stays on the floor.',
    points: ['Menu and delivery answers', 'Orders with totals', 'Table reservations'],
    chat: ['Spice Route', [['me', 'Can I get the menu and do you deliver?'], ['bot', 'Welcome! Yes, we deliver within 45 mins. Attached is our menu. What would you like?'], ['me', '2 Chicken Biriyani'], ['bot', 'Perfect! Total is ₹680. Please share your location to proceed.']]],
  },
  {
    eyebrow: 'Real estate', title: 'Qualify leads while you sleep.',
    text: 'Engage property seekers at once. The agent captures requirements, shares details and schedules site visits.',
    points: ['Budget and timeline captured', 'Brochures and details shared', 'Site visits scheduled'],
    chat: ['Skyline Homes', [['me', 'What’s the price for the 3BHK villas?'], ['bot', 'Our 3BHK villas start at ₹85 Lakhs. Are you looking to move in immediately?'], ['me', 'Looking for next year'], ['bot', 'Understood. I’ll share the brochure and we can plan a site visit when you’re ready.']]],
  },
]

const MORE = [
  { icon: GraduationCap, name: 'Education', text: 'Course questions, fees and admissions enquiries answered instantly.' },
  { icon: Scissors, name: 'Salons & services', text: 'Bookings, price lists and reminders without a receptionist.' },
  { icon: ShoppingBag, name: 'Anything else', text: 'If your customers message you, Faigen can be trained for it.' },
]

export default function UseCasesPage() {
  return (
    <>
      <Nav />
      <main>
        <PageHero
          eyebrow="Use cases"
          title="Tailored for the way you work."
          lead="Faigen is trained on your business, so the same agent can sell, book and support — whatever your day looks like."
        >
          <PillButton href="/try" arrow>Try the live demo</PillButton>
          <TextLink href="/contact">Tell us about your business</TextLink>
        </PageHero>

        <section className="bg-white section !pt-8 space-y-28 sm:space-y-40">
          {CASES.map((c, i) => (
            <FeatureRow key={c.eyebrow} reverse={i % 2 === 1} eyebrow={c.eyebrow} title={c.title} text={c.text} points={c.points} visual={<Chat title={c.chat[0]} lines={c.chat[1]} />} />
          ))}
        </section>

        <section className="bg-alt section">
          <div className="container-x">
            <Reveal className="mx-auto max-w-3xl text-center"><p className="eyebrow">And more</p><h2 className="display-lg mt-3">Built for any business that gets messages.</h2></Reveal>
            <div className="mt-14 grid gap-5 md:grid-cols-3">
              {MORE.map((m, i) => (
                <Reveal key={m.name} delay={i * 0.08}>
                  <div className="card-white h-full p-7">
                    <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-accent-soft text-accent"><m.icon size={20} /></span>
                    <h3 className="mt-5 text-[19px] font-semibold tracking-[-0.02em] text-ink">{m.name}</h3>
                    <p className="mt-2 text-[15px] leading-relaxed text-muted">{m.text}</p>
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
