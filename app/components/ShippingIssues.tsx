import Image from "next/image";
import theft_img from "@/public/home/issues/theft.svg";
import damaged_img from "@/public/home/issues/damaged.svg";
import lost_img from "@/public/home/issues/lost.svg";

const issues = [
  {
    icon: theft_img,
    title: "Theft of items",
    description:
      "Our company specializes in replacing stolen items with proof.",
  },
  {
    icon: damaged_img,
    title: "Damaged items",
    description: "We ensure that any damaged packages are promptly replaced.",
  },
  {
    icon: lost_img,
    title: "Lost items",
    description:
      "Safeship offers refunds for lost items. You're covered in every conditions.",
  },
];

export default function ShippingIssues() {
  return (
    <section className="px-3 md:px-12 py-10 md:py-16">
      <div className="max-w-6xl mx-auto">
        <h2 className="font-gotham font-bold text-[#193A80] tracking-[-3%] text-2xl md:text-4xl text-center mb-10">
          We cover all major shipping issues for brands A-Z
        </h2>

        <div
          className="bg-[#F5F7FD]   rounded-2xl md:rounded-3xl px-3 md:px-16 py-6 md:py-14 md:grid flex flex-wrap gap-[4%] justify-center md:grid-cols-3 md:gap-10"
          style={{ boxShadow: "0px 3.68px 19px 0px rgba(0,0,0,0.15)" }}
        >
          {issues.map((issue) => (
            <div
              key={issue.title}
              className="flex md:w-full w-[45%] nth-[-n+2]:mb-[6%] md:nth-[-n+2]:mb-0 items-center justify-between flex-col gap-2 md:gap-3"
            >
              <Image
                src={issue.icon}
                alt={issue.title}
                className=" md:w-24 w-20"
              />
              <h3 className="font-gotham font-black text-[#193A80] text-base md:text-lg">
                {issue.title}
              </h3>
              <p className="font-avenir-roman text-balance text-center text-[#193A80]  text-xs md:text-sm md:leading-snug">
                {issue.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
