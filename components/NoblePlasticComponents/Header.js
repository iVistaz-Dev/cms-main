"use client"
import React, { useState, useEffect } from "react"
import { FaBars, FaTimes } from "react-icons/fa"
import { usePathname } from "next/navigation"
import Link from "next/link"

const Header = ({ onClick }) => {
  const [isOpen, setIsOpen] = useState(false)
  const [activeLink, setActiveLink] = useState("")
  const pathname = usePathname()

  useEffect(() => {
    setActiveLink(pathname) // Set the active link based on the current path
  }, [pathname])

  const toggleMenu = () => {
    setIsOpen(!isOpen)
    document.body.style.overflow = isOpen ? "auto" : "hidden"
  }

  const handleLinkClick = (link) => {
    setActiveLink(link)
    setIsOpen(false)
    document.body.style.overflow = "auto"
  }

  // Header Scroll animation
  const [scrollDown, setScrollDown] = useState(false)

  useEffect(() => {
    let lastScrollY = window.scrollY

    const handleScroll = () => {
      if (window.scrollY > lastScrollY) {
        setScrollDown(true)
      } else {
        setScrollDown(false)
      }
      lastScrollY = window.scrollY
    }

    window.addEventListener("scroll", handleScroll)

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  return (
    <nav
      className={`shadow-xl border-gray-200 fixed top-0 left-0 right-0 z-50 ${
        scrollDown ? "bg-[#C7EDE6]" : "bg-white"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center p-6">
          <div className="flex items-center">
            <Link href="/shoonya/noble-plastics/">
              <img
                src="https://s3.ap-south-1.amazonaws.com/com.cg.ivista.mediafiles/nobleplasics/noble_plastic_logo.png"
                alt="Logo"
                className="h-16 w-auto object-cover"
              />
            </Link>
          </div>
          <div className="hidden md:flex space-x-4 flex-row items-center gap-7">
            <a
              href="/shoonya/noble-plastics/about/"
              className={`text-gray-700 hover:text-[#7F3F97] ${
                activeLink === "/shoonya/noble-plastics/about/"
                  ? "text-[#7F3F97]"
                  : ""
              }`}
              onClick={() => handleLinkClick("/shoonya/noble-plastics/about/")}
            >
              About
            </a>
            <a
              href="/shoonya/noble-plastics/approach/"
              className={`text-gray-700 hover:text-[#7F3F97] ${
                activeLink === "/shoonya/noble-plastics/approach/"
                  ? "text-[#7F3F97]"
                  : ""
              }`}
              onClick={() =>
                handleLinkClick("/shoonya/noble-plastics/approach/")
              }
            >
              Approach
            </a>
            <a
              href="/shoonya/noble-plastics/work/"
              className={`text-gray-700 hover:text-[#7F3F97] ${
                activeLink === "/shoonya/noble-plastics/work/"
                  ? "text-[#7F3F97]"
                  : ""
              }`}
              onClick={() => handleLinkClick("/shoonya/noble-plastics/work/")}
            >
              Work
            </a>
            <a
              href="/shoonya/noble-plastics/impact/"
              className={`text-gray-700 hover:text-[#7F3F97] ${
                activeLink === "/shoonya/noble-plastics/impact/"
                  ? "text-[#7F3F97]"
                  : ""
              }`}
              onClick={() => handleLinkClick("/shoonya/noble-plastics/impact/")}
            >
              Impact
            </a>
            <button
              className="bg-[#7F3F97] text-white px-4 py-2 rounded-md hover:bg-[#7F3F97]"
              onClick={onClick}
            >
              Contact
            </button>
          </div>
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="text-gray-700 focus:outline-none"
            >
              {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden absolute left-0 right-0 bg-white">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a
              href="/shoonya/noble-plastics/about/"
              className={`text-gray-700 block px-3 py-2 rounded-md text-base font-medium hover:text-[#7F3F97] ${
                activeLink === "/shoonya/noble-plastics/about/"
                  ? "text-[#7F3F97]"
                  : ""
              }`}
              onClick={() => handleLinkClick("/shoonya/noble-plastics/about/")}
            >
              About
            </a>
            <a
              href="/shoonya/noble-plastics/approach/"
              className={`text-gray-700 block px-3 py-2 rounded-md text-base font-medium hover:text-[#7F3F97] ${
                activeLink === "/shoonya/noble-plastics/approach/"
                  ? "text-[#7F3F97]"
                  : ""
              }`}
              onClick={() =>
                handleLinkClick("/shoonya/noble-plastics/approach/")
              }
            >
              Approach
            </a>
            <a
              href="/shoonya/noble-plastics/work/"
              className={`text-gray-700 block px-3 py-2 rounded-md text-base font-medium hover:text-[#7F3F97] ${
                activeLink === "/shoonya/noble-plastics/work/"
                  ? "text-[#7F3F97]"
                  : ""
              }`}
              onClick={() => handleLinkClick("/shoonya/noble-plastics/work/")}
            >
              Work
            </a>
            <a
              href="/shoonya/noble-plastics/impact/"
              className={`text-gray-700 block px-3 py-2 rounded-md text-base font-medium hover:text-[#7F3F97] ${
                activeLink === "/shoonya/noble-plastics/impact/"
                  ? "text-[#7F3F97]"
                  : ""
              }`}
              onClick={() => handleLinkClick("/shoonya/noble-plastics/impact/")}
            >
              Impact
            </a>
            <a
              href="#contact"
              className="bg-[#7F3F97] text-white block px-3 py-2 rounded-md text-base font-medium hover:bg-[#7F3F97]"
              onClick={() => handleLinkClick("#contact")}
            >
              Contact
            </a>
          </div>
        </div>
      )}
    </nav>
  )
}

export default Header
