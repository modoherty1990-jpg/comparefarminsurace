'use client'
import { useState } from 'react'

export default function GuideFAQ({ faqs }) {
  const [open, setOpen] = useState(null)

  if (!faqs || faqs.length === 0) return null

  return (
    <div style={{ marginTop: '3.5rem' }}>
      <h2 style={{
        fontFamily: "'Fraunces', serif",
        fontSize: 'clamp(1.3rem, 2.5vw, 1.6rem)',
        fontWeight: 700,
        color: 'var(--green)',
        letterSpacing: '-0.02em',
        marginBottom: '1.25rem',
      }}>
        Common questions
      </h2>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
        {faqs.map((faq, idx) => (
          <div key={idx} style={{
            background: '#ffffff',
            border: '1px solid var(--border)',
            borderRadius: '8px',
            overflow: 'hidden',
          }}>
            <button
              onClick={() => setOpen(open === idx ? null : idx)}
              style={{
                width: '100%',
                textAlign: 'left',
                padding: '1rem 1.25rem',
                background: 'transparent',
                border: 'none',
                cursor: 'pointer',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                gap: '1rem',
              }}
            >
              <span style={{
                fontSize: '0.95rem',
                fontWeight: 600,
                color: 'var(--green)',
                lineHeight: 1.4,
                fontFamily: "'DM Sans', sans-serif",
              }}>
                {faq.q}
              </span>
              <span style={{
                color: 'var(--amber)',
                fontSize: '1.3rem',
                fontWeight: 400,
                flexShrink: 0,
                lineHeight: 1,
                transition: 'transform 0.2s',
                transform: open === idx ? 'rotate(45deg)' : 'rotate(0deg)',
                display: 'inline-block',
              }}>
                +
              </span>
            </button>

            {open === idx && (
              <div style={{
                padding: '0 1.25rem 1rem',
                fontSize: '0.92rem',
                color: 'var(--muted)',
                lineHeight: 1.75,
                fontFamily: "'DM Sans', sans-serif",
                borderTop: '1px solid var(--border)',
              }}>
                {faq.a}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}
