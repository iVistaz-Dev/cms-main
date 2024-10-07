"use client";
import Link from "next/link";
import React from "react";
import CountUp from "react-countup";

const NoblePlastics = ({ onClick }) => {
  return (
    <>
      {/* Section 1 */}
      {/* Noble Plastics */}
      <div className="flex justify-center py-16">
        <div className="lg:w-[1140px] w-full lg:p-0 p-2">
          <div className="grid lg:grid-cols-12 grid-cols-1 gap-8">
            <div
              className="col-span-6 flex justify-center"
              data-aos="fade-right"
            >
              <img
                src="https://s3.ap-south-1.amazonaws.com/com.cg.ivista.mediafiles/nobleplasics/home/noble-plastic-img.png"
                alt="Noble Plastics"
                className="object-contain w-[75%]"
              />
            </div>

            <div
              className="col-span-6 flex flex-col justify-center overflow-hidden"
              data-aos="fade-left"
            >
              <p className="text-[40px] text-[#7F3F97]">About Us</p>

              <p className="lg:text-[18px] mt-4 leading-6 text-lg">
                An eco-social initiative by the Catalyst Group that champions
                the effective use of plastic waste while promoting the
                well-being of people and the planet.
              </p>

              <p className="lg:text-[18px] mt-4 leading-6 text-lg">
                An incubation of the Catalyst Group, Noble Plastics works in
                line with the UN SDGs by integrating sustainability and social
                responsibility into supply chains across the apparel industry,
                benefiting people and the planet.
              </p>
              <div>
                <button
                  className="bg-[#7F3F97] px-8 py-3 text-white mt-8 inline-block rounded hover:bg-[#682b7d]"
                  onClick={onClick}
                >
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Section 2 */}
      {/* What Makes Us Unique */}
      <div className="flex justify-center py-8 bg-[#D0EAE2]">
        <div className="lg:w-[1140px] w-full lg:p-0 p-2">
          <div>
            <p
              className="lg:text-[40px] text-[#7F3F97] text-center text-2xl"
              data-aos="fade-up"
            >
              What Makes Us Unique
            </p>

            <p
              className="lg:text-[18px] mt-6 leading-6 text-center text-lg"
              data-aos="fade-down"
            >
              The well-being of people, the planet, and the prosperity of all
              our <br className="lg:flex hidden" />
              stakeholders lie at the heart of everything we do.
            </p>

            <div
              className="grid lg:grid-cols-12 grid-cols-1 gap-2 mt-10"
              data-aos="fade-down"
            >
              <div className="col-span-4 flex flex-col justify-center items-center">
                <img src="https://s3.ap-south-1.amazonaws.com/com.cg.ivista.mediafiles/nobleplasics/home/people.png" />
                <p className="text-[24px] py-4 text-[#7F3F97] font-semibold">
                  PEOPLE
                </p>
                <p className="lg:text-[18px] leading-6 text-center text-lg">
                  We provide communities with increased employment, social
                  equity, awareness of environmental protection methods, and
                  better health.{" "}
                </p>

                <div
                  className="grid grid-cols-1 lg:gap-10 gap-5 mt-10"
                  data-aos="fade-up"
                >
                  <div className="col-span-4 flex flex-col justify-center items-center">
                    <img src="https://s3.ap-south-1.amazonaws.com/com.cg.ivista.mediafiles/nobleplasics/home/people-img.png" />
                  </div>
                </div>
              </div>
              <div className="col-span-4 flex flex-col justify-center items-center">
                <img src="https://s3.ap-south-1.amazonaws.com/com.cg.ivista.mediafiles/nobleplasics/home/planet.png" />
                <p className="text-[24px] py-4 text-[#7F3F97] font-semibold">
                  PLANET
                </p>
                <p className="lg:text-[18px] leading-6 text-center text-lg">
                  We improve the health of the environment by reducing plastic
                  waste and carbon footprint, while ameliorating waste
                  management.
                </p>

                <div
                  className="grid grid-cols-1 lg:gap-10 gap-5 mt-16"
                  data-aos="fade-up"
                >
                  <div className="col-span-4 flex flex-col justify-center items-center">
                    <img src="https://s3.ap-south-1.amazonaws.com/com.cg.ivista.mediafiles/nobleplasics/home/planet-img.png" />
                  </div>
                </div>
              </div>
              <div className="col-span-4 flex flex-col justify-center items-center">
                <img src="https://s3.ap-south-1.amazonaws.com/com.cg.ivista.mediafiles/nobleplasics/home/prosperity.png" />
                <p className="text-[24px] py-4 text-[#7F3F97] font-semibold">
                  PROSPERITY
                </p>
                <p className="lg:text-[18px] leading-6 text-center text-lg">
                  We enable companies to significantly reduce their costs,
                  increase profits, improve their reputation, and contribute to
                  sustainability.
                  <br /> <br />
                </p>

                <div
                  className="grid grid-cols-1 lg:gap-10 gap-5 mt-10"
                  data-aos="fade-up"
                >
                  <div className="col-span-4 flex flex-col justify-center items-center">
                    <img src="https://s3.ap-south-1.amazonaws.com/com.cg.ivista.mediafiles/nobleplasics/home/prosperity-img.png" />
                  </div>
                </div>
              </div>
            </div>

            {/* <div
              className="grid lg:grid-cols-12 grid-cols-1 lg:gap-10 gap-5 mt-10"
              data-aos="fade-up"
            >
              <div className="col-span-4 flex flex-col justify-center items-center">
                <img src="https://s3.ap-south-1.amazonaws.com/com.cg.ivista.mediafiles/nobleplasics/home/people-img.png" />
              </div>
              <div className="col-span-4 flex flex-col justify-center items-center">
                <img src="https://s3.ap-south-1.amazonaws.com/com.cg.ivista.mediafiles/nobleplasics/home/planet-img.png" />
              </div>
              <div className="col-span-4 flex flex-col justify-center items-center">
                <img src="https://s3.ap-south-1.amazonaws.com/com.cg.ivista.mediafiles/nobleplasics/home/prosperity-img.png" />
              </div>
            </div> */}
          </div>
        </div>
      </div>

      {/* Section 3 */}
      {/* Our Impact*/}
      <div className="flex justify-center py-8">
        <div className="lg:w-[1140px] w-full lg:p-0 p-2">
          <p
            className="lg:text-[40px] text-[#7F3F97] text-center mb-6 text-2xl"
            data-aos="fade-down"
          >
            Our Impact
          </p>
          <div
            className="grid lg:grid-cols-12 grid-cols-1 gap-2"
            data-aos="fade-up"
          >
            <div className="col-span-3  mt-16 bg-[#F0EAF5D9] pb-4 rounded-md flex flex-col justify-center">
              <div className="flex items-center justify-center w-auto">
                <img
                  src="https://s3.ap-south-1.amazonaws.com/com.cg.ivista.mediafiles/nobleplasics/home/our-impact-inr.png"
                  className="-mt-12"
                  width={100}
                />
              </div>
              <div className="mt-2">
                <p className="font-semibold text-[24px] text-center">
                  <CountUp delay={2} end={90} prefix="INR " suffix="+ lakh" />
                </p>
                <p className="text-[18px] mt-2 leading-6 text-center">
                  generated in wages for marginalised groups
                  <br />
                  <br />
                </p>
              </div>
            </div>

            <div className="col-span-3  mt-16 bg-[#F0EAF5D9] pb-4 rounded-md flex flex-col justify-center">
              <div className="flex items-center justify-center w-auto">
                <img
                  src="https://s3.ap-south-1.amazonaws.com/com.cg.ivista.mediafiles/nobleplasics/home/our-impact-planet.png"
                  className="-mt-12"
                  width={100}
                />
              </div>
              <div className="mt-2">
                <p className="font-semibold text-[24px] text-center">
                  <CountUp delay={2} end={20500} suffix="+" />
                </p>
                <p className="text-[18px] mt-2 leading-6 text-center">
                  trees planted in Karnataka to achieve carbon neutrality
                  <br />
                  <br />
                </p>
              </div>
            </div>

            <div className="col-span-3  mt-16 bg-[#F0EAF5D9] pb-4 rounded-md flex flex-col justify-center">
              <div className="flex items-center justify-center w-auto">
                <img
                  src="https://s3.ap-south-1.amazonaws.com/com.cg.ivista.mediafiles/nobleplasics/healthcare-outcome.png"
                  className="-mt-12"
                  width={100}
                />
              </div>
              <div className="mt-2">
                <p className="font-semibold text-[24px] text-center">
                  <CountUp delay={2} end={50} prefix="INR " suffix="+ lakh" />
                </p>
                <p className="text-[18px] mt-2 leading-6 text-center">
                  invested in improving health outcomes
                  <br />
                  <br />
                </p>
              </div>
            </div>

            <div className="col-span-3  mt-16 bg-[#F0EAF5D9] pb-4 rounded-md flex flex-col justify-center">
              <div className="flex items-center justify-center w-auto">
                <img
                  src="https://s3.ap-south-1.amazonaws.com/com.cg.ivista.mediafiles/nobleplasics/tonnes-of-plastics.png"
                  className="-mt-12"
                  width={100}
                />
              </div>
              <div className="mt-2">
                <p className="font-semibold text-[24px] text-center">
                  <CountUp delay={2} end={600} suffix="+ tonnes" />
                </p>
                <p className="text-[18px] mt-2 leading-6 text-center">
                  of plastic kept away from landfills & waterways via
                  repurposing and recycling
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NoblePlastics;
