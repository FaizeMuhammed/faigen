'use client'
import { useEffect, useRef, useState } from 'react'
import { motion, animate, useInView } from 'framer-motion'
import { Check, ShoppingBag, MessageCircle, Heart, Send, LayoutDashboard, Inbox, BarChart3, Settings, ArrowDown } from 'lucide-react'

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
  const rows = [['Customer', 'Anjali Menon'], ['Product', 'Premium Coir Mat'], ['Quantity', '2'], ['Deliver to', 'Kakkanad, Ernakulam']]
  return (
    <div className="w-full max-w-[400px]">
      <div className="card-white p-6 sm:p-7">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#e9f9ee] text-[#1a9b4a]"><ShoppingBag size={17} /></span>
            <div className="leading-tight"><p className="text-[15px] font-semibold text-ink">New order</p><p className="text-[12px] text-muted">from WhatsApp</p></div>
          </div>
          <motion.span {...inV(1.7, 0)} className="inline-flex items-center gap-1 rounded-full bg-[#e9f9ee] px-2.5 py-1 text-[12px] font-medium text-[#1a9b4a]"><Check size={13} strokeWidth={3} /> Confirmed</motion.span>
        </div>
        <div className="mt-5 divide-y divide-soft">
          {rows.map(([k, v], i) => (
            <motion.div key={k} {...inV(0.25 + i * 0.28, 8)} className="flex items-center justify-between py-3 text-[14px]">
              <span className="text-muted">{k}</span><span className="font-medium text-ink">{v}</span>
            </motion.div>
          ))}
          <motion.div {...inV(0.25 + rows.length * 0.28, 8)} className="flex items-center justify-between pt-4 text-[15px]">
            <span className="font-medium text-ink">Total</span><span className="text-[20px] font-semibold tracking-tight text-ink">₹1,200</span>
          </motion.div>
        </div>
      </div>
      <Tag>Example order</Tag>
    </div>
  )
}

/* ── 2. Instagram: a comment becomes a conversation ────────────── */
export function InstagramVisual() {
  return (
    <div className="w-full max-w-[420px]">
      <div className="card-white overflow-hidden">
        <div className="space-y-4 p-6">
          <motion.div {...inV(0.1)} className="flex gap-3">
            <div className="h-9 w-9 shrink-0 rounded-full bg-gradient-to-br from-[#feda75] via-[#fa7e1e] to-[#d62976]" />
            <div className="flex-1">
              <p className="text-[13px] leading-snug"><span className="font-semibold text-ink">ravi.k</span> <span className="text-ink">price?</span></p>
              <p className="mt-0.5 text-[11px] text-faint">2m · Reply</p>
            </div>
            <Heart size={14} className="mt-1 text-faint" />
          </motion.div>
          <motion.div {...inV(0.9)} className="ml-12 flex gap-3 rounded-2xl bg-alt p-3">
            <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-ink text-[12px] font-semibold text-white">F</div>
            <p className="text-[13px] leading-snug text-ink"><span className="font-semibold">your_shop</span> <span className="text-accent">@ravi.k</span> Check your DMs 📩</p>
          </motion.div>
        </div>

        <motion.div {...inV(1.6, 0)} className="flex items-center justify-center gap-2 border-y border-soft bg-white py-2.5 text-[11px] font-medium uppercase tracking-[0.08em] text-faint">
          <ArrowDown size={13} /> and in their DMs
        </motion.div>

        <div className="bg-[#fafafa] p-6">
          <motion.div {...inV(2.2)} className="max-w-[88%] rounded-2xl rounded-bl-md bg-white p-3.5 shadow-sm ring-1 ring-black/5">
            <p className="text-[13.5px] leading-snug text-ink">Hi @ravi.k! 👋 Thanks for asking. Here’s our price list — want me to reserve one for you?</p>
            <div className="mt-2.5 flex gap-2">
              <span className="rounded-full bg-accent-soft px-3 py-1 text-[12px] font-medium text-accent">View prices</span>
              <span className="rounded-full bg-alt px-3 py-1 text-[12px] font-medium text-ink">Order now</span>
            </div>
          </motion.div>
        </div>
      </div>
      <Tag>Example · comment-to-DM</Tag>
    </div>
  )
}

