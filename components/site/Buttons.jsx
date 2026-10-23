import Link from 'next/link'
import { ArrowRight, ChevronRight } from 'lucide-react'

const base = 'inline-flex items-center justify-center gap-2 rounded-full font-medium transition-all duration-300 active:scale-[0.98] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent'

// Solid pill. tone: "accent" (blue), "ink" (black), "light" (white, for dark sections)
export function PillButton({ href, children, tone = 'accent', size = 'md', arrow = false, className = '', ...rest }) {
  const tones = {
    accent: 'bg-accent text-white hover:bg-[#0077ed] shadow-[0_6px_20px_-6px_rgba(0,113,227,.55)]',
    ink: 'bg-ink text-white hover:bg-black',
    light: 'bg-white text-ink hover:bg-[#f2f2f4]',
  }
  const sizes = { sm: 'text-[13px] px-4 h-8', md: 'text-[16px] px-6 h-12', lg: 'text-[17px] px-8 h-14' }
  return (
    <Link href={href} className={`${base} ${tones[tone]} ${sizes[size]} ${className}`} {...rest}>
      {children}
      {arrow && <ArrowRight size={size === 'sm' ? 14 : 17} strokeWidth={2.2} />}
    </Link>
  )
}

// Text link with a chevron, Apple-style ("Learn more >")
export function TextLink({ href, children, dark = false, className = '' }) {
  return (
    <Link href={href} className={`group inline-flex items-center gap-1 text-[17px] font-medium ${dark ? 'text-[#2997ff]' : 'text-accent'} hover:underline underline-offset-4 ${className}`}>
      {children}
      <ChevronRight size={17} strokeWidth={2.4} className="transition-transform duration-300 group-hover:translate-x-0.5" />
    </Link>
  )
}
