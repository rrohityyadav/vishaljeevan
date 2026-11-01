import { LegalShell } from './Legal'
import { SITE } from '../config/site'

export default function TermsAndConditions() {
  return (
    <LegalShell title="Terms and Conditions" path="/terms-and-conditions">
      <p>By using this website or placing an order with {SITE.name}, you agree to these terms.</p>
      <h2>Orders and pricing</h2><p>Prices, minimum quantities and delivery schedules are confirmed in writing at the time of the quote or order.</p>
      <h2>Customized products</h2><p>Branded or custom-label orders are produced to your approved artwork and specifications.</p>
      <h2 id="refund-cancellation">Refund / Cancellation Policy</h2><p>Where applicable, cancellations and returns are handled as agreed at the time of order. Customized orders may not be cancellable once production has started. Contact us at {SITE.phoneDisplay} for assistance.</p>
    </LegalShell>
  )
}
