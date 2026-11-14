'use client'

import { useState, useRef, useEffect } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowRight, Loader2, RefreshCw } from 'lucide-react'
import Nav from '@/components/sb/Nav'
import { urbanist, jost } from '@/components/sb/fonts'
import { WhatsAppGlyph } from '@/components/site/FaigenMark'
import CtaFooter from '@/components/sb/CtaFooter'
import { Scallop, FaceDisc } from '@/components/sb/art'

const BACKEND = 'https://myagent.faigen.in'
const WA_NUMBER = '919633820462'
const WA_LINK = `https://wa.me/${WA_NUMBER}?text=Hi%20Faigen%20AI!`

// Styles follow the reference: grey (#f8f6f4) inputs with radius 12, white radius-24 form card, dark pill buttons, lime for "done".
const fieldStyle = { width: '100%', border: 0, outline: 0, background: '#f8f6f4', borderRadius: 12, padding: '12px', minHeight: 48, fontSize: 16, lineHeight: '24px', color: '#1a1a1a', fontFamily: 'inherit' }
const labelStyle = { display: 'block', marginBottom: 10, fontSize: 16, lineHeight: '22.4px', color: '#535353' }
const buttonStyle = (disabled) => ({ display: 'flex', width: '100%', height: 50, alignItems: 'center', justifyContent: 'center', gap: 8, borderRadius: 24, border: 0, background: '#1a1a1a', color: '#fff', fontSize: 16, fontWeight: 500, cursor: disabled ? 'not-allowed' : 'pointer', opacity: disabled ? 0.4 : 1, textDecoration: 'none', fontFamily: 'inherit' })
const errorStyle = { borderRadius: 12, background: '#fff2f2', padding: '12px 16px', fontSize: 14, lineHeight: '19.6px', color: '#d70015' }
const h2Style = { margin: 0, fontFamily: 'var(--font-heading), sans-serif', fontSize: 32, lineHeight: '38px', fontWeight: 500, color: '#1a1a1a' }
const pStyle = { margin: '10px 0 0', fontSize: 16, lineHeight: '22.4px', color: '#535353' }

