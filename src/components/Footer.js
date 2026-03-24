'use client'
import Logo from './Logo'

export default function Footer() {
  return (
    <footer style={{ background: '#1c1c1c', padding: '48px 5% 32px' }}>
      <div style={{
        display: 'flex', justifyContent: 'space-between',
        alignItems: 'flex-start', marginBottom: '40px',
        paddingBottom: '40px',
        borderBottom: '1px solid rgba(255,255,255,0.08)',
        flexWrap: 'wrap', gap: '32px',
      }}>
        <div>
          <Logo variant="dark" height={38} />
          <p style={{ color: 'rgba(255,255,255,0.4)', fontSize: '13px', marginTop: '8px' }}>
            Australia&apos;s farm insurance matching service
          </p>
        </div>

        <div style={{ display: 'flex', gap: '48px', flexWrap: 'wrap' }}>
          <div>
            <h4 style={{
              color: 'rgba(255,255,255,0.9)', fontSize: '12px',
              fontWeight: 600, textTransform: 'uppercase',
              letterSpacing: '1.5px', marginBottom: '14px',
              fontFamily: "'DM Sans', sans-serif",
            }}>Site</h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '10px' }}>
              {[
                { label: 'Find a broker', href: '#quiz' },
                { label: 'How it works', href: '#how' },
                { label: 'Broker directory', href: '#brokers' },
                { label: 'Guides', href: '/guides' },
                { label: 'FAQ', href: '#faq' },
              ].map(({ label, href }) => (
                <li key={label}>
                  <a href={href} style={{ color: 'rgba(255,255,255,0.45)', textDecoration: 'none', fontSize: '14px', transition: 'color 0.2s' }}
                    onMouseEnter={e => e.target.style.color = '#c9a227'}
                    onMouseLeave={e => e.target.style.color = 'rgba(255,255,255,0.45)'}
                  >{label}</a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 style={{
              color: 'rgba(255,255,255,0.9)', fontSize: '12px',
              fontWeight: 600, textTransform: 'uppercase',
              letterSpacing: '1.5px', marginBottom: '14px',
              fontFamily: "'DM Sans', sans-serif",
            }}>Legal</h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '10px' }}>
              {[
                { label: 'Privacy policy', href: '/privacy' },
                { label: 'Terms of use', href: '/terms' },
                { label: 'Disclaimer', href: '/disclaimer' },
                { label: 'How matching works', href: '/how-matching-works' },
              ].map(({ label, href }) => (
                <li key={label}>
                  <a href={href} style={{ color: 'rgba(255,255,255,0.45)', textDecoration: 'none', fontSize: '14px', transition: 'color 0.2s' }}
                    onMouseEnter={e => e.target.style.color = '#c9a227'}
                    onMouseLeave={e => e.target.style.color = 'rgba(255,255,255,0.45)'}
                  >{label}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div style={{ fontSize: '12px', color: 'rgba(255,255,255,0.3)' }}>
        &copy; {new Date().getFullYear()} Compare Farm Insurance Pty Ltd. All rights reserved.
      </div>

      <p style={{
        fontSize: '11px', color: 'rgba(255,255,255,0.25)',
        marginTop: '20px', lineHeight: 1.7, maxWidth: '760px',
      }}>
        Compare Farm Insurance is a referral service, not an insurance broker. We do not provide financial advice.
        Information on this site is general in nature and does not take into account your personal circumstances.
        Always read the relevant product disclosure statement before purchasing insurance.
        Referral fees may be received from brokers when you make contact through this site.
      </p>
    </footer>
  )
}
