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
      <h3 className="text-cms-primary text-3xl text-center">
        Social Protection Schemes We Facilitate
      </h3>
      <div className="w-full">
        <Slider {...settings}>
          {schemesData.map((item, idx) => (
            <div key={idx} className="ps-14">
              <Image
                src={item.imageUrl}
                width={250}
                height={120}
                className=""
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
