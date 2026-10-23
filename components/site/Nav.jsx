'use client'
import { useEffect, useState } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { NAV } from '@/lib/site'
import { PillButton } from './Buttons'

export default function Nav({ dark = false }) {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 8)
    on()
    window.addEventListener('scroll', on, { passive: true })
    return () => window.removeEventListener('scroll', on)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [open])

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
          scrolled || open
            ? `${dark ? 'bg-black/70' : 'bg-white/75'} backdrop-blur-2xl backdrop-saturate-150 border-b ${dark ? 'border-white/10' : 'border-black/[0.06]'}`
            : 'bg-transparent border-b border-transparent'
        }`}
      >
        <nav className="container-wide h-14 flex items-center justify-between" aria-label="Main">
          <Link href="/" aria-label="Faigen home" className="shrink-0 relative z-50">
            <img src="/logonew.png" alt="Faigen" className={`h-7 w-auto ${dark ? 'invert' : ''}`} />
          </Link>

          <ul className="hidden md:flex items-center gap-9">
            {NAV.map(item => (
              <li key={item.href}>
                <Link href={item.href} className={`text-[13px] tracking-[-0.01em] transition-opacity hover:opacity-100 ${dark ? 'text-white opacity-75' : 'text-ink opacity-70'}`}>
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-3 relative z-50">
            <PillButton href="/try" size="sm" tone={dark ? 'light' : 'accent'} className="hidden sm:inline-flex">Try it free</PillButton>
            <button
              onClick={() => setOpen(o => !o)}
              className={`md:hidden w-9 h-9 rounded-full flex items-center justify-center ${dark ? 'text-white' : 'text-ink'}`}
              aria-label={open ? 'Close menu' : 'Open menu'}
              aria-expanded={open}
            >
              {open ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </nav>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-40 bg-white/95 backdrop-blur-2xl md:hidden pt-20 px-6"
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.25 }}
          >
            <ul className="flex flex-col">
              {[{ label: 'Home', href: '/' }, ...NAV].map((item, i) => (
                <motion.li key={item.href} initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.05 + i * 0.05, duration: 0.4 }}>
                  <Link href={item.href} onClick={() => setOpen(false)} className="block py-4 text-[28px] font-semibold tracking-tight text-ink border-b border-soft">
                    {item.label}
                  </Link>
                </motion.li>
              ))}
            </ul>
            <div className="mt-8"><PillButton href="/try" size="lg" className="w-full" onClick={() => setOpen(false)}>Try it free</PillButton></div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
