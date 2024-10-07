import Footer from "@/components/Footer/Footer"
import Header from "@/components/Header/Header"
import ImplementForScale from "@/components/ScaleAccelerators/ImplementForScale/ImplementForScale"
import OurOffers from "@/components/ScaleAccelerators/OurOffers/OurOffers"
import RapidFramework from "@/components/ScaleAccelerators/RapidFramework/RapidFramework"
import { elementsData } from "@/utils/data"
import Image from "next/image"
import React from "react"

export const tabs = [
  {
    id: 1,
    tab: "Introduction",
    link: "introduction",
  },
  {
    id: 2,
    tab: "Why Worry About Implementation?",
    link: "WhyWorry",
  },
  {
    id: 3,
    tab: "RAPID Framework",
    link: "rapidFramework",
  },
  {
    id: 4,
    tab: "Elements of Successful Implementation",
    link: "elementsOfSuccessful",
  },
  {
    id: 5,
    tab: "Our Offers",
    link: "ourOffers",
  },
]

export function generateMetadata() {
  return {
    title:
      "Power of Effective Execution: Ensuring Success in Innovation Implementation",
    description:
      "Explore the challenges of implementing innovative ideas at scale and how the RAPID framework can ensure successful execution for sustainable impact.",
    metadataBase: new URL("https://cms.org.in/solutions/implement-for-scale"),
    openGraph: {
      url: "https://cms.org.in/solutions/implement-for-scale",
      title:
        "Power of Effective Execution: Ensuring Success in Innovation Implementation",
      description:
        "Explore the challenges of implementing innovative ideas at scale and how the RAPID framework can ensure successful execution for sustainable impact.",
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
      {/* <NextSeo
        title="Power of Effective Execution: Ensuring Success in Innovation Implementation"
        description="Explore the challenges of implementing innovative ideas at scale and how the RAPID framework can ensure successful execution for sustainable impact."
        path="https://cms.org.in/solutions/implement-for-scale"
        metaImage=""
      /> */}
      <div className="bg-[url('/scaleAccelerators/implementForScale/banner.png')] h-[420px] md:h-[640px] bg-center bg-cover pt-5 flex flex-col">
        <div className="w-full">
          <Header />
        </div>
        {/* <div className="md:ps-24 flex justify-center md:justify-start mt-14 sm:mt-24 md:mt-32 lg:mt-48 px-2 md:px-0">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-white">
            Implement for Scale
          </h1>
        </div> */}
        <div className="md:ps-24 flex flex-col items-center md:items-start justify-end h-full gap-10 md:gap-20">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-white">
            Implement for Scale
          </h1>
          <div className="">
            <Image
              src="/scaleAccelerators/implementForScale/logo.png"
              height={142}
              width={153}
              alt="logo"
            />
          </div>
        </div>
      </div>

      {/* <Tab tabs={tabs} /> */}

      <div className="flex flex-col items-center space-y-3 mt-14">
        <h2 className="text-3xl font-semibold text-center text-cms-primary">
          Unlocking the Power of Effective Execution
        </h2>
        <div className="border-b-2 border-cms-primary-green w-20" />
      </div>

      <div className="max-w-screen-xl mx-auto mt-14 mb-8 px-4 sm:px-6 lg:px-8">
        <div className="space-y-4 text-cms-primary-black text-lg w-full lg:w-4/5 mx-auto">
          <p className="font-semibold">Introduction</p>
          <p>
            In today’s fast-paced and competitive business landscape, innovation
            and new ideas are constantly being generated. When it comes to
            implementing innovative ideas and interventions, achieving desirable
            outcomes can be a daunting task. However, simply coming up with a
            groundbreaking concept is not enough to ensure success. The true
            measure of an innovation lies in its implementation and its ability
            to deliver tangible results. Unfortunately, many well-designed
            projects fail when implemented at scale. This begs the question: Why
            does such a gap exist between what we know and what we actually do?
            The answer lies in the complex nature of implementation and the
            contextual factors that influence it. In this article, we will
            explore the reasons behind implementation failures, the costs
            associated with such failures, and the key factors that contribute
            to successful implementation.
          </p>
        </div>
      </div>

      <ImplementForScale />

      <RapidFramework />

      <div className="bg-[#00AE8E] mt-5 mb-16">
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-20 flex flex-col gap-5 items-center py-10">
          <div className="flex flex-col items-center gap-4">
            <h3 className="text-white text-2xl md:text-3xl font-semibold text-center">
              Elements of Successful Implementation
            </h3>
            <div className="border-b border-cms-primary w-16 md:w-20" />
            <p className="text-base md:text-lg text-white text-center w-full sm:w-10/12">
              Successful implementation requires a comprehensive approach that
              addresses various aspects of the process. The following elements
              play a crucial role in achieving the desired results:
            </p>
          </div>
          <ul className="flex flex-col gap-5 text-white w-full sm:w-10/12 mt-5">
            {elementsData.map((item) => {
              return (
                <li
                  key={item.id}
                  className={`${
                    elementsData.length !== item.id
                      ? "border-b border-dashed"
                      : ""
                  } pb-4`}
                >
                  <div className="flex flex-col sm:flex-row items-center gap-5">
                    <Image
                      src={item.iconUrl}
                      width={100}
                      height={100}
                      alt=""
                      className={`w-24 h-24 ${
                        item.id % 2 === 0 ? "sm:order-2" : "sm:order-1"
                      }`}
                    />
                    <div
                      className={`${
                        item.id % 2 === 0 ? "sm:order-1" : "sm:order-2"
                      } space-y-2 text-center sm:text-left`}
                    >
                      <h3 className="text-lg md:text-xl sm:text-2xl font-semibold">
                        {item.title}
                      </h3>
                      <p className="text-sm md:text-base sm:text-lg">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                </li>
              )
            })}
          </ul>
        </div>
      </div>

      <OurOffers />

      <div className="mt-auto">
        <Footer />
      </div>
    </>
  )
}

export default page
