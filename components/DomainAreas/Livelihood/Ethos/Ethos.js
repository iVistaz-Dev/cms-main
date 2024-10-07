import { ethosData } from "@/utils/data"
import Image from "next/image"
import React from "react"

const Ethos = () => {
  return (
    <div className="flex flex-col lg:flex-row mt-5 md:mt-10 lg:me-16">
      <div className="bg-cms-primary text-white p-6 lg:ps-16 lg:pe-10 lg:py-10 lg:w-[707px]">
        <h1 className="text-2xl lg:text-3xl font-semibold mb-4 lg:mb-6">
          Our Ethos
        </h1>
        <p className="text-base lg:text-lg">
          Strengthening small producers and their livelihoods at a national
          scale lies at the heart of our mission, and our work is built on a set
          of core beliefs and learnings.
        </p>
      </div>
      <div className="border-y md:mt-6 lg:mt-0 lg:border-y-0">
        <ul className="flex flex-col justify-center h-full py-5 gap-5 ps-6 pe-6 lg:ps-20 lg:pe-16">
          {ethosData.map((item) => (
            <li key={item.id}>
              <div className="flex gap-3 items-center">
                <Image src={item.iconUrl} width={76} height={76} alt="" />
                <p className="text-sm lg:text-base">{item.desc}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default Ethos
