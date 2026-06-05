import Image from "next/image";
import delivery_img from "@/public/home/delivery.webp";
import lower_losses from "@/public/home/features/delivery.svg";
import fewer_tickets from "@/public/home/features/delivery.svg";
import more_confidence from "@/public/home/features/delivery.svg";
import easy_checkout from "@/public/home/features/delivery.svg";

const features = [
  { icon: lower_losses, title: "Lower Delivery Losses" },
  { icon: fewer_tickets, title: "Fewer Support Tickets" },
  { icon: more_confidence, title: "More Customer Confidence" },
  { icon: easy_checkout, title: "Easy Checkout Add-On" },
];

export default function PostPurchase() {
  return (
    <section className="px-3 md:px-12 py-10 md:py-14">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
        {/* Left - Image */}
        <div className="relative w-full aspect-[0.9/1] rounded-2xl md:rounded-[20px] overflow-hidden">
          <Image
            src={delivery_img}
            alt="Delivery person holding packages"
            fill
            className="object-cover"
          />
        </div>

        {/* Right - Content */}
        <div className="flex flex-col gap-6 md:gap-10">
          <h2 className="font-gotham font-bold text-balance text-[#193A80] text-3xl md:text-4xl  tracking-[-4%]">
            A better post-purchase experience for brands and their customers.
          </h2>
          <p className="font-gotham-book text-[#1E2022] text-sm md:text-base max-w-md">
            SafeShip helps your store offer confidence at checkout, reduce
            support pressure, and give customers a simple way to resolve
            eligible delivery issues.
          </p>

          {/* Feature grid */}
          <div className="grid grid-cols-2 md:max-w-[90%] gap-3 md:gap-4">
            {features.map((feature, i) => (
              <div
                key={i}
                className="bg-[#F5F7FD] rounded-xl md:rounded-[14.07px] p-5 flex items-center gap-3"
              >
                <Image
                  src={feature.icon}
                  alt={feature.title}
                  className="w-10 h-10 flex-shrink-0"
                />
                <p className="font-gotham font-medium tracking-[-2%] text-[#193A80] text-sm md:text-base ">
                  {feature.title}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
