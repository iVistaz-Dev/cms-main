import {
  ethosData,
  weWorkData,
  weWorkImpactData,
  weWorkInitiativesData,
} from "@/utils/data"
import Image from "next/image"
import React from "react"

const WeWork = () => {
  return (
    <div className="flex flex-col lg:flex-row lg:me-16">
      <div className="bg-cms-primary text-white p-6 lg:ps-16 lg:pe-10 lg:py-10 lg:w-[69%]">
        <h1 className="text-2xl lg:text-3xl font-semibold mb-4 lg:mb-6">
          How We Work
        </h1>
      </div>
      <div className="w-full lg:w-auto">
        <div className="border-b">
          <ul className="flex flex-col list-disc justify-center h-full ps-7 py-5 gap-3 sm:gap-5 px-4 sm:py-7 sm:ps-10 sm:pe-8 lg:ps-20 lg:pe-16">
            {weWorkData.map((item) => {
              return (
                <li key={item.id}>
                  <p>{item.desc}</p>
                </li>
              )
            })}
            <h3 className="text-lg lg:text-2xl text-[#1A1A1A] mt-4">
              To address the various levers of impact, we work with a number of{" "}
              <br className="hidden lg:block" /> organisations like:
            </h3>
            <ul className="flex flex-wrap gap-3 mt-4">
              {weWorkImpactData.map((item) => {
                return (
                  <li
                    key={item.id}
                    className="flex flex-col gap-3 w-full sm:w-[230px]"
                  >
                    <Image
                      src={item.imageUrl}
                      width={230}
                      height={140}
                      alt=""
                      className="w-full h-auto"
                    />
                    <p className="text-sm sm:text-lg text-[#646464]">
                      <span
                        className="font-semibold"
                        style={{ color: item.color }}
                      >
                        {item.title}
                      </span>{" "}
                      {item.desc}
                    </p>
                  </li>
                )
              })}
            </ul>
          </ul>
        </div>

        <div className="border-b">
          <div className="flex flex-col justify-center h-full pt-5 gap-3 sm:gap-5 sm:ps-10 sm:pe-8 lg:ps-20 lg:pe-16">
            <h3 className="text-lg lg:text-2xl text-[#1A1A1A] px-2 md:px-0">
              We implemented a number of important initiatives, including:
            </h3>
            <ul className="bg-cms-secondary-green flex flex-col gap-3 sm:gap-5 p-4 sm:p-5">
              {weWorkInitiativesData.map((item) => {
                return (
                  <li key={item.id}>
                    <div className="flex flex-col gap-3">
                      <Image
                        src={item.imageUrl}
                        width={140}
                        height={78}
                        alt=""
                      />
                      <p>{item.desc}</p>
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

export default WeWork
