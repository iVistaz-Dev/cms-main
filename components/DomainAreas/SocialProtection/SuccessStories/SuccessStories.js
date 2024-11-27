import { successStoriesData } from "@/utils/socialProtectiondata"
import Image from "next/image"
import React from "react"

const SuccessStories = () => {
  return (
    <div className="flex flex-col lg:flex-row md:me-16">
      {/* Left Section */}
      <div className="bg-cms-primary text-white flex-shrink-0">
        <div className="w-full lg:w-[400px] px-8 sm:px-16 py-8 sm:py-10">
          <h1 className="text-2xl sm:text-3xl font-semibold mb-4 sm:mb-6">
            Success Stories
          </h1>
        </div>
      </div>

      {/* Right Section */}
      <div className="flex-1 border-b py-5">
        <div className="px-5 sm:px-10 lg:px-20 py-5 w-full mx-auto">
          <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
            {successStoriesData.map((item, idx) => (
              <li
                key={idx}
                className="flex flex-col gap-5 p-5 bg-[#EBE1EF] rounded-lg"
              >
                {/* Description */}
                <p className="text-sm sm:text-base lg:text-lg text-[#404040]">
                  {item.desc}
                </p>

                {/* Image and Title */}
                <div className="flex items-center gap-3">
                  <Image
                    src={item.imageUrl}
                    width={80}
                    height={80}
                    alt={`Success Stories ${idx + 1}`}
                    className="w-[65px] sm:w-[80px] lg:w-[97px] h-auto"
                  />
                  <span className="text-lg sm:text-xl lg:text-xl font-semibold text-cms-primary">
                    {item.title}
                  </span>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default SuccessStories
