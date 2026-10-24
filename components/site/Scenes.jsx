'use client'
import { Draw, Pop, Label, SparkleG, INK, BLUE, TINT } from './Illustrations'

const MUTED = '#6e6e73'
const BLOB = 'M60 150 C48 70 130 22 230 26 C340 30 424 84 410 164 C396 244 300 276 200 268 C120 262 66 224 60 150 Z'

// The Faigen agent: a blue circle with a friendly face (echoes the logo)
function Face({ cx, cy, r = 34, delay = 0.6 }) {
  return (
    <>
      <Pop delay={delay}><circle cx={cx} cy={cy} r={r} fill={BLUE} /><circle cx={cx} cy={cy} r={r + 9} fill={BLUE} opacity="0.14" /></Pop>
      <Pop delay={delay + 0.3}><circle cx={cx - 10} cy={cy - 6} r="3.6" fill="#fff" /><circle cx={cx + 10} cy={cy - 6} r="3.6" fill="#fff" /></Pop>
      <Draw d={`M${cx - 13} ${cy + 8} C ${cx - 5} ${cy + 19}, ${cx + 5} ${cy + 19}, ${cx + 13} ${cy + 8}`} stroke="#fff" width={3} delay={delay + 0.4} duration={0.5} />
    </>
  )
}

function Arrow({ x, y, delay = 0.5, w = 36 }) {
  return (
    <>
      <Draw d={`M${x} ${y} C ${x + w * 0.35} ${y - 8}, ${x + w * 0.65} ${y - 8}, ${x + w} ${y}`} stroke={BLUE} width={3} delay={delay} duration={0.5} />
      <Draw d={`M${x + w - 9} ${y - 9} L${x + w + 1} ${y} L${x + w - 11} ${y + 7}`} stroke={BLUE} width={3} delay={delay + 0.4} duration={0.25} />
    </>
  )
}

const Cap = ({ x, y, children, delay }) => <Label x={x} y={y} size={23} fill={MUTED} anchor="middle" delay={delay}>{children}</Label>

/* ── 1. Orders: a message in, a finished order out ─────────────── */
export function OrdersScene({ className = '' }) {
  return (
    <svg viewBox="0 0 460 250" className={className} fill="none" role="img" aria-label="A customer message goes to Faigen, which produces a finished order">
      <Pop><path d={BLOB} fill={TINT} opacity="0.7" /></Pop>
      <Draw d="M38 58 H132 a14 14 0 0 1 14 14 V116 a14 14 0 0 1 -14 14 H70 L46 152 V130 H38 a14 14 0 0 1 -14 -14 V72 a14 14 0 0 1 14 -14 Z" fill="#fff" delay={0.1} duration={1} />
      <Label x={38} y={91} size={22} delay={0.9}>2 mats,</Label>
      <Label x={38} y={116} size={22} delay={1.0}>Kakkanad</Label>
      <Arrow x={156} y={98} delay={1.0} w={34} />
      <Face cx={238} cy={98} delay={1.3} />
      <Arrow x={288} y={98} delay={1.6} w={34} />
      <Draw d="M334 36 H432 a8 8 0 0 1 8 8 V176 L426 168 L412 176 L398 168 L384 176 L370 168 L356 176 L342 168 L326 176 V44 a8 8 0 0 1 8 -8 Z" fill="#fff" delay={1.7} duration={1.2} />
      <Draw d="M346 64 H408 M346 82 H396 M346 100 H414" width={2.2} delay={2.4} duration={0.7} />
      <Label x={346} y={146} size={28} fill={BLUE} delay={2.7}>₹1,200</Label>
      <Pop delay={3.0}><circle cx="436" cy="40" r="15" fill={BLUE} /></Pop>
      <Draw d="M429 40 L434 46 L444 34" stroke="#fff" width={3.2} delay={3.1} duration={0.4} />
      <Cap x={84} y={206} delay={1.2}>customer asks</Cap>
      <Cap x={238} y={206} delay={1.6}>Faigen answers</Cap>
      <Cap x={386} y={206} delay={2.9}>order ready</Cap>
      <Pop delay={3.2}><SparkleG x={14} y={8} s={0.9} /></Pop>
    </svg>
  )
}

