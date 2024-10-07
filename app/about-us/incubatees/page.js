import Incubatees from "@/components/AboutUs/Incubatees/Incubatees"
import Tab from "@/components/AboutUs/Tab/Tab"
import Footer from "@/components/Footer/Footer"
import Header from "@/components/Header/Header"
import React from "react"

export function generateMetadata() {
  return {
    title: "Our Incubatees | CMS' Innovations and Entrepreneurial Ventures",
    description:
      "Explore CMS' incubatees and their groundbreaking ventures in technology, entrepreneurship, and social impact.",
    metadataBase: new URL("https://cms.org.in/about-us/incubatees"),
    openGraph: {
      url: "https://cms.org.in/about-us/incubatees",
      title: "Our Incubatees | CMS' Innovations and Entrepreneurial Ventures",
      description:
        "Explore CMS' incubatees and their groundbreaking ventures in technology, entrepreneurship, and social impact.",
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
    "Some of our incubated ideas have become full-fledged organisations, which operate as our sister organisations, but have grown to be significant development players in their own right."
  return (
    <>
      {/* <NextSeo
        title="Our Incubatees | CMS' Innovations and Entrepreneurial Ventures"
        description="Explore CMS' incubatees and their groundbreaking ventures in technology, entrepreneurship, and social impact."
        path="https://cms.org.in/about-us/incubatees"
        metaImage=""
      /> */}
      <div className="bg-[url('https://s3.ap-south-1.amazonaws.com/com.cg.ivista.mediafiles/cms-origin/cms-website/public/banner/banner03.png')] flex flex-col justify-center md:justify-end h-[420px] md:h-[480px] w-full bg-center bg-cover py-10 md:py-16">
        <Header />
        <div className="ps-2 md:ps-24">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-white text-center sm:text-left">
            Incubatees
          </h1>
        </div>
      </div>

      {/* <div className="text-center flex flex-col items-center gap-3 mb-10">
        <p className="text-cms-primary-black text-lg">About CMS</p>
        <h2 className="text-cms-primary-black text-2xl">
          We create an impact that is transformational, <br /> driving
          sustainable and scalable equity.
        </h2>
      </div> */}

      <Tab heading="Incubation to Impact" desc={desc} />

      <div>
        <div className="max-w-screen-xl mx-auto">
          <Incubatees />
        </div>
      </div>

      <div className="mt-auto">
        <Footer />
      </div>
    </>
  )
}

export default page