/* ── 3. A broadcast going out ──────────────────────────────────── */
export function BroadcastVisual() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, amount: 0.5 })
  return (
    <div ref={ref} className="w-full max-w-[400px]">
      <div className="card-white p-6 sm:p-7">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-accent-soft text-accent"><Send size={16} /></span>
            <div className="leading-tight"><p className="text-[15px] font-semibold text-ink">Onam offer 🎉</p><p className="text-[12px] text-muted">Marketing · 1,000 contacts</p></div>
          </div>
          <span className="text-[12px] font-medium text-[#1a9b4a]">Sending…</span>
        </div>
        <div className="mt-6 h-2 overflow-hidden rounded-full bg-alt">
          <motion.div className="h-full rounded-full bg-accent" initial={{ width: '0%' }} animate={inView ? { width: '100%' } : {}} transition={{ duration: 2.6, delay: 0.3, ease: [0.22, 1, 0.36, 1] }} />
        </div>
        <div className="mt-6 grid grid-cols-3 gap-3 text-center">
          {[['Sent', 1000, 0.3], ['Delivered', 976, 0.6], ['Read', 742, 0.9]].map(([label, n, d]) => (
            <div key={label} className="rounded-2xl bg-alt py-3.5">
              <p className="text-[22px] font-semibold tracking-tight text-ink"><CountUp to={n} duration={2.4} delay={d} /></p>
              <p className="text-[12px] text-muted">{label}</p>
            </div>
          ))}
        </div>
      </div>
      <Tag>Example campaign</Tag>
    </div>
  )
}

/* ── 4. The dashboard ──────────────────────────────────────────── */
export function DashboardVisual() {
  const line = 'M0,92 C40,88 60,70 100,74 C140,78 160,40 200,46 C240,52 260,24 300,28 C330,31 350,14 380,10'
  return (
    <div className="w-full max-w-[560px]">
      <div className="overflow-hidden rounded-[22px] bg-white shadow-[0_30px_80px_-24px_rgba(0,0,0,.28)] ring-1 ring-black/5">
        <div className="flex items-center gap-1.5 border-b border-soft bg-[#fbfbfb] px-4 py-3">
          <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" /><span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" /><span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
          <span className="ml-3 rounded-md bg-white px-3 py-0.5 text-[11px] text-faint ring-1 ring-black/5">workspace.faigen.in</span>
        </div>
        <div className="flex">
          <div className="hidden w-14 shrink-0 flex-col items-center gap-4 border-r border-soft bg-[#fbfbfb] py-5 text-faint sm:flex">
            <LayoutDashboard size={17} className="text-accent" /><Inbox size={17} /><ShoppingBag size={17} /><BarChart3 size={17} /><Settings size={17} />
          </div>
          <div className="flex-1 p-5 sm:p-6">
            <p className="text-[15px] font-semibold text-ink">Today</p>
            <div className="mt-4 grid grid-cols-3 gap-3">
              {[['Conversations', 128], ['Orders', 14], ['Replied', 100, '%']].map(([label, n, suffix], i) => (
                <div key={label} className="rounded-xl bg-alt p-3">
                  <p className="text-[11px] text-muted">{label}</p>
                  <p className="mt-1 text-[22px] font-semibold tracking-tight text-ink"><CountUp to={n} delay={0.2 + i * 0.15} />{suffix || ''}</p>
                </div>
              ))}
            </div>
            <div className="mt-4 rounded-xl border border-soft p-3">
              <div className="flex items-center justify-between text-[11px] text-muted"><span>Messages this week</span><span className="text-[#1a9b4a]">↑ steady</span></div>
              <svg viewBox="0 0 380 100" className="mt-2 h-24 w-full overflow-visible" fill="none">
                <defs><linearGradient id="dg" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#0071e3" stopOpacity=".18" /><stop offset="100%" stopColor="#0071e3" stopOpacity="0" /></linearGradient></defs>
                <motion.path d={`${line} L380,100 L0,100 Z`} fill="url(#dg)" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.9, duration: 1 }} />
                <motion.path d={line} stroke="#0071e3" strokeWidth="2.5" strokeLinecap="round" initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} viewport={{ once: true }} transition={{ duration: 1.6, ease: 'easeOut' }} />
              </svg>
            </div>
            <div className="mt-3 space-y-2">
              {[['Anjali M.', 'Order confirmed · 2× Coir Mat'], ['Ravi K.', 'Asked about delivery to Aluva'], ['Meera S.', 'Booked a slot for tomorrow']].map(([n, t], i) => (
                <motion.div key={n} {...inV(0.6 + i * 0.2, 8)} className="flex items-center gap-3 rounded-xl px-1 py-1.5">
                  <span className="flex h-7 w-7 items-center justify-center rounded-full bg-alt text-[11px] font-semibold text-ink">{n[0]}</span>
                  <div className="leading-tight"><p className="text-[12.5px] font-medium text-ink">{n}</p><p className="text-[11.5px] text-muted">{t}</p></div>
                  <MessageCircle size={13} className="ml-auto text-faint" />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <Tag>Sample data</Tag>
    </div>
  )
}
