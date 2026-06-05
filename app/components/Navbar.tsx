"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import safeship_logo from "@/public/home/dark_logo.svg";

const navLinks = [
  { label: "Case Studies", href: "#case-studies", dropdown: false },
  { label: "How We Work", href: "#how-we-work", dropdown: false },
  { label: "File a Claim", href: "#file-a-claim", dropdown: false },
];
export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky z-9999 top-2.5  px-3 md:px-8 ">
      <nav className="max-w-7xl mx-auto border-[#193A80]/5 border bg-[#E6F5FF]  backdrop-blur-md rounded-full px-4 md:p-2.5 py-2.5 flex items-center justify-between">
        {/* Logo */}
        <Link href="#" className="flex pl-4 items-center gap-2 shrink-0">
          <Image
            src={safeship_logo}
            alt="SafeShip"
            className="h-8 w-auto object-contain"
          />
        </Link>

        {/* Desktop links */}
        <div className="hidden absolute left-1/2 -translate-x-1/2 md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="font-gotham-book text-[#1E2022] text-base hover:text-[#193A80] transition-colors flex tracking-[-2%] items-center gap-1"
            >
              {link.label}
              {link.dropdown && (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polyline points="6 9 12 15 18 9" />
                </svg>
              )}
            </Link>
          ))}
        </div>

        {/* Desktop CTA + Mobile hamburger */}
        <div className="flex items-center gap-4">
          <Link
            href="#file-a-claim"
            className="hidden md:block bg-[#193A80] text-white font-gotham font-bold text-sm  px-12 py-3.5 rounded-full hover:bg-[#193A80]/90 transition-colors"
          >
            File a Claim
          </Link>

          {/* Hamburger */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden flex flex-col gap-1.5 p-2"
          >
            <span
              className={`block w-6 h-0.5 bg-[#193A80] transition-all duration-300 ${
                mobileOpen ? "rotate-45 translate-y-2" : ""
              }`}
            />
            <span
              className={`block w-6 h-0.5 bg-[#193A80] transition-all duration-300 ${
                mobileOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`block w-6 h-0.5 bg-[#193A80] transition-all duration-300 ${
                mobileOpen ? "-rotate-45 -translate-y-2" : ""
              }`}
            />
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          mobileOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="mx-3 mt-2 bg-[#F5F7FD] rounded-3xl px-6 py-6 flex flex-col gap-5">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="font-gotham-book text-[#1E2022] text-base hover:text-[#193A80] transition-colors flex items-center justify-between"
            >
              {link.label}
              {link.dropdown && (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polyline points="6 9 12 15 18 9" />
                </svg>
              )}
            </Link>
          ))}
          <Link
            href="#contact"
            onClick={() => setMobileOpen(false)}
            className="bg-[#193A80] text-white font-gotham font-bold text-sm tracking-widest px-8 py-4 rounded-full text-center hover:bg-[#193A80]/90 transition-colors mt-2"
          >
            File a Claim
          </Link>
        </div>
      </div>
    </header>
  );
}
