import { FaigenLogo } from './FaigenMark'
import Link from 'next/link'

const COLS = [
  { title: 'Product', links: [['Features', '/features'], ['Use cases', '/use-cases'], ['Pricing', '/pricing'], ['Try it free', '/try']] },
  { title: 'Resources', links: [['Brochure', '/brochure'], ['Dashboard guide', '/guide'], ['Contact', '/contact']] },
  { title: 'Company', links: [['About', '/about'], ['Start a project', '/startyourproject'], ['Book a consultation', '/consultation']] },
  { title: 'Legal', links: [['Privacy policy', '/privacy'], ['Terms of service', '/terms'], ['Data deletion', '/data-deletion']] },
]

export default function Footer() {
  return (
    <footer className="bg-alt text-[12px] text-muted">
      <div className="container-wide py-14">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-24">
          <div className="max-w-xs">
            <FaigenLogo className="mb-4" />
            <p className="leading-relaxed text-[13px]">AI agents that answer your customers on WhatsApp and Instagram — in Malayalam, Manglish and English.</p>
            <p className="mt-4 inline-flex items-center gap-2 rounded-full bg-white px-3 py-1.5 text-[12px] font-medium text-ink border border-soft">
              <span className="h-1.5 w-1.5 rounded-full bg-[#34c759]" /> Meta Verified Tech Provider
            </p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-x-10 gap-y-10 flex-1">
            {COLS.map(col => (
              <div key={col.title}>
                <p className="font-semibold text-ink mb-3 text-[12px]">{col.title}</p>
                <ul className="space-y-2.5">
                  {col.links.map(([label, href]) => (
                    <li key={href}><Link href={href} className="hover:text-ink hover:underline underline-offset-2 transition-colors">{label}</Link></li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-12 pt-6 border-t border-line/70 flex flex-col sm:flex-row gap-2 sm:items-center sm:justify-between">
          <p>© 2026 Faigen Technologies. All rights reserved.</p>
          <p>Kakkanad, Ernakulam, Kerala, India · <a href="mailto:info@faigen.in" className="hover:text-ink hover:underline">info@faigen.in</a></p>
        </div>
      </div>
    </footer>
  )
}
