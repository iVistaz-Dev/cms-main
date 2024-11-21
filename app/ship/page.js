import React from "react"
import Ship from "../../components/ShipComponent/Ship"
import Seo from "../../components/Seo/Seo"
const seoField = {
  title: "One-Stop Solution for Social Healthcare Enterprises | SHIP",
    description:
      "This platform offers an integrated solution for social healthcare enterprises to access non-clinical services like financing, procurement, maintenance, technology, etc. Read more.",
  path: "ship",
  metaImage: "/social.png",
  pageType: "WebSite",
}


export default function page() {
  return (
    <>
    <Seo {...seoField}/>
      <Ship />
    </>
  )
}
