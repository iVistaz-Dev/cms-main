//import NoblePlasticForm from '@/utils/NoblePlasticForm'
import Link from "next/link"
import React from "react"
import Contact from "../../components/NoblePlasticComponents/Contact"

const Footer = React.forwardRef((props, ref) => {
  return (
    <>
      {/* Our Partners */}
      <div className="flex justify-center py-10 bg-[#05AC8D]">
        <div className="w-full flex flex-col justify-center items-center">
          <p
            className="lg:text-[40px] text-white text-center text-2xl"
            data-aos="fade-down"
          >
            Our Partners
          </p>
          <div className="flex justify-center w-full py-5 mt-4">
            <div
              className="grid lg:grid-cols-10 grid-cols-4 justify-center items-center gap-6 w-full max-w-7xl"
              data-aos="fade-up"
            >
              <div className="lg:col-span-2 col-span-4 flex justify-center">
                <img
                  src="https://s3.ap-south-1.amazonaws.com/com.cg.ivista.mediafiles/nobleplasics/partners-logo/CMS.png"
                  className="w-80 lg:w-full"
                />
              </div>
              <div className="lg:col-span-2 col-span-4 flex justify-center">
                <img
                  src="https://s3.ap-south-1.amazonaws.com/com.cg.ivista.mediafiles/nobleplasics/partners-logo/Swasti.png"
                  className="w-80 lg:w-full"
                />
              </div>
              <div className="lg:col-span-2 col-span-4 flex justify-center">
                <img
                  src="https://s3.ap-south-1.amazonaws.com/com.cg.ivista.mediafiles/nobleplasics/partners-logo/TAM.png"
                  className="w-80 lg:w-full"
                />
              </div>
              <div className="lg:col-span-2 col-span-4 flex justify-center">
                <img
                  src="https://s3.ap-south-1.amazonaws.com/com.cg.ivista.mediafiles/nobleplasics/partners-logo/TIN.png"
                  className="w-80 lg:w-full"
                />
              </div>
              <div className="lg:col-span-2 col-span-4 flex justify-center">
                <img
                  src="https://s3.ap-south-1.amazonaws.com/com.cg.ivista.mediafiles/nobleplasics/partners-logo/Fuzhio.png"
                  className="w-80 lg:w-full"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-center py-10 bg-[#7F3F97]">
        <div className="lg:w-[1140px] w-full lg:p-0 px-4">
          <div className="grid lg:grid-cols-12 grid-cols-1">
            <div
              className="col-span-6 flex flex-col gap-5 justify-center mb-4"
              data-aos="fade-right"
            >
              <img
                src="https://s3.ap-south-1.amazonaws.com/com.cg.ivista.mediafiles/nobleplasics/home/noble_plastic_logo_white.png"
                className="w-[50%]"
              />

              <p className="lg:text-[18px] text-white text-start text-lg">
                This initiative has been supported by Impact Investors and
                fashion retailers.
              </p>
              <p className="lg:text-[18px] text-white text-start text-lg">
                Fuzhio Health and Business Services Pvt. Ltd. No. 25, RMV 2nd
                Stage, AECS Layout,
                <br className="block md:hidden" /> 1st Main Road, Ashwathnagar,{" "}
                <br className="block md:hidden" /> Bangalore – 560094.
              </p>
              <div className="flex flex-col gap-1">
                <p className="text-[18px] text-white text-start font-semibold">
                  For more information please contact:
                </p>
                <p className="text-[18px] text-white text-start ">
                  <Link href="tel:+91 937981 5394" target="_blank">
                    +91 93798 15394
                  </Link>
                </p>
                <p className="text-[18px] text-white text-start ">
                  <Link href="mailto:fuzhio@catalysts.org" target="_blank">
                    fuzhio@catalysts.org
                  </Link>
                </p>
              </div>
            </div>
            <div
              className="col-span-6"
              id="contact"
              ref={ref}
              data-aos="fade-up"
            >
              <Contact />
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-center py-6 bg-[#622F88]">
        <div className="lg:w-[1140px] w-full lg:p-0 px-4">
          <div className="flex space-x-4 flex-row justify-center items-center gap-3">
            <a
              href="/shoonya/noble-plastics/about/"
              className="text-white hover:text-white"
            >
              About
            </a>
            <a href="/shoonya/noble-plastics/approach/" className="text-white ">
              Approach
            </a>
            <a href="/shoonya/noble-plastics/work/" className="text-white ">
              Work
            </a>
            <a href="/shoonya/noble-plastics/impact/" className="text-white ">
              Impact
            </a>
          </div>
        </div>
      </div>
    </>
  )
})

export default Footer
