import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/Geist-Variable.woff2",
  variable: "--font-geist-sans",
});

const geistMono = localFont({
  src: "./fonts/GeistMono-Variable.woff2",
  variable: "--font-geist-mono",
});

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_APP_URL ?? "http://localhost:3001"
  ),
  title: {
    default: "IDEONS — One Ecosystem for Digital Work",
    template: "%s | IDEONS",
  },
  description:
    "IDEONS is one unified ecosystem: marketplace, e-commerce, jobs, e-books, resources, portfolio and AI — one account, one experience.",
  keywords: [
    "IDEONS",
    "freelance marketplace",
    "digital services",
    "job portal",
    "e-books",
    "resources",
    "portfolio",
    "AI",
  ],
  openGraph: {
    type: "website",
    siteName: "IDEONS",
    title: "IDEONS — One Ecosystem for Digital Work",
    description: "Every product you need, connected to one account.",
  },
  twitter: {
    card: "summary_large_image",
    title: "IDEONS",
    description: "Every product you need, connected to one account.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}