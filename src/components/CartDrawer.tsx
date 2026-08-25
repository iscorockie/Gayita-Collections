import { Link, useNavigate } from "react-router-dom";
import { getProduct } from "../data/products";
import { useStore } from "../context/StoreContext";
import { QtyStepper } from "./ui";
import { IconBag, IconTruck, IconX } from "./icons";
import { FREE_DELIVERY_THRESHOLD, cn, formatUGX } from "../lib/utils";

export default function CartDrawer() {
  const { cart, drawerOpen, closeDrawer, setQty, removeItem, subtotal } = useStore();
  const navigate = useNavigate();

  const remaining = Math.max(0, FREE_DELIVERY_THRESHOLD - subtotal);
  const progress = Math.min(100, (subtotal / FREE_DELIVERY_THRESHOLD) * 100);

  return (
    <div className={cn("fixed inset-0 z-50", drawerOpen ? "" : "pointer-events-none")} aria-hidden={!drawerOpen}>
      <div
        className={cn("drawer-overlay absolute inset-0 bg-asphalt/70 backdrop-blur-[2px]", drawerOpen ? "opacity-100" : "opacity-0")}
        onClick={closeDrawer}
      />
      <aside
        className={cn(
          "drawer-panel absolute right-0 top-0 flex h-full w-full max-w-md flex-col border-l border-bone/10 bg-coal2 shadow-2xl",
          drawerOpen ? "translate-x-0" : "translate-x-full"
        )}
        role="dialog"
        aria-label="Shopping bag"
      >
        <div className="h-[3px] hazard" />
        <div className="flex items-center justify-between border-b border-bone/10 px-6 py-5">
          <h2 className="font-display text-2xl uppercase">
            Your Bag{" "}
            <span className="font-mono text-sm text-volt">({cart.reduce((s, i) => s + i.qty, 0)})</span>
          </h2>
          <button onClick={closeDrawer} aria-label="Close bag" className="p-2 text-bone/60 hover:text-bone">
            <IconX />
          </button>
        </div>

        {cart.length > 0 && (
          <div className="border-b border-bone/10 bg-smoke2 px-6 py-3.5">
            <p className="flex items-center gap-2 text-[12px] font-semibold text-bone/70">
              <IconTruck className="h-4 w-4 text-volt" />
              {remaining > 0 ? (
                <>Add <b className="text-volt">{formatUGX(remaining)}</b> more for free Kampala delivery</>
              ) : (
                <span className="text-volt">⚡ FREE Kampala delivery unlocked!</span>
              )}
            </p>
            <div className="mt-2 h-1.5 overflow-hidden bg-bone/10">
              <div className="h-full bg-volt transition-all duration-700" style={{ width: `${progress}%` }} />
            </div>
          </div>
        )}

        <div className="flex-1 overflow-y-auto px-6">
          {cart.length === 0 ? (
            <div className="flex h-full flex-col items-center justify-center text-center">
              <span className="flex h-20 w-20 items-center justify-center border border-bone/10 bg-smoke2">
                <IconBag className="h-8 w-8 text-volt" />
              </span>
              <p className="mt-6 font-display text-2xl uppercase">Bag's empty</p>
              <p className="mt-2 max-w-[240px] text-sm text-bone/50">
                Fill it with vintage heat and wearable art from Kampala.
              </p>
              <button onClick={() => { closeDrawer(); navigate("/shop"); }} className="btn-volt mt-7">
                Start Shopping
              </button>
            </div>
          ) : (
            <ul className="divide-y divide-bone/10">
              {cart.map((item) => {
                const p = getProduct(item.slug);
                if (!p) return null;
                return (
                  <li key={`${item.slug}-${item.size}`} className="flex gap-4 py-5">
                    <Link to={`/product/${p.slug}`} onClick={closeDrawer} className="block h-24 w-[76px] shrink-0 overflow-hidden bg-[#d8d8d2]">
                      <img src={p.images[0].src} alt={p.name} className="h-full w-full object-cover" />
                    </Link>
                    <div className="flex flex-1 flex-col">
                      <div className="flex items-start justify-between gap-2">
                        <div>
                          <Link to={`/product/${p.slug}`} onClick={closeDrawer} className="font-display text-[16px] uppercase leading-tight tracking-wide hover:text-volt">
                            {p.name}
                          </Link>
                          <p className="mt-0.5 font-mono text-[11px] text-bone/45">
                            SIZE: <b className="text-bone/80">{item.size}</b>
                          </p>
                        </div>
                        <button
                          onClick={() => removeItem(item.slug, item.size)}
                          aria-label={`Remove ${p.name}`}
                          className="p-1 text-bone/35 transition-colors hover:text-danger"
                        >
                          <IconX className="h-4 w-4" />
                        </button>
                      </div>
                      <div className="mt-auto flex items-center justify-between pt-2">
                        <QtyStepper small qty={item.qty} onChange={(q) => setQty(item.slug, item.size, Math.min(q, 10))} />
                        <p className="font-mono text-[13px] font-bold text-volt">{formatUGX(p.price * item.qty)}</p>
                      </div>
                    </div>
                  </li>
                );
              })}
            </ul>
          )}
        </div>

        {cart.length > 0 && (
          <div className="border-t border-bone/10 bg-coal2 px-6 py-5">
            <div className="flex items-center justify-between">
              <span className="tag text-bone/55">Subtotal</span>
              <span className="font-display text-2xl">{formatUGX(subtotal)}</span>
            </div>
            <p className="mt-1 font-mono text-[10.5px] uppercase tracking-wider text-bone/40">
              MoMo · Airtel · Cash on delivery — chosen at checkout
            </p>
            <button onClick={() => { closeDrawer(); navigate("/checkout"); }} className="btn-volt mt-4 w-full">
              Checkout →
            </button>
            <button
              onClick={() => { closeDrawer(); navigate("/shop"); }}
              className="mt-2.5 w-full py-2 text-center font-mono text-[11px] font-bold uppercase tracking-[0.2em] text-bone/50 transition-colors hover:text-volt"
            >
              Continue shopping
            </button>
          </div>
        )}
      </aside>
    </div>
  );
}
