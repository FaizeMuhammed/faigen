'use client'

import { useEffect, useRef, useState } from 'react'

// The product window in the home hero: screenshots of the real Faigen console (demo business "Nila Handlooms",
// all names and numbers made up), one per tab, shown at 1080 x 634 and scaled to the width it is given.
const SHOTS = {
  wa: ['/sb/dash-wa.jpg', 'Live Inbox: a WhatsApp chat where the AI collected an order'],
  ig: ['/sb/dash-ig.jpg', 'Instagram: DM AI agent, comment automation and keyword replies'],
  orders: ['/sb/dash-orders.jpg', 'Orders from WhatsApp and Instagram'],
  bc: ['/sb/dash-bc.jpg', 'Campaign history with Interested and Not interested counts'],
  inbox: ['/sb/dash-inbox.jpg', 'Live Inbox: an Instagram chat, with a Take Over button'],
}

export default function HeroWindow({ tab }) {
  const [src, alt] = SHOTS[tab] || SHOTS.wa
  const outer = useRef(null)
  const [scale, setScale] = useState(1)
  useEffect(() => {
    const fit = () => setScale(Math.min(1, (outer.current?.clientWidth || 1080) / 1080))
    fit()
    const ro = new ResizeObserver(fit)
    outer.current && ro.observe(outer.current)
    return () => ro.disconnect()
  }, [])
  return (
    <div ref={outer} style={{ width: '100%', height: 634 * scale }}>
      <div style={{ width: 1080, height: 634, transform: `scale(${scale})`, transformOrigin: 'top left', borderRadius: 8, overflow: 'hidden', background: '#f3f4f6', boxShadow: '0 30px 80px -30px rgba(60,30,120,.45)' }}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={src} alt={alt} width={1080} height={634} draggable={false} style={{ display: 'block', width: 1080, height: 634, objectFit: 'cover', objectPosition: 'top left' }} />
      </div>
    </div>
  )
}
