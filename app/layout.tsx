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
  title: "lnk",
  description:
    "Turn long, messy links into clean, trackable short URLs in seconds. Fast, simple, and reliable",
  openGraph: {
    type: "website",
    url: "https://lnkhq.vercel.app/",
    title: "lnk",
    description:
      "Turn long, messy links into clean, trackable short URLs in seconds. Fast, simple, and reliable",
    images: [
      {
        url: "https://ik.imagekit.io/d2nnw1txo/og_image.png",
        width: 1200,
        height: 630,
        alt: "lnk - Clean Links, Dirty Fast",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "lnk",
    description:
      "Turn long, messy links into clean, trackable short URLs in seconds. Fast, simple, and reliable",
    images: ["https://ik.imagekit.io/d2nnw1txo/og_image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased `}>
        {children}
      </body>
    </html>
  );
}
