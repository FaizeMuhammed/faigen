'use client'

import React, { useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'
import SbNav from '@/components/sb/Nav'
import CtaFooter from '@/components/sb/CtaFooter'
import { urbanist, jost } from '@/components/sb/fonts'


export default function EmbedPage({ src, title, active }) {
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
    <div className={`${urbanist.variable} ${jost.className} min-h-screen overflow-x-clip bg-[#fafafa] text-[#1a1a1a]`}>
      <SbNav />
      <main className="pt-[100px]">
        <div className="mx-auto flex w-full max-w-[1240px] items-center justify-between gap-4 px-5 pb-4">
          <div>
            <p className="m-0 flex items-center gap-2 text-[16px] leading-[22.4px] text-[#535353]"><span className="h-2 w-2 rounded-full bg-[#34c759]" />{active}</p>
            <h1 className="font-heading m-0 mt-1 text-[32px] font-medium leading-[1.2] sm:text-[44px]">{title}</h1>
          </div>
          <a href={src} target="_blank" rel="noopener noreferrer" className="inline-flex h-10 shrink-0 items-center gap-1.5 rounded-[24px] bg-[#f0eeeb] px-5 text-[15px] font-medium text-[#1a1a1a] hover:bg-[#e7e4df]">
            Open full screen <ArrowUpRight size={15} />
          </a>
        </div>
        <div className="mx-auto w-full max-w-[1240px] px-5 pb-20">
          <div className="rounded-[32px] bg-[#f0eeeb] p-2">
            <div className="overflow-hidden rounded-[24px] bg-white">
              <iframe
                ref={frameRef}
                src={src}
                title={title}
                onLoad={attach}
                scrolling="no"
                className="block w-full border-0 bg-white"
                style={{ height }}
              />
            </div>
          </div>
        </div>
      </main>
      <CtaFooter />
    </div>
  )
}
