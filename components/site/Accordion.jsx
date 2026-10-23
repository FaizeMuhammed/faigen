'use client'
import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Plus } from 'lucide-react'

export default function Accordion({ items, dark = false }) {
  const [open, setOpen] = useState(null)
  return (
    <div className={`divide-y ${dark ? 'divide-white/10 border-y border-white/10' : 'divide-soft border-y border-soft'}`}>
      {items.map((it, i) => {
        const isOpen = open === i
        return (
          <div key={it.q}>
            <button
              onClick={() => setOpen(isOpen ? null : i)}
              aria-expanded={isOpen}
              className="flex w-full items-center justify-between gap-6 py-6 text-left"
            >
              <span className={`text-[19px] font-medium tracking-[-0.015em] sm:text-[21px] ${dark ? 'text-white' : 'text-ink'}`}>{it.q}</span>
              <motion.span animate={{ rotate: isOpen ? 45 : 0 }} transition={{ duration: 0.3 }} className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full ${dark ? 'bg-white/10 text-white' : 'bg-alt text-ink'}`}>
                <Plus size={17} />
              </motion.span>
            </button>
            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }} className="overflow-hidden"
                >
                  <p className={`max-w-2xl pb-7 text-[17px] leading-relaxed ${dark ? 'text-white/65' : 'text-muted'}`}>{it.a}</p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        )
      })}
    </div>
  )
}
