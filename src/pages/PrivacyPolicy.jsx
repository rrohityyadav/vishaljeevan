import { LegalShell } from './Legal'
import { SITE } from '../config/site'

export default function PrivacyPolicy() {
  return (
    <LegalShell title="Privacy Policy" path="/privacy-policy">
      <p>{SITE.name} collects the details you submit through the enquiry form or WhatsApp (such as name, company, mobile number, email and order requirements) only to respond to your enquiry and to supply products and services.</p>
      <h2>How we use information</h2><p>We use your details to contact you about quotes, orders and support. We do not sell your personal information.</p>
      <h2>Sharing</h2><p>Information is shared only with service providers needed to fulfil your request, or where required by law.</p>
      <h2>Your choices</h2><p>You may ask us to correct or delete your information by contacting {SITE.email} or {SITE.phoneDisplay}.</p>
    </LegalShell>
  )
}
