import type { Metadata } from "next";
import Link from "next/link";
import { ChevronLeft, ChevronRight, Search, X } from "lucide-react";

import { Navbar } from "@/components/marketplace/navbar";
import { ServiceCard } from "@/components/marketplace/service-card";
import { CategoryIcon } from "@/components/marketplace/category-icon";
import { Input } from "@/components/ui/input";
import {
  SORT_OPTIONS,
  getActiveCategories,
  getMarketplaceServices,
  type ServiceSort,
} from "@/lib/queries";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Explore services | IDEONS Marketplace",
};

const PAGE_SIZE = 12;

type SearchParams = { [key: string]: string | string[] | undefined };

function toStr(v: string | string[] | undefined) {
  return Array.isArray(v) ? v[0] : v;
}

function buildHref(
  current: SearchParams,
  patch: Record<string, string | null>
) {
  const p = new URLSearchParams();
  for (const [key, value] of Object.entries(current)) {
    const s = toStr(value) ?? "";
    if (s) p.set(key, s);
  }
  for (const [key, value] of Object.entries(patch)) {
    if (value === null || value === "") p.delete(key);
    else p.set(key, value);
  }
  const qs = p.toString();
  return qs ? `/marketplace?${qs}` : "/marketplace";
}

export default async function MarketplacePage({
  searchParams,
}: {
  searchParams: Promise<SearchParams>;
}) {
  const sp = await searchParams;
  const q = toStr(sp.q) ?? "";
  const category = toStr(sp.category);
  const subcategory = toStr(sp.subcategory);
  const type = toStr(sp.type);
  const sortRaw = toStr(sp.sort);
  const sort: ServiceSort = SORT_OPTIONS.some((s) => s.value === sortRaw)
    ? (sortRaw as ServiceSort)
    : "recommended";
  const page = Math.max(1, Number(toStr(sp.page) ?? 1) || 1);

  const [{ services, total, pageSize }, categories] = await Promise.all([
    getMarketplaceServices({ q, category, subcategory, type, sort, page, pageSize: PAGE_SIZE }),
    getActiveCategories(),
  ]);

  const pages = Math.max(1, Math.ceil(total / pageSize));
  const activeCategory = categories.find((c) => c.slug === category);
  const hasFilters = Boolean(q || category || subcategory || type);

  return (
    <>
      <Navbar />
      <main className="mx-auto max-w-7xl px-4 py-8 sm:px-6">
        <form action="/marketplace" className="flex items-center gap-2">
          <div className="relative flex-1">
            <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input
              name="q"
              defaultValue={q}
              placeholder="Search services, topics, or skills…"
              className="pl-9"
            />
          </div>
          <button type="submit" className="sr-only">
            Search
          </button>
        </form>

        {hasFilters ? (
          <div className="mt-4 flex flex-wrap items-center gap-2 text-sm">
            <span className="text-muted-foreground">Active filters:</span>
            {q ? (
              <span className="inline-flex items-center gap-1 rounded-full border bg-card px-3 py-1">
                “{q}”
                <Link href={buildHref(sp, { q: null })} aria-label="Clear search">
                  <X className="h-3.5 w-3.5" />
                </Link>
              </span>
            ) : null}
            {activeCategory ? (
              <span className="inline-flex items-center gap-1 rounded-full border bg-card px-3 py-1">
                {activeCategory.name}
                {subcategory
                  ? ` / ${activeCategory.subcategories.find((s) => s.slug === subcategory)?.name ?? subcategory}`
                  : ""}
                <Link
                  href={buildHref(sp, { category: null, subcategory: null })}
                  aria-label="Clear category"
                >
                  <X className="h-3.5 w-3.5" />
                </Link>
              </span>
            ) : null}
            {type ? (
              <span className="inline-flex items-center gap-1 rounded-full border bg-card px-3 py-1">
                {type === "DIGITAL_PRODUCT" ? "Digital products" : "Services"}
                <Link href={buildHref(sp, { type: null })} aria-label="Clear type">
                  <X className="h-3.5 w-3.5" />
                </Link>
              </span>
            ) : null}
            <Link
              href="/marketplace"
              className="text-xs font-medium text-primary hover:underline"
            >
              Clear all
            </Link>
          </div>
        ) : null}

        <div className="mt-6 grid gap-8 lg:grid-cols-[240px_1fr]">
          <aside className="lg:sticky lg:top-20 lg:self-start">
            <p className="mb-3 text-sm font-semibold">Categories</p>
            <nav className="flex flex-col gap-1">
              <Link
                href={buildHref(sp, { category: null, subcategory: null, page: null })}
                className={cn(
                  "flex items-center gap-2 rounded-lg px-3 py-2 text-sm hover:bg-accent",
                  !category && "bg-accent font-medium"
                )}
              >
                All categories
              </Link>
              {categories.map((cat) => {
                const active = cat.slug === category;
                return (
                  <div key={cat.id}>
                    <Link
                      href={buildHref(sp, { category: cat.slug, subcategory: null, page: null })}
                      className={cn(
                        "flex items-center gap-2 rounded-lg px-3 py-2 text-sm hover:bg-accent",
                        active && "bg-accent font-medium"
                      )}
                    >
                      <CategoryIcon name={cat.icon} className="h-4 w-4 text-muted-foreground" />
                      {cat.name}
                    </Link>
                    {active && cat.subcategories.length > 0 ? (
                      <div className="ml-5 mt-1 flex flex-col gap-1 border-l pl-3">
                        {cat.subcategories.map((sub) => (
                          <Link
                            key={sub.id}
                            href={buildHref(sp, { subcategory: sub.slug, page: null })}
                            className={cn(
                              "rounded-md px-2 py-1 text-xs text-muted-foreground hover:bg-accent hover:text-foreground",
                              subcategory === sub.slug && "bg-accent font-medium text-foreground"
                            )}
                          >
                            {sub.name}
                          </Link>
                        ))}
                      </div>
                    ) : null}
                  </div>
                );
              })}
            </nav>
          </aside>

          <div>
            <div className="flex flex-wrap items-center justify-between gap-3">
              <p className="text-sm text-muted-foreground">
                {total} service{total === 1 ? "" : "s"}
                {q ? (
                  <>
                    {" "}
                    for <span className="font-medium text-foreground">“{q}”</span>
                  </>
                ) : null}
              </p>
              <div className="flex flex-wrap items-center gap-1 rounded-lg border bg-card p-1">
                {SORT_OPTIONS.map((opt) => (
                  <Link
                    key={opt.value}
                    href={buildHref(sp, { sort: opt.value, page: null })}
                    className={cn(
                      "rounded-md px-3 py-1.5 text-xs font-medium transition-colors hover:bg-accent",
                      sort === opt.value && "bg-primary text-primary-foreground hover:bg-primary"
                    )}
                  >
                    {opt.label}
                  </Link>
                ))}
              </div>
            </div>

            {services.length > 0 ? (
              <div className="mt-6 grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
                {services.map((service) => (
                  <ServiceCard key={service.id} service={service} />
                ))}
              </div>
            ) : (
              <div className="mt-10 rounded-2xl border bg-card p-10 text-center">
                <p className="font-semibold">No services found</p>
                <p className="mt-1 text-sm text-muted-foreground">
                  Try adjusting your search or filters.
                </p>
                <Link
                  href="/marketplace"
                  className="mt-4 inline-block text-sm font-medium text-primary hover:underline"
                >
                  Browse everything
                </Link>
              </div>
            )}

            {pages > 1 ? (
              <div className="mt-10 flex items-center justify-center gap-2">
                <Link
                  href={buildHref(sp, { page: String(Math.max(1, page - 1)) })}
                  className={cn(
                    "inline-flex h-9 items-center gap-1 rounded-lg border bg-card px-3 text-sm font-medium",
                    page <= 1 && "pointer-events-none opacity-40"
                  )}
                  aria-disabled={page <= 1}
                >
                  <ChevronLeft className="h-4 w-4" /> Prev
                </Link>
                <span className="px-2 text-sm text-muted-foreground">
                  Page {page} of {pages}
                </span>
                <Link
                  href={buildHref(sp, { page: String(Math.min(pages, page + 1)) })}
                  className={cn(
                    "inline-flex h-9 items-center gap-1 rounded-lg border bg-card px-3 text-sm font-medium",
                    page >= pages && "pointer-events-none opacity-40"
                  )}
                  aria-disabled={page >= pages}
                >
                  Next <ChevronRight className="h-4 w-4" />
                </Link>
              </div>
            ) : null}
          </div>
        </div>
      </main>
    </>
  );
}