import Link from "next/link";
import {
  ArrowRight,
  Search,
} from "lucide-react";

import { Navbar } from "@/components/marketplace/navbar";
import { ServiceCard } from "@/components/marketplace/service-card";
import { CategoryIcon } from "@/components/marketplace/category-icon";
import { Button } from "@/components/ui/button";
import { getActiveCategories, getFeedServices } from "@/lib/queries";

const howItWorksBuyer = [
  { step: "Search", text: "Find the digital service your project needs." },
  { step: "Compare", text: "Review portfolios, pricing and delivery times." },
  { step: "Purchase", text: "Buy securely with Stripe — pay only when satisfied." },
  { step: "Communicate", text: "Chat directly with your freelancer." },
  { step: "Receive", text: "Get your delivery with built-in revision support." },
  { step: "Review", text: "Share feedback and help grow the community." },
];

const stepsFreelancer = [
  { step: "Create profile", text: "Showcase your skills and portfolio." },
  { step: "Publish service", text: "List digital services with flexible packages." },
  { step: "Receive order", text: "New orders land straight in your dashboard." },
  { step: "Deliver", text: "Submit work and request reviews." },
  { step: "Get paid", text: "Receive payouts via Stripe Connect." },
];

export default async function HomePage() {
  const [categories, { services }] = await Promise.all([
    getActiveCategories(),
    getFeedServices(12),
  ]);

  return (
    <>
      <Navbar />
      <main>
        <section className="relative overflow-hidden">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(99,102,241,0.15),transparent_60%)]" />
          <div className="mx-auto max-w-7xl px-4 pb-20 pt-16 sm:px-6 sm:pt-24">
            <div className="mx-auto max-w-3xl text-center">
              <p className="mb-4 inline-flex items-center gap-2 rounded-full border bg-background px-3 py-1 text-xs font-medium text-muted-foreground">
                <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                Digital services marketplace
              </p>
              <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
                Find the right digital service for your{" "}
                <span className="bg-gradient-to-r from-primary to-fuchsia-500 bg-clip-text text-transparent">
                  next big idea
                </span>
              </h1>
              <p className="mx-auto mt-5 max-w-2xl text-lg text-muted-foreground">
                Websites, e-commerce platforms, SaaS apps, AI features and
                more — built and delivered by vetted freelancers.
              </p>

              <form
                action="/marketplace"
                className="mx-auto mt-8 flex max-w-xl items-center gap-2 rounded-full border bg-background p-1.5 shadow-sm"
              >
                <Search className="ml-3 h-5 w-5 shrink-0 text-muted-foreground" />
                <input
                  name="q"
                  type="search"
                  placeholder="What service are you looking for?"
                  className="w-full bg-transparent text-sm outline-none placeholder:text-muted-foreground"
                />
                <Button type="submit" size="sm" className="rounded-full">
                  Search
                </Button>
              </form>
            </div>

            <div className="mt-14 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-9">
              {categories.map((cat) => (
                <Link
                  key={cat.slug}
                  href={`/marketplace?category=${cat.slug}`}
                  className="group flex flex-col items-center gap-2 rounded-2xl border bg-card p-4 text-center transition-all hover:-translate-y-0.5 hover:shadow-md"
                >
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-accent text-accent-foreground transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                    <CategoryIcon name={cat.icon} className="h-5 w-5" />
                  </span>
                  <span className="text-xs font-medium">{cat.name}</span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {services.length > 0 ? (
          <section className="border-t bg-muted/40">
            <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6">
              <div className="flex items-end justify-between gap-4">
                <div>
                  <h2 className="text-3xl font-bold tracking-tight">
                    Trending services
                  </h2>
                  <p className="mt-2 text-muted-foreground">
                    Hand-picked, most-loved digital services right now.
                  </p>
                </div>
                <Button asChild variant="outline">
                  <Link href="/marketplace">
                    Explore all <ArrowRight />
                  </Link>
                </Button>
              </div>
              <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                {services.map((service) => (
                  <ServiceCard key={service.id} service={service} />
                ))}
              </div>
            </div>
          </section>
        ) : null}

        <section className="border-t bg-muted/40">
          <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6">
            <h2 className="text-center text-3xl font-bold tracking-tight">
              How it works
            </h2>
            <div className="mt-10 grid gap-8 lg:grid-cols-2">
              <div className="rounded-2xl border bg-card p-6">
                <h3 className="mb-5 text-lg font-semibold">For buyers</h3>
                <ol className="space-y-4">
                  {howItWorksBuyer.map((s, i) => (
                    <li key={s.step} className="flex gap-4">
                      <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary text-xs font-semibold text-primary-foreground">
                        {i + 1}
                      </span>
                      <div>
                        <p className="text-sm font-semibold">{s.step}</p>
                        <p className="text-sm text-muted-foreground">
                          {s.text}
                        </p>
                      </div>
                    </li>
                  ))}
                </ol>
              </div>
              <div className="rounded-2xl border bg-card p-6">
                <h3 className="mb-5 text-lg font-semibold">For freelancers</h3>
                <ol className="space-y-4">
                  {stepsFreelancer.map((s, i) => (
                    <li key={s.step} className="flex gap-4">
                      <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary text-xs font-semibold text-primary-foreground">
                        {i + 1}
                      </span>
                      <div>
                        <p className="text-sm font-semibold">{s.step}</p>
                        <p className="text-sm text-muted-foreground">
                          {s.text}
                        </p>
                      </div>
                    </li>
                  ))}
                </ol>
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6">
          <div className="flex flex-col items-center gap-6 rounded-3xl bg-gradient-to-br from-primary to-fuchsia-600 p-10 text-center text-primary-foreground sm:p-14">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Start building today
            </h2>
            <p className="max-w-xl text-primary-foreground/85">
              Join thousands of buyers and freelancers building the future of
              digital services.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <Button asChild size="lg" className="bg-background text-foreground hover:bg-background/90">
                <Link href="/register">
                  Explore services <ArrowRight />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-primary-foreground/40 text-primary-foreground hover:bg-primary-foreground/10"
              >
                <Link href="/become-a-freelancer">Become a seller</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}