import DomainAreas from "@/components/DomainAreas/DomainAreas"
import Footer from "@/components/Footer/Footer"
import Header from "@/components/Header/Header"
import Tab from "@/components/Tab/Tab"
import React from "react"

export const tabs = [
  {
    id: 1,
    tab: "Livelihood",
    link: "livelihood",
  },
  {
    id: 2,
    tab: "Health",
    link: "health",
  },
  {
    id: 3,
    tab: "Climate Change",
    link: "climateChange",
  },
  {
    id: 4,
    tab: "Wellbeing for Workforce",
    link: "workforceWellbeing",
  },
  {
    id: 5,
    tab: "ESG",
    link: "esg",
  },
]

export function generateMetadata() {
  return {
    title:
      "Supporting Enterprises & Vulnerable Communities through Domain Areas",
    description:
      "Expertise in enterprise support, healthcare, and first-mile worker wellbeing, focusing on livelihood, health, ESG, and climate change resilience.",
    metadataBase: new URL("https://cms.org.in/domain-areas"),
    openGraph: {
      url: "https://cms.org.in/domain-areas",
      title:
        "Supporting Enterprises & Vulnerable Communities through Domain Areas",
      description:
        "Expertise in enterprise support, healthcare, and first-mile worker wellbeing, focusing on livelihood, health, ESG, and climate change resilience.",
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
  return (
    <>
      <div className="bg-[url('/domainAreas/banner.png')] flex flex-col justify-center md:justify-end h-[420px] md:h-[480px] w-full bg-center bg-cover py-10 md:py-16">
        <Header />
        <div className="ps-2 md:ps-24">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-white text-center sm:text-left">
            Domain Areas
          </h1>
        </div>
      </div>

      <div className="mb-10">
        <Tab tabs={tabs} />
      </div>

      <div className="text-center mb-5">
        <h2 className="text-cms-primary-black text-lg md:text-2xl">
          We have extensive experience in supporting enterprises, vulnerable
          communities <br className="hidden md:block" /> with healthcare, and
          first-mile workers with their wellbeing.
        </h2>
      </div>

      <div className="">
        <DomainAreas />
      </div>

      <div className="mt-auto">
        <Footer />
      </div>
    </>
  )
}

export default page
