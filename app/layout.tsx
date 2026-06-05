import type { Metadata } from "next";
import "./globals.css";
import {
  inter,
  gotham,
  gotham_book,
  avenir,
  avenir_roman,
} from "../app/util/font";
import LenisProvider from "./util/LenisProvider";

export const metadata: Metadata = {
  title: "SafeShip | Protect Every Order",
  description:
    "SafeShip Package Protection handles all your shipping challenges — lost, stolen, or damaged packages — so you can save time, reduce costs, and build customer loyalty.",
  keywords: [
    "package protection",
    "shipping insurance",
    "lost package",
    "stolen package",
    "damaged package",
    "SafeShip",
    "ecommerce shipping",
    "Shopify shipping protection",
  ],
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  },
  openGraph: {
    title: "SafeShip | Protect Every Order",
    description:
      "Handle all your shipping challenges with SafeShip. We re-order or refund your customers within 24 hours.",
    siteName: "SafeShip",
    images: [
      {
        url: "/favicon.ico",
        width: 1200,
        height: 630,
        alt: "SafeShip Package Protection",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "SafeShip | Protect Every Order",
    description:
      "Handle all your shipping challenges with SafeShip. We re-order or refund your customers within 24 hours.",
    images: ["/favicon.ico"],
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
      className={`
        ${inter.variable}
        ${gotham.variable}
        ${gotham_book.variable}
        ${avenir.variable}
        ${avenir_roman.variable}
        antialiased
      `}
    >
      <body className="min-h-full flex flex-col">
        <LenisProvider>{children}</LenisProvider>
      </body>
    </html>
  );
}
