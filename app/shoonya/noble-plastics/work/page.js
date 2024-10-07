import React from "react"
import WorkComponents from "../../../../components/NoblePlasticComponents/WorkComponents"
import NextSeo from "@/components/Seo/Seo"
const page = () => {
  return (
    <>
      <NextSeo
        title="Working to create a Circular Economy of plastic"
        description="At Noble plastics we are focused on results that will help us achieve the UN SDGs and create a Circular Economy. Learn more."
        path="https://cms.org.in/shoonya/noble-plastics/work"
        metaImage=""
      />

      <div>
        <WorkComponents />
      </div>
    </>
  )
}

export default page
