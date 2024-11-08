"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useRef, useEffect } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { CarouselPartners } from "../../utils/data";

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
    <div className="lg:hidden block">
      <div className=" w-[90%] mx-auto">
        <Carousel
          responsive={responsive}
          showDots={true}
          infinite={false}
          autoPlay={false}
          autoPlaySpeed={2000}
          //   customTransition="all .5"
          dotListClass="custom-dot-list"
          removeArrowOnDeviceType={["tablet", "mobile", "desktop"]}
          className="h-[200px] bg-transparent container mx-auto"
        >
          {CarouselPartners.map((items, index) => (
            <div className="flex container mx-auto space-x-9 justify-center">
              <Image src={items.ImageUrl} width={200} height={200} />
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
});

export default Content;
