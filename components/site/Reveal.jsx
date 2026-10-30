'use client'
import { motion } from 'framer-motion'

// Fade + rise on scroll. Plays once. (Reduced-motion users get a plain fade via <MotionProvider>.)
export default function Reveal({ children, delay = 0, y = 14, className = '', as = 'div', amount = 0.2 }) {
  const Comp = motion[as] || motion.div
  return (
    <Comp
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount, margin: '0px 0px -4% 0px' }}
      transition={{ duration: 0.55, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </Comp>
  )
}
