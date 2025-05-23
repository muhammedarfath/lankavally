"use client"

import type React from "react"
import { BsArrowUp, BsInstagram, BsTwitter } from "react-icons/bs"
import { FaFacebook } from "react-icons/fa"
import { Link } from "react-router-dom"
import logo from "../../assets/lk png.png"

interface FooterLinkProps {
  href: string
  children: React.ReactNode
}

const FooterLink: React.FC<FooterLinkProps> = ({ href, children }) => (
  <Link to={href} className="text-white hover:text-gray-300 transition-colors duration-200">
    {children}
  </Link>
)

interface FooterColumnProps {
  title: string
  links: { label: string; href: string }[]
}

const FooterColumn: React.FC<FooterColumnProps> = ({ title, links }) => (
  <div className="flex flex-col space-y-4">
    <h3 className="font-medium text-white tracking-wider">{title}</h3>
    <div className="flex flex-col space-y-2">
      {links.map((link) => (
        <FooterLink key={link.label} href={link.href}>
          {link.label}
        </FooterLink>
      ))}
    </div>
  </div>
)

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }

  return (
    <footer className="bg-black text-white py-12 px-6 md:px-12 relative">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Logo Column */}
          <div className="flex flex-col">
            <div className="mb-8">
              <img
                src={logo}
                alt="Lanka Valley Resorts"
                width={200}
                height={80}
                className="invert h-28 md:h-28 object-contain" // Makes the logo white on black background
              />
            </div>
          </div>


          {/* Terms & Conditions */}
          <FooterColumn
            title="TERMS & CONDITIONS"
            links={[
              { label: "Privacy Policy", href: "/privacy" },
              { label: "Bookings & Cancellations", href: "/bookings" },
              { label: "Website Terms", href: "/terms" },
            ]}
          />

          {/* Quick Links */}
          <FooterColumn
            title="QUICK LINKS"
            links={[
              { label: "Home", href: "/" },
              { label: "About", href: "/about" },
              { label: "Explore", href: "/imagegrid" },
              { label: "Contact", href: "/contact" },
            ]}
          />
        </div>

        {/* Bottom Section with Social Icons and Copyright */}
        <div className="mt-16 flex flex-col md:flex-row justify-between items-center">
          <div className="flex space-x-6 mb-6 md:mb-0">
            <Link to="https://twitter.com" className="text-white hover:text-gray-300 transition-colors duration-200">
              <BsTwitter size={20} />
              <span className="sr-only">Twitter</span>
            </Link>
            <Link to="https://facebook.com" className="text-white hover:text-gray-300 transition-colors duration-200">
              <FaFacebook size={20} />
              <span className="sr-only">Facebook</span>
            </Link>
            <Link
              to="https://instagram.com"
              className="text-white hover:text-gray-300 transition-colors duration-200"
            >
              <BsInstagram size={20} />
              <span className="sr-only">Instagram</span>
            </Link>
          </div>
          <div className="text-sm text-gray-400">©️ 2025 Lanka Valley. All Rights Reserved.</div>
        </div>
      </div>

      {/* Back to Top Button */}
      <button
        onClick={scrollToTop}
        className="absolute right-6 bottom-6 p-2 bg-black border border-gray-700 rounded-full hover:bg-gray-900 transition-colors duration-200"
        aria-label="Back to top"
      >
        <BsArrowUp size={20} className="text-white" />
      </button>
    </footer>
  )
}