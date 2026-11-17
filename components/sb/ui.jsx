import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

// Exact tokens measured from the reference page
export const C = { page: '#fafafa', sand: '#f0eeeb', card: '#f8f6f4', soft: '#fafaf9', ink: '#1a1a1a', body: '#535353', muted: '#52525b', faint: '#71717a', ghost: '#a1a1aa', lime: '#dbfc74', pink: '#fac6fb' }

// "Try for free": dark 32px circle with an arrow + label, transparent pill (6px 12px 6px 4px)
export function TryLink({ href, children, className = '' }) {
  return (
    <Link href={href} className={`group inline-flex h-10 items-center gap-1 rounded-[24px] py-1.5 pl-1 pr-3 text-[16px] font-medium leading-[22.4px] text-[#1a1a1a] ${className}`}>
      <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#1a1a1a] text-white transition-transform duration-300 group-hover:translate-x-0.5"><ArrowRight size={16} strokeWidth={2.2} /></span>
      <span className="px-1">{children}</span>
    </Link>
  )
}

// Grey pill: bg #f0eeeb, radius 24, padding 12px 24px
export function GreyPill({ href, children, className = '', tall = false }) {
  return <Link href={href} className={`inline-flex items-center rounded-[24px] bg-[#f0eeeb] px-6 py-3 text-[16px] font-medium leading-[22.4px] text-[#1a1a1a] transition-colors hover:bg-[#e7e4df] ${tall ? 'h-[46px]' : 'h-10'} ${className}`}>{children}</Link>
}

// Tag / chip used in the feature cards
export function Tag({ icon: Icon, children }) {
  return (
    <span className="inline-flex h-10 w-fit items-center gap-2 rounded-[100px] bg-white px-3 text-[14px] font-medium leading-[19.6px] text-[#1a1a1a] ring-1 ring-black/[0.05]">
      {Icon && <Icon size={16} strokeWidth={1.9} />}{children}
    </span>
  )
}

export const Wrap = ({ children, className = '' }) => <div className={`mx-auto w-full max-w-[1240px] px-5 ${className}`}>{children}</div>
export const H2 = ({ children, className = '' }) => <h2 className={`font-heading text-balance text-[clamp(2.1rem,4.4vw,3.375rem)] font-medium leading-[1.2] text-[#1a1a1a] ${className}`}>{children}</h2>

// Fine grain + faint mottling over a coloured panel (generated noise, strength matched by measurement)
const NOISE = "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='220' height='220'><filter id='n' x='0' y='0'><feTurbulence type='fractalNoise' baseFrequency='.9' numOctaves='2' stitchTiles='stitch'/><feColorMatrix values='0 0 0 0 .5 0 0 0 0 .5 0 0 0 0 .5 0 0 0 .9 0'/></filter><rect width='100%' height='100%' filter='url(%23n)'/></svg>\")"
const MOTTLE = "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='600' height='600'><filter id='m' x='0' y='0'><feTurbulence type='fractalNoise' baseFrequency='.006 .01' numOctaves='3' seed='4' stitchTiles='stitch'/><feColorMatrix values='0 0 0 0 .5 0 0 0 0 .5 0 0 0 0 .5 0 0 0 .9 0'/></filter><rect width='100%' height='100%' filter='url(%23m)'/></svg>\")"
export function Grain({ strength = 1 }) {
  return (
    <>
      <div aria-hidden className="pointer-events-none absolute inset-0 mix-blend-soft-light" style={{ backgroundImage: NOISE, opacity: 0.55 * strength }} />
      <div aria-hidden className="pointer-events-none absolute inset-0 mix-blend-soft-light" style={{ backgroundImage: MOTTLE, backgroundSize: '600px 600px', opacity: 0.35 * strength }} />
    </>
  )
}

// Panel colours measured from the reference (left/top to right/bottom)
export const PANEL = {
  purple: 'linear-gradient(135deg,#d594fb 0%,#dc9ffd 55%,#dfa3fe 100%)',
  blue: 'linear-gradient(135deg,#b5d4fa 0%,#cde3fd 60%,#d0e5fd 100%)',
  lime: 'linear-gradient(135deg,#c8fb68 0%,#d6fd7e 60%,#dcfe87 100%)',
}

// Downloaded brand assets: icon only or full wordmark for light/dark backgrounds.
export function SbLogo({ size = 32, full = false, dark = false }) {
  const width = full ? size * 538 / 160 : size
  const src = full ? `/sb/faigen-logo-full${dark ? '-white' : ''}.svg` : '/sb/faigen-logo.svg'
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img src={src} alt="Faigen" width={width} height={size} style={{ width, height: size }} />
  )
}
