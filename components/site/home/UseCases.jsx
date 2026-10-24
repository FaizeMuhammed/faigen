import { Check } from 'lucide-react'
import Reveal from '../Reveal'
import { TextLink } from '../Buttons'
import { DoodleRetail, DoodleClinic, DoodleFood, DoodleHome } from '../Illustrations'

const CASES = [
  { Art: DoodleRetail, name: 'Retail & e-commerce', line: 'Turn chats into checkouts.', q: 'Do you have the Premium Coir Mat in stock?', a: 'Yes, we have 45 in stock! Price: ₹600. Would you like to order?', done: 'Order collected · ₹600' },
  { Art: DoodleClinic, name: 'Clinics & hospitals', line: 'Appointments without the phone tag.', q: 'Is Dr. Rajesh available tomorrow evening?', a: 'Dr. Rajesh is available tomorrow from 4:00 PM to 8:00 PM. Book a slot?', done: 'Appointment booked · 6:00 PM' },
  { Art: DoodleFood, name: 'Restaurants & cafes', line: 'Orders and reservations, handled.', q: 'Can I get the menu and do you deliver?', a: 'Welcome! Yes, we deliver within 45 mins. Attached is our menu. What would you like?', done: 'Order total · ₹680' },
  { Art: DoodleHome, name: 'Real estate', line: 'Qualify leads while you sleep.', q: 'What’s the price for the 3BHK villas?', a: 'Happy to help! Share your budget and preferred location and I’ll suggest the best options.', done: 'Lead captured · site visit next' },
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
              <div className="group relative h-full overflow-hidden rounded-[28px] bg-dark-alt p-7 ring-1 ring-white/10 transition-all duration-500 hover:-translate-y-1 hover:ring-white/25 sm:p-8">
                <c.Art className="absolute right-6 top-6 h-16 w-16 opacity-90 sm:right-8 sm:top-8 sm:h-20 sm:w-20" />
                <p className="text-[14px] font-medium text-white/55">{c.name}</p>
                <h3 className="mt-3 max-w-[16ch] text-[26px] font-semibold leading-tight tracking-[-0.025em] sm:text-[28px]">{c.line}</h3>
                <div className="mt-7 space-y-2.5">
                  <p className="ml-auto w-fit max-w-[88%] rounded-2xl rounded-br-md bg-[#005c4b] px-4 py-2.5 text-[14.5px] leading-snug">{c.q}</p>
                  <p className="w-fit max-w-[88%] rounded-2xl rounded-bl-md bg-white/10 px-4 py-2.5 text-[14.5px] leading-snug text-white/90">{c.a}</p>
                  <p className="inline-flex items-center gap-1.5 rounded-full bg-[#0071e3]/20 px-3 py-1.5 text-[13px] font-medium text-[#2997ff]"><Check size={14} strokeWidth={3} /> {c.done}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
        <Reveal className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-3">
          <TextLink href="/use-cases" dark>See all use cases</TextLink>
          <span className="text-[14px] text-white/40">Example conversations</span>
        </Reveal>
      </div>
    </section>
  )
}
