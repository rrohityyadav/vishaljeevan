import { useRef } from 'react'
import { Link } from 'react-router-dom'
import { Phone, Mail, MapPin } from 'lucide-react'
import { SITE } from '../config/site'
import { waLink } from '../utils/whatsapp'
import { SocialIcon, WhatsAppIcon } from './Icons'
import { useGsap } from '../hooks/useMotion'

export default function Footer() {
  const ref = useRef(null)
  useGsap(ref, (gsap) => {
    gsap.from('[data-col]', { y: 30, opacity: 0, duration: 0.8, stagger: 0.12, ease: 'power3.out', scrollTrigger: { trigger: ref.current, start: 'top 90%', once: true } })
  }, [])
  const socials = Object.entries(SITE.social).filter(([, url]) => url)
  const enquiries = [['Bulk Orders', 'bulk'], ['Custom Branding', 'branding'], ['Distribution Partnership', 'partnership'], ['Corporate Enquiries', 'general']]
  return (
    <footer ref={ref} className="bg-navy-dark text-white">
      <div className="mx-auto grid max-w-[1400px] gap-10 px-5 py-14 sm:px-8 md:grid-cols-3 md:py-16">
        <div data-col>
          <h2 className="text-2xl font-extrabold">{SITE.name}</h2>
          <p className="mt-3 max-w-sm text-sm leading-relaxed text-white/80">Packaged drinking water manufacturer supplying bottles, 20 litre jars and customized branded water to businesses and individuals.</p>
          <p className="mt-4 flex gap-2 text-sm text-white/80"><MapPin size={18} className="mt-0.5 shrink-0 text-water" /><span>{SITE.address}</span></p>
        </div>
        <div data-col>
          <h2 className="text-xl font-extrabold">Contact Details</h2>
          <ul className="mt-4 space-y-3 text-sm">
            <li><a href={`tel:${SITE.phoneTel}`} className="flex items-center gap-2 hover:text-water"><Phone size={17} className="text-water" /> {SITE.phoneDisplay}</a></li>
            <li><a href={waLink('general')} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-water"><WhatsAppIcon size={17} className="text-water" /> WhatsApp: {SITE.phoneDisplay}</a></li>
            <li><a href={`mailto:${SITE.email}`} className="flex items-center gap-2 break-all hover:text-water"><Mail size={17} className="shrink-0 text-water" /> {SITE.email}</a></li>
            <li><a href={SITE.url} className="flex items-center gap-2 break-all hover:text-water">Web: {SITE.url.replace(/^https?:\/\//, '')}</a></li>
          </ul>
        </div>
        <div data-col>
          <h2 className="text-xl font-extrabold">Business Enquiries</h2>
          <ul className="mt-4 space-y-3 text-sm">
            {enquiries.map(([t, k]) => <li key={t}><a href={waLink(k)} target="_blank" rel="noopener noreferrer" className="hover:text-water">{t}</a></li>)}
          </ul>
        </div>
      </div>
      <div className="border-t border-white/15 bg-navy-deep">
        <div className="mx-auto flex max-w-[1400px] flex-col items-center justify-between gap-4 px-5 py-5 pb-24 text-xs text-white/75 sm:px-8 md:flex-row md:pb-5">
          <p>© {new Date().getFullYear()} {SITE.name}. All rights reserved.</p>
          <nav aria-label="Legal" className="flex flex-wrap justify-center gap-x-5 gap-y-2">
            <Link to="/privacy-policy" className="hover:text-white">Privacy Policy</Link>
            <Link to="/terms-and-conditions" className="hover:text-white">Terms and Conditions</Link>
            <Link to="/terms-and-conditions#refund-cancellation" className="hover:text-white">Refund / Cancellation Policy</Link>
          </nav>
          {socials.length > 0 && (
            <ul className="flex gap-3">{socials.map(([n, url]) => <li key={n}><a href={url} target="_blank" rel="noopener noreferrer" aria-label={n} className="flex h-9 w-9 items-center justify-center border border-white/40 transition hover:border-water hover:bg-water"><SocialIcon name={n} /></a></li>)}</ul>
          )}
        </div>
      </div>
    </footer>
  )
}
