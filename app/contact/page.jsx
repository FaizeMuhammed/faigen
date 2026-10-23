'use client'
import { useState } from 'react'
import { Mail, MapPin, Copy, Check, Send } from 'lucide-react'
import Nav from '@/components/site/Nav'
import Footer from '@/components/site/Footer'
import PageHero from '@/components/site/PageHero'
import Reveal from '@/components/site/Reveal'
import { PillButton } from '@/components/site/Buttons'

const EMAIL = 'info@faigen.in'
const input = 'w-full rounded-2xl border border-line bg-white px-5 py-3.5 text-[16px] text-ink placeholder:text-faint outline-none transition focus:border-accent focus:ring-4 focus:ring-accent/10'

export default function ContactPage() {
  const [form, setForm] = useState({ name: '', email: '', business: '', message: '' })
  const [copied, setCopied] = useState(false)
  const [opened, setOpened] = useState(false)
  const set = (k) => (e) => setForm(f => ({ ...f, [k]: e.target.value }))

  const copy = async () => {
    try { await navigator.clipboard.writeText(EMAIL); setCopied(true); setTimeout(() => setCopied(false), 2000) } catch {}
  }

  // No server endpoint yet: open the visitor's email app with everything filled in.
  const submit = (e) => {
    e.preventDefault()
    const subject = `Faigen enquiry${form.business ? ` — ${form.business}` : ''}`
    const body = `Name: ${form.name}\nEmail: ${form.email}\nBusiness: ${form.business}\n\n${form.message}`
    window.location.href = `mailto:${EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
    setOpened(true)
  }

  return (
    <>
      <Nav />
      <main>
        <PageHero
          eyebrow="Contact"
          title="Let’s talk about your business."
          lead="Tell us what you sell and where your customers message you. We’ll show you how Faigen would handle it."
        />

        <section className="bg-white pb-24 sm:pb-32">
          <div className="container-x grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
            <Reveal>
              <form onSubmit={submit} className="card space-y-4 p-6 sm:p-9">
                <div className="grid gap-4 sm:grid-cols-2">
                  <label className="block"><span className="mb-1.5 block text-[13px] font-medium text-muted">Your name</span><input required className={input} value={form.name} onChange={set('name')} placeholder="Anjali Menon" autoComplete="name" /></label>
                  <label className="block"><span className="mb-1.5 block text-[13px] font-medium text-muted">Email</span><input required type="email" className={input} value={form.email} onChange={set('email')} placeholder="you@business.com" autoComplete="email" /></label>
                </div>
                <label className="block"><span className="mb-1.5 block text-[13px] font-medium text-muted">Business name</span><input className={input} value={form.business} onChange={set('business')} placeholder="Your shop, clinic or company" autoComplete="organization" /></label>
                <label className="block"><span className="mb-1.5 block text-[13px] font-medium text-muted">How can we help?</span><textarea required rows={5} className={`${input} resize-none`} value={form.message} onChange={set('message')} placeholder="WhatsApp, Instagram, or both? What do your customers usually ask?" /></label>
                <button type="submit" className="inline-flex h-12 w-full items-center justify-center gap-2 rounded-full bg-accent px-6 text-[16px] font-medium text-white shadow-[0_6px_20px_-6px_rgba(0,113,227,.55)] transition hover:bg-[#0077ed] active:scale-[0.98]">
                  <Send size={16} /> Send by email
                </button>
                {opened && <p className="text-center text-[14px] text-muted">Your email app should have opened with the message ready. If not, write to <a className="text-accent" href={`mailto:${EMAIL}`}>{EMAIL}</a>.</p>}
              </form>
            </Reveal>

            <Reveal delay={0.12} className="space-y-4">
              <div className="card-white p-7">
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-accent-soft text-accent"><Mail size={20} /></span>
                <p className="mt-4 text-[13px] font-medium text-muted">Email</p>
                <div className="mt-1 flex items-center justify-between gap-3">
                  <a href={`mailto:${EMAIL}`} className="text-[19px] font-semibold tracking-[-0.015em] text-ink hover:text-accent">{EMAIL}</a>
                  <button onClick={copy} aria-label="Copy email" className="flex h-9 w-9 items-center justify-center rounded-full bg-alt text-muted transition hover:text-ink">{copied ? <Check size={16} /> : <Copy size={16} />}</button>
                </div>
              </div>
              <div className="card-white p-7">
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-accent-soft text-accent"><MapPin size={20} /></span>
                <p className="mt-4 text-[13px] font-medium text-muted">Office</p>
                <a href="https://maps.google.com/?q=BCG+Residency+Towers+Kakkanad+Ernakulam" target="_blank" rel="noreferrer" className="mt-1 block text-[17px] font-semibold leading-snug tracking-[-0.01em] text-ink hover:text-accent">BCG Residency Towers 4a1, Kakkanad, Ernakulam — 682037</a>
              </div>
              <div className="rounded-[24px] bg-black p-7 text-white">
                <p className="text-[19px] font-semibold tracking-[-0.02em]">Prefer to see it first?</p>
                <p className="mt-1.5 text-[15px] text-white/60">Chat with a live Faigen agent on WhatsApp in under a minute.</p>
                <div className="mt-5"><PillButton href="/try" tone="light" arrow>Try the demo</PillButton></div>
              </div>
            </Reveal>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
