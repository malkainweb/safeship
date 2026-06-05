"use client";

import { useRef, useState, useEffect } from "react";

const reviews = [
  {
    review:
      "SafeShip resolved my lost package claim within hours. I didn't have to chase anyone down — they just handled it. Incredible service.",
    author: "Marcus D.",
    rating: 5,
  },
  {
    review:
      "Setup took minutes and the ROI was immediate. SafeShip pays for itself every single month. Highly recommend to any Shopify brand.",
    author: "Tom W.",
    rating: 3.5,
  },
  {
    review:
      "I was skeptical at first but after my first claim was processed same-day, I was sold. SafeShip has completely changed how I handle shipping issues.",
    author: "Priya N.",
    rating: 4.5,
  },
  {
    review:
      "Our customer service tickets dropped by more than half after adding SafeShip. Customers trust us more at checkout now.",
    author: "James R.",
    rating: 5,
  },
  {
    review:
      "A stolen package used to mean a full refund out of my own pocket. Not anymore. SafeShip took care of everything — fast and professionally.",
    author: "Linda K.",
    rating: 4,
  },
];

export default function Testimonials() {
  const trackRef = useRef<HTMLDivElement>(null);
  const [atStart, setAtStart] = useState(true);
  const [atEnd, setAtEnd] = useState(false);

  const getCardWidth = () => {
    const card = trackRef.current?.querySelector<HTMLElement>(".review-card");
    return (card?.offsetWidth || 320) + 12;
  };

  const handlePrev = () => {
    trackRef.current?.scrollBy({ left: -getCardWidth(), behavior: "smooth" });
  };

  const handleNext = () => {
    trackRef.current?.scrollBy({ left: getCardWidth(), behavior: "smooth" });
  };

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const handleScroll = () => {
      setAtStart(track.scrollLeft <= 10);
      setAtEnd(track.scrollLeft >= track.scrollWidth - track.clientWidth - 10);
    };

    track.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => track.removeEventListener("scroll", handleScroll);
  }, []);

  const arrowBase =
    "rounded-full bg-white cursor-pointer border border-[#E0E0E0] flex items-center justify-center text-[#193A80] bg-white disabled:opacity-50 hover:opacity-60 transition-opacity";

  const ChevronLeft = () => (
    <svg
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
      <polyline points="15 18 9 12 15 6" />
    </svg>
  );

  const ChevronRight = () => (
    <svg
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
      <polyline points="9 18 15 12 9 6" />
    </svg>
  );

  const Stars = ({ rating }: { rating: number }) => (
    <div className="flex items-center gap-1">
      {Array.from({ length: 5 }).map((_, i) => {
        const full = i + 1 <= Math.floor(rating);
        const half = !full && i < rating;
        return (
          <svg
            key={i}
            xmlns="http://www.w3.org/2000/svg"
            width="22"
            height="22"
            viewBox="0 0 24 24"
          >
            <defs>
              <linearGradient id={`half-${i}`}>
                <stop offset="50%" stopColor="#193A80" />
                <stop offset="50%" stopColor="#D1D5DB" />
              </linearGradient>
            </defs>
            <polygon
              points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"
              fill={full ? "#193A80" : half ? `url(#half-${i})` : "#D1D5DB"}
            />
          </svg>
        );
      })}
    </div>
  );
  return (
    <section className="bg-[#F5F7FD] md:pl-12 py-10 md:py-16">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-10 items-start">
        {/* Left - sticky */}
        <div className="flex flex-col gap-6 lg:sticky lg:top-24 flex-shrink-0 w-full lg:w-[300px]">
          <h2 className="font-gotham md:text-start text-center  text-balance font-bold text-[#193A80] text-3xl md:text-4xl leading-tight tracking-[-1px]">
            Customers Love SafeShip&apos;s support system!
          </h2>

          {/* Desktop arrows */}
          <div className="hidden md:flex items-center gap-3 mt-2">
            <button
              onClick={handlePrev}
              disabled={atStart}
              className={`w-10 h-10  ${arrowBase}`}
            >
              <ChevronLeft />
            </button>
            <button
              onClick={handleNext}
              disabled={atEnd}
              className={`w-10 h-10 ${arrowBase}`}
            >
              <ChevronRight />
            </button>
          </div>
        </div>

        {/* Right - scrollable track */}
        <div className="flex-1 w-full min-w-0">
          <div
            ref={trackRef}
            className="flex md:pr-4 md:pl-0 px-3 gap-3"
            style={{
              overflowX: "scroll",
              scrollSnapType: "x mandatory",
              WebkitOverflowScrolling: "touch",
              scrollbarWidth: "none",
              msOverflowStyle: "none",
            }}
          >
            {reviews.map((review, i) => (
              <div
                key={i}
                className="review-card flex-shrink-0 w-70 md:w-[320px] bg-white rounded-2xl p-6 md:p-8 flex flex-col gap-6 justify-between"
                style={{ scrollSnapAlign: "center" }}
              >
                <div className="flex items-center gap-1">
                  <Stars rating={review.rating} />
                </div>
                <p className="font-avenir-roman text-[#000000] text-base md:text-base ">
                  {review.review}
                </p>
                <p className="font-gotham-book font-medium text-[#252027] text-sm">
                  — {review.author}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Mobile arrows */}
        <div className="flex md:hidden items-center gap-4 -mt-4 mx-auto">
          <button
            onClick={handlePrev}
            disabled={atStart}
            className={`w-12 h-12 ${arrowBase}`}
          >
            <ChevronLeft />
          </button>
          <button
            onClick={handleNext}
            disabled={atEnd}
            className={`w-12 h-12 ${arrowBase}`}
          >
            <ChevronRight />
          </button>
        </div>
      </div>
    </section>
  );
}
