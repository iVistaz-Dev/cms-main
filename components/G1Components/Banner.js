import React from 'react'

const Banner = () => {
  return (
    <>
      <div
        className=" lg:bg-[url('https://s3.ap-south-1.amazonaws.com/com.cg.ivista.mediafiles/g1-image/g1_banner.png')] bg-[url('https://s3.ap-south-1.amazonaws.com/com.cg.ivista.mediafiles/g1-image/g1_mobile_banner.png')] lg:h-[500px] h-[80vh] bg-cover bg-center flex justify-center lg:items-center"
        data-aos="zoom-in"
      >
        <div className="lg:w-[1140px] flex justify-center lg:justify-start w-full">
          <p className="lg:text-5xl text-5xl lg:d-flex d-none font-semibold w-[75%] text-[#5c5c5c] lg:text-start text-center mt-36 lg:mt-auto gap-4">
            <span className="">
              What if <br className="lg:hidden block" />
            </span>
            <span className="text-[#02AF8B] ">Your Investment </span>
            <br />
            Can Become a <br />
            <span className="text-[#7F3F97]">Catalyst for Change?</span>
          </p>
        </div>
      </div>
    </>
  )
}

export default Banner
