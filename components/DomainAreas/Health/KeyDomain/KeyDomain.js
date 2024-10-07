import { ethosData, keyDomainData, valuesData } from "@/utils/data"
import Image from "next/image"
import React from "react"

const KeyDomain = () => {
  return (
    <div className="flex flex-col lg:flex-row mt-10 md:me-16">
      <div className="bg-cms-primary text-white flex-shrink-0">
        <div className="w-full lg:w-[400px] px-16 py-10">
          <h1 className="text-3xl font-semibold mb-6">
            Key Domains <br /> We Work In
          </h1>
        </div>
      </div>
      <div className="flex-1 border-y py-5">
        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-5 px-5 sm:px-20">
          {keyDomainData.map((item) => (
            <li key={item.id} className="w-full sm:w-[352px]">
              <div className="flex flex-col gap-2">
                <Image
                  src={item.imageUrl}
                  width={352}
                  height={160}
                  alt=""
                  className="w-full"
                />
                <h3 className="text-lg text-cms-primary font-semibold">
                  {item.title}
                </h3>
                <p className="text-[#404040]">{item.desc}</p>
              </div>
            </li>
          ))}
        </ul>
        <div className="px-5 sm:px-20 py-5 w-full sm:w-10/12">
          <p className="text-[#404040]">
            Other priority domains include Mental Health, Social Determinants of
            Health, Inclusive health systems for special populations, and
            Innovative Financing & Health Entrepreneurship.
          </p>
          <p className="py-5 text-[#404040]">
            In 2022-23 alone, Health Practice reached and enriched the health of
            26.44 million people and supported over 85+ partners.
          </p>
        </div>
        <div className="bg-cms-secondary px-5 sm:px-20 py-5">
          <h4 className="text-lg font-semibold mb-3 text-cms-primary">
            The Practice Works with Various Partner Types:
          </h4>
          <p className="text-[#1A1A1A]">
            Local to National Governments, Regional Government bodies, UN
            Agencies, Bilateral <br className="hidden md:block" />
            and Multilateral Agencies, Large Civil Society Networks representing
            the cause of <br className="hidden md:block" />
            vulnerable populations.
          </p>
        </div>
      </div>
    </div>
  )
}

export default KeyDomain
