"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Loader2, Send } from "lucide-react";

import { Field } from "@/components/ui/field";
import { TextareaField } from "@/components/ui/textarea-field";
import { Button } from "@/components/ui/button";
import {
  freelancerApplySchema,
  type FreelancerApplyValues,
} from "@/lib/validators";

export function FreelancerApplyForm({
  skills,
  languages,
}: {
  skills: string[];
  languages: string[];
}) {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FreelancerApplyValues>({
    resolver: zodResolver(freelancerApplySchema),
    defaultValues: {
      title: "",
      about: "",
      skills: skills.join(", "),
      languages: languages.join(", "),
    },
  });

  async function onSubmit(values: FreelancerApplyValues) {
    setLoading(true);
    setError(null);
    try {
      const res = await fetch("/api/freelancer/apply", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });
      const json = await res.json();
      if (!json.success) {
        setError(json.message ?? "Something went wrong");
        setLoading(false);
        return;
      }
      router.refresh();
    } catch {
      setError("Something went wrong");
      setLoading(false);
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      {error ? (
        <p className="rounded-md border border-destructive/30 bg-destructive/5 p-3 text-sm text-destructive">
          {error}
        </p>
      ) : null}

      <Field
        label="Professional title"
        placeholder="e.g. Full-Stack Developer"
        error={errors.title?.message}
        {...register("title")}
      />

      <TextareaField
        label="About you"
        placeholder="Describe your experience, specialties and what you can deliver..."
        rows={5}
        error={errors.about?.message}
        {...register("about")}
      />

      <Field
        label="Skills"
        placeholder="TypeScript, React, Prisma, PostgreSQL"
        hint="Comma-separated — these become searchable keywords"
        error={errors.skills?.message}
        {...register("skills")}
      />

      <Field
        label="Languages"
        placeholder="English, Spanish"
        error={errors.languages?.message}
        {...register("languages")}
      />

      <Button type="submit" className="w-full" disabled={loading}>
        {loading && <Loader2 className="animate-spin" />}
        <Send />
        Submit application
      </Button>
    </form>
  );
}