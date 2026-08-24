"use client";
import { useParams } from "next/navigation";
import { products, formatUGX } from "@/lib/products";
import { useState } from "react";
import { useCart } from "@/lib/cart";
import { Star, Truck, Shield, Brush, Heart, Share2, Minus, Plus, ArrowLeft } from "lucide-react";
import Link from "next/link";
import ProductCard from "@/components/ProductCard";
import { img } from "@/lib/config";

export default function ProductClient({ slugProp }: { slugProp?: string }) {
  const params = useParams();
  const slug = (slugProp || params.id) as string;
  const product = products.find(p => p.slug === slug) || products[0];
  const related = products.filter(p => p.category === product.category && p.id !== product.id).slice(0, 4);

  const [selectedSize, setSelectedSize] = useState(product.sizes[0]);
  const [selectedColor, setSelectedColor] = useState(product.colors[0].name);
  const [qty, setQty] = useState(1);
  const [activeImg, setActiveImg] = useState(0);
  const { addItem } = useCart();

  return (
    <div className="max-w-[1600px] mx-auto px-6 md:px-10 pt-8 pb-20">
      <Link href="/shop" className="inline-flex items-center gap-2 text-[12px] tracking-widest uppercase font-mono hover:text-gold transition mb-8">
        <ArrowLeft className="w-4 h-4" /> Back to Shop
      </Link>

      <div className="grid lg:grid-cols-12 gap-10">
        {/* Gallery */}
        <div className="lg:col-span-7 grid grid-cols-12 gap-4">
          <div className="hidden md:flex col-span-2 flex-col gap-3">
            {product.images.map((image, i) => (
              <button key={i} onClick={() => setActiveImg(i)} className={`aspect-[4/5] rounded-xl overflow-hidden border-2 transition ${activeImg === i ? "border-coal" : "border-transparent opacity-70 hover:opacity-100"}`}>
                <img src={img(image)} alt={product.name} className="w-full h-full object-cover" />
              </button>
            ))}
          </div>
          <div className="col-span-12 md:col-span-10">
            <div className="aspect-[4/5] rounded-[24px] overflow-hidden bg-cream relative">
              <img src={img(product.images[activeImg])} alt={product.name} className="w-full h-full object-cover" />
              <div className="absolute top-4 left-4 flex gap-2">
                {product.new && <span className="px-3 py-1.5 bg-white rounded-full text-[10px] tracking-widest uppercase font-mono shadow">New Drop</span>}
                <span className="px-3 py-1.5 bg-coal text-white rounded-full text-[10px] tracking-widest uppercase font-mono">{product.category}</span>
              </div>
              <div className="absolute bottom-4 right-4 flex gap-2">
                <button className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow hover:bg-cream transition"><Heart className="w-4 h-4" /></button>
                <button className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow hover:bg-cream transition"><Share2 className="w-4 h-4" /></button>
              </div>
            </div>
            <div className="flex md:hidden gap-3 mt-4 overflow-x-auto">
              {product.images.map((image, i) => (
                <button key={i} onClick={() => setActiveImg(i)} className={`w-20 h-24 rounded-xl overflow-hidden border-2 shrink-0 ${activeImg === i ? "border-coal" : "border-transparent"}`}>
                  <img src={img(image)} alt="" className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Info */}
        <div className="lg:col-span-5 lg:sticky lg:top-28 h-fit">
          <div className="flex items-start justify-between gap-4">
            <div>
              <p className="font-mono text-[11px] tracking-[0.25em] uppercase opacity-60">{product.tags.join(" • ")}</p>
              <h1 className="font-display text-[36px] md:text-[44px] leading-[0.9] tracking-[-0.02em] mt-3">{product.name}</h1>
            </div>
            <div className="flex items-center gap-1 text-[12px] font-mono shrink-0 bg-cream px-3 py-1.5 rounded-full">
              <Star className="w-3.5 h-3.5 fill-gold text-gold" /> {product.rating} <span className="opacity-60">({product.reviewCount})</span>
            </div>
          </div>

          <div className="mt-6 flex items-baseline gap-3">
            <span className="font-display text-[32px]">{formatUGX(product.price)}</span>
            {product.originalPrice && <span className="opacity-50 line-through">{formatUGX(product.originalPrice)}</span>}
            <span className="ml-auto font-mono text-[12px] opacity-60">${product.priceUSD} USD</span>
          </div>

          <p className="mt-6 text-[15px] leading-relaxed opacity-80">{product.description}</p>

          <div className="mt-8 p-4 bg-cream rounded-2xl">
            <div className="flex gap-3">
              <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center"><Brush className="w-5 h-5" /></div>
              <div>
                <p className="font-medium text-[13px]">Artist Story</p>
                <p className="text-[13px] opacity-70 mt-1 leading-relaxed">{product.story}</p>
                <p className="font-mono text-[11px] uppercase tracking-widest opacity-60 mt-2">By {product.artist} • Kabalagala Studio</p>
              </div>
            </div>
          </div>

          {/* Options */}
          <div className="mt-8 space-y-6">
            <div>
              <div className="flex justify-between items-center mb-3">
                <h4 className="font-mono text-[11px] tracking-[0.2em] uppercase opacity-60">Color: {selectedColor}</h4>
                <span className="text-[11px] opacity-60">{product.colors.length} options</span>
              </div>
              <div className="flex gap-2">
                {product.colors.map(c => (
                  <button key={c.name} onClick={() => setSelectedColor(c.name)} className={`px-4 py-2.5 rounded-full border text-[13px] flex items-center gap-2 transition ${selectedColor === c.name ? "bg-coal text-white border-coal" : "bg-white border-sand hover:border-coal"}`}>
                    <span className="w-4 h-4 rounded-full border border-black/10" style={{ background: c.hex }} /> {c.name}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <div className="flex justify-between items-center mb-3">
                <h4 className="font-mono text-[11px] tracking-[0.2em] uppercase opacity-60">Size: {selectedSize}</h4>
                <button className="text-[11px] underline opacity-60">Size Guide</button>
              </div>
              <div className="flex flex-wrap gap-2">
                {product.sizes.map(s => (
                  <button key={s} onClick={() => setSelectedSize(s)} className={`min-w-[56px] px-4 py-3 rounded-full border text-[13px] font-medium transition ${selectedSize === s ? "bg-coal text-white border-coal" : "bg-white border-sand hover:border-coal"}`}>{s}</button>
                ))}
              </div>
            </div>

            <div className="flex gap-3">
              <div className="flex items-center gap-2 border border-sand rounded-full px-2 py-1 bg-white">
                <button onClick={() => setQty(Math.max(1, qty - 1))} className="w-10 h-10 rounded-full hover:bg-cream flex items-center justify-center"><Minus className="w-4 h-4" /></button>
                <span className="w-8 text-center font-medium">{qty}</span>
                <button onClick={() => setQty(qty + 1)} className="w-10 h-10 rounded-full hover:bg-cream flex items-center justify-center"><Plus className="w-4 h-4" /></button>
              </div>
              <button onClick={() => addItem(product, selectedSize, selectedColor, qty)} className="flex-1 py-4 bg-coal text-white rounded-full text-[13px] tracking-[0.18em] uppercase font-medium hover:bg-gold transition">
                Add to Cart — {formatUGX(product.price * qty)}
              </button>
            </div>

            <div className="grid grid-cols-3 gap-3 text-[11px] font-mono">
              <div className="p-3 bg-cream rounded-xl text-center"><Truck className="w-5 h-5 mx-auto mb-1" />Same-day in Kla</div>
              <div className="p-3 bg-cream rounded-xl text-center"><Shield className="w-5 h-5 mx-auto mb-1" />Secure Pay</div>
              <div className="p-3 bg-cream rounded-xl text-center"><Brush className="w-5 h-5 mx-auto mb-1" />Hand-Drawn</div>
            </div>

            <div className="border-t border-sand pt-6 space-y-3">
              <h4 className="font-mono text-[11px] tracking-[0.25em] uppercase opacity-60">Details</h4>
              <ul className="space-y-2">
                {product.details.map(d => <li key={d} className="flex gap-2 text-[13px]"><span className="opacity-40">—</span> {d}</li>)}
                <li className="flex gap-2 text-[13px]"><span className="opacity-40">—</span> Materials: {product.materials.join(", ")}</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Reviews */}
      <div className="mt-20 grid lg:grid-cols-12 gap-10 border-t border-sand pt-12">
        <div className="lg:col-span-4">
          <h3 className="font-display text-[32px] leading-none">Reviews</h3>
          <div className="mt-4 flex items-center gap-3">
            <div className="text-[48px] font-display leading-none">{product.rating}</div>
            <div>
              <div className="flex gap-0.5">{Array.from({ length: 5 }).map((_, i) => <Star key={i} className={`w-4 h-4 ${i < Math.floor(product.rating) ? "fill-gold text-gold" : "text-sand"}`} />)}</div>
              <p className="font-mono text-[11px] uppercase tracking-widest opacity-60 mt-1">{product.reviewCount} verified reviews</p>
            </div>
          </div>
        </div>
        <div className="lg:col-span-8 space-y-6">
          {product.reviews.map(r => (
            <div key={r.id} className="p-6 bg-white border border-sand rounded-2xl">
              <div className="flex justify-between items-start">
                <div className="flex gap-3">
                  <div className="w-10 h-10 rounded-full bg-cream flex items-center justify-center font-medium text-[13px]">{r.avatar}</div>
                  <div>
                    <p className="font-medium text-[14px]">{r.author} {r.verified && <span className="ml-2 px-2 py-0.5 bg-green-100 text-green-700 rounded-full text-[10px] uppercase tracking-widest">Verified</span>}</p>
                    <p className="font-mono text-[11px] opacity-60">{r.date}</p>
                  </div>
                </div>
                <div className="flex gap-0.5">{Array.from({ length: 5 }).map((_, i) => <Star key={i} className={`w-3.5 h-3.5 ${i < r.rating ? "fill-gold text-gold" : "text-sand"}`} />)}</div>
              </div>
              <p className="mt-4 text-[14px] leading-relaxed opacity-80">{r.text}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Related */}
      <div className="mt-20">
        <h3 className="font-display text-[28px] mb-8">You may also like</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {related.map(p => <ProductCard key={p.id} product={p} />)}
        </div>
      </div>
    </div>
  );
}
