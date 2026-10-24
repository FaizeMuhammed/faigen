import Reveal from '../Reveal'
import { FeatureUnlimited, FeatureLanguage, FeatureRules, FeatureStepIn, FeatureRates, FeatureSecure } from '../Scenes'

const FEATURES = [
  { Art: FeatureUnlimited, t: 'Unlimited conversations', d: 'No cap on how many customers message you. One flat monthly fee, whether it’s ten chats a day or ten thousand.' },
  { Art: FeatureLanguage, t: 'Speaks their language', d: 'Detected automatically on every message, and answered the same way.' },
  { Art: FeatureRules, t: 'Your rules, your tone', d: 'Trained on your FAQs and voice, with guardrails on what it must never say.' },
  { Art: FeatureStepIn, t: 'You can step in', d: 'Pause the AI on any chat and take over whenever you like. It steps back when you do.' },
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

        <div className="mt-16 grid gap-x-8 gap-y-16 sm:grid-cols-2 lg:grid-cols-3">
          {FEATURES.map(({ Art, t, d }, i) => (
            <Reveal key={t} delay={(i % 3) * 0.08}>
              <div className="text-center">
                <Art className="mx-auto h-40 w-auto" />
                <h3 className="mt-5 text-[22px] font-semibold tracking-[-0.02em]">{t}</h3>
                <p className="mx-auto mt-3 max-w-[300px] text-[16px] leading-relaxed text-muted">{d}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
