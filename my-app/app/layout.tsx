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
  title: "Ryan Tarapchak | Finance Portfolio",
  description:
    "Master of Finance student specializing in financial analysis, valuation, and M&A.",

  openGraph: {
    title: "Ryan Tarapchak | Finance Portfolio",
    description:
      "Financial analysis, valuation, and M&A experience.",
    url: "https://ryantarapchak.vercel.app",
    siteName: "Ryan Tarapchak Portfolio",
    images: [
      {
        url: "/preview.png",
        width: 1200,
        height: 630,
        alt: "Ryan Tarapchak Portfolio",
      },
    ],
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Ryan Tarapchak | Finance Portfolio",
    description:
      "Financial analysis, valuation, and M&A experience.",
    images: ["/preview.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}