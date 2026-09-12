import Link from "next/link";
import type { Metadata } from "next";
import { Briefcase } from "lucide-react";
import { getSession } from "@ideons/auth";
import { Avatar, AvatarFallback, AvatarImage, Button } from "@ideons/ui";
import SignOutButton from "@/components/sign-out-button";

export const metadata: Metadata = {
  title: {
    default: "IDEONS Job Hunter",
    template: "%s · IDEONS Job Hunter",
  },
  description:
    "Find and post jobs across the IDEONS ecosystem.",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getSession();
  const user = session?.user;

  return (
    <html lang="en">
      <body className="flex min-h-svh flex-col bg-background text-foreground antialiased">
        <header className="sticky top-0 z-40 border-b bg-background/95 backdrop-blur">
          <div className="mx-auto flex h-16 max-w-6xl items-center gap-6 px-4">
            <Link href="/" className="flex items-center gap-2 font-bold">
              <Briefcase className="h-5 w-5 text-primary" />
              IDEONS <span className="text-primary">Job Hunter</span>
            </Link>
            <nav className="hidden items-center gap-5 text-sm font-medium text-muted-foreground md:flex">
              <Link href="/jobs" className="hover:text-foreground">
                Jobs
              </Link>
              <Link href="/companies" className="hover:text-foreground">
                Companies
              </Link>
              <Link href="/jobs/new" className="hover:text-foreground">
                Post a job
              </Link>
            </nav>
            <div className="ml-auto flex items-center gap-3">
              {user ? (
                <>
                  <Link href="/my-postings">
                    <Button variant="ghost" size="sm" className="hidden sm:inline-flex">
                      My postings
                    </Button>
                  </Link>
                  <Avatar className="h-8 w-8">
                    <AvatarImage src={user.image ?? ""} alt={user.name ?? ""} />
                    <AvatarFallback>
                      {(user.name ?? "U").charAt(0).toUpperCase()}
                    </AvatarFallback>
                  </Avatar>
                  <SignOutButton />
                </>
              ) : (
                <>
                  <Link href="/login">
                    <Button variant="ghost" size="sm">
                      Sign in
                    </Button>
                  </Link>
                  <Link href="/register">
                    <Button size="sm">Get started</Button>
                  </Link>
                </>
              )}
            </div>
          </div>
        </header>
        {children}
        <footer className="border-t py-8">
          <div className="mx-auto flex max-w-6xl flex-col items-center gap-2 px-4 text-center text-sm text-muted-foreground">
            <p className="font-medium text-foreground">
              Part of the IDEONS ecosystem
            </p>
            <p>
              Marketplace · Store · Job Hunter · E-Books · Resources · Portfolio · Ingetic AI
            </p>
          </div>
        </footer>
      </body>
    </html>
  );
}