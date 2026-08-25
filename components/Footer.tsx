/* The supplied logo is kept as a JPG so its original artwork is not altered. */
/* eslint-disable @next/next/no-img-element */

import Link from "next/link";
import { ArrowUpRight, Instagram, MessageCircle } from "lucide-react";
import { img } from "@/lib/config";

export default function Footer() {
  return (
    <footer className="mt-20 bg-[#171412] text-[#fffdf8]">
      <div className="overflow-hidden border-y border-white/10 bg-[#211b18] py-3">
        <div className="marquee-track flex min-w-max gap-12 whitespace-nowrap font-mono text-[10px] uppercase tracking-[0.2em]">
          {Array.from({ length: 8 }).map((_, index) => (
            <span key={index} className="flex items-center gap-12">
              <span>Gayita Collections · hand-drawn art for everyday rebels · made in Kampala</span>
              <span className="h-1.5 w-1.5 rounded-full bg-[#d6e476]" />
            </span>
          ))}
        </div>
      </div>

      <div className="mx-auto grid max-w-[1440px] gap-12 px-5 py-16 md:grid-cols-12 md:px-8 md:py-20">
        <div className="md:col-span-6">
          <div className="flex items-center gap-4">
            <div className="flex h-14 w-24 items-center justify-center overflow-hidden rounded-[3px] bg-black p-1">
              <img src={img("/images/logo.jpg")} alt="Gayita Collections" className="h-full w-full object-cover object-center" />
            </div>
            <div>
              <p className="font-display text-3xl leading-none">gayita</p>
              <p className="mt-1 font-mono text-[9px] uppercase tracking-[0.24em] opacity-55">collections · Kampala</p>
            </div>
          </div>
          <h2 className="mt-9 max-w-[13ch] font-display text-5xl leading-[0.88] tracking-[-0.03em] md:text-7xl">Wear art. Keep it moving.</h2>
          <p className="mt-6 max-w-[46ch] text-sm leading-7 text-white/65">Vintage apparel and customised streetwear, hand-drawn in our Kampala studio. Every mark is made for a person, not a production line.</p>
          <div className="mt-7 flex flex-wrap gap-2">
            <span className="rounded-full border border-white/20 px-3 py-2 font-mono text-[9px] uppercase tracking-[0.14em]">Small-batch</span>
            <span className="rounded-full bg-[#d6e476] px-3 py-2 font-mono text-[9px] uppercase tracking-[0.14em] text-[#171412]">Hand-drawn</span>
            <span className="rounded-full border border-white/20 px-3 py-2 font-mono text-[9px] uppercase tracking-[0.14em]">Uganda</span>
          </div>
        </div>

        <div className="md:col-span-2">
          <p className="eyebrow text-white/45">Explore</p>
          <nav className="mt-5 flex flex-col items-start gap-3 text-sm text-white/75">
            <Link href="/" className="transition hover:text-[#d6e476]">Home</Link>
            <Link href="/shop" className="transition hover:text-[#d6e476]">Shop the edit</Link>
            <Link href="/#custom" className="transition hover:text-[#d6e476]">Custom work</Link>
            <Link href="/#studio" className="transition hover:text-[#d6e476]">Our process</Link>
            <Link href="/checkout" className="transition hover:text-[#d6e476]">Checkout</Link>
          </nav>
        </div>

        <div className="md:col-span-4">
          <p className="eyebrow text-white/45">Come by / get in touch</p>
          <div className="mt-5 space-y-5 text-sm leading-6 text-white/75">
            <p>Kabalagala, Kampala<br />Mon–Sat · 10:00–19:00<br />Boda delivery available across Kampala</p>
            <div>
              <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-white/45">Official studio lines</p>
              <div className="mt-2 flex flex-col items-start gap-1 font-mono text-sm">
                <a href="tel:0763813315" className="transition hover:text-[#d6e476]">0763813315</a>
                <a href="tel:077548383" className="transition hover:text-[#d6e476]">077548383</a>
                <a href="tel:+256707548383" className="transition hover:text-[#d6e476]">+256 707 548383</a>
              </div>
            </div>
            <div className="flex flex-wrap gap-2">
              <a href="https://wa.me/256763813315" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full bg-[#25d366] px-4 py-2.5 font-mono text-[10px] uppercase tracking-[0.12em] text-[#171412] transition hover:bg-white"><MessageCircle className="h-3.5 w-3.5" /> WhatsApp</a>
              <a href="https://instagram.com" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full border border-white/20 px-4 py-2.5 font-mono text-[10px] uppercase tracking-[0.12em] transition hover:border-white hover:text-white"><Instagram className="h-3.5 w-3.5" /> Instagram</a>
            </div>
          </div>
        </div>
      </div>

      <div className="mx-auto flex max-w-[1440px] flex-col gap-3 border-t border-white/10 px-5 py-6 font-mono text-[9px] uppercase tracking-[0.13em] text-white/40 md:flex-row md:items-center md:justify-between md:px-8">
        <span>© 2026 Gayita Collections · Kampala, Uganda</span>
        <span className="inline-flex items-center gap-1">Made to be worn <ArrowUpRight className="h-3 w-3" /></span>
      </div>
    </footer>
  );
}
