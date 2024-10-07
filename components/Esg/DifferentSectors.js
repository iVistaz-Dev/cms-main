'use client'
import React from 'react'
import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css'
import Link from 'next/link'
import { sectors } from '../../utils/data'

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
      <div className="text-center lg:mt-[0px] lg:w-[70%] mx-auto z-96">
        <h2
          className="text-ce-purple lg:text-3xl lg:py-6 text-xl px-4 lg:p-0 lg:px-0"
          data-aos="fade-down"
        >
          We help different sectors achieve their ESG requirements
        </h2>
      </div>
      <div className="w-[90%] mx-auto pb-20">
        <Carousel
          responsive={responsive}
          showDots={true}
          autoPlay={true}
          autoPlaySpeed={1500}
          infinite={true}
          //   customTransition="all .5"
          //   dotListClass="border-red-500 border"
          removeArrowOnDeviceType={['tablet', 'mobile', 'desktop']}
          className="h-[490px]"
        >
          {sectors.map((items, index) => (
            <div
              className="shadow-md rounded-lg lg:w-[90%] ml-1 pb-6 mb-4"
              key={index}
              data-aos="zoom-in"
            >
              <img src={items.imgUrl} className="w-full" />
              <h2 className="text-2xl text-[#7F3F97] font-bold py-4 text-center h-20">
                {items.title}
              </h2>
            </div>
          ))}
        </Carousel>
      </div>
    </>
  )
}

export default Insights
