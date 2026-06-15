import type { Metadata } from "next";
import "./globals.css";
import Cursor from "@/components/Cursor";
import ScrollReveal from "@/components/ScrollReveal";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL ?? 'https://ivision.sa'
  ),
  title: "iVision — Build. Brand. Deliver.",
  description:
    "iVision is a multi-disciplinary contracting company in Dammam, Saudi Arabia specializing in Architecture, Events & Media, Portable Cabins, and Real Estate.",
  keywords: [
    "iVision",
    "architecture",
    "events",
    "media",
    "portable cabin",
    "real estate",
    "Dammam",
    "Saudi Arabia",
    "contracting",
  ],
  icons: {
    icon: '/logo-icon.png',
    shortcut: '/logo-icon.png',
    apple: '/logo-icon.png',
  },
  openGraph: {
    title: "iVision — Build. Brand. Deliver.",
    description:
      "Architecture, Events & Media, Portable Cabins, Real Estate — all designed and delivered in-house.",
    type: "website",
    images: [{ url: '/logo-dark.png', width: 1200, height: 630, alt: 'iVision' }],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" data-scroll-behavior="smooth" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&family=Inter:wght@300;400;500;600;700;800;900&family=Barlow+Condensed:ital,wght@0,300;0,400;0,600;0,700;0,800;0,900;1,700;1,800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body
        suppressHydrationWarning
        className="bg-white text-brand-black selection:bg-brand-red selection:text-white antialiased overflow-x-hidden min-h-screen"
      >
        {/* Global singleton components — never duplicated */}
        <Cursor />
        <ScrollReveal />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
