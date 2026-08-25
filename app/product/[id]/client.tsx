"use client";

/* The supplied local JPGs are intentionally used as art-directed media; their crop is part of the storefront design. */
/* eslint-disable @next/next/no-img-element */

import Link from "next/link";
import { ArrowLeft, ArrowRight, Ban, Check, Clock3, Heart, MessageCircle, Paintbrush, PackageCheck, Ruler, ShieldCheck, Star, ZoomIn } from "lucide-react";
import { useState } from "react";
import ProductCard from "@/components/ProductCard";
import { useCart } from "@/lib/cart";
import { img } from "@/lib/config";
import { formatUGX, getWhatsAppMessage, products } from "@/lib/products";

export default function ProductClient({ slugProp }: { slugProp: string }) {
  const product = products.find((item) => item.slug === slugProp) || products[0];
  const related = products.filter((item) => item.category === product.category && item.id !== product.id).slice(0, 4);
  const [activeImage, setActiveImage] = useState(0);
  const [selectedSize, setSelectedSize] = useState(product.sizes[0]);
  const [zoomed, setZoomed] = useState(false);
  const [saved, setSaved] = useState(false);
  const [added, setAdded] = useState(false);
  const { addItem } = useCart();

  const whatsappMessage = getWhatsAppMessage(product, selectedSize);
  const whatsappOne = `https://wa.me/256763813315?text=${encodeURIComponent(whatsappMessage)}`;
  const whatsappTwo = `https://wa.me/256707548383?text=${encodeURIComponent(whatsappMessage)}`;
  const averageStars = Array.from({ length: 5 }, (_, index) => index < Math.round(product.rating));

  const addToBag = () => {
    addItem(product, selectedSize, product.colors[0].name, 1);
    setAdded(true);
    window.setTimeout(() => setAdded(false), 2200);
  };

  return (
    <div className="mx-auto max-w-[1440px] px-5 pb-24 pt-7 md:px-8 md:pt-10">
      <Link href="/shop" className="mb-7 inline-flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.14em] text-black/55 transition hover:text-black"><ArrowLeft className="h-3.5 w-3.5" /> Back to the edit</Link>

      <div className="grid overflow-hidden rounded-[3px] border border-black/10 bg-[#fffdf8] lg:grid-cols-[1.07fr_.93fr]">
        <section className="border-b border-black/10 bg-[#e8dfd2] p-3 md:p-4 lg:border-b-0 lg:border-r" aria-label="Product images">
          <div className="relative aspect-[.92] overflow-hidden rounded-[2px] bg-[#c5b9a6] md:aspect-[1.02]">
            <img src={img(product.images[activeImage])} alt={`${product.name}, view ${activeImage + 1}`} className="h-full w-full object-cover" />
            <div className="absolute inset-x-4 top-4 flex items-start justify-between gap-3 md:inset-x-5 md:top-5"><div className="flex flex-wrap gap-2"><span className="rounded-full bg-[#171412] px-3 py-1.5 font-mono text-[9px] uppercase tracking-[0.15em] text-white">1 of 1</span><span className="rounded-full bg-[#d6e476] px-3 py-1.5 font-mono text-[9px] uppercase tracking-[0.15em] text-[#171412]">{product.paintTime} making time</span></div><button type="button" onClick={() => setZoomed(true)} className="flex h-10 w-10 items-center justify-center rounded-full bg-[#fffdf8]/90 text-[#171412] transition hover:bg-[#d6e476]" aria-label="View image full screen"><ZoomIn className="h-4 w-4" /></button></div>
            <div className="absolute bottom-4 left-4 rounded-[2px] bg-[#fffdf8]/95 px-3 py-2 md:bottom-5 md:left-5"><p className="font-mono text-[9px] uppercase tracking-[0.12em] text-black/50">{product.artist}</p><p className="mt-1 font-display text-xl leading-none italic">No two marks alike.</p></div>
          </div>
          <div className="mt-3 flex gap-2 overflow-x-auto pb-1" aria-label="Choose a product view">
            {product.images.map((image, index) => <button type="button" key={`${image}-${index}`} onClick={() => setActiveImage(index)} className={`relative h-20 w-16 shrink-0 overflow-hidden rounded-[2px] border-2 bg-[#c5b9a6] transition md:h-24 md:w-20 ${activeImage === index ? "border-[#171412]" : "border-transparent opacity-60 hover:opacity-100"}`} aria-label={`View image ${index + 1}`}><img src={img(image)} alt="" className="h-full w-full object-cover" />{activeImage === index && <span className="absolute inset-x-0 bottom-0 bg-[#171412] py-1 font-mono text-[8px] uppercase tracking-[0.1em] text-white">View</span>}</button>)}
          </div>
          <div className="mt-5 grid grid-cols-3 gap-2 border-t border-black/10 pt-4 font-mono text-[9px] uppercase leading-4 tracking-[0.08em] text-black/55"><span><Paintbrush className="mb-1 h-4 w-4 text-[#b86f48]" />Drawn by hand</span><span><Clock3 className="mb-1 h-4 w-4 text-[#b86f48]" />{product.paintTime}</span><span><Ban className="mb-1 h-4 w-4 text-[#b86f48]" />No repeat print</span></div>
        </section>

        <section className="p-6 md:p-10">
          <div className="flex items-start justify-between gap-5"><div><p className="eyebrow text-[#b86f48]">{product.category} · piece {product.name.slice(0, 3)}</p><h1 className="mt-4 max-w-[12ch] font-display text-5xl leading-[.85] tracking-[-0.04em] md:text-7xl">{product.name.replace(/^\d+\s+—\s+/, "")}</h1></div><button type="button" onClick={() => setSaved((value) => !value)} className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full border transition ${saved ? "border-[#b86f48] bg-[#b86f48] text-white" : "border-black/15 hover:border-black"}`} aria-label={saved ? "Remove from saved pieces" : "Save this piece"}><Heart className={`h-4 w-4 ${saved ? "fill-current" : ""}`} /></button></div>
          <div className="mt-6 flex flex-wrap items-center gap-x-4 gap-y-2 border-y border-black/10 py-5"><span className="font-mono text-xl">{formatUGX(product.price)}</span><span className="font-mono text-[10px] uppercase tracking-[0.12em] text-black/50">approx. ${product.priceUSD} · Uganda</span><span className="flex items-center gap-1 rounded-full bg-[#f0f5c9] px-2.5 py-1 font-mono text-[10px]"><Star className="h-3 w-3 fill-[#b86f48] text-[#b86f48]" /> {product.rating.toFixed(1)} · {product.reviewCount} note</span></div>
          <p className="mt-7 text-sm leading-7 text-black/70">{product.description}</p>

          <div className="mt-7 rounded-[2px] bg-[#f6f1e8] p-5"><div className="flex gap-3"><div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#171412] text-[#d6e476]"><Paintbrush className="h-4 w-4" /></div><div><p className="eyebrow">From the artist</p><p className="mt-2 text-sm leading-6 text-black/65">{product.story}</p><p className="mt-3 font-mono text-[9px] uppercase tracking-[0.12em] text-black/45">Signed · direct on garment · made in Kampala</p></div></div></div>

          <div className="mt-7"><div className="flex items-center justify-between"><p className="eyebrow">Select size</p><button type="button" className="inline-flex items-center gap-1 font-mono text-[10px] uppercase tracking-[0.1em] underline underline-offset-4"><Ruler className="h-3.5 w-3.5" /> Size guide</button></div><div className="mt-3 flex flex-wrap gap-2">{product.sizes.map((size) => <button type="button" key={size} onClick={() => setSelectedSize(size)} className={`min-w-16 rounded-full border px-4 py-3 font-mono text-[10px] uppercase tracking-[0.12em] transition ${selectedSize === size ? "border-[#171412] bg-[#171412] text-white" : "border-black/15 hover:border-black"}`}>{size}</button>)}</div><p className="mt-3 font-mono text-[10px] leading-5 text-black/45">One original garment, one available size. Check measurements with the studio before you order if you&apos;re unsure.</p></div>

          <div className="mt-7 space-y-2"><button type="button" onClick={addToBag} disabled={product.stock < 1} className={`flex w-full items-center justify-center gap-3 rounded-full py-4 font-mono text-[10px] uppercase tracking-[0.15em] text-white transition ${added ? "bg-[#75816a]" : "bg-[#171412] hover:bg-[#b86f48]"} disabled:cursor-not-allowed disabled:bg-black/30`}>{added ? <><Check className="h-4 w-4" /> Added to your bag</> : <>Add to bag <ArrowRight className="h-4 w-4" /></>}</button><a href={whatsappOne} target="_blank" rel="noreferrer" className="flex w-full items-center justify-center gap-2 rounded-full border border-[#25d366] py-3.5 font-mono text-[10px] uppercase tracking-[0.13em] transition hover:bg-[#25d366]"><MessageCircle className="h-4 w-4" /> Claim on WhatsApp · 0763813315</a><a href={whatsappTwo} target="_blank" rel="noreferrer" className="flex w-full items-center justify-center gap-2 font-mono text-[9px] uppercase tracking-[0.1em] text-black/50 underline underline-offset-4 hover:text-black">Or message +256 707 548383</a></div>

          <div className="mt-7 grid grid-cols-2 gap-2 border-t border-black/10 pt-6"><div className="flex gap-2 rounded-[2px] border border-black/10 p-3"><PackageCheck className="h-4 w-4 shrink-0 text-[#b86f48]" /><p className="font-mono text-[9px] uppercase leading-4 tracking-[0.05em] text-black/60">Kampala delivery<br /><strong className="text-black">from UGX 15,000</strong></p></div><div className="flex gap-2 rounded-[2px] border border-black/10 p-3"><ShieldCheck className="h-4 w-4 shrink-0 text-[#b86f48]" /><p className="font-mono text-[9px] uppercase leading-4 tracking-[0.05em] text-black/60">Studio confirmed<br /><strong className="text-black">before payment</strong></p></div></div>
        </section>
      </div>

      <div className="mt-12 grid gap-5 lg:grid-cols-[1.1fr_.9fr]">
        <section className="rounded-[3px] border border-black/10 bg-[#fffdf8] p-6 md:p-9"><div className="flex flex-col justify-between gap-4 border-b border-black/10 pb-6 sm:flex-row sm:items-end"><div><p className="eyebrow text-[#b86f48]">Collector notes</p><h2 className="mt-2 font-display text-4xl leading-none">Loved by the people who found it.</h2></div><div className="flex items-center gap-2"><span className="font-display text-4xl">{product.rating.toFixed(1)}</span><div><div className="flex gap-0.5">{averageStars.map((filled, index) => <Star key={index} className={`h-3.5 w-3.5 ${filled ? "fill-[#b86f48] text-[#b86f48]" : "text-black/20"}`} />)}</div><p className="mt-1 font-mono text-[9px] uppercase tracking-[0.1em] text-black/45">{product.reviewCount} verified review</p></div></div></div><div className="mt-6 space-y-5">{product.reviews.map((review) => <article key={review.id} className="border-b border-black/10 pb-5 last:border-0 last:pb-0"><div className="flex items-center justify-between gap-3"><div className="flex items-center gap-3"><span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#d6e476] font-mono text-[10px]">{review.avatar}</span><div><p className="font-mono text-[11px]">{review.author}</p><p className="mt-0.5 font-mono text-[9px] uppercase tracking-[0.1em] text-black/45">{review.date} · {review.verified ? "Verified owner" : "Collector"}</p></div></div><div className="flex gap-0.5">{Array.from({ length: 5 }).map((_, index) => <Star key={index} className={`h-3 w-3 ${index < review.rating ? "fill-[#b86f48] text-[#b86f48]" : "text-black/20"}`} />)}</div></div><p className="mt-4 max-w-[58ch] font-display text-2xl leading-[1.05]">“{review.text}”</p></article>)}</div></section>
        <section className="rounded-[3px] bg-[#211b18] p-6 text-[#fffdf8] md:p-9"><p className="eyebrow text-[#d6e476]">The fine print</p><h2 className="mt-2 font-display text-4xl leading-none">Good to know.</h2><div className="mt-7 space-y-1">{product.details.map((detail) => <div key={detail} className="flex gap-3 border-b border-white/10 py-4"><Check className="mt-0.5 h-4 w-4 shrink-0 text-[#d6e476]" /><p className="text-sm leading-5 text-white/75">{detail}</p></div>)}</div><div className="mt-6"><p className="eyebrow text-white/45">Care</p><p className="mt-2 text-sm leading-6 text-white/65">Wash cold, inside out. Skip bleach and the dryer. Let the artwork age with you — that is part of the piece.</p></div></section>
      </div>

      {related.length > 0 && <section className="mt-20"><div className="flex items-end justify-between gap-4 border-b border-black/10 pb-6"><div><p className="eyebrow text-[#b86f48]">Keep looking</p><h2 className="mt-2 font-display text-5xl leading-[.85]">More from this <em>world.</em></h2></div><Link href="/shop" className="hidden items-center gap-2 font-mono text-[10px] uppercase tracking-[0.12em] underline underline-offset-4 sm:flex">See all <ArrowRight className="h-3.5 w-3.5" /></Link></div><div className="mt-9 grid grid-cols-2 gap-x-4 gap-y-12 md:grid-cols-4 md:gap-6">{related.map((item, index) => <ProductCard key={item.id} product={item} index={index} />)}</div></section>}

      {zoomed && <div className="fixed inset-0 z-[120] flex items-center justify-center bg-black/90 p-4" role="dialog" aria-modal="true" aria-label="Full screen product image"><button type="button" onClick={() => setZoomed(false)} className="absolute right-5 top-5 flex h-11 w-11 items-center justify-center rounded-full bg-white text-black" aria-label="Close full screen image">×</button><img src={img(product.images[activeImage])} alt={product.name} className="max-h-[90vh] max-w-full object-contain" /></div>}
    </div>
  );
}
