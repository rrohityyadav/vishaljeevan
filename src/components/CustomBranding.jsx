import { useRef } from 'react'
import { Check, MessageCircle } from 'lucide-react'
import { BRANDED, BRANDING_POINTS, CLAIMS } from '../config/site'
import { Bottle } from './art/Bottle'
import { useGsap } from '../hooks/useMotion'
import { photo } from '../utils/photos'
import { waLink } from '../utils/whatsapp'

export default function CustomBranding() {
  const ref = useRef(null)

  useGsap(ref, (gsap) => {
    gsap.from('[data-copy] > *', { y: 28, opacity: 0, duration: 0.8, stagger: 0.1, ease: 'power3.out', scrollTrigger: { trigger: ref.current, start: 'top 70%', once: true } })
    gsap.from('[data-brand]', { y: 80, opacity: 0, rotate: (i) => (i % 2 ? 5 : -5), duration: 1, stagger: { each: 0.08, from: 'center' }, ease: 'back.out(1.2)', scrollTrigger: { trigger: '[data-stage]', start: 'top 80%', once: true } })
  }, [])

  return (
    <section id="branding" ref={ref} aria-labelledby="branding-title" className="relative overflow-hidden bg-gradient-to-b from-white via-ice/60 to-white py-20 sm:py-28">
      <div className="mx-auto grid max-w-[1400px] gap-12 px-5 sm:px-8 lg:grid-cols-[.8fr_1.2fr] lg:gap-14">
        <div data-copy>
          <h2 id="branding-title" className="text-4xl font-extrabold leading-[1.05] tracking-tight text-navy-dark sm:text-5xl xl:text-6xl">YOUR BRAND.<br />OUR BOTTLES.</h2>
          <p className="mt-4 text-xl font-bold text-water sm:text-2xl">Turn Every Bottle Into a Marketing Opportunity.</p>
          <p className="mt-4 max-w-lg leading-relaxed">We offer customized packaged drinking water bottles with your own company logo, brand identity, and customized label designs.</p>
          <ul className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
            {BRANDING_POINTS.map((t) => (
              <li key={t} className="flex items-start gap-3 font-semibold text-navy-dark"><span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center bg-water text-white"><Check size={15} strokeWidth={3} /></span>{t}</li>
            ))}
          </ul>
          {(CLAIMS.minimumOrderQuantity || CLAIMS.printingMethods) && (
            <p className="mt-5 border-l-4 border-water pl-3 text-sm">
              {CLAIMS.printingMethods && <>Labelling: {CLAIMS.printingMethods}. </>}{CLAIMS.minimumOrderQuantity && <>Minimum order: {CLAIMS.minimumOrderQuantity}.</>}
            </p>
          )}
          <a href={waLink('branding')} target="_blank" rel="noopener noreferrer" className="btn btn-navy mt-8 w-full sm:w-auto"><MessageCircle size={18} /> GET YOUR CUSTOM BOTTLE</a>
        </div>

        <div data-stage>
          <ul className="grid grid-cols-2 gap-x-3 gap-y-8 sm:grid-cols-4 sm:gap-x-5">
            {BRANDED.map((b, i) => {
              const src = photo(`brand-${i}`)
              return (
                <li key={b.label} data-brand className="group flex flex-col items-center">
                  <div className="flex h-64 items-end justify-center transition-transform duration-500 group-hover:-translate-y-3 sm:h-72">
                    {src ? <img src={src} alt={`${b.label} branded water bottle`} loading="lazy" className="h-full object-contain" /> : <Bottle title={`${b.label} branded water bottle sample`} label={b} className="h-full w-auto drop-shadow-[0_16px_14px_rgba(23,61,109,.25)]" />}
                  </div>
                  <span className="mt-3 border-t-2 pt-2 text-center text-sm font-bold text-navy-dark" style={{ borderColor: b.accent }}>{b.label}</span>
                </li>
              )
            })}
          </ul>
          <p className="mt-8 text-center text-xs text-ink/70">Sample label designs shown for illustration. Your bottle will carry your own logo and artwork.</p>
        </div>
      </div>
    </section>
  )
}
