import Header from '@/components/Header'
import Footer from '@/components/Footer'
import GuideFAQ from '@/components/GuideFAQ'
import { supabase } from '../../lib/supabase'
import { notFound } from 'next/navigation'

export async function generateMetadata({ params }) {
  const { slug } = await params

  const { data } = await supabase
    .from('farm_guides')
    .select('title, description')
    .eq('slug', slug)
    .single()

  if (!data) return { title: 'Guide not found' }

  return {
    title: `${data.title} | Compare Farm Insurance`,
    description: data.description,
  }
}

export default async function GuidePage({ params }) {
  const { slug } = await params

  const { data: guide } = await supabase
    .from('farm_guides')
    .select('*')
    .eq('slug', slug)
    .eq('published', true)
    .single()

  if (!guide) notFound()

  const dateDisplay = new Date(guide.updated_at || guide.created_at).toLocaleDateString('en-AU', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  })

  const faqs = guide.faqs || []

  const faqSchema = faqs.length > 0 ? {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map(faq => ({
      '@type': 'Question',
      name: faq.q,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.a,
      },
    })),
  } : null

  return (
    <>
      <Header />
      {faqSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      )}

      <main style={{ paddingTop: '64px' }}>

        {/* Hero */}
        <div style={{ background: 'var(--green)', padding: '60px 5%' }}>
          <div style={{ maxWidth: '760px', margin: '0 auto' }}>
            <span style={{
              fontSize: '11px', fontWeight: 600, letterSpacing: '2.5px',
              textTransform: 'uppercase', color: 'var(--amber)',
              marginBottom: '14px', display: 'block',
            }}>
              {guide.category}
            </span>
            <h1 style={{
              fontFamily: "'Fraunces', serif",
              color: 'var(--white)',
              fontSize: 'clamp(28px, 4vw, 44px)',
              fontWeight: 800,
              lineHeight: 1.1,
              marginBottom: '16px',
            }}>
              {guide.title}
            </h1>
            <p style={{
              fontSize: '13px',
              color: 'rgba(255,255,255,0.45)',
              marginBottom: '16px',
              fontFamily: "'DM Sans', sans-serif",
            }}>
              By {guide.author || 'The CFI Team'} &nbsp;&middot;&nbsp; Last updated: {dateDisplay}
            </p>
            {guide.description && (
              <p style={{
                fontSize: '17px',
                color: 'rgba(255,255,255,0.75)',
                lineHeight: 1.7,
                maxWidth: '620px',
                fontFamily: "'DM Sans', sans-serif",
              }}>
                {guide.description}
              </p>
            )}
          </div>
        </div>

        {/* Article body */}
        <div style={{ background: 'var(--cream)', padding: '64px 5% 96px' }}>
          <article style={{ maxWidth: '760px', margin: '0 auto' }}>

            <div className="guide-content" dangerouslySetInnerHTML={{ __html: guide.content }} />

            <GuideFAQ faqs={faqs} />

            {/* CTA box */}
            <div style={{
              marginTop: '64px',
              padding: '40px',
              background: 'var(--green)',
              borderRadius: '12px',
              textAlign: 'center',
            }}>
              <h3 style={{
                fontFamily: "'Fraunces', serif",
                fontSize: '22px', fontWeight: 700,
                color: 'var(--white)', marginBottom: '10px',
              }}>
                Ready to find a specialist broker?
              </h3>
              <p style={{
                color: 'rgba(255,255,255,0.72)',
                fontSize: '15px', marginBottom: '24px',
                fontFamily: "'DM Sans', sans-serif",
                lineHeight: 1.6,
              }}>
                Answer 6 quick questions and get matched to the right broker for your farm type.
              </p>
              <a href="/#quiz" style={{
                display: 'inline-flex', alignItems: 'center', gap: '8px',
                background: 'var(--amber)', color: 'var(--green)',
                padding: '13px 28px', borderRadius: '8px',
                fontSize: '15px', fontWeight: 600, textDecoration: 'none',
                fontFamily: "'DM Sans', sans-serif",
              }}>
                Start the matching quiz &rarr;
              </a>
            </div>

          </article>
        </div>

      </main>

      {/* Guide content typography */}
      <style>{`
        .guide-content {
          color: var(--text);
          font-size: 17px;
          line-height: 1.75;
          font-family: 'DM Sans', sans-serif;
        }
        .guide-content h2 {
          font-family: 'Fraunces', serif;
          font-size: 26px;
          font-weight: 700;
          color: var(--green);
          margin: 48px 0 16px;
          line-height: 1.2;
        }
        .guide-content h3 {
          font-family: 'Fraunces', serif;
          font-size: 20px;
          font-weight: 600;
          color: var(--green);
          margin: 32px 0 12px;
          line-height: 1.3;
        }
        .guide-content p {
          margin-bottom: 20px;
          color: var(--text);
        }
        .guide-content ul, .guide-content ol {
          padding-left: 24px;
          margin-bottom: 20px;
          display: flex;
          flex-direction: column;
          gap: 8px;
        }
        .guide-content li {
          color: var(--text);
          line-height: 1.65;
        }
        .guide-content strong {
          font-weight: 600;
          color: var(--green);
        }
        .guide-content a {
          color: var(--green-light);
          text-decoration: underline;
          text-underline-offset: 3px;
        }
        .guide-content table {
          width: 100%;
          border-collapse: collapse;
          margin-bottom: 24px;
          font-size: 15px;
        }
        .guide-content th {
          background: var(--green);
          color: var(--white);
          padding: 10px 14px;
          text-align: left;
          font-weight: 600;
          font-size: 13px;
        }
        .guide-content td {
          padding: 10px 14px;
          border-bottom: 1px solid var(--border);
          color: var(--text);
        }
        .guide-content tr:nth-child(even) td {
          background: var(--cream-dark);
        }
        .guide-content blockquote {
          border-left: 3px solid var(--amber);
          margin: 24px 0;
          padding: 12px 20px;
          background: rgba(201,162,39,0.07);
          border-radius: 0 8px 8px 0;
          color: var(--muted);
          font-style: italic;
        }
      `}</style>

      <Footer />
    </>
  )
}