import { useState } from "react";

const slides = [
  {
    title: "Better than anyone else, without the quirks",
    description:
      "Our translation accuracy and speed outperform the best out there — human or AI. We also don't need breaks every 20 minutes.",
  },
  {
    title: "Affordability that scales",
    description:
      "Whether it's a per-minute rate for streaming or a daily rate for your deployment, our prices for interpretation are the lowest on the planet. Guaranteed.",
  },
  {
    title: "The devil is in the nuance",
    description:
      "Hear actual spoken interpretation with the language style intact. Because a political discussion sounds different from one about a sitcom.",
  },
  {
    title: "On-premise deployment",
    description:
      "Deploy entirely on-prem — for enterprise, defense, healthcare, or anyone who wants their data to stay exactly where it belongs.",
  },
  {
    title: "Always available",
    description:
      "Need interpretation at 3 AM? Launching a 50-language deployment tomorrow? No coordinators. No waiting lists.",
  },
  {
    title: "Scale without limits",
    description: "Expand into 70 languages without hiring 70 specialists.",
  },
];

function EntWhyMeetMonk() {
  const [activeSlide, setActiveSlide] = useState(0);

  return (
    <section className="bg-black py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <p className="text-orange-500 font-semibold text-sm tracking-widest uppercase mb-4">
          The Difference
        </p>
        <h2 className="text-4xl md:text-5xl font-black text-white mb-8">
          Why <span className="text-orange-500">MeetMonk</span>?
        </h2>
        <div className="border-t border-gray-700 mb-12"></div>
        <div className="min-h-[160px] mb-10">
          <h3 className="text-2xl md:text-3xl font-black text-white mb-4">
            {slides[activeSlide].title}
          </h3>
          <p className="text-gray-400 text-lg leading-relaxed max-w-2xl">
            {slides[activeSlide].description}
          </p>
        </div>
        <div className="flex gap-3 items-center">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveSlide(index)}
              className={`h-1 rounded-full transition-all duration-300 ${
                activeSlide === index
                  ? "bg-orange-500 w-8"
                  : "bg-gray-600 w-4 hover:bg-gray-400"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default EntWhyMeetMonk;
