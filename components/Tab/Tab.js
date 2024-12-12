"use client"

import React, { useEffect, useState } from "react"
import { Menu } from "@headlessui/react"

const Tab = ({ tabs }) => {
  const [isActive, setIsActive] = useState(1)
  const [isMobile, setIsMobile] = useState(false)

  const handleResize = () => {
    setIsMobile(window.innerWidth < 640)
  }

  useEffect(() => {
    window.addEventListener("resize", handleResize)
    handleResize() // Initial check
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  const activeTab = tabs.find((tab) => tab.id === isActive)

  return (
    <div className="bg-[#D7EEE8]">
      {isMobile ? (
        <div className="max-w-screen-xl mx-auto p-4">
          <Menu>
            <Menu.Button className="w-full py-2 px-4 text-lg bg-[#D7EEE8] text-cms-primary-gray flex justify-between items-center">
              {activeTab.tab}
              <svg
                className="w-5 h-5 ml-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 9l-7 7-7-7"
                ></path>
              </svg>
            </Menu.Button>
            <Menu.Items className="mt-2 flex flex-col bg-white shadow-lg">
              {tabs.map((item) => (
                <Menu.Item key={item.id}>
                  {({ active }) => (
                    <a href={`#${item.link}`}>
                      <button
                        className={`w-full text-left py-2 px-4 text-lg ${
                          active
                            ? "bg-[#0000] text-cms-primary-gray"
                            : "text-[#404040]"
                        }`}
                        onClick={() => setIsActive(item.id)}
                      >
                        {item.tab}
                      </button>
                    </a>
                  )}
                </Menu.Item>
              ))}
            </Menu.Items>
          </Menu>
        </div>
      ) : (
        <ul className="max-w-screen-xl mx-auto flex flex-wrap gap-2">
          {tabs.map((item) => (
            <li key={item.id}>
              <a href={`#${item.link}`}>
                <button
                  className={`py-2 px-4 sm:py-3 sm:px-6 text-base sm:text-lg ${
                    isActive === item.id
                      ? "bg-[#98D5C5] text-cms-primary-gray border-b-2 border-cms-primary-green"
                      : "text-[#404040] border-none"
                  }`}
                  onClick={() => setIsActive(item.id)}
                >
                  {item.tab}
                </button>
              </a>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default Tab
