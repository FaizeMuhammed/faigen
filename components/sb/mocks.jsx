import { Check, Image as ImageIcon, MessageCircle, ShoppingBag, Megaphone, Inbox, LayoutDashboard, Settings } from 'lucide-react'
import FaigenMark, { WhatsAppGlyph, InstagramGlyph } from '../site/FaigenMark'

// Product mock-ups drawn in code, with sample data. They are pictures of the dashboard, not live screens.

function AppWindow({ title, children, className = '' }) {
  return (
    <div className={`@container overflow-hidden rounded-[8px] bg-[#f4f3f0] text-left shadow-[0_30px_80px_-30px_rgba(40,20,90,.35)] ${className}`}>
      <div className="flex items-center gap-3 border-b border-black/[0.06] bg-white px-4 py-3">
        <FaigenMark className="h-6 w-6" />
        <p className="text-[14px] font-semibold">{title}</p>
        <div className="ml-auto flex gap-1.5">{[0, 1, 2].map(i => <span key={i} className="h-2.5 w-2.5 rounded-full bg-black/10" />)}</div>
      </div>
      <div className="flex">
        <div className="hidden w-12 shrink-0 flex-col items-center gap-4 border-r border-black/[0.05] bg-white py-4 text-black/30 sm:flex">
          <LayoutDashboard size={17} /><Inbox size={17} className="text-[#1a1a1a]" /><ShoppingBag size={17} /><Megaphone size={17} /><Settings size={17} />
        </div>
        <div className="min-w-0 flex-1 sm:min-h-[340px]">{children}</div>
      </div>
    </div>
  )
}

const Bubble = ({ me, children }) => (
  <div className={`flex ${me ? 'justify-end' : ''}`}>
    <div className={`max-w-[82%] rounded-2xl px-3.5 py-2 text-[13.5px] leading-snug ${me ? 'rounded-br-md bg-[#1a1a1a] text-white' : 'rounded-bl-md bg-white ring-1 ring-black/[0.06]'}`}>{children}</div>
  </div>
)
const Pill = ({ tone = 'grey', children }) => {
  const tones = { grey: 'bg-black/[0.06] text-black/60', green: 'bg-[#dff7e3] text-[#1d7a36]', amber: 'bg-[#fff1cf] text-[#9a6b00]', blue: 'bg-[#e0ecff] text-[#1a5fd0]', pink: 'bg-[#ffe1ef] text-[#c2255f]' }
  return <span className={`whitespace-nowrap rounded-full px-2.5 py-1 text-[11.5px] font-semibold ${tones[tone]}`}>{children}</span>
}

export function WhatsAppMock() {
  return (
    <AppWindow title="Live inbox">
      <div className="grid gap-4 p-4 sm:p-5 @md:grid-cols-[1.5fr_1fr]">
        <div className="rounded-2xl bg-[#f1f0ea] p-3.5">
          <div className="mb-3 flex items-center gap-2 text-[12.5px] text-black/55"><WhatsAppGlyph className="h-4 w-4 text-[#25d366]" /> Anjali · WhatsApp <Pill tone="green">AI is replying</Pill></div>
          <div className="space-y-2.5">
            <Bubble>Price ethra aanu Coir Mat?</Bubble>
            <Bubble me>₹600 aanu 😊 45 stock undu. Ethra venam?</Bubble>
            <Bubble>2 venam. Kakkanad delivery undo?</Bubble>
            <Bubble me>Undu, 2 days-il ethum. Name and address ayakkamo?</Bubble>
          </div>
        </div>
        <div className="space-y-3">
          <div className="rounded-2xl bg-white p-4 ring-1 ring-black/[0.06]">
            <div className="flex items-center justify-between"><p className="text-[13.5px] font-semibold">Order #1048</p><Pill tone="amber">Pending</Pill></div>
            <p className="mt-2 text-[13px] text-black/60">2 × Premium Coir Mat</p>
            <div className="mt-2 flex items-center justify-between border-t border-black/[0.06] pt-2 text-[13.5px]"><span className="text-black/60">Total</span><b>₹1,200</b></div>
            <p className="mt-2 flex items-center gap-1.5 text-[12px] text-[#1d7a36]"><Check size={13} strokeWidth={3} /> Collected by the AI</p>
          </div>
          <div className="rounded-2xl bg-white p-4 ring-1 ring-black/[0.06]">
            <p className="text-[13.5px] font-semibold">Anjali</p>
            <p className="text-[12.5px] text-black/50">+91 98•••• ••21 · Kakkanad</p>
            <div className="mt-3 flex items-center justify-between"><Pill tone="blue">Repeat customer</Pill><span className="whitespace-nowrap rounded-full bg-[#1a1a1a] px-3 py-1.5 text-[12px] font-medium text-white">Take over</span></div>
          </div>
        </div>
      </div>
    </AppWindow>
  )
}

