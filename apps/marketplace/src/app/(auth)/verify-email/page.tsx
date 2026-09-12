"use client";

import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { Suspense, useEffect } from "react";
import { Loader2, MailCheck, ShieldCheck } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

function VerifyEmailContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const token = searchParams.get("token");
  const done = searchParams.get("done") === "1";

  useEffect(() => {
    if (!token || done) return;
    const callbackURL = `${window.location.origin}/verify-email?done=1`;
    router.replace(
      `/api/auth/verify-email?token=${encodeURIComponent(
        token
      )}&callbackURL=${encodeURIComponent(callbackURL)}`
    );
  }, [token, done, router]);

  return (
    <Card className="w-full max-w-md">
      <CardHeader className="text-center">
        <CardTitle className="text-2xl">
          {done ? "Email verified" : token ? "Verifying…" : "Verify your email"}
        </CardTitle>
        <CardDescription>
          {done
            ? "Your email address is confirmed. You can now sign in."
            : token
              ? "Please wait while we confirm your address."
              : "We sent you a verification link. Check your inbox and click the link to activate your account."}
        </CardDescription>
      </CardHeader>
      <CardContent className="flex flex-col items-center gap-4 pb-8">
        {done ? (
          <>
            <ShieldCheck className="h-14 w-14 text-primary" />
            <Button asChild>
              <Link href="/login">Go to sign in</Link>
            </Button>
          </>
        ) : token ? (
          <Loader2 className="h-10 w-10 animate-spin text-primary" />
        ) : (
          <>
            <MailCheck className="h-14 w-14 text-primary" />
            <p className="text-center text-sm text-muted-foreground">
              Didn&apos;t receive the email? Check your spam folder or
              sign in again to request a new link.
            </p>
            <Button asChild variant="outline">
              <Link href="/login">Back to sign in</Link>
            </Button>
          </>
        )}
      </CardContent>
    </Card>
  );
}

export default function VerifyEmailPage() {
  return (
    <Suspense fallback={null}>
      <VerifyEmailContent />
    </Suspense>
  );
}