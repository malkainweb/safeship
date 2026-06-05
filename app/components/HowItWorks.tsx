import Image from "next/image";
import step1 from "@/public/home/steps/step1.webp";
import step2 from "@/public/home/steps/step2.webp";
import step3 from "@/public/home/steps/step3.webp";

const steps = [
  {
    image: step1,
    title:
      "A customer makes an order on your store and buys SafeShip Package Protection.",
    description:
      "Customers are more likely to checkout from a store if they know their package is protected. 75% of customers have abandoned a purchase due to unsatisfactory shipping options in the checkout.",
  },
  {
    image: step2,
    title:
      "The Carrier decides they need to lose a package today - and choose your customer.",
    description:
      "Instead of taking on the time and costs associated with package issues, SafeShip turns this cost center into a profit center.",
  },
  {
    image: step3,
    title:
      "Your customer reaches out to SafeShip and we issue them a refund or re-order within 24 hours.",
    description:
      "We'll re-order from your website, or issue a refund to your customer. We'll respond to your customer claims ASAP, sometimes within minutes!",
  },
];

export default function HowItWorks() {
  return (
    <section className="bg-[#193A80] px-4 md:px-12 py-14 md:py-24">
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <div className="text-cente flex flex-col  text-center items-center gap-6 mb-10 md:mb-16">
          <h2 className="font-gotham font-bold  text-balance max-w-md mx-auto text-[#F5F7FD] text-3xl md:text-5xl tracking-[-3%] ">
            SafeShip Works in 3 Simple Steps
          </h2>
          <p className="font-gotham-book md:text-pretty text-balance text-white text-sm md:text-base max-w-2xl mx-auto text- ">
            SavedBy Package Protection will handle all your customer service
            team&apos;s shipping issues. We&apos;ll re-order from your website,
            or issue a refund to your customer and will always respond to all
            your customer claims within 24 hours.
          </p>
          <button className="border w-fit border-white bg-white text-[#193A80] font-gotham font-bold  text-sm md:text-base px-12 py-3 rounded-[22.07px] hover:bg-transparent hover:text-white transition-colors cursor-pointer">
            File a Claim
          </button>
        </div>

        {/* Steps */}
        <div className="relative max-w-5xl mx-auto  flex flex-col">
          {/* Vertical line */}
          <div className="absolute left-1/2 h-[70%]  top-1/2  -translate-1/2  w-1.5 bg-[#CCEFFF] hidden md:block" />

          {steps.map((step, i) => (
            <div
              key={i}
              className="relative grid grid-cols-1 md:grid-cols-[1fr_auto_1fr] gap-6 md:gap-10 items-center mb-10 md:mb-12 last:mb-0"
            >
              {/* Mobile number */}
              <div className="flex md:hidden absolute right-0 top-0 w-10 h-10 rounded-full border-4 border-white bg-[#193A80] items-center justify-center">
                <span className="font-inter font-bold text-white text-2xl">
                  {i + 1}
                </span>
              </div>
              {/* Image */}
              <div className="relative md:w-full w-[60%] aspect-square   rounded-2xl md:rounded-[30px] overflow-hidden">
                <Image
                  src={step.image}
                  alt={step.title}
                  className="object-cover w-full scale-105 h-full"
                />
              </div>

              {/* Circle number */}
              <div className="hidden md:flex w-14 h-14 rounded-full border-[5px] border-[#CCEFFF] bg-[#193A80] items-center justify-center flex-shrink-0 z-10">
                <span className="font-inter font-bold text-white text-2xl">
                  {i + 1}
                </span>
              </div>

              {/* Text */}
              <div className="flex flex-col gap-3 md:gap-4">
                <h3 className="font-gotham font-black text-white text-lg md:text-xl leading-[1.25] tracking-[-2%]">
                  {step.title}
                </h3>
                <p className="font-gotham-book text-white text-sm md:text-base ">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
