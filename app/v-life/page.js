import React from 'react'
import Vlife from "../../components/VLifeComponents/vlife"
import Footer from "../../components/VLifeComponents/Footer"
import Seo from "../../components/Seo/Seo"
const seoField = {
  title: "V-Life: Empowering Rural India with Tailored Financial Solutions",
    description:
      "V-Life works to provide farmers and Farmer Producer Organisations (FPOs) with access to finance and livelihood support, fostering sustainable growth and resilience.",
  path: "v-life",
  metaImage: "/social.png",
  pageType: "WebSite",
};


export default function page() {
  return (
    <>
    <Seo {...seoField}/>
      <Vlife />
      <Footer />
    </>
  )
}