'use client'
import React, { useEffect } from 'react'
//import { initFlowbite } from 'flowbite'

export default function Page({ onClick }) {
  return (
    <nav
      className="bg-white border-gray-200 dark:bg-gray-900 drop-shadow-xl"
      data-aos="fade-down"
    >
      <div className="w-[90%] flex flex-wrap items-center justify-between mx-auto p-4">
        <a href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
          <span className="self-center text-4xl font-semibold whitespace-nowrap dark:text-white">
            ESG
          </span>
        </a>

        <div className="" id="navbar-default">
          <button
            className="bg-[#7F3F97] text-white p-2 text-lg rounded"
            onClick={onClick}
          >
            Contact Us
          </button>
        </div>
      </div>
    </nav>
  )
}
