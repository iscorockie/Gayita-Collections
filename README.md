# Gayita Collections — Vintage & Hand-Drawn Streetwear

**Kampala, Uganda** | Vintage Apparel & Customised Streetwear with Hand-Drawn Artworks

Live Site: **https://iscorockie.github.io/Gayita-Collections/**

Repository: https://github.com/iscorockie/Gayita-Collections

---

### Brand
Gayita Collections is a Kampala atelier (Kabalagala) reworking vintage with hand-drawn art. Each piece is designed by Ugandan artists, printed in our studio, and made to be worn hard. For designers, stylists, and everyone.

### Contacts (Official)
- 0763813315
- 077548383
- +256 707 548383
- WhatsApp: https://wa.me/256763813315
- Location: Kabalagala, Kampala — Mon-Sat 10am-7pm

### Features Built
- **Home**: Hero with model wearing Crane Heritage Tee, featured collections, atelier story, categories, marquee, newsletter, contact strip
- **Shop**: 12 products seeded, filters by category (Jackets, Tees, Vintage, etc.), price range, sorting (featured, newest, price, rating)
- **Product Detail**: Image gallery with thumbnails, artist story, colors/sizes, qty, add to cart, details, materials, reviews with avatars, related products
- **Cart**: Slide-out drawer, persistent via localStorage, qty controls, subtotal, delivery (15k UGX Kampala), checkout flow
- **Checkout**: Form (name, phone, location), payment methods (MTN MoMo, Airtel Money, Cash on Delivery), order success with WhatsApp confirmation
- **Design**: Elegant typography (Instrument Serif + Manrope), gold/cream/paper palette, tasteful animations (marquee, fadeUp, hover scale), premium imagery, fully responsive

### Products Seeded
- Crane Heritage Tee — Golden Crown (85k UGX) — Best Seller
- Artisan Hand-Painted Denim Jacket (245k UGX)
- Savanna Sunset Souvenir Bomber (295k UGX)
- Vintage Guns N Roses Tee (95k UGX)
- Tobacco Corduroy Trucker (185k UGX)
- Watercolor Crane Studio Tee (90k UGX)
- Classic Mid-Wash Denim Jacket (165k UGX)
- Night Sky Embroidered Bucket Hat (55k UGX)
- Kampala City Boda Hoodie — Night Ride (145k UGX)
- High-Waist Light Wash Jeans (135k UGX)
- Matatu Motion Uganda Sweatshirt (125k UGX)
- Varsity Legend Jacket W (275k UGX)

All prices in UGX with USD equivalent, realistic reviews, artist credits, and hand-drawn stories.

### Tech Stack
- Next.js 15 (App Router, static export)
- Tailwind CSS 4
- Framer Motion
- Lucide Icons
- Persistent cart with React Context + localStorage

### Deployment
- GitHub Pages via `gh-pages` branch
- Base path: `/Gayita-Collections`
- Build: `NEXT_PUBLIC_BASE_PATH=/Gayita-Collections npm run build`
- Output in `out/` deployed to `gh-pages`

```bash
npm install
npm run dev       # local at http://localhost:3000
npm run build     # static export to out/
```

### Logo
Used from `public/images/logo.jpg` — black background with needle/button and "gayita COLLECTIONS"

---
© 2026 Gayita Collections — All artworks original, printed in Uganda
