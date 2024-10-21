import Tab from "@/components/AboutUs/Tab/Tab"
import Footer from "@/components/Footer/Footer"
import Header from "@/components/Header/Header"
import HomePartners from "@/components/Home/HomePartners/HomePartners"
import React from "react"

export function generateMetadata() {
  return {
    title: "Collaborating for Change: Our Partners in Social Impact",
    description:
      "Partnering with diverse stakeholders for over two decades, driving social impact through collaboration with CSOs, banks, foundations, governments, and global agencies.",
    metadataBase: new URL("https://cms.org.in/about-us/partners"),
    openGraph: {
      url: "https://cms.org.in/about-us/partners",
      title: "Collaborating for Change: Our Partners in Social Impact",
      description:
        "Partnering with diverse stakeholders for over two decades, driving social impact through collaboration with CSOs, banks, foundations, governments, and global agencies.",
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
  const desc =
    "Over the last two decades, we have worked with a range of stakeholders, like CSOs, banks, corporate foundations, academic institutions, funding agencies, community organisations, multilateral and bilateral agencies, networks, governments, and non-profits."
  return (
    <>
      <div className="bg-[url('https://s3.ap-south-1.amazonaws.com/com.cg.ivista.mediafiles/cms-origin/cms-website/public/banner/banner04.png')] flex flex-col justify-center md:justify-end h-[420px] md:h-[480px] w-full bg-center bg-cover py-10 md:py-16">
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
