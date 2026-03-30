'use client'
import { useState, useEffect } from 'react'
import { supabase } from '../lib/supabase'

export default function GuidesContent() {
  const [guides, setGuides] = useState([])

  useEffect(() => {
    async function fetchGuides() {
      const { data } = await supabase
        .from('farm_guides')
        .select('slug, title, description, category')
        .eq('published', true)
        .order('created_at', { ascending: false })
      if (data) setGuides(data)
    }
    fetchGuides()
  }, [])

  const grouped = guides.reduce((acc, guide) => {
    const cat = guide.category || 'General guides'
    if (!acc[cat]) acc[cat] = []
    acc[cat].push(guide)
    return acc
  }, {})

  return (
    <section style={{ maxWidth: '900px', margin: '0 auto', padding: '80px 5%' }}>
      <span className="section-label">Resources</span>
      <h1 style={{
        fontFamily: "'Fraunces', serif",
        fontSize: 'clamp(28px, 4vw, 42px)',
        fontWeight: 800, lineHeight: 1.1,
        marginBottom: '16px', color: 'var(--green)',
      }}>
        Farm insurance guides
      </h1>
      <p style={{ color: 'var(--muted)', fontSize: '17px', lineHeight: 1.7, maxWidth: '540px', marginBottom: '56px' }}>
        Plain English guides to farm insurance in Australia. Written for farmers, not lawyers.
      </p>

      {guides.length === 0 && (
        <p style={{ color: 'var(--muted)', fontSize: '15px' }}>Guides coming soon.</p>
      )}

      {Object.entries(grouped).map(([category, items]) => (
        <div key={category} style={{ marginBottom: '48px' }}>
          <h2 style={{
            fontSize: '11px', fontWeight: 600,
            letterSpacing: '2.5px', textTransform: 'uppercase',
            color: 'var(--green-light)', marginBottom: '20px',
          }}>{category}</h2>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
            gap: '16px',
          }}>
            {items.map(guide => (
              <a key={guide.slug} href={`/guides/${guide.slug}`} style={{
                background: 'var(--white)',
                border: '1px solid var(--border)',
                borderRadius: '12px',
                padding: '24px',
                textDecoration: 'none',
                display: 'block',
                transition: 'border-color 0.2s, box-shadow 0.2s',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.borderColor = 'var(--green)'
                e.currentTarget.style.boxShadow = 'var(--shadow)'
              }}
              onMouseLeave={e => {
                e.currentTarget.style.borderColor = 'var(--border)'
                e.currentTarget.style.boxShadow = 'none'
              }}
              >
                <div style={{
                  fontWeight: 600, fontSize: '15px',
                  color: 'var(--green)', marginBottom: '6px',
                  fontFamily: "'Fraunces', serif",
                }}>{guide.title}</div>
                <div style={{
                  fontSize: '13px', color: 'var(--muted)', lineHeight: 1.6,
                }}>{guide.description}</div>
                <div style={{
                  fontSize: '13px', color: 'var(--amber)',
                  marginTop: '12px', fontWeight: 600,
                }}>Read guide &rarr;</div>
              </a>
            ))}
          </div>
        </div>
      ))}
    </section>
  )
}