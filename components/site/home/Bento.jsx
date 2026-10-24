import Reveal from '../Reveal'
import { FeatureUnlimited, FeatureStepIn, FeatureRules, FeatureRates, FeatureSecure } from '../Scenes'

const SMALL = [
  { Art: FeatureRules, t: 'Your rules, your tone', d: 'Trained on your FAQs and voice, with guardrails on what it must never say.' },
  { Art: FeatureRates, t: 'Pay per broadcast', d: 'Campaigns and OTP codes are billed only per message sent: ₹0.20 for utility and OTP, ₹1.10 for marketing.' },
  { Art: FeatureSecure, t: 'Open and secure', d: 'API keys and docs for your own systems. An official Meta Tech Provider, and your data is never sold.' },
]

export default function Bento() {
  return (
    <section className="bg-white section">
      <div className="container-x">
        <Reveal className="mx-auto max-w-3xl text-center">
          <p className="eyebrow">Everything included</p>
          <h2 className="display-lg mt-3">Built to sell, support and scale.</h2>
        </Reveal>

        {/* 1 — wide, soft gradient */}
        <Reveal className="mt-16">
          <div className="grid items-center gap-6 overflow-hidden rounded-[36px] bg-gradient-to-br from-[#e6f1ff] via-white to-[#efe9ff] p-8 ring-1 ring-black/[0.04] sm:p-14 lg:grid-cols-[1.1fr_0.9fr]">
            <div>
              <p className="eyebrow">Unlimited conversations</p>
              <h3 className="display-md mt-3 max-w-md">As many chats as your customers start.</h3>
              <p className="lead mt-5 max-w-md">No cap on messages. One flat monthly fee, whether it’s ten chats a day or ten thousand.</p>
            </div>
            <FeatureUnlimited className="mx-auto h-56 w-auto sm:h-64" />
          </div>
        </Reveal>

        {/* 2 — dark gradient with big type, next to a light panel */}
        <div className="mt-5 grid gap-5 lg:grid-cols-5">
          <Reveal className="lg:col-span-3">
            <div className="relative h-full overflow-hidden rounded-[36px] bg-black p-8 text-white sm:p-12">
              <div aria-hidden className="pointer-events-none absolute -right-24 -top-24 h-[360px] w-[360px] rounded-full bg-[radial-gradient(circle,rgba(0,113,227,.55),transparent_70%)] blur-2xl" />
              <div aria-hidden className="pointer-events-none absolute -bottom-32 -left-16 h-[300px] w-[300px] rounded-full bg-[radial-gradient(circle,rgba(214,41,118,.4),rgba(250,126,30,.2)_50%,transparent_70%)] blur-2xl" />
              <div className="relative">
                <p className="eyebrow text-[#2997ff]">Speaks their language</p>
                <p className="mt-6 text-[clamp(2.4rem,5.4vw,4rem)] font-semibold leading-[1.02] tracking-[-0.04em]">
                  <span className="block">English</span>
                  <span className="block bg-gradient-to-r from-[#2997ff] to-[#7dd3fc] bg-clip-text text-transparent">Malayalam</span>
                  <span className="block bg-gradient-to-r from-[#ff9ec7] to-[#ffb86b] bg-clip-text text-transparent">Manglish</span>
                </p>
                <p className="mt-7 max-w-sm text-[16px] leading-relaxed text-white/60">Detected automatically on every message, and answered the same way.</p>
              </div>
            </div>
          </Reveal>
          <Reveal delay={0.1} className="lg:col-span-2">
            <div className="flex h-full flex-col rounded-[36px] bg-gradient-to-b from-[#f5f5f7] to-[#e9f2ff] p-8 sm:p-10">
              <FeatureStepIn className="mx-auto h-40 w-auto" />
              <h3 className="mt-6 text-center text-[24px] font-semibold tracking-[-0.025em]">You can step in</h3>
              <p className="mx-auto mt-3 max-w-xs text-center text-[16px] leading-relaxed text-muted">Pause the AI on any chat and take over whenever you like. It steps back when you do.</p>
            </div>
          </Reveal>
        </div>

        {/* 3 — quiet row, no boxes */}
        <div className="mt-16 grid gap-10 md:grid-cols-3 md:gap-12">
          {SMALL.map(({ Art, t, d }, i) => (
            <Reveal key={t} delay={i * 0.08}>
              <div className="border-t border-line pt-8">
                <Art className="h-24 w-auto" />
                <h3 className="mt-5 text-[20px] font-semibold tracking-[-0.02em]">{t}</h3>
                <p className="mt-2 text-[15.5px] leading-relaxed text-muted">{d}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
