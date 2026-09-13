"use client";

import { useSyncExternalStore } from "react";

import { addToCart, CartItem, getCart, removeFromCart, saveCart } from "@/lib/cart";

const listeners = new Set<() => void>();

function readCart(): CartItem[] {
  try {
    return getCart();
  } catch {
    return [];
  }
}

let current: CartItem[] = readCart();

function subscribe(listener: () => void): () => void {
  listeners.add(listener);
  return () => {
    listeners.delete(listener);
  };
}

function emit(): void {
  current = readCart();
  listeners.forEach((listener) => listener());
}

export function useCart() {
  const items = useSyncExternalStore(subscribe, () => current, () => []);

  const add = (id: string, quantity = 1) => {
    addToCart(id, quantity);
    emit();
  };

  const remove = (id: string) => {
    removeFromCart(id);
    emit();
  };

  const updateQuantity = (id: string, delta: number) => {
    const next = current
      .map((item) =>
        item.id === id
          ? { ...item, quantity: Math.max(1, item.quantity + delta) }
          : item
      )
      .filter((item) => item.quantity > 0);
    saveCart(next);
    emit();
  };

  const clear = () => {
    saveCart([]);
    emit();
  };

  return { items, add, remove, updateQuantity, clear };
}