/* ── 2. Instagram: a comment becomes a private message ─────────── */
export function InstagramScene({ className = '' }) {
  return (
    <svg viewBox="0 0 460 250" className={className} fill="none" role="img" aria-label="A comment on your Reel is answered by Faigen with a private message">
      <Pop><path d={BLOB} fill={TINT} opacity="0.7" /></Pop>
      <Draw d="M36 40 H132 a12 12 0 0 1 12 12 V168 a12 12 0 0 1 -12 12 H36 a12 12 0 0 1 -12 -12 V52 a12 12 0 0 1 12 -12 Z" fill="#fff" delay={0.1} duration={1.1} />
      <Draw d="M36 54 H120 V116 H36 Z" width={2} delay={0.9} duration={0.6} />
      <Pop delay={1.1}><circle cx="102" cy="72" r="8" fill="#ffb86b" /></Pop>
      <Draw d="M36 116 L62 88 L82 106 L98 92 L120 116" width={2.4} delay={1.0} duration={0.7} />
      <Draw d="M48 150 C 36 141, 36 130, 44 128 C 48 127, 50 130, 50 132 C 50 130, 52 127, 56 128 C 64 130, 64 141, 48 150 Z" stroke="#e1306c" width={2.4} delay={1.3} duration={0.6} />
      <Draw d="M82 130 H102 a4 4 0 0 1 4 4 V142 a4 4 0 0 1 -4 4 H94 L88 151 V146 H82 a4 4 0 0 1 -4 -4 V134 a4 4 0 0 1 4 -4 Z" width={2.2} delay={1.4} duration={0.6} />
      <Pop delay={1.6}>
        <path d="M110 12 H178 a10 10 0 0 1 10 10 V34 a10 10 0 0 1 -10 10 H126 L116 54 V44 H110 a10 10 0 0 1 -10 -10 V22 a10 10 0 0 1 10 -10 Z" fill="#fff" stroke={INK} strokeWidth="2.4" strokeLinejoin="round" />
      </Pop>
      <Label x={116} y={35} size={24} delay={1.8}>price?</Label>
      <Arrow x={154} y={112} delay={2.0} w={34} />
      <Face cx={238} cy={112} delay={2.2} />
      <Arrow x={288} y={112} delay={2.5} w={34} />
      <Draw d="M340 124 L440 74 L408 172 L386 138 Z M386 138 L440 74" stroke={BLUE} width={3.2} delay={2.6} duration={1} />
      <Draw d="M326 176 C 346 154, 368 162, 384 142" width={2.2} dash="2 8" delay={3.2} duration={0.7} opacity={0.6} />
      <Draw d="M352 182 H430 a10 10 0 0 1 10 10 V200 a10 10 0 0 1 -10 10 H352 a10 10 0 0 1 -10 -10 V192 a10 10 0 0 1 10 -10 Z" fill="#fff" width={2.4} delay={3.0} duration={0.7} />
      <Label x={356} y={202} size={20} fill={BLUE} delay={3.5}>price list</Label>
      <Cap x={84} y={236} delay={1.8}>comment</Cap>
      <Cap x={238} y={236} delay={2.4}>Faigen replies</Cap>
      <Cap x={388} y={240} delay={3.4}>private DM</Cap>
    </svg>
  )
}

/* ── 3. Broadcasts: one message, many chats ────────────────────── */
export function BroadcastScene({ className = '' }) {
  const rows = [14, 72, 130, 188]
  return (
    <svg viewBox="0 0 460 290" className={className} fill="none" role="img" aria-label="One message is sent to a thousand chats at once">
      <Pop><path d={BLOB} fill={TINT} opacity="0.7" /></Pop>
      <Draw d="M38 78 H134 a14 14 0 0 1 14 14 V136 a14 14 0 0 1 -14 14 H72 L48 172 V150 H38 a14 14 0 0 1 -14 -14 V92 a14 14 0 0 1 14 -14 Z" fill="#fff" delay={0.1} duration={1} />
      <Label x={40} y={116} size={22} delay={0.9}>Onam</Label>
      <Label x={40} y={140} size={22} fill={BLUE} delay={1.0}>offer!</Label>
      {rows.map((y, i) => (
        <g key={y}>
          <Draw d={`M152 120 C 220 120, 250 ${y + 22}, 322 ${y + 22}`} stroke={BLUE} width={2.4} dash="1 7" delay={1.2 + i * 0.15} duration={0.9} />
          <Draw d={`M332 ${y} H424 a10 10 0 0 1 10 10 V${y + 34} a10 10 0 0 1 -10 10 H332 a10 10 0 0 1 -10 -10 V${y + 10} a10 10 0 0 1 10 -10 Z`} fill="#fff" delay={1.5 + i * 0.15} duration={0.6} />
          <Draw d={`M338 ${y + 14} H388 M338 ${y + 28} H374`} width={2} delay={2.0 + i * 0.12} duration={0.4} />
          <Draw d={`M404 ${y + 22} L410 ${y + 28} L422 ${y + 14}`} stroke={BLUE} width={3} delay={2.3 + i * 0.12} duration={0.35} />
        </g>
      ))}
      <Label x={330} y={272} size={24} fill={MUTED} delay={3.0}>…and 996 more</Label>
      <Cap x={86} y={206} delay={1.2}>1 message</Cap>
      <Pop delay={3.2}><SparkleG x={30} y={26} s={1} /></Pop>
    </svg>
  )
}

