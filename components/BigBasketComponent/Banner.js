import React from 'react'

const Banner = () => {
  return (
    <div data-aos="fade-down">
      <div className="flex items-center justify-center h-[500px] w-full">
        <div className="relative w-full bg-[url('https://s3.ap-south-1.amazonaws.com/com.cg.ivista.mediafiles/big_basket/big_basket_banner.png')] bg-no-repeat bg-center bg-cover h-full">
          <div className="absolute top-4 left-4 lg:top-4 lg:left-36 lg:w-52">
            <img
              className="w-24 lg:w-full"
              src="https://s3.ap-south-1.amazonaws.com/com.cg.ivista.mediafiles/big_basket/CMS-logo.png"
              alt="CMS logo"
            />
          </div>

          {/* <div className="absolute top-4 right-4 lg:hidden">
      <div className="w-8 h-8 bg-purple-600"></div>
    </div> */}

          <div
            className="absolute bottom-24 w-full px-4 text-center lg:text-left lg:bottom-20 lg:left-40 lg:w-auto lg:px-0 lg:transform-none"
            data-aos="zoom-in"
          >
            <p className="text-2xl lg:text-4xl font-bold text-white pb-5">
              Shoonya & bigbasket initiative
              <br />
              Growing Green Together
            </p>
          </div>

          <div
            className="absolute bottom-10 left-1/2 transform -translate-x-1/2 p-4 lg:bottom-10 lg:right-40 lg:left-auto lg:transform-none"
            data-aos="zoom-in"
          >
            <img
              className="w-98 lg:w-[500px]"
              src="https://s3.ap-south-1.amazonaws.com/com.cg.ivista.mediafiles/big_basket/big_basket_inside_img.png"
              alt="Big basket inside image"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Banner
