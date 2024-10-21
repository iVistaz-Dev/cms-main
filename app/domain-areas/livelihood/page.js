import Ethos from "@/components/DomainAreas/Livelihood/Ethos/Ethos"
import OurApproaches from "@/components/DomainAreas/Livelihood/OurApproaches/OurApproaches"
import Overview from "@/components/DomainAreas/Overview/Overview"
import WeWork from "@/components/DomainAreas/Livelihood/WeWork/WeWork"
import Image from "next/image"
import React from "react"
import Header from "@/components/Header/Header"
import RelatedResources from "@/components/RelatedResources/RelatedResources"
import InvestingForImpact from "@/components/DomainAreas/Livelihood/InvestingForImpact/InvestingForImpact"
import Footer from "@/components/Footer/Footer"

export const tabs = [
  {
    id: 1,
    tab: "Overview",
    link: "overview",
  },
  {
    id: 2,
    tab: "Our Ethos",
    link: "ourEthos",
  },
  {
    id: 3,
    tab: "Our Approaches",
    link: "ourApproaches",
  },
  {
    id: 4,
    tab: "How We Work",
    link: "howDoWeWork",
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
    title: "Livelihood | Improving livelihoods of vulnerable communities",
    description:
      "Livelihood platform works toward supporting enterprises, vulnerable communities with healthcare and first mile workers with their wellbeing",
    metadataBase: new URL("https://cms.org.in/domain-areas/livelihood"),
    openGraph: {
      url: "https://cms.org.in/domain-areas/livelihood",
      title: "Livelihood | Improving livelihoods of vulnerable communities",
      description:
        "Livelihood platform works toward supporting enterprises, vulnerable communities with healthcare and first mile workers with their wellbeing",
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
    "We work with vulnerable people who operate as small producers (farms, forests, allied industries, fisheries and MSMEs) to enhance their livelihoods. Our overall objective is to promote wealthy, resilient and responsible small producers at a national scale through inclusive entrepreneurship. Our approach to build wealth for small producers focuses on having effective market engagement and co-creating business solutions that benefit both businesses and small producers."
  return (
    <>
      <div className="bg-[url('https://s3.ap-south-1.amazonaws.com/com.cg.ivista.mediafiles/cms-origin/cms-website/public/domainAreas/livelihood/banner.png')] h-[420px] md:h-[640px] bg-cover bg-center pt-5 flex flex-col">
        <div className="w-full">
          <Header />
        </div>
        <div className="md:ps-24 flex justify-center md:justify-start items-end h-full">
          <div className="flex justify-center items-center h-40 w-44  md:h-44 md:w-64 bg-white">
            <Image
              src="https://s3.ap-south-1.amazonaws.com/com.cg.ivista.mediafiles/cms-origin/cms-website/public/domainAreas/livelihood/logo.png"
              height={142}
              width={153}
              alt="logo"
            />
          </div>
        </div>
      </div>

      {/* <Tab tabs={tabs} /> */}
      <Overview desc={overviewDesc} />
      <Ethos />
      <OurApproaches />
      <WeWork />

      <div className="w-full">
        <Image
          src="https://s3.ap-south-1.amazonaws.com/com.cg.ivista.mediafiles/cms-origin/cms-website/public/domainAreas/livelihood/banner02.png"
          width={1366}
          height={360}
          alt="banner"
          className="w-full"
        />
      </div>

      <InvestingForImpact />

      <div className="max-w-screen-xl mx-auto my-5 md:my-16">
        <div className="flex flex-col gap-6 px-4">
          <p className="text-[#404040] text-lg w-full md:w-10/12">
            We work towards the holistic development of small producers and to
            pave the way to a brighter future. All our work is geared towards
            achieving the UN SDGs, specifically Goals 1, 2, 5, 10, 11, and 17.
          </p>
          <Image
            src="https://s3.ap-south-1.amazonaws.com/com.cg.ivista.mediafiles/cms-origin/cms-website/public/domainAreas/livelihood/sdg.png"
            width={720}
            height={122}
            alt=""
          />
        </div>
      </div>

      <RelatedResources />

      <div className="mt-auto">
        <Footer />
      </div>
    </>
  )
}

export default page
