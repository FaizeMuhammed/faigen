import { Check, Minus } from 'lucide-react'
import { COMPARE, LAUNCH_OFFER } from '@/lib/site'

const COLS = ['Essential', 'Standard', 'Custom']

// Feature-by-plan table. Scrolls sideways on small screens, first column stays in view.
export default function PlanCompare() {
  return (
    <div className="overflow-x-auto rounded-[28px] bg-white ring-1 ring-black/[0.06]">
      <table className="w-full min-w-[372px] border-collapse text-left sm:min-w-[640px]">
        <thead>
          <tr className="border-b border-black/[0.07]">
            <th className="sticky left-0 z-10 w-[41%] bg-white px-4 py-4 text-[12px] font-medium text-muted sm:w-auto sm:px-6 sm:py-5 sm:text-[13px]">What is included</th>
            {COLS.map((c, i) => (
              <th key={c} className={`px-1.5 py-4 text-center text-[12.5px] font-semibold sm:px-4 sm:py-5 sm:text-[14px] ${i === 1 ? 'text-accent' : ''}`}>{c}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {COMPARE.map(g => (
            <FragmentGroup key={g.group} group={g} />
          ))}
        </tbody>
      </table>
    </div>
  )
}

function FragmentGroup({ group }) {
  return (
    <>
      <tr className="bg-[#f5f5f7]">
        <td colSpan={4} className="sticky left-0 px-4 py-3 text-[11px] font-semibold uppercase tracking-wider text-muted sm:px-6 sm:text-[12px]">{group.group}</td>
      </tr>
      {group.rows.map(([label, ...vals]) => (
        <tr key={label} className="border-b border-black/[0.05] last:border-b-0">
          <td className="sticky left-0 z-10 bg-white px-4 py-3 text-[13.5px] leading-snug sm:px-6 sm:py-4 sm:text-[15px]">{label}</td>
          {vals.map((v, i) => (
            <td key={i} className="px-1.5 py-3 text-center sm:px-4 sm:py-4">
              {v === 'launch' && LAUNCH_OFFER.active
                ? <span className="flex flex-col items-center gap-0.5"><Check size={19} strokeWidth={2.6} className="text-accent" aria-label="Included" /><span className="text-[10.5px] font-semibold text-[#c2255f] sm:text-[11.5px]">{LAUNCH_OFFER.badge}</span></span>
                : v === true
                ? <Check size={19} strokeWidth={2.6} className="mx-auto text-accent" aria-label="Included" />
                : v === 'addon' || v === 'launch'
                  ? <span className="inline-block rounded-full bg-gradient-to-r from-[#d62976]/10 to-[#fa7e1e]/10 px-2 py-0.5 text-[11px] font-semibold text-[#c2255f] sm:text-[12px]">Add-on</span>
                  : typeof v === 'string'
                    ? <span className="text-[13px] font-medium sm:text-[14px]">{v}</span>
                    : <Minus size={18} strokeWidth={2} className="mx-auto text-black/20" aria-label="Not included" />}
            </td>
          ))}
        </tr>
      ))}
    </>
  )
}
