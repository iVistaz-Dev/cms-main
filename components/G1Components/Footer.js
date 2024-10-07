import Link from "next/link"
import React from "react"

const Footer = () => {
  return (
    <>
      <div className="bg-[#7F3F97] flex justify-center">
        <div className="lg:w-8/12 w-full lg:py-16 py-4 lg:px-0 px-3 text-white">
          <div className=" grid grid-cols-1 lg:grid-cols-12 w-full text-start">
            <div className="lg:col-span-8 flex flex-col gap-4 text-start">
              <p className="text-xl">Office Address</p>
              <hr class="lg:w-full w-[75%] h-1 bg-[#af77c4] border-0 rounded text-start" />

              <p>
                Catalyst Management Services Pvt. Ltd., #25, 4th Floor, AECS
                Layout, RMV 2nd Stage, Ashwathnagar, Bangalore – 560 094.
              </p>
            </div>
            <div className="lg:col-span-4 text-white flex flex-row lg:justify-end justify-start gap-2 py-4 lg:py-0">
              <Link
                href="https://www.linkedin.com/company/solvists?originalSubdomain=in"
                target="_blank"
              >
                <img
                  src="https://s3.ap-south-1.amazonaws.com/com.cg.ivista.mediafiles/g1-image/linked_in.svg"
                  alt=""
                  width={30}
                  height={30}
                />
              </Link>
              <Link href="https://x.com/Solvists" target="_blank">
                <img
                  src="https://s3.ap-south-1.amazonaws.com/com.cg.ivista.mediafiles/g1-image/twiter.svg"
                  alt=""
                  width={25}
                  height={25}
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#6B2E81] flex justify-center ">
        <div className="w-full py-4 text-white lg:w-8/12">
          <div className=" grid grid-cols-1 lg:grid-cols-12 w-full text-start">
            <div className="lg:col-span-8 flex flex-col gap-4 text-start justify-center">
              <p className="mb-0">©2024 G1. All Rights Reserved.</p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Footer
