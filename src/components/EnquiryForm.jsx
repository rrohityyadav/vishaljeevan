import { useRef, useState } from 'react'
import { Loader2, CheckCircle2, Send } from 'lucide-react'
import { validateEnquiry } from '../utils/validation'
import { BUSINESS_TYPES, PRODUCT_OPTIONS, CAPACITIES, submitEnquiry } from '../utils/enquiry'
import { WhatsAppIcon } from './Icons'
import { useGsap } from '../hooks/useMotion'

const EMPTY = { name: '', company: '', mobile: '', email: '', businessType: '', product: '', capacity: '', quantity: '', branding: '', notes: '', website: '' }

function Field({ id, label, required, error, children }) {
  return (
    <div>
      <label htmlFor={id} className="mb-1.5 block text-sm font-bold text-navy-dark">{label}{required && <span className="text-red-600" aria-hidden="true"> *</span>}</label>
      {children}
      {error && <p id={`${id}-err`} role="alert" className="mt-1.5 text-sm font-semibold text-red-700">{error}</p>}
    </div>
  )
}
const inputCls = (err) => `w-full border bg-white px-3.5 py-3 text-base text-ink outline-none transition focus:border-water focus:ring-2 focus:ring-water/30 ${err ? 'border-red-600' : 'border-navy/30'}`

