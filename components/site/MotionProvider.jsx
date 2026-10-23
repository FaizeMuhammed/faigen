'use client'
import { MotionConfig } from 'framer-motion'

// Site-wide: people who turned on "Reduce motion" get fades only — no movement.
export default function MotionProvider({ children }) {
  return <MotionConfig reducedMotion="user">{children}</MotionConfig>
}
