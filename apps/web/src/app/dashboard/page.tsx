import Link from "next/link";
import {
  Boxes,
  Briefcase,
  BookOpen,
  FolderKanban,
  Layers,
  Sparkles,
  Store,
  UserRound,
} from "lucide-react";
import { requireUser } from "@ideons/auth";
import { prisma } from "@ideons/database";
import { Avatar, AvatarFallback, AvatarImage, Button, Card, CardContent, CardDescription, CardHeader, CardTitle } from "@ideons/ui";
import { MARKETPLACE_URL } from "@/lib/env-public";

export const dynamic = "force-dynamic";

export default async function DashboardPage() {
  const session = await requireUser();
  const user = session.user;

  const [
    services,
    jobs,
    products,
    books,
    resources,
    projects,
    conversations,
  ] = await Promise.all([
    prisma.service.count(),
    prisma.job.count(),
    prisma.product.count(),
    prisma.book.count(),
    prisma.resource.count(),
    prisma.portfolioProject.count(),
    prisma.aIConversation.count(),
  ]);

  const modules = [
    { name: "Marketplace", desc: `${services} services live`, icon: Store, href: `${MARKETPLACE_URL}/marketplace` },
    { name: "Store", desc: `${products} products`, icon: Boxes, href: `${MARKETPLACE_URL}/marketplace` },
    { name: "Job Hunter", desc: `${jobs} open jobs`, icon: Briefcase, href: "#" },
    { name: "E-Books", desc: `${books} books`, icon: BookOpen, href: "#" },
    { name: "Resources", desc: `${resources} resources`, icon: Layers, href: "#" },
    { name: "Portfolio", desc: `${projects} projects`, icon: FolderKanban, href: "#" },
    { name: "Ingetic AI", desc: `${conversations} conversations`, icon: Sparkles, href: "#" },
  ];

  return (
    <main className="min-h-svh bg-muted/30">
      <header className="border-b bg-background">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4">
          <Link href="/" className="text-lg font-bold">
            IDEONS <span className="text-primary">Dashboard</span>
          </Link>
          <div className="flex items-center gap-3">
            <Link href={`${MARKETPLACE_URL}/marketplace`}>
              <Button variant="outline" size="sm">
                Explore marketplace
              </Button>
            </Link>
            <Avatar className="h-8 w-8">
              <AvatarImage src={user.image ?? ""} alt={user.name} />
              <AvatarFallback>
                <UserRound className="h-4 w-4" />
              </AvatarFallback>
            </Avatar>
          </div>
        </div>
      </header>

      <div className="mx-auto max-w-6xl px-4 py-10">
        <div className="mb-8">
          <h1 className="text-2xl font-bold">
            Welcome back, {user.name ?? "friend"}
          </h1>
          <p className="text-sm text-muted-foreground">
            {user.email} · Role: <span className="font-medium">{user.role}</span>
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {modules.map((mod) => (
            <Link key={mod.name} href={mod.href} className="h-full">
              <Card className="h-full transition hover:shadow-md">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-base">
                    <mod.icon className="h-4 w-4 text-primary" />
                    {mod.name}
                  </CardTitle>
                  <CardDescription>{mod.desc}</CardDescription>
                </CardHeader>
                <CardContent className="pt-0 text-xs text-muted-foreground">
                  {mod.href === "#" ? "Coming online in a later release" : "Open module"}
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}