import Footer from "@/components/Footer/Footer"
import Header from "@/components/Header/Header"
import { catalystData } from "@/utils/data"
import Image from "next/image"
import Link from "next/link"
import React from "react"

// const tabs = [
//   {
//     id: 1,
//     tab: "Overview",
//     link: "",
//   },
//   {
//     id: 2,
//     tab: "CLV objectives",
//     link: "",
//   },
// ]

export function generateMetadata() {
  return {
    title: "Overcoming Challenges in Farmer Producer Companies (FPCs)",
    description:
      "Addressing FPCs' challenges: poor produce quality, limited financing, and low shareholder confidence to improve farmer returns and strengthen buyer relations.",
    metadataBase: new URL(
      "https://cms.org.in/social-businesses/catalyst-livelihood-ventures"
    ),
    openGraph: {
      url: "https://cms.org.in/social-businesses/catalyst-livelihood-ventures",
      title: "Overcoming Challenges in Farmer Producer Companies (FPCs)",
      description:
        "Addressing FPCs' challenges: poor produce quality, limited financing, and low shareholder confidence to improve farmer returns and strengthen buyer relations.",
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
        title=" Overcoming Challenges in Farmer Producer Companies (FPCs)"
        description="Addressing FPCs' challenges: poor produce quality, limited financing, and low shareholder confidence to improve farmer returns and strengthen buyer relations."
        path="https://cms.org.in/social-businesses/catalyst-livelihood-ventures"
        metaImage=""
      /> */}
      <div className="bg-[url('https://s3.ap-south-1.amazonaws.com/com.cg.ivista.mediafiles/cms-origin/cms-website/public/socialBusinesses/catalyst/banner01.png')] md:bg-[url('https://s3.ap-south-1.amazonaws.com/com.cg.ivista.mediafiles/cms-origin/cms-website/public/socialBusinesses/catalyst/banner.png')] flex flex-col justify-center md:justify-end h-[420px] md:h-[640px] bg-center bg-cover py-10 md:py-16">
        <Header />
        <div className="ps-2 md:ps-24">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-white text-center sm:text-left">
            Catalyst Livelihood Ventures
          </h1>
        </div>
      </div>

      {/* <Tab tabs={tabs} /> */}

      <div className="max-w-screen-xl mx-auto px-5 my-10 md:my-16">
        <p className="text-lg text-[#1A1A1A]">
          Farmer Producer Companies (FPCs) play a pivotal role in aggregating
          shareholder demand and products. However, the FPCs face significant
          challenges, such as poor quality of produce, unplanned growth of
          producer institutions, limited access to enterprise financing, and
          inadequate support through agencies. These issues have impacted the
          overall reputation of FPCs, making it difficult for them to maintain
          strong buyer relations and ensure higher returns for farmers. As a
          result, the confidence of FPC shareholders in these institutions has
          diminished, leading to reduced engagement. Additionally, smallholder
          farmers often find themselves indebted to traders and are compelled to
          sell their produce at unfavourable margins. Moreover, they employ
          less-than-optimal production techniques, which further impacts their
          cost of production.
        </p>
      </div>

      <div className="flex flex-col lg:flex-row w-full gap-3">
        <div className="w-full lg:w-1/2">
          <Image
            src="https://s3.ap-south-1.amazonaws.com/com.cg.ivista.mediafiles/cms-origin/cms-website/public/socialBusinesses/catalyst/image01.png"
            width={675}
            height={420}
            alt=""
            className="w-full"
          />
        </div>

        <div className="bg-cms-primary text-white text-lg flex items-center px-4 lg:px-16 py-4 lg:py-8 w-full lg:w-1/2">
          <p>
            Catalyst Livelihood Ventures (CLV) Farm is an agri-marketing
            initiative that works with smallholder farmers to improve produce
            quality and procure their commodities, facilitated by the FPC. CLV
            sells these commodities to large buyers and brands at a premium
            generated through value-added activities, ensuring the farmers
            receive fair compensation for their risk and effort while generating
            adequate profits for CMS.
          </p>
        </div>
      </div>

      <div className="max-w-screen-xl mx-auto px-4 sm:px-8 lg:px-20 flex flex-col gap-5 items-center py-8 lg:py-16">
        <div className="flex flex-col items-center gap-4">
          <h3 className="text-cms-primary text-xl sm:text-2xl md:text-3xl font-semibold text-center">
            Following are the CLV objectives
          </h3>
          <div className="border-b border-cms-primary-green w-16 sm:w-20" />
        </div>
        <ul className="flex flex-col gap-5 w-full">
          {catalystData.map((item) => (
            <li
              key={item.id}
              className={`flex items-center gap-5 ${
                catalystData.length !== item.id ? "border-b border-dashed" : ""
              } pb-4`}
            >
              <div className="flex-shrink-0">
                <Image
                  src={item.iconUrl}
                  width={92}
                  height={92}
                  alt={item.desc}
                />
              </div>
              <p className="text-base sm:text-lg">{item.desc}</p>
            </li>
          ))}
        </ul>
      </div>

      <div className="max-w-screen-xl mx-auto flex flex-col items-center gap-10 px-4 sm:px-8 lg:px-10 mb-16">
        <p className="text-center w-full sm:w-3/4 text-base sm:text-lg lg:text-xl">
          CLV offers a comprehensive package of services, including market
          channel access, capital availability, and capacity building for FPCs.
          The goal is to enable FPCs to handle higher business volumes and
          progress through the value chain, resulting in higher premiums for
          their produce.
        </p>
        <Link href="/contact-us">
          <button className="px-6 py-3 bg-cms-primary text-white text-base sm:text-lg">
            Partner with us
          </button>
        </Link>
      </div>

      <div className="mt-auto">
        <Footer />
      </div>
    </>
  )
}

export default page
