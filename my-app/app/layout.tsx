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
  icons: {
    icon: [
      { url: "/favicon-v2.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-v2.png", sizes: "16x16", type: "image/png" },
    ],
    shortcut: "/favicon-v2.png",
    apple: "/favicon-v2.png",
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
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-v2.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-v2.png" />
        <link rel="shortcut icon" href="/favicon-v2.png" />
        <link rel="apple-touch-icon" href="/favicon-v2.png" />
      </head>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}