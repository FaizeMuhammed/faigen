import { TryLink, GreyPill } from './ui'
import { Scallop, HalfRing, HalfDisc, Diamond, Dot } from './art'

export default function Cta() {
  return (
    <section className="relative overflow-hidden py-24 text-center sm:py-32">
      <Scallop className="absolute left-[16%] top-[14%] hidden h-[84px] w-[84px] lg:block" style={{ '--r': '6deg' }} />
      <Dot className="absolute left-[24%] top-[9%] hidden h-4 w-4 lg:block" color="#c8f56e" />
      <Diamond className="absolute left-[9%] top-[42%] hidden h-10 w-10 lg:block" color="#ffb3dc" />
      <HalfDisc className="absolute right-[10%] top-[24%] hidden h-[110px] w-[110px] lg:block" style={{ '--r': '-6deg' }} />
      <HalfRing className="absolute bottom-[14%] right-[22%] hidden h-[70px] w-[104px] lg:block" />
      <div className="relative mx-auto w-[min(1200px,100%-2.5rem)]">
        <h2 className="mx-auto max-w-4xl text-balance text-[clamp(2.4rem,5.4vw,4rem)] font-medium leading-[1.04] tracking-[-0.035em]">Ready when your customers are.</h2>
        <p className="mx-auto mt-5 max-w-lg text-[18px] leading-snug text-[#1a1a1a]/60">Try Faigen on WhatsApp in under a minute, or tell us about your business and we’ll set it up for you.</p>
        <div className="mt-9 flex flex-wrap items-center justify-center gap-3"><TryLink href="/try">Try it on WhatsApp</TryLink><GreyPill href="/contact">Talk to us</GreyPill></div>
      </div>
    </section>
  )
}
