'use client'
import { useEffect, useState } from 'react'
import { SparkleG } from './Illustrations'

/* ────────────────────────────────────────────────────────────────
   Hero scene: a shopper walks in from the right pushing the trolley,
   stops in the middle, looks left and right while customers' messages
   arrive, then walks off to the left. One 13-second loop, driven by
   SVG animation so every part stays in step.
   ──────────────────────────────────────────────────────────────── */

const INK = '#1d1d1f'
const BLUE = '#0071e3'
const TINT = '#dcebff'
const HAND = { fontFamily: 'var(--font-hand), cursive', fontWeight: 600 }

const T = 13 // seconds per loop
const ENTER = 3.6 // walks in until here
const LEAVE = 7.2 // starts walking off here
const GONE = 10.8 // off screen here
const FAR = 1500 // how far off-screen he starts and ends, in drawing units
const SHIFT = 49 // centres the shopper + trolley at rest

const kt = times => times.map(t => +(t / T).toFixed(4)).join(';')
const dur = `${T}s`

// Values that alternate between a and b with each step while walking, and rest at 0 otherwise
function walkSeries(a, b, h = 0.3) {
  const pts = [[0, 0]]
  ;[[0, ENTER], [LEAVE, GONE]].forEach(([from, to]) => {
    if (from !== 0) pts.push([from, 0])
    for (let t = from + h, k = 1; t < to - 0.01; t += h, k++) pts.push([+t.toFixed(2), k % 2 ? a : b])
    pts.push([to, 0])
  })
  pts.push([T, 0])
  return pts
}

function P({ d, width = 2.8, fill = 'none', stroke = INK, dash, opacity = 1 }) {
  return <path d={d} fill={fill} stroke={stroke} strokeWidth={width} strokeLinecap="round" strokeLinejoin="round" strokeDasharray={dash} opacity={opacity} />
}

// animateTransform / animate wrappers that vanish in the still version
function Move({ on, type, values, times, splines }) {
  if (!on) return null
  return (
    <animateTransform
      attributeName="transform" type={type} values={values} keyTimes={times} dur={dur} repeatCount="indefinite"
      {...(splines ? { calcMode: 'spline', keySplines: splines } : {})}
    />
  )
}
function Fade({ on, from }) {
  if (!on) return null
  return <animate attributeName="opacity" values="0;0;1;1;0;0" keyTimes={kt([0, from, from + 0.5, 6.9, 7.4, T])} dur={dur} repeatCount="indefinite" />
}

function Bubble({ on, from, d, line, label }) {
  return (
    <g opacity={on ? 0 : 1}>
      <Fade on={on} from={from} />
      <P d={line} width={2.2} dash="2 7" />
      <P d={d} fill="#fff" width={2.4} />
    </g>
  )
}

function Words({ on, from, x, y, rotate, children }) {
  return (
    <g opacity={on ? 0 : 1}>
      <Fade on={on} from={from} />
      <text x={x} y={y} fontSize="22" textAnchor="middle" fill={INK} style={HAND} transform={`rotate(${rotate} ${x} ${y})`}>{children}</text>
    </g>
  )
}

