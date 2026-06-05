import { Inter } from "next/font/google";
import localFont from "next/font/local";

export const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const gotham = localFont({
  variable: "--font-gotham",
  src: [
    {
      path: "../fonts/gotham/Gotham-Light.woff2",
      weight: "300",
      style: "normal",
    },
    {
      path: "../fonts/gotham/Gotham-Light.woff",
      weight: "300",
      style: "normal",
    },
    {
      path: "../fonts/gotham/Gotham-Medium.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "../fonts/gotham/Gotham-Medium.woff",
      weight: "500",
      style: "normal",
    },
    {
      path: "../fonts/gotham/Gotham-MediumItalic.woff2",
      weight: "500",
      style: "italic",
    },
    {
      path: "../fonts/gotham/Gotham-MediumItalic.woff",
      weight: "500",
      style: "italic",
    },
    {
      path: "../fonts/gotham/Gotham-Bold.woff2",
      weight: "700",
      style: "normal",
    },
    {
      path: "../fonts/gotham/Gotham-Bold.woff",
      weight: "700",
      style: "normal",
    },
    {
      path: "../fonts/gotham/Gotham-BoldItalic.woff2",
      weight: "700",
      style: "italic",
    },
    {
      path: "../fonts/gotham/Gotham-BoldItalic.woff",
      weight: "700",
      style: "italic",
    },
    {
      path: "../fonts/gotham/Gotham-Black.woff2",
      weight: "900",
      style: "normal",
    },
    {
      path: "../fonts/gotham/Gotham-Black.woff",
      weight: "900",
      style: "normal",
    },
  ],
});

export const gotham_book = localFont({
  variable: "--font-gotham-book",
  src: [
    {
      path: "../fonts/gotham/Gotham-Book.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../fonts/gotham/Gotham-Book.woff",
      weight: "400",
      style: "normal",
    },
    {
      path: "../fonts/gotham/Gotham-BookItalic.woff2",
      weight: "400",
      style: "italic",
    },
    {
      path: "../fonts/gotham/Gotham-BookItalic.woff",
      weight: "400",
      style: "italic",
    },
  ],
});

export const avenir = localFont({
  variable: "--font-avenir",
  src: [
    {
      path: "../fonts/Avenir/Avenir-Heavy.woff2",
      weight: "800",
      style: "normal",
    },
    {
      path: "../fonts/Avenir/Avenir-Heavy.woff",
      weight: "800",
      style: "normal",
    },
  ],
});

export const avenir_roman = localFont({
  variable: "--font-avenir-roman",
  src: [
    {
      path: "../fonts/Avenir/Avenir-Roman.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../fonts/Avenir/Avenir-Roman.woff",
      weight: "400",
      style: "normal",
    },
  ],
});
