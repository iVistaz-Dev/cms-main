// 'use client'
// import React from "react";
// import Slider from "react-slick";

// const CarouselComponent = () => {
//   const settings = {
//     dots: true,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 3, // Show more slides on larger screens
//     slidesToScroll: 1,
//     autoplay: true,
//     autoplaySpeed: 3000,
//     responsive: [
//       {
//         breakpoint: 1280, // Large desktop
//         settings: {
//           slidesToShow: 3,
//         },
//       },
//       {
//         breakpoint: 1024, // Tablet and small desktops
//         settings: {
//           slidesToShow: 2,
//         },
//       },
//       {
//         breakpoint: 640, // Mobile devices
//         settings: {
//           slidesToShow: 1,
//         },
//       },
//     ],
//   };

//   return (
//     <div className="container mx-auto mt-4 lg:p-0 p-3">
//       <Slider {...settings}>
//         {/* Block 1 */}
//         <div className="p-2">
//           <div className="bg-[#46146C] mb-5 text-white p-6 hover:bg-[#9258BC] transition duration-500 ease-in-out h-28 rounded-full flex items-center justify-center transform hover:scale-105">
//             <p className="text-center">Small & Marginal Farmers</p>
//           </div>
//           <p className="text-center lg:text-left">
//             Supporting them with the resources and knowledge needed to improve
//             agricultural productivity and income stability
//           </p>
//         </div>

//         {/* Block 2 */}
//         <div className="p-2">
//           <div className="bg-[#541484] mb-5 text-white p-6 hover:bg-[#7944A0] transition duration-500 ease-in-out h-28 rounded-full flex items-center justify-center transform hover:scale-105">
//             <p className="text-center">Women Entrepreneurs</p>
//           </div>
//           <p className="text-center lg:text-left">
//             Empowering women to take charge of their economic futures through
//             financial independence and entrepreneurship
//           </p>
//         </div>

//         {/* Block 3 */}
//         <div className="p-2">
//           <div className="bg-[#622F88] mb-5 text-white p-6 hover:bg-[#7944A0] transition duration-500 ease-in-out h-28 rounded-full flex items-center justify-center transform hover:scale-105">
//             <p className="text-center">Youth</p>
//           </div>
//           <p className="text-center lg:text-left">
//             Providing young people with the skills and opportunities needed to
//             secure sustainable livelihoods in their communities
//           </p>
//         </div>

//         {/* Block 4 */}
//         <div className="p-2">
//           <div className="bg-[#7944A0] mb-5 text-white p-6 hover:bg-[#541484] transition duration-500 ease-in-out h-28 rounded-full flex items-center justify-center transform hover:scale-105">
//             <p className="text-center">Artisans and Small Businesses</p>
//           </div>
//           <p className="text-center lg:text-left">
//             Enabling local artisans and small enterprises to grow and thrive in
//             an increasingly competitive market
//           </p>
//         </div>

//         {/* Block 5 */}
//         <div className="p-2">
//           <div className="bg-[#9258BC] mb-5 text-white p-6 hover:bg-[#46146C] transition duration-500 ease-in-out h-28 rounded-full flex items-center justify-center transform hover:scale-105">
//             <p className="text-center">Marginalised Communities</p>
//           </div>
//           <p className="text-center lg:text-left">
//             Fostering economic independence and enabling sex worker, queer,
//             and transgender communities to invest in essential services
//           </p>
//         </div>
//       </Slider>
//     </div>
//   );
// };

// export default CarouselComponent;



'use client'
import Image from 'next/image'
import Link from 'next/link'
import React, { useRef, useEffect } from 'react'
import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css'
import { HomeWhoWeAre, OurCommunities } from '../../utils/data'

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
  }

  return (
    <div className="bg-[#f2f2f2] lg:hidden block">
      <div className="bg-[#f2f2f2] w-[90%] mx-auto">
        <Carousel
          responsive={responsive}
          showDots={true}
          infinite={false}
          autoPlay={false}
          autoPlaySpeed={2000}
          //   customTransition="all .5"
          dotListClass="custom-dot-list"
          removeArrowOnDeviceType={['tablet', 'mobile', 'desktop']}
          className="h-[300px] bg-transparent container mx-auto"
        >
          {OurCommunities.map((items, index) => (
             <div>
             <div className="bg-[#46146C] mb-5 text-white p-6 lg:w-64 hover:bg-[#9258BC] transition duration-500 ease-in-out h-28 rounded-full flex items-center justify-center transform hover:scale-105">
               <p className="text-center">{items.group}</p>
             </div>
             <div>
               <p className="text-center">
                 {items.description}
               </p>
             </div>
           </div>
          ))}
        </Carousel>
      </div>
    </div>
  )
})

export default Content
