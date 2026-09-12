import type { Metadata } from "next";
import Link from "next/link";
import { Users } from "lucide-react";
import { requireUser } from "@ideons/auth";
import { prisma } from "@ideons/database";
import { Avatar, AvatarFallback, AvatarImage, Badge, Card, CardContent, CardHeader, CardTitle } from "@ideons/ui";

export const metadata: Metadata = { title: "My postings" };
export const dynamic = "force-dynamic";

export default async function MyPostingsPage() {
  const { user } = await requireUser();

  const jobs = await prisma.job.findMany({
    where: { postedById: user.id },
    orderBy: { createdAt: "desc" },
    include: {
      company: true,
      applications: {
        include: {
          applicant: { select: { id: true, name: true, email: true, image: true } },
          resume: true,
        },
        orderBy: { createdAt: "desc" },
      },
    },
  });

  return (
    <main className="mx-auto max-w-4xl px-4 py-10">
      <h1 className="text-2xl font-bold">My postings</h1>
      <p className="mt-1 text-sm text-muted-foreground">
        {jobs.length} job{jobs.length === 1 ? "" : "s"} ·{" "}
        {jobs.reduce((n, j) => n + j.applications.length, 0)} total application
        {jobs.reduce((n, j) => n + j.applications.length, 0) === 1 ? "" : "s"}
      </p>

      <div className="mt-8 space-y-6">
        {jobs.length === 0 ? (
          <Card>
            <CardContent className="p-10 text-center">
              <p className="text-sm text-muted-foreground">You have not posted any jobs yet.</p>
              <Link href="/jobs/new" className="mt-4 inline-block text-sm text-primary hover:underline">
                Post your first job
              </Link>
            </CardContent>
          </Card>
        ) : (
          jobs.map((job) => (
            <Card key={job.id}>
              <CardHeader className="flex-row items-start justify-between gap-4">
                <div>
                  <CardTitle className="text-lg">
                    <Link href={`/jobs/${job.slug}`} className="hover:underline">
                      {job.title}
                    </Link>
                  </CardTitle>
                  <p className="mt-0.5 text-sm text-muted-foreground">
                    {job.company.name} · {job.type.replace("_", " ")} · posted{" "}
                    {job.createdAt.toLocaleDateString()}
                  </p>
                </div>
                <Badge variant={job.status === "OPEN" ? "default" : "secondary"}>{job.status}</Badge>
              </CardHeader>
              <CardContent>
                {job.applications.length === 0 ? (
                  <p className="text-sm text-muted-foreground">No applications yet.</p>
                ) : (
                  <div className="space-y-3">
                    <p className="flex items-center gap-1.5 text-sm font-medium">
                      <Users className="h-4 w-4" /> Applicants ({job.applications.length})
                    </p>
                    {job.applications.map((app) => (
                      <div
                        key={app.id}
                        className="flex items-start justify-between gap-3 rounded-md border p-3"
                      >
                        <div className="flex items-start gap-3">
                          <Avatar className="h-8 w-8">
                            <AvatarImage src={app.applicant.image ?? ""} alt={app.applicant.name ?? ""} />
                            <AvatarFallback>
                              {(app.applicant.name ?? "U").charAt(0).toUpperCase()}
                            </AvatarFallback>
                          </Avatar>
                          <div>
                            <p className="text-sm font-medium">{app.applicant.name}</p>
                            <p className="text-xs text-muted-foreground">{app.applicant.email}</p>
                            {app.resume ? (
                              <p className="mt-1 text-xs text-muted-foreground">
                                Resume: <span className="text-foreground">{app.resume.title}</span>
                                {app.resume.skills.length > 0
                                  ? ` · ${app.resume.skills.slice(0, 5).join(", ")}${app.resume.skills.length > 5 ? "…" : ""}`
                                  : ""}
                              </p>
                            ) : null}
                          </div>
                        </div>
                        <Badge variant="outline">{app.status}</Badge>
                      </div>
                    ))}
                  </div>
                )}
              </CardContent>
            </Card>
          ))
        )}
      </div>
    </main>
  );
}