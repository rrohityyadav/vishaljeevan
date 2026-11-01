import { photo } from '../utils/photos'
import { Bottle, Jar } from './art/Bottle'

// Renders a real photo if one exists in src/assets/photos, otherwise the SVG artwork.
export default function ProductImage({ p, className = '' }) {
  const src = photo(p.id)
  if (src) return <img src={src} alt={p.name} loading="lazy" decoding="async" className={`object-contain ${className}`} />
  if (p.kind === 'bottle') {
    return <Bottle title={p.name} tall={p.h} className={className} label={{ brand: p.cap.toUpperCase(), color: '#204A80', accent: '#079DDD' }} />
  }
  return <Jar variant={p.kind} title={p.name} className={className} />
}
