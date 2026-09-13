import Link from "next/link";
import { ArrowRight, ShoppingCart } from "lucide-react";

import { Navbar } from "@/components/marketplace/navbar";
import { CartItemsList } from "@/components/marketplace/cart-items-list";
import { CheckoutButton } from "@/components/marketplace/checkout-button";
import { Button } from "@/components/ui/button";
import { getSession } from "@/lib/session";
import { prisma } from "@/lib/prisma";
import { formatMoney } from "@/lib/utils";

export const metadata = {
  title: "Your cart",
};

export default async function CartPage() {
  const session = await getSession();
  const user = session?.user;

  const cart = user
    ? await prisma.cart.findUnique({
        where: { userId: user.id },
        include: {
          items: {
            orderBy: { createdAt: "desc" },
            include: {
              service: {
                select: {
                  id: true,
                  slug: true,
                  title: true,
                  images: { orderBy: { sortOrder: "asc" }, take: 1 },
                  user: { select: { name: true } },
                },
              },
              package: { select: { name: true } },
            },
          },
        },
      })
    : null;

  const items = cart?.items ?? [];
  const total = items.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <>
      <Navbar />
      <main className="mx-auto max-w-5xl px-4 py-10 sm:px-6">
        <h1 className="flex items-center gap-2 text-2xl font-bold tracking-tight">
          <ShoppingCart className="h-6 w-6" />
          Your cart
        </h1>

        {!user ? (
          <div className="mt-8 rounded-2xl border bg-card p-10 text-center">
            <p className="text-foreground/80">
              Sign in to see your cart.
            </p>
            <Button asChild className="mt-4">
              <Link href="/login">Sign in</Link>
            </Button>
          </div>
        ) : items.length === 0 ? (
          <div className="mt-8 rounded-2xl border bg-card p-10 text-center">
            <p className="text-foreground/80">Your cart is empty.</p>
            <Button asChild className="mt-4">
              <Link href="/marketplace">
                Explore services <ArrowRight />
              </Link>
            </Button>
          </div>
        ) : (
          <div className="mt-8 grid gap-8 lg:grid-cols-[1fr_320px]">
            <CartItemsList items={items} />

            <aside className="h-fit rounded-2xl border bg-card p-5 lg:sticky lg:top-20">
              <p className="text-sm font-semibold">Order summary</p>
              <div className="mt-4 flex items-center justify-between border-t pt-4">
                <span className="text-sm text-muted-foreground">Total</span>
                <span className="text-2xl font-bold">{formatMoney(total)}</span>
              </div>
              <CheckoutButton />
            </aside>
          </div>
        )}
      </main>
    </>
  );
}