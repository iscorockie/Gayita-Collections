# Gayita Collections

**Vintage apparel + customised streetwear with hand-drawn artwork.**

Gayita Collections is a Kampala studio making expressive clothes for designers, stylists and everybody who wants to wear something with a pulse. The storefront is seeded with one-of-one demo pieces, local UGX pricing, collector notes and a studio-confirmed WhatsApp checkout.

**Live site:** https://iscorockie.github.io/Gayita-Collections/

## Contact

- 0763813315
- 077548383
- +256 707 548383
- Studio: Kabalagala, Kampala, Uganda
- Hours: Monday–Saturday, 10:00–19:00

## Storefront features

- Editorial, responsive home page with featured collections, studio story and custom commission CTA
- Shop grid with search, category filters, price filters and sorting
- Product detail pages with image gallery, full-screen image view, artist story, materials, size, care and collector reviews
- Slide-out cart with localStorage persistence and one-of-one quantity protection
- Streamlined checkout with customer details, Kampala/Uganda delivery options, payment preference and WhatsApp order confirmation
- GitHub Pages-ready static export with the `/Gayita-Collections` base path

## Local development

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Production build

For GitHub Pages:

```bash
npm run build:pages
```

This builds with the `/Gayita-Collections` base path, refreshes the checked-in `docs/` artifact and adds `.nojekyll` so Next assets publish correctly. GitHub Pages serves `docs/` from the deployment branch. The untracked build output is also written to `out/` for local inspection.

## Stack

- Next.js App Router with static export
- React and TypeScript
- Tailwind CSS 4
- Lucide icons
- localStorage-backed React cart context

## Brand asset

The storefront uses the supplied logo at `public/images/logo.jpg` throughout the header and footer.
