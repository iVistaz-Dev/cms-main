"use client";
import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { shoonyaServices } from "../../utils/data";

const Section1NetZero = () => {
  const responsive = {
    superLargeDesktop: {
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
    <>
      {/* Section1 */}
      <div className=" flex justify-center bg-white p-4 lg:p-6 ">
        <div className="lg:w-[1140px] flex flex-col items-center  w-full ">
          <div className="mt-10">
            <img
              src="https://s3.ap-south-1.amazonaws.com/com.cg.ivista.mediafiles/shoonya/net-zero.png"
              alt=""
              className="object-cover"
              data-aos="fade-up"
            />
          </div>

          <div className="text-center flex justify-center items-center my-6">
            <p
              className="text-black text-[26px] text-center lg:w-[90%] w-full leading-8"
              data-aos="fade-down"
            >
              Shoonya — Net Zero Catalyst offers end-to-end Net Zero solutions
              to MSMEs, enabling them to become Global Market-Ready.
            </p>
          </div>

          <div className="flex lg:flex-row flex-col my-6">
            <div className="lg:w-[50%] w-full flex lg:justify-end justify-center lg:px-8">
              <img
                src="https://s3.ap-south-1.amazonaws.com/com.cg.ivista.mediafiles/shoonya/our-transformation.png"
                alt=""
                className="object-contain lg:w-[60%] w-[80%]"
                data-aos="fade-right"
              />
            </div>
            <div className="lg:w-[50%] w-full flex items-center">
              <p
                className="text-black text-xl lg:w-[70%] text-center lg:text-start"
                data-aos="fade-left"
              >
                Our transformative services optimise MSME supply chains, make
                them compliant, resulting in cost savings and improved
                productivity while increasing business prospects.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Section 2 - Shoonya - Catalyst Group’s Net Zero Initiative*/}
      <div className="flex flex-col justify-center items-center bg-[#E6F4EF] py-10 ">
        <h1
          className="text-[#7F3F97] text-center text-[26px] lg:text-[40px]"
          data-aos="fade-down"
        >
          <span className="font-semibold text-black">Shoonya -</span> Catalyst
          Group’s Net Zero Initiative
        </h1>
        <div className="lg:w-[1140px] flex flex-col items-center w-full ">
          <div className="hidden lg:block">
            <img src="https://s3.ap-south-1.amazonaws.com/com.cg.ivista.mediafiles/shoonya/Shoonya+infographic+V2.png" />
          </div>
          <div className="items-center justify-center relative w-full  hidden">
            {/* grid 1 carbon sequestration */}

            <div
              className="lg:col-span-4 h-[100%] relative mt-32 flex flex-col items-center "
              data-aos="fade-up"
            >
              <img
                src="https://s3.ap-south-1.amazonaws.com/com.cg.ivista.mediafiles/shoonya/carbon-sequestration.svg"
                className="object-contain  mb-4"
              />
              <p className="text-center">
                Our Tree Growth Programme aims at growing native-variety forests
                in collaboration with farmers, the government, and other
                institutions to ensure high survival rates, carbon
                sequestration, and healthy ecosystems.
              </p>
              <div className="flex absolute  -right-24 top-4">
                <img
                  src="https://s3.ap-south-1.amazonaws.com/com.cg.ivista.mediafiles/shoonya/line-1.svg"
                  className="object-cover"
                />
              </div>
            </div>

            {/* Center Image */}
            <div className="col-span-4 mt-10">
              <img
                src="https://s3.ap-south-1.amazonaws.com/com.cg.ivista.mediafiles/shoonya/net-zero-and-circularity.png"
                className="object-cover"
              />
            </div>

            {/* grid 2 circularity */}
            {/* <div
              className="lg:col-span-4 h-[100%] relative mt-32 flex flex-col items-center justify-center "
              data-aos="fade-up"
            >
              <img
                src="https://s3.ap-south-1.amazonaws.com/com.cg.ivista.mediafiles/shoonya/circularity.svg"
                className="object-contain  mb-4"
              />
              <p className="text-center">
                Shoonya brings years of experience and expertise in the field of
                deploying innovative plastic circularity initiatives in the
                value chains of apparel factories, brands, and other players.
              </p>
              <div className="flex absolute  -start-8 top-32">
                <img
                  src="https://s3.ap-south-1.amazonaws.com/com.cg.ivista.mediafiles/shoonya/line-2.svg"
                  className="object-cover"
                />
              </div>
            </div> */}
          </div>

          {/* <div
            className=" h-[100%] relative pt-14  flex-col items-center justify-center w-[50%] hidden"
            data-aos="fade-up"
          >
            <img
              src="https://s3.ap-south-1.amazonaws.com/com.cg.ivista.mediafiles/shoonya/net-zero.svg"
              className="object-contain  mb-4"
            />
            <p className="text-center">
              Leveraging on our experience, partnerships, and on-the-ground
              expertise, we offer Net Zero services to MSMEs, apparel
              factories, and hospitals to ensure end-to-end compliance via
              responsible supply chains.
            </p>

            <p className="text-center mt-10">
              We are a strategic, knowledge-based, implementation-focused, and
              investing partner in the Net Zero journey.
            </p>
            <div className="flex absolute inset-x-0 top-0 items-center justify-center">
              <img
                src="https://s3.ap-south-1.amazonaws.com/com.cg.ivista.mediafiles/shoonya/line-3.svg"
                className="object-cover"
              />
            </div>
          </div> */}

          {/* Mobile  */}
          <div
            className="lg:hidden flex flex-col gap-6 p-3"
            data-aos="fade-down"
          >
            <div className="mt-10">
              <img
                src="https://s3.ap-south-1.amazonaws.com/com.cg.ivista.mediafiles/shoonya/nero-zero-circularity.png"
                className="object-contain"
              />
            </div>
            <div>
              <img
                src="https://s3.ap-south-1.amazonaws.com/com.cg.ivista.mediafiles/shoonya/carbon-sequestration.svg"
                className="w-[50%]  mb-2"
              />
              <p>
                Our Tree Growth Programme aims at growing native-variety forests
                in collaboration with farmers, the government, and other
                institutions to ensure high survival rates, carbon
                sequestration, and healthy ecosystems.
              </p>
            </div>
            <div>
              <img
                src="https://s3.ap-south-1.amazonaws.com/com.cg.ivista.mediafiles/shoonya/circularity.svg"
                className="  h-[50px]  mb-2"
              />

              <p>
                Shoonya brings years of experience and expertise in the field of
                deploying innovative plastic circularity initiatives in the
                value chains of apparel factories, brands, and other players.
              </p>
            </div>
            <div>
              <img
                src="https://s3.ap-south-1.amazonaws.com/com.cg.ivista.mediafiles/shoonya/net-zero.svg"
                className="  h-[50px]  mb-2"
              />

              <p>
                Leveraging on our experience, partnerships, and on-the-ground
                expertise, we offer Net Zero services to MSMEs, apparel
                factories, and hospitals to ensure end-to-end compliance via
                responsible supply chains.
              </p>
              <p className="text-center mt-10">
                We are a strategic, knowledge-based, implementation-focused, and
                investing partner in the Net Zero journey.
              </p>
            </div>
          </div>

          {/* People Planet Prosperity */}
          <p
            className="text-black text-xl text-center lg:text-center mt-10 mb-8 lg:flex hidden"
            data-aos="fade-left"
          >
            We are a strategic, knowledge-based, implementation-focused, <br />
            and investing partner in the Net Zero journey.
          </p>
          <div
            className="flex lg:flex-row flex-col justify-center items-center gap-5"
            data-aos="zoom-in"
          >
            <div className="bg-white w-40 h-40 flex flex-col justify-center items-center rounded-full border-8 border-[#D0EAE2]">
              <div className="p-3">
                <img
                  src="https://s3.ap-south-1.amazonaws.com/com.cg.ivista.mediafiles/shoonya/people.svg"
                  width={60}
                />
              </div>
              <p className="text-[#7F3F97]">PEOPLE</p>
            </div>

            <div>
              <img
                src="https://s3.ap-south-1.amazonaws.com/com.cg.ivista.mediafiles/shoonya/arrow-green.svg"
                width={25}
                height={25}
                className="text-[red] lg:rotate-0 rotate-90"
              />
            </div>

            <div className="bg-white w-40 h-40 flex flex-col justify-center items-center rounded-full border-8 border-[#D0EAE2]">
              <div className="p-3">
                <img
                  src="https://s3.ap-south-1.amazonaws.com/com.cg.ivista.mediafiles/shoonya/planet.svg"
                  width={70}
                />
              </div>
              <p className="text-[#7F3F97]">PLANET</p>
            </div>

            <div>
              <img
                src="https://s3.ap-south-1.amazonaws.com/com.cg.ivista.mediafiles/shoonya/arrow-green.svg"
                width={25}
                height={25}
                className="text-[#8BCCB8] lg:rotate-0 rotate-90 fill-red-500"
              />
            </div>

            <div className="bg-white w-40 h-40 flex flex-col justify-center items-center rounded-full border-8 border-[#D0EAE2]">
              <div className="p-3">
                <img
                  src="https://s3.ap-south-1.amazonaws.com/com.cg.ivista.mediafiles/shoonya/prosperity.svg"
                  width={70}
                />
              </div>
              <p className="text-[#7F3F97]">PROSPERITY</p>
            </div>
          </div>

          {/* <div className='flex lg:flex-row flex-col justify-center items-center gap-5'> */}
          <div
            className="grid grid-cols-3 lg:grid-cols-6 gap-5 justify-center items-center mt-10"
            data-aos="fade-up"
          >
            <img src="https://s3.ap-south-1.amazonaws.com/com.cg.ivista.mediafiles/shoonya/Catalyst-Group-Net-Zero/Group+51341.svg" />
            <img src="https://s3.ap-south-1.amazonaws.com/com.cg.ivista.mediafiles/shoonya/Catalyst-Group-Net-Zero/Group+51337.svg" />
            <img src="https://s3.ap-south-1.amazonaws.com/com.cg.ivista.mediafiles/shoonya/Catalyst-Group-Net-Zero/Group+51336.svg" />
            <img src="https://s3.ap-south-1.amazonaws.com/com.cg.ivista.mediafiles/shoonya/Catalyst-Group-Net-Zero/Group+51342.svg" />
            <img src="https://s3.ap-south-1.amazonaws.com/com.cg.ivista.mediafiles/shoonya/Catalyst-Group-Net-Zero/Group+51344.svg" />
            <img src="https://s3.ap-south-1.amazonaws.com/com.cg.ivista.mediafiles/shoonya/Catalyst-Group-Net-Zero/Group+51346.svg" />
          </div>
        </div>
      </div>

      {/* section 3 */}
      <div className="py-10 bg-[url('https://s3.ap-south-1.amazonaws.com/com.cg.ivista.mediafiles/shoonya/our_services_bg.png')] bg-cover bg-no-repeat">
      <Carousel
        responsive={responsive}
        showDots={true}
        infinite={true}
        autoPlay={true}
        removeArrowOnDeviceType={["tablet","desktop"]}
        autoPlaySpeed={1800}
        className="h-[400px] lg:w-[1200px] mx-auto"
      >
        {shoonyaServices.map((item, index) => (
          <div key={index} className="h-full px-2 flex justify-center items-center">
            <div className="mx-auto text-center border border-[#d0eae2] py-4 relative h-[300px] flex flex-col justify-center items-center bg-white p-4">
              <img
                src={item.icon}
                className="h-[100px] absolute -top-[50px] z-50"
                alt={`Service icon ${index}`}
              />
              <h2 className="text-xl font-bold pt-16 pb-4 text-[#7F3F97] mt-50">
                {item.title}
              </h2>
              <p className="text-lg h-[200px]">{item.desc}</p>
            </div>
          </div>
        ))}
      </Carousel>
    </div>
      

      {/* section 3 */}
      <div className="flex flex-col justify-center items-center bg-[#7F3F97] py-10 ">
        <h1
          className="text-white text-center text-[26px] lg:text-[40px] font-bold"
          data-aos="fade-up"
        >
          Challenges Faced by MSMEs
        </h1>

        <div
          className="lg:w-[1140px] flex flex-col items-center w-full mt-10"
          data-aos="fade-down"
        >
          <div className="grid lg:grid-cols-12 grid-cols-1 gap-5 lg:p-0 p-2">
            <div className="mt-20 border border-1 border-[#A766BF] col-span-4 flex flex-col items-center p-5 pt-0">
              <img
                src="https://s3.ap-south-1.amazonaws.com/com.cg.ivista.mediafiles/shoonya/aspering-msme.svg"
                width={100}
                className="-mt-12 bg-[#7F3F97]"
              />
              <p className="mt-6 text-white text-center text-xl font-semibold mb-0">
                Aspiring MSMEs need to be ahead of the curve
              </p>

              <p className="mt-6 text-[#DCD0E5] text-center">
                Emerging MSMEs must proactively align with ESG demands,
                optimising supply chains for efficiency, which determines their
                success in the medium to long term.
              </p>
            </div>
            <div className="mt-20 border border-1 border-[#A766BF] col-span-4 flex flex-col items-center p-5 pt-0">
              <img
                src="https://s3.ap-south-1.amazonaws.com/com.cg.ivista.mediafiles/shoonya/costs.svg"
                width={100}
                className="-mt-12 bg-[#7F3F97]"
              />
              <p className="mt-6 text-white text-center text-xl font-semibold">
                Costs
                <br />
                <br />
              </p>

              <p className="mt-6 text-[#DCD0E5] text-center">
                Operational expenses, encompassing utilities and waste
                management, critically impact MSME outcomes.
              </p>
            </div>
            <div className="mt-20 border border-1 border-[#A766BF] col-span-4 flex flex-col items-center p-5 pt-0">
              <img
                src="https://s3.ap-south-1.amazonaws.com/com.cg.ivista.mediafiles/shoonya/access-to-standarised.svg"
                width={75}
                className="-mt-12 bg-[#7F3F97]"
              />
              <p className="mt-6 text-white text-center text-xl font-semibold">
                Access to standardised solutions
                <br />
                <br />
              </p>

              <p className="mt-6 text-[#DCD0E5] text-center">
                Streamlined solutions are imperative, as prevailing consultancy
                offerings often lack actionable direction or measurable
                benchmarks, coupled with cost barriers hindering implementation.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* section 4 */}
      <div className="flex flex-col justify-center items-center bg-white py-10 ">
        <h1
          className="text-[#622F88] text-center text-[26px] lg:text-[40px] font-bold"
          data-aos="fade-up"
        >
          Benefits of Working with Shoonya
        </h1>

        <div
          className="lg:w-[1140px] flex flex-col items-center w-full mt-10"
          data-aos="fade-down"
        >
          {/* Desktop  */}
          <div className="lg:flex hidden flex-col items-center">
            <div className="text-center w-[32%] mb-6" data-aos="fade-up">
              <p className="text-xl text-[#4DB45D] ">Global Market Readiness</p>
              <p className="mt-2">
                Prepare for global expansion, opening doors to new business
                opportunities.
              </p>
            </div>

            <div className="grid lg:grid-cols-12">
              <div className="text-center mt-16 col-span-4" data-aos="fade-up">
                <p className="text-xl text-[#05AC8D] ">
                  Brand Building with <br />
                  Green Practices
                </p>
                <p className="mt-2">
                  Cultivate a strong brand identity through regenerative,
                  circular, and green processes, appealing to conscious
                  consumers.
                </p>
              </div>

              <div className="text-center col-span-4">
                <img
                  src="https://s3.ap-south-1.amazonaws.com/com.cg.ivista.mediafiles/shoonya/benifits_working.png"
                  className="object-cover"
                />
              </div>

              <div className="text-center mt-16 col-span-4" data-aos="fade-up">
                <p className="text-xl text-[#FFAA60] ">
                  Environmental Certificates
                </p>
                <p className="mt-2">
                  Attain internationally recognised certifications to unlock
                  business prospects and establish credibility.
                </p>
              </div>
            </div>

            <div className="grid lg:grid-cols-12">
              <div className="text-center  col-span-2"></div>
              <div className="text-center  col-span-3" data-aos="fade-up">
                <p className="text-xl text-[#622F88] ">
                  Cost Savings <br />
                  through Net Zero
                </p>
                <p className="mt-2">
                  Embrace efficient processes and greener value chains to reduce
                  costs and bolster profitability.
                </p>
              </div>
              <div className="text-center  col-span-3"></div>
              <div
                className="text-center  col-span-3 -mt-16 -ml-32"
                data-aos="fade-up"
              >
                <p className="text-xl text-[#FFCB58] ">
                  Carbon Offsetting with <br />
                  Traceability
                </p>
                <p className="mt-2">
                  Offset carbon emissions with verifiable traceability,
                  showcasing a commitment to sustainability.
                </p>
              </div>
              <div className="text-center  col-span-2"></div>
            </div>
          </div>

          {/* Mobile  */}

          <div
            className="flex flex-col p-2 lg:hidden justify-center items-center "
            data-aos="fade-up"
          >
            <img
              src="https://s3.ap-south-1.amazonaws.com/com.cg.ivista.mediafiles/shoonya/benifits_mobile_img.png"
              className="object-cover"
            />

            <div className="text-center mt-16 ">
              <p className="text-xl text-[#05AC8D] ">
                Brand Building with <br />
                Green Practices
              </p>
              <p className="mt-2">
                Cultivate a strong brand identity through regenerative,
                circular, and green processes, appealing to conscious consumers.
              </p>
            </div>

            <div className="text-center mt-10">
              <p className="text-xl text-[#4DB45D] ">Global Market Readiness</p>
              <p className="mt-2">
                Prepare for global expansion, opening doors to new business
                opportunities.
              </p>
            </div>

            <div className="text-center mt-10">
              <p className="text-xl text-[#FFAA60] ">
                Environmental Certificates
              </p>
              <p className="mt-2">
                Attain internationally recognised certifications to unlock
                business prospects and establish credibility.
              </p>
            </div>

            <div className="text-center  mt-10">
              <p className="text-xl text-[#622F88] ">
                Cost Savings <br />
                through Net Zero
              </p>
              <p className="mt-2">
                Embrace efficient processes and greener value chains to reduce
                costs and bolster profitability.
              </p>
            </div>

            <div className="text-center mt-10">
              <p className="text-xl text-[#FFCB58] ">
                Carbon Offsetting with <br />
                Traceability
              </p>
              <p className="mt-2">
                Offset carbon emissions with verifiable traceability, showcasing
                a commitment to sustainability.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Section1NetZero;
