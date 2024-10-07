import { missionData, valuesData } from "@/utils/data"
import Image from "next/image"
import React from "react"

const Values = () => {
  return (
    <div className="flex flex-col lg:flex-row items-center gap-5 mt-16 mb-16 px-5">
      <div className="relative w-full lg:w-1/2">
        <Image
          src="https://s3.ap-south-1.amazonaws.com/com.cg.ivista.mediafiles/cms-origin/cms-website/public/aboutUs/vision/valuesBanner.png"
          width={500}
          height={500}
          alt="Values Banner"
          className="w-full"
        />
        <div className="flex flex-col gap-5 absolute top-0 left-0 p-10 lg:p-16">
          <h1 className="text-white text-3xl lg:text-4xl">Values</h1>
          <div className="border border-white w-40 lg:w-60" />
        </div>
      </div>
      <ul className="grid grid-cols-2 gap-5 w-full lg:w-1/2">
        {valuesData.map((item) => (
          <li key={item.id} className="bg-cms-primary p-5 md:py-14">
            <div className="flex flex-col gap-3 items-center md:items-start">
              <Image
                src={item.iconUrl}
                width={50}
                height={50}
                alt={item.title}
                className="w-[55px] h-[60px]"
              />
              <p className="text-[#E5D9EA] text-lg text-center md:text-start">
                {item.desc}
              </p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Values
