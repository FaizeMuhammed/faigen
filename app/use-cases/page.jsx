import Nav from '@/components/site/Nav'
import Footer from '@/components/site/Footer'
import PageHero from '@/components/site/PageHero'
import FeatureRow from '@/components/site/FeatureRow'
import Reveal from '@/components/site/Reveal'
import FinalCta from '@/components/site/home/FinalCta'
import { PillButton, TextLink } from '@/components/site/Buttons'
import { ConvoScene } from '@/components/site/Scenes'
import { DoodleRetail, DoodleClinic, DoodleFood, DoodleHome } from '@/components/site/Illustrations'

export const metadata = {
  title: 'Use cases — Faigen',
  description: 'How retail, clinics, restaurants and real estate businesses use Faigen to sell, book and support on WhatsApp.',
}

const INK = '#1d1d1f'
const CASES = [
  {
    Icon: DoodleRetail, eyebrow: 'Retail & e-commerce', title: 'Turn chats into checkouts.',
    text: 'Stop losing customers to slow replies. Faigen answers stock and price questions from your catalog and closes the order inside WhatsApp.',
    points: ['Product, price and stock answers', 'Order collected in the chat', 'Broadcast offers on festival days'],
    q: ['Do you have the Premium', 'Coir Mat in stock?'], a: ['Yes, 45 in stock! ₹600.', 'Would you like to order?'], done: 'Order collected · ₹600',
  },
  {
    Icon: DoodleClinic, eyebrow: 'Clinics & hospitals', title: 'Appointments without the phone tag.',
    text: 'Reduce front-desk load. The agent shares doctor timings, books slots and answers the questions patients ask every day.',
    points: ['Doctor availability and booking', 'Common patient questions answered', 'Staff can take over any chat'],
    q: ['Is Dr. Rajesh available', 'tomorrow evening?'], a: ['Yes, 4 to 8 PM tomorrow.', 'Shall I book a slot?'], done: 'Appointment booked · 6 PM',
  },
  {
    Icon: DoodleFood, eyebrow: 'Restaurants & cafes', title: 'Orders and reservations, handled.',
    text: 'Share the menu, take delivery orders and book tables while your team stays on the floor.',
    points: ['Menu and delivery answers', 'Orders with totals', 'Table reservations'],
    q: ['Menu please, and do', 'you deliver?'], a: ['Yes, within 45 mins!', 'What would you like?'], done: 'Order total · ₹680',
  },
  {
    Icon: DoodleHome, eyebrow: 'Real estate', title: 'Qualify leads while you sleep.',
    text: 'Engage property seekers at once. The agent captures requirements, shares details and schedules site visits.',
    points: ['Budget and timeline captured', 'Brochures and details shared', 'Site visits scheduled'],
    q: ['What’s the price for', 'the 3BHK villas?'], a: ['Share your budget and', 'location, I’ll suggest.'], done: 'Lead captured · visit next',
  },
]

const MORE = ['Education', 'Salons & spas', 'Gyms & studios', 'Travel & tours', 'Events', 'Services & repairs', 'Agencies']

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
            <FeatureRow
              key={c.eyebrow} bare reverse={i % 2 === 1}
              icon={<c.Icon color={INK} className="h-16 w-16" />}
              eyebrow={c.eyebrow} title={c.title} text={c.text} points={c.points}
              visual={<ConvoScene q={c.q} a={c.a} done={c.done} className="w-full" />}
            />
          ))}
        </section>

        <section className="bg-alt section">
          <div className="container-x max-w-4xl text-center">
            <Reveal>
              <p className="eyebrow">And more</p>
              <h2 className="display-lg mt-3">Any business that gets messages.</h2>
              <p className="lead mx-auto mt-5 max-w-xl">If your customers write to you, Faigen can be trained for it.</p>
              <div className="mt-9 flex flex-wrap justify-center gap-2.5">
                {MORE.map(m => <span key={m} className="rounded-full bg-white px-4 py-2 text-[15px] font-medium text-ink shadow-[0_1px_2px_rgba(0,0,0,.05)]">{m}</span>)}
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
