import React from "react"
import ImpactComponents from "../../../../components/NoblePlasticComponents/ImpactComponents"
import NextSeo from "@/components/Seo/Seo"

const page = () => {
  return (
    <>
      <NextSeo
        title="Achieving social development through synergising people"
        description="We collaborate with like-minded partners to facilitate the creation of a circular economy and are on a  path to achieve our mission of synergising people, planet and profits."
        path="https://cms.org.in/shoonya/noble-plastics/impact"
        metaImage=""
      />

      <div>
        <ImpactComponents />
      </div>
    </>
  )
}

export default page
