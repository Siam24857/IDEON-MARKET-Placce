export interface CartItem {
  id: string;
  quantity: number;
}

const STORAGE_KEY = "nebula-cart";

const DEFAULT_ITEMS: CartItem[] = [
  { id: "p1", quantity: 1 },
  { id: "p2", quantity: 1 },
];

function isValidItems(value: unknown): value is CartItem[] {
  if (!Array.isArray(value)) return false;
  return value.every(
    (item) =>
      item &&
      typeof item === "object" &&
      typeof (item as CartItem).id === "string" &&
      (item as CartItem).quantity > 0
  );
}

export function getCart(): CartItem[] {
  if (typeof window === "undefined") return [];
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return DEFAULT_ITEMS;
    const parsed: unknown = JSON.parse(raw);
    if (!isValidItems(parsed)) return DEFAULT_ITEMS;
    return parsed.map((item) => ({
      id: item.id,
      quantity: Math.max(1, item.quantity),
    }));
  } catch {
    return DEFAULT_ITEMS;
  }
}

export function saveCart(items: CartItem[]): void {
  if (typeof window === "undefined") return;
  try {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
  } catch {
    // Ignore storage errors (private mode, quota, etc.).
  }
}

export function setCart(items: CartItem[]): void {
  saveCart(items);
}

export function addToCart(id: string, quantity = 1): CartItem[] {
  const items = getCart();
  const existing = items.find((item) => item.id === id);
  if (existing) {
    existing.quantity += quantity;
  } else {
    items.push({ id, quantity });
  }
  saveCart(items);
  return items;
}

export function removeFromCart(id: string): CartItem[] {
  const items = getCart().filter((item) => item.id !== id);
  saveCart(items);
  return items;
}