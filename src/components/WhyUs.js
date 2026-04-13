export default function WhyUs() {
  const items = [
    {
      title: 'Broker-matched, not call-centre routed',
      body: 'We connect you with specialists who understand your enterprise — whether that\'s broadacre cropping, intensive dairy, winery cover, or a simple lifestyle block.',
    },
    {
      title: 'How the matching works',
      body: 'Your quiz answers are scored across five dimensions: farm type, location, scale, assets and coverage needs, and any special features. The top 3 brokers by fit score are shown. Fit determines the ranking.',
    },
    {
      title: 'No sign-up required',
      body: 'Use this tool at no cost, with no account needed. Browse your broker matches and contact them directly — you\'re always in control.',
    },
  ]

  return (
    <section id="why" style={{ background: 'var(--green)', padding: '70px 5%' }}>
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
        gap: '32px',
        maxWidth: '960px',
        margin: '0 auto',
      }}>
        {items.map(({ title, body }) => (
          <div key={title} style={{
            padding: '32px 24px',
            border: '1px solid rgba(255,255,255,0.1)',
            borderRadius: '12px',
          }}>
            <h3 style={{
              color: 'var(--amber)', fontSize: '18px',
              marginBottom: '12px', fontFamily: "'Fraunces', serif",
            }}>{title}</h3>
            <p style={{ color: 'rgba(255,255,255,0.65)', fontSize: '14px', lineHeight: 1.7 }}>{body}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
