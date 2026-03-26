import { supabase } from '@/app/lib/supabase'

export default async function BrokerDirectory() {
  const { data: brokers } = await supabase
    .from('farm_brokers')
    .select('*')
    .eq('hidden', false)
    .order('priority', { ascending: false })

  if (!brokers || brokers.length === 0) return null

  return (
    <section style={{ padding: '80px 5%', background: 'var(--cream)' }}>
      <span className="section-label">Broker panel</span>
      <h2 className="section-title">Brokers in our panel</h2>
      <p className="section-desc">
        Every broker here has been researched and tagged against farm type, scale,
        state, and coverage capability. Use the quiz on the homepage to get your
        matched shortlist.
      </p>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
        gap: '20px',
      }}>
        {brokers.map(broker => (
          <div key={broker.id} style={{
            background: 'var(--white)',
            borderRadius: '12px',
            padding: '24px',
            border: '1px solid var(--border)',
            display: 'flex', flexDirection: 'column', gap: '12px',
          }}>
            <div>
              <h3 style={{ fontSize: '17px', marginBottom: '6px', color: 'var(--green)' }}>
                {broker.name}
              </h3>
              {broker.description && (
                <p style={{ fontSize: '13px', color: 'var(--muted)', lineHeight: 1.6 }}>
                  {broker.description}
                </p>
              )}
            </div>

            {/* Farm type tags */}
            {Array.isArray(broker.farm_tags) && broker.farm_tags.length > 0 && (
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                {broker.farm_tags.map(tag => (
                  <span key={tag} style={{
                    background: 'rgba(30,61,20,0.07)',
                    color: 'var(--green)',
                    fontSize: '11px', fontWeight: 600,
                    padding: '3px 8px', borderRadius: '100px',
                    textTransform: 'capitalize',
                  }}>{tag}</span>
                ))}
              </div>
            )}

            {/* State tags */}
            {Array.isArray(broker.state_tags) && broker.state_tags.length > 0 && (
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '4px' }}>
                {broker.state_tags.map(state => (
                  <span key={state} style={{
                    background: 'var(--cream-dark)',
                    color: 'var(--muted)',
                    fontSize: '11px', fontWeight: 500,
                    padding: '2px 7px', borderRadius: '100px',
                  }}>{state}</span>
                ))}
              </div>
            )}

            {/* CTA back to quiz */}
            <div style={{ marginTop: 'auto', paddingTop: '8px' }}>
              <a href="/#quiz" style={{
                fontSize: '13px', color: 'var(--green-light)',
                fontWeight: 600, textDecoration: 'none',
              }}>
                Get matched via the quiz &rarr;
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}