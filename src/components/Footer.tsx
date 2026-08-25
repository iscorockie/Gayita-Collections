import { Link } from "react-router-dom";
import { CONTACT, waLink } from "../lib/utils";
import {
  IconInstagram,
  IconMapPin,
  IconPhone,
  IconTikTok,
  IconWhatsApp,
} from "./icons";
import logo from "../assets/logo.jpeg";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-bone/10 bg-coal2">
      <div className="mx-auto max-w-7xl px-4 pt-16 pb-8">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1fr_1.4fr]">
          <div>
            <img src={logo} alt="Gayita Collections" className="h-14 w-auto" />
            <p className="mt-5 max-w-xs text-[14px] leading-relaxed text-bone/50">
              Vintage apparel with a past. One-of-one streetwear painted by hand in Kampala.
              Built different, for people who are too.
            </p>
            <div className="mt-6 flex gap-3">
              {[
                { icon: <IconInstagram className="w-[18px] h-[18px]" />, href: "https://instagram.com", label: "Instagram" },
                { icon: <IconTikTok className="w-[18px] h-[18px]" />, href: "https://tiktok.com", label: "TikTok" },
                { icon: <IconWhatsApp className="w-[18px] h-[18px]" />, href: waLink("Hello Gayita Collections!"), label: "WhatsApp" },
              ].map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={s.label}
                  className="flex h-10 w-10 items-center justify-center border border-bone/15 text-bone/60 transition-all hover:border-volt hover:text-volt hover:-translate-y-1"
                >
                  {s.icon}
                </a>
              ))}
            </div>
            <p className="mt-5 font-mono text-[11px] text-bone/35">{CONTACT.instagram} · {CONTACT.tiktok}</p>
          </div>

          <div>
            <h4 className="tag text-volt">Shop</h4>
            <ul className="mt-5 space-y-3 text-[14px] text-bone/60">
              <li><Link className="hover:text-volt transition-colors" to="/shop">All Products</Link></li>
              <li><Link className="hover:text-volt transition-colors" to="/shop?cat=vintage">Vintage Apparel</Link></li>
              <li><Link className="hover:text-volt transition-colors" to="/shop?cat=custom">Custom Streetwear</Link></li>
              <li><Link className="hover:text-volt transition-colors" to="/shop?cat=kicks">Friday Kicks Drop</Link></li>
              <li><Link className="hover:text-volt transition-colors" to="/shop?cat=accessories">Accessories</Link></li>
              <li><Link className="hover:text-volt transition-colors" to="/shop?sale=1">Sale</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="tag text-volt">The Studio</h4>
            <ul className="mt-5 space-y-3 text-[14px] text-bone/60">
              <li><Link className="hover:text-volt transition-colors" to="/about">Our Story</Link></li>
              <li><Link className="hover:text-volt transition-colors" to="/about#process">How Custom Orders Work</Link></li>
              <li><Link className="hover:text-volt transition-colors" to="/about#visit">Visit the Studio</Link></li>
              <li><Link className="hover:text-volt transition-colors" to="/shop?wish=1">Your Wishlist</Link></li>
              <li><Link className="hover:text-volt transition-colors" to="/checkout">Checkout</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="tag text-volt">Talk to Us</h4>
            <ul className="mt-5 space-y-3.5 text-[14px]">
              {CONTACT.phones.map((p) => (
                <li key={p.tel}>
                  <a href={`tel:${p.tel}`} className="group flex items-center gap-3 text-bone/75 hover:text-volt transition-colors">
                    <IconPhone className="w-4 h-4 shrink-0 text-volt" />
                    <span className="font-mono font-bold tracking-wide">{p.display}</span>
                    {p.primary && <span className="tag bg-volt px-1.5 py-0.5 text-asphalt">WA</span>}
                  </a>
                </li>
              ))}
              <li className="flex items-start gap-3 text-bone/55">
                <IconMapPin className="w-4 h-4 mt-0.5 shrink-0 text-volt" />
                <span>{CONTACT.location}</span>
              </li>
            </ul>
            <p className="mt-4 font-mono text-[11px] text-bone/40">{CONTACT.hours}</p>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-4 border-t border-bone/10 pt-7 sm:flex-row sm:items-center sm:justify-between">
          <p className="font-mono text-[11px] text-bone/40">
            © {new Date().getFullYear()} GAYITA COLLECTIONS · STITCHED IN KAMPALA 🇺🇬
          </p>
          <div className="flex flex-wrap gap-2">
            {["MTN MOMO", "AIRTEL MONEY", "CASH ON DELIVERY"].map((m) => (
              <span key={m} className="tag border border-bone/15 px-2.5 py-1.5 text-bone/50">{m}</span>
            ))}
          </div>
        </div>
      </div>

      {/* giant watermark */}
      <div className="pointer-events-none select-none overflow-hidden" aria-hidden>
        <p className="text-stroke -mb-[3vw] text-center font-display text-[13vw] leading-none uppercase">
          GAYITA
        </p>
      </div>
    </footer>
  );
}
