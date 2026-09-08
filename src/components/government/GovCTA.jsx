import { useState } from "react";
import ContactPopup from "../enterprise/ContactPopup";

function GovCTA() {
  const [showPopup, setShowPopup] = useState(false);

  return (
    <>
      <section className="bg-gray-950 py-32 px-6 flex flex-col items-center justify-center text-center">
        {/* Label */}
        <p className="text-orange-500 font-semibold text-sm tracking-widest uppercase mb-6">
          Get Started
        </p>

        {/* Headline */}
        <h2 className="text-4xl md:text-6xl font-black text-white max-w-3xl leading-tight mb-6">
          Start with a{" "}
          <span className="text-orange-500">pilot deployment.</span>
        </h2>

        {/* Subtext */}
        <p className="text-gray-400 text-lg max-w-xl mb-10">
          We work directly with government teams to configure, deploy, and
          validate within 48 hours. No procurement complexity.
        </p>

        {/* CTA Button */}
        <button
          onClick={() => setShowPopup(true)}
          className="bg-orange-500 text-black font-semibold px-10 py-4 rounded-full hover:bg-orange-400 transition text-lg"
        >
          Request Government Consultation
        </button>
      </section>

      {/* Popup — reusing the same ContactPopup from Enterprise */}
      {showPopup && <ContactPopup onClose={() => setShowPopup(false)} />}
    </>
  );
}

export default GovCTA;
