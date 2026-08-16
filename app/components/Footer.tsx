"use client";

import Image from "next/image";
import safeship_logo from "@/public/home/safeship-logo.svg";
import { useState } from "react";
import Link from "next/link";

type FormState = "idle" | "loading" | "success" | "error";

export default function Footer() {
  const [form, setForm] = useState({ email: "", order: "" });
  const [formState, setFormState] = useState<FormState>("idle");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    if (!form.email || !form.order) return;
    setFormState("loading");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (data.success) {
        setFormState("success");
        setForm({ email: "", order: "" });
      } else {
        setFormState("error");
      }
    } catch {
      setFormState("error");
    }
  };

  return (
    <footer className="bg-[#193A80] pb-10">
      {/* Main footer */}
      <div className="px-3 md:px-12 pt-16 pb-10 md:pt-16">
        <div className="max-w-6xl items-center mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16">
          {/* Left */}
          <div className="flex items-start flex-col gap-6 md:gap-8">
            <Image
              src={safeship_logo}
              alt="SafeShip"
              className="h-10 w-auto object-contain"
            />
            <h2 className="font-gotham font-bold text-white text-4xl md:text-6xl leading-tight tracking-[-4%]">
              Save Time and Money. Period.
            </h2>
            <p className="font-gotham-book text-white text-sm md:text-base max-w-md">
              Protect orders, increase conversion rate, boost customer loyalty,
              and start saving time and money in the process.
            </p>
            <p className="font-gotham-book text-balance max-w-sm text-white text-sm">
              Have a question? Send us an email to{" "}
              <a
                href="mailto:support@safeship.io"
                className="text-white/80 underline"
              >
                support@safeship.io
              </a>
              .
            </p>
          </div>

          {/* Right - Form */}
          <div className="bg-white font-inter rounded-2xl md:rounded-[23px] p-8 md:p-10 flex flex-col gap-4">
            {formState === "success" ? (
              <div className="flex flex-col items-center justify-center gap-4 py-8 text-center">
                <div className="w-14 h-14 rounded-full bg-green-100 flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="28"
                    height="28"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#16a34a"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </div>
                <h3 className="font-gotham font-bold text-[#1A2237] text-xl">
                  Claim Submitted!
                </h3>
                <p className="font-gotham-book text-[#1A2237]/70 text-sm">
                  We&apos;ve received your claim and will get back to you at{" "}
                  <span className="text-[#193A80] font-medium">
                    {form.email || "your email"}
                  </span>{" "}
                  within 24 hours.
                </p>
                <button
                  onClick={() => setFormState("idle")}
                  className="mt-2 font-gotham-book text-sm text-[#193A80] underline hover:opacity-70 transition-opacity"
                >
                  Submit another claim
                </button>
              </div>
            ) : (
              <>
                {formState === "error" && (
                  <div className="bg-red-50 border border-red-200 rounded-lg px-4 py-3 flex items-center gap-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#dc2626"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <circle cx="12" cy="12" r="10" />
                      <line x1="12" y1="8" x2="12" y2="12" />
                      <line x1="12" y1="16" x2="12.01" y2="16" />
                    </svg>
                    <p className="font-gotham-book text-red-600 text-sm">
                      Something went wrong. Please try again or email us
                      directly.
                    </p>
                  </div>
                )}

                {/* Email */}
                <div className="flex flex-col gap-1">
                  <label className="text-[#1A2237] text-sm">Work Email:*</label>
                  <input
                    name="email"
                    type="email"
                    value={form.email}
                    onChange={handleChange}
                    disabled={formState === "loading"}
                    className="border border-[#E0E0E0] rounded-lg px-4 py-3 text-sm text-[#1A2237] outline-none focus:border-[#193A80] transition-colors disabled:opacity-50"
                  />
                </div>

                {/* Order Number */}
                <div className="flex flex-col gap-1">
                  <label className="text-[#1A2237] text-sm">
                    Order Number:*
                  </label>
                  <input
                    name="order"
                    value={form.order}
                    onChange={handleChange}
                    disabled={formState === "loading"}
                    className="border border-[#E0E0E0] rounded-lg px-4 py-3 text-sm text-[#1A2237] outline-none focus:border-[#193A80] transition-colors disabled:opacity-50"
                  />
                </div>

                {/* Submit */}
                <button
                  onClick={handleSubmit}
                  disabled={
                    formState === "loading" || !form.email || !form.order
                  }
                  className="bg-[#193A80] cursor-pointer w-fit text-white font-gotham font-bold text-sm tracking-widest px-10 py-3 rounded-full hover:bg-[#193A80]/90 transition-colors mt-2 disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
                >
                  {formState === "loading" ? (
                    <>
                      <svg
                        className="animate-spin"
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
                        <path d="M21 12a9 9 0 1 1-6.219-8.56" />
                      </svg>
                      Submitting...
                    </>
                  ) : (
                    "File a Claim"
                  )}
                </button>

                {/* Disclaimer */}
                <p className="font-gotham-book text-[#1A2237]/70 text-xs leading-relaxed">
                  By submitting this form, you agree to receive promotional
                  messages from Safeship and agree to the{" "}
                  <a href="/privacy-policy" className="underline">
                    Privacy Policy
                  </a>
                  .
                </p>
              </>
            )}
          </div>
        </div>
      </div>

      {/* Cookie bar */}
      <div className="md:px-0 px-3">
        <div className="max-w-6xl border mx-auto border-white/20 p-3 md:p-6">
          <p className="font-inter text-white text-xs leading-relaxed">
            When you visit or interact with our sites, services or tools, we or
            our authorized service providers may use cookies for storing
            information to help provide you with a better, faster and safer
            experience and for marketing purposes.
          </p>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="px-3 md:px-12 md:mt-6 py-6">
        <div className="max-w-6xl mx-auto text-white font-inter font-light text-sm flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="flex md:flex-row flex-col md:items-center gap-6 md:gap-10">
            <a href="/terms" className="hover:text-white/60 transition-colors">
              Terms and Conditions
            </a>
            <a
              href="/privacy-policy"
              className="hover:text-white/60 transition-colors"
            >
              Privacy Policy
            </a>
            <a
              href="/shopify-privacy"
              className="hover:text-white/60 transition-colors"
            >
              Shopify App Privacy Policy
            </a>
          </div>
          <p className="md:order-none order-last">
            © SafeShip 2026. All rights reserved
          </p>
        </div>
      </div>
    </footer>
  );
}
