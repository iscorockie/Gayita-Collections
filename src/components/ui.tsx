import React, { useEffect, useRef, useState } from "react";
import { cn } from "../lib/utils";
import { IconStar } from "./icons";

/* ---------- Reveal on scroll ---------- */
export function Reveal({
  children,
  delay = 0,
  className,
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          obs.disconnect();
        }
      },
      { threshold: 0.1, rootMargin: "0px 0px -40px 0px" }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <div ref={ref} style={{ transitionDelay: `${delay}ms` }} className={cn("reveal", visible && "is-visible", className)}>
      {children}
    </div>
  );
}

/* ---------- Stars (fractional display or interactive) ---------- */
export function Stars({
  value,
  className,
  starClass = "w-4 h-4",
  interactive = false,
  onRate,
}: {
  value: number;
  className?: string;
  starClass?: string;
  interactive?: boolean;
  onRate?: (v: number) => void;
}) {
  const [hover, setHover] = useState(0);
  const pct = Math.max(0, Math.min(100, ((interactive && hover ? hover : value) / 5) * 100));

  const row = (tone: string) => (
    <div className={cn("flex gap-0.5", tone)}>
      {[1, 2, 3, 4, 5].map((i) =>
        interactive ? (
          <button
            key={i}
            type="button"
            aria-label={`Rate ${i} star${i > 1 ? "s" : ""}`}
            className="star-btn"
            onMouseEnter={() => setHover(i)}
            onMouseLeave={() => setHover(0)}
            onClick={() => onRate?.(i)}
          >
            <IconStar className={starClass} />
          </button>
        ) : (
          <IconStar key={i} className={starClass} />
        )
      )}
    </div>
  );

  return (
    <div className={cn("relative inline-flex", className)} aria-label={`Rated ${value} of 5`}>
      {row("text-bone/15")}
      <div className="absolute inset-0 overflow-hidden" style={{ width: `${pct}%` }} aria-hidden>
        {row("text-volt")}
      </div>
    </div>
  );
}

/* ---------- Marquee ---------- */
export function MarqueeRow({
  items,
  className,
  reverse = false,
  slow = false,
  separator = "✦",
}: {
  items: string[];
  className?: string;
  reverse?: boolean;
  slow?: boolean;
  separator?: string;
}) {
  const anim = reverse ? "animate-marqueeRev" : slow ? "animate-marquee-slow" : "animate-marquee";
  return (
    <div className={cn("overflow-hidden", className)}>
      <div className={cn("flex w-max gap-8", anim)}>
        {[0, 1].map((copy) => (
          <div key={copy} className="flex shrink-0 items-center gap-8" aria-hidden={copy === 1}>
            {items.map((it, i) => (
              <span key={copy + "-" + i} className="flex shrink-0 items-center gap-8 whitespace-nowrap">
                {it} <span className="opacity-40">{separator}</span>
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

/* ---------- Badge ---------- */
export function Badge({
  children,
  tone = "bone",
}: {
  children: React.ReactNode;
  tone?: "volt" | "danger" | "bone" | "outline" | "dark";
}) {
  const tones = {
    volt: "bg-volt text-asphalt",
    danger: "bg-danger text-bone",
    bone: "bg-bone text-asphalt",
    outline: "border border-bone/40 bg-asphalt/70 text-bone backdrop-blur-sm",
    dark: "bg-asphalt text-bone",
  } as const;
  return (
    <span className={cn("tag inline-block px-2.5 py-1.5", tones[tone])}>
      {children}
    </span>
  );
}

/* ---------- Price ---------- */
export function Price({
  price,
  compareAt,
  className,
  big,
  light,
}: {
  price: number;
  compareAt?: number;
  className?: string;
  big?: boolean;
  light?: boolean;
}) {
  return (
    <span className={cn("flex flex-wrap items-baseline gap-x-2 gap-y-0.5", className)}>
      <span
        className={cn(
          "font-extrabold tracking-tight",
          big ? "font-display text-3xl sm:text-4xl" : "text-[15px]",
          light ? "text-asphalt" : "text-bone"
        )}
      >
        UGX {price.toLocaleString("en-US")}
      </span>
      {compareAt && compareAt > price && (
        <>
          <span className={cn("text-[13px] line-through", light ? "text-asphalt/50" : "text-bone/40")}>
            UGX {compareAt.toLocaleString("en-US")}
          </span>
          <span className="text-[11px] font-bold text-danger">
            −{Math.round((1 - price / compareAt) * 100)}%
          </span>
        </>
      )}
    </span>
  );
}

/* ---------- Quantity stepper ---------- */
export function QtyStepper({
  qty,
  onChange,
  small,
}: {
  qty: number;
  onChange: (q: number) => void;
  small?: boolean;
}) {
  const btn = cn(
    "flex items-center justify-center border border-bone/25 text-bone/80 transition-colors hover:border-volt hover:text-volt",
    small ? "w-7 h-7" : "w-10 h-10"
  );
  return (
    <div className="inline-flex items-center">
      <button type="button" className={btn} onClick={() => onChange(qty - 1)} aria-label="Decrease">−</button>
      <span className={cn("flex items-center justify-center font-mono font-bold tabular-nums", small ? "w-9 h-7 text-sm" : "w-12 h-10")}>
        {qty}
      </span>
      <button type="button" className={btn} onClick={() => onChange(qty + 1)} aria-label="Increase">+</button>
    </div>
  );
}

/* ---------- Accordion ---------- */
export function Accordion({
  title,
  children,
  defaultOpen,
}: {
  title: string;
  children: React.ReactNode;
  defaultOpen?: boolean;
}) {
  const [open, setOpen] = useState(!!defaultOpen);
  return (
    <div className="border-b border-bone/10">
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        className="flex w-full items-center justify-between py-4 text-left"
        aria-expanded={open}
      >
        <span className="tag text-bone/80">{title}</span>
        <span className={cn("text-xl leading-none text-volt transition-transform duration-300", open && "rotate-45")}>+</span>
      </button>
      <div className={cn("acc-body", open && "open")}>
        <div className="acc-inner">
          <div className="pb-5 text-[14px] leading-relaxed text-bone/60">{children}</div>
        </div>
      </div>
    </div>
  );
}

/* ---------- Section heading ---------- */
export function SectionHead({
  kicker,
  title,
  sub,
  center,
}: {
  kicker: string;
  title: React.ReactNode;
  sub?: string;
  center?: boolean;
}) {
  return (
    <Reveal className={cn("max-w-2xl", center && "mx-auto text-center")}>
      <p className="tag text-volt">
        <span className="text-danger mr-2">/</span>
        {kicker}
      </p>
      <h2 className="mt-3 font-display text-4xl sm:text-5xl uppercase leading-[0.98] text-bone">
        {title}
      </h2>
      {sub && <p className="mt-4 text-[14.5px] leading-relaxed text-bone/55">{sub}</p>}
    </Reveal>
  );
}
