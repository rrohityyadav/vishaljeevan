import { useId } from 'react'

/* Detailed SVG product renders. Swap for real photos via src/assets/photos (see utils/photos.js). */

const Defs = ({ id }) => (
  <defs>
    <linearGradient id={`${id}w`} x1="0" x2="1">
      <stop offset="0" stopColor="#7FC8F5" stopOpacity=".55" />
      <stop offset=".35" stopColor="#D8F0FF" stopOpacity=".35" />
      <stop offset=".7" stopColor="#8CD0F7" stopOpacity=".5" />
      <stop offset="1" stopColor="#3C9BE0" stopOpacity=".7" />
    </linearGradient>
    <linearGradient id={`${id}p`} x1="0" x2="1">
      <stop offset="0" stopColor="#fff" stopOpacity=".55" />
      <stop offset=".5" stopColor="#fff" stopOpacity=".08" />
      <stop offset="1" stopColor="#fff" stopOpacity=".35" />
    </linearGradient>
    <linearGradient id={`${id}c`} x1="0" x2="1">
      <stop offset="0" stopColor="#0A6FB0" />
      <stop offset=".4" stopColor="#35B6F2" />
      <stop offset="1" stopColor="#0A5E98" />
    </linearGradient>
  </defs>
)

const BODY = 'M50 26 L50 42 C50 56 22 64 22 96 L22 296 Q22 310 38 310 L82 310 Q98 310 98 296 L98 96 C98 64 70 56 70 42 L70 26 Z'

export function Bottle({ label, className = '', title, capColor, tall = 1, ribs = true }) {
  const id = useId().replace(/:/g, '')
  const brand = label?.brand ?? 'YOUR BRAND'
  const c1 = label?.color ?? '#204A80'
  const c2 = label?.accent ?? '#079DDD'
  return (
    <svg viewBox="0 0 120 320" className={className} role="img" aria-label={title || 'Packaged drinking water bottle'} style={{ transform: `scale(${tall})`, transformOrigin: 'bottom' }}>
      <Defs id={id} />
      <ellipse cx="60" cy="313" rx="40" ry="5" fill="#0F2C52" opacity=".18" />
      <path d={BODY} fill="rgba(255,255,255,.35)" />
      <path d={BODY} fill={`url(#${id}w)`} />
      {ribs && [112, 126, 262, 276].map((y) => (
        <path key={y} d={`M22 ${y} Q60 ${y + 6} 98 ${y}`} stroke="#fff" strokeOpacity=".45" strokeWidth="1.4" fill="none" />
      ))}
      <path d="M22 205 Q60 212 98 205 L98 255 Q60 262 22 255Z" fill="none" />
      {/* label */}
      <path d="M22 140 Q60 148 98 140 L98 246 Q60 254 22 246Z" fill={c1} />
      {label?.pattern === 'stripe' && [0, 1, 2].map((k) => <path key={k} d={`M22 ${214 + k * 10} Q60 ${222 + k * 10} 98 ${214 + k * 10}`} stroke={c2} strokeWidth="4" fill="none" />)}
      {label?.pattern === 'dots' && [0, 1, 2, 3, 4, 5].map((k) => <circle key={k} cx={32 + k * 11} cy={218 + (k % 2) * 12} r="3.4" fill={c2} />)}
      {label?.pattern === 'wave' && <path d="M22 214 Q40 204 60 214 T98 214 L98 246 Q60 254 22 246Z" fill={c2} />}
      {(!label?.pattern || label.pattern === 'band') && <path d="M22 206 Q60 214 98 206 L98 246 Q60 254 22 246Z" fill={c2} />}
      {label?.pattern === 'solid' && <rect x="22" y="150" width="76" height="2" fill={c2} />}
      <text x="60" y="184" textAnchor="middle" fontFamily="Raleway, sans-serif" fontWeight="900" fontSize={brand.length > 6 ? 15 : 21} fill="#fff">{brand}</text>
      <text x="60" y="198" textAnchor="middle" fontFamily="Raleway, sans-serif" fontWeight="700" fontSize="6" fill="#fff" opacity=".9">DRINKING WATER</text>
      {/* highlights */}
      <path d={BODY} fill={`url(#${id}p)`} />
      <path d="M32 100 Q31 200 33 296" stroke="#fff" strokeOpacity=".75" strokeWidth="3.5" strokeLinecap="round" fill="none" />
      <path d="M88 104 Q89 200 87 290" stroke="#fff" strokeOpacity=".3" strokeWidth="2" strokeLinecap="round" fill="none" />
      <path d={BODY} fill="none" stroke="#fff" strokeOpacity=".7" strokeWidth="1.2" />
      {/* cap */}
      <rect x="45" y="6" width="30" height="22" rx="4" fill={capColor ? capColor : `url(#${id}c)`} />
      {[51, 56, 61, 66, 71].map((x) => <line key={x} x1={x} x2={x} y1="9" y2="25" stroke="#fff" strokeOpacity=".28" />)}
      <rect x="45" y="26" width="30" height="3" fill="#fff" opacity=".6" />
    </svg>
  )
}

