"use client";

import { useState } from "react";
import { CreditCard, Loader2 } from "lucide-react";

import { Button } from "@/components/ui/button";

export function CheckoutButton() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function startCheckout() {
    setLoading(true);
    setError(null);
    try {
      const res = await fetch("/api/checkout", { method: "POST" });
      const data = await res.json();
      if (data.success && data.data.url) {
        window.location.href = data.data.url;
      } else {
        setError(data.message ?? "Could not start checkout.");
      }
    } catch {
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      <Button
        className="mt-4 w-full"
        onClick={() => startCheckout()}
        disabled={loading}
      >
        {loading ? (
          <Loader2 className="animate-spin" />
        ) : (
          <CreditCard />
        )}
        {loading ? "Redirecting to Stripe…" : "Checkout"}
      </Button>
      {error ? (
        <p className="mt-2 text-center text-xs text-destructive">{error}</p>
      ) : null}
      <p className="mt-2 text-center text-xs text-muted-foreground">
        Secure checkout powered by Stripe.
      </p>
    </>
  );
}