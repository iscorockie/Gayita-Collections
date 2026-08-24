"use client";
import { useParams } from "next/navigation";
import { products, formatUGX, getWhatsAppMessage } from "@/lib/products";
import { useState } from "react";
import { useCart } from "@/lib/cart";
import { MessageCircle, Clock, Paintbrush, Ban, ArrowLeft } from "lucide-react";
import Link from "next/link";
import ProductCard from "@/components/ProductCard";
import { img } from "@/lib/config";

export default function ProductClient({ slugProp }: { slugProp?: string }) {
  const params = useParams();
  const slug = (slugProp || params.id) as string;
  const product = products.find(p => p.slug === slug) || products[0];
  const related = products.filter(p => p.category === product.category && p.id !== product.id).slice(0, 4);

  const [selectedSize] = useState(product.sizes[0]);
  const [activeImg, setActiveImg] = useState(0);
  const { addItem } = useCart();

  const whatsappMsg = getWhatsAppMessage(product, selectedSize);
  const whatsappUrl = `https://wa.me/256763813315?text=${encodeURIComponent(whatsappMsg)}`;
  const whatsappUrl2 = `https://wa.me/256707548383?text=${encodeURIComponent(whatsappMsg)}`;

  return (
    <div className="max-w-[1600px] mx-auto px-6 md:px-10 pt-6 pb-20">
      <Link href="/shop" className="inline-flex items-center gap-2 text-[11px] tracking-[0.2em] uppercase font-mono hover:underline mb-6">
        <ArrowLeft className="w-4 h-4" /> Back to 1 of 1s
      </Link>

      <div className="grid lg:grid-cols-12 gap-8 border border-black/10 bg-white">
        {/* Gallery */}
        <div className="lg:col-span-7 p-3 bg-[#f5f1e8] border-b lg:border-b-0 lg:border-r border-black/10">
          <div className="relative aspect-[4/5] overflow-hidden bg-white border border-black/10">
            <img src={img(product.images[activeImg])} alt={product.name} className="w-full h-full object-cover" />
            <div className="absolute top-3 left-3 flex gap-2">
              <span className="px-3 py-1 bg-black text-white text-[11px] tracking-[0.2em] uppercase font-mono font-bold">1 OF 1</span>
              <span className="px-3 py-1 bg-[#ff3b30] text-white text-[10px] tracking-widest uppercase font-mono font-bold">{product.paintTime}</span>
            </div>
            <div className="absolute top-3 right-3 px-3 py-1 bg-white border-2 border-black text-black text-[10px] tracking-widest uppercase font-mono font-bold rotate-[2deg]">NO COPIES • NO PRINTS</div>
            <div className="absolute bottom-3 left-3 bg-white border border-black px-3 py-2 shadow-[3px_3px_0px_black]">
              <p className="font-mono text-[10px] uppercase font-bold">{product.artist} • Painted Direct</p>
            </div>
          </div>
          <div className="flex gap-3 mt-3">
            {product.images.map((image, i) => (
              <button key={i} onClick={() => setActiveImg(i)} className={`w-20 h-24 border-2 overflow-hidden ${activeImg === i ? "border-black" : "border-black/10 opacity-70"}`}>
                <img src={img(image)} alt="" className="w-full h-full object-cover" />
              </button>
            ))}
          </div>
        </div>

        {/* Info */}
        <div className="lg:col-span-5 p-6 md:p-8 flex flex-col">
          <div>
            <p className="font-mono text-[11px] tracking-[0.25em] uppercase opacity-60">{product.tags.join(" • ")}</p>
            <h1 className="font-display text-[32px] md:text-[40px] leading-[0.9] font-black uppercase tracking-tight mt-2">{product.name}</h1>
            <p className="font-mono text-[11px] uppercase tracking-widest mt-2 px-2 py-1 bg-black text-white inline-block">Only 1 exists — No copies ever</p>
          </div>

          <div className="mt-6 flex items-baseline gap-3 border-y border-black/10 py-4">
            <span className="font-display text-[28px] font-black">{formatUGX(product.price)}</span>
            <span className="font-mono text-[11px] opacity-60 uppercase tracking-widest">1 of 1 • {product.paintTime} work • Size {selectedSize} only</span>
          </div>

          <p className="mt-6 font-mono text-[13px] leading-relaxed">{product.description}</p>

          <div className="mt-6 p-4 bg-[#f5f1e8] border border-black/10">
            <div className="flex gap-3">
              <div className="w-10 h-10 bg-black text-white rounded-full flex items-center justify-center shrink-0"><Paintbrush className="w-5 h-5" /></div>
              <div>
                <p className="font-mono text-[11px] uppercase font-bold tracking-widest">Artist Note</p>
                <p className="font-mono text-[12px] leading-relaxed mt-1 opacity-80">{product.story}</p>
                <p className="font-mono text-[10px] uppercase tracking-widest opacity-60 mt-2">Direct paint • No print • Signed</p>
              </div>
            </div>
          </div>

          <div className="mt-6 grid grid-cols-3 gap-3 font-mono text-[10px] uppercase tracking-widest">
            <div className="p-3 border border-black/10 text-center"><Ban className="w-4 h-4 mx-auto mb-1" />No Prints</div>
            <div className="p-3 border border-black/10 text-center"><Clock className="w-4 h-4 mx-auto mb-1" />{product.paintTime}</div>
            <div className="p-3 border border-black/10 text-center"><Paintbrush className="w-4 h-4 mx-auto mb-1" />Direct Paint</div>
          </div>

          <div className="mt-6 space-y-3">
            <a href={whatsappUrl} target="_blank" className="w-full py-4 bg-[#25D366] text-white flex items-center justify-center gap-2 text-[12px] tracking-[0.18em] uppercase font-mono font-bold hover:bg-black transition border border-black">
              <MessageCircle className="w-4 h-4" /> WhatsApp to Claim — {formatUGX(product.price)}
            </a>
            <a href={whatsappUrl2} target="_blank" className="w-full py-4 bg-white text-black border border-black flex items-center justify-center gap-2 text-[11px] tracking-[0.18em] uppercase font-mono font-bold hover:bg-black hover:text-white transition">
              WhatsApp +256 707 548383
            </a>
            <button onClick={() => addItem(product, selectedSize, product.colors[0].name, 1)} className="w-full py-3 border border-black/20 text-[11px] tracking-widest uppercase font-mono hover:bg-black hover:text-white transition">
              Add to Cart (Hold 10 mins)
            </button>
          </div>

          <div className="mt-6 border-t border-black/10 pt-6 space-y-2 font-mono text-[11px]">
            <p className="font-bold uppercase tracking-widest">Details — 1 OF 1</p>
            {product.details.map(d => <p key={d} className="opacity-70">— {d}</p>)}
            <p className="opacity-70">— Base: {product.materials.join(", ")}</p>
            <p className="opacity-70">— Size: {selectedSize} only (vintage base size)</p>
            <p className="mt-3 text-[10px] uppercase tracking-widest opacity-50">Wash cold inside out, no bleach, air dry. Paint will age beautifully.</p>
          </div>
        </div>
      </div>

      {/* Reviews */}
      <div className="mt-12 border border-black/10 bg-white p-6 md:p-8">
        <h3 className="font-display text-[24px] font-black uppercase">Collector Note</h3>
        <div className="mt-6 grid md:grid-cols-2 gap-6">
          {product.reviews.map(r => (
            <div key={r.id} className="p-4 border border-black/10 bg-[#faf6ee]">
              <p className="font-mono text-[12px] leading-relaxed">“{r.text}”</p>
              <p className="font-mono text-[10px] uppercase tracking-widest opacity-60 mt-3">— {r.author} • Verified 1 of 1 owner</p>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-12">
        <h3 className="font-display text-[22px] font-black uppercase mb-6">More 1 of 1s</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {related.map(p => <ProductCard key={p.id} product={p} />)}
        </div>
      </div>
    </div>
  );
}
