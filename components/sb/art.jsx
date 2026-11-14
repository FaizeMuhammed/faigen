import { useId } from 'react'

// Faigen's own mascots: soft gradient shapes with sleepy smiling faces, drawn as vectors.
// (Original drawings in the same playful style as the reference, not the template's image files.)

const INK = '#2a2a2e'

function Face({ x, y, s = 1, tilt = 0 }) {
  return (
    <g transform={`translate(${x} ${y}) rotate(${tilt}) scale(${s})`} fill="none" stroke={INK} strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round">
      <path d="M-15 -3 q4.5 -5.5 9 0" />
      <path d="M6 -3 q4.5 -5.5 9 0" />
      <path d="M-7 6 q7 7 14 0" />
    </g>
  )
}

const uid = () => useId().replace(/:/g, '')

// Lime scalloped sun
export function Scallop({ className = '', style }) {
  const g = `sun${uid()}`
  return (
    <div className={`sb-float ${className}`} style={style}>
      <svg viewBox="0 0 120 120" className="h-full w-full overflow-visible drop-shadow-[0_16px_18px_rgba(140,190,0,.32)]">
        <defs><radialGradient id={g} cx="38%" cy="30%" r="80%"><stop offset="0" stopColor="#f1ff9d" /><stop offset=".55" stopColor="#d3fb52" /><stop offset="1" stopColor="#b6ee1b" /></radialGradient></defs>
        <path fill={`url(#${g})`} d="M60 3l8.5 8.8 12-3.6 5.6 11.2 12.4.9 1.3 12.4 11 5.8-3.8 11.9 8.8 8.8-8.8 8.8 3.8 11.9-11 5.8-1.3 12.4-12.4.9-5.6 11.2-12-3.6L60 117l-8.5-8.8-12 3.6-5.6-11.2-12.4-.9-1.3-12.4-11-5.8 3.8-11.9L3 60l8.8-8.8-3.8-11.9 11-5.8 1.3-12.4 12.4-.9 5.6-11.2 12 3.6z" />
        <Face x={60} y={58} s={1.15} />
      </svg>
    </div>
  )
}

// Pink arch (half ring)
export function HalfRing({ className = '', style }) {
  const g = `arch${uid()}`
  return (
    <div className={`sb-float ${className}`} style={style}>
      <svg viewBox="0 0 140 96" className="h-full w-full overflow-visible drop-shadow-[0_14px_20px_rgba(214,90,160,.3)]">
        <defs><linearGradient id={g} x1="0" y1="0" x2="1" y2="1"><stop offset="0" stopColor="#ffc2e8" /><stop offset=".55" stopColor="#e6aaff" /><stop offset="1" stopColor="#ffa9c4" /></linearGradient></defs>
        <path fill={`url(#${g})`} d="M4 94 A66 66 0 0 1 136 94 L104 94 A34 34 0 0 0 36 94 Z" />
        <Face x={70} y={36} s={0.95} />
      </svg>
    </div>
  )
}

// Blue wedge (half disc)
export function HalfDisc({ className = '', style }) {
  const g = `wedge${uid()}`
  return (
    <div className={`sb-float ${className}`} style={style}>
      <svg viewBox="0 0 120 150" className="h-full w-full overflow-visible drop-shadow-[0_16px_22px_rgba(70,90,255,.32)]">
        <defs><linearGradient id={g} x1="0" y1="0" x2="1" y2="1"><stop offset="0" stopColor="#8fb8ff" /><stop offset=".6" stopColor="#7f9bff" /><stop offset="1" stopColor="#8a6cff" /></linearGradient></defs>
        <path fill={`url(#${g})`} d="M14 138 L14 70 C14 38 40 12 72 12 C94 12 108 22 108 22 C108 22 114 60 106 92 C98 122 74 138 40 138 Z" />
        <Face x={64} y={78} s={0.95} tilt={-8} />
      </svg>
    </div>
  )
}

// Violet pillar (rounded top)
export function Pillar({ className = '', style }) {
  const g = `pil${uid()}`
  return (
    <div className={`sb-float ${className}`} style={style}>
      <svg viewBox="0 0 108 191" className="h-full w-full overflow-visible drop-shadow-[0_16px_20px_rgba(150,80,255,.3)]">
        <defs><linearGradient id={g} x1="0" y1="0" x2="1" y2="1"><stop offset="0" stopColor="#c9a2ff" /><stop offset="1" stopColor="#a56bff" /></linearGradient></defs>
        <path fill={`url(#${g})`} d="M0 191 V54 A54 54 0 0 1 108 54 V191 Z" />
        <Face x={54} y={52} s={1} />
      </svg>
    </div>
  )
}

export function Cloud({ className = '' }) {
  return (
    <svg aria-hidden viewBox="0 0 484 249" className={className}>
      <path fill="#ecebe7" opacity=".9" d="M92 249C38 249 0 214 0 168s34-78 82-82C92 36 138 0 196 0c52 0 92 28 108 66 12-6 26-10 40-10 52 0 92 40 92 90 0 6-1 12-2 17 28 12 50 40 50 76 0 29-22 50-52 50z" />
    </svg>
  )
}

export function Diamond({ className = '', color = '#7cf0b8' }) {
  return <div aria-hidden className={`sb-float rotate-45 rounded-[24%] ${className}`} style={{ background: `linear-gradient(135deg, ${color}, ${color}cc)`, boxShadow: `0 10px 24px -8px ${color}` }} />
}

export function Dot({ className = '', color = '#86b4ff' }) {
  return <div aria-hidden className={`sb-float rounded-full ${className}`} style={{ background: `radial-gradient(circle at 35% 30%, #ffffffaa, ${color} 60%)`, boxShadow: `0 8px 20px -6px ${color}` }} />
}

// Round 64px discs with a face, used as card icons (blue / violet / lime)
export function FaceDisc({ tone = 'blue', className = '' }) {
  const g = `fd${uid()}`
  const C = { blue: ['#cfe3ff', '#7fa8ff'], violet: ['#e6c8ff', '#a87bff'], lime: ['#f1ff9d', '#b6ee1b'] }[tone]
  return (
    <svg viewBox="0 0 64 64" className={className} aria-hidden>
      <defs><radialGradient id={g} cx="35%" cy="28%" r="85%"><stop offset="0" stopColor={C[0]} /><stop offset="1" stopColor={C[1]} /></radialGradient></defs>
      <circle cx="32" cy="32" r="30" fill={`url(#${g})`} />
      <Face x={32} y={31} s={0.78} />
    </svg>
  )
}