export function InstagramMock() {
  return (
    <AppWindow title="Instagram">
      <div className="grid gap-4 p-4 sm:p-5 @md:grid-cols-2">
        <div className="rounded-2xl bg-white p-4 ring-1 ring-black/[0.06]">
          <p className="flex items-center gap-2 text-[12.5px] text-black/55"><InstagramGlyph className="h-4 w-4 text-[#d62976]" /> Comments on your Reel</p>
          <div className="mt-3 space-y-3 text-[13.5px]">
            <p><b>ravi.k</b> price?</p>
            <p className="ml-5 rounded-xl bg-[#f1f0ea] px-3 py-2"><b>yourshop</b> Thanks Ravi! Check your DMs 📩</p>
            <p><b>meera_s</b> Do you ship to Dubai?</p>
            <p className="ml-5 flex items-center gap-2 rounded-xl bg-[#fff1cf] px-3 py-2 text-[12.5px] text-[#9a6b00]">AI drafted a reply · waiting for you <Pill tone="amber">Approve</Pill></p>
            <p className="flex items-center gap-2 text-black/40"><span className="rounded-full bg-black/[0.06] px-2 py-0.5 text-[11.5px]">1 spam comment hidden</span></p>
          </div>
        </div>
        <div className="space-y-3">
          <div className="rounded-2xl bg-white p-4 ring-1 ring-black/[0.06]">
            <p className="text-[12.5px] text-black/55">Direct message · ravi.k</p>
            <div className="mt-3 space-y-2.5">
              <Bubble me>Hi Ravi! Here are the details 😊 What would you like to know?</Bubble>
              <div className="flex flex-wrap gap-1.5">{['Prices', 'Delivery', 'Talk to team'].map(c => <span key={c} className="rounded-full border border-[#3797f0] px-3 py-1 text-[12px] font-medium text-[#3797f0]">{c}</span>)}</div>
            </div>
          </div>
          <div className="grid grid-cols-3 gap-2.5">
            {[['Reach', '12.4K'], ['Comments', '86'], ['DMs sent', '41']].map(([k, v]) => (
              <div key={k} className="rounded-2xl bg-white p-3 ring-1 ring-black/[0.06]"><p className="text-[11.5px] text-black/50">{k}</p><p className="text-[20px] font-semibold tracking-tight">{v}</p></div>
            ))}
          </div>
        </div>
      </div>
    </AppWindow>
  )
}

export function OrdersMock() {
  const rows = [['#1048', 'Anjali', '2 × Coir Mat', '₹1,200', 'Pending', 'amber'], ['#1047', 'Rahul', '1 × Biryani combo', '₹680', 'Confirmed', 'blue'], ['#1046', 'Fathima', '3 × Cotton saree', '₹3,450', 'Shipped', 'green'], ['#1045', 'Joseph', '1 × Gift hamper', '₹1,899', 'Delivered', 'green']]
  return (
    <AppWindow title="Orders">
      <div className="p-4 sm:p-5">
        <div className="mb-4 grid grid-cols-3 gap-2.5">
          {[['Today', '14 orders'], ['Pending', '5'], ['Revenue', '₹18,420']].map(([k, v]) => <div key={k} className="rounded-2xl bg-white p-3.5 ring-1 ring-black/[0.06]"><p className="text-[11.5px] text-black/50">{k}</p><p className="text-[19px] font-semibold tracking-tight">{v}</p></div>)}
        </div>
        <div className="divide-y divide-black/[0.05] rounded-2xl bg-white ring-1 ring-black/[0.06]">
          {rows.map(([id, who, what, amt, st, tone]) => (
            <div key={id} className="flex items-center gap-3 px-4 py-3 text-[13.5px]">
              <span className="w-12 font-mono text-[12px] text-black/40">{id}</span><span className="w-20 font-medium">{who}</span>
              <span className="hidden flex-1 text-black/55 sm:block">{what}</span><span className="ml-auto w-16 text-right font-semibold">{amt}</span><Pill tone={tone}>{st}</Pill>
            </div>
          ))}
        </div>
      </div>
    </AppWindow>
  )
}

