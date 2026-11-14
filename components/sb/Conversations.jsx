import { WhatsAppGlyph, InstagramGlyph } from '../site/FaigenMark'
import { GreyPill, Wrap, H2 } from './ui'

// Same layout as a testimonial wall: 3 columns of 325px cards, outer columns 24px lower.
// No customer quotes are invented: these are sample conversations, labelled as such.
const COLS = [
  [
    { wa: true, ask: 'Menu please, and do you deliver to Kochi?', reply: 'Yes, within 45 mins. Here is our menu. What would you like?', who: 'Restaurant', role: 'Orders', tone: '#ffd9b3' },
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

// Quote mark from the reference (stone-200), top right of every card
function QuoteMark() {
  return (
    <svg viewBox="0 0 40 40" width="40" height="40" aria-hidden style={{ position: 'absolute', right: 20, top: 14 }}>
      <path fill="#eeebe7" d="M19.77 17.035H16.823c-1.214 0-1.965.202-2.254.606-.289.347-.433 1.012-.433 1.994V31.597H1.047V18.075c0-2.832.867-5.086 2.6-6.761C5.381 9.638 7.953 8.8 11.362 8.8H19.77zM39.447 17.035H36.5c-1.214 0-1.965.202-2.254.606-.289.347-.433 1.012-.433 1.994V31.597H20.724V18.075c0-2.832.866-5.086 2.6-6.761C25.058 9.638 27.629 8.8 31.039 8.8H39.447z" />
    </svg>
  )
}

// Card: white, radius 24, padding 48 / 20 / 20, min height 300. Name and role on the left, a 40px radius-8 tile on the right.
function Card({ wa, ask, reply, who, role, tone }) {
  const Glyph = wa ? WhatsAppGlyph : InstagramGlyph
  return (
    <div style={{ position: 'relative', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', gap: 32, minHeight: 300, background: '#fff', borderRadius: 24, padding: '48px 20px 20px' }}>
      <QuoteMark />
      <div style={{ display: 'flex', flexDirection: 'column', gap: 12, fontSize: 16, lineHeight: '22.4px', color: '#1a1a1a' }}>
        <p style={{ margin: 0 }}>“{ask}”</p>
        <p style={{ margin: 0, color: '#71717a' }}>{reply}</p>
      </div>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 16 }}>
        <div style={{ lineHeight: '19.6px', fontSize: 14 }}><p style={{ margin: 0, fontWeight: 500, color: '#1a1a1a' }}>{who}</p><p style={{ margin: 0, color: '#71717a' }}>{role}</p></div>
        <span style={{ width: 40, height: 40, borderRadius: 8, background: tone, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}><Glyph style={{ width: 24, height: 24 }} className="h-6 w-6" /></span>
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
