import { Link } from "react-router-dom";
import { useState } from "react";
import ContactPopup from "../enterprise/ContactPopup";

function GovNavbar() {
  const [showPopup, setShowPopup] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <div className="fixed top-0 left-0 right-0 z-50">
        {/* Top row */}
        <nav className="flex items-center justify-between px-6 py-4 bg-gray-950 border-b border-white/10">
          <Link to="/">
            <img
              src="/LOGO_Meetmonk_White.png"
              alt="MeetMonk"
              className="h-8 w-auto object-contain"
            />
          </Link>

          {/* Desktop links */}
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

          <div className="flex items-center gap-4">
            <button
              onClick={() => setShowPopup(true)}
              className="hidden md:block bg-orange-500 text-black font-semibold px-5 py-2 rounded-full hover:bg-orange-400 transition text-sm"
            >
              Request Consultation
            </button>

            {/* Mobile hamburger */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="md:hidden text-white text-2xl focus:outline-none"
            >
              {menuOpen ? "✕" : "☰"}
            </button>
          </div>
        </nav>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="md:hidden flex flex-col gap-4 px-6 py-4 bg-gray-950 border-b border-white/10 text-sm">
            <Link
              to="/"
              onClick={() => setMenuOpen(false)}
              className="text-gray-400 hover:text-white transition"
            >
              Home
            </Link>
            <Link
              to="/government"
              onClick={() => setMenuOpen(false)}
              className="text-white font-semibold"
            >
              Government
            </Link>
            <Link
              to="/enterprise"
              onClick={() => setMenuOpen(false)}
              className="text-gray-400 hover:text-white transition"
            >
              Enterprise
            </Link>
            <a
              href="#applications"
              onClick={() => setMenuOpen(false)}
              className="text-gray-400 hover:text-white transition"
            >
              Applications
            </a>
            <a
              href="#platform"
              onClick={() => setMenuOpen(false)}
              className="text-gray-400 hover:text-white transition"
            >
              Platform
            </a>
            <a
              href="#security"
              onClick={() => setMenuOpen(false)}
              className="text-gray-400 hover:text-white transition"
            >
              Security
            </a>
            <button
              onClick={() => {
                setShowPopup(true);
                setMenuOpen(false);
              }}
              className="bg-orange-500 text-black font-semibold px-5 py-2 rounded-full hover:bg-orange-400 transition text-sm w-fit"
            >
              Request Consultation
            </button>
          </div>
        )}

        {/* Second row — desktop only */}
        <div className="hidden md:flex gap-8 px-8 py-3 bg-gray-900 border-b border-white/10">
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

      {showPopup && <ContactPopup onClose={() => setShowPopup(false)} />}
    </>
  );
}

export default GovNavbar;
