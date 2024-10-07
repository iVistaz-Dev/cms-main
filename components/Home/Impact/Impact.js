import { impactData } from "@/utils/data"
import React from "react"

const Impact = () => {
  return (
    <div className="bg-cms-primary py-10 flex flex-col items-center justify-center gap-4 -z-20">
      <h3 className="text-3xl sm:text-4xl md:text-5xl text-white">Impact</h3>
      <div className="border-b border-cms-primary-green w-8" />

      <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5 overflow-x-auto">
        {impactData.map((item) => {
          return (
            <li
              key={item.id}
              className="inline-block w-full md:w-[225px] flex-shrink-0 relative"
            >
              <div
                className="w-full md:w-[225px] h-[225px] lg:h-[300px] bg-cover flex flex-col justify-center p-3"
                style={{ backgroundImage: `url(${item.imageUrl})` }}
              >
                <div className="bg-black/40 inset-0 absolute"></div>
                <div className="relative space-y-2 text-white text-lg">
                  {/* <p className="">{item.title}</p> */}
                  <h2 className="">{item.title}</h2>
                  <h2 className="text-2xl sm:text-3xl md:text-4xl">
                    {item.count}
                  </h2>
                  <p>{item.desc}</p>
                </div>
              </div>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default Impact
