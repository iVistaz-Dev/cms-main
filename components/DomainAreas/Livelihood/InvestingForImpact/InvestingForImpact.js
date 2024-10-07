import { ethosData } from "@/utils/data"
import Image from "next/image"
import React from "react"
import Inclusive from "./Inclusive/Inclusive"

const InvestingForImpact = () => {
  return (
    <div className="flex flex-col lg:flex-row lg:me-16">
      <div className="bg-cms-primary text-white w-full lg:w-auto">
        <div className="w-full lg:w-[400px] px-4 lg:px-16 py-6 lg:py-10">
          <h1 className="text-2xl lg:text-3xl font-semibold mb-4 lg:mb-6">
            Investing <br className="hidden md:block" /> for Impact
          </h1>
        </div>
      </div>
      <div className="border-t lg:border-t-0 lg:border-l">
        <div className="flex flex-col justify-center h-full py-4 lg:py-5 gap-4 lg:gap-5 px-4 lg:px-20">
          <h3 className="text-lg lg:text-2xl text-[#1A1A1A]">
            We want to achieve impact at scale by co-investing with change
            agents to shape solutions and investments. Some of the work we have
            implemented in this regard is outlined below:
          </h3>
          <Inclusive />
        </div>
      </div>
    </div>
  )
}

export default InvestingForImpact
