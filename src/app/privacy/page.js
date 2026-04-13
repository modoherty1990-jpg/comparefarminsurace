import Header from '@/components/Header'
import Footer from '@/components/Footer'

export const metadata = {
  title: 'Privacy Policy | Compare Farm Insurance Australia',
  description: 'Privacy policy for Compare Farm Insurance — how we collect, use and protect your information.',
}

export default function PrivacyPage() {
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
            }}>Privacy Policy</h1>
            <p style={{ color: 'rgba(255,255,255,0.65)', marginTop: '12px', fontSize: '15px' }}>
              Last updated: March 2025
            </p>
          </div>
        </div>

        <div style={{ maxWidth: '760px', margin: '0 auto', padding: '60px 5%' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '32px', fontSize: '16px', lineHeight: 1.75, color: 'var(--text)' }}>

            <section>
              <h2 style={{ fontFamily: "'Fraunces', serif", fontSize: '22px', marginBottom: '12px', color: 'var(--green)' }}>Who we are</h2>
              <p>Compare Farm Insurance (comparefarminsurance.com.au) is an independent informational tool that helps Australian farmers find specialist farm insurance brokers. We are not an insurance broker and we do not provide financial advice.</p>
            </section>

            <section>
              <h2 style={{ fontFamily: "'Fraunces', serif", fontSize: '22px', marginBottom: '12px', color: 'var(--green)' }}>What information we collect</h2>
              <p>When you use our matching quiz, we collect the answers you provide — including farm type, location, scale, and coverage needs. This information is used solely to generate your broker matches and is not stored against any personal profile.</p>
              <p style={{ marginTop: '12px' }}>If you choose to contact a broker through our site, you may provide your name, email address, and phone number. This information is passed to the relevant broker to facilitate contact.</p>
              <p style={{ marginTop: '12px' }}>We also collect standard website analytics data including pages visited, time on site, and referring sources via Google Analytics 4.</p>
            </section>

            <section>
              <h2 style={{ fontFamily: "'Fraunces', serif", fontSize: '22px', marginBottom: '12px', color: 'var(--green)' }}>How we use your information</h2>
              <p>We use the information you provide to:</p>
              <ul style={{ marginTop: '12px', paddingLeft: '24px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                <li>Match you with suitable farm insurance brokers</li>
                <li>Facilitate contact between you and matched brokers</li>
                <li>Improve our matching algorithm and site experience</li>
                <li>Understand how our site is used via aggregated analytics</li>
              </ul>
              <p style={{ marginTop: '12px' }}>We do not sell your personal information to third parties. We do not use your information for unsolicited marketing.</p>
            </section>

            <section>
              <h2 style={{ fontFamily: "'Fraunces', serif", fontSize: '22px', marginBottom: '12px', color: 'var(--green)' }}>Cookies</h2>
              <p>We use cookies for Google Analytics to understand site traffic and usage patterns. These cookies do not identify you personally. You can disable cookies in your browser settings at any time.</p>
            </section>

            <section>
              <h2 style={{ fontFamily: "'Fraunces', serif", fontSize: '22px', marginBottom: '12px', color: 'var(--green)' }}>Data storage</h2>
              <p>Our website is hosted on Vercel (USA) and our database is hosted on Supabase. Both providers maintain industry-standard security practices. Quiz answers are processed in your browser and are not stored on our servers unless you explicitly submit a contact form.</p>
            </section>

            <section>
              <h2 style={{ fontFamily: "'Fraunces', serif", fontSize: '22px', marginBottom: '12px', color: 'var(--green)' }}>Your rights</h2>
              <p>You have the right to request access to any personal information we hold about you, and to request its correction or deletion. To make a request, contact us at the email address below.</p>
            </section>

            <section>
              <h2 style={{ fontFamily: "'Fraunces', serif", fontSize: '22px', marginBottom: '12px', color: 'var(--green)' }}>Contact</h2>
              <p>For privacy-related enquiries, contact us at: <strong>hello@comparefarminsurance.com.au</strong></p>
            </section>

          </div>
        </div>

      </main>
      <Footer />
    </>
  )
}