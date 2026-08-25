import { useEffect, useMemo, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { PRODUCTS, avgRating, getProduct } from "../data/products";
import { useStore } from "../context/StoreContext";
import ProductCard from "../components/ProductCard";
import Countdown from "../components/Countdown";
import { Accordion, Badge, Price, QtyStepper, Reveal, Stars } from "../components/ui";
import {
  IconArrowRight,
  IconBell,
  IconChevronLeft,
  IconChevronRight,
  IconHeart,
  IconLock,
  IconShield,
  IconTruck,
  IconWhatsApp,
  IconX,
} from "../components/icons";
import { CATEGORY_LABEL, cn, formatUGX, initials, waLink } from "../lib/utils";

export default function ProductPage() {
  const { slug } = useParams();
  const product = getProduct(slug ?? "");
  const navigate = useNavigate();
  const {
    addItem,
    showToast,
    localReviewsFor,
    addReview,
    wishlist,
    toggleWishlist,
    notifyList,
    toggleNotify,
  } = useStore();

  const [active, setActive] = useState(0);
  const [lightbox, setLightbox] = useState(false);
  const [size, setSize] = useState<string | null>(null);
  const [sizeError, setSizeError] = useState(false);
  const [qty, setQty] = useState(1);
  const [imgLoaded, setImgLoaded] = useState(false);

  const [rName, setRName] = useState("");
  const [rRating, setRRating] = useState(5);
  const [rTitle, setRTitle] = useState("");
  const [rText, setRText] = useState("");
  const [rError, setRError] = useState("");
  const [rThanks, setRThanks] = useState(false);

  useEffect(() => {
    setActive(0);
    setSize(null);
    setQty(1);
    setImgLoaded(false);
    setRThanks(false);
  }, [slug]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setLightbox(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  useEffect(() => {
    document.body.style.overflow = lightbox ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [lightbox]);

  const locals = product ? localReviewsFor(product.slug) : [];
  const allReviews = useMemo(() => [...locals, ...(product?.reviews ?? [])], [locals, product]);
  const rating = product ? avgRating(product, locals) : 0;

  const related = useMemo(() => {
    if (!product) return [];
    const same = PRODUCTS.filter((p) => p.category === product.category && p.slug !== product.slug);
    const rest = PRODUCTS.filter((p) => p.category !== product.category && p.slug !== product.slug);
    return [...same, ...rest].slice(0, 4);
  }, [product]);

  if (!product) {
    return (
      <main className="mx-auto flex min-h-[60vh] max-w-7xl flex-col items-center justify-center bg-asphalt px-4 py-24 text-center">
        <p className="font-display text-5xl uppercase">Sold out, gone, retired</p>
        <p className="mt-3 text-bone/50">This piece may have already found its forever wardrobe.</p>
        <Link to="/shop" className="btn-volt mt-8">Back to the shop</Link>
      </main>
    );
  }

  const images = product.images;
  const current = images[active] ?? images[0];
  const wished = wishlist.includes(product.slug);
  const notified = notifyList.includes(product.slug);

  const doAdd = (goCheckout: boolean) => {
    if (product.isDrop) return;
    if (!size && product.sizes[0] !== "One Size") {
      setSizeError(true);
      document.getElementById("size-picker")?.scrollIntoView({ behavior: "smooth", block: "center" });
      return;
    }
    const finalSize = size ?? "One Size";
    addItem(product.slug, finalSize, qty, !goCheckout);
    if (goCheckout) navigate("/checkout");
    else showToast(`Added to bag — ${product.name}`);
  };

  const submitReview = (e: React.FormEvent) => {
    e.preventDefault();
    if (rName.trim().length < 2) return setRError("Please add your name.");
    if (rTitle.trim().length < 3) return setRError("Add a short headline.");
    if (rText.trim().length < 10) return setRError("Tell us a little more — at least 10 characters.");
    addReview(product.slug, { author: rName.trim(), rating: rRating, title: rTitle.trim(), text: rText.trim() });
    setRName("");
    setRTitle("");
    setRText("");
    setRRating(5);
    setRError("");
    setRThanks(true);
    showToast("Review posted — webale nyo! 🙏");
  };

  const dist = [5, 4, 3, 2, 1].map((star) => {
    const n = allReviews.filter((r) => r.rating === star).length;
    return { star, n, pct: allReviews.length ? (n / allReviews.length) * 100 : 0 };
  });

  return (
    <main className="mx-auto max-w-7xl bg-asphalt px-4 pb-24">
      <nav className="flex flex-wrap items-center gap-2 py-6 font-mono text-[11px] uppercase tracking-[0.16em] text-bone/40">
        <Link to="/" className="hover:text-volt">Home</Link>
        <span>/</span>
        <Link to="/shop" className="hover:text-volt">Shop</Link>
        <span>/</span>
        <Link to={`/shop?cat=${product.category}`} className="hover:text-volt">
          {CATEGORY_LABEL[product.category]}
        </Link>
        <span>/</span>
        <span className="text-bone/80">{product.name}</span>
      </nav>

      <div className="grid gap-12 lg:grid-cols-2">
        {/* ============ GALLERY ============ */}
        <div className="lg:sticky lg:top-28 lg:self-start">
          <Reveal>
            <div
              className="group relative aspect-[4/5] cursor-zoom-in overflow-hidden border border-bone/10 bg-[#d8d8d2]"
              onClick={() => setLightbox(true)}
            >
              {!imgLoaded && <div className="absolute inset-0 shimmer-bg" />}
              <img
                key={current.src + String(!!current.zoom)}
                src={current.src}
                alt={product.name}
                onLoad={() => setImgLoaded(true)}
                className={cn("img-fade lightbox-img h-full w-full object-cover", current.zoom && "scale-[1.75]", imgLoaded && "loaded")}
              />
              <div className="absolute left-4 top-4 flex flex-col items-start gap-1.5">
                {product.isDrop && <Badge tone="danger"><span className="flex items-center gap-1"><IconLock className="w-3 h-3" /> Drops Fri 8PM</span></Badge>}
                {product.oneOfOne && <Badge tone="volt">1 of 1</Badge>}
                {product.isBestseller && <Badge tone="dark">Bestseller</Badge>}
                {product.isNew && <Badge tone="outline">New</Badge>}
              </div>
              {images.length > 1 && (
                <>
                  <button
                    aria-label="Previous image"
                    onClick={(e) => { e.stopPropagation(); setActive((a) => (a - 1 + images.length) % images.length); }}
                    className="absolute left-3 top-1/2 -translate-y-1/2 border border-bone/20 bg-asphalt/80 p-2.5 text-bone opacity-0 backdrop-blur transition-all hover:text-volt group-hover:opacity-100"
                  >
                    <IconChevronLeft className="h-4 w-4" />
                  </button>
                  <button
                    aria-label="Next image"
                    onClick={(e) => { e.stopPropagation(); setActive((a) => (a + 1) % images.length); }}
                    className="absolute right-3 top-1/2 -translate-y-1/2 border border-bone/20 bg-asphalt/80 p-2.5 text-bone opacity-0 backdrop-blur transition-all hover:text-volt group-hover:opacity-100"
                  >
                    <IconChevronRight className="h-4 w-4" />
                  </button>
                </>
              )}
              {current.zoom && (
                <span className="absolute bottom-3 left-1/2 -translate-x-1/2 bg-asphalt/85 px-3 py-1 font-mono text-[9px] font-bold uppercase tracking-[0.2em] text-volt">
                  Detail view
                </span>
              )}
            </div>
          </Reveal>
          <div className="mt-4 flex gap-3">
            {images.map((img, i) => (
              <button
                key={i}
                onClick={() => setActive(i)}
                aria-label={`View image ${i + 1}`}
                className={cn(
                  "relative h-20 w-16 overflow-hidden border bg-[#d8d8d2] transition-all",
                  active === i ? "border-volt" : "border-bone/10 opacity-60 hover:opacity-100"
                )}
              >
                <img src={img.src} alt="" className={cn("h-full w-full object-cover", img.zoom && "scale-[1.75]")} />
                {img.zoom && (
                  <span className="absolute inset-x-0 bottom-0 bg-asphalt/80 py-0.5 text-center font-mono text-[8px] font-bold uppercase tracking-widest text-volt">
                    Zoom
                  </span>
                )}
              </button>
            ))}
          </div>
        </div>

        {/* ============ INFO ============ */}
        <div>
          <Reveal>
            <p className="tag text-volt">{CATEGORY_LABEL[product.category]}</p>
            <h1 className="mt-2 font-display text-4xl uppercase leading-[0.95] sm:text-5xl">{product.name}</h1>
            <p className="mt-2 font-mono text-[12px] text-bone/50">{product.line}</p>

            <div className="mt-4 flex items-center gap-3">
              {allReviews.length > 0 ? (
                <>
                  <Stars value={rating} />
                  <a href="#reviews" className="font-mono text-[12px] font-bold text-bone/55 underline-offset-4 hover:text-volt hover:underline">
                    {rating.toFixed(1)} · {allReviews.length} REVIEW{allReviews.length === 1 ? "" : "S"}
                  </a>
                </>
              ) : (
                <span className="font-mono text-[11px] font-bold uppercase tracking-widest text-danger animate-flash">
                  ● Unreleased — no reviews yet
                </span>
              )}
            </div>

            <div className="mt-5">
              <Price big price={product.price} compareAt={product.compareAt} />
              <p className="mt-1 font-mono text-[11px] text-bone/40">MTN MOMO · AIRTEL MONEY · CASH ON DELIVERY</p>
            </div>

            <p className="mt-6 text-[14.5px] leading-relaxed text-bone/70">{product.short} {product.description}</p>

            {product.oneOfOne && (
              <div className="mt-6 border border-volt/40 bg-volt/10 px-5 py-4 text-[13px] leading-relaxed text-bone/80">
                <b className="text-volt">1-OF-1 NOTICE —</b> this exact piece exists once. When it
                sells, the design retires forever. Signed & numbered by the artist.
              </div>
            )}

            {product.isDrop ? (
              /* ---------- DROP-LOCKED BUY BOX ---------- */
              <div className="mt-8 border border-danger/50 bg-danger/10 p-6 sm:p-7">
                <div className="flex items-center gap-3">
                  <span className="flex h-10 w-10 items-center justify-center bg-danger text-bone">
                    <IconLock className="h-5 w-5" />
                  </span>
                  <div>
                    <p className="font-display text-xl uppercase">Locked until the drop</p>
                    <p className="font-mono text-[11px] text-bone/55">FRIDAY · 8:00PM EAT · ONLINE + WHATSAPP</p>
                  </div>
                </div>
                <div className="mt-5">
                  <Countdown compact />
                </div>
                <div className="mt-6 grid gap-3 sm:grid-cols-2">
                  <button
                    onClick={() => {
                      const added = toggleNotify(product.slug);
                      showToast(added ? "🔔 You're on the drop list!" : "Removed from drop list");
                    }}
                    className={cn("btn-volt w-full", notified && "!bg-bone")}
                  >
                    <IconBell className="h-4 w-4" /> {notified ? "You're notified ✓" : "Notify me at 8PM"}
                  </button>
                  <a
                    className="btn-ghost w-full"
                    target="_blank"
                    rel="noreferrer"
                    href={waLink(`Hello Gayita Collections! Please reserve the "${product.name}" (${formatUGX(product.price)}, my size ___) at Friday's drop 🙏`)}
                  >
                    <IconWhatsApp className="h-4 w-4" /> Reserve via WhatsApp
                  </a>
                </div>
                <p className="mt-4 font-mono text-[10.5px] uppercase tracking-wider text-bone/40">
                  Limited pairs — notify-list members hear 15 minutes early
                </p>
              </div>
            ) : (
              <>
                {/* ---------- SIZE ---------- */}
                <div id="size-picker" className="mt-8 scroll-mt-32">
                  <div className="flex items-center justify-between">
                    <p className="tag text-bone/70">{product.sizes[0] === "One Size" ? "Size" : "Select size"}</p>
                    {product.stock <= 3 && (
                      <span className="font-mono text-[10px] font-bold uppercase tracking-widest text-danger">
                        Only {product.stock} left
                      </span>
                    )}
                  </div>
                  {product.sizes[0] === "One Size" ? (
                    <p className="mt-3 inline-block border border-volt bg-volt px-5 py-2.5 font-mono text-[13px] font-bold text-asphalt">
                      One Size
                    </p>
                  ) : (
                    <div className="mt-3 flex flex-wrap gap-2.5">
                      {product.sizes.map((s) => (
                        <button
                          key={s}
                          type="button"
                          onClick={() => { setSize(s); setSizeError(false); }}
                          className={cn(
                            "min-w-[52px] border px-4 py-3 font-mono text-[12px] font-bold transition-all",
                            size === s ? "border-volt bg-volt text-asphalt" : "border-bone/25 text-bone/70 hover:border-volt hover:text-volt"
                          )}
                        >
                          {s}
                        </button>
                      ))}
                    </div>
                  )}
                  {sizeError && (
                    <p className="mt-2 text-[12px] font-semibold text-danger">
                      Pick a size first — one-offs can't be re-ordered, so fit matters.
                    </p>
                  )}
                </div>

                {/* ---------- ACTIONS ---------- */}
                <div className="mt-8 flex flex-wrap items-center gap-4">
                  <QtyStepper qty={qty} onChange={(q) => setQty(Math.max(1, Math.min(10, q)))} />
                  <button onClick={() => doAdd(false)} className="btn-volt min-w-[190px] flex-1">
                    Add to Bag · {formatUGX(product.price * qty)}
                  </button>
                  <button
                    onClick={() => {
                      const added = toggleWishlist(product.slug);
                      showToast(added ? "Saved to wishlist ❤" : "Removed from wishlist");
                    }}
                    aria-label="Toggle wishlist"
                    className={cn(
                      "flex h-12 w-12 items-center justify-center border transition-all",
                      wished ? "border-danger bg-danger text-bone" : "border-bone/25 text-bone/70 hover:border-danger hover:text-danger"
                    )}
                  >
                    <IconHeart className="h-5 w-5" filled={wished} />
                  </button>
                </div>
                <div className="mt-3.5 grid grid-cols-2 gap-3.5">
                  <button onClick={() => doAdd(true)} className="btn-bone">
                    Buy Now <IconArrowRight className="h-4 w-4" />
                  </button>
                  <a
                    className="btn-ghost"
                    target="_blank"
                    rel="noreferrer"
                    href={waLink(`Hello Gayita Collections! Is the "${product.name}" (${formatUGX(product.price)}) still available?`)}
                  >
                    <IconWhatsApp className="h-4 w-4" /> Ask First
                  </a>
                </div>
              </>
            )}

            <div className="mt-8 grid grid-cols-2 gap-4 border-y border-bone/10 py-5 text-[12px] text-bone/55">
              <span className="flex items-center gap-2.5"><IconTruck className="h-5 w-5 text-volt" /> Same/next-day Kampala</span>
              <span className="flex items-center gap-2.5"><IconShield className="h-5 w-5 text-volt" /> Quality-checked dispatch</span>
            </div>

            <div className="mt-4">
              <Accordion title={product.category === "vintage" ? "The find" : product.category === "kicks" ? "Authentication" : "The artwork"} defaultOpen>
                {product.story}
              </Accordion>
              <Accordion title="Fabric & care">
                <p><b className="text-bone/85">Fabric:</b> {product.fabric}</p>
                <p className="mt-2"><b className="text-bone/85">Care:</b> {product.care}</p>
              </Accordion>
              <Accordion title="Delivery & returns">
                <p>
                  <b className="text-bone/85">Kampala:</b> same/next-day — UGX 5,000 (free over UGX 200,000).{" "}
                  <b className="text-bone/85">Upcountry:</b> 2–4 days — UGX 12,000.{" "}
                  <b className="text-bone/85">Pickup:</b> free at the Najjera studio.
                </p>
                <p className="mt-2">
                  Vintage & kick drops are one-offs: exchange within 48 hours if not as described.
                  Custom painted pieces are made for you — non-returnable except defects.
                </p>
              </Accordion>
            </div>
          </Reveal>
        </div>
      </div>

      {/* ============ REVIEWS ============ */}
      <section id="reviews" className="mt-24 scroll-mt-28 border-t border-bone/10 pt-14">
        <div className="grid gap-12 lg:grid-cols-[320px_1fr]">
          <Reveal>
            <h2 className="font-display text-3xl uppercase">Reviews</h2>
            {allReviews.length > 0 ? (
              <>
                <div className="mt-5 flex items-end gap-4">
                  <span className="font-display text-6xl leading-none text-volt">{rating.toFixed(1)}</span>
                  <div className="pb-1">
                    <Stars value={rating} />
                    <p className="mt-1 font-mono text-[11px] text-bone/45">{allReviews.length} REVIEWS</p>
                  </div>
                </div>
                <div className="mt-6 space-y-2">
                  {dist.map((d) => (
                    <div key={d.star} className="flex items-center gap-3 font-mono text-[11px]">
                      <span className="w-6 font-bold text-bone/55">{d.star}★</span>
                      <div className="h-1.5 flex-1 bg-bone/10">
                        <div className="h-full bg-volt transition-all duration-700" style={{ width: `${d.pct}%` }} />
                      </div>
                      <span className="w-5 text-right text-bone/35">{d.n}</span>
                    </div>
                  ))}
                </div>
              </>
            ) : (
              <p className="mt-5 border border-dashed border-bone/20 p-5 text-[13px] leading-relaxed text-bone/55">
                {product.isDrop
                  ? "This pair drops Friday — reviews land right after collectors unbox them."
                  : "No reviews yet. Be the first to put the culture on notice."}
              </p>
            )}

            <div className="mt-8 border border-bone/10 bg-coal2 p-6">
              <h3 className="font-display text-xl uppercase">Own this piece?</h3>
              <p className="mt-1 text-[12.5px] text-bone/50">Drop a review — help the next collector.</p>
              {rThanks ? (
                <p className="mt-4 border border-volt/50 bg-volt/10 px-4 py-3 text-[13px] font-bold text-volt">
                  🙏 Webale nyo! Your review is live.
                </p>
              ) : (
                <form onSubmit={submitReview} className="mt-4 space-y-3">
                  <div>
                    <span className="field-label">Your rating</span>
                    <Stars interactive value={rRating} onRate={setRRating} starClass="w-6 h-6" />
                  </div>
                  <input className="field" placeholder="Your name" value={rName} onChange={(e) => setRName(e.target.value)} />
                  <input className="field" placeholder="Headline — e.g. “Better than the photos”" value={rTitle} onChange={(e) => setRTitle(e.target.value)} />
                  <textarea className="field min-h-[90px] resize-y" placeholder="Fit? Quality? Delivery?" value={rText} onChange={(e) => setRText(e.target.value)} />
                  {rError && <p className="text-[12px] font-semibold text-danger">{rError}</p>}
                  <button type="submit" className="btn-volt w-full">Post review</button>
                </form>
              )}
            </div>
          </Reveal>

          <div className="space-y-6">
            {allReviews.map((r, i) => (
              <Reveal key={r.id} delay={i * 60}>
                <article className="border-b border-bone/10 pb-7">
                  <div className="flex items-center gap-4">
                    <span className="flex h-11 w-11 items-center justify-center border border-volt/40 bg-smoke2 font-display text-[15px] text-volt">
                      {initials(r.author)}
                    </span>
                    <div className="flex-1">
                      <p className="flex flex-wrap items-center gap-2 text-[14px] font-bold">
                        {r.author}
                        {r.handle && <span className="font-mono text-[11px] font-normal text-volt">{r.handle}</span>}
                        {r.verified && <span className="tag bg-volt/15 px-1.5 py-0.5 text-volt">✓ Verified</span>}
                        {r.local && <span className="tag bg-danger/20 px-1.5 py-0.5 text-danger">You</span>}
                      </p>
                      <p className="mt-0.5 font-mono text-[10.5px] text-bone/40">{r.date}</p>
                    </div>
                    <Stars value={r.rating} starClass="w-3.5 h-3.5" />
                  </div>
                  <h4 className="mt-4 font-display text-[18px] uppercase tracking-wide">{r.title}</h4>
                  <p className="mt-1.5 text-[14px] leading-relaxed text-bone/65">{r.text}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ============ RELATED ============ */}
      <section className="mt-24">
        <div className="flex items-end justify-between">
          <h2 className="font-display text-3xl uppercase sm:text-4xl">Complete the fit</h2>
          <Link to="/shop" className="group hidden items-center gap-2 font-mono text-[11px] font-bold uppercase tracking-[0.2em] text-bone/55 hover:text-volt sm:flex">
            Shop all <IconArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
        <div className="mt-10 grid grid-cols-2 gap-x-5 gap-y-10 lg:grid-cols-4">
          {related.map((p, i) => (
            <Reveal key={p.slug} delay={i * 70}>
              <ProductCard product={p} index={i} />
            </Reveal>
          ))}
        </div>
      </section>

      {/* ============ LIGHTBOX ============ */}
      {lightbox && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center bg-asphalt/95 p-4 backdrop-blur" onClick={() => setLightbox(false)}>
          <button aria-label="Close" className="absolute right-5 top-5 p-2 text-bone/70 hover:text-volt">
            <IconX className="h-7 w-7" />
          </button>
          <img
            src={current.src}
            alt={product.name}
            onClick={(e) => e.stopPropagation()}
            className={cn("lightbox-img max-h-[88vh] max-w-full object-contain shadow-2xl", current.zoom && "scale-[1.15]")}
          />
          {images.length > 1 && (
            <div className="absolute bottom-6 flex gap-2">
              {images.map((_, i) => (
                <button
                  key={i}
                  aria-label={`Image ${i + 1}`}
                  onClick={(e) => { e.stopPropagation(); setActive(i); }}
                  className={cn("h-1.5 transition-all", active === i ? "w-8 bg-volt" : "w-3 bg-bone/40")}
                />
              ))}
            </div>
          )}
        </div>
      )}
    </main>
  );
}
