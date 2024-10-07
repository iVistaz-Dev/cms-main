import React from 'react'

export default function Home() {
  return (
    <div className="bg-[#F9FDFC]">
      <div className="flex lg:flex-row flex-col  items-center">
        <div className="lg:w-[60%] py-10 lg:py-0">
          <div className="flex flex-col justify-end items-end">
            <h1
              className="text-[#043929] lg:text-5xl font-normal text-3xl leading-8 lg:pt-10 pt-10 w-[90%]"
              data-aos="zoom-in"
            >
              Catalysing Net-Positive
              <br /> Value Chains for a <br />
              <span className="text-[#05AC8D] font-black lg:text-5xl text-3xl py-4">
                Sustainable Tomorrow
              </span>
            </h1>
            <div className="w-[90%] mt-14 hidden lg:block bottom-0">
              <img
                src="https://s3.ap-south-1.amazonaws.com/com.cg.ivista.mediafiles/esg/banner-arrow.svg"
                className="w-[30%] bottom-0"
              />
            </div>
          </div>
        </div>
        <div className="lg:w-[35%]">
          <img
            src="https://s3.ap-south-1.amazonaws.com/com.cg.ivista.mediafiles/esg/BGBanner.png"
            className="h-[80%] w-[100%]"
          />
        </div>
      </div>

      {/* <div
        className="flex lg:flex-row flex-col lg:justify-center lg:items-center justify-start text-center lg:text-start lg:bg-[url('https://s3.ap-south-1.amazonaws.com/com.cg.ivista.mediafiles/esg/Group+51795.svg')] lg:bg-cover bg-center mb-16 bg-[url('https://s3.ap-south-1.amazonaws.com/com.cg.ivista.mediafiles/esg/mobile-banner.png')] bg-contain bg-no-repeat bg-[#ebefee] mt-0 p-4"
        data-aos="fade-up"
      >
        <div className="w-full lg:order-2 order-2 "></div>
        <div className="w-11/12 lg:order-1 order-1 py-0 px-12 flex flex-col justify-between ">
          <div className="flex flex-col justify-end items-end ">
            <h1
              className="text-[#043929] lg:text-5xl font-normal text-3xl leading-8 lg:pt-40 pt-10"
              data-aos="zoom-in"
            >
              Catalysing Net-Positive
              <br /> Value Chains for a <br />
              <span className="text-[#05AC8D] font-black lg:text-5xl text-3xl py-4">
                Sustainable Tomorrow
              </span>
            </h1>
          </div>
          <div className="flex-col justify-end items-start ml-40 hidden lg:flex w-11/12">
            <img src="https://s3.ap-south-1.amazonaws.com/com.cg.ivista.mediafiles/esg/banner-arrow.svg" />
          </div>
        </div>
      </div> */}
    </div>
  )
}
