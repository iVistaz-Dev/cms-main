import { successStoriesData } from "@/utils/socialProtectiondata"
import Image from "next/image"
import React from "react"

const SuccessStories = () => {
  return (
    <div className="flex flex-col lg:flex-row md:me-16">
      <div className="bg-cms-primary text-white flex-shrink-0">
        <div className="w-full lg:w-[400px] px-16 py-10">
          <h1 className="text-3xl font-semibold mb-6">Success Stories</h1>
        </div>
      </div>
      <div className="flex-1 border-b py-5">
        <div className="px-5 sm:px-20 py-5 w-full">
          <ul className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 gap-6">
            {successStoriesData.map((item, idx) => {
              return (
                <li
                  key={idx}
                  className="w-[413px] h-[413px] px-5 py-7 flex flex-col gap-5 bg-[#EBE1EF]"
                >
                  <p className="text-[#404040] text-lg">{item.desc}</p>
                  <div className="flex items-center gap-3">
                    <Image
                      src={item.imageUrl}
                      width={97}
                      height={97}
                      alt={`Success Stories ${idx + 1}`}
                    />
                    <span className="text-xl text-cms-primary font-semibold">
                      {item.title}
                    </span>
                  </div>
                </li>
              )
            })}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default SuccessStories
