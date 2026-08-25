"use client";

/* The supplied local JPGs are intentionally used as art-directed media. */
/* eslint-disable @next/next/no-img-element */

import Link from "next/link";
import { ArrowLeft, ArrowRight, Check, ChevronDown, LockKeyhole, MessageCircle, PackageCheck, Phone, ShieldCheck, Truck } from "lucide-react";
import { useMemo, useState } from "react";
import { useCart } from "@/lib/cart";
import { formatUGX } from "@/lib/products";
import { img } from "@/lib/config";

type DeliveryZone = "kampala" | "uganda" | "pickup";
type PaymentMethod = "mobile" | "cod" | "transfer";

const deliveryOptions: { id: DeliveryZone; label: string; description: string; fee: number }[] = [
  { id: "kampala", label: "Kampala delivery", description: "Same-day boda delivery", fee: 15000 },
  { id: "uganda", label: "Elsewhere in Uganda", description: "We will confirm the courier quote", fee: 25000 },
  { id: "pickup", label: "Studio pick-up", description: "Kabalagala · Mon–Sat", fee: 0 },
];

const paymentOptions: { id: PaymentMethod; label: string; description: string }[] = [
  { id: "mobile", label: "Mobile Money", description: "MTN MoMo or Airtel Money" },
  { id: "cod", label: "Cash on delivery", description: "Available for Kampala" },
  { id: "transfer", label: "Bank / other", description: "We will share details on WhatsApp" },
];

