"use client";
import Link from "next/link";
import { Product, formatUGX } from "@/lib/products";
import { useState } from "react";
import { Star, ArrowUpRight } from "lucide-react";
import { img } from "@/lib/config";

export default function ProductCard({ product, index = 0 }: { product: Product; index?: number }) {
  const [hover, setHover] = useState(false);
  const secondImage = product.images[1] || product.images[0];

  return (
    <Link
      href={`/product/${product.slug}`}
      className="group block"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{ animationDelay: `${index * 60}ms` }}
    >
      <div className="relative aspect-[4/5] overflow-hidden bg-cream rounded-[20px]">
        {/* Images */}
        <img
          src={img(product.images[0])}
          alt={product.name}
          className={`absolute inset-0 w-full h-full object-cover transition-all duration-700 ease-[cubic-bezier(.22,.61,.36,1)] ${hover ? "scale-[1.08] opacity-0" : "scale-[1] opacity-100"}`}
        />
        <img
          src={img(secondImage)}
          alt={product.name}
          className={`absolute inset-0 w-full h-full object-cover transition-all duration-700 ease-[cubic-bezier(.22,.61,.36,1)] ${hover ? "scale-[1.08] opacity-100" : "scale-[1] opacity-0"}`}
        />

        {/* Top badges */}
        <div className="absolute top-3 left-3 right-3 flex justify-between items-start">
          <div className="flex gap-2">
            {product.new && <span className="px-3 py-1.5 bg-white rounded-full text-[10px] tracking-[0.18em] uppercase font-mono font-medium shadow-sm">New</span>}
            {product.originalPrice && <span className="px-3 py-1.5 bg-clay text-white rounded-full text-[10px] tracking-[0.18em] uppercase font-mono font-medium">Sale</span>}
          </div>
          <div className={`w-9 h-9 bg-white rounded-full flex items-center justify-center shadow-sm transition-transform duration-500 ${hover ? "scale-100 rotate-0" : "scale-0 rotate-45"}`}>
            <ArrowUpRight className="w-4 h-4" />
          </div>
        </div>

        {/* Bottom quick info */}
        <div className="absolute bottom-3 left-3 right-3 flex justify-between items-end">
          <div className="flex gap-1.5">
            {product.colors.slice(0, 3).map(c => (
              <span key={c.name} className="w-6 h-6 rounded-full border-2 border-white shadow-sm" style={{ background: c.hex }} />
            ))}
          </div>
          <span className="px-3 py-1.5 bg-coal/90 backdrop-blur text-white rounded-full text-[10px] tracking-widest uppercase font-mono">{product.category}</span>
        </div>

        {/* Hover overlay gradient */}
        <div className={`absolute inset-0 bg-gradient-to-t from-coal/20 to-transparent transition-opacity duration-500 ${hover ? "opacity-100" : "opacity-0"}`} />
      </div>

      <div className="pt-4 px-1">
        <div className="flex justify-between gap-3 items-start">
          <h3 className="font-display text-[18px] leading-[1.15] tracking-[-0.01em] group-hover:text-gold transition-colors line-clamp-2">{product.name}</h3>
          <div className="flex items-center gap-1 text-[11px] font-mono shrink-0">
            <Star className="w-3 h-3 fill-gold text-gold" />
            <span>{product.rating}</span>
            <span className="opacity-50">({product.reviewCount})</span>
          </div>
        </div>
        <div className="mt-2 flex items-baseline gap-2">
          <span className="font-medium text-[15px]">{formatUGX(product.price)}</span>
          {product.originalPrice && <span className="text-[13px] opacity-50 line-through">{formatUGX(product.originalPrice)}</span>}
          <span className="text-[11px] opacity-50 font-mono ml-auto">${product.priceUSD}</span>
        </div>
        <p className="mt-1.5 text-[12px] opacity-60 line-clamp-1">{product.tags.slice(0, 3).join(" • ")}</p>
      </div>
    </Link>
  );
}
