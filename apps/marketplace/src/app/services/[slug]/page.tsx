import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ChevronRight, Eye, ShoppingBag, Star } from "lucide-react";

import { Navbar } from "@/components/marketplace/navbar";
import { ServiceGallery } from "@/components/marketplace/service-gallery";
import { OrderBox } from "@/components/marketplace/order-box";
import { ServiceCard } from "@/components/marketplace/service-card";
import { CategoryIcon } from "@/components/marketplace/category-icon";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  getRelatedServices,
  getServiceBySlug,
} from "@/lib/queries";
import { LEVEL_BADGE, LEVEL_LABEL } from "@/lib/display";
import { formatDeliveryTime, formatMoney, initials } from "@/lib/utils";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = await getServiceBySlug(slug);
  return {
    title: service ? `${service.title} | IDEONS Marketplace` : "Service not found",
    description: service?.shortDescription ?? undefined,
  };
}

function Stars({ rating }: { rating: number }) {
  return (
    <span className="flex items-center gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          className={
            i < Math.round(rating)
              ? "h-3.5 w-3.5 fill-amber-400 text-amber-400"
              : "h-3.5 w-3.5 text-muted-foreground/40"
          }
        />
      ))}
    </span>
  );
}

export default async function ServiceDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = await getServiceBySlug(slug);

  if (!service) notFound();

  const seller = service.user;
  const profile = seller.freelancerProfile;
  const paragraphs = service.description.split(/\n{2,}/);
  const related = await getRelatedServices(service.id, service.categoryId);

  return (
    <>
      <Navbar />
      <main className="mx-auto max-w-7xl px-4 py-8 sm:px-6">
        <nav className="flex items-center gap-1.5 text-sm text-muted-foreground">
          <Link href="/marketplace" className="hover:text-foreground">
            Marketplace
          </Link>
          <ChevronRight className="h-3.5 w-3.5" />
          <Link
            href={`/marketplace?category=${service.category.slug}`}
            className="hover:text-foreground"
          >
            {service.category.name}
          </Link>
          <ChevronRight className="h-3.5 w-3.5" />
          <span className="truncate font-medium text-foreground">
            {service.title}
          </span>
        </nav>

        <div className="mt-6 grid gap-10 lg:grid-cols-[1fr_380px]">
          <div className="min-w-0">
            <ServiceGallery
              images={service.images.map((img) => ({
                id: img.id,
                url: img.url,
                alt: img.alt ?? "",
              }))}
            />

            <h1 className="mt-6 text-2xl font-bold tracking-tight sm:text-3xl">
              {service.title}
            </h1>

            <div className="mt-4 flex flex-wrap items-center gap-x-4 gap-y-2 text-sm">
              {service.ratingValue > 0 ? (
                <span className="inline-flex items-center gap-1.5">
                  <Star className="h-4 w-4 fill-amber-400 text-amber-400" />
                  <span className="font-semibold">
                    {service.ratingValue.toFixed(1)}
                  </span>
                  <span className="text-muted-foreground">({service.reviewCount} reviews)</span>
                </span>
              ) : (
                <span className="text-muted-foreground">No reviews yet</span>
              )}
              <span className="inline-flex items-center gap-1 text-muted-foreground">
                <ShoppingBag className="h-4 w-4" /> {service.salesCount} sold
              </span>
              <span className="inline-flex items-center gap-1 text-muted-foreground">
                <Eye className="h-4 w-4" /> {service.views} views
              </span>
              <span className="text-muted-foreground">
                {formatDeliveryTime(service.deliveryTime)}
              </span>
              {service.type === "DIGITAL_PRODUCT" ? (
                <Badge variant="secondary">Digital product</Badge>
              ) : null}
            </div>

            {service.shortDescription ? (
              <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
                {service.shortDescription}
              </p>
            ) : null}

            <div className="mt-6 space-y-5">
              {paragraphs.map((paragraph) => (
                <p key={paragraph.slice(0, 40)} className="leading-relaxed text-foreground/90">
                  {paragraph}
                </p>
              ))}
            </div>

            {service.technologies.length > 0 ||
            service.tags.length > 0 ? (
              <div className="mt-8">
                <p className="text-sm font-semibold">Technologies & tags</p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {[...service.technologies, ...service.tags].map((t) => (
                    <Link
                      key={t}
                      href={`/marketplace?q=${encodeURIComponent(t)}`}
                      className="rounded-full border bg-card px-3 py-1 text-xs text-muted-foreground transition-colors hover:text-foreground"
                    >
                      {t}
                    </Link>
                  ))}
                </div>
              </div>
            ) : null}

            <section className="mt-10">
              <h2 className="text-lg font-bold tracking-tight">Frequently asked questions</h2>
              <div className="mt-4 space-y-3">
                {service.faqs.length > 0 ? (
                  service.faqs.map((faq) => (
                    <details
                      key={faq.id}
                      className="group rounded-xl border bg-card px-4 py-3"
                    >
                      <summary className="flex cursor-pointer list-none items-center justify-between gap-3 text-sm font-semibold">
                        {faq.question}
                        <span className="text-muted-foreground">+</span>
                      </summary>
                      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                        {faq.answer}
                      </p>
                    </details>
                  ))
                ) : (
                  <p className="rounded-xl border bg-card px-4 py-6 text-center text-sm text-muted-foreground">
                    No FAQs yet — message the seller with your questions.
                  </p>
                )}
              </div>
            </section>

            <section className="mt-10">
              <h2 className="text-lg font-bold tracking-tight">
                Reviews
                {service.reviewCount > 0 ? ` (${service.reviewCount})` : ""}
              </h2>
              <div className="mt-4">
                {service.reviews.length > 0 ? (
                  <div className="grid gap-4 sm:grid-cols-2">
                    {service.reviews.map((review) => (
                      <div key={review.id} className="rounded-xl border bg-card p-4">
                        <div className="flex items-center gap-2">
                          <Avatar className="h-8 w-8">
                            {review.reviewer.image ? (
                              <AvatarImage src={review.reviewer.image} alt={review.reviewer.name} />
                            ) : null}
                            <AvatarFallback>
                              {initials(review.reviewer.name)}
                            </AvatarFallback>
                          </Avatar>
                          <div>
                            <p className="text-sm font-semibold">{review.reviewer.name}</p>
                            <div className="flex items-center gap-1">
                              <Stars rating={review.rating} />
                              <span className="text-xs text-muted-foreground">
                                {new Intl.DateTimeFormat("en-US", {
                                  dateStyle: "medium",
                                }).format(new Date(review.createdAt))}
                              </span>
                            </div>
                          </div>
                        </div>
                        {review.title ? (
                          <p className="mt-3 text-sm font-semibold">{review.title}</p>
                        ) : null}
                        {review.body ? (
                          <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                            {review.body}
                          </p>
                        ) : null}
                      </div>
                    ))}
                  </div>
                ) : (
                  <p className="rounded-xl border bg-card px-4 py-6 text-center text-sm text-muted-foreground">
                    No reviews yet — be the first to share your experience after purchase.
                  </p>
                )}
              </div>
            </section>
          </div>

          <div className="lg:sticky lg:top-20 lg:self-start">
            <OrderBox
              packages={service.packages.map((p) => ({
                id: p.id,
                name: p.name,
                title: p.title,
                description: p.description,
                price: p.price,
                deliveryTime: p.deliveryTime,
                revisions: p.revisions,
                features: p.features,
              }))}
            />

            <div className="mt-4 rounded-2xl border bg-card p-5">
              <div className="flex items-center gap-3">
                <Avatar className="h-12 w-12">
                  {seller.image ? (
                    <AvatarImage src={seller.image} alt={seller.name} />
                  ) : null}
                  <AvatarFallback>{initials(seller.name)}</AvatarFallback>
                </Avatar>
                <div>
                  <p className="text-sm font-semibold">{seller.name}</p>
                  <p className="text-xs text-muted-foreground">
                    {profile?.title ?? seller.bio ?? "Freelancer"}
                  </p>
                </div>
              </div>

              <div className="mt-3 flex flex-wrap gap-2">
                <Badge variant={LEVEL_BADGE[profile?.level ?? "NEW"]}>
                  {LEVEL_LABEL[profile?.level ?? "NEW"]}
                </Badge>
                {profile?.verified ? <Badge variant="warning">Verified</Badge> : null}
                {seller.location ? (
                  <span className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-medium">
                    {seller.location}
                  </span>
                ) : null}
              </div>

              <dl className="mt-4 grid grid-cols-2 gap-3 border-t pt-4 text-sm">
                <div>
                  <dt className="text-xs text-muted-foreground">Response time</dt>
                  <dd className="font-semibold">
                    {profile?.responseTime ? `~${profile.responseTime}h` : "—"}
                  </dd>
                </div>
                <div>
                  <dt className="text-xs text-muted-foreground">Response rate</dt>
                  <dd className="font-semibold">
                    {profile?.responseRate ? `${profile.responseRate}%` : "—"}
                  </dd>
                </div>
                <div>
                  <dt className="text-xs text-muted-foreground">On-time delivery</dt>
                  <dd className="font-semibold">
                    {profile?.onTimeDelivery ? `${profile.onTimeDelivery}%` : "—"}
                  </dd>
                </div>
                <div>
                  <dt className="text-xs text-muted-foreground">Orders completed</dt>
                  <dd className="font-semibold">{profile?.completedOrders ?? 0}</dd>
                </div>
              </dl>

              {profile && profile.ratingValue > 0 ? (
                <div className="mt-4 flex items-center gap-2 border-t pt-4">
                  <Stars rating={profile.ratingValue} />
                  <span className="text-sm font-semibold">
                    {profile.ratingValue.toFixed(1)}
                  </span>
                  <span className="text-xs text-muted-foreground">
                    ({profile.reviewCount})
                  </span>
                </div>
              ) : null}
            </div>

            <div className="mt-4 rounded-2xl border bg-gradient-to-br from-primary/10 to-fuchsia-500/10 p-5 text-center">
              <div className="flex items-center justify-center gap-1 text-sm text-muted-foreground">
                <CategoryIcon name={service.category.icon} className="h-4 w-4" />
                {service.category.name}
              </div>
              <p className="mt-1 text-sm">
                From{" "}
                <span className="font-bold">
                  {formatMoney(service.minPrice)}
                </span>{" "}
                —{" "}
                <span className="font-bold">{formatMoney(service.maxPrice)}</span>
              </p>
            </div>
          </div>
        </div>

        {related.length > 0 ? (
          <section className="mt-16">
            <h2 className="text-xl font-bold tracking-tight">Related services</h2>
            <div className="mt-6 grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
              {related.map((service) => (
                <ServiceCard key={service.id} service={service} />
              ))}
            </div>
          </section>
        ) : null}
      </main>
    </>
  );
}