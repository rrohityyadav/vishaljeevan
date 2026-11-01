import { useEffect, useRef, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X, Phone } from 'lucide-react'
import { NAV, SITE } from '../config/site'
import { waLink } from '../utils/whatsapp'
import { WhatsAppIcon } from './Icons'
import { useGsap } from '../hooks/useMotion'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [solid, setSolid] = useState(false)
  const [active, setActive] = useState('#home')
  const ref = useRef(null)
  const { pathname } = useLocation()
  const home = pathname === '/'
  const to = (h) => (home ? h : `/${h}`)

  useGsap(ref, (gsap) => {
    gsap.from('[data-nav]', { y: -30, opacity: 0, duration: 0.8, ease: 'power3.out', stagger: 0.06, delay: 0.1 })
  }, [])

  useEffect(() => {
    const on = () => setSolid(window.scrollY > 40)
    on(); window.addEventListener('scroll', on, { passive: true })
    return () => window.removeEventListener('scroll', on)
  }, [])

  useEffect(() => {
    if (!home) return
    const ids = NAV.map((n) => n.href.slice(1))
    const io = new IntersectionObserver((es) => es.forEach((e) => e.isIntersecting && setActive(`#${e.target.id}`)), { rootMargin: '-45% 0px -50% 0px' })
    ids.forEach((id) => { const el = document.getElementById(id); el && io.observe(el) })
    return () => io.disconnect()
  }, [home])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    const esc = (e) => e.key === 'Escape' && setOpen(false)
    window.addEventListener('keydown', esc)
    return () => { document.body.style.overflow = ''; window.removeEventListener('keydown', esc) }
  }, [open])

  return (
    <header ref={ref} className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${solid || open ? 'bg-navy-dark/95 backdrop-blur shadow-lg' : 'bg-transparent'}`}>
      <nav aria-label="Primary" className="mx-auto flex h-16 max-w-[1400px] items-center justify-between px-4 sm:px-8 lg:h-20">
        <Link to="/" data-nav className="flex items-center gap-2 text-white" aria-label={`${SITE.name} home`}>
          <svg width="30" height="30" viewBox="0 0 64 64" aria-hidden="true"><path d="M32 6C32 6 12 30 12 43a20 20 0 0 0 40 0C52 30 32 6 32 6Z" fill="#079DDD" /><path d="M23 41a9 9 0 0 0 9 9" stroke="#fff" strokeWidth="4" strokeLinecap="round" fill="none" /></svg>
          <span className="text-lg font-extrabold tracking-tight sm:text-xl">{SITE.name}</span>
        </Link>

        <ul className="hidden items-center gap-5 xl:gap-7 lg:flex">
          {NAV.map((n) => (
            <li key={n.href} data-nav>
              <Link to={to(n.href)} className={`relative py-2 text-[.9rem] font-semibold text-white/90 transition-colors hover:text-white after:absolute after:inset-x-0 after:-bottom-0.5 after:h-0.5 after:origin-left after:bg-water after:transition-transform ${home && active === n.href ? 'after:scale-x-100' : 'after:scale-x-0 hover:after:scale-x-100'}`}>
                {n.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <a data-nav href={waLink('general')} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp us" className="hidden h-10 w-10 items-center justify-center rounded-full border border-white/40 text-white transition hover:bg-[#25D366] hover:border-[#25D366] sm:flex"><WhatsAppIcon size={20} /></a>
          <a data-nav href={`tel:${SITE.phoneTel}`} aria-label={`Call ${SITE.phoneDisplay}`} className="hidden h-10 w-10 items-center justify-center rounded-full border border-white/40 text-white transition hover:bg-water hover:border-water sm:flex"><Phone size={18} /></a>
          <button type="button" className="flex h-11 w-11 items-center justify-center text-white lg:hidden" aria-expanded={open} aria-controls="mobile-menu" aria-label={open ? 'Close menu' : 'Open menu'} onClick={() => setOpen((o) => !o)}>
            {open ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </nav>

      <div id="mobile-menu" className={`lg:hidden fixed inset-x-0 top-16 bottom-0 bg-navy-deep transition-[opacity,transform] duration-300 ${open ? 'translate-y-0 opacity-100' : 'pointer-events-none -translate-y-4 opacity-0'}`} aria-hidden={!open} inert={!open}>
        <ul className="px-6 pt-6">
          {NAV.map((n, i) => (
            <li key={n.href} className={`border-b border-white/10 transition-all duration-500 ${open ? 'translate-x-0 opacity-100' : '-translate-x-4 opacity-0'}`} style={{ transitionDelay: open ? `${80 + i * 50}ms` : '0ms' }}>
              <Link to={to(n.href)} onClick={() => setOpen(false)} className="block py-4 text-xl font-bold text-white">{n.label}</Link>
            </li>
          ))}
        </ul>
        <div className="grid grid-cols-2 gap-3 px-6 pt-8">
          <a href={waLink('general')} target="_blank" rel="noopener noreferrer" className="btn btn-water"><WhatsAppIcon size={18} /> WhatsApp</a>
          <a href={`tel:${SITE.phoneTel}`} className="btn btn-ghost"><Phone size={18} /> Call</a>
        </div>
      </div>
    </header>
  )
}
