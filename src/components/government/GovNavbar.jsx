import { Link } from "react-router-dom";
import { useState } from "react";
import ContactPopup from "../enterprise/ContactPopup";

function GovNavbar() {
  const [showPopup, setShowPopup] = useState(false);

  return (
    <>
      <div className="fixed top-0 left-0 right-0 z-50">
        {/* Top row */}
        <nav className="flex items-center justify-between px-8 py-4 bg-gray-950 border-b border-white/10">
          {/* Logo */}
          <Link to="/" className="text-2xl font-bold text-white">
            meet<span className="font-light">monk</span>
          </Link>

          {/* Top nav links */}
          <div className="hidden md:flex gap-8 font-medium text-sm">
            <Link to="/" className="text-gray-400 hover:text-white transition">
              Home
            </Link>
            <Link
              to="/government"
              className="text-white font-semibold border-b-2 border-orange-500 pb-0.5"
            >
              Government
            </Link>
            <Link
              to="/enterprise"
              className="text-gray-400 hover:text-white transition"
            >
              Enterprise
            </Link>
          </div>

          {/* CTA Button */}
          <button
            onClick={() => setShowPopup(true)}
            className="bg-orange-500 text-black font-semibold px-5 py-2 rounded-full hover:bg-orange-400 transition"
          >
            Request Consultation
          </button>
        </nav>

        {/* Second row */}
        <div className="flex gap-8 px-8 py-3 bg-gray-900 border-b border-white/10">
          <a
            href="#applications"
            className="text-sm text-gray-400 hover:text-white transition"
          >
            Applications
          </a>
          <a
            href="#platform"
            className="text-sm text-gray-400 hover:text-white transition"
          >
            Platform
          </a>
          <a
            href="#security"
            className="text-sm text-gray-400 hover:text-white transition"
          >
            Security
          </a>
        </div>
      </div>

      {/* Popup */}
      {showPopup && <ContactPopup onClose={() => setShowPopup(false)} />}
    </>
  );
}

export default GovNavbar;
