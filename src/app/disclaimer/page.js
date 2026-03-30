import Header from '@/components/Header'
import Footer from '@/components/Footer'

export const metadata = {
  title: 'Disclaimer | Compare Farm Insurance Australia',
  description: 'Disclaimer for comparefarminsurance.com.au — important information about our referral service.',
}

export default function DisclaimerPage() {
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
            }}>Disclaimer</h1>
            <p style={{ color: 'rgba(255,255,255,0.65)', marginTop: '12px', fontSize: '15px' }}>
              Last updated: March 2025
            </p>
          </div>
        </div>

        <div style={{ maxWidth: '760px', margin: '0 auto', padding: '60px 5%' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '32px', fontSize: '16px', lineHeight: 1.75, color: 'var(--text)' }}>

            <section>
              <h2 style={{ fontFamily: "'Fraunces', serif", fontSize: '22px', marginBottom: '12px', color: 'var(--green)' }}>Not a financial adviser</h2>
              <p>Compare Farm Insurance is a referral and matching service. We are not a licensed insurance broker, underwriting agency, or financial adviser. Nothing on this site constitutes financial advice, and we are not authorised to provide personal financial product advice under the Corporations Act 2001.</p>
              <p style={{ marginTop: '12px' }}>Before making any insurance decision, you should consider your own circumstances and seek independent advice from a licensed professional.</p>
            </section>

            <section>
              <h2 style={{ fontFamily: "'Fraunces', serif", fontSize: '22px', marginBottom: '12px', color: 'var(--green)' }}>General information only</h2>
              <p>All content on this site — including guide articles, FAQ answers, broker descriptions, and quiz results — is general in nature. It is not tailored to your individual circumstances and should not be relied upon as the sole basis for any insurance or financial decision.</p>
              <p style={{ marginTop: '12px' }}>Information about insurance products, coverage types, and premiums is subject to change. We aim to keep content accurate and up to date but make no guarantee of accuracy at any given time.</p>
            </section>

            <section>
              <h2 style={{ fontFamily: "'Fraunces', serif", fontSize: '22px', marginBottom: '12px', color: 'var(--green)' }}>Referral relationships</h2>
              <p>Compare Farm Insurance receives referral fees from insurance brokers when users make contact through this site. This is how the site is funded. These commercial relationships do not influence the order or content of broker matches — ranking is determined solely by the fit between your quiz answers and each broker&apos;s stated specialisations.</p>
              <p style={{ marginTop: '12px' }}>The brokers listed on this site are independent businesses. We do not represent, endorse, or guarantee the services of any broker, and we are not party to any arrangement between you and a broker.</p>
            </section>

            <section>
              <h2 style={{ fontFamily: "'Fraunces', serif", fontSize: '22px', marginBottom: '12px', color: 'var(--green)' }}>Third party sites</h2>
              <p>This site contains links to third party websites including broker websites. We are not responsible for the content, accuracy, or practices of any third party site. Following a link to another site is at your own risk.</p>
            </section>

            <section>
              <h2 style={{ fontFamily: "'Fraunces', serif", fontSize: '22px', marginBottom: '12px', color: 'var(--green)' }}>No warranty</h2>
              <p>This site is provided on an &ldquo;as is&rdquo; basis without any warranty of any kind. We do not warrant that the site will be uninterrupted, error-free, or free of viruses or other harmful components.</p>
            </section>

            <section>
              <h2 style={{ fontFamily: "'Fraunces', serif", fontSize: '22px', marginBottom: '12px', color: 'var(--green)' }}>Contact</h2>
              <p>For any questions about this disclaimer, contact us at: <strong>hello@comparefarminsurance.com.au</strong></p>
            </section>

          </div>
        </div>

      </main>
      <Footer />
    </>
  )
}