'use client'

import { useState, useRef, useEffect } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowRight, CheckCircle2, Loader2, RefreshCw } from 'lucide-react'
import Nav from '@/components/site/Nav'
import FaigenMark from '@/components/site/FaigenMark'
import { Squiggle, Sparkle } from '@/components/site/Illustrations'

const WhatsAppIcon = ({ size = 20, className = '' }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
  </svg>
)

const BACKEND = 'https://myagent.faigen.in'
const WA_NUMBER = '919633820462'
const WA_LINK = `https://wa.me/${WA_NUMBER}?text=Hi%20Faigen%20AI!`

const field = 'w-full rounded-2xl border border-black/10 bg-white px-4 py-3.5 text-[16px] text-ink outline-none transition focus:border-accent focus:ring-4 focus:ring-accent/10 placeholder:text-faint'
const label = 'mb-2 block text-[13px] font-medium text-muted'
const primary = 'flex w-full items-center justify-center gap-2 rounded-full bg-accent px-6 py-4 text-[16px] font-medium text-white shadow-[0_6px_20px_-6px_rgba(0,113,227,.55)] transition hover:bg-[#0077ed] active:scale-[0.99] disabled:cursor-not-allowed disabled:opacity-40'

function OtpInput({ value, onChange, disabled }) {
  const inputs = useRef([])

  const handleChange = (i, e) => {
    const v = e.target.value.replace(/\D/g, '').slice(-1)
    const arr = value.split('')
    arr[i] = v
    onChange(arr.join(''))
    if (v && i < 5) inputs.current[i + 1]?.focus()
  }

  const handleKeyDown = (i, e) => {
    if (e.key === 'Backspace' && !value[i] && i > 0) {
      inputs.current[i - 1]?.focus()
    }
  }

  const handlePaste = (e) => {
    const pasted = e.clipboardData.getData('text').replace(/\D/g, '').slice(0, 6)
    if (pasted) {
      onChange(pasted.padEnd(6, '').slice(0, 6))
      inputs.current[Math.min(pasted.length, 5)]?.focus()
    }
    e.preventDefault()
  }

  return (
    <div className="flex gap-2 sm:gap-3 justify-center">
      {[0,1,2,3,4,5].map(i => (
        <input
          key={i}
          ref={el => inputs.current[i] = el}
          type="text"
          inputMode="numeric"
          maxLength={1}
          value={value[i] || ''}
          onChange={e => handleChange(i, e)}
          onKeyDown={e => handleKeyDown(i, e)}
          onPaste={handlePaste}
          disabled={disabled}
          className={`h-14 w-11 rounded-2xl border-2 text-center text-[20px] font-semibold outline-none transition-all sm:h-16 sm:w-12
            ${value[i] ? 'border-accent bg-accent-soft text-accent' : 'border-black/10 bg-white text-ink'}
            focus:border-accent focus:bg-accent-soft
            disabled:cursor-not-allowed disabled:opacity-50`}
        />
      ))}
    </div>
  )
}

