'use client'

/* ────────────────────────────────────────────────────────────────
   Hand-drawn illustrations in Faigen's colors: ink, white, blue.
   Loose, rounded line work with soft color blobs behind it — the same
   node-and-line language as the Faigen logo. All drawings are static.
   ──────────────────────────────────────────────────────────────── */

const INK = '#1d1d1f'
const BLUE = '#0071e3'
const TINT = '#dcebff'

// Everything is drawn in place on first paint — no scroll-triggered animation.
function Draw({ d, stroke = INK, width = 2.6, fill = 'none', dash, opacity = 1 }) {
  return (
    <path d={d} fill={fill} stroke={stroke} strokeWidth={width} strokeLinecap="round" strokeLinejoin="round" strokeDasharray={dash} opacity={opacity} />
  )
}

function Pop({ children }) {
  return <g>{children}</g>
}

/* ── Small decorations ─────────────────────────────────────────── */

// Hand-drawn underline for a headline word
export function Squiggle({ className = '', color = BLUE }) {
  return (
    <svg viewBox="0 0 240 22" className={className} fill="none" aria-hidden="true" preserveAspectRatio="none">
      <path d="M4 13 C34 5, 62 19, 98 10 S168 5, 236 11" stroke={color} strokeWidth="5" strokeLinecap="round" />
    </svg>
  )
}

// Four-point sparkle
export function Sparkle({ className = '', color = BLUE }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
      <path d="M12 1.5 C13 8 16 11 22.5 12 C16 13 13 16 12 22.5 C11 16 8 13 1.5 12 C8 11 11 8 12 1.5 Z" fill={color} />
    </svg>
  )
}

// Sparkle drawn inside another SVG at (x, y), scaled by s
export function SparkleG({ x = 0, y = 0, s = 1, color = BLUE }) {
  return (
    <g transform={`translate(${x} ${y}) scale(${s})`}>
      <path d="M12 1.5 C13 8 16 11 22.5 12 C16 13 13 16 12 22.5 C11 16 8 13 1.5 12 C8 11 11 8 12 1.5 Z" fill={color} />
    </g>
  )
}

// Eight-ray burst, a friendly hand-drawn asterisk
export function Burst({ className = '', color = INK }) {
  const rays = [0, 45, 90, 135, 180, 225, 270, 315]
  return (
    <svg viewBox="0 0 48 48" className={className} aria-hidden="true" fill="none">
      {rays.map((a, i) => (
        <line key={a} x1="24" y1="24" x2="24" y2={i % 2 ? 9 : 4} stroke={color} strokeWidth="3.4" strokeLinecap="round" transform={`rotate(${a} 24 24)`} />
      ))}
    </svg>
  )
}

// Soft organic blob to sit behind illustrations
export function Blob({ className = '', color = TINT }) {
  return (
    <svg viewBox="0 0 220 200" className={className} aria-hidden="true">
      <path d="M118 14 C168 6 212 48 204 100 C196 152 134 186 84 166 C32 146 14 84 46 46 C66 22 92 18 118 14 Z" fill={color} />
    </svg>
  )
}

/* ── "How it works" step drawings ──────────────────────────────── */

export function StepNotebook({ className = '' }) {
  return (
    <svg viewBox="0 0 180 150" className={className} fill="none" aria-hidden="true">
      <Pop><path d="M30 78 C26 40 62 14 104 20 C150 26 168 62 152 104 C138 140 92 148 56 132 C36 122 32 100 30 78 Z" fill={TINT} /></Pop>
      <g transform="rotate(-7 82 76)">
        <Draw d="M48 28 H112 a8 8 0 0 1 8 8 V118 a8 8 0 0 1 -8 8 H48 a8 8 0 0 1 -8 -8 V36 a8 8 0 0 1 8 -8 Z" fill="#fff" delay={0.1} />
        <Draw d="M54 50 H104 M54 66 H98 M54 82 H104 M54 98 H86" stroke={INK} width={2.2} delay={0.7} duration={0.9} />
        {[40, 62, 84, 106].map(y => <circle key={y} cx="40" cy={y} r="3" fill={INK} />)}
      </g>
      <Pop delay={0.9}>
        <path d="M118 108 L140 56 L151 61 L129 112 Z" fill={BLUE} stroke={INK} strokeWidth="2.4" strokeLinejoin="round" />
        <path d="M118 108 L129 112 L116 120 Z" fill="#fff" stroke={INK} strokeWidth="2.2" strokeLinejoin="round" />
      </Pop>
      <Pop delay={1.1}><SparkleG x={128} y={20} s={1.4} /></Pop>
    </svg>
  )
}

