'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { ArrowRight, Menu, X } from 'lucide-react'
import { NAV } from '@/lib/site'
import { FaigenLogo } from '../site/FaigenMark'

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 10)
    on(); window.addEventListener('scroll', on, { passive: true })
    return () => window.removeEventListener('scroll', on)
  }, [])
  return (
    <header className="fixed inset-x-0 top-0 z-50 px-3 pt-3 sm:px-5">
      <div className={`mx-auto grid w-full max-w-[1200px] grid-cols-[1fr_auto] items-center rounded-full px-4 py-2 transition-all duration-300 md:grid-cols-[1fr_auto_1fr] ${scrolled || open ? 'bg-[#fafaf8]/85 shadow-[0_10px_40px_-18px_rgba(0,0,0,.25)] ring-1 ring-black/[0.06] backdrop-blur-xl' : ''}`}>
        <Link href="/" aria-label="Faigen home" className="flex h-9 items-center"><FaigenLogo /></Link>
        <ul className="hidden items-center gap-8 md:flex">
          {NAV.map(n => <li key={n.href}><Link href={n.href} className="text-[15px] font-medium text-[#1a1a1a] transition-opacity hover:opacity-60">{n.label}</Link></li>)}
        </ul>
        <div className="flex items-center justify-end gap-3">
          <a href="https://workspace.faigen.in" className="hidden h-10 items-center rounded-full bg-[#e9e8e1] px-5 text-[14.5px] font-medium transition-colors hover:bg-[#dedcd3] sm:inline-flex">Login</a>
          <Link href="/try" className="hidden items-center gap-2.5 text-[14.5px] font-medium sm:inline-flex">
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#1a1a1a] text-white"><ArrowRight size={16} /></span>Try it free
          </Link>
          <button onClick={() => setOpen(o => !o)} aria-label={open ? 'Close menu' : 'Open menu'} className="flex h-10 w-10 items-center justify-center rounded-full bg-[#e9e8e1] md:hidden">{open ? <X size={18} /> : <Menu size={18} />}</button>
        </div>
        {open && (
          <div className="col-span-full mt-3 flex flex-col gap-1 border-t border-black/[0.06] pt-3 md:hidden">
            {NAV.map(n => <Link key={n.href} href={n.href} onClick={() => setOpen(false)} className="rounded-xl px-3 py-3 text-[16px] font-medium hover:bg-black/[0.04]">{n.label}</Link>)}
            <Link href="/try" onClick={() => setOpen(false)} className="mt-1 rounded-full bg-[#1a1a1a] px-5 py-3 text-center text-[16px] font-medium text-white">Try it free</Link>
          </div>
        )}
      </div>
    </header>
  )
}
