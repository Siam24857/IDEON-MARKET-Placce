import type { Metadata } from "next";
import Link from "next/link";
import { Building2, MapPin } from "lucide-react";
import { prisma } from "@ideons/database";
import { Badge, Card, CardContent, CardHeader, CardTitle } from "@ideons/ui";

export const metadata: Metadata = { title: "Companies" };
export const dynamic = "force-dynamic";

export default async function CompaniesPage() {
  const companies = await prisma.company.findMany({
    orderBy: { name: "asc" },
    include: { _count: { select: { jobs: { where: { status: "OPEN" } }, employees: true } } },
  });

  return (
    <main className="mx-auto max-w-6xl px-4 py-10">
      <h1 className="text-2xl font-bold">Companies hiring on IDEONS</h1>
      <p className="mt-1 text-sm text-muted-foreground">
        {companies.length} compan{companies.length === 1 ? "y" : "ies"} in the ecosystem
      </p>

      <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {companies.length === 0 ? (
          <Card>
            <CardContent className="p-8 text-center text-sm text-muted-foreground">
              No companies yet. Post a job and create your company profile.
            </CardContent>
          </Card>
        ) : (
          companies.map((c) => (
            <Link key={c.id} href={`/companies/${c.slug}`}>
              <Card className="h-full transition hover:shadow-md">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-primary/10">
                      {c.logo ? (
                        <img src={c.logo} alt={c.name} className="h-11 w-11 rounded-lg object-cover" />
                      ) : (
                        <Building2 className="h-5 w-5 text-primary" />
                      )}
                    </div>
                    <div>
                      <CardTitle className="text-lg">{c.name}</CardTitle>
                      {c.industry ? <p className="text-xs text-muted-foreground">{c.industry}</p> : null}
                    </div>
                  </div>
                  {c.description ? (
                    <p className="line-clamp-2 text-sm text-muted-foreground">{c.description}</p>
                  ) : null}
                </CardHeader>
                <CardContent className="flex flex-wrap gap-1.5 pt-0 text-xs">
                  {c.location ? (
                    <Badge variant="secondary" className="inline-flex gap-1">
                      <MapPin className="h-3 w-3" /> {c.location}
                    </Badge>
                  ) : null}
                  <Badge variant="outline">
                    {c._count.jobs} open job{c._count.jobs === 1 ? "" : "s"}
                  </Badge>
                </CardContent>
              </Card>
            </Link>
          ))
        )}
      </div>
    </main>
  );
}