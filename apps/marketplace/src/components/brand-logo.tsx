import Link from "next/link";
import { Sparkles } from "lucide-react";

export function BrandLogo({
  className = "",
  link = true,
}: {
  className?: string;
  link?: boolean;
}) {
  const content = (
    <span
      className={`inline-flex items-center gap-2 text-lg font-bold tracking-tight ${className}`}
    >
      <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-primary-foreground">
        <Sparkles className="h-4 w-4" />
      </span>
      IDEONS
      <span className="font-medium text-muted-foreground">Marketplace</span>
    </span>
  );

  if (!link) return content;
  return <Link href="/">{content}</Link>;
}