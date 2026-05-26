import type { Metadata, Viewport } from "next";
import "./globals.css";
import { AppProviders } from "@/components/providers/app-providers";
import { CustomCursor } from "@/components/layout/custom-cursor";
import { GrainOverlay } from "@/components/layout/grain-overlay";
import { ScrollProgress } from "@/components/layout/scroll-progress";
import { SiteHeader } from "@/components/layout/site-header";

export const metadata: Metadata = {
  title: "Arthur Almeida | Ruhtra - Full-Stack Developer",
  description:
    "Cinematic developer portfolio for Arthur Almeida, a full-stack developer focused on React, Node.js, embedded systems, APIs, dashboards and premium UI experiences.",
  authors: [{ name: "Arthur Almeida" }],
  metadataBase: new URL("https://github.com/Ruthraas"),
  openGraph: {
    title: "Arthur Almeida | Ruhtra",
    description: "Full-Stack Developer | Embedded Systems | React & Node.js",
    type: "website",
    url: "https://github.com/Ruthraas"
  },
  twitter: {
    card: "summary_large_image",
    title: "Arthur Almeida | Ruhtra",
    description: "Full-Stack Developer | Embedded Systems | React & Node.js"
  }
};

export const viewport: Viewport = {
  themeColor: "#050505",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <AppProviders>
          <GrainOverlay />
          <ScrollProgress />
          <SiteHeader />
          {children}
          <CustomCursor />
        </AppProviders>
      </body>
    </html>
  );
}
