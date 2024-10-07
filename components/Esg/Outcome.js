import React from 'react'
import Link from 'next/link'

export default function Home({ onClick }) {
  return (
    <>
      <div
        className="lg:flex flex-col justify-end items-center bg-cover bg-center bg-no-repeat mb-16 hidden "
        // style={{
        //   backgroundImage:
        //     "url('https://s3.ap-south-1.amazonaws.com/com.cg.ivista.mediafiles/esg/outcome.png')",
        //   backgroundPosition: 'center center',
        //   backgroundSize: 'contain',
        // }}
        data-aos="zoom-in"
      >
        <div>
          <img src="https://s3.ap-south-1.amazonaws.com/com.cg.ivista.mediafiles/esg/outcome-desktop.jpg" />
        </div>

        {/* <button
          className="bg-[#7F3F97] p-2 px-4 rounded-lg text-white mb-6 absolute"
          onClick={onClick}
        >
          Contact Us
        </button> */}
      </div>
      <div
        className="h-[1100px] flex flex-col justify-end items-center bg-cover bg-center bg-no-repeat mb-16 lg:hidden"
        style={{
          backgroundImage:
            "url('https://s3.ap-south-1.amazonaws.com/com.cg.ivista.mediafiles/esg/outcome-mobile.png')",
          backgroundPosition: 'center center',
          backgroundSize: 'cover',
        }}
        data-aos="zoom-in"
      >
        {/* <button
          className="bg-[#7F3F97] p-2 px-4 rounded-lg text-white mb-6"
          onClick={onClick}
        >
          Contact Us
        </button> */}
      </div>
    </>
  )
}
