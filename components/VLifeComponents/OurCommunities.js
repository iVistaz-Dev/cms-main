'use client'
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import CarouselGroups from "./CarouselGroups";

const OurCommunities = () => {
  useEffect(() => {
    if (typeof window !== "undefined") {
      AOS.init({
        delay: 0,
        duration: 400,
        easing: "ease",
        disable: () => window.innerWidth < 800,
      });
    }
  }, []);
  
  return (
    <>
      <div className="container mx-auto ">
        <h2 className="text-center text-[40px] text-[#7F3F97] font-bold mt-8">
          Our communities
        </h2>
        <p className="text-center text-xl mb-10 mt-2">
          Our work is deeply rooted in the communities we serve. We engage with:
        </p>
      </div>

      <div className="hidden lg:block">
      <div className="flex flex-wrap justify-center items-start container mx-auto mt-4 lg:space-x-[-20px] space-y-0">
        {/* Block 1 */}
        <div className="relative group w-64 m-3">
          <div className="bg-[#46146C] h-20 -mt-3 text-white px-6 py-4 rounded-full shadow-lg transform group-hover:scale-105 transition duration-500 ease-in-out z-10">
            <p className="text-center flex justify-center items-center mt-3">Small & Marginal Farmers</p>
          </div>
          <p className="text-center mt-4 text-sm max-w-xs w-52">
            Supporting them with the resources and knowledge needed to improve agricultural productivity and income stability.
          </p>
        </div>

        {/* Block 2 */}
        <div className="relative group w-64  m-3" data-aos-delay="100">
          <div className="bg-[#541484] h-20 text-white px-6 py-4 rounded-full shadow-lg transform group-hover:scale-105 transition duration-500 ease-in-out z-10">
            <p className="text-center mt-3">Women Entrepreneurs</p>
          </div>
          <p className="text-center mt-4 text-sm max-w-xs w-52">
            Empowering women to take charge of their economic futures through financial independence and entrepreneurship.
          </p>
        </div>

        {/* Block 3 */}
        <div className="relative group w-64  m-3" data-aos-delay="200">
          <div className="bg-[#622F88] h-20 text-white px-6 py-4 rounded-full shadow-lg transform group-hover:scale-105 transition duration-500 ease-in-out z-10">
            <p className="text-center mt-3">Youth</p>
          </div>
          <p className="text-center mt-4 text-sm max-w-xs w-52">
            Providing young people with the skills and opportunities needed to secure sustainable livelihoods in their communities.
          </p>
        </div>

        {/* Block 4 */}
        <div className="relative group w-64  m-3" data-aos-delay="300">
          <div className="bg-[#7944A0] h-20 text-white px-6 py-4 rounded-full shadow-lg transform group-hover:scale-105 transition duration-500 ease-in-out z-10">
            <p className="text-center">Artisans and Small Businesses</p>
          </div>
          <p className="text-center mt-4 text-sm max-w-xs w-52">
            Enabling local artisans and small enterprises to grow and thrive in an increasingly competitive market.
          </p>
        </div>

        {/* Block 5 */}
        <div className="relative group w-64  m-3" data-aos-delay="400">
          <div className="bg-[#9258BC] h-20 text-white px-6 py-4 rounded-full shadow-lg transform group-hover:scale-105 transition duration-500 ease-in-out z-10">
            <p className="text-center mt-3">Marginalised Communities</p>
          </div>
          <p className="text-center mt-4 text-sm max-w-xs w-52">
            Fostering economic independence and enabling sex worker, queer, and transgender communities to invest in essential services.
          </p>
        </div>
      </div>
      </div>
      <CarouselGroups />
      {/* <div>
        <button className="bg-[#7F3F97] flex m-auto rounded-xl p-3 my-8 w-52 justify-center text-white">
          Meet Our Communities
        </button>
      </div> */}

      <div className="bg-[#00AF8B] text-center text-white mt-10">
        <div className="container mx-auto" data-aos="zoom-in" data-aos-duration="400">
          <h2 className="text-[40px] font-bold pt-10">
            Enabling Credit to Farmers: Retail Loan
          </h2>
          <p className="text-xl font-light lg:pl-36 lg:pr-36 p-5 pb-10">
            Individual farmers, particularly small and marginal farmers, often
            struggle with financial barriers that limit their ability to invest
            in their farms. These barriers include a lack of collateral, limited
            credit history, and complex banking processes. Without access to
            affordable credit, farmers face difficulties in purchasing seeds,
            fertilizers, equipment, and other essential inputs, leading to
            reduced productivity and income instability.
          </p>
        </div>
      </div>
    </>
  );
};

export default OurCommunities;
