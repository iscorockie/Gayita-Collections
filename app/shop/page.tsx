"use client";
import { useState, useMemo, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { products, formatUGX } from "@/lib/products";
import ProductCard from "@/components/ProductCard";

const categories = ["All", "Tees", "Jackets", "Sweatshirts", "Bottoms", "Accessories"];

function ShopContent() {
  const searchParams = useSearchParams();
  const initialCat = searchParams.get("cat") || "All";
  const [selectedCat, setSelectedCat] = useState(initialCat);

  const filtered = useMemo(() => {
    let list = [...products];
    if (selectedCat !== "All") list = list.filter(p => p.category === selectedCat);
    return list;
  }, [selectedCat]);

  return (
    <div className="max-w-[1600px] mx-auto px-6 md:px-10 pt-8 pb-20">
      <div className="border border-black/10 bg-white">
        <div className="p-8 md:p-10 border-b border-black/10">
          <div className="flex flex-wrap justify-between gap-6">
            <div>
              <p className="font-mono text-[11px] tracking-[0.3em] uppercase opacity-60 mb-2">Archive • 12 Pieces Only • No Restock • No Copies</p>
              <h1 className="font-display text-[48px] md:text-[72px] leading-[0.85] font-black uppercase tracking-tight">Shop<br />1 OF 1s</h1>
              <p className="mt-4 font-mono text-[13px] max-w-[48ch] opacity-70">All pieces hand-painted directly on garment. No prints. No copies. Each size is the size of the vintage base we found — one size per piece. Once sold, gone forever.</p>
            </div>
            <div className="flex flex-col gap-3">
              <div className="px-4 py-2 bg-black text-white font-mono text-[11px] tracking-widest uppercase font-bold">12 TOTAL • {filtered.length} AVAILABLE</div>
              <div className="px-4 py-2 border border-black font-mono text-[11px] tracking-widest uppercase font-bold">PAINTED DIRECT • NO PRINTS</div>
              <a href="https://wa.me/256763813315" target="_blank" className="px-4 py-2 bg-[#25D366] text-white font-mono text-[11px] tracking-widest uppercase font-bold text-center">WhatsApp to Order</a>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-12">
          <aside className="lg:col-span-3 border-b lg:border-b-0 lg:border-r border-black/10 p-6">
            <h4 className="font-mono text-[11px] tracking-[0.25em] uppercase opacity-60 mb-4">Filter by Category</h4>
            <div className="space-y-2">
              {categories.map(cat => (
                <button key={cat} onClick={() => setSelectedCat(cat)} className={`w-full text-left px-4 py-3 border text-[13px] font-mono uppercase tracking-widest transition flex justify-between ${selectedCat === cat ? "bg-black text-white border-black" : "bg-white border-black/15 hover:border-black"}`}>
                  <span>{cat}</span>
                  <span className="opacity-60">{cat === "All" ? products.length : products.filter(p => p.category === cat).length}</span>
                </button>
              ))}
            </div>

            <div className="mt-8 p-4 bg-[#f5f1e8] border border-black/10">
              <p className="font-mono text-[11px] uppercase tracking-widest font-bold mb-2">How to Order</p>
              <p className="font-mono text-[11px] leading-relaxed opacity-70">1. Note piece number (001, 002...)<br />2. WhatsApp us on 0763813315<br />3. We confirm & hold 10 mins<br />4. Pay via MoMo / Airtel<br />5. Boda delivery same day</p>
            </div>

            <div className="mt-6 p-4 bg-black text-white">
              <p className="font-mono text-[11px] uppercase tracking-widest font-bold">Each is 1 of 1</p>
              <p className="font-mono text-[11px] leading-relaxed opacity-70 mt-2">No copies ever. Painted direct, not printed. You can feel the brush strokes. Wash cold inside out.</p>
            </div>
          </aside>

          <div className="lg:col-span-9 p-6">
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
              {filtered.map((p, i) => <ProductCard key={p.id} product={p} index={i} />)}
            </div>
            {filtered.length === 0 && <div className="py-20 text-center font-mono text-[13px] opacity-60">No pieces in this category — all sold (no copies will be made)</div>}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function ShopPage() {
  return (
    <Suspense fallback={<div className="p-10 font-mono">Loading 1 of 1s...</div>}>
      <ShopContent />
    </Suspense>
  );
}
