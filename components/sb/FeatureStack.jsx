import { TryLink, Tag } from './ui'
import FeaturePanel from './FeatureArt'

// Sticky feature cards, same build as the home page ones: 1200 wide, #f0eeeb, radius 24, padding 40,
// text column on the left and the 540 x 500 picture on the right. Each card sticks 90px from the top.
export default function FeatureStack({ items }) {
  return (
    <div className="flex flex-col gap-10">
      {items.map(({ title, text, tags, kind, link, data }, i) => (
        <article key={title} className="sticky top-[90px] rounded-[24px] bg-[#f0eeeb] p-6 shadow-[0_-12px_32px_rgba(128,128,128,0.05)] sm:p-10">
          <div className={`grid gap-10 lg:min-h-[500px] lg:grid-cols-2 ${i % 2 ? 'lg:[&>*:first-child]:order-2' : ''}`}>
            <div className="flex flex-col justify-between gap-8">
              <div className="flex flex-col gap-5">
                <h3 className="font-heading text-[clamp(1.9rem,3vw,2.625rem)] font-medium leading-[1.2] text-[#1a1a1a]">{title}</h3>
                <p className="text-[16px] font-normal leading-[22.4px] text-[#52525b]">{text}</p>
                <div className="mt-1 flex flex-col gap-2">{tags.map(([Icon, label]) => <Tag key={label} icon={Icon}>{label}</Tag>)}</div>
              </div>
              <TryLink href={link[1]}>{link[0]}</TryLink>
            </div>
            <FeaturePanel kind={kind} data={data} />
          </div>
        </article>
      ))}
    </div>
  )
}
