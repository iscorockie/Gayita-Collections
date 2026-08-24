"use client";
import { useState, useMemo, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { products, formatUGX } from "@/lib/products";
import ProductCard from "@/components/ProductCard";
import { SlidersHorizontal, X } from "lucide-react";

const categories = ["All", "Jackets", "Tees", "Sweatshirts", "Vintage", "Bottoms", "Accessories"];
const sortOptions = [
  { id: "featured", label: "Featured" },
  { id: "newest", label: "Newest" },
  { id: "price-low", label: "Price: Low to High" },
  { id: "price-high", label: "Price: High to Low" },
  { id: "rating", label: "Highest Rated" },
];

function ShopContent() {
  const searchParams = useSearchParams();
  const initialCat = searchParams.get("cat") || "All";
  const [selectedCat, setSelectedCat] = useState(initialCat);
  const [sort, setSort] = useState("featured");
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 300000]);
  const [showFilters, setShowFilters] = useState(false);

  const filtered = useMemo(() => {
    let list = [...products];
    if (selectedCat !== "All") list = list.filter(p => p.category === selectedCat);
    list = list.filter(p => p.price >= priceRange[0] && p.price <= priceRange[1]);
    switch (sort) {
      case "price-low": list.sort((a, b) => a.price - b.price); break;
      case "price-high": list.sort((a, b) => b.price - a.price); break;
      case "newest": list.sort((a, b) => (b.new ? 1 : 0) - (a.new ? 1 : 0)); break;
      case "rating": list.sort((a, b) => b.rating - a.rating); break;
      default: list.sort((a, b) => (b.featured ? 1 : 0) - (a.featured ? 1 : 0));
    }
    return list;
  }, [selectedCat, sort, priceRange]);

  return (
    <div className="max-w-[1600px] mx-auto px-6 md:px-10 pt-10 pb-20">
      {/* Header */}
      <div className="flex flex-wrap justify-between items-end gap-6 mb-10">
        <div>
          <h1 className="font-display text-[48px] md:text-[64px] leading-[0.9] tracking-[-0.03em]">Shop</h1>
          <p className="mt-3 text-[14px] opacity-70 max-w-[48ch]">All pieces hand-drawn in Kampala, printed in small batches. {filtered.length} products • Free boda delivery in Kampala over 200k UGX</p>
        </div>
        <div className="flex items-center gap-3">
          <select value={sort} onChange={e => setSort(e.target.value)} className="px-5 py-3 rounded-full border border-sand bg-white text-[13px] font-medium focus:outline-none">
            {sortOptions.map(o => <option key={o.id} value={o.id}>{o.label}</option>)}
          </select>
          <button onClick={() => setShowFilters(!showFilters)} className="md:hidden px-5 py-3 rounded-full border border-sand bg-white flex items-center gap-2 text-[13px]">
            <SlidersHorizontal className="w-4 h-4" /> Filters
          </button>
        </div>
      </div>

      <div className="grid lg:grid-cols-12 gap-10">
        {/* Sidebar */}
        <aside className={`${showFilters ? "block" : "hidden"} lg:block lg:col-span-3 space-y-8`}>
          <div className="lg:sticky lg:top-28 space-y-8">
            <div className="flex justify-between items-center lg:hidden">
              <h3 className="font-medium">Filters</h3>
              <button onClick={() => setShowFilters(false)} className="w-8 h-8 rounded-full border border-sand flex items-center justify-center"><X className="w-4 h-4" /></button>
            </div>

            <div>
              <h4 className="font-mono text-[11px] tracking-[0.25em] uppercase opacity-60 mb-4">Category</h4>
              <div className="space-y-2">
                {categories.map(cat => (
                  <button key={cat} onClick={() => setSelectedCat(cat)} className={`w-full text-left px-4 py-2.5 rounded-full text-[14px] transition flex justify-between items-center ${selectedCat === cat ? "bg-coal text-white" : "bg-cream hover:bg-sand"}`}>
                    <span>{cat}</span>
                    <span className="font-mono text-[11px] opacity-60">{cat === "All" ? products.length : products.filter(p => p.category === cat).length}</span>
                  </button>
                ))}
              </div>
            </div>

            <div>
              <h4 className="font-mono text-[11px] tracking-[0.25em] uppercase opacity-60 mb-4">Price Range (UGX)</h4>
              <div className="space-y-4">
                <div className="flex justify-between text-[13px] font-mono">
                  <span>{formatUGX(priceRange[0])}</span><span>{formatUGX(priceRange[1])}</span>
                </div>
                <input type="range" min={0} max={300000} step={5000} value={priceRange[1]} onChange={e => setPriceRange([priceRange[0], parseInt(e.target.value)])} className="w-full accent-coal" />
                <div className="flex gap-2">
                  <button onClick={() => setPriceRange([0, 100000])} className="px-3 py-1.5 bg-cream rounded-full text-[11px]">Under 100k</button>
                  <button onClick={() => setPriceRange([100000, 200000])} className="px-3 py-1.5 bg-cream rounded-full text-[11px]">100k-200k</button>
                  <button onClick={() => setPriceRange([0, 300000])} className="px-3 py-1.5 bg-cream rounded-full text-[11px]">All</button>
                </div>
              </div>
            </div>

            <div className="p-5 bg-coal text-cream rounded-2xl">
              <h4 className="font-display text-[20px] leading-tight">Need sizing help?</h4>
              <p className="text-[13px] opacity-70 mt-2">WhatsApp us — we know every piece. +256 707 548383</p>
              <a href="https://wa.me/256707548383" target="_blank" className="mt-4 inline-block px-5 py-2.5 bg-white text-coal rounded-full text-[11px] tracking-widest uppercase font-medium">Chat on WhatsApp</a>
            </div>
          </div>
        </aside>

        {/* Grid */}
        <div className="lg:col-span-9">
          {filtered.length === 0 ? (
            <div className="py-20 text-center">
              <p className="font-display text-2xl">No products found</p>
              <p className="opacity-60 mt-2">Try adjusting filters</p>
            </div>
          ) : (
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
              {filtered.map((p, i) => <ProductCard key={p.id} product={p} index={i} />)}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default function ShopPage() {
  return (
    <Suspense fallback={<div className="p-10">Loading shop...</div>}>
      <ShopContent />
    </Suspense>
  );
}
