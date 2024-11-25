import { ethosData, keyDomainData, valuesData } from "@/utils/data"
import { theChallengesData } from "@/utils/socialProtectiondata"
import Image from "next/image"
import React from "react"

const TheChallenges = () => {
  return (
    <div className="flex flex-col lg:flex-row md:me-16">
      <div className="bg-cms-primary-green text-white flex-shrink-0">
        <div className="w-full lg:w-[400px] px-16 py-10">
          <h1 className="text-3xl font-semibold mb-6">The Challenges</h1>
        </div>
      </div>
      <div className="flex-1">
        <div className="w-full sm:w-10/12">
          <ul className="flex">
            {theChallengesData.map((item, idx) => {
              return (
                <li
                  key={idx}
                  className={`w-[200px] h-[235px] flex flex-col gap-3 items-center p-4 border ${
                    idx % 2 === 0 ? "bg-[#7253A3]" : "bg-cms-primary-green"
                  }`}
                >
                  <Image
                    src={item.iconUrl}
                    width={50}
                    height={50}
                    alt={item.title}
                  />
                  <span className="text-lg text-white text-center">
                    {item.title}
                  </span>
                </li>
              )
            })}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default TheChallenges
