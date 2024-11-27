import { OperatingModelData } from "@/utils/socialProtectiondata"
import Image from "next/image"
import React from "react"

const OperatingModel = () => {
  return (
    <div className="flex flex-col lg:flex-row md:me-16">
      {/* Left Section */}
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

      {/* Right Section */}
      <div className="flex-1 border-b py-5 flex items-center">
        <div className="p-5 sm:px-10 lg:px-20 w-full sm:w-11/12 mx-auto">
          <div className="flex flex-col gap-5">
            {/* Title */}
            <h3 className="text-2xl sm:text-3xl text-cms-primary text-center sm:text-left">
              Operating Model
            </h3>

            {/* List of Operating Models */}
            <ul className="flex flex-col gap-5">
              {OperatingModelData.map((item, idx) => (
                <li
                  key={idx}
                  className="flex flex-col sm:flex-row items-center sm:items-start gap-5 sm:gap-10"
                >
                  {/* Icon */}
                  <Image
                    src={item.iconUrl}
                    width={100}
                    height={100}
                    alt={item.heading}
                    className="w-[80px] sm:w-[100px] lg:w-[120px] h-auto"
                  />

                  {/* Content */}
                  <div>
                    <h3
                      className={`text-xl sm:text-2xl mb-2 sm:mb-3 ${
                        idx % 2 === 0
                          ? "text-cms-primary"
                          : "text-cms-primary-green"
                      }`}
                    >
                      {item.heading}
                    </h3>
                    <ul
                      className={`flex flex-col gap-3 list-disc px-4 sm:px-8 ${
                        idx % 2 === 0
                          ? "marker:text-cms-primary"
                          : "marker:text-cms-primary-green"
                      }`}
                    >
                      {item.descList.map((desc, idx) => (
                        <li key={idx} className="text-sm sm:text-base">
                          {desc}
                        </li>
                      ))}
                    </ul>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default OperatingModel
