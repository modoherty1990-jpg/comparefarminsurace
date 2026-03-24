import { supabase } from '@/app/lib/supabase'

export default async function BrokerDirectory() {

const { data: brokers } = await supabase
  .from('farm_brokers')
    .select('*')
    .eq('hidden', false)
    .order('priority', { ascending: false })

  if (!brokers || brokers.length === 0) return null

  return (
    <section id="brokers" style={{ padding: '80px 5%', background: 'var(--cream-dark)' }}>
      <span className="section-label">Broker directory</span>
      <h2 className="section-title">All brokers in our panel</h2>
      <p className="section-desc">
        Every broker listed here has been researched and tagged against farm type,
        scale, state, and coverage capability. Use the quiz above to get your matched shortlist.
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
              <h3 style={{ fontSize: '17px', marginBottom: '4px', color: 'var(--green)' }}>{broker.name}</h3>
              {broker.description && (
                <p style={{ fontSize: '13px', color: 'var(--muted)', lineHeight: 1.6 }}>{broker.description}</p>
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

            {/* Contact */}
            <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap', marginTop: 'auto' }}>
              {broker.show_phone && broker.phone && (
                <a href={`tel:${broker.phone}`} style={{
                  fontSize: '13px', color: 'var(--green)',
                  fontWeight: 600, textDecoration: 'none',
                }}>{broker.phone}</a>
              )}
              {broker.show_website && broker.website && (
                <a href={`https://${broker.website}`} target="_blank" rel="noopener noreferrer"
                  style={{ fontSize: '13px', color: 'var(--green-light)', textDecoration: 'none' }}>
{broker.website} ↗
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
