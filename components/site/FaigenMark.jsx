// The Faigen mark: the logo's "f" with its three hollow nodes.
// variant "a": white f on a blue circle. variant "c": white f on a black tile.
export default function FaigenMark({ variant = 'a', className = '' }) {
  const bg = variant === 'c' ? '#1d1d1f' : '#0071e3'
  return (
    <svg viewBox="0 0 64 64" className={className} aria-hidden="true">
      {variant === 'c' ? <rect width="64" height="64" rx="16" fill={bg} /> : <circle cx="32" cy="32" r="32" fill={bg} />}
      <g fill="none" stroke="#fff" strokeWidth="3.4" strokeLinecap="round" strokeLinejoin="round">
        <path d="M23 52 V29 C23 19 29 14 38 14" />
        <path d="M14 33 H24 C29 33 31 29 34 27.5" />
        <path d="M42.7 26 H45.8" />
        <path d="M23 52 C27 52 31 49 34 45" />
        <circle cx="43" cy="14.5" r="4.2" fill={bg} />
        <circle cx="38.5" cy="26" r="4.2" fill={bg} />
        <circle cx="50" cy="26" r="4.2" fill={bg} />
        <circle cx="38" cy="41.5" r="4.2" fill={bg} />
      </g>
    </svg>
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
