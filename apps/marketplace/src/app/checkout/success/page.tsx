import Link from "next/link";
import { CheckCircle2, CircleAlert, Inbox } from "lucide-react";

import { Button } from "@/components/ui/button";

import { Navbar } from "@/components/marketplace/navbar";
import { finalizeCheckoutSession } from "@/lib/stripe";

export const metadata = {
  title: "Checkout",
};

type PageProps = {
  searchParams: Promise<{ session_id?: string }>;
};

export default async function CheckoutSuccessPage({ searchParams }: PageProps) {
  const { session_id } = await searchParams;

  let status:
    | "missing"
    | "not_paid"
    | "processing"
    | "failed"
    | "success" = session_id ? "processing" : "missing";
  let orderCount = 0;

  if (session_id) {
    try {
      const result = await finalizeCheckoutSession(session_id);
      if (result.status === "success" || result.status === "already_finalized") {
        status = "success";
        orderCount = result.orderCount;
      } else if (result.status === "not_paid") {
        status = "not_paid";
      } else {
        status = "failed";
      }
    } catch (error) {
      console.error("[checkout] finalize failed:", error);
      status = "failed";
    }
  }

  return (
    <>
      <Navbar />
      <main className="mx-auto max-w-xl px-4 py-16 sm:px-6">
        <div className="rounded-2xl border bg-card p-10 text-center shadow-sm">
          {status === "success" ? (
            <>
              <CheckCircle2 className="mx-auto h-14 w-14 text-green-600" />
              <h1 className="mt-4 text-2xl font-bold tracking-tight">
                Payment successful
              </h1>
              <p className="mt-2 text-sm text-muted-foreground">
                {orderCount > 0
                  ? `Your order${orderCount > 1 ? "s" : ""} ${
                      orderCount > 1 ? "have" : "has"
                    } been placed and is being prepared by the seller.`
                  : "Your order is being finalized. You can close this page — Stripe has confirmed your payment."}
              </p>
              <div className="mt-6 flex flex-wrap justify-center gap-3">
                <Button asChild>
                  <Link href="/dashboard">Go to dashboard</Link>
                </Button>
                <Button asChild variant="outline">
                  <Link href="/marketplace">Explore more services</Link>
                </Button>
              </div>
            </>
          ) : status === "not_paid" ? (
            <>
              <CircleAlert className="mx-auto h-14 w-14 text-amber-500" />
              <h1 className="mt-4 text-2xl font-bold tracking-tight">
                Payment not completed
              </h1>
              <p className="mt-2 text-sm text-muted-foreground">
                We could not find a completed payment for this session. You have
                not been charged. You can try again from your cart.
              </p>
              <Button asChild className="mt-6">
                <Link href="/cart">Back to cart</Link>
              </Button>
            </>
          ) : (
            <>
              <Inbox className="mx-auto h-14 w-14 text-muted-foreground" />
              <h1 className="mt-4 text-2xl font-bold tracking-tight">
                {status === "missing"
                  ? "No checkout session"
                  : "Something went wrong"}
              </h1>
              <p className="mt-2 text-sm text-muted-foreground">
                {status === "missing"
                  ? "This page is meant to be opened right after a Stripe payment."
                  : "We could not finalize your order right now. Please check your dashboard shortly."}
              </p>
              <Button asChild className="mt-6">
                <Link href="/cart">Back to cart</Link>
              </Button>
            </>
          )}
        </div>
      </main>
    </>
  );
}