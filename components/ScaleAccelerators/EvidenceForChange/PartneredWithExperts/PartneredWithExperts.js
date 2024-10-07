import { partneredWithExpertsData } from "@/utils/data"
import React from "react"

const PartneredWithExperts = () => {
  return (
    <div className="max-w-screen-xl mx-auto space-y-4 mb-10 px-2">
      <h2 className="text-2xl text-cms-primary">
        We have partnered with experts from
      </h2>
      <ul className="flex flex-wrap gap-3 justify-center md:justify-start">
        {partneredWithExpertsData.map((item) => {
          return (
            <li
              key={item.id}
              className="w-full sm:w-1/2 md:w-64 h-20 flex justify-center items-center bg-cms-primary text-white text-lg text-center px-2"
            >
              <p>{item.title}</p>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default PartneredWithExperts
