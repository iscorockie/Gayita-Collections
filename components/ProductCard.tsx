"use client";

/* The supplied product JPGs are art-directed crops from the original demo set. */
/* eslint-disable @next/next/no-img-element */

import Link from "next/link";
import { ArrowUpRight, Heart, Star } from "lucide-react";
import { useState } from "react";
import { img } from "@/lib/config";
import { formatUGX, Product } from "@/lib/products";

export default function ProductCard({ product, index = 0 }: { product: Product; index?: number }) {
  const [hovered, setHovered] = useState(false);

  return (
    <Link
      href={`/product/${product.slug}`}
      className="group block reveal"
      style={{ animationDelay: `${Math.min(index, 8) * 70}ms` }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <article>
        <div className="relative aspect-[4/5] overflow-hidden rounded-[2px] bg-[#e8dfd2]">
          <img
            src={img(product.images[0])}
            alt={product.name}
            className={`h-full w-full object-cover transition duration-700 ease-[cubic-bezier(.22,.61,.36,1)] ${hovered ? "scale-[1.055]" : "scale-100"}`}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-transparent to-transparent opacity-70 transition duration-500 group-hover:opacity-90" />
          <div className="absolute left-3 top-3 flex flex-wrap gap-1.5">
            <span className="rounded-full bg-[#171412] px-2.5 py-1 font-mono text-[9px] uppercase tracking-[0.13em] text-white">1 of 1</span>
            {product.new && <span className="rounded-full bg-[#d6e476] px-2.5 py-1 font-mono text-[9px] uppercase tracking-[0.13em] text-[#171412]">New drop</span>}
          </div>
          <span aria-label={`Save ${product.name}`} className="absolute right-3 top-3 flex h-8 w-8 items-center justify-center rounded-full bg-white/90 text-[#171412] opacity-0 transition group-hover:opacity-100">
            <Heart className="h-3.5 w-3.5" />
          </span>
          <div className="absolute bottom-3 left-3 right-3 flex items-end justify-between gap-3 text-white">
            <div>
              <p className="font-mono text-[9px] uppercase tracking-[0.16em] text-white/65">{product.artist}</p>
              <p className="mt-1 font-display text-lg italic leading-none">{product.paintTime} in the studio</p>
            </div>
            <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white text-[#171412] transition group-hover:bg-[#d6e476]">
              <ArrowUpRight className={`h-4 w-4 transition ${hovered ? "translate-x-0.5 -translate-y-0.5" : ""}`} />
            </span>
          </div>
          {product.stock < 1 && <div className="absolute inset-0 flex items-center justify-center bg-white/80"><span className="rotate-[-5deg] border-2 border-[#171412] bg-[#171412] px-4 py-2 font-mono text-xs uppercase tracking-[0.18em] text-white">Collected</span></div>}
        </div>
        <div className="pt-4">
          <div className="flex items-start justify-between gap-3">
            <h3 className="font-display text-[22px] leading-[0.95] tracking-[-0.01em]">{product.name.replace(/^\d+\s+—\s+/, "")}</h3>
            <span className="shrink-0 rounded-full border border-black/15 px-2 py-1 font-mono text-[9px] uppercase tracking-[0.1em]">{product.category}</span>
          </div>
          <p className="mt-2 line-clamp-2 text-xs leading-5 text-black/60">{product.description}</p>
          <div className="mt-3 flex items-center justify-between border-t border-black/10 pt-3">
            <span className="font-mono text-sm font-medium">{formatUGX(product.price)}</span>
            <span className="flex items-center gap-1 font-mono text-[10px] text-black/55"><Star className="h-3 w-3 fill-[#b86f48] text-[#b86f48]" /> {product.rating.toFixed(1)}</span>
          </div>
        </div>
      </article>
    </Link>
  );
}
