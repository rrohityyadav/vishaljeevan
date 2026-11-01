# Water plant website (React + Vite + Tailwind + GSAP)

    npm install
    npm run dev      # develop
    npm run build    # production build

## Edit business details
`src/config/site.js` holds the company name, phone/email/address, social links, certifications,
products, process steps and WhatsApp messages. Anything marked TODO is a placeholder.
Also replace `https://www.example.com` in `public/sitemap.xml`, `public/robots.txt` and `SITE.url`.

## Real photography
Drop files into `src/assets/photos/` (webp/avif/jpg/png) and they replace the built-in artwork:
`hero`, `jar-about`, `p250 p300 p500 p750 p1l p2l p5l p10l p20l`, `step-1…step-8`, `industry-0…7`, `brand-0…7`.

## Enquiry form
Without a backend the form hands the filled-in enquiry to WhatsApp. To post to your own endpoint set
`VITE_ENQUIRY_ENDPOINT` (JSON POST) in `.env`.
