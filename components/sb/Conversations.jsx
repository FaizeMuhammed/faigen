import { WhatsAppGlyph, InstagramGlyph } from '../site/FaigenMark'
import { GreyPill, Wrap, H2 } from './ui'

// Same layout as a testimonial wall: 3 columns of 325px cards, outer columns 24px lower.
// No customer quotes are invented: these are sample conversations, labelled as such.
const COLS = [
  [
    { wa: true, ask: 'Menu please, and do you deliver to Kakkanad?', reply: 'Yes, within 45 mins. Here is our menu. What would you like?', who: 'Restaurant', role: 'Orders', tone: '#ffd9b3' },
    { wa: false, ask: 'price?', reply: 'Check your DMs 📩 We’ve sent you the price list.', who: 'Boutique', role: 'Instagram comment', tone: '#ffd3e6' },
  ],
  [
    { wa: true, ask: 'Can I book tomorrow at 10 AM?', reply: '10 AM is free. Booked it, and I’ll send you a reminder.', who: 'Salon', role: 'Bookings', tone: '#cdeedb' },
    { wa: true, ask: 'ഈ saree M size ഉണ്ടോ?', reply: 'ഉണ്ട്! 3 എണ്ണം stock ഉണ്ട്. Order ചെയ്യട്ടെ?', who: 'Textiles', role: 'Malayalam', tone: '#e1d1ff' },
  ],
  [
    { wa: true, ask: 'Do you deliver to Dubai?', reply: 'Yes, in 3 to 5 days. Shall I take your name and address?', who: 'Gift shop', role: 'Delivery', tone: '#cfe0ff' },
    { wa: true, ask: 'Tapped “Interested” on the event invite', reply: 'Thanks! Our team will get in touch with you shortly.', who: 'Event organiser', role: 'Leads', tone: '#efffb8' },
  ],
]

function Card({ wa, ask, reply, who, role, tone }) {
  return (
    <div className="relative flex min-h-[300px] flex-col justify-between rounded-[24px] bg-white px-5 pb-5 pt-12">
      {wa ? <WhatsAppGlyph className="absolute right-3.5 top-3.5 h-10 w-10" /> : <InstagramGlyph className="absolute right-3.5 top-3.5 h-10 w-10" />}
      <div className="flex flex-col gap-3 text-[16px] leading-[22.4px] text-[#1a1a1a]">
        <p>“{ask}”</p>
        <p className="text-[#71717a]">{reply}</p>
      </div>
      <div className="mt-8 flex items-center gap-5">
        <span className="flex h-10 w-10 items-center justify-center rounded-full text-[15px] font-medium" style={{ background: tone }}>{who[0]}</span>
        <div><p className="text-[14px] font-medium leading-[19.6px]">{who}</p><p className="text-[14px] leading-[19.6px] text-[#71717a]">{role}</p></div>
      </div>
    </div>
  )
}

export default function Conversations() {
  return (
    <section className="-mt-8 py-20">
      <Wrap className="flex flex-col items-center gap-10">
        <div className="relative text-center"><H2 className="mx-auto max-w-[780px]">Real conversations, answered by Faigen</H2><p className="absolute left-1/2 top-full mt-2 -translate-x-1/2 whitespace-nowrap text-[14px] text-[#71717a]">Sample conversations</p></div>
        <div className="grid w-full max-w-[1000px] gap-3 md:grid-cols-3">
          {COLS.map((col, i) => (
            <div key={i} className={`flex flex-col gap-6 ${i !== 1 ? 'md:pt-6' : ''}`}>{col.map(c => <Card key={c.ask} {...c} />)}</div>
          ))}
        </div>
        <GreyPill href="/use-cases">See more use cases</GreyPill>
      </Wrap>
    </section>
  )
}
