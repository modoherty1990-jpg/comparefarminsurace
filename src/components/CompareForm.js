'use client'
import { useState } from 'react'

// ── BROKER DATABASE ────────────────────────────────────────────
const brokers = [
  {
    id: 'rural-affinity',
    name: 'Rural Affinity Insurance Agency',
    type: 'Specialist underwriting agency · National',
    website: 'ruralaffinity.com.au',
    phone: '02 9496 9300',
    farmTypes: ['cropping','grazing','dairy','mixed','viticulture','horticulture','hobby'],
    states: ['NSW','VIC','QLD','SA','WA','TAS','NT','ACT'],
    scales: ['small','medium','large'],
    coverage: ['farm-pack','livestock','crop-named-peril','crop-mpci','wine-spoilage','machinery'],
    specialBonus: ['agistment','multi-property'],
    description: "Australia's most respected specialist farm underwriting agency, backed by Munich Re. Covers the full range of farm types with flexible policies and fast claims handling.",
  },
  {
    id: 'gallagher',
    name: 'Gallagher / AgriRisk',
    type: 'National specialist agricultural broker',
    website: 'ajg.com/au',
    phone: '1800 254 524',
    farmTypes: ['cropping','grazing','dairy','mixed','viticulture','horticulture','poultry','aquaculture'],
    states: ['NSW','VIC','QLD','SA','WA','TAS','NT','ACT'],
    scales: ['medium','large','corporate'],
    coverage: ['farm-pack','crop-named-peril','crop-mpci','livestock','machinery','liability','weather-index','business-interruption','workers-comp'],
    specialBonus: ['agistment','multi-property','irrigation'],
    description: "Australia's largest specialist agricultural insurance broker with 30+ branches nationally. Strong across all enterprise types from family farms to major corporate agribusiness.",
  },
  {
    id: 'ebm',
    name: 'EBM Insurance & Risk',
    type: 'National broker · Specialist FarmCover product',
    website: 'ebminsurance.com.au',
    phone: '1800 815 672',
    farmTypes: ['cropping','grazing','mixed','viticulture','horticulture','dairy'],
    states: ['NSW','VIC','QLD','SA','WA','TAS','NT','ACT'],
    scales: ['small','medium','large'],
    coverage: ['farm-pack','crop-named-peril','livestock','liability','machinery','business-interruption','wine-spoilage'],
    specialBonus: ['cellar-door','multi-property'],
    description: "Australia's largest privately owned insurance broker with a dedicated FarmCover product and 45+ years in agricultural insurance. Particularly strong in WA and winery cover.",
  },
  {
    id: 'mga',
    name: 'MGA Insurance Group',
    type: 'National broker · 40+ regional offices',
    website: 'mga.com',
    phone: '1800 888 111',
    farmTypes: ['cropping','grazing','mixed','viticulture','hobby','horticulture','dairy'],
    states: ['NSW','VIC','QLD','SA','WA','TAS','NT','ACT'],
    scales: ['hobby','small','medium','large'],
    coverage: ['farm-pack','crop-named-peril','livestock','liability','machinery','wine-spoilage'],
    specialBonus: ['cellar-door','organic'],
    description: "Large national broker with 40+ regional offices. Particularly strong in SA and the wine industry, with 40+ years of viticulture expertise. Handles hobby farms through to large commercial operations.",
  },
  {
    id: 'agripro',
    name: 'Agripro Insurance Brokers',
    type: 'Exclusively agricultural broker · National',
    website: 'agripro.com.au',
    phone: '03 7040 9933',
    farmTypes: ['dairy','poultry','grazing','cropping','mixed'],
    states: ['NSW','VIC','QLD','SA','WA','TAS','NT','ACT'],
    scales: ['large','corporate'],
    coverage: ['farm-pack','livestock','machinery','liability','business-interruption','workers-comp'],
    specialBonus: ['multi-property'],
    description: "One of very few exclusively agricultural brokers in Australia. Deep expertise in dairy, poultry sheds, and beef feedlots. Access to 150+ global insurance products for large and complex farms.",
  },
  {
    id: 'prevail',
    name: 'Prevail Insurance (Farm Elite)',
    type: 'Specialist underwriting agency · National',
    website: 'prevailinsurance.com.au',
    phone: '1300 794 364',
    farmTypes: ['cropping','grazing','mixed','horticulture'],
    states: ['NSW','VIC','QLD','SA','WA','TAS','NT','ACT'],
    scales: ['small','medium'],
    coverage: ['farm-pack','livestock','machinery','liability','business-interruption'],
    specialBonus: ['agistment'],
    description: "Formed from three specialist underwriting agencies. The Farm Elite product covers 13 sections with no underinsurance clauses — a standout for small-to-medium mixed and grazing operations.",
  },
  {
    id: 'midland',
    name: 'Midland Insurance Brokers',
    type: 'Viticulture and winery specialist · National',
    website: 'midlandinsurance.com.au',
    phone: '1300 306 571',
    farmTypes: ['viticulture','horticulture'],
    states: ['NSW','VIC','QLD','SA','WA','TAS'],
    scales: ['small','medium','large'],
    coverage: ['wine-spoilage','crop-named-peril','farm-pack','liability','machinery','business-interruption'],
    specialBonus: ['cellar-door','organic'],
    description: "30+ years as a viticulture and winery specialist. Supports multiple regional wine grower associations. Deep expertise in wine spoilage, vine damage, and cellar door liability.",
  },
  {
    id: 'farmstyle',
    name: 'Farmstyle Insurance (Ag Guard)',
    type: 'Hobby farm specialist · Online quoting',
    website: 'farmstyleinsurance.com.au',
    phone: '02 9134 9439',
    farmTypes: ['hobby'],
    states: ['NSW','VIC','QLD','SA','WA','TAS','NT','ACT'],
    scales: ['hobby'],
    coverage: ['farm-pack','liability','machinery'],
    specialBonus: [],
    description: "Purpose-built for small and hobby farms with fast online quoting backed by QBE. No farming income or ABN required. Ideal for lifestyle properties wanting straightforward cover.",
  },
  {
    id: 'wideland',
    name: 'Wideland Insurance Brokers',
    type: 'Hobby and lifestyle farm specialist',
    website: 'widelandinsurancebrokers.com.au',
    phone: '1300 943 526',
    farmTypes: ['hobby','grazing'],
    states: ['NSW','VIC','QLD','SA','WA','TAS'],
    scales: ['hobby','small'],
    coverage: ['farm-pack','livestock','liability','machinery'],
    specialBonus: ['agistment'],
    description: "Specialists in properties under 20 hectares. Flexible options for lifestyle blocks including fire-and-theft-only cover for low-use vehicles. No ABN or farming income required.",
  },
  {
    id: 'elders',
    name: 'Elders Insurance',
    type: 'Agent network · 200+ locations nationally',
    website: 'eldersinsurance.com.au',
    phone: '1300 133 037',
    farmTypes: ['cropping','grazing','mixed','horticulture','hobby','dairy'],
    states: ['NSW','VIC','QLD','SA','WA','TAS','NT','ACT'],
    scales: ['hobby','small','medium','large','corporate'],
    coverage: ['farm-pack','crop-named-peril','livestock','liability','machinery'],
    specialBonus: [],
    description: "185-year heritage with 200+ rural locations across Australia, underwritten by QBE. Strong brand recognition in regional areas. Note: arranges cover with QBE only — not a multi-insurer broker.",
  },
  {
    id: 'regional-insurance',
    name: 'Regional Insurance Professionals',
    type: 'Multi-peril crop specialist · National',
    website: 'regionalinsurance.com.au',
    phone: '08 9841 6700',
    farmTypes: ['cropping','mixed','horticulture'],
    states: ['WA','SA','VIC','NSW'],
    scales: ['small','medium','large'],
    coverage: ['crop-mpci','weather-index','farm-pack'],
    specialBonus: ['irrigation'],
    description: "Specialist in multi-peril crop insurance covering drought, frost, hail, flood, fire, pests, and disease. Income-based trigger from a 5-year average. Best for broadacre cropping operations.",
  },
  {
    id: 'aon',
    name: 'Aon Agribusiness',
    type: 'Global broker · Dedicated agricultural division',
    website: 'aon.com.au',
    phone: '02 9253 7000',
    farmTypes: ['cropping','grazing','dairy','mixed','viticulture','poultry','aquaculture'],
    states: ['NSW','VIC','QLD','SA','WA','TAS','NT','ACT'],
    scales: ['large','corporate'],
    coverage: ['farm-pack','crop-named-peril','crop-mpci','livestock','liability','workers-comp','weather-index','business-interruption','wine-spoilage'],
    specialBonus: ['multi-property','irrigation','agistment'],
    description: "Australia's largest insurance broker with a dedicated agricultural division and 30+ years in the sector. Benchmarking and portfolio review services. Best for large commercial and corporate operations.",
  },
]

