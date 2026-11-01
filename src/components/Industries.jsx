import { useRef } from 'react'
import { Hotel, UtensilsCrossed, Building2, PartyPopper, Store, Hospital, Megaphone, Gift, ArrowRight } from 'lucide-react'
import { INDUSTRIES } from '../config/site'
import { useGsap } from '../hooks/useMotion'
import { photo } from '../utils/photos'
import { waLink } from '../utils/whatsapp'

const ICONS = [Hotel, UtensilsCrossed, Building2, PartyPopper, Store, Hospital, Megaphone, Gift]
const TONES = ['#173D6D', '#1d4f8a', '#204A80', '#0f5f9c', '#0A5E98', '#15497f', '#0b6aa8', '#1c5a96']

export default function Industries() {
  const ref = useRef(null)
  useGsap(ref, (gsap) => {
    gsap.from('[data-head]', { y: 28, opacity: 0, duration: 0.8, ease: 'power3.out', scrollTrigger: { trigger: ref.current, start: 'top 75%', once: true } })
    gsap.from('[data-ind]', { y: 50, opacity: 0, duration: 0.8, stagger: 0.08, ease: 'power3.out', scrollTrigger: { trigger: '[data-grid]', start: 'top 85%', once: true } })
  }, [])
  return (
    <section ref={ref} aria-labelledby="ind-title" className="bg-ice/50 py-20 sm:py-28">
      <div className="mx-auto max-w-[1400px] px-5 sm:px-8">
        <h2 data-head id="ind-title" className="max-w-3xl text-4xl font-extrabold tracking-tight text-navy-dark sm:text-5xl">WATER SOLUTIONS FOR EVERY BUSINESS</h2>
        <ul data-grid className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {INDUSTRIES.map((c, i) => {
            const Icon = ICONS[i]; const src = photo(`industry-${i}`)
            return (
              <li key={c.t} data-ind className="group flex flex-col overflow-hidden bg-white shadow-[0_14px_30px_-20px_rgba(23,61,109,.5)]">
                <div className="relative flex h-40 items-center justify-center overflow-hidden" style={{ background: `linear-gradient(135deg, ${TONES[i]}, #079DDD)` }}>
                  {src ? <img src={src} alt="" loading="lazy" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" /> : <><Icon size={56} className="relative z-10 text-white transition-transform duration-500 group-hover:scale-110" strokeWidth={1.4} /><span aria-hidden="true" className="absolute -right-10 -top-10 h-40 w-40 rotate-45 bg-white/10" /></>}
                </div>
                <div className="flex flex-1 flex-col p-5">
                  <h3 className="text-lg font-extrabold text-navy-dark">{c.t}</h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed">{c.d}</p>
                  <a href={waLink(c.msg, `Hello, I run a business in the ${c.t.toLowerCase()} segment and would like to discuss water supply options.`)} target="_blank" rel="noopener noreferrer" className="mt-4 inline-flex items-center gap-2 text-sm font-bold text-water transition-all hover:gap-3">Enquire <ArrowRight size={16} /><span className="sr-only"> about {c.t}</span></a>
                </div>
              </li>
            )
          })}
        </ul>
      </div>
    </section>
  )
}
