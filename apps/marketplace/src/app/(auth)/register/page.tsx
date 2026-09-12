"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Globe, Loader2, UserPlus } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Field } from "@/components/ui/field";
import { signUp, signIn } from "@/lib/auth-client";

const registerSchema = z
  .object({
    name: z.string().min(2, "Name is required"),
    username: z
      .string()
      .min(3, "Username must be at least 3 characters")
      .regex(
        /^[a-zA-Z0-9_]+$/,
        "Only letters, numbers and underscores allowed"
      ),
    email: z.string().email("Enter a valid email address"),
    password: z
      .string()
      .min(8, "Password must be at least 8 characters")
      .max(128, "Password too long"),
    confirmPassword: z.string(),
    acceptTerms: z.boolean().refine((v) => v, {
      message: "You must accept the terms to continue",
    }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  });

type RegisterValues = z.infer<typeof registerSchema>;

export default function RegisterPage() {
  const router = useRouter();
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [googleLoading, setGoogleLoading] = useState(false);

  const {
    register: registerField,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterValues>({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      name: "",
      username: "",
      email: "",
      password: "",
      confirmPassword: "",
      acceptTerms: false,
    },
  });

  async function onSubmit(values: RegisterValues) {
    setLoading(true);
    setError(null);
    const { error: signUpError } = await signUp.email({
      name: values.name,
      email: values.email,
      password: values.password,
      username: values.username,
    });
    if (signUpError) {
      setError(signUpError.message ?? "Unable to create account");
      setLoading(false);
      return;
    }
    router.push("/verify-email");
    router.refresh();
  }

  async function onGoogleSignIn() {
    setGoogleLoading(true);
    await signIn.social({
      provider: "google",
      callbackURL: "/",
    });
  }

  return (
    <Card className="w-full max-w-md">
      <CardHeader className="text-center">
        <CardTitle className="text-2xl">Create your account</CardTitle>
        <CardDescription>
          Join IDEONS Marketplace as a buyer — become a freelancer later
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <Button
          type="button"
          variant="outline"
          className="w-full"
          disabled={googleLoading}
          onClick={onGoogleSignIn}
        >
          {googleLoading ? (
            <Loader2 className="animate-spin" />
          ) : (
            <Globe />
          )}
          Continue with Google
        </Button>

        <div className="flex items-center gap-3 text-xs text-muted-foreground">
          <div className="h-px flex-1 bg-border" />
          or
          <div className="h-px flex-1 bg-border" />
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <Field
            label="Full name"
            autoComplete="name"
            placeholder="Alex Johnson"
            error={errors.name?.message}
            {...registerField("name")}
          />
          <Field
            label="Username"
            autoComplete="username"
            placeholder="alexjohnson"
            hint="This will be your public handle"
            error={errors.username?.message}
            {...registerField("username")}
          />
          <Field
            label="Email"
            type="email"
            autoComplete="email"
            placeholder="you@example.com"
            error={errors.email?.message}
            {...registerField("email")}
          />
          <Field
            label="Password"
            type="password"
            autoComplete="new-password"
            placeholder="••••••••"
            hint="At least 8 characters"
            error={errors.password?.message}
            {...registerField("password")}
          />
          <Field
            label="Confirm password"
            type="password"
            autoComplete="new-password"
            placeholder="••••••••"
            error={errors.confirmPassword?.message}
            {...registerField("confirmPassword")}
          />

          <div className="flex items-start gap-2">
            <input
              id="acceptTerms"
              type="checkbox"
              className="mt-0.5 h-4 w-4 rounded border-input accent-primary"
              {...registerField("acceptTerms")}
            />
            <label
              htmlFor="acceptTerms"
              className="text-sm text-muted-foreground leading-snug"
            >
              I agree to the{" "}
              <Link href="/terms" className="text-primary hover:underline">
                Terms of Service
              </Link>{" "}
              and{" "}
              <Link href="/privacy" className="text-primary hover:underline">
                Privacy Policy
              </Link>
            </label>
          </div>
          {errors.acceptTerms && (
            <p className="text-xs text-destructive">
              {errors.acceptTerms.message}
            </p>
          )}

          {error && (
            <p className="rounded-md bg-destructive/10 p-3 text-sm text-destructive">
              {error}
            </p>
          )}

          <Button type="submit" className="w-full" disabled={loading}>
            {loading ? <Loader2 className="animate-spin" /> : <UserPlus />}
            Create account
          </Button>
        </form>
      </CardContent>
      <CardFooter className="justify-center text-sm text-muted-foreground">
        <span>
          Already have an account?{" "}
          <Link href="/login" className="text-primary hover:underline">
            Sign in
          </Link>
        </span>
      </CardFooter>
    </Card>
  );
}
