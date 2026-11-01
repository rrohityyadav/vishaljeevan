const INDIAN_MOBILE = /^(?:\+?91[\s-]?|0)?[6-9]\d{9}$/
const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/

export function validateEnquiry(v) {
  const e = {}
  if (!v.name.trim()) e.name = 'Enter your full name.'
  else if (v.name.trim().length < 2) e.name = 'Name must be at least 2 characters.'
  if (!v.mobile.trim()) e.mobile = 'Enter your mobile number.'
  else if (!INDIAN_MOBILE.test(v.mobile.replace(/[\s-]/g, ''))) e.mobile = 'Enter a valid 10-digit Indian mobile number starting with 6–9.'
  if (!v.email.trim()) e.email = 'Enter your email address.'
  else if (!EMAIL.test(v.email.trim())) e.email = 'Enter a valid email address, e.g. name@company.com.'
  if (!v.businessType) e.businessType = 'Select your business type.'
  if (!v.product) e.product = 'Select the product you need.'
  if (v.quantity && !/^\d+$/.test(v.quantity.trim())) e.quantity = 'Use numbers only, e.g. 500.'
  if (!v.branding) e.branding = 'Tell us if you need custom branding.'
  if (v.notes.length > 1000) e.notes = 'Please keep this under 1000 characters.'
  return e
}
