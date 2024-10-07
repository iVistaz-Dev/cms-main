import { solutionsData } from "@/utils/data"
import Image from "next/image"
import React from "react"

const Solutions = () => {
  return (
    <div className="bg-[#E8E8E8] py-10 md:py-16">
      <ul className="max-w-screen-xl mx-auto flex flex-col md:flex-row justify-center gap-8 md:gap-0">
        {solutionsData.map((item, index) => {
          const dataLength = solutionsData.length
          return (
            <li
              key={item.id}
              className={`flex flex-col items-center gap-3 w-full md:w-[400px] px-7 pb-5 md:pb-0 ${
                index < dataLength - 1
                  ? "border-b md:border-r md:border-b-0 border-dashed border-cms-primary-gray"
                  : ""
              }`}
            >
              <Image
                src={item.logoUrl}
                width={60}
                height={60}
                alt={item.title}
              />
              <h3 className="text-[#1A1A1A] text-xl sm:text-2xl font-semibold">
                {item.title}
              </h3>
              <p className="text-base sm:text-lg text-[#4E4E4E] text-center">
                {item.desc}
              </p>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default Solutions
