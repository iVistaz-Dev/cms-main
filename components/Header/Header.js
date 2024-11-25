"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { searchIcon } from "@/utils/icon"
import Image from "next/image"
import CurrentPath from "../CurrentPath/CurrentPath"
import SearchModal from "../SearchBar/SearchBar"

const Header = () => {
  const [navbarOpen, setNavbarOpen] = useState(false)
  const [dropdownAbout, setDropdownAbout] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  const closeAllDropdowns = () => {
    setDropdownAbout(false)
  }

  const toggleDropdown = (dropdownSetter) => {
    dropdownSetter((prev) => !prev)
  }

  return (
    <>
      <div
        className={`${
          isScrolled ? "bg-cms-primary" : "bg-transparent"
        } py-5 fixed top-0 right-0 left-0 z-50`}
      >
        <nav
          className={`max-w-screen-xl mx-auto ${
            isScrolled ? "border-none" : "border-y"
          } border-gray-400 z-50`}
        >
          <div
            className={`max-w-screen-xl  flex flex-wrap items-center justify-between mx-auto`}
          >
            <Link
              href="/"
              className="flex items-center space-x-3 rtl:space-x-reverse bg-white p-4"
            >
              <Image
                src="/logo.png"
                width={80}
                height={30}
                alt="logo"
                className="ps-2"
              />
            </Link>
            <button
              data-collapse-toggle="navbar-dropdown"
              type="button"
              className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-white rounded-lg md:hidden focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              aria-controls="navbar-dropdown"
              aria-expanded="false"
              onClick={() => setNavbarOpen(!navbarOpen)}
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="w-5 h-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 17 14"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 1h15M1 7h15M1 13h15"
                />
              </svg>
            </button>
            <div
              className={`${
                navbarOpen ? "block bg-cms-primary" : "hidden"
              } w-full md:block md:w-auto`}
              id="navbar-dropdown"
            >
              <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 md:space-x-8 rtl:space-x-reverse md:flex-row md:items-center md:mt-0">
                <li className="relative">
                  <button
                    id="dropdownNavbarLink"
                    onClick={() => toggleDropdown(setDropdownAbout)}
                    className="flex items-center justify-between w-full py-2 px-3 text-white md:p-0 md:w-auto"
                  >
                    About Us
                    <svg
                      className={`w-2.5 h-2.5 ms-2.5 transform transition-transform duration-300 ${
                        dropdownAbout ? "rotate-180" : ""
                      }`}
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 10 6"
                    >
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="m1 1 4 4 4-4"
                      />
                    </svg>
                  </button>
                  <div
                    id="dropdownNavbar"
                    className={`z-10 ${
                      dropdownAbout ? "block" : "hidden"
                    } absolute font-normal bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600`}
                  >
                    <ul
                      className="py-2 text-sm text-gray-700 dark:text-gray-400"
                      aria-labelledby="dropdownLargeButton"
                      onClick={closeAllDropdowns}
                    >
                      <li>
                        <Link
                          href="/about-us/vision"
                          className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                        >
                          Vision
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/about-us/team"
                          className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                        >
                          Team
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/about-us/incubatees"
                          className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                        >
                          Incubatees
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/about-us/partners"
                          className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                        >
                          Partners
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/careers"
                          className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                        >
                          Careers
                        </Link>
                      </li>
                    </ul>
                  </div>
                </li>

                <li>
                  <Link
                    href="/solutions"
                    className="block py-2 pl-3 pr-4 text-white rounded md:bg-transparent md:p-0"
                  >
                    Solutions
                  </Link>
                </li>

                <li>
                  <Link
                    href="/domain-areas"
                    className="block py-2 pl-3 pr-4 text-white rounded md:bg-transparent md:p-0"
                  >
                    Domain Areas
                  </Link>
                </li>

                <li>
                  <Link
                    href="/social-businesses"
                    className="block py-2 pl-3 pr-4 text-white rounded md:bg-transparent md:p-0"
                  >
                    Social Businesses
                  </Link>
                </li>
                <li>
                  <Link
                    href="/collaborative-initiatives"
                    className="block py-2 pl-3 pr-4 text-white rounded md:bg-transparent md:p-0"
                  >
                    Collaborative Initiatives
                  </Link>
                </li>
                <li>
                  <Link
                    href="/insights"
                    className="block py-2 pl-3 pr-4 text-white rounded md:bg-transparent md:p-0"
                  >
                    Insights
                  </Link>
                </li>
                <li className="flex items-center lg:gap-7">
                  <Link
                    href="/contact-us"
                    className="block py-2 pl-3 pr-4 text-white rounded md:bg-transparent md:p-0"
                  >
                    Contact Us
                  </Link>
                  {/* <SearchModal/> */}
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
      <div className="absolute top-24 z-0 hidden md:block">
        <CurrentPath />
      </div>
    </>
  )
}

export default Header
