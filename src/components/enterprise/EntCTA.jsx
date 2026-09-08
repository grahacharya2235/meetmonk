import { useState } from "react";
import ContactPopup from "./ContactPopup";

function EntCTA() {
  const [showPopup, setShowPopup] = useState(false);

  return (
    <>
      <section className="bg-white py-32 px-6 flex flex-col items-center justify-center text-center">
        <h2 className="text-4xl md:text-6xl font-black text-black max-w-2xl leading-tight mb-10">
          Let us help you reach a{" "}
          <span className="text-orange-500">global audience.</span>
        </h2>
        <button
          onClick={() => setShowPopup(true)}
          className="bg-orange-500 text-white font-semibold px-10 py-4 rounded-full hover:bg-orange-600 transition text-lg"
        >
          Talk to us
        </button>
      </section>

      {/* Popup */}
      {showPopup && <ContactPopup onClose={() => setShowPopup(false)} />}
    </>
  );
}

export default EntCTA;
