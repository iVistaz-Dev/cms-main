import React from "react"

const Banner = () => {
  return (
    <>
      <div className="lg:bg-[url('https://s3.ap-south-1.amazonaws.com/com.cg.ivista.mediafiles/nobleplasics/work-banner.png')] bg-[#7F3F97] lg:min-h-[500px] bg-center bg-cover bg-no-repeat flex justify-center lg:mt-28">
        <div className="lg:w-[1140px] w-full p-0 flex flex-col justify-center items-center">
          <div className="grid lg:grid-cols-12 grid-cols-1">
            <div className="lg:col-span-5 lg:pr-6 col-span-6 lg:order-1 order-2 flex flex-col justify-center lg:p-0 p-5">
              <h1 className="lg:text-[40px] text-[30px] text-white leading-10">
                Work
              </h1>
              <p className="lg:text-[18px] mt-4 leading-6 text-white">
                We are focused on results that will help us achieve the UN SDGs
                and create a Circular Economy.
              </p>
            </div>

            <div className="lg:col-span-7 col-span-6 lg:order-2 order-1">
              <img
                src="https://s3.ap-south-1.amazonaws.com/com.cg.ivista.mediafiles/nobleplasics/work/work-mobile-banner.png"
                className="lg:hidden flex"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Banner
