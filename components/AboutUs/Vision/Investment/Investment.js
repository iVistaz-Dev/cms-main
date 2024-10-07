import { investmentData } from "@/utils/data"
import Image from "next/image"
import React from "react"
import VideoPlayer from "./video"

const Investment = () => {
  return (
    <>
      <div className="my-10 flex flex-col gap-10 px-5">
        <h3 className="text-cms-primary text-3xl text-center sm:text-left">
          An Investment Reimagined Approach
        </h3>
        <p className="text-[#4E4E4E] text-2xl text-center sm:text-left">
          We like to see ourselves as solution-focused activists—‘Solvists’.
          Working closely with partners, we incubate and invest with a rare mix
          of resources, deep expertise, and on-ground experience, shaping social
          equity while working across <br className="hidden md:block" /> SDG
          goals. We:
        </p>
        <ul className="flex flex-wrap gap-5 justify-center">
          {investmentData.map((item) => (
            <li
              key={item.id}
              className="bg-cms-primary-green p-5 w-full h-[320px] md:w-[400px] md:h-[400px]"
            >
              <div className="flex flex-col items-center gap-4 text-white pt-7 pb-24 px-5 h-full">
                <Image
                  src={item.iconUrl}
                  width={65}
                  height={65}
                  alt=""
                  className="w-[65px] h-[65px]"
                />
                <h4
                  className="text-2xl text-center"
                  dangerouslySetInnerHTML={{ __html: item.title }}
                />
                <div className="border border-cms-primary w-16" />
                <p
                  className="text-lg text-center mt-auto"
                  dangerouslySetInnerHTML={{ __html: item.desc }}
                ></p>
              </div>
            </li>
          ))}
        </ul>
      </div>

      <div className="flex flex-col gap-10 px-5">
        <p className="text-center text-2xl text-[#1C1C1C]">
          The ‘Unlocking Value to Invest in Impact’ framework brings alive{" "}
          <br /> our living intelligence to enhance social equity.
        </p>
        <div
          style={{
            position: "relative",
            paddingBottom: "56.25%",
            height: "0",
            overflow: "hidden",
            width: "100%",
          }}
        >
          {/* <iframe
            src="https://s3.ap-south-1.amazonaws.com/com.cg.ivista.mediafiles/cms-origin/NewCMSVideo.mp4"
            style={{
              position: "absolute",
              top: "0",
              left: "0",
              width: "100%",
              height: "100%",
              border: "none",
            }}
            allowfullscreen
          ></iframe> */}
          <VideoPlayer />
        </div>
      </div>
    </>
  )
}

export default Investment