export function StepAgent({ className = '' }) {
  return (
    <svg viewBox="0 0 180 150" className={className} fill="none" aria-hidden="true">
      <Pop><path d="M24 70 C22 34 58 10 100 14 C146 18 166 56 154 98 C142 138 92 148 54 130 C34 120 26 96 24 70 Z" fill={TINT} /></Pop>
      {/* wires to nodes — the logo's language */}
      <Draw d="M120 52 C136 44 146 36 154 26" delay={0.9} duration={0.7} width={2.3} />
      <Draw d="M124 70 C140 70 148 70 158 70" delay={1.0} duration={0.7} width={2.3} />
      <Draw d="M120 88 C134 96 144 104 152 114" delay={1.1} duration={0.7} width={2.3} />
      <Pop delay={1.5}><circle cx="157" cy="24" r="7" fill="#fff" stroke={INK} strokeWidth="2.4" /><circle cx="163" cy="70" r="7" fill={BLUE} stroke={INK} strokeWidth="2.4" /><circle cx="156" cy="117" r="7" fill="#fff" stroke={INK} strokeWidth="2.4" /></Pop>
      {/* the agent */}
      <Draw d="M38 56 C38 42 48 34 62 34 H98 C112 34 122 42 122 56 V84 C122 98 112 106 98 106 H76 L56 126 V106 H62 C48 106 38 98 38 84 Z" fill="#fff" delay={0.1} duration={1.3} />
      <Pop delay={1}><circle cx="68" cy="68" r="4.2" fill={INK} /><circle cx="94" cy="68" r="4.2" fill={INK} /></Pop>
      <Draw d="M66 84 C74 94 88 94 96 84" delay={1.1} duration={0.6} width={2.8} />
    </svg>
  )
}

export function StepLaunch({ className = '' }) {
  return (
    <svg viewBox="0 0 180 150" className={className} fill="none" aria-hidden="true">
      <Pop><path d="M26 76 C22 40 58 14 100 18 C146 22 168 60 152 100 C138 138 92 146 56 130 C36 120 28 100 26 76 Z" fill={TINT} /></Pop>
      <Draw d="M62 22 H112 a10 10 0 0 1 10 10 V114 a10 10 0 0 1 -10 10 H62 a10 10 0 0 1 -10 -10 V32 a10 10 0 0 1 10 -10 Z" fill="#fff" delay={0.1} duration={1.2} />
      <Draw d="M80 31 H94" delay={0.9} duration={0.5} width={2.6} />
      <Pop delay={1.0}><circle cx="87" cy="70" r="22" fill={BLUE} /></Pop>
      <Draw d="M76 70 L84 78 L99 61" stroke="#fff" width={4} delay={1.3} duration={0.6} />
      <Draw d="M70 106 H104" delay={1.6} duration={0.5} width={2.4} />
      <Pop delay={1.5}><SparkleG x={24} y={30} s={1.3} /></Pop>
      <Draw d="M140 34 L152 22 M146 52 L162 50 M132 18 L134 6" width={2.6} delay={1.7} duration={0.6} />
    </svg>
  )
}

/* ── Instagram doodles (white line work with warm accents) ─────── */
export function InstaDoodles({ className = '' }) {
  return (
    <svg viewBox="0 0 300 200" className={className} fill="none" aria-hidden="true">
      <Draw d="M60 70 C60 54 76 44 92 44 C108 44 124 54 124 70 C124 92 92 112 92 112 C92 112 60 92 60 70 Z" stroke="#ff9ec7" width={3} delay={0.1} />
      <Draw d="M150 92 H236 a10 10 0 0 1 10 10 V140 a10 10 0 0 1 -10 10 H196 L172 172 V150 H150 a10 10 0 0 1 -10 -10 V102 a10 10 0 0 1 10 -10 Z" stroke="#fff" width={3} delay={0.5} duration={1.3} />
      <Draw d="M158 112 H228 M158 128 H206" stroke="rgba(255,255,255,.6)" width={2.4} delay={1.3} duration={0.7} />
      <Draw d="M196 30 L274 56 L212 70 L204 98 L196 30 Z M212 70 L274 56" stroke="#ffb86b" width={2.8} delay={0.9} duration={1.1} />
      <Draw d="M126 64 C150 50 160 62 168 78" stroke="rgba(255,255,255,.4)" width={2.2} dash="2 7" delay={1.6} duration={0.8} />
    </svg>
  )
}