export default function CheckoutPage() {
  const { items, total, clear } = useCart();
  const [deliveryZone, setDeliveryZone] = useState<DeliveryZone>("kampala");
  const [payment, setPayment] = useState<PaymentMethod>("mobile");
  const [placed, setPlaced] = useState(false);
  const [orderReference, setOrderReference] = useState("");
  const [whatsappUrl, setWhatsappUrl] = useState("");
  const [form, setForm] = useState({ name: "", phone: "", email: "", location: "", notes: "" });

  const delivery = deliveryOptions.find((option) => option.id === deliveryZone) || deliveryOptions[0];
  const grandTotal = total + delivery.fee;
  const itemCount = items.length;
  const isKampalaCash = payment !== "cod" || deliveryZone === "kampala";

  const itemSummary = useMemo(() => items.map((item, index) => `${index + 1}. ${item.product.name} · size ${item.size} · ${formatUGX(item.product.price)}`).join("\n"), [items]);

  const updateForm = (field: keyof typeof form, value: string) => setForm((current) => ({ ...current, [field]: value }));

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!isKampalaCash) return;

    const reference = `GC-${new Date().getFullYear()}-${Math.floor(100000 + Math.random() * 900000)}`;
    const message = [
      "Hello Gayita Collections! I would like to place an order.",
      "",
      `Order reference: ${reference}`,
      itemSummary,
      "",
      `Items: ${itemCount}`,
      `Pieces total: ${formatUGX(total)}`,
      `Delivery: ${delivery.label} — ${delivery.fee ? formatUGX(delivery.fee) : "free"}`,
      `Order total: ${formatUGX(grandTotal)}`,
      `Payment: ${paymentOptions.find((option) => option.id === payment)?.label}`,
      "",
      `Name: ${form.name}`,
      `Phone: ${form.phone}`,
      `Email: ${form.email || "Not provided"}`,
      `Location: ${form.location}`,
      `Notes: ${form.notes || "None"}`,
      "",
      "Please confirm availability and the next payment step. Thank you!",
    ].join("\n");

    setOrderReference(reference);
    setWhatsappUrl(`https://wa.me/256763813315?text=${encodeURIComponent(message)}`);
    setPlaced(true);
  };

  if (placed) {
    return (
      <div className="mx-auto max-w-[880px] px-5 py-12 md:px-8 md:py-20">
        <div className="overflow-hidden rounded-[3px] border border-black/10 bg-[#fffdf8]">
          <div className="bg-[#d6e476] px-6 py-12 text-center md:px-16 md:py-16"><span className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-[#171412] text-[#d6e476]"><Check className="h-7 w-7" /></span><p className="eyebrow mt-6 text-black/55">Request saved · {orderReference}</p><h1 className="mt-3 font-display text-5xl leading-[.88] md:text-7xl">You&apos;re nearly<br /><em>there.</em></h1><p className="mx-auto mt-6 max-w-[42ch] text-sm leading-6 text-black/70">Your order details are ready. Send them to the studio on WhatsApp so we can confirm that your one-of-one is still available and arrange payment.</p></div>
          <div className="p-6 md:p-12"><a href={whatsappUrl} target="_blank" rel="noreferrer" className="flex w-full items-center justify-center gap-3 rounded-full bg-[#25d366] py-4 font-mono text-[10px] uppercase tracking-[0.15em] text-[#171412] transition hover:bg-[#171412] hover:text-white"><MessageCircle className="h-4 w-4" /> Send order on WhatsApp</a><div className="mt-6 grid gap-3 sm:grid-cols-2"><a href="tel:0763813315" className="flex items-center justify-center gap-2 rounded-full border border-black/15 py-3 font-mono text-[10px] uppercase tracking-[0.1em] transition hover:border-black"><Phone className="h-3.5 w-3.5" /> Call 0763813315</a><a href="https://wa.me/256707548383" target="_blank" rel="noreferrer" className="flex items-center justify-center gap-2 rounded-full border border-black/15 py-3 font-mono text-[10px] uppercase tracking-[0.1em] transition hover:border-black">WhatsApp +256 707 548383</a></div><div className="mt-9 border-t border-black/10 pt-6"><p className="eyebrow text-black/45">What happens next</p><div className="mt-4 grid gap-4 sm:grid-cols-3"><div><span className="font-display text-2xl">01</span><p className="mt-1 text-xs leading-5 text-black/55">We check the garment and reply from the studio.</p></div><div><span className="font-display text-2xl">02</span><p className="mt-1 text-xs leading-5 text-black/55">We agree payment and delivery details with you.</p></div><div><span className="font-display text-2xl">03</span><p className="mt-1 text-xs leading-5 text-black/55">Your piece starts its journey to you.</p></div></div></div><div className="mt-9 flex flex-col justify-between gap-4 border-t border-black/10 pt-6 sm:flex-row sm:items-center"><Link href="/shop" onClick={() => clear()} className="inline-flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.12em] underline underline-offset-4"><ArrowLeft className="h-3.5 w-3.5" /> Back to the edit</Link><p className="font-mono text-[10px] leading-5 text-black/45 sm:text-right">Official lines<br />0763813315 · 077548383 · +256 707 548383</p></div></div>
        </div>
      </div>
    );
  }

  if (items.length === 0) {
    return <div className="mx-auto flex min-h-[65vh] max-w-[700px] flex-col items-center justify-center px-5 py-20 text-center"><span className="font-display text-6xl italic text-[#b86f48]">g</span><h1 className="mt-5 font-display text-5xl leading-none">Your bag is empty.</h1><p className="mt-4 max-w-[32ch] text-sm leading-6 text-black/55">The checkout is ready when you are. Find a one-off piece from the current edit.</p><Link href="/shop" className="mt-8 inline-flex items-center gap-2 rounded-full bg-[#171412] px-6 py-4 font-mono text-[10px] uppercase tracking-[0.14em] text-white">Browse the edit <ArrowRight className="h-4 w-4" /></Link></div>;
  }

  return (
    <div className="mx-auto max-w-[1260px] px-5 pb-24 pt-8 md:px-8 md:pt-12">
      <div className="flex flex-col justify-between gap-5 border-b border-black/10 pb-8 md:flex-row md:items-end"><div><Link href="/shop" className="mb-5 inline-flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.12em] text-black/50 hover:text-black"><ArrowLeft className="h-3.5 w-3.5" /> Continue shopping</Link><p className="eyebrow text-[#b86f48]">Almost yours · studio confirmation</p><h1 className="mt-3 font-display text-6xl leading-[.8] tracking-[-0.05em] md:text-8xl">Check<br /><em>out.</em></h1></div><div className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.11em] text-black/50"><span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#171412] text-white">1</span> Details <ArrowRight className="h-3 w-3" /><span className="flex h-7 w-7 items-center justify-center rounded-full border border-black/15">2</span> Confirm on WhatsApp</div></div>

      <div className="mt-10 grid gap-10 lg:grid-cols-[1fr_390px] lg:items-start">
        <form onSubmit={handleSubmit} className="space-y-8">
          <section className="rounded-[3px] border border-black/10 bg-[#fffdf8] p-6 md:p-9"><div className="flex items-start justify-between gap-4"><div><p className="eyebrow text-[#b86f48]">01 · Your details</p><h2 className="mt-2 font-display text-3xl">Where should we send it?</h2></div><LockKeyhole className="h-5 w-5 text-black/25" /></div><div className="mt-7 grid gap-4 sm:grid-cols-2"><label className="block sm:col-span-2"><span className="font-mono text-[10px] uppercase tracking-[0.1em] text-black/55">Full name *</span><input required value={form.name} onChange={(event) => updateForm("name", event.target.value)} placeholder="Your name" className="mt-2 w-full rounded-[2px] border border-black/15 bg-[#f6f1e8] px-4 py-3.5 text-sm outline-none transition focus:border-black" /></label><label className="block"><span className="font-mono text-[10px] uppercase tracking-[0.1em] text-black/55">Phone / WhatsApp *</span><input required type="tel" value={form.phone} onChange={(event) => updateForm("phone", event.target.value)} placeholder="07xx xxx xxx" className="mt-2 w-full rounded-[2px] border border-black/15 bg-[#f6f1e8] px-4 py-3.5 text-sm outline-none transition focus:border-black" /></label><label className="block"><span className="font-mono text-[10px] uppercase tracking-[0.1em] text-black/55">Email <span className="text-black/35">(optional)</span></span><input type="email" value={form.email} onChange={(event) => updateForm("email", event.target.value)} placeholder="you@example.com" className="mt-2 w-full rounded-[2px] border border-black/15 bg-[#f6f1e8] px-4 py-3.5 text-sm outline-none transition focus:border-black" /></label><label className="block sm:col-span-2"><span className="font-mono text-[10px] uppercase tracking-[0.1em] text-black/55">Delivery location *</span><input required value={form.location} onChange={(event) => updateForm("location", event.target.value)} placeholder="Area, landmark, town" className="mt-2 w-full rounded-[2px] border border-black/15 bg-[#f6f1e8] px-4 py-3.5 text-sm outline-none transition focus:border-black" /></label><label className="block sm:col-span-2"><span className="font-mono text-[10px] uppercase tracking-[0.1em] text-black/55">Anything we should know? <span className="text-black/35">(optional)</span></span><textarea rows={3} value={form.notes} onChange={(event) => updateForm("notes", event.target.value)} placeholder="Size questions, timing, styling notes..." className="mt-2 w-full resize-none rounded-[2px] border border-black/15 bg-[#f6f1e8] px-4 py-3.5 text-sm outline-none transition focus:border-black" /></label></div></section>

          <section className="rounded-[3px] border border-black/10 bg-[#fffdf8] p-6 md:p-9"><div><p className="eyebrow text-[#b86f48]">02 · Delivery</p><h2 className="mt-2 font-display text-3xl">Choose your route.</h2></div><div className="mt-6 grid gap-2">{deliveryOptions.map((option) => <label key={option.id} className={`flex cursor-pointer items-center justify-between gap-4 rounded-[2px] border p-4 transition ${deliveryZone === option.id ? "border-[#171412] bg-[#f6f1e8]" : "border-black/10 hover:border-black/30"}`}><span className="flex items-center gap-3"><input type="radio" name="delivery" value={option.id} checked={deliveryZone === option.id} onChange={() => setDeliveryZone(option.id)} className="accent-[#b86f48]" /><span><span className="block text-sm">{option.label}</span><span className="mt-1 block font-mono text-[9px] uppercase tracking-[0.08em] text-black/45">{option.description}</span></span></span><span className="shrink-0 font-mono text-xs">{option.fee ? formatUGX(option.fee) : "Free"}</span></label>)}</div></section>

          <section className="rounded-[3px] border border-black/10 bg-[#fffdf8] p-6 md:p-9"><div><p className="eyebrow text-[#b86f48]">03 · Payment preference</p><h2 className="mt-2 font-display text-3xl">How would you like to pay?</h2></div><div className="mt-6 grid gap-2">{paymentOptions.map((option) => <label key={option.id} className={`flex cursor-pointer items-center gap-3 rounded-[2px] border p-4 transition ${payment === option.id ? "border-[#171412] bg-[#f6f1e8]" : "border-black/10 hover:border-black/30"}`}><input type="radio" name="payment" value={option.id} checked={payment === option.id} onChange={() => setPayment(option.id)} className="accent-[#b86f48]" /><span><span className="block text-sm">{option.label}</span><span className="mt-1 block font-mono text-[9px] uppercase tracking-[0.08em] text-black/45">{option.description}</span></span></label>)}</div><p className="mt-5 flex gap-2 font-mono text-[10px] leading-5 text-black/50"><ShieldCheck className="mt-0.5 h-4 w-4 shrink-0 text-[#75816a]" /> No payment is taken on this page. We confirm availability and send the correct payment details on WhatsApp.</p></section>

          <button type="submit" disabled={!isKampalaCash} className="flex w-full items-center justify-center gap-3 rounded-full bg-[#171412] py-4 font-mono text-[10px] uppercase tracking-[0.15em] text-white transition hover:bg-[#b86f48] disabled:cursor-not-allowed disabled:bg-black/30">Review order on WhatsApp <ArrowRight className="h-4 w-4" /></button>
        </form>

        <aside className="lg:sticky lg:top-28"><div className="rounded-[3px] border border-black/10 bg-[#fffdf8] p-5 md:p-7"><div className="flex items-center justify-between border-b border-black/10 pb-5"><div><p className="eyebrow text-[#b86f48]">Your edit</p><h2 className="mt-1 font-display text-3xl">Order summary</h2></div><span className="font-mono text-xs">{itemCount} piece{itemCount === 1 ? "" : "s"}</span></div><div className="space-y-5 py-6">{items.map((item) => <div key={item.product.id} className="flex gap-3"><div className="h-20 w-16 shrink-0 overflow-hidden rounded-[2px] bg-[#e8dfd2]"><img src={img(item.product.images[0])} alt={item.product.name} className="h-full w-full object-cover" /></div><div className="min-w-0 flex-1"><p className="font-display text-xl leading-[.95]">{item.product.name.replace(/^\d+\s+—\s+/, "")}</p><p className="mt-2 font-mono text-[9px] uppercase tracking-[0.08em] text-black/45">Size {item.size} · One of one</p><p className="mt-2 font-mono text-xs">{formatUGX(item.product.price)}</p></div></div>)}</div><div className="space-y-3 border-t border-black/10 pt-5 font-mono text-[11px]"><div className="flex justify-between text-black/55"><span>Pieces</span><span>{formatUGX(total)}</span></div><div className="flex justify-between text-black/55"><span>Delivery</span><span>{delivery.fee ? formatUGX(delivery.fee) : "Free"}</span></div><div className="flex justify-between border-t border-black/10 pt-4 text-sm font-medium"><span>Total</span><span>{formatUGX(grandTotal)}</span></div></div><div className="mt-6 rounded-[2px] bg-[#f0f5c9] p-4"><p className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.09em] text-[#424a22]"><PackageCheck className="h-4 w-4" /> Studio confirms first</p><p className="mt-2 text-xs leading-5 text-[#424a22]/70">We keep one-of-one stock honest. Your WhatsApp message is the final step to reserve this piece.</p></div></div><div className="mt-4 flex items-start gap-3 px-2"><Truck className="mt-0.5 h-4 w-4 text-[#b86f48]" /><p className="font-mono text-[9px] uppercase leading-4 tracking-[0.07em] text-black/45">Kabalagala, Kampala<br />Mon–Sat · 10:00–19:00<br />0763813315 · +256 707 548383</p></div><div className="mt-4 flex items-start gap-3 px-2"><ChevronDown className="mt-0.5 h-4 w-4 text-[#b86f48]" /><p className="font-mono text-[9px] uppercase leading-4 tracking-[0.07em] text-black/45">Questions? Call 077548383<br />or message the studio.</p></div></aside>
      </div>
    </div>
  );
}
