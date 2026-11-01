import { waLink } from '../utils/whatsapp'

export default function SideEnquiryTab() {
  return (
    <a href={waLink('bulk')} target="_blank" rel="noopener noreferrer"
      className="fixed right-0 top-1/3 z-40 hidden bg-navy-deep px-3 py-5 text-sm font-bold text-white shadow-lg ring-1 ring-white/20 transition-colors hover:bg-water md:block"
      style={{ writingMode: 'vertical-rl' }}>
      For Sales Enquiry
    </a>
  )
}