/* ── Hero: someone out shopping, the cart full of customer chats ─ */
export function HeroTrolley({ className = '' }) {
  return (
    <svg viewBox="0 0 760 330" className={className} fill="none" role="img" aria-label="A person pushing a shopping trolley with a WhatsApp and an Instagram chat inside">
      <defs>
        <linearGradient id="trolley-ig" x1="0" y1="1" x2="1" y2="0">
          <stop offset="0" stopColor="#feda75" /><stop offset=".35" stopColor="#fa7e1e" /><stop offset=".65" stopColor="#d62976" /><stop offset="1" stopColor="#4f5bd5" />
        </linearGradient>
      </defs>

      {/* soft color blob + hand-drawn ground */}
      <path d="M58 196 C46 96 178 30 372 36 C576 42 706 104 698 212 C690 296 530 316 372 312 C214 308 70 288 58 196 Z" fill={TINT} opacity=".6" />
      <Draw d="M30 314 C190 309 330 318 480 312 C600 307 680 316 730 311" width={2.4} />
      <Draw d="M44 224 H 84 M 30 254 H 74 M 54 284 H 90" width={2.3} opacity={0.35} />

      {/* the two chats riding in the trolley */}
      <g transform="rotate(-8 352 124)">
        <circle cx="352" cy="124" r="38" fill="#25d366" />
        <path d="M352 100a24 24 0 0 0-20.6 36.2l-3.1 11.5 11.8-3.1A24 24 0 1 0 352 100Z" stroke="#fff" strokeWidth="4.6" strokeLinejoin="round" />
        <path d="M343 113c1-1.4 2.3-1.4 2.8-.6l2.6 4.5c.3.8 0 1.7-.6 2.2l-1.4 1.4c1.7 3.4 4.2 5.6 7.6 7.6l1.7-1.7c.6-.6 1.4-.8 2.2-.3l4.5 2.5c.8.6.8 1.9-.3 3.3-2 2.5-4.7 3-8.1 1.7-6.5-2.5-11.5-7.6-13.8-14-.6-2.5.3-4.700 1-6.600Z" fill="#fff" />
      </g>
      <g transform="rotate(7 448 120)">
        <rect x="412" y="84" width="72" height="72" rx="21" fill="url(#trolley-ig)" />
        <rect x="428" y="100" width="40" height="40" rx="12" stroke="#fff" strokeWidth="4.6" />
        <circle cx="448" cy="120" r="9.5" stroke="#fff" strokeWidth="4.6" />
        <circle cx="460" cy="108" r="2.8" fill="#fff" />
      </g>

      {/* their questions, as little speech bubbles */}
      <Draw d="M300 40 H352 a10 10 0 0 1 10 10 V62 a10 10 0 0 1 -10 10 H334 L324 82 V72 H300 a10 10 0 0 1 -10 -10 V50 a10 10 0 0 1 10 -10 Z" fill="#fff" width={2.4} />
      <Label x={326} y={63} size={22} anchor="middle" rotate={-2}>in stock?</Label>
      <Draw d="M430 30 H474 a10 10 0 0 1 10 10 V52 a10 10 0 0 1 -10 10 H462 L472 72 L452 62 H430 a10 10 0 0 1 -10 -10 V40 a10 10 0 0 1 10 -10 Z" fill="#fff" width={2.4} />
      <Label x={452} y={53} size={22} anchor="middle" rotate={2}>price?</Label>

      {/* the trolley */}
      <Draw d="M270 152 C340 148 440 150 530 148 C520 178 504 212 494 242 C430 246 360 244 306 240 C292 212 280 180 270 152 Z" fill="#fff" width={2.8} />
      <Draw d="M312 150 L 326 242 M 356 150 L 360 244 M 400 150 V 245 M 446 150 L 442 244 M 490 149 L 474 243 M 282 184 C 360 188 440 186 516 182 M 296 214 C 370 218 440 216 504 212" width={1.8} opacity={0.38} />
      <Draw d="M240 138 C 252 140 262 142 274 146 L 308 240" width={2.8} />
      <Draw d="M322 242 V 284 M 484 242 V 284 M 316 284 C 380 286 440 284 494 284" width={2.8} />
      <circle cx="322" cy="298" r="14" fill="#fff" stroke={INK} strokeWidth="2.8" /><circle cx="322" cy="298" r="3" fill={INK} />
      <circle cx="484" cy="298" r="14" fill="#fff" stroke={INK} strokeWidth="2.8" /><circle cx="484" cy="298" r="3" fill={INK} />

      {/* the shopper, walking right */}
      <Draw d="M164 190 C160 228 152 262 146 298 M 188 190 C 198 226 208 262 226 296" width={2.8} />
      <Draw d="M132 302 C 140 298 150 298 156 301 M 214 299 C 224 295 236 296 244 300" width={2.8} />
      <path d="M150 112 C168 104 192 104 204 112 L 212 190 C 196 198 168 198 150 192 Z" fill={BLUE} stroke={INK} strokeWidth="2.6" strokeLinejoin="round" />
      <Draw d="M196 120 C 214 132 232 140 244 140 C 258 140 266 140 272 142" width={2.8} />
      <Draw d="M154 122 C 138 144 134 170 146 188" width={2.8} />
      <path d="M172 112 C 172 104 172 100 172 98" stroke={INK} strokeWidth="2.6" strokeLinecap="round" />
      <path d="M146 76 C 146 58 160 50 174 50 C 192 50 202 62 202 78 C 202 96 190 106 174 106 C 158 106 146 94 146 76 Z" fill="#fff" stroke={INK} strokeWidth="2.6" strokeLinejoin="round" />
      <Draw d="M148 66 C 156 44 188 40 200 62" width={3.4} stroke={INK} />
      <Draw d="M160 78 v 3 M 184 78 v 3" width={2.6} />
      <Draw d="M164 90 C 170 97 180 97 186 89" width={2.4} />

      {/* wires and nodes, like the logo */}
      <Draw d="M520 96 C 560 84 590 72 618 52" width={2.2} dash="2 7" />
      <Pop><circle cx="626" cy="46" r="7" fill="#fff" stroke={INK} strokeWidth="2.4" /></Pop>
      <Draw d="M530 124 C 570 128 604 130 640 128" width={2.2} dash="2 7" />
      <Pop><circle cx="648" cy="128" r="7" fill={BLUE} stroke={INK} strokeWidth="2.4" /></Pop>
      <SparkleG x={246} y={34} s={1.2} />
      <SparkleG x={560} y={176} s={0.9} />
      <SparkleG x={112} y={96} s={0.8} />
      <Label x={604} y={198} size={26} rotate={-5}>always on</Label>
      <Draw d="M608 208 C 626 216 652 214 670 206" width={3} stroke={BLUE} />
    </svg>
  )
}

