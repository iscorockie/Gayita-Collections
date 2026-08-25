"use client";

/* The supplied local JPGs are intentionally used as art-directed media; their crop is part of the storefront design. */
/* eslint-disable @next/next/no-img-element */

import Link from "next/link";
import { ArrowRight, ArrowUpRight, Check, MapPin, Sparkles, Truck } from "lucide-react";
import { useState } from "react";
import ProductCard from "@/components/ProductCard";
import { formatUGX, products } from "@/lib/products";
import { img } from "@/lib/config";

const whatsappPrimary = "256763813315";

const collectionCards = [
  {
    title: "The artist series",
    eyebrow: "Hand-drawn · limited",
    copy: "Cranes, city lights and stories from home, drawn directly onto vintage cloth.",
    image: "/images/p-crane-tee.jpg",
    href: "/shop?cat=Tees",
    accent: "bg-[#d6e476]",
  },
  {
    title: "Vintage reworks",
    eyebrow: "Found · reimagined",
    copy: "Good old garments with a new point of view. One found base, one new life.",
    image: "/images/p-art-denim.jpg",
    href: "/shop?cat=Jackets",
    accent: "bg-[#e7c7b4]",
  },
  {
    title: "Street uniform",
    eyebrow: "Everyday · expressive",
    copy: "Sweats, hoodies and layers made for Kampala streets and everywhere beyond.",
    image: "/images/p-hoodie.jpg",
    href: "/shop?cat=Sweatshirts",
    accent: "bg-[#d9d2c4]",
  },
];

const processSteps = [
  { number: "01", title: "Find the base", copy: "We source wearable vintage and quality blanks with character already in the fabric." },
  { number: "02", title: "Draw the idea", copy: "Each artwork starts as a hand-drawn mark in our Kabalagala studio — never a template." },
  { number: "03", title: "Make it yours", copy: "Buy a one-off or bring us your brief. We paint pieces for people, not for a production line." },
];

