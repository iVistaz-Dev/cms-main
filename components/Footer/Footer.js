import { linkedInIcon, twitter } from "@/utils/icon"
import Image from "next/image"
import Link from "next/link"
import React from "react"

const Footer = () => {
  return (
    <footer>
      <div className="bg-cms-primary py-4 text-white text-center">
        <p className="text-xl">
          To learn more about our work:{" "}
          <a href="mailto:contactus@catalysts.org" className="">
            contactus@catalysts.org
          </a>
        </p>
      </div>
      <div className="bg-cms-light-black py-14">
        <div className="max-w-screen-xl mx-auto flex flex-col gap-7 text-white px-2">
          <Image src="/footer/logo.png" width={127} height={53} alt="logo" />

          <div className="max-w-screen-xl mx-auto px-2">
            <div className="grid grid-cols-2 md:grid-cols-5 gap-8 justify-between">
              <ul className="text-[#CBCBCB] space-y-3">
                <h5 className="text-white text-lg">About Us</h5>
                <div className="border-b border-[#98D5C5] w-28 sm:w-52 mb-3" />
                <li>
                  <Link href="/about-us/vision" className="hover:underline">
                    Vision
                  </Link>
                </li>
                <li>
                  <Link href="/about-us/team" className="hover:underline">
                    Our Team
                  </Link>
                </li>
                <li>
                  <Link href="/about-us/incubatees" className="hover:underline">
                    Our Incubatees
                  </Link>
                </li>
                <li>
                  <Link href="/about-us/partners" className="hover:underline">
                    Our Partners
                  </Link>
                </li>
                <li>
                  <Link href="/careers" className="hover:underline">
                    Careers
                  </Link>
                </li>
              </ul>

              <ul className="text-[#CBCBCB] space-y-3">
                <h5 className="text-white text-lg">Solutions</h5>
                <div className="border-b border-[#98D5C5] w-28 sm:w-52 mb-3" />
                <li>
                  <Link
                    href="/solutions/design-for-success"
                    className="hover:underline"
                  >
                    Design for Success
                  </Link>
                </li>
                <li>
                  <Link
                    href="/solutions/evidence-for-change"
                    className="hover:underline"
                  >
                    Evidence for Change
                  </Link>
                </li>
                <li>
                  <Link
                    href="/solutions/implement-for-scale"
                    className="hover:underline"
                  >
                    Implement for Scale
                  </Link>
                </li>
              </ul>

              <ul className="text-[#CBCBCB] space-y-3">
                <h5 className="text-white text-lg">Domain Areas</h5>
                <div className="border-b border-[#98D5C5] w-28 sm:w-52 mb-3" />
                <li>
                  <Link
                    href="/domain-areas/livelihood"
                    className="hover:underline"
                  >
                    Livelihood
                  </Link>
                </li>
                <li>
                  <Link href="/domain-areas/health" className="hover:underline">
                    Health
                  </Link>
                </li>
                <li>
                  <Link
                    href="/domain-areas/climate-change"
                    className="hover:underline"
                  >
                    Climate Change
                  </Link>
                </li>
                <li>
                  <Link
                    href="/domain-areas/workforce-wellbeing"
                    className="hover:underline"
                  >
                    Wellbeing For Workforce
                  </Link>
                </li>
                <li>
                  <Link href="/esg" className="hover:underline">
                    ESG
                  </Link>
                </li>
              </ul>

              <ul className="text-[#CBCBCB] space-y-3">
                <h5 className="text-white text-lg">Social Businesses</h5>
                <div className="border-b border-[#98D5C5] w-28 sm:w-52 mb-3" />
                <li>
                  <Link
                    href="/social-businesses/catalyst-livelihood-ventures"
                    className="hover:underline"
                  >
                    Catalyst Livelihood Venture
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://cms.org.in/business-catalyst/"
                    className="hover:underline"
                  >
                    Business Catalyst
                  </Link>
                </li>
                <li>
                  <Link href="/shoonya" className="hover:underline">
                    Shoonya
                  </Link>
                </li>
                <li>
                  <Link href="/ship" className="hover:underline">
                    SHIP
                  </Link>
                </li>
                {/* <li>
                  <Link href="/v-life" className="hover:underline">
                    V-Life
                  </Link>
                </li> */}
              </ul>

              <ul className="text-[#CBCBCB] space-y-3">
                <h5 className="text-white text-lg">
                  Collaborative Initiatives
                </h5>
                <div className="border-b border-[#98D5C5] w-28 sm:w-52 mb-3" />
                <li>
                  <Link
                    href="https://communityactioncollab.org/"
                    target="_blank"
                    className="hover:underline"
                  >
                    Community Action Collab
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://catalysingsocialimpact.in/"
                    target="_blank"
                    className="hover:underline"
                  >
                    Catalysing Social Impact
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-y border-[#C6C6C6] py-4 flex flex-wrap justify-between items-center px-2">
            <ul className="flex gap-5 flex-wrap">
              <li>
                <Link href="/contact-us" className="hover:underline">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="/insights" className="hover:underline">
                  Insights
                </Link>
              </li>
              <li>
                <Link href="/privacy-policy" className="hover:underline">
                  Privacy Policy
                </Link>
              </li>
              {/* <li>
                <Link href="#" className="hover:underline">
                  Sitemap
                </Link>
              </li> */}
            </ul>

            <ul className="flex items-center gap-5 md:mt-0 mt-2">
              <li className="">Follow Us:</li>
              <li>
                <Link
                  href="https://www.linkedin.com/company/solvists/"
                  target="_blank"
                  className="text-2xl"
                >
                  {linkedInIcon}
                </Link>
              </li>
              <li>
                <Link
                  href="https://x.com/Solvists?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor"
                  target="_blank"
                  className="text-2xl"
                >
                  {twitter}
                </Link>
              </li>
            </ul>
          </div>

          {/* <div className="space-y-3 px-2">
            <p className="text-white">Office Address:</p>
            <p className="text-[#CBCBCB]">
              Catalyst Management Services Pvt. Ltd., #25, 4th Floor, AECS
              Layout, <br className="hidden md:block" />
              RMV 2nd Stage, Ashwathnagar, Bangalore – 560 094.
            </p>
          </div> */}
        </div>
      </div>
      <div className="bg-[#000000] py-4 text-white text-center">
        <p className="text-[#CBCBCB]">
          © 2024 Catalyst Management Services Pvt. Ltd.{" "}
          <br className="block md:hidden" /> All rights reserved.
        </p>
      </div>
    </footer>
  )
}

export default Footer
