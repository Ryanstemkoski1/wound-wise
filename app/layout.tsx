import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { SiteHeader } from "@/components/layout/site-header";
import { SiteFooter } from "@/components/layout/site-footer";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "WoundWise | Expert Wound Care Education",
    template: "%s | WoundWise",
  },
  description:
    "Comprehensive wound care education from Dr. Alvin May. Learn about pressure injuries, diabetic ulcers, and evidence-based healing strategies.",
  keywords: [
    "wound care",
    "pressure injuries",
    "diabetic ulcers",
    "wound healing",
    "Dr. Alvin May",
  ],
  authors: [{ name: "Dr. Alvin May", url: "https://woundwise.com" }],
  creator: "Dr. Alvin May",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://woundwise.com",
    siteName: "WoundWise",
    title: "WoundWise | Expert Wound Care Education",
    description: "Comprehensive wound care education from Dr. Alvin May",
  },
  twitter: {
    card: "summary_large_image",
    title: "WoundWise | Expert Wound Care Education",
    description: "Comprehensive wound care education from Dr. Alvin May",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="relative flex min-h-screen flex-col">
          <SiteHeader />
          <main className="flex-1">{children}</main>
          <SiteFooter />
        </div>
      </body>
    </html>
  );
}
