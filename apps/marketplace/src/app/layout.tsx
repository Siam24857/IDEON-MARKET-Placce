import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Providers } from "@/components/providers";
import { AiChat } from "@/components/ai/ai-chat";

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
    process.env.NEXT_PUBLIC_APP_URL ?? "http://localhost:3000"
  ),
  title: {
    default: "IDEONS Marketplace — Buy & Sell Digital Services",
    template: "%s | IDEONS Marketplace",
  },
  description:
    "Discover and buy premium digital services — websites, apps, SaaS, design and more. Connect with expert freelancers on IDEONS Marketplace.",
  keywords: [
    "freelance marketplace",
    "digital services",
    "web development",
    "e-commerce",
    "next.js developers",
    "UI UX design",
    "vibe coding",
  ],
  openGraph: {
    type: "website",
    siteName: "IDEONS Marketplace",
    title: "IDEONS Marketplace — Buy & Sell Digital Services",
    description:
      "Find the right digital service for your next big idea.",
  },
  twitter: {
    card: "summary_large_image",
    title: "IDEONS Marketplace",
    description:
      "Find the right digital service for your next big idea.",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col">
        <Providers>
          {children}
          <AiChat />
        </Providers>
      </body>
    </html>
  );
}