/* ── Hero doodles: a customer asks at 2 AM, Faigen answers ─────── */
const HAND = { fontFamily: 'var(--font-hand), cursive', fontWeight: 600 }

function Label({ x, y, rotate = 0, children, fill = INK, size = 30, delay = 0, anchor = 'start' }) {
  return (
    <text x={x} y={y} fontSize={size} fill={fill} textAnchor={anchor} style={HAND} transform={`rotate(${rotate} ${x} ${y})`}>{children}</text>
  )
}

export function HeroDoodlesLeft({ className = '' }) {
  return (
    <svg viewBox="0 0 320 480" className={className} fill="none" aria-hidden="true">
      {/* the customer's message */}
      <Draw d="M34 22 H168 a16 16 0 0 1 16 16 V84 a16 16 0 0 1 -16 16 H96 L66 124 V100 H34 a16 16 0 0 1 -16 -16 V38 a16 16 0 0 1 16 -16 Z" delay={1.2} duration={1.3} />
      <Pop delay={2.2}><g fill={INK}><circle cx="68" cy="61" r="5" /><circle cx="101" cy="61" r="5" /><circle cx="134" cy="61" r="5" /></g></Pop>
      <Label x={24} y={168} rotate={-4} delay={2.3}>2 AM: “price?”</Label>
      {/* arrow toward the phone */}
      <Draw d="M168 150 C 205 160, 240 180, 272 218" stroke={BLUE} width={3} delay={2.5} duration={0.9} />
      <Draw d="M254 220 L274 220 L268 200" stroke={BLUE} width={3} delay={3.3} duration={0.3} />
    </svg>
  )
}

