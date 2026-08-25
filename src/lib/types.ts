export type Category = "vintage" | "custom" | "kicks" | "accessories";

export interface GalleryImage {
  src: string;
  /** render as zoomed detail crop in the gallery */
  zoom?: boolean;
}

export interface Swatch {
  hex: string;
  name: string;
}

export interface Review {
  id: string;
  author: string;
  handle?: string;
  rating: number; // 1-5
  date: string;
  title: string;
  text: string;
  verified: boolean;
  local?: boolean;
}

export interface Product {
  slug: string;
  name: string;
  line: string;
  category: Category;
  price: number; // UGX
  compareAt?: number;
  sizes: string[];
  colors: Swatch[];
  oneOfOne?: boolean;
  isNew?: boolean;
  isBestseller?: boolean;
  /** locked until the Friday 8PM drop — notify instead of buy */
  isDrop?: boolean;
  stock: number;
  addedAt: number;
  short: string;
  description: string;
  story: string;
  fabric: string;
  care: string;
  images: GalleryImage[];
  reviews: Review[];
}

export interface CartItem {
  slug: string;
  size: string;
  qty: number;
}

export type DeliveryMethod = "pickup" | "kampala" | "upcountry";
export type PaymentMethod = "mtn" | "airtel" | "cod";

export interface OrderDetails {
  id: string;
  placedAt: string;
  items: CartItem[];
  subtotal: number;
  deliveryFee: number;
  total: number;
  contact: { name: string; phone: string; email?: string };
  delivery: { method: DeliveryMethod; address: string; note?: string };
  payment: { method: PaymentMethod; phone?: string };
}
