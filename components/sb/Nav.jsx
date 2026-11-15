'use client'

import { useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import { ArrowRight, ArrowUpRight, ChevronDown, Menu, X } from 'lucide-react'
import { WhatsAppGlyph, InstagramGlyph } from '../site/FaigenMark'
import { ShoppingBag, Megaphone, Inbox } from 'lucide-react'
const PRODUCT = [
  { label: 'WhatsApp AI agent', desc: 'Replies, takes orders, hands off to you', Icon: WhatsAppGlyph, href: '/features', tile: '#e1f7e5' },
  { label: 'Instagram automation', desc: 'Comment-to-DM, buttons and chat menu', Icon: InstagramGlyph, href: '/features', tile: '#fbe3f4' },
  { label: 'Orders & catalog', desc: 'Name, product and address, in chat', Icon: ShoppingBag, href: '/features', tile: '#fff1cf' },
  { label: 'Broadcast campaigns', desc: 'Offers with images and Interested buttons', Icon: Megaphone, href: '/features', tile: '#ece3ff' },
  { label: 'Live inbox', desc: 'Watch every chat and take over any time', Icon: Inbox, href: '/features', tile: '#dcebff' },
]
const LINKS = [['Use cases', '/use-cases'], ['Pricing', '/pricing'], ['About', '/about'], ['Contact', '/contact']]

// Full-width bar, 80px high, 80% #fafafa with blur, 1200px container (as measured on the reference)
export default function Nav() {
  const [open, setOpen] = useState(false)
  const [menu, setMenu] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [hidden, setHidden] = useState(false)
  const last = useRef(0)
  useEffect(() => {
    // Scrolling down tucks the bar away; scrolling up (or being at the top) brings it back.
    const on = () => {
      const y = window.scrollY
      setScrolled(y > 24)
      if (y < 80) setHidden(false)
      else if (y > last.current + 6) { setHidden(true); setOpen(false); setMenu(false) }
      else if (y < last.current - 6) setHidden(false)
      last.current = y
    }
    on(); window.addEventListener('scroll', on, { passive: true })
    return () => window.removeEventListener('scroll', on)
  }, [])
  return (
    <header className={`fixed inset-x-0 top-0 z-50 bg-[#fafafa]/80 backdrop-blur-[10px] transition-transform duration-300 ease-out ${hidden ? '-translate-y-full' : 'translate-y-0'}`}>
      <div className="mx-auto flex h-20 w-full max-w-[1240px] items-center justify-between px-5 md:grid md:grid-cols-[240px_1fr_238px]">
        <Link href="/" aria-label="Faigen home" className="flex h-8 items-center">
          {/* At the top: tile + wordmark. After scrolling the box narrows so only the tile (the icon) shows. */}
          <span className="block h-8 overflow-hidden transition-[width] duration-300 ease-out" style={{ width: scrolled ? 32 : 108 }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/sb/faigen-logo-full.svg" alt="Faigen" width={108} height={32} className="block h-8 w-[108px] max-w-none" />
          </span>
        </Link>

        <nav className="hidden items-center justify-center gap-5 md:flex" aria-label="Main">
          <div className="relative" onMouseEnter={() => setMenu(true)} onMouseLeave={() => setMenu(false)}>
            <button className="flex h-8 items-center gap-1 py-[5px] text-[16px] font-medium leading-[22.4px]" aria-expanded={menu}>Product<ChevronDown size={15} className={`transition-transform ${menu ? 'rotate-180' : ''}`} /></button>
            {menu && (
              <div className="sb-menu-in absolute left-1/2 top-full z-10 w-[400px] -translate-x-1/2 pt-3">
                <div className="rounded-[28px] bg-[#f0eeeb] p-2 shadow-[0_30px_70px_-24px_rgba(0,0,0,.35)]">
                  <div className="rounded-[22px] bg-white p-2">
                    {PRODUCT.map(({ label, desc, Icon, href, tile }) => (
                      <Link key={label} href={href} onClick={() => setMenu(false)} className="group flex items-center gap-3.5 rounded-[16px] px-3 py-2.5 hover:bg-[#f8f6f4]">
                        <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-[14px]" style={{ background: tile }}><Icon className="h-[22px] w-[22px]" size={22} strokeWidth={1.8} /></span>
                        <span className="min-w-0 flex-1">
                          <span className="block text-[15.5px] font-medium leading-[20px] text-[#1a1a1a]">{label}</span>
                          <span className="block text-[13px] leading-[18px] text-[#71717a]">{desc}</span>
                        </span>
                        <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#f0eeeb] text-[#1a1a1a] opacity-0 transition-opacity group-hover:opacity-100"><ArrowUpRight size={14} /></span>
                      </Link>
                    ))}
                  </div>
                  <Link href="/features" onClick={() => setMenu(false)} className="flex items-center justify-between px-4 py-3 text-[14px] font-medium text-[#1a1a1a]">
                    See everything Faigen does
                    <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#1a1a1a] text-white"><ArrowRight size={13} /></span>
                  </Link>
                </div>
              </div>
            )}
          </div>
          {LINKS.map(([l, h]) => <Link key={h} href={h} className="text-[16px] font-medium leading-[22.4px] hover:opacity-60">{l}</Link>)}
        </nav>

        <div className="flex items-center justify-end gap-4">
          <Link href="/try" className="hidden h-10 items-center gap-1 rounded-[24px] py-1.5 pl-1 pr-3 text-[16px] font-medium leading-[22.4px] sm:inline-flex">
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#1a1a1a] text-white"><ArrowRight size={16} /></span><span className="px-1">Try it free</span>
          </Link>
          <button onClick={() => setOpen(o => !o)} aria-label={open ? 'Close menu' : 'Open menu'} className="flex h-10 w-10 items-center justify-center rounded-full bg-[#f0eeeb] md:hidden">{open ? <X size={18} /> : <Menu size={18} />}</button>
        </div>
      </div>
      {open && (
        <div className="sb-menu-in px-3 pb-3 md:hidden">
          <div className="rounded-[28px] bg-[#f0eeeb] p-2">
            <nav className="rounded-[22px] bg-white p-2" aria-label="Mobile">
              {[['Features', '/features'], ...LINKS].map(([l, h], i, arr) => (
                <Link key={h} href={h} onClick={() => setOpen(false)} className={`flex items-center justify-between rounded-[16px] px-4 py-3.5 text-[19px] font-medium leading-[26px] active:bg-[#f0eeeb] ${i < arr.length - 1 ? '' : ''}`}>
                  {l}
                  <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#f0eeeb] text-[#1a1a1a]"><ArrowUpRight size={15} /></span>
                </Link>
              ))}
            </nav>
            <div className="flex items-center gap-2 p-2 pt-3">
              <Link href="/try" onClick={() => setOpen(false)} className="flex h-12 flex-1 items-center justify-center gap-2 rounded-[24px] bg-[#1a1a1a] text-[16px] font-medium text-white">Try it free<ArrowRight size={16} /></Link>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
