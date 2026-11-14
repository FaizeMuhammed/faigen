import { Store, UtensilsCrossed, Stethoscope, Building2, GraduationCap, Landmark } from 'lucide-react'
import { GreyPill } from './ui'

const CASES = [
  { Icon: Store, name: 'Retail & e-commerce', line: 'Turn chats into checkouts.', q: 'Do you have the Premium Coir Mat in stock?', a: 'Yes, 45 in stock! ₹600. Would you like to order?', done: 'Order collected · ₹600', tone: '#e1d1ff' },
  { Icon: UtensilsCrossed, name: 'Restaurants & cafes', line: 'Orders and reservations, handled.', q: 'Can I get the menu and do you deliver?', a: 'Yes, within 45 mins. Here is our menu. What would you like?', done: 'Order total · ₹680', tone: '#ffd9b3' },
  { Icon: Stethoscope, name: 'Clinics & hospitals', line: 'Appointments without the phone tag.', q: 'Is Dr. Rajesh available tomorrow evening?', a: 'Yes, 4:00 PM to 8:00 PM. Book a slot?', done: 'Appointment booked · 6:00 PM', tone: '#cdeedb' },
  { Icon: Building2, name: 'Real estate', line: 'Qualify leads while you sleep.', q: 'What’s the price for the 3BHK villas?', a: 'Share your budget and location and I’ll suggest the best options.', done: 'Lead captured · site visit next', tone: '#cfe0ff' },
  { Icon: GraduationCap, name: 'Education & coaching', line: 'Answer every enquiry, instantly.', q: 'What are the batch timings and fees?', a: 'Weekday and weekend batches are open. Shall I share the fee details?', done: 'Enquiry captured · call back', tone: '#ffd3e6' },
  { Icon: Landmark, name: 'Financial services', line: 'Guide customers to the right team.', q: 'How do I start a SIP?', a: 'I can explain the steps and connect you with our team to get started.', done: 'Callback requested', tone: '#efffb8' },
]

export default function UseCases() {
  return (
    <section className="py-16 sm:py-24">
      <div className="mx-auto w-[min(1200px,100%-2.5rem)]">
        <div className="flex flex-col items-start justify-between gap-5 sm:flex-row sm:items-end">
          <h2 className="max-w-2xl text-[clamp(2.2rem,4.6vw,3.4rem)] text-balance font-medium leading-[1.06] tracking-[-0.03em]">Built for businesses like yours. <span className="text-[#1a1a1a]/40">Here’s how they use it.</span></h2>
          <GreyPill href="/use-cases">See all use cases</GreyPill>
        </div>
        <div className="mt-12 grid gap-4 rounded-[36px] bg-[#eeede6] p-3 sm:grid-cols-2 lg:grid-cols-3">
          {CASES.map(({ Icon, name, line, q, a, done, tone }) => (
            <div key={name} className="flex flex-col rounded-[28px] bg-[#fafaf8] p-6">
              <div className="flex items-center gap-3"><span className="flex h-11 w-11 items-center justify-center rounded-2xl" style={{ background: tone }}><Icon size={21} strokeWidth={1.8} /></span><p className="text-[18px] font-medium">{name}</p></div>
              <p className="mt-3 text-[15.5px] text-[#1a1a1a]/60">{line}</p>
              <div className="mt-5 space-y-2 text-[13.5px] leading-snug">
                <div className="max-w-[88%] rounded-2xl rounded-bl-md bg-[#eeede6] px-3.5 py-2.5">{q}</div>
                <div className="ml-auto max-w-[88%] rounded-2xl rounded-br-md bg-[#1a1a1a] px-3.5 py-2.5 text-white">{a}</div>
                <p className="pt-1 text-[12.5px] font-medium text-[#1d7a36]">✓ {done}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
