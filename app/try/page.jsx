'use client'

import { useState, useRef, useEffect } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowRight, CheckCircle2, Loader2, RefreshCw, MessageCircle, Sparkles } from 'lucide-react'

const WhatsAppIcon = ({ size = 20, className = '' }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
  </svg>
)

const BACKEND = 'https://myagent.faigen.in'
const WA_NUMBER = '919633820462'
const WA_LINK = `https://wa.me/${WA_NUMBER}?text=Hi%20Faigen%20AI!`

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
          className={`w-11 h-14 sm:w-12 sm:h-16 text-center text-[20px] font-bold rounded-2xl border-2 outline-none transition-all
            ${value[i] ? 'border-[#0066CC] bg-[#E8F4FF] text-[#0066CC]' : 'border-[#E5E5EA] bg-white text-[#1D1D1F]'}
            focus:border-[#0066CC] focus:bg-[#F0F8FF]
            disabled:opacity-50 disabled:cursor-not-allowed`}
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

  // Sample chat messages shown on step 1 to show what AI can do
  const sampleChats = [
    { user: "Do you have coir mats in stock?",        bot: "Yes! 45 in stock. ₹600 each. Want to order? 😊" },
    { user: "എന്റെ ഓർഡർ എന്ന് ഡെലിവർ ആകും?",       bot: "നാളെ വൈകുന്നേരം ഡെലിവർ ആകും! 🎉" },
    { user: "Book appointment for tomorrow 10 AM?",   bot: "Confirmed ✅ Tomorrow 10:00 AM. Reply 'Cancel' to cancel." },
  ]

  return (
    <div className="min-h-screen bg-[#FBFBFD] font-sans flex flex-col selection:bg-[#0066CC] selection:text-white">

      {/* Header */}
      <header className="sticky top-0 z-50 bg-[#FBFBFD]/90 backdrop-blur-2xl border-b border-[#E5E5EA]">
        <div className="max-w-[1500px] mx-auto flex justify-between items-center px-5 py-4">
          <Link href="/"><img src="/logonew.png" alt="Faigen" className="h-8 w-auto object-contain" /></Link>
          <Link href="/" className="text-[13px] font-medium text-[#86868B] hover:text-[#1D1D1F] transition-colors">
            Back to site
          </Link>
        </div>
      </header>

      <main className="flex-1 flex flex-col items-center justify-center px-5 py-12">

        {/* Progress dots */}
        <div className="flex items-center gap-2 mb-10">
          {[1,2,3].map(s => (
            <div key={s} className={`rounded-full transition-all duration-500 ${
              s === step ? 'w-8 h-2 bg-[#0066CC]' :
              s < step   ? 'w-2 h-2 bg-[#0066CC]' :
                           'w-2 h-2 bg-[#E5E5EA]'
            }`} />
          ))}
        </div>

        <div className="w-full max-w-[420px]">
          <AnimatePresence mode="wait">

            {/* ── STEP 1: Phone ── */}
            {step === 1 && (
              <motion.div key="step1" variants={fadeUp} initial="hidden" animate="visible" exit="exit">
                <div className="text-center mb-8">
                  <div className="inline-flex items-center justify-center w-14 h-14 bg-[#E8F5E9] rounded-2xl mb-5">
                    <WhatsAppIcon size={28} className="text-[#25D366]" />
                  </div>
                  <h1 className="text-[2rem] sm:text-[2.4rem] font-semibold tracking-tighter text-[#1D1D1F] mb-3 leading-[1.05]">
                    Chat with Faigen AI<br />live on WhatsApp.
                  </h1>
                  <p className="text-[#86868B] text-[15px] font-medium leading-relaxed">
                    Enter your WhatsApp number. Our AI agent will send you a verification code — then you can chat with it directly.
                  </p>
                </div>

                {/* Sample chat preview */}
                <div className="bg-white border border-[#E5E5EA] rounded-[24px] p-4 mb-6 shadow-[0_4px_20px_rgb(0,0,0,0.04)]">
                  <div className="flex items-center gap-2 mb-4 pb-3 border-b border-[#F5F5F7]">
                    <div className="w-7 h-7 rounded-full bg-[#1D1D1F] flex items-center justify-center shrink-0">
                      <WhatsAppIcon size={14} className="text-[#25D366]" />
                    </div>
                    <div>
                      <p className="text-[12px] font-bold text-[#1D1D1F]">Faigen AI</p>
                      <div className="flex items-center gap-1">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#25D366] animate-pulse" />
                        <p className="text-[10px] text-[#86868B]">Online 24/7</p>
                      </div>
                    </div>
                    <span className="ml-auto text-[10px] font-semibold text-[#0066CC] bg-[#E8F4FF] px-2 py-1 rounded-full">Live demo</span>
                  </div>
                  <div className="flex flex-col gap-2.5">
                    {sampleChats.map((c, i) => (
                      <div key={i} className="flex flex-col gap-1.5">
                        <div className="bg-[#F5F5F7] text-[#1D1D1F] text-[12px] font-medium px-3 py-2 rounded-2xl rounded-tl-sm self-start max-w-[85%]">
                          {c.user}
                        </div>
                        <div className="bg-[#E8F4FF] text-[#0066CC] text-[12px] font-medium px-3 py-2 rounded-2xl rounded-tr-sm self-end max-w-[85%]">
                          {c.bot}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <form onSubmit={handleRequestOtp} className="flex flex-col gap-4">
                  <div>
                    <label className="text-[12px] font-semibold text-[#86868B] uppercase tracking-widest mb-2 block">
                      Your name (optional)
                    </label>
                    <input
                      type="text"
                      value={name}
                      onChange={e => setName(e.target.value)}
                      placeholder="e.g. Rahul"
                      className="w-full px-4 py-3.5 rounded-2xl border border-[#E5E5EA] bg-white text-[#1D1D1F] text-[15px] font-medium outline-none focus:border-[#0066CC] focus:ring-2 focus:ring-[#0066CC]/10 transition-all placeholder:text-[#C7C7CC]"
                    />
                  </div>

                  <div>
                    <label className="text-[12px] font-semibold text-[#86868B] uppercase tracking-widest mb-2 block">
                      WhatsApp number
                    </label>
                    <div className="flex gap-2">
                      <div className="flex items-center px-3.5 py-3.5 rounded-2xl border border-[#E5E5EA] bg-[#F5F5F7] text-[#1D1D1F] text-[15px] font-semibold shrink-0">
                        🇮🇳 +91
                      </div>
                      <input
                        type="tel"
                        value={phone}
                        onChange={e => setPhone(e.target.value.replace(/\D/g, '').slice(0, 10))}
                        placeholder="98765 43210"
                        inputMode="numeric"
                        autoFocus
                        className="flex-1 px-4 py-3.5 rounded-2xl border border-[#E5E5EA] bg-white text-[#1D1D1F] text-[15px] font-medium outline-none focus:border-[#0066CC] focus:ring-2 focus:ring-[#0066CC]/10 transition-all placeholder:text-[#C7C7CC]"
                      />
                    </div>
                    <p className="text-[12px] text-[#86868B] font-medium mt-2 ml-1">
                      Our AI agent will send you a verification code on WhatsApp.
                    </p>
                  </div>

                  {error && (
                    <div className="bg-[#FFF2F2] border border-[#FFD0D0] text-[#D70015] text-[13px] font-medium px-4 py-3 rounded-2xl">
                      {error}
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={loading || phone.replace(/\D/g,'').length < 10}
                    className="w-full bg-[#1D1D1F] text-white py-4 rounded-full font-semibold text-[15px] flex items-center justify-center gap-2 hover:bg-black transition-all disabled:opacity-40 disabled:cursor-not-allowed mt-2"
                  >
                    {loading
                      ? <Loader2 size={18} className="animate-spin" />
                      : <>Get Verification Code <ArrowRight size={16} /></>
                    }
                  </button>
                </form>

                <p className="text-center text-[12px] text-[#86868B] font-medium mt-6 leading-relaxed">
                  By continuing you agree to receive a WhatsApp message from Faigen AI.
                  <br />Your number is never shared or used for ads.
                </p>

                {/* Trust badges */}
                <div className="flex items-center gap-4 mt-6 flex-wrap justify-center">
                  {['Free demo', 'No signup needed', 'Live in 60 seconds'].map(f => (
                    <div key={f} className="flex items-center gap-1.5 text-[12px] font-medium text-[#86868B]">
                      <CheckCircle2 size={13} className="text-[#25D366]" /> {f}
                    </div>
                  ))}
                </div>
              </motion.div>
            )}

            {/* ── STEP 2: OTP ── */}
            {step === 2 && (
              <motion.div key="step2" variants={fadeUp} initial="hidden" animate="visible" exit="exit">
                <div className="text-center mb-8">
                  <div className="inline-flex items-center justify-center w-14 h-14 bg-[#E8F4FF] rounded-2xl mb-5">
                    <MessageCircle size={28} className="text-[#0066CC]" />
                  </div>
                  <h2 className="text-[2rem] sm:text-[2.4rem] font-semibold tracking-tighter text-[#1D1D1F] mb-3 leading-[1.05]">
                    Check your<br />WhatsApp.
                  </h2>
                  <p className="text-[#86868B] text-[15px] font-medium leading-relaxed">
                    {info ? info : (
                      <>
                        Our AI agent sent a 6-digit code to<br />
                        <span className="font-semibold text-[#1D1D1F]">+91 {maskPhone(phone)}</span>
                      </>
                    )}
                  </p>
                </div>

                <form onSubmit={handleVerifyOtp} className="flex flex-col gap-6">
                  <OtpInput value={otp} onChange={setOtp} disabled={loading} />

                  {error && (
                    <div className="bg-[#FFF2F2] border border-[#FFD0D0] text-[#D70015] text-[13px] font-medium px-4 py-3 rounded-2xl text-center">
                      {error}
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={loading || otp.length < 6}
                    className="w-full bg-[#1D1D1F] text-white py-4 rounded-full font-semibold text-[15px] flex items-center justify-center gap-2 hover:bg-black transition-all disabled:opacity-40 disabled:cursor-not-allowed"
                  >
                    {loading
                      ? <Loader2 size={18} className="animate-spin" />
                      : <>Verify & Start Chatting <ArrowRight size={16} /></>
                    }
                  </button>

                  <div className="text-center">
                    {canResend ? (
                      <button
                        type="button"
                        onClick={() => { setOtp(''); setError(''); setInfo(''); setStep(1) }}
                        className="flex items-center gap-1.5 text-[13px] font-semibold text-[#0066CC] hover:text-[#0055BB] transition-colors mx-auto"
                      >
                        <RefreshCw size={13} /> Resend OTP
                      </button>
                    ) : (
                      <p className="text-[13px] text-[#86868B] font-medium">
                        Resend in <span className="font-semibold text-[#1D1D1F]">{formatTimer(resendTimer)}</span>
                      </p>
                    )}
                  </div>

                  <button
                    type="button"
                    onClick={() => { setStep(1); setOtp(''); setError(''); setInfo('') }}
                    className="text-center text-[13px] text-[#86868B] font-medium hover:text-[#1D1D1F] transition-colors"
                  >
                    ← Change number
                  </button>
                </form>
              </motion.div>
            )}

            {/* ── STEP 3: Success — now directs to chat ── */}
            {step === 3 && (
              <motion.div key="step3" variants={fadeUp} initial="hidden" animate="visible" exit="exit">
                <div className="text-center">
                  <motion.div
                    initial={{ scale: 0 }} animate={{ scale: 1 }}
                    transition={{ type: 'spring', stiffness: 200, damping: 14, delay: 0.1 }}
                    className="inline-flex items-center justify-center w-20 h-20 bg-[#E8F5E9] rounded-full mb-6"
                  >
                    <CheckCircle2 size={40} className="text-[#25D366]" strokeWidth={2} />
                  </motion.div>

                  <h2 className="text-[2rem] sm:text-[2.4rem] font-semibold tracking-tighter text-[#1D1D1F] mb-3 leading-[1.05]">
                    Verified! Now start<br />chatting. 🎉
                  </h2>
                  <p className="text-[#86868B] text-[15px] font-medium leading-relaxed mb-6">
                    Open WhatsApp and send a message to our AI agent. It will reply instantly — try Malayalam, ask about products, or place a test order.
                  </p>

                  {/* What to try */}
                  <div className="bg-white border border-[#E5E5EA] rounded-[24px] p-5 mb-6 text-left shadow-[0_4px_20px_rgb(0,0,0,0.04)]">
                    <p className="text-[11px] font-bold text-[#86868B] uppercase tracking-widest mb-4">Try asking the AI:</p>
                    <div className="flex flex-col gap-2.5">
                      {[
                        "What products do you have?",
                        "എന്റെ ഓർഡർ എന്ന് ഡെലിവർ ആകും?",
                        "Book an appointment for tomorrow",
                        "Send me your price list",
                      ].map((q, i) => (
                        <div key={i} className="flex items-center gap-2.5">
                          <div className="w-1.5 h-1.5 rounded-full bg-[#0066CC] shrink-0" />
                          <p className="text-[13px] font-medium text-[#1D1D1F]">{q}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Main CTA */}
                  <a
                    href={WA_LINK}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full bg-[#25D366] text-white py-4 rounded-full font-semibold text-[15px] flex items-center justify-center gap-2 hover:bg-[#20BA5A] transition-colors mb-3"
                  >
                    <WhatsAppIcon size={20} /> Open WhatsApp & Chat
                  </a>

                  <p className="text-[12px] text-[#86868B] font-medium mb-6">
                    Tap above → WhatsApp opens → Send any message → AI replies instantly
                  </p>

                  <Link href="/" className="block text-center text-[13px] font-medium text-[#86868B] hover:text-[#1D1D1F] transition-colors">
                    Learn more about Faigen →
                  </Link>

                  {/* Feature pills */}
                  <div className="mt-8 flex flex-wrap gap-2 justify-center">
                    {['Malayalam support', '24/7 AI replies', 'Order taking', 'Broadcast campaigns'].map(f => (
                      <span key={f} className="px-3 py-1.5 bg-white border border-[#E5E5EA] rounded-full text-[12px] font-semibold text-[#86868B]">
                        {f}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            )}

          </AnimatePresence>
        </div>
      </main>
    </div>
  )
}