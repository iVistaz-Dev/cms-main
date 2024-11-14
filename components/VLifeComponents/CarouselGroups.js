"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useRef, useEffect } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { HomeWhoWeAre, OurCommunities } from "../../utils/data";

const Content = React.forwardRef((props, ref) => {
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
      items: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <div className="bg-[#f2f2f2] lg:hidden block mb-10 py-4">
      <div className="bg-[#f2f2f2] w-[90%] mx-auto">
        <Carousel
          responsive={responsive}
          showDots={true}
          infinite={false}
          autoPlay={false}
          autoPlaySpeed={2000}
          //   customTransition="all .5"
          dotListClass="custom-dot-list"
          removeArrowOnDeviceType={["tablet", "mobile", "desktop"]}
          className="h-[300px] bg-transparent container mx-auto"
        >
          {OurCommunities.map((items, index) => (
            <div>
              <div className="bg-[#46146C] mb-5 text-white p-6 lg:w-64 hover:bg-[#9258BC] transition duration-500 ease-in-out h-28 rounded-full flex items-center justify-center transform hover:scale-105 -mt-10">
                <p className="text-center">{items.group}</p>
              </div>
              <div>
                <p className="text-center">{items.description}</p>
              </div>
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
});

export default Content;
