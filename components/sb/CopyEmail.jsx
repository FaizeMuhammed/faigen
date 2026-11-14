'use client'

import { useState } from 'react'
import { Copy, Check } from 'lucide-react'

export default function CopyEmail({ email }) {
  const [copied, setCopied] = useState(false)
  const copy = async () => { try { await navigator.clipboard.writeText(email); setCopied(true); setTimeout(() => setCopied(false), 2000) } catch {} }
  return (
    <button type="button" onClick={copy} aria-label="Copy email" style={{ display: 'inline-flex', alignItems: 'center', gap: 6, height: 32, padding: '0 12px', borderRadius: 16, border: 0, background: '#f0eeeb', cursor: 'pointer', fontSize: 14, color: '#1a1a1a', fontFamily: 'inherit' }}>
      {copied ? <Check size={14} /> : <Copy size={14} />}{copied ? 'Copied' : 'Copy'}
    </button>
  )
}
