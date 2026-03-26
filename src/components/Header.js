'use client'
import { useState, useEffect } from 'react'
import Logo from './Logo'

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handler)
    return () => window.removeEventListener('scroll', handler)
  }, [])

  const links = [
    { label: 'How It Works', href: '#how' },
    { label: 'FAQ', href: '#faq' },
    { label: 'Guides', href: '/guides' },
    { label: 'Brokers', href: '/brokers' }
  ]

  return (
    <>
      <nav style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
        background: scrolled ? 'rgba(30,61,20,0.98)' : 'rgba(30,61,20,0.94)',
        backdropFilter: 'blur(16px)',
        borderBottom: '1px solid rgba(255,255,255,0.08)',
        padding: '0 5%',
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        height: '64px',
        transition: 'background 0.3s',
      }}>

        <a href="/" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center' }}>
<Logo variant="dark" height={52} />
        </a>

        <ul className="desktop-nav" style={{
          display: 'flex', gap: '2rem', listStyle: 'none',
          margin: 0, padding: 0,
        }}>
          {links.map(link => (
            <li key={link.label}>
              <a href={link.href} style={{
                color: 'rgba(255,255,255,0.8)', textDecoration: 'none',
                fontSize: '0.875rem', fontWeight: 500,
                transition: 'color 0.2s',
              }}
              onMouseEnter={e => e.target.style.color = '#c9a227'}
              onMouseLeave={e => e.target.style.color = 'rgba(255,255,255,0.8)'}
              >{link.label}</a>
            </li>
          ))}
        </ul>

        <a href="#quiz" className="desktop-cta" style={{
          background: '#c9a227',
          color: '#1e3d14',
          padding: '9px 20px',
          borderRadius: '6px',
          fontSize: '0.875rem',
          fontWeight: 600,
          textDecoration: 'none',
          transition: 'background 0.2s',
          fontFamily: "'DM Sans', sans-serif",
        }}
        onMouseEnter={e => e.target.style.background = '#e8bc45'}
        onMouseLeave={e => e.target.style.background = '#c9a227'}
        >
          Find a Broker
        </a>

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="hamburger"
          style={{
            background: 'transparent', border: 'none',
            cursor: 'pointer', padding: '8px',
            display: 'flex', flexDirection: 'column',
            gap: '5px',
          }}
          aria-label="Toggle menu"
        >
          <span style={{
            display: 'block', width: '22px', height: '2px',
            background: '#ffffff', borderRadius: '2px',
            transition: 'all 0.3s',
            transform: menuOpen ? 'rotate(45deg) translate(5px, 5px)' : 'none',
          }} />
          <span style={{
            display: 'block', width: '22px', height: '2px',
            background: '#ffffff', borderRadius: '2px',
            transition: 'all 0.3s',
            opacity: menuOpen ? 0 : 1,
          }} />
          <span style={{
            display: 'block', width: '22px', height: '2px',
            background: '#ffffff', borderRadius: '2px',
            transition: 'all 0.3s',
            transform: menuOpen ? 'rotate(-45deg) translate(5px, -5px)' : 'none',
          }} />
        </button>

      </nav>

      {menuOpen && (
        <div style={{
          position: 'fixed', top: '64px', left: 0, right: 0,
          background: '#1e3d14',
          borderBottom: '1px solid rgba(255,255,255,0.08)',
          zIndex: 99,
          padding: '1.5rem 5%',
          display: 'flex', flexDirection: 'column',
        }}>
          {links.map(link => (
            <a key={link.label} href={link.href}
              onClick={() => setMenuOpen(false)}
              style={{
                color: 'rgba(255,255,255,0.8)', textDecoration: 'none',
                fontSize: '1rem', fontWeight: 500,
                padding: '1rem 0',
                borderBottom: '1px solid rgba(255,255,255,0.06)',
              }}
            >{link.label}</a>
          ))}
          <a href="#quiz"
            style={{
              marginTop: '1.5rem', textAlign: 'center',
              background: '#c9a227', color: '#1e3d14',
              padding: '14px 28px', borderRadius: '8px',
              fontWeight: 600, textDecoration: 'none',
              fontFamily: "'DM Sans', sans-serif",
            }}
            onClick={() => setMenuOpen(false)}
          >
            Find a Broker
          </a>
        </div>
      )}

      <style>{`
        .desktop-nav { display: flex !important; }
        .desktop-cta { display: inline-block !important; }
        .hamburger { display: none !important; }

        @media (max-width: 767px) {
          .desktop-nav { display: none !important; }
          .desktop-cta { display: none !important; }
          .hamburger { display: flex !important; }
        }
      `}</style>
    </>
  )
}