import { SITE, WA_MESSAGES } from '../config/site'

export const waLink = (key = 'general', custom) => {
  const text = custom || WA_MESSAGES[key] || WA_MESSAGES.general
  return `https://wa.me/${SITE.whatsappNumber}?text=${encodeURIComponent(text)}`
}