function Tick({ size = 24 }) {
  return <svg viewBox="0 0 24 24" width={size} height={size} aria-hidden style={{ flexShrink: 0 }}><g transform="translate(7 7)"><circle cx="5" cy="5" r="5" fill="#dbfc74" stroke="#dbfc74" strokeWidth="1.29" /><path d="M3.857 5.336s.667.381 1 .938c0 0 1-2.188 2.333-2.917" fill="none" stroke="#1a1a1a" strokeWidth="1.07" strokeLinecap="round" strokeLinejoin="round" /></g></svg>
}

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
    <div style={{ display: 'flex', gap: 8, justifyContent: 'center' }}>
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
          style={{ width: 48, height: 56, borderRadius: 12, border: 0, outline: 0, textAlign: 'center', fontSize: 20, fontWeight: 500, fontFamily: 'inherit', color: '#1a1a1a', background: value[i] ? '#dbfc74' : '#f8f6f4', opacity: disabled ? 0.5 : 1, transition: 'background .2s' }}
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
  const grain = { position: 'absolute', inset: 0, backgroundImage: 'url(/sb/grain.png)', backgroundSize: '256px 256px', mixBlendMode: 'overlay', opacity: 0.34, pointerEvents: 'none' }

  return (
    <div className={`${urbanist.variable} ${jost.className} min-h-screen overflow-x-clip bg-[#fafaf9] text-[#1a1a1a]`}>
      <Nav />
      <main className="mx-auto grid w-full max-w-[1240px] gap-10 px-5 pb-20 pt-[120px] lg:grid-cols-[540px_1fr] lg:items-start">
        {/* left: promise + sample chat on a grained panel */}
        <div className="flex flex-col gap-10">
          <div className="flex flex-col gap-5">
            <p className="flex items-center gap-2 text-[16px] leading-[22.4px] text-[#535353]"><span className="h-2 w-2 rounded-full bg-[#34c759]" />Free live demo</p>
            <h1 className="font-heading text-balance text-[clamp(2.6rem,5vw,4rem)] font-medium leading-[1.2]">Chat with Faigen on WhatsApp.</h1>
            <p className="max-w-[480px] text-[18px] leading-[1.4] text-[#535353]">Enter your number and our agent sends you a code on WhatsApp. Then you can chat with it for real, in under a minute.</p>
          </div>

          <div style={{ position: 'relative', overflow: 'hidden', borderRadius: 24, background: '#e4b5fd', padding: 24 }}>
            <div aria-hidden style={{ position: 'absolute', left: -60, top: -30, width: 300, height: 150, background: 'rgba(215,150,250,.36)', WebkitMaskImage: 'url(/sb/cloud.png)', maskImage: 'url(/sb/cloud.png)', WebkitMaskSize: '100% 100%', maskSize: '100% 100%' }} />
            <div style={grain} />
            <div style={{ position: 'relative', background: '#efeae2', borderRadius: 20, overflow: 'hidden', boxShadow: '0 16px 36px -12px rgba(30,50,110,.28)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 10, background: '#fff', padding: '12px 16px' }}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/sb/faigen-logo.svg" alt="" width={32} height={32} style={{ width: 32, height: 32 }} />
                <div style={{ lineHeight: 1.2 }}>
                  <p style={{ margin: 0, fontSize: 14, fontWeight: 500 }}>Faigen AI</p>
                  <p style={{ margin: 0, fontSize: 12, color: '#1d7a36' }}>Online 24/7</p>
                </div>
                <span style={{ marginLeft: 'auto', background: '#f0eeeb', borderRadius: 10, padding: '4px 10px', fontSize: 11 }}>Example chat</span>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 8, padding: 14 }}>
                {sampleChats.map((c, i) => (
                  <div key={i} style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
                    <p style={{ margin: 0, alignSelf: 'flex-start', maxWidth: '82%', background: '#fff', borderRadius: '10px 10px 10px 3px', padding: '7px 11px', fontSize: 14, lineHeight: 1.35, boxShadow: '0 1px 1px rgba(11,20,26,.1)' }}>{c.user}</p>
                    <p style={{ margin: 0, alignSelf: 'flex-end', maxWidth: '82%', background: '#d9fdd3', borderRadius: '10px 10px 3px 10px', padding: '7px 11px', fontSize: 14, lineHeight: 1.35, boxShadow: '0 1px 1px rgba(11,20,26,.1)' }}>{c.bot}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* right: the steps in a white card (radius 24, padding 40) */}
        <div style={{ position: 'relative', background: '#fff', borderRadius: 24, padding: 40 }} className="max-sm:!p-6">
          <Scallop className="absolute right-[-10px] top-[-38px] h-[72px] w-[72px] lg:right-[-34px] lg:top-[-44px] lg:h-[96px] lg:w-[96px]" />
          <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginBottom: 28 }}>
            {[1, 2, 3].map(n => (
              <div key={n} style={{ height: 8, width: n === step ? 32 : 8, borderRadius: 4, background: n === step ? '#1a1a1a' : n < step ? '#dbfc74' : '#e9e6e1', transition: 'all .4s' }} />
            ))}
          </div>

          <AnimatePresence mode="wait">
            {/* STEP 1: phone */}
            {step === 1 && (
              <motion.div key="step1" variants={fadeUp} initial="hidden" animate="visible" exit="exit">
                <h2 style={h2Style}>Get your verification code</h2>
                <p style={pStyle}>We send a 6-digit code to your WhatsApp. Then you can chat with the agent directly.</p>

                <form onSubmit={handleRequestOtp} style={{ marginTop: 28, display: 'flex', flexDirection: 'column', gap: 20 }}>
                  <div>
                    <label style={labelStyle}>Your name (optional)</label>
                    <input type="text" value={name} onChange={e => setName(e.target.value)} placeholder="e.g. Rahul" style={fieldStyle} />
                  </div>
                  <div>
                    <label style={labelStyle}>WhatsApp number</label>
                    <div style={{ display: 'flex', gap: 8 }}>
                      <div style={{ ...fieldStyle, width: 'auto', display: 'flex', alignItems: 'center', fontWeight: 500, flexShrink: 0 }}>+91</div>
                      <input type="tel" value={phone} onChange={e => setPhone(e.target.value.replace(/\D/g, '').slice(0, 10))}
                        placeholder="98765 43210" inputMode="numeric" autoFocus style={fieldStyle} />
                    </div>
                  </div>

                  {error && <div style={errorStyle}>{error}</div>}

                  <button type="submit" disabled={loading || phone.replace(/\D/g, '').length < 10} style={buttonStyle(loading || phone.replace(/\D/g, '').length < 10)}>
                    {loading ? <Loader2 size={18} className="animate-spin" /> : <>Get verification code <ArrowRight size={17} /></>}
                  </button>
                </form>

                <p style={{ margin: '24px 0 0', textAlign: 'center', fontSize: 13, lineHeight: '19px', color: '#71717a' }}>
                  By continuing you agree to receive a WhatsApp message from Faigen AI. Your number is never shared or used for ads.
                </p>
                <div style={{ marginTop: 18, display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '8px 20px' }}>
                  {['Free demo', 'No signup needed', 'Live in 60 seconds'].map(f => (
                    <div key={f} style={{ display: 'flex', alignItems: 'center', gap: 2, fontSize: 14, color: '#535353' }}><Tick size={22} />{f}</div>
                  ))}
                </div>
              </motion.div>
            )}

            {/* STEP 2: code */}
            {step === 2 && (
              <motion.div key="step2" variants={fadeUp} initial="hidden" animate="visible" exit="exit">
                <h2 style={h2Style}>Check your WhatsApp</h2>
                <p style={pStyle}>
                  {info ? info : (<>Our agent sent a 6-digit code to <b style={{ fontWeight: 500, color: '#1a1a1a' }}>+91 {maskPhone(phone)}</b></>)}
                </p>

                <form onSubmit={handleVerifyOtp} style={{ marginTop: 28, display: 'flex', flexDirection: 'column', gap: 24 }}>
                  <OtpInput value={otp} onChange={setOtp} disabled={loading} />

                  {error && <div style={{ ...errorStyle, textAlign: 'center' }}>{error}</div>}

                  <button type="submit" disabled={loading || otp.length < 6} style={buttonStyle(loading || otp.length < 6)}>
                    {loading ? <Loader2 size={18} className="animate-spin" /> : <>Verify and start chatting <ArrowRight size={17} /></>}
                  </button>

                  <div style={{ textAlign: 'center', fontSize: 14, color: '#71717a' }}>
                    {canResend ? (
                      <button type="button" onClick={() => { setOtp(''); setError(''); setInfo(''); setStep(1) }} style={{ display: 'inline-flex', alignItems: 'center', gap: 6, background: 'none', border: 0, cursor: 'pointer', fontSize: 14, fontWeight: 500, color: '#1a1a1a', textDecoration: 'underline', fontFamily: 'inherit' }}>
                        <RefreshCw size={14} /> Resend code
                      </button>
                    ) : (
                      <p style={{ margin: 0 }}>Resend in <b style={{ fontWeight: 500, color: '#1a1a1a' }}>{formatTimer(resendTimer)}</b></p>
                    )}
                  </div>

                  <button type="button" onClick={() => { setStep(1); setOtp(''); setError(''); setInfo('') }} style={{ background: 'none', border: 0, cursor: 'pointer', textAlign: 'center', fontSize: 14, color: '#71717a', fontFamily: 'inherit' }}>
                    ← Change number
                  </button>
                </form>
              </motion.div>
            )}

            {/* STEP 3: verified */}
            {step === 3 && (
              <motion.div key="step3" variants={fadeUp} initial="hidden" animate="visible" exit="exit">
                <div style={{ textAlign: 'center' }}>
                  <motion.div
                    initial={{ scale: 0 }} animate={{ scale: 1 }}
                    transition={{ type: 'spring', stiffness: 200, damping: 14, delay: 0.1 }}
                    style={{ display: 'inline-flex', width: 64, height: 64, alignItems: 'center', justifyContent: 'center', borderRadius: 32, background: '#dbfc74', marginBottom: 20 }}
                  >
                    <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="#1a1a1a" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden><path d="M5 12.5l4.5 4.5L19 7.5" /></svg>
                  </motion.div>
                  <h2 style={h2Style}>Verified. Now start chatting.</h2>
                  <p style={pStyle}>Open WhatsApp and send a message to our agent. It replies instantly. Try Manglish, ask about products, or place a test order.</p>
                </div>

                <div style={{ marginTop: 24, borderRadius: 12, background: '#f8f6f4', padding: 20 }}>
                  <p style={{ margin: '0 0 12px', fontSize: 14, color: '#71717a' }}>Try asking:</p>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                    {['What products do you have?', 'Ente order eppol delivery aakum?', 'Book an appointment for tomorrow', 'Send me your price list'].map((q, i) => (
                      <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 2 }}><Tick size={22} /><p style={{ margin: 0, fontSize: 15, color: '#1a1a1a' }}>{q}</p></div>
                    ))}
                  </div>
                </div>

                <a href={WA_LINK} target="_blank" rel="noopener noreferrer" style={{ ...buttonStyle(false), marginTop: 24 }}>
                  <span style={{ width: 20, height: 20, display: 'inline-block' }}><WhatsAppGlyph className="h-full w-full" /></span> Open WhatsApp and chat
                </a>
                <p style={{ margin: '12px 0 0', textAlign: 'center', fontSize: 13, color: '#71717a' }}>Tap above, send any message, and the agent replies.</p>
                <Link href="/" style={{ display: 'block', marginTop: 20, textAlign: 'center', fontSize: 14, fontWeight: 500, color: '#1a1a1a', textDecoration: 'underline' }}>Learn more about Faigen</Link>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </main>

      <section style={{ background: '#fafaf9', padding: '40px 0 80px' }}>
        <div className="mx-auto w-full max-w-[1240px] px-5">
          <h2 className="font-heading mx-auto max-w-[780px] text-balance text-center text-[clamp(2.1rem,4.4vw,3.375rem)] font-medium leading-[1.2]">Three steps, under a minute</h2>
          <div style={{ marginTop: 40, background: '#f0eeeb', borderRadius: 20, padding: 8 }}>
            <div className="grid gap-2 lg:grid-cols-3">
              {[
                ['blue', 'Enter your number', 'Type your WhatsApp number. Your name is optional and nothing is shared or used for ads.'],
                ['violet', 'Get a code on WhatsApp', 'Our agent sends you a 6-digit code. Enter it to unlock the chat.'],
                ['lime', 'Chat with the agent', 'Ask about products, try Manglish, or place a test order. It replies instantly.'],
              ].map(([tone, t, d], i) => (
                <div key={t} style={{ background: '#fafaf9', borderRadius: 12, padding: 24, display: 'flex', flexDirection: 'column', gap: 16, minHeight: 238 }}>
                  <div style={{ padding: '0 8px 8px 0', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                    <FaceDisc tone={tone} className="h-16 w-16" />
                    <span style={{ fontSize: 14, color: '#71717a', background: '#fff', borderRadius: 14, padding: '5px 12px' }}>Step {i + 1}</span>
                  </div>
                  <div style={{ marginTop: 'auto' }}>
                    <h3 className="font-heading" style={{ margin: 0, fontSize: 21, lineHeight: '29.4px', fontWeight: 500 }}>{t}</h3>
                    <p style={{ margin: '4px 0 0', fontSize: 16, lineHeight: '22.4px', color: '#52525b' }}>{d}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <CtaFooter />
    </div>
  )
}
