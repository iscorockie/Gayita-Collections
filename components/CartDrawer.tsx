"use client";
import { useCart } from "@/lib/cart";
import { X, Minus, Plus, ArrowRight } from "lucide-react";
import { formatUGX } from "@/lib/products";
import Link from "next/link";
import { useState } from "react";
import { img } from "@/lib/config";

export default function CartDrawer() {
  const { items, isOpen, setIsOpen, removeItem, updateQty, total, totalUSD, count } = useCart();
  const [checkoutStep, setCheckoutStep] = useState<"cart" | "checkout" | "success">("cart");
  const [form, setForm] = useState({ name: "", phone: "", location: "", method: "MTN MoMo" });

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex justify-end">
      <div className="absolute inset-0 bg-coal/40 backdrop-blur-sm" onClick={() => setIsOpen(false)} />
      <div className="relative w-full max-w-[480px] bg-paper h-full flex flex-col shadow-2xl animate-fadeUp">
        {/* Header */}
        <div className="p-7 border-b border-sand flex items-center justify-between">
          <div>
            <h2 className="font-display text-[28px] leading-none">{checkoutStep === "cart" ? "Cart" : checkoutStep === "checkout" ? "Checkout" : "Order Placed"}</h2>
            <p className="font-mono text-[11px] tracking-widest uppercase opacity-60 mt-1">{count} {count === 1 ? "item" : "items"} • {formatUGX(total)} • ${totalUSD}</p>
          </div>
          <button onClick={() => setIsOpen(false)} className="w-10 h-10 rounded-full border border-sand flex items-center justify-center hover:bg-coal hover:text-white transition">
            <X className="w-4 h-4" />
          </button>
        </div>

        {checkoutStep === "cart" && (
          <>
            <div className="flex-1 overflow-y-auto p-6 space-y-6">
              {items.length === 0 ? (
                <div className="py-24 text-center">
                  <div className="w-20 h-20 mx-auto rounded-full bg-cream flex items-center justify-center mb-4">
                    <span className="font-display text-2xl">∅</span>
                  </div>
                  <p className="font-display text-xl">Your cart is empty</p>
                  <p className="text-sm opacity-60 mt-2 max-w-[28ch] mx-auto">Add some art to wear — our crane tees and artisan jackets are waiting.</p>
                  <Link href="/shop" onClick={() => setIsOpen(false)} className="inline-block mt-6 px-6 py-3 bg-coal text-white rounded-full text-[12px] tracking-widest uppercase">Shop Collection</Link>
                </div>
              ) : (
                items.map((it, idx) => (
                  <div key={idx} className="flex gap-4">
                    <div className="w-[96px] h-[120px] bg-cream rounded-xl overflow-hidden flex-shrink-0">
                      <img src={img(it.product.images[0])} alt={it.product.name} className="w-full h-full object-cover" />
                    </div>
                    <div className="flex-1">
                      <div className="flex justify-between gap-2">
                        <h4 className="font-medium text-[14px] leading-tight">{it.product.name}</h4>
                        <button onClick={() => removeItem(idx)} className="text-[11px] opacity-50 hover:opacity-100 uppercase tracking-widest">Remove</button>
                      </div>
                      <p className="font-mono text-[11px] opacity-60 mt-1">{it.color} • {it.size}</p>
                      <div className="flex items-center justify-between mt-3">
                        <div className="flex items-center gap-2 border border-sand rounded-full px-2 py-1">
                          <button onClick={() => updateQty(idx, it.quantity - 1)} className="w-6 h-6 rounded-full hover:bg-cream flex items-center justify-center"><Minus className="w-3 h-3" /></button>
                          <span className="text-[13px] w-6 text-center">{it.quantity}</span>
                          <button onClick={() => updateQty(idx, it.quantity + 1)} className="w-6 h-6 rounded-full hover:bg-cream flex items-center justify-center"><Plus className="w-3 h-3" /></button>
                        </div>
                        <span className="font-medium text-[14px]">{formatUGX(it.product.price * it.quantity)}</span>
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>

            {items.length > 0 && (
              <div className="p-7 border-t border-sand bg-cream/50 space-y-4">
                <div className="flex justify-between text-[13px] font-mono uppercase tracking-widest opacity-60">
                  <span>Subtotal</span><span>{formatUGX(total)}</span>
                </div>
                <div className="flex justify-between text-[13px] font-mono uppercase tracking-widest opacity-60">
                  <span>Delivery (Kampala)</span><span>15,000 UGX</span>
                </div>
                <div className="flex justify-between font-display text-[22px]">
                  <span>Total</span><span>{formatUGX(total + 15000)}</span>
                </div>
                <button onClick={() => setCheckoutStep("checkout")} className="w-full py-4 bg-coal text-white rounded-full flex items-center justify-center gap-2 text-[13px] tracking-[0.18em] uppercase font-medium hover:bg-gold transition">
                  Checkout <ArrowRight className="w-4 h-4" />
                </button>
                <p className="text-[11px] text-center opacity-60 font-mono">Secure • MTN MoMo • Airtel Money • Cash on Delivery</p>
              </div>
            )}
          </>
        )}

        {checkoutStep === "checkout" && (
          <div className="flex-1 overflow-y-auto p-7 space-y-6">
            <div className="space-y-4">
              <div>
                <label className="font-mono text-[11px] uppercase tracking-widest opacity-70">Full Name</label>
                <input value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} placeholder="Your name" className="mt-2 w-full px-4 py-3 rounded-xl border border-sand bg-white focus:outline-none focus:border-gold" />
              </div>
              <div>
                <label className="font-mono text-[11px] uppercase tracking-widest opacity-70">Phone / WhatsApp</label>
                <input value={form.phone} onChange={e => setForm({ ...form, phone: e.target.value })} placeholder="07XX XXX XXX" className="mt-2 w-full px-4 py-3 rounded-xl border border-sand bg-white focus:outline-none focus:border-gold" />
              </div>
              <div>
                <label className="font-mono text-[11px] uppercase tracking-widest opacity-70">Delivery Location</label>
                <input value={form.location} onChange={e => setForm({ ...form, location: e.target.value })} placeholder="Kabalagala, Kansanga, etc." className="mt-2 w-full px-4 py-3 rounded-xl border border-sand bg-white focus:outline-none focus:border-gold" />
              </div>
              <div>
                <label className="font-mono text-[11px] uppercase tracking-widest opacity-70">Payment Method</label>
                <div className="mt-2 grid grid-cols-3 gap-2">
                  {["MTN MoMo", "Airtel Money", "Cash on Delivery"].map(m => (
                    <button key={m} onClick={() => setForm({ ...form, method: m })} className={`px-3 py-3 rounded-xl border text-[12px] font-medium ${form.method === m ? "bg-coal text-white border-coal" : "bg-white border-sand hover:border-gold"}`}>{m}</button>
                  ))}
                </div>
              </div>
            </div>

            <div className="p-4 bg-white rounded-xl border border-sand space-y-2">
              <div className="flex justify-between text-sm"><span>Subtotal ({count})</span><span>{formatUGX(total)}</span></div>
              <div className="flex justify-between text-sm"><span>Delivery</span><span>15,000 UGX</span></div>
              <div className="flex justify-between font-bold text-[16px] pt-2 border-t border-sand"><span>Total</span><span>{formatUGX(total + 15000)}</span></div>
            </div>

            <div className="flex gap-3">
              <button onClick={() => setCheckoutStep("cart")} className="flex-1 py-3.5 border border-sand rounded-full text-[12px] uppercase tracking-widest">Back to Cart</button>
              <button onClick={() => setCheckoutStep("success")} className="flex-[2] py-3.5 bg-gold text-white rounded-full text-[12px] uppercase tracking-widest font-medium hover:bg-coal transition">Place Order — {formatUGX(total + 15000)}</button>
            </div>

            <p className="text-[11px] opacity-60 text-center font-mono">Orders confirmed via WhatsApp on +256 763 813 315</p>
          </div>
        )}

        {checkoutStep === "success" && (
          <div className="flex-1 p-10 flex flex-col items-center justify-center text-center">
            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center text-3xl mb-6">✓</div>
            <h3 className="font-display text-[32px] leading-none">Order received!</h3>
            <p className="mt-4 text-[14px] opacity-70 max-w-[32ch]">Thank you {form.name || "fam"} — we’ve got your order for {count} items. We’ll WhatsApp you on {form.phone || "your number"} to confirm delivery in Kampala.</p>
            <div className="mt-8 p-4 bg-cream rounded-xl w-full text-left">
              <p className="font-mono text-[11px] uppercase tracking-widest opacity-60">Order Summary</p>
              <p className="mt-2 font-medium">{formatUGX(total + 15000)} • {form.method}</p>
              <p className="text-[13px] opacity-70 mt-1">{form.location}</p>
            </div>
            <button onClick={() => { setCheckoutStep("cart"); setIsOpen(false); }} className="mt-8 w-full py-3.5 bg-coal text-white rounded-full text-[12px] uppercase tracking-widest">Continue Shopping</button>
            <p className="mt-4 text-[11px] font-mono opacity-50">Need help? Call 0763813315 / 077548383 / +256 707 548383</p>
          </div>
        )}
      </div>
    </div>
  );
}
