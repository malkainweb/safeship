import Image from "next/image";
import hero_img from "@/public/home/hero.webp";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="px-3 md:px-12  py-6">
      <div className="max-w-7xl  mx-auto rounded-2xl md:rounded-[28.8px] overflow-hidden grid grid-cols-1 md:grid-cols-2">
        {/* Left - Blue side */}
        <div className="bg-[#193A80] md:p-16 px-6 py-10 flex flex-col justify-center gap-5 md:gap-8">
          <h1 className="font-gotham font-bold text-white text-3xl tracking-[-4%] md:text-5xl leading-tight">
            Protect Every Order With SafeShip
          </h1>
          <p className="font-inter text-white text-sm md:text-base leading-relaxed max-w-md">
            With Safeship&apos;s Package Protection, we&apos;ll handle all your
            shipping challenges so you can start saving time and money while
            building customer loyalty.
          </p>
          <div className="flex font-inter md:flex-row   font-medium flex-col w-full items-center gap-4">
            <Link
              href="#file-a-claim"
              className="bg-white cursor-pointer md:w-fit w-full text-[#193A80] px-10 py-3.5 rounded-full hover:bg-gray-100 transition-colors"
            >
              File a claim
            </Link>
            <button className="border cursor-pointer md:w-fit w-full border-white text-white px-10 py-3.5 rounded-full hover:bg-white hover:text-[#193A80] transition-colors">
              See how it works
            </button>
          </div>
        </div>

        {/* Right - Image side */}
        <div className="relative w-full aspect-[1.4/1] md:aspect-[1.5/1] h-full  min-h-[200px]">
          <Image
            src={hero_img}
            alt="Delivery person handing package to smiling customer"
            fill
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}
