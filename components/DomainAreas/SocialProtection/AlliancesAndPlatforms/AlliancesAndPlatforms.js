import { alliancesAndPlatformsData, keyInitiativesData } from "@/utils/data"
import Image from "next/image"
import React from "react"

const AlliancesAndPlatforms = () => {
  return (
    <div className="flex flex-col lg:flex-row md:me-16 me-0">
      <div className="bg-cms-primary text-white w-full lg:w-auto">
        <div className="w-full lg:w-[400px]">
          <h1 className="text-3xl font-semibold mb-6 ps-4 lg:ps-16 pe-4 lg:pe-10 py-10">
            Alliances and <br className="hidden md:block" /> Platforms
          </h1>
        </div>
      </div>
      <div className="w-full">
        <div className="flex flex-col items-start justify-center h-full py-5 gap-7 ps-4 lg:ps-20 pe-4 lg:pe-16">
          <h3 className="text-2xl text-[#1A1A1A]">
            Creating impact, orchestrating results, and shaping the sector of
            primary health care, environmental health, and climate change
            through our platforms and multi-partner alliances
          </h3>

          <ul className="flex flex-wrap gap-5 w-full lg:w-10/12 lg:justify-start">
            <li>
              <Image
                src="https://s3.ap-south-1.amazonaws.com/com.cg.ivista.mediafiles/cms-origin/cms-website/public/domainAreas/health/alliances/image01.png"
                width={180}
                height={90}
                alt=""
              />
            </li>
            <li>
              <Image
                src="https://s3.ap-south-1.amazonaws.com/com.cg.ivista.mediafiles/cms-origin/cms-website/public/domainAreas/health/alliances/image02.png"
                width={180}
                height={90}
                alt=""
              />
            </li>
            <li>
              <Image
                src="https://s3.ap-south-1.amazonaws.com/com.cg.ivista.mediafiles/cms-origin/cms-website/public/domainAreas/health/alliances/image03.png"
                width={180}
                height={90}
                alt=""
              />
            </li>
            <li>
              <Image
                src="https://s3.ap-south-1.amazonaws.com/com.cg.ivista.mediafiles/cms-origin/cms-website/public/domainAreas/health/alliances/image04.png"
                width={180}
                height={90}
                alt=""
              />
            </li>
            <li>
              <Image
                src="https://s3.ap-south-1.amazonaws.com/com.cg.ivista.mediafiles/cms-origin/cms-website/public/domainAreas/health/alliances/image05.png"
                width={180}
                height={90}
                alt=""
              />
            </li>
          </ul>

          <div className="space-y-3 w-full">
            <p className="text-lg text-[#404040]">
              The practice area has representation under some of the most
              prestigious boards and panels:
            </p>

            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 w-full lg:w-10/12">
              {alliancesAndPlatformsData.map((item) => {
                return (
                  <li
                    key={item.id}
                    className="bg-cms-secondary p-3 w-full sm:w-[352px]"
                  >
                    <p className="text-lg text-[#1A1A1A]">{item.title}</p>
                  </li>
                )
              })}
            </ul>
          </div>

          <p className="text-lg text-[#404040]">
            PIVOTING TOWARDS CLIMATE-RESPONSIVE HEALTHY DAYS
          </p>

          <div>
            <p className="text-cms-primary text-lg font-semibold">
              #100MillionHealthyDays
            </p>
            <p className="text-lg text-[#404040]">
              Building stronger evidence on measuring healthy days.
            </p>
          </div>

          <button className="px-8 py-4 bg-cms-primary text-white">
            contactus@catalysts.org
          </button>
        </div>
      </div>
    </div>
  )
}

export default AlliancesAndPlatforms
