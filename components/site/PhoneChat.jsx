'use client'
import { useEffect, useRef, useState } from 'react'
import { motion, AnimatePresence, useInView, useReducedMotion } from 'framer-motion'
import { CheckCheck, Check, Phone, Video, ChevronLeft, Plus, Mic } from 'lucide-react'

// Two short scripted chats that loop while the phone is on screen.
const SCRIPTS = [
  {
    lang: 'Orders',
    steps: [
      { from: 'me', wait: 900, text: 'Hi! Do you have the Premium Coir Mat in stock?' },
      { from: 'bot', typing: 1400, text: 'Yes, 45 in stock — ₹600 each. How many would you like?' },
      { from: 'me', wait: 1400, text: '2, deliver to Ernakulam please' },
      { from: 'bot', typing: 1100, card: true },
    ],
  },
  {
    lang: 'Bookings',
    steps: [
      { from: 'me', wait: 900, text: 'Can I book a consultation for tomorrow at 10 AM?' },
      { from: 'bot', typing: 1400, text: 'Of course! 10:00 AM tomorrow is free. Shall I reserve it for you?' },
      { from: 'me', wait: 1300, text: 'Yes please' },
      { from: 'bot', typing: 1000, text: 'Done ✅ You’re booked for 10:00 AM tomorrow. We’ll send a reminder.' },
    ],
  },
]

function Bubble({ step }) {
  const mine = step.from === 'me'
  if (step.card) {
    return (
      <motion.div
        layout
        initial={{ opacity: 0, y: 14, scale: 0.96 }} animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ type: 'spring', stiffness: 380, damping: 30 }}
        className="max-w-[88%] self-start rounded-2xl rounded-bl-md bg-white shadow-sm overflow-hidden"
      >
        <div className="flex items-center gap-2 px-3.5 pt-3 pb-2">
          <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[#25d366]"><Check size={12} strokeWidth={3.5} className="text-white" /></span>
          <span className="text-[13px] font-semibold text-ink">Order confirmed</span>
        </div>
        <div className="px-3.5 pb-3 text-[12px] leading-snug text-muted space-y-1">
          <div className="flex justify-between gap-6"><span>2 × Premium Coir Mat</span><span className="font-medium text-ink">₹1,200</span></div>
          <div className="flex justify-between gap-6"><span>Delivery</span><span className="font-medium text-ink">Ernakulam · 2–3 days</span></div>
        </div>
        <div className="border-t border-soft px-3.5 py-2 text-[11px] text-faint">We’ll message you when it ships.</div>
      </motion.div>
    )
  }
  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 14, scale: 0.96 }} animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
      className={`max-w-[84%] rounded-2xl px-3 py-2 shadow-sm ${mine ? 'self-end rounded-br-md bg-[#d9fdd3]' : 'self-start rounded-bl-md bg-white'}`}
    >
      <p className="text-[13.5px] leading-[1.35] text-ink">{step.text}</p>
      <div className="mt-0.5 flex items-center justify-end gap-1 text-[10px] text-faint">
        <span>9:41</span>
        {mine && <CheckCheck size={13} className="text-[#53bdeb]" />}
      </div>
    </motion.div>
  )
}

function TypingBubble() {
  return (
    <motion.div
      layout initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, transition: { duration: 0.12 } }}
      className="self-start rounded-2xl rounded-bl-md bg-white px-3.5 py-3 shadow-sm"
    >
      <div className="flex items-center gap-1">
        <span className="typing-dot h-1.5 w-1.5 rounded-full bg-faint" />
        <span className="typing-dot h-1.5 w-1.5 rounded-full bg-faint" />
        <span className="typing-dot h-1.5 w-1.5 rounded-full bg-faint" />
      </div>
    </motion.div>
  )
}

