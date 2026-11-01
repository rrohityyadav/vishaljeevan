import { WhatsAppIcon } from './Icons'
import { waLink } from '../utils/whatsapp'

export default function WhatsAppButton() {
  return (
    <div className="fixed z-40 right-4 sm:right-6 group" style={{ bottom: 'max(1rem, env(safe-area-inset-bottom))' }}>
      <span role="tooltip" id="wa-tip" className="pointer-events-none absolute right-16 top-1/2 -translate-y-1/2 whitespace-nowrap rounded bg-navy-deep px-3 py-2 text-sm font-semibold text-white opacity-0 shadow-lg transition-opacity group-hover:opacity-100 group-focus-within:opacity-100 max-sm:hidden">
        Chat With Our Team
      </span>
      <a href={waLink('general')} target="_blank" rel="noopener noreferrer" aria-label="Chat with our team on WhatsApp" aria-describedby="wa-tip"
        className="relative flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_10px_30px_-8px_rgba(37,211,102,.8)]"
        style={{ animation: 'wa-float 3.6s ease-in-out infinite' }}>
        <span className="absolute inset-0 rounded-full bg-[#25D366]" style={{ animation: 'ripple 2.8s ease-out infinite' }} aria-hidden="true" />
        <WhatsAppIcon size={30} className="relative" />
      </a>
    </div>
  )
}
