"use client";

import { useState } from "react";

import { MarketImage } from "@/components/marketplace/market-image";
import { cn } from "@/lib/utils";

export function ServiceGallery({
  images,
}: {
  images: { id: string; url: string; alt: string }[];
}) {
  const [active, setActive] = useState(0);
  const safe = images.length > 0 ? images : [];
  const current = safe[Math.min(active, Math.max(0, safe.length - 1))];

  return (
    <div>
      <div className="relative aspect-[16/10] overflow-hidden rounded-2xl border bg-muted">
        {current ? (
          <MarketImage
            src={current.url}
            alt={current.alt}
            className="h-full w-full object-cover"
          />
        ) : (
          <div className="flex h-full items-center justify-center text-sm text-muted-foreground">
            No preview available
          </div>
        )}
      </div>
      {safe.length > 1 ? (
        <div className="mt-3 flex flex-wrap gap-2">
          {safe.map((img, i) => (
            <button
              key={img.id}
              type="button"
              onClick={() => setActive(i)}
              className={cn(
                "relative h-16 w-24 overflow-hidden rounded-lg border transition-all",
                i === active
                  ? "border-primary ring-2 ring-primary/40"
                  : "border-border opacity-70 hover:opacity-100"
              )}
              aria-label={`Show image ${i + 1}`}
            >
              <MarketImage
                src={img.url}
                alt={img.alt}
                className="h-full w-full object-cover"
              />
            </button>
          ))}
        </div>
      ) : null}
    </div>
  );
}