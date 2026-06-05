"use client";

import Image from "next/image";
import safeship_logo from "@/public/home/safeship-logo.svg";
import { useState } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import Link from "next/link";

export default function Footer() {
  const [form, setForm] = useState({
    email: "",
    order: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    console.log(form);
  };

  return (
    <footer className="bg-[#193A80] pb-10">
      {/* Main footer */}
      <div className="px-3 md:px-12 pt-16 pb-10 md:pt-16">
        <div className="max-w-6xl  items-center mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 ">
          {/* Left */}
          <div className="flex  items-start flex-col gap-6 md:gap-8">
            <Image
              src={safeship_logo}
              alt="SafeShip"
              className="h-10   w-auto object-contain"
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
            {/* Email */}
            <div className="flex flex-col gap-1">
              <label className="text-[#1A2237] text-sm">Work Email:*</label>
              <input
                name="email"
                type="email"
                value={form.email}
                onChange={handleChange}
                className="border border-[#E0E0E0] rounded-lg px-4 py-3 text-sm text-[#1A2237] outline-none focus:border-[#193A80] transition-colors"
              />
            </div>

            {/* Order Number */}
            <div className="flex flex-col gap-1">
              <label className="text-[#1A2237] text-sm">Order Number:*</label>
              <input
                name="order"
                value={form.order}
                onChange={handleChange}
                className="border border-[#E0E0E0] rounded-lg px-4 py-3 text-sm text-[#1A2237] outline-none focus:border-[#193A80] transition-colors"
              />
            </div>
            {/* Submit */}
            <Link
              href="#file-a-claim"
              onClick={handleSubmit}
              className="bg-[#193A80] w-fit text-white font-gotham font-bold text-sm tracking-widest px-10 py-3 rounded-full hover:bg-[#193A80]/90 transition-colors mt-2"
            >
              File a Claim
            </Link>

            {/* Disclaimer */}
            <p className="font-gotham-book text-[#1A2237]/70 text-xs leading-relaxed">
              By submitting this form, you agree to receive promotional messages
              from Safeship and agree to the{" "}
              <a href="/privacy-policy" className="underline">
                Privacy Policy
              </a>
              .
            </p>
          </div>
        </div>
      </div>

      {/* Cookie bar */}
      <div className="md:px-0 px-3">
        <div className="max-w-6xl border mx-auto border-white/20  p-3 md:p-6">
          <div className=" mx-auto">
            <p className="font-inter text-white text-xs leading-relaxed">
              When you visit or interact with our sites, services or tools, we
              or our authorized service providers may use cookies for storing
              information to help provide you with a better, faster and safer
              experience and for marketing purposes.
            </p>
          </div>
        </div>{" "}
      </div>

      {/* Bottom bar */}
      <div className=" px-3 md:px-12 md:mt-6  py-6">
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
