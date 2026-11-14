import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

// Dark round arrow + label, the primary call to action
export function TryLink({ href, children, className = '', tone = 'light' }) {
  return (
    <Link href={href} className={`group inline-flex items-center gap-3 rounded-full py-1.5 pl-1.5 pr-6 text-[16px] font-medium transition-all hover:-translate-y-0.5 ${tone === 'dark' ? 'bg-[#1a1a1a] text-white' : 'bg-white text-[#1a1a1a] shadow-[0_6px_24px_-10px_rgba(0,0,0,.25)] ring-1 ring-black/5'} ${className}`}>
      <span className={`flex h-10 w-10 items-center justify-center rounded-full transition-transform group-hover:translate-x-0.5 ${tone === 'dark' ? 'bg-white text-[#1a1a1a]' : 'bg-[#1a1a1a] text-white'}`}><ArrowRight size={18} strokeWidth={2.2} /></span>
      {children}
    </Link>
  )
}

// Soft grey pill, the secondary action
export function GreyPill({ href, children, className = '' }) {
  return <Link href={href} className={`inline-flex h-[52px] items-center rounded-full bg-[#e9e8e1] px-6 text-[16px] font-medium text-[#1a1a1a] transition-colors hover:bg-[#dedcd3] ${className}`}>{children}</Link>
}

// A small rounded label with an icon
export function Chip({ icon: Icon, children, className = '' }) {
  return (
    <span className={`inline-flex items-center gap-2 rounded-full bg-white px-3.5 py-2 text-[14px] font-medium ring-1 ring-black/[0.06] ${className}`}>
      {Icon && <Icon size={15} strokeWidth={2} className="text-[#1a1a1a]/70" />}{children}
    </span>
  )
}

export const container = 'mx-auto w-[min(1200px,100%-2.5rem)]'
