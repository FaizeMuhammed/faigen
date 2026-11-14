import Nav from '@/components/sb/Nav'
import CtaFooter from '@/components/sb/CtaFooter'
import { Scallop, FaceDisc } from '@/components/sb/art'
import { H2 } from '@/components/sb/ui'
import { urbanist, jost } from '@/components/sb/fonts'

export const metadata = {
  title: 'About — Faigen',
  description: 'Faigen is a Kerala-based team building AI agents that answer your customers on WhatsApp and Instagram.',
}

const STATS = [
  ['24/7', 'Always online. No downtime, no missed messages.'],
  ['24–48h', 'From sharing your details to going live.'],
  ['3', 'Languages understood: English, Malayalam and Manglish.'],
]

const VALUES = [
  ['blue', 'Built for conversion', 'Every reply is meant to move a customer closer to an order or a booking, not just to answer.'],
  ['violet', 'Local by design', 'Customers write the way they speak. The agent understands context and replies in kind.'],
  ['lime', 'Frictionless setup', 'No coding, no messy integrations. You share your business details; we hand you a trained agent.'],
  ['blue', 'Your data stays yours', 'We are an official Meta Tech Provider. Your data is never sold, and you can delete it any time.'],
]

const grainStyle = { position: 'absolute', inset: 0, backgroundImage: 'url(/sb/grain.png)', backgroundSize: '256px 256px', mixBlendMode: 'overlay', opacity: 0.34, pointerEvents: 'none' }
const cloud = (tint, style) => ({ position: 'absolute', background: tint, WebkitMaskImage: 'url(/sb/cloud.png)', maskImage: 'url(/sb/cloud.png)', WebkitMaskSize: '100% 100%', maskSize: '100% 100%', ...style })

