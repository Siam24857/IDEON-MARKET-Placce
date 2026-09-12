import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { BadgeCheck, Building2, Globe, MapPin, Users } from "lucide-react";
import { prisma } from "@ideons/database";
import { Badge, Card, CardContent, CardHeader } from "@ideons/ui";

export const dynamic = "force-dynamic";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const company = await prisma.company.findUnique({ where: { slug }, select: { name: true } });
  return { title: company?.name ?? "Company" };
}

function formatSalary(job: { salaryMin: number | null; salaryMax: number | null; currency: string }) {
  if (job.salaryMin == null && job.salaryMax == null) return "Pay not disclosed";
  const fmt = (n: number) =>
    n.toLocaleString(undefined, { style: "currency", currency: job.currency, maximumFractionDigits: 0 });
  if (job.salaryMin != null && job.salaryMax != null)
    return `${fmt(job.salaryMin)} – ${fmt(job.salaryMax)}`;
  return job.salaryMin != null ? `From ${fmt(job.salaryMin)}` : `Up to ${fmt(job.salaryMax!)}`;
}

export default async function CompanyDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const company = await prisma.company.findUnique({
    where: { slug },
    include: {
      jobs: {
        where: { status: "OPEN" },
        orderBy: { createdAt: "desc" },
      },
    },
  });
  if (!company) notFound();

  const info = [
    { icon: MapPin, label: "Location", value: company.location },
    { icon: Users, label: "Size", value: company.size },
    { icon: Globe, label: "Website", value: company.website },
  ].filter((i) => i.value);

  return (
    <main className="mx-auto max-w-4xl px-4 py-10">
      <div className="flex items-start gap-4">
        <div className="flex h-16 w-16 items-center justify-center rounded-xl bg-primary/10">
          {company.logo ? (
            <img src={company.logo} alt={company.name} className="h-16 w-16 rounded-xl object-cover" />
          ) : (
            <Building2 className="h-8 w-8 text-primary" />
          )}
        </div>
        <div>
          <h1 className="flex items-center gap-2 text-2xl font-bold">
            {company.name}
            {company.verified ? (
              <BadgeCheck className="h-5 w-5 text-primary" aria-label="Verified company" />
            ) : null}
          </h1>
          <p className="text-sm text-muted-foreground">
            {[company.industry, company.industry && company.location ? "·" : "", company.location]
              .filter(Boolean)
              .join(" ")}
          </p>
        </div>
      </div>

      {company.description ? (
        <p className="mt-6 whitespace-pre-line text-muted-foreground">{company.description}</p>
      ) : null}

      {info.length > 0 ? (
        <div className="mt-6 grid gap-3 sm:grid-cols-3">
          {info.map((i) => (
            <Card key={i.label}>
              <CardContent className="p-4 text-sm">
                <span className="flex items-center gap-1.5 text-xs text-muted-foreground">
                  <i.icon className="h-3.5 w-3.5" /> {i.label}
                </span>
                {i.label === "Website" ? (
                  <a
                    href={i.value!}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-1 block font-medium text-primary hover:underline"
                  >
                    Visit site
                  </a>
                ) : (
                  <p className="mt-1 font-medium">{i.value}</p>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      ) : null}

      <div className="mt-10">
        <h2 className="text-xl font-bold">
          Open positions ({company.jobs.length})
        </h2>
        <div className="mt-4 space-y-3">
          {company.jobs.length === 0 ? (
            <Card>
              <CardContent className="p-6 text-sm text-muted-foreground">
                No open positions right now.
              </CardContent>
            </Card>
          ) : (
            company.jobs.map((job) => (
              <Link key={job.id} href={`/jobs/${job.slug}`} className="block">
                <Card className="transition hover:shadow-md">
                  <CardHeader className="flex-row items-center justify-between">
                    <div>
                      <p className="font-semibold">{job.title}</p>
                      <p className="text-xs text-muted-foreground">{formatSalary(job)}</p>
                    </div>
                    <Badge variant="secondary">{job.type.replace("_", " ")}</Badge>
                  </CardHeader>
                </Card>
              </Link>
            ))
          )}
        </div>
      </div>
    </main>
  );
}