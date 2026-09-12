"use client";

import Link from "next/link";
import { useState } from "react";
import { Check, Clock, RefreshCcw } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { cn, formatDeliveryTime, formatMoney } from "@/lib/utils";

export interface OrderPackage {
  id: string;
  name: string;
  title: string | null;
  description: string | null;
  price: number;
  deliveryTime: number;
  revisions: number;
  features: string[];
}

export function OrderBox({ packages }: { packages: OrderPackage[] }) {
  const [selected, setSelected] = useState(0);
  const pkg = packages[Math.min(selected, Math.max(0, packages.length - 1))];

  return (
    <div className="rounded-2xl border bg-card p-5 shadow-sm">
      <p className="text-sm font-semibold">Choose your package</p>

      <div className="mt-3 grid gap-2">
        {packages.map((p, i) => (
          <button
            key={p.id}
            type="button"
            onClick={() => setSelected(i)}
            className={cn(
              "flex items-center justify-between rounded-xl border px-4 py-3 text-left transition-all",
              i === selected
                ? "border-primary bg-primary/5 ring-1 ring-primary/30"
                : "hover:border-muted-foreground/40"
            )}
          >
            <span className="flex flex-col">
              <span className="text-sm font-semibold">{p.title ?? p.name}</span>
              <span className="text-xs text-muted-foreground">
                {p.description ?? ""}
              </span>
            </span>
            <span className="shrink-0 text-sm font-bold">
              {formatMoney(p.price)}
            </span>
          </button>
        ))}
      </div>

      {pkg ? (
        <div className="mt-5">
          <div className="flex flex-wrap gap-2">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-muted px-3 py-1 text-xs font-medium">
              <Clock className="h-3.5 w-3.5" />
              {formatDeliveryTime(pkg.deliveryTime)}
            </span>
            <span className="inline-flex items-center gap-1.5 rounded-full bg-muted px-3 py-1 text-xs font-medium">
              <RefreshCcw className="h-3.5 w-3.5" />
              {pkg.revisions} revision{pkg.revisions === 1 ? "" : "s"}
            </span>
          </div>

          {pkg.features.length > 0 ? (
            <ul className="mt-4 space-y-2">
              {pkg.features.map((feature) => (
                <li key={feature} className="flex items-start gap-2 text-sm">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-emerald-500" />
                  {feature}
                </li>
              ))}
            </ul>
          ) : null}

          <div className="mt-5 flex items-center justify-between">
            <p className="text-2xl font-bold">{formatMoney(pkg.price)}</p>
            <Badge variant="secondary">{pkg.name}</Badge>
          </div>

          <Button asChild size="lg" className="mt-4 w-full">
            <Link href="/login">Continue — sign in to order</Link>
          </Button>
          <p className="mt-2 text-center text-xs text-muted-foreground">
            Checkout with Stripe is coming in a later phase.
          </p>
        </div>
      ) : null}
    </div>
  );
}