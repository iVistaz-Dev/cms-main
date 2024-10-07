import { teamData } from "@/utils/data"
import { linkedInIcon, twitter } from "@/utils/icon"
import Image from "next/image"
import Link from "next/link"
import React from "react"

const Team = () => {
  return (
    <>
      {/* <div className="flex flex-col gap-4 mb-5">
        <h1 className="text-[#171717] text-4xl">Team</h1>
        <p className="text-[#4E4E4E] text-lg">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the <br /> industry’s standard dummy
          text ever since the 1500s, when an unknown printer took
        </p>
      </div> */}

      <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mb-16 mt-7 px-5">
        {teamData.map((item) => (
          <li
            key={item.id}
            className="flex flex-col border-b-2 border-cms-primary"
          >
            <Image
              src={item.imageUrl}
              width={300}
              height={300}
              alt={item.name}
              className="w-full h-auto object-cover grayscale"
            />
            <div className="flex flex-col gap-4 h-full bg-white">
              <div className="bg-cms-primary-green py-4 text-white flex flex-col items-center">
                <h2 className=" text-center text-lg md:text-xl font-semibold">
                  {item.name}
                </h2>
                <p className="text-sm text-center">{item.desc}</p>
              </div>

              <div className="flex gap-3 mb-2">
                {item.imageUrl !== "/aboutUs/team/image12.png" ? (
                  <Link
                    href={item.inUrl}
                    target="_blank"
                    className="p-1 bg-cms-secondary-gray"
                  >
                    <span className="text-cms-primary text-2xl">
                      {linkedInIcon}
                    </span>
                  </Link>
                ) : (
                  ""
                )}
                {/* <Link
                  href={item.xurl}
                  target="_blank"
                  className="p-2 bg-cms-secondary-gray rounded-full"
                >
                  <span className="text-cms-primary text-xl">{twitter}</span>
                </Link> */}
              </div>
            </div>
          </li>
        ))}
      </ul>
    </>
  )
}

export default Team
