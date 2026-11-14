import Link from 'next/link'
import { FaigenLogo } from '../site/FaigenMark'

const COLS = [
  { title: 'Product', links: [['Features', '/features'], ['Use cases', '/use-cases'], ['Pricing', '/pricing'], ['Try it free', '/try']] },
  { title: 'Company', links: [['About', '/about'], ['Contact', '/contact'], ['Start a project', '/startyourproject'], ['Book a consultation', '/consultation']] },
  { title: 'Resources', links: [['Brochure', '/brochure'], ['Dashboard guide', '/guide'], ['Privacy policy', '/privacy'], ['Terms of service', '/terms'], ['Data deletion', '/data-deletion']] },
]

export default function Footer() {
  return (
    <footer className="px-3 pb-6 sm:px-5">
      <div className="mx-auto w-full max-w-[1200px] rounded-[32px] bg-white p-8 ring-1 ring-black/[0.05] sm:p-12">
        <div className="flex flex-col gap-12 lg:flex-row lg:justify-between">
          <div className="max-w-xs">
            <FaigenLogo />
            <p className="mt-4 text-[15px] leading-snug text-[#1a1a1a]/60">AI agents that answer your customers on WhatsApp and Instagram, in Malayalam, Manglish and English.</p>
            <p className="mt-4 inline-flex items-center gap-2 rounded-full bg-[#eeede6] px-3.5 py-1.5 text-[13px] font-medium"><span className="h-2 w-2 rounded-full bg-[#34c759]" /> Meta Verified Tech Provider</p>
          </div>
          <div className="grid grid-cols-2 gap-x-14 gap-y-8 sm:grid-cols-3">
            {COLS.map(c => (
              <div key={c.title}>
                <p className="text-[15px] font-semibold">{c.title}</p>
                <ul className="mt-4 space-y-3">{c.links.map(([l, h]) => <li key={h}><Link href={h} className="text-[15px] text-[#1a1a1a]/65 transition-colors hover:text-[#1a1a1a]">{l}</Link></li>)}</ul>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-12 flex flex-col gap-2 border-t border-black/[0.07] pt-6 text-[14px] text-[#1a1a1a]/55 sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 Faigen Technologies. All rights reserved.</p>
          <p>Kakkanad, Ernakulam, Kerala, India · <a href="mailto:info@faigen.in" className="hover:text-[#1a1a1a]">info@faigen.in</a></p>
        </div>
      </div>
    </footer>
  )
}
