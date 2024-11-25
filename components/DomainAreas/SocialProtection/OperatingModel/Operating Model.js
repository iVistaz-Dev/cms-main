import { OperatingModelData } from "@/utils/socialProtectiondata"
import Image from "next/image"
import React from "react"

const OperatingModel = () => {
  return (
    <div className="flex flex-col lg:flex-row md:me-16">
      <div className="bg-cms-primary-green text-white flex-shrink-0">
        <div className="w-full lg:w-[400px]">
          <Image
            src="/domainAreas/social-protection/operating-model.png"
            height={900}
            width={400}
            alt=""
            className="w-full h-auto lg:w-[400px]"
          />
        </div>
      </div>
      <div className="flex-1 border-b py-5">
        <div className="px-5 sm:px-20 py-5 w-full sm:w-10/12">
          <div className="flex flex-col gap-5">
            <h3 className="text-3xl text-cms-primary">Operating Model</h3>
            <ul className="flex flex-col gap-5">
              {OperatingModelData.map((item, idx) => {
                return (
                  <li key={idx} className="flex items-center gap-10">
                    <Image
                      src={item.iconUrl}
                      width={120}
                      height={120}
                      alt={item.heading}
                    />
                    <div>
                      <h3
                        className={`text-2xl mb-3 ${
                          idx % 2 === 0
                            ? "text-cms-primary"
                            : "text-cms-primary-green"
                        }`}
                      >
                        {item.heading}
                      </h3>
                      <ul
                        className={`flex flex-col gap-3 list-disc px-8 ${
                          idx % 2 === 0
                            ? "marker:text-cms-primary"
                            : "marker:text-cms-primary-green"
                        }`}
                      >
                        {item.descList.map((desc, idx) => {
                          return <li key={idx}>{desc}</li>
                        })}
                      </ul>
                    </div>
                  </li>
                )
              })}
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default OperatingModel
