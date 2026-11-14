'use client'

import { useId, useState } from 'react'
import { Info } from 'lucide-react'

// The little (i) next to a feature. Opens on hover, keyboard focus or tap, and closes on Escape.
export default function InfoTip({ text, dark = false }) {
  const [open, setOpen] = useState(false)
  const id = useId()
  return (
    <span className="relative ml-1.5 inline-flex align-middle" onMouseEnter={() => setOpen(true)} onMouseLeave={() => setOpen(false)}>
      <button
        type="button" aria-label="More info" aria-describedby={open ? id : undefined}
        onClick={() => setOpen(o => !o)} onFocus={() => setOpen(true)} onBlur={() => setOpen(false)}
        onKeyDown={e => { if (e.key === 'Escape') setOpen(false) }}
        className={`flex h-[18px] w-[18px] items-center justify-center rounded-full transition-colors ${dark ? 'text-white/50 hover:text-white' : 'text-black/30 hover:text-accent'}`}
      >
        <Info size={15} strokeWidth={2.2} />
      </button>
      {open && (
        <span
          id={id} role="tooltip"
          className={`absolute bottom-full left-1/2 z-30 mb-2 w-[230px] max-w-[70vw] -translate-x-1/2 rounded-2xl p-3.5 text-[13px] font-normal leading-snug shadow-[0_12px_40px_-8px_rgba(0,0,0,.35)] ${dark ? 'bg-white text-ink' : 'bg-ink text-white'}`}
        >
          {text}
        </span>
      )}
    </span>
  )
}
