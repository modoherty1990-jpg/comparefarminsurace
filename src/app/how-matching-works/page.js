import Header from '@/components/Header'
import Footer from '@/components/Footer'

export const metadata = {
  title: 'How Matching Works | Compare Farm Insurance Australia',
  description: 'How our farm insurance broker matching algorithm works — what we score, how we rank, and why fit determines your results.',
}

export default function HowMatchingWorksPage() {
  return (
    <>
      <Header />
      <main style={{ paddingTop: '64px', background: 'var(--cream)' }}>

        <div style={{ background: 'var(--green)', padding: '60px 5%' }}>
          <div style={{ maxWidth: '760px' }}>
            <h1 style={{
              fontFamily: "'Fraunces', serif",
              color: 'white', fontSize: 'clamp(28px, 4vw, 42px)',
              fontWeight: 800, lineHeight: 1.1,
            }}>How the matching works</h1>
            <p style={{ color: 'rgba(255,255,255,0.75)', marginTop: '16px', fontSize: '17px', lineHeight: 1.7, maxWidth: '580px' }}>
              Our matching quiz scores every broker in our panel against your answers.
              Here&apos;s exactly how it works and what goes into your results.
            </p>
          </div>
        </div>

        <div style={{ maxWidth: '760px', margin: '0 auto', padding: '60px 5%' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '40px', fontSize: '16px', lineHeight: 1.75, color: 'var(--text)' }}>

            <section>
              <h2 style={{ fontFamily: "'Fraunces', serif", fontSize: '22px', marginBottom: '12px', color: 'var(--green)' }}>What we score</h2>
              <p>Every broker in our panel is tagged across five dimensions. When you complete the quiz, your answers are scored against each broker&apos;s tags. The brokers with the highest fit scores are shown as your top matches.</p>
              <p style={{ marginTop: '12px' }}>The five dimensions are:</p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', marginTop: '20px' }}>
                {[
                  { dim: 'Farm type', weight: '35%', desc: 'The most important factor. A broker who specialises in your type of farming — cropping, dairy, viticulture, hobby, poultry — will understand your risks far better than a generalist. If a broker doesn\'t cover your farm type at all, they\'re excluded from your results entirely.' },
                  { dim: 'Location', weight: '20%', desc: 'Your state determines natural peril exposure — bushfire ratings, flood zones, hail corridors — and which brokers have local offices and regional knowledge close to you. Some brokers have particularly strong presences in specific states.' },
                  { dim: 'Farm scale', weight: '20%', desc: 'A hobby farm needs a simple packaged policy. A large commercial operation needs a broker who can negotiate complex bespoke terms across multiple insurers. Matching you to the right tier means you\'ll be properly serviced.' },
                  { dim: 'Coverage needs', weight: '15%', desc: 'We score how many of your selected coverage needs a broker can actually service — from livestock and machinery through to multi-peril crop insurance, wine spoilage, and workers compensation.' },
                  { dim: 'Special features', weight: '10%', desc: 'Agistment, cellar doors, irrigation infrastructure, organic certification, and multiple properties all require specialist underwriting experience. Brokers with that experience get a scoring boost when you flag these features.' },
                ].map(({ dim, weight, desc }) => (
                  <div key={dim} style={{
                    background: 'var(--white)',
                    borderRadius: '10px',
                    padding: '20px 24px',
                    border: '1px solid var(--border)',
                    display: 'flex', gap: '16px',
                  }}>
                    <div style={{ flexShrink: 0 }}>
                      <div style={{
                        background: 'var(--green)', color: 'var(--amber)',
                        borderRadius: '8px', padding: '6px 12px',
                        fontSize: '13px', fontWeight: 700,
                        fontFamily: "'Fraunces', serif",
                        whiteSpace: 'nowrap',
                      }}>{weight}</div>
                    </div>
                    <div>
                      <strong style={{ display: 'block', marginBottom: '6px', color: 'var(--green)', fontSize: '15px' }}>{dim}</strong>
                      <p style={{ fontSize: '14px', color: 'var(--muted)', lineHeight: 1.65, margin: 0 }}>{desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            <section>
              <h2 style={{ fontFamily: "'Fraunces', serif", fontSize: '22px', marginBottom: '12px', color: 'var(--green)' }}>How we show results</h2>
              <p>Your top 3 brokers by fit score are shown. Each result includes a match percentage, a plain-English explanation of why that broker fits your farm, and their contact details so you can get in touch directly.</p>
              <p style={{ marginTop: '12px' }}>Showing 3 results rather than one means you can compare options and choose the broker you feel most comfortable talking to.</p>
            </section>

            <section>
              <h2 style={{ fontFamily: "'Fraunces', serif", fontSize: '22px', marginBottom: '12px', color: 'var(--green)' }}>What doesn&apos;t affect your results</h2>
              <p>Brokers cannot pay to rank higher in your results. The matching score is calculated purely from the fit between your quiz answers and each broker&apos;s tagged specialisations.</p>
              <p style={{ marginTop: '12px' }}>Compare Farm Insurance receives referral fees from brokers when users make contact through the site. This is how the site is funded — but it has no influence on which brokers appear in your results or in what order.</p>
            </section>

            <section>
              <h2 style={{ fontFamily: "'Fraunces', serif", fontSize: '22px', marginBottom: '12px', color: 'var(--green)' }}>How brokers are added to the panel</h2>
              <p>Every broker in our panel has been individually researched. We review their stated specialisations, farm types covered, state coverage, and product range before tagging them in our system. We prioritise specialist agricultural brokers and underwriting agencies over generalist call centres.</p>
              <p style={{ marginTop: '12px' }}>We do not list every broker in Australia — we list the ones we believe will genuinely serve farmers well across different enterprise types and scales.</p>
            </section>

            <section style={{
              background: 'var(--cream-dark)',
              borderRadius: '12px',
              padding: '28px',
              border: '1px solid var(--border)',
            }}>
              <h2 style={{ fontFamily: "'Fraunces', serif", fontSize: '20px', marginBottom: '12px', color: 'var(--green)' }}>Ready to get matched?</h2>
              <p style={{ marginBottom: '20px' }}>The quiz takes about 90 seconds. No personal details needed to see your results.</p>
              <a href="/#quiz" style={{
                display: 'inline-flex', alignItems: 'center', gap: '8px',
                background: 'var(--green)', color: 'white',
                padding: '13px 24px', borderRadius: '8px',
                fontSize: '15px', fontWeight: 600, textDecoration: 'none',
                fontFamily: "'DM Sans', sans-serif",
              }}>
                Take the quiz &rarr;
              </a>
            </section>

          </div>
        </div>

      </main>
      <Footer />
    </>
  )
}