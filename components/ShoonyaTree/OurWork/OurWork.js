import { ourCommitmentData, ourWorkData } from "@/utils/shoonyaTreeData"
import Image from "next/image"
import React from "react"
import GlimpsesNew from "./Glimpses/GlimpsesNew"
import Glimpses from "./Glimpses/Glimpses"

const OurWork = () => {
  return (
    <div className="h-auto px-5 py-24 bg-[url('https://s3.ap-south-1.amazonaws.com/com.cg.ivista.mediafiles/shoonya-tree-landing-page/banner09.png')] bg-cover md:mt-10">
      <div className="flex flex-col items-center h-full gap-5 max-w-screen-xl mx-auto">
        <h1 className="text-2xl md:text-4xl text-[#486601] text-center font-semibold">
          Our Work
        </h1>

        <div className="flex items-center justify-center">
          <ul className="flex flex-col md:flex-row gap-3 md:gap-0 w-full p-4">
            {ourWorkData.map((item, index) => {
              return (
                <li key={index}>
                  <div
                    className={`border border-[#486601] p-4 flex flex-col w-full h-full ${
                      index < ourWorkData.length - 1 ? "md:border-r-0" : ""
                    }`}
                  >
                    <h3 className="text-[#020202] text-xl font-semibold mb-3">
                      {item.title}
                    </h3>

                    <ul className="flex flex-col md:flex-row items-center gap-3 my-auto">
                      {item.content.map((description, idx) => {
                        return (
                          <li
                            key={idx}
                            className="flex items-center gap-4 w-full mx-3"
                          >
                            <Image
                              src={description.iconUrl}
                              width={description.width}
                              height={description.height}
                              alt={description.desc}
                              className="flex-shrink-0"
                            />
                            <p
                              className="text-[#020202] text-lg leading-relaxed"
                              dangerouslySetInnerHTML={{
                                __html: description.desc,
                              }}
                            ></p>
                          </li>
                        )
                      })}
                    </ul>

                    {/* <p className="text-[#020202] mx-auto mt-2">{item.desc}</p> */}
                  </div>
                </li>
              )
            })}
          </ul>
        </div>

        <h1 className="text-2xl md:text-4xl text-[#486601] text-center font-semibold">
          Our Commitment
        </h1>

        <div className="flex justify-center mt-3">
          <ul className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {ourCommitmentData.map((item, idx) => {
              return (
                <li key={idx}>
                  <div
                    className="rounded-full w-52 h-52 p-5 flex flex-col items-center justify-center"
                    style={{ backgroundColor: item.bgColor }}
                  >
                    <Image
                      src={item.iconUrl}
                      width={60}
                      height={60}
                      alt={item.title}
                    />
                    <span className="text-white text-center mt-2 h-6 flex items-center justify-center">
                      {item.title}
                    </span>
                  </div>
                </li>
              )
            })}
          </ul>
        </div>

        <div className="border-b border-dashed border-shoonya-green w-10/12 mt-10" />
      </div>
      <Glimpses />
    </div>
  )
}

export default OurWork