/* ── 4. Dashboard: everything on one screen ────────────────────── */
export function DashboardScene({ className = '' }) {
  const bars = [44, 58, 50, 72, 64, 88, 78, 96]
  return (
    <svg viewBox="0 0 460 280" className={className} fill="none" role="img" aria-label="A dashboard showing chats, orders and replies in one place">
      <Pop><path d={BLOB} fill={TINT} opacity="0.7" /></Pop>
      <Draw d="M72 28 H388 a12 12 0 0 1 12 12 V202 H60 V40 a12 12 0 0 1 12 -12 Z" fill="#fff" delay={0.1} duration={1.3} />
      <Draw d="M30 202 H430 L414 226 H46 Z" fill="#fff" delay={1.0} duration={0.8} />
      {[['128', 'chats', 76], ['14', 'orders', 168], ['100%', 'replied', 260]].map(([n, l, x], i) => (
        <g key={l}>
          <Pop delay={1.2 + i * 0.15}><rect x={x} y="48" width="84" height="48" rx="10" fill="#f5f5f7" /></Pop>
          <Label x={x + 10} y={72} size={20} fill={MUTED} delay={1.4 + i * 0.15}>{l}</Label>
          <Label x={x + 10} y={90} size={26} delay={1.5 + i * 0.15}>{n}</Label>
        </g>
      ))}
      {bars.map((h, i) => (
        <Pop key={i} delay={1.9 + i * 0.07}><rect x={78 + i * 38} y={192 - h * 0.78} width="24" height={h * 0.78} rx="5" fill={i === 5 ? BLUE : TINT} /></Pop>
      ))}
      <Pop delay={2.8}>
        <rect x="318" y="6" width="130" height="44" rx="12" fill="#fff" stroke={INK} strokeWidth="2.4" />
        <circle cx="338" cy="28" r="10" fill="#e9f9ee" />
      </Pop>
      <Draw d="M333 28 L337 32 L344 24" stroke="#1a9b4a" width={2.6} delay={3.0} duration={0.4} />
      <Label x={354} y={34} size={22} fill={BLUE} delay={3.1}>new order!</Label>
      <Cap x={230} y={266} delay={2.6}>everything in one place</Cap>
    </svg>
  )
}

/* ── Small feature drawings (180 × 150) ────────────────────────── */
const SOFT = 'M24 70 C22 34 58 10 100 14 C146 18 166 56 154 98 C142 138 92 148 54 130 C34 120 26 96 24 70 Z'

export function FeatureUnlimited({ className = '' }) {
  return (
    <svg viewBox="0 0 180 150" className={className} fill="none" aria-hidden="true">
      <Pop><path d={SOFT} fill={TINT} /></Pop>
      <Draw d="M90 75 C 72 40, 28 38, 26 75 C 24 112, 70 110, 90 75 C 110 40, 156 38, 154 75 C 152 112, 108 110, 90 75" stroke={BLUE} width={6} delay={0.1} duration={1.6} />
      {[[24, 14], [128, 14], [76, 118]].map(([x, y], i) => (
        <Pop key={i} delay={1.2 + i * 0.15}><rect x={x} y={y} width="30" height="20" rx="6" fill="#fff" stroke={INK} strokeWidth="2.2" /><path d={`M${x + 6} ${y + 20} l-3 7 l10 -7`} fill="#fff" stroke={INK} strokeWidth="2.2" strokeLinejoin="round" /></Pop>
      ))}
    </svg>
  )
}

export function FeatureLanguage({ className = '' }) {
  return (
    <svg viewBox="0 0 180 150" className={className} fill="none" aria-hidden="true">
      <Pop><path d={SOFT} fill={TINT} /></Pop>
      <Draw d="M22 24 H104 a10 10 0 0 1 10 10 V44 a10 10 0 0 1 -10 10 H22 a10 10 0 0 1 -10 -10 V34 a10 10 0 0 1 10 -10 Z" fill="#fff" delay={0.1} duration={0.7} />
      <Label x={63} y={46} size={22} anchor="middle" delay={0.7}>English</Label>
      <Pop delay={0.7}><path d="M68 62 H158 a10 10 0 0 1 10 10 V82 a10 10 0 0 1 -10 10 H68 a10 10 0 0 1 -10 -10 V72 a10 10 0 0 1 10 -10 Z" fill={BLUE} stroke={INK} strokeWidth="2.4" /></Pop>
      <Label x={113} y={84} size={22} anchor="middle" fill="#fff" delay={1.2}>Malayalam</Label>
      <Draw d="M32 100 H122 a10 10 0 0 1 10 10 V120 a10 10 0 0 1 -10 10 H32 a10 10 0 0 1 -10 -10 V110 a10 10 0 0 1 10 -10 Z" fill="#fff" delay={1.0} duration={0.7} />
      <Label x={77} y={122} size={22} anchor="middle" delay={1.6}>Manglish</Label>
    </svg>
  )
}

