import { useId } from 'react'
import { MessageCircle, Sparkles } from 'lucide-react'
import { InstagramGlyph } from '../site/FaigenMark'

// Faigen's own floating shapes (soft colours, gentle float). Not the template's artwork.
export function Scallop({ className = '', style }) {
  const g = `sbl-${useId().replace(/:/g, '')}`
  return (
    <div className={`sb-float ${className}`} style={style}>
      <svg viewBox="0 0 120 120" className="h-full w-full drop-shadow-[0_14px_20px_rgba(150,190,0,.35)]">
        <defs><radialGradient id={g} cx="35%" cy="30%"><stop offset="0" stopColor="#efff9a" /><stop offset="1" stopColor="#b8f21d" /></radialGradient></defs>
        <path fill={`url(#${g})`} d="M60 4l9 9 12-4 6 11 13 1 1 13 11 6-4 12 9 9-9 9 4 12-11 6-1 13-13 1-6 11-12-4-9 9-9-9-12 4-6-11-13-1-1-13-11-6 4-12-9-9 9-9-4-12 11-6 1-13 13-1 6-11 12 4z" />
      </svg>
      <MessageCircle className="absolute left-1/2 top-1/2 h-[38%] w-[38%] -translate-x-1/2 -translate-y-1/2 text-[#1a1a1a]" strokeWidth={2.2} />
    </div>
  )
}

export function HalfRing({ className = '', style }) {
  const g = `sbp-${useId().replace(/:/g, '')}`
  return (
    <div className={`sb-float ${className}`} style={style}>
      <svg viewBox="0 0 120 80" className="h-full w-full drop-shadow-[0_14px_22px_rgba(214,41,118,.3)]">
        <defs><linearGradient id={g} x1="0" y1="0" x2="1" y2="1"><stop offset="0" stopColor="#ffb6e1" /><stop offset=".6" stopColor="#d9a6ff" /><stop offset="1" stopColor="#ff9bb3" /></linearGradient></defs>
        <path fill={`url(#${g})`} d="M4 76 A56 56 0 0 1 116 76 L90 76 A30 30 0 0 0 30 76 Z" />
      </svg>
      <InstagramGlyph className="absolute left-1/2 top-[34%] h-[30%] w-[30%] -translate-x-1/2 text-[#1a1a1a]" />
    </div>
  )
}

export function HalfDisc({ className = '', style }) {
  const g = `sbb-${useId().replace(/:/g, '')}`
  return (
    <div className={`sb-float ${className}`} style={style}>
      <svg viewBox="0 0 100 100" className="h-full w-full drop-shadow-[0_14px_22px_rgba(60,100,255,.35)]">
        <defs><linearGradient id={g} x1="0" y1="0" x2="1" y2="1"><stop offset="0" stopColor="#8ab4ff" /><stop offset="1" stopColor="#7a5cff" /></linearGradient></defs>
        <path fill={`url(#${g})`} d="M10 10 A90 90 0 0 1 90 90 L10 90 Z" transform="rotate(-8 50 50)" />
      </svg>
      <Sparkles className="absolute left-[34%] top-[46%] h-[26%] w-[26%] text-white" strokeWidth={2.2} />
    </div>
  )
}

export function Diamond({ className = '', color = '#7cf0b8' }) {
  return <div aria-hidden className={`sb-float rotate-45 rounded-[22%] ${className}`} style={{ background: color, boxShadow: `0 10px 24px -8px ${color}` }} />
}

export function Dot({ className = '', color = '#86b4ff' }) {
  return <div aria-hidden className={`sb-float rounded-full ${className}`} style={{ background: color, boxShadow: `0 8px 20px -6px ${color}` }} />
}
