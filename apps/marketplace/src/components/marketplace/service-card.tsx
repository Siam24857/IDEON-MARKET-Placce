import Link from "next/link";
import { Star } from "lucide-react";

import { MarketImage } from "@/components/marketplace/market-image";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { formatDeliveryTime, formatMoney, initials } from "@/lib/utils";
import { LEVEL_LABEL } from "@/lib/display";
import type { ServiceFeedItem } from "@/lib/queries";

export function ServiceCard({ service }: { service: ServiceFeedItem }) {
  const cover = service.images[0];
  const seller = service.user;
  const level = seller.freelancerProfile?.level;

  return (
    <Link
      href={`/services/${service.slug}`}
      className="group flex flex-col overflow-hidden rounded-2xl border bg-card shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-md"
    >
      <div className="relative aspect-[16/10] overflow-hidden bg-muted">
        {cover ? (
          <MarketImage
            src={cover.url}
            alt={cover.alt ?? service.title}
            className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-[1.03]"
          />
        ) : null}
        {service.isFeatured ? (
          <Badge className="absolute left-3 top-3">Featured</Badge>
        ) : null}
      </div>

      <div className="flex flex-1 flex-col gap-3 p-4">
        <p className="text-xs font-medium text-muted-foreground">
          {service.category.name}
          {service.type === "DIGITAL_PRODUCT" ? " · Digital product" : ""}
        </p>

        <p className="line-clamp-2 text-sm font-semibold">{service.title}</p>

        <div className="mt-auto flex items-center gap-2">
          <Avatar className="h-8 w-8">
            {seller.image ? <AvatarImage src={seller.image} alt={seller.name} /> : null}
            <AvatarFallback>{initials(seller.name)}</AvatarFallback>
          </Avatar>
          <div className="flex min-w-0 flex-col">
            <span className="truncate text-xs font-medium">{seller.name}</span>
            {level ? (
              <span className="text-[11px] text-muted-foreground">
                {LEVEL_LABEL[level] ?? level}
              </span>
            ) : null}
          </div>

          <div className="ml-auto flex items-center gap-1">
            <Star className="h-3.5 w-3.5 fill-amber-400 text-amber-400" />
            <span className="text-xs font-semibold">
              {service.ratingValue.toFixed(1)}
            </span>
            <span className="text-xs text-muted-foreground">
              ({service.reviewCount})
            </span>
          </div>
        </div>

        <div className="flex items-end justify-between border-t pt-3">
          <span className="text-xs text-muted-foreground">
            {formatDeliveryTime(service.deliveryTime)}
          </span>
          <p className="text-sm">
            <span className="text-muted-foreground">From </span>
            <span className="text-base font-bold">
              {formatMoney(service.minPrice)}
            </span>
          </p>
        </div>
      </div>
    </Link>
  );
}