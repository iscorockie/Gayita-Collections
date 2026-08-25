import { useMemo, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { PRODUCTS, avgRating } from "../data/products";
import type { Category } from "../lib/types";
import ProductCard from "../components/ProductCard";
import { Reveal } from "../components/ui";
import { CATEGORY_LABEL, cn } from "../lib/utils";
import { useStore } from "../context/StoreContext";
import { IconFlame, IconHeart, IconLock, IconSearch, IconX } from "../components/icons";

const SIZE_ORDER = ["XS", "S", "M", "L", "XL", "XXL", "US 7", "US 8", "US 9", "US 10", "US 11", "US 12", "26", "28", "30", "32", "One Size"];
const PRICE_MAX = 400_000;
const PRICE_STEP = 10_000;

type SortKey = "featured" | "newest" | "price-asc" | "price-desc" | "rating";
const SORTS: { key: SortKey; label: string }[] = [
  { key: "featured", label: "Featured" },
  { key: "newest", label: "Newest" },
  { key: "price-asc", label: "Price: Low → High" },
  { key: "price-desc", label: "Price: High → Low" },
  { key: "rating", label: "Top Rated" },
];

function parseCats(v: string | null): Category[] {
  if (!v) return [];
  return v.split(",").filter((c): c is Category => ["vintage", "custom", "kicks", "accessories"].includes(c));
}

export default function Shop() {
  const [params, setParams] = useSearchParams();
  const [filtersOpen, setFiltersOpen] = useState(false);
  const { wishlist } = useStore();

  const cats = parseCats(params.get("cat"));
  const query = params.get("q")?.toLowerCase() ?? "";
  const sort = (params.get("sort") as SortKey) || "featured";
  const sizes = params.get("sizes")?.split(",").filter(Boolean) ?? [];
  const maxPrice = Number(params.get("max")) || PRICE_MAX;
  const saleOnly = params.get("sale") === "1";
  const dropsOnly = params.get("drop") === "1";
  const wishOnly = params.get("wish") === "1";

  const setParam = (key: string, value: string | null) => {
    const next = new URLSearchParams(params);
    if (value === null || value === "") next.delete(key);
    else next.set(key, value);
    setParams(next, { replace: true });
  };

  const toggleCat = (c: Category) => {
    const next = cats.includes(c) ? cats.filter((x) => x !== c) : [...cats, c];
    setParam("cat", next.length ? next.join(",") : null);
  };
  const toggleSize = (s: string) => {
    const next = sizes.includes(s) ? sizes.filter((x) => x !== s) : [...sizes, s];
    setParam("sizes", next.length ? next.join(",") : null);
  };
  const clearAll = () => setParams(new URLSearchParams(), { replace: true });
  const hasFilters =
    cats.length > 0 || query || sizes.length > 0 || maxPrice < PRICE_MAX || saleOnly || dropsOnly || wishOnly;

  const allSizes = useMemo(() => {
    const set = new Set<string>();
    PRODUCTS.forEach((p) => p.sizes.forEach((s) => set.add(s)));
    return SIZE_ORDER.filter((s) => set.has(s));
  }, []);

  const filtered = useMemo(() => {
    const list = PRODUCTS.filter((p) => {
      if (wishOnly && !wishlist.includes(p.slug)) return false;
      if (dropsOnly && !p.isDrop) return false;
      if (cats.length && !cats.includes(p.category)) return false;
      if (saleOnly && !(p.compareAt && p.compareAt > p.price)) return false;
      if (p.price > maxPrice) return false;
      if (sizes.length && !p.sizes.some((s) => sizes.includes(s))) return false;
      if (query && !`${p.name} ${p.line} ${p.short} ${CATEGORY_LABEL[p.category]}`.toLowerCase().includes(query))
        return false;
      return true;
    });
    const by: Record<SortKey, (a: (typeof PRODUCTS)[0], b: (typeof PRODUCTS)[0]) => number> = {
      featured: (a, b) =>
        Number(b.isDrop ?? false) - Number(a.isDrop ?? false) ||
        Number(b.isBestseller ?? false) - Number(a.isBestseller ?? false) ||
        Number(b.isNew ?? false) - Number(a.isNew ?? false) ||
        b.addedAt - a.addedAt,
      newest: (a, b) => b.addedAt - a.addedAt,
      "price-asc": (a, b) => a.price - b.price,
      "price-desc": (a, b) => b.price - a.price,
      rating: (a, b) => avgRating(b) - avgRating(a),
    };
    return [...list].sort(by[sort] ?? by.featured);
  }, [cats, saleOnly, dropsOnly, wishOnly, maxPrice, sizes, query, sort, wishlist]);

  const heading = wishOnly
    ? "Your Wishlist"
    : dropsOnly
    ? "The Drop Zone"
    : cats.length === 1
    ? CATEGORY_LABEL[cats[0]]
    : saleOnly
    ? "On Sale"
    : "Shop All";

  const activeFilterCount =
    cats.length + sizes.length + (saleOnly ? 1 : 0) + (dropsOnly ? 1 : 0) + (wishOnly ? 1 : 0) + (maxPrice < PRICE_MAX ? 1 : 0);

  const FiltersBody = (
    <div className="space-y-8">
      <div>
        <h4 className="tag text-bone/55">Search</h4>
        <div className="relative mt-3">
          <IconSearch className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-bone/35" />
          <input
            value={params.get("q") ?? ""}
            onChange={(e) => setParam("q", e.target.value || null)}
            placeholder="denim, crane, kicks…"
            className="field pl-10"
          />
        </div>
      </div>

      <div>
        <h4 className="tag text-bone/55">Category</h4>
        <div className="mt-3 space-y-2.5">
          {(Object.keys(CATEGORY_LABEL) as Category[]).map((c) => (
            <label key={c} className="group flex cursor-pointer items-center gap-3">
              <span className={cn(
                "flex h-[18px] w-[18px] items-center justify-center border text-[10px] transition-all",
                cats.includes(c) ? "border-volt bg-volt text-asphalt" : "border-bone/30 group-hover:border-volt"
              )}>
                {cats.includes(c) && "✓"}
              </span>
              <input type="checkbox" className="sr-only" checked={cats.includes(c)} onChange={() => toggleCat(c)} />
              <span className="text-[14px] text-bone/75">{CATEGORY_LABEL[c]}</span>
              <span className="ml-auto font-mono text-[11px] text-bone/35">
                {PRODUCTS.filter((p) => p.category === c).length}
              </span>
            </label>
          ))}
        </div>
      </div>

      <div>
        <h4 className="tag text-bone/55">Size</h4>
        <div className="mt-3 flex flex-wrap gap-2">
          {allSizes.map((s) => (
            <button
              key={s}
              type="button"
              onClick={() => toggleSize(s)}
              className={cn(
                "min-w-[40px] border px-2 py-2 font-mono text-[11px] font-bold transition-all",
                sizes.includes(s) ? "border-volt bg-volt text-asphalt" : "border-bone/25 text-bone/60 hover:border-volt hover:text-volt"
              )}
            >
              {s}
            </button>
          ))}
        </div>
      </div>

      <div>
        <div className="flex items-center justify-between">
          <h4 className="tag text-bone/55">Max price</h4>
          <span className="font-mono text-[12px] font-bold text-volt">
            {(maxPrice / 1000).toFixed(0)}k
          </span>
        </div>
        <input
          type="range"
          min={40_000}
          max={PRICE_MAX}
          step={PRICE_STEP}
          value={maxPrice}
          onChange={(e) => setParam("max", Number(e.target.value) >= PRICE_MAX ? null : e.target.value)}
          className="mt-4 w-full"
          aria-label="Maximum price"
        />
        <div className="mt-1 flex justify-between font-mono text-[10px] text-bone/35">
          <span>40k</span>
          <span>400k</span>
        </div>
      </div>

      <div className="space-y-2.5">
        {[
          { label: "Drops only", icon: <IconLock className="h-3.5 w-3.5" />, on: dropsOnly, toggle: () => setParam("drop", dropsOnly ? null : "1") },
          { label: "On sale", icon: <IconFlame className="h-3.5 w-3.5" />, on: saleOnly, toggle: () => setParam("sale", saleOnly ? null : "1") },
          { label: "My wishlist", icon: <IconHeart className="h-3.5 w-3.5" />, on: wishOnly, toggle: () => setParam("wish", wishOnly ? null : "1") },
        ].map((f) => (
          <button
            key={f.label}
            onClick={f.toggle}
            className={cn(
              "flex w-full items-center gap-2.5 border px-4 py-2.5 text-[12px] font-bold uppercase tracking-wider transition-all",
              f.on ? "border-volt bg-volt text-asphalt" : "border-bone/20 text-bone/60 hover:border-volt hover:text-volt"
            )}
          >
            {f.icon} {f.label}
          </button>
        ))}
      </div>

      {hasFilters && (
        <button onClick={clearAll} className="flex items-center gap-2 font-mono text-[11px] font-bold uppercase tracking-[0.18em] text-danger hover:text-volt">
          <IconX className="h-3.5 w-3.5" /> Clear all filters
        </button>
      )}
    </div>
  );

  return (
    <main className="bg-asphalt">
      <section className="relative overflow-hidden border-b border-bone/10 bg-coal2 py-14 sm:py-20">
        <div className="grid-tex absolute inset-0" aria-hidden />
        <div className="relative mx-auto max-w-7xl px-4">
          <p className="tag text-volt">Gayita Collections · Kampala</p>
          <h1 className="mt-3 font-display text-5xl uppercase sm:text-7xl">{heading}</h1>
          <p className="mt-3 font-mono text-[12px] text-bone/50">
            {filtered.length} PIECE{filtered.length === 1 ? "" : "S"} {dropsOnly && "— UNLOCKS FRIDAY 8PM EAT"}
            {query && <> · “<span className="text-volt">{query}</span>”</>}
          </p>
        </div>
        <div className="absolute bottom-0 left-0 h-[3px] w-full hazard" />
      </section>

      <div className="mx-auto max-w-7xl px-4 py-10 sm:py-14">
        <div className="mb-8 flex flex-wrap items-center justify-between gap-4 border-b border-bone/10 pb-5">
          <button
            onClick={() => setFiltersOpen((o) => !o)}
            className="flex items-center gap-2 border border-bone/25 px-5 py-2.5 font-mono text-[11px] font-bold uppercase tracking-[0.2em] transition-colors hover:border-volt hover:text-volt lg:hidden"
          >
            Filters
            {activeFilterCount > 0 && (
              <span className="flex h-5 w-5 items-center justify-center bg-volt font-mono text-[10px] font-extrabold text-asphalt">
                {activeFilterCount}
              </span>
            )}
          </button>
          <p className="hidden font-mono text-[12px] text-bone/50 lg:block">
            SHOWING <b className="text-volt">{filtered.length}</b> / {PRODUCTS.length}
          </p>
          <label className="flex items-center gap-3">
            <span className="tag text-bone/55">Sort</span>
            <select
              value={sort}
              onChange={(e) => setParam("sort", e.target.value === "featured" ? null : e.target.value)}
              className="field w-auto !py-2.5 pr-9 text-[13px]"
            >
              {SORTS.map((s) => (
                <option key={s.key} value={s.key}>{s.label}</option>
              ))}
            </select>
          </label>
        </div>

        <div className="grid gap-10 lg:grid-cols-[250px_1fr]">
          <aside className="hidden lg:block">
            <div className="sticky top-28">{FiltersBody}</div>
          </aside>

          {filtersOpen && (
            <div className="border border-bone/15 bg-coal2 p-6 lg:hidden">{FiltersBody}</div>
          )}

          <div>
            {filtered.length === 0 ? (
              <div className="flex flex-col items-center justify-center border border-dashed border-bone/20 py-24 text-center">
                <span className="font-display text-6xl text-bone/20">∅</span>
                <p className="mt-5 font-display text-2xl uppercase">Nothing here — yet</p>
                <p className="mt-2 max-w-sm text-sm text-bone/50">
                  {wishOnly
                    ? "Your wishlist is empty. Tap the heart on any piece to save it here."
                    : "Try widening the price range or clearing a filter. New heat lands every Friday."}
                </p>
                <button onClick={clearAll} className="btn-volt mt-7">Clear filters</button>
              </div>
            ) : (
              <div className="grid grid-cols-2 gap-x-5 gap-y-10 md:grid-cols-3 xl:grid-cols-4">
                {filtered.map((p, i) => (
                  <Reveal key={p.slug} delay={(i % 4) * 60}>
                    <ProductCard product={p} index={i} />
                  </Reveal>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </main>
  );
}
