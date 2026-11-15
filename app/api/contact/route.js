// Contact form -> email to info@faigen.in, sent through Resend.
// Needs RESEND_API_KEY on the host. Optional: CONTACT_TO_EMAIL (default info@faigen.in), CONTACT_FROM_EMAIL.
// Without the key the endpoint answers 503 and the form falls back to opening the visitor's mail app.
export const runtime = 'nodejs'

const TO = process.env.CONTACT_TO_EMAIL || 'info@faigen.in'
const FROM = process.env.CONTACT_FROM_EMAIL || 'Faigen website <alerts@resend.faigen.in>'
const hits = new Map() // ip -> [timestamps], small in-memory limit against spam
const esc = s => String(s).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]))

export async function POST(req) {
  let body
  try { body = await req.json() } catch { return Response.json({ ok: false, error: 'bad_request' }, { status: 400 }) }
  const name = String(body.name || '').trim().slice(0, 120)
  const email = String(body.email || '').trim().slice(0, 200)
  const business = String(body.business || '').trim().slice(0, 160)
  const message = String(body.message || '').trim().slice(0, 4000)

  if (body.website) return Response.json({ ok: true }) // honeypot: pretend it worked
  if (!name || !message || !/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email)) {
    return Response.json({ ok: false, error: 'invalid' }, { status: 400 })
  }

  const ip = (req.headers.get('x-forwarded-for') || 'unknown').split(',')[0].trim()
  const now = Date.now()
  const recent = (hits.get(ip) || []).filter(t => now - t < 10 * 60 * 1000)
  if (recent.length >= 5) return Response.json({ ok: false, error: 'rate_limited' }, { status: 429 })
  hits.set(ip, [...recent, now])

  const key = process.env.RESEND_API_KEY
  if (!key) return Response.json({ ok: false, error: 'not_configured' }, { status: 503 })

  try {
    const res = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: { Authorization: `Bearer ${key}`, 'Content-Type': 'application/json' },
      body: JSON.stringify({
        from: FROM,
        to: [TO],
        reply_to: email,
        subject: `Faigen enquiry${business ? ` from ${business}` : ''}: ${name}`,
        text: `Name: ${name}\nEmail: ${email}\nBusiness: ${business || '-'}\n\n${message}`,
        html: `<p><b>Name:</b> ${esc(name)}<br><b>Email:</b> ${esc(email)}<br><b>Business:</b> ${esc(business) || '-'}</p><p style="white-space:pre-wrap">${esc(message)}</p>`,
      }),
    })
    if (!res.ok) return Response.json({ ok: false, error: 'send_failed' }, { status: 502 })
    return Response.json({ ok: true })
  } catch {
    return Response.json({ ok: false, error: 'send_failed' }, { status: 502 })
  }
}
