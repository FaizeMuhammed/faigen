'use client'

import { useState } from 'react'
import { ArrowRight } from 'lucide-react'

// Form card as on the reference: white, radius 24, padding 40, gap 20; grey (#f8f6f4) inputs, radius 12, 40 high.
// There is no server endpoint yet, so sending opens the visitor's email app with everything filled in.
const EMAIL = 'info@faigen.in'
const label = { display: 'flex', flexDirection: 'column', gap: 10, fontSize: 16, lineHeight: '22.4px', color: '#535353' }
const input = { width: '100%', border: 0, outline: 0, background: '#f8f6f4', borderRadius: 12, padding: '8px 12px', minHeight: 40, fontSize: 16, lineHeight: '24px', color: '#1a1a1a', fontFamily: 'inherit' }

export default function ContactForm() {
  const [form, setForm] = useState({ name: '', email: '', business: '', message: '' })
  const [opened, setOpened] = useState(false)
  const set = k => e => setForm(f => ({ ...f, [k]: e.target.value }))
  const submit = e => {
    e.preventDefault()
    const subject = `Faigen enquiry${form.business ? ` — ${form.business}` : ''}`
    const body = `Name: ${form.name}\nEmail: ${form.email}\nBusiness: ${form.business}\n\n${form.message}`
    window.location.href = `mailto:${EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
    setOpened(true)
  }
  return (
    <form onSubmit={submit} style={{ background: '#fff', borderRadius: 24, padding: 40, display: 'flex', flexDirection: 'column', gap: 20 }} className="max-sm:!p-6">
      <label style={label}>Your name<input required style={input} value={form.name} onChange={set('name')} placeholder="Anjali Menon" autoComplete="name" /></label>
      <label style={label}>Email address<input required type="email" style={input} value={form.email} onChange={set('email')} placeholder="you@business.com" autoComplete="email" /></label>
      <label style={label}>Business name<input style={input} value={form.business} onChange={set('business')} placeholder="Your shop, clinic or company" autoComplete="organization" /></label>
      <label style={label}>How can we help?<textarea required rows={4} style={{ ...input, resize: 'none', minHeight: 112 }} value={form.message} onChange={set('message')} placeholder="WhatsApp, Instagram, or both? What do your customers usually ask?" /></label>
      <div>
        <button type="submit" className="group" style={{ display: 'inline-flex', height: 40, alignItems: 'center', gap: 4, borderRadius: 24, padding: '6px 12px 6px 4px', background: 'transparent', border: 0, cursor: 'pointer', fontSize: 16, fontWeight: 500, color: '#1a1a1a', fontFamily: 'inherit' }}>
          <span style={{ width: 32, height: 32, borderRadius: 16, background: '#1a1a1a', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><ArrowRight size={16} strokeWidth={2.2} /></span>
          <span style={{ padding: '0 4px' }}>Send a message</span>
        </button>
      </div>
      {opened && <p style={{ margin: 0, fontSize: 14, lineHeight: '19.6px', color: '#71717a' }}>Your email app should have opened with the message ready. If not, write to <a href={`mailto:${EMAIL}`} style={{ color: '#1a1a1a', textDecoration: 'underline' }}>{EMAIL}</a>.</p>}
    </form>
  )
}
