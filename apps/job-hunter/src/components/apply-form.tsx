"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { FileText, Loader2, Send } from "lucide-react";
import { Button, Field } from "@ideons/ui";
import { applyToJob } from "@/lib/actions";

export default function ApplyForm({ jobId }: { jobId: string }) {
  const router = useRouter();
  const [error, setError] = useState<string | null>(null);
  const [done, setDone] = useState(false);
  const [loading, setLoading] = useState(false);

  async function onSubmit(formData: FormData) {
    setLoading(true);
    setError(null);
    const result = await applyToJob(jobId, formData);
    setLoading(false);
    if (!result.ok) {
      setError(result.error);
      if (/sign in/i.test(result.error)) router.push("/login");
      return;
    }
    setDone(true);
    router.refresh();
  }

  if (done) {
    return (
      <div className="rounded-md bg-emerald-500/10 p-4 text-sm text-emerald-600">
        Application submitted. The recruiter can now review your resume.
      </div>
    );
  }

  return (
    <form action={onSubmit} className="space-y-4">
      <Field
        label="Resume title"
        name="resumeTitle"
        placeholder="e.g. Product Designer — Resume"
        hint="This is how your resume appears to the recruiter"
      />
      <Field
        label="Skills (comma separated)"
        name="skills"
        placeholder="figma, ui, ux, prototyping"
        hint="Matched against the job requirements"
      />
      <div className="space-y-1.5">
        <label htmlFor="coverLetter" className="text-sm font-medium">
          Cover letter <span className="font-normal text-muted-foreground">(optional)</span>
        </label>
        <textarea
          id="coverLetter"
          name="coverLetter"
          rows={5}
          placeholder="Why are you a great fit?"
          className="w-full rounded-md border bg-background px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-primary/40"
        />
      </div>
      {error && (
        <p className="rounded-md bg-destructive/10 p-3 text-sm text-destructive">{error}</p>
      )}
      <Button type="submit" className="w-full" disabled={loading}>
        {loading ? <Loader2 className="animate-spin" /> : <Send />}
        Submit application
      </Button>
      <p className="flex items-center gap-1.5 text-xs text-muted-foreground">
        <FileText className="h-3.5 w-3.5" /> Your resume is saved to your IDEONS profile.
      </p>
    </form>
  );
}