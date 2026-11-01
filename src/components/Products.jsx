import { useRef, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Keyboard, A11y } from 'swiper/modules'
import { ChevronLeft, ChevronRight, MessageCircle } from 'lucide-react'
import 'swiper/css'
import { PRODUCTS } from '../config/site'
import ProductImage from './ProductImage'
import { useGsap } from '../hooks/useMotion'
import { waLink } from '../utils/whatsapp'

export default function Products() {
  const ref = useRef(null)
  const [sw, setSw] = useState(null)

  useGsap(ref, (gsap) => {
    gsap.from('[data-head] > *', { y: 30, opacity: 0, duration: 0.8, stagger: 0.12, ease: 'power3.out', scrollTrigger: { trigger: ref.current, start: 'top 70%', once: true } })
    gsap.from('[data-slide]', { y: 70, opacity: 0, duration: 0.9, stagger: 0.09, ease: 'power3.out', scrollTrigger: { trigger: '[data-carousel]', start: 'top 85%', once: true } })
    // subtle float, only while visible
    gsap.utils.toArray('[data-float]').forEach((el, i) => {
      gsap.to(el, { y: -10, duration: 2.6 + (i % 3) * 0.3, ease: 'sine.inOut', yoyo: true, repeat: -1, scrollTrigger: { trigger: ref.current, start: 'top bottom', end: 'bottom top', toggleActions: 'play pause resume pause' } })
    })
  }, [])

  return (
    <section id="products" ref={ref} aria-labelledby="products-title" className="facets diag-both relative -mt-[var(--slope)] pb-32 pt-[calc(var(--slope)+4rem)] text-white sm:pb-40 lg:pt-[calc(var(--slope)+5rem)]">
      <div className="mx-auto max-w-[1400px] px-5 sm:px-8">
        <div data-head className="max-w-3xl">
          <h2 id="products-title" className="text-4xl font-extrabold tracking-tight sm:text-5xl">OUR PRODUCTS</h2>
          <p className="mt-4 max-w-2xl leading-relaxed text-white/85">Explore our complete range of premium packaged drinking water solutions for homes, offices, businesses, events, and commercial requirements.</p>
        </div>

        <div data-carousel className="relative mt-10">
          <Swiper modules={[Keyboard, A11y]} onSwiper={setSw}
            keyboard={{ enabled: true }} grabCursor spaceBetween={16} slidesPerView={1.25}
            breakpoints={{ 560: { slidesPerView: 2.1 }, 900: { slidesPerView: 3, spaceBetween: 24 }, 1280: { slidesPerView: 4, spaceBetween: 28 } }}
            a11y={{ prevSlideMessage: 'Previous product', nextSlideMessage: 'Next product' }}>
            {PRODUCTS.map((p) => (
              <SwiperSlide key={p.id} className="!h-auto">
                <article data-slide className="flex h-full flex-col border border-white/15 bg-navy-deep/40 p-5 backdrop-blur-sm">
                  <div className="relative flex h-72 items-end justify-center rounded-sm bg-gradient-to-b from-white/10 to-white/0 px-2 pb-3 sm:h-80">
                    <div data-float className="flex h-full items-end justify-center"><ProductImage p={p} className="h-full max-h-full w-auto drop-shadow-[0_18px_22px_rgba(0,0,0,.35)]" /></div>
                  </div>
                  <h3 className="mt-5 text-lg font-extrabold leading-snug">{p.name}</h3>
                  <p className="mt-1 text-sm font-bold text-water">Capacity: {p.cap}</p>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-white/80">{p.desc}</p>
                  <a href={waLink(p.msg || 'general', `Hello, I would like to enquire about the ${p.name}. Please share the available options.`)} target="_blank" rel="noopener noreferrer" className="btn btn-water mt-5 w-full"><MessageCircle size={17} /> Enquire Now</a>
                </article>
              </SwiperSlide>
            ))}
          </Swiper>
          <div className="mt-8 flex justify-center gap-5">
            <button type="button" onClick={() => sw?.slidePrev()} aria-label="Previous product" className="flex h-11 w-14 items-center justify-center bg-water text-white transition hover:bg-white hover:text-navy-dark disabled:opacity-40"><ChevronLeft /></button>
            <button type="button" onClick={() => sw?.slideNext()} aria-label="Next product" className="flex h-11 w-14 items-center justify-center bg-water text-white transition hover:bg-white hover:text-navy-dark disabled:opacity-40"><ChevronRight /></button>
          </div>
        </div>
      </div>
    </section>
  )
}
