'use client'

import { useEffect, useRef, useState } from 'react'

// Draws children at a fixed design width and scales them to fit the box on wide screens.
// On narrow screens the content just flows at its natural size.
export default function ScaleBox({ base = 720, min = 780, children, className = '' }) {
  const outer = useRef(null), inner = useRef(null)
  const [state, setState] = useState({ scale: 1, h: null })
  useEffect(() => {
    const fit = () => {
      const w = outer.current?.clientWidth || 0
      if (w < min) return setState({ scale: 1, h: null })
      const s = w / base
      setState({ scale: s, h: (inner.current?.offsetHeight || 0) * s })
    }
    fit()
    const ro = new ResizeObserver(fit)
    if (outer.current) ro.observe(outer.current)
    if (inner.current) ro.observe(inner.current)
    return () => ro.disconnect()
  }, [base, min])
  const scaled = state.h !== null
  return (
    <div ref={outer} className={className} style={scaled ? { height: state.h } : undefined}>
      <div ref={inner} style={scaled ? { width: base, transform: `scale(${state.scale})`, transformOrigin: 'top left' } : undefined}>{children}</div>
    </div>
  )
}
