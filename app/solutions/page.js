import Footer from "@/components/Footer/Footer"
import Header from "@/components/Header/Header"
import ScaleAccelerators from "@/components/ScaleAccelerators/ScaleAccelerators"
import Tab from "@/components/Tab/Tab"
import React from "react"
import Seo from "../../components/Seo/Seo"
export const tabs = [
  {
    id: 1,
    tab: "Design for Success",
    link: "designForSuccess",
  },
  {
    id: 2,
    tab: "Evidence for Change",
    link: "evidenceForChange",
  },
  {
    id: 3,
    tab: "Implement for Scale",
    link: "implementForScale",
  },
]



const page = () => {
  
  const seoField = {
    title: "Effective Solutions for Scalable and Sustainable Development",
    description:
      "Collaborate with change agents to design, implement, and scale evidence-based solutions that drive impactful, sustainable growth and enhance social equity.",  
    path: "solutions",
    metaImage: "/social.png",
    pageType: "WebSite"
  };
  return (
    <>
      {/* <NextSeo
        title="Effective Solutions for Scalable and Sustainable Development"
        description="Collaborate with change agents to design, implement, and scale evidence-based solutions that drive impactful, sustainable growth and enhance social equity."
        path="https://cms.org.in/solutions"
        metaImage=""
      /> */}
      <div className="bg-[url('https://s3.ap-south-1.amazonaws.com/com.cg.ivista.mediafiles/cms-origin/cms-website/public/scaleAccelerators/banner.png')] flex flex-col justify-center md:justify-end h-[420px] md:h-[480px] bg-center bg-cover py-10 md:py-16">
        <Seo {...seoField}/>
        <Header />
        <div className="ps-2 md:ps-24">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-white text-center sm:text-left">
            Solutions
          </h1>
        </div>
      </div>

      <div className="mb-10 md:mb-16">
        <Tab tabs={tabs} />
      </div>

      <div className="">
        <div className="text-center mb-5 px-4 sm:px-6 lg:px-8">
          <h2 className="text-cms-primary-black text-lg sm:text-xl md:text-2xl">
            Collaborate with change agents to drive impactful, scalable, and{" "}
            <br className="hidden md:block" />
            sustainable development. We address complex issues with integrated
            solutions, <br className="hidden md:block" /> fostering partnerships
            that enhance social equity and growth.
          </h2>
        </div>

        <div className="">
          <ScaleAccelerators />
        </div>
      </div>

      <div className="mt-auto">
        <Footer />
      </div>
    </>
  )
}

export default page