// ── SCORING ────────────────────────────────────────────────────
function scoreBroker(broker, answers) {
  let score = 0
  if (answers.farmType && broker.farmTypes.includes(answers.farmType)) score += 35
  else if (answers.farmType) return -1
  if (answers.state && broker.states.includes(answers.state)) score += 20
  if (answers.scale) {
    if (broker.scales.includes(answers.scale)) score += 20
    else if (answers.scale === 'hobby' && !broker.scales.includes('hobby')) return -1
    else if (answers.scale === 'corporate' && !broker.scales.includes('corporate') && !broker.scales.includes('large')) return -1
  }
  if (answers.coverage.length > 0) {
    const m = answers.coverage.filter(c => broker.coverage.includes(c)).length
    score += Math.min(15, (m / answers.coverage.length) * 15)
  } else {
    score += 7
  }
  if (answers.situation) {
    if (['new','uninsured'].includes(answers.situation) && ['mga','ebm','elders','wideland','farmstyle'].includes(broker.id)) score += 5
    else score += 3
  }
  if (answers.special.length > 0) {
    const sm = answers.special.filter(s => broker.specialBonus.includes(s)).length
    score += Math.min(5, sm * 2.5)
  }
  return score
}

function getReasons(broker, answers) {
  const r = []
  const tmap = { cropping:'broadacre cropping', grazing:'grazing and livestock', dairy:'dairy farming', mixed:'mixed farming', viticulture:'viticulture and wineries', horticulture:'horticulture', poultry:'poultry and intensive livestock', aquaculture:'aquaculture', hobby:'hobby and lifestyle farms' }
  const smap = { hobby:'hobby farms', small:'small family farms', medium:'mid-size commercial farms', large:'large farming operations', corporate:'corporate agribusiness' }
  if (answers.farmType && broker.farmTypes.includes(answers.farmType)) r.push('Specialist in ' + tmap[answers.farmType])
  if (answers.scale && broker.scales.includes(answers.scale)) r.push('Experienced with ' + smap[answers.scale])
  if (answers.coverage.includes('crop-mpci') && broker.coverage.includes('crop-mpci')) r.push('Multi-peril crop insurance access')
  if (answers.coverage.includes('wine-spoilage') && broker.coverage.includes('wine-spoilage')) r.push('Wine and winery specialist cover')
  if (answers.coverage.includes('weather-index') && broker.coverage.includes('weather-index')) r.push('Parametric and weather index products')
  if (answers.special.includes('cellar-door') && broker.specialBonus.includes('cellar-door')) r.push('Cellar door and visitor liability')
  if (answers.special.includes('agistment') && broker.specialBonus.includes('agistment')) r.push('Agistment risk experience')
  if (answers.special.includes('multi-property') && broker.specialBonus.includes('multi-property')) r.push('Multi-property policy experience')
  if (answers.special.includes('irrigation') && broker.specialBonus.includes('irrigation')) r.push('Irrigation infrastructure expertise')
  return r.slice(0, 3)
}

