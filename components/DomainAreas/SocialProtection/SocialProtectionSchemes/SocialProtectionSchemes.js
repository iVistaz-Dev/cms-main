"use client"

import React from "react"
import Slider from "react-slick"
import Image from "next/image"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import { schemesData } from "@/utils/socialProtectiondata"

const SocialProtectionSchemes = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1200, // Max width for this breakpoint
        settings: { slidesToShow: 3 },
      },
      {
        breakpoint: 992,
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: 768,
        settings: { slidesToShow: 1 },
      },
    ],
  }

  return (
    <div className="px-5 py-14 flex flex-col items-center justify-center gap-10">
      {/* Section Heading */}
      <h3 className="text-cms-primary text-2xl sm:text-3xl text-center font-semibold">
        Social Protection Schemes We Facilitate
      </h3>

      {/* Slider Container */}
      <div className="w-full">
        <Slider {...settings}>
          {schemesData.map((item, idx) => (
            <div key={idx} className="px-4">
              {" "}
              {/* Adjusted padding for consistent spacing */}
              <Image
                src={item.imageUrl}
                width={250}
                height={120}
                className="mx-auto object-contain" // Ensured the image is well-aligned
                alt={`Scheme ${idx + 1}`}
              />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  )
}

export default SocialProtectionSchemes
