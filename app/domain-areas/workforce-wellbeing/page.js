import Overview from "@/components/DomainAreas/Overview/Overview"
import WorkforceWellbeing from "@/components/DomainAreas/WorkforceWellbeing/WorkforceWellbeing"
import Footer from "@/components/Footer/Footer"
import Header from "@/components/Header/Header"
import RelatedResources from "@/components/RelatedResources/RelatedResources"
import Image from "next/image"
import React from "react"
import Seo from "../../../components/Seo/Seo"
export const tabs = [
  {
    id: 1,
    tab: "Overview",
    link: "overview",
  },
  {
    id: 2,
    tab: "Our Presence",
    link: "ourPresence",
  },
  {
    id: 3,
    tab: "Related Resources",
    link: "relatedResources",
  },
]


const page = () => {
  
  const seoField = {
    title: "Making worker wellbeing a reality | Wellbeing for Workforce",
    description:
      "We strive to make worker wellbeing a reality through large scale implementation of transformation models",
    path: "domain-areas/workforce-wellbeing",
    metaImage: "/social.png",
    pageType: "WebSite"
  };


  const overviewDesc =
    "Our Wellbeing for Workforce practice strives to make wellbeing a reality for first-mile workers and reach 100 million workers by 2030. We are committed to the Wellbeing of the Workforce, their families, and communities."
  return (
    <>
      <div className="bg-[url('https://s3.ap-south-1.amazonaws.com/com.cg.ivista.mediafiles/cms-origin/cms-website/public/domainAreas/workforce/banner.png')] h-[420px] md:h-[640px] bg-center bg-cover pt-5 flex flex-col">
        <div className="w-full">
          <Seo {...seoField}/>
          <Header />
        </div>
        <div className="md:ps-24 flex justify-center md:justify-start items-end h-full">
          <div className="flex justify-center items-center h-40 w-44  md:h-44 md:w-64 bg-white">
            <Image
              src="https://s3.ap-south-1.amazonaws.com/com.cg.ivista.mediafiles/cms-origin/cms-website/public/domainAreas/workforce/logo.png"
              height={256}
              width={170}
              alt="logo"
              className="w-full"
            />
          </div>
        </div>
      </div>

      {/* <Tab tabs={tabs} /> */}
      <Overview desc={overviewDesc} />
      <WorkforceWellbeing />
      <RelatedResources />

      <div className="mt-auto">
        <Footer />
      </div>
    </>
  )
}

export default page
