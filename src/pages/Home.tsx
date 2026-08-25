import { useState } from "react";
import { Link } from "react-router-dom";
import { dropProducts, heavyHitters, newArrivals } from "../data/products";
import ProductCard from "../components/ProductCard";
import Countdown from "../components/Countdown";
import { MarqueeRow, Reveal, SectionHead, Stars } from "../components/ui";
import {
  IconArrowRight,
  IconArrowUpRight,
  IconBolt,
  IconBrush,
  IconCheck,
  IconCrown,
  IconFlame,
  IconRecycle,
  IconShield,
  IconTruck,
  IconWhatsApp,
} from "../components/icons";
import { CONTACT, waLink } from "../lib/utils";
import heroStreet from "../assets/img/hero-street.jpg";
import colVintage from "../assets/img/col-vintage.jpg";
import colCustom from "../assets/img/col-custom.jpg";
import kickCourt from "../assets/img/kicks/court.jpg";
import pHat from "../assets/img/p-hat.jpg";
import promoClub from "../assets/img/promo-club.jpg";
import promoDrop from "../assets/img/promo-drop.jpg";
import look1 from "../assets/img/look-1.jpg";
import look2 from "../assets/img/look-2.jpg";
import look3 from "../assets/img/look-3.jpg";
import look4 from "../assets/img/look-4.jpg";

const CATEGORIES = [
  {
    to: "/shop?cat=vintage",
    img: colVintage,
    tag: "The Archive",
    title: "Vintage",
    sub: "Rescued 80s–90s heat",
  },
  {
    to: "/shop?cat=custom",
    img: colCustom,
    tag: "The Studio",
    title: "Custom Art",
    sub: "Hand-painted 1-of-1s",
  },
  {
    to: "/shop?cat=kicks",
    img: kickCourt,
    tag: "Friday 8PM",
    title: "Kicks",
    sub: "Authenticated pairs",
  },
  {
    to: "/shop?cat=accessories",
    img: pHat,
    tag: "Finishing Touches",
    title: "Accessories",
    sub: "Hats & totes",
  },
];

const TESTIMONIALS = [
  {
    quote: "People stop me on the street to ask where I got my Kampala Nights hoodie. The painting is even more detailed in real life. Proudly Ugandan.",
    name: "Daniel Ssebunya",
    handle: "@dan.ssebu",
    role: "Collector · Kololo",
  },
  {
    quote: "Fastest WhatsApp service in the city. Ordered at lunch, wearing the vintage denim jacket by dinner. Gayita just gets it.",
    name: "Nakato Sarah",
    handle: "@nakato.s",
    role: "Vintage lover · Ntinda",
  },
  {
    quote: "I've bought custom jackets from London before. Ancestral Lines is better — and it's numbered 1 of 1.",
    name: "Ssemakula David",
    handle: "@ssema.d",
    role: "Art collector · Muyenga",
  },
  {
    quote: "The drops, the quality, the vibes. This brand understands Kampala street culture better than imports do.",
    name: "Patricia Kiconco",
    handle: "@patricia.k",
    role: "Stylist · Bugolobi",
  },
];

const LOOKS = [
  { img: look1, label: "LOOK 01 — Static energy", to: "/shop?cat=custom" },
  { img: look2, label: "LOOK 02 — Archive denim", to: "/shop?cat=vintage" },
  { img: look3, label: "LOOK 03 — Cardinal lows", to: "/shop?cat=kicks" },
  { img: look4, label: "LOOK 04 — Squad uniform", to: "/shop" },
];

