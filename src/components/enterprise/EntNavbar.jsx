import { Link } from "react-router-dom";
import { useState } from "react";

const tabs = ["Broadcast & OTT", "Conferences & Events", "Online Meetings"];

function EntNavbar({ activeIndex, setActiveIndex }) {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleTabClick = (index) => {
    setActiveIndex(index);
    const section = document.getElementById("use-cases");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="fixed top-0 left-0 right-0 z-50">
      {/* Main navbar */}
      <nav className="flex items-center justify-between px-6 py-4 bg-gray-100 border-b border-gray-200">
        <Link to="/">
          <img
            src="/logo.jpeg"
            alt="MeetMonk"
            className="h-8 w-auto object-contain"
          />
        </Link>

        {/* Desktop links */}
        <div className="hidden md:flex gap-8 text-gray-600 font-medium text-sm">
          <Link to="/" className="hover:text-black transition">
            Home
          </Link>
          <Link to="/government" className="hover:text-black transition">
            Government
          </Link>
          <Link to="/enterprise" className="text-black font-semibold">
            Enterprise
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-black text-2xl focus:outline-none"
        >
          {menuOpen ? "✕" : "☰"}
        </button>
      </nav>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden flex flex-col gap-4 px-6 py-4 bg-gray-100 border-b border-gray-200 text-sm">
          <Link
            to="/"
            onClick={() => setMenuOpen(false)}
            className="text-gray-600 hover:text-black transition"
          >
            Home
          </Link>
          <Link
            to="/government"
            onClick={() => setMenuOpen(false)}
            className="text-gray-600 hover:text-black transition"
          >
            Government
          </Link>
          <Link
            to="/enterprise"
            onClick={() => setMenuOpen(false)}
            className="text-black font-semibold"
          >
            Enterprise
          </Link>
          <div className="border-t border-gray-200 pt-3 flex flex-col gap-3">
            {tabs.map((tab, index) => (
              <button
                key={tab}
                onClick={() => {
                  handleTabClick(index);
                  setMenuOpen(false);
                }}
                className={`text-left text-sm font-medium transition ${
                  activeIndex === index
                    ? "text-black font-semibold"
                    : "text-gray-400"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Use case tabs — desktop only */}
      <div className="hidden md:flex gap-8 px-8 py-3 bg-gray-100 border-b border-gray-200">
        {tabs.map((tab, index) => (
          <button
            key={tab}
            onClick={() => handleTabClick(index)}
            className={`text-sm font-medium pb-1 transition ${
              activeIndex === index
                ? "text-black border-b-2 border-orange-500"
                : "text-gray-400 hover:text-black"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>
    </div>
  );
}

export default EntNavbar;