export default function HeroWalk({ className = '' }) {
  const [still, setStill] = useState(false)
  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)')
    const sync = () => setStill(mq.matches)
    sync()
    mq.addEventListener('change', sync)
    return () => mq.removeEventListener('change', sync)
  }, [])
  const on = !still

  const legA = walkSeries(16, -16), legB = walkSeries(-16, 16)
  const bob = walkSeries(-3, 0)
  const armBack = walkSeries(10, -10)
  const rot = pts => pts.map(([, v]) => `${v} 176 192`).join(';')
  const rotArm = pts => pts.map(([, v]) => `${v} 154 122`).join(';')
  const times = pts => kt(pts.map(p => p[0]))

  const travelTimes = kt([0, ENTER, LEAVE, GONE, T])
  const travelSplines = '0.16 0.6 0.3 1;0 0 1 1;0.7 0 0.84 0.4;0 0 1 1'
  const faceTimes = [0, ENTER, 3.9, 4.5, 5.0, 5.9, 6.5, LEAVE, GONE, T]
  const faceValues = [5, 5, 8, 8, -8, -8, 6, 5, 5, 5]

  return (
    <svg viewBox="0 0 760 330" className={className} fill="none" style={{ overflow: 'visible' }} role="img" aria-label="A person pushing a shopping trolley, with WhatsApp and Instagram chats inside, walks in, looks around while messages arrive, and walks off">
      <defs>
        <linearGradient id="walk-ig" x1="0" y1="1" x2="1" y2="0">
          <stop offset="0" stopColor="#feda75" /><stop offset=".35" stopColor="#fa7e1e" /><stop offset=".65" stopColor="#d62976" /><stop offset="1" stopColor="#4f5bd5" />
        </linearGradient>
      </defs>

      {/* soft color blob + a ground line that runs off both edges */}
      <path d="M58 196 C46 96 178 30 372 36 C576 42 706 104 698 212 C690 296 530 316 372 312 C214 308 70 288 58 196 Z" fill={TINT} opacity=".55" />
      <P d="M-1700 314 C-600 309 400 318 900 311 S1500 312 2400 313" width={2.4} />
      <SparkleG x={632} y={78} s={0.9} />
      <SparkleG x={92} y={168} s={0.8} />

      {/* everything that is drawn facing left is the right-facing drawing, mirrored */}
      <g transform="translate(760 0) scale(-1 1)">
        <g transform={`translate(${SHIFT} 0)`}>
          {/* messages that arrive while he stands in the middle */}
          <Bubble on={on} from={4.0} line="M236 74 C 252 88 268 100 288 112" d="M200 30 H250 a10 10 0 0 1 10 10 V52 a10 10 0 0 1 -10 10 H232 L222 72 V62 H200 a10 10 0 0 1 -10 -10 V40 a10 10 0 0 1 10 -10 Z" />
          <Bubble on={on} from={4.5} line="M560 56 C 540 78 520 98 498 118" d="M560 14 H604 a10 10 0 0 1 10 10 V36 a10 10 0 0 1 -10 10 H592 L602 56 L582 46 H560 a10 10 0 0 1 -10 -10 V24 a10 10 0 0 1 10 -10 Z" />
          <Bubble on={on} from={5.0} line="M646 124 C 620 132 580 140 540 146" d="M650 96 H692 a10 10 0 0 1 10 10 V118 a10 10 0 0 1 -10 10 H650 a10 10 0 0 1 -10 -10 V106 a10 10 0 0 1 10 -10 Z" />

          {/* the walker: trolley + shopper */}
          <g>
            <Move on={on} type="translate" values={`-${FAR} 0;0 0;0 0;${FAR} 0;${FAR} 0`} times={travelTimes} splines={travelSplines} />

            {/* the two chats riding in the trolley */}
            {/* logos are flipped back so they never appear mirrored */}
            <g transform="translate(704 0) scale(-1 1)"><g transform="rotate(-8 352 126)">
              <circle cx="352" cy="126" r="38" fill="#25d366" />
              <path d="M352 102a24 24 0 0 0-20.6 36.2l-3.1 11.5 11.8-3.1A24 24 0 1 0 352 102Z" stroke="#fff" strokeWidth="4.6" strokeLinejoin="round" />
              <path d="M343 115c1-1.4 2.3-1.4 2.8-.6l2.6 4.5c.3.8 0 1.7-.6 2.2l-1.4 1.4c1.7 3.4 4.2 5.6 7.6 7.6l1.7-1.7c.6-.6 1.4-.8 2.2-.3l4.5 2.5c.8.6.8 1.9-.3 3.3-2 2.5-4.7 3-8.1 1.7-6.5-2.5-11.5-7.6-13.8-14-.6-2.5.3-4.7 1-6.6Z" fill="#fff" />
            </g></g>
            <g transform="translate(896 0) scale(-1 1)"><g transform="rotate(7 448 122)">
              <rect x="412" y="86" width="72" height="72" rx="21" fill="url(#walk-ig)" />
              <rect x="428" y="102" width="40" height="40" rx="12" stroke="#fff" strokeWidth="4.6" />
              <circle cx="448" cy="122" r="9.5" stroke="#fff" strokeWidth="4.6" />
              <circle cx="460" cy="110" r="2.8" fill="#fff" />
            </g></g>

            {/* the trolley */}
            <P d="M270 152 C340 148 440 150 530 148 C520 178 504 212 494 242 C430 246 360 244 306 240 C292 212 280 180 270 152 Z" fill="#fff" />
            <P d="M312 150 L 326 242 M 356 150 L 360 244 M 400 150 V 245 M 446 150 L 442 244 M 490 149 L 474 243 M 282 184 C 360 188 440 186 516 182 M 296 214 C 370 218 440 216 504 212" width={1.8} opacity={0.38} />
            <P d="M240 138 C 252 140 262 142 274 146 L 308 240" />
            <P d="M322 242 V 284 M 484 242 V 284 M 316 284 C 380 286 440 284 494 284" />
            {[322, 484].map(cx => (
              <g key={cx}>
                <circle cx={cx} cy="298" r="14" fill="#fff" stroke={INK} strokeWidth="2.8" />
                <g>
                  <path d={`M${cx} 289 V307 M${cx - 9} 298 H${cx + 9}`} stroke={INK} strokeWidth="2" strokeLinecap="round" />
                  <Move on={on} type="rotate" values={`0 ${cx} 298;1080 ${cx} 298;1080 ${cx} 298;2160 ${cx} 298;2160 ${cx} 298`} times={travelTimes} splines={travelSplines} />
                </g>
              </g>
            ))}

            {/* the Faigen flag */}
            <P d="M300 146 V 40" width={2.6} />
            <path d="M300 42 C318 37 332 47 350 41 L350 66 C332 72 318 62 300 67 Z" fill={BLUE} stroke={INK} strokeWidth="2.4" strokeLinejoin="round">
              {on && <animate attributeName="d" dur="0.9s" repeatCount="indefinite" values="M300 42 C318 37 332 47 350 41 L350 66 C332 72 318 62 300 67 Z;M300 42 C318 47 332 37 350 43 L350 68 C332 64 318 74 300 67 Z;M300 42 C318 37 332 47 350 41 L350 66 C332 72 318 62 300 67 Z" />}
            </path>
            <circle cx="325" cy="54" r="6" fill="#fff" />

            {/* the shopper, walking */}
            <g>
              <Move on={on} type="rotate" values={rot(legA)} times={times(legA)} />
              <P d="M164 190 C160 228 152 262 146 298" />
              <P d="M132 302 C 140 298 150 298 156 301" />
            </g>
            <g>
              <Move on={on} type="rotate" values={rot(legB)} times={times(legB)} />
              <P d="M188 190 C 198 226 208 262 226 296" />
              <P d="M214 299 C 224 295 236 296 244 300" />
            </g>
            <g>
              <Move on={on} type="translate" values={bob.map(([, v]) => `0 ${v}`).join(';')} times={times(bob)} />
              <g>
                <Move on={on} type="rotate" values={rotArm(armBack)} times={times(armBack)} />
                <P d="M154 122 C 138 144 134 170 146 188" />
              </g>
              <path d="M150 112 C168 104 192 104 204 112 L 212 190 C 196 198 168 198 150 192 Z" fill={BLUE} stroke={INK} strokeWidth="2.6" strokeLinejoin="round" />
              <P d="M196 120 C 214 132 232 140 244 140 C 258 140 266 140 272 142" />
              <path d="M146 76 C 146 58 160 50 174 50 C 192 50 202 62 202 78 C 202 96 190 106 174 106 C 158 106 146 94 146 76 Z" fill="#fff" stroke={INK} strokeWidth="2.6" strokeLinejoin="round" />
              <P d="M148 66 C 156 44 188 40 200 62" width={3.4} />
              {/* eyes and smile slide to look around */}
              <g transform={on ? undefined : 'translate(5 0)'}>
                <Move on={on} type="translate" values={faceValues.map(v => `${v} 0`).join(';')} times={kt(faceTimes)} />
                <P d="M160 78 v 3 M 184 78 v 3" width={2.4} />
                <P d="M164 90 C 170 97 180 97 186 89" width={2.4} />
              </g>
            </g>
          </g>
        </g>
      </g>

      {/* the words, drawn the right way round */}
      <Words on={on} from={4.0} x={711 - 225} y={53} rotate={-2}>hi!</Words>
      <Words on={on} from={4.5} x={711 - 582} y={37} rotate={2}>price?</Words>
      <Words on={on} from={5.0} x={711 - 671} y={119} rotate={-2}>order</Words>
    </svg>
  )
}
