// Drop real photography into src/assets/photos/ using these names and it replaces the built-in artwork:
//   hero, jar-about, p250, p300, p500, p750, p1l, p2l, p5l, p10l, p20l,
//   step-1 … step-8, industry-0 … industry-7, brand-0 … brand-7
const files = import.meta.glob('../assets/photos/*.{webp,avif,jpg,jpeg,png}', { eager: true, query: '?url', import: 'default' })
const map = {}
for (const [path, url] of Object.entries(files)) map[path.split('/').pop().replace(/\.[^.]+$/, '')] = url
export const photo = (name) => map[name] || null
