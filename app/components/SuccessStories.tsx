"use client";

import Image from "next/image";
import { useRef, useState, useEffect } from "react";
import story1 from "@/public/home/stories/story1.webp";
import story2 from "@/public/home/stories/story2.webp";
import story3 from "@/public/home/stories/story3.webp";
import story4 from "@/public/home/stories/story4.webp";
import story5 from "@/public/home/stories/story5.webp";

const stories = [
  { image: story1, title: "The Foams" },
  { image: story2, title: "The Hybrids" },
  { image: story3, title: "The Maxes" },
  { image: story4, title: "The Hybrids" },
  { image: story5, title: "The Hybrids" },
];

export default function SuccessStories() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const scrollToIndex = (index: number) => {
    const wrapper = scrollRef.current;
    if (!wrapper) return;
    const card = wrapper.children[index] as HTMLElement;
    if (!card) return;
    wrapper.scrollTo({
      left: card.offsetLeft - wrapper.offsetWidth / 2 + card.offsetWidth / 2,
      behavior: "smooth",
    });
  };

  const handlePrev = () => {
    const newIndex = Math.max(0, activeIndex - 1);
    setActiveIndex(newIndex);
    scrollToIndex(newIndex);
  };

  const handleNext = () => {
    const newIndex = Math.min(stories.length - 1, activeIndex + 1);
    setActiveIndex(newIndex);
    scrollToIndex(newIndex);
  };

  useEffect(() => {
    const wrapper = scrollRef.current;
    if (!wrapper) return;

    const handleScroll = () => {
      const cards = Array.from(wrapper.children) as HTMLElement[];
      const wrapperCenter = wrapper.scrollLeft + wrapper.offsetWidth / 2;
      let closest = 0;
      let minDist = Infinity;
      cards.forEach((card, i) => {
        const cardCenter = card.offsetLeft + card.offsetWidth / 2;
        const dist = Math.abs(wrapperCenter - cardCenter);
        if (dist < minDist) {
          minDist = dist;
          closest = i;
        }
      });
      setActiveIndex(closest);
    };

    wrapper.addEventListener("scroll", handleScroll, { passive: true });
    return () => wrapper.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="bg-[#193A80] px-0 md:px-12 py-14 md:py-20">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-8 md:mb-12">
          <h2 className="font-gotham font-bold tracking-[-3%] text-white text-3xl md:text-5xl mb-4">
            Success Stories
          </h2>
          <p className="font-gotham font-light text-white/80 text-sm md:px-0 px-10 text-balance md:text-base">
            SafeShip Package Protection is trusted by brands all over the world.
          </p>
        </div>

        {/* Desktop grid */}
        <div className="hidden md:grid grid-cols-3 gap-6 mb-6">
          {stories.slice(0, 3).map((story, i) => (
            <div key={i} className="flex flex-col gap-3">
              <div className="relative aspect-1.5/1 rounded-[14.4px] overflow-hidden">
                <Image
                  src={story.image}
                  alt={story.title}
                  fill
                  className="object-cover"
                />
              </div>
              <p className="font-gotham font-bold text-white tracking-[-3%] text-center text-xl">
                {story.title}
              </p>
            </div>
          ))}
        </div>
        <div className="hidden md:grid grid-cols-2 gap-6 max-w-[66%] mx-auto">
          {stories.slice(3).map((story, i) => (
            <div key={i} className="flex flex-col gap-3">
              <div className="relative aspect-1.5/1 rounded-2xl overflow-hidden">
                <Image
                  src={story.image}
                  alt={story.title}
                  fill
                  className="object-cover"
                />
              </div>
              <p className="font-gotham font-bold text-white tracking-[-3%] text-center text-xl">
                {story.title}
              </p>
            </div>
          ))}
        </div>

        {/* Mobile carousel */}
        <div className="md:hidden  relative">
          <div
            ref={scrollRef}
            className="flex gap-4 px-3 overflow-x-auto scrollbar-hide scroll-snap-x-mandatory pb-4"
            style={{ scrollSnapType: "x mandatory" }}
          >
            {stories.map((story, i) => (
              <div
                key={i}
                className="flex flex-col gap-3 flex-shrink-0 w-[80vw]"
                style={{ scrollSnapAlign: "center" }}
              >
                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
                  <Image
                    src={story.image}
                    alt={story.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <p className="font-gotham font-bold text-white tracking-[-3%] text-center text-xl">
                  {story.title}
                </p>
              </div>
            ))}
          </div>

          {/* Arrows */}
          <div className="flex items-center justify-center gap-6 mt-4">
            <button
              onClick={handlePrev}
              disabled={activeIndex === 0}
              className="w-10 h-10 cursor-pointer rounded-full border border-white/50 flex items-center justify-center text-white disabled:opacity-30 transition-all hover:bg-white hover:text-[#193A80]"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M15 18l-6-6 6-6" />
              </svg>
            </button>

            <div className="flex gap-2">
              {stories.map((_, i) => (
                <div
                  key={i}
                  onClick={() => {
                    setActiveIndex(i);
                    scrollToIndex(i);
                  }}
                  className={`rounded-full transition-all cursor-pointer ${
                    i === activeIndex
                      ? "bg-white w-5 h-2"
                      : "bg-white/30 w-2 h-2"
                  }`}
                />
              ))}
            </div>

            <button
              onClick={handleNext}
              disabled={activeIndex === stories.length - 1}
              className="w-10 h-10 cursor-pointer rounded-full border border-white/50 flex items-center justify-center text-white disabled:opacity-30 transition-all hover:bg-white hover:text-[#193A80]"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M9 18l6-6-6-6" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
