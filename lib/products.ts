export type Review = {
  id: string;
  author: string;
  avatar: string;
  rating: number;
  date: string;
  text: string;
  verified: boolean;
};

export type Product = {
  id: string;
  slug: string;
  name: string;
  price: number; // UGX
  priceUSD: number;
  category: string;
  tags: string[];
  description: string;
  story: string;
  artist: string;
  materials: string[];
  images: string[];
  colors: { name: string; hex: string }[];
  sizes: string[];
  rating: number;
  reviewCount: number;
  reviews: Review[];
  featured: boolean;
  new: boolean;
  stock: number;
  details: string[];
  paintTime: string;
};

export const products: Product[] = [
  {
    id: "crane-heritage-tee",
    slug: "crane-heritage-tee",
    name: "001 — Crane Heritage Tee",
    price: 120000,
    priceUSD: 32,
    category: "Tees",
    tags: ["1 OF 1", "Hand-Painted", "Crested Crane", "Direct Paint"],
    description: "One-of-one. Hand-painted directly on the tee — no print, no transfer, no copy. Grey Crowned Crane in gold & sepia acrylic, painted freehand with fine brushes. The paint becomes part of the fabric.",
    story: "Painted in one sitting (6 hours) by Nadia at the Kabalagala studio. She sketches with chalk, then paints directly with fabric acrylics. Once sold, this exact crane can never be recreated — each stroke is unrepeatable.",
    artist: "Nadia K. — 6hrs",
    paintTime: "6 HOURS",
    materials: ["Heavyweight Cotton Tee", "Fabric Acrylic Paint", "Hand-Painted Direct"],
    images: ["/images/hero.jpg", "/images/p-crane-tee.jpg"],
    colors: [{ name: "Desert Sand — Painted", hex: "#f3ecdd" }],
    sizes: ["M"],
    rating: 5.0,
    reviewCount: 1,
    reviews: [
      { id: "1", author: "Mutesi A.", avatar: "MA", rating: 5, date: "2026-08-10", text: "You can feel the brush texture! This is real art, not a print. No one else will ever have this.", verified: true },
    ],
    featured: true,
    new: true,
    stock: 1,
    details: ["1 OF 1 — No Copies Ever", "Painted Directly, Not Printed", "Wash Cold, Inside Out", "Signed by Artist on Hem"]
  },
  {
    id: "artisan-denim-jacket",
    slug: "artisan-denim-jacket",
    name: "002 — Artisan Denim Jacket",
    price: 350000,
    priceUSD: 94,
    category: "Jackets",
    tags: ["1 OF 1", "Hand-Painted", "Barkcloth Motifs"],
    description: "Vintage trucker transformed — entirely hand-painted with white fabric paint inspired by Baganda barkcloth. Every line is drawn by hand, directly on denim. No stencil.",
    story: "Moses spent 11 hours painting this. He lays the jacket flat, no projector, just eye and hand. The pattern is his own memory of his grandmother's barkcloth.",
    artist: "Moses — 11hrs",
    paintTime: "11 HOURS",
    materials: ["Vintage Denim", "Fabric Paint", "Direct Hand-Paint"],
    images: ["/images/p-art-denim.jpg"],
    colors: [{ name: "Indigo — Painted", hex: "#2a4a7c" }],
    sizes: ["L"],
    rating: 5.0,
    reviewCount: 1,
    reviews: [
      { id: "1", author: "Jordan T.", avatar: "JT", rating: 5, date: "2026-08-01", text: "You can see the brush strokes up close. This is a gallery piece.", verified: true },
    ],
    featured: true,
    new: true,
    stock: 1,
    details: ["1 OF 1 — No Copies", "11 Hours Direct Paint", "Vintage Base", "Artist Signed"]
  },
  {
    id: "savanna-bomber",
    slug: "savanna-bomber",
    name: "003 — Savanna Bomber",
    price: 420000,
    priceUSD: 113,
    category: "Jackets",
    tags: ["1 OF 1", "Landscape", "Acacia"],
    description: "Satin bomber painted with a full savanna sunset — acacia trees, Nile reflection, birds. Painted directly onto the satin, not printed. The paint catches light differently as you move.",
    story: "Painted from memory of Murchison Falls. 14 hours, two layers. The orange is mixed by hand — no two sunsets same.",
    artist: "Gayita Atelier — 14hrs",
    paintTime: "14 HOURS",
    materials: ["Satin Bomber", "Fabric Acrylic", "Hand-Painted"],
    images: ["/images/p-bomber.jpg"],
    colors: [{ name: "Olive Satin — Painted", hex: "#4a5a3c" }],
    sizes: ["XL"],
    rating: 5.0,
    reviewCount: 1,
    reviews: [
      { id: "1", author: "Alex M.", avatar: "AM", rating: 5, date: "2026-07-30", text: "Looks like a painting in a museum, but you can wear it.", verified: true },
    ],
    featured: true,
    new: true,
    stock: 1,
    details: ["1 OF 1 — Single Edition", "Direct Paint on Satin", "No Prints", "14hr Work"]
  },
  {
    id: "kampala-boda-hoodie",
    slug: "kampala-boda-hoodie",
    name: "004 — Kampala Boda Hoodie",
    price: 220000,
    priceUSD: 59,
    category: "Sweatshirts",
    tags: ["1 OF 1", "Kampala", "Night City"],
    description: "Black hoodie painted with Kampala boda scene at night — wet tarmac reflecting lights. Every bike, every light is a brush stroke. Painted directly, not printed.",
    story: "Painted from a photo taken on Entebbe Road at 9pm in rain. Artist used palette knife for reflections.",
    artist: "Kampala Collective — 9hrs",
    paintTime: "9 HOURS",
    materials: ["Heavyweight Hoodie", "Fabric Paint", "Palette Knife Texture"],
    images: ["/images/p-hoodie.jpg"],
    colors: [{ name: "Black — Painted", hex: "#0a0a0a" }],
    sizes: ["L"],
    rating: 5.0,
    reviewCount: 1,
    reviews: [
      { id: "1", author: "Brian O.", avatar: "BO", rating: 5, date: "2026-08-08", text: "People stop me to look at the paint texture. Insane.", verified: true },
    ],
    featured: true,
    new: true,
    stock: 1,
    details: ["1 OF 1", "Hand-Painted Night Scene", "No Copy", "Signed"]
  },
  {
    id: "watercolor-crane-tee",
    slug: "watercolor-crane-tee",
    name: "005 — Watercolor Crane Tee",
    price: 110000,
    priceUSD: 29,
    category: "Tees",
    tags: ["1 OF 1", "Watercolor Style", "Crane"],
    description: "Cream tee with full watercolor-style crane standing in papyrus — but it's not watercolor on paper, it's acrylic painted directly on cotton. Soft edges achieved with dry brush.",
    story: "Second crane study, but completely different hand. This one took 5 hours, lighter touch.",
    artist: "Nadia K. — 5hrs",
    paintTime: "5 HOURS",
    materials: ["Organic Cotton", "Fabric Acrylic", "Hand-Painted"],
    images: ["/images/p-crane-tee.jpg", "/images/hero.jpg"],
    colors: [{ name: "Cream — Painted", hex: "#faf6ee" }],
    sizes: ["S"],
    rating: 5.0,
    reviewCount: 1,
    reviews: [
      { id: "1", author: "Grace A.", avatar: "GA", rating: 5, date: "2026-08-05", text: "You can see where the brush lifted. Beautiful.", verified: true },
    ],
    featured: true,
    new: true,
    stock: 1,
    details: ["1 OF 1", "Direct Paint", "No Print", "One Size Only"]
  },
  {
    id: "matatu-sweatshirt",
    slug: "matatu-sweatshirt",
    name: "006 — Matatu Motion Sweatshirt",
    price: 180000,
    priceUSD: 48,
    category: "Sweatshirts",
    tags: ["1 OF 1", "Matatu", "Color Splash"],
    description: "Oatmeal crewneck painted with explosive Matatu — Uganda taxi — in motion. Splatter and brush strokes are real paint flicked and dragged, not printed graphic.",
    story: "Artist flicked paint with toothbrush for splatter effect. The matatu is distorted on purpose — speed.",
    artist: "Gayita Street — 7hrs",
    paintTime: "7 HOURS",
    materials: ["Cotton Crewneck", "Acrylic Paint", "Splatter Technique"],
    images: ["/images/p-sweatshirt.jpg"],
    colors: [{ name: "Oatmeal — Painted", hex: "#e8ddd0" }],
    sizes: ["M"],
    rating: 5.0,
    reviewCount: 1,
    reviews: [
      { id: "1", author: "Ivan T.", avatar: "IT", rating: 5, date: "2026-08-02", text: "The splatter is real paint, you can feel it.", verified: true },
    ],
    featured: true,
    new: true,
    stock: 1,
    details: ["1 OF 1", "Real Paint Splatter", "No Copies", "Hand-Painted"]
  },
  {
    id: "guns-n-roses-vintage",
    slug: "guns-n-roses-vintage",
    name: "007 — Vintage Reworked Tee",
    price: 95000,
    priceUSD: 26,
    category: "Tees",
    tags: ["1 OF 1", "Reworked", "Vintage Base"],
    description: "Vintage tee base, but completely over-painted — skull, roses, and band lettering are all hand-painted with fabric paint, not original print. One-of-one rework.",
    story: "Found in Owino, bleached, then repainted. The cracked look is intentional paint cracking.",
    artist: "Gayita Rework — 4hrs",
    paintTime: "4 HOURS",
    materials: ["Vintage Cotton", "Fabric Paint", "Hand Reworked"],
    images: ["/images/p-bandtee.jpg"],
    colors: [{ name: "Washed Black — Painted", hex: "#1a1a1a" }],
    sizes: ["L"],
    rating: 4.9,
    reviewCount: 1,
    reviews: [
      { id: "1", author: "Chris P.", avatar: "CP", rating: 5, date: "2026-08-12", text: "Not a print — you can feel the paint layers.", verified: true },
    ],
    featured: false,
    new: true,
    stock: 1,
    details: ["1 OF 1 Rework", "Hand-Painted Over Vintage", "No Print"]
  },
  {
    id: "corduroy-trucker",
    slug: "corduroy-trucker",
    name: "008 — Corduroy Canvas",
    price: 185000,
    priceUSD: 50,
    category: "Jackets",
    tags: ["1 OF 1", "Canvas", "Tobacco"],
    description: "Tobacco corduroy left mostly blank — ready to be painted? No, this one has subtle hand-painted stitch-like lines on pockets, barely visible. Minimal paint intervention.",
    story: "Artist wanted to honor the fabric, so only small painted details. Still 1 of 1.",
    artist: "Gayita Essentials — 2hrs",
    paintTime: "2 HOURS",
    materials: ["Corduroy", "Minimal Paint Detail"],
    images: ["/images/p-corduroy.jpg"],
    colors: [{ name: "Tobacco — Minimal Paint", hex: "#a87a3a" }],
    sizes: ["M"],
    rating: 4.9,
    reviewCount: 1,
    reviews: [{ id: "1", author: "Faith N.", avatar: "FN", rating: 5, date: "2026-07-18", text: "Subtle but you know it's hand-done.", verified: true }],
    featured: false,
    new: true,
    stock: 1,
    details: ["1 OF 1", "Minimal Paint", "Hand-Detail"]
  },
  {
    id: "classic-denim-jacket",
    slug: "classic-denim-jacket",
    name: "009 — Classic Denim (Painted)",
    price: 165000,
    priceUSD: 44,
    category: "Jackets",
    tags: ["1 OF 1", "Denim", "Subtle Paint"],
    description: "Mid-wash denim with hand-painted faint outlines on seams — like a drawing on jeans. Painted directly, almost invisible until close.",
    story: "Experiment in subtlety.",
    artist: "Gayita Essentials — 3hrs",
    paintTime: "3 HOURS",
    materials: ["Cotton Denim", "Hand-Painted Lines"],
    images: ["/images/p-denim.jpg"],
    colors: [{ name: "Mid Wash — Painted", hex: "#6b8bb5" }],
    sizes: ["M"],
    rating: 4.8,
    reviewCount: 1,
    reviews: [{ id: "1", author: "Tom B.", avatar: "TB", rating: 5, date: "2026-06-20", text: "Love the hidden paint details.", verified: true }],
    featured: false,
    new: true,
    stock: 1,
    details: ["1 OF 1", "Hand-Painted Seams"]
  },
  {
    id: "night-sky-bucket",
    slug: "night-sky-bucket",
    name: "010 — Night Sky Bucket",
    price: 75000,
    priceUSD: 20,
    category: "Accessories",
    tags: ["1 OF 1", "Hand-Painted", "Bucket"],
    description: "Black denim bucket hat painted with tiny suns, stars — not embroidered, painted with fine tip brush. Each dot is a hand dab.",
    story: "Painted with toothpick for stars.",
    artist: "Amina S. — 3hrs",
    paintTime: "3 HOURS",
    materials: ["Denim Hat", "Fabric Paint"],
    images: ["/images/p-hat.jpg"],
    colors: [{ name: "Black — Painted", hex: "#222" }],
    sizes: ["One Size"],
    rating: 5.0,
    reviewCount: 1,
    reviews: [{ id: "1", author: "Luna K.", avatar: "LK", rating: 5, date: "2026-08-14", text: "Hand-painted dots, so cute.", verified: true }],
    featured: false,
    new: true,
    stock: 1,
    details: ["1 OF 1", "Hand-Painted Dots", "No Embroidery — Paint"]
  },
  {
    id: "light-wash-jeans",
    slug: "light-wash-jeans",
    name: "011 — Light Wash Jeans (Painted)",
    price: 145000,
    priceUSD: 39,
    category: "Bottoms",
    tags: ["1 OF 1", "Jeans", "Painted"],
    description: "Light wash jeans with hand-painted faint floral on back pocket — single stroke flowers, directly painted.",
    story: "One pocket only, like a secret.",
    artist: "Gayita Vintage — 2hrs",
    paintTime: "2 HOURS",
    materials: ["Cotton Denim", "Painted Pocket"],
    images: ["/images/p-jeans.jpg"],
    colors: [{ name: "Light Wash — Painted", hex: "#a8c0d6" }],
    sizes: ["32"],
    rating: 4.8,
    reviewCount: 1,
    reviews: [{ id: "1", author: "Joan K.", avatar: "JK", rating: 5, date: "2026-07-10", text: "Subtle paint, love it.", verified: true }],
    featured: false,
    new: true,
    stock: 1,
    details: ["1 OF 1", "Painted Pocket"]
  },
  {
    id: "varsity-legend",
    slug: "varsity-legend",
    name: "012 — Varsity Legend (Re-Painted)",
    price: 275000,
    priceUSD: 74,
    category: "Jackets",
    tags: ["1 OF 1", "Varsity", "Re-Painted"],
    description: "Forest wool varsity with hand-painted W — not chenille patch, painted with thick acrylic to look like patch. Trompe-l'oeil paint.",
    story: "Painted to look like embroidery from far, but up close it's paint texture.",
    artist: "Gayita Vintage — 6hrs",
    paintTime: "6 HOURS",
    materials: ["Wool Blend", "Acrylic Paint"],
    images: ["/images/p-varsity.jpg"],
    colors: [{ name: "Forest — Painted", hex: "#1e3a2a" }],
    sizes: ["L"],
    rating: 5.0,
    reviewCount: 1,
    reviews: [{ id: "1", author: "Mark W.", avatar: "MW", rating: 5, date: "2026-07-25", text: "People think it's a patch, but it's paint!", verified: true }],
    featured: false,
    new: true,
    stock: 1,
    details: ["1 OF 1", "Painted W Logo", "Hand-Painted"]
  },
];

export function formatUGX(amount: number) {
  return new Intl.NumberFormat('en-UG', { style: 'currency', currency: 'UGX', maximumFractionDigits: 0 }).format(amount);
}

export function getWhatsAppMessage(product: Product, size: string) {
  return `Hello Gayita! I want to order:\n\n*${product.name}*\nSize: ${size}\nPrice: ${formatUGX(product.price)}\n\n${product.tags[0]} — Painted Direct, No Copies\n\nIs this still available? I'm ready to pay via MoMo.`;
}

export function getCartWhatsAppMessage(items: { product: Product; size: string; color: string; quantity: number }[], total: number) {
  const lines = items.map((it, i) => `${i + 1}. ${it.product.name} (${it.size}) — ${formatUGX(it.product.price * it.quantity)} — 1 OF 1`).join("\n");
  return `Hello Gayita Collections! 🎨\n\nI want to order these 1 OF 1 painted pieces:\n\n${lines}\n\n*Total: ${formatUGX(total)}*\n\nAll are hand-painted direct, no copies — please confirm availability. Ready to pay via MoMo / Airtel Money.\n\nMy location: [add your area]\nName: [your name]`;
}
