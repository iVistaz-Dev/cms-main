import { ethosData, keyDomainData, valuesData } from "@/utils/data"
import {
  ourApproachData,
  theChallengesData,
} from "@/utils/socialProtectiondata"
import Image from "next/image"
import React from "react"

const TheChallengesNew = () => {
  return (
    <div className="flex flex-row md:me-16">
      {/* The Challenges Section */}
      <div className="bg-cms-primary-green text-white flex-shrink-0 w-[150px] lg:w-[400px]">
        <div className="px-4 lg:px-16 py-10 flex flex-col justify-around h-full">
          <h1 className="text-xl lg:text-3xl font-semibold">The Challenges</h1>
          <h1 className="text-xl lg:text-3xl font-semibold">Our Approach</h1>
        </div>
      </div>

      {/* Content Section */}
      <div className="flex-1 overflow-x-auto">
        <div className="w-full sm:w-10/12">
          {/* The Challenges List */}
          <ul className="flex">
            {theChallengesData.map((item, idx) => (
              <li
                key={idx}
                className={`w-[150px] sm:w-[200px] h-[235px] flex flex-col gap-3 items-center p-4 border ${
                  idx % 2 === 0 ? "bg-[#7253A3]" : "bg-cms-primary-green"
                }`}
                style={{
                  boxSizing: "border-box", // Include padding and border in width
                  flexShrink: 0, // Prevent shrinking in flex container
                }}
              >
                <Image
                  src={item.iconUrl}
                  width={50}
                  height={50}
                  alt={item.title}
                />
                <span className="text-sm sm:text-lg text-white text-center break-words">
                  {item.title}
                </span>
              </li>
            ))}
          </ul>

          {/* Our Approach List */}
          <ul className="flex">
            {ourApproachData.map((item, idx) => (
              <li
                key={idx}
                className={`w-[150px] sm:w-[200px] h-[235px] flex flex-col gap-3 items-center px-4 pb-4 border border-t-0 ${
                  idx % 2 === 0 ? "bg-[#7253A3]" : "bg-cms-primary-green"
                }`}
                style={{
                  boxSizing: "border-box", // Include padding and border in width
                  flexShrink: 0, // Prevent shrinking in flex container
                }}
              >
                <Image
                  src="/domainAreas/social-protection/triangle.svg"
                  width={32}
                  height={50}
                  alt={item.title}
                />
                <span className="text-sm sm:text-lg text-white text-center">
                  {item.title}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default TheChallengesNew