export default function Home() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  return (
    <main className="bg-asphalt">
      {/* ============ HERO ============ */}
      <section className="relative overflow-hidden border-b border-bone/10">
        <div className="grid-tex absolute inset-0" aria-hidden />
        <div className="relative mx-auto grid max-w-7xl items-center gap-10 px-4 pb-20 pt-14 sm:pt-20 lg:grid-cols-2">
          <div>
            <Reveal>
              <p className="tag flex items-center gap-2 text-volt">
                <IconBolt className="h-3.5 w-3.5" /> Kampala · Est. 2021 · Wearable Art
              </p>
            </Reveal>
            <Reveal delay={100}>
              <h1 className="mt-5 font-display text-[15vw] uppercase leading-[0.9] sm:text-7xl lg:text-[5.6rem]">
                Built<br />
                <span className="text-volt">Different.</span><br />
                <span className="text-stroke-volt">Own the</span>{" "}
                <span className="relative inline-block text-bone">
                  Streets<span className="absolute -right-3 -top-1 text-danger">.</span>
                </span>
              </h1>
            </Reveal>
            <Reveal delay={200}>
              <p className="mt-6 max-w-md text-[15px] leading-relaxed text-bone/60">
                Vintage apparel with a past. One-of-one streetwear painted by hand. Friday kicks
                that vanish by 9PM. Gayita Collections — for those who set their own rules.
              </p>
            </Reveal>
            <Reveal delay={300} className="mt-9 flex flex-wrap gap-4">
              <Link to="/shop" className="btn-volt">
                Shop New Arrivals <IconArrowRight className="h-4 w-4" />
              </Link>
              <Link to="/shop?drop=1" className="btn-ghost">
                <IconFlame className="h-4 w-4" /> Explore the Drop
              </Link>
            </Reveal>
            <Reveal delay={400} className="mt-12 flex flex-wrap items-center gap-x-8 gap-y-4 border-t border-bone/10 pt-6">
              {[
                { n: "4.9★", l: "40+ collectors" },
                { n: "900+", l: "pieces rehomed" },
                { n: "250+", l: "artworks painted" },
                { n: "8PM", l: "Friday drops" },
              ].map((s) => (
                <div key={s.l}>
                  <p className="font-display text-2xl text-volt">{s.n}</p>
                  <p className="tag mt-1 text-bone/45">{s.l}</p>
                </div>
              ))}
            </Reveal>
          </div>

          <Reveal delay={200} className="relative">
            <div className="relative rotate-1 border border-bone/15 bg-coal2 p-2 shadow-[14px_14px_0_rgba(200,255,22,0.14)]">
              <img
                src={heroStreet}
                alt="Street culture — Gayita Collections hero"
                className="aspect-[4/3] w-full object-cover sm:aspect-[5/4]"
              />
              <div className="absolute left-0 top-8 -translate-x-1 -rotate-90">
                <span className="tag bg-danger px-3 py-1.5 text-bone">SS26 — District Drop</span>
              </div>
            </div>
            {/* floating product sticker */}
            <Link
              to="/product/blaze-low-cardinal"
              className="absolute -bottom-8 left-4 flex animate-floaty items-center gap-3 border border-bone/15 bg-asphalt p-2.5 pr-5 shadow-2xl transition-colors hover:border-volt sm:left-8"
            >
              <img src={kickCourt} alt="Court High sneakers" className="h-16 w-20 bg-[#d8d8d2] object-cover" />
              <span>
                <span className="tag block text-danger">Drops Friday</span>
                <span className="font-display text-sm uppercase tracking-wide">Court High</span>
                <span className="block font-mono text-xs font-bold text-volt">UGX 320,000</span>
              </span>
            </Link>
            <span className="absolute -right-2 -top-2 flex h-20 w-20 animate-spin-slow items-center justify-center rounded-full border border-volt/50 bg-asphalt font-mono text-[8px] font-bold uppercase tracking-[0.3em] text-volt [animation-duration:14s] sm:h-24 sm:w-24">
              ● Own the streets ●
            </span>
          </Reveal>
        </div>
      </section>

      {/* ============ TRUST BAR ============ */}
      <section className="border-b border-bone/10 bg-coal2">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-px px-4 py-6 sm:gap-8 lg:grid-cols-4">
          {[
            { icon: <IconTruck className="h-5 w-5" />, t: "Free delivery", s: "Kampala orders over 200k" },
            { icon: <IconShield className="h-5 w-5" />, t: "Secure payment", s: "MTN MoMo · Airtel · Cash" },
            { icon: <IconBrush className="h-5 w-5" />, t: "Hand-drawn art", s: "Signed by the artist" },
            { icon: <IconBolt className="h-5 w-5" />, t: "24hr support", s: CONTACT.phones[0].display },
          ].map((item) => (
            <div key={item.t} className="flex items-center gap-3.5 px-2 py-2">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center border border-volt/40 text-volt">
                {item.icon}
              </span>
              <div>
                <p className="text-[13px] font-extrabold uppercase tracking-wider">{item.t}</p>
                <p className="font-mono text-[10.5px] text-bone/45">{item.s}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ============ CATEGORIES ============ */}
      <section className="mx-auto max-w-7xl px-4 py-20 sm:py-24">
        <div className="flex flex-wrap items-end justify-between gap-5">
          <SectionHead
            kicker="Shop by category"
            title={<>Pick your<br />poison</>}
          />
          <Reveal>
            <Link to="/shop" className="group flex items-center gap-2 font-mono text-[11px] font-bold uppercase tracking-[0.22em] text-bone/60 hover:text-volt">
              View everything <IconArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
            </Link>
          </Reveal>
        </div>
        <div className="mt-10 grid grid-cols-2 gap-4 lg:grid-cols-4">
          {CATEGORIES.map((c, i) => (
            <Reveal key={c.title} delay={i * 90}>
              <Link
                to={c.to}
                className="group relative block h-[280px] overflow-hidden border border-bone/10 sm:h-[360px]"
              >
                <img
                  src={c.img}
                  alt={c.title}
                  loading="lazy"
                  className="h-full w-full object-cover opacity-75 transition-all duration-700 group-hover:scale-105 group-hover:opacity-95"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-asphalt via-asphalt/30 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-5">
                  <p className="tag text-volt">{c.tag}</p>
                  <h3 className="mt-1.5 font-display text-2xl uppercase sm:text-3xl">{c.title}</h3>
                  <p className="mt-1 font-mono text-[10.5px] text-bone/55">{c.sub}</p>
                  <p className="mt-3 flex items-center gap-2 font-mono text-[10px] font-bold uppercase tracking-[0.22em] text-volt opacity-0 transition-all duration-300 group-hover:opacity-100">
                    Shop now <IconArrowRight className="h-3.5 w-3.5" />
                  </p>
                </div>
                <span className="absolute right-0 top-0 h-1.5 w-10 bg-volt transition-all duration-300 group-hover:w-full" />
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ============ FEATURED DROP + COUNTDOWN ============ */}
      <section id="drops" className="relative overflow-hidden border-y border-bone/10 bg-coal2">
        <div className="h-2 hazard-red" />
        <div className="mx-auto max-w-7xl px-4 py-16 sm:py-20">
          <div className="grid items-center gap-10 lg:grid-cols-[1fr_auto]">
            <SectionHead
              kicker="Featured drops"
              title={
                <>
                  Friday Kicks.
                  <br />
                  <span className="text-danger">Blink & miss.</span>
                </>
              }
              sub="Authenticated pairs. Tiny quantities. The drop opens Friday 8PM EAT and the WhatsApp list eats first. Join before the timer dies."
            />
            <Reveal className="lg:justify-self-end">
              <div className="border border-bone/15 bg-asphalt p-5 sm:p-7">
                <p className="tag mb-4 flex items-center gap-2 text-danger">
                  <span className="h-2 w-2 animate-flash rounded-full bg-danger" /> Next drop in
                </p>
                <Countdown />
                <Link to="/shop?drop=1" className="btn-danger mt-5 w-full">
                  <IconFlame className="h-4 w-4" /> Enter the drop zone
                </Link>
              </div>
            </Reveal>
          </div>
          <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-3">
            {dropProducts.map((p, i) => (
              <Reveal key={p.slug} delay={i * 100}>
                <ProductCard product={p} index={i} />
              </Reveal>
            ))}
          </div>
        </div>
        <div className="h-2 hazard-red" />
      </section>

      {/* ============ MEMBERS BANNER ============ */}
      <section className="relative overflow-hidden">
        <img src={promoClub} alt="Gayita Collections members club" className="absolute inset-0 h-full w-full object-cover opacity-40" />
        <div className="absolute inset-0 bg-gradient-to-r from-asphalt via-asphalt/85 to-asphalt/40" />
        <div className="relative mx-auto grid max-w-7xl gap-10 px-4 py-20 sm:py-28 lg:grid-cols-2">
          <Reveal>
            <p className="tag text-volt">Limited edition. Unlimited flex.</p>
            <h2 className="mt-4 font-display text-5xl uppercase leading-[0.95] sm:text-6xl">
              Join the<br />
              <span className="text-volt">GC Club</span>
            </h2>
            <p className="mt-5 max-w-md text-[14.5px] leading-relaxed text-bone/60">
              Exclusive pieces. Early links. Once they're gone, they're gone forever — members saw
              them 15 minutes before you did.
            </p>
          </Reveal>
          <Reveal delay={150} className="flex items-center lg:justify-end">
            <div className="w-full max-w-sm border border-volt/40 bg-asphalt/90 p-7 backdrop-blur">
              <p className="tag flex items-center gap-2 text-volt"><IconCrown className="h-4 w-4" /> Members get</p>
              <ul className="mt-4 space-y-3 text-[14px] text-bone/75">
                <li className="flex gap-2.5"><IconCheck className="h-4 w-4 shrink-0 text-volt" /> 10% off your first order</li>
                <li className="flex gap-2.5"><IconCheck className="h-4 w-4 shrink-0 text-volt" /> Early access to every drop</li>
                <li className="flex gap-2.5"><IconCheck className="h-4 w-4 shrink-0 text-volt" /> First dibs on 1 of 1 commissions</li>
              </ul>
              {subscribed ? (
                <p className="mt-6 border border-volt/50 bg-volt/10 px-4 py-3 text-[13px] font-bold text-volt">
                  ⚡ You're in. Watch your inbox — Friday's list is loading.
                </p>
              ) : (
                <form
                  className="mt-6 flex gap-2"
                  onSubmit={(e) => {
                    e.preventDefault();
                    if (/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) setSubscribed(true);
                  }}
                >
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="your@email.com"
                    className="field flex-1 !py-3 text-[13px]"
                  />
                  <button type="submit" className="btn-volt shrink-0 !px-4">Join</button>
                </form>
              )}
            </div>
          </Reveal>
        </div>
      </section>

      {/* ============ NEW ARRIVALS ============ */}
      <section className="mx-auto max-w-7xl px-4 py-20 sm:py-24">
        <div className="flex flex-wrap items-end justify-between gap-5">
          <SectionHead kicker="Fresh off the rack" title={<>New<br />arrivals</>} />
          <Reveal>
            <Link to="/shop?sort=newest" className="group flex items-center gap-2 font-mono text-[11px] font-bold uppercase tracking-[0.22em] text-bone/60 hover:text-volt">
              View all <IconArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </Reveal>
        </div>
        <div className="mt-10 grid grid-cols-2 gap-x-5 gap-y-10 md:grid-cols-3 lg:grid-cols-6">
          {newArrivals.map((p, i) => (
            <Reveal key={p.slug} delay={(i % 6) * 70}>
              <ProductCard product={p} index={i} />
            </Reveal>
          ))}
        </div>
      </section>

      {/* ============ DUAL PROMOS ============ */}
      <section className="mx-auto grid max-w-7xl gap-4 px-4 pb-20 lg:grid-cols-2">
        {[
          {
            img: promoClub,
            kicker: "Join the movement",
            title: "BE PART OF\nSOMETHING REAL.",
            cta: "Our story",
            to: "/about",
            dark: false,
          },
          {
            img: promoDrop,
            kicker: "Limited drop",
            title: "EXCLUSIVE STYLES.\nLIMITED QUANTITIES.",
            cta: "Shop the drop",
            to: "/shop?drop=1",
            dark: true,
          },
        ].map((p, i) => (
          <Reveal key={p.title} delay={i * 120}>
            <Link to={p.to} className="group relative block h-[300px] overflow-hidden border border-bone/10 sm:h-[340px]">
              <img src={p.img} alt="" loading="lazy" className="absolute inset-0 h-full w-full object-cover opacity-60 transition-transform duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-r from-asphalt/95 via-asphalt/60 to-transparent" />
              <div className="relative flex h-full flex-col justify-center p-8 sm:p-10">
                <p className="tag text-volt">{p.kicker}</p>
                <h3 className="mt-3 whitespace-pre-line font-display text-4xl uppercase leading-[0.95] sm:text-[2.6rem]">
                  {p.title}
                </h3>
                <span className="btn-ghost mt-6 w-max group-hover:border-volt group-hover:text-volt">
                  {p.cta} <IconArrowRight className="h-4 w-4" />
                </span>
              </div>
            </Link>
          </Reveal>
        ))}
      </section>

      {/* ============ HEAVY HITTERS ============ */}
      <section className="border-y border-bone/10 bg-coal2 py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4">
          <div className="flex flex-wrap items-end justify-between gap-5">
            <SectionHead kicker="Certified heat" title={<>Heavy<br />hitters</>} sub="The pieces collectors reorder, restyle and refuse to lend out." />
            <Reveal>
              <Link to="/shop" className="btn-ghost">Browse all <IconArrowRight className="h-4 w-4" /></Link>
            </Reveal>
          </div>
          <div className="mt-10 grid grid-cols-2 gap-x-5 gap-y-10 lg:grid-cols-4">
            {heavyHitters.map((p, i) => (
              <Reveal key={p.slug} delay={i * 80}>
                <ProductCard product={p} index={i} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ============ TESTIMONIALS ============ */}
      <section className="mx-auto max-w-7xl px-4 py-20 sm:py-24">
        <SectionHead center kicker="Trusted by the culture" title="Word on the street" />
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {TESTIMONIALS.map((t, i) => (
            <Reveal key={t.handle} delay={i * 90}>
              <figure className="hover-lift flex h-full flex-col border border-bone/10 bg-coal2 p-6">
                <Stars value={5} starClass="w-3.5 h-3.5" />
                <blockquote className="mt-4 flex-1 text-[13.5px] leading-relaxed text-bone/70">
                  “{t.quote}”
                </blockquote>
                <figcaption className="mt-5 border-t border-bone/10 pt-4">
                  <p className="text-[13px] font-extrabold">{t.name}</p>
                  <p className="font-mono text-[11px] text-volt">{t.handle}</p>
                  <p className="mt-0.5 font-mono text-[10px] text-bone/40">{t.role}</p>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ============ VALUES ============ */}
      <section className="border-t border-bone/10 bg-coal2">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 py-16 sm:grid-cols-3">
          {[
            { icon: <IconShield className="h-6 w-6" />, t: "Authentic only", s: "Every vintage piece verified, cleaned & measured. No fakes. Ever." },
            { icon: <IconRecycle className="h-6 w-6" />, t: "Community first", s: "Built by Kampala artists & collectors, for everyone who refuses ordinary." },
            { icon: <IconFlame className="h-6 w-6" />, t: "Always evolving", s: "New drops. New looks. New energy. Every single Friday, 8PM." },
          ].map((v, i) => (
            <Reveal key={v.t} delay={i * 100} className="flex gap-4">
              <span className="flex h-12 w-12 shrink-0 items-center justify-center border border-volt/40 text-volt">
                {v.icon}
              </span>
              <div>
                <h3 className="font-display text-xl uppercase tracking-wide">{v.t}</h3>
                <p className="mt-1.5 text-[13px] leading-relaxed text-bone/55">{v.s}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ============ LOOKBOOK ============ */}
      <section className="py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4">
          <div className="flex flex-wrap items-end justify-between gap-5">
            <SectionHead kicker="Lookbook SS26" title={<>Shop<br />the looks</>} />
            <p className="tag text-bone/40">Scroll →</p>
          </div>
        </div>
        <div className="no-scrollbar mt-10 flex snap-x snap-mandatory gap-4 overflow-x-auto px-4 pb-4 lg:px-[max(1rem,calc((100vw-80rem)/2+1rem))]">
          {LOOKS.map((l, i) => (
            <Link
              key={l.label}
              to={l.to}
              className="group relative w-[75vw] shrink-0 snap-start overflow-hidden border border-bone/10 sm:w-[380px]"
            >
              <img src={l.img} alt={l.label} loading="lazy" className="aspect-[3/4] w-full object-cover transition-transform duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-asphalt/85 via-transparent to-transparent" />
              <p className="absolute bottom-4 left-4 font-mono text-[11px] font-bold uppercase tracking-[0.2em] text-bone">
                <span className="mr-2 text-volt">0{i + 1}</span>{l.label.split("— ")[1]}
              </p>
              <span className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center border border-bone/30 bg-asphalt/60 text-bone opacity-0 backdrop-blur transition-opacity group-hover:opacity-100">
                <IconArrowUpRight className="h-4 w-4" />
              </span>
            </Link>
          ))}
        </div>
      </section>

      {/* ============ GIANT MARQUEE ============ */}
      <div className="overflow-hidden border-y border-bone/10 py-6">
        <MarqueeRow
          reverse
          items={["GAYITA COLLECTIONS", "OWN THE STREETS", "1 OF 1 ONLY", "MADE IN KAMPALA"]}
          separator="✕"
          className="font-display text-6xl uppercase text-stroke sm:text-8xl"
        />
      </div>

      {/* ============ NEWSLETTER ============ */}
      <section className="mx-auto max-w-7xl px-4 py-20 sm:py-24">
        <div className="relative overflow-hidden border border-bone/10 bg-coal2">
          <div className="grid-tex absolute inset-0" aria-hidden />
          <div className="relative grid gap-10 p-8 sm:p-14 lg:grid-cols-2">
            <Reveal>
              <p className="tag text-volt">Stay in the loop</p>
              <h2 className="mt-3 font-display text-4xl uppercase leading-[0.95] sm:text-5xl">
                New drops.<br />Culture delivered.
              </h2>
            </Reveal>
            <Reveal delay={120} className="flex flex-col justify-center">
              {subscribed ? (
                <p className="border border-volt/50 bg-volt/10 px-5 py-4 text-[14px] font-bold text-volt">
                  ⚡ You're on the list. Friday 8PM — don't be late.
                </p>
              ) : (
                <form
                  className="flex flex-col gap-3 sm:flex-row"
                  onSubmit={(e) => {
                    e.preventDefault();
                    if (/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) setSubscribed(true);
                  }}
                >
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email address"
                    className="field flex-1"
                  />
                  <button type="submit" className="btn-volt shrink-0">Subscribe</button>
                </form>
              )}
              <p className="mt-3 font-mono text-[10.5px] uppercase tracking-wider text-bone/35">
                One email a week. Zero spam. Unsubscribe anytime.
              </p>
              <a
                href={waLink("Hello Gayita Collections! Add me to the drop list 🙏")}
                target="_blank"
                rel="noreferrer"
                className="btn-ghost mt-5 w-max"
              >
                <IconWhatsApp className="h-4 w-4" /> Or join via WhatsApp
              </a>
            </Reveal>
          </div>
        </div>
      </section>
    </main>
  );
}
