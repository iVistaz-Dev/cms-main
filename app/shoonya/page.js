"use client"
import React, { useRef, useEffect } from "react"
import Banner from "../../components/ShoonyaComponents/Banner"
import Section from "../../components/ShoonyaComponents/Section1NetZero"
import Footer from "../../components/ShoonyaComponents/Footer"
import AOS from "aos"
import "aos/dist/aos.css"
import Seo from "../../components/Seo/Seo"


const seoField = {
  title: "Empowering MSMEs: Net Zero Solutions for Sustainable Growth",
    description:
      "Explore innovative Net Zero solutions tailored for MSMEs with Shoonya. Achieve sustainability goals and economic growth with our cutting-edge solutions for small and medium enterprises",
  path: "shoonya",
  metaImage: "/social.png",
  pageType: "WebSite",
}
export default function page() {

  useEffect(() => {
    AOS.init({
      delay: 0, // values from 0 to 3000, with step 50ms
      duration: 400, // values from 0 to 3000, with step 50ms
      easing: "ease",
    })
  })

  return (
    <div>
      <Seo {...seoField}/>
      <Banner />
      <Section />
      <Footer />
    </div>
  )
}
