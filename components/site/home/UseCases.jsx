import { ShoppingBag, Stethoscope, UtensilsCrossed, Building2 } from 'lucide-react'
import Reveal from '../Reveal'
import { TextLink } from '../Buttons'

const CASES = [
  { icon: ShoppingBag, name: 'Retail & e-commerce', line: 'Turn chats into checkouts.', q: 'Do you have the Premium Coir Mat in stock?', a: 'Yes, we have 45 in stock! Price: ₹600. Would you like to order?' },
  { icon: Stethoscope, name: 'Clinics & hospitals', line: 'Appointments without the phone tag.', q: 'Is Dr. Rajesh available tomorrow evening?', a: 'Dr. Rajesh is available tomorrow from 4:00 PM to 8:00 PM. Book a slot?' },
  { icon: UtensilsCrossed, name: 'Restaurants & cafes', line: 'Orders and reservations, handled.', q: 'Can I get the menu and do you deliver?', a: 'Welcome! Yes, we deliver within 45 mins. Attached is our menu. What would you like?' },
  { icon: Building2, name: 'Real estate', line: 'Qualify leads while you sleep.', q: 'What’s the price for the 3BHK villas?', a: 'Happy to help! Share your budget and preferred location and I’ll suggest the best options.' },
]

export default function UseCases() {
  return (
    <section className="bg-black text-white section">
      <div className="container-x">
        <Reveal className="max-w-3xl">
          <p className="eyebrow text-[#2997ff]">Use cases</p>
          <h2 className="display-lg mt-3">Tailored for the way you work.</h2>
          <p className="lead mt-5 text-white/60">Faigen is trained on your business, so the same agent can sell, book and support — whatever your day looks like.</p>
        </Reveal>

        <div className="mt-14 grid gap-5 md:grid-cols-2">
          {CASES.map((c, i) => (
            <Reveal key={c.name} delay={(i % 2) * 0.1}>
              <div className="group h-full rounded-[28px] bg-dark-alt p-7 ring-1 ring-white/10 transition-all duration-500 hover:-translate-y-1 hover:ring-white/25 sm:p-8">
                <div className="flex items-center gap-3">
                  <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/10"><c.icon size={19} /></span>
                  <p className="text-[15px] font-medium text-white/70">{c.name}</p>
                </div>
                <h3 className="mt-6 text-[26px] font-semibold tracking-[-0.025em]">{c.line}</h3>
                <div className="mt-7 space-y-2.5">
                  <p className="ml-auto w-fit max-w-[88%] rounded-2xl rounded-br-md bg-[#005c4b] px-4 py-2.5 text-[14.5px] leading-snug">{c.q}</p>
                  <p className="w-fit max-w-[88%] rounded-2xl rounded-bl-md bg-white/10 px-4 py-2.5 text-[14.5px] leading-snug text-white/90">{c.a}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
        <Reveal className="mt-10"><TextLink href="/use-cases" dark>See all use cases</TextLink></Reveal>
      </div>
    </section>
  )
}
