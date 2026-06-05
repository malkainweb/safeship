import Image from "next/image";
import greenstar from "@/public/home/reviews/greenstar.svg";
import greystar from "@/public/home/reviews/greystar.svg";
import redstar from "@/public/home/reviews/redstar.svg";
import bigarrow from "@/public/home/reviews/bigarrow.svg";

const beforeReview = {
  initials: "SS",
  avatarBg: "#F4A7B9",
  name: "Susan S.",
  rating: 1,
  variant: "red" as const,
  title: "So frustrating",
  review:
    "Never received my perfume because UPS didn't get it to me!!! Shows as delivered, reached out to the company but this is so frustrating.",
};

const afterReview = {
  initials: "TF",
  avatarBg: "#4FC3F7",
  name: "Thomas F.",
  rating: 5,
  variant: "green" as const,
  title: "Super easy to use!",
  review:
    "Had an issue with my package being damaged (some things broke in the shipment), but SavedBy sent a package with new products. Just received them and they look great - super easy to use.",
};

type Review = typeof beforeReview | typeof afterReview;

function TrustpilotStars({
  rating,
  variant,
}: {
  rating: number;
  variant: "red" | "green";
}) {
  const filledStar = variant === "green" ? greenstar : redstar;
  return (
    <div className="flex items-center gap-1">
      {Array.from({ length: 5 }).map((_, i) => (
        <Image
          key={i}
          src={i < rating ? filledStar : greystar}
          alt="star"
          className="w-8 h-8"
        />
      ))}
    </div>
  );
}

function ReviewCard({ review }: { review: Review }) {
  return (
    <div className="bg-white rounded-2xl md:rounded-3xl p-6 md:px-8 md:py-10 flex flex-col gap-4 flex-1">
      {/* Author */}
      <div className="flex items-center gap-3 pb-4 border-b border-[#E0E0E0]">
        <div
          className="w-12 h-12 rounded-full flex items-center justify-center shrink-0"
          style={{ backgroundColor: review.avatarBg }}
        >
          <span className="font-gotham font-black text-white text-lg">
            {review.initials}
          </span>
        </div>
        <p className="font-gotham font-bold text-[#1E2022] text-lg tracking-[-4%]">
          {review.name}
        </p>
      </div>

      {/* Stars */}
      <TrustpilotStars rating={review.rating} variant={review.variant} />

      {/* Content */}
      <div className="flex flex-col gap-2">
        <p className="font-gotham font-bold text-[#1E2022] text-base">
          {review.title}
        </p>
        <p className="font-avenir-roman text-[#1E2022] text-base tracking-[-3%]">
          {review.review}
        </p>
      </div>
    </div>
  );
}

export default function BeforeAfterReviews() {
  return (
    <section className="bg-[#F5F7FD] px-3 md:px-12 pt-10 md:pt-16">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-stretch gap-4 md:gap-6">
        <ReviewCard review={beforeReview} />

        <div className="flex items-center justify-center flex-shrink-0">
          <Image src={bigarrow} alt="Before to after" className="w-12 h-12" />
        </div>

        <ReviewCard review={afterReview} />
      </div>
    </section>
  );
}
