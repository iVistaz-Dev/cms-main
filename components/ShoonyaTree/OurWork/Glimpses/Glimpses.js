"use client"

import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import { rootedInActionData } from "@/utils/shoonyaTreeData"
import Image from "next/image"

import { FaArrowLeft, FaArrowRight } from "react-icons/fa" // Example icons

// Custom Previous Arrow
// const CustomPrevArrow = ({ onClick }) => {
//   return (
//     <button
//       className="absolute left-2 top-1/2 transform -translate-y-1/2 z-10"
//       onClick={onClick}
//     >
//       <FaArrowLeft size={24} className="text-[#486601]" />
//     </button>
//   )
// }

// // Custom Next Arrow
// const CustomNextArrow = ({ onClick }) => {
//   return (
//     <button
//       className="absolute right-2 top-1/2 transform -translate-y-1/2 z-10"
//       onClick={onClick}
//     >
//       <FaArrowRight size={24} className="text-[#486601]" />
//     </button>
//   )
// }

const Glimpses = () => {
  // Slick slider settings
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    autoplay: true,
    arrows: false, // Disable default arrows
    //prevArrow: <CustomPrevArrow />,
    //nextArrow: <CustomNextArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  }

  return (
    <div className="h-auto px-5 pt-5 md:pt-10 pb-16">
      <div className="flex flex-col items-center h-full gap-5 max-w-screen-lg mx-auto">
        <div className="flex flex-col items-center gap-4">
          <h1 className="text-2xl md:text-4xl text-[#486601] text-center font-semibold">
            Rooted in Action: Glimpses from the Ground
          </h1>
        </div>

        <div className="mt-7 w-full">
          <Slider {...settings}>
            {rootedInActionData.map((item, index) => {
              return (
                <div key={index} className="px-2">
                  <Image
                    src={item.imageUrl}
                    width={368}
                    height={280}
                    alt="Rooted in Action"
                    className=""
                  />
                </div>
              )
            })}
          </Slider>
        </div>
      </div>
    </div>
  )
}

export default Glimpses
