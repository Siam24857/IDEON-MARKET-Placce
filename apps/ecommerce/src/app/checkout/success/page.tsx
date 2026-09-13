import Link from "next/link";
import { CheckCircle2, CircleAlert, Inbox } from "lucide-react";

import Navbar from "@/components/Navbar";
import { getStripe } from "@/lib/stripe";

export const metadata = {
  title: "Order confirmed",
};

type PageProps = {
  searchParams: Promise<{ session_id?: string }>;
};

export default async function CheckoutSuccessPage({ searchParams }: PageProps) {
  const { session_id } = await searchParams;

  let status: "missing" | "not_paid" | "failed" | "success" = session_id
    ? "failed"
    : "missing";
  let amountTotal = 0;
  let currency = "usd";

  if (session_id) {
    try {
      const stripe = getStripe();
      if (!stripe) {
        status = "failed";
      } else {
        const session = await stripe.checkout.sessions.retrieve(session_id);
        if (session.mode !== "payment" || session.payment_status !== "paid") {
          status = "not_paid";
        } else {
          status = "success";
          amountTotal = session.amount_total ?? 0;
          currency = session.currency ?? "usd";
        }
      }
    } catch (error) {
      console.error("[checkout/success] failed:", error);
      status = "failed";
    }
  }

  return (
    <main className="min-h-screen pt-24 pb-20">
      <Navbar />

      <div className="max-w-xl mx-auto px-6">
        <div className="glass rounded-[3rem] p-10 md:p-16 text-center border-white/5">
          {status === "success" ? (
            <>
              <div className="w-24 h-24 bg-[#00f2ff]/10 rounded-full flex items-center justify-center mx-auto mb-8 border border-[#00f2ff]/20">
                <CheckCircle2 size={48} className="text-[#00f2ff]" />
              </div>
              <h1 className="text-3xl md:text-4xl font-black text-white uppercase mb-6">
                Payment Success
              </h1>
              <p className="text-gray-400 mb-8">
                Thanks for your order! Stripe has confirmed your payment of{" "}
                <span className="text-[#00f2ff] font-bold">
                  {formatPrice(amountTotal, currency)}
                </span>
                . A confirmation email is on its way.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link
                  href="/shop"
                  className="px-10 py-4 bg-[#00f2ff] text-black font-black rounded-2xl hover:scale-105 transition-transform uppercase tracking-widest"
                >
                  Continue Shopping
                </Link>
                <Link
                  href="/dashboard"
                  className="px-10 py-4 glass text-white font-black rounded-2xl hover:bg-white/10 transition-all border-white/10 uppercase tracking-widest"
                >
                  Go to Dashboard
                </Link>
              </div>
            </>
          ) : status === "not_paid" ? (
            <>
              <div className="w-24 h-24 bg-amber-500/10 rounded-full flex items-center justify-center mx-auto mb-8 border border-amber-500/20">
                <CircleAlert size={48} className="text-amber-500" />
              </div>
              <h1 className="text-3xl md:text-4xl font-black text-white uppercase mb-6">
                Payment Not Completed
              </h1>
              <p className="text-gray-400 mb-8">
                We could not find a completed payment for this session. You have
                not been charged. You can try again from your cart.
              </p>
              <Link
                href="/cart"
                className="px-10 py-4 bg-[#00f2ff] text-black font-black rounded-2xl hover:scale-105 transition-transform uppercase tracking-widest"
              >
                Back to Cart
              </Link>
            </>
          ) : (
            <>
              <div className="w-24 h-24 bg-white/5 rounded-full flex items-center justify-center mx-auto mb-8 border border-white/10">
                <Inbox size={48} className="text-gray-500" />
              </div>
              <h1 className="text-3xl md:text-4xl font-black text-white uppercase mb-6">
                {status === "missing" ? "No Checkout Session" : "Something Went Wrong"}
              </h1>
              <p className="text-gray-400 mb-8">
                {status === "missing"
                  ? "This page is meant to be opened right after a Stripe payment."
                  : "We could not confirm your payment right now. Please try again."}
              </p>
              <Link
                href="/cart"
                className="px-10 py-4 bg-[#00f2ff] text-black font-black rounded-2xl hover:scale-105 transition-transform uppercase tracking-widest"
              >
                Back to Cart
              </Link>
            </>
          )}
        </div>
      </div>
    </main>
  );
}

function formatPrice(amount: number, currency: string): string {
  try {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: currency.toUpperCase(),
    }).format(amount / 100);
  } catch {
    return `$${(amount / 100).toFixed(2)}`;
  }
}