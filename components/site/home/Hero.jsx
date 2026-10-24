'use client'
import { motion } from 'framer-motion'
import { ShoppingBag, Zap } from 'lucide-react'
import PhoneChat from '../PhoneChat'
import { PillButton, TextLink } from '../Buttons'
import { Squiggle, DoodleRays, DoodleDots, HeroDoodlesLeft, HeroDoodlesRight } from '../Illustrations'

const rise = (delay = 0) => ({
  initial: { opacity: 0, y: 18 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.9, delay, ease: [0.22, 1, 0.36, 1] },
})

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-white pt-32 sm:pt-40">
      <div aria-hidden className="pointer-events-none absolute inset-x-0 top-0 h-[620px] bg-[radial-gradient(900px_420px_at_50%_-8%,#e3efff_0%,transparent_70%)]" />

      {/* quiet hand-drawn accents */}
      <DoodleRays className="pointer-events-none absolute left-[9%] top-[30%] hidden h-14 w-14 -rotate-6 lg:block" />
      <DoodleDots className="pointer-events-none absolute right-[10%] top-[26%] hidden h-14 w-14 rotate-6 lg:block" />

      <div className="container-x relative text-center">
        <motion.p {...rise(0)} className="mx-auto inline-flex items-center gap-2 rounded-full border border-soft bg-white/80 px-3.5 py-1.5 text-[13px] font-medium text-ink backdrop-blur">
          <span className="h-1.5 w-1.5 rounded-full bg-[#34c759]" /> Meta Verified Tech Provider
        </motion.p>

        <motion.h1 {...rise(0.08)} className="display-xl mx-auto mt-6 max-w-4xl">
          Never miss a customer{' '}
          <span className="relative inline-block text-accent">
            again.
            <Squiggle className="absolute -bottom-2 left-0 h-[0.22em] w-full" />
          </span>
        </motion.h1>

        <motion.p {...rise(0.18)} className="lead mx-auto mt-7 max-w-2xl">
          Faigen is the AI agent that replies, takes orders and follows up on WhatsApp and Instagram — in English, Malayalam and Manglish. Live in 24–48 hours.
        </motion.p>

        <motion.div {...rise(0.28)} className="mt-9 flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-7">
          <PillButton href="/try" size="lg" arrow>Try it on WhatsApp</PillButton>
          <TextLink href="/pricing">See pricing</TextLink>
        </motion.div>
      </div>

      {/* phone, cropped at the bottom like a product shot */}
      <div className="relative mx-auto mt-10 h-[430px] max-w-[1100px] overflow-hidden sm:h-[500px]">
        <motion.div initial={{ opacity: 0, y: 70 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1.1, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}>
          <PhoneChat />
        </motion.div>

        <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.9, delay: 1.2 }} className="absolute left-[3%] top-[34%] hidden md:block">
          <div className="flex items-center gap-3 rounded-2xl bg-white/90 px-4 py-3 shadow-[0_20px_50px_-15px_rgba(0,0,0,.25)] ring-1 ring-black/5 backdrop-blur">
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#e9f9ee] text-[#1a9b4a]"><ShoppingBag size={17} /></span>
            <div className="text-left leading-tight"><p className="text-[13px] font-semibold text-ink">New order</p><p className="text-[12px] text-muted">₹1,200 · just now</p></div>
          </div>
        </motion.div>
        <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.9, delay: 1.4 }} className="absolute right-[3%] top-[52%] hidden md:block">
          <div className="flex items-center gap-3 rounded-2xl bg-white/90 px-4 py-3 shadow-[0_20px_50px_-15px_rgba(0,0,0,.25)] ring-1 ring-black/5 backdrop-blur">
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-accent-soft text-accent"><Zap size={17} /></span>
            <div className="text-left leading-tight"><p className="text-[13px] font-semibold text-ink">Replied in seconds</p><p className="text-[12px] text-muted">Even at 2 AM</p></div>
          </div>
        </motion.div>

        <HeroDoodlesLeft className="pointer-events-none absolute left-[1%] top-0 hidden w-[300px] lg:block" />
        <HeroDoodlesRight className="pointer-events-none absolute right-[1%] top-0 hidden w-[300px] lg:block" />

        <div aria-hidden className="pointer-events-none absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-white to-transparent" />
      </div>
    </section>
  )
}
