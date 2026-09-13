"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Trash2 } from "lucide-react";

import { Button } from "@/components/ui/button";
import { formatMoney } from "@/lib/utils";

export interface CartItemRow {
  id: string;
  quantity: number;
  price: number;
  service: {
    id: string;
    slug: string;
    title: string;
    images: { url: string; alt: string | null }[];
    user: { name: string };
  };
  package: { name: string };
}

export function CartItemsList({ items }: { items: CartItemRow[] }) {
  const [removingId, setRemovingId] = useState<string | null>(null);
  const [removed, setRemoved] = useState<string[]>([]);

  const visible = items.filter((item) => !removed.includes(item.id));

  async function remove(item: CartItemRow) {
    setRemovingId(item.id);
    try {
      const res = await fetch("/api/cart", {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id: item.id }),
      });
      const data = await res.json();
      if (data.success) {
        setRemoved((r) => [...r, item.id]);
      } else {
        alert(data.message ?? "Could not remove item");
      }
    } catch {
      alert("Something went wrong");
    } finally {
      setRemovingId(null);
    }
  }

  if (visible.length === 0) {
    return (
      <p className="rounded-2xl border bg-card p-6 text-center text-sm text-muted-foreground">
        Your cart is empty.
      </p>
    );
  }

  return (
    <div className="rounded-2xl border bg-card">
      <ul className="divide-y">
        {visible.map((item) => (
          <li key={item.id} className="flex items-center gap-4 p-4">
            {item.service.images[0] ? (
              <Image
                src={item.service.images[0].url}
                alt={item.service.images[0].alt ?? item.service.title}
                width={72}
                height={72}
                className="h-18 w-18 shrink-0 rounded-xl border object-cover"
              />
            ) : (
              <div className="h-18 w-18 shrink-0 rounded-xl border bg-muted" />
            )}

            <div className="min-w-0 flex-1">
              <Link
                href={`/services/${item.service.slug}`}
                className="line-clamp-1 text-sm font-semibold hover:underline"
              >
                {item.service.title}
              </Link>
              <p className="text-xs text-muted-foreground">
                by {item.service.user.name}
              </p>
              <div className="mt-1 flex items-center gap-2">
                <span className="rounded-full bg-muted px-2 py-0.5 text-xs font-medium">
                  {item.package.name}
                </span>
                {item.quantity > 1 ? (
                  <span className="text-xs text-muted-foreground">
                    × {item.quantity}
                  </span>
                ) : null}
              </div>
            </div>

            <div className="flex flex-col items-end gap-1">
              <span className="text-sm font-bold">
                {formatMoney(item.price * item.quantity)}
              </span>
              <Button
                variant="ghost"
                size="sm"
                className="text-muted-foreground hover:text-destructive"
                disabled={removingId === item.id}
                onClick={() => remove(item)}
              >
                <Trash2 />
                Remove
              </Button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}