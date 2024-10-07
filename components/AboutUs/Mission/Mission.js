import { missionData } from "@/utils/data"
import Image from "next/image"
import React from "react"

const Mission = () => {
  return (
    <div className="flex flex-col lg:flex-row w-full">
      <div className="bg-[#7F3F98] w-full lg:w-1/2">
        <ul className="flex flex-col gap-5 py-10 lg:py-16 px-5 lg:px-16">
          {missionData.map((item) => (
            <li key={item.id}>
              <div className="flex gap-3">
                <div className="h-[76px] w-[76px] flex-shrink-0">
                  <Image
                    src={item.iconUrl}
                    height={76}
                    width={76}
                    alt={item.title}
                    className="w-[76px] h-[76px]"
                  />
                </div>
                <div>
                  <h2 className="text-xl lg:text-2xl font-semibold text-white">
                    {item.title}
                  </h2>
                  <p
                    className="text-white text-base"
                    dangerouslySetInnerHTML={{ __html: item.desc }}
                  ></p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
      <div className="w-full lg:w-1/2 relative lg:mt-0">
        <Image
          src="https://s3.ap-south-1.amazonaws.com/com.cg.ivista.mediafiles/cms-origin/cms-website/public/aboutUs/vision/missionBanner.png"
          width={683}
          height={500}
          alt="Mission Banner"
          className="w-full"
        />
        <div className="flex flex-col gap-5 absolute top-0 right-0 p-10 lg:p-16">
          <h1 className="text-white text-center lg:text-right text-3xl lg:text-4xl font-semibold">
            Mission
          </h1>
          <div className="border border-white w-40 lg:w-60 self-center lg:self-end" />
        </div>
      </div>
    </div>
  )
}

export default Mission
