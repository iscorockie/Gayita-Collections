"use client";

import React, { createContext, useContext, useEffect, useMemo, useState } from "react";
import { Product } from "./products";

export type CartItem = {
  product: Product;
  size: string;
  color: string;
  quantity: number;
};

type CartContextType = {
  items: CartItem[];
  addItem: (product: Product, size: string, color: string, qty?: number) => void;
  removeItem: (index: number) => void;
  updateQty: (index: number, qty: number) => void;
  clear: () => void;
  total: number;
  totalUSD: number;
  count: number;
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
};

const CartContext = createContext<CartContextType | null>(null);
const STORAGE_KEY = "gayita-cart";

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);
  const [isOpen, setIsOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // This is the browser-only hydration boundary for the persisted cart.
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMounted(true);
    const saved = window.localStorage.getItem(STORAGE_KEY);
    if (!saved) return;

    try {
      const parsed = JSON.parse(saved) as CartItem[];
      if (Array.isArray(parsed)) {
        // Every catalogue piece is one of one. Normalise old cart data so a
        // previously saved cart can never accidentally reserve two copies.
        setItems(parsed.filter((item) => item?.product?.id).map((item) => ({ ...item, quantity: 1 })));
      }
    } catch {
      window.localStorage.removeItem(STORAGE_KEY);
    }
  }, []);

  useEffect(() => {
    if (mounted) window.localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
  }, [items, mounted]);

  const addItem = (product: Product, size: string, color: string, qty = 1) => {
    if (product.stock < 1 || qty < 1) return;

    setItems((previous) => {
      const alreadyInCart = previous.some((item) => item.product.id === product.id);
      if (alreadyInCart) return previous;
      return [...previous, { product, size, color, quantity: 1 }];
    });
    setIsOpen(true);
  };

  const removeItem = (index: number) => setItems((previous) => previous.filter((_, i) => i !== index));

  // Quantity is intentionally capped at one: these are unique garments, not
  // repeatable SKUs.
  const updateQty = (index: number, qty: number) => {
    if (qty <= 0) removeItem(index);
    else setItems((previous) => previous.map((item, i) => (i === index ? { ...item, quantity: 1 } : item)));
  };

  const clear = () => setItems([]);

  const total = useMemo(() => items.reduce((sum, item) => sum + item.product.price * item.quantity, 0), [items]);
  const totalUSD = useMemo(() => items.reduce((sum, item) => sum + item.product.priceUSD * item.quantity, 0), [items]);
  const count = items.length;

  return (
    <CartContext.Provider value={{ items, addItem, removeItem, updateQty, clear, total, totalUSD, count, isOpen, setIsOpen }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) throw new Error("useCart must be used within CartProvider");
  return context;
}
