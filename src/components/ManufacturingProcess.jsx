import { useRef } from 'react'
import { Waves, FlaskConical, Filter, ClipboardCheck, Sparkles, GlassWater, PackageCheck, Warehouse } from 'lucide-react'
import { PROCESS } from '../config/site'
import { useGsap } from '../hooks/useMotion'
import { photo } from '../utils/photos'

const ICONS = [Waves, FlaskConical, Filter, ClipboardCheck, Sparkles, GlassWater, PackageCheck, Warehouse]

export default function ManufacturingProcess() {
  const ref = useRef(null)

  useGsap(ref, (gsap, ST, mm) => {
    gsap.from('[data-head] > *', { y: 28, opacity: 0, duration: 0.8, stagger: 0.12, ease: 'power3.out', scrollTrigger: { trigger: ref.current, start: 'top 75%', once: true } })
    mm.add('(min-width: 1280px)', () => {
      const tl = gsap.timeline({ scrollTrigger: { trigger: '[data-steps]', start: 'top 75%', once: true } })
      tl.from('[data-line-h]', { scaleX: 0, transformOrigin: 'left', duration: 1.6, ease: 'power2.inOut' })
        .from('[data-step]', { y: 36, opacity: 0, duration: 0.6, stagger: 0.17, ease: 'power3.out' }, 0.1)
    })
    mm.add('(max-width: 1279px)', () => {
      gsap.utils.toArray('[data-step]').forEach((el) => gsap.from(el, { y: 36, opacity: 0, duration: 0.7, ease: 'power3.out', scrollTrigger: { trigger: el, start: 'top 88%', once: true } }))
    })
  }, [])

  return (
    <section id="expertise" ref={ref} aria-labelledby="exp-title" className="facets diag-both relative -mt-[var(--slope)] pb-32 pt-[calc(var(--slope)+4.5rem)] text-white sm:pb-40">
      <div className="mx-auto max-w-[1400px] px-5 sm:px-8">
        <div data-head className="max-w-3xl">
          <h2 id="exp-title" className="text-4xl font-extrabold tracking-tight sm:text-5xl">QUALITY IS OUR PRIORITY</h2>
          <p className="mt-4 text-white/85">From source water to dispatch, here is the journey every bottle follows.</p>
        </div>

        <ol data-steps className="relative mt-14 grid gap-0 md:grid-cols-2 md:gap-x-8 md:gap-y-12 xl:grid-cols-8 xl:gap-x-4">
          <span data-line-h aria-hidden="true" className="absolute left-0 right-0 top-8 hidden h-0.5 bg-water/70 xl:block" />
          <span aria-hidden="true" className="absolute bottom-6 left-[1.9rem] top-6 w-0.5 bg-water/50 md:hidden" />
          {PROCESS.map((s, i) => {
            const Icon = ICONS[i]
            const src = photo(`step-${i + 1}`)
            return (
              <li key={s.t} data-step className="relative flex gap-5 pb-9 last:pb-0 md:block md:pb-0 xl:text-center">
                <span className="relative z-10 flex h-16 w-16 shrink-0 items-center justify-center overflow-hidden border-2 border-water bg-navy-dark text-white xl:mx-auto">
                  {src ? <img src={src} alt="" loading="lazy" className="h-full w-full object-cover" /> : <Icon size={26} />}
                </span>
                <div className="md:mt-4">
                  <p className="text-sm font-extrabold text-water">Step {i + 1}</p>
                  <h3 className="mt-1 text-base font-extrabold leading-snug">{s.t}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-white/75">{s.d}</p>
                </div>
              </li>
            )
          })}
        </ol>
        <p className="mt-10 text-xs text-white/60">Illustrative process stages. Final steps are confirmed against the plant’s own operations.</p>
      </div>
    </section>
  )
}
