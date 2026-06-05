import Image from "next/image";
import shopify from "@/public/home/integrations/shopify.png";
import netsuite from "@/public/home/integrations/netsuite.png";
import rebuy from "@/public/home/integrations/rebuy.png";
import slack from "@/public/home/integrations/slack.png";
import klaviyo from "@/public/home/integrations/kalviyo.png";

const logos = [netsuite, slack, rebuy, klaviyo, shopify];

function MarqueeRow({ reverse = false }: { reverse?: boolean }) {
  const doubled = [...logos, ...logos, ...logos];
  return (
    <div className="overflow-hidden w-full">
      <div
        className={`flex gap-3 md:gap-4 w-max ${
          reverse ? "animate-marquee-reverse" : "animate-marquee"
        }`}
      >
        {doubled.map((logo, i) => (
          <div
            key={i}
            className="shrink-0 w-40 md:w-50  bg-[#F5F7FD] overflow-hidden rounded-2xl flex items-center justify-center"
          >
            <Image
              src={logo}
              alt="Integration logo"
              className="h-auto w-full "
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default function Integrations() {
  return (
    <section className="py-10 md:py-16 overflow-hidden">
      {/* Heading */}
      <div className="text-center px-3 md:px-12 flex items-center flex-col gap-5 mb-10 md:mb-14">
        <h2 className="font-gotham font-bold text-[#193A80] text-3xl md:text-5xl tracking-[-4%]  text-balance max-w-2xl mx-auto">
          Seamlessly connect to the apps you use.
        </h2>
        <p className="font-gotham-book text-[#193A80] text-sm md:text-base max-w-2xl mx-auto text-balance ">
          SavedBy Package Protection easily and securely integrates into your
          workflow, servicing all major e-commerce providers. Don&apos;t see
          your provider here or need a custom solution? Give us a call and
          we&apos;ll make it happen!
        </p>
        <button className="bg-[#193A80] w-fit text-white font-gotham font-bold text-sm md:text-base tracking-widest px-12 py-3.5 rounded-[22.07px] hover:bg-[#193A80]/90 transition-colors cursor-pointer">
          File a Claim
        </button>
      </div>

      {/* Marquee rows */}
      <div className="flex flex-col gap-3 md:gap-4">
        <MarqueeRow />
        <MarqueeRow reverse />
      </div>
    </section>
  );
}
