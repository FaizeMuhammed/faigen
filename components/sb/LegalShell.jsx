import Nav from './Nav'
import CtaFooter from './CtaFooter'
import { Scallop } from './art'
import { urbanist, jost } from './fonts'

// Shared frame for the legal pages (privacy, terms, data deletion), in the same look as the rest of the site:
// new nav, a short hero with mascots, a contents card, the document in a white card inside a grey tray,
// then the closing call to action and footer.
export default function LegalShell({ badge, title, sub, contents, prefix = 'section-', summary, narrow = false, children }) {
  return (
    <div className={`${urbanist.variable} ${jost.className} min-h-screen overflow-x-clip bg-[#fafafa] text-[#1a1a1a]`}>
      <Nav />
      <main>
        <section className="relative px-5 pb-10 pt-[120px] text-center">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/sb/blue-wedge.png" alt="" aria-hidden className="pointer-events-none absolute right-[-60px] top-[96px] w-[100px] max-w-none select-none lg:right-[calc(50%-600px)] lg:top-[80px] lg:w-[150px]" />
          <Scallop className="absolute left-[-30px] top-[84px] h-[84px] w-[84px] lg:left-[calc(50%-560px)] lg:top-[96px] lg:h-[104px] lg:w-[104px]" />
          <div className="relative mx-auto flex max-w-[780px] flex-col items-center gap-5">
            <p className="flex items-center gap-2 text-[16px] leading-[22.4px] text-[#535353]"><span className="h-2 w-2 rounded-full bg-[#34c759]" />{badge}</p>
            <h1 className="font-heading text-balance text-[40px] font-medium leading-[1.2] sm:text-[clamp(2.6rem,5vw,4rem)]">{title}</h1>
            <p className="max-w-[560px] text-[clamp(1.05rem,1.5vw,1.3125rem)] leading-[1.4] text-[#535353]">{sub}</p>
          </div>
        </section>

        <section className="mx-auto w-full max-w-[1240px] px-5 pb-20">
          <div className={`flex flex-col gap-4 lg:flex-row lg:items-start ${narrow ? 'mx-auto max-w-[860px]' : ''}`}>
            {contents && (
              <aside className="shrink-0 lg:sticky lg:top-[100px] lg:w-[300px]">
                {summary && <div className="mb-4 rounded-[24px] bg-white p-6">{summary}</div>}
                <div className="rounded-[24px] bg-[#f0eeeb] p-2">
                  <div className="rounded-[18px] bg-white p-5">
                    <p className="mb-3 text-[12px] font-semibold uppercase tracking-[.08em] text-[#9a9aa2]">Contents</p>
                    <ul className="m-0 max-h-[170px] list-none lg:max-h-[60vh] space-y-0.5 overflow-y-auto p-0">
                      {contents.map((item, i) => (
                        <li key={item}><a href={`#${prefix}${i + 1}`} className="block rounded-[10px] px-2.5 py-1.5 text-[14px] leading-[19px] text-[#52525b] transition-colors hover:bg-[#f0eeeb] hover:text-[#1a1a1a]">{i + 1}. {item}</a></li>
                      ))}
                    </ul>
                  </div>
                </div>
              </aside>
            )}
            <div className="min-w-0 flex-1 rounded-[32px] bg-[#f0eeeb] p-2">
              <article className="sb-legal rounded-[24px] bg-white p-6 sm:p-10">{children}</article>
            </div>
          </div>
        </section>
      </main>
      <CtaFooter />
    </div>
  )
}