export default function TryPage() {
  const [step, setStep]           = useState(1)
  const [phone, setPhone]         = useState('')
  const [otp, setOtp]             = useState('')
  const [name, setName]           = useState('')
  const [loading, setLoading]     = useState(false)
  const [error, setError]         = useState('')
  const [info, setInfo]           = useState('')
  const [canResend, setCanResend] = useState(false)
  const [resendTimer, setResendTimer] = useState(600)

  useEffect(() => {
    if (step !== 2) return
    setCanResend(false)
    setResendTimer(600)
    const t = setInterval(() => {
      setResendTimer(prev => {
        if (prev <= 1) { clearInterval(t); setCanResend(true); return 0 }
        return prev - 1
      })
    }, 1000)
    return () => clearInterval(t)
  }, [step])

  const formatTimer = (s) => `${Math.floor(s / 60)}:${String(s % 60).padStart(2, '0')}`

  const maskPhone = (p) => {
    const d = p.replace(/\D/g, '')
    if (d.length < 4) return d
    return d.slice(0, -4).replace(/./g, '•') + d.slice(-4)
  }

  const handleRequestOtp = async (e) => {
    e?.preventDefault()
    setError('')
    setInfo('')

    const cleaned = phone.replace(/\D/g, '')
    if (cleaned.length < 10) {
      setError('Please enter a valid WhatsApp number')
      return
    }

    const fullPhone = cleaned.startsWith('91') ? cleaned : '91' + cleaned

    setLoading(true)
    try {
      const res  = await fetch(`${BACKEND}/public/demo/request-otp`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ phone: fullPhone, name, source: 'instagram_story' })
      })
      const data = await res.json()

      if (!res.ok) {
        setError(data.error || 'Something went wrong. Please try again.')
        return
      }

      if (data.returning) {
        setStep(3)
        return
      }

      if (data.otpAlreadySent) {
        setInfo("We already sent a code to this number — check your WhatsApp and enter it below.")
      }

      setStep(2)
    } catch {
      setError('Network error. Please check your connection and try again.')
    } finally {
      setLoading(false)
    }
  }

  const handleVerifyOtp = async (e) => {
    e?.preventDefault()
    setError('')
    if (otp.length < 6) { setError('Please enter the full 6-digit code'); return }

    const cleaned = phone.replace(/\D/g, '')
    const fp = cleaned.startsWith('91') ? cleaned : '91' + cleaned

    setLoading(true)
    try {
      const res  = await fetch(`${BACKEND}/public/demo/verify-otp`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ phone: fp, code: otp, name, source: 'instagram_story' })
      })
      const data = await res.json()

      if (!res.ok) {
        setError(data.error || 'Verification failed. Please try again.')
        return
      }

      setStep(3)
    } catch {
      setError('Network error. Please check your connection and try again.')
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    if (otp.length === 6 && step === 2 && !loading) handleVerifyOtp()
  }, [otp])

  const fadeUp = {
    hidden:  { opacity: 0, y: 24, filter: 'blur(6px)' },
    visible: { opacity: 1, y: 0,  filter: 'blur(0px)', transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] } },
    exit:    { opacity: 0, y: -16, filter: 'blur(6px)', transition: { duration: 0.3 } }
  }

  // Sample chat shown beside the form so people see what they will get
  const sampleChats = [
    { user: 'Do you have coir mats in stock?', bot: 'Yes, 45 in stock. ₹600 each. Want to order?' },
    { user: 'Ente order eppol delivery aakum?', bot: 'Naale vaikunneram delivery aakum!' },
    { user: 'Book appointment for tomorrow 10 AM', bot: 'Confirmed. Tomorrow 10:00 AM. Reply Cancel to cancel.' },
  ]

  return (
    <div className="relative min-h-screen overflow-hidden bg-white">
      <div aria-hidden className="pointer-events-none absolute inset-x-0 top-0 h-[620px] bg-[radial-gradient(900px_420px_at_50%_-8%,#e3efff_0%,transparent_70%)]" />
      <Nav />

      <main className="container-x relative grid min-h-screen items-center gap-12 pb-16 pt-28 lg:grid-cols-[1fr_460px] lg:gap-20 lg:pt-24">
        {/* left: promise + sample chat */}
        <div>
          <p className="eyebrow">Free live demo</p>
          <h1 className="display-lg mt-3 max-w-xl">
            Chat with Faigen on{' '}
            <span className="relative inline-block text-accent">
              WhatsApp.
              <Squiggle className="absolute -bottom-2 left-0 h-[0.2em] w-full" />
            </span>
          </h1>
          <p className="lead mt-6 max-w-lg">Enter your number and our agent sends you a code on WhatsApp. Then you can chat with it for real, in under a minute.</p>

          <div className="relative mt-10 max-w-md">
            <Sparkle className="pointer-events-none absolute -right-4 -top-5 h-6 w-6" />
            <div className="rounded-[28px] bg-gradient-to-br from-[#e6f1ff] via-[#f5f5f7] to-[#efe9ff] p-5">
              <div className="mb-4 flex items-center gap-2.5 border-b border-black/5 pb-3">
                <FaigenMark className="h-8 w-8" />
                <div className="leading-tight">
                  <p className="text-[14px] font-semibold text-ink">Faigen AI</p>
                  <p className="flex items-center gap-1.5 text-[12px] text-muted"><span className="h-1.5 w-1.5 rounded-full bg-[#34c759]" /> Online 24/7</p>
                </div>
                <span className="ml-auto rounded-full bg-white px-2.5 py-1 text-[11px] font-medium text-accent">Example chat</span>
              </div>
              <div className="flex flex-col gap-3">
                {sampleChats.map((c, i) => (
                  <div key={i} className="flex flex-col gap-1.5">
                    <p className="w-fit max-w-[85%] self-start rounded-2xl rounded-tl-md bg-white px-3.5 py-2 text-[14px] leading-snug text-ink">{c.user}</p>
                    <p className="w-fit max-w-[85%] self-end rounded-2xl rounded-tr-md bg-accent px-3.5 py-2 text-[14px] leading-snug text-white">{c.bot}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* right: the steps */}
        <div className="w-full rounded-[36px] bg-white p-7 shadow-[0_30px_80px_-30px_rgba(0,0,0,.22)] ring-1 ring-black/[0.06] sm:p-9">
          <div className="mb-8 flex items-center justify-center gap-2">
            {[1, 2, 3].map(s => (
              <div key={s} className={`rounded-full transition-all duration-500 ${s === step ? 'h-2 w-8 bg-accent' : s < step ? 'h-2 w-2 bg-accent' : 'h-2 w-2 bg-black/10'}`} />
            ))}
          </div>

          <AnimatePresence mode="wait">
            {/* STEP 1: phone */}
            {step === 1 && (
              <motion.div key="step1" variants={fadeUp} initial="hidden" animate="visible" exit="exit">
                <h2 className="text-[28px] font-semibold leading-tight tracking-[-0.03em]">Get your verification code</h2>
                <p className="mt-2 text-[15px] leading-relaxed text-muted">We send a 6-digit code to your WhatsApp. Then you can chat with the agent directly.</p>

                <form onSubmit={handleRequestOtp} className="mt-7 flex flex-col gap-5">
                  <div>
                    <label className={label}>Your name (optional)</label>
                    <input type="text" value={name} onChange={e => setName(e.target.value)} placeholder="e.g. Rahul" className={field} />
                  </div>
                  <div>
                    <label className={label}>WhatsApp number</label>
                    <div className="flex gap-2">
                      <div className="flex shrink-0 items-center rounded-2xl border border-black/10 bg-alt px-3.5 text-[15px] font-medium text-ink">+91</div>
                      <input
                        type="tel" value={phone} onChange={e => setPhone(e.target.value.replace(/\D/g, '').slice(0, 10))}
                        placeholder="98765 43210" inputMode="numeric" autoFocus className={field}
                      />
                    </div>
                  </div>

                  {error && <div className="rounded-2xl border border-[#ffd0d0] bg-[#fff2f2] px-4 py-3 text-[14px] text-[#d70015]">{error}</div>}

                  <button type="submit" disabled={loading || phone.replace(/\D/g, '').length < 10} className={primary}>
                    {loading ? <Loader2 size={18} className="animate-spin" /> : <>Get verification code <ArrowRight size={17} /></>}
                  </button>
                </form>

                <p className="mt-6 text-center text-[12.5px] leading-relaxed text-faint">
                  By continuing you agree to receive a WhatsApp message from Faigen AI. Your number is never shared or used for ads.
                </p>
                <div className="mt-5 flex flex-wrap justify-center gap-x-5 gap-y-2">
                  {['Free demo', 'No signup needed', 'Live in 60 seconds'].map(f => (
                    <div key={f} className="flex items-center gap-1.5 text-[13px] text-muted"><CheckCircle2 size={14} className="text-[#25d366]" /> {f}</div>
                  ))}
                </div>
              </motion.div>
            )}

            {/* STEP 2: code */}
            {step === 2 && (
              <motion.div key="step2" variants={fadeUp} initial="hidden" animate="visible" exit="exit">
                <h2 className="text-[28px] font-semibold leading-tight tracking-[-0.03em]">Check your WhatsApp</h2>
                <p className="mt-2 text-[15px] leading-relaxed text-muted">
                  {info ? info : (<>Our agent sent a 6-digit code to <span className="font-semibold text-ink">+91 {maskPhone(phone)}</span></>)}
                </p>

                <form onSubmit={handleVerifyOtp} className="mt-8 flex flex-col gap-6">
                  <OtpInput value={otp} onChange={setOtp} disabled={loading} />

                  {error && <div className="rounded-2xl border border-[#ffd0d0] bg-[#fff2f2] px-4 py-3 text-center text-[14px] text-[#d70015]">{error}</div>}

                  <button type="submit" disabled={loading || otp.length < 6} className={primary}>
                    {loading ? <Loader2 size={18} className="animate-spin" /> : <>Verify and start chatting <ArrowRight size={17} /></>}
                  </button>

                  <div className="text-center">
                    {canResend ? (
                      <button type="button" onClick={() => { setOtp(''); setError(''); setInfo(''); setStep(1) }} className="mx-auto flex items-center gap-1.5 text-[14px] font-medium text-accent hover:underline">
                        <RefreshCw size={14} /> Resend code
                      </button>
                    ) : (
                      <p className="text-[14px] text-muted">Resend in <span className="font-semibold text-ink">{formatTimer(resendTimer)}</span></p>
                    )}
                  </div>

                  <button type="button" onClick={() => { setStep(1); setOtp(''); setError(''); setInfo('') }} className="text-center text-[14px] text-muted transition-colors hover:text-ink">
                    ← Change number
                  </button>
                </form>
              </motion.div>
            )}

            {/* STEP 3: verified */}
            {step === 3 && (
              <motion.div key="step3" variants={fadeUp} initial="hidden" animate="visible" exit="exit">
                <div className="text-center">
                  <motion.div
                    initial={{ scale: 0 }} animate={{ scale: 1 }}
                    transition={{ type: 'spring', stiffness: 200, damping: 14, delay: 0.1 }}
                    className="mb-5 inline-flex h-16 w-16 items-center justify-center rounded-full bg-[#e9f9ee]"
                  >
                    <CheckCircle2 size={34} className="text-[#25d366]" strokeWidth={2} />
                  </motion.div>
                  <h2 className="text-[28px] font-semibold leading-tight tracking-[-0.03em]">Verified. Now start chatting.</h2>
                  <p className="mt-2 text-[15px] leading-relaxed text-muted">Open WhatsApp and send a message to our agent. It replies instantly. Try Manglish, ask about products, or place a test order.</p>
                </div>

                <div className="mt-6 rounded-2xl bg-alt p-5">
                  <p className="mb-3 text-[13px] font-medium text-muted">Try asking:</p>
                  <div className="flex flex-col gap-2.5">
                    {['What products do you have?', 'Ente order eppol delivery aakum?', 'Book an appointment for tomorrow', 'Send me your price list'].map((q, i) => (
                      <div key={i} className="flex items-center gap-2.5"><span className="h-1.5 w-1.5 shrink-0 rounded-full bg-accent" /><p className="text-[14.5px] text-ink">{q}</p></div>
                    ))}
                  </div>
                </div>

                <a href={WA_LINK} target="_blank" rel="noopener noreferrer"
                  className="mt-6 flex w-full items-center justify-center gap-2 rounded-full bg-[#25d366] px-6 py-4 text-[16px] font-medium text-white transition hover:bg-[#20ba5a]">
                  <WhatsAppIcon size={20} /> Open WhatsApp and chat
                </a>
                <p className="mt-3 text-center text-[13px] text-muted">Tap above, send any message, and the agent replies.</p>
                <Link href="/" className="mt-6 block text-center text-[14px] font-medium text-accent hover:underline">Learn more about Faigen</Link>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </main>
    </div>
  )
}
