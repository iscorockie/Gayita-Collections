import { useMemo, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useStore } from "../context/StoreContext";
import { getProduct } from "../data/products";
import type { DeliveryMethod, OrderDetails, PaymentMethod } from "../lib/types";
import { FREE_DELIVERY_THRESHOLD, cn, formatUGX, waLink } from "../lib/utils";
import {
  IconArrowRight,
  IconBag,
  IconCheck,
  IconChevronLeft,
  IconChevronRight,
  IconMapPin,
  IconShield,
  IconTruck,
  IconWhatsApp,
} from "../components/icons";
import { Reveal } from "../components/ui";

const STEPS = ["Contact", "Delivery", "Payment", "Review"] as const;
const PHONE_RE = /^(\+?256|0)?[-.\s]?(7[0-9]|75|76|77|78|79)[-.\s]?\d{3}[-.\s]?\d{3}$/;

const PAY_LABEL: Record<PaymentMethod, string> = {
  mtn: "MTN Mobile Money",
  airtel: "Airtel Money",
  cod: "Cash on Delivery",
};
const DELIVERY_LABEL: Record<DeliveryMethod, string> = {
  pickup: "Studio Pickup — Najjera, Kampala",
  kampala: "Kampala Delivery",
  upcountry: "Upcountry Courier",
};

