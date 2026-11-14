'use client'

import { useState } from 'react'
import Link from 'next/link'
import { ArrowRight, ChevronDown, Menu, X } from 'lucide-react'
import { WhatsAppGlyph, InstagramGlyph } from '../site/FaigenMark'
import { ShoppingBag, Megaphone, Inbox } from 'lucide-react'
import { SbLogo } from './ui'
const PRODUCT = [
  { label: 'WhatsApp AI agent', Icon: WhatsAppGlyph, href: '/features' },
  { label: 'Instagram automation', Icon: InstagramGlyph, href: '/features' },
  { label: 'Orders & catalog', Icon: ShoppingBag, href: '/features' },
  { label: 'Broadcast campaigns', Icon: Megaphone, href: '/features' },
  { label: 'Live inbox', Icon: Inbox, href: '/features' },
]
const LINKS = [['Use cases', '/use-cases'], ['Pricing', '/pricing'], ['About', '/about'], ['Contact', '/contact']]

// Full-width bar, 80px high, 80% #fafafa with blur, 1200px container (as measured on the reference)
export default function Nav() {
  const [open, setOpen] = useState(false)
  const [menu, setMenu] = useState(false)
  return (
    <header className="fixed inset-x-0 top-0 z-50 bg-[#fafafa]/80 backdrop-blur-[10px]">
      <div className="mx-auto flex h-20 w-full max-w-[1240px] items-center justify-between px-5 md:grid md:grid-cols-[240px_1fr_238px]">
        <Link href="/" aria-label="Faigen home" className="flex h-[26px] items-center"><SbLogo /></Link>

        <nav className="hidden items-center justify-center gap-5 md:flex" aria-label="Main">
          <div className="relative" onMouseEnter={() => setMenu(true)} onMouseLeave={() => setMenu(false)}>
            <button className="flex h-8 items-center gap-1 py-[5px] text-[16px] font-medium leading-[22.4px]" aria-expanded={menu}>Product<ChevronDown size={15} className={`transition-transform ${menu ? 'rotate-180' : ''}`} /></button>
            {menu && (
              <div className="absolute left-1/2 top-full w-[260px] -translate-x-1/2 pt-2">
                <div className="rounded-[20px] bg-white p-2 shadow-[0_20px_50px_-20px_rgba(0,0,0,.3)] ring-1 ring-black/[0.05]">
                  {PRODUCT.map(({ label, Icon, href }) => (
                    <Link key={label} href={href} className="flex items-center gap-3 rounded-[14px] px-3 py-2.5 text-[15px] font-medium hover:bg-[#f0eeeb]"><Icon className="h-5 w-5" size={20} />{label}</Link>
                  ))}
                </div>
              </div>
            )}
          </div>
          {LINKS.map(([l, h]) => <Link key={h} href={h} className="text-[16px] font-medium leading-[22.4px] hover:opacity-60">{l}</Link>)}
        </nav>

        <div className="flex items-center justify-end gap-4">
          <a href="https://workspace.faigen.in" className="hidden h-10 items-center rounded-[24px] bg-[#f0eeeb] px-6 py-3 text-[16px] font-medium leading-[22.4px] hover:bg-[#e7e4df] sm:inline-flex">Login</a>
          <Link href="/try" className="hidden h-10 items-center gap-1 rounded-[24px] py-1.5 pl-1 pr-3 text-[16px] font-medium leading-[22.4px] sm:inline-flex">
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#1a1a1a] text-white"><ArrowRight size={16} /></span><span className="px-1">Try it free</span>
          </Link>
          <button onClick={() => setOpen(o => !o)} aria-label={open ? 'Close menu' : 'Open menu'} className="flex h-10 w-10 items-center justify-center rounded-full bg-[#f0eeeb] md:hidden">{open ? <X size={18} /> : <Menu size={18} />}</button>
        </div>
      </div>
      {open && (
        <div className="border-t border-black/[0.06] bg-[#fafafa] px-5 pb-5 md:hidden">
          {[['Features', '/features'], ...LINKS].map(([l, h]) => <Link key={h} href={h} onClick={() => setOpen(false)} className="block py-3 text-[18px] font-medium">{l}</Link>)}
          <Link href="/try" onClick={() => setOpen(false)} className="mt-2 block rounded-[24px] bg-[#1a1a1a] px-6 py-3 text-center text-[16px] font-medium text-white">Try it free</Link>
        </div>
      )}
    </header>
  )
}
