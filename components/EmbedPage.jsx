'use client'

import React, { useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import { Menu, X, ArrowUpRight } from 'lucide-react'

const NAV = [
  { label: 'Home', href: '/' },
  { label: 'Use Cases', href: '/use-cases' },
  { label: 'Pricing', href: '/pricing' },
  { label: 'Brochure', href: '/brochure' },
  { label: 'Guide', href: '/guide' },
  { label: 'Contact Us', href: '/contact' },
]

export default function EmbedPage({ src, title, active }) {
  const [menuOpen, setMenuOpen] = useState(false)
  const [height, setHeight] = useState(900)
  const frameRef = useRef(null)
  const cleanupRef = useRef(null)

  const attach = () => {
    const frame = frameRef.current
    const doc = frame?.contentDocument
    if (!doc?.documentElement) return
    cleanupRef.current?.()

    const measure = () => {
      const h = Math.max(doc.documentElement.scrollHeight, doc.body?.scrollHeight || 0)
      if (h) setHeight(h)
    }
    measure()

    const ro = new ResizeObserver(measure)
    ro.observe(doc.documentElement)
    if (doc.body) ro.observe(doc.body)
    doc.fonts?.ready?.then(measure)
    window.addEventListener('resize', measure)

    cleanupRef.current = () => {
      ro.disconnect()
      window.removeEventListener('resize', measure)
    }
  }

  useEffect(() => {
    // The iframe may finish loading before React attaches onLoad on a cached visit.
    if (frameRef.current?.contentDocument?.readyState === 'complete') attach()
    return () => cleanupRef.current?.()
  }, [])

  return (
    <div className="min-h-screen bg-[#FBFBFD] font-sans text-[#1D1D1F]">
      <header className="sticky top-0 z-50 bg-[#FBFBFD]/80 backdrop-blur-2xl border-b border-[#E5E5EA]">
        <div className="max-w-[1500px] mx-auto px-6 md:px-10 py-5 flex justify-between items-center">
          <Link href="/">
            <img src="/logonew.png" alt="Faigen Logo" className="h-8 md:h-14 w-auto object-contain" />
          </Link>

          <nav className="hidden lg:flex items-center gap-10 text-[14px] font-medium text-[#86868B]">
            {NAV.map(item =>
              item.label === active ? (
                <span key={item.href} className="text-[#1D1D1F] font-semibold">{item.label}</span>
              ) : (
                <Link key={item.href} href={item.href} className="hover:text-[#1D1D1F] transition-colors">{item.label}</Link>
              )
            )}
          </nav>

          <div className="hidden lg:flex items-center gap-6">
            <Link href="/try" className="bg-[#1D1D1F] text-white px-5 py-2 text-[14px] font-semibold rounded-full hover:bg-black transition-colors">
              Try it now
            </Link>
          </div>

          <button className="lg:hidden p-2 text-[#1D1D1F]" onClick={() => setMenuOpen(v => !v)} aria-label="Menu">
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </header>

      {menuOpen && (
        <div className="lg:hidden fixed top-[73px] left-0 right-0 bg-white/95 backdrop-blur-3xl border-b border-[#E5E5EA] px-6 pb-8 flex flex-col z-40">
          {NAV.map(item => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setMenuOpen(false)}
              className={`text-[16px] py-5 border-b border-[#F5F5F7] ${item.label === active ? 'font-bold text-[#1D1D1F]' : 'font-medium text-[#86868B]'}`}
            >
              {item.label}
            </Link>
          ))}
          <Link href="/try" onClick={() => setMenuOpen(false)} className="mt-6 bg-[#1D1D1F] text-white text-center py-3 rounded-full text-[15px] font-semibold">
            Try it now
          </Link>
        </div>
      )}

      <main>
        <div className="max-w-[1240px] mx-auto px-2 sm:px-4 pt-4 flex justify-end">
          <a
            href={src}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-[13px] font-medium text-[#86868B] hover:text-[#0066CC] transition-colors px-4 py-2"
          >
            Open full screen <ArrowUpRight size={14} />
          </a>
        </div>
        <iframe
          ref={frameRef}
          src={src}
          title={title}
          onLoad={attach}
          scrolling="no"
          className="block w-full border-0 bg-[#FBFBFD]"
          style={{ height }}
        />
      </main>
    </div>
  )
}
