"use client";
import Link from "next/link";
import { useCart } from "@/lib/cart";
import { ShoppingBag, Menu, X, Paintbrush } from "lucide-react";
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
      {/* Top Paint Banner */}
      <div className="bg-[#111] text-[#faf6ee] text-[11px] tracking-[0.22em] uppercase py-2.5 px-4 flex justify-between items-center font-mono border-b border-white/10">
        <div className="hidden md:flex items-center gap-3">
          <Paintbrush className="w-3.5 h-3.5" />
          <span>PAINTED DIRECT • NO PRINTS • 1 OF 1 ONLY • NO COPIES EVER</span>
          <span className="opacity-30">—</span>
          <span className="opacity-60">KABALAGALA STUDIO • KAMPALA</span>
        </div>
        <div className="flex md:hidden gap-2">
          <span>1 OF 1 • HAND-PAINTED • NO COPIES</span>
        </div>
        <div className="flex items-center gap-4">
          <a href="https://wa.me/256763813315" target="_blank" className="hover:text-white transition underline decoration-dotted">WHATSAPP: 0763813315</a>
          <span className="hidden md:inline opacity-50">+256 707 548383</span>
        </div>
      </div>

      {/* Main Header */}
      <header className={`sticky top-0 z-40 transition-all duration-300 border-b ${scrolled ? "bg-[#faf6ee]/95 backdrop-blur-xl border-black/10 py-3" : "bg-[#faf6ee] border-black/5 py-5"}`}>
        <div className="max-w-[1600px] mx-auto px-6 md:px-10 flex items-center justify-between">
          {/* Left */}
          <nav className="hidden lg:flex items-center gap-8 text-[12px] tracking-[0.18em] uppercase font-mono">
            <Link href="/shop" className="relative group">Shop 1 of 1s <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-black group-hover:w-full transition-all" /></Link>
            <Link href="/#process" className="relative group">How We Paint <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-black group-hover:w-full transition-all" /></Link>
            <span className="px-2 py-1 border border-black rounded-full text-[10px]">NO PRINTS</span>
          </nav>

          {/* Logo Center */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 bg-black rounded-full flex items-center justify-center overflow-hidden relative">
              <img src={img("/images/logo.jpg")} alt="Gayita Logo" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition" />
            </div>
            <div className="leading-none">
              <div className="font-display text-[24px] tracking-[-0.02em] font-bold">gayita</div>
              <div className="text-[9px] tracking-[0.32em] uppercase font-mono -mt-1 opacity-60 group-hover:opacity-100 transition">Collections • 1 OF 1</div>
            </div>
          </Link>

          {/* Right */}
          <div className="flex items-center gap-4">
            <div className="hidden md:flex items-center gap-3 text-[11px] font-mono">
              <span className="opacity-60">12 PIECES ONLY • EACH UNIQUE</span>
            </div>
            <a href="https://wa.me/256707548383" target="_blank" className="hidden md:flex px-4 py-2 bg-[#25D366] text-white rounded-full text-[11px] tracking-widest uppercase font-mono hover:bg-black transition items-center gap-2">
              WhatsApp
            </a>
            <button onClick={() => setIsOpen(true)} className="relative p-2.5 bg-black text-white rounded-full hover:bg-[#222] transition-colors group">
              <ShoppingBag className="w-4 h-4" />
              {count > 0 && (
                <span className="absolute -top-1 -right-1 bg-[#ff3b30] text-white text-[10px] w-5 h-5 rounded-full flex items-center justify-center font-bold">
                  {count}
                </span>
              )}
            </button>
            <button className="lg:hidden p-2" onClick={() => setMobileOpen(!mobileOpen)}>
              {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile */}
        {mobileOpen && (
          <div className="lg:hidden absolute top-full left-0 w-full bg-[#faf6ee] border-t border-black/10 p-8 flex flex-col gap-6 text-[13px] tracking-[0.16em] uppercase font-mono animate-fadeUp">
            <Link href="/shop" onClick={() => setMobileOpen(false)} className="text-[18px] font-display normal-case tracking-normal">Shop All 1 of 1s</Link>
            <Link href="/#process" onClick={() => setMobileOpen(false)}>How We Paint — No Prints</Link>
            <div className="pt-6 border-t border-black/10 text-[12px] normal-case tracking-normal font-body space-y-2">
              <p className="font-mono text-[11px] uppercase opacity-60">Order via WhatsApp</p>
              <a href="https://wa.me/256763813315" className="block font-medium text-[16px]">0763813315</a>
              <a href="https://wa.me/256707548383" className="block font-medium text-[16px]">+256 707 548383</a>
              <p className="mt-3 text-[13px] opacity-70 leading-relaxed">Each piece is hand-painted directly on the garment. No prints, no copies. Once sold, gone forever.</p>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
