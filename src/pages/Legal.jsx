import Seo from '../components/Seo'
import { SITE } from '../config/site'

export function LegalShell({ title, path, children }) {
  return (
    <>
      <Seo title={`${title} | ${SITE.name}`} description={`${title} for ${SITE.name}.`} path={path} noindex />
      <div className="bg-navy-dark pb-12 pt-28"><h1 className="mx-auto max-w-3xl px-5 text-4xl font-extrabold text-white">{title}</h1></div>
      <article className="mx-auto max-w-3xl space-y-4 px-5 py-12 leading-relaxed [&_h2]:mt-8 [&_h2]:text-2xl [&_h2]:font-extrabold [&_h2]:text-navy-dark">
        <p className="rounded border-l-4 border-water bg-ice p-4 text-sm"><strong>Draft template.</strong> This text is a placeholder and must be reviewed and replaced by the company’s legal adviser before launch.</p>
        {children}
      </article>
    </>
  )
}
