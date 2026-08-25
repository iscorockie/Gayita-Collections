"use client";

/* The supplied local JPGs are intentionally used as art-directed media; their crop is part of the storefront design. */
/* eslint-disable @next/next/no-img-element */

import Link from "next/link";
import { ArrowRight, ChevronDown, Minus, Plus, X } from "lucide-react";
import { useEffect } from "react";
import { useCart } from "@/lib/cart";
import { formatUGX, getCartWhatsAppMessage } from "@/lib/products";
import { img } from "@/lib/config";

const whatsappNumbers = ["256763813315", "256707548383"];

export default function CartDrawer() {
  const { items, isOpen, setIsOpen, removeItem, updateQty, total, count } = useCart();

  useEffect(() => {
    if (!isOpen) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setIsOpen(false);
    };
    document.addEventListener("keydown", onKeyDown);
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = originalOverflow;
    };
  }, [isOpen, setIsOpen]);

  if (!isOpen) return null;

  const whatsappMessage = getCartWhatsAppMessage(items, total);

  return (
    <div className="fixed inset-0 z-[100]" role="dialog" aria-modal="true" aria-label="Shopping bag">
      <button type="button" aria-label="Close shopping bag" className="absolute inset-0 h-full w-full cursor-default bg-black/45 backdrop-blur-[2px]" onClick={() => setIsOpen(false)} />
      <aside className="absolute right-0 top-0 flex h-full w-full max-w-[520px] flex-col bg-[#fffdf8] shadow-2xl animate-[slideIn_.35s_ease-out]">
        <div className="flex items-start justify-between border-b border-black/10 px-5 py-5 md:px-7">
          <div>
            <p className="eyebrow text-black/50">Your edit</p>
            <h2 className="mt-1 font-display text-3xl leading-none">Shopping bag <span className="font-mono text-xs align-middle text-black/45">({count})</span></h2>
          </div>
          <button type="button" onClick={() => setIsOpen(false)} className="flex h-10 w-10 items-center justify-center rounded-full border border-black/15 transition hover:bg-[#171412] hover:text-white" aria-label="Close shopping bag"><X className="h-4 w-4" /></button>
        </div>

        <div className="flex-1 overflow-y-auto px-5 py-6 md:px-7">
          {items.length === 0 ? (
            <div className="flex min-h-[55vh] flex-col items-center justify-center text-center">
              <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-full border border-black/10 bg-[#f6f1e8] font-display text-3xl italic">g</div>
              <h3 className="font-display text-3xl">Your bag is waiting.</h3>
              <p className="mt-3 max-w-[30ch] text-sm leading-6 text-black/55">Find a hand-drawn one-off and make it part of your story.</p>
              <Link href="/shop" onClick={() => setIsOpen(false)} className="mt-7 inline-flex items-center gap-3 rounded-full bg-[#171412] px-5 py-3 font-mono text-[10px] uppercase tracking-[0.14em] text-white transition hover:bg-[#b86f48]">Browse the edit <ArrowRight className="h-3.5 w-3.5" /></Link>
            </div>
          ) : (
            <>
              <div className="mb-5 flex items-center gap-2 rounded-[2px] bg-[#f0f5c9] px-4 py-3 font-mono text-[10px] uppercase leading-5 tracking-[0.08em] text-[#424a22]">
                <span className="h-2 w-2 shrink-0 rounded-full bg-[#75816a]" /> One-of-one pieces are held when you message the studio.
              </div>
              <div className="space-y-5">
                {items.map((item, index) => (
                  <div key={`${item.product.id}-${item.size}`} className="flex gap-4 border-b border-black/10 pb-5">
                    <div className="h-32 w-24 shrink-0 overflow-hidden rounded-[2px] bg-[#e8dfd2]"><img src={img(item.product.images[0])} alt={item.product.name} className="h-full w-full object-cover" /></div>
                    <div className="min-w-0 flex-1">
                      <div className="flex items-start justify-between gap-3">
                        <div>
                          <p className="font-mono text-[9px] uppercase tracking-[0.13em] text-black/45">{item.product.category} · 1 of 1</p>
                          <h3 className="mt-1 font-display text-xl leading-[0.95]">{item.product.name.replace(/^\d+\s+—\s+/, "")}</h3>
                        </div>
                        <button type="button" onClick={() => removeItem(index)} className="font-mono text-[9px] uppercase tracking-[0.1em] text-black/45 underline-offset-4 hover:text-[#b86f48] hover:underline">Remove</button>
                      </div>
                      <p className="mt-2 font-mono text-[10px] text-black/55">Size {item.size} · {item.color}</p>
                      <div className="mt-5 flex items-center justify-between">
                        <div className="flex items-center gap-2 rounded-full border border-black/15 px-1.5 py-1">
                          <button type="button" onClick={() => updateQty(index, item.quantity - 1)} className="flex h-6 w-6 items-center justify-center rounded-full hover:bg-[#f6f1e8]" aria-label="Remove one"><Minus className="h-3 w-3" /></button>
                          <span className="w-4 text-center font-mono text-xs">{item.quantity}</span>
                          <button type="button" disabled onClick={() => updateQty(index, item.quantity + 1)} className="flex h-6 w-6 cursor-not-allowed items-center justify-center rounded-full text-black/25" aria-label="One-of-one quantity limit"><Plus className="h-3 w-3" /></button>
                        </div>
                        <span className="font-mono text-sm">{formatUGX(item.product.price)}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <Link href="/shop" onClick={() => setIsOpen(false)} className="mt-6 inline-flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.14em] underline underline-offset-4">Continue browsing <ArrowRight className="h-3.5 w-3.5" /></Link>
            </>
          )}
        </div>

        {items.length > 0 && (
          <div className="border-t border-black/10 bg-[#f6f1e8] px-5 py-5 md:px-7">
            <div className="flex items-center justify-between font-mono text-[11px] uppercase tracking-[0.12em] text-black/55"><span>Subtotal</span><span>{formatUGX(total)}</span></div>
            <p className="mt-2 font-mono text-[10px] leading-5 text-black/50">Delivery is calculated at checkout · Kampala boda delivery from UGX 15,000.</p>
            <Link href="/checkout" onClick={() => setIsOpen(false)} className="mt-5 flex w-full items-center justify-center gap-3 rounded-full bg-[#171412] py-4 font-mono text-[11px] uppercase tracking-[0.16em] text-white transition hover:bg-[#b86f48]">Continue to checkout <ArrowRight className="h-4 w-4" /></Link>
            <div className="mt-3 grid grid-cols-2 gap-2">
              {whatsappNumbers.map((number) => <a key={number} href={`https://wa.me/${number}?text=${encodeURIComponent(whatsappMessage)}`} target="_blank" rel="noreferrer" className="rounded-full border border-black/15 py-3 text-center font-mono text-[9px] uppercase tracking-[0.08em] transition hover:border-[#25d366] hover:bg-[#25d366]">WhatsApp {number === whatsappNumbers[0] ? "0763813315" : "+256 707 548383"}</a>)}
            </div>
            <div className="mt-4 flex items-center justify-center gap-2 font-mono text-[9px] uppercase tracking-[0.1em] text-black/45"><ChevronDown className="h-3 w-3" /> Secure studio confirmation via WhatsApp</div>
          </div>
        )}
      </aside>
      <style jsx>{`@keyframes slideIn { from { transform: translateX(100%); } to { transform: translateX(0); } }`}</style>
    </div>
  );
}
