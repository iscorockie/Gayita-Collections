"use client";
import Link from "next/link";
import { Product, formatUGX } from "@/lib/products";
import { useState } from "react";
import { img } from "@/lib/config";

export default function ProductCard({ product, index = 0 }: { product: Product; index?: number }) {
  const [hover, setHover] = useState(false);

  return (
    <Link
      href={`/product/${product.slug}`}
      className="group block"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{ animationDelay: `${index * 60}ms` }}
    >
      <div className="relative aspect-[3/4] overflow-hidden bg-[#f5f1e8] rounded-[0px] border border-black/5">
        {/* Paint texture overlay */}
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }} />

        <img
          src={img(product.images[0])}
          alt={product.name}
          className={`absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-[cubic-bezier(.22,.61,.36,1)] ${hover ? "scale-[1.06]" : "scale-[1]"}`}
        />

        {/* 1 OF 1 Stamp */}
        <div className="absolute top-3 left-3 flex flex-col gap-2">
          <span className="px-2.5 py-1 bg-black text-white text-[10px] tracking-[0.2em] uppercase font-mono font-bold rotate-[-2deg]">1 OF 1</span>
          <span className="px-2.5 py-1 bg-white border border-black text-black text-[9px] tracking-[0.18em] uppercase font-mono font-bold rotate-[1deg]">NO COPIES</span>
        </div>

        {/* Paint time */}
        <div className="absolute top-3 right-3">
          <span className="px-2.5 py-1 bg-[#ff3b30] text-white text-[9px] tracking-widest uppercase font-mono font-bold rounded-full">{product.paintTime}</span>
        </div>

        {/* Bottom info - handwritten style */}
        <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-black/70 to-transparent">
          <div className="flex justify-between items-end text-white">
            <div>
              <p className="font-mono text-[9px] uppercase tracking-[0.2em] opacity-80">{product.artist}</p>
              <p className="font-display text-[13px] leading-tight mt-1 italic">Painted Direct • Not Printed</p>
            </div>
            <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center text-black group-hover:bg-black group-hover:text-white transition">
              <span className="text-[16px] leading-none">↗</span>
            </div>
          </div>
        </div>

        {/* Sold dot if stock 0 - but all stock 1 */}
        {product.stock === 0 && (
          <div className="absolute inset-0 bg-white/80 backdrop-blur-sm flex items-center justify-center">
            <span className="px-6 py-3 bg-black text-white font-mono text-[12px] tracking-[0.3em] uppercase rotate-[-8deg] border-4 border-black">SOLD — NO COPY</span>
          </div>
        )}
      </div>

      <div className="pt-3 px-1">
        <div className="flex justify-between items-start gap-2">
          <h3 className="font-display text-[16px] leading-[1.1] tracking-[-0.01em] font-bold uppercase">{product.name}</h3>
          <span className="font-mono text-[10px] px-2 py-1 bg-black text-white rounded-full shrink-0">{product.category}</span>
        </div>
        <p className="mt-1 text-[12px] leading-snug opacity-70 line-clamp-2 font-mono">{product.description.slice(0, 70)}...</p>
        <div className="mt-2 flex items-baseline justify-between">
          <span className="font-mono text-[13px] font-bold">{formatUGX(product.price)}</span>
          <span className="text-[10px] font-mono opacity-50 uppercase tracking-widest">Only 1 exists</span>
        </div>
      </div>
    </Link>
  );
}
