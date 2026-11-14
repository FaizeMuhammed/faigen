'use client'

import { useEffect, useRef, useState } from 'react'

// Decorative artwork from the Sunbeam template (used with the designer's permission),
// served from /public/sb. Each export keeps the same props as before so the sections do not change.

/* eslint-disable @next/next/no-img-element */
const Img = ({ src, className = '', style, alt = '' }) => (
  <img src={src} alt={alt} aria-hidden draggable={false} className={`select-none ${className}`} style={style} />
)

// Lime sun: Sunbeam's own Lottie animation (/sb/sun.json), played in a loop. Static sun image until it loads.
export function Scallop({ className = '', style }) {
  return (
    <div className={`z-10 ${className}`} style={style}>
      <SunLottie />
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

function SunLottie() {
  const ref = useRef(null)
  const animRef = useRef(null)
  useEffect(() => {
    let dead = false
    import('lottie-web/build/player/lottie_light').then(m => {
      if (dead || !ref.current) return
      const lottie = m.default || m
      const anim = lottie.loadAnimation({ container: ref.current, renderer: 'svg', loop: false, autoplay: false, path: '/sb/sun.json', rendererSettings: { preserveAspectRatio: 'xMidYMid slice' } })
      anim.addEventListener('complete', () => anim.goToAndStop(0, true))
      animRef.current = anim
    }).catch(() => {})
    return () => { dead = true; animRef.current?.destroy() }
  }, [])
  // Same as Sunbeam: the sun rests with its face on, and plays its animation while hovered.
  const start = () => { const a = animRef.current; if (a) { a.loop = true; a.play() } }
  const stop = () => { const a = animRef.current; if (a) a.loop = false }
  return (
    <div className="relative h-full w-full cursor-pointer" onMouseEnter={start} onMouseLeave={stop} onTouchStart={start}>
      <div ref={ref} className="h-full w-full" />
    </div>
  )
}
