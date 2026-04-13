'use client'

export default function Hero() {
  return (
    <section style={{
      background: 'var(--green)',
      padding: '120px 5% 90px',
      position: 'relative',
      overflow: 'hidden',
      minHeight: '520px',
      display: 'flex',
      alignItems: 'center',
    }}>

      {/* Background photo */}
      <img
        src="/hero-farm.jpg"
        alt=""
        style={{
          position: 'absolute',
          inset: 0,
          width: '100%',
          height: '100%',
          objectFit: 'cover',
objectPosition: 'center bottom',        }}
      />

      {/* Dark overlay so text stays readable */}
      <div style={{
        position: 'absolute',
        inset: 0,
        background: 'linear-gradient(105deg, rgba(20,50,12,0.92) 0%, rgba(25,55,15,0.75) 48%, rgba(25,55,15,0.45) 100%)',
      }} />

      <div style={{ maxWidth: '660px', position: 'relative' }}>
        <div style={{
          display: 'inline-flex', alignItems: 'center', gap: '8px',
          background: 'rgba(201,162,39,0.15)',
          border: '1px solid rgba(201,162,39,0.3)',
          color: 'var(--amber)',
          padding: '6px 14px', borderRadius: '100px',
          fontSize: '12px', fontWeight: 600,
          letterSpacing: '1px', textTransform: 'uppercase',
          marginBottom: '24px',
        }}>
          Independent &nbsp;&middot;&nbsp; No sign-up required
        </div>

        <h1 style={{
          color: 'var(--white)',
          fontSize: 'clamp(34px, 5vw, 56px)',
          fontWeight: 800, marginBottom: '20px', lineHeight: 1.1,
          fontFamily: "'Fraunces', serif",
        }}>
          Find the right broker for{' '}
          <em style={{ fontStyle: 'italic', color: 'var(--amber)' }}>your</em>{' '}
          farm.
        </h1>

        <p style={{
          color: 'rgba(255,255,255,0.75)', fontSize: '18px',
          maxWidth: '520px', marginBottom: '36px', lineHeight: 1.7,
        }}>
          Answer 6 short questions about your operation and we&apos;ll match you with
          specialist farm insurance brokers who actually know your type of farming.
        </p>

        <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', alignItems: 'center' }}>
          <a href="#quiz" style={{
            display: 'inline-flex', alignItems: 'center', gap: '10px',
            background: 'var(--amber)', color: 'var(--green)',
            padding: '16px 32px', borderRadius: '8px',
            fontSize: '16px', fontWeight: 600, textDecoration: 'none',
            transition: 'background 0.2s',
            fontFamily: "'DM Sans', sans-serif",
          }}>
            Start the quiz &rarr;
          </a>
          <a href="#how" style={{
            display: 'inline-flex', alignItems: 'center', gap: '8px',
            background: 'transparent', color: 'rgba(255,255,255,0.7)',
            padding: '16px 24px', borderRadius: '8px',
            fontSize: '15px', fontWeight: 500, textDecoration: 'none',
            border: '1px solid rgba(255,255,255,0.2)',
            fontFamily: "'DM Sans', sans-serif",
          }}>
            How it works
          </a>
        </div>

        <div style={{
          display: 'flex', gap: '48px',
          marginTop: '48px', paddingTop: '40px',
          borderTop: '1px solid rgba(255,255,255,0.1)',
          flexWrap: 'wrap',
        }}>
          {[
            { val: '6', label: 'Questions to match' },
            { val: '15+', label: 'Specialist brokers' },
            { val: '100%', label: 'Free to use' },
          ].map(({ val, label }) => (
            <div key={label}>
              <span style={{
                fontFamily: "'Fraunces', serif",
                fontSize: '32px', fontWeight: 700,
                color: 'var(--amber)', display: 'block',
              }}>{val}</span>
              <span style={{
                fontSize: '13px', color: 'rgba(255,255,255,0.55)',
                display: 'block', marginTop: '2px',
              }}>{label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}