export function BroadcastMock() {
  const people = [['+91 98•••• ••21', 'Interested', 'green'], ['+91 90•••• ••07', 'Interested', 'green'], ['+91 94•••• ••63', 'Not interested', 'pink'], ['+91 99•••• ••18', 'Read', 'grey']]
  return (
    <AppWindow title="Campaign history">
      <div className="grid gap-4 p-4 sm:p-5 @md:grid-cols-[1fr_1.1fr]">
        <div className="rounded-2xl bg-white p-4 ring-1 ring-black/[0.06]">
          <div className="flex h-28 items-center justify-center rounded-xl bg-gradient-to-br from-[#ffd9a8] via-[#ffb3c7] to-[#c9b3ff]"><ImageIcon size={28} className="text-white" /></div>
          <p className="mt-3 text-[14px] font-semibold">Onam Collection Launch</p>
          <p className="text-[12.5px] text-black/50">Image + 2 buttons · 240 customers</p>
          <div className="mt-3 flex gap-1.5"><Pill tone="green">Completed</Pill><Pill tone="blue">Marketing</Pill></div>
        </div>
        <div className="space-y-3">
          <div className="grid grid-cols-4 gap-2">
            {[['Delivered', '96%'], ['Read', '58%'], ['Interested', '41'], ['Not interested', '14']].map(([k, v]) => <div key={k} className="rounded-xl bg-white p-2.5 ring-1 ring-black/[0.06]"><p className="text-[10.5px] leading-tight text-black/50">{k}</p><p className="text-[17px] font-semibold tracking-tight">{v}</p></div>)}
          </div>
          <div className="divide-y divide-black/[0.05] rounded-2xl bg-white ring-1 ring-black/[0.06]">
            {people.map(([p, a, t]) => <div key={p} className="flex items-center justify-between px-4 py-2.5 text-[13px]"><span className="font-mono text-black/60">{p}</span><Pill tone={t}>{a}</Pill></div>)}
          </div>
        </div>
      </div>
    </AppWindow>
  )
}

export function InboxMock() {
  const chats = [['Sarah', 'Asked for a refund', 'Needs you', 'amber'], ['Daniel', 'Wants to talk to a person', 'Needs you', 'amber'], ['Maya', '30ml please. Deliver to Dubai?', 'AI replied', 'green'], ['Omar', 'Is delivery free?', 'AI replied', 'green']]
  return (
    <AppWindow title="Live inbox">
      <div className="grid gap-4 p-4 sm:p-5 @md:grid-cols-[1fr_1.2fr]">
        <div className="divide-y divide-black/[0.05] rounded-2xl bg-white ring-1 ring-black/[0.06]">
          {chats.map(([n, m, s, t]) => (
            <div key={n} className="flex items-center gap-3 px-3.5 py-3">
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#e0ecff] text-[13px] font-semibold text-[#1a5fd0]">{n[0]}</span>
              <div className="min-w-0 flex-1"><p className="text-[13.5px] font-semibold">{n}</p><p className="truncate text-[12.5px] text-black/50">{m}</p></div><Pill tone={t}>{s}</Pill>
            </div>
          ))}
        </div>
        <div className="rounded-2xl bg-[#f1f0ea] p-3.5">
          <div className="mb-3 flex items-center justify-between"><p className="flex items-center gap-2 text-[13px] font-semibold"><MessageCircle size={15} /> Daniel · WhatsApp</p><span className="whitespace-nowrap rounded-full bg-[#1a1a1a] px-3 py-1.5 text-[12px] font-medium text-white">Take over</span></div>
          <div className="space-y-2.5"><Bubble>Can I talk to someone about my order?</Bubble><Bubble me>Of course. I’ve alerted our team, someone will join this chat shortly.</Bubble></div>
        </div>
      </div>
    </AppWindow>
  )
}
