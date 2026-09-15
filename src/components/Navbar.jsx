import { Link } from 'react-router-dom'
import { useState } from 'react'
import ContactPopup from './enterprise/ContactPopup'

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [showPopup, setShowPopup] = useState(false)

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black shadow-md">
        <div className="flex items-center justify-between px-6 py-4">
          {/* Logo */}
          <img src="/LOGO_Meetmonk_White.png" alt="MeetMonk" className="h-8 w-auto object-contain" />

          {/* Desktop Nav Links */}
          <div className="hidden md:flex gap-8 text-gray-300 font-medium">
            <a href="#home" className="hover:text-orange-500 transition">Live Stream Services</a>
            <Link to="/government" className="hover:text-orange-500 transition">Citizen Services</Link>
            <Link to="/enterprise" className="hover:text-orange-500 transition">Live Conference Translation</Link>
          </div>

          {/* Desktop Request Consultation button */}
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
            {menuOpen ? '✕' : '☰'}
          </button>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="md:hidden flex flex-col gap-4 px-6 pb-4 bg-black text-gray-300 font-medium">
            <a href="#home" onClick={() => setMenuOpen(false)} className="hover:text-orange-500 transition">Live Stream Services</a>
            <Link to="/government" onClick={() => setMenuOpen(false)} className="hover:text-orange-500 transition">Citizen Services</Link>
            <Link to="/enterprise" onClick={() => setMenuOpen(false)} className="hover:text-orange-500 transition">Live Conference Translation</Link>
            <button
              onClick={() => { setShowPopup(true); setMenuOpen(false) }}
              className="bg-orange-500 text-black font-semibold px-5 py-2 rounded-full hover:bg-orange-400 transition text-sm w-fit"
            >
              Request Consultation
            </button>
          </div>
        )}
      </nav>

      {/* Popup */}
      {showPopup && <ContactPopup onClose={() => setShowPopup(false)} />}
    </>
  )
}

export default Navbar
