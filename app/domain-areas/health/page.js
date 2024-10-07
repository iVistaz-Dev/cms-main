import AlliancesAndPlatforms from "@/components/DomainAreas/Health/AlliancesAndPlatforms/AlliancesAndPlatforms"
import KeyDomain from "@/components/DomainAreas/Health/KeyDomain/KeyDomain"
import KeyInitiatives from "@/components/DomainAreas/Health/KeyInitiatives/KeyInitiatives"
import KeyInitiatives02 from "@/components/DomainAreas/Health/KeyInitiatives/KeyInitiatives02/KeyInitiatives02"

import Overview from "@/components/DomainAreas/Overview/Overview"
import Footer from "@/components/Footer/Footer"
import Header from "@/components/Header/Header"
import RelatedResources from "@/components/RelatedResources/RelatedResources"
import NextSeo from "@/components/Seo/Seo"
import Tab from "@/components/Tab/Tab"
import Image from "next/image"
import React from "react"

export const tabs = [
  {
    id: 1,
    tab: "Overview",
    link: "overview",
  },
  {
    id: 2,
    tab: "Key Domains",
    link: "keyDomains",
  },
  {
    id: 3,
    tab: "Key Initiatives",
    link: "keyInitiatives",
  },
  {
    id: 4,
    tab: "Alliances and Platforms",
    link: "alliancesAndPlatforms",
  },
  {
    id: 5,
    tab: "Investing for Impact",
    link: "investingForImpact",
  },
  {
    id: 6,
    tab: "Related Resources",
    link: "relatedResources",
  },
]

export function generateMetadata() {
  return {
    title: "Strengthening health and community systems | Health",
    description:
      "We focus on strengthening health and community systems to achieve Universal Health Coverage, health equity quality primary care for all",
    metadataBase: new URL("https://cms.org.in/domain-areas/health"),
    openGraph: {
      url: "https://cms.org.in/domain-areas/health",
      title: "Strengthening health and community systems | Health",
      description:
        "We focus on strengthening health and community systems to achieve Universal Health Coverage, health equity quality primary care for all",
      images: [
        {
          url: "/social.png",
          width: 800,
          height: 600,
          alt: "CMS",
        },
      ],
    },
  }
}

const page = () => {
  const overviewDesc =
    "We have 25 years of experience as a global social impact consulting firm and use a 360-degree approach that improves the well-being of vulnerable communities. CMS and its sister organisation, Swasti, a global south public health agency, partner with communities at the last mile to help them realise their potential through health and well-being. We work towards achieving Universal Health Care and Global Health Security through a Climate x Health centric approach and ensure our programmes are climate-responsive."
  return (
    <>
      {/* <NextSeo
        title="Strengthening health and community systems | Health"
        description="We focus on strengthening health and community systems to achieve Universal Health Coverage, health equity quality primary care for all"
        path="https://cms.org.in/domain-areas/health"
        metaImage=""
      /> */}
      <div className="bg-[url('https://s3.ap-south-1.amazonaws.com/com.cg.ivista.mediafiles/cms-origin/cms-website/public/domainAreas/health/banner.png')] h-[420px] md:h-[640px] bg-center bg-cover pt-5 flex flex-col">
        <div className="w-full">
          <Header />
        </div>
        <div className="md:ps-24 flex justify-center md:justify-start items-end h-full">
          <div className="flex justify-center items-center h-40 w-44  md:h-44 md:w-64 bg-white">
            <Image
              src="https://s3.ap-south-1.amazonaws.com/com.cg.ivista.mediafiles/cms-origin/cms-website/public/domainAreas/health/logo.png"
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

      <div className="max-w-screen-xl mx-auto flex flex-col md:flex-row gap-5 md:gap-10 px-3">
        <div className="flex">
          <div className="bg-cms-primary w-24 h-24 flex items-center justify-center">
            <Image
              src="https://s3.ap-south-1.amazonaws.com/com.cg.ivista.mediafiles/cms-origin/cms-website/public/domainAreas/health/icon01.png"
              width={56}
              height={57}
              alt=""
            />
          </div>
          <div className="bg-cms-secondary text-center flex flex-col items-center justify-center px-5">
            <p className="font-semibold">Community System Strengthening:</p>
            <p>People-centric outcomes through Swasti.</p>
          </div>
        </div>

        <div className="flex">
          <div className="bg-cms-primary w-24 h-24 flex items-center justify-center">
            <Image
              src="https://s3.ap-south-1.amazonaws.com/com.cg.ivista.mediafiles/cms-origin/cms-website/public/domainAreas/health/icon02.png"
              width={56}
              height={57}
              alt=""
            />
          </div>
          <div className="bg-cms-secondary text-center flex flex-col items-center justify-center px-5">
            <p className="font-semibold">Health System Strengthening:</p>
            <p>Institution and policy outcomes through CMS.</p>
          </div>
        </div>
      </div>

      <KeyDomain />
      <KeyInitiatives />
      <div className="bg-cms-secondary-green">
        <KeyInitiatives02 />
      </div>
      <AlliancesAndPlatforms />
      <RelatedResources />

      <div className="mt-auto">
        <Footer />
      </div>
    </>
  )
}

export default page
