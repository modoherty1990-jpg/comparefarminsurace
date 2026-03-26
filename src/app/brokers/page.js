import Header from '@/components/Header'
import Footer from '@/components/Footer'
import BrokerDirectory from '@/components/BrokerDirectory'

export const metadata = {
  title: 'Farm Insurance Brokers | Compare Farm Insurance Australia',
  description: 'Browse the farm insurance brokers in our panel. Specialists across cropping, grazing, dairy, viticulture, hobby farms and more. Use our quiz to get matched.',
}

export default function BrokersPage() {
  return (
    <>
      <Header />
      <main style={{ paddingTop: '64px' }}>

        {/* Page hero */}
        <div style={{
          background: 'var(--green)',
          padding: '60px 5%',
        }}>
          <div style={{ maxWidth: '640px' }}>
            <span style={{
              fontSize: '11px', fontWeight: 600, letterSpacing: '2.5px',
              textTransform: 'uppercase', color: 'var(--amber)',
              marginBottom: '12px', display: 'block',
            }}>Broker panel</span>
            <h1 style={{
              fontFamily: "'Fraunces', serif",
              color: 'white', fontSize: 'clamp(28px, 4vw, 42px)',
              fontWeight: 800, marginBottom: '16px', lineHeight: 1.1,
            }}>
              The brokers in our panel
            </h1>
            <p style={{ color: 'rgba(255,255,255,0.75)', fontSize: '17px', lineHeight: 1.7, marginBottom: '24px' }}>
              Every broker has been researched and tagged by farm type, scale, state,
              and coverage capability. The best way to find the right one for your
              operation is to use the matching quiz.
            </p>
            <a href="/#quiz" style={{
              display: 'inline-flex', alignItems: 'center', gap: '8px',
              background: 'var(--amber)', color: 'var(--green)',
              padding: '13px 24px', borderRadius: '8px',
              fontSize: '15px', fontWeight: 600, textDecoration: 'none',
              fontFamily: "'DM Sans', sans-serif",
            }}>
              Take the matching quiz &rarr;
            </a>
          </div>
        </div>

        <BrokerDirectory />

      </main>
      <Footer />
    </>
  )
}