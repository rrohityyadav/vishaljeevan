import { useRef } from 'react'
import { ArrowDown, FileText } from 'lucide-react'
import { useGsap } from '../hooks/useMotion'
import { Bottle, Droplets, Ice, WaterSurface } from './art/Bottle'
import { photo } from '../utils/photos'
import { waLink } from '../utils/whatsapp'

const Splash = () => (
  <svg viewBox="0 0 500 520" className="absolute inset-0 h-full w-full" aria-hidden="true" fill="none" stroke="#fff" strokeLinecap="round">
    <g strokeOpacity=".55" strokeWidth="3">
      <path d="M120 360 C60 300 70 200 130 150" /><path d="M95 380 C20 300 30 190 100 120" strokeOpacity=".3" />
      <path d="M380 360 C440 300 430 200 370 150" /><path d="M405 380 C480 300 470 190 400 120" strokeOpacity=".3" />
      <path d="M150 400 C80 380 60 330 70 290" strokeWidth="5" strokeOpacity=".35" /><path d="M350 400 C420 380 440 330 430 290" strokeWidth="5" strokeOpacity=".35" />
    </g>
  </svg>
)

export default function Hero() {
  const ref = useRef(null)
  const heroPhoto = photo('hero')

  useGsap(ref, (gsap, ScrollTrigger, mm) => {
    const tl = gsap.timeline({ defaults: { ease: 'power3.out' } })
    tl.from('[data-label]', { opacity: 0, y: 16, duration: 0.6 })
      .from('[data-line]', { yPercent: 110, duration: 0.9, stagger: 0.14 }, '-=0.3')
      .from('[data-copy]', { opacity: 0, y: 20, duration: 0.7, stagger: 0.12 }, '-=0.5')
      .from('[data-bottle]', { opacity: 0, scale: 0.86, y: 40, duration: 1.3, ease: 'power2.out' }, 0.25)
      .from('[data-fx]', { opacity: 0, duration: 1, stagger: 0.1 }, 0.9)

    gsap.to('[data-drops] [data-drop]', { y: -9, duration: 2.6, ease: 'sine.inOut', yoyo: true, repeat: -1, stagger: { each: 0.25, from: 'random' } })

    mm.add('(min-width: 768px)', () => {
      gsap.to('[data-parallax-bg]', { yPercent: 14, ease: 'none', scrollTrigger: { trigger: ref.current, start: 'top top', end: 'bottom top', scrub: 0.6 } })
      gsap.to('[data-bottle]', { yPercent: -6, ease: 'none', scrollTrigger: { trigger: ref.current, start: 'top top', end: 'bottom top', scrub: 0.8 } })
    })
  }, [])

  return (
    <section id="home" ref={ref} aria-labelledby="hero-title" className="facets diag-bottom relative isolate overflow-hidden pb-28 pt-28 sm:pb-36 lg:pb-44 lg:pt-32">
      <div data-parallax-bg className="pointer-events-none absolute -inset-x-10 -top-20 bottom-0 -z-10 opacity-70" aria-hidden="true"
        style={{ background: 'radial-gradient(60% 55% at 72% 38%, rgba(7,157,221,.38), transparent 70%), radial-gradient(40% 40% at 10% 90%, rgba(15,44,82,.6), transparent 70%)' }} />
      <div className="mx-auto grid max-w-[1400px] items-center gap-6 px-5 sm:px-8 lg:grid-cols-[1.05fr_.95fr] lg:gap-4">
        <div className="relative z-10 order-1">
          <p data-label className="mb-5 inline-block border-l-4 border-water pl-3 text-xs font-bold tracking-[.18em] text-ice sm:text-sm">PREMIUM PACKAGED DRINKING WATER</p>
          <h1 id="hero-title" className="text-[2.4rem] font-extrabold leading-[1.02] tracking-tight text-white min-[400px]:text-5xl sm:text-6xl lg:text-5xl xl:text-[3.8rem] 2xl:text-[4.4rem]">
            {['PURE WATER.', 'PREMIUM QUALITY.', 'YOUR BRAND.'].map((l) => (
              <span key={l} className="block overflow-hidden pb-1"><span data-line className="block">{l}</span></span>
            ))}
          </h1>
          <p data-copy className="mt-6 max-w-xl text-base leading-relaxed text-white/85 sm:text-lg">
            Delivering quality packaged drinking water with reliable manufacturing, premium packaging, and customized branding solutions for businesses and individuals.
          </p>
          <div data-copy className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a href="#products" className="btn btn-water"><ArrowDown size={18} /> Explore Our Products</a>
            <a href={waLink('bulk')} target="_blank" rel="noopener noreferrer" className="btn btn-ghost"><FileText size={18} /> Get a Business Quote</a>
          </div>
        </div>

        <div className="relative order-2 mx-auto flex w-full max-w-[560px] justify-center">
          <div data-bottle className="relative flex h-[400px] w-full items-end justify-center sm:h-[520px] lg:h-[640px]">
            <div className="absolute inset-0" data-fx><Splash /></div>
            {heroPhoto ? (
              <img src={heroPhoto} alt="Premium packaged drinking water bottle with water splash" fetchPriority="high" width="520" height="620" className="relative z-10 h-full w-auto object-contain" />
            ) : (
              <Bottle title="Premium packaged drinking water bottle with water splash" className="relative z-10 h-[96%] w-auto drop-shadow-[0_30px_40px_rgba(7,40,80,.5)]" label={{ brand: SITE_BRAND, color: '#204A80', accent: '#079DDD' }} />
            )}
            <Ice className="absolute bottom-[8%] left-[2%] z-20 w-[34%]" />
            <Ice className="absolute bottom-[6%] right-[0%] z-20 w-[30%] -scale-x-100" />
            <div data-drops data-fx className="absolute inset-0 z-20"><Droplets className="h-full w-full" /></div>
          </div>
        </div>
      </div>
      <WaterSurface className="pointer-events-none absolute bottom-[calc(var(--slope)*.4)] right-0 h-24 w-[70%] opacity-90 lg:h-32 [mask-image:linear-gradient(to_right,transparent,#000_35%)]" />
    </section>
  )
}
const SITE_BRAND = 'YOUR BRAND'
