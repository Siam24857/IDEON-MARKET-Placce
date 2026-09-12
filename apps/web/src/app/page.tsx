import Link from "next/link";
import {
  Briefcase,
  BookOpen,
  Boxes,
  FolderKanban,
  Globe,
  Layers,
  Sparkles,
  Store,
} from "lucide-react";
import { Button, Card, CardDescription, CardHeader, CardTitle } from "@ideons/ui";
import { MARKETPLACE_URL } from "@/lib/env-public";

const modules = [
  {
    name: "Marketplace",
    description: "Buy & sell digital services with verified freelancers.",
    icon: Store,
    href: `${MARKETPLACE_URL}/marketplace`,
  },
  {
    name: "E-commerce",
    description: "Physical and digital products from one store.",
    icon: Boxes,
    href: `${MARKETPLACE_URL}/marketplace`,
    soon: true,
  },
  {
    name: "Job Hunter",
    description: "Find roles, upload your resume and track applications.",
    icon: Briefcase,
    href: "/dashboard",
    soon: true,
  },
  {
    name: "E-Books",
    description: "Read and buy books written by our community.",
    icon: BookOpen,
    href: "/dashboard",
    soon: true,
  },
  {
    name: "Resources",
    description: "Templates, guides and tools to ship faster.",
    icon: Layers,
    href: "/dashboard",
    soon: true,
  },
  {
    name: "Portfolio",
    description: "Showcase your projects in one place.",
    icon: FolderKanban,
    href: "/dashboard",
    soon: true,
  },
  {
    name: "Company ID",
    description: "ID cards and org management for your team.",
    icon: Globe,
    href: "/dashboard",
    soon: true,
  },
  {
    name: "Ingetic AI",
    description: "A career mentor powered by AI.",
    icon: Sparkles,
    href: "/dashboard",
    soon: true,
  },
];

export default function HomePage() {
  return (
    <main className="flex-1">
      <header className="border-b">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4">
          <Link href="/" className="text-lg font-bold">
            IDEONS{" "}
            <span className="text-primary">Ecosystem</span>
          </Link>
          <nav className="flex items-center gap-3">
            <Link href="/login">
              <Button variant="ghost">Sign in</Button>
            </Link>
            <Link href="/register">
              <Button>Get started</Button>
            </Link>
          </nav>
        </div>
      </header>

      <section className="mx-auto max-w-6xl px-4 py-20 text-center">
        <h1 className="mx-auto max-w-3xl text-4xl font-extrabold tracking-tight sm:text-6xl">
          One account for every digital
          <span className="text-primary"> work</span> you do.
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground">
          Marketplace, store, jobs, e-books, resources, portfolio and AI —
          connected through a single IDEONS identity and one dashboard.
        </p>
        <div className="mt-8 flex items-center justify-center gap-3">
          <Link href="/register">
            <Button size="lg">Create your account</Button>
          </Link>
          <Link href="/dashboard">
            <Button size="lg" variant="outline">
              Open dashboard
            </Button>
          </Link>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 pb-20">
        <h2 className="mb-8 text-2xl font-bold">Inside the ecosystem</h2>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {modules.map((mod) => (
            <Link key={mod.name} href={mod.href}>
              <Card className="h-full transition hover:shadow-md">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-base">
                    <mod.icon className="h-4 w-4 text-primary" />
                    {mod.name}
                    {mod.soon && (
                      <span className="ml-auto rounded-full bg-muted px-2 py-0.5 text-[10px] font-medium text-muted-foreground">
                        Soon
                      </span>
                    )}
                  </CardTitle>
                  <CardDescription>{mod.description}</CardDescription>
                </CardHeader>
              </Card>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}