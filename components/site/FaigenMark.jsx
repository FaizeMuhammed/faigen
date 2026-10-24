// The Faigen mark, traced from the logo: an "f" whose branches end in four hollow nodes.
// Coordinates are in the logo's own space (about x 141–369, y 109–361).
function MarkShapes({ stroke, nodeFill, width = 18 }) {
  return (
    <g fill="none" stroke={stroke} strokeWidth={width} strokeLinecap="round" strokeLinejoin="round">
      <path d="M185 352 V195 C185 145 220 115 270 118 C285 119 296 125 303 136" />
      <path d="M150 262 C175 262 190 266 205 258 L254 220" />
      <path d="M293 217 H318" />
      <path d="M185 338 C192 352 217 352 234 330 L247 313" />
      <circle cx="305" cy="157" r="21" fill={nodeFill} />
      <circle cx="273" cy="217" r="21" fill={nodeFill} />
      <circle cx="339" cy="217" r="21" fill={nodeFill} />
      <circle cx="261" cy="295" r="21" fill={nodeFill} />
    </g>
  )
}

const BLUE = '#0071e3'

// Round avatar / favicon: white mark on a blue circle. variant "chat": the mark inside a chat bubble.
export default function FaigenMark({ variant = 'circle', className = '' }) {
  return (
    <svg viewBox="0 0 64 64" className={className} aria-hidden="true">
      {variant === 'chat' ? (
        <>
          <path d="M12 4 H52 a8 8 0 0 1 8 8 V38 a8 8 0 0 1 -8 8 H31 L16 60 V46 H12 a8 8 0 0 1 -8 -8 V12 a8 8 0 0 1 8 -8 Z" fill={BLUE} />
          <g transform="translate(2.7 -2) scale(.115)"><MarkShapes stroke="#fff" nodeFill={BLUE} /></g>
        </>
      ) : (
        <>
          <circle cx="32" cy="32" r="32" fill={BLUE} />
          <g transform="translate(-6.25 -3.25) scale(.15)"><MarkShapes stroke="#fff" nodeFill={BLUE} /></g>
        </>
      )}
    </svg>
  )
}

// The brand lockup for the menu and footer: the mark with blue nodes, then the original wordmark.
export function FaigenLogo({ className = '', dark = false }) {
  return (
    <span className={`relative inline-block h-7 w-[81px] shrink-0 ${className}`} role="img" aria-label="Faigen">
      <svg viewBox="141 109 228 252" className="absolute" style={{ left: '2.6px', top: '2.9px', width: '17.7px', height: '20.6px' }} aria-hidden="true">
        <MarkShapes stroke={dark ? '#fff' : '#1d1d1f'} nodeFill={BLUE} width={22} />
      </svg>
      <img src="/wordmark.png" alt="" className={`absolute ${dark ? 'invert' : ''}`} style={{ left: '22.7px', top: '6.9px', width: '53.6px', height: 'auto' }} />
    </span>
  )
}

export function WhatsAppGlyph({ className = '' }) {
  return (
    <svg viewBox="0 0 32 32" className={className} aria-hidden="true">
      <circle cx="16" cy="16" r="16" fill="#25d366" />
      <path d="M16 7.5a8.5 8.5 0 0 0-7.3 12.8L7.6 24.4l4.2-1.1A8.5 8.5 0 1 0 16 7.5Z" fill="none" stroke="#fff" strokeWidth="1.8" strokeLinejoin="round" />
      <path d="M12.8 12.6c.3-.5.8-.5 1-.2l.9 1.6c.1.3 0 .6-.2.8l-.5.5c.6 1.2 1.5 2 2.7 2.7l.6-.6c.2-.2.5-.3.8-.1l1.6.9c.3.2.3.7-.1 1.2-.7.9-1.7 1.1-2.9.6-2.3-.9-4.1-2.7-4.9-5-.2-.9.1-1.7.5-2.4Z" fill="#fff" />
    </svg>
  )
}

export function InstagramGlyph({ className = '' }) {
  return (
    <svg viewBox="0 0 32 32" className={className} aria-hidden="true">
      <defs>
        <linearGradient id="ig-g" x1="0" y1="1" x2="1" y2="0">
          <stop offset="0" stopColor="#feda75" /><stop offset=".35" stopColor="#fa7e1e" /><stop offset=".65" stopColor="#d62976" /><stop offset="1" stopColor="#4f5bd5" />
        </linearGradient>
      </defs>
      <rect width="32" height="32" rx="9" fill="url(#ig-g)" />
      <rect x="8" y="8" width="16" height="16" rx="5" fill="none" stroke="#fff" strokeWidth="1.9" />
      <circle cx="16" cy="16" r="3.8" fill="none" stroke="#fff" strokeWidth="1.9" />
      <circle cx="20.6" cy="11.4" r="1.1" fill="#fff" />
    </svg>
  )
}
