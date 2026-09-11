import { Link } from "react-router-dom";
import { useState } from "react";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black shadow-md">
      <div className="flex items-center justify-between px-6 py-4">
        {/* Logo */}
        <img
          src="/LOGO_Meetmonk_White.png"
          alt="MeetMonk"
          className="h-8 w-auto object-contain"
        />

        {/* Desktop Nav Links */}
        <div className="hidden md:flex gap-8 text-gray-300 font-medium">
          <a href="#home" className="hover:text-orange-500 transition">
            Home
          </a>
          <Link to="/government" className="hover:text-orange-500 transition">
            Government
          </Link>
          <Link to="/enterprise" className="hover:text-orange-500 transition">
            Enterprise
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-white text-2xl focus:outline-none"
        >
          {menuOpen ? "✕" : "☰"}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden flex flex-col gap-4 px-6 pb-4 bg-black text-gray-300 font-medium">
          <a
            href="#home"
            onClick={() => setMenuOpen(false)}
            className="hover:text-orange-500 transition"
          >
            Home
          </a>
          <Link
            to="/government"
            onClick={() => setMenuOpen(false)}
            className="hover:text-orange-500 transition"
          >
            Government
          </Link>
          <Link
            to="/enterprise"
            onClick={() => setMenuOpen(false)}
            className="hover:text-orange-500 transition"
          >
            Enterprise
          </Link>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
