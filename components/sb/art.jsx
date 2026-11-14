// Decorative artwork from the Sunbeam template (used with the designer's permission),
// served from /public/sb. Each export keeps the same props as before so the sections do not change.

/* eslint-disable @next/next/no-img-element */
const Img = ({ src, className = '', style, alt = '' }) => (
  <img src={src} alt={alt} aria-hidden draggable={false} className={`sb-float select-none ${className}`} style={style} />
)

// Lime sun: round body image with the smile layered on top
export function Scallop({ className = '', style }) {
  return (
    <div className={`sb-float ${className}`} style={style}>
      <div className="relative h-full w-full">
        <img src="/sb/sun-1.png" alt="" aria-hidden draggable={false} className="absolute inset-0 h-full w-full select-none" />
        <img src="/sb/sun-0.png" alt="" aria-hidden draggable={false} className="absolute left-1/2 top-[46%] w-[48%] -translate-x-1/2 select-none" />
      </div>
    </div>
  )
}

export const HalfRing = ({ className = '', style }) => <Img src="/sb/pink-arch.png" className={`object-contain ${className}`} style={style} />
export const HalfDisc = ({ className = '', style, small }) => <Img src={small ? '/sb/footer-blue.png' : '/sb/blue-wedge.png'} className={`object-contain ${className}`} style={style} />
export const Pillar = ({ className = '', style }) => <Img src="/sb/violet-pillar.png" className={`object-contain ${className}`} style={style} />

export function Cloud({ className = '', footer }) {
  return <img src={footer ? '/sb/cloud-footer.png' : '/sb/cloud.png'} alt="" aria-hidden draggable={false} className={`select-none object-contain ${className}`} />
}

export const Diamond = ({ className = '', color }) => <Img src="/sb/green-square.png" className={`object-contain ${className}`} />
export const Dot = ({ className = '' }) => <Img src="/sb/blue-circle.png" className={`object-contain ${className}`} />

// Round 64px discs with a face, used as card icons
export function FaceDisc({ tone = 'blue', className = '' }) {
  const src = { blue: '/sb/disc-blue.png', violet: '/sb/disc-violet.png', lime: '/sb/disc-green.png', green: '/sb/disc-green.png' }[tone] || '/sb/disc-blue.png'
  return <img src={src} alt="" aria-hidden draggable={false} className={`select-none ${className}`} />
}