export default function HomePage() {
  const [email, setEmail] = useState("");
  const [joined, setJoined] = useState(false);
  const heroProduct = products[0];
  const featured = products.filter((product) => product.featured).slice(0, 4);

  const handleSubscribe = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (email.trim()) setJoined(true);
  };

  return (
    <div className="overflow-x-hidden">
      <main>
        <section className="paper-grid paper-noise mx-auto max-w-[1440px] px-5 pb-8 pt-6 md:px-8 md:pt-10">
          <div className="relative z-10 grid overflow-hidden rounded-[3px] border border-black/10 bg-[#fffdf8] lg:grid-cols-[1.03fr_.97fr]">
            <div className="flex flex-col justify-between border-b border-black/10 p-6 md:p-10 lg:border-b-0 lg:border-r lg:p-14">
              <div className="reveal">
                <div className="flex flex-wrap items-center gap-3">
                  <span className="eyebrow inline-flex items-center gap-2 text-[#b86f48]"><span className="h-2 w-2 rounded-full bg-[#b86f48]" /> New from the studio</span>
                  <span className="rounded-full border border-black/15 px-2.5 py-1 font-mono text-[9px] uppercase tracking-[0.12em]">Kampala · Uganda</span>
                </div>
                <h1 className="mt-9 max-w-[8ch] font-display text-[clamp(4.2rem,9vw,8.5rem)] leading-[.79] tracking-[-0.06em] md:mt-12">Wear the <em>artwork.</em></h1>
                <p className="mt-8 max-w-[38ch] text-[15px] leading-7 text-black/65 md:text-base">Vintage apparel and customised streetwear with hand-drawn stories. Made in small runs for designers, stylists and anyone who wants to wear something with a pulse.</p>
              </div>

              <div className="reveal reveal-delay-1 mt-12">
                <div className="flex flex-col gap-3 sm:flex-row">
                  <Link href="/shop" className="inline-flex items-center justify-center gap-3 rounded-full bg-[#171412] px-6 py-4 font-mono text-[10px] uppercase tracking-[0.15em] text-white transition hover:bg-[#b86f48]">Shop the edit <ArrowUpRight className="h-4 w-4" /></Link>
                  <Link href="/#custom" className="inline-flex items-center justify-center gap-3 rounded-full border border-black/20 px-6 py-4 font-mono text-[10px] uppercase tracking-[0.15em] transition hover:border-black hover:bg-[#f6f1e8]">Start a custom piece <ArrowRight className="h-4 w-4" /></Link>
                </div>
                <div className="mt-10 grid max-w-[440px] grid-cols-3 gap-4 border-t border-black/10 pt-5">
                  <div><p className="font-display text-3xl leading-none">01</p><p className="mt-2 font-mono text-[9px] uppercase leading-4 tracking-[0.1em] text-black/50">Artwork per garment</p></div>
                  <div><p className="font-display text-3xl leading-none">UGX</p><p className="mt-2 font-mono text-[9px] uppercase leading-4 tracking-[0.1em] text-black/50">Local pricing</p></div>
                  <div><p className="font-display text-3xl leading-none">∞</p><p className="mt-2 font-mono text-[9px] uppercase leading-4 tracking-[0.1em] text-black/50">Ways to style it</p></div>
                </div>
              </div>
            </div>

            <div className="relative min-h-[550px] bg-[#d9d2c4] p-3 md:min-h-[680px] md:p-4">
              <div className="relative h-full min-h-[520px] overflow-hidden rounded-[2px] bg-[#b0a38d] md:min-h-[648px]">
                <img src={img("/images/hero.jpg")} alt="Model wearing the Crane Heritage hand-painted tee" className="h-full w-full object-cover transition duration-1000 hover:scale-[1.03]" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/5" />
                <div className="float-note absolute left-5 top-5 rounded-[2px] bg-[#fffdf8] px-4 py-3 shadow-[5px_5px_0_rgba(23,20,18,.8)]">
                  <p className="font-mono text-[9px] uppercase tracking-[0.14em]">Studio note / 001</p>
                  <p className="mt-1 font-display text-xl italic leading-none">Painted, not printed.</p>
                </div>
                <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between gap-4 text-white md:bottom-7 md:left-7 md:right-7">
                  <div>
                    <p className="font-mono text-[9px] uppercase tracking-[0.16em] text-white/70">Featured piece · {heroProduct.paintTime} in studio</p>
                    <p className="mt-2 max-w-[12ch] font-display text-3xl leading-[.9] md:text-4xl">Crane Heritage Tee</p>
                    <p className="mt-3 font-mono text-xs">{formatUGX(heroProduct.price)} · size {heroProduct.sizes[0]} · one exists</p>
                  </div>
                  <Link href={`/product/${heroProduct.slug}`} className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#d6e476] text-[#171412] transition hover:bg-white" aria-label="View Crane Heritage Tee"><ArrowUpRight className="h-5 w-5" /></Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="overflow-hidden border-y border-black/10 bg-[#171412] py-3 text-[#fffdf8]">
          <div className="marquee-track flex min-w-max gap-12 whitespace-nowrap font-mono text-[10px] uppercase tracking-[0.18em]">
            {Array.from({ length: 8 }).map((_, index) => <span key={index} className="flex items-center gap-12"><span>Vintage pieces · hand-drawn artwork · customised streetwear · made in Kampala</span><span className="h-1.5 w-1.5 rounded-full bg-[#d6e476]" /></span>)}
          </div>
        </div>

        <section id="collections" className="mx-auto max-w-[1440px] px-5 py-20 md:px-8 md:py-28">
          <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">
            <div><p className="eyebrow text-[#b86f48]">Find your way in</p><h2 className="mt-3 max-w-[10ch] font-display text-5xl leading-[.88] tracking-[-0.04em] md:text-7xl">Choose a mood.</h2></div>
            <p className="max-w-[34ch] text-sm leading-6 text-black/60">Three doors into the Gayita universe. Start with the piece that speaks first.</p>
          </div>
          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {collectionCards.map((collection, index) => (
              <Link key={collection.title} href={collection.href} className="hover-lift group relative overflow-hidden rounded-[2px] border border-black/10 bg-[#fffdf8] p-2">
                <div className="relative aspect-[.86] overflow-hidden rounded-[1px] bg-[#e8dfd2]">
                  <img src={img(collection.image)} alt={collection.title} className="h-full w-full object-cover transition duration-700 group-hover:scale-[1.06]" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                  <span className={`absolute left-4 top-4 rounded-full ${collection.accent} px-3 py-1.5 font-mono text-[9px] uppercase tracking-[0.12em]`}>{collection.eyebrow}</span>
                  <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between gap-3 text-white"><div><h3 className="font-display text-3xl leading-[.9] md:text-4xl">{collection.title}</h3><p className="mt-2 max-w-[24ch] text-xs leading-5 text-white/75">{collection.copy}</p></div><span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white text-[#171412] transition group-hover:bg-[#d6e476]"><ArrowUpRight className="h-4 w-4" /></span></div>
                </div>
                <div className="flex items-center justify-between px-2 py-3 font-mono text-[9px] uppercase tracking-[0.13em] text-black/50"><span>Explore collection</span><span>0{index + 1} / 03</span></div>
              </Link>
            ))}
          </div>
        </section>

        <section id="studio" className="bg-[#211b18] text-[#fffdf8]">
          <div className="mx-auto grid max-w-[1440px] gap-12 px-5 py-20 md:px-8 md:py-28 lg:grid-cols-[.85fr_1.15fr] lg:items-center">
            <div>
              <p className="eyebrow text-[#d6e476]">Inside the studio · Kabalagala</p>
              <h2 className="mt-5 max-w-[10ch] font-display text-5xl leading-[.87] tracking-[-0.04em] md:text-7xl">The mark is the point.</h2>
              <p className="mt-7 max-w-[40ch] text-sm leading-7 text-white/65">We like clothes that show a little evidence of the hand. A wobble in the line. A brush that ran out of paint. The small proof that a person made this for another person.</p>
              <Link href="/#custom" className="mt-8 inline-flex items-center gap-3 rounded-full border border-white/25 px-5 py-3 font-mono text-[10px] uppercase tracking-[0.14em] transition hover:border-[#d6e476] hover:text-[#d6e476]">Meet us with an idea <ArrowRight className="h-4 w-4" /></Link>
            </div>
            <div className="grid gap-3 sm:grid-cols-[1.1fr_.9fr]">
              <div className="relative min-h-[420px] overflow-hidden rounded-[2px] bg-[#8f8474]"><img src={img("/images/p-sweatshirt.jpg")} alt="Hand-painted Matatu sweatshirt detail" className="h-full w-full object-cover" /><span className="absolute bottom-4 left-4 rounded-full bg-[#fffdf8] px-3 py-1.5 font-mono text-[9px] uppercase tracking-[0.12em] text-[#171412]">Brush / fabric / feeling</span></div>
              <div className="flex flex-col justify-between gap-6 rounded-[2px] border border-white/15 p-5 md:p-6">
                {processSteps.map((step) => <div key={step.number} className="border-b border-white/10 pb-5 last:border-0 last:pb-0"><div className="flex items-center gap-3"><span className="font-mono text-[10px] text-[#d6e476]">{step.number}</span><h3 className="font-display text-2xl leading-none">{step.title}</h3></div><p className="mt-3 text-xs leading-5 text-white/55">{step.copy}</p></div>)}
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-[1440px] px-5 py-20 md:px-8 md:py-28">
          <div className="flex flex-col justify-between gap-5 border-b border-black/10 pb-7 md:flex-row md:items-end"><div><p className="eyebrow text-[#b86f48]">The current edit</p><h2 className="mt-3 font-display text-5xl leading-[.88] tracking-[-0.04em] md:text-7xl">Made once.<br /><em>Found by you.</em></h2></div><Link href="/shop" className="inline-flex items-center gap-2 self-start rounded-full border border-black/15 px-4 py-3 font-mono text-[10px] uppercase tracking-[0.14em] transition hover:bg-[#171412] hover:text-white md:self-end">View all {products.length} pieces <ArrowUpRight className="h-4 w-4" /></Link></div>
          <div className="mt-10 grid grid-cols-2 gap-x-4 gap-y-12 md:grid-cols-4 md:gap-6">{featured.map((product, index) => <ProductCard key={product.id} product={product} index={index} />)}</div>
        </section>

        <section id="custom" className="mx-auto max-w-[1440px] px-5 pb-20 md:px-8 md:pb-28">
          <div className="grid overflow-hidden rounded-[3px] border border-black/10 bg-[#d6e476] lg:grid-cols-[1.1fr_.9fr]">
            <div className="p-7 md:p-12 lg:p-16"><p className="eyebrow text-black/55">Custom work / commissions</p><h2 className="mt-5 max-w-[9ch] font-display text-5xl leading-[.86] tracking-[-0.04em] md:text-7xl">Bring us the blank.</h2><p className="mt-7 max-w-[40ch] text-sm leading-7 text-black/70">Have a logo, a memory, a sketch or just a feeling? We customise jackets, tees, denim and more for individuals, designers, shoots and small teams.</p><ul className="mt-8 grid gap-3 sm:grid-cols-2"><li className="flex items-center gap-2 text-xs"><Check className="h-4 w-4" /> One-off personal pieces</li><li className="flex items-center gap-2 text-xs"><Check className="h-4 w-4" /> Styling & editorial pulls</li><li className="flex items-center gap-2 text-xs"><Check className="h-4 w-4" /> Designer collaborations</li><li className="flex items-center gap-2 text-xs"><Check className="h-4 w-4" /> Small team runs</li></ul><a href={`https://wa.me/${whatsappPrimary}?text=${encodeURIComponent("Hello Gayita Collections! I have an idea for a customised piece.")}`} target="_blank" rel="noreferrer" className="mt-9 inline-flex items-center gap-3 rounded-full bg-[#171412] px-6 py-4 font-mono text-[10px] uppercase tracking-[0.15em] text-white transition hover:bg-[#b86f48]">Tell us your idea <ArrowUpRight className="h-4 w-4" /></a></div>
            <div className="relative min-h-[390px] overflow-hidden bg-[#a79b87] lg:min-h-0"><img src={img("/images/p-art-denim.jpg")} alt="Artisan hand-painted denim jacket" className="h-full w-full object-cover" /><div className="absolute inset-x-5 bottom-5 rounded-[2px] bg-[#fffdf8]/95 p-4 md:inset-x-7 md:bottom-7"><p className="font-mono text-[9px] uppercase tracking-[0.13em] text-black/50">Available for briefs</p><p className="mt-1 font-display text-2xl leading-none">0763813315 · 077548383</p><p className="mt-1 font-mono text-[10px] text-black/55">+256 707 548383 · Kabalagala, Kampala</p></div></div>
          </div>
        </section>

        <section className="border-y border-black/10 bg-[#fffdf8]">
          <div className="mx-auto flex max-w-[1440px] flex-col gap-8 px-5 py-12 md:flex-row md:items-center md:justify-between md:px-8"><div><p className="eyebrow text-[#b86f48]">Stay close to the work</p><h2 className="mt-3 font-display text-4xl leading-none md:text-5xl">New drops, studio notes,<br /><em>no noise.</em></h2></div>{joined ? <div className="flex items-center gap-3 rounded-full bg-[#f0f5c9] px-5 py-3 font-mono text-xs"><Check className="h-4 w-4" /> You&apos;re on the list.</div> : <form onSubmit={handleSubscribe} className="flex w-full max-w-[480px] flex-col gap-2 sm:flex-row"><label htmlFor="newsletter-email" className="sr-only">Email address</label><input id="newsletter-email" type="email" required value={email} onChange={(event) => setEmail(event.target.value)} placeholder="Your email address" className="min-w-0 flex-1 rounded-full border border-black/15 bg-[#f6f1e8] px-5 py-4 text-sm outline-none placeholder:text-black/40 focus:border-black" /><button type="submit" className="inline-flex items-center justify-center gap-2 rounded-full bg-[#171412] px-5 py-4 font-mono text-[10px] uppercase tracking-[0.14em] text-white transition hover:bg-[#b86f48]">Join the list <ArrowRight className="h-4 w-4" /></button></form>}</div>
        </section>

        <section className="mx-auto grid max-w-[1440px] gap-3 px-5 py-10 sm:grid-cols-3 md:px-8">
          <div className="flex items-start gap-3 rounded-[2px] border border-black/10 bg-[#fffdf8] p-5"><MapPin className="mt-0.5 h-5 w-5 text-[#b86f48]" /><div><p className="font-display text-xl">Made in Kampala</p><p className="mt-1 text-xs leading-5 text-black/55">Painted in Kabalagala, delivered across Uganda.</p></div></div>
          <div className="flex items-start gap-3 rounded-[2px] border border-black/10 bg-[#fffdf8] p-5"><Truck className="mt-0.5 h-5 w-5 text-[#b86f48]" /><div><p className="font-display text-xl">Easy local delivery</p><p className="mt-1 text-xs leading-5 text-black/55">Same-day boda delivery in Kampala from UGX 15,000.</p></div></div>
          <div className="flex items-start gap-3 rounded-[2px] border border-black/10 bg-[#fffdf8] p-5"><Sparkles className="mt-0.5 h-5 w-5 text-[#b86f48]" /><div><p className="font-display text-xl">One of one</p><p className="mt-1 text-xs leading-5 text-black/55">No repeat prints. No algorithmic sameness.</p></div></div>
        </section>
      </main>
    </div>
  );
}
