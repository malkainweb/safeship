import Image from "next/image";
import phone_img from "@/public/home/desktopphone.webp";
import phone_img_mobile from "@/public/home/mobilephone.webp";

const cards = [
  {
    title: "Mitigate Your Losses",
    description:
      "No more paying out of pocket for shipping provider mistakes. No more refunding or resending free packages to customers. Safeship takes care of these costs entirely.",
  },
  {
    title: "Increase Your Conversion",
    description:
      "Customers have more confidence when they know their order is protected, simple as that.",
  },
];

export default function CustomerService() {
  return (
    <section className="px-0 md:px-12 py-10 md:py-16">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <div className="text-center md:px-0 px-8 mb-8 md:mb-3">
          <h2 className="font-gotham font-bold text-[#193A80] tracking-[-3%] text-3xl md:text-5xl text-balance md: mb-4">
            Top Tier Customer Service
          </h2>
          <p className="font-gotham-book text-[#193A80] text-sm md:text-base max-w-2xl mx-auto text-balance text-center">
            When you partner with us, we take on package related customer
            service and put ourselves in the trenches, so you can focus on what
            matters most.
          </p>
        </div>

        {/* Phone image */}
        <div className="flex  max-w-4xl mx-auto justify-center">
          <div className="relative w-full">
            <Image
              src={phone_img}
              alt="Hand holding phone with SafeShip chat"
              className="object-contain hidden md:block"
            />
            <Image
              src={phone_img_mobile}
              alt="Hand holding phone with SafeShip chat"
              className="object-contain md:hidden"
            />
          </div>
        </div>

        {/* Cards */}
        <div className="grid md:px-0 px-3  grid-cols-1 md:grid-cols-2 gap-3 md:gap-3">
          {cards.map((card, i) => (
            <div
              key={i}
              className="bg-[#193A80]  rounded-2xl md:rounded-3xl px-8 md:px-14 py-10 md:py-16 "
            >
              <div className="max-w-sm mx-auto flex flex-col gap-4 md:gap-6">
                <h3 className="font-gotham font-bold text-white text-3xl md:text-4xl leading-tight tracking-[-4%] text-center">
                  {card.title}
                </h3>
                <p className="font-gotham-book text-white/80 text-sm md:text-base text-center ">
                  {card.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Stats */}
        <div className="md:px-0 px-3">
          <div
            className="md:mt-6 mt-3 bg-[#F5F7FD] rounded-2xl md:rounded-3xl px-3 md:px-14 py-10 md:py-14 flex grid-cols-1 md:grid-cols-3 flex-wrap justify-center gap-[5%] md:gap-6"
            style={{
              boxShadow: "0px 4.04px 8.08px 0px rgba(140,152,164,0.25)",
            }}
          >
            {[
              {
                stat: "93%",
                description:
                  "Decrease in customer service time spent on package issues.",
              },
              {
                stat: "98%",
                description: "Customer satisfaction for SafeShip users.",
              },
              {
                stat: "100%",
                description:
                  "Reduction in costs associated with lost, stolen, or damaged packages.",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="flex flex-col md:max-w-sm md:w-full w-[46%] nth-[n+3]:w-[70%] nth-[-n+2]:mb-[5%] md:nth-[-n+2]:mb-0 gap-4 md:gap-10 items-center text-center"
              >
                <p className="font-gotham font-bold text-[#193A80] text-5xl md:text-6xl tracking-[-3%]">
                  {item.stat}
                </p>
                <p className="font-inter md:max-w-xs  md:px-2 text-center text-[#1E2022] text-sm md:text-base md:text-balance">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
