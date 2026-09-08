import { useState } from "react";
import ContactPopup from "./ContactPopup";

function EntHero() {
  const [showPopup, setShowPopup] = useState(false);

  return (
    <>
      <section className="min-h-screen bg-white flex flex-col items-center justify-center text-center px-6">
        {/* Badge */}
        <span className="text-orange-500 font-semibold text-sm tracking-widest uppercase mb-6">
          Enterprise
        </span>

        {/* Headline */}
        <h1 className="text-5xl md:text-7xl font-black text-black max-w-4xl leading-tight mb-6">
          The language problem doesn't wait for a dubbing house.
        </h1>

        {/* Subtext */}
        <p className="text-gray-400 text-lg mb-10">
          Three use cases. One answer.
        </p>

        {/* CTAs */}
        <div className="flex gap-4">
          <button
            onClick={() =>
              document
                .getElementById("use-cases")
                .scrollIntoView({ behavior: "smooth" })
            }
            className="bg-orange-500 text-white font-semibold px-8 py-3 rounded-full hover:bg-orange-600 transition"
          >
            Explore Use Cases
          </button>
          <button
            onClick={() => setShowPopup(true)}
            className="border border-gray-300 text-black px-8 py-3 rounded-full hover:bg-gray-100 transition"
          >
            Book a Demo
          </button>
        </div>

        {/* Down arrow */}
        <div className="mt-12 text-gray-300 text-2xl animate-bounce">↓</div>
      </section>

      {/* Popup */}
      {showPopup && <ContactPopup onClose={() => setShowPopup(false)} />}
    </>
  );
}

export default EntHero;
