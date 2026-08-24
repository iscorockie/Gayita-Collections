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
  originalPrice?: number;
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
};

export const products: Product[] = [
  {
    id: "crane-heritage-tee",
    slug: "crane-heritage-tee",
    name: "Crane Heritage Tee — Golden Crown",
    price: 85000,
    priceUSD: 23,
    category: "Tees",
    tags: ["Uganda", "Hand-Drawn", "Crested Crane", "Gold Foil"],
    description: "Our signature tee featuring a meticulously hand-drawn Grey Crowned Crane — Uganda's national bird — rendered in metallic gold foil. Soft heavyweight organic cotton, garment-dyed in desert sand.",
    story: "Drawn by our in-house artist Nadia in Kawempe studio, this crane took 14 hours of cross-hatching. The crown is inspired by Buganda royal regalia. Each print is slightly unique.",
    artist: "Nadia K.",
    materials: ["100% Organic Cotton", "Water-based Gold Foil", "Garment Dyed"],
    images: ["/images/hero.jpg", "/images/p-crane-tee.jpg"],
    colors: [{ name: "Desert Sand", hex: "#f3ecdd" }, { name: "Coal Black", hex: "#141210" }],
    sizes: ["S", "M", "L", "XL", "XXL"],
    rating: 4.9,
    reviewCount: 127,
    reviews: [
      { id: "1", author: "Mutesi A.", avatar: "MA", rating: 5, date: "2026-08-10", text: "The gold print is STUNNING. Feels luxurious, heavy cotton. Wore it to Bayimba and got stopped 5 times.", verified: true },
      { id: "2", author: "David L.", avatar: "DL", rating: 5, date: "2026-07-22", text: "Best tee I own. Print doesn't crack after washes. Proud to wear Uganda.", verified: true },
      { id: "3", author: "Sarah K.", avatar: "SK", rating: 4, date: "2026-06-15", text: "Beautiful art, size M fits slightly oversized which I love.", verified: true },
    ],
    featured: true,
    new: true,
    stock: 42,
    details: ["Heavyweight 240gsm", "Pre-shrunk", "Printed in Kampala", "Unisex oversized fit"]
  },
  {
    id: "artisan-denim-jacket",
    slug: "artisan-denim-jacket",
    name: "Artisan Hand-Painted Denim Jacket",
    price: 245000,
    priceUSD: 66,
    originalPrice: 285000,
    category: "Jackets",
    tags: ["Denim", "Hand-Painted", "One-of-One", "African Motifs"],
    description: "A classic trucker reimagined — each jacket is hand-painted with white pigment inspired by ancient Nubian and Baganda barkcloth patterns. No two are identical.",
    story: "Our collaboration with textile artist Moses. He uses a traditional bleaching technique on vintage denim, then paints freehand for 8+ hours.",
    artist: "Moses & Gayita Studio",
    materials: ["Upcycled Vintage Denim", "Fabric Pigment", "Brass Buttons"],
    images: ["/images/p-art-denim.jpg"],
    colors: [{ name: "Indigo Dye", hex: "#2a4a7c" }],
    sizes: ["S", "M", "L", "XL"],
    rating: 5.0,
    reviewCount: 38,
    reviews: [
      { id: "1", author: "Jordan T.", avatar: "JT", rating: 5, date: "2026-08-01", text: "This is ART. Wearing a museum piece. Incredible craftsmanship.", verified: true },
    ],
    featured: true,
    new: false,
    stock: 7,
    details: ["One-of-one artwork", "Vintage sourced denim", "Unisex", "Dry clean recommended"]
  },
  {
    id: "savanna-bomber",
    slug: "savanna-bomber",
    name: "Savanna Sunset Souvenir Bomber",
    price: 295000,
    priceUSD: 80,
    category: "Jackets",
    tags: ["Bomber", "Satin", "Landscape", "Uganda"],
    description: "Olive satin bomber with a full-front hand-illustrated savanna sunset — acacia trees, crested cranes in flight, and the River Nile catching last light.",
    story: "Inspired by evenings in Murchison Falls. Printed with sublimation that won't fade. Lined in burnt orange satin.",
    artist: "Gayita Atelier",
    materials: ["Satin Polyester", "Ribbed Collar", "YKK Zippers"],
    images: ["/images/p-bomber.jpg"],
    colors: [{ name: "Olive / Sunset", hex: "#4a5a3c" }],
    sizes: ["M", "L", "XL", "XXL"],
    rating: 4.8,
    reviewCount: 62,
    reviews: [
      { id: "1", author: "Alex M.", avatar: "AM", rating: 5, date: "2026-07-30", text: "The print quality is insane. Like wearing a painting.", verified: true },
    ],
    featured: true,
    new: true,
    stock: 18,
    details: ["Fully lined", "Inside pocket", "Water resistant", "Limited 100 pieces"]
  },
  {
    id: "guns-n-roses-vintage",
    slug: "guns-n-roses-vintage",
    name: "1987 Vintage Repro — Guns N' Roses Tee",
    price: 95000,
    priceUSD: 26,
    category: "Vintage",
    tags: ["Vintage", "Band Tee", "Washed Black", "Rock"],
    description: "Curated vintage reproduction, stone-washed and sun-faded for that perfect 1987 tour feel. Soft as a tee you've owned for 20 years.",
    story: "Sourced from our vintage archive in Owino, re-printed with our own distressed plates.",
    artist: "Gayita Vintage Curation",
    materials: ["100% Cotton", "Acid Wash", "Cracked Print"],
    images: ["/images/p-bandtee.jpg"],
    colors: [{ name: "Washed Black", hex: "#1a1a1a" }],
    sizes: ["S", "M", "L", "XL"],
    rating: 4.7,
    reviewCount: 89,
    reviews: [
      { id: "1", author: "Chris P.", avatar: "CP", rating: 5, date: "2026-08-12", text: "Perfect vintage feel. Not stiff at all.", verified: true },
    ],
    featured: false,
    new: false,
    stock: 25,
    details: ["Oversized fit", "Drop shoulder", "Pre-faded", "Unisex"]
  },
  {
    id: "corduroy-trucker",
    slug: "corduroy-trucker",
    name: "Tobacco Corduroy Trucker",
    price: 185000,
    priceUSD: 50,
    category: "Jackets",
    tags: ["Corduroy", "Trucker", "Minimal", "Workwear"],
    description: "Minimalist heavyweight corduroy trucker in tobacco brown. Clean lines, brass hardware, made for layering over our art tees.",
    story: "Designed as the perfect canvas for our tees. Cut boxy, built to last 10 years.",
    artist: "Gayita Essentials",
    materials: ["100% Cotton Corduroy", "Brass Buttons"],
    images: ["/images/p-corduroy.jpg"],
    colors: [{ name: "Tobacco", hex: "#a87a3a" }],
    sizes: ["S", "M", "L", "XL", "XXL"],
    rating: 4.9,
    reviewCount: 44,
    reviews: [
      { id: "1", author: "Faith N.", avatar: "FN", rating: 5, date: "2026-07-18", text: "Quality is top tier. Thick cord, great stitching.", verified: true },
    ],
    featured: false,
    new: false,
    stock: 30,
    details: ["8-wale cord", "Unlined", "Two chest pockets", "Made in Uganda"]
  },
  {
    id: "watercolor-crane-tee",
    slug: "watercolor-crane-tee",
    name: "Watercolor Crane — Studio Edition Tee",
    price: 90000,
    priceUSD: 24,
    category: "Tees",
    tags: ["Watercolor", "Limited", "Art Print"],
    description: "Full-color watercolor interpretation of the crested crane, standing in papyrus wetlands. Halo crown in gold foil detail. Printed on cream heavyweight tee.",
    story: "Second edition from our national bird series. Each tee includes a small artist card.",
    artist: "Nadia K.",
    materials: ["Organic Cotton", "Watercolor Print"],
    images: ["/images/p-crane-tee.jpg", "/images/hero.jpg"],
    colors: [{ name: "Cream", hex: "#faf6ee" }],
    sizes: ["S", "M", "L", "XL"],
    rating: 4.9,
    reviewCount: 73,
    reviews: [
      { id: "1", author: "Grace A.", avatar: "GA", rating: 5, date: "2026-08-05", text: "So beautiful, feels like art gallery merch.", verified: true },
    ],
    featured: true,
    new: true,
    stock: 35,
    details: ["Artist signed tag", "240gsm", "Limited 200"]
  },
  {
    id: "classic-denim-jacket",
    slug: "classic-denim-jacket",
    name: "Classic Mid-Wash Denim Jacket",
    price: 165000,
    priceUSD: 44,
    category: "Jackets",
    tags: ["Denim", "Classic", "Essential"],
    description: "The perfect vintage mid-wash denim jacket — broken in, not broken. Clean, versatile, ready for your patches or to stay minimal.",
    story: "Our everyday hero. Sourced and washed to perfection.",
    artist: "Gayita Essentials",
    materials: ["100% Cotton Denim"],
    images: ["/images/p-denim.jpg"],
    colors: [{ name: "Mid Wash", hex: "#6b8bb5" }],
    sizes: ["S", "M", "L", "XL"],
    rating: 4.8,
    reviewCount: 102,
    reviews: [
      { id: "1", author: "Tom B.", avatar: "TB", rating: 5, date: "2026-06-20", text: "Fits perfect. Great weight.", verified: true },
    ],
    featured: false,
    new: false,
    stock: 50,
    details: ["Button front", "Classic fit", "Vintage wash"]
  },
  {
    id: "night-sky-bucket",
    slug: "night-sky-bucket",
    name: "Night Sky Embroidered Bucket Hat",
    price: 55000,
    priceUSD: 15,
    category: "Accessories",
    tags: ["Hat", "Embroidered", "Bucket"],
    description: "Black washed denim bucket hat embroidered with tiny suns, stars and constellations — like doodles from a Kampala night.",
    story: "Hand-guided embroidery by our team in Kabalagala.",
    artist: "Amina S.",
    materials: ["Cotton Denim", "Embroidery Thread"],
    images: ["/images/p-hat.jpg"],
    colors: [{ name: "Washed Black", hex: "#222" }],
    sizes: ["One Size"],
    rating: 4.9,
    reviewCount: 58,
    reviews: [
      { id: "1", author: "Luna K.", avatar: "LK", rating: 5, date: "2026-08-14", text: "Cutest hat! Embroidery is so detailed.", verified: true },
    ],
    featured: false,
    new: true,
    stock: 60,
    details: ["One size fits most", "Embroidered details", "Adjustable"]
  },
  {
    id: "kampala-boda-hoodie",
    slug: "kampala-boda-hoodie",
    name: "Kampala City Boda Hoodie — Night Ride",
    price: 145000,
    priceUSD: 39,
    category: "Sweatshirts",
    tags: ["Kampala", "Boda", "Hoodie", "Cityscape"],
    description: "Black heavyweight hoodie featuring an impressionist painting of boda bodas riding through Kampala at night — wet streets reflecting city lights. 'KAMPALA CITY' on rider's jacket.",
    story: "Painted from a photo taken on Entebbe Road at 9pm during rain. Captures the energy of the city that never sleeps.",
    artist: "Collective Kampala",
    materials: ["80% Cotton 20% Poly", "Fleece Lined", "Puff Print"],
    images: ["/images/p-hoodie.jpg"],
    colors: [{ name: "Jet Black", hex: "#0a0a0a" }],
    sizes: ["S", "M", "L", "XL", "XXL"],
    rating: 5.0,
    reviewCount: 94,
    reviews: [
      { id: "1", author: "Brian O.", avatar: "BO", rating: 5, date: "2026-08-08", text: "This hoodie is fire. Everyone asks where I got it.", verified: true },
      { id: "2", author: "Sharon M.", avatar: "SM", rating: 5, date: "2026-07-29", text: "So Kampala! Love the art, super warm.", verified: true },
    ],
    featured: true,
    new: true,
    stock: 28,
    details: ["450gsm fleece", "Oversized", "Kangaroo pocket", "Printed in Uganda"]
  },
  {
    id: "light-wash-jeans",
    slug: "light-wash-jeans",
    name: "High-Waist Light Wash Jeans",
    price: 135000,
    priceUSD: 36,
    category: "Bottoms",
    tags: ["Jeans", "Vintage", "High Waist"],
    description: "Vintage-inspired high-waist straight leg jeans in perfect light wash. Soft, breathable, and cut to flatter.",
    story: "Our vintage denim specialist sources and reworks each pair.",
    artist: "Gayita Vintage",
    materials: ["100% Cotton Denim"],
    images: ["/images/p-jeans.jpg"],
    colors: [{ name: "Light Wash", hex: "#a8c0d6" }],
    sizes: ["28", "30", "32", "34", "36"],
    rating: 4.7,
    reviewCount: 76,
    reviews: [
      { id: "1", author: "Joan K.", avatar: "JK", rating: 5, date: "2026-07-10", text: "Perfect fit, high waist sits just right.", verified: true },
    ],
    featured: false,
    new: false,
    stock: 40,
    details: ["High waist", "Straight leg", "Vintage wash", "5-pocket"]
  },
  {
    id: "matatu-sweatshirt",
    slug: "matatu-sweatshirt",
    name: "Matatu Motion — Uganda Sweatshirt",
    price: 125000,
    priceUSD: 34,
    category: "Sweatshirts",
    tags: ["Matatu", "Uganda", "Color Splash", "Street"],
    description: "Cream crewneck with explosive color-splash illustration of the iconic Uganda taxi — Matatu — in motion. Bold, joyful, unapologetically Ugandan street.",
    story: "Celebrating the matatu culture — loud music, bright colors, always moving.",
    artist: "Gayita Street",
    materials: ["Cotton Blend", "Screen Print"],
    images: ["/images/p-sweatshirt.jpg"],
    colors: [{ name: "Oatmeal", hex: "#e8ddd0" }],
    sizes: ["S", "M", "L", "XL", "XXL"],
    rating: 4.8,
    reviewCount: 81,
    reviews: [
      { id: "1", author: "Ivan T.", avatar: "IT", rating: 5, date: "2026-08-02", text: "Colors pop so hard. My favorite sweatshirt.", verified: true },
    ],
    featured: true,
    new: false,
    stock: 33,
    details: ["Brushed fleece", "Ribbed cuffs", "Unisex"]
  },
  {
    id: "varsity-legend",
    slug: "varsity-legend",
    name: "Varsity Legend Jacket — W",
    price: 275000,
    priceUSD: 74,
    category: "Jackets",
    tags: ["Varsity", "Wool", "Leather", "College"],
    description: "Forest green wool body with vintage cream leather sleeves. Embroidered W with stars — a nod to Whiting High legacy. Striped ribbing, snap buttons.",
    story: "Inspired by American vintage varsity found in Owino, reimagined with Ugandan tailoring.",
    artist: "Gayita Vintage",
    materials: ["Wool Blend Body", "Faux Leather Sleeves", "Quilted Lining"],
    images: ["/images/p-varsity.jpg"],
    colors: [{ name: "Forest / Cream", hex: "#1e3a2a" }],
    sizes: ["M", "L", "XL"],
    rating: 4.9,
    reviewCount: 29,
    reviews: [
      { id: "1", author: "Mark W.", avatar: "MW", rating: 5, date: "2026-07-25", text: "Heavy, warm, quality is amazing.", verified: true },
    ],
    featured: false,
    new: false,
    stock: 12,
    details: ["Wool blend", "Snap buttons", "Two pockets", "Limited"]
  },
];

export function formatUGX(amount: number) {
  return new Intl.NumberFormat('en-UG', { style: 'currency', currency: 'UGX', maximumFractionDigits: 0 }).format(amount);
}