// ── SHARED STYLES ──────────────────────────────────────────────
const helpBox = {
  background: 'rgba(201,162,39,0.07)',
  borderLeft: '3px solid var(--amber)',
  borderRadius: '0 8px 8px 0',
  padding: '13px 18px',
  marginBottom: '24px',
  fontSize: '14px',
  color: 'var(--muted)',
  lineHeight: 1.65,
}

const optionBtn = (selected) => ({
  display: 'flex', alignItems: 'flex-start', gap: '14px',
  padding: '14px 18px',
  border: `1.5px solid ${selected ? 'var(--green)' : 'var(--border)'}`,
  borderRadius: '10px',
  background: selected ? 'rgba(30,61,20,0.06)' : 'var(--cream)',
  cursor: 'pointer', textAlign: 'left',
  fontFamily: "'DM Sans', sans-serif", fontSize: '14px',
  color: selected ? 'var(--green)' : 'var(--text)',
  fontWeight: selected ? 500 : 400,
  width: '100%', transition: 'all 0.18s',
})

const multiOption = (selected) => ({
  display: 'flex', alignItems: 'flex-start', gap: '14px',
  padding: '14px 18px',
  border: `1.5px solid ${selected ? 'var(--green)' : 'var(--border)'}`,
  borderRadius: '10px',
  background: selected ? 'rgba(30,61,20,0.06)' : 'var(--cream)',
  cursor: 'pointer',
  fontFamily: "'DM Sans', sans-serif", fontSize: '14px',
  color: selected ? 'var(--green)' : 'var(--text)',
  transition: 'all 0.18s',
})

function RadioDot({ selected }) {
  return (
    <span style={{
      width: '20px', height: '20px', minWidth: '20px',
      border: `2px solid ${selected ? 'var(--green)' : '#bfb8ae'}`,
      borderRadius: '50%', background: 'white',
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      marginTop: '1px', flexShrink: 0, transition: 'all 0.18s',
    }}>
      {selected && <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: 'var(--green)' }} />}
    </span>
  )
}

function SquareBox({ selected }) {
  return (
    <span style={{
      width: '20px', height: '20px', minWidth: '20px',
      border: `2px solid ${selected ? 'var(--green)' : '#bfb8ae'}`,
      borderRadius: '5px',
      background: selected ? 'var(--green)' : 'white',
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      marginTop: '1px', flexShrink: 0, transition: 'all 0.18s',
    }}>
      {selected && (
        <svg width="12" height="9" viewBox="0 0 12 9" fill="none">
          <polyline points="1,4.5 4.5,8 11,1" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      )}
    </span>
  )
}

