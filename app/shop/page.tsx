"use client";

import Link from "next/link";
import { ChevronRight, Filter, Search, SlidersHorizontal, X } from "lucide-react";
import { Suspense, useMemo, useState } from "react";
import { formatUGX, products } from "@/lib/products";
import ProductCardDefault from "@/components/ProductCard";
import { useSearchParams } from "next/navigation";

type SortOption = "featured" | "newest" | "price-low" | "price-high" | "rating";

const categories = ["All", "Tees", "Jackets", "Sweatshirts", "Bottoms", "Accessories"] as const;
const priceRanges = [
  { value: "all", label: "All prices" },
  { value: "150000", label: `Under ${formatUGX(150000)}` },
  { value: "250000", label: `Under ${formatUGX(250000)}` },
  { value: "400000", label: `Under ${formatUGX(400000)}` },
];

function ShopContent() {
  const searchParams = useSearchParams();
  const queryCategory = searchParams.get("cat");
  const [selectedCategory, setSelectedCategory] = useState<string>(categories.includes(queryCategory as (typeof categories)[number]) ? queryCategory! : "All");
  const [selectedPrice, setSelectedPrice] = useState("all");
  const [sort, setSort] = useState<SortOption>("featured");
  const [search, setSearch] = useState("");
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);

  const filteredProducts = useMemo(() => {
    const searchTerm = search.trim().toLowerCase();
    const maxPrice = selectedPrice === "all" ? Number.POSITIVE_INFINITY : Number(selectedPrice);
    const result = products.filter((product) => {
      const matchesCategory = selectedCategory === "All" || product.category === selectedCategory;
      const matchesPrice = product.price < maxPrice;
      const matchesSearch = !searchTerm || [product.name, product.category, product.description, ...product.tags].join(" ").toLowerCase().includes(searchTerm);
      return matchesCategory && matchesPrice && matchesSearch;
    });

    return result.sort((a, b) => {
      if (sort === "price-low") return a.price - b.price;
      if (sort === "price-high") return b.price - a.price;
      if (sort === "rating") return b.rating - a.rating;
      if (sort === "newest") return Number(b.new) - Number(a.new);
      return Number(b.featured) - Number(a.featured) || a.id.localeCompare(b.id);
    });
  }, [search, selectedCategory, selectedPrice, sort]);

  const activeFilters = Number(selectedCategory !== "All") + Number(selectedPrice !== "all") + Number(Boolean(search));
  const resetFilters = () => {
    setSelectedCategory("All");
    setSelectedPrice("all");
    setSearch("");
    setSort("featured");
  };

  const filterPanel = (
    <div className="space-y-8">
      <div>
        <div className="mb-4 flex items-center justify-between"><p className="eyebrow text-black/50">Category</p><span className="font-mono text-[10px] text-black/45">{products.length} pieces</span></div>
        <div className="space-y-1.5">
          {categories.map((category) => {
            const count = category === "All" ? products.length : products.filter((product) => product.category === category).length;
            const active = selectedCategory === category;
            return <button key={category} type="button" onClick={() => setSelectedCategory(category)} className={`flex w-full items-center justify-between rounded-[2px] px-3 py-2.5 text-left font-mono text-[10px] uppercase tracking-[0.12em] transition ${active ? "bg-[#171412] text-white" : "hover:bg-[#f6f1e8]"}`}><span>{category}</span><span className={active ? "text-[#d6e476]" : "text-black/40"}>{count.toString().padStart(2, "0")}</span></button>;
          })}
        </div>
      </div>
      <div>
        <p className="eyebrow mb-4 text-black/50">Price</p>
        <div className="space-y-1.5">
          {priceRanges.map((range) => <label key={range.value} className={`flex cursor-pointer items-center gap-3 rounded-[2px] px-3 py-2.5 font-mono text-[10px] uppercase tracking-[0.08em] transition hover:bg-[#f6f1e8] ${selectedPrice === range.value ? "bg-[#f6f1e8]" : ""}`}><input type="radio" name="price" value={range.value} checked={selectedPrice === range.value} onChange={() => setSelectedPrice(range.value)} className="accent-[#b86f48]" />{range.label}</label>)}
        </div>
      </div>
      <div className="border-t border-black/10 pt-6"><p className="eyebrow mb-3 text-black/50">The Gayita promise</p><p className="text-xs leading-5 text-black/55">Every piece is hand-drawn or hand-painted, sourced in small quantities and photographed in our Kampala studio. If it sells, it leaves the edit.</p></div>
      {activeFilters > 0 && <button type="button" onClick={resetFilters} className="font-mono text-[10px] uppercase tracking-[0.12em] underline underline-offset-4">Clear filters</button>}
    </div>
  );

  return (
    <div className="mx-auto max-w-[1440px] px-5 pb-24 pt-8 md:px-8 md:pt-12">
      <div className="border-b border-black/10 pb-9">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end"><div><p className="eyebrow text-[#b86f48]">The current edit · Kampala</p><h1 className="mt-4 font-display text-6xl leading-[.8] tracking-[-0.05em] md:text-8xl">Shop the<br /><em>one-offs.</em></h1></div><p className="max-w-[34ch] text-sm leading-6 text-black/60">Hand-drawn art on vintage and everyday silhouettes. One garment, one artwork, one owner.</p></div>
        <div className="mt-10 flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between">
          <label className="relative block w-full max-w-[440px]"><span className="sr-only">Search the edit</span><Search className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-black/40" /><input type="search" value={search} onChange={(event) => setSearch(event.target.value)} placeholder="Search cranes, denim, city lights..." className="w-full rounded-full border border-black/15 bg-[#fffdf8] py-3.5 pl-11 pr-5 text-sm outline-none transition placeholder:text-black/35 focus:border-black" /></label>
          <div className="flex flex-wrap items-center gap-2"><button type="button" onClick={() => setMobileFiltersOpen(true)} className="inline-flex items-center gap-2 rounded-full border border-black/15 px-4 py-3 font-mono text-[10px] uppercase tracking-[0.12em] lg:hidden"><SlidersHorizontal className="h-3.5 w-3.5" /> Filters{activeFilters > 0 && <span className="flex h-4 min-w-4 items-center justify-center rounded-full bg-[#171412] px-1 text-[9px] text-white">{activeFilters}</span>}</button><label className="flex items-center gap-3 rounded-full border border-black/15 bg-[#fffdf8] px-4 py-3 font-mono text-[10px] uppercase tracking-[0.1em]">Sort by<select value={sort} onChange={(event) => setSort(event.target.value as SortOption)} className="bg-transparent pr-1 font-mono text-[10px] outline-none"><option value="featured">Featured</option><option value="newest">Newest</option><option value="price-low">Price: low to high</option><option value="price-high">Price: high to low</option><option value="rating">Top rated</option></select></label></div>
        </div>
      </div>

      <div className="mt-8 grid gap-10 lg:grid-cols-[220px_1fr]">
        <aside className="hidden lg:block">{filterPanel}</aside>
        <section aria-live="polite">
          <div className="mb-6 flex items-center justify-between border-b border-black/10 pb-4"><p className="font-mono text-[10px] uppercase tracking-[0.13em] text-black/55">Showing <span className="text-black">{filteredProducts.length.toString().padStart(2, "0")}</span> of {products.length.toString().padStart(2, "0")} pieces</p>{activeFilters > 0 && <button type="button" onClick={resetFilters} className="hidden font-mono text-[10px] uppercase tracking-[0.1em] text-black/50 underline underline-offset-4 sm:block">Clear all</button>}</div>
          {filteredProducts.length > 0 ? <div className="grid grid-cols-2 gap-x-4 gap-y-12 md:grid-cols-3 md:gap-6">{filteredProducts.map((product, index) => <ProductCardDefault key={product.id} product={product} index={index} />)}</div> : <div className="flex min-h-[340px] flex-col items-center justify-center rounded-[2px] border border-dashed border-black/20 bg-[#fffdf8] text-center"><Filter className="h-6 w-6 text-[#b86f48]" /><h2 className="mt-4 font-display text-3xl">Nothing in that frame.</h2><p className="mt-2 max-w-[32ch] text-sm leading-6 text-black/55">Try another search or clear your filters to see the full edit.</p><button type="button" onClick={resetFilters} className="mt-6 rounded-full bg-[#171412] px-5 py-3 font-mono text-[10px] uppercase tracking-[0.14em] text-white">Reset view</button></div>}
        </section>
      </div>

      {mobileFiltersOpen && <div className="fixed inset-0 z-[80] lg:hidden"><button type="button" aria-label="Close filters" onClick={() => setMobileFiltersOpen(false)} className="absolute inset-0 bg-black/35" /><aside className="absolute bottom-0 left-0 right-0 max-h-[85vh] overflow-y-auto rounded-t-[18px] bg-[#fffdf8] px-6 pb-9 pt-5 shadow-2xl"><div className="mb-7 flex items-center justify-between"><div><p className="eyebrow text-black/50">Refine the edit</p><h2 className="mt-1 font-display text-3xl">Filters</h2></div><button type="button" onClick={() => setMobileFiltersOpen(false)} className="flex h-10 w-10 items-center justify-center rounded-full border border-black/15" aria-label="Close filters"><X className="h-4 w-4" /></button></div>{filterPanel}<button type="button" onClick={() => setMobileFiltersOpen(false)} className="mt-8 w-full rounded-full bg-[#171412] py-4 font-mono text-[10px] uppercase tracking-[0.15em] text-white">View {filteredProducts.length} pieces</button></aside></div>}

      <div className="mt-20 grid gap-3 border-t border-black/10 pt-8 sm:grid-cols-3"><div><p className="eyebrow text-[#b86f48]">01 · Browse</p><p className="mt-2 text-sm leading-6 text-black/60">Save the piece number or open its full story.</p></div><div><p className="eyebrow text-[#b86f48]">02 · Choose</p><p className="mt-2 text-sm leading-6 text-black/60">Every size is the size of the original garment we found.</p></div><div><p className="eyebrow text-[#b86f48]">03 · Confirm</p><p className="mt-2 text-sm leading-6 text-black/60">Checkout online, then we confirm delivery on WhatsApp.</p></div></div>
      <div className="mt-8 flex flex-col items-start justify-between gap-4 rounded-[2px] bg-[#211b18] p-6 text-[#fffdf8] sm:flex-row sm:items-center md:p-8"><div><p className="font-display text-3xl">Looking for something made for you?</p><p className="mt-1 text-sm text-white/60">Custom jackets, tees, shoots and designer collaborations.</p></div><Link href="/#custom" className="inline-flex shrink-0 items-center gap-2 rounded-full bg-[#d6e476] px-5 py-3 font-mono text-[10px] uppercase tracking-[0.12em] text-[#171412]">Talk custom <ChevronRight className="h-4 w-4" /></Link></div>
    </div>
  );
}

export default function ShopPage() {
  return <Suspense fallback={<div className="mx-auto max-w-[1440px] px-5 py-20 font-mono text-sm">Loading the edit...</div>}><ShopContent /></Suspense>;
}
