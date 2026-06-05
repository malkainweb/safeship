import Image from "next/image";
import safeship_logo from "@/public/home/safeship-logo.svg";
import good_img from "@/public/home/table/good.svg";
import bad_img from "@/public/home/table/bad.svg";
import question_img from "@/public/home/table/question.svg";
import Link from "next/link";

type RowValue =
  | { type: "check" }
  | { type: "cross" }
  | { type: "question" }
  | { type: "text"; value: string; subtext?: string };

const rows: { label: string; safeship: RowValue; others: RowValue }[] = [
  {
    label: "A+ Customer Service",
    safeship: { type: "check" },
    others: { type: "question" },
  },
  {
    label: "Quick Claim Resolution",
    safeship: { type: "check" },
    others: { type: "cross" },
  },
  {
    label: "Easy Integration",
    safeship: { type: "check" },
    others: { type: "cross" },
  },
  {
    label: "Simple Re-Orders",
    safeship: { type: "check" },
    others: { type: "cross" },
  },
  {
    label: "Lost Packages",
    safeship: { type: "check" },
    others: { type: "check" },
  },
  {
    label: "Damaged Items",
    safeship: { type: "check" },
    others: { type: "check" },
  },
  {
    label: "Stolen Items",
    safeship: { type: "check" },
    others: { type: "check" },
  },
  {
    label: "Return to Sender",
    safeship: { type: "check" },
    others: { type: "cross" },
  },
  {
    label: "International",
    safeship: { type: "check" },
    others: { type: "cross" },
  },
  {
    label: "Pricing",
    safeship: { type: "text", value: "$0", subtext: "Seriously." },
    others: { type: "text", value: "$$$$$$" },
  },
];

function CellValue({ value, label }: { value: RowValue; label: string }) {
  if (value.type === "check") {
    return <Image src={good_img} alt="Yes" className="w-6 h-6" />;
  }
  if (value.type === "cross") {
    return <Image src={bad_img} alt="No" className="w-6 h-6" />;
  }
  if (value.type === "question") {
    return <Image src={question_img} alt="Maybe" className="w-6 h-6" />;
  }
  return (
    <div className="flex flex-col items-center text-center">
      <p className="font-gotham font-bold text-[#1E2022] text-sm md:text-lg">
        {value.value}
      </p>
      {value.subtext && (
        <p className="font-gotham-book text-[#1E2022] text-sm md:text-lg">
          {value.subtext}
        </p>
      )}
    </div>
  );
}
// md:shadow-none md:[box-shadow:3.97px_0px_19.77px_0px_rgba(0,0,0,0.10),-3.97px_0px_19.77px_0px_rgba(0,0,0,0.10)]
export default function ComparisonTable() {
  return (
    <section className="px-3 md:px-12 py-10 md:py-16">
      <div className="max-w-5xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-8 md:mb-14">
          <h2 className="font-gotham max-w-3xl mx-auto font-bold md:text-pretty text-balance text-[#193A80] text-3xl md:text-5xl leading-tight tracking-[-3%] mb-4">
            Coverage for every major shipping issue.
          </h2>
          <p className="font-gotham-book md:text-pretty max-w-xl text-balance text-[#193A80] text-sm md:text-base  mx-auto">
            SafeShip Protection will re-order from your website or issue a
            refund to your customer and will respond to all customer claims
            within 24 hours.
          </p>
        </div>

        {/* Table */}
        <div className="grid grid-cols-3 md:grid-cols-[1fr_1.2fr_1.2fr] ">
          {/* Header row */}
          <div />
          <div className="bg-[#193A80] mx-0 md:mx-2 rounded-tl-xl md:rounded-t-xl flex items-center justify-center py-6 md:py-8 px-4">
            <Image
              src={safeship_logo}
              alt="SafeShip"
              className="h-10  w-auto object-contain"
            />
          </div>
          <div className="bg-[#E5E5E5] mx-0 md:mx-2 rounded-tr-xl md:rounded-t-xl flex items-center justify-center py-6 md:py-8 md:px-4">
            <span className="font-gotham font-medium text-[#193A80] text-sm md:text-xl">
              The other guys
            </span>
          </div>

          {/* Rows */}
          {rows.map((row, i) => {
            const isLast = i === rows.length - 1;
            return (
              <>
                {/* Label */}
                <div
                  key={`label-${i}`}
                  className={`bg-[#F6F9FB]    mx-0 md:mx-2 px-4 md:px-6 py-5 relative flex items-center ${
                    i === 0 ? "rounded-t-xl" : ""
                  } ${isLast ? "md:rounded-b-xl  rounded-bl-xl" : ""}`}
                >
                  <p className="font-gotham font-bold tracking-[-2%] text-[#193A80] text-xs md:text-sm m-0">
                    {row.label}
                  </p>
                  {!isLast && (
                    <div className="absolute bottom-0 left-0 md:left-[4%] w-full md:w-[92%] border-b border-[#193A80]" />
                  )}
                </div>

                {/* SafeShip col */}
                <div
                  key={`safeship-${i}`}
                  className={`bg-[#F6F9FB] mx-0 md:mx-2 px-4 md:px-6 py-5 relative flex items-center justify-center `}
                  style={{
                    clipPath: "inset(0px -20px 0px -20px)",
                  }}
                >
                  <CellValue value={row.safeship} label={row.label} />
                  {!isLast && (
                    <div className="absolute bottom-0 left-0 md:left-[4%] w-full md:w-[92%] border-b border-[#193A80]" />
                  )}
                </div>

                {/* Others col */}
                <div
                  key={`others-${i}`}
                  className={`bg-[#F5F5F5] mx-0 md:mx-2 px-4 md:px-6 py-5 relative flex items-center justify-center ${
                    isLast ? "md:rounded-b-xl rounded-br-xl" : ""
                  }`}
                >
                  <CellValue value={row.others} label={row.label} />

                  {!isLast && (
                    <div className="absolute bottom-0 left-0 md:left-[4%] w-full md:w-[92%] border-b border-[#193A80]" />
                  )}
                </div>
              </>
            );
          })}
        </div>

        {/* File a Claim button — inside SafeShip col */}
        <div className=" flex justify-center w-full md:grid md:grid-cols-[1fr_1.2fr_1.2fr]  ">
          <div className="md:block hidden" />
          <div className=" md:bg-[#F6F9FB]  mx-0 md:mx-2 rounded-b-xl flex flex-col items-center justify-center gap-4 md:pt-0 pt-4 md:pb-6">
            <Link
              href="#file-a-claim"
              className="bg-[#193A80] text-white font-gotham font-bold  md:w-fit w-[80%] text-sm  md:px-12 py-5 md:py-4 rounded-[18.57px] hover:bg-[#193A80]/90 transition-colors"
            >
              File a Claim
            </Link>
          </div>
          <div className="md:block hidden" />
        </div>
      </div>
    </section>
  );
}
