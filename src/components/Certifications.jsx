import { useRef } from 'react'
import { BadgeCheck } from 'lucide-react'
import { CERTIFICATIONS } from '../config/site'
import { useGsap } from '../hooks/useMotion'

export default function Certifications() {
  const ref = useRef(null)
  useGsap(ref, (gsap) => {
    gsap.from('[data-head] > *', { y: 24, opacity: 0, duration: 0.8, stagger: 0.12, ease: 'power3.out', scrollTrigger: { trigger: ref.current, start: 'top 75%', once: true } })
    gsap.from('[data-cert]', { y: 30, opacity: 0, scale: 0.96, duration: 0.7, stagger: 0.09, ease: 'power3.out', scrollTrigger: { trigger: '[data-grid]', start: 'top 88%', once: true } })
  }, [])
  const has = CERTIFICATIONS.length > 0
  return (
    <section id="quality" ref={ref} aria-labelledby="cert-title" className="bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-5xl px-5 text-center sm:px-8">
        <div data-head>
          <h2 id="cert-title" className="text-[1.65rem] font-extrabold tracking-tight text-navy min-[380px]:text-3xl sm:text-5xl">QUALITY &amp; CERTIFICATIONS</h2>
          <p className="mx-auto mt-4 max-w-2xl leading-relaxed">Our focus is on quality, hygiene, and responsible manufacturing practices.</p>
        </div>
        <ul data-grid className="mt-12 grid grid-cols-2 gap-5 md:grid-cols-4">
          {has ? CERTIFICATIONS.map((c) => (
            <li key={c.name} data-cert className="flex flex-col items-center justify-center gap-3 border border-navy/15 p-6">
              {c.logo ? <img src={c.logo} alt={c.name} loading="lazy" className="h-20 w-auto object-contain" /> : <BadgeCheck size={48} className="text-water" />}
              <span className="text-sm font-bold text-navy-dark">{c.name}</span>
              {c.detail && <span className="text-xs">{c.detail}</span>}
            </li>
          )) : Array.from({ length: 4 }).map((_, i) => (
            <li key={i} data-cert className="flex h-36 flex-col items-center justify-center gap-2 border-2 border-dashed border-navy/25 p-4 text-navy/60">
              <BadgeCheck size={32} /><span className="text-xs font-semibold">Certification details to be added</span>
            </li>
          ))}
        </ul>
        {!has && <p className="mx-auto mt-8 max-w-xl text-sm text-ink/70">Approvals and licences will be listed here once verified documents are available.{import.meta.env.DEV && <> (Dev note: edit <code className="rounded bg-ice px-1">CERTIFICATIONS</code> in <code className="rounded bg-ice px-1">src/config/site.js</code>.)</>}</p>}
      </div>
    </section>
  )
}
