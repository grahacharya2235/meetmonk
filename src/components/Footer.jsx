function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400 pt-16 pb-8 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Top grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 mb-12">
          {/* Brand column */}
          <div className="col-span-2 md:col-span-1">
            <h2 className="text-white text-xl font-bold mb-3">MeetMonk</h2>
            <p className="text-sm leading-relaxed mb-4">
              AI-powered real-time translation for meetings, parliaments,
              healthcare, and beyond.
            </p>
            <div className="flex gap-4">
              <a href="#" className="hover:text-white transition text-lg">
                🐦
              </a>
              <a href="#" className="hover:text-white transition text-lg">
                💼
              </a>
              <a href="#" className="hover:text-white transition text-lg">
                ▶️
              </a>
              <a href="#" className="hover:text-white transition text-lg">
                📸
              </a>
            </div>
          </div>

          {/* Product column */}
          <div>
            <h3 className="text-white font-semibold mb-4">Product</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="hover:text-white transition">
                  Features
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  Demo
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  Pricing
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  API Access
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  Changelog
                </a>
              </li>
            </ul>
          </div>

          {/* Solutions column */}
          <div>
            <h3 className="text-white font-semibold mb-4">Solutions</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="hover:text-white transition">
                  Government
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  Healthcare
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  Legal
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  Manufacturing
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  Entertainment
                </a>
              </li>
            </ul>
          </div>

          {/* Company column */}
          <div>
            <h3 className="text-white font-semibold mb-4">Company</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="hover:text-white transition">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  News & Events
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  Careers
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  Contact
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 pt-6 flex flex-col md:flex-row items-center justify-between gap-4 text-sm">
          <p>© 2025 MeetMonk. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-white transition">
              Terms of Service
            </a>
            <a href="#" className="hover:text-white transition">
              Contact
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
