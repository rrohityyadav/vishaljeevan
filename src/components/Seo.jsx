import { Helmet } from 'react-helmet-async'
import { SITE } from '../config/site'

export default function Seo({ title, description, path = '/', noindex = false }) {
  const url = `${SITE.url}${path}`
  const org = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: SITE.name,
    url: SITE.url,
    contactPoint: [{ '@type': 'ContactPoint', telephone: SITE.phoneTel, contactType: 'sales', areaServed: 'IN', availableLanguage: ['en', 'hi'] }],
  }
  // LocalBusiness only once a verified address is configured
  const local = SITE.hasVerifiedAddress ? {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: SITE.name,
    url: SITE.url,
    telephone: SITE.phoneTel,
    email: SITE.email,
    address: SITE.address,
  } : null
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />
      {noindex && <meta name="robots" content="noindex,follow" />}
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:site_name" content={SITE.name} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      {path === '/' && <script type="application/ld+json">{JSON.stringify(org)}</script>}
      {path === '/' && local && <script type="application/ld+json">{JSON.stringify(local)}</script>}
    </Helmet>
  )
}
