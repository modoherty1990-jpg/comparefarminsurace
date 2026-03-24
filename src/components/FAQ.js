'use client'
import { useState } from 'react'

const faqs = [
  {
    q: "What's the difference between a farm broker and a direct insurer?",
    a: "A broker shops your risk across multiple insurers and acts in your interest. A direct insurer — like WFI or CGU — only offers their own products. For most farms, a broker will get you better cover at a better price, especially if your operation is complex or has any unusual features like agistment, a cellar door, or significant irrigation infrastructure.",
  },
  {
    q: "Do I need to give my contact details to get matched?",
    a: "No. The quiz runs entirely on your answers — no name, email, or phone number required to see your results. You only share your details when you choose to contact a broker directly.",
  },
  {
    q: "What's multi-peril crop insurance and do I need it?",
    a: "Multi-peril crop insurance (MPCI) covers you if your crop yield falls below a set threshold due to a wide range of causes — drought, flood, frost, hail, pest, disease. Standard hail and fire policies only cover specific named events. MPCI is more expensive but provides much broader protection. It tends to make sense for broadacre farmers who rely heavily on crop income and don't have the capacity to absorb a poor season. A specialist broker can run the numbers for your situation.",
  },
  {
    q: "Why are farm insurance premiums going up so much?",
    a: "Australian farm premiums have risen significantly in the last two to three years. The main drivers are increased natural peril claims — particularly from the 2022 La Nina floods — global reinsurance cost increases, and underinsurance corrections where insurers are adjusting rebuild cost estimates upward. Shopping through a specialist broker rather than auto-renewing is one of the most effective ways to pressure-test your premium.",
  },
  {
    q: "Can I get cover for a lifestyle block if I don't farm commercially?",
    a: "Yes. Several insurers offer policies specifically for lifestyle and hobby farms — properties that aren't run as commercial enterprises. You don't need an ABN or farming income to qualify. Farmstyle Insurance and Wideland Insurance Brokers are two specialists in this space.",
  },
]

export default function FAQ() {
  const [open, setOpen] = useState(null)

  return (
    <section id="faq" style={{ padding: '80px 5%', background: 'var(--cream-dark)' }}>
      <div style={{ maxWidth: '720px', margin: '0 auto' }}>
        <span className="section-label">Common questions</span>
        <h2 className="section-title" style={{ marginBottom: '36px' }}>Things farmers ask us</h2>

        {faqs.map((faq, i) => (
          <div key={i} style={{ borderBottom: '1px solid var(--border)' }}>
            <div
              onClick={() => setOpen(open === i ? null : i)}
              style={{
                display: 'flex', justifyContent: 'space-between',
                alignItems: 'center', padding: '20px 0',
                cursor: 'pointer', fontWeight: 500,
                fontSize: '16px', color: 'var(--text)', gap: '16px',
              }}
            >
              {faq.q}
              <span style={{
                flexShrink: 0, width: '24px', height: '24px',
                background: 'var(--green)', borderRadius: '50%',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                color: 'white', fontSize: '16px', fontWeight: 300,
                transition: 'transform 0.2s',
                transform: open === i ? 'rotate(45deg)' : 'none',
              }}>+</span>
            </div>
            {open === i && (
              <div style={{
                paddingBottom: '20px', color: 'var(--muted)',
                fontSize: '15px', lineHeight: 1.7,
              }}>
                {faq.a}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  )
}
