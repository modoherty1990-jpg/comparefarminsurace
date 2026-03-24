export default function Logo({ variant = 'dark', height = 48 }) {
  const green = '#1e3d14'
  const amber = '#c9a227'
  const markColor = variant === 'dark' ? 'white' : green
  const awnColor = variant === 'dark' ? amber : amber

  if (variant === 'icon') {
    return (
      <svg height={height} viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg" aria-label="Compare Farm Insurance">
        <rect width="80" height="80" rx="12" fill={green} />
        <line x1="40" y1="62" x2="40" y2="28" stroke="white" strokeWidth="2.2" strokeLinecap="round" />
        <ellipse cx="40" cy="25" rx="7.5" ry="11" fill="white" />
        <ellipse cx="28" cy="35" rx="6.5" ry="8.5" fill="white" fillOpacity="0.78" transform="rotate(-22 28 35)" />
        <ellipse cx="31" cy="48" rx="5.5" ry="7.5" fill="white" fillOpacity="0.52" transform="rotate(-16 31 48)" />
        <ellipse cx="52" cy="35" rx="6.5" ry="8.5" fill="white" fillOpacity="0.78" transform="rotate(22 52 35)" />
        <ellipse cx="49" cy="48" rx="5.5" ry="7.5" fill="white" fillOpacity="0.52" transform="rotate(16 49 48)" />
        <line x1="40" y1="14" x2="40" y2="4" stroke={amber} strokeWidth="1.6" strokeLinecap="round" />
        <line x1="29" y1="26" x2="20" y2="16" stroke={amber} strokeWidth="1.3" strokeLinecap="round" />
        <line x1="51" y1="26" x2="60" y2="16" stroke={amber} strokeWidth="1.3" strokeLinecap="round" />
      </svg>
    )
  }

  return (
    <svg height={height} viewBox="0 0 320 60" fill="none" xmlns="http://www.w3.org/2000/svg" aria-label="Compare Farm Insurance" style={{ display: 'block' }}>
      <g transform="translate(28, 38)">
        <line x1="0" y1="38" x2="0" y2="-4" stroke={markColor} strokeWidth="1.8" strokeLinecap="round" />
        <ellipse cx="0" cy="-6" rx="7" ry="10.5" fill={markColor} />
        <ellipse cx="-9" cy="6" rx="6" ry="8.5" fill={markColor} fillOpacity="0.78" transform="rotate(-22 -9 6)" />
        <ellipse cx="-6.5" cy="19" rx="5.5" ry="7.5" fill={markColor} fillOpacity="0.52" transform="rotate(-16 -6.5 19)" />
        <ellipse cx="9" cy="6" rx="6" ry="8.5" fill={markColor} fillOpacity="0.78" transform="rotate(22 9 6)" />
        <ellipse cx="6.5" cy="19" rx="5.5" ry="7.5" fill={markColor} fillOpacity="0.52" transform="rotate(16 6.5 19)" />
        <line x1="0" y1="-17" x2="0" y2="-30" stroke={awnColor} strokeWidth="1.2" strokeLinecap="round" />
        <line x1="-9" y1="-1" x2="-17" y2="-13" stroke={awnColor} strokeWidth="1" strokeLinecap="round" />
        <line x1="9" y1="-1" x2="17" y2="-13" stroke={awnColor} strokeWidth="1" strokeLinecap="round" />
        <line x1="-6.5" y1="11" x2="-12" y2="2" stroke={awnColor} strokeWidth="0.8" strokeLinecap="round" strokeOpacity="0.7" />
        <line x1="6.5" y1="11" x2="12" y2="2" stroke={awnColor} strokeWidth="0.8" strokeLinecap="round" strokeOpacity="0.7" />
      </g>
      <line x1="56" y1="8" x2="56" y2="52" stroke={variant === 'dark' ? 'rgba(255,255,255,0.15)' : '#ddd5c7'} strokeWidth="1" />
      <text x="68" y="20" fontFamily="'DM Sans', Arial, sans-serif" fontSize="9" fontWeight="700" fill={variant === 'dark' ? amber : '#3d7a28'} letterSpacing="3">COMPARE</text>
      <text x="65" y="44" fontFamily="'Fraunces', Georgia, serif" fontSize="28" fontWeight="700" fill={markColor} letterSpacing="-1">farm</text>
      <text x="68" y="56" fontFamily="'Fraunces', Georgia, serif" fontSize="12" fontWeight="400" fill={variant === 'dark' ? 'rgba(255,255,255,0.65)' : green} letterSpacing="2">insurance</text>
      <line x1="68" y1="59" x2="310" y2="59" stroke={amber} strokeWidth="1" strokeOpacity={variant === 'dark' ? '0.45' : '1'} />
    </svg>
  )
}
