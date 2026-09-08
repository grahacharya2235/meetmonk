import { Link } from "react-router-dom";

const tabs = ["Broadcast & OTT", "Conferences & Events", "Online Meetings"];

function EntNavbar({ activeIndex, setActiveIndex }) {
  const handleTabClick = (index) => {
    setActiveIndex(index);
    // Scroll to use cases section
    const section = document.getElementById("use-cases");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="fixed top-0 left-0 right-0 z-50">
      {/* Main navbar */}
      <nav className="flex items-center justify-between px-8 py-4 bg-gray-100 border-b border-gray-200">
        <Link to="/" className="text-2xl font-bold">
          <span className="text-orange-500">meet</span>
          <span className="text-black font-light">monk</span>
        </Link>
        <div className="flex gap-8 text-gray-600 font-medium text-sm">
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
      </nav>

      {/* Use case tabs */}
      <div className="flex gap-8 px-8 py-3 bg-gray-100 border-b border-gray-200">
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