// ── MAIN COMPONENT ─────────────────────────────────────────────
export default function CompareForm() {
  const [step, setStep] = useState(1)
  const [answers, setAnswers] = useState({
    farmType: null, state: null, scale: null,
    coverage: [], situation: null, special: [],
  })
  const [results, setResults] = useState(null)

  // GA4 broker click tracking
  const trackClick = (brokerName, action) => {
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'broker_click', { broker_name: brokerName, action })
    }
  }

  const goNext = () => setStep(s => s + 1)
  const goBack = () => setStep(s => s - 1)

  const runMatching = () => {
    const scored = brokers
      .map(b => ({ ...b, score: scoreBroker(b, answers) }))
      .filter(b => b.score > 0)
      .sort((a, b) => b.score - a.score)
      .slice(0, 3)
    setResults(scored)
    setStep(7)
  }

  const restart = () => {
    setAnswers({ farmType: null, state: null, scale: null, coverage: [], situation: null, special: [] })
    setResults(null)
    setStep(1)
  }

  const selectOption = (field, val) => setAnswers(a => ({ ...a, [field]: val }))

  const toggleMulti = (field, val) => {
    setAnswers(a => ({
      ...a,
      [field]: a[field].includes(val)
        ? a[field].filter(v => v !== val)
        : [...a[field], val],
    }))
  }

  const progress = Math.round((step / 6) * 100)

  return (
    <section id="quiz" style={{ padding: '80px 5%', background: 'var(--cream)' }}>
      <div style={{ maxWidth: '760px', margin: '0 auto' }}>

        <div style={{ textAlign: 'center', marginBottom: '48px' }}>
          <span className="section-label">The matching quiz</span>
          <h2 className="section-title">Find your matched broker</h2>
          <p style={{ color: 'var(--muted)', fontSize: '16px' }}>6 questions &nbsp;&middot;&nbsp; About 90 seconds</p>
        </div>

        <div style={{
          background: 'var(--white)', borderRadius: '16px',
          padding: '48px', boxShadow: 'var(--shadow-lg)',
          border: '1px solid var(--border)', minHeight: '500px',
        }}>

          {/* Progress bar */}
          {step <= 6 && (
            <div style={{ marginBottom: '36px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10px' }}>
                <span style={{ fontSize: '12px', fontWeight: 600, color: 'var(--muted)', textTransform: 'uppercase', letterSpacing: '1px' }}>Your progress</span>
                <span style={{ fontSize: '12px', color: 'var(--muted)' }}>Question {step} of 6</span>
              </div>
              <div style={{ height: '5px', background: 'var(--cream-dark)', borderRadius: '100px', overflow: 'hidden' }}>
                <div style={{ height: '100%', width: `${progress}%`, background: 'linear-gradient(90deg, var(--green), var(--green-light))', borderRadius: '100px', transition: 'width 0.4s ease' }} />
              </div>
            </div>
          )}

          {/* ── Q1: Farm type ── */}
          {step === 1 && (
            <div>
              <span style={{ fontSize: '12px', fontWeight: 600, color: 'var(--green-light)', textTransform: 'uppercase', letterSpacing: '1.5px', marginBottom: '10px', display: 'block' }}>Question 1 of 6</span>
              <h3 style={{ fontSize: '22px', marginBottom: '10px' }}>What type of farming do you do?</h3>
              <div style={helpBox}>
                Choose the option that best describes your <strong style={{ color: 'var(--text)', fontWeight: 600 }}>main enterprise</strong>. If you run mixed operations, pick the one that generates the most income — there&apos;s a &ldquo;mixed farming&rdquo; option too.
              </div>
              <div style={{ display: 'grid', gap: '10px' }}>
                {[
                  { val: 'cropping', label: 'Cropping / broadacre', sub: 'Wheat, barley, canola, sorghum, cotton, rice' },
                  { val: 'grazing', label: 'Grazing / livestock', sub: 'Beef cattle, sheep, wool, goats' },
                  { val: 'dairy', label: 'Dairy', sub: 'Milk production, including vats, sheds, and herd' },
                  { val: 'mixed', label: 'Mixed farming', sub: 'A combination of cropping and livestock' },
                  { val: 'viticulture', label: 'Viticulture — vineyard, winery, cellar door', sub: 'Growing grapes and/or producing wine' },
                  { val: 'horticulture', label: 'Horticulture', sub: 'Orchards, stone fruit, market garden, nursery' },
                  { val: 'poultry', label: 'Poultry / piggery / intensive livestock', sub: 'Sheds, controlled environment, high animal density' },
                  { val: 'aquaculture', label: 'Aquaculture / apiary / other specialist', sub: 'Fish farms, prawns, oysters, beekeeping' },
                  { val: 'hobby', label: 'Hobby / lifestyle property', sub: 'Not my main source of income — no farming ABN required' },
                ].map(({ val, label, sub }) => (
                  <button key={val} style={optionBtn(answers.farmType === val)} onClick={() => selectOption('farmType', val)}>
                    <RadioDot selected={answers.farmType === val} />
                    <span>
                      <strong style={{ display: 'block', fontWeight: 600, marginBottom: '2px' }}>{label}</strong>
                      <small style={{ fontSize: '12px', color: answers.farmType === val ? 'rgba(30,61,20,0.6)' : 'var(--muted)' }}>{sub}</small>
                    </span>
                  </button>
                ))}
              </div>
              <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: '32px', paddingTop: '24px', borderTop: '1px solid var(--border)' }}>
                <button onClick={goNext} disabled={!answers.farmType} style={{ background: 'var(--green)', color: 'white', border: 'none', padding: '13px 28px', borderRadius: '8px', fontSize: '15px', fontWeight: 600, cursor: answers.farmType ? 'pointer' : 'not-allowed', opacity: answers.farmType ? 1 : 0.35, fontFamily: "'DM Sans', sans-serif" }}>Next &rarr;</button>
              </div>
            </div>
          )}

          {/* ── Q2: State ── */}
          {step === 2 && (
            <div>
              <span style={{ fontSize: '12px', fontWeight: 600, color: 'var(--green-light)', textTransform: 'uppercase', letterSpacing: '1.5px', marginBottom: '10px', display: 'block' }}>Question 2 of 6</span>
              <h3 style={{ fontSize: '22px', marginBottom: '10px' }}>Which state is your farm in?</h3>
              <div style={helpBox}>
                Your location is one of the biggest rating factors in farm insurance. It affects your natural peril exposure — bushfire ratings, flood zones, hail corridors — and which brokers have <strong style={{ color: 'var(--text)', fontWeight: 600 }}>local offices and regional knowledge</strong> close to you.
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '10px' }}>
                {['NSW','VIC','QLD','SA','WA','TAS','NT','ACT'].map(state => (
                  <button key={state} onClick={() => selectOption('state', state)} style={{
                    padding: '16px 8px', border: `1.5px solid ${answers.state === state ? 'var(--green)' : 'var(--border)'}`,
                    borderRadius: '10px', background: answers.state === state ? 'var(--green)' : 'var(--cream)',
                    cursor: 'pointer', textAlign: 'center',
                    fontFamily: "'DM Sans', sans-serif", fontSize: '15px', fontWeight: 600,
                    color: answers.state === state ? 'white' : 'var(--muted)', transition: 'all 0.18s',
                  }}>{state}</button>
                ))}
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '32px', paddingTop: '24px', borderTop: '1px solid var(--border)' }}>
                <button onClick={goBack} style={{ background: 'none', border: 'none', color: 'var(--muted)', fontSize: '14px', cursor: 'pointer', fontFamily: "'DM Sans', sans-serif" }}>&larr; Back</button>
                <button onClick={goNext} disabled={!answers.state} style={{ background: 'var(--green)', color: 'white', border: 'none', padding: '13px 28px', borderRadius: '8px', fontSize: '15px', fontWeight: 600, cursor: answers.state ? 'pointer' : 'not-allowed', opacity: answers.state ? 1 : 0.35, fontFamily: "'DM Sans', sans-serif" }}>Next &rarr;</button>
              </div>
            </div>
          )}

          {/* ── Q3: Scale ── */}
          {step === 3 && (
            <div>
              <span style={{ fontSize: '12px', fontWeight: 600, color: 'var(--green-light)', textTransform: 'uppercase', letterSpacing: '1.5px', marginBottom: '10px', display: 'block' }}>Question 3 of 6</span>
              <h3 style={{ fontSize: '22px', marginBottom: '10px' }}>How large is your operation?</h3>
              <div style={helpBox}>
                This matters more than it might seem. A hobby farm needs a simple packaged policy. A large commercial operation needs someone who can place complex risk across multiple insurers. <strong style={{ color: 'var(--text)', fontWeight: 600 }}>Getting the tier right means you&apos;ll be properly serviced, not under-advised.</strong>
              </div>
              <div style={{ display: 'grid', gap: '10px' }}>
                {[
                  { val: 'hobby', label: 'Hobby / lifestyle property', sub: 'No significant farming income — no ABN needed to get covered' },
                  { val: 'small', label: 'Small family farm', sub: 'Under $500,000 annual revenue from farming' },
                  { val: 'medium', label: 'Medium commercial farm', sub: '$500,000 to $2 million annual revenue' },
                  { val: 'large', label: 'Large farming operation', sub: '$2 million to $10 million annual revenue' },
                  { val: 'corporate', label: 'Major agribusiness or corporate', sub: '$10 million-plus, or multiple properties under one entity' },
                ].map(({ val, label, sub }) => (
                  <button key={val} style={optionBtn(answers.scale === val)} onClick={() => selectOption('scale', val)}>
                    <RadioDot selected={answers.scale === val} />
                    <span>
                      <strong style={{ display: 'block', fontWeight: 600, marginBottom: '2px' }}>{label}</strong>
                      <small style={{ fontSize: '12px', color: answers.scale === val ? 'rgba(30,61,20,0.6)' : 'var(--muted)' }}>{sub}</small>
                    </span>
                  </button>
                ))}
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '32px', paddingTop: '24px', borderTop: '1px solid var(--border)' }}>
                <button onClick={goBack} style={{ background: 'none', border: 'none', color: 'var(--muted)', fontSize: '14px', cursor: 'pointer', fontFamily: "'DM Sans', sans-serif" }}>&larr; Back</button>
                <button onClick={goNext} disabled={!answers.scale} style={{ background: 'var(--green)', color: 'white', border: 'none', padding: '13px 28px', borderRadius: '8px', fontSize: '15px', fontWeight: 600, cursor: answers.scale ? 'pointer' : 'not-allowed', opacity: answers.scale ? 1 : 0.35, fontFamily: "'DM Sans', sans-serif" }}>Next &rarr;</button>
              </div>
            </div>
          )}

          {/* ── Q4: Farm assets ── */}
          {step === 4 && (
            <div>
              <span style={{ fontSize: '12px', fontWeight: 600, color: 'var(--green-light)', textTransform: 'uppercase', letterSpacing: '1.5px', marginBottom: '10px', display: 'block' }}>Question 4 of 6</span>
              <h3 style={{ fontSize: '22px', marginBottom: '10px' }}>What does your farm operation include?</h3>
              <div style={helpBox}>
                <strong style={{ color: 'var(--text)', fontWeight: 600 }}>Tick everything on your property</strong> — not just what you currently insure. We&apos;re trying to understand what you have, so we can match you to a broker who can cover all of it. They&apos;ll advise on what&apos;s worth insuring and what&apos;s not.
              </div>
              <p style={{ fontSize: '14px', color: 'var(--muted)', marginBottom: '20px' }}>Select all that apply.</p>
              <div style={{ display: 'grid', gap: '10px' }}>
                {[
                  { val: 'farm-pack', label: 'Farm buildings and structures', sub: 'Hay sheds, machinery sheds, woolsheds, silos, grain storage, fencing, yards, water tanks' },
                  { val: 'machinery', label: 'Tractors, headers, and farm machinery', sub: 'Any machinery or equipment used in farming, including spray rigs, augers, and irrigators — owned or under finance' },
                  { val: 'livestock', label: 'Livestock', sub: 'Cattle, sheep, horses, working dogs — including animals held in agistment for others' },
                  { val: 'crop-named-peril', label: 'Growing crops or stored grain and hay', sub: 'Covers fire and hail on crops in the ground, plus grain or hay in storage' },
                  { val: 'crop-mpci', label: 'Crop income that could be hit by drought, frost, or flood', sub: 'Multi-peril crop insurance (MPCI) — pays out if your yield falls below a set average due to a wide range of weather events. Ask your broker whether it\'s worth it for your situation.' },
                  { val: 'liability', label: 'Public liability', sub: 'Covers you if a visitor is injured on your property, or your farming activity causes damage to a neighbour\'s crops or fences. Most farm pack policies include this as standard.' },
                  { val: 'workers-comp', label: 'Employees, contractors, or seasonal workers', sub: 'Workers compensation is legally required if you employ anyone — including casuals and seasonal staff' },
                  { val: 'business-interruption', label: 'Significant income loss if the farm is shut down', sub: 'Business interruption cover pays lost revenue if a covered event forces your operation offline. Important for dairy, poultry, and other continuous operations.' },
                  { val: 'wine-spoilage', label: 'Winery, cellar door, or wine in storage', sub: 'Covers wine spoilage, smoke taint, contamination, leakage, and cellar door visitor liability' },
                ].map(({ val, label, sub }) => {
                  const selected = answers.coverage.includes(val)
                  return (
                    <div key={val} style={multiOption(selected)} onClick={() => toggleMulti('coverage', val)}>
                      <SquareBox selected={selected} />
                      <div>
                        <strong style={{ display: 'block', fontWeight: 600, marginBottom: '3px', color: selected ? 'var(--green)' : 'var(--text)' }}>{label}</strong>
                        <small style={{ fontSize: '12px', color: selected ? 'rgba(30,61,20,0.6)' : 'var(--muted)', lineHeight: 1.55, display: 'block' }}>{sub}</small>
                      </div>
                    </div>
                  )
                })}
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '32px', paddingTop: '24px', borderTop: '1px solid var(--border)' }}>
                <button onClick={goBack} style={{ background: 'none', border: 'none', color: 'var(--muted)', fontSize: '14px', cursor: 'pointer', fontFamily: "'DM Sans', sans-serif" }}>&larr; Back</button>
                <button onClick={goNext} style={{ background: 'var(--green)', color: 'white', border: 'none', padding: '13px 28px', borderRadius: '8px', fontSize: '15px', fontWeight: 600, cursor: 'pointer', fontFamily: "'DM Sans', sans-serif" }}>Next &rarr;</button>
              </div>
            </div>
          )}

          {/* ── Q5: Situation ── */}
          {step === 5 && (
            <div>
              <span style={{ fontSize: '12px', fontWeight: 600, color: 'var(--green-light)', textTransform: 'uppercase', letterSpacing: '1.5px', marginBottom: '10px', display: 'block' }}>Question 5 of 6</span>
              <h3 style={{ fontSize: '22px', marginBottom: '10px' }}>What&apos;s your current insurance situation?</h3>
              <div style={helpBox}>
                This helps us steer you to brokers set up for your circumstances. If your renewal has jumped, for example, you want a broker with access to multiple insurers — not one tied to a single underwriter.
              </div>
              <div style={{ display: 'grid', gap: '10px' }}>
                {[
                  { val: 'new', label: 'New to farming', sub: 'Need cover for the first time and not sure where to start' },
                  { val: 'renewal', label: 'Renewal premium has jumped significantly', sub: 'I want to compare options and see if I can do better' },
                  { val: 'review', label: 'I have cover but want to review it', sub: 'Not sure if I\'m properly covered, or whether I\'m paying the right amount' },
                  { val: 'uninsured', label: 'My farm is currently uninsured', sub: 'I know I need cover and want to get sorted quickly' },
                  { val: 'expanding', label: 'Expanding or setting up a new property', sub: 'Buying land, building infrastructure, or adding a new enterprise' },
                ].map(({ val, label, sub }) => (
                  <button key={val} style={optionBtn(answers.situation === val)} onClick={() => selectOption('situation', val)}>
                    <RadioDot selected={answers.situation === val} />
                    <span>
                      <strong style={{ display: 'block', fontWeight: 600, marginBottom: '2px' }}>{label}</strong>
                      <small style={{ fontSize: '12px', color: answers.situation === val ? 'rgba(30,61,20,0.6)' : 'var(--muted)' }}>{sub}</small>
                    </span>
                  </button>
                ))}
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '32px', paddingTop: '24px', borderTop: '1px solid var(--border)' }}>
                <button onClick={goBack} style={{ background: 'none', border: 'none', color: 'var(--muted)', fontSize: '14px', cursor: 'pointer', fontFamily: "'DM Sans', sans-serif" }}>&larr; Back</button>
                <button onClick={goNext} disabled={!answers.situation} style={{ background: 'var(--green)', color: 'white', border: 'none', padding: '13px 28px', borderRadius: '8px', fontSize: '15px', fontWeight: 600, cursor: answers.situation ? 'pointer' : 'not-allowed', opacity: answers.situation ? 1 : 0.35, fontFamily: "'DM Sans', sans-serif" }}>Next &rarr;</button>
              </div>
            </div>
          )}

          {/* ── Q6: Special features ── */}
          {step === 6 && (
            <div>
              <span style={{ fontSize: '12px', fontWeight: 600, color: 'var(--green-light)', textTransform: 'uppercase', letterSpacing: '1.5px', marginBottom: '10px', display: 'block' }}>Question 6 of 6</span>
              <h3 style={{ fontSize: '22px', marginBottom: '10px' }}>Does your farm have any of these features?</h3>
              <div style={helpBox}>
                These situations require <strong style={{ color: 'var(--text)', fontWeight: 600 }}>specialist underwriting experience</strong>. They won&apos;t stop you from getting cover — but some brokers handle them much better than others. If none apply, just skip below.
              </div>
              <p style={{ fontSize: '14px', color: 'var(--muted)', marginBottom: '20px' }}>Select all that apply, or skip if none do.</p>
              <div style={{ display: 'grid', gap: '10px' }}>
                {[
                  { val: 'cellar-door', label: 'Farm stay, tourism, or cellar door', sub: 'If members of the public visit your property for any reason, you need visitor liability cover — standard farm policies often exclude this' },
                  { val: 'agistment', label: 'You run agistment', sub: 'If you graze other people\'s livestock on your property, you take on a stock-not-owned liability that needs specific policy wording' },
                  { val: 'organic', label: 'Organic or sustainability certification', sub: 'Some insurers offer reduced premiums for certified-organic or sustainability-accredited farms' },
                  { val: 'irrigation', label: 'Significant irrigation infrastructure', sub: 'Pivots, channels, pump stations, and water licences can significantly affect your insured value — and are commonly underinsured' },
                  { val: 'multi-property', label: 'Multiple properties or locations', sub: 'Covering two or more properties under one policy structure requires a broker experienced in managing complex schedules' },
                ].map(({ val, label, sub }) => {
                  const selected = answers.special.includes(val)
                  return (
                    <div key={val} style={multiOption(selected)} onClick={() => toggleMulti('special', val)}>
                      <SquareBox selected={selected} />
                      <div>
                        <strong style={{ display: 'block', fontWeight: 600, marginBottom: '3px', color: selected ? 'var(--green)' : 'var(--text)' }}>{label}</strong>
                        <small style={{ fontSize: '12px', color: selected ? 'rgba(30,61,20,0.6)' : 'var(--muted)', lineHeight: 1.55, display: 'block' }}>{sub}</small>
                      </div>
                    </div>
                  )
                })}
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '32px', paddingTop: '24px', borderTop: '1px solid var(--border)' }}>
                <button onClick={goBack} style={{ background: 'none', border: 'none', color: 'var(--muted)', fontSize: '14px', cursor: 'pointer', fontFamily: "'DM Sans', sans-serif" }}>&larr; Back</button>
                <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
                  <span onClick={runMatching} style={{ fontSize: '13px', color: 'var(--muted)', cursor: 'pointer', textDecoration: 'underline', textUnderlineOffset: '3px' }}>Skip this step</span>
                  <button onClick={runMatching} style={{ background: 'var(--green)', color: 'white', border: 'none', padding: '13px 28px', borderRadius: '8px', fontSize: '15px', fontWeight: 600, cursor: 'pointer', fontFamily: "'DM Sans', sans-serif" }}>Find my matches &rarr;</button>
                </div>
              </div>
            </div>
          )}

          {/* ── RESULTS ── */}
          {step === 7 && results && (
            <div>
              <div style={{ textAlign: 'center', marginBottom: '28px' }}>
                <h2 style={{ fontSize: '26px', marginBottom: '8px' }}>Brokers matched to your farm</h2>
                <p style={{ color: 'var(--muted)', fontSize: '15px' }}>These brokers were matched to your farm based on your answers — compare them below.</p>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                {results.map((broker, i) => {
                  const reasons = getReasons(broker, answers)
                  return (
                    <div key={broker.id} style={{
                      border: `1.5px solid ${i === 0 ? 'var(--green)' : 'var(--border)'}`,
                      borderRadius: '12px', padding: '24px 28px',
                      background: 'var(--white)', position: 'relative', overflow: 'hidden',
                    }}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '12px' }}>
                        <div>
                          <div style={{ fontFamily: "'Fraunces', serif", fontSize: '20px', fontWeight: 700, color: 'var(--green)', marginBottom: '3px' }}>{broker.name}</div>
                          <div style={{ fontSize: '12px', color: 'var(--muted)' }}>{broker.type}</div>
                        </div>
                      </div>
                      <p style={{ fontSize: '14px', color: 'var(--muted)', lineHeight: 1.65, marginBottom: '16px' }}>{broker.description}</p>
                      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginBottom: '18px' }}>
                        {reasons.map(r => (
                          <span key={r} style={{ background: 'var(--cream-dark)', color: 'var(--soil)', fontSize: '12px', fontWeight: 500, padding: '4px 10px', borderRadius: '100px' }}>&#10003; {r}</span>
                        ))}
                      </div>
                      <div style={{ display: 'flex', gap: '10px', alignItems: 'center', flexWrap: 'wrap' }}>
                        {broker.phone && broker.show_phone !== false && (
                          <a
                            href={`tel:${broker.phone}`}
                            onClick={() => trackClick(broker.name, 'phone')}
                            style={{ background: 'var(--green)', color: 'white', padding: '10px 22px', borderRadius: '7px', fontSize: '14px', fontWeight: 600, textDecoration: 'none', fontFamily: "'DM Sans', sans-serif" }}
                          >
                            Call {broker.phone}
                          </a>
                        )}
                        {broker.website && broker.show_website !== false && (
                          <a
                            href={`https://${broker.website}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={() => trackClick(broker.name, 'website')}
                            style={{ color: 'var(--green)', fontSize: '14px', textDecoration: 'none', fontWeight: 500, padding: '10px 16px', border: '1px solid var(--border)', borderRadius: '7px', fontFamily: "'DM Sans', sans-serif" }}
                          >
                            Visit website →
                          </a>
                        )}
                      </div>
                    </div>
                  )
                })}
              </div>

              {results.length === 0 && (
                <div style={{ textAlign: 'center', padding: '40px', color: 'var(--muted)' }}>
                  <p style={{ fontSize: '18px', marginBottom: '12px' }}>No exact matches found</p>
                  <p>Try broadening your answers on farm type or scale.</p>
                </div>
              )}

              <div style={{ textAlign: 'center', marginTop: '28px' }}>
                <button onClick={restart} style={{ background: 'none', border: '1px solid var(--border)', color: 'var(--muted)', padding: '10px 22px', borderRadius: '7px', fontSize: '14px', cursor: 'pointer', fontFamily: "'DM Sans', sans-serif" }}>
                  &larr; Start over
                </button>
              </div>
            </div>
          )}

        </div>
      </div>
    </section>
  )
}
