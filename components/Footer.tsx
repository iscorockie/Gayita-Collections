import Link from "next/link";
import { img } from "@/lib/config";

export default function Footer() {
  return (
    <footer className="bg-[#0a0a0a] text-[#faf6ee] mt-24 border-t border-white/10">
      {/* Paint Marquee */}
      <div className="border-y border-white/10 py-3 overflow-hidden bg-[#111]">
        <div className="animate-marquee whitespace-nowrap flex gap-12 text-[12px] tracking-[0.28em] uppercase font-mono">
          {Array.from({ length: 12 }).map((_, i) => (
            <span key={i} className="flex items-center gap-12">
              <span>PAINTED DIRECT ON CLOTHES • 1 OF 1 ONLY • NO PRINTS • NO COPIES • HAND-PAINTED IN KABALAGALA</span>
              <span className="w-1.5 h-1.5 bg-white rounded-full" />
            </span>
          ))}
        </div>
      </div>

      <div className="max-w-[1600px] mx-auto px-6 md:px-10 py-16 md:py-20 grid md:grid-cols-12 gap-12">
        <div className="md:col-span-6">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 bg-white rounded-full overflow-hidden">
              <img src={img("/images/logo.jpg")} alt="logo" className="w-full h-full object-cover" />
            </div>
            <div>
              <div className="font-display text-2xl font-bold tracking-tight">gayita</div>
              <div className="text-[10px] tracking-[0.32em] uppercase font-mono -mt-1 opacity-60">1 OF 1 • PAINTED DIRECT</div>
            </div>
          </div>
          <h3 className="font-display text-[36px] md:text-[52px] leading-[0.9] tracking-[-0.03em] max-w-[16ch]">
            We don’t print.<br />
            <span className="italic font-light">We paint directly on the clothes.</span>
          </h3>
          <p className="mt-6 text-[15px] leading-relaxed opacity-70 max-w-[48ch]">
            Every Gayita piece is a single painting on a single garment. No screens, no transfers, no copies. Once you buy it, that artwork ceases to exist anywhere else. Painted in Kabalagala studio with fabric acrylics, signed by the artist.
          </p>
          <div className="mt-8 flex flex-wrap gap-2">
            <span className="px-4 py-2 border border-white/20 rounded-full text-[11px] tracking-widest uppercase font-mono">12 PIECES ONLY</span>
            <span className="px-4 py-2 bg-white text-black rounded-full text-[11px] tracking-widest uppercase font-mono font-bold">NO PRINTS • DIRECT PAINT</span>
            <span className="px-4 py-2 border border-white/20 rounded-full text-[11px] tracking-widest uppercase font-mono">KAMPALA • 2022—</span>
          </div>
        </div>

        <div className="md:col-span-3">
          <h4 className="font-mono text-[11px] tracking-[0.3em] uppercase opacity-50 mb-6">How It Works</h4>
          <ul className="space-y-3 text-[14px] leading-relaxed opacity-80">
            <li>• Each garment is vintage/second-hand base, cleaned</li>
            <li>• Artist sketches with chalk directly on fabric</li>
            <li>• Painted with fabric acrylics + brushes, no print</li>
            <li>• Signed, photographed, listed as 1 of 1</li>
            <li>• Once sold, never recreated</li>
          </ul>
          <Link href="/shop" className="mt-6 inline-block px-5 py-2.5 bg-white text-black rounded-full text-[12px] tracking-widest uppercase font-mono font-bold">See All 1 of 1s</Link>
        </div>

        <div className="md:col-span-3">
          <h4 className="font-mono text-[11px] tracking-[0.3em] uppercase opacity-50 mb-6">Order via WhatsApp</h4>
          <div className="space-y-4 text-[14px] leading-relaxed">
            <div>
              <p className="opacity-60 text-[11px] uppercase tracking-widest font-mono">Studio</p>
              <p>Kabalagala, Kampala<br />Mon-Sat 10am-7pm<br />Painting live daily</p>
            </div>
            <div>
              <p className="opacity-60 text-[11px] uppercase tracking-widest font-mono">WhatsApp Orders Only</p>
              <p className="font-mono text-[15px] leading-relaxed">
                <a href="https://wa.me/256763813315" className="hover:text-[#25D366] transition">0763813315</a><br />
                <a href="https://wa.me/256707548383" className="hover:text-[#25D366] transition">+256 707 548383</a>
              </p>
              <p className="text-[12px] opacity-60 mt-2">Send us the piece number (001, 002...) and we’ll confirm. Boda delivery same day in Kampala.</p>
            </div>
            <a href="https://wa.me/256763813315?text=Hello%20Gayita!%20I%20want%20to%20see%20available%201%20of%201%20pieces" target="_blank" className="inline-flex mt-2 px-5 py-3 bg-[#25D366] text-white rounded-full text-[12px] tracking-widest uppercase font-mono font-bold hover:bg-white hover:text-black transition">
              WhatsApp Us Now
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10 py-6 px-6 md:px-10 flex flex-col md:flex-row justify-between gap-4 text-[11px] font-mono tracking-[0.15em] uppercase opacity-40">
        <span>© 2026 Gayita Collections — Each piece 1 of 1, painted direct, no copies</span>
        <span>No Prints • No Transfers • Only Brush on Cloth</span>
      </div>
    </footer>
  );
}
