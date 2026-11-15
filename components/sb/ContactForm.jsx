'use client'

import { useState } from 'react'
import { ArrowRight, Check, Loader2 } from 'lucide-react'

// Form card as on the reference: white, radius 24, padding 40, gap 20; grey (#f8f6f4) inputs, radius 12, 40 high.
// There is no server endpoint yet, so sending opens the visitor's email app with everything filled in.
const EMAIL = 'info@faigen.in'
const label = { display: 'flex', flexDirection: 'column', gap: 10, fontSize: 16, lineHeight: '22.4px', color: '#535353' }
const input = { width: '100%', border: 0, outline: 0, background: '#f8f6f4', borderRadius: 12, padding: '8px 12px', minHeight: 40, fontSize: 16, lineHeight: '24px', color: '#1a1a1a', fontFamily: 'inherit' }

export default function ContactForm() {
  const [form, setForm] = useState({ name: '', email: '', business: '', message: '', website: '' })
  const [state, setState] = useState('idle') // idle | sending | sent | fallback | error
  const set = k => e => setForm(f => ({ ...f, [k]: e.target.value }))

  // Opens the visitor's mail app with everything filled in (used only if the server cannot send)
  const openMailApp = () => {
    const subject = `Faigen enquiry${form.business ? ` — ${form.business}` : ''}`
    const body = `Name: ${form.name}\nEmail: ${form.email}\nBusiness: ${form.business}\n\n${form.message}`
    window.location.href = `mailto:${EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
  }

  const submit = async e => {
    e.preventDefault()
    if (state === 'sending') return
    setState('sending')
    try {
      const res = await fetch('/api/contact', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(form) })
      const data = await res.json().catch(() => ({}))
      if (res.ok && data.ok) { setState('sent'); setForm({ name: '', email: '', business: '', message: '', website: '' }); return }
      if (data.error === 'not_configured' || data.error === 'send_failed') { setState('fallback'); openMailApp(); return }
      setState('error')
    } catch {
      setState('fallback'); openMailApp()
    }
  }

  if (state === 'sent') {
    return (
      <div style={{ background: '#fff', borderRadius: 24, padding: 40, display: 'flex', flexDirection: 'column', gap: 14, justifyContent: 'center', minHeight: 360 }} className="max-sm:!p-6">
        <span style={{ width: 48, height: 48, borderRadius: 24, background: '#dbfc74', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><Check size={22} strokeWidth={2.6} /></span>
        <h2 className="font-heading" style={{ margin: 0, fontSize: 30, lineHeight: '36px', fontWeight: 500 }}>Thanks, we’ve got your message.</h2>
        <p style={{ margin: 0, fontSize: 16, lineHeight: '22.4px', color: '#52525b' }}>We’ll reply to you by email, usually the same day.</p>
        <button type="button" onClick={() => setState('idle')} style={{ alignSelf: 'flex-start', background: '#f0eeeb', border: 0, borderRadius: 24, height: 40, padding: '0 20px', fontSize: 15, fontWeight: 500, cursor: 'pointer', fontFamily: 'inherit' }}>Send another message</button>
      </div>
    )
  }

  return (
    <form onSubmit={submit} style={{ background: '#fff', borderRadius: 24, padding: 40, display: 'flex', flexDirection: 'column', gap: 20 }} className="max-sm:!p-6">
      <label style={label}>Your name<input required style={input} value={form.name} onChange={set('name')} placeholder="Anjali Menon" autoComplete="name" maxLength={120} /></label>
      <label style={label}>Email address<input required type="email" style={input} value={form.email} onChange={set('email')} placeholder="you@business.com" autoComplete="email" maxLength={200} /></label>
      <label style={label}>Business name<input style={input} value={form.business} onChange={set('business')} placeholder="Your shop, clinic or company" autoComplete="organization" maxLength={160} /></label>
      <label style={label}>How can we help?<textarea required rows={4} style={{ ...input, resize: 'none', minHeight: 112 }} value={form.message} onChange={set('message')} placeholder="WhatsApp, Instagram, or both? What do your customers usually ask?" maxLength={4000} /></label>
      {/* spam trap: real visitors never see or fill this */}
      <input tabIndex={-1} autoComplete="off" aria-hidden="true" value={form.website} onChange={set('website')} style={{ position: 'absolute', left: -9999, width: 1, height: 1, opacity: 0 }} />
      <div>
        <button type="submit" disabled={state === 'sending'} className="group" style={{ display: 'inline-flex', height: 40, alignItems: 'center', gap: 4, borderRadius: 24, padding: '6px 12px 6px 4px', background: 'transparent', border: 0, cursor: state === 'sending' ? 'wait' : 'pointer', fontSize: 16, fontWeight: 500, color: '#1a1a1a', fontFamily: 'inherit', opacity: state === 'sending' ? 0.6 : 1 }}>
          <span style={{ width: 32, height: 32, borderRadius: 16, background: '#1a1a1a', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>{state === 'sending' ? <Loader2 size={16} className="animate-spin" /> : <ArrowRight size={16} strokeWidth={2.2} />}</span>
          <span style={{ padding: '0 4px' }}>{state === 'sending' ? 'Sending…' : 'Send message'}</span>
        </button>
      </div>
      {state === 'error' && <p style={{ margin: 0, fontSize: 14, lineHeight: '19.6px', color: '#d70015' }}>Please check your details and try again, or write to <a href={`mailto:${EMAIL}`} style={{ textDecoration: 'underline' }}>{EMAIL}</a>.</p>}
      {state === 'fallback' && <p style={{ margin: 0, fontSize: 14, lineHeight: '19.6px', color: '#71717a' }}>We couldn’t send it from here, so your email app should have opened with the message ready. If not, write to <a href={`mailto:${EMAIL}`} style={{ color: '#1a1a1a', textDecoration: 'underline' }}>{EMAIL}</a>.</p>}
    </form>
  )
}
