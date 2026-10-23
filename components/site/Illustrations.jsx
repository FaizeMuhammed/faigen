'use client'
import { motion } from 'framer-motion'

/* ────────────────────────────────────────────────────────────────
   Hand-drawn illustrations in Faigen's colors: ink, white, blue.
   Loose, rounded line work with soft color blobs behind it — the same
   node-and-line language as the Faigen logo. All drawing animations
   play once, when scrolled into view.
   ──────────────────────────────────────────────────────────────── */

const INK = '#1d1d1f'
const BLUE = '#0071e3'
const TINT = '#dcebff'

const ease = [0.22, 1, 0.36, 1]

// A line that draws itself when it scrolls into view
function Draw({ d, stroke = INK, width = 2.6, delay = 0, duration = 1.1, fill = 'none', dash, opacity = 1 }) {
  return (
    <motion.path
      d={d} fill={fill} stroke={stroke} strokeWidth={width} strokeLinecap="round" strokeLinejoin="round" strokeDasharray={dash} opacity={opacity}
      initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} viewport={{ once: true, amount: 0.4 }}
      transition={{ duration, delay, ease }}
    />
  )
}

// A shape that gently fades in
function Pop({ children, delay = 0 }) {
  return (
    <motion.g initial={{ opacity: 0, scale: 0.92 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.7, delay, ease }} style={{ transformBox: 'fill-box', transformOrigin: 'center' }}>
      {children}
    </motion.g>
  )
}

/* ── Small decorations ─────────────────────────────────────────── */

// Hand-drawn underline for a headline word
export function Squiggle({ className = '', color = BLUE, delay = 0.9 }) {
  return (
    <svg viewBox="0 0 240 22" className={className} fill="none" aria-hidden="true" preserveAspectRatio="none">
      <motion.path
        d="M4 13 C34 5, 62 19, 98 10 S168 5, 236 11" stroke={color} strokeWidth="5" strokeLinecap="round"
        initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 1.1, delay, ease }}
      />
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

/* ── Channels → Faigen → outcomes (echoes the logo's nodes and lines) ── */
export function NetworkDiagram({ className = '' }) {
  const left = [['WhatsApp', 62], ['Instagram', 180], ['Website', 298]]
  const right = [['Orders', 62], ['Answers', 180], ['Follow-ups', 298]]
  return (
    <svg viewBox="0 0 560 360" className={className} fill="none" role="img" aria-label="Customers on WhatsApp, Instagram and your website flow into Faigen, which produces orders, answers and follow-ups">
      {/* lines in */}
      {left.map(([, y], i) => (
        <Draw key={'l' + i} d={`M118 ${y} C 190 ${y}, 200 180, 244 180`} stroke="rgba(255,255,255,.55)" width={2.2} delay={0.2 + i * 0.15} duration={1.2} />
      ))}
      {/* lines out */}
      {right.map(([, y], i) => (
        <Draw key={'r' + i} d={`M316 180 C 360 180, 370 ${y}, 442 ${y}`} stroke="rgba(255,255,255,.55)" width={2.2} delay={0.9 + i * 0.15} duration={1.2} />
      ))}

      {/* moving dots (hidden for reduced motion via CSS) */}
      {left.map(([, y], i) => (
        <circle key={'dl' + i} r="3.4" fill="#2997ff" className="flow-dot">
          <animateMotion dur="3.6s" begin={`${i * 0.9}s`} repeatCount="indefinite" path={`M118 ${y} C 190 ${y}, 200 180, 244 180`} />
        </circle>
      ))}
      {right.map(([, y], i) => (
        <circle key={'dr' + i} r="3.4" fill="#2997ff" className="flow-dot">
          <animateMotion dur="3.6s" begin={`${1.4 + i * 0.9}s`} repeatCount="indefinite" path={`M316 180 C 360 180, 370 ${y}, 442 ${y}`} />
        </circle>
      ))}

      {/* left nodes */}
      {left.map(([label, y], i) => (
        <Pop key={label} delay={0.1 + i * 0.12}>
          <circle cx="86" cy={y} r="30" fill="#1d1d1f" stroke="rgba(255,255,255,.55)" strokeWidth="2.2" />
          <path d={`M74 ${y - 7} h24 a4 4 0 0 1 4 4 v9 a4 4 0 0 1 -4 4 h-12 l-7 6 v-6 h-5 a4 4 0 0 1 -4 -4 v-9 a4 4 0 0 1 4 -4 z`} stroke="#fff" strokeWidth="2" strokeLinejoin="round" />
          <text x="86" y={y + 50} textAnchor="middle" fill="rgba(255,255,255,.75)" fontSize="13.5" fontFamily="inherit">{label}</text>
        </Pop>
      ))}

      {/* center: the agent */}
      <Pop delay={0.5}>
        <circle cx="280" cy="180" r="62" fill="#0071e3" opacity="0.18" />
        <circle cx="280" cy="180" r="44" fill="#0071e3" />
        <path d="M262 168 C262 158 270 152 280 152 H288 C298 152 306 158 306 168 V184 C306 194 298 200 288 200 H279 L268 210 V200 C264 198 262 192 262 184 Z" fill="#fff" />
        <circle cx="276" cy="176" r="2.6" fill="#0071e3" /><circle cx="291" cy="176" r="2.6" fill="#0071e3" />
        <path d="M274 186 C279 191 288 191 293 186" stroke="#0071e3" strokeWidth="2.4" strokeLinecap="round" />
        <text x="280" y="268" textAnchor="middle" fill="#fff" fontSize="15" fontWeight="600" fontFamily="inherit">Faigen</text>
      </Pop>

      {/* right nodes */}
      {right.map(([label, y], i) => (
        <Pop key={label} delay={1.1 + i * 0.12}>
          <circle cx="474" cy={y} r="30" fill="#fff" />
          <path d={`M462 ${y} l8 8 l16 -17`} stroke="#0071e3" strokeWidth="3.6" strokeLinecap="round" strokeLinejoin="round" />
          <text x="474" y={y + 50} textAnchor="middle" fill="rgba(255,255,255,.75)" fontSize="13.5" fontFamily="inherit">{label}</text>
        </Pop>
      ))}
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
