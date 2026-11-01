import { waLink } from './whatsapp'

export const BUSINESS_TYPES = ['Hotel / Resort', 'Restaurant / Cafe', 'Corporate Office', 'Wedding / Event Planner', 'Retailer / Distributor', 'Hospital / Institution', 'Marketing Agency', 'Individual / Household', 'Other']
export const PRODUCT_OPTIONS = ['Packaged drinking water bottles', '20 litre water jar supply', 'Bulk supply', 'Customized branded bottles', 'Private-label bottles', 'Distribution partnership']
export const CAPACITIES = ['250 ml', '300 ml', '500 ml', '750 ml', '1 litre', '2 litres', '5 litres', '10 litres', '20 litres', 'Multiple sizes']

export const enquiryMessage = (v) => [
  'Hello, I would like to send a business enquiry.',
  `Name: ${v.name.trim()}`,
  v.company.trim() && `Company: ${v.company.trim()}`,
  `Mobile: ${v.mobile.trim()}`,
  `Email: ${v.email.trim()}`,
  `Business type: ${v.businessType}`,
  `Product: ${v.product}`,
  v.capacity && `Capacity: ${v.capacity}`,
  v.quantity && `Approx. quantity: ${v.quantity}`,
  `Custom branding: ${v.branding}`,
  v.notes.trim() && `Notes: ${v.notes.trim()}`,
].filter(Boolean).join('\n')

/**
 * Sends the enquiry to VITE_ENQUIRY_ENDPOINT (JSON POST) when configured.
 * With no endpoint the site has no backend, so the enquiry is handed to WhatsApp instead.
 */
export async function submitEnquiry(v) {
  const endpoint = import.meta.env.VITE_ENQUIRY_ENDPOINT
  const whatsapp = waLink('general', enquiryMessage(v))
  if (!endpoint) {
    await new Promise((r) => setTimeout(r, 600))
    return { delivered: false, whatsapp }
  }
  const res = await fetch(endpoint, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(v) })
  if (!res.ok) throw new Error('Request failed')
  return { delivered: true, whatsapp }
}
