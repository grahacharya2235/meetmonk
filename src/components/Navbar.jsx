import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 py-4 bg-black shadow-md">
      {/* Logo */}
      <img src="/logo.jpeg" alt="Logo" className="h-10 w-auto object-contain" />

      {/* Nav Links */}
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
        <a
          href="#demo"
          onClick={(e) => {
            e.preventDefault();
            document
              .getElementById("demo")
              .scrollIntoView({ behavior: "smooth" });
          }}
          className="hover:text-orange-500 transition cursor-pointer"
        >
          Demo
        </a>
      </div>

      {/* CTA Button */}
      <button
        onClick={() =>
          document.getElementById("demo").scrollIntoView({ behavior: "smooth" })
        }
        className="bg-orange-500 text-white px-5 py-2 rounded-lg hover:bg-orange-600 transition"
      >
        Get Started
      </button>
    </nav>
  );
}

export default Navbar;
