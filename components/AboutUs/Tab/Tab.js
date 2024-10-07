"use client"

import { tabs } from "@/utils/data"
import Link from "next/link"
import { usePathname } from "next/navigation"

const Tab = ({ heading, desc }) => {
  const pathname = usePathname()

  return (
    <>
      <div className="text-center mt-10 mb-5">
        <p className="text-cms-secondary-black text-lg">About Us</p>
      </div>
      <ul className="max-w-screen-xl mx-auto flex flex-wrap justify-center items-center gap-2 sm:gap-5 mb-10 text-cms-secondary-black text-lg">
        {tabs.map((item) => {
          const isActive = pathname.includes(item.url)
          return (
            <li key={item.id} className="flex-1 sm:flex-none">
              <Link href={item.url}>
                <button
                  className={`py-3 px-6 w-full sm:w-auto ${
                    isActive
                      ? "bg-cms-primary-green text-white"
                      : "bg-cms-secondary-green text-[#404040]"
                  }`}
                >
                  {item.tab}
                </button>
              </Link>
            </li>
          )
        })}
      </ul>

      <div>
        <div className="max-w-screen-xl mx-auto flex flex-col lg:flex-row justify-between md:my-5 px-5 md:px-0">
          <div className="flex flex-col gap-5 mb-5 lg:mb-0">
            <h1 className="text-[#171717] text-2xl sm:text-3xl md:text-4xl font-semibold">
              {heading}
            </h1>
            <div className="border border-[#707070] w-60" />
          </div>
          <div className="w-full lg:w-1/2">
            <p className="text-[#4E4E4E] text-base sm:text-lg md:text-2xl">
              {desc}
            </p>
          </div>
        </div>
      </div>
    </>
  )
}

export default Tab