export function Jar({ className = '', variant = 'jar', title }) {
  const id = useId().replace(/:/g, '')
  const isCan = variant === 'can'
  const is5 = variant === 'bottle5'
  const label = is5 ? '5 L' : isCan ? '10 L' : '20 L'
  return (
    <svg viewBox="0 0 200 300" className={className} role="img" aria-label={title || 'Water container'}>
      <Defs id={id} />
      <ellipse cx="100" cy="292" rx="70" ry="6" fill="#0F2C52" opacity=".2" />
      {/* neck + cap */}
      <rect x="78" y={is5 ? 26 : 14} width="44" height="24" rx="5" fill={`url(#${id}c)`} />
      {!is5 && <rect x="84" y="4" width="32" height="14" rx="4" fill="#E9F4FB" stroke="#C5DCEC" />}
      {/* body */}
      <path d="M82 40 C82 52 34 58 30 100 L30 262 Q30 282 52 282 L148 282 Q170 282 170 262 L170 100 C166 58 118 52 118 40 Z" fill="rgba(255,255,255,.35)" />
      <path d="M82 40 C82 52 34 58 30 100 L30 262 Q30 282 52 282 L148 282 Q170 282 170 262 L170 100 C166 58 118 52 118 40 Z" fill={`url(#${id}w)`} />
      {[120, 150, 200, 232].map((y) => <path key={y} d={`M30 ${y} Q100 ${y + 8} 170 ${y}`} stroke="#fff" strokeOpacity=".45" strokeWidth="2" fill="none" />)}
      <rect x="62" y="150" width="76" height="40" rx="3" fill="#204A80" opacity=".92" />
      <text x="100" y="177" textAnchor="middle" fontFamily="Raleway, sans-serif" fontWeight="900" fontSize="22" fill="#fff">{label}</text>
      {/* handle recess */}
      <path d="M30 140 Q50 150 50 176 Q50 202 30 212" fill="#0A5E98" opacity=".22" />
      <path d="M30 140 Q50 150 50 176 Q50 202 30 212" stroke="#fff" strokeOpacity=".7" fill="none" strokeWidth="2" />
      {isCan && <path d="M66 48 Q100 22 134 48" stroke="#0A5E98" strokeWidth="7" strokeLinecap="round" fill="none" />}
      <path d="M44 104 Q40 190 44 266" stroke="#fff" strokeOpacity=".8" strokeWidth="6" strokeLinecap="round" fill="none" />
      <path d="M158 110 Q161 190 157 262" stroke="#fff" strokeOpacity=".3" strokeWidth="3" strokeLinecap="round" fill="none" />
      <path d="M82 40 C82 52 34 58 30 100 L30 262 Q30 282 52 282 L148 282 Q170 282 170 262 L170 100 C166 58 118 52 118 40 Z" fill="none" stroke="#fff" strokeOpacity=".7" />
    </svg>
  )
}

export const Droplets = ({ className = '' }) => (
  <svg viewBox="0 0 400 400" className={className} aria-hidden="true">
    {[[40, 80, 7], [90, 40, 4], [330, 60, 9], [370, 140, 5], [20, 220, 5], [360, 260, 8], [60, 320, 6], [300, 340, 4], [200, 20, 5]].map(([x, y, r], i) => (
      <g key={i} data-drop>
        <path d={`M${x} ${y - r * 1.6} C${x + r * 1.1} ${y - r * 0.4} ${x + r} ${y + r} ${x} ${y + r} C${x - r} ${y + r} ${x - r * 1.1} ${y - r * 0.4} ${x} ${y - r * 1.6}Z`} fill="#fff" fillOpacity=".35" stroke="#fff" strokeOpacity=".7" />
        <circle cx={x - r * .3} cy={y} r={r * .25} fill="#fff" />
      </g>
    ))}
  </svg>
)

export const Ice = ({ className = '' }) => (
  <svg viewBox="0 0 160 90" className={className} aria-hidden="true">
    <g fill="#DFF3FF" fillOpacity=".6" stroke="#fff" strokeOpacity=".9">
      <path d="M10 44 L44 34 L66 52 L40 72 Z" /><path d="M60 40 L100 28 L122 48 L90 70 Z" />
      <path d="M96 56 L134 50 L150 70 L112 80 Z" /><path d="M32 68 L62 62 L72 80 L40 84 Z" />
    </g>
    <path d="M44 34 L40 72 M100 28 L90 70" stroke="#fff" strokeOpacity=".6" />
  </svg>
)

export const WaterSurface = ({ className = '' }) => (
  <svg viewBox="0 0 800 120" preserveAspectRatio="none" className={className} aria-hidden="true">
    <defs><linearGradient id="ws" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stopColor="#9BD8FA" stopOpacity=".95" /><stop offset="1" stopColor="#fff" stopOpacity="0" /></linearGradient></defs>
    <path d="M0 40 Q100 15 200 38 T400 36 T600 40 T800 30 V120 H0Z" fill="url(#ws)" />
    <path d="M0 40 Q100 15 200 38 T400 36 T600 40 T800 30" stroke="#fff" strokeOpacity=".9" strokeWidth="3" fill="none" />
    <path d="M60 62 Q160 50 260 64 T460 60" stroke="#fff" strokeOpacity=".5" strokeWidth="2" fill="none" />
  </svg>
)
