import { ethosData, keyDomainData, valuesData } from "@/utils/data"
import Image from "next/image"
import React from "react"

const WhySocialProtection = () => {
  return (
    <div className="flex flex-col lg:flex-row mt-10 md:me-16">
      <div className="bg-cms-primary text-white flex-shrink-0">
        <div className="w-full lg:w-[400px] px-16 py-10">
          <h1 className="text-3xl font-semibold mb-6">
            Why Social Protection?
          </h1>
        </div>
      </div>
      <div className="flex-1 border-y py-5">
        <div className="px-5 sm:px-20 py-5 w-full sm:w-10/12">
          <p className="text-[#404040]">
            Social protection acts as a vital safety net for millions across
            India, ensuring vulnerable communities have access to essential
            resources during economic, health, and environmental crises. In a
            nation of 1.4 billion people where 21.9% live below the poverty line
            and more than 90% of the workforce operates in the informal sector,
            social protection systems are critical for reducing inequality and
            driving inclusive growth.
          </p>
          <p className="py-5 text-[#404040]">
            According to the ILO’s World Social Protection Report (2020-2022),
            only 24.4% of India’s population is covered by at least one area of
            social protection. While the Social Security Code 2020 demonstrates
            India’s commitment to expanding this coverage, significant barriers
            remain, particularly with regard to awareness and accessibility.
          </p>
        </div>
      </div>
    </div>
  )
}

export default WhySocialProtection
