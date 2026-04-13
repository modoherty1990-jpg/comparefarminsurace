export default function HowItWorks() {
  const steps = [
    {
      num: '1',
      title: 'Tell us about your farm',
      body: 'Enterprise type, location, scale, and what you\'re looking to protect. Takes about 90 seconds. No personal details needed at this stage.',
    },
    {
      num: '2',
      title: 'We score and match',
      body: 'Your answers are scored across five dimensions — farm type, state, scale, coverage needs, and special features. Fit determines the ranking.',
    },
    {
      num: '3',
      title: 'Contact the right brokers',
      body: 'You get your top 3 matches with plain-English reasons why they fit your farm. You decide who to call. No pressure, no middlemen.',
    },
  ]

  return (
    <section id="how" style={{
      padding: '80px 5%',
      background: 'var(--cream-dark)',
    }}>
      <span className="section-label">How it works</span>
      <h2 className="section-title">Simple, fast, and actually useful.</h2>
      <p className="section-desc">
        Most farm insurance sites route you to a generic call centre. We match you
        to brokers who specialise in your type of farming.
      </p>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
        gap: '24px',
      }}>
        {steps.map((step, i) => (
          <div key={step.num} style={{
            background: 'var(--white)',
            borderRadius: '12px',
            padding: '32px',
            border: '1px solid var(--border)',
            position: 'relative',
          }}>
            <div style={{
              width: '42px', height: '42px',
              background: 'var(--green)',
              color: 'var(--amber)',
              borderRadius: '10px',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              fontFamily: "'Fraunces', serif",
              fontSize: '20px', fontWeight: 700,
              marginBottom: '20px',
            }}>{step.num}</div>
            <h3 style={{ fontSize: '19px', marginBottom: '10px' }}>{step.title}</h3>
            <p style={{ color: 'var(--muted)', fontSize: '15px', lineHeight: 1.65 }}>{step.body}</p>
            {i < steps.length - 1 && (
              <span style={{
                position: 'absolute', right: '-14px', top: '50%',
                transform: 'translateY(-50%)',
                color: 'var(--amber)', fontSize: '18px',
                fontWeight: 700, zIndex: 1,
              }} className="hide-mobile">&rarr;</span>
            )}
          </div>
        ))}
      </div>
    </section>
  )
}
