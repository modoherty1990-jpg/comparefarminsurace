import Header from '@/components/Header'
import Footer from '@/components/Footer'

export const metadata = {
  title: 'Terms of Use | Compare Farm Insurance Australia',
  description: 'Terms of use for comparefarminsurance.com.au',
}

export default function TermsPage() {
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
            }}>Terms of Use</h1>
            <p style={{ color: 'rgba(255,255,255,0.65)', marginTop: '12px', fontSize: '15px' }}>
              Last updated: March 2025
            </p>
          </div>
        </div>

        <div style={{ maxWidth: '760px', margin: '0 auto', padding: '60px 5%' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '32px', fontSize: '16px', lineHeight: 1.75, color: 'var(--text)' }}>

            <section>
              <h2 style={{ fontFamily: "'Fraunces', serif", fontSize: '22px', marginBottom: '12px', color: 'var(--green)' }}>About this site</h2>
              <p>comparefarminsurance.com.au is operated by Compare Farm Insurance. By using this site you agree to these terms. If you do not agree, please do not use the site.</p>
            </section>

            <section>
              <h2 style={{ fontFamily: "'Fraunces', serif", fontSize: '22px', marginBottom: '12px', color: 'var(--green)' }}>What we do</h2>
              <p>Compare Farm Insurance is a referral and matching service. We match farmers with specialist farm insurance brokers based on the information provided in our quiz. We are not an insurance broker, underwriting agency, or financial adviser. We do not provide quotes, arrange cover, or give personal financial advice.</p>
            </section>

            <section>
              <h2 style={{ fontFamily: "'Fraunces', serif", fontSize: '22px', marginBottom: '12px', color: 'var(--green)' }}>Information on this site</h2>
              <p>The content on this site is general in nature and is intended for informational purposes only. It does not take into account your individual circumstances, financial situation, or insurance needs. You should always seek independent advice before making any insurance decision.</p>
              <p style={{ marginTop: '12px' }}>While we take care to keep information accurate and up to date, we make no warranty about the completeness, accuracy, or suitability of any content on this site.</p>
            </section>

            <section>
              <h2 style={{ fontFamily: "'Fraunces', serif", fontSize: '22px', marginBottom: '12px', color: 'var(--green)' }}>Broker relationships</h2>
              <p>The brokers listed on this site are independent businesses. Compare Farm Insurance does not endorse any specific broker and is not responsible for the advice, products, or services provided by any broker you contact through this site. Any arrangement you enter into with a broker is solely between you and that broker.</p>
              <p style={{ marginTop: '12px' }}>Compare Farm Insurance receives referral fees from brokers when users make contact through this site. This commercial relationship does not influence the matching results — broker ranking is determined by fit to your quiz answers, not by commercial arrangements.</p>
            </section>

            <section>
              <h2 style={{ fontFamily: "'Fraunces', serif", fontSize: '22px', marginBottom: '12px', color: 'var(--green)' }}>Limitation of liability</h2>
              <p>To the maximum extent permitted by law, Compare Farm Insurance is not liable for any loss or damage arising from your use of this site or from any reliance on the information or broker matches provided. This includes loss arising from decisions made on the basis of information on this site.</p>
            </section>

            <section>
              <h2 style={{ fontFamily: "'Fraunces', serif", fontSize: '22px', marginBottom: '12px', color: 'var(--green)' }}>Intellectual property</h2>
              <p>All content on this site — including text, design, logo, and code — is the property of Compare Farm Insurance and may not be reproduced without permission.</p>
            </section>

            <section>
              <h2 style={{ fontFamily: "'Fraunces', serif", fontSize: '22px', marginBottom: '12px', color: 'var(--green)' }}>Governing law</h2>
              <p>These terms are governed by the laws of New South Wales, Australia. Any disputes will be subject to the exclusive jurisdiction of the courts of New South Wales.</p>
            </section>

            <section>
              <h2 style={{ fontFamily: "'Fraunces', serif", fontSize: '22px', marginBottom: '12px', color: 'var(--green)' }}>Contact</h2>
              <p>For any questions about these terms, contact us at: <strong>hello@comparefarminsurance.com.au</strong></p>
            </section>

          </div>
        </div>

      </main>
      <Footer />
    </>
  )
}