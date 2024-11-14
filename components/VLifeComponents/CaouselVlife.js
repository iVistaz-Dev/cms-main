"use client";
import Image from "next/image";
import React, { useRef } from "react";
import FourCarouselSlider from "./FourCarousel";
import OurRegion from "./OurRegion";
import OurCommunities from "./OurCommunities";
import VlifeRoles from "./VlifeRoles";
import SupportBeyondCredit from "./Support";

const CaouselVlife = () => {
  const SupportBeyondCreditSectionRef = useRef(null);

  const scrollToSection = (ref) => {
    if (ref.current) {
      const isMobile = window.innerWidth < 768;
      const yOffset = isMobile ? 200 : 750;
      const y = ref.current.offsetTop + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  const handleScrollToSupport = () => {
    scrollToSection(SupportBeyondCreditSectionRef);
  };

  return (
    <>
      <div>
        <div>
          <p className="text-[#00AF8B] text-center lg:p-5 lg:pl-36 lg:pr-36 text-xl mt-10 lg:mt-0">
            V-Life is driven by a set of core objectives aimed at fostering
            <br />
            sustainable development and financial inclusion:
          </p>
        </div>

        <div className="hidden lg:block">
          <div className="flex container mx-auto gap-5 justify-center">
            {Array(4)
              .fill(null)
              .map((_, index) => (
                <div
                  key={index}
                  className="w-64 p-5 bg-[#7F3F97] border text-white rounded-3xl mt-10"
                  data-aos={index % 2 === 0 ? "flip-left" : "flip-right"}
                  data-aos-duration="600"
                >
                  <h2 className="text-[25px]">Empowering Rural Communities:</h2>
                  <p className="mt-4 font-light">
                    We aim to enhance the economic resilience of rural households by
                    providing access to tailored financial products that meet their
                    unique needs.
                  </p>
                </div>
              ))}
          </div>
        </div>

        <FourCarouselSlider />

        <div className="lg:py-14">
          <button
            onClick={handleScrollToSupport}
            className="bg-[#00AF8B] m-auto text-white flex p-3 rounded-xl font-bold lg:-mt-0 "
          >
            Learn How We Make an Impact
          </button>
        </div>

        <div ref={SupportBeyondCreditSectionRef} className="lg:flex container mx-auto justify-center lg:py-14">
          <div className="lg:w-72 lg:mt-44 p-3 lg:p-0" data-aos-duration="400" data-aos="fade-right">
            <h2 className="text-[#00AF8B] text-[40px] mt-4">How Does It Work?</h2>
            <p className="text-[25px]">
              V-Life operates through a
              <br />
              comprehensive, community-centric approach:
            </p>
          </div>
          <Image
            data-aos-duration="400"
            data-aos="fade-left"
            src="/Vlife/info1.png"
            width={700}
            height={500}
            className="lg:w-[50%] p-3"
          />
        </div>

        <OurRegion />
        <OurCommunities />
        <VlifeRoles />
        <div ref={SupportBeyondCreditSectionRef}>
          <SupportBeyondCredit />
        </div>
      </div>
    </>
  );
};

export default CaouselVlife;
