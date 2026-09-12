import type { Metadata } from "next";
import Link from "next/link";
import { MapPin, Search } from "lucide-react";
import { prisma } from "@ideons/database";
import { Badge, Card, CardContent, CardHeader, CardTitle, Input } from "@ideons/ui";

export const metadata: Metadata = { title: "Jobs" };
export const dynamic = "force-dynamic";

const TYPES = ["FULL_TIME", "PART_TIME", "CONTRACT", "INTERNSHIP", "FREELANCE"] as const;
const LEVELS = ["JUNIOR", "MID", "SENIOR", "LEAD", "STAFF"] as const;
const REMOTE = ["all", "remote", "onsite"] as const;

function formatSalary(job: { salaryMin: number | null; salaryMax: number | null; currency: string }) {
  if (job.salaryMin == null && job.salaryMax == null) return "Pay not disclosed";
  const fmt = (n: number) =>
    n.toLocaleString(undefined, { style: "currency", currency: job.currency, maximumFractionDigits: 0 });
  if (job.salaryMin != null && job.salaryMax != null)
    return `${fmt(job.salaryMin)} – ${fmt(job.salaryMax)}`;
  return job.salaryMin != null ? `From ${fmt(job.salaryMin)}` : `Up to ${fmt(job.salaryMax!)}`;
}

function formatType(type: string) {
  return type.replace("_", " ").toLowerCase().replace(/\b\w/g, (c) => c.toUpperCase());
}

export default async function JobsPage({
  searchParams,
}: {
  searchParams: Promise<{ q?: string; type?: string; level?: string; remote?: string }>;
}) {
  const params = await searchParams;
  const q = params.q?.trim() ?? "";
  const type = params.type && TYPES.includes(params.type as (typeof TYPES)[number])
    ? params.type
    : undefined;
  const level = params.level && LEVELS.includes(params.level as (typeof LEVELS)[number])
    ? params.level
    : undefined;
  const remoteMode = REMOTE.includes((params.remote ?? "all") as (typeof REMOTE)[number])
    ? params.remote
    : "all";

  const jobs = await prisma.job.findMany({
    where: {
      status: "OPEN",
      ...(q
        ? {
            OR: [
              { title: { contains: q, mode: "insensitive" } },
              { description: { contains: q, mode: "insensitive" } },
              { company: { name: { contains: q, mode: "insensitive" } } },
              { tags: { has: q.toLocaleLowerCase() } },
              { category: { contains: q, mode: "insensitive" } },
            ],
          }
        : {}),
      ...(type ? { type } : {}),
      ...(level ? { level } : {}),
      ...(remoteMode !== "all" ? { remote: remoteMode === "remote" } : {}),
    },
    orderBy: { createdAt: "desc" },
    include: { company: true },
  });

  return (
    <main className="mx-auto max-w-6xl px-4 py-10">
      <h1 className="text-2xl font-bold">Explore jobs</h1>
      <p className="mt-1 text-sm text-muted-foreground">
        {jobs.length} open position{jobs.length === 1 ? "" : "s"} across the ecosystem
      </p>

      <form method="get" className="mt-6 space-y-4">
        <div className="relative">
          <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <Input
            name="q"
            defaultValue={q}
            placeholder="Search by title, keyword, company or tag…"
            className="pl-9"
          />
        </div>
        <div className="flex flex-wrap gap-2">
          <select
            name="type"
            defaultValue={type ?? ""}
            className="rounded-md border bg-background px-3 py-2 text-sm"
          >
            <option value="">All types</option>
            {TYPES.map((t) => (
              <option key={t} value={t}>
                {formatType(t)}
              </option>
            ))}
          </select>
          <select
            name="level"
            defaultValue={level ?? ""}
            className="rounded-md border bg-background px-3 py-2 text-sm"
          >
            <option value="">All levels</option>
            {LEVELS.map((l) => (
              <option key={l} value={l}>
                {formatType(l)}
              </option>
            ))}
          </select>
          <select
            name="remote"
            defaultValue={remoteMode}
            className="rounded-md border bg-background px-3 py-2 text-sm"
          >
            <option value="all">Any location</option>
            <option value="remote">Remote</option>
            <option value="onsite">On-site</option>
          </select>
          <button
            type="submit"
            className="rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:bg-primary/90"
          >
            Apply filters
          </button>
        </div>
      </form>

      <div className="mt-8 space-y-3">
        {jobs.length === 0 ? (
          <Card>
            <CardContent className="p-8 text-center text-sm text-muted-foreground">
              No jobs match your filters. Post a job or try different terms.
            </CardContent>
          </Card>
        ) : (
          jobs.map((job) => (
            <Link key={job.id} href={`/jobs/${job.slug}`} className="block">
              <Card className="transition hover:shadow-md">
                <CardHeader>
                  <div className="flex flex-wrap items-start justify-between gap-2">
                    <div>
                      <CardTitle className="text-lg">{job.title}</CardTitle>
                      <p className="mt-0.5 text-sm text-muted-foreground">
                        {job.company.name}
                        {job.location ? (
                          <span className="ml-1.5 inline-flex items-center gap-1">
                            <MapPin className="h-3 w-3" /> {job.location}
                          </span>
                        ) : null}
                        {job.remote ? (
                          <span className="ml-1.5 text-primary">· Remote friendly</span>
                        ) : null}
                      </p>
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      <Badge variant="secondary">{formatType(job.type)}</Badge>
                      {job.level ? <Badge variant="outline">{job.level}</Badge> : null}
                      {job.category ? <Badge variant="outline">{job.category}</Badge> : null}
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="pt-0 text-sm text-muted-foreground">
                  {formatSalary(job)}
                </CardContent>
              </Card>
            </Link>
          ))
        )}
      </div>
    </main>
  );
}