export function HeroDoodlesRight({ className = '' }) {
  return (
    <svg viewBox="0 0 320 480" className={className} fill="none" aria-hidden="true">
      {/* Faigen's reply flies back */}
      <Draw d="M196 46 L298 12 L266 92 L240 66 Z M240 66 L298 12 M240 66 L238 92 L254 76" stroke={BLUE} width={3} delay={1.6} duration={1.3} />
      <Draw d="M30 130 C 80 84, 130 96, 190 62" stroke={INK} width={2.2} dash="2 8" opacity={0.5} delay={2.4} duration={1} />
      <Label x={64} y={168} rotate={3} fill={BLUE} delay={2.6}>Faigen replies!</Label>
      <Draw d="M62 178 C 30 196, 20 226, 36 258" stroke={INK} width={3} delay={2.9} duration={0.9} />
      <Draw d="M22 244 L37 260 L52 246" stroke={INK} width={3} delay={3.7} duration={0.3} />
    </svg>
  )
}

/* Small hero accents in the loose dot-and-tick style of hand-drawn sketches */
export function DoodleRays({ className = '' }) {
  return (
    <svg viewBox="0 0 90 90" className={className} fill="none" aria-hidden="true">
      <Draw d="M45 6 L45 24 M45 66 L45 84 M6 45 L24 45 M66 45 L84 45 M17 17 L29 29 M61 61 L73 73 M73 17 L61 29 M29 61 L17 73" width={4} delay={1.4} duration={0.9} />
      <Pop delay={2.1}><circle cx="45" cy="45" r="5" fill={BLUE} /></Pop>
    </svg>
  )
}

export function DoodleDots({ className = '' }) {
  return (
    <svg viewBox="0 0 90 90" className={className} fill="none" aria-hidden="true">
      <Pop delay={1.6}><g fill={INK}><circle cx="20" cy="62" r="5" /><circle cx="44" cy="44" r="5" /></g><circle cx="68" cy="26" r="5" fill={BLUE} /></Pop>
      <Draw d="M26 56 C 32 52, 36 48, 39 47 M50 40 C 55 36, 60 32, 63 30" width={3} dash="1 8" delay={2.0} duration={0.8} />
      <Draw d="M60 70 C 66 62, 76 62, 80 70" stroke={BLUE} width={3.4} delay={2.5} duration={0.6} />
    </svg>
  )
}

/* A handwritten note with an arrow, sitting in the corner of a showcase card */
export function CardNote({ text, className = '' }) {
  return (
    <svg viewBox="0 0 280 96" className={className} fill="none" aria-hidden="true">
      <Label x={6} y={34} rotate={-3} fill={BLUE} size={28} delay={0.9}>{text}</Label>
      <Draw d="M200 46 C 226 52, 244 66, 252 90" stroke={BLUE} width={2.6} delay={1.4} duration={0.8} />
      <Draw d="M238 78 L252 92 L260 74" stroke={BLUE} width={2.6} delay={2.1} duration={0.3} />
    </svg>
  )
}

/* A hand-drawn infinity loop that draws itself */
export function InfinityDoodle({ className = '' }) {
  return (
    <svg viewBox="0 0 220 110" className={className} fill="none" aria-hidden="true">
      <Draw d="M110 55 C 90 20, 30 14, 24 55 C 18 96, 84 92, 110 55 C 136 18, 200 14, 196 55 C 192 96, 130 90, 110 55" stroke={BLUE} width={6} delay={0.2} duration={1.8} />
      <Pop delay={1.7}><SparkleG x={170} y={4} s={0.8} /></Pop>
    </svg>
  )
}

