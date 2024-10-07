"use client"
import React from "react"
import Carousel from "react-multi-carousel"
import "react-multi-carousel/lib/styles.css"
import Link from "next/link"
import Image from "next/image"
import { focusAreaData } from "../../../utils/data"

function Insights() {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 3,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  }

  return (
    <>
      <div className="bg-[url('https://s3.ap-south-1.amazonaws.com/com.cg.ivista.mediafiles/cms-origin/cms-website/public/home/focusArea/focusAreaBg.png')] bg-cover bg-center flex flex-col justify-center items-center w-full h-auto md:h-[800px] py-10">
        <div className="max-w-screen-xl mx-auto flex flex-col items-center gap-4">
          <h3 className="text-3xl sm:text-4xl md:text-5xl text-cms-primary">
            Domain Areas
          </h3>
          <div className="border-b border-cms-primary-green w-8" />
          <p className="text-center text-base sm:text-lg text-[#1A1A1A] px-4 sm:px-0 mb-10">
            We are dedicated to making a meaningful impact on the world by
            applying our expertise across <br className="hidden sm:block" />{" "}
            critical domains: Health, Wellbeing for the Workforce, Climate,
            Livelihood, and ESG.
          </p>
        </div>
        <div className="w-[90%] mx-auto pb-20">
          <Carousel
            responsive={responsive}
            showDots={false}
            autoPlay={true}
            autoPlaySpeed={2000}
            infinite={true}
            //   customTransition="all .5"
            //   dotListClass="border-red-500 border"
            removeArrowOnDeviceType={["tablet", "mobile", "desktop"]}
            className=""
          >
            {focusAreaData.map((item, index) => (
              <li key={item.id} className="flex flex-col items-center h-full">
                <div className="flex flex-col items-center gap-3 flex-grow w-full">
                  <div className="relative group">
                    <Image
                      src={item.imageUrl}
                      width={160}
                      height={160}
                      alt={item.title}
                      className="flex-shrink-0"
                    />
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <Image
                        src={item.hoverUrl}
                        width={160}
                        height={160}
                        alt={item.title}
                        className="flex-shrink-0"
                      />
                    </div>
                  </div>

                  <div className="flex flex-col gap-3 items-center flex-grow w-full">
                    <h5 className="text-lg sm:text-xl text-cms-primary font-semibold text-center">
                      {item.title}
                    </h5>
                    <p className="text-base text-[#171717] text-center w-4/6">
                      {item.desc}
                    </p>
                  </div>
                </div>
                <Link href={item.link}>
                  <button className="px-3 py-2 bg-cms-primary text-white mt-3">
                    Know more
                  </button>
                </Link>
              </li>
            ))}
          </Carousel>
        </div>
      </div>
    </>
  )
}

export default Insights
