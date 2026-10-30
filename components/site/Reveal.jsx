// Kept as a thin wrapper so every page's markup stays the same, but content is
// visible immediately on load — no scroll-triggered fade or rise.
export default function Reveal({ children, className = '', as: Comp = 'div' }) {
  return <Comp className={className}>{children}</Comp>
}
