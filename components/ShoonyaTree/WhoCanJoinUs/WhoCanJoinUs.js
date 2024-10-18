"use client"

import { IoIosArrowRoundBack, IoIosArrowRoundForward } from "react-icons/io"
import Image from "next/image"
import React from "react"
import Slider from "react-slick"
import { whoCanJoinUsData } from "@/utils/shoonyaTreeData"

const WhoCanJoinUs = ({ scrollToRef }) => {
  const sliderRef = React.useRef(null)
  const [isReadyToScroll, setIsReadyToScroll] = React.useState(false)

  React.useEffect(() => {
    // Ensure the ref is set before allowing scroll
    if (scrollToRef?.current) {
      setIsReadyToScroll(true)
    }
  }, [scrollToRef])

  const handleScroll = () => {
    if (isReadyToScroll) {
      scrollToRef.current.scrollIntoView({ behavior: "smooth" })
    }
  }

  // Slick Slider settings
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3, // Default: show 3 items
    slidesToScroll: 1,
    centerMode: false, // Not centered by default
    arrows: false,
    autoplay: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2, // On tablet, show 2 items
          centerMode: false,
        },
      },
      {
        breakpoint: 640, // Mobile view settings
        settings: {
          slidesToShow: 1, // Show only one item
          centerMode: true, // Center the item
          centerPadding: "0px", // No padding to ensure full visibility of one item
        },
      },
    ],
  }

  return (
    <div className="h-auto px-5 py-24 bg-[url('/banner03.png')] bg-cover">
      <div className="flex flex-col items-center h-full gap-5 max-w-screen-xl mx-auto">
        <div className="flex flex-col items-center gap-4">
          <h1 className="text-2xl md:text-4xl text-[#486601] text-center font-semibold">
            Who Can Join Us?
          </h1>
          <p className="text-lg md:text-xl text-shoonya-black italic text-center">
            We invite collaborations across all sectors to plant the roots of
            change for the future.
          </p>
        </div>

        <div className="w-full">
          <Slider ref={sliderRef} {...settings}>
            {whoCanJoinUsData.map((item, index) => {
              return (
                <div key={index} className="flex justify-center">
                  <div className="flex flex-col items-center justify-center gap-4 bg-[url('/circle.png')] bg-cover bg-center w-full md:w-[450px] h-[450px] p-5">
                    <Image
                      src={item.iconUrl}
                      width={45}
                      height={35}
                      alt="icon"
                      className="w-10 h-10"
                    />

                    <p className="text-lg text-[#333536] text-center w-3/5">
                      <span className="text-shoonya-purple font-semibold">
                        {item.title}
                      </span>{" "}
                      <br />
                      {item.desc}
                    </p>
                  </div>
                </div>
              )
            })}
          </Slider>
        </div>

        <h2 className="text-lg md:text-2xl text-[#141414] text-center">
          <span className="font-semibold text-shoonya-purple">
            and You, Every Individual,
          </span>
          <br />
          with the power to become a steward of change.
        </h2>

        <div className="flex items-center justify-center gap-2">
          {/* Left arrow button, hidden by default and shown on mobile */}
          <button
            className="p-2.5 bg-white border rounded-full text-2xl "
            onClick={() => sliderRef.current.slickPrev()}
          >
            <IoIosArrowRoundBack />
          </button>

          {/* Right arrow button, hidden by default and shown on mobile */}
          <button
            className="p-2.5 bg-white border rounded-full text-2xl "
            onClick={() => sliderRef.current.slickNext()}
          >
            <IoIosArrowRoundForward />
          </button>
        </div>

        <button
          onClick={handleScroll}
          className="relative bg-shoonya-purple mt-5 text-base md:text-lg px-4 md:px-9 py-2 md:py-3 rounded-full ring-4 ring-shoonya-purple/30 shadow overflow-hidden group"
        >
          <span className="absolute inset-0 bg-shoonya-green origin-left scale-x-0 transition-transform duration-500 ease-in-out group-hover:scale-x-100"></span>
          <span className="relative z-10 md:text-lg text-white">
            Join the Movement
          </span>
        </button>
      </div>
    </div>
  )
}

export default WhoCanJoinUs

{
  /* <button
          onClick={handleScroll}
          className="relative bg-white mt-5 text-base md:text-lg px-4 md:px-9 py-2 md:py-3 rounded-full ring-4 ring-shoonya-purple/40 shadow overflow-hidden group"
        >
          <span className="absolute inset-0 bg-shoonya-purple origin-left scale-x-0 transition-transform duration-500 ease-in-out group-hover:scale-x-100"></span>
          <span className="relative z-10 md:text-lg text-shoonya-purple group-hover:text-white transition-colors duration-300 ease-in-out">
            Join the Movement
          </span>
        </button> */
}
