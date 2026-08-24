"use client";
import React, { createContext, useContext, useEffect, useState } from "react";
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
  setIsOpen: (o: boolean) => void;
};

const CartContext = createContext<CartContextType | null>(null);

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);
  const [isOpen, setIsOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const saved = localStorage.getItem("gayita-cart");
    if (saved) {
      try {
        setItems(JSON.parse(saved));
      } catch {}
    }
  }, []);

  useEffect(() => {
    if (mounted) localStorage.setItem("gayita-cart", JSON.stringify(items));
  }, [items, mounted]);

  const addItem = (product: Product, size: string, color: string, qty = 1) => {
    setItems(prev => {
      const idx = prev.findIndex(i => i.product.id === product.id && i.size === size && i.color === color);
      if (idx > -1) {
        const copy = [...prev];
        copy[idx] = { ...copy[idx], quantity: copy[idx].quantity + qty };
        return copy;
      }
      return [...prev, { product, size, color, quantity: qty }];
    });
    setIsOpen(true);
  };

  const removeItem = (index: number) => setItems(prev => prev.filter((_, i) => i !== index));
  const updateQty = (index: number, qty: number) => {
    if (qty <= 0) removeItem(index);
    else setItems(prev => prev.map((it, i) => i === index ? { ...it, quantity: qty } : it));
  };
  const clear = () => setItems([]);

  const total = items.reduce((s, it) => s + it.product.price * it.quantity, 0);
  const totalUSD = items.reduce((s, it) => s + it.product.priceUSD * it.quantity, 0);
  const count = items.reduce((s, it) => s + it.quantity, 0);

  return (
    <CartContext.Provider value={{ items, addItem, removeItem, updateQty, clear, total, totalUSD, count, isOpen, setIsOpen }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used within CartProvider");
  return ctx;
}
