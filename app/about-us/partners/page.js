import Tab from "@/components/AboutUs/Tab/Tab"
import Footer from "@/components/Footer/Footer"
import Header from "@/components/Header/Header"
import HomePartners from "@/components/Home/HomePartners/HomePartners"
import React from "react"
import Seo from "../../../components/Seo/Seo"

const page = () => {
  const seoField = {
    title: "Collaborating for Change: Our Partners in Social Impact",
    description:
      "Partnering with diverse stakeholders for over two decades, driving social impact through collaboration with CSOs, banks, foundations, governments, and global agencies.",
    path: "about-us/partners",
    metaImage: "/social.png",
    pageType: "WebSite",
  }
  const desc =
    "Over the last two decades, we have worked with a range of stakeholders, like CSOs, banks, corporate foundations, academic institutions, funding agencies, community organisations, multilateral and bilateral agencies, networks, governments, and non-profits."
  return (
    <>
      <div className="bg-[url('/banner/banner04.png')] flex flex-col justify-center md:justify-end h-[420px] md:h-[480px] w-full bg-center bg-cover py-10 md:py-16">
        <Seo {...seoField} />
        <Header />
        <div className="ps-2 md:ps-24">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-white text-center sm:text-left">
            Partners
          </h1>
        </div>
      </div>

      <Tab heading="Collaborating for Change" desc={desc} />

      <div>
        <HomePartners />
      </div>
      <div className="mt-auto">
        <Footer />
      </div>
    </>
  )
}

export default page
