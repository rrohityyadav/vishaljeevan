import { useRef, useState } from 'react'
import { ChevronDown } from 'lucide-react'
import { useGsap } from '../hooks/useMotion'
import { Jar, Droplets } from './art/Bottle'
import { photo } from '../utils/photos'
import { SITE } from '../config/site'

export default function About() {
  const ref = useRef(null)
  const [more, setMore] = useState(false)
  const img = photo('jar-about')

  useGsap(ref, (gsap, ScrollTrigger, mm) => {
    mm.add('(min-width: 1024px)', () => {
      const tl = gsap.timeline({ scrollTrigger: { trigger: ref.current, start: 'top 70%' }, defaults: { ease: 'power3.out' } })
      tl.from('[data-img]', { x: -120, opacity: 0, duration: 1.1 }).from('[data-text]', { x: 80, opacity: 0, duration: 1 }, 0.1)
        .from('[data-p]', { y: 24, opacity: 0, duration: 0.7, stagger: 0.18 }, 0.5)
    })
    mm.add('(max-width: 1023px)', () => {
      const tl = gsap.timeline({ scrollTrigger: { trigger: ref.current, start: 'top 75%' }, defaults: { ease: 'power3.out' } })
      tl.from('[data-img]', { y: 50, opacity: 0, duration: 0.9 }).from('[data-text]', { y: 30, opacity: 0, duration: 0.8 }, 0.1)
        .from('[data-p]', { y: 20, opacity: 0, duration: 0.6, stagger: 0.14 }, 0.4)
    })
  }, [])

  return (
    <section id="about" ref={ref} aria-labelledby="about-title" className="relative bg-white pb-28 pt-12 sm:pb-36 lg:pt-20">
      <div className="mx-auto grid max-w-[1400px] items-center gap-10 px-5 sm:px-8 lg:grid-cols-2 lg:gap-16">
        <div data-img className="relative mx-auto flex w-full max-w-[560px] justify-center lg:-ml-8 lg:max-w-none xl:-ml-16">
          <div className="absolute inset-x-6 bottom-4 top-10 -z-0 rounded-full bg-gradient-to-t from-ice to-transparent blur-2xl" aria-hidden="true" />
          {img ? (
            <img src={img} alt="20 litre water jar with water splash" loading="lazy" width="700" height="600" className="relative w-full object-contain" />
          ) : (
            <div className="relative flex h-[320px] items-end justify-center sm:h-[460px] lg:h-[540px]">
              <Jar variant="jar" title="20 litre water jar" className="relative z-10 h-full w-auto drop-shadow-[0_25px_30px_rgba(23,61,109,.25)]" />
              <Jar variant="jar" title="" className="relative -ml-16 h-[62%] w-auto -rotate-12 opacity-95 max-sm:hidden" />
              <Droplets className="absolute inset-0 h-full w-full" />
            </div>
          )}
        </div>

        <div data-text className="lg:pr-6">
          <h2 id="about-title" className="text-4xl font-extrabold tracking-tight text-navy-dark sm:text-5xl">THE COMPANY</h2>
          <p data-p className="mt-3 text-xl font-bold text-water sm:text-2xl">Pure Water. Trusted Quality. Reliable Supply.</p>
          <p data-p className="mt-5 max-w-xl leading-relaxed text-ink/90">
            {SITE.name} is a packaged drinking water manufacturer focused on hygiene, consistent quality and dependable supply. From purification to sealed packaging, every stage is run with care so the water on your table, in your office or at your event is something you can trust.
          </p>
          <p data-p className="mt-4 max-w-xl leading-relaxed text-ink/90">
            We pack water in sizes from 250 ml bottles to 20 litre jars, supply in bulk to businesses and distributors, and offer customized branding so your logo and label design sit on every bottle.
          </p>
          <ul data-p className="mt-5 grid max-w-xl gap-x-6 gap-y-2 text-[.95rem] font-semibold text-navy-dark sm:grid-cols-2">
            {['Manufacturing capabilities', 'Water purification processes', 'Packaging solutions', 'Bulk supply', 'Distribution network', 'Customized branding services'].map((t) => (
              <li key={t} className="flex items-center gap-2"><span className="h-2 w-2 rotate-45 bg-water" />{t}</li>
            ))}
          </ul>
          <div className={`grid transition-all duration-500 ${more ? 'mt-4 grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}>
            <p id="about-more" className="max-w-xl overflow-hidden leading-relaxed text-ink/90" aria-hidden={!more}>
              Our commitment is simple: honest service, clear communication and water that is packed and delivered with the same standards, whether the order is a single carton or a long-term supply contract. {/* TODO: replace with verified company story */}
            </p>
          </div>
          <button type="button" data-p onClick={() => setMore((m) => !m)} aria-expanded={more} aria-controls="about-more" className="btn btn-water mt-7">
            {more ? 'Show Less' : 'Read More'} <ChevronDown size={18} className={`transition-transform ${more ? 'rotate-180' : ''}`} />
          </button>
        </div>
      </div>
    </section>
  )
}