export default function EnquiryForm() {
  const ref = useRef(null)
  const [v, setV] = useState(EMPTY)
  const [errors, setErrors] = useState({})
  const [status, setStatus] = useState('idle') // idle | loading | done | error
  const [result, setResult] = useState(null)

  useGsap(ref, (gsap) => {
    gsap.from('[data-in]', { y: 32, opacity: 0, duration: 0.8, stagger: 0.12, ease: 'power3.out', scrollTrigger: { trigger: ref.current, start: 'top 75%', once: true } })
  }, [])

  const set = (k) => (e) => {
    setV((p) => ({ ...p, [k]: e.target.value }))
    if (errors[k]) setErrors((p) => ({ ...p, [k]: undefined }))
  }
  const a11y = (k) => ({ id: k, name: k, value: v[k], onChange: set(k), 'aria-invalid': !!errors[k], 'aria-describedby': errors[k] ? `${k}-err` : undefined })

  const onSubmit = async (e) => {
    e.preventDefault()
    if (v.website) return // honeypot
    const errs = validateEnquiry(v)
    setErrors(errs)
    if (Object.keys(errs).length) {
      document.getElementById(Object.keys(errs)[0])?.focus()
      return
    }
    setStatus('loading')
    try { setResult(await submitEnquiry(v)); setStatus('done') } catch { setStatus('error') }
  }

  return (
    <section id="contact" ref={ref} aria-labelledby="contact-title" className="facets diag-top relative -mt-[var(--slope)] pb-28 pt-[calc(var(--slope)+4rem)] sm:pb-36">
      <div className="mx-auto grid max-w-[1400px] gap-10 px-5 sm:px-8 lg:grid-cols-[.8fr_1.2fr] lg:gap-16">
        <div data-in className="text-white">
          <h2 id="contact-title" className="text-4xl font-extrabold leading-[1.05] tracking-tight sm:text-5xl">LET’S BUILD A BUSINESS TOGETHER</h2>
          <p className="mt-5 max-w-md leading-relaxed text-white/85">Looking for packaged drinking water, bulk supply, or customized branded bottles? Connect with our team.</p>
        </div>

        <div data-in className="bg-white p-5 shadow-2xl sm:p-9">
          {status === 'done' ? (
            <div role="status" className="py-8 text-center">
              <CheckCircle2 size={56} className="mx-auto text-water" />
              <h3 className="mt-4 text-2xl font-extrabold text-navy-dark">{result?.delivered ? 'Enquiry received' : 'Your enquiry is ready'}</h3>
              <p className="mx-auto mt-2 max-w-md">{result?.delivered ? 'Thank you. Our team will contact you shortly.' : 'Send it on WhatsApp to reach our team directly. Your details are filled in for you.'}</p>
              {!result?.delivered && <a href={result.whatsapp} target="_blank" rel="noopener noreferrer" className="btn btn-water mt-6"><WhatsAppIcon size={20} /> Send on WhatsApp</a>}
              <div><button type="button" onClick={() => { setV(EMPTY); setStatus('idle') }} className="mt-5 text-sm font-bold text-navy underline">Submit another enquiry</button></div>
            </div>
          ) : (
            <form onSubmit={onSubmit} noValidate className="grid gap-5 sm:grid-cols-2">
              <Field id="name" label="Full Name" required error={errors.name}><input {...a11y('name')} type="text" autoComplete="name" className={inputCls(errors.name)} /></Field>
              <Field id="company" label="Company Name"><input {...a11y('company')} type="text" autoComplete="organization" className={inputCls()} /></Field>
              <Field id="mobile" label="Mobile Number" required error={errors.mobile}><input {...a11y('mobile')} type="tel" inputMode="tel" autoComplete="tel" placeholder="10-digit mobile number" className={inputCls(errors.mobile)} /></Field>
              <Field id="email" label="Email Address" required error={errors.email}><input {...a11y('email')} type="email" autoComplete="email" className={inputCls(errors.email)} /></Field>
              <Field id="businessType" label="Business Type" required error={errors.businessType}>
                <select {...a11y('businessType')} className={inputCls(errors.businessType)}><option value="">Select…</option>{BUSINESS_TYPES.map((o) => <option key={o}>{o}</option>)}</select>
              </Field>
              <Field id="product" label="Product Required" required error={errors.product}>
                <select {...a11y('product')} className={inputCls(errors.product)}><option value="">Select…</option>{PRODUCT_OPTIONS.map((o) => <option key={o}>{o}</option>)}</select>
              </Field>
              <Field id="capacity" label="Bottle Capacity">
                <select {...a11y('capacity')} className={inputCls()}><option value="">Select…</option>{CAPACITIES.map((o) => <option key={o}>{o}</option>)}</select>
              </Field>
              <Field id="quantity" label="Approximate Quantity" error={errors.quantity}><input {...a11y('quantity')} type="text" inputMode="numeric" placeholder="e.g. 500" className={inputCls(errors.quantity)} /></Field>
              <fieldset className="sm:col-span-2" aria-describedby={errors.branding ? 'branding-err' : undefined}>
                <legend className="mb-1.5 text-sm font-bold text-navy-dark">Custom Branding Required <span className="text-red-600" aria-hidden="true">*</span></legend>
                <div className="flex gap-6">
                  {['Yes', 'No'].map((o) => (
                    <label key={o} className="flex cursor-pointer items-center gap-2 font-semibold"><input type="radio" name="branding" id={o === 'Yes' ? 'branding' : undefined} value={o} checked={v.branding === o} onChange={set('branding')} className="h-5 w-5 accent-[#079DDD]" />{o}</label>
                  ))}
                </div>
                {errors.branding && <p id="branding-err" role="alert" className="mt-1.5 text-sm font-semibold text-red-700">{errors.branding}</p>}
              </fieldset>
              <div className="sm:col-span-2">
                <Field id="notes" label="Additional Requirements" error={errors.notes}><textarea {...a11y('notes')} rows={4} className={inputCls(errors.notes)} /></Field>
              </div>
              {/* honeypot – hidden from people */}
              <div aria-hidden="true" className="absolute -left-[9999px]"><label>Website<input type="text" tabIndex={-1} autoComplete="off" value={v.website} onChange={set('website')} /></label></div>
              <div className="sm:col-span-2">
                {status === 'error' && <p role="alert" className="mb-3 font-semibold text-red-700">We couldn’t send your enquiry. Please try again, or message us on WhatsApp.</p>}
                <button type="submit" disabled={status === 'loading'} className="btn btn-water w-full py-4 text-base disabled:opacity-70 sm:w-auto sm:px-10">
                  {status === 'loading' ? <><Loader2 size={18} className="animate-spin" /> Sending…</> : <><Send size={18} /> SUBMIT ENQUIRY</>}
                </button>
                <p className="mt-3 text-xs text-ink/70">We use your details only to respond to this enquiry.</p>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}
