import { relatedResourcesData } from "@/utils/data"
import { leftArrow, rightArrow } from "@/utils/icon"
import Image from "next/image"
import React from "react"

const RelatedResources = () => {
  return (
    <div className="bg-[#00AE8E]">
      <div className="max-w-screen-xl mx-auto py-10 px-4">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <h3 className="text-white text-2xl md:text-3xl font-semibold mb-4 md:mb-0">
            Related Resources
          </h3>
          <div className="flex gap-3 text-lg md:text-xl text-white">
            <span>{leftArrow}</span>
            <span>{rightArrow}</span>
          </div>
        </div>

        <ul className="flex flex-wrap gap-5 mt-10">
          {relatedResourcesData.map((item) => {
            return (
              <li key={item.id} className="w-full sm:w-[352px] flex flex-col">
                <div className="flex flex-col gap-3 text-white text-base sm:text-lg bg-[#004B49] md:bg-transparent p-4 rounded flex-grow">
                  <Image
                    src={item.imageUrl}
                    width={352}
                    height={200}
                    alt=""
                    className="w-full h-auto rounded"
                  />
                  <p>{item.tag}</p>
                  <hr className="border-white" />
                  <p className="font-semibold">{item.title}</p>
                  <p className="flex-grow">{item.desc}</p>
                  <div className="mt-auto">
                    <button className="px-4 py-2 bg-transparent border border-white rounded text-sm sm:text-base w-full">
                      Know more
                    </button>
                  </div>
                </div>
              </li>
            )
          })}
        </ul>
      </div>
    </div>
  )
}

export default RelatedResources
