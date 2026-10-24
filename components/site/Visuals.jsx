'use client'
import { useEffect, useRef, useState } from 'react'
import { motion, animate, useInView } from 'framer-motion'
import { Check, ShoppingBag, MessageCircle, Heart, Send, LayoutDashboard, Inbox, BarChart3, Settings, Play, Bookmark, Package, Truck, BellRing, CheckCheck, ExternalLink } from 'lucide-react'

export function CountUp({ to, duration = 1.8, delay = 0 }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, amount: 0.6 })
  const [v, setV] = useState(0)
  useEffect(() => {
    if (!inView) return
    const c = animate(0, to, { duration, delay, ease: [0.22, 1, 0.36, 1], onUpdate: setV })
    return () => c.stop()
  }, [inView, to, duration, delay])
  return <span ref={ref}>{Math.round(v).toLocaleString('en-IN')}</span>
}

const inV = (delay = 0, y = 14) => ({
  initial: { opacity: 0, y },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.5 },
  transition: { duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] },
})

const Tag = ({ children }) => (
  <p className="mt-5 text-center text-[11px] font-medium uppercase tracking-[0.08em] text-faint">{children}</p>
)

/* ── 1. An order, collected end to end ─────────────────────────── */
export function OrdersVisual() {
  const steps = [['Confirmed', Check, true], ['Packed', Package, false], ['Shipped', Truck, false]]
  return (
    <div className="w-full max-w-[370px]">
      {/* the chat that started it */}
      <motion.div {...inV(0.05, 10)} className="ml-auto w-fit max-w-[85%] rounded-2xl rounded-br-md bg-[#d9fdd3] px-3.5 py-2 text-[13.5px] leading-snug text-ink shadow-sm">
        2 Coir Mats please — deliver to Kakkanad
        <span className="mt-0.5 flex items-center justify-end gap-1 text-[10px] text-faint">12:04 <CheckCheck size={13} className="text-[#53bdeb]" /></span>
      </motion.div>

      <div className="relative mt-3">
        <div aria-hidden className="absolute inset-x-5 -bottom-2.5 h-full rounded-[22px] bg-white/70 ring-1 ring-black/5" />
        <motion.div {...inV(0.5, 14)} className="card-white relative p-5">
          <div className="flex items-center justify-between">
            <p className="text-[12px] font-medium uppercase tracking-[0.06em] text-faint">Order #1042</p>
            <motion.span {...inV(1.8, 0)} className="inline-flex items-center gap-1 rounded-full bg-[#e9f9ee] px-2.5 py-1 text-[11.5px] font-medium text-[#1a9b4a]"><Check size={12} strokeWidth={3} /> Confirmed</motion.span>
          </div>

          <div className="mt-4 flex items-center gap-3.5">
            <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-[#f3e7d3] to-[#dcc3a0] text-[#8a6a3f]"><ShoppingBag size={22} /></span>
            <div className="min-w-0 flex-1">
              <p className="truncate text-[15px] font-semibold text-ink">Premium Coir Mat</p>
              <p className="text-[13px] text-muted">₹600 × 2</p>
            </div>
            <p className="text-[18px] font-semibold tracking-tight text-ink">₹1,200</p>
          </div>

          <div className="mt-4 space-y-2 rounded-xl bg-alt px-3.5 py-3 text-[13px]">
            <div className="flex justify-between"><span className="text-muted">Customer</span><span className="font-medium text-ink">Anjali Menon</span></div>
            <div className="flex justify-between"><span className="text-muted">Deliver to</span><span className="font-medium text-ink">Kakkanad, Ernakulam</span></div>
          </div>

          <div className="mt-5 flex items-start">
            {steps.map(([label, Icon, done], i) => (
              <div key={label} className="relative flex flex-1 flex-col items-center">
                {i > 0 && <span aria-hidden className={`absolute right-1/2 top-[13px] h-[2px] w-full ${i === 1 ? 'bg-accent' : 'bg-line-soft'}`} />}
                <motion.span {...inV(1.2 + i * 0.25, 0)} className={`relative flex h-7 w-7 items-center justify-center rounded-full ${done ? 'bg-accent text-white' : i === 1 ? 'bg-white text-accent ring-2 ring-accent' : 'bg-alt text-faint'}`}><Icon size={13} strokeWidth={2.6} /></motion.span>
                <span className={`mt-1.5 text-[11px] ${done || i === 1 ? 'font-medium text-ink' : 'text-faint'}`}>{label}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
      <Tag>Example order</Tag>
    </div>
  )
}

/* ── 2. Instagram: a Reel comment becomes a conversation ───────── */
export function InstagramVisual() {
  return (
    <div className="w-full max-w-[370px]">
      <div className="relative mb-28">
        <motion.div {...inV(0.05, 12)} className="card-white overflow-hidden">
          <div className="flex items-center gap-2.5 px-4 py-3">
            <span className="h-8 w-8 rounded-full bg-gradient-to-br from-[#feda75] via-[#fa7e1e] to-[#d62976] p-[2px]"><span className="flex h-full w-full items-center justify-center rounded-full bg-white text-[11px] font-semibold text-ink">F</span></span>
            <div className="leading-tight"><p className="text-[13px] font-semibold text-ink">your_shop</p><p className="text-[11px] text-faint">Reel · Onam offer</p></div>
          </div>
          <div className="relative h-[104px] bg-gradient-to-br from-[#f6d9a8] via-[#f2b27a] to-[#e2767b]">
            <span className="absolute inset-0 flex items-center justify-center"><span className="flex h-12 w-12 items-center justify-center rounded-full bg-white/85 text-ink shadow-md backdrop-blur"><Play size={20} fill="currentColor" className="ml-0.5" /></span></span>
            <span className="absolute bottom-2 left-3 rounded-full bg-black/35 px-2.5 py-1 text-[11px] font-medium text-white backdrop-blur">Comment “price” for the list</span>
          </div>
          <div className="flex items-center gap-3.5 px-4 pt-3 text-ink"><Heart size={19} /><MessageCircle size={19} /><Send size={19} /><Bookmark size={19} className="ml-auto" /></div>
          <div className="space-y-2.5 px-4 pb-4 pt-2.5">
            <motion.p {...inV(0.7, 8)} className="text-[13px] leading-snug"><span className="font-semibold text-ink">ravi.k</span> <span className="text-ink">price?</span></motion.p>
            <motion.p {...inV(1.4, 8)} className="ml-5 rounded-xl bg-alt px-3 py-2 text-[13px] leading-snug"><span className="font-semibold text-ink">your_shop</span> <span className="text-accent">@ravi.k</span> <span className="text-ink">Check your DMs 📩</span></motion.p>
          </div>
        </motion.div>

        <motion.div {...inV(2.1, 16)} className="absolute -bottom-[112px] -right-3 w-[84%] rounded-2xl bg-white p-3.5 shadow-[0_24px_50px_-16px_rgba(0,0,0,.3)] ring-1 ring-black/5">
          <div className="flex items-center gap-2"><span className="flex h-5 w-5 items-center justify-center rounded-full bg-ink text-[9px] font-semibold text-white">F</span><p className="text-[11px] font-medium text-faint">Direct message · now</p></div>
          <p className="mt-2 text-[13px] leading-snug text-ink">Hi @ravi.k! 👋 Here’s our price list — want me to reserve one for you?</p>
          <div className="mt-2.5 flex gap-2"><span className="rounded-full bg-accent-soft px-3 py-1 text-[12px] font-medium text-accent">View prices</span><span className="rounded-full bg-alt px-3 py-1 text-[12px] font-medium text-ink">Order now</span></div>
        </motion.div>
      </div>
      <Tag>Example · comment-to-DM</Tag>
    </div>
  )
}

/* ── 3. A broadcast going out ──────────────────────────────────── */
export function BroadcastVisual() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, amount: 0.5 })
  const R = 24
  const C = 2 * Math.PI * R
  return (
    <div ref={ref} className="w-full max-w-[370px]">
      {/* the message people receive */}
      <motion.div {...inV(0.05, 12)} className="w-[88%] overflow-hidden rounded-2xl rounded-bl-md bg-white shadow-[0_8px_30px_-12px_rgba(0,0,0,.2)] ring-1 ring-black/5">
        <div className="flex h-[78px] items-end bg-gradient-to-br from-[#0071e3] to-[#5ac8fa] p-3.5">
          <p className="text-[20px] font-semibold leading-none tracking-[-0.03em] text-white">Onam offer 🎉</p>
        </div>
        <div className="px-3.5 pb-1 pt-3"><p className="text-[13.5px] leading-snug text-ink">Flat 20% off every coir mat till Sunday. Reply YES and we’ll reserve yours.</p></div>
        <div className="mt-1 flex items-center justify-center gap-1.5 border-t border-soft py-2.5 text-[13px] font-medium text-accent"><ExternalLink size={14} /> Shop now</div>
      </motion.div>

      {/* how it is going */}
      <motion.div {...inV(0.6, 14)} className="card-white relative z-10 -mt-3 ml-auto w-[92%] p-4">
        <div className="flex items-center gap-4">
          <div className="relative h-[60px] w-[60px] shrink-0">
            <svg viewBox="0 0 60 60" className="h-full w-full -rotate-90">
              <circle cx="30" cy="30" r={R} fill="none" stroke="#f0f0f3" strokeWidth="6" />
              <motion.circle cx="30" cy="30" r={R} fill="none" stroke="#0071e3" strokeWidth="6" strokeLinecap="round" strokeDasharray={C}
                initial={{ strokeDashoffset: C }} animate={inView ? { strokeDashoffset: C * (1 - 0.976) } : {}} transition={{ duration: 2.4, delay: 0.5, ease: [0.22, 1, 0.36, 1] }} />
            </svg>
            <span className="absolute inset-0 flex items-center justify-center text-[12px] font-semibold text-ink">98%</span>
          </div>
          <div className="min-w-0 flex-1">
            <p className="text-[14px] font-semibold text-ink">Sending to 1,000 contacts</p>
            <p className="text-[12px] text-muted">Marketing template · approved</p>
          </div>
        </div>
        <div className="mt-4 grid grid-cols-3 gap-2 text-center">
          {[['Sent', 1000, 0.5], ['Delivered', 976, 0.8], ['Read', 742, 1.1]].map(([label, n, d]) => (
            <div key={label} className="rounded-xl bg-alt py-2.5">
              <p className="text-[19px] font-semibold tracking-tight text-ink"><CountUp to={n} duration={2.2} delay={d} /></p>
              <p className="text-[11px] text-muted">{label}</p>
            </div>
          ))}
        </div>
      </motion.div>
      <Tag>Example campaign</Tag>
    </div>
  )
}

/* ── 4. The dashboard ──────────────────────────────────────────── */
export function DashboardVisual() {
  const bars = [38, 52, 44, 66, 58, 82, 74]
  const rows = [['Anjali M.', 'Order confirmed · 2× Coir Mat', 'AI'], ['Ravi K.', 'Asked about delivery to Aluva', 'AI'], ['Meera S.', 'Booked a slot for tomorrow', 'You']]
  return (
    <div className="w-full max-w-[560px]">
      <div className="relative">
        <div className="overflow-hidden rounded-[22px] bg-white shadow-[0_30px_80px_-24px_rgba(0,0,0,.28)] ring-1 ring-black/5">
          <div className="flex items-center gap-1.5 border-b border-soft bg-[#fbfbfb] px-4 py-3">
            <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" /><span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" /><span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
            <span className="ml-3 rounded-md bg-white px-3 py-0.5 text-[11px] text-faint ring-1 ring-black/5">workspace.faigen.in</span>
          </div>
          <div className="flex">
            <div className="hidden w-12 shrink-0 flex-col items-center gap-4 border-r border-soft bg-[#fbfbfb] py-5 text-faint sm:flex">
              <LayoutDashboard size={16} className="text-accent" /><Inbox size={16} /><ShoppingBag size={16} /><BarChart3 size={16} /><Settings size={16} />
            </div>
            <div className="min-w-0 flex-1 p-4 sm:p-5">
              <p className="text-[14px] font-semibold text-ink">Today</p>
              <div className="mt-3 grid grid-cols-3 gap-2">
                {[['Chats', 128], ['Orders', 14], ['Replied', 100, '%']].map(([label, n, suffix], i) => (
                  <div key={label} className="rounded-xl bg-alt p-2.5">
                    <p className="text-[10.5px] text-muted">{label}</p>
                    <p className="mt-0.5 text-[19px] font-semibold tracking-tight text-ink"><CountUp to={n} delay={0.2 + i * 0.15} />{suffix || ''}</p>
                  </div>
                ))}
              </div>
              <div className="mt-3 rounded-xl border border-soft p-3">
                <div className="flex items-center justify-between text-[10.5px] text-muted"><span>Messages this week</span><span className="text-[#1a9b4a]">↑ steady</span></div>
                <div className="mt-2 flex h-[72px] items-end gap-1.5">
                  {bars.map((h, i) => (
                    <motion.span key={i} className={`flex-1 rounded-t-md ${i === 5 ? 'bg-accent' : 'bg-accent-soft'}`} style={{ height: `${h}%`, transformOrigin: 'bottom' }}
                      initial={{ scaleY: 0 }} whileInView={{ scaleY: 1 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.5 + i * 0.07, ease: [0.22, 1, 0.36, 1] }} />
                  ))}
                </div>
              </div>
              <div className="mt-2.5 space-y-0.5">
                {rows.map(([n, t, who], i) => (
                  <motion.div key={n} {...inV(0.9 + i * 0.2, 8)} className="flex items-center gap-2.5 rounded-xl px-1 py-1.5">
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-alt text-[11px] font-semibold text-ink">{n[0]}</span>
                    <div className="min-w-0 leading-tight"><p className="text-[12px] font-medium text-ink">{n}</p><p className="truncate text-[11px] text-muted">{t}</p></div>
                    <span className={`ml-auto shrink-0 rounded-full px-2 py-0.5 text-[10px] font-medium ${who === 'AI' ? 'bg-accent-soft text-accent' : 'bg-[#fff3e0] text-[#b36b00]'}`}>{who}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <motion.div {...inV(1.8, -10)} className="absolute -right-2 -top-8 flex items-center gap-2.5 rounded-2xl bg-white px-3.5 py-2.5 shadow-[0_20px_44px_-14px_rgba(0,0,0,.35)] ring-1 ring-black/5 sm:-right-5">
          <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#e9f9ee] text-[#1a9b4a]"><BellRing size={15} /></span>
          <div className="leading-tight"><p className="text-[12px] font-semibold text-ink">New order</p><p className="text-[11px] text-muted">₹1,200 · just now</p></div>
        </motion.div>
      </div>
      <Tag>Sample data</Tag>
    </div>
  )
}
