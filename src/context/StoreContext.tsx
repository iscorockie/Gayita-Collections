import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import type { CartItem, OrderDetails, Review } from "../lib/types";
import { getProduct } from "../data/products";

const CART_KEY = "gayita_cart_v1";
const REV_KEY = "gayita_reviews_v1";
const ORD_KEY = "gayita_orders_v1";
const WISH_KEY = "gayita_wishlist_v1";
const NOTIFY_KEY = "gayita_notify_v1";

function load<T>(key: string, fallback: T): T {
  try {
    const raw = localStorage.getItem(key);
    return raw ? (JSON.parse(raw) as T) : fallback;
  } catch {
    return fallback;
  }
}
function save(key: string, value: unknown) {
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch {
    /* private mode */
  }
}

interface StoreContextValue {
  cart: CartItem[];
  cartCount: number;
  subtotal: number;
  drawerOpen: boolean;
  toast: string | null;
  bump: number;
  orders: OrderDetails[];
  wishlist: string[];
  notifyList: string[];
  addItem: (slug: string, size: string, qty?: number, openDrawer?: boolean) => void;
  setQty: (slug: string, size: string, qty: number) => void;
  removeItem: (slug: string, size: string) => void;
  clearCart: () => void;
  openDrawer: () => void;
  closeDrawer: () => void;
  toggleWishlist: (slug: string) => boolean;
  toggleNotify: (slug: string) => boolean;
  localReviewsFor: (slug: string) => Review[];
  addReview: (slug: string, r: Omit<Review, "id" | "local" | "date" | "verified">) => void;
  placeOrder: (o: OrderDetails) => void;
  showToast: (m: string) => void;
}

const StoreContext = createContext<StoreContextValue | null>(null);

export function StoreProvider({ children }: { children: React.ReactNode }) {
  const [cart, setCart] = useState<CartItem[]>(() => load(CART_KEY, []));
  const [localReviews, setLocalReviews] = useState<Record<string, Review[]>>(() => load(REV_KEY, {}));
  const [orders, setOrders] = useState<OrderDetails[]>(() => load(ORD_KEY, []));
  const [wishlist, setWishlist] = useState<string[]>(() => load(WISH_KEY, []));
  const [notifyList, setNotifyList] = useState<string[]>(() => load(NOTIFY_KEY, []));
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [toast, setToast] = useState<string | null>(null);
  const [bump, setBump] = useState(0);
  const toastTimer = useRef<number | null>(null);
  const prevCount = useRef(0);

  useEffect(() => save(CART_KEY, cart), [cart]);
  useEffect(() => save(REV_KEY, localReviews), [localReviews]);
  useEffect(() => save(ORD_KEY, orders), [orders]);
  useEffect(() => save(WISH_KEY, wishlist), [wishlist]);
  useEffect(() => save(NOTIFY_KEY, notifyList), [notifyList]);

  const cartCount = useMemo(() => cart.reduce((s, i) => s + i.qty, 0), [cart]);
  const subtotal = useMemo(
    () =>
      cart.reduce((s, i) => {
        const p = getProduct(i.slug);
        return p ? s + p.price * i.qty : s;
      }, 0),
    [cart]
  );

  useEffect(() => {
    if (cartCount > prevCount.current) setBump((b) => b + 1);
    prevCount.current = cartCount;
  }, [cartCount]);

  useEffect(() => {
    document.body.style.overflow = drawerOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [drawerOpen]);

  const showToast = useCallback((m: string) => {
    setToast(m);
    if (toastTimer.current) window.clearTimeout(toastTimer.current);
    toastTimer.current = window.setTimeout(() => setToast(null), 2600);
  }, []);

  const addItem = useCallback((slug: string, size: string, qty = 1, openDrawer = true) => {
    setCart((c) => {
      const idx = c.findIndex((i) => i.slug === slug && i.size === size);
      if (idx >= 0) {
        const next = [...c];
        next[idx] = { ...next[idx], qty: Math.min(next[idx].qty + qty, 10) };
        return next;
      }
      return [...c, { slug, size, qty }];
    });
    if (openDrawer) setDrawerOpen(true);
  }, []);

  const setQty = useCallback((slug: string, size: string, qty: number) => {
    setCart((c) =>
      qty <= 0
        ? c.filter((i) => !(i.slug === slug && i.size === size))
        : c.map((i) => (i.slug === slug && i.size === size ? { ...i, qty } : i))
    );
  }, []);

  const removeItem = useCallback((slug: string, size: string) => {
    setCart((c) => c.filter((i) => !(i.slug === slug && i.size === size)));
  }, []);

  const clearCart = useCallback(() => setCart([]), []);
  const openDrawer = useCallback(() => setDrawerOpen(true), []);
  const closeDrawer = useCallback(() => setDrawerOpen(false), []);

  const toggleWishlist = useCallback((slug: string) => {
    let added = false;
    setWishlist((w) => {
      if (w.includes(slug)) return w.filter((s) => s !== slug);
      added = true;
      return [...w, slug];
    });
    return added;
  }, []);

  const toggleNotify = useCallback((slug: string) => {
    let added = false;
    setNotifyList((n) => {
      if (n.includes(slug)) return n.filter((s) => s !== slug);
      added = true;
      return [...n, slug];
    });
    return added;
  }, []);

  const localReviewsFor = useCallback((slug: string) => localReviews[slug] ?? [], [localReviews]);

  const addReview = useCallback<StoreContextValue["addReview"]>((slug, r) => {
    const review: Review = {
      ...r,
      id: `local-${Date.now()}`,
      local: true,
      verified: false,
      date: new Date().toLocaleDateString("en-GB", { day: "2-digit", month: "short", year: "numeric" }),
    };
    setLocalReviews((s) => ({ ...s, [slug]: [review, ...(s[slug] ?? [])] }));
  }, []);

  const placeOrder = useCallback((o: OrderDetails) => setOrders((s) => [o, ...s]), []);

  const value: StoreContextValue = {
    cart,
    cartCount,
    subtotal,
    drawerOpen,
    toast,
    bump,
    orders,
    wishlist,
    notifyList,
    addItem,
    setQty,
    removeItem,
    clearCart,
    openDrawer,
    closeDrawer,
    toggleWishlist,
    toggleNotify,
    localReviewsFor,
    addReview,
    placeOrder,
    showToast,
  };

  return <StoreContext.Provider value={value}>{children}</StoreContext.Provider>;
}

export function useStore() {
  const ctx = useContext(StoreContext);
  if (!ctx) throw new Error("useStore must be used inside StoreProvider");
  return ctx;
}
