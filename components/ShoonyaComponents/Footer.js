import {
  facebookIcon,
  instagramIcon,
  linkedInIcon,
  twitter,
} from "@/utils/icon"
import Link from "next/link"
import React from "react"

const Footer = () => {
  return (
    <>
      <div className="flex flex-col md:flex-row justify-center md:justify-between items-center bg-[#7F3F97] p-4 lg:py-6 lg:px-16">
        <div className="flex flex-col lg:flex-row lg:items-center lg:gap-4 gap-2 w-full text-white">
          <p className="text-center lg:text-left">For more details contact:</p>
          <div className="flex flex-col md:flex-row items-center gap-2 md:gap-3">
            <div className="flex items-center gap-2">
              <img
                src="https://s3.ap-south-1.amazonaws.com/com.cg.ivista.mediafiles/shoonya/phone.svg"
                className="w-5"
              />
              <Link
                href="tel:+919590245050"
                target="_blank"
                className="text-white"
              >
                +91 9590 245 050
              </Link>
            </div>
            <div className="flex items-center gap-2">
              <img
                src="https://s3.ap-south-1.amazonaws.com/com.cg.ivista.mediafiles/shoonya/email.svg"
                className="w-5"
              />
              <Link
                href="mailto:vishrut@catalysts.org"
                target="_blank"
                className="text-white"
              >
                vishrut@catalysts.org
              </Link>
            </div>
          </div>
        </div>
        <ul className="flex gap-3 items-center justify-center md:justify-start text-slate-200 text-2xl mt-4 md:mt-0">
          <li>
            <Link
              href="https://www.linkedin.com/company/shoonya-net-zero/about/"
              target="_blank"
            >
              {linkedInIcon}
            </Link>
          </li>
          <li>
            <Link
              href="https://www.facebook.com/people/Shoonya-Net-Zero/61565082539336/"
              target="_blank"
            >
              {facebookIcon}
            </Link>
          </li>
          <li>
            <Link
              href="https://www.instagram.com/shoonya_netzero/"
              target="_blank"
            >
              {instagramIcon}
            </Link>
          </li>
          <li>
            <Link href="https://x.com/Shoonya_NetZero" target="_blank">
              {twitter}
            </Link>
          </li>
        </ul>
      </div>
    </>
  )
}

export default Footer
