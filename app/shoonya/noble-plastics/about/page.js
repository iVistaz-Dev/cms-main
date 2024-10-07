import React from "react"
import AboutComponents from "../../../../components/NoblePlasticComponents/AboutUsComponents"
import NextSeo from "@/components/Seo/Seo"

const page = () => {
  return (
    <>
      <NextSeo
        title="Eco-social initiative that improves plastic waste management"
        description="An eco-social initiative by the Catalyst Group, Noble Plastics,  has a vision to recycle plastic waste effectively and is backed by professionals who are passionate to bring a change."
        path="https://cms.org.in/shoonya/noble-plastics/about"
        metaImage=""
      />

      <div>
        <AboutComponents />
      </div>
    </>
  )
}

export default page
