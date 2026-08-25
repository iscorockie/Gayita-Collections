# Gayita Collections 🧵

**Vintage apparel & one-of-one customised streetwear with hand-drawn artwork — Kampala, Uganda.**

A fully client-side e-commerce storefront: striking home page, filterable/sortable product grid,
rich product detail pages with image galleries & reviews, a persistent slide-out cart, and a
4-step checkout flow (MTN MoMo / Airtel Money / Cash on Delivery) with WhatsApp order confirmation.

## Live

👉 **https://iscorockie.github.io/Gayita-Collections/**

## Stack

- React 18 + TypeScript + Vite
- Tailwind CSS (self-hosted Playfair Display & Manrope variable fonts)
- React Router (hash routing — GitHub Pages safe)
- Cart, reviews & orders persisted to `localStorage`
- Static-hosted → GitHub Pages (`gh-pages` branch)

## Contacts baked in

- WhatsApp / primary: **+256 707 548 383**
- Line 2: **+256 763 813 315** · Line 3: **0775 48383**

## Develop

```bash
npm install
npm run dev        # dev server at http://localhost:5173
npm run build      # type-check + production build → dist/
npm run preview    # serve the production build
```

## Deploy (GitHub Pages)

```bash
npm run build:pages          # builds dist/ with the /Gayita-Collections/ base path
# publish dist/ to the gh-pages branch (e.g. with gh-pages, or manually):
cd dist && git init -b gh-pages && git add -A && git commit -m "deploy"
git remote add origin https://github.com/iscorockie/Gayita-Collections.git
git push -f origin gh-pages
```

> Note: replace demo products/images in `src/data/products.ts` with live inventory when ready.
> Checkout is a guided order-request flow (confirmation happens on call/WhatsApp) — wire a real
> payments/payments-api later if needed.
