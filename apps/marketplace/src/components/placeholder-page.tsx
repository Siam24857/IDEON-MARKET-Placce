import Link from "next/link";
import { Construction } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Navbar } from "@/components/marketplace/navbar";

export function PlaceholderPage({
  title,
  description,
  ctaLabel = "Back to home",
  ctaHref = "/",
}: {
  title: string;
  description: string;
  ctaLabel?: string;
  ctaHref?: string;
}) {
  return (
    <>
      <Navbar />
      <main className="flex flex-1 flex-col items-center justify-center px-4 py-24 text-center">
        <Construction className="h-14 w-14 text-muted-foreground/40" />
        <h1 className="mt-6 text-3xl font-bold tracking-tight">{title}</h1>
        <p className="mt-3 max-w-md text-muted-foreground">{description}</p>
        <Button asChild className="mt-8">
          <Link href={ctaHref}>{ctaLabel}</Link>
        </Button>
      </main>
    </>
  );
}