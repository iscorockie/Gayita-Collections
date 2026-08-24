import Link from "next/link";
import { img } from "@/lib/config";

export default function Footer() {
  return (
    <footer className="bg-coal text-cream mt-24">
      {/* Marquee */}
      <div className="border-y border-white/10 py-4 overflow-hidden">
        <div className="animate-marquee whitespace-nowrap flex gap-12 text-[13px] tracking-[0.25em] uppercase font-mono">
          {Array.from({ length: 10 }).map((_, i) => (
            <span key={i} className="flex items-center gap-12">
              <span>GAYITA COLLECTIONS • HAND-DRAWN • VINTAGE • KAMPALA • UG • CUSTOM STREETWEAR</span>
              <span className="w-1 h-1 bg-gold rounded-full" />
            </span>
          ))}
        </div>
      </div>

      <div className="max-w-[1600px] mx-auto px-6 md:px-10 py-16 md:py-24 grid md:grid-cols-12 gap-12">
        <div className="md:col-span-5">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 bg-white rounded-full overflow-hidden">
              <img src={img("/images/logo.jpg")} alt="logo" className="w-full h-full object-cover" />
            </div>
            <div>
              <div className="font-display text-2xl">gayita</div>
              <div className="text-[10px] tracking-[0.3em] uppercase font-mono -mt-1 opacity-60">Collections</div>
            </div>
          </div>
          <p className="font-display text-[32px] md:text-[44px] leading-[0.95] tracking-[-0.02em] text-balance max-w-[18ch]">
            Wear the story. <span className="italic font-light text-goldlight">Hand-drawn in Kampala, worn everywhere.</span>
          </p>
          <p className="mt-6 text-[15px] leading-relaxed opacity-70 max-w-[42ch]">
            Vintage apparel & customised streetwear with hand-drawn artworks. We work with local artists, upcycle vintage, and print everything in our Kabalagala studio. For designers, dreamers, and everyone.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <span className="px-4 py-2 border border-white/20 rounded-full text-[11px] tracking-widest uppercase font-mono">Est. 2022 • Kampala</span>
            <span className="px-4 py-2 border border-white/20 rounded-full text-[11px] tracking-widest uppercase font-mono">Artisan Made</span>
          </div>
        </div>

        <div className="md:col-span-2">
          <h4 className="font-mono text-[11px] tracking-[0.3em] uppercase opacity-50 mb-6">Shop</h4>
          <ul className="space-y-3 text-[14px]">
            <li><Link href="/shop" className="hover:text-gold transition">All Products</Link></li>
            <li><Link href="/shop?cat=Jackets" className="hover:text-gold transition">Jackets & Outerwear</Link></li>
            <li><Link href="/shop?cat=Tees" className="hover:text-gold transition">Art Tees</Link></li>
            <li><Link href="/shop?cat=Vintage" className="hover:text-gold transition">Vintage Archive</Link></li>
            <li><Link href="/shop?cat=Accessories" className="hover:text-gold transition">Accessories</Link></li>
          </ul>
        </div>

        <div className="md:col-span-2">
          <h4 className="font-mono text-[11px] tracking-[0.3em] uppercase opacity-50 mb-6">Atelier</h4>
          <ul className="space-y-3 text-[14px] opacity-80">
            <li>Our Story</li>
            <li>Custom Commissions</li>
            <li>Hand-Drawn Process</li>
            <li>Sustainability</li>
            <li>Wholesale</li>
          </ul>
        </div>

        <div className="md:col-span-3">
          <h4 className="font-mono text-[11px] tracking-[0.3em] uppercase opacity-50 mb-6">Visit & Contact</h4>
          <div className="space-y-4 text-[14px] leading-relaxed">
            <div>
              <p className="opacity-60 text-[12px] uppercase tracking-widest font-mono">Studio</p>
              <p>Kabalagala, Kampala<br />Uganda — Open Mon-Sat 10am-7pm</p>
            </div>
            <div>
              <p className="opacity-60 text-[12px] uppercase tracking-widest font-mono">Call / WhatsApp</p>
              <p className="font-medium text-[16px]">0763813315<br />077548383<br />+256 707 548383</p>
            </div>
            <div className="flex gap-3 pt-2">
              <a href="https://wa.me/256763813315" target="_blank" className="px-5 py-2.5 bg-gold text-white rounded-full text-[12px] tracking-widest uppercase font-medium hover:bg-white hover:text-coal transition">WhatsApp Us</a>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10 py-6 px-6 md:px-10 flex flex-col md:flex-row justify-between gap-4 text-[11px] font-mono tracking-[0.15em] uppercase opacity-50">
        <span>© 2026 Gayita Collections — All artworks original, printed in Uganda</span>
        <span className="flex gap-6">
          <span>Privacy</span>
          <span>Terms</span>
          <span>Shipping & Returns</span>
        </span>
      </div>
    </footer>
  );
}
