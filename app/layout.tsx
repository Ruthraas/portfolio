import type { Metadata, Viewport } from "next";
import "./globals.css";
import { AppProviders } from "@/components/providers/app-providers";
import { GrainOverlay } from "@/components/layout/grain-overlay";
import { ScrollProgress } from "@/components/layout/scroll-progress";
import { SiteHeader } from "@/components/layout/site-header";

export const metadata: Metadata = {
  title: "Arthur Almeida | Ruhtra - Creative Developer",
  description:
    "Portfolio de Arthur Almeida, Ruhtra: desenvolvedor full-stack, técnico em eletrônica, técnico em mecatrônica e CTO focado em React, Node.js, APIs e produtos digitais.",
  authors: [{ name: "Arthur Almeida" }],
  metadataBase: new URL("https://github.com/Ruthraas"),
  openGraph: {
    title: "Arthur Almeida | Ruhtra",
    description:
      "Full-Stack Developer | Electronics | Mechatronics | React & Node.js",
    type: "website",
    url: "https://github.com/Ruthraas"
  },
  twitter: {
    card: "summary_large_image",
    title: "Arthur Almeida | Ruhtra",
    description:
      "Full-Stack Developer | Electronics | Mechatronics | React & Node.js"
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
        </AppProviders>
      </body>
    </html>
  );
}
