"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Globe, Loader2, Mail, MailCheck } from "lucide-react";

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
import { signIn, sendVerificationEmail } from "@/lib/auth-client";

const loginSchema = z.object({
  email: z.string().email("Enter a valid email address"),
  password: z.string().min(1, "Password is required"),
});

type LoginValues = z.infer<typeof loginSchema>;

export default function LoginPage() {
  const router = useRouter();
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [googleLoading, setGoogleLoading] = useState(false);
  const [needsVerification, setNeedsVerification] = useState(false);
  const [resending, setResending] = useState(false);
  const [resent, setResent] = useState(false);
  const [lastEmail, setLastEmail] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginValues>({
    resolver: zodResolver(loginSchema),
    defaultValues: { email: "", password: "" },
  });

  async function onSubmit(values: LoginValues) {
    setLoading(true);
    setError(null);
    setNeedsVerification(false);
    setResent(false);
    setLastEmail(values.email);
    const { error: signInError } = await signIn.email({
      email: values.email,
      password: values.password,
    });
    if (signInError) {
      if (signInError.code === "EMAIL_NOT_VERIFIED") {
        setNeedsVerification(true);
      }
      setError(signInError.message ?? "Unable to sign in");
      setLoading(false);
      return;
    }
    router.push("/");
    router.refresh();
  }

  async function onResendVerification() {
    if (!lastEmail) return;
    setResending(true);
    setResent(false);
    const { error } = await sendVerificationEmail({
      email: lastEmail,
      callbackURL: "/verify-email",
    });
    setResending(false);
    if (!error) setResent(true);
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
        <CardTitle className="text-2xl">Welcome back</CardTitle>
        <CardDescription>
          Sign in to continue to IDEONS Marketplace
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
            label="Email"
            type="email"
            autoComplete="email"
            placeholder="you@example.com"
            error={errors.email?.message}
            {...register("email")}
          />
          <Field
            label="Password"
            type="password"
            autoComplete="current-password"
            placeholder="••••••••"
            error={errors.password?.message}
            {...register("password")}
          />
          <div className="text-right">
            <Link
              href="/forgot-password"
              className="text-sm text-primary hover:underline"
            >
              Forgot password?
            </Link>
          </div>
          {error && (
            <p className="rounded-md bg-destructive/10 p-3 text-sm text-destructive">
              {error}
            </p>
          )}
          {needsVerification && (
            <div className="rounded-md border border-primary/30 bg-primary/5 p-3 text-sm">
              <p className="flex items-center gap-2 font-medium text-primary">
                <MailCheck className="h-4 w-4" />
                Verify your email address
              </p>
              <p className="mt-1 text-muted-foreground">
                You must confirm your email before signing in. We can resend
                the verification link.
              </p>
              <Button
                type="button"
                variant="outline"
                size="sm"
                className="mt-3"
                disabled={resending}
                onClick={onResendVerification}
              >
                {resending && <Loader2 className="animate-spin" />}
                {resent ? "Verification email sent" : "Resend verification email"}
              </Button>
            </div>
          )}
          <Button type="submit" className="w-full" disabled={loading}>
            {loading && <Loader2 className="animate-spin" />}
            <Mail />
            Sign in
          </Button>
        </form>
      </CardContent>
      <CardFooter className="justify-center text-sm text-muted-foreground">
        <span>
          Don&apos;t have an account?{" "}
          <Link href="/register" className="text-primary hover:underline">
            Create one
          </Link>
        </span>
      </CardFooter>
    </Card>
  );
}