// About page in the layout of the reference about page (branch: sunbeam-style):
// hero (headline + intro with two pictures), a two-column story section, values, numbers, closing CTA + footer.
export default function AboutPage() {
  return (
    <div className={`${urbanist.variable} ${jost.className} min-h-screen overflow-x-clip bg-[#fafafa] text-[#1a1a1a]`}>
      <Nav />
      <main>
        <section style={{ background: '#fafaf9', padding: '120px 0 80px' }}>
          <div className="mx-auto w-full max-w-[1240px] px-5">
            <div className="relative grid gap-6 lg:grid-cols-2 lg:gap-10">
              <h1 className="font-heading text-balance text-[clamp(2.6rem,5vw,4rem)] font-medium leading-[1.2]">We help Kerala’s businesses answer every customer.</h1>
              <p className="self-center text-[clamp(1.05rem,1.5vw,1.3125rem)] leading-[1.4] text-[#535353]">Faigen is a Kerala-based team building AI agents that handle customer conversations, orders and follow-ups on WhatsApp and Instagram.</p>
              <Scallop className="absolute right-[-30px] top-[-60px] z-0 h-[84px] w-[84px] lg:left-[calc(50%-78px)] lg:right-auto lg:top-[150px] lg:z-10 lg:h-[156px] lg:w-[156px]" />
            </div>

            <div className="mt-10 grid gap-5 lg:grid-cols-[1fr_386px]">
              {/* wide picture: lilac panel, grain, clouds, the three mascots and the line that sums us up */}
              <div style={{ position: 'relative', minHeight: 516, borderRadius: 24, overflow: 'hidden', background: '#e4b5fd' }}>
                <div aria-hidden style={cloud('rgba(215,150,250,.34)', { left: -80, top: -50, width: 420, height: 210 })} />
                <div aria-hidden style={cloud('rgba(215,150,250,.3)', { right: -90, bottom: -40, width: 460, height: 230 })} />
                <div style={grainStyle} />
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/sb/violet-pillar.png" alt="" aria-hidden className="absolute right-[18px] top-[28px] w-[120px] max-w-none sm:right-[70px] sm:top-[60px] sm:w-[200px]" />
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/sb/pink-arch.png" alt="" aria-hidden className="absolute right-[96px] top-[20px] w-[130px] max-w-none sm:right-[290px] sm:top-[40px] sm:w-[230px]" />
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/sb/blue-wedge.png" alt="" aria-hidden className="absolute bottom-[150px] right-[8px] w-[110px] max-w-none sm:bottom-[10px] sm:right-[30px] sm:w-[190px]" />
                <p className="font-heading" style={{ position: 'absolute', left: 40, bottom: 40, margin: 0, maxWidth: 400, fontSize: 'clamp(1.9rem,3.4vw,2.8rem)', lineHeight: 1.15, fontWeight: 500, color: '#1a1a1a' }}>Your customers never sleep. Neither does our AI.</p>
              </div>
              {/* narrow picture: lime panel */}
              <div style={{ position: 'relative', minHeight: 360, borderRadius: 24, overflow: 'hidden', background: '#c1f744', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', padding: 32 }}>
                <div aria-hidden style={cloud('rgba(255,255,255,.26)', { left: -60, top: -30, width: 340, height: 170 })} />
                <div style={grainStyle} />
                <span style={{ position: 'relative', alignSelf: 'flex-start', background: '#1a1a1a', color: '#dbfc74', fontSize: 13, padding: '6px 12px', borderRadius: 14 }}>Official Meta Tech Provider</span>
                <div style={{ position: 'relative' }}>
                  <p className="font-heading" style={{ margin: 0, fontSize: 'clamp(2.2rem,3.4vw,3rem)', lineHeight: 1.1, fontWeight: 500 }}>Made in Kerala.</p>
                  <p style={{ margin: '10px 0 0', fontSize: 16, lineHeight: '22.4px', color: 'rgba(26,26,26,.75)' }}>Built in Kakkanad, Ernakulam, for the way Kerala’s customers really write.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* story: title left, text and office card right */}
        <section style={{ background: '#fafaf9', padding: '80px 0' }}>
          <div className="mx-auto grid w-full max-w-[1240px] gap-10 px-5 lg:grid-cols-[418px_1fr]">
            <H2>Born from a simple observation.</H2>
            <div className="flex flex-col gap-8">
              <div className="flex flex-col gap-5 text-[21px] leading-[29.4px] text-[#535353]">
                <p>Kerala businesses are brilliant at what they do, but lose customers every day because they can’t reply fast enough. A customer asks about a product at midnight. Nobody answers. They go to a competitor.</p>
                <p>We built Faigen to fix exactly that. Our agents never sleep, never miss a message, and speak your customer’s language, whether you run a local boutique or a large agency.</p>
              </div>
              <div style={{ background: '#f8f6f4', borderRadius: 20, padding: 8 }} className="flex flex-col gap-2 sm:flex-row">
                <div style={{ position: 'relative', borderRadius: 12, overflow: 'hidden', background: '#daedfe', minHeight: 200 }} className="sm:w-[414px] sm:shrink-0">
                  <div aria-hidden style={cloud('rgba(150,196,250,.36)', { left: -40, top: -20, width: 300, height: 150 })} />
                  <div style={grainStyle} />
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src="/sb/footer-blue.png" alt="" aria-hidden style={{ position: 'absolute', right: 20, top: 8, width: 190, maxWidth: 'none' }} />
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src="/sb/faigen-logo.svg" alt="Faigen" width={56} height={56} style={{ position: 'absolute', left: 24, bottom: 24, width: 56, height: 56 }} />
                </div>
                <div style={{ padding: 8 }}>
                  <p className="font-heading" style={{ margin: 0, fontSize: 21, lineHeight: '24px', fontWeight: 500 }}>Kakkanad</p>
                  <p style={{ margin: '8px 0 0', fontSize: 16, lineHeight: '22.4px', color: '#52525b' }}>BCG Residency Towers 4a1, Kakkanad, Ernakulam, Kerala 682037</p>
                  <a href="https://maps.google.com/?q=BCG+Residency+Towers+Kakkanad+Ernakulam" target="_blank" rel="noreferrer" style={{ display: 'inline-block', marginTop: 12, fontSize: 16, fontWeight: 500, color: '#1a1a1a', textDecoration: 'underline', textUnderlineOffset: 4 }}>Open in Maps</a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* values: title left, four cards right */}
        <section style={{ background: '#fafaf9', padding: '80px 0' }}>
          <div className="mx-auto grid w-full max-w-[1240px] gap-10 px-5 lg:grid-cols-[418px_1fr]">
            <H2>Simple, useful, trustworthy.</H2>
            <div className="grid gap-2 rounded-[20px] bg-[#f0eeeb] p-2 sm:grid-cols-2">
              {VALUES.map(([tone, t, d]) => (
                <div key={t} style={{ background: '#fafaf9', borderRadius: 12, padding: 24, display: 'flex', flexDirection: 'column', gap: 24, minHeight: 250 }}>
                  <div style={{ padding: '0 8px 8px 0' }}><FaceDisc tone={tone} className="h-16 w-16" /></div>
                  <div style={{ marginTop: 'auto' }}>
                    <h3 className="font-heading" style={{ margin: 0, fontSize: 21, lineHeight: '29.4px', fontWeight: 500 }}>{t}</h3>
                    <p style={{ margin: '4px 0 0', fontSize: 16, lineHeight: '22.4px', color: '#52525b' }}>{d}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* numbers: title left, three cards right */}
        <section style={{ background: '#fafaf9', padding: '80px 0' }}>
          <div className="mx-auto grid w-full max-w-[1240px] gap-10 px-5 lg:grid-cols-[418px_1fr]">
            <H2>Faigen in numbers</H2>
            <div className="grid gap-3 sm:grid-cols-3">
              {STATS.map(([n, l]) => (
                <div key={n} style={{ background: '#e9e6e1', borderRadius: 24, padding: 24, minHeight: 240, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                  <p className="font-heading" style={{ margin: 0, fontSize: 'clamp(2.6rem,4vw,3.4rem)', lineHeight: 1.1, fontWeight: 500, color: '#1a1a1a' }}>{n}</p>
                  <p style={{ margin: 0, fontSize: 16, lineHeight: '22.4px', color: '#52525b' }}>{l}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <CtaFooter />
    </div>
  )
}
