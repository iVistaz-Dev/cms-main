import { rootedInActionData } from "@/utils/shoonyaTreeData"
import Image from "next/image"
import React from "react"
import Carousel from "react-multi-carousel"
import "react-multi-carousel/lib/styles.css"

const CustomDot = ({ onClick, active }) => {
  return (
    <button
      onClick={onClick}
      className={`w-3 h-3 rounded-full mx-1 ${
        active ? "bg-[#00AC8D]" : "bg-[#A1E1D4]"
      }`}
      style={{
        border: "none",
        cursor: "pointer",
      }}
    ></button>
  )
}

const GlimpsesNew = () => {
  // Responsive breakpoints for React Multi Carousel
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 3, // Slides to scroll at once
    },
    tablet: {
      breakpoint: { max: 1024, min: 640 },
      items: 2,
      slidesToSlide: 1,
    },
    mobile: {
      breakpoint: { max: 640, min: 0 },
      items: 1,
      slidesToSlide: 1,
    },
  }

  return (
    <div className="h-auto px-5 pt-5 md:pt-10 pb-16">
      <div className="flex flex-col items-center h-full gap-5 max-w-screen-lg mx-auto overflow-hidden">
        <h1 className="text-2xl md:text-4xl text-[#486601] text-center font-semibold">
          Rooted in Action: Glimpses from the Ground
        </h1>
        <div className="mt-7 w-full">
          <Carousel
            responsive={responsive}
            infinite={true}
            autoPlay={true}
            showDots={true}
            customDot={<CustomDot />}
            arrows={true}
            containerClass="carousel-container"
          >
            {rootedInActionData.map((item, index) => (
              <div
                key={index}
                className="px-2 flex justify-center items-center"
              >
                <Image
                  src={item.imageUrl}
                  width={368}
                  height={280}
                  alt="Rooted in Action"
                  className="max-w-full"
                />
              </div>
            ))}
          </Carousel>
        </div>
      </div>
    </div>
  )
}

export default GlimpsesNew
