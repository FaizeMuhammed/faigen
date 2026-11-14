import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'
import Nav from '@/components/sb/Nav'
import CtaFooter from '@/components/sb/CtaFooter'
import { TryLink, GreyPill, H2, Tag } from '@/components/sb/ui'
import { urbanist, jost } from '@/components/sb/fonts'

export const metadata = {
  title: 'Use cases — Faigen',
  description: 'How retail, clinics, restaurants and real estate businesses use Faigen to sell, book and support on WhatsApp.',
}

// Four use-case cards in a 2 x 2 grid (a different build from the home and features cards):
// a grained picture with tilted chat bubbles, an outcome sticker and a mascot, then the text and points below.
const CASES = [
  { tag: 'Retail & e-commerce', title: 'Turn chats into checkouts.', text: 'Stop losing customers to slow replies. Faigen answers stock and price questions from your catalog and closes the order inside WhatsApp.',
    points: ['Product, price and stock answers', 'Order collected in the chat', 'Broadcast offers on festival days'], link: ['Try it for a shop', '/try'],
    bg: '#e4b5fd', cloud: 'rgba(215,150,250,.34)', mascot: ['/sb/violet-pillar.png', 118],
    q: 'Do you have the Premium Coir Mat in stock?', a: 'Yes, 45 in stock! ₹600. Would you like to order?', done: 'Order collected · ₹600' },
  { tag: 'Clinics & hospitals', title: 'Appointments without the phone tag.', text: 'Reduce front-desk load. The agent shares doctor timings, books slots and answers the questions patients ask every day.',
    points: ['Doctor availability and booking', 'Common patient questions answered', 'Staff can take over any chat'], link: ['Try it for a clinic', '/try'],
    bg: '#daedfe', cloud: 'rgba(150,196,250,.36)', mascot: ['/sb/blue-wedge.png', 120],
    q: 'Is Dr. Rajesh available tomorrow evening?', a: 'Yes, 4 to 8 PM tomorrow. Shall I book a slot?', done: 'Appointment booked · 6 PM' },
  { tag: 'Restaurants & cafes', title: 'Orders and reservations, handled.', text: 'Share the menu, take delivery orders and book tables while your team stays on the floor.',
    points: ['Menu and delivery answers', 'Orders with totals', 'Table reservations'], link: ['Try it for a restaurant', '/try'],
    bg: '#d5fa6a', cloud: 'rgba(255,255,255,.3)', mascot: ['/sb/pink-arch.png', 150],
    q: 'Menu please, and do you deliver?', a: 'Yes, within 45 mins! What would you like?', done: 'Order total · ₹680' },
  { tag: 'Real estate', title: 'Qualify leads while you sleep.', text: 'Engage property seekers at once. The agent captures requirements, shares details and schedules site visits.',
    points: ['Budget and timeline captured', 'Brochures and details shared', 'Site visits scheduled'], link: ['Try it for real estate', '/try'],
    bg: '#f6c9f7', cloud: 'rgba(250,150,240,.3)', mascot: ['/sb/footer-blue.png', 150],
    q: 'What’s the price for the 3BHK villas?', a: 'Share your budget and location, I’ll suggest the best fit.', done: 'Lead captured · visit next' },
]

const grain = { position: 'absolute', inset: 0, backgroundImage: 'url(/sb/grain.png)', backgroundSize: '256px 256px', mixBlendMode: 'overlay', opacity: 0.34, pointerEvents: 'none' }
const bubble = (me) => ({ position: 'absolute', maxWidth: 270, padding: '10px 14px', fontSize: 15, lineHeight: 1.4, color: '#1a1a1a', background: me ? '#d9fdd3' : '#fff', borderRadius: me ? '14px 14px 4px 14px' : '14px 14px 14px 4px', boxShadow: '0 14px 30px -12px rgba(30,40,90,.3)' })

function Tick() {
  return <svg viewBox="0 0 24 24" width="24" height="24" aria-hidden style={{ flexShrink: 0 }}><g transform="translate(7 7)"><circle cx="5" cy="5" r="5" fill="#dbfc74" stroke="#dbfc74" strokeWidth="1.29" /><path d="M3.857 5.336s.667.381 1 .938c0 0 1-2.188 2.333-2.917" fill="none" stroke="#1a1a1a" strokeWidth="1.07" strokeLinecap="round" strokeLinejoin="round" /></g></svg>
}

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
          <div style={{ background: '#f0eeeb', borderRadius: 32, padding: 8 }}>
            <div className="grid gap-2 md:grid-cols-2">
              {CASES.map(c => (
                <article key={c.tag} style={{ background: '#fff', borderRadius: 24, padding: 24, display: 'flex', flexDirection: 'column', gap: 24 }}>
                  <div style={{ position: 'relative', height: 320, borderRadius: 16, overflow: 'hidden', background: c.bg }}>
                    <div aria-hidden style={{ position: 'absolute', left: -50, top: -30, width: 320, height: 160, background: c.cloud, WebkitMaskImage: 'url(/sb/cloud.png)', maskImage: 'url(/sb/cloud.png)', WebkitMaskSize: '100% 100%', maskSize: '100% 100%' }} />
                    <div style={grain} />
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={c.mascot[0]} alt="" aria-hidden style={{ position: 'absolute', right: 8, bottom: -10, width: c.mascot[1] * 1.5, maxWidth: 'none' }} />
                    <p style={{ ...bubble(false), left: 22, top: 26, transform: 'rotate(-3deg)' }}>{c.q}</p>
                    <p style={{ ...bubble(true), left: 70, top: 118, transform: 'rotate(2deg)' }}>{c.a}</p>
                    <span style={{ position: 'absolute', left: 24, bottom: 26, display: 'inline-flex', alignItems: 'center', gap: 8, background: '#1a1a1a', color: '#fff', borderRadius: 20, padding: '8px 14px 8px 8px', fontSize: 14, fontWeight: 500, transform: 'rotate(-4deg)', boxShadow: '0 14px 30px -12px rgba(0,0,0,.45)' }}>
                      <span style={{ width: 22, height: 22, borderRadius: 11, background: '#dbfc74', color: '#1a1a1a', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 13, fontWeight: 700 }}>✓</span>{c.done}
                    </span>
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: 14, flex: 1 }}>
                    <span style={{ alignSelf: 'flex-start', background: '#f0eeeb', borderRadius: 14, padding: '5px 12px', fontSize: 14, color: '#52525b' }}>{c.tag}</span>
                    <h3 className="font-heading" style={{ margin: 0, fontSize: 'clamp(1.7rem,2.6vw,2.2rem)', lineHeight: 1.2, fontWeight: 500 }}>{c.title}</h3>
                    <p style={{ margin: 0, fontSize: 16, lineHeight: '22.4px', color: '#52525b' }}>{c.text}</p>
                    <ul style={{ listStyle: 'none', margin: 0, padding: 0 }}>
                      {c.points.map(p => <li key={p} style={{ display: 'flex', alignItems: 'center', gap: 8, padding: '5px 0', fontSize: 16, color: '#1a1a1a' }}><Tick />{p}</li>)}
                    </ul>
                    <Link href={c.link[1]} style={{ marginTop: 'auto', paddingTop: 8, display: 'inline-flex', alignItems: 'center', gap: 6, fontSize: 16, fontWeight: 500, color: '#1a1a1a', textDecoration: 'none' }}>
                      {c.link[0]}<span style={{ width: 24, height: 24, borderRadius: 12, background: '#1a1a1a', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><ArrowUpRight size={14} /></span>
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          </div>
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
