import { ethosData, ourAppData } from "@/utils/data"
import Image from "next/image"
import React from "react"

const OurApproaches = () => {
  return (
    <div className="flex flex-col lg:flex-row lg:me-16">
      <div className="w-full lg:w-[488px]">
        <Image
          src="https://s3.ap-south-1.amazonaws.com/com.cg.ivista.mediafiles/cms-origin/cms-website/public/domainAreas/livelihood/ourApp.png"
          height={780}
          width={400}
          alt=""
          className="w-full h-auto lg:w-[400px] lg:h-[780px]"
        />
      </div>
      <div className="border-b lg:border-b-0">
        <ul className="flex flex-col justify-center h-full py-5 gap-5 px-4 sm:px-10 lg:ps-20 lg:pe-16">
          <h2 className="text-2xl lg:text-3xl text-[#1A1A1A] font-semibold">
            Our Approaches
          </h2>
          <p className="text-lg lg:text-2xl text-[#1A1A1A]">
            We ensure that our beliefs are turned into action by employing
            impactful <br className="hidden lg:block" />
            approaches like:
          </p>
          {ourAppData.map((item) => {
            return (
              <li key={item.id}>
                <div className="flex gap-3 items-center">
                  <Image
                    src={item.iconUrl}
                    width={34}
                    height={34}
                    alt=""
                    className="w-[34px] h-[34px]"
                  />
                  <p className="w-full lg:w-3/4">{item.desc}</p>
                </div>
              </li>
            )
          })}
          <div className="bg-cms-primary-green py-5 px-4 sm:py-10 sm:px-16">
            <h3 className="text-base lg:text-lg text-white">
              We use multiple levers to achieve our vision, such as:
            </h3>
            <ul className="flex flex-col px-5 list-disc text-base lg:text-lg text-white">
              <li>Building programmatic models and approaches</li>
              <li>Engaging and shaping investments and policies</li>
              <li>
                Providing technical and strategic support to organisations
              </li>
              <li>
                Leveraging technology-enabled platforms and directly
                implementing programmes at scale
              </li>
            </ul>
          </div>
        </ul>
      </div>
    </div>
  )
}

export default OurApproaches
