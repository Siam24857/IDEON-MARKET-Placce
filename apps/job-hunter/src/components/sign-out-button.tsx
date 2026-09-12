"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { Loader2, LogOut } from "lucide-react";
import { Button } from "@ideons/ui";
import { signOut } from "@/lib/auth-client";

export default function SignOutButton() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  function onClick() {
    setLoading(true);
    signOut({ callbackURL: "/" });
    router.push("/");
    router.refresh();
  }

  return (
    <Button
      variant="outline"
      size="sm"
      disabled={loading}
      aria-label="Sign out"
      onClick={onClick}
    >
      {loading ? <Loader2 className="animate-spin" /> : <LogOut />}
      Sign out
    </Button>
  );
}