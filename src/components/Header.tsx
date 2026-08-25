import { useEffect, useState } from "react";
import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
import { cn, CONTACT, waLink } from "../lib/utils";
import { useStore } from "../context/StoreContext";
import { MarqueeRow } from "./ui";
import { IconBag, IconHeart, IconMenu, IconPhone, IconWhatsApp, IconX } from "./icons";
import logo from "../assets/logo.jpeg";

const NAV = [
  { to: "/", label: "Home" },
  { to: "/shop", label: "Shop All" },
  { to: "/shop?cat=vintage", label: "Vintage", match: "cat=vintage" },
  { to: "/shop?cat=custom", label: "Custom Art", match: "cat=custom" },
  { to: "/shop?cat=kicks", label: "Kicks", match: "cat=kicks" },
  { to: "/about", label: "Story" },
];

const TICKER = [
  "FREE KAMPALA DELIVERY OVER UGX 200,000",
  "FRIDAY KICKS DROP — 8PM EAT",
  "1-OF-1 HAND-PAINTED PIECES",
  "MTN MOMO · AIRTEL MONEY · CASH",
  "4.9★ FROM 40+ COLLECTORS",
];

export default function Header() {
  const { cartCount, wishlist, bump, openDrawer } = useStore();
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setMenuOpen(false), [location.pathname, location.search]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const isActive = (item: (typeof NAV)[number]) => {
    if (item.match) return location.search.includes(item.match);
    if (item.to === "/") return location.pathname === "/";
    if (item.to === "/shop") return location.pathname === "/shop" && !location.search.includes("cat=");
    return location.pathname.startsWith(item.to);
  };

  return (
    <>
      {/* announcement ticker */}
      <div className="bg-volt text-asphalt">
        <MarqueeRow
          items={TICKER}
          className="py-2"
          separator="✦"
        />
      </div>
      <style>{`.bg-volt .tag, .bg-volt span { font-family: 'JetBrains Mono', monospace; font-weight: 800; font-size: 10px; letter-spacing: 0.22em; }`}</style>

      <header
        className={cn(
          "sticky top-0 z-40 bg-asphalt/95 backdrop-blur border-b border-bone/10 transition-shadow",
          scrolled && "shadow-[0_12px_40px_rgba(0,0,0,0.6)]"
        )}
      >
        <div className="mx-auto max-w-7xl px-4">
          <div className="flex h-[72px] items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <button
                className="lg:hidden p-2 -ml-2 text-bone/80 hover:text-volt"
                onClick={() => setMenuOpen(true)}
                aria-label="Open menu"
              >
                <IconMenu />
              </button>
              <Link to="/" className="flex items-center gap-3">
                <img src={logo} alt="Gayita Collections" className="h-11 w-auto" />
                <span className="hidden sm:block font-display text-lg uppercase leading-none tracking-wide">
                  Gayita
                  <span className="block text-[9px] font-mono font-bold tracking-[0.35em] text-volt">Collections</span>
                </span>
              </Link>
            </div>

            <nav className="hidden lg:flex items-center gap-8">
              {NAV.map((item) => (
                <NavLink
                  key={item.label}
                  to={item.to}
                  className={cn(
                    "tag transition-colors hover:text-volt",
                    isActive(item) ? "text-volt" : "text-bone/65"
                  )}
                >
                  {item.label}
                </NavLink>
              ))}
            </nav>

            <div className="flex items-center gap-1">
              <a
                href={`tel:${CONTACT.phones[0].tel}`}
                className="hidden xl:flex items-center gap-2 px-3 py-2 text-bone/65 hover:text-volt transition-colors"
                title={CONTACT.phones[0].display}
              >
                <IconPhone className="w-4 h-4" />
                <span className="font-mono text-[11px] font-bold">{CONTACT.phones[0].display}</span>
              </a>
              <button
                onClick={() => navigate("/shop?wish=1")}
                className="relative p-2.5 text-bone/80 hover:text-danger transition-colors"
                aria-label={`Wishlist, ${wishlist.length} items`}
              >
                <IconHeart className="w-[22px] h-[22px]" filled={wishlist.length > 0} />
                {wishlist.length > 0 && (
                  <span className="absolute -top-0.5 -right-0.5 flex h-[18px] min-w-[18px] items-center justify-center bg-danger px-1 font-mono text-[9px] font-extrabold text-bone">
                    {wishlist.length}
                  </span>
                )}
              </button>
              <button
                onClick={openDrawer}
                className="relative p-2.5 text-bone hover:text-volt transition-colors"
                aria-label={`Open bag, ${cartCount} items`}
              >
                <IconBag className="w-[22px] h-[22px]" />
                {cartCount > 0 && (
                  <span
                    key={bump}
                    className="badge-bump absolute -top-0.5 -right-0.5 flex h-[18px] min-w-[18px] items-center justify-center bg-volt px-1 font-mono text-[9px] font-extrabold text-asphalt"
                  >
                    {cartCount}
                  </span>
                )}
              </button>
            </div>
          </div>
        </div>
        <div className="h-[3px] hazard" />
      </header>

      {/* mobile menu */}
      <div className={cn("fixed inset-0 z-50 lg:hidden transition-opacity duration-300", menuOpen ? "opacity-100" : "pointer-events-none opacity-0")}>
        <div className="absolute inset-0 bg-asphalt/80 backdrop-blur-sm" onClick={() => setMenuOpen(false)} />
        <div className={cn("drawer-panel absolute left-0 top-0 flex h-full w-[86%] max-w-sm flex-col bg-coal2 border-r border-bone/10", menuOpen ? "translate-x-0" : "-translate-x-full")}>
          <div className="flex items-center justify-between px-5 h-[72px] border-b border-bone/10">
            <img src={logo} alt="Gayita Collections" className="h-10 w-auto" />
            <button onClick={() => setMenuOpen(false)} aria-label="Close menu" className="p-2 text-bone/70">
              <IconX />
            </button>
          </div>
          <nav className="flex flex-col px-6 py-6">
            {NAV.map((item, i) => (
              <button
                key={item.label}
                onClick={() => navigate(item.to)}
                className={cn(
                  "border-b border-bone/10 py-4 text-left font-display text-3xl uppercase transition-all duration-500",
                  isActive(item) ? "text-volt" : "text-bone/85 hover:text-volt",
                  menuOpen ? "translate-x-0 opacity-100" : "-translate-x-4 opacity-0"
                )}
                style={{ transitionDelay: `${60 + i * 50}ms` }}
              >
                {item.label}
              </button>
            ))}
          </nav>
          <div className="mt-auto px-6 pb-8 space-y-3">
            <p className="tag text-volt/80">Call the studio</p>
            {CONTACT.phones.map((p) => (
              <a key={p.tel} href={`tel:${p.tel}`} className="flex items-center gap-3 text-bone/80">
                <IconPhone className="w-4 h-4 text-volt" />
                <span className="font-mono text-sm font-bold">{p.display}</span>
              </a>
            ))}
            <a href={waLink("Hello Gayita Collections!")} target="_blank" rel="noreferrer" className="btn-volt w-full mt-2">
              <IconWhatsApp className="w-4 h-4" /> WhatsApp Us
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
