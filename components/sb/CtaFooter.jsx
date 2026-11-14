import Link from 'next/link'
import { Mail } from 'lucide-react'
import { WhatsAppGlyph, InstagramGlyph } from '../site/FaigenMark'
import { TryLink, Wrap, H2, SbLogo } from './ui'
import { Scallop, HalfDisc, Diamond, Dot, Pillar, Cloud } from './art'

const COLS = [
  { title: 'Product', links: [['WhatsApp AI agent', '/features'], ['Instagram automation', '/features'], ['Orders & catalog', '/features'], ['Broadcast campaigns', '/features'], ['Live inbox', '/features']] },
  { title: 'Company', links: [['Use cases', '/use-cases'], ['Pricing', '/pricing'], ['About', '/about'], ['Contact', '/contact'], ['Book a consultation', '/consultation']] },
  { title: 'Resources', links: [['Brochure', '/brochure'], ['Dashboard guide', '/guide'], ['Terms of service', '/terms'], ['Privacy policy', '/privacy'], ['Data deletion', '/data-deletion']] },
]

export default function CtaFooter() {
  return (
    <footer className="px-0 pb-[60px]">
      <Wrap>
        {/* CTA: padding 256 / 20 / 80, title 64/76.8, subtitle 21/29.4, link */}
        <div className="relative px-5 pb-20 pt-24 text-center lg:pt-64">
          <Diamond className="absolute left-[11.9%] top-[130px] hidden h-[73px] w-[73px] lg:block" />
          <Dot className="absolute left-[66.75%] top-[170px] hidden h-14 w-14 lg:block" />
          <Scallop className="absolute left-[44.5%] top-[50px] hidden h-[108px] w-[108px] lg:block" style={{ '--r': '4deg' }} />
          <Pillar className="absolute left-[9.6%] top-[432px] hidden h-[191px] w-[108px] lg:block" style={{ '--r': '-3deg' }} />
          <Cloud footer className="absolute left-[68.6%] top-[24px] hidden h-[249px] w-[484px] lg:block" />
          <HalfDisc small className="absolute left-[86.9%] top-[359px] hidden h-[169px] w-[169px] lg:block" style={{ '--r': '-6deg' }} />
          <div className="relative mx-auto flex max-w-[780px] flex-col items-center gap-8">
            <div className="flex flex-col gap-1">
              <h2 className="font-heading text-balance text-[clamp(2.4rem,5vw,4rem)] font-medium leading-[1.2] text-[#1a1a1a]">Ready when your customers are.</h2>
              <p className="text-[clamp(1.05rem,1.5vw,1.3125rem)] leading-[1.4] text-[#535353]">Try Faigen on WhatsApp in under a minute, or tell us about your business and we’ll set it up for you.</p>
            </div>
            <TryLink href="/try">Try it on WhatsApp</TryLink>
          </div>
        </div>

        {/* Footer card: 1200 x 354, white 80%, radius 24, padding 40 */}
        <div className="relative z-10 rounded-[24px] bg-white/80 p-6 backdrop-blur-sm sm:p-10">
          <div className="flex flex-col gap-10 lg:flex-row lg:justify-between lg:gap-[91px]">
            <div className="flex flex-col gap-10 lg:w-[400px]">
              <SbLogo />
              <p className="max-w-[320px] text-[16px] leading-[22.4px] text-[#535353]">AI agents that answer your customers on WhatsApp and Instagram, in Malayalam, Manglish and English.</p>
              <div className="flex gap-2">
                {[[InstagramGlyph, 'https://instagram.com/faigen_ai', 'Instagram'], [WhatsAppGlyph, '/try', 'WhatsApp'], [Mail, 'mailto:info@faigen.in', 'Email']].map(([Icon, href, label]) => (
                  <a key={label} href={href} aria-label={label} className="flex h-11 w-11 items-center justify-center rounded-[8px] bg-[#fafaf9] transition-colors hover:bg-[#f0eeeb]"><Icon className="h-5 w-5" size={20} /></a>
                ))}
              </div>
            </div>
            <div className="grid grid-cols-2 gap-x-[91px] gap-y-8 sm:grid-cols-3">
              {COLS.map(c => (
                <div key={c.title} className="flex flex-col gap-4">
                  <p className="text-[16px] font-medium leading-[22.4px] text-[#535353]">{c.title}</p>
                  {c.links.map(([l, h]) => <Link key={l} href={h} className="text-[16px] font-medium leading-[22.4px] text-[#1a1a1a] hover:opacity-60">{l}</Link>)}
                </div>
              ))}
            </div>
          </div>
          <div className="mt-10 flex flex-col gap-1 text-[14px] font-medium leading-[19.6px] text-[#1a1a1a] sm:flex-row sm:justify-between">
            <p>© 2026 Faigen Technologies. All rights reserved.</p>
            <p className="font-normal text-[#71717a]">Kakkanad, Ernakulam, Kerala, India · info@faigen.in</p>
          </div>
        </div>
      </Wrap>
    </footer>
  )
}