/* ── Use-case drawings (white line work with a blue touch, for dark cards) ── */
export function DoodleRetail({ className = '', color = '#fff' }) {
  return (
    <svg viewBox="0 0 80 80" className={className} fill="none" aria-hidden="true">
      <Draw d="M14 30 H66 L72 74 H8 Z" stroke={color} width={2.6} delay={0.1} duration={1} />
      <Draw d="M28 30 V22 a12 12 0 0 1 24 0 V30" stroke={color} width={2.6} delay={0.8} duration={0.7} />
      <Draw d="M28 52 L37 61 L53 43" stroke="#2997ff" width={3.2} delay={1.3} duration={0.5} />
    </svg>
  )
}
export function DoodleClinic({ className = '', color = '#fff' }) {
  return (
    <svg viewBox="0 0 80 80" className={className} fill="none" aria-hidden="true">
      <Draw d="M18 10 H62 a8 8 0 0 1 8 8 V62 a8 8 0 0 1 -8 8 H18 a8 8 0 0 1 -8 -8 V18 a8 8 0 0 1 8 -8 Z" stroke={color} width={2.6} delay={0.1} duration={1} />
      <Draw d="M40 24 V56 M24 40 H56" stroke="#2997ff" width={4} delay={1} duration={0.6} />
    </svg>
  )
}
export function DoodleFood({ className = '', color = '#fff' }) {
  return (
    <svg viewBox="0 0 80 80" className={className} fill="none" aria-hidden="true">
      <Draw d="M8 12 V32 M14 12 V32 M20 12 V32 M8 32 C 8 38, 20 38, 20 32 M14 36 V70" stroke={color} width={2.6} delay={0.1} duration={1} />
      <Draw d="M72 12 C 60 22, 60 40, 72 42 V70" stroke={color} width={2.6} delay={0.6} duration={0.9} />
      <Draw d="M26 42 a14 14 0 1 0 28 0 a14 14 0 1 0 -28 0" stroke="#2997ff" width={3} delay={1.1} duration={0.8} />
    </svg>
  )
}
export function DoodleHome({ className = '', color = '#fff' }) {
  return (
    <svg viewBox="0 0 80 80" className={className} fill="none" aria-hidden="true">
      <Draw d="M8 42 L40 12 L72 42 M16 38 V72 H64 V38" stroke={color} width={2.6} delay={0.1} duration={1.1} />
      <Draw d="M33 72 V54 H47 V72" stroke="#2997ff" width={3} delay={1.2} duration={0.6} />
    </svg>
  )
}

/* A speech bubble with a question mark, for the FAQ heading */
export function DoodleAsk({ className = '' }) {
  return (
    <svg viewBox="0 0 110 100" className={className} fill="none" aria-hidden="true">
      <Draw d="M20 12 H88 a12 12 0 0 1 12 12 V58 a12 12 0 0 1 -12 12 H52 L30 90 V70 H20 a12 12 0 0 1 -12 -12 V24 a12 12 0 0 1 12 -12 Z" delay={0.1} duration={1.2} />
      <Draw d="M44 34 C44 24, 62 24, 62 34 C62 42, 54 42, 54 50" stroke={BLUE} width={4} delay={1.0} duration={0.7} />
      <Pop delay={1.7}><circle cx="54" cy="59" r="3.2" fill={BLUE} /></Pop>
    </svg>
  )
}

/* Closing call-to-action drawings, in white line work on black */
export function CtaPlane({ className = '' }) {
  return (
    <svg viewBox="0 0 200 140" className={className} fill="none" aria-hidden="true">
      <Draw d="M110 44 L190 14 L162 100 L140 76 Z M140 76 L190 14 M140 76 L138 102 L152 88" stroke="#fff" width={3} delay={0.2} duration={1.4} />
      <Draw d="M8 118 C 40 90, 70 112, 100 80" stroke="#2997ff" width={2.6} dash="2 9" delay={1.2} duration={1} />
    </svg>
  )
}
export function CtaChat({ className = '' }) {
  return (
    <svg viewBox="0 0 170 130" className={className} fill="none" aria-hidden="true">
      <Draw d="M30 14 H140 a14 14 0 0 1 14 14 V72 a14 14 0 0 1 -14 14 H80 L52 112 V86 H30 a14 14 0 0 1 -14 -14 V28 a14 14 0 0 1 14 -14 Z" stroke="#fff" width={3} delay={0.2} duration={1.4} />
      <Draw d="M60 50 L76 66 L110 34" stroke="#2997ff" width={5} delay={1.4} duration={0.7} />
    </svg>
  )
}

