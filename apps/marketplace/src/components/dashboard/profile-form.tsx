"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Loader2, Save } from "lucide-react";

import { Field } from "@/components/ui/field";
import { TextareaField } from "@/components/ui/textarea-field";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  updateProfileSchema,
  type UpdateProfileValues,
} from "@/lib/validators";

export function ProfileForm({
  initial,
}: {
  initial: UpdateProfileValues;
}) {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState<{
    type: "success" | "error";
    text: string;
  } | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<UpdateProfileValues>({
    resolver: zodResolver(updateProfileSchema),
    defaultValues: initial,
  });

  async function onSubmit(values: UpdateProfileValues) {
    setLoading(true);
    setMessage(null);
    try {
      const res = await fetch("/api/dashboard/profile", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });
      const json = await res.json();
      if (!json.success) {
        setMessage({
          type: "error",
          text: json.message ?? "Something went wrong",
        });
        return;
      }
      setMessage({ type: "success", text: "Profile updated successfully" });
      router.refresh();
    } catch {
      setMessage({ type: "error", text: "Something went wrong" });
    } finally {
      setLoading(false);
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
      {message ? (
        <div
          className={
            message.type === "success"
              ? "rounded-md border border-emerald-200 bg-emerald-50 p-3 text-sm text-emerald-800 dark:border-emerald-900 dark:bg-emerald-950 dark:text-emerald-300"
              : "rounded-md border border-destructive/30 bg-destructive/5 p-3 text-sm text-destructive"
          }
        >
          {message.text}
        </div>
      ) : null}

      <Card>
        <CardHeader>
          <CardTitle>Account</CardTitle>
          <CardDescription>Your login and display name.</CardDescription>
        </CardHeader>
        <CardContent className="grid gap-4 sm:grid-cols-2">
          <Field
            label="Full name"
            placeholder="Your name"
            error={errors.name?.message}
            {...register("name")}
          />
          <Field
            label="Username"
            placeholder="your-username"
            error={errors.username?.message}
            {...register("username")}
          />
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Public profile</CardTitle>
          <CardDescription>
            Shown on your profile and service listings.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <Field
            label="Headline"
            placeholder="e.g. Full-Stack Developer"
            error={errors.headline?.message}
            {...register("headline")}
          />
          <TextareaField
            label="Bio"
            placeholder="Tell buyers and freelancers a bit about yourself..."
            rows={4}
            error={errors.bio?.message}
            {...register("bio")}
          />
          <div className="grid gap-4 sm:grid-cols-2">
            <Field
              label="Location"
              placeholder="City, Country"
              error={errors.location?.message}
              {...register("location")}
            />
            <Field
              label="Timezone"
              placeholder="e.g. UTC"
              error={errors.timezone?.message}
              {...register("timezone")}
            />
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Links</CardTitle>
          <CardDescription>
            URLs people can visit from your profile.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <Field
            label="Website"
            placeholder="https://example.com"
            error={errors.website?.message}
            {...register("website")}
          />
          <div className="grid gap-4 sm:grid-cols-2">
            <Field
              label="GitHub"
              placeholder="https://github.com/username"
              error={errors.github?.message}
              {...register("github")}
            />
            <Field
              label="LinkedIn"
              placeholder="https://linkedin.com/in/username"
              error={errors.linkedin?.message}
              {...register("linkedin")}
            />
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Skills</CardTitle>
          <CardDescription>
            Comma-separated list of your top skills and languages.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <Field
            label="Skills"
            placeholder="TypeScript, React, Prisma, PostgreSQL"
            hint="Separate skills with commas"
            error={errors.skills?.message}
            {...register("skills")}
          />
          <Field
            label="Languages"
            placeholder="English, Spanish"
            error={errors.languages?.message}
            {...register("languages")}
          />
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Details</CardTitle>
          <CardDescription>Background and contact information.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid gap-4 sm:grid-cols-2">
            <Field
              label="Occupation"
              placeholder="Software Engineer"
              error={errors.occupation?.message}
              {...register("occupation")}
            />
            <Field
              label="Education"
              placeholder="B.Sc. Computer Science"
              error={errors.education?.message}
              {...register("education")}
            />
          </div>
          <TextareaField
            label="Experience"
            placeholder="Describe your relevant professional experience..."
            rows={4}
            error={errors.experience?.message}
            {...register("experience")}
          />
          <div className="grid gap-4 sm:grid-cols-2">
            <Field
              label="Phone number"
              placeholder="+1 234 567 8901"
              error={errors.phoneNumber?.message}
              {...register("phoneNumber")}
            />
            <div />
            <Field
              label="Country"
              placeholder="United States"
              error={errors.country?.message}
              {...register("country")}
            />
            <Field
              label="City"
              placeholder="New York"
              error={errors.city?.message}
              {...register("city")}
            />
          </div>
        </CardContent>
      </Card>

      <div className="flex justify-end">
        <Button type="submit" disabled={loading}>
          {loading && <Loader2 className="animate-spin" />}
          <Save />
          Save changes
        </Button>
      </div>
    </form>
  );
}