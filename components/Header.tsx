"use client";
import Link from "next/link";
import { useCart } from "@/lib/cart";
import { ShoppingBag, Menu, X, Search, Phone } from "lucide-react";
import { useState, useEffect } from "react";
import { img } from "@/lib/config";

export default function Header() {
  const { count, setIsOpen } = useCart();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      {/* Top Bar */}
      <div className="bg-coal text-cream text-[11px] tracking-[0.18em] uppercase py-2.5 px-4 flex justify-between items-center font-mono">
        <div className="hidden md:flex gap-6">
          <span className="flex items-center gap-2"><Phone className="w-3 h-3" /> +256 763 813 315 • 0775 483 83 • +256 707 548 383</span>
          <span className="opacity-60">Kampala, Uganda — Worldwide Shipping</span>
        </div>
        <div className="flex md:hidden gap-2 opacity-80">
          <span>KAMPALA • UG • WORLDWIDE SHIPPING</span>
        </div>
        <div className="hidden md:flex gap-4">
          <span>New Drop: Crane Heritage — Shop Now</span>
        </div>
        <div className="md:hidden">
          <span>+256 707 548383</span>
        </div>
      </div>

      {/* Main Header */}
      <header className={`sticky top-0 z-40 transition-all duration-500 border-b ${scrolled ? "bg-paper/90 backdrop-blur-xl border-sand shadow-[0_8px_30px_rgba(0,0,0,0.04)] py-3" : "bg-paper border-transparent py-5"}`}>
        <div className="max-w-[1600px] mx-auto px-6 md:px-10 flex items-center justify-between">
          {/* Left Nav - Desktop */}
          <nav className="hidden lg:flex items-center gap-8 text-[13px] tracking-[0.14em] uppercase font-medium">
            <Link href="/shop" className="hover:text-gold transition">Shop All</Link>
            <Link href="/shop?cat=Jackets" className="hover:text-gold transition">Jackets</Link>
            <Link href="/shop?cat=Tees" className="hover:text-gold transition">Tees</Link>
            <Link href="/shop?cat=Vintage" className="hover:text-gold transition">Vintage</Link>
          </nav>

          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 bg-coal rounded-full flex items-center justify-center overflow-hidden">
              <img src={img("/images/logo.jpg")} alt="Gayita Logo" className="w-full h-full object-cover" />
            </div>
            <div className="leading-none">
              <div className="font-display text-[22px] tracking-[-0.02em]">gayita</div>
              <div className="text-[9px] tracking-[0.35em] uppercase font-mono -mt-1 opacity-70 group-hover:opacity-100 transition">Collections</div>
            </div>
          </Link>

          {/* Right Actions */}
          <div className="flex items-center gap-5">
            <div className="hidden md:flex items-center gap-6 text-[13px] tracking-[0.14em] uppercase font-medium">
              <Link href="/#story" className="hover:text-gold transition">Our Story</Link>
              <Link href="/#atelier" className="hover:text-gold transition">Atelier</Link>
            </div>
            <button onClick={() => setIsOpen(true)} className="relative p-2.5 bg-coal text-cream rounded-full hover:bg-gold transition-colors group">
              <ShoppingBag className="w-4 h-4" />
              {count > 0 && (
                <span className="absolute -top-1 -right-1 bg-gold text-white text-[10px] w-5 h-5 rounded-full flex items-center justify-center font-bold animate-bump">
                  {count}
                </span>
              )}
            </button>
            <button className="lg:hidden p-2" onClick={() => setMobileOpen(!mobileOpen)}>
              {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileOpen && (
          <div className="lg:hidden absolute top-full left-0 w-full bg-paper border-t border-sand p-8 flex flex-col gap-6 text-[14px] tracking-[0.14em] uppercase font-medium animate-fadeUp">
            <Link href="/shop" onClick={() => setMobileOpen(false)}>Shop All</Link>
            <Link href="/shop?cat=Jackets" onClick={() => setMobileOpen(false)}>Jackets</Link>
            <Link href="/shop?cat=Tees" onClick={() => setMobileOpen(false)}>Tees</Link>
            <Link href="/shop?cat=Vintage" onClick={() => setMobileOpen(false)}>Vintage</Link>
            <Link href="/#story" onClick={() => setMobileOpen(false)}>Our Story</Link>
            <div className="pt-6 border-t border-sand text-[12px] normal-case tracking-normal font-body">
              <p className="font-mono text-[11px] uppercase opacity-60 mb-2">Contact</p>
              <p>0763813315 • 077548383</p>
              <p>+256 707 548383</p>
              <p className="mt-2 opacity-70">Kampala, Uganda</p>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
