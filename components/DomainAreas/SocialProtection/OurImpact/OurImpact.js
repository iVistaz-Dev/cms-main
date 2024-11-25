import { ourImpactData } from "@/utils/socialProtectiondata"
import Image from "next/image"
import React from "react"

const OurImpact = () => {
  return (
    <div className="bg-cms-primary p-5 flex flex-col items-center justify-center gap-7">
      <h3 className="text-white text-3xl text-center">Our Impact</h3>
      <div className="">
        <ul className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {ourImpactData.map((item, idx) => {
            return (
              <li key={idx}>
                <div className="flex flex-col items-center w-52">
                  <Image
                    src={item.iconUrl}
                    width={120}
                    height={120}
                    className=""
                    alt={item.title}
                  />
                  <span
                    className="text-white text-xl text-center"
                    dangerouslySetInnerHTML={{ __html: item.title }}
                  ></span>
                </div>
              </li>
            )
          })}
        </ul>
      </div>
    </div>
  )
}

export default OurImpact
