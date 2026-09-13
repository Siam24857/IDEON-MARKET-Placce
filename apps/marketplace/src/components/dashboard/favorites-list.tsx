"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { Heart, Loader2, Star } from "lucide-react";

import { MarketImage } from "@/components/marketplace/market-image";
import { Button } from "@/components/ui/button";
import { formatMoney } from "@/lib/utils";

export interface FavoriteListItem {
  favoriteId: string;
  createdAt: string;
  service: {
    id: string;
    slug: string;
    title: string;
    ratingValue: number;
    reviewCount: number;
    minPrice: number;
    imageUrl: string;
    imageAlt: string | null;
    categoryName: string;
    sellerName: string;
  };
}

export function FavoritesList({
  items,
}: {
  items: FavoriteListItem[];
}) {
  const router = useRouter();
  const [itemsState, setItemsState] = useState(items);
  const [removingId, setRemovingId] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  async function remove(favoriteId: string) {
    setRemovingId(favoriteId);
    setError(null);
    try {
      const res = await fetch("/api/dashboard/favorites/remove", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ favoriteId }),
      });
      const json = await res.json();
      if (!json.success) {
        setError(json.message ?? "Something went wrong");
        return;
      }
      setItemsState((prev) =>
        prev.filter((item) => item.favoriteId !== favoriteId)
      );
      router.refresh();
    } catch {
      setError("Something went wrong");
    } finally {
      setRemovingId(null);
    }
  }

  if (itemsState.length === 0) {
    return (
      <div className="flex flex-col items-center rounded-2xl border bg-card p-12 text-center">
        <Heart className="h-10 w-10 text-muted-foreground/40" />
        <h2 className="mt-4 font-semibold">No favorites yet</h2>
        <p className="mt-1 max-w-sm text-sm text-muted-foreground">
          Save services you like while browsing and they’ll appear here.
        </p>
        <Button asChild className="mt-6">
          <Link href="/marketplace">Browse services</Link>
        </Button>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      {error ? (
        <p className="rounded-md border border-destructive/30 bg-destructive/5 p-3 text-sm text-destructive">
          {error}
        </p>
      ) : null}
      <ul className="space-y-3">
        {itemsState.map((item) => (
          <li
            key={item.favoriteId}
            className="flex flex-col gap-4 rounded-xl border bg-card p-4 sm:flex-row sm:items-center"
          >
            <Link
              href={`/services/${item.service.slug}`}
              className="relative h-36 w-full shrink-0 overflow-hidden rounded-lg bg-muted sm:h-20 sm:w-28"
            >
              {item.service.imageUrl ? (
                <MarketImage
                  src={item.service.imageUrl}
                  alt={item.service.imageAlt ?? item.service.title}
                  className="h-full w-full object-cover"
                />
              ) : null}
            </Link>

            <div className="min-w-0 flex-1">
              <Link
                href={`/services/${item.service.slug}`}
                className="block text-sm font-semibold hover:underline"
              >
                {item.service.title}
              </Link>
              <p className="mt-1 text-xs text-muted-foreground">
                {item.service.categoryName} · by {item.service.sellerName}
              </p>
              <div className="mt-1 flex items-center gap-1 text-xs">
                <Star className="h-3.5 w-3.5 fill-amber-400 text-amber-400" />
                <span className="font-semibold">
                  {item.service.ratingValue.toFixed(1)}
                </span>
                <span className="text-muted-foreground">
                  ({item.service.reviewCount})
                </span>
              </div>
            </div>

            <div className="flex items-center justify-between gap-4 sm:flex-col sm:items-end">
              <p className="text-base font-bold">
                {formatMoney(item.service.minPrice)}
              </p>
              <Button
                variant="outline"
                size="sm"
                disabled={removingId === item.favoriteId}
                onClick={() => remove(item.favoriteId)}
              >
                {removingId === item.favoriteId ? (
                  <Loader2 className="animate-spin" />
                ) : (
                  <Heart />
                )}
                Remove
              </Button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}