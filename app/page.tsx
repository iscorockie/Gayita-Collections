"use client";
import Link from "next/link";
import { products, formatUGX } from "@/lib/products";
import ProductCard from "@/components/ProductCard";
import { ArrowUpRight, Paintbrush, Clock, Ban } from "lucide-react";
import { useState } from "react";
import { img } from "@/lib/config";

export default function HomePage() {
  const featured = products.filter(p => p.featured).slice(0, 8);
  const [email, setEmail] = useState("");

  return (
    <div className="overflow-x-hidden bg-[#faf6ee]">
      {/* Hero - New Atelier Design */}
      <section className="relative max-w-[1600px] mx-auto px-6 md:px-10 pt-6 md:pt-10">
        <div className="border border-black/10 bg-white">
          {/* Top label */}
          <div className="flex justify-between items-center px-6 py-3 border-b border-black/10 font-mono text-[10px] tracking-[0.2em] uppercase">
            <span className="flex items-center gap-2"><span className="w-2 h-2 bg-[#ff3b30] rounded-full animate-pulse" /> LIVE IN STUDIO — PAINTING NOW</span>
            <span className="hidden md:flex gap-6 opacity-60">
              <span>12 PIECES ONLY</span>
              <span>•</span>
              <span>NO PRINTS</span>
              <span>•</span>
              <span>KABALAGALA, KAMPALA</span>
            </span>
          </div>

          <div className="grid lg:grid-cols-12">
            {/* Left - Big Type */}
            <div className="lg:col-span-7 p-6 md:p-10 border-b lg:border-b-0 lg:border-r border-black/10 flex flex-col justify-between min-h-[600px]">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-black text-white text-[10px] tracking-[0.2em] uppercase font-mono mb-6 rotate-[-1deg]">
                  <Paintbrush className="w-3 h-3" /> PAINTED DIRECT, NOT PRINTED
                </div>
                <h1 className="font-display text-[52px] md:text-[84px] lg:text-[96px] leading-[0.85] tracking-[-0.04em] font-black uppercase">
                  Painted
                  <span className="block font-light italic normal-case tracking-[-0.02em] text-[48px] md:text-[72px]">not printed.</span>
                  <span className="block text-[32px] md:text-[48px] mt-2 flex items-center gap-4">
                    1 OF 1 ONLY <span className="text-[18px] px-3 py-1 border-2 border-black rounded-full font-mono tracking-widest">NO COPIES</span>
                  </span>
                </h1>
              </div>

              <div className="mt-10">
                <p className="text-[16px] md:text-[18px] leading-[1.4] max-w-[42ch] font-mono">
                  Each Gayita garment is a single painting on a single piece of clothing. We don’t print. We don’t reproduce. We paint directly with brushes on fabric. Once sold, that artwork is gone forever.
                </p>
                <div className="mt-8 flex flex-wrap gap-3">
                  <Link href="/shop" className="px-8 py-4 bg-black text-white text-[12px] tracking-[0.18em] uppercase font-mono font-bold hover:bg-[#ff3b30] transition flex items-center gap-2">
                    Shop 12 — 1 of 1s <ArrowUpRight className="w-4 h-4" />
                  </Link>
                  <a href="https://wa.me/256763813315?text=Hello%20Gayita!%20Show%20me%20available%201%20of%201%20pieces" target="_blank" className="px-8 py-4 border border-black text-[12px] tracking-[0.18em] uppercase font-mono font-bold hover:bg-black hover:text-white transition">
                    WhatsApp to Order
                  </a>
                </div>

                <div className="mt-10 grid grid-cols-3 gap-6 border-t border-black/10 pt-6 max-w-[480px] font-mono">
                  <div><div className="text-[28px] font-display font-black leading-none">12</div><div className="text-[10px] uppercase tracking-widest opacity-60 mt-1">Pieces Total • No Restock</div></div>
                  <div><div className="text-[28px] font-display font-black leading-none">0</div><div className="text-[10px] uppercase tracking-widest opacity-60 mt-1">Prints • Only Paint</div></div>
                  <div><div className="text-[28px] font-display font-black leading-none">1</div><div className="text-[10px] uppercase tracking-widest opacity-60 mt-1">Of Each Exists</div></div>
                </div>
              </div>
            </div>

            {/* Right - Hero Image */}
            <div className="lg:col-span-5 relative bg-[#f5f1e8] p-3">
              <div className="relative aspect-[4/5] overflow-hidden border border-black/10 bg-white">
                <img src={img("/images/hero.jpg")} alt="Model wearing hand-painted crane tee - 1 of 1" className="w-full h-full object-cover" />
                
                {/* Paint annotation */}
                <div className="absolute top-4 left-4 bg-white border border-black px-3 py-2 rotate-[-2deg] shadow-[4px_4px_0px_black]">
                  <p className="font-mono text-[10px] uppercase tracking-widest font-bold">001 — Crane Heritage</p>
                  <p className="font-mono text-[9px] opacity-60">6 HRS • DIRECT PAINT • NO PRINT</p>
                </div>

                <div className="absolute bottom-4 left-4 right-4 bg-black text-white p-4 flex items-center gap-4">
                  <div className="w-14 h-18 bg-white overflow-hidden shrink-0">
                    <img src={img("/images/p-crane-tee.jpg")} alt="detail" className="w-full h-full object-cover" />
                  </div>
                  <div className="flex-1">
                    <p className="font-mono text-[9px] uppercase tracking-[0.2em] opacity-60">Currently Available — 1 Left</p>
                    <p className="font-display text-[16px] font-bold uppercase leading-tight">001 — Crane Tee • Painted Direct</p>
                    <p className="font-mono text-[11px] opacity-70">{formatUGX(120000)} • No Copies</p>
                  </div>
                  <Link href="/product/crane-heritage-tee" className="w-10 h-10 bg-white text-black rounded-full flex items-center justify-center hover:bg-[#ff3b30] hover:text-white transition">
                    <ArrowUpRight className="w-4 h-4" />
                  </Link>
                </div>

                <div className="absolute top-1/2 -right-6 rotate-90 origin-center hidden lg:block">
                  <span className="font-mono text-[10px] tracking-[0.4em] uppercase opacity-30">HAND-PAINTED IN KABALAGALA • NO PRINTS • 1 OF 1</span>
                </div>
              </div>

              {/* Small process images */}
              <div className="grid grid-cols-3 gap-3 mt-3">
                <div className="aspect-square border border-black/10 bg-white overflow-hidden"><img src={img("/images/p-art-denim.jpg")} className="w-full h-full object-cover" /></div>
                <div className="aspect-square border border-black/10 bg-white overflow-hidden"><img src={img("/images/p-bomber.jpg")} className="w-full h-full object-cover" /></div>
                <div className="aspect-square border border-black/10 bg-white overflow-hidden flex flex-col items-center justify-center p-2 text-center"><Paintbrush className="w-6 h-6 mb-1" /><span className="font-mono text-[9px] uppercase tracking-widest font-bold">Paint<br/>Direct</span></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Manifesto */}
      <section id="process" className="max-w-[1600px] mx-auto px-6 md:px-10 mt-12">
        <div className="bg-black text-white p-8 md:p-12 grid md:grid-cols-12 gap-8">
          <div className="md:col-span-5">
            <p className="font-mono text-[11px] tracking-[0.3em] uppercase opacity-50 mb-4">Our Rule</p>
            <h2 className="font-display text-[36px] md:text-[48px] leading-[0.9] font-black uppercase tracking-tight">
              We don’t print.<br />
              <span className="text-[#ff3b30]">We paint.</span><br />
              Direct on cloth.
            </h2>
          </div>
          <div className="md:col-span-7 grid md:grid-cols-3 gap-8 font-mono text-[13px] leading-relaxed">
            <div>
              <div className="w-10 h-10 border border-white/20 rounded-full flex items-center justify-center mb-3"><Ban className="w-5 h-5" /></div>
              <h4 className="font-bold uppercase tracking-widest text-[11px] mb-2">No Prints</h4>
              <p className="opacity-70">No screen print, no DTG, no transfer, no sublimation. Only brush, acrylic, and hand.</p>
            </div>
            <div>
              <div className="w-10 h-10 border border-white/20 rounded-full flex items-center justify-center mb-3"><Clock className="w-5 h-5" /></div>
              <h4 className="font-bold uppercase tracking-widest text-[11px] mb-2">1 of 1 Only</h4>
              <p className="opacity-70">Each garment is painted once. When sold, we never paint the same artwork again. No copies, ever.</p>
            </div>
            <div>
              <div className="w-10 h-10 border border-white/20 rounded-full flex items-center justify-center mb-3"><Paintbrush className="w-5 h-5" /></div>
              <h4 className="font-bold uppercase tracking-widest text-[11px] mb-2">Direct Paint</h4>
              <p className="opacity-70">We paint directly on the garment — vintage base, cleaned, then painted freehand. You can feel the brush texture.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Products - New Grid */}
      <section className="max-w-[1600px] mx-auto px-6 md:px-10 mt-16">
        <div className="flex flex-wrap justify-between items-end gap-6 mb-8 border-b border-black/10 pb-6">
          <div>
            <p className="font-mono text-[11px] tracking-[0.3em] uppercase opacity-60 mb-2">Available Now — 12 Pieces • No Restock</p>
            <h2 className="font-display text-[40px] md:text-[56px] leading-[0.85] font-black uppercase tracking-tight">All 1 OF 1s<br />Painted Direct</h2>
          </div>
          <div className="flex items-center gap-3">
            <span className="px-3 py-1 bg-[#ff3b30] text-white text-[10px] tracking-widest uppercase font-mono font-bold">NO PRINTS</span>
            <Link href="/shop" className="group flex items-center gap-2 text-[12px] tracking-[0.18em] uppercase font-mono font-bold border-b-2 border-black pb-1 hover:border-[#ff3b30] hover:text-[#ff3b30] transition">
              View All 12 <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition" />
            </Link>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {featured.map((p, i) => (
            <ProductCard key={p.id} product={p} index={i} />
          ))}
        </div>

        <div className="mt-10 p-6 border border-black/10 bg-white flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <div className="font-mono text-[12px] leading-relaxed">
            <span className="font-bold uppercase">Note:</span> Each piece is one size only (the size of the vintage base we found). We paint what we find — no mass sizing. Check size on product page. All sales final — 1 of 1, no copies.
          </div>
          <a href="https://wa.me/256763813315?text=Hello%20Gayita!%20I%20want%20to%20know%20my%20size%20for%201%20of%201%20pieces" target="_blank" className="px-6 py-3 bg-black text-white text-[11px] tracking-widest uppercase font-mono font-bold hover:bg-[#ff3b30] transition shrink-0">
            WhatsApp for Sizing Help
          </a>
        </div>
      </section>

      {/* WhatsApp CTA */}
      <section className="max-w-[1600px] mx-auto px-6 md:px-10 mt-16">
        <div className="bg-[#25D366] text-black p-8 md:p-12 flex flex-col lg:flex-row justify-between gap-8 items-start lg:items-center border border-black">
          <div>
            <h3 className="font-display text-[32px] md:text-[44px] leading-[0.9] font-black uppercase tracking-tight">Order via WhatsApp —<br />Fastest way to claim a 1 of 1</h3>
            <p className="mt-3 font-mono text-[13px] max-w-[48ch]">We don’t do website checkout. Because 1 of 1s sell fast, we confirm on WhatsApp. Send us the piece number (001, 002...) and we’ll hold it for you for 10 mins while you pay MoMo.</p>
          </div>
          <div className="flex flex-col gap-3 w-full lg:w-auto">
            <a href="https://wa.me/256763813315?text=Hello%20Gayita!%20I%20want%20to%20order%20a%201%20OF%201%20painted%20piece" target="_blank" className="px-8 py-4 bg-black text-white text-center text-[12px] tracking-widest uppercase font-mono font-bold hover:bg-white hover:text-black border border-black transition">
              WhatsApp 0763813315
            </a>
            <a href="https://wa.me/256707548383?text=Hello%20Gayita!%20I%20want%20to%20order%20a%201%20OF%201%20painted%20piece" target="_blank" className="px-8 py-4 bg-white text-black text-center text-[12px] tracking-widest uppercase font-mono font-bold hover:bg-black hover:text-white border border-black transition">
              WhatsApp +256 707 548383
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
