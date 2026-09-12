"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { Loader2, UserPlus } from "lucide-react";
import {
  Button,
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
  Field,
} from "@ideons/ui";
import { signUp } from "@/lib/auth-client";

export default function RegisterPage() {
  const router = useRouter();
  const [error, setError] = useState<string | null>(null);
  const [notice, setNotice] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  async function onSubmit(formData: FormData) {
    setLoading(true);
    setError(null);
    setNotice(null);
    const password = String(formData.get("password") ?? "");
    const confirm = String(formData.get("confirmPassword") ?? "");
    if (password.length < 8) {
      setError("Password must be at least 8 characters");
      setLoading(false);
      return;
    }
    if (password !== confirm) {
      setError("Passwords do not match");
      setLoading(false);
      return;
    }
    const { error: signUpError } = await signUp.email({
      name: String(formData.get("name") ?? ""),
      email: String(formData.get("email") ?? ""),
      password,
      username: String(formData.get("username") ?? ""),
    });
    if (signUpError) {
      setError(signUpError.message ?? "Unable to create account");
      setLoading(false);
      return;
    }
    setLoading(false);
    setNotice("Account created. Check your inbox to verify your email, then sign in.");
    router.push("/login");
  }

  return (
    <Card className="w-full">
      <CardHeader className="text-center">
        <CardTitle className="text-2xl">Create your account</CardTitle>
        <CardDescription>
          One shared account across the IDEONS ecosystem
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form action={onSubmit} className="space-y-4">
          <Field label="Full name" name="name" autoComplete="name" required placeholder="Alex Johnson" />
          <Field label="Username" name="username" autoComplete="username" required placeholder="alexjohnson" hint="This will be your public handle" />
          <Field label="Email" name="email" type="email" autoComplete="email" required placeholder="you@example.com" />
          <Field label="Password" name="password" type="password" autoComplete="new-password" required placeholder="••••••••" hint="At least 8 characters" />
          <Field label="Confirm password" name="confirmPassword" type="password" autoComplete="new-password" required placeholder="••••••••" />
          {error && (
            <p className="rounded-md bg-destructive/10 p-3 text-sm text-destructive">{error}</p>
          )}
          {notice && (
            <p className="rounded-md bg-emerald-500/10 p-3 text-sm text-emerald-600">{notice}</p>
          )}
          <Button type="submit" className="w-full" disabled={loading}>
            {loading ? <Loader2 className="animate-spin" /> : <UserPlus />} Create account
          </Button>
        </form>
      </CardContent>
      <CardFooter className="justify-center text-sm text-muted-foreground">
        <span>
          Already have an account?{" "}
          <Link href="/login" className="text-primary hover:underline">Sign in</Link>
        </span>
      </CardFooter>
    </Card>
  );
}