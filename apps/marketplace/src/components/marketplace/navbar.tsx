import Link from "next/link";
import { ShoppingCart } from "lucide-react";

import { BrandLogo } from "@/components/brand-logo";
import { AskAiButton } from "@/components/marketplace/ask-ai-button";
import { ThemeToggle } from "@/components/theme-toggle";
import { Button } from "@/components/ui/button";
import { getSession } from "@/lib/session";
import { prisma } from "@/lib/prisma";

export async function Navbar() {
  const session = await getSession();
  const user = session?.user;

  const cartCount = user
    ? await prisma.cartItem
        .aggregate({
          where: { cart: { userId: user.id } },
          _count: { _all: true },
        })
        .then((r) => r._count._all)
    : 0;

  return (
    <header className="sticky top-0 z-50 border-b bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-4 px-4 sm:px-6">
        <BrandLogo />

        <nav className="hidden items-center gap-6 text-sm font-medium text-muted-foreground md:flex">
          <Link href="/marketplace" className="hover:text-foreground">
            Explore
          </Link>
          <Link href="/marketplace" className="hover:text-foreground">
            Categories
          </Link>
          <Link href="/become-a-freelancer" className="hover:text-foreground">
            Become a seller
          </Link>
        </nav>

        <div className="flex items-center gap-2">
          <AskAiButton />
          <ThemeToggle />
          {user ? (
            <>
              <Button asChild variant="ghost" size="sm" className="relative">
                <Link href="/cart" aria-label="Cart">
                  <ShoppingCart />
                  {cartCount > 0 ? (
                    <span className="absolute -right-1 -top-1 flex h-4 min-w-4 items-center justify-center rounded-full bg-primary px-1 text-[10px] font-bold text-primary-foreground">
                      {cartCount}
                    </span>
                  ) : null}
                </Link>
              </Button>
              <Button asChild size="sm">
                <Link href="/dashboard">Dashboard</Link>
              </Button>
            </>
          ) : (
            <>
              <Button asChild variant="ghost" size="sm">
                <Link href="/login">Sign in</Link>
              </Button>
              <Button asChild size="sm">
                <Link href="/register">Join now</Link>
              </Button>
            </>
          )}
        </div>
      </div>
    </header>
  );
}