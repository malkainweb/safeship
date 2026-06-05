import Image from "next/image";
import loyalty_img from "@/public/home/loyalty.webp";
import BeforeAfterReviews from "./BeforeAfterReviews";

export default function CustomerLoyalty() {
  return (
    <section className="bg-[#F5F7FD] px-3 md:px-12 pt-10 pb-14 md:py-20">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-8 md:mb-10">
          <p className="font-gotham font-medium text-[#193A80] text-base uppercase mb-3">
            Build Customer Loyalty
          </p>
          <h2 className="font-gotham font-bold text-[#193A80] text-3xl md:text-4xl tracking-[-5%] text-balance max-w-2xl mx-auto">
            Happy customers guaranteed even when things go wrong.
          </h2>
        </div>

        {/* Card */}
        <div className="relative w-full  rounded-2xl md:rounded-[26.61px] md:p-8 flex overflow-hidden">
          {/* Background image */}
          <Image
            src={loyalty_img}
            alt="Person stealing package"
            fill
            className="object-cover md:block hidden"
          />

          {/* Blue overlay card */}
          <div className="  z-[10] w-full md:w-[43rem] max-w-xl bg-[#193A80] items-center justify-center rounded-2xl md:rounded-[24px] p-8 md:px-10 md:py-14 flex flex-col gap-4 md:gap-6">
            <h3 className="font-gotham font-bold text-balance text-white text-2xl md:text-4xl  tracking-[-4%]">
              Shipping Problems Shouldn&apos;t Sink Your Customer Experience
              with every order
            </h3>
            <p className="font-gotham-book text-white tracking-[-2%] text-base">
              Every lost, stolen, or damaged package creates more than a
              delivery issue. It creates frustrated customers, refund requests,
              replacement costs, support tickets, chargebacks, and negative
              reviews. Your brand may not control everything that happens after
              an order leaves your warehouse — but customers still expect you to
              make it right. SafeShip helps you do that without carrying the
              full burden alone.
            </p>
          </div>
        </div>
      </div>

      <BeforeAfterReviews />
    </section>
  );
}
