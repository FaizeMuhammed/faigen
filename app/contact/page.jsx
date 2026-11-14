import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'
import Nav from '@/components/sb/Nav'
import CtaFooter from '@/components/sb/CtaFooter'
import ContactForm from '@/components/sb/ContactForm'
import CopyEmail from '@/components/sb/CopyEmail'
import { FaceDisc } from '@/components/sb/art'
import { H2 } from '@/components/sb/ui'
import { urbanist, jost } from '@/components/sb/fonts'

export const metadata = {
  title: 'Contact — Faigen',
  description: 'Tell us what you sell and where your customers message you. We will show you how Faigen would handle it.',
}

const EMAIL = 'info@faigen.in'
const Grain = () => <div aria-hidden style={{ position: 'absolute', inset: 0, backgroundImage: 'url(/sb/grain.png)', backgroundSize: '256px 256px', mixBlendMode: 'overlay', opacity: 0.34, pointerEvents: 'none' }} />

// Contact page in the layout of the reference contact page (branch: sunbeam-style):
// hero with headline, two pictures and the form; three reach-us cards in a tray; closing call to action and footer.
export default function ContactPage() {
  return (
    <div className={`${urbanist.variable} ${jost.className} min-h-screen overflow-x-clip bg-[#fafafa] text-[#1a1a1a]`}>
      <Nav />
      <main>
        <section style={{ background: '#fafaf9', padding: '120px 0 80px' }}>
          <div className="mx-auto grid w-full max-w-[1240px] gap-10 px-5 lg:grid-cols-[540px_1fr]">
            <div className="flex flex-col gap-12 lg:gap-[100px]">
              <div className="flex flex-col gap-5">
                <p className="flex items-center gap-2 text-[16px] leading-[22.4px] text-[#535353]"><span className="h-2 w-2 rounded-full bg-[#34c759]" />Meta Verified Tech Provider · Kakkanad, Kerala</p>
                <h1 className="font-heading text-balance text-[clamp(2.6rem,5vw,4rem)] font-medium leading-[1.2]">Let’s talk about your business.</h1>
                <p className="max-w-[480px] text-[18px] leading-[1.4] text-[#535353]">Tell us what you sell and where your customers message you. We’ll show you how Faigen would handle it.</p>
              </div>
              <div className="flex gap-2">
                <div style={{ position: 'relative', width: 246, height: 175, borderRadius: 12, overflow: 'hidden', background: '#d791f9', flexShrink: 0 }} className="max-sm:!w-[44%]">
                  <Grain />
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src="/sb/violet-pillar.png" alt="" aria-hidden style={{ position: 'absolute', left: '50%', top: '52%', width: 130, transform: 'translate(-50%,-50%)', maxWidth: 'none' }} />
                </div>
                <Link href="/try" style={{ position: 'relative', flex: 1, height: 175, borderRadius: 12, overflow: 'hidden', background: '#daedfe', padding: '0 20px 20px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', textDecoration: 'none', color: '#1a1a1a' }}>
                  <Grain />
                  <span style={{ position: 'relative', paddingTop: 20 }}>{/* eslint-disable-next-line @next/next/no-img-element */}<img src="/sb/faigen-logo.svg" alt="Faigen" width={40} height={40} style={{ width: 40, height: 40 }} /></span>
                  <span style={{ position: 'relative', display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', gap: 8, fontSize: 14, lineHeight: '19.6px' }}>
                    <span style={{ maxWidth: 160 }}>Prefer to see it first? Chat with a live agent on WhatsApp.</span>
                    <span style={{ width: 36, height: 36, borderRadius: 18, background: '#1a1a1a', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}><ArrowUpRight size={16} /></span>
                  </span>
                </Link>
              </div>
            </div>
            <ContactForm />
          </div>
        </section>

        <section style={{ background: '#fafaf9', padding: '80px 0' }}>
          <div className="mx-auto w-full max-w-[1240px] px-5">
            <div className="text-center"><H2 className="mx-auto max-w-[780px]">Reach us your way</H2></div>
            <div style={{ marginTop: 40, background: '#f0eeeb', borderRadius: 20, padding: 8 }}>
              <div className="grid gap-2 lg:grid-cols-3">
                {[
                  { tone: 'blue', t: 'Email', d: EMAIL, extra: <CopyEmail email={EMAIL} />, href: `mailto:${EMAIL}`, hint: 'We reply the same day.' },
                  { tone: 'violet', t: 'Visit us', d: 'BCG Residency Towers 4a1, Kakkanad, Ernakulam, Kerala 682037', href: 'https://maps.google.com/?q=BCG+Residency+Towers+Kakkanad+Ernakulam', hint: 'Open in Maps' },
                  { tone: 'lime', t: 'Try the demo', d: 'Chat with a live Faigen agent on WhatsApp in under a minute.', href: '/try', hint: 'Start the demo' },
                ].map(c => (
                  <div key={c.t} style={{ background: '#fafaf9', borderRadius: 12, padding: 24, display: 'flex', flexDirection: 'column', gap: 16, minHeight: 238 }}>
                    <div style={{ padding: '0 8px 8px 0' }}><FaceDisc tone={c.tone} className="h-16 w-16" /></div>
                    <div style={{ marginTop: 'auto' }}>
                      <h3 className="font-heading" style={{ margin: 0, fontSize: 21, lineHeight: '29.4px', fontWeight: 500 }}>{c.t}</h3>
                      <p style={{ margin: '4px 0 0', fontSize: 16, lineHeight: '22.4px', color: '#52525b' }}>{c.d}</p>
                      <div style={{ marginTop: 12, display: 'flex', alignItems: 'center', gap: 12 }}>
                        <a href={c.href} {...(c.href.startsWith('http') ? { target: '_blank', rel: 'noreferrer' } : {})} style={{ fontSize: 16, fontWeight: 500, color: '#1a1a1a', textDecoration: 'underline', textUnderlineOffset: 4 }}>{c.hint}</a>
                        {c.extra}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
      <CtaFooter />
    </div>
  )
}
