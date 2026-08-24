"use client";
import Link from "next/link";
import { products, formatUGX } from "@/lib/products";
import ProductCard from "@/components/ProductCard";
import { ArrowRight, Sparkles, Brush, Recycle, Truck } from "lucide-react";
import { useState } from "react";
import { img } from "@/lib/config";

export default function HomePage() {
  const featured = products.filter(p => p.featured);
  const [email, setEmail] = useState("");

  return (
    <div className="overflow-x-hidden">
      {/* Hero */}
      <section className="relative max-w-[1600px] mx-auto px-6 md:px-10 pt-8 md:pt-14">
        <div className="grid lg:grid-cols-12 gap-8 items-end">
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-cream rounded-full text-[11px] tracking-[0.18em] uppercase font-mono mb-6">
              <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
              New Collection Live — Kampala Studio Drop 06
            </div>
            <h1 className="font-display text-[48px] md:text-[84px] lg:text-[108px] leading-[0.85] tracking-[-0.04em] text-balance">
              Vintage
              <span className="block font-light italic text-gold">soul,</span>
              <span className="block">street drawn.</span>
            </h1>
            <div className="mt-8 flex flex-col md:flex-row gap-8 md:items-end">
              <p className="text-[16px] md:text-[18px] leading-relaxed max-w-[42ch] opacity-80">
                Gayita Collections is a Kampala atelier reworking vintage with hand-drawn art. Each piece is designed by Ugandan artists, printed in our Kabalagala studio, and made to be worn hard.
              </p>
              <div className="flex gap-3">
                <Link href="/shop" className="px-8 py-4 bg-coal text-white rounded-full text-[13px] tracking-[0.18em] uppercase font-medium hover:bg-gold transition flex items-center gap-2">
                  Shop Collection <ArrowRight className="w-4 h-4" />
                </Link>
                <Link href="#story" className="px-8 py-4 border border-sand rounded-full text-[13px] tracking-[0.18em] uppercase font-medium hover:bg-cream transition">
                  Our Story
                </Link>
              </div>
            </div>

            {/* Stats */}
            <div className="mt-12 grid grid-cols-3 gap-6 border-t border-sand pt-8 max-w-[520px]">
              <div><div className="font-display text-[32px] leading-none">1,200+</div><div className="font-mono text-[10px] uppercase tracking-widest opacity-60 mt-1">Pieces Hand-Drawn</div></div>
              <div><div className="font-display text-[32px] leading-none">100%</div><div className="font-mono text-[10px] uppercase tracking-widest opacity-60 mt-1">Printed in UG</div></div>
              <div><div className="font-display text-[32px] leading-none">4.9★</div><div className="font-mono text-[10px] uppercase tracking-widest opacity-60 mt-1">500+ Reviews</div></div>
            </div>
          </div>

          <div className="lg:col-span-5 relative">
            <div className="relative aspect-[4/5] rounded-[28px] overflow-hidden bg-cream">
              <img src={img("/images/hero.jpg")} alt="Model wearing Gayita crane tee" className="w-full h-full object-cover" />
              <div className="absolute bottom-4 left-4 right-4 bg-white/90 backdrop-blur-xl rounded-2xl p-4 flex items-center gap-4">
                <div className="w-16 h-20 bg-cream rounded-xl overflow-hidden">
                  <img src={img("/images/p-crane-tee.jpg")} alt="crane tee" className="w-full h-full object-cover" />
                </div>
                <div className="flex-1">
                  <p className="font-mono text-[10px] uppercase tracking-widest opacity-60">Featured • Best Seller</p>
                  <p className="font-display text-[18px] leading-tight">Crane Heritage Tee</p>
                  <p className="text-[13px] opacity-70">{formatUGX(85000)} • Gold Foil Print</p>
                </div>
                <Link href="/product/crane-heritage-tee" className="w-10 h-10 bg-coal text-white rounded-full flex items-center justify-center hover:bg-gold transition">
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
              <div className="absolute top-4 right-4 px-3 py-1.5 bg-gold text-white rounded-full text-[10px] tracking-widest uppercase font-mono rotate-3">Hand-Drawn • 14 Hours</div>
            </div>
            {/* Floating badge */}
            <div className="absolute -top-6 -right-6 md:-right-10 w-28 h-28 bg-coal text-cream rounded-full flex flex-col items-center justify-center text-center p-2 rotate-12 shadow-xl">
              <span className="font-mono text-[9px] uppercase tracking-widest">Since</span>
              <span className="font-display text-[28px] leading-none">2022</span>
              <span className="font-mono text-[8px] uppercase tracking-widest opacity-70">Kampala, UG</span>
            </div>
          </div>
        </div>
      </section>

      {/* Logos / Press */}
      <section className="mt-16 border-y border-sand py-6">
        <div className="max-w-[1600px] mx-auto px-6 md:px-10 flex flex-wrap justify-between items-center gap-6 opacity-60 font-mono text-[11px] tracking-[0.2em] uppercase">
          <span>Featured In: Bayimba • Nyege Nyege • Kampala Fashion Week • The Tribe UG • Bukedde</span>
          <span className="hidden md:block">Designed for designers, worn by everyone</span>
        </div>
      </section>

      {/* Featured Collection */}
      <section className="max-w-[1600px] mx-auto px-6 md:px-10 mt-20">
        <div className="flex flex-wrap justify-between items-end gap-6 mb-10">
          <div>
            <p className="font-mono text-[11px] tracking-[0.3em] uppercase opacity-60 mb-3">Curated • Drop 06</p>
            <h2 className="font-display text-[40px] md:text-[56px] leading-[0.9] tracking-[-0.02em]">Featured Collections</h2>
          </div>
          <Link href="/shop" className="group flex items-center gap-2 text-[13px] tracking-[0.18em] uppercase font-medium border-b border-ink pb-1 hover:border-gold hover:text-gold transition">
            View All Products <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition" />
          </Link>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8">
          {featured.map((p, i) => (
            <ProductCard key={p.id} product={p} index={i} />
          ))}
        </div>
      </section>

      {/* Story / Atelier */}
      <section id="story" className="mt-28 bg-smoke text-cream rounded-[32px] mx-4 md:mx-6 overflow-hidden">
        <div className="max-w-[1600px] mx-auto px-6 md:px-10 py-16 md:py-24 grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-5">
            <p className="font-mono text-[11px] tracking-[0.3em] uppercase opacity-50 mb-6">Atelier • Kabalagala</p>
            <h2 className="font-display text-[42px] md:text-[64px] leading-[0.9] tracking-[-0.02em] text-balance">
              We draw <span className="italic text-goldlight">first</span>, print later.
            </h2>
            <p className="mt-6 text-[16px] leading-relaxed opacity-70 max-w-[42ch]">
              Every Gayita piece starts as pencil on paper. No AI, no clip art. Our artists — Nadia, Moses, Amina — spend hours on each crane, each matatu, each pattern borrowed from barkcloth and Nubian motifs.
            </p>
            <div className="mt-10 grid grid-cols-2 gap-6">
              <div className="flex gap-3"><div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center shrink-0"><Brush className="w-5 h-5" /></div><div><h4 className="font-medium">Hand-Drawn</h4><p className="text-[13px] opacity-60 mt-1">14-20 hrs per artwork, then refined digitally</p></div></div>
              <div className="flex gap-3"><div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center shrink-0"><Recycle className="w-5 h-5" /></div><div><h4 className="font-medium">Upcycled Vintage</h4><p className="text-[13px] opacity-60 mt-1">We source from Owino, rework, and reprint</p></div></div>
              <div className="flex gap-3"><div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center shrink-0"><Sparkles className="w-5 h-5" /></div><div><h4 className="font-medium">Small Batch</h4><p className="text-[13px] opacity-60 mt-1">50-200 pieces per drop, never restocked same way</p></div></div>
              <div className="flex gap-3"><div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center shrink-0"><Truck className="w-5 h-5" /></div><div><h4 className="font-medium">Kampala Delivery</h4><p className="text-[13px] opacity-60 mt-1">Same-day boda delivery, worldwide shipping</p></div></div>
            </div>
          </div>
          <div className="lg:col-span-7 grid grid-cols-2 gap-4">
            <div className="space-y-4">
              <div className="aspect-[4/5] rounded-[20px] overflow-hidden bg-white/5"><img src={img("/images/p-art-denim.jpg")} alt="art denim" className="w-full h-full object-cover hover:scale-105 transition duration-700" /></div>
              <div className="aspect-[4/3] rounded-[20px] overflow-hidden bg-white/5"><img src={img("/images/p-hoodie.jpg")} alt="hoodie" className="w-full h-full object-cover hover:scale-105 transition duration-700" /></div>
            </div>
            <div className="space-y-4 pt-8">
              <div className="aspect-[4/3] rounded-[20px] overflow-hidden bg-white/5"><img src={img("/images/p-bomber.jpg")} alt="bomber" className="w-full h-full object-cover hover:scale-105 transition duration-700" /></div>
              <div className="aspect-[4/5] rounded-[20px] overflow-hidden bg-white/5"><img src={img("/images/p-sweatshirt.jpg")} alt="sweatshirt" className="w-full h-full object-cover hover:scale-105 transition duration-700" /></div>
            </div>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="max-w-[1600px] mx-auto px-6 md:px-10 mt-24">
        <div className="grid md:grid-cols-3 gap-6">
          {[
            { title: "Art Jackets", count: "18 pieces", img: "/images/p-art-denim.jpg", cat: "Jackets" },
            { title: "Crane Tees", count: "12 artworks", img: "/images/p-crane-tee.jpg", cat: "Tees" },
            { title: "Street Icons", count: "Kampala Series", img: "/images/p-hoodie.jpg", cat: "Sweatshirts" },
          ].map(card => (
            <Link key={card.title} href={`/shop?cat=${card.cat}`} className="group relative aspect-[4/3] rounded-[24px] overflow-hidden bg-cream">
              <img src={img(card.img)} alt={card.title} className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-coal/70 via-coal/10 to-transparent" />
              <div className="absolute bottom-0 p-6 text-white">
                <p className="font-mono text-[10px] uppercase tracking-widest opacity-70">{card.count}</p>
                <h3 className="font-display text-[28px] leading-none mt-1">{card.title}</h3>
              </div>
              <div className="absolute top-4 right-4 w-10 h-10 bg-white rounded-full flex items-center justify-center group-hover:bg-gold group-hover:text-white transition"><ArrowRight className="w-4 h-4" /></div>
            </Link>
          ))}
        </div>
      </section>

      {/* Newsletter */}
      <section className="max-w-[1600px] mx-auto px-6 md:px-10 mt-24">
        <div className="bg-cream rounded-[28px] p-8 md:p-14 flex flex-col lg:flex-row justify-between gap-10 items-start lg:items-center">
          <div>
            <h3 className="font-display text-[32px] md:text-[44px] leading-[0.9] tracking-[-0.02em] max-w-[16ch]">Get early access to drops — they sell out.</h3>
            <p className="mt-3 text-[14px] opacity-70 max-w-[44ch]">Join 3,200+ in Kampala & diaspora. No spam, just art, drop alerts, and 10% off first order.</p>
          </div>
          <div className="w-full lg:w-[420px] flex gap-3">
            <input value={email} onChange={e => setEmail(e.target.value)} placeholder="Your email" className="flex-1 px-5 py-4 rounded-full border border-sand bg-white focus:outline-none focus:border-gold text-[14px]" />
            <button className="px-7 py-4 bg-coal text-white rounded-full text-[12px] tracking-widest uppercase font-medium hover:bg-gold transition">Join</button>
          </div>
        </div>
      </section>

      {/* Contact strip */}
      <section className="max-w-[1600px] mx-auto px-6 md:px-10 mt-16 grid md:grid-cols-3 gap-4 text-[13px]">
        <div className="p-6 rounded-2xl bg-white border border-sand flex justify-between items-center">
          <div><p className="font-mono text-[10px] uppercase tracking-widest opacity-60">Call / WhatsApp</p><p className="font-medium mt-1">0763813315 • 077548383</p></div><div className="w-10 h-10 rounded-full bg-cream flex items-center justify-center">📞</div>
        </div>
        <div className="p-6 rounded-2xl bg-white border border-sand flex justify-between items-center">
          <div><p className="font-mono text-[10px] uppercase tracking-widest opacity-60">WhatsApp Direct</p><p className="font-medium mt-1">+256 707 548383</p></div><div className="w-10 h-10 rounded-full bg-cream flex items-center justify-center">💬</div>
        </div>
        <div className="p-6 rounded-2xl bg-white border border-sand flex justify-between items-center">
          <div><p className="font-mono text-[10px] uppercase tracking-widest opacity-60">Studio</p><p className="font-medium mt-1">Kabalagala, Kampala — Mon-Sat 10am-7pm</p></div><div className="w-10 h-10 rounded-full bg-cream flex items-center justify-center">📍</div>
        </div>
      </section>
    </div>
  );
}
