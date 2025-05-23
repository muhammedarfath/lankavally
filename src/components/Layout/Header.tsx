import { useEffect, useState } from 'react'
import logo from "../../assets/lk png.png"
import { BiPhone, BiMenu, BiX } from "react-icons/bi"
import { RiMvAiLine } from "react-icons/ri"
import { Link } from "react-router-dom"
import { motion, AnimatePresence } from "framer-motion"

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

  // Mobile menu animation variants
  const mobileMenuVariants = {
    hidden: { opacity: 0, height: 0 },
    visible: { 
      opacity: 1, 
      height: "auto",
      transition: {
        duration: 0.3,
        ease: "easeInOut"
      }
    },
    exit: { 
      opacity: 0, 
      height: 0,
      transition: {
        duration: 0.2,
        ease: "easeInOut"
      }
    }
  }

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ease-in-out ${
        scrolled ? "bg-white shadow-md p-9" : "bg-transparent p-9"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          {/* Logo - always centered */}
          <div className="absolute left-1/2 transform -translate-x-1/2">
            <Link to="/">
              <img 
                src={logo} 
                alt="Resort Logo" 
                className={`h-28 md:h-28 object-contain transition-all duration-300 ${scrolled ? 'h-28 md:h-28' : ''} ${scrolled ? '' : 'invert'}`} 
              />
            </Link>
          </div>

          {/* Desktop Navigation - Left Side */}
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
          </div>

          {/* Desktop Navigation - Right Side */}
          <div className="hidden md:flex items-center space-x-6">
            <Link
              to="/about"
              className={`text-sm uppercase tracking-wider hover:opacity-80 ${scrolled ? "text-black" : "text-white"}`}
            >
              About
            </Link>
            <Link
              to="/imagegrid"
              className={`text-sm uppercase tracking-wider hover:opacity-80 ${scrolled ? "text-black" : "text-white"}`}
            >
              Explore
            </Link>
            <Link
              to="/contact"
              className={`text-sm uppercase tracking-wider hover:opacity-80 ${scrolled ? "text-black" : "text-white"}`}
            >
              Contact
            </Link>
            <Link to="/contact">
           
            <button className={`${scrolled ? "bg-black text-white" : "bg-white text-black"} px-6 py-2 text-sm uppercase tracking-wider hover:bg-gray-100 transition`}>
              Book Now
            </button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden ml-auto">
            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`p-2 transition-all duration-300 ${scrolled ? "text-black" : "text-white"}`}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? (
                <motion.div
                  initial={{ rotate: 0 }}
                  animate={{ rotate: 180 }}
                  transition={{ duration: 0.3 }}
                >
                  <BiX size={28} />
                </motion.div>
              ) : (
                <motion.div
                  initial={{ rotate: 0 }}
                  animate={{ rotate: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <BiMenu size={28} />
                </motion.div>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu with Animation */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial="hidden"
              animate="visible"
              exit="exit"
              variants={mobileMenuVariants}
              className={`md:hidden overflow-hidden ${scrolled ? "bg-white" : "bg-black bg-opacity-90"}`}
            >
              <div className="flex flex-col space-y-6 px-4 py-6">
                <div className="flex justify-between items-center">
                  <button className={`${scrolled ? "text-black" : "text-white"}`}>EN</button>
                  <div className="flex space-x-4">
                    <Link 
                      to="tel:+123456789" 
                      className={`hover:opacity-80 ${scrolled ? "text-black" : "text-white"}`}
                    >
                      <BiPhone className="h-5 w-5" />
                    </Link>
                    <Link
                      to="mailto:info@example.com"
                      className={`hover:opacity-80 ${scrolled ? "text-black" : "text-white"}`}
                    >
                      <RiMvAiLine className="h-5 w-5" />
                    </Link>
                  </div>
                </div>
                
                <div className="border-b border-opacity-20 my-2" />
                
                <Link
                  to="/about"
                  className={`text-lg uppercase tracking-wider hover:opacity-80 ${scrolled ? "text-black" : "text-white"}`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  About
                </Link>
                <Link
                  to="/imagegrid"
                  className={`text-lg uppercase tracking-wider hover:opacity-80 ${scrolled ? "text-black" : "text-white"}`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Explore
                </Link>
                <Link
                  to="/contact"
                  className={`text-lg uppercase tracking-wider hover:opacity-80 ${scrolled ? "text-black" : "text-white"}`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Contact
                </Link>
                
                <div className="border-b border-opacity-20 my-2" />
                <Link to="/contact">
                <button 
                  className={`${scrolled ? "bg-black text-white" : "bg-white text-black"} px-6 py-3 text-lg uppercase tracking-wider hover:bg-gray-100 transition w-full`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Book Now
                </button>
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  )
}

export default Header