"use client";
import { useCart } from "@/lib/cart";
import { X, Minus, Plus, MessageCircle } from "lucide-react";
import { formatUGX, getCartWhatsAppMessage } from "@/lib/products";
import Link from "next/link";
import { useState } from "react";
import { img } from "@/lib/config";

export default function CartDrawer() {
  const { items, isOpen, setIsOpen, removeItem, updateQty, total, count } = useCart();
  const [form, setForm] = useState({ name: "", location: "" });

  if (!isOpen) return null;

  const whatsappNumber = "256763813315"; // 0763813315
  const whatsappNumber2 = "256707548383";

  const handleWhatsAppOrder = () => {
    const message = getCartWhatsAppMessage(items, total);
    const fullMessage = `${message}\n\nName: ${form.name || "[add name]"}\nLocation: ${form.location || "[add location]"}`;
    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(fullMessage)}`;
    window.open(url, "_blank");
  };

  const handleWhatsAppSingle = (productName: string) => {
    const msg = `Hello Gayita! I want ${productName} — is the 1 OF 1 still available?`;
    window.open(`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(msg)}`, "_blank");
  };

  return (
    <div className="fixed inset-0 z-[100] flex justify-end">
      <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" onClick={() => setIsOpen(false)} />
      <div className="relative w-full max-w-[480px] bg-[#faf6ee] h-full flex flex-col shadow-2xl border-l border-black/10">
        {/* Header */}
        <div className="p-6 border-b border-black/10 flex items-center justify-between bg-white">
          <div>
            <h2 className="font-display text-[26px] leading-none font-bold uppercase tracking-tight">Cart — 1 OF 1s</h2>
            <p className="font-mono text-[10px] tracking-[0.2em] uppercase opacity-60 mt-1">{count} unique pieces • No copies • Painted direct</p>
          </div>
          <button onClick={() => setIsOpen(false)} className="w-10 h-10 rounded-full border border-black/10 flex items-center justify-center hover:bg-black hover:text-white transition">
            <X className="w-4 h-4" />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-6 space-y-6">
          {items.length === 0 ? (
            <div className="py-20 text-center">
              <div className="w-20 h-20 mx-auto rounded-full bg-white border border-black/10 flex items-center justify-center mb-4">
                <span className="font-mono text-[10px] tracking-widest uppercase">Empty</span>
              </div>
              <p className="font-display text-[22px] font-bold uppercase">No 1 of 1s yet</p>
              <p className="text-[13px] opacity-60 mt-2 max-w-[28ch] mx-auto font-mono">Each piece is hand-painted directly, once sold it's gone forever. No copies.</p>
              <Link href="/shop" onClick={() => setIsOpen(false)} className="inline-block mt-6 px-6 py-3 bg-black text-white rounded-full text-[11px] tracking-widest uppercase font-mono font-bold">Shop 1 of 1s</Link>
            </div>
          ) : (
            <>
              <div className="p-3 bg-[#ff3b30] text-white rounded-xl text-[11px] font-mono tracking-wide">
                ⚠️ These are 1 OF 1 — if someone else checks out first, they're gone. No copies ever.
              </div>
              {items.map((it, idx) => (
                <div key={idx} className="flex gap-4 p-3 bg-white border border-black/10">
                  <div className="w-[84px] h-[104px] bg-[#f5f1e8] overflow-hidden flex-shrink-0 border border-black/5">
                    <img src={img(it.product.images[0])} alt={it.product.name} className="w-full h-full object-cover" />
                  </div>
                  <div className="flex-1">
                    <div className="flex justify-between gap-2">
                      <h4 className="font-display text-[13px] leading-tight font-bold uppercase">{it.product.name}</h4>
                      <button onClick={() => removeItem(idx)} className="text-[10px] opacity-50 hover:opacity-100 uppercase tracking-widest font-mono">Remove</button>
                    </div>
                    <p className="font-mono text-[10px] opacity-60 mt-1">{it.color} • Size {it.size} • {it.product.paintTime} paint</p>
                    <p className="font-mono text-[9px] mt-1 px-2 py-1 bg-black text-white inline-block uppercase">1 OF 1 • NO COPY</p>
                    <div className="flex items-center justify-between mt-3">
                      <div className="flex items-center gap-2 border border-black/10 rounded-full px-2 py-1 bg-[#faf6ee]">
                        <button onClick={() => updateQty(idx, it.quantity - 1)} className="w-6 h-6 rounded-full hover:bg-white flex items-center justify-center"><Minus className="w-3 h-3" /></button>
                        <span className="text-[12px] w-6 text-center font-mono">{it.quantity}</span>
                        <button onClick={() => updateQty(idx, it.quantity + 1)} className="w-6 h-6 rounded-full hover:bg-white flex items-center justify-center"><Plus className="w-3 h-3" /></button>
                      </div>
                      <span className="font-mono text-[12px] font-bold">{formatUGX(it.product.price * it.quantity)}</span>
                    </div>
                  </div>
                </div>
              ))}

              <div className="space-y-3 pt-4">
                <div>
                  <label className="font-mono text-[10px] uppercase tracking-widest opacity-70">Your Name</label>
                  <input value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} placeholder="e.g. Isco" className="mt-1 w-full px-4 py-3 border border-black/15 bg-white focus:outline-none focus:border-black font-mono text-[13px]" />
                </div>
                <div>
                  <label className="font-mono text-[10px] uppercase tracking-widest opacity-70">Delivery Location (Kampala)</label>
                  <input value={form.location} onChange={e => setForm({ ...form, location: e.target.value })} placeholder="Kabalagala, Ntinda, etc." className="mt-1 w-full px-4 py-3 border border-black/15 bg-white focus:outline-none focus:border-black font-mono text-[13px]" />
                </div>
              </div>
            </>
          )}
        </div>

        {items.length > 0 && (
          <div className="p-6 border-t border-black/10 bg-white space-y-4">
            <div className="flex justify-between font-mono text-[11px] uppercase tracking-widest opacity-60">
              <span>Subtotal (1 of 1s)</span><span>{formatUGX(total)}</span>
            </div>
            <div className="flex justify-between font-display text-[20px] font-bold uppercase">
              <span>Total</span><span>{formatUGX(total)}</span>
            </div>

            <button onClick={handleWhatsAppOrder} className="w-full py-4 bg-[#25D366] text-white rounded-full flex items-center justify-center gap-2 text-[12px] tracking-[0.18em] uppercase font-mono font-bold hover:bg-black transition">
              <MessageCircle className="w-4 h-4" /> Order via WhatsApp — {formatUGX(total)}
            </button>

            <div className="grid grid-cols-2 gap-2">
              <a href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(getCartWhatsAppMessage(items, total))}`} target="_blank" className="py-3 border border-black/15 rounded-full text-center text-[10px] tracking-widest uppercase font-mono hover:bg-black hover:text-white transition">
                WhatsApp 0763813315
              </a>
              <a href={`https://wa.me/${whatsappNumber2}?text=${encodeURIComponent(getCartWhatsAppMessage(items, total))}`} target="_blank" className="py-3 border border-black/15 rounded-full text-center text-[10px] tracking-widest uppercase font-mono hover:bg-black hover:text-white transition">
                WhatsApp +256 707 548383
              </a>
            </div>

            <p className="text-[10px] text-center opacity-60 font-mono leading-relaxed">
              Each piece is hand-painted direct, no prints, no copies. We’ll confirm availability on WhatsApp. Boda delivery same day in Kampala.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