export default function Checkout() {
  const { cart, subtotal, clearCart, placeOrder } = useStore();
  const navigate = useNavigate();
  const [step, setStep] = useState(0);
  const [placed, setPlaced] = useState<OrderDetails | null>(null);

  const [contact, setContact] = useState({ name: "", phone: "", email: "" });
  const [delivery, setDelivery] = useState<{ method: DeliveryMethod; address: string; note: string }>({
    method: "kampala",
    address: "",
    note: "",
  });
  const [payment, setPayment] = useState<{ method: PaymentMethod; phone: string }>({ method: "mtn", phone: "" });
  const [errors, setErrors] = useState<Record<string, string>>({});

  const deliveryFee = useMemo(() => {
    if (delivery.method === "pickup") return 0;
    if (delivery.method === "kampala") return subtotal >= FREE_DELIVERY_THRESHOLD ? 0 : 5_000;
    return 12_000;
  }, [delivery.method, subtotal]);
  const total = subtotal + deliveryFee;

  const validateStep = (s: number): boolean => {
    const e: Record<string, string> = {};
    if (s === 0) {
      if (contact.name.trim().length < 2) e.name = "Please enter your full name.";
      if (!PHONE_RE.test(contact.phone.trim())) e.phone = "Enter a valid Ugandan number, e.g. 0707 548 383.";
      if (contact.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(contact.email)) e.email = "That email doesn't look right.";
    }
    if (s === 1) {
      if (delivery.method !== "pickup" && delivery.address.trim().length < 5)
        e.address = "Add an address or well-known landmark for the rider.";
    }
    if (s === 2) {
      if (payment.method !== "cod" && !PHONE_RE.test((payment.phone || contact.phone).trim()))
        e.payPhone = `Enter the ${payment.method === "mtn" ? "MTN" : "Airtel"} number to debit.`;
    }
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const next = () => {
    if (!validateStep(step)) return;
    setStep((s) => Math.min(s + 1, 3));
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const submit = () => {
    const order: OrderDetails = {
      id: `GC-${Date.now().toString(36).toUpperCase().slice(-6)}`,
      placedAt: new Date().toLocaleString("en-GB", { dateStyle: "medium", timeStyle: "short" }),
      items: cart,
      subtotal,
      deliveryFee,
      total,
      contact: { name: contact.name.trim(), phone: contact.phone.trim(), email: contact.email.trim() || undefined },
      delivery: { method: delivery.method, address: delivery.address.trim(), note: delivery.note.trim() || undefined },
      payment: { method: payment.method, phone: payment.method === "cod" ? undefined : (payment.phone || contact.phone).trim() },
    };
    placeOrder(order);
    clearCart();
    setPlaced(order);
    window.scrollTo({ top: 0 });
  };

  /* ---------- SUCCESS ---------- */
  if (placed) {
    const lines = [
      `Hello Gayita Collections! 🧵`,
      `Order ${placed.id} just placed on the website.`,
      ``,
      ...placed.items.map((i) => {
        const p = getProduct(i.slug);
        return `• ${p?.name} — size ${i.size} × ${i.qty} (${formatUGX((p?.price ?? 0) * i.qty)})`;
      }),
      `Delivery: ${DELIVERY_LABEL[placed.delivery.method]}`,
      `Payment: ${PAY_LABEL[placed.payment.method]}`,
      `Total: ${formatUGX(placed.total)}`,
      ``,
      `Name: ${placed.contact.name} · ${placed.contact.phone}`,
    ].join("\n");

    return (
      <main className="mx-auto max-w-3xl bg-asphalt px-4 py-20 text-center sm:py-28">
        <Reveal>
          <span className="mx-auto flex h-20 w-20 items-center justify-center border border-volt bg-volt/10 text-volt">
            <IconCheck className="h-9 w-9" />
          </span>
          <p className="mt-7 tag text-volt">Order received</p>
          <h1 className="mt-3 font-display text-5xl uppercase sm:text-6xl">{placed.id}</h1>
          <p className="mx-auto mt-4 max-w-md text-[15px] leading-relaxed text-bone/60">
            Webale nyo, <b className="text-bone">{placed.contact.name.split(" ")[0]}</b>! 🙏 Your
            order is in the studio queue. We'll call{" "}
            <b className="text-volt">{placed.contact.phone}</b> shortly to confirm{" "}
            {placed.payment.method === "cod" ? "delivery details" : "your mobile money payment"}.
          </p>

          <div className="mx-auto mt-10 max-w-md border border-bone/10 bg-coal2 p-7 text-left">
            <p className="tag text-bone/50">Order summary</p>
            <ul className="mt-4 space-y-2.5 text-[13.5px]">
              {placed.items.map((i) => {
                const p = getProduct(i.slug);
                if (!p) return null;
                return (
                  <li key={i.slug + i.size} className="flex justify-between gap-4">
                    <span className="text-bone/75">
                      {p.name} <span className="text-bone/40">· {i.size} × {i.qty}</span>
                    </span>
                    <b className="font-mono">{formatUGX(p.price * i.qty)}</b>
                  </li>
                );
              })}
            </ul>
            <div className="mt-4 space-y-1.5 border-t border-bone/10 pt-4 text-[13.5px]">
              <p className="flex justify-between text-bone/60"><span>Subtotal</span><span className="font-mono">{formatUGX(placed.subtotal)}</span></p>
              <p className="flex justify-between text-bone/60">
                <span>Delivery</span>
                <span className="font-mono">{placed.deliveryFee === 0 ? "FREE" : formatUGX(placed.deliveryFee)}</span>
              </p>
              <p className="flex justify-between border-t border-bone/10 pt-2 font-display text-xl">
                <span>Total</span><span className="text-volt">{formatUGX(placed.total)}</span>
              </p>
            </div>
            <p className="mt-4 font-mono text-[11px] text-bone/45">
              {DELIVERY_LABEL[placed.delivery.method]} · {PAY_LABEL[placed.payment.method]}
            </p>
          </div>

          <div className="mt-9 flex flex-col justify-center gap-3.5 sm:flex-row">
            <a href={waLink(lines)} target="_blank" rel="noreferrer" className="btn-volt">
              <IconWhatsApp className="h-4 w-4" /> Confirm on WhatsApp
            </a>
            <button onClick={() => navigate("/shop")} className="btn-ghost">Keep Shopping</button>
          </div>
          <p className="mt-6 font-mono text-[11px] text-bone/40">
            WhatsApp confirmation gets your order moving fastest. 🛵
          </p>
        </Reveal>
      </main>
    );
  }

  /* ---------- EMPTY ---------- */
  if (cart.length === 0) {
    return (
      <main className="mx-auto flex min-h-[60vh] max-w-7xl flex-col items-center justify-center bg-asphalt px-4 py-24 text-center">
        <span className="flex h-20 w-20 items-center justify-center border border-bone/15 bg-coal2">
          <IconBag className="h-8 w-8 text-volt" />
        </span>
        <h1 className="mt-7 font-display text-4xl uppercase">Your bag is empty</h1>
        <p className="mt-3 text-bone/50">Add some heat first — we'll keep it warm.</p>
        <Link to="/shop" className="btn-volt mt-8">Shop the collection</Link>
      </main>
    );
  }

  const err = (k: string) =>
    errors[k] ? <p className="mt-1.5 text-[12px] font-semibold text-danger">{errors[k]}</p> : null;

  return (
    <main className="mx-auto max-w-7xl bg-asphalt px-4 pb-24">
      <header className="py-10 sm:py-14">
        <p className="tag text-volt">Checkout</p>
        <h1 className="mt-2 font-display text-5xl uppercase sm:text-6xl">Almost yours</h1>

        <ol className="mt-8 flex items-center gap-1.5 sm:gap-3">
          {STEPS.map((label, i) => (
            <li key={label} className="flex flex-1 items-center gap-2 sm:gap-3">
              <button
                onClick={() => i < step && setStep(i)}
                className={cn(
                  "flex h-8 w-8 shrink-0 items-center justify-center border font-mono text-[12px] font-extrabold transition-all",
                  i < step && "border-volt bg-volt text-asphalt",
                  i === step && "border-danger bg-danger text-bone",
                  i > step && "border-bone/20 text-bone/40"
                )}
                aria-label={`Step ${i + 1}: ${label}`}
              >
                {i < step ? <IconCheck className="h-3.5 w-3.5" /> : i + 1}
              </button>
              <span className={cn("tag hidden sm:block", i === step ? "text-bone" : "text-bone/40")}>{label}</span>
              {i < STEPS.length - 1 && <span className={cn("h-px flex-1", i < step ? "bg-volt" : "bg-bone/15")} />}
            </li>
          ))}
        </ol>
      </header>

      <div className="grid gap-12 lg:grid-cols-[1fr_380px]">
        <div>
          {step === 0 && (
            <Reveal>
              <h2 className="font-display text-2xl uppercase">Who's it for?</h2>
              <p className="mt-1 text-[13.5px] text-bone/50">We call or WhatsApp this number to confirm every order.</p>
              <div className="mt-7 grid gap-5 sm:grid-cols-2">
                <div className="sm:col-span-2">
                  <label className="field-label" htmlFor="co-name">Full name *</label>
                  <input id="co-name" className="field" placeholder="e.g. Nakato Sarah" value={contact.name}
                    onChange={(e) => setContact({ ...contact, name: e.target.value })} />
                  {err("name")}
                </div>
                <div>
                  <label className="field-label" htmlFor="co-phone">Phone (MTN / Airtel) *</label>
                  <input id="co-phone" className="field" placeholder="0707 548 383" inputMode="tel" value={contact.phone}
                    onChange={(e) => setContact({ ...contact, phone: e.target.value })} />
                  {err("phone")}
                </div>
                <div>
                  <label className="field-label" htmlFor="co-email">Email (optional)</label>
                  <input id="co-email" className="field" placeholder="you@example.com" inputMode="email" value={contact.email}
                    onChange={(e) => setContact({ ...contact, email: e.target.value })} />
                  {err("email")}
                </div>
              </div>
              <button onClick={next} className="btn-volt mt-8">
                Continue <IconArrowRight className="h-4 w-4" />
              </button>
            </Reveal>
          )}

          {step === 1 && (
            <Reveal>
              <h2 className="font-display text-2xl uppercase">How should it reach you?</h2>
              <div className="mt-7 space-y-4">
                {(
                  [
                    { key: "kampala", title: "Kampala delivery", desc: "Same or next day by boda rider, handled with care.", price: subtotal >= FREE_DELIVERY_THRESHOLD ? "FREE" : formatUGX(5_000), icon: <IconTruck className="h-5 w-5" /> },
                    { key: "pickup", title: "Studio pickup — Najjera", desc: "Free. Meet the artists, grab your piece.", price: "FREE", icon: <IconMapPin className="h-5 w-5" /> },
                    { key: "upcountry", title: "Upcountry courier", desc: "2–4 working days to Jinja, Gulu, Mbarara, Mbale & more.", price: formatUGX(12_000), icon: <IconTruck className="h-5 w-5" /> },
                  ] as const
                ).map((opt) => (
                  <label
                    key={opt.key}
                    className={cn(
                      "flex cursor-pointer items-center gap-4 border p-5 transition-all",
                      delivery.method === opt.key ? "border-volt bg-volt/10" : "border-bone/15 bg-coal2 hover:border-bone/40"
                    )}
                  >
                    <input type="radio" name="delivery" className="sr-only" checked={delivery.method === opt.key}
                      onChange={() => setDelivery({ ...delivery, method: opt.key })} />
                    <span className="text-volt">{opt.icon}</span>
                    <span className="flex-1">
                      <b className="block text-[14.5px]">{opt.title}</b>
                      <span className="text-[12.5px] text-bone/50">{opt.desc}</span>
                    </span>
                    <b className="font-mono text-[12px]">{opt.price}</b>
                  </label>
                ))}
              </div>

              {delivery.method !== "pickup" && (
                <div className="mt-6">
                  <label className="field-label" htmlFor="co-addr">
                    {delivery.method === "kampala" ? "Delivery address / landmark *" : "Town & delivery point *"}
                  </label>
                  <textarea id="co-addr" className="field min-h-[84px]" value={delivery.address}
                    placeholder="e.g. Najjera II, near Total station, ask for the green gate"
                    onChange={(e) => setDelivery({ ...delivery, address: e.target.value })} />
                  {err("address")}
                </div>
              )}
              <div className="mt-5">
                <label className="field-label" htmlFor="co-note">Delivery note (optional)</label>
                <input id="co-note" className="field" value={delivery.note}
                  placeholder="e.g. Call when you arrive" onChange={(e) => setDelivery({ ...delivery, note: e.target.value })} />
              </div>

              <div className="mt-8 flex flex-wrap gap-3.5">
                <button onClick={() => setStep(0)} className="btn-ghost"><IconChevronLeft className="h-4 w-4" /> Back</button>
                <button onClick={next} className="btn-volt">To payment <IconArrowRight className="h-4 w-4" /></button>
              </div>
            </Reveal>
          )}

          {step === 2 && (
            <Reveal>
              <h2 className="font-display text-2xl uppercase">Pick your weapon</h2>
              <div className="mt-7 space-y-4">
                {(
                  [
                    { key: "mtn", title: "MTN Mobile Money", desc: "We send a payment prompt to your MTN line after confirming your order.", chip: "MTN", chipCls: "bg-yellow-400 text-asphalt", badge: "Popular" },
                    { key: "airtel", title: "Airtel Money", desc: "Pay securely from your Airtel Money wallet on confirmation.", chip: "AIR", chipCls: "bg-red-600 text-bone", badge: null },
                    { key: "cod", title: "Cash on Delivery", desc: "Pay the rider in cash. Kampala & studio pickup only.", chip: "₵ASH", chipCls: "bg-green-800 text-bone", badge: null },
                  ] as const
                ).map((opt) => (
                  <label key={opt.key}
                    className={cn(
                      "flex cursor-pointer items-center gap-4 border p-5 transition-all",
                      payment.method === opt.key ? "border-volt bg-volt/10" : "border-bone/15 bg-coal2 hover:border-bone/40"
                    )}>
                    <input type="radio" name="payment" className="sr-only" checked={payment.method === opt.key}
                      onChange={() => {
                        if (opt.key === "cod" && delivery.method === "upcountry") return;
                        setPayment({ ...payment, method: opt.key });
                      }} />
                    <span className={cn("flex h-10 w-14 items-center justify-center font-mono text-[10px] font-extrabold", opt.chipCls)}>
                      {opt.chip}
                    </span>
                    <span className="flex-1">
                      <b className="flex items-center gap-2 text-[14.5px]">
                        {opt.title}
                        {opt.badge && <span className="tag bg-volt px-1.5 py-0.5 text-asphalt">{opt.badge}</span>}
                      </b>
                      <span className="text-[12.5px] text-bone/50">{opt.desc}</span>
                    </span>
                  </label>
                ))}
              </div>
              {payment.method === "cod" && delivery.method === "upcountry" && (
                <p className="mt-3 border border-danger/40 bg-danger/10 px-4 py-3 text-[12.5px] font-semibold text-danger">
                  Cash on delivery isn't available for upcountry courier — choose Mobile Money.
                </p>
              )}

              {payment.method !== "cod" && (
                <div className="mt-6">
                  <label className="field-label" htmlFor="co-payphone">
                    {payment.method === "mtn" ? "MTN" : "Airtel"} number to debit *
                  </label>
                  <input id="co-payphone" className="field" inputMode="tel" placeholder={contact.phone || "0707 548 383"}
                    value={payment.phone} onChange={(e) => setPayment({ ...payment, phone: e.target.value })} />
                  {err("payPhone")}
                  <p className="mt-2 flex items-center gap-2 font-mono text-[11px] text-bone/45">
                    <IconShield className="h-4 w-4 text-volt" />
                    You approve the prompt with your own PIN — never share it.
                  </p>
                </div>
              )}

              <div className="mt-8 flex flex-wrap gap-3.5">
                <button onClick={() => setStep(1)} className="btn-ghost"><IconChevronLeft className="h-4 w-4" /> Back</button>
                <button onClick={next} className="btn-volt">Review order <IconArrowRight className="h-4 w-4" /></button>
              </div>
            </Reveal>
          )}

          {step === 3 && (
            <Reveal>
              <h2 className="font-display text-2xl uppercase">One last look</h2>
              <div className="mt-7 space-y-4">
                {[
                  { label: "Contact", lines: [contact.name, `${contact.phone}${contact.email ? ` · ${contact.email}` : ""}`] },
                  { label: "Delivery", lines: [DELIVERY_LABEL[delivery.method], delivery.address, delivery.note && `Note: ${delivery.note}`] },
                  { label: "Payment", lines: [PAY_LABEL[payment.method], payment.method !== "cod" ? `Debiting: ${payment.phone || contact.phone}` : "Pay the rider on arrival"] },
                ].map((b) => (
                  <div key={b.label} className="border border-bone/10 bg-coal2 p-6">
                    <p className="tag text-bone/50">{b.label}</p>
                    {b.lines.filter(Boolean).map((l, i) => (
                      <p key={i} className={cn(i === 0 ? "mt-2 text-[14px] font-bold" : "text-[13px] text-bone/60")}>{l}</p>
                    ))}
                  </div>
                ))}
              </div>

              <div className="mt-8 flex flex-wrap gap-3.5">
                <button onClick={() => setStep(2)} className="btn-ghost"><IconChevronLeft className="h-4 w-4" /> Back</button>
                <button onClick={submit} className="btn-volt min-w-[230px] flex-1">
                  Place order · {formatUGX(total)}
                </button>
              </div>
              <p className="mt-4 flex items-center gap-2 font-mono text-[11px] text-bone/45">
                <IconShield className="h-4 w-4 text-volt" />
                Nothing is charged until we confirm by call or WhatsApp. No surprises, promise.
              </p>
            </Reveal>
          )}
        </div>

        {/* summary */}
        <aside className="lg:sticky lg:top-28 lg:self-start">
          <div className="border border-bone/10 bg-coal2 p-7">
            <h3 className="font-display text-xl uppercase">
              Your bag <span className="font-mono text-sm text-volt">({cart.reduce((s, i) => s + i.qty, 0)})</span>
            </h3>
            <ul className="mt-5 max-h-[300px] space-y-4 overflow-y-auto pr-1">
              {cart.map((i) => {
                const p = getProduct(i.slug);
                if (!p) return null;
                return (
                  <li key={i.slug + i.size} className="flex gap-3.5">
                    <span className="relative block h-16 w-[52px] shrink-0 overflow-hidden bg-[#d8d8d2]">
                      <img src={p.images[0].src} alt={p.name} className="h-full w-full object-cover" />
                      <span className="absolute right-0 top-0 bg-asphalt px-1 font-mono text-[9px] font-bold text-volt">×{i.qty}</span>
                    </span>
                    <div className="flex flex-1 items-start justify-between gap-2 text-[13px]">
                      <div>
                        <Link to={`/product/${p.slug}`} className="font-bold leading-tight hover:text-volt">{p.name}</Link>
                        <p className="mt-0.5 font-mono text-[10.5px] text-bone/45">SIZE {i.size}</p>
                      </div>
                      <b className="shrink-0 font-mono text-[12px]">{formatUGX(p.price * i.qty)}</b>
                    </div>
                  </li>
                );
              })}
            </ul>
            <div className="mt-6 space-y-1.5 border-t border-bone/10 pt-4 text-[13.5px]">
              <p className="flex justify-between text-bone/60"><span>Subtotal</span><span className="font-mono">{formatUGX(subtotal)}</span></p>
              <p className="flex justify-between text-bone/60">
                <span>Delivery</span>
                <span className={cn("font-mono", deliveryFee === 0 && "font-bold text-volt")}>
                  {delivery.method === "kampala" && subtotal >= FREE_DELIVERY_THRESHOLD
                    ? "FREE (200k+)"
                    : deliveryFee === 0 && delivery.method === "pickup"
                    ? "FREE (pickup)"
                    : formatUGX(deliveryFee)}
                </span>
              </p>
              <p className="flex justify-between border-t border-bone/10 pt-2.5 font-display text-2xl">
                <span>Total</span><span className="text-volt">{formatUGX(total)}</span>
              </p>
            </div>
          </div>
          <p className="mt-4 flex items-start gap-2.5 px-1 font-mono text-[11px] leading-relaxed text-bone/45">
            <IconShield className="mt-0.5 h-4 w-4 shrink-0 text-volt" />
            A human confirms every order on <b>+256 707 548 383</b> or <b>+256 763 813 315</b> before
            any money moves.
          </p>
        </aside>
      </div>
    </main>
  );
}