export { Draw, Pop, Label, INK, BLUE, TINT }

/* ── Plan drawings (one per plan) ─────────────────────────────── */
export function PlanSprout({ className = '', color = INK }) {
  return (
    <svg viewBox="0 0 80 80" className={className} fill="none" aria-hidden="true">
      <Draw d="M40 72 V40" stroke={color} width={3} delay={0.1} duration={0.6} />
      <Draw d="M40 54 C 24 54, 14 46, 14 30 C 30 30, 40 38, 40 54 Z" stroke={color} width={3} delay={0.6} duration={0.8} />
      <Draw d="M40 46 C 40 32, 50 22, 66 22 C 66 38, 56 48, 40 46 Z" stroke={BLUE} width={3} delay={1.0} duration={0.8} />
      <Draw d="M24 74 H56" stroke={color} width={3} delay={0.1} duration={0.4} />
    </svg>
  )
}
export function PlanPlane({ className = '', color = '#fff' }) {
  return (
    <svg viewBox="0 0 80 80" className={className} fill="none" aria-hidden="true">
      <Draw d="M10 40 L72 12 L58 68 L42 50 Z M42 50 L72 12 M42 50 L40 68 L50 58" stroke={color} width={3} delay={0.1} duration={1.1} />
      <Draw d="M8 66 C 18 54, 26 60, 34 48" stroke="#2997ff" width={2.6} dash="2 7" delay={1.0} duration={0.7} />
    </svg>
  )
}
export function PlanPencil({ className = '', color = INK }) {
  return (
    <svg viewBox="0 0 80 80" className={className} fill="none" aria-hidden="true">
      <Draw d="M14 66 L18 50 L52 16 L64 28 L30 62 Z M46 22 L58 34" stroke={color} width={3} delay={0.1} duration={1.1} />
      <Draw d="M14 66 L22 64" stroke={BLUE} width={4} delay={1.1} duration={0.3} />
      <Pop delay={1.3}><SparkleG x={56} y={2} s={0.9} /></Pop>
    </svg>
  )
}

/* A crescent moon with stars, white line work for dark panels */
export function MoonDoodle({ className = '' }) {
  return (
    <svg viewBox="0 0 140 110" className={className} fill="none" aria-hidden="true">
      <Draw d="M62 14 C 38 16, 20 38, 26 64 C 32 90, 62 102, 86 90 C 62 84, 50 58, 60 34 C 62 26, 62 20, 62 14 Z" stroke="#fff" width={3} delay={0.2} duration={1.2} />
      <Pop delay={1.2}><SparkleG x={96} y={14} s={1} color="#2997ff" /></Pop>
      <Pop delay={1.5}><SparkleG x={118} y={52} s={0.6} color="#fff" /></Pop>
    </svg>
  )
}

/* ── Contact drawings ─────────────────────────────────────────── */
export function DoodleMail({ className = '' }) {
  return (
    <svg viewBox="0 0 80 80" className={className} fill="none" aria-hidden="true">
      <Draw d="M10 22 H70 a4 4 0 0 1 4 4 V58 a4 4 0 0 1 -4 4 H10 a4 4 0 0 1 -4 -4 V26 a4 4 0 0 1 4 -4 Z" delay={0.1} duration={1} />
      <Draw d="M8 26 L40 46 L72 26" stroke={BLUE} width={3} delay={1.0} duration={0.6} />
      <Pop delay={1.5}><SparkleG x={58} y={4} s={0.8} /></Pop>
    </svg>
  )
}
export function DoodlePin({ className = '' }) {
  return (
    <svg viewBox="0 0 80 80" className={className} fill="none" aria-hidden="true">
      <Draw d="M40 72 C 22 52, 16 42, 16 32 C 16 18, 27 8, 40 8 C 53 8, 64 18, 64 32 C 64 42, 58 52, 40 72 Z" delay={0.1} duration={1.1} />
      <Pop delay={1.1}><circle cx="40" cy="32" r="8" fill={BLUE} /></Pop>
    </svg>
  )
}