export default function PhoneChat({ className = '' }) {
  const ref = useRef(null)
  const inView = useInView(ref, { amount: 0.3 })
  const reduce = useReducedMotion()
  const [scriptIdx, setScriptIdx] = useState(0)
  const [shown, setShown] = useState(0)
  const [typing, setTyping] = useState(false)
  const idxRef = useRef(0)

  useEffect(() => {
    if (reduce) { setShown(SCRIPTS[0].steps.length); return }
    if (!inView) return
    let cancelled = false
    const sleep = (ms) => new Promise(r => setTimeout(r, ms))
    ;(async () => {
      while (!cancelled) {
        const i = idxRef.current % SCRIPTS.length
        const script = SCRIPTS[i]
        setScriptIdx(i); setShown(0); setTyping(false)
        await sleep(700)
        for (let s = 0; s < script.steps.length && !cancelled; s++) {
          const step = script.steps[s]
          if (step.from === 'bot') { setTyping(true); await sleep(step.typing || 1200); if (cancelled) return; setTyping(false) }
          else await sleep(step.wait || 900)
          if (cancelled) return
          setShown(s + 1)
          await sleep(500)
        }
        await sleep(4200)
        idxRef.current += 1
      }
    })()
    return () => { cancelled = true }
  }, [inView, reduce])

  const script = SCRIPTS[scriptIdx]

  return (
    <div ref={ref} className={`relative mx-auto w-[300px] sm:w-[320px] ${className}`} aria-hidden="true">
      {/* device */}
      <div className="relative rounded-[52px] bg-[#1d1d1f] p-[10px] shadow-[0_50px_100px_-30px_rgba(0,0,0,0.45),0_0_0_1.5px_#3a3a3c_inset]">
        <div className="relative h-[620px] overflow-hidden rounded-[42px] bg-[#efeae2] flex flex-col">
          {/* dynamic island */}
          <div className="absolute left-1/2 top-2.5 z-20 h-[26px] w-[92px] -translate-x-1/2 rounded-full bg-black" />
          {/* status bar */}
          <div className="relative z-10 flex items-center justify-between px-7 pt-3.5 pb-1 text-[12px] font-semibold text-ink bg-[#f7f7f7]">
            <span>9:41</span><span className="flex items-center gap-1 text-[10px]">5G<span className="inline-block h-2.5 w-5 rounded-[3px] border border-ink/70 p-[1px]"><span className="block h-full w-3/4 rounded-[1px] bg-ink" /></span></span>
          </div>
          {/* header */}
          <div className="relative z-10 flex items-center gap-2 bg-[#f7f7f7] px-3 pb-2.5 pt-1.5 border-b border-black/5">
            <ChevronLeft size={22} className="text-[#007aff] -ml-1" />
            <div className="flex h-9 w-9 items-center justify-center rounded-full bg-ink text-white text-[15px] font-semibold">F</div>
            <div className="flex-1 min-w-0 leading-tight">
              <p className="text-[14px] font-semibold text-ink truncate">Faigen Store</p>
              <AnimatePresence mode="wait" initial={false}>
                <motion.p key={script.lang} className="text-[11px] text-muted whitespace-nowrap truncate">
                  online
                </motion.p>
              </AnimatePresence>
            </div>
            <Video size={19} className="text-[#007aff]" /><Phone size={18} className="text-[#007aff]" />
          </div>
          {/* chat */}
          <div className="relative flex flex-1 flex-col justify-end gap-2 overflow-hidden px-3 pb-3">
            <AnimatePresence initial={false}>
              {script.steps.slice(0, shown).map((step, i) => <Bubble key={`${scriptIdx}-${i}`} step={step} />)}
              {typing && <TypingBubble key="typing" />}
            </AnimatePresence>
          </div>
          {/* input */}
          <div className="relative z-10 flex items-center gap-2 bg-[#f7f7f7] px-3 pb-6 pt-2">
            <Plus size={22} className="text-[#007aff]" />
            <div className="flex-1 rounded-full border border-black/10 bg-white px-3.5 py-1.5 text-[13px] text-faint">Message</div>
            <Mic size={20} className="text-[#007aff]" />
          </div>
        </div>
      </div>
    </div>
  )
}
