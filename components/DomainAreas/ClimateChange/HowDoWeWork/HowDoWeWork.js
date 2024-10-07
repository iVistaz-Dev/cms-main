import { ethosData, howDoWeWorkData } from "@/utils/data"
import Image from "next/image"
import React from "react"

const HowDoWeWork = () => {
  return (
    <div className="flex flex-col lg:flex-row md:me-16">
      <div className="bg-cms-primary text-white w-full lg:w-auto">
        <div className="w-full lg:w-[400px]">
          <h1 className="text-3xl font-semibold mb-6 ps-4 lg:ps-16 pe-4 lg:pe-10 py-10">
            How We Work
          </h1>
        </div>
      </div>
      <div className="border-b bg-cms-secondary w-full">
        <ul className="flex flex-col justify-center h-full py-5 gap-5 ps-4 lg:ps-20 pe-4 lg:pe-16">
          {howDoWeWorkData.map((item) => {
            return (
              <li key={item.id}>
                <div className="flex flex-col lg:flex-row gap-3">
                  <p className="text-cms-primary text-lg font-semibold">
                    {item.no}
                  </p>
                  <h3 className="text-lg text-[#404040] pb-3 border-b border-dashed border-cms-primary-green">
                    <span className="text-cms-primary font-semibold">
                      {item.title}
                    </span>{" "}
                    {item.desc}
                  </h3>
                </div>
              </li>
            )
          })}
        </ul>
      </div>
    </div>
  )
}

export default HowDoWeWork
