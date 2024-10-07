import { keyInitiatives02Data } from "@/utils/data"
import Image from "next/image"
import React from "react"

const KeyInitiatives02 = () => {
  return (
    <div className="max-w-screen-xl mx-auto px-5">
      <ul className="flex flex-col gap-5 py-10">
        {keyInitiatives02Data.map((item) => {
          return (
            <li
              key={item.id}
              className="border-b border-dashed border-cms-primary-green py-5"
            >
              <div className="flex flex-col md:flex-row gap-3 md:items-center">
                <Image
                  src={item.logoUrl}
                  width={100}
                  height={100}
                  alt=""
                  className="w-[100px] h-[100px]"
                />
                <div className="flex gap-1 md:gap-2">
                  <p className="text-lg md:text-xl text-[#1A1A1A]">{item.no}</p>
                  <p className="text-lg md:text-xl text-[#1A1A1A]">
                    {item.title}
                  </p>
                </div>
              </div>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default KeyInitiatives02
