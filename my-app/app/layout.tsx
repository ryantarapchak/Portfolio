import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
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
  metadataBase: new URL("https://ryantarapchak.vercel.app"),
  title: "Ryan Tarapchak | Portfolio",
  description:
    "Master of Finance student specializing in financial analysis, valuation, and M&A.",

  // ✅ CLEAN favicon setup (this is all you need now)
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  },

  openGraph: {
    title: "Ryan Tarapchak | Portfolio",
    description:
      "Master of Finance student specializing in financial analysis, valuation, and M&A.",
    url: "https://ryantarapchak.vercel.app",
    siteName: "Ryan Tarapchak Portfolio",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Ryan Tarapchak | Portfolio",
    description:
      "Master of Finance student specializing in financial analysis, valuation, and M&A.",
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
    >
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="shortcut icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/favicon.ico" />
      </head>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}