export function FeatureRules({ className = '' }) {
  return (
    <svg viewBox="0 0 180 150" className={className} fill="none" aria-hidden="true">
      <Pop><path d={SOFT} fill={TINT} /></Pop>
      <Draw d="M90 18 L140 36 V76 C140 106 114 126 90 134 C66 126 40 106 40 76 V36 Z" fill="#fff" delay={0.1} duration={1.3} />
      <Draw d="M66 76 L84 94 L116 56" stroke={BLUE} width={6} delay={1.2} duration={0.7} />
      <Pop delay={1.6}><SparkleG x={134} y={12} s={1.1} /></Pop>
    </svg>
  )
}

export function FeatureStepIn({ className = '' }) {
  return (
    <svg viewBox="0 0 180 150" className={className} fill="none" aria-hidden="true">
      <Pop><path d={SOFT} fill={TINT} /></Pop>
      <Draw d="M50 46 H130 a26 26 0 0 1 0 52 H50 a26 26 0 0 1 0 -52 Z" fill={BLUE} delay={0.1} duration={1} />
      <Label x={62} y={79} size={22} fill="#fff" delay={0.9}>AI on</Label>
      <Pop delay={1.1}><circle cx="130" cy="72" r="19" fill="#fff" stroke={INK} strokeWidth="2.6" /></Pop>
      <Pop delay={1.6}><path d="M136 100 L136 130 L144 122 L150 136 L157 133 L151 120 L162 120 Z" fill="#fff" stroke={INK} strokeWidth="2.4" strokeLinejoin="round" /></Pop>
    </svg>
  )
}

export function FeatureRates({ className = '' }) {
  return (
    <svg viewBox="0 0 180 150" className={className} fill="none" aria-hidden="true">
      <Pop><path d={SOFT} fill={TINT} /></Pop>
      <Draw d="M22 76 a32 32 0 1 0 64 0 a32 32 0 1 0 -64 0" fill="#fff" delay={0.1} duration={1} />
      <Label x={54} y={90} size={40} anchor="middle" fill={BLUE} delay={0.9}>₹</Label>
      <Draw d="M88 66 C 98 60, 104 56, 112 52 M88 86 C 98 92, 104 96, 112 100" width={2.2} dash="1 7" delay={1.2} duration={0.6} />
      <Draw d="M112 36 H160 a10 10 0 0 1 10 10 V56 a10 10 0 0 1 -10 10 H112 a10 10 0 0 1 -10 -10 V46 a10 10 0 0 1 10 -10 Z" fill="#fff" delay={1.3} duration={0.6} />
      <Label x={136} y={58} size={21} anchor="middle" delay={1.8}>₹0.20</Label>
      <Draw d="M112 88 H160 a10 10 0 0 1 10 10 V108 a10 10 0 0 1 -10 10 H112 a10 10 0 0 1 -10 -10 V98 a10 10 0 0 1 10 -10 Z" fill="#fff" delay={1.5} duration={0.6} />
      <Label x={136} y={110} size={21} anchor="middle" delay={2.0}>₹1.10</Label>
    </svg>
  )
}

export function FeatureSecure({ className = '' }) {
  return (
    <svg viewBox="0 0 180 150" className={className} fill="none" aria-hidden="true">
      <Pop><path d={SOFT} fill={TINT} /></Pop>
      <Label x={62} y={92} size={56} anchor="middle" fill={BLUE} delay={0.3}>{'</>'}</Label>
      <Draw d="M106 82 H152 a6 6 0 0 1 6 6 V122 a6 6 0 0 1 -6 6 H106 a6 6 0 0 1 -6 -6 V88 a6 6 0 0 1 6 -6 Z" fill="#fff" delay={0.8} duration={0.9} />
      <Draw d="M112 82 V70 a17 17 0 0 1 34 0 V82" delay={1.6} duration={0.7} />
      <Pop delay={2.0}><circle cx="129" cy="102" r="5" fill={INK} /></Pop>
    </svg>
  )
}
