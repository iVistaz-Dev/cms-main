import { partnersData } from "@/utils/data"
import Image from "next/image"
import React from "react"

const Partners = () => {
  return (
    <>
      {/* <div className="flex flex-col gap-4 max-w-screen-xl mx-auto">
        <h1 className="text-[#171717] text-4xl">Partners</h1>
        <p className="text-[#4E4E4E] text-lg">
          Over the last two decades, we have worked with a range of
          stakeholders, like CSOs, banks, corporate foundations, academic <br />{' '}
          institutions, funding agencies, community organisations, multilateral
          and bilateral agencies, networks, governments, and nonprofits.
        </p>
        <hr className="border-cms-secondary-gray mt-5" />
      </div> */}

      <div className="flex flex-col lg:flex-row mb-10">
        <ul className="flex flex-col w-full lg:w-1/4 bg-cms-primary ps-5 sm:ps-10 pe-5">
          {partnersData.map((item) => {
            const partnersLength = partnersData.length
            return (
              <li
                key={item.id}
                className={`${
                  partnersLength !== item.id
                    ? "border-b-2 border-cms-secondary-gray"
                    : ""
                } text-lg sm:text-2xl text-white h-28 sm:h-52 flex items-center`}
              >
                {item.organisation}
              </li>
            )
          })}
        </ul>
        <ul className="flex flex-col w-full lg:w-4/6 px-5 mt-5 lg:mt-0">
          {partnersData.map((item) => {
            const partnersLength = partnersData.length
            return (
              <li
                key={item.id}
                className={`${
                  partnersLength !== item.id
                    ? "border-b-2 border-cms-secondary-gray"
                    : ""
                } flex items-center h-28 sm:h-52`}
              >
                <ul className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-3 sm:gap-5">
                  {item.partners.map((logo, index) => {
                    return (
                      <li key={index} className="">
                        <Image src={logo} width={115} height={60} alt="" />
                      </li>
                    )
                  })}
                </ul>
              </li>
            )
          })}
        </ul>
      </div>
    </>
  )
}

export default Partners
