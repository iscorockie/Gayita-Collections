import { useState } from "react";
import { Link } from "react-router-dom";
import type { Product } from "../lib/types";
import { avgRating, reviewCount } from "../data/products";
import { useStore } from "../context/StoreContext";
import { Badge, Price, Stars } from "./ui";
import { CATEGORY_LABEL, cn } from "../lib/utils";
import { IconBell, IconHeart, IconLock } from "./icons";

export default function ProductCard({ product, index = 0 }: { product: Product; index?: number }) {
  const {
    addItem,
    showToast,
    localReviewsFor,
    wishlist,
    toggleWishlist,
    notifyList,
    toggleNotify,
  } = useStore();
  const [loaded, setLoaded] = useState(false);
  const locals = localReviewsFor(product.slug);
  const rating = avgRating(product, locals);
  const count = reviewCount(product, locals);
  const hoverImg = product.images.find((i, idx) => idx > 0 && !i.zoom)?.src;
  const wished = wishlist.includes(product.slug);
  const notified = notifyList.includes(product.slug);
  const sale = product.compareAt && product.compareAt > product.price;

  const quickAdd = (e: React.MouseEvent) => {
    e.preventDefault();
    if (product.isDrop) return;
    const size = product.sizes.includes("M") ? "M" : product.sizes[0];
    addItem(product.slug, size, 1, true);
    showToast(`Added to bag — ${product.name}`);
  };

  const onWish = (e: React.MouseEvent) => {
    e.preventDefault();
    const added = toggleWishlist(product.slug);
    showToast(added ? "Saved to wishlist ❤" : "Removed from wishlist");
  };

  const onNotify = (e: React.MouseEvent) => {
    e.preventDefault();
    const added = toggleNotify(product.slug);
    showToast(added ? "🔔 You're on the drop list!" : "Removed from drop list");
  };

  return (
    <div className="group" style={{ animationDelay: `${(index % 8) * 55}ms` }}>
      <div className="relative overflow-hidden bg-[#d8d8d2]">
        <Link to={`/product/${product.slug}`} className="block" aria-label={product.name}>
          <div className="relative aspect-[4/5]">
            {!loaded && <div className="absolute inset-0 shimmer-bg" />}
            <img
              src={product.images[0].src}
              alt={product.name}
              loading="lazy"
              onLoad={() => setLoaded(true)}
              className={cn(
                "img-fade h-full w-full object-cover transition-transform duration-[900ms] ease-out group-hover:scale-[1.06]",
                loaded && "loaded"
              )}
            />
            {hoverImg && (
              <img
                src={hoverImg}
                alt=""
                loading="lazy"
                aria-hidden
                className="absolute inset-0 h-full w-full object-cover opacity-0 transition-opacity duration-700 group-hover:opacity-100"
              />
            )}
            {product.isDrop && (
              <div className="absolute inset-0 bg-asphalt/25" />
            )}
          </div>
        </Link>

        {/* badges */}
        <div className="absolute left-3 top-3 flex flex-col items-start gap-1.5">
          {product.isDrop && <Badge tone="danger"><span className="flex items-center gap-1"><IconLock className="w-3 h-3" /> DROPS FRI 8PM</span></Badge>}
          {product.oneOfOne && !product.isDrop && <Badge tone="volt">1 of 1</Badge>}
          {product.isBestseller && <Badge tone="dark">Bestseller</Badge>}
          {product.isNew && !product.isDrop && <Badge tone="outline">New</Badge>}
          {sale && <Badge tone="danger">Sale</Badge>}
        </div>

        {/* wishlist */}
        <button
          onClick={onWish}
          aria-label={wished ? "Remove from wishlist" : "Add to wishlist"}
          className={cn(
            "absolute right-3 top-3 flex h-9 w-9 items-center justify-center border backdrop-blur transition-all",
            wished
              ? "border-danger bg-danger text-bone"
              : "border-asphalt/15 bg-bone/80 text-asphalt hover:bg-danger hover:text-bone hover:border-danger"
          )}
        >
          <IconHeart className="w-4 h-4" filled={wished} />
        </button>

        {/* stock warning */}
        {!product.isDrop && product.stock <= 3 && (
          <span className="absolute right-3 bottom-14 bg-danger px-2 py-1 font-mono text-[9px] font-extrabold uppercase tracking-widest text-bone">
            Only {product.stock} left
          </span>
        )}

        {/* bottom action */}
        <div className="absolute inset-x-0 bottom-0 translate-y-full transition-transform duration-300 ease-out group-hover:translate-y-0">
          {product.isDrop ? (
            <button
              onClick={onNotify}
              className={cn(
                "flex w-full items-center justify-center gap-2 py-3 text-[11px] font-extrabold uppercase tracking-[0.2em] transition-colors",
                notified ? "bg-volt text-asphalt" : "bg-danger text-bone hover:bg-volt hover:text-asphalt"
              )}
            >
              <IconBell className="w-3.5 h-3.5" /> {notified ? "You're on the list" : "Notify me"}
            </button>
          ) : (
            <button
              onClick={quickAdd}
              className="w-full bg-asphalt/95 py-3 text-[11px] font-extrabold uppercase tracking-[0.2em] text-bone backdrop-blur transition-colors hover:bg-volt hover:text-asphalt"
            >
              + Quick Add{product.sizes[0] === "One Size" ? "" : ""}
            </button>
          )}
        </div>
      </div>

      {/* meta */}
      <div className="pt-3.5">
        <div className="flex items-center justify-between gap-2">
          <p className="tag text-volt/90">{CATEGORY_LABEL[product.category]}</p>
          {count > 0 ? (
            <span className="flex items-center gap-1 text-[11px] text-bone/45">
              <Stars value={rating} starClass="w-3 h-3" /> {rating.toFixed(1)} ({count})
            </span>
          ) : (
            <span className="font-mono text-[10px] uppercase tracking-widest text-danger animate-flash">Unreleased</span>
          )}
        </div>
        <Link to={`/product/${product.slug}`}>
          <h3 className="mt-1.5 font-display text-[17px] uppercase leading-tight tracking-wide text-bone transition-colors group-hover:text-volt">
            {product.name}
          </h3>
        </Link>
        <p className="mt-1 text-[12px] text-bone/45">{product.line}</p>
        <div className="mt-2 flex items-center justify-between">
          <Price price={product.price} compareAt={product.compareAt} />
          <span className="flex gap-1.5">
            {product.colors.map((c) => (
              <span
                key={c.hex + c.name}
                title={c.name}
                className="h-3 w-3 rounded-full border border-bone/25"
                style={{ backgroundColor: c.hex }}
              />
            ))}
          </span>
        </div>
      </div>
    </div>
  );
}
