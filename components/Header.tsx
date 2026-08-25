"use client";

/* The supplied logo is kept as a JPG so its original artwork is not altered. */
/* eslint-disable @next/next/no-img-element */

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, MessageCircle, ShoppingBag, X } from "lucide-react";
import { useEffect, useState } from "react";
import { img } from "@/lib/config";
import { useCart } from "@/lib/cart";

const primaryPhone = "256763813315";

export default function Header() {
  const pathname = usePathname();
  const { count, setIsOpen } = useCart();
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const closeMenu = () => setMenuOpen(false);
  const isShop = pathname?.startsWith("/shop") || pathname?.startsWith("/product");

  return (
    <>
      <div className="bg-[#171412] px-4 py-2 text-[#fffdf8]">
        <div className="mx-auto flex max-w-[1440px] items-center justify-between gap-4">
          <p className="eyebrow hidden opacity-75 sm:block">Kabalagala studio · Kampala, Uganda</p>
          <p className="eyebrow text-[10px]">Hand-drawn art · vintage garments · one-of-one</p>
          <a
            href={`https://wa.me/${primaryPhone}`}
            target="_blank"
            rel="noreferrer"
            className="eyebrow hidden shrink-0 text-[#d6e476] transition hover:text-white sm:block"
          >
            WhatsApp · 0763813315
          </a>
        </div>
      </div>

      <header className={`sticky top-0 z-50 border-b transition-all duration-300 ${scrolled ? "border-black/10 bg-[#f6f1e8]/95 py-3 backdrop-blur-xl" : "border-black/5 bg-[#f6f1e8] py-5"}`}>
        <div className="mx-auto flex max-w-[1440px] items-center justify-between gap-5 px-5 md:px-8">
          <Link href="/" className="group flex min-w-0 items-center gap-3" onClick={closeMenu} aria-label="Gayita Collections home">
            <span className="flex h-11 w-[70px] shrink-0 items-center justify-center overflow-hidden rounded-[3px] bg-[#171412] p-1">
              <img src={img("/images/logo.jpg")} alt="Gayita Collections" className="h-full w-full object-cover object-center transition duration-500 group-hover:scale-105" />
            </span>
            <span className="hidden leading-none sm:block">
              <span className="font-display text-[26px] tracking-[-0.03em]">gayita</span>
              <span className="mt-1 block font-mono text-[8px] uppercase tracking-[0.22em] opacity-60">Collections / Kampala</span>
            </span>
          </Link>

          <nav className="hidden items-center gap-8 lg:flex" aria-label="Primary navigation">
            <Link href="/" className="group relative font-mono text-[11px] uppercase tracking-[0.16em]">
              Home
              <span className={`absolute -bottom-2 left-0 h-px bg-[#b86f48] transition-all ${pathname === "/" ? "w-full" : "w-0 group-hover:w-full"}`} />
            </Link>
            <Link href="/shop" className="group relative font-mono text-[11px] uppercase tracking-[0.16em]">
              Shop the edit
              <span className={`absolute -bottom-2 left-0 h-px bg-[#b86f48] transition-all ${isShop ? "w-full" : "w-0 group-hover:w-full"}`} />
            </Link>
            <Link href="/#custom" className="group relative font-mono text-[11px] uppercase tracking-[0.16em]">
              Custom work
              <span className="absolute -bottom-2 left-0 h-px w-0 bg-[#b86f48] transition-all group-hover:w-full" />
            </Link>
          </nav>

          <div className="flex shrink-0 items-center gap-2 sm:gap-3">
            <a
              href={`https://wa.me/${primaryPhone}`}
              target="_blank"
              rel="noreferrer"
              className="hidden items-center gap-2 rounded-full border border-black/15 px-4 py-2.5 font-mono text-[10px] uppercase tracking-[0.14em] transition hover:border-[#171412] hover:bg-[#171412] hover:text-[#fffdf8] md:flex"
            >
              <MessageCircle className="h-3.5 w-3.5" /> Talk to the studio
            </a>
            <button
              type="button"
              onClick={() => setIsOpen(true)}
              className="relative flex h-11 w-11 items-center justify-center rounded-full bg-[#171412] text-[#fffdf8] transition hover:bg-[#b86f48]"
              aria-label={`Open cart${count ? `, ${count} item${count === 1 ? "" : "s"}` : ""}`}
            >
              <ShoppingBag className="h-4 w-4" />
              {count > 0 && <span className="absolute -right-1 -top-1 flex h-5 min-w-5 items-center justify-center rounded-full bg-[#d6e476] px-1 font-mono text-[10px] font-bold text-[#171412]">{count}</span>}
            </button>
            <button type="button" onClick={() => setMenuOpen((open) => !open)} className="flex h-11 w-11 items-center justify-center rounded-full border border-black/15 lg:hidden" aria-label={menuOpen ? "Close menu" : "Open menu"} aria-expanded={menuOpen}>
              {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        {menuOpen && (
          <div className="absolute left-0 top-full w-full border-b border-black/10 bg-[#f6f1e8] px-5 py-7 shadow-lg lg:hidden">
            <nav className="flex flex-col gap-5" aria-label="Mobile navigation">
              <Link href="/" onClick={closeMenu} className="font-display text-3xl">Home</Link>
              <Link href="/shop" onClick={closeMenu} className="font-display text-3xl">Shop the edit</Link>
              <Link href="/#custom" onClick={closeMenu} className="font-display text-3xl">Custom work</Link>
            </nav>
            <div className="mt-7 border-t border-black/10 pt-5">
              <p className="eyebrow opacity-60">Studio line</p>
              <div className="mt-2 flex flex-wrap gap-x-4 gap-y-2 font-mono text-sm">
                <a href="tel:0763813315">0763813315</a>
                <a href="tel:077548383">077548383</a>
                <a href="tel:+256707548383">+256 707 548383</a>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
