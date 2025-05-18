import { useEffect, useState } from 'react'
import logo from "../../assets/lk png.png"
import {  BiPhone,  BiMenu, BiX } from "react-icons/bi"
import { RiMvAiLine } from "react-icons/ri"
import { Link } from "react-router-dom"

function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  // Handle scroll event to change header background
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Close mobile menu when resizing to larger screens
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setMobileMenuOpen(false)
      }
    }

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ease-in-out ${
        scrolled ? "bg-white shadow-md py-2" : "bg-transparent py-4 md:py-6"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          {/* Logo - centered on mobile, left on desktop */}
          <div className="md:hidden flex-1">
            <img 
              src={logo} 
              alt="Resort Logo" 
              className={`h-16 object-contain ${scrolled ? '' : 'invert'}`} 
            />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            <button className={`font-light ${scrolled ? "text-black" : "text-white"}`}>EN</button>
            <Link to="tel:+123456789" className={`hover:opacity-80 ${scrolled ? "text-black" : "text-white"}`}>
              <BiPhone className="h-4 w-4" />
            </Link>
            <Link
              to="mailto:info@example.com"
              className={`hover:opacity-80 ${scrolled ? "text-black" : "text-white"}`}
            >
              <RiMvAiLine className="h-4 w-4" />
            </Link>
            <Link
              to="/newsletter"
              className={`text-sm uppercase tracking-wider hover:opacity-80 ${scrolled ? "text-black" : "text-white"}`}
            >
              About
            </Link>
            <Link
              to="/resorts"
              className={`text-sm uppercase tracking-wider hover:opacity-80 ${scrolled ? "text-black" : "text-white"}`}
            >
              Contact
            </Link>
          </div>

          {/* Logo - hidden on mobile, shown on desktop */}
          <div className="hidden md:block">
            <img 
              src={logo} 
              alt="Resort Logo" 
              className={`h-20 object-contain ${scrolled ? '' : 'invert'}`} 
            />
          </div>

          {/* Desktop Book Now Button */}
          <div className="hidden md:block">
            <button className={`${scrolled ? "bg-black text-white" : "bg-white text-black"} px-6 py-2 text-sm uppercase tracking-wider hover:bg-gray-100 transition`}>
              Book Now
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`p-2 ${scrolled ? "text-black" : "text-white"}`}
            >
              {mobileMenuOpen ? <BiX size={24} /> : <BiMenu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className={`md:hidden mt-4 pb-4 ${scrolled ? "bg-white" : "bg-black bg-opacity-90"}`}>
            <div className="flex flex-col space-y-4">
              <button className={`text-left ${scrolled ? "text-black" : "text-white"}`}>EN</button>
              <Link 
                to="tel:+123456789" 
                className={`flex items-center hover:opacity-80 ${scrolled ? "text-black" : "text-white"}`}
              >
                <BiPhone className="h-4 w-4 mr-2" />
                Call Us
              </Link>
              <Link
                to="mailto:info@example.com"
                className={`flex items-center hover:opacity-80 ${scrolled ? "text-black" : "text-white"}`}
              >
                <RiMvAiLine className="h-4 w-4 mr-2" />
                Email Us
              </Link>
              <Link
                to="/newsletter"
                className={`text-sm uppercase tracking-wider hover:opacity-80 ${scrolled ? "text-black" : "text-white"}`}
              >
                About
              </Link>
              <Link
                to="/resorts"
                className={`text-sm uppercase tracking-wider hover:opacity-80 ${scrolled ? "text-black" : "text-white"}`}
              >
                Contact
              </Link>
              <button className={`${scrolled ? "bg-black text-white" : "bg-white text-black"} px-6 py-2 text-sm uppercase tracking-wider hover:bg-gray-100 transition w-full`}>
                Book Now
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}

export default Header