import { keyInitiativesData } from "@/utils/data"
import Image from "next/image"
import React from "react"
import VideoPlayer from "./video"

const KeyInitiatives = () => {
  return (
    <div className="flex flex-col lg:flex-row md:me-16">
      <div className="bg-cms-primary-green text-white flex-shrink-0">
        <div className="w-full lg:w-[400px] px-16 py-10">
          <h1 className="text-3xl font-semibold mb-6">Key Initiatives</h1>
        </div>
      </div>
      <div className="flex-1 border-b">
        <ul className="flex flex-col gap-5 py-5 px-5 lg:px-16 bg-cms-secondary-green">
          {keyInitiativesData.map((item) => {
            const keyInitiativesLength = keyInitiativesData.length
            return (
              <li
                key={item.id}
                className={`pb-3 ${
                  item.id !== keyInitiativesLength
                    ? "border-b border-dashed border-cms-primary-green"
                    : ""
                } flex flex-col gap-3`}
              >
                <div className="flex flex-col lg:flex-row gap-3 lg:gap-5 text-[#404040] text-lg">
                  <p className="lg:w-1/12">{item.no}</p>
                  <div className="flex-1 space-y-5">
                    <p className="">{item.title}</p>
                    {item.imageUrl !== "" ? (
                      <Image
                        src={item.imageUrl}
                        width={720}
                        height={400}
                        alt=""
                        className="w-full h-auto rounded"
                      />
                    ) : (
                      ""
                    )}

                    {item.videoUrl !== "" ? (
                      // <iframe
                      //   src="https://s3.ap-south-1.amazonaws.com/com.cg.ivista.mediafiles/cms-origin/health_video.mp4"
                      //   width="100%"
                      //   height="500px"
                      //   frameborder="0"
                      //   allowfullscreen
                      // ></iframe>
                      <VideoPlayer />
                    ) : (
                      ""
                    )}
                    <p>{item.desc}</p>
                  </div>
                </div>
              </li>
            )
          })}
        </ul>
      </div>
    </div>
  )
}

export default KeyInitiatives
