import { useRef } from 'react'
import { ShieldCheck, Layers, Palette, Boxes, Truck, Headset } from 'lucide-react'
import { WHY } from '../config/site'
import { useGsap } from '../hooks/useMotion'

const ICONS = { ShieldCheck, Layers, Palette, Boxes, Truck, Headset }

export default function WhyChooseUs() {
  const ref = useRef(null)
  useGsap(ref, (gsap) => {
    gsap.from('[data-head]', { y: 28, opacity: 0, duration: 0.8, ease: 'power3.out', scrollTrigger: { trigger: ref.current, start: 'top 75%', once: true } })
    gsap.from('[data-why]', { y: 40, opacity: 0, duration: 0.8, stagger: 0.1, ease: 'power3.out', scrollTrigger: { trigger: '[data-grid]', start: 'top 85%', once: true } })
  }, [])
  return (
    <section ref={ref} aria-labelledby="why-title" className="bg-white pb-20 pt-4 sm:pb-28">
      <div className="mx-auto max-w-[1400px] px-5 sm:px-8">
        <h2 data-head id="why-title" className="max-w-3xl text-4xl font-extrabold tracking-tight text-navy-dark sm:text-5xl">WHY BUSINESSES TRUST US</h2>
        <ul data-grid className="mt-12 grid gap-px bg-navy/15 sm:grid-cols-2 lg:grid-cols-3 border border-navy/15">
          {WHY.map((w) => {
            const Icon = ICONS[w.icon]
            return (
              <li key={w.t} data-why className="group bg-white p-7 transition-colors duration-300 hover:bg-navy-dark sm:p-9">
                <span className="flex h-14 w-14 items-center justify-center bg-ice text-navy-dark transition-colors duration-300 group-hover:bg-water group-hover:text-white"><Icon size={28} /></span>
                <h3 className="mt-5 text-xl font-extrabold text-navy-dark transition-colors group-hover:text-white">{w.t}</h3>
                <p className="mt-2 leading-relaxed text-ink/85 transition-colors group-hover:text-white/85">{w.d}</p>
              </li>
            )
          })}
        </ul>
      </div>
    </section>
  )
}
