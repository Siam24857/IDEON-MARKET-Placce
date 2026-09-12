import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Building2, CalendarDays, MapPin } from "lucide-react";
import { getSession } from "@ideons/auth";
import { prisma } from "@ideons/database";
import { Badge, Button, Card, CardContent, CardHeader, CardTitle } from "@ideons/ui";
import ApplyForm from "@/components/apply-form";

export const metadata: Metadata = { title: "Job details" };
export const dynamic = "force-dynamic";

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

export default async function JobDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const job = await prisma.job.findUnique({
    where: { slug },
    include: { company: true },
  });
  if (!job || job.status !== "OPEN") notFound();

  const session = await getSession();
  const alreadyApplied = session
    ? await prisma.jobApplication.findUnique({
        where: { jobId_applicantId: { jobId: job.id, applicantId: session.user.id } },
        select: { id: true, status: true, createdAt: true },
      })
    : null;

  const paragraphs = job.description.split(/\n{2,}/);

  return (
    <main className="mx-auto max-w-4xl px-4 py-10">
      <div className="flex flex-wrap items-start justify-between gap-4">
        <div>
          <div className="flex flex-wrap gap-1.5">
            <Badge variant="secondary">{formatType(job.type)}</Badge>
            {job.level ? <Badge variant="outline">{job.level}</Badge> : null}
            {job.category ? <Badge variant="outline">{job.category}</Badge> : null}
            {job.remote ? <Badge>Remote friendly</Badge> : null}
          </div>
          <h1 className="mt-3 text-3xl font-extrabold">{job.title}</h1>
          <div className="mt-2 flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
            <Link
              href={`/companies/${job.company.slug}`}
              className="inline-flex items-center gap-1.5 text-primary hover:underline"
            >
              <Building2 className="h-4 w-4" /> {job.company.name}
            </Link>
            {job.location ? (
              <span className="inline-flex items-center gap-1.5">
                <MapPin className="h-4 w-4" /> {job.location}
              </span>
            ) : null}
            <span className="inline-flex items-center gap-1.5">
              <CalendarDays className="h-4 w-4" />
              Posted {job.createdAt.toLocaleDateString(undefined, { month: "short", day: "numeric", year: "numeric" })}
            </span>
          </div>
        </div>
        <div className="text-right">
          <p className="text-lg font-bold">{formatSalary(job)}</p>
          <p className="text-xs text-muted-foreground">{job.currency}</p>
        </div>
      </div>

      <div className="mt-8 grid gap-6 md:grid-cols-[1.6fr_1fr]">
        <div className="space-y-6">
          <section>
            <h2 className="text-xl font-bold">About the role</h2>
            <div className="mt-3 space-y-4 text-muted-foreground">
              {paragraphs.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          </section>
          {job.requirements ? (
            <section>
              <h2 className="text-xl font-bold">Requirements</h2>
              <p className="mt-3 whitespace-pre-line text-sm text-muted-foreground">
                {job.requirements}
              </p>
            </section>
          ) : null}
          {job.tags.length > 0 ? (
            <section>
              <h2 className="text-sm font-semibold text-muted-foreground">Tags</h2>
              <div className="mt-2 flex flex-wrap gap-1.5">
                {job.tags.map((tag) => (
                  <Badge key={tag} variant="secondary">
                    {tag}
                  </Badge>
                ))}
              </div>
            </section>
          ) : null}
        </div>

        <div className="h-fit">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">
                {alreadyApplied ? "Application sent" : "Apply for this job"}
              </CardTitle>
            </CardHeader>
            <CardContent>
              {alreadyApplied ? (
                <p className="text-sm text-muted-foreground">
                  You applied on{" "}
                  {alreadyApplied.createdAt.toLocaleDateString(undefined, {
                    month: "long",
                    day: "numeric",
                  })}
                  . Status: <span className="font-medium text-foreground">{alreadyApplied.status}</span>.
                </p>
              ) : session ? (
                <ApplyForm jobId={job.id} />
              ) : (
                <div className="space-y-3">
                  <p className="text-sm text-muted-foreground">
                    Sign in with your shared IDEONS account to apply.
                  </p>
                  <Link href="/login">
                    <Button className="w-full">Sign in to apply</Button>
                  </Link>
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </main>